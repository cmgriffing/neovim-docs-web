---
title:  Pi_netrw
layout: ../../layouts/MainLayout.astro
---

  <a name="pi_netrw.txt"></a><a name="netrw-copyright"></a><h1> Pi_netrw</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/pi_netrw.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">	    ------------------------------------------------
	    NETRW REFERENCE MANUAL    by Charles E. Campbell
	    ------------------------------------------------
Author:  Charles E. Campbell  &lt;NcampObell@SdrPchip.AorgM-NOSPAM&gt;
	  (remove NOSPAM from Campbell's email first)</div>
<div class="old-help-para">Copyright: Copyright (C) 2017 Charles E Campbell
	The VIM LICENSE applies to the files in this package, including
	netrw.vim, pi_netrw.txt, netrwFileHandlers.vim, netrwSettings.vim, and
	syntax/netrw.vim.  Like anything else that's free, netrw.vim and its
	associated files are providedas is* and comes with no warranty of
	any kind, either expressed or implied.  No guarantees of
	merchantability.  No guarantees of suitability for any purpose.  By
	using this plugin, you agree that in no event will the copyright
	holder be liable for any damages resulting from the use of this
	software. Use at your own risk!</div>
<div class="old-help-para">		<a name="netrw"></a><code class="help-tag-right">netrw</code>
		<a name="dav"></a><code class="help-tag-right">dav</code>    <a name="ftp"></a><code class="help-tag">ftp</code>    <a name="netrw-file"></a><code class="help-tag">netrw-file</code>  <a name="rcp"></a><code class="help-tag">rcp</code>    <a name="scp"></a><code class="help-tag">scp</code>
		<a name="davs"></a><code class="help-tag-right">davs</code>   <a name="http"></a><code class="help-tag">http</code>   <a name="netrw.vim"></a><code class="help-tag">netrw.vim</code>   <a name="rsync"></a><code class="help-tag">rsync</code>  <a name="sftp"></a><code class="help-tag">sftp</code>
		<a name="fetch"></a><code class="help-tag-right">fetch</code>  <a name="network"></a><code class="help-tag">network</code></div>
<div class="old-help-para"><h2 class="help-heading">1. Contents<span class="help-heading-tags">						<a name="netrw-contents"></a><span class="help-tag">netrw-contents</span> {{{1</span></h2></div>
<div class="old-help-para">1.  Contents..............................................|netrw-contents|
2.  Starting With Netrw...................................|netrw-start|
3.  Netrw Reference.......................................|netrw-ref|
      EXTERNAL APPLICATIONS AND PROTOCOLS.................|netrw-externapp|
      READING.............................................|netrw-read|
      WRITING.............................................|netrw-write|
      SOURCING............................................|netrw-source|
      DIRECTORY LISTING...................................|netrw-dirlist|
      CHANGING THE USERID AND PASSWORD....................|netrw-chgup|
      VARIABLES AND SETTINGS..............................|netrw-variables|
      PATHS...............................................|netrw-path|
4.  Network-Oriented File Transfer........................|netrw-xfer|
      NETRC...............................................|netrw-netrc|
      PASSWORD............................................|netrw-passwd|
5.  Activation............................................|netrw-activate|
6.  Transparent Remote File Editing.......................|netrw-transparent|
7.  Ex Commands...........................................|netrw-ex|
8.  Variables and Options.................................|netrw-variables|
9.  Browsing..............................................|netrw-browse|
      Introduction To Browsing............................|netrw-intro-browse|
      Quick Reference: Maps...............................|netrw-browse-maps|
      Quick Reference: Commands...........................|netrw-browse-cmds|
      Banner Display......................................|netrw-I|
      Bookmarking A Directory.............................|netrw-mb|
      Browsing............................................|netrw-cr|
      Squeezing the Current Tree-Listing Directory........|netrw-s-cr|
      Browsing With A Horizontally Split Window...........|netrw-o|
      Browsing With A New Tab.............................|netrw-t|
      Browsing With A Vertically Split Window.............|netrw-v|
      Change File Permission..............................|netrw-gp|
      Change Listing Style.(thin wide long tree)..........|netrw-i|
      Changing To A Bookmarked Directory..................|netrw-gb|
      Changing To A Predecessor Directory.................|netrw-u|
      Changing To A Successor Directory...................|netrw-U|
      Customizing Browsing With A Special Handler.........|netrw-x|
      Deleting Bookmarks..................................|netrw-mB|
      Deleting Files Or Directories.......................|netrw-D|
      Directory Exploring Commands........................|netrw-explore|
      Exploring With Stars and Patterns...................|netrw-star|
      Displaying Information About File...................|netrw-qf|
      Edit File Or Directory Hiding List..................|netrw-ctrl-h|
      Editing The Sorting Sequence........................|netrw-S|
      Forcing treatment as a file or directory............|netrw-gd| <a href="/neovim-docs-web/en/pi_netrw#netrw-gf">netrw-gf</a>
      Going Up............................................|netrw--|
      Hiding Files Or Directories.........................|netrw-a|
      Improving Browsing..................................|netrw-ssh-hack|
      Listing Bookmarks And History.......................|netrw-qb|
      Making A New Directory..............................|netrw-d|
      Making The Browsing Directory The Current Directory.|netrw-cd|
      Marking Files.......................................|netrw-mf|
      Unmarking Files.....................................|netrw-mF|
      Marking Files By Location List......................|netrw-qL|
      Marking Files By QuickFix List......................|netrw-qF|
      Marking Files By Regular Expression.................|netrw-mr|
      Marked Files: Arbitrary Shell Command...............|netrw-mx|
      Marked Files: Arbitrary Shell Command, En Bloc......|netrw-mX|
      Marked Files: Arbitrary Vim Command.................|netrw-mv|
      Marked Files: Argument List.........................|netrw-ma| <a href="/neovim-docs-web/en/pi_netrw#netrw-mA">netrw-mA</a>
      Marked Files: Buffer List...........................|netrw-cb| <a href="/neovim-docs-web/en/pi_netrw#netrw-cB">netrw-cB</a>
      Marked Files: Compression And Decompression.........|netrw-mz|
      Marked Files: Copying...............................|netrw-mc|
      Marked Files: Diff..................................|netrw-md|
      Marked Files: Editing...............................|netrw-me|
      Marked Files: Grep..................................|netrw-mg|
      Marked Files: Hiding and Unhiding by Suffix.........|netrw-mh|
      Marked Files: Moving................................|netrw-mm|
      Marked Files: Printing..............................|netrw-mp|
      Marked Files: Sourcing..............................|netrw-ms|
      Marked Files: Setting the Target Directory..........|netrw-mt|
      Marked Files: Tagging...............................|netrw-mT|
      Marked Files: Target Directory Using Bookmarks......|netrw-Tb|
      Marked Files: Target Directory Using History........|netrw-Th|
      Marked Files: Unmarking.............................|netrw-mu|
      Netrw Browser Variables.............................|netrw-browser-var|
      Netrw Browsing And Option Incompatibilities.........|netrw-incompatible|
      Netrw Settings Window...............................|netrw-settings-window|
      Obtaining A File....................................|netrw-O|
      Preview Window......................................|netrw-p|
      Previous Window.....................................|netrw-P|
      Refreshing The Listing..............................|netrw-ctrl-l|
      Reversing Sorting Order.............................|netrw-r|
      Renaming Files Or Directories.......................|netrw-R|
      Selecting Sorting Style.............................|netrw-s|
      Setting Editing Window..............................|netrw-C|
10. Problems and Fixes....................................|netrw-problems|
11. Debugging Netrw Itself................................|netrw-debug|
12. History...............................................|netrw-history|
13. Todo..................................................|netrw-todo|
14. Credits...............................................|netrw-credits|</div>
<div class="old-help-para"><h2 class="help-heading">2. Starting With Netrw<span class="help-heading-tags">					<a name="netrw-start"></a><span class="help-tag">netrw-start</span> {{{1</span></h2></div>
<div class="old-help-para">Netrw makes reading files, writing files, browsing over a network, and
local browsing easy!  First, make sure that you have plugins enabled, so
you'll need to have at least the following in your &lt;.vimrc&gt;:
(or see <a href="/neovim-docs-web/en/pi_netrw#netrw-activate">netrw-activate</a>)<pre>set nocp                    " 'compatible' is not set
filetype plugin on          " plugins are enabled</pre></div>
<div class="old-help-para">(see <a href="/neovim-docs-web/en/vim_diff#'cp'">'cp'</a> and <a href="/neovim-docs-web/en/filetype#%3Afiletype-plugin-on">:filetype-plugin-on</a>)</div>
<div class="old-help-para">Netrw supports "transparent" editing of files on other machines using urls
(see <a href="/neovim-docs-web/en/pi_netrw#netrw-transparent">netrw-transparent</a>). As an example of this, let's assume you have an
account on some other machine; if you can use scp, try:<pre>vim scp://hostname/path/to/file</pre></div>
<div class="old-help-para">Want to make ssh/scp easier to use? Check out <a href="/neovim-docs-web/en/pi_netrw#netrw-ssh-hack">netrw-ssh-hack</a>!</div>
<div class="old-help-para">So, what if you have ftp, not ssh/scp?  That's easy, too; try<pre>vim ftp://hostname/path/to/file</pre></div>
<div class="old-help-para">Want to make ftp simpler to use?  See if your ftp supports a file called</div>
<div class="old-help-para">.netrc&gt; -- typically it goes in your home directory, has read/write
permissions for only the user to read (ie. not group, world, other, etc),
and has lines resembling<pre>machine HOSTNAME login USERID password "PASSWORD"
machine HOSTNAME login USERID password "PASSWORD"
...
default          login USERID password "PASSWORD"</pre></div>
<div class="old-help-para">Windows' ftp doesn't support .netrc; however, one may have in one's .vimrc:<pre>let g:netrw_ftp_cmd= 'c:\Windows\System32\ftp -s:C:\Users\MyUserName\MACHINE'</pre></div>
<div class="old-help-para">Netrw will substitute the host's machine name for "MACHINE" from the URL it is
attempting to open, and so one may specify<pre>userid
password</pre>
for each site in a separate file: c:\Users\MyUserName\MachineName.</div>
<div class="old-help-para">Now about browsing -- when you just want to look around before editing a
file.  For browsing on your current host, just "edit" a directory:<pre>vim .
vim /home/userid/path</pre></div>
<div class="old-help-para">For browsing on a remote host, "edit" a directory (but make sure that
the directory name is followed by a "/"):<pre>vim scp://hostname/
vim ftp://hostname/path/to/dir/</pre></div>
<div class="old-help-para">See <a href="/neovim-docs-web/en/pi_netrw#netrw-browse">netrw-browse</a> for more!</div>
<div class="old-help-para">There are more protocols supported by netrw than just scp and ftp, too: see the
next section, <a href="/neovim-docs-web/en/pi_netrw#netrw-externapp">netrw-externapp</a>, on how to use these external applications with
netrw and vim.</div>
<div class="old-help-para"><h3 class="help-heading">PREVENTING LOADING<span class="help-heading-tags">					<a name="netrw-noload"></a><span class="help-tag">netrw-noload</span></span></h3></div>
<div class="old-help-para">If you want to use plugins, but for some reason don't wish to use netrw, then
you need to avoid loading both the plugin and the autoload portions of netrw.
You may do so by placing the following two lines in your &lt;.vimrc&gt;:<pre>:let g:loaded_netrw       = 1
:let g:loaded_netrwPlugin = 1</pre></div>
<div class="old-help-para"><h2 class="help-heading">3. Netrw Reference<span class="help-heading-tags">					<a name="netrw-ref"></a><span class="help-tag">netrw-ref</span> {{{1</span></h2></div>
<div class="old-help-para">   Netrw supports several protocols in addition to scp and ftp as mentioned
   in <a href="/neovim-docs-web/en/pi_netrw#netrw-start">netrw-start</a>.  These include dav, fetch, http,... well, just look
   at the list in <a href="/neovim-docs-web/en/pi_netrw#netrw-externapp">netrw-externapp</a>.  Each protocol is associated with a
   variable which holds the default command supporting that protocol.</div>
<div class="old-help-para"><h3 class="help-heading">EXTERNAL APPLICATIONS AND PROTOCOLS<span class="help-heading-tags">			<a name="netrw-externapp"></a><span class="help-tag">netrw-externapp</span> {{{2</span></h3></div>
<div class="old-help-para">	Protocol  Variable	       Default Value
	--------  ----------------     -------------
	   dav:   <a name="g%3Anetrw_dav_cmd"></a><code class="help-tag">g:netrw_dav_cmd</code>      = "cadaver"    if cadaver is executable
	   dav:   g:netrw_dav_cmd      = "curl -o"    elseif curl is available
	 fetch:   <a name="g%3Anetrw_fetch_cmd"></a><code class="help-tag">g:netrw_fetch_cmd</code>    = "fetch -o"   if fetch is available
	   ftp:   <a name="g%3Anetrw_ftp_cmd"></a><code class="help-tag">g:netrw_ftp_cmd</code>      = "ftp"
	  http:   <a name="g%3Anetrw_http_cmd"></a><code class="help-tag">g:netrw_http_cmd</code>     = "elinks"     if   elinks  is available
	  http:   g:netrw_http_cmd     = "links"      elseif links is available
	  http:   g:netrw_http_cmd     = "curl"       elseif curl  is available
	  http:   g:netrw_http_cmd     = "wget"       elseif wget  is available
          http:   g:netrw_http_cmd     = "fetch"      elseif fetch is available
	  http:   <a name="g%3Anetrw_http_put_cmd"></a><code class="help-tag">g:netrw_http_put_cmd</code> = "curl -T"
	   rcp:   <a name="g%3Anetrw_rcp_cmd"></a><code class="help-tag">g:netrw_rcp_cmd</code>      = "rcp"
	 rsync:   <a name="g%3Anetrw_rsync_cmd"></a><code class="help-tag">g:netrw_rsync_cmd</code>    = "rsync"     (see <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_rsync_sep">g:netrw_rsync_sep</a>)
	   scp:   <a name="g%3Anetrw_scp_cmd"></a><code class="help-tag">g:netrw_scp_cmd</code>      = "scp -q"
	  sftp:   <a name="g%3Anetrw_sftp_cmd"></a><code class="help-tag">g:netrw_sftp_cmd</code>     = "sftp"
	  file:   <a name="g%3Anetrw_file_cmd"></a><code class="help-tag">g:netrw_file_cmd</code>     = "elinks" or "links"</div>
<div class="old-help-para">	<a name="g%3Anetrw_http_xcmd"></a><code class="help-tag">g:netrw_http_xcmd</code> : the option string for <a href="http://..">http://..</a>. protocols are
	specified via this variable and may be independently overridden.  By
	default, the option arguments for the http-handling commands are:<pre>elinks : "-source &gt;"
links  : "-dump &gt;"
curl   : "-L -o"
wget   : "-q -O"
fetch  : "-o"</pre></div>
<div class="old-help-para">	For example, if your system has elinks, and you'd rather see the
	page using an attempt at rendering the text, you may wish to have<pre>let g:netrw_http_xcmd= "-dump &gt;"</pre></div>
<div class="old-help-para">	in your .vimrc.</div>
<div class="old-help-para">	g:netrw_http_put_cmd: this option specifies both the executable and
	any needed options.  This command does a PUT operation to the url.</div>
<div class="old-help-para"><h3 class="help-heading">READING<span class="help-heading-tags">						<a name="netrw-read"></a><span class="help-tag">netrw-read</span> <a name="netrw-nread"></a><span class="help-tag">netrw-nread</span> {{{2</span></h3></div>
<div class="old-help-para">	Generally, one may just use the URL notation with a normal editing
	command, such as<pre>:e ftp://[user@]machine/path</pre></div>
<div class="old-help-para">	Netrw also provides the Nread command:</div>
<div class="old-help-para">	:Nread ?					give help
	:Nread "machine:path"				uses rcp
	:Nread "machine path"				uses ftp w/ &lt;.netrc&gt;
	:Nread "machine id password path"		uses ftp
	:Nread "dav://machine[:port]/path"		uses cadaver
	:Nread "fetch://[user@]machine/path"		uses fetch
	:Nread "ftp://[user@]machine[[:#]port]/path"	uses ftp w/ &lt;.netrc&gt;
	:Nread "http://[user@]machine/path"		uses http  uses wget
	:Nread "rcp://[user@]machine/path"		uses rcp
	:Nread "rsync://[user@]machine[:port]/path"	uses rsync
	:Nread "scp://[user@]machine[[:#]port]/path"	uses scp
	:Nread "sftp://[user@]machine/path"		uses sftp</div>
<div class="old-help-para"><h3 class="help-heading">WRITING<span class="help-heading-tags">					<a name="netrw-write"></a><span class="help-tag">netrw-write</span> <a name="netrw-nwrite"></a><span class="help-tag">netrw-nwrite</span> {{{2</span></h3></div>
<div class="old-help-para">	One may just use the URL notation with a normal file writing
	command, such as<pre>:w ftp://[user@]machine/path</pre></div>
<div class="old-help-para">	Netrw also provides the Nwrite command:</div>
<div class="old-help-para">	:Nwrite ?					give help
	:Nwrite "machine:path"				uses rcp
	:Nwrite "machine path"				uses ftp w/ &lt;.netrc&gt;
	:Nwrite "machine id password path"		uses ftp
	:Nwrite "dav://machine[:port]/path"		uses cadaver
	:Nwrite "ftp://[user@]machine[[:#]port]/path"	uses ftp w/ &lt;.netrc&gt;
	:Nwrite "rcp://[user@]machine/path"		uses rcp
	:Nwrite "rsync://[user@]machine[:port]/path"	uses rsync
	:Nwrite "scp://[user@]machine[[:#]port]/path"	uses scp
	:Nwrite "sftp://[user@]machine/path"		uses sftp
	http: not supported!</div>
<div class="old-help-para"><h3 class="help-heading">SOURCING<span class="help-heading-tags">					<a name="netrw-source"></a><span class="help-tag">netrw-source</span> {{{2</span></h3></div>
<div class="old-help-para">	One may just use the URL notation with the normal file sourcing
	command, such as<pre>:so ftp://[user@]machine/path</pre></div>
<div class="old-help-para">	Netrw also provides the Nsource command:</div>
<div class="old-help-para">	:Nsource ?					give help
	:Nsource "dav://machine[:port]/path"		uses cadaver
	:Nsource "fetch://[user@]machine/path"		uses fetch
	:Nsource "ftp://[user@]machine[[:#]port]/path"	uses ftp w/ &lt;.netrc&gt;
	:Nsource "http://[user@]machine/path"		uses http  uses wget
	:Nsource "rcp://[user@]machine/path"		uses rcp
	:Nsource "rsync://[user@]machine[:port]/path"	uses rsync
	:Nsource "scp://[user@]machine[[:#]port]/path"	uses scp
	:Nsource "sftp://[user@]machine/path"		uses sftp</div>
<div class="old-help-para"><h3 class="help-heading">DIRECTORY LISTING<span class="help-heading-tags">		<a name="netrw-trailingslash"></a><span class="help-tag">netrw-trailingslash</span> <a name="netrw-dirlist"></a><span class="help-tag">netrw-dirlist</span> {{{2</span></h3></div>
<div class="old-help-para">	One may browse a directory to get a listing by simply attempting to
	edit the directory:<pre>:e scp://[user]@hostname/path/
:e ftp://[user]@hostname/path/</pre></div>
<div class="old-help-para">	For remote directory listings (ie. those using scp or ftp), that
	trailing "/" is necessary (the slash tells netrw to treat the argument
	as a directory to browse instead of as a file to download).</div>
<div class="old-help-para">	The Nread command may also be used to accomplish this (again, that
	trailing slash is necessary):<pre>:Nread [protocol]://[user]@hostname/path/</pre></div>
<div class="old-help-para">					<a name="netrw-login"></a><code class="help-tag-right">netrw-login</code> <a name="netrw-password"></a><code class="help-tag">netrw-password</code>
<h3 class="help-heading">CHANGING USERID AND PASSWORD<span class="help-heading-tags">		<a name="netrw-chgup"></a><span class="help-tag">netrw-chgup</span> <a name="netrw-userpass"></a><span class="help-tag">netrw-userpass</span> {{{2</span></h3></div>
<div class="old-help-para">	Attempts to use ftp will prompt you for a user-id and a password.
	These will be saved in global variables <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_uid">g:netrw_uid</a> and
	<a href="/neovim-docs-web/en/pi_netrw#s%3Anetrw_passwd">s:netrw_passwd</a>; subsequent use of ftp will re-use those two strings,
	thereby simplifying use of ftp.  However, if you need to use a
	different user id and/or password, you'll want to call <a href="/neovim-docs-web/en/pi_netrw#NetUserPass()">NetUserPass()</a>
	first.  To work around the need to enter passwords, check if your ftp
	supports a &lt;.netrc&gt; file in your home directory.  Also see
	<a href="/neovim-docs-web/en/pi_netrw#netrw-passwd">netrw-passwd</a> (and if you're using ssh/scp hoping to figure out how
	to not need to use passwords for scp, look at <a href="/neovim-docs-web/en/pi_netrw#netrw-ssh-hack">netrw-ssh-hack</a>).</div>
<div class="old-help-para">	:NetUserPass [uid [password]]		-- prompts as needed
	:call NetUserPass()			-- prompts for uid and password
	:call NetUserPass("uid")		-- prompts for password
	:call NetUserPass("uid","password")	-- sets global uid and password</div>
<div class="old-help-para">(Related topics: <a href="/neovim-docs-web/en/pi_netrw#ftp">ftp</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-userpass">netrw-userpass</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-start">netrw-start</a>)</div>
<div class="old-help-para"><h3 class="help-heading">NETRW VARIABLES AND SETTINGS<span class="help-heading-tags">				<a name="netrw-variables"></a><span class="help-tag">netrw-variables</span> {{{2</span></h3>    (Also see:
    <a href="/neovim-docs-web/en/pi_netrw#netrw-browser-var">netrw-browser-var</a>     : netrw browser option variables
    <a href="/neovim-docs-web/en/pi_netrw#netrw-protocol">netrw-protocol</a>        : file transfer protocol option variables
    <a href="/neovim-docs-web/en/pi_netrw#netrw-settings">netrw-settings</a>        : additional file transfer options
    <a href="/neovim-docs-web/en/pi_netrw#netrw-browser-options">netrw-browser-options</a> : these options affect browsing directories
    )</div>
<div class="old-help-para">Netrw provides a lot of variables which allow you to customize netrw to your
preferences.  One way to look at them is via the command :NetrwSettings (see
<a href="/neovim-docs-web/en/pi_netrw#netrw-settings">netrw-settings</a>) which will display your current netrw settings.  Most such
settings are described below, in <a href="/neovim-docs-web/en/pi_netrw#netrw-browser-options">netrw-browser-options</a>, and in
<a href="/neovim-docs-web/en/pi_netrw#netrw-externapp">netrw-externapp</a>:</div>
<div class="old-help-para"> <a name="b%3Anetrw_lastfile"></a><code class="help-tag">b:netrw_lastfile</code>  	last file Network-read/written retained on a
			per-buffer basis (supports plain :Nw )</div>
<div class="old-help-para"> <a name="g%3Anetrw_bufsettings"></a><code class="help-tag">g:netrw_bufsettings</code>  	the settings that netrw buffers have
			(default) noma nomod nonu nowrap ro nobl</div>
<div class="old-help-para"> <a name="g%3Anetrw_chgwin"></a><code class="help-tag">g:netrw_chgwin</code>  	specifies a window number where subsequent file edits
			will take place.  (also see <a href="/neovim-docs-web/en/pi_netrw#netrw-C">netrw-C</a>)
			(default) -1</div>
<div class="old-help-para"> <a name="g%3ANetrw_funcref"></a><code class="help-tag">g:Netrw_funcref</code>  	specifies a function (or functions) to be called when
			netrw edits a file.  The file is first edited, and
			then the function reference (<a href="/neovim-docs-web/en/eval#Funcref">Funcref</a>) is called.
			This variable may also hold a <a href="/neovim-docs-web/en/eval#List">List</a> of Funcrefs.
			(default) not defined.  (the capital in g:Netrw...
			is required by its holding a function reference)
<pre>Example: place in .vimrc; affects all file opening
fun! MyFuncRef()
endfun
let g:Netrw_funcref= function("MyFuncRef")</pre></div>
<div class="old-help-para"> <a name="g%3ANetrw_UserMaps"></a><code class="help-tag">g:Netrw_UserMaps</code>  	specifies a function or <a href="/neovim-docs-web/en/eval#List">List</a> of functions which can
			be used to set up user-specified maps and functionality.
			See <a href="/neovim-docs-web/en/pi_netrw#netrw-usermaps">netrw-usermaps</a></div>
<div class="old-help-para"> <a name="g%3Anetrw_ftp"></a><code class="help-tag">g:netrw_ftp</code>  		   if it doesn't exist, use default ftp
			=0 use default ftp		       (uid password)
			=1 use alternate ftp method	  (user uid password)
			   If you're having trouble with ftp, try changing the
			   value of this variable to see if the alternate ftp
			   method works for your setup.</div>
<div class="old-help-para"> <a name="g%3Anetrw_ftp_options"></a><code class="help-tag">g:netrw_ftp_options</code>     Chosen by default, these options are supposed to
			 turn interactive prompting off and to restrain ftp
			 from attempting auto-login upon initial connection.
			 However, it appears that not all ftp implementations
			 support this (ex. ncftp).
		        ="-i -n"</div>
<div class="old-help-para"> <a name="g%3Anetrw_ftpextracmd"></a><code class="help-tag">g:netrw_ftpextracmd</code>  	default: doesn't exist
			If this variable exists, then any string it contains
			will be placed into the commands set to your ftp
			client.  As an example:
			   ="passive"</div>
<div class="old-help-para"> <a name="g%3Anetrw_ftpmode"></a><code class="help-tag">g:netrw_ftpmode</code>  	="binary"				    (default)
			="ascii"</div>
<div class="old-help-para"> <a name="g%3Anetrw_ignorenetrc"></a><code class="help-tag">g:netrw_ignorenetrc</code>  	=0 (default for linux, cygwin)
			=1 If you have a &lt;.netrc&gt; file but it doesn't work and
			   you want it ignored, then set this variable as
			   shown. (default for Windows + cmd.exe)</div>
<div class="old-help-para"> <a name="g%3Anetrw_menu"></a><code class="help-tag">g:netrw_menu</code>  		=0 disable netrw's menu
			=1 (default) netrw's menu enabled</div>
<div class="old-help-para"> <a name="g%3Anetrw_nogx"></a><code class="help-tag">g:netrw_nogx</code>  		if this variable exists, then the "gx" map will not
			be available (see <a href="/neovim-docs-web/en/pi_netrw#netrw-gx">netrw-gx</a>)</div>
<div class="old-help-para"> <a name="g%3Anetrw_uid"></a><code class="help-tag">g:netrw_uid</code>  		(ftp) user-id,      retained on a per-vim-session basis
 <a name="s%3Anetrw_passwd"></a><code class="help-tag">s:netrw_passwd</code>  	(ftp) password,     retained on a per-vim-session basis</div>
<div class="old-help-para"> <a name="g%3Anetrw_preview"></a><code class="help-tag">g:netrw_preview</code>  	=0 (default) preview window shown in a horizontally
			   split window
			=1 preview window shown in a vertically split window.
			   Also affects the "previous window" (see <a href="/neovim-docs-web/en/pi_netrw#netrw-P">netrw-P</a>)
			   in the same way.
			The <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_alto">g:netrw_alto</a> variable may be used to provide
			additional splitting control:
				g:netrw_preview g:netrw_alto result
				         0             0     <a href="/neovim-docs-web/en/windows#%3Aaboveleft">:aboveleft</a>
				         0             1     <a href="/neovim-docs-web/en/windows#%3Abelowright">:belowright</a>
				         1             0     <a href="/neovim-docs-web/en/windows#%3Atopleft">:topleft</a>
				         1             1     <a href="/neovim-docs-web/en/windows#%3Abotright">:botright</a>
			To control sizing, see <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_winsize">g:netrw_winsize</a></div>
<div class="old-help-para"> <a name="g%3Anetrw_scpport"></a><code class="help-tag">g:netrw_scpport</code>  	= "-P" : option to use to set port for scp
 <a name="g%3Anetrw_sshport"></a><code class="help-tag">g:netrw_sshport</code>  	= "-p" : option to use to set port for ssh</div>
<div class="old-help-para"> <a name="g%3Anetrw_sepchr"></a><code class="help-tag">g:netrw_sepchr</code>  	=\0xff
			=\0x01 for enc == euc-jp (and perhaps it should be for
			   others, too, please let me know)
			   Separates priority codes from filenames internally.
			   See <a href="/neovim-docs-web/en/pi_netrw#netrw-p12">netrw-p12</a>.</div>
<div class="old-help-para">  <a name="g%3Anetrw_silent"></a><code class="help-tag">g:netrw_silent</code>  	=0 : transfers done normally
			=1 : transfers done silently</div>
<div class="old-help-para"> <a name="g%3Anetrw_use_errorwindow"></a><code class="help-tag">g:netrw_use_errorwindow</code> =2: messages from netrw will use a popup window
			     Move the mouse and pause to remove the popup window.
			     (default value if popup windows are available)
			 =1 : messages from netrw will use a separate one
			      line window.  This window provides reliable
			      delivery of messages.
			     (default value if popup windows are not available)
			 =0 : messages from netrw will use echoerr ;
			      messages don't always seem to show up this
			      way, but one doesn't have to quit the window.</div>
<div class="old-help-para"> <a name="g%3Anetrw_win95ftp"></a><code class="help-tag">g:netrw_win95ftp</code>  	=1 if using Win95, will remove four trailing blank
			   lines that o/s's ftp "provides" on transfers
			=0 force normal ftp behavior (no trailing line removal)</div>
<div class="old-help-para"> <a name="g%3Anetrw_cygwin"></a><code class="help-tag">g:netrw_cygwin</code>  	=1 assume scp under windows is from cygwin. Also
			   permits network browsing to use ls with time and
			   size sorting (default if windows)
			=0 assume Windows' scp accepts windows-style paths
			   Network browsing uses dir instead of ls
			   This option is ignored if you're using unix</div>
<div class="old-help-para"> <a name="g%3Anetrw_use_nt_rcp"></a><code class="help-tag">g:netrw_use_nt_rcp</code>  	=0 don't use the rcp of WinNT, Win2000 and WinXP
			=1 use WinNT's rcp in binary mode         (default)</div>
<div class="old-help-para"><h3 class="help-heading">PATHS<span class="help-heading-tags">							<a name="netrw-path"></a><span class="help-tag">netrw-path</span> {{{2</span></h3></div>
<div class="old-help-para">Paths to files are generally user-directory relative for most protocols.
It is possible that some protocol will make paths relative to some
associated directory, however.
<pre>example:  vim scp://user@host/somefile
example:  vim scp://user@host/subdir1/subdir2/somefile</pre></div>
<div class="old-help-para">where "somefile" is in the "user"'s home directory.  If you wish to get a
file using root-relative paths, use the full path:
<pre>example:  vim scp://user@host//somefile
example:  vim scp://user@host//subdir1/subdir2/somefile</pre></div>
<div class="old-help-para"><h2 class="help-heading">4. Network-Oriented File Transfer<span class="help-heading-tags">			<a name="netrw-xfer"></a><span class="help-tag">netrw-xfer</span> {{{1</span></h2></div>
<div class="old-help-para">Network-oriented file transfer under Vim is implemented by a vim script
(&lt;netrw.vim&gt;) using plugin techniques.  It currently supports both reading and
writing across networks using rcp, scp, ftp or ftp+&lt;.netrc&gt;, scp, fetch,
dav/cadaver, rsync, or sftp.</div>
<div class="old-help-para">http is currently supported read-only via use of wget or fetch.</div>
<div class="old-help-para">&lt;netrw.vim&gt; is a standard plugin which acts as glue between Vim and the
various file transfer programs.  It uses autocommand events (BufReadCmd,
FileReadCmd, BufWriteCmd) to intercept reads/writes with url-like filenames.<pre>ex. vim ftp://hostname/path/to/file</pre></div>
<div class="old-help-para">The characters preceding the colon specify the protocol to use; in the
example, it's ftp.  The &lt;netrw.vim&gt; script then formulates a command or a
series of commands (typically ftp) which it issues to an external program
(ftp, scp, etc) which does the actual file transfer/protocol.  Files are read
from/written to a temporary file (under Unix/Linux, /tmp/...) which the
&lt;netrw.vim&gt; script will clean up.</div>
<div class="old-help-para">Now, a word about Jan Minář's "FTP User Name and Password Disclosure"; first,
ftp is not a secure protocol.  User names and passwords are transmitted "in
the clear" over the internet; any snooper tool can pick these up; this is not
a netrw thing, this is a ftp thing.  If you're concerned about this, please
try to use scp or sftp instead.</div>
<div class="old-help-para">Netrw re-uses the user id and password during the same vim session and so long
as the remote hostname remains the same.</div>
<div class="old-help-para">Jan seems to be a bit confused about how netrw handles ftp; normally multiple
commands are performed in a "ftp session", and he seems to feel that the
uid/password should only be retained over one ftp session.  However, netrw
does every ftp operation in a separate "ftp session"; so remembering the
uid/password for just one "ftp session" would be the same as not remembering
the uid/password at all.  IMHO this would rapidly grow tiresome as one
browsed remote directories, for example.</div>
<div class="old-help-para">On the other hand, thanks go to Jan M. for pointing out the many
vulnerabilities that netrw (and vim itself) had had in handling "crafted"
filenames.  The <a href="/neovim-docs-web/en/builtin#shellescape()">shellescape()</a> and <a href="/neovim-docs-web/en/builtin#fnameescape()">fnameescape()</a> functions were written in
response by Bram Moolenaar to handle these sort of problems, and netrw has
been modified to use them.  Still, my advice is, if the "filename" looks like
a vim command that you aren't comfortable with having executed, don't open it.</div>
<div class="old-help-para">				<a name="netrw-putty"></a><code class="help-tag-right">netrw-putty</code> <a name="netrw-pscp"></a><code class="help-tag">netrw-pscp</code> <a name="netrw-psftp"></a><code class="help-tag">netrw-psftp</code>
One may modify any protocol's implementing external application by setting a
variable (ex. scp uses the variable g:netrw_scp_cmd, which is defaulted to
"scp -q").  As an example, consider using PuTTY:<pre>let g:netrw_scp_cmd = '"c:\Program Files\PuTTY\pscp.exe" -q -batch'
let g:netrw_sftp_cmd= '"c:\Program Files\PuTTY\psftp.exe"'</pre></div>
<div class="old-help-para">(note: it has been reported that windows 7 with putty v0.6's "-batch" option
       doesn't work, so its best to leave it off for that system)</div>
<div class="old-help-para">See <a href="/neovim-docs-web/en/pi_netrw#netrw-p8">netrw-p8</a> for more about putty, pscp, psftp, etc.</div>
<div class="old-help-para">Ftp, an old protocol, seems to be blessed by numerous implementations.
Unfortunately, some implementations are noisy (ie., add junk to the end of the
file).  Thus, concerned users may decide to write a NetReadFixup() function
that will clean up after reading with their ftp.  Some Unix systems (ie.,
FreeBSD) provide a utility called "fetch" which uses the ftp protocol but is
not noisy and more convenient, actually, for &lt;netrw.vim&gt; to use.
Consequently, if "fetch" is available (ie. executable), it may be preferable
to use it for ftp://... based transfers.</div>
<div class="old-help-para">For rcp, scp, sftp, and http, one may use network-oriented file transfers
transparently; ie.
<pre>vim rcp://[user@]machine/path
vim scp://[user@]machine/path</pre></div>
<div class="old-help-para">If your ftp supports &lt;.netrc&gt;, then it too can be transparently used
if the needed triad of machine name, user id, and password are present in
that file.  Your ftp must be able to use the &lt;.netrc&gt; file on its own, however.
<pre>vim ftp://[user@]machine[[:#]portnumber]/path</pre></div>
<div class="old-help-para">Windows provides an ftp (typically c:\Windows\System32\ftp.exe) which uses
an option, -s:filename (filename can and probably should be a full path)
which contains ftp commands which will be automatically run whenever ftp
starts.  You may use this feature to enter a user and password for one site:<pre>userid
password</pre></div>
<div class="old-help-para">				<a name="netrw-windows-netrc"></a><code class="help-tag-right">netrw-windows-netrc</code>  <a name="netrw-windows-s"></a><code class="help-tag">netrw-windows-s</code>
If <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_ftp_cmd">g:netrw_ftp_cmd</a> contains -s:[path/]MACHINE, then (on Windows machines
only) netrw will substitute the current machine name requested for ftp
connections for MACHINE.  Hence one can have multiple machine.ftp files
containing login and password for ftp.  Example:<pre>let g:netrw_ftp_cmd= 'c:\Windows\System32\ftp -s:C:\Users\Myself\MACHINE'
vim ftp://myhost.somewhere.net/</pre>
will use a file<pre>C:\Users\Myself\myhost.ftp</pre></div>
<div class="old-help-para">Often, ftp will need to query the user for the userid and password.
The latter will be done "silently"; ie. asterisks will show up instead of
the actually-typed-in password.  Netrw will retain the userid and password
for subsequent read/writes from the most recent transfer so subsequent
transfers (read/write) to or from that machine will take place without
additional prompting.</div>
<div class="old-help-para">								<a name="netrw-urls"></a><code class="help-tag-right">netrw-urls</code>
  +=================================+============================+============+
  |  Reading                        | Writing                    |  Uses      |
  +=================================+============================+============+
  | DAV:                            |                            |            |
  |  dav://host/path                |                            | cadaver    |
  |  :Nread dav://host/path         | :Nwrite dav://host/path    | cadaver    |
  +---------------------------------+----------------------------+------------+
  | DAV + SSL:                      |                            |            |
  |  davs://host/path               |                            | cadaver    |
  |  :Nread davs://host/path        | :Nwrite davs://host/path   | cadaver    |
  +---------------------------------+----------------------------+------------+
  | FETCH:                          |                            |            |
  |  fetch://[user@]host/path       |                            |            |
  |  fetch://[user@]host:http/path  |  Not Available             | fetch      |
  |  :Nread fetch://[user@]host/path|                            |            |
  +---------------------------------+----------------------------+------------+
  | FILE:                           |                            |            |
  |  file:///*                      | file:///*                  |            |
  |  file://localhost/*             | file://localhost/*         |            |
  +---------------------------------+----------------------------+------------+
  | FTP:          (3)              |              (3)          |            |
  |  ftp://[user@]host/path         | ftp://[user@]host/path     | ftp  (2)  |
  |  :Nread ftp://host/path         | :Nwrite ftp://host/path    | ftp+.netrc |
  |  :Nread host path               | :Nwrite host path          | ftp+.netrc |
  |  :Nread host uid pass path      | :Nwrite host uid pass path | ftp        |
  +---------------------------------+----------------------------+------------+
  | HTTP: wget is executable: (4)  |                            |            |
  |  <a href="http://[user@">http://[user@</a>]host/path        |        Not Available       | wget       |
  +---------------------------------+----------------------------+------------+
  | HTTP: fetch is executable (4)  |                            |            |
  |  <a href="http://[user@">http://[user@</a>]host/path        |        Not Available       | fetch      |
  +---------------------------------+----------------------------+------------+
  | RCP:                            |                            |            |
  |  rcp://[user@]host/path         | rcp://[user@]host/path     | rcp        |
  +---------------------------------+----------------------------+------------+
  | RSYNC:                          |                            |            |
  |  rsync://[user@]host/path       | rsync://[user@]host/path   | rsync      |
  |  :Nread rsync://host/path       | :Nwrite rsync://host/path  | rsync      |
  |  :Nread rcp://host/path         | :Nwrite rcp://host/path    | rcp        |
  +---------------------------------+----------------------------+------------+
  | SCP:                            |                            |            |
  |  scp://[user@]host/path         | scp://[user@]host/path     | scp        |
  |  :Nread scp://host/path         | :Nwrite scp://host/path    | scp  (1)  |
  +---------------------------------+----------------------------+------------+
  | SFTP:                           |                            |            |
  |  sftp://[user@]host/path        | sftp://[user@]host/path    | sftp       |
  |  :Nread sftp://host/path        | :Nwrite sftp://host/path   | sftp  (1) |
  +=================================+============================+============+</div>
<div class="old-help-para">	(1) For an absolute path use scp://machine//path.</div>
<div class="old-help-para">	(2) if &lt;.netrc&gt; is present, it is assumed that it will
	work with your ftp client.  Otherwise the script will
	prompt for user-id and password.</div>
<div class="old-help-para">        (3) for ftp, "machine" may be machine#port or machine:port
	if a different port is needed than the standard ftp port</div>
<div class="old-help-para">	(4) for <a href="/neovim-docs-web/en/http:...,">http:...,</a> if wget is available it will be used.  Otherwise,
	if fetch is available it will be used.</div>
<div class="old-help-para">Both the :Nread and the :Nwrite ex-commands can accept multiple filenames.</div>
<div class="old-help-para"><h3 class="help-heading">NETRC<span class="help-heading-tags">							<a name="netrw-netrc"></a><span class="help-tag">netrw-netrc</span></span></h3></div>
<div class="old-help-para">The &lt;.netrc&gt; file, typically located in your home directory, contains lines
therein which map a hostname (machine name) to the user id and password you
prefer to use with it.</div>
<div class="old-help-para">The typical syntax for lines in a &lt;.netrc&gt; file is given as shown below.
Ftp under Unix usually supports &lt;.netrc&gt;; ftp under Windows usually doesn't.
<pre>machine {full machine name} login {user-id} password "{password}"
default login {user-id} password "{password}"</pre>
Your ftp client must handle the use of &lt;.netrc&gt; on its own, but if the</div>
<div class="old-help-para">.netrc&gt; file exists, an ftp transfer will not ask for the user-id or
password.</div>
<div class="old-help-para">	Note:
	Since this file contains passwords, make very sure nobody else can
	read this file!  Most programs will refuse to use a .netrc that is
	readable for others.  Don't forget that the system administrator can
	still read the file!  Ie. for Linux/Unix: chmod 600 .netrc</div>
<div class="old-help-para">Even though Windows' ftp clients typically do not support .netrc, netrw has
a work-around: see <a href="/neovim-docs-web/en/pi_netrw#netrw-windows-s">netrw-windows-s</a>.</div>
<div class="old-help-para"><h3 class="help-heading">PASSWORD<span class="help-heading-tags">						<a name="netrw-passwd"></a><span class="help-tag">netrw-passwd</span></span></h3></div>
<div class="old-help-para">The script attempts to get passwords for ftp invisibly using <a href="/neovim-docs-web/en/builtin#inputsecret()">inputsecret()</a>,
a built-in Vim function.  See <a href="/neovim-docs-web/en/pi_netrw#netrw-userpass">netrw-userpass</a> for how to change the password
after one has set it.</div>
<div class="old-help-para">Unfortunately there doesn't appear to be a way for netrw to feed a password to
scp.  Thus every transfer via scp will require re-entry of the password.
However, <a href="/neovim-docs-web/en/pi_netrw#netrw-ssh-hack">netrw-ssh-hack</a> can help with this problem.</div>
<div class="old-help-para"><h2 class="help-heading">5. Activation<span class="help-heading-tags">						<a name="netrw-activate"></a><span class="help-tag">netrw-activate</span> {{{1</span></h2></div>
<div class="old-help-para">Network-oriented file transfers are available by default whenever Vim's
<a href="/neovim-docs-web/en/vim_diff#'nocompatible'">'nocompatible'</a> mode is enabled.  Netrw's script files reside in your
system's plugin, autoload, and syntax directories; just the
plugin/netrwPlugin.vim script is sourced automatically whenever you bring up
vim.  The main script in autoload/netrw.vim is only loaded when you actually
use netrw.  I suggest that, at a minimum, you have at least the following in
your &lt;.vimrc&gt; customization file:<pre>set nocp
if version &gt;= 600
  filetype plugin indent on
endif</pre></div>
<div class="old-help-para">By also including the following lines in your .vimrc, one may have netrw
immediately activate when using [g]vim without any filenames, showing the
current directory:<pre>" Augroup VimStartup:
augroup VimStartup
  au!
  au VimEnter * if expand("%") == "" | e . | endif
augroup END</pre></div>
<div class="old-help-para"><h2 class="help-heading">6. Transparent Remote File Editing<span class="help-heading-tags">		<a name="netrw-transparent"></a><span class="help-tag">netrw-transparent</span> {{{1</span></h2></div>
<div class="old-help-para">Transparent file transfers occur whenever a regular file read or write
(invoked via an <a href="/neovim-docs-web/en/autocmd#%3Aautocmd">:autocmd</a> for <a href="/neovim-docs-web/en/autocmd#BufReadCmd">BufReadCmd</a>, <a href="/neovim-docs-web/en/autocmd#BufWriteCmd">BufWriteCmd</a>, or <a href="/neovim-docs-web/en/autocmd#SourceCmd">SourceCmd</a>
events) is made.  Thus one may read, write, or source  files across networks
just as easily as if they were local files!<pre>vim ftp://[user@]machine/path
...
:wq</pre>
See <a href="/neovim-docs-web/en/pi_netrw#netrw-activate">netrw-activate</a> for more on how to encourage your vim to use plugins
such as netrw.</div>
<div class="old-help-para">For password-free use of scp:, see <a href="/neovim-docs-web/en/pi_netrw#netrw-ssh-hack">netrw-ssh-hack</a>.</div>
<div class="old-help-para"><h2 class="help-heading">7. Ex Commands<span class="help-heading-tags">						<a name="netrw-ex"></a><span class="help-tag">netrw-ex</span> {{{1</span></h2></div>
<div class="old-help-para">The usual read/write commands are supported.  There are also a few
additional commands available.  Often you won't need to use Nwrite or
Nread as shown in <a href="/neovim-docs-web/en/pi_netrw#netrw-transparent">netrw-transparent</a> (ie. simply use<pre>:e URL
:r URL
:w URL</pre>
instead, as appropriate) -- see <a href="/neovim-docs-web/en/pi_netrw#netrw-urls">netrw-urls</a>.  In the explanations
below, a <code>{netfile}</code> is a URL to a remote file.</div>
<div class="old-help-para">						<a name="%3ANwrite"></a><code class="help-tag-right">:Nwrite</code>  <a name="%3ANw"></a><code class="help-tag">:Nw</code>
:[range]Nw[rite]	Write the specified lines to the current
		file as specified in b:netrw_lastfile.
		(related: <a href="/neovim-docs-web/en/pi_netrw#netrw-nwrite">netrw-nwrite</a>)</div>
<div class="old-help-para">:[range]Nw[rite] <code>{netfile}</code> [{netfile}]...
		Write the specified lines to the <code>{netfile}</code>.</div>
<div class="old-help-para">						<a name="%3ANread"></a><code class="help-tag-right">:Nread</code>   <a name="%3ANr"></a><code class="help-tag">:Nr</code>
:Nr[ead]	Read the lines from the file specified in b:netrw_lastfile
		into the current buffer.  (related: <a href="/neovim-docs-web/en/pi_netrw#netrw-nread">netrw-nread</a>)</div>
<div class="old-help-para">:Nr[ead] <code>{netfile}</code> <code>{netfile}</code>...
		Read the <code>{netfile}</code> after the current line.</div>
<div class="old-help-para">						<a name="%3ANsource"></a><code class="help-tag-right">:Nsource</code> <a name="%3ANs"></a><code class="help-tag">:Ns</code>
:Ns[ource] <code>{netfile}</code>
		Source the <code>{netfile}</code>.
		To start up vim using a remote .vimrc, one may use
		the following (all on one line) (tnx to Antoine Mechelynck)<pre>vim -u NORC -N
 --cmd "runtime plugin/netrwPlugin.vim"
 --cmd "source scp://HOSTNAME/.vimrc"</pre></div>
<div class="old-help-para">		 (related: <a href="/neovim-docs-web/en/pi_netrw#netrw-source">netrw-source</a>)</div>
<div class="old-help-para">:call NetUserPass()				<a name="NetUserPass()"></a><code class="help-tag-right">NetUserPass()</code>
		If g:netrw_uid and s:netrw_passwd don't exist,
		this function will query the user for them.
		(related: <a href="/neovim-docs-web/en/pi_netrw#netrw-userpass">netrw-userpass</a>)</div>
<div class="old-help-para">:call NetUserPass("userid")
		This call will set the g:netrw_uid and, if
		the password doesn't exist, will query the user for it.
		(related: <a href="/neovim-docs-web/en/pi_netrw#netrw-userpass">netrw-userpass</a>)</div>
<div class="old-help-para">:call NetUserPass("userid","passwd")
		This call will set both the g:netrw_uid and s:netrw_passwd.
		The user-id and password are used by ftp transfers.  One may
		effectively remove the user-id and password by using empty
		strings (ie. "").
		(related: <a href="/neovim-docs-web/en/pi_netrw#netrw-userpass">netrw-userpass</a>)</div>
<div class="old-help-para">:NetrwSettings  This command is described in <a href="/neovim-docs-web/en/pi_netrw#netrw-settings">netrw-settings</a> -- used to
                display netrw settings and change netrw behavior.</div>
<div class="old-help-para"><h2 class="help-heading">8. Variables and Options<span class="help-heading-tags">		<a name="netrw-var"></a><span class="help-tag">netrw-var</span> <a name="netrw-settings"></a><span class="help-tag">netrw-settings</span> {{{1</span></h2></div>
<div class="old-help-para">(also see: <a href="/neovim-docs-web/en/pi_netrw#netrw-options">netrw-options</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-variables">netrw-variables</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-protocol">netrw-protocol</a>
           <a href="/neovim-docs-web/en/pi_netrw#netrw-browser-settings">netrw-browser-settings</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-browser-options">netrw-browser-options</a> )</div>
<div class="old-help-para">The &lt;netrw.vim&gt; script provides several variables which act as options to
affect &lt;netrw.vim&gt;'s file transfer behavior.  These variables typically may be
set in the user's &lt;.vimrc&gt; file: (see also <a href="/neovim-docs-web/en/pi_netrw#netrw-settings">netrw-settings</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-protocol">netrw-protocol</a>)
						<a name="netrw-options"></a><code class="help-tag-right">netrw-options</code>
<pre>                -------------
                Netrw Options
                -------------
Option                        Meaning
--------------                -----------------------------------------------</pre></div>
<div class="old-help-para">        b:netrw_col             Holds current cursor position (during NetWrite)
        g:netrw_cygwin          =1 assume scp under windows is from cygwin
                                                              (default/windows)
                                =0 assume scp under windows accepts windows
                                   style paths                (default/else)
        g:netrw_ftp             =0 use default ftp            (uid password)
        g:netrw_ftpmode         ="binary"                     (default)
                                ="ascii"                      (your choice)
	g:netrw_ignorenetrc     =1                            (default)
	                           if you have a &lt;.netrc&gt; file but you don't
				   want it used, then set this variable.  Its
				   mere existence is enough to cause &lt;.netrc&gt;
				   to be ignored.
        b:netrw_lastfile        Holds latest method/machine/path.
        b:netrw_line            Holds current line number     (during NetWrite)
	g:netrw_silent          =0 transfers done normally
	                        =1 transfers done silently
        g:netrw_uid             Holds current user-id for ftp.
        g:netrw_use_nt_rcp      =0 don't use WinNT/2K/XP's rcp (default)
                                =1 use WinNT/2K/XP's rcp, binary mode
        g:netrw_win95ftp        =0 use unix-style ftp even if win95/98/ME/etc
                                =1 use default method to do ftp<pre>-----------------------------------------------------------------------</pre></div>
<div class="old-help-para">						<a name="netrw-internal-variables"></a><code class="help-tag-right">netrw-internal-variables</code>
The script will also make use of the following variables internally, albeit
temporarily.
<pre>                     -------------------
                     Temporary Variables
                     -------------------
Variable                Meaning
--------                ------------------------------------</pre></div>
<div class="old-help-para">	b:netrw_method		Index indicating rcp/ftp+.netrc/ftp
	w:netrw_method		(same as b:netrw_method)
	g:netrw_machine		Holds machine name parsed from input
	b:netrw_fname		Holds filename being accessed<pre>------------------------------------------------------------</pre></div>
<div class="old-help-para">							<a name="netrw-protocol"></a><code class="help-tag-right">netrw-protocol</code></div>
<div class="old-help-para">Netrw supports a number of protocols.  These protocols are invoked using the
variables listed below, and may be modified by the user.
<pre>                       ------------------------
                       Protocol Control Options
                       ------------------------
Option            Type        Setting         Meaning
---------         --------    --------------  ---------------------------</pre></div>
<div class="old-help-para">    netrw_ftp         variable    =doesn't exist  userid set by "user userid"
                                  =0              userid set by "user userid"
                                  =1              userid set by "userid"
    NetReadFixup      function    =doesn't exist  no change
                                  =exists         Allows user to have files
                                                  read via ftp automatically
                                                  transformed however they wish
                                                  by NetReadFixup()
    g:netrw_dav_cmd      var   ="cadaver"      if cadaver  is executable
    g:netrw_dav_cmd      var   ="curl -o"      elseif curl is executable
    g:netrw_fetch_cmd    var   ="fetch -o"     if fetch is available
    g:netrw_ftp_cmd      var   ="ftp"
    g:netrw_http_cmd     var   ="fetch -o"     if      fetch is available
    g:netrw_http_cmd     var   ="wget -O"      else if wget  is available
    g:netrw_http_put_cmd var   ="curl -T"
    <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_list_cmd">g:netrw_list_cmd</a>     var   ="ssh USEPORT HOSTNAME ls -Fa"
    g:netrw_rcp_cmd      var   ="rcp"
    g:netrw_rsync_cmd    var   ="rsync"
    <a name="g%3Anetrw_rsync_sep"></a><code class="help-tag">g:netrw_rsync_sep</code>    var   ="/"            used to separate the hostname
                                               from the file spec
    g:netrw_scp_cmd      var   ="scp -q"
    g:netrw_sftp_cmd     var   ="sftp"<pre>-------------------------------------------------------------------------</pre></div>
<div class="old-help-para">								<a name="netrw-ftp"></a><code class="help-tag-right">netrw-ftp</code></div>
<div class="old-help-para">The g:netrw_..._cmd options (<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_ftp_cmd">g:netrw_ftp_cmd</a> and <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_sftp_cmd">g:netrw_sftp_cmd</a>)
specify the external program to use handle the ftp protocol.  They may
include command line options (such as -p for passive mode). Example:<pre>let g:netrw_ftp_cmd= "ftp -p"</pre></div>
<div class="old-help-para">Browsing is supported by using the <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_list_cmd">g:netrw_list_cmd</a>; the substring
"HOSTNAME" will be changed via substitution with whatever the current request
is for a hostname.</div>
<div class="old-help-para">Two options (<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_ftp">g:netrw_ftp</a> and <a href="/neovim-docs-web/en/pi_netrw#netrw-fixup">netrw-fixup</a>) both help with certain ftp's
that give trouble .  In order to best understand how to use these options if
ftp is giving you troubles, a bit of discussion is provided on how netrw does
ftp reads.</div>
<div class="old-help-para">For ftp, netrw typically builds up lines of one of the following formats in a
temporary file:
<pre>IF g:netrw_ftp !exists or is not 1     IF g:netrw_ftp exists and is 1
----------------------------------     ------------------------------</pre></div>
<div class="old-help-para">       open machine [port]                    open machine [port]
       user userid password                   userid password
       [g:netrw_ftpmode]                      password
       [g:netrw_ftpextracmd]                  [g:netrw_ftpmode]
       get filename tempfile                  [g:netrw_extracmd]
                                              get filename tempfile<pre>---------------------------------------------------------------------</pre></div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_ftpmode">g:netrw_ftpmode</a> and <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_ftpextracmd">g:netrw_ftpextracmd</a> are optional.</div>
<div class="old-help-para">Netrw then executes the lines above by use of a filter:
<pre>:%! {g:netrw_ftp_cmd} -i [-n]</pre></div>
<div class="old-help-para">where
	g:netrw_ftp_cmd is usually "ftp",
	-i tells ftp not to be interactive
	-n means don't use netrc and is used for Method #3 (ftp w/o &lt;.netrc&gt;)</div>
<div class="old-help-para">If &lt;.netrc&gt; exists it will be used to avoid having to query the user for
userid and password.  The transferred file is put into a temporary file.
The temporary file is then read into the main editing session window that
requested it and the temporary file deleted.</div>
<div class="old-help-para">If your ftp doesn't accept the "user" command and immediately just demands a
userid, then try putting "let netrw_ftp=1" in your &lt;.vimrc&gt;.</div>
<div class="old-help-para">								<a name="netrw-cadaver"></a><code class="help-tag-right">netrw-cadaver</code>
To handle the SSL certificate dialog for untrusted servers, one may pull
down the certificate and place it into /usr/ssl/cert.pem.  This operation
renders the server treatment as "trusted".</div>
<div class="old-help-para">						<a name="netrw-fixup"></a><code class="help-tag-right">netrw-fixup</code> <a name="netreadfixup"></a><code class="help-tag">netreadfixup</code>
If your ftp for whatever reason generates unwanted lines (such as AUTH
messages) you may write a NetReadFixup() function:
<pre>function! NetReadFixup(method,line1,line2)
  " a:line1: first new line in current file
  " a:line2: last  new line in current file
  if     a:method == 1 "rcp
  elseif a:method == 2 "ftp + &lt;.netrc&gt;
  elseif a:method == 3 "ftp + machine,uid,password,filename
  elseif a:method == 4 "scp
  elseif a:method == 5 "http/wget
  elseif a:method == 6 "dav/cadaver
  elseif a:method == 7 "rsync
  elseif a:method == 8 "fetch
  elseif a:method == 9 "sftp
  else               " complain
  endif
endfunction</pre>
The NetReadFixup() function will be called if it exists and thus allows you to
customize your reading process.  As a further example, &lt;netrw.vim&gt; contains
just such a function to handle Windows 95 ftp.  For whatever reason, Windows
95's ftp dumps four blank lines at the end of a transfer, and so it is
desirable to automate their removal.  Here's some code taken from &lt;netrw.vim&gt;
itself:
<pre>if has("win95") &amp;&amp; g:netrw_win95ftp
 fun! NetReadFixup(method, line1, line2)
   if method == 3   " ftp (no &lt;.netrc&gt;)
    let fourblanklines= line2 - 3
    silent fourblanklines .. "," .. line2 .. "g/^\s*/d"
   endif
 endfunction
endif</pre>
(Related topics: <a href="/neovim-docs-web/en/pi_netrw#ftp">ftp</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-userpass">netrw-userpass</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-start">netrw-start</a>)</div>
<div class="old-help-para"><h2 class="help-heading">9. Browsing<span class="help-heading-tags">		<a name="netrw-browsing"></a><span class="help-tag">netrw-browsing</span> <a name="netrw-browse"></a><span class="help-tag">netrw-browse</span> <a name="netrw-help"></a><span class="help-tag">netrw-help</span> {{{1</span></h2>			<a name="netrw-browser"></a><code class="help-tag-right">netrw-browser</code>  <a name="netrw-dir"></a><code class="help-tag">netrw-dir</code>    <a name="netrw-list"></a><code class="help-tag">netrw-list</code></div>
<div class="old-help-para"><h3 class="help-heading">INTRODUCTION TO BROWSING<span class="help-heading-tags">			<a name="netrw-intro-browse"></a><span class="help-tag">netrw-intro-browse</span> {{{2</span></h3>	(Quick References: <a href="/neovim-docs-web/en/pi_netrw#netrw-quickmaps">netrw-quickmaps</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-quickcoms">netrw-quickcoms</a>)</div>
<div class="old-help-para">Netrw supports the browsing of directories on your local system and on remote
hosts; browsing includes listing files and directories, entering directories,
editing files therein, deleting files/directories, making new directories,
moving (renaming) files and directories, copying files and directories, etc.
One may mark files and execute any system command on them!  The Netrw browser
generally implements the previous explorer's maps and commands for remote
directories, although details (such as pertinent global variable names)
necessarily differ.  To browse a directory, simply "edit" it!<pre>vim /your/directory/
vim .
vim c:\your\directory\</pre></div>
<div class="old-help-para">(Related topics: <a href="/neovim-docs-web/en/pi_netrw#netrw-cr">netrw-cr</a>  <a href="/neovim-docs-web/en/pi_netrw#netrw-o">netrw-o</a>  <a href="/neovim-docs-web/en/pi_netrw#netrw-p">netrw-p</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-P">netrw-P</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-t">netrw-t</a>
                 <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a>  <a href="/neovim-docs-web/en/pi_netrw#netrw-mx">netrw-mx</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-D">netrw-D</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-R">netrw-R</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-v">netrw-v</a> )</div>
<div class="old-help-para">The Netrw remote file and directory browser handles two protocols: ssh and
ftp.  The protocol in the url, if it is ftp, will cause netrw also to use ftp
in its remote browsing.  Specifying any other protocol will cause it to be
used for file transfers; but the ssh protocol will be used to do remote
browsing.</div>
<div class="old-help-para">To use Netrw's remote directory browser, simply attempt to read a "file" with
a trailing slash and it will be interpreted as a request to list a directory:
<pre>vim [protocol]://[user@]hostname/path/</pre></div>
<div class="old-help-para">where [protocol] is typically scp or ftp.  As an example, try:<pre>vim ftp://ftp.home.vim.org/pub/vim/</pre></div>
<div class="old-help-para">For local directories, the trailing slash is not required.  Again, because it's
easy to miss: to browse remote directories, the URL must terminate with a
slash!</div>
<div class="old-help-para">If you'd like to avoid entering the password repeatedly for remote directory
listings with ssh or scp, see <a href="/neovim-docs-web/en/pi_netrw#netrw-ssh-hack">netrw-ssh-hack</a>.  To avoid password entry with
ftp, see <a href="/neovim-docs-web/en/pi_netrw#netrw-netrc">netrw-netrc</a> (if your ftp supports it).</div>
<div class="old-help-para">There are several things you can do to affect the browser's display of files:</div>
<div class="old-help-para"><div class="help-li" style=""> To change the listing style, press the "i" key (<a href="/neovim-docs-web/en/pi_netrw#netrw-i">netrw-i</a>).
	  Currently there are four styles: thin, long, wide, and tree.
	  To make that change "permanent", see <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_liststyle">g:netrw_liststyle</a>.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> To hide files (don't want to see those xyz~ files anymore?) see
	  <a href="/neovim-docs-web/en/pi_netrw#netrw-ctrl-h">netrw-ctrl-h</a>.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Press s to sort files by name, time, or size.
</div></div>
<div class="old-help-para">See <a href="/neovim-docs-web/en/pi_netrw#netrw-browse-cmds">netrw-browse-cmds</a> for all the things you can do with netrw!</div>
<div class="old-help-para">			<a name="netrw-getftype"></a><code class="help-tag-right">netrw-getftype</code> <a name="netrw-filigree"></a><code class="help-tag">netrw-filigree</code> <a name="netrw-ftype"></a><code class="help-tag">netrw-ftype</code>
The <a href="/neovim-docs-web/en/builtin#getftype()">getftype()</a> function is used to append a bit of filigree to indicate
filetype to locally listed files:</div>
<div class="old-help-para">	directory  : /
	executable : *	fifo       : |
	links      : @
	sockets    : =</div>
<div class="old-help-para">The filigree also affects the <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_sort_sequence">g:netrw_sort_sequence</a>.</div>
<div class="old-help-para"><h3 class="help-heading">QUICK HELP<span class="help-heading-tags">						<a name="netrw-quickhelp"></a><span class="help-tag">netrw-quickhelp</span> {{{2</span></h3>                       (Use ctrl-] to select a topic)~
	Intro to Browsing...............................|netrw-intro-browse|
	  Quick Reference: Maps.........................|netrw-quickmap|
	  Quick Reference: Commands.....................|netrw-browse-cmds|
	Hiding
	  Edit hiding list..............................|netrw-ctrl-h|
	  Hiding Files or Directories...................|netrw-a|
	  Hiding/Unhiding by suffix.....................|netrw-mh|
	  Hiding  dot-files.............................|netrw-gh|
	Listing Style
	  Select listing style (thin/long/wide/tree)....|netrw-i|
	  Associated setting variable...................|g:netrw_liststyle|
	  Shell command used to perform listing.........|g:netrw_list_cmd|
	  Quick file info...............................|netrw-qf|
	Sorted by
	  Select sorting style (name/time/size).........|netrw-s|
	  Editing the sorting sequence..................|netrw-S|
	  Sorting options...............................|g:netrw_sort_options|
	  Associated setting variable...................|g:netrw_sort_sequence|
	  Reverse sorting order.........................|netrw-r|</div>
<div class="old-help-para">				<a name="netrw-quickmap"></a><code class="help-tag-right">netrw-quickmap</code>  <a name="netrw-quickmaps"></a><code class="help-tag">netrw-quickmaps</code>
QUICK REFERENCE: MAPS				<a name="netrw-browse-maps"></a><code class="help-tag-right">netrw-browse-maps</code> {{{2
<pre>---                        -----------------                        ----
Map                        Quick Explanation                        Link
---                        -----------------                        ----</pre></div>
<div class="old-help-para">	 <code>&lt;F1&gt;</code>	Causes Netrw to issue help
	 <code>&lt;cr&gt;</code>	Netrw will enter the directory or read the file      <a href="/neovim-docs-web/en/pi_netrw#netrw-cr">netrw-cr</a>
	 <code>&lt;del&gt;</code>	Netrw will attempt to remove the file/directory      <a href="/neovim-docs-web/en/pi_netrw#netrw-del">netrw-del</a>
	 <code>&lt;c-h&gt;</code>	Edit file hiding list                                <a href="/neovim-docs-web/en/pi_netrw#netrw-ctrl-h">netrw-ctrl-h</a>
	 <code>&lt;c-l&gt;</code>	Causes Netrw to refresh the directory listing        <a href="/neovim-docs-web/en/pi_netrw#netrw-ctrl-l">netrw-ctrl-l</a>
	 <code>&lt;c-r&gt;</code>	Browse using a gvim server                           <a href="/neovim-docs-web/en/pi_netrw#netrw-ctrl-r">netrw-ctrl-r</a>
	 <code>&lt;c-tab&gt;</code> Shrink/expand a netrw/explore window                <a href="/neovim-docs-web/en/pi_netrw#netrw-c-tab">netrw-c-tab</a>
	   -		Makes Netrw go up one directory                      <a href="/neovim-docs-web/en/pi_netrw#netrw--">netrw--</a>
	   a	Cycles between normal display,                       <a href="/neovim-docs-web/en/pi_netrw#netrw-a">netrw-a</a>
	    	hiding (suppress display of files matching g:netrw_list_hide)
	    	and showing (display only files which match g:netrw_list_hide)
	   cd	Make browsing directory the current directory        <a href="/neovim-docs-web/en/pi_netrw#netrw-cd">netrw-cd</a>
	   C	Setting the editing window                           <a href="/neovim-docs-web/en/pi_netrw#netrw-C">netrw-C</a>
	   d	Make a directory                                     <a href="/neovim-docs-web/en/pi_netrw#netrw-d">netrw-d</a>
	   D	Attempt to remove the file(s)/directory(ies)         <a href="/neovim-docs-web/en/pi_netrw#netrw-D">netrw-D</a>
	   gb	Go to previous bookmarked directory                  <a href="/neovim-docs-web/en/pi_netrw#netrw-gb">netrw-gb</a>
	   gd	Force treatment as directory                         <a href="/neovim-docs-web/en/pi_netrw#netrw-gd">netrw-gd</a>
	   gf	Force treatment as file                              <a href="/neovim-docs-web/en/pi_netrw#netrw-gf">netrw-gf</a>
	   gh	Quick hide/unhide of dot-files                       <a href="/neovim-docs-web/en/pi_netrw#netrw-gh">netrw-gh</a>
	   gn	Make top of tree the directory below the cursor      <a href="/neovim-docs-web/en/pi_netrw#netrw-gn">netrw-gn</a>
	   gp	Change local-only file permissions                   <a href="/neovim-docs-web/en/pi_netrw#netrw-gp">netrw-gp</a>
	   i	Cycle between thin, long, wide, and tree listings    <a href="/neovim-docs-web/en/pi_netrw#netrw-i">netrw-i</a>
	   I	Toggle the displaying of the banner                  <a href="/neovim-docs-web/en/pi_netrw#netrw-I">netrw-I</a>
	   mb	Bookmark current directory                           <a href="/neovim-docs-web/en/pi_netrw#netrw-mb">netrw-mb</a>
	   mc	Copy marked files to marked-file target directory    <a href="/neovim-docs-web/en/pi_netrw#netrw-mc">netrw-mc</a>
	   md	Apply diff to marked files (up to 3)                 <a href="/neovim-docs-web/en/pi_netrw#netrw-md">netrw-md</a>
	   me	Place marked files on arg list and edit them         <a href="/neovim-docs-web/en/pi_netrw#netrw-me">netrw-me</a>
	   mf	Mark a file                                          <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a>
	   mF	Unmark files                                         <a href="/neovim-docs-web/en/pi_netrw#netrw-mF">netrw-mF</a>
	   mg	Apply vimgrep to marked files                        <a href="/neovim-docs-web/en/pi_netrw#netrw-mg">netrw-mg</a>
	   mh	Toggle marked file suffices' presence on hiding list <a href="/neovim-docs-web/en/pi_netrw#netrw-mh">netrw-mh</a>
	   mm	Move marked files to marked-file target directory    <a href="/neovim-docs-web/en/pi_netrw#netrw-mm">netrw-mm</a>
	   mp	Print marked files                                   <a href="/neovim-docs-web/en/pi_netrw#netrw-mp">netrw-mp</a>
	   mr	Mark files using a shell-style <a href="/neovim-docs-web/en/pattern#regexp">regexp</a>                <a href="/neovim-docs-web/en/pi_netrw#netrw-mr">netrw-mr</a>
	   mt	Current browsing directory becomes markfile target   <a href="/neovim-docs-web/en/pi_netrw#netrw-mt">netrw-mt</a>
	   mT	Apply ctags to marked files                          <a href="/neovim-docs-web/en/pi_netrw#netrw-mT">netrw-mT</a>
	   mu	Unmark all marked files                              <a href="/neovim-docs-web/en/pi_netrw#netrw-mu">netrw-mu</a>
	   mv	Apply arbitrary vim   command to marked files        <a href="/neovim-docs-web/en/pi_netrw#netrw-mv">netrw-mv</a>
	   mx	Apply arbitrary shell command to marked files        <a href="/neovim-docs-web/en/pi_netrw#netrw-mx">netrw-mx</a>
	   mX	Apply arbitrary shell command to marked files en bloc|netrw-mX|
	   mz	Compress/decompress marked files                     <a href="/neovim-docs-web/en/pi_netrw#netrw-mz">netrw-mz</a>
	   o	Enter the file/directory under the cursor in a new   <a href="/neovim-docs-web/en/pi_netrw#netrw-o">netrw-o</a>
	    	browser window.  A horizontal split is used.
	   O	Obtain a file specified by cursor                    <a href="/neovim-docs-web/en/pi_netrw#netrw-O">netrw-O</a>
	   p	Preview the file                                     <a href="/neovim-docs-web/en/pi_netrw#netrw-p">netrw-p</a>
	   P	Browse in the previously used window                 <a href="/neovim-docs-web/en/pi_netrw#netrw-P">netrw-P</a>
	   qb	List bookmarked directories and history              <a href="/neovim-docs-web/en/pi_netrw#netrw-qb">netrw-qb</a>
	   qf	Display information on file                          <a href="/neovim-docs-web/en/pi_netrw#netrw-qf">netrw-qf</a>
	   qF	Mark files using a quickfix list                     <a href="/neovim-docs-web/en/pi_netrw#netrw-qF">netrw-qF</a>
	   qL	Mark files using a <a href="/neovim-docs-web/en/quickfix#location-list">location-list</a>                     <a href="/neovim-docs-web/en/pi_netrw#netrw-qL">netrw-qL</a>
	   r	Reverse sorting order                                <a href="/neovim-docs-web/en/pi_netrw#netrw-r">netrw-r</a>
	   R	Rename the designated file(s)/directory(ies)         <a href="/neovim-docs-web/en/pi_netrw#netrw-R">netrw-R</a>
	   s	Select sorting style: by name, time, or file size    <a href="/neovim-docs-web/en/pi_netrw#netrw-s">netrw-s</a>
	   S	Specify suffix priority for name-sorting             <a href="/neovim-docs-web/en/pi_netrw#netrw-S">netrw-S</a>
	   t	Enter the file/directory under the cursor in a new tab|netrw-t|
	   u	Change to recently-visited directory                 <a href="/neovim-docs-web/en/pi_netrw#netrw-u">netrw-u</a>
	   U	Change to subsequently-visited directory             <a href="/neovim-docs-web/en/pi_netrw#netrw-U">netrw-U</a>
	   v	Enter the file/directory under the cursor in a new   <a href="/neovim-docs-web/en/pi_netrw#netrw-v">netrw-v</a>
	    	browser window.  A vertical split is used.
	   x	View file with an associated program                 <a href="/neovim-docs-web/en/pi_netrw#netrw-x">netrw-x</a>
	   X	Execute filename under cursor via <a href="/neovim-docs-web/en/builtin#system()">system()</a>           <a href="/neovim-docs-web/en/pi_netrw#netrw-X">netrw-X</a></div>
<div class="old-help-para">	   %	Open a new file in netrw's current directory         <a href="/neovim-docs-web/en/pi_netrw#netrw-%25">netrw-%</a></div>
<div class="old-help-para">	<a name="netrw-mouse"></a><code class="help-tag">netrw-mouse</code> <a name="netrw-leftmouse"></a><code class="help-tag">netrw-leftmouse</code> <a name="netrw-middlemouse"></a><code class="help-tag">netrw-middlemouse</code> <a name="netrw-rightmouse"></a><code class="help-tag">netrw-rightmouse</code>
	<code>&lt;leftmouse&gt;</code>	(gvim only) selects word under mouse as if a <code>&lt;cr&gt;</code>
			had been pressed (ie. edit file, change directory)
	<code>&lt;middlemouse&gt;</code>	(gvim only) same as P selecting word under mouse;
			see <a href="/neovim-docs-web/en/pi_netrw#netrw-P">netrw-P</a>
	<code>&lt;rightmouse&gt;</code>	(gvim only) delete file/directory using word under
			mouse
	<code>&lt;2-leftmouse&gt;</code>	(gvim only) when:
<div class="help-li" style=""> in a netrw-selected file, AND
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_retmap">g:netrw_retmap</a> == 1       AND
</div><div class="help-li" style=""> the user doesn't already have a <code>&lt;2-leftmouse&gt;</code>
			   mapping defined before netrw is autoloaded,
			then a double clicked leftmouse button will return
			to the netrw browser window.  See <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_retmap">g:netrw_retmap</a>.
	<code>&lt;s-leftmouse&gt;</code>	(gvim only) like mf, will mark files.  Dragging
			the shifted leftmouse will mark multiple files.
			(see <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a>)
</div></div>
<div class="old-help-para">	(to disable mouse buttons while browsing: <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_mousemaps">g:netrw_mousemaps</a>)</div>
<div class="old-help-para">				<a name="netrw-quickcom"></a><code class="help-tag-right">netrw-quickcom</code> <a name="netrw-quickcoms"></a><code class="help-tag">netrw-quickcoms</code>
QUICK REFERENCE: COMMANDS	<a name="netrw-explore-cmds"></a><code class="help-tag">netrw-explore-cmds</code> <a name="netrw-browse-cmds"></a><code class="help-tag">netrw-browse-cmds</code> {{{2
     :NetrwClean[!]............................................|netrw-clean|
     :NetrwSettings............................................|netrw-settings|
     :Ntree....................................................|netrw-ntree|
     :Explore[!]  [dir] Explore directory of current file......|netrw-explore|
     :Hexplore[!] [dir] Horizontal Split &amp; Explore.............|netrw-explore|
     :Lexplore[!] [dir] Left Explorer Toggle...................|netrw-explore|
     :Nexplore[!] [dir] Vertical Split &amp; Explore...............|netrw-explore|
     :Pexplore[!] [dir] Vertical Split &amp; Explore...............|netrw-explore|
     :Rexplore          Return to Explorer.....................|netrw-explore|
     :Sexplore[!] [dir] Split &amp; Explore directory .............|netrw-explore|
     :Texplore[!] [dir] Tab &amp; Explore..........................|netrw-explore|
     :Vexplore[!] [dir] Vertical Split &amp; Explore...............|netrw-explore|</div>
<div class="old-help-para"><h3 class="help-heading">BANNER DISPLAY<span class="help-heading-tags">						<a name="netrw-I"></a><span class="help-tag">netrw-I</span></span></h3></div>
<div class="old-help-para">One may toggle the displaying of the banner by pressing "I".</div>
<div class="old-help-para">Also See: <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_banner">g:netrw_banner</a></div>
<div class="old-help-para">BOOKMARKING A DIRECTORY		<a name="netrw-mb"></a><code class="help-tag-right">netrw-mb</code> <a name="netrw-bookmark"></a><code class="help-tag">netrw-bookmark</code> <a name="netrw-bookmarks"></a><code class="help-tag">netrw-bookmarks</code> {{{2</div>
<div class="old-help-para">One may easily "bookmark" the currently browsed directory by using<pre>mb</pre></div>
<div class="old-help-para">								<a name=".netrwbook"></a><code class="help-tag-right">.netrwbook</code>
Bookmarks are retained in between sessions of vim in a file called .netrwbook
as a <a href="/neovim-docs-web/en/eval#List">List</a>, which is typically stored in the first directory on the user's
<a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>; entries are kept in sorted order.</div>
<div class="old-help-para">If there are marked files and/or directories, mb will add them to the bookmark
list.</div>
<div class="old-help-para">								<a name="netrw-%3ANetrwMB"></a><code class="help-tag-right">netrw-:NetrwMB</code>
Additionally, one may use :NetrwMB to bookmark files or directories.<pre>:NetrwMB[!] [files/directories]</pre></div>
<div class="old-help-para"> No bang: enters files/directories into Netrw's bookmark system</div>
<div class="old-help-para">   No argument and in netrw buffer:
     if there are marked files        : bookmark marked files
     otherwise                        : bookmark file/directory under cursor
   No argument and not in netrw buffer: bookmarks current open file
   Has arguments                      : <a href="/neovim-docs-web/en/builtin#glob()">glob()</a>s each arg and bookmarks them</div>
<div class="old-help-para"> With bang: deletes files/directories from Netrw's bookmark system</div>
<div class="old-help-para">The :NetrwMB command is available outside of netrw buffers (once netrw has been
invoked in the session).</div>
<div class="old-help-para">The file ".netrwbook" holds bookmarks when netrw (and vim) is not active.  By
default, its stored on the first directory on the user's <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.</div>
<div class="old-help-para">Related Topics:
	<a href="/neovim-docs-web/en/pi_netrw#netrw-gb">netrw-gb</a> how to return (go) to a bookmark
	<a href="/neovim-docs-web/en/pi_netrw#netrw-mB">netrw-mB</a> how to delete bookmarks
	<a href="/neovim-docs-web/en/pi_netrw#netrw-qb">netrw-qb</a> how to list bookmarks
	<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_home">g:netrw_home</a> controls where .netrwbook is kept</div>
<div class="old-help-para"><h3 class="help-heading">BROWSING<span class="help-heading-tags">					<a name="netrw-enter"></a><span class="help-tag">netrw-enter</span>  	<a name="netrw-cr"></a><span class="help-tag">netrw-cr</span> {{{2</span></h3></div>
<div class="old-help-para">Browsing is simple: move the cursor onto a file or directory of interest.
Hitting the <code>&lt;cr&gt;</code> (the return key) will select the file or directory.
Directories will themselves be listed, and files will be opened using the
protocol given in the original read request.</div>
<div class="old-help-para">  CAVEAT: There are four forms of listing (see <a href="/neovim-docs-web/en/pi_netrw#netrw-i">netrw-i</a>).  Netrw assumes that
  two or more spaces delimit filenames and directory names for the long and
  wide listing formats.  Thus, if your filename or directory name has two or
  more sequential spaces embedded in it, or any trailing spaces, then you'll
  need to use the "thin" format to select it.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_browse_split">g:netrw_browse_split</a> option, which is zero by default, may be used to
cause the opening of files to be done in a new window or tab instead of the
default.  When the option is one or two, the splitting will be taken
horizontally or vertically, respectively.  When the option is set to three, a
<code>&lt;cr&gt;</code> will cause the file to appear in a new tab.</div>
<div class="old-help-para">When using the gui (gvim), one may select a file by pressing the <code>&lt;leftmouse&gt;</code>
button.  In addition, if</div>
<div class="old-help-para"><div class="help-li" style=""> <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_retmap">g:netrw_retmap</a> == 1       AND   (its default value is 0)
</div><div class="help-li" style=""> in a netrw-selected file, AND
</div><div class="help-li" style=""> the user doesn't already have a <code>&lt;2-leftmouse&gt;</code> mapping defined before
   netrw is loaded
</div></div>
<div class="old-help-para">then a doubly-clicked leftmouse button will return to the netrw browser
window.</div>
<div class="old-help-para">Netrw attempts to speed up browsing, especially for remote browsing where one
may have to enter passwords, by keeping and re-using previously obtained
directory listing buffers.  The <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_fastbrowse">g:netrw_fastbrowse</a> variable is used to
control this behavior; one may have slow browsing (no buffer re-use), medium
speed browsing (re-use directory buffer listings only for remote directories),
and fast browsing (re-use directory buffer listings as often as possible).
The price for such re-use is that when changes are made (such as new files
are introduced into a directory), the listing may become out-of-date.  One may
always refresh directory listing buffers by pressing ctrl-L (see
<a href="/neovim-docs-web/en/pi_netrw#netrw-ctrl-l">netrw-ctrl-l</a>).</div>
<div class="old-help-para">								<a name="netrw-s-cr"></a><code class="help-tag-right">netrw-s-cr</code>
Squeezing the Current Tree-Listing Directory~</div>
<div class="old-help-para">When the tree listing style is enabled (see <a href="/neovim-docs-web/en/pi_netrw#netrw-i">netrw-i</a>) and one is using
gvim, then the <code>&lt;s-cr&gt;</code> mapping may be used to squeeze (close) the
directory currently containing the cursor.</div>
<div class="old-help-para">Otherwise, one may remap a key combination of one's own choice to get
this effect:<pre>nmap &lt;buffer&gt; &lt;silent&gt; &lt;nowait&gt; YOURKEYCOMBO  &lt;Plug&gt;NetrwTreeSqueeze</pre></div>
<div class="old-help-para">Put this line in $HOME/ftplugin/netrw/netrw.vim; it needs to be generated
for netrw buffers only.</div>
<div class="old-help-para">Related topics:
	<a href="/neovim-docs-web/en/pi_netrw#netrw-ctrl-r">netrw-ctrl-r</a>  	<a href="/neovim-docs-web/en/pi_netrw#netrw-o">netrw-o</a>  	<a href="/neovim-docs-web/en/pi_netrw#netrw-p">netrw-p</a>
	<a href="/neovim-docs-web/en/pi_netrw#netrw-P">netrw-P</a>  	<a href="/neovim-docs-web/en/pi_netrw#netrw-t">netrw-t</a>  	<a href="/neovim-docs-web/en/pi_netrw#netrw-v">netrw-v</a>
Associated setting variables:
   <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_browse_split">g:netrw_browse_split</a>  	<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_fastbrowse">g:netrw_fastbrowse</a>
   <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_ftp_list_cmd">g:netrw_ftp_list_cmd</a>  	<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_ftp_sizelist_cmd">g:netrw_ftp_sizelist_cmd</a>
   <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_ftp_timelist_cmd">g:netrw_ftp_timelist_cmd</a>  	<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_ssh_browse_reject">g:netrw_ssh_browse_reject</a>
   <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_ssh_cmd">g:netrw_ssh_cmd</a>  		<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_use_noswf">g:netrw_use_noswf</a></div>
<div class="old-help-para">BROWSING WITH A HORIZONTALLY SPLIT WINDOW	<a name="netrw-o"></a><code class="help-tag">netrw-o</code> <a name="netrw-horiz"></a><code class="help-tag">netrw-horiz</code> {{{2</div>
<div class="old-help-para">Normally one enters a file or directory using the <code>&lt;cr&gt;</code>.  However, the "o" map
allows one to open a new window to hold the new directory listing or file.  A
horizontal split is used.  (for vertical splitting, see <a href="/neovim-docs-web/en/pi_netrw#netrw-v">netrw-v</a>)</div>
<div class="old-help-para">Normally, the o key splits the window horizontally with the new window and
cursor at the top.</div>
<div class="old-help-para">Associated setting variables: <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_alto">g:netrw_alto</a> <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_winsize">g:netrw_winsize</a></div>
<div class="old-help-para">Related topics:
	<a href="/neovim-docs-web/en/pi_netrw#netrw-ctrl-r">netrw-ctrl-r</a>  	<a href="/neovim-docs-web/en/pi_netrw#netrw-o">netrw-o</a>  	<a href="/neovim-docs-web/en/pi_netrw#netrw-p">netrw-p</a>
	<a href="/neovim-docs-web/en/pi_netrw#netrw-P">netrw-P</a>  	<a href="/neovim-docs-web/en/pi_netrw#netrw-t">netrw-t</a>  	<a href="/neovim-docs-web/en/pi_netrw#netrw-v">netrw-v</a>
Associated setting variables:
   <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_alto">g:netrw_alto</a>    control above/below splitting
   <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_winsize">g:netrw_winsize</a> control initial sizing</div>
<div class="old-help-para">BROWSING WITH A NEW TAB				<a name="netrw-t"></a><code class="help-tag-right">netrw-t</code> {{{2</div>
<div class="old-help-para">Normally one enters a file or directory using the <code>&lt;cr&gt;</code>.  The "t" map
allows one to open a new window holding the new directory listing or file in
a new tab.</div>
<div class="old-help-para">If you'd like to have the new listing in a background tab, use <a href="/neovim-docs-web/en/tabpage#gT">gT</a>.</div>
<div class="old-help-para">Related topics:
	<a href="/neovim-docs-web/en/pi_netrw#netrw-ctrl-r">netrw-ctrl-r</a>  	<a href="/neovim-docs-web/en/pi_netrw#netrw-o">netrw-o</a>  	<a href="/neovim-docs-web/en/pi_netrw#netrw-p">netrw-p</a>
	<a href="/neovim-docs-web/en/pi_netrw#netrw-P">netrw-P</a>  	<a href="/neovim-docs-web/en/pi_netrw#netrw-t">netrw-t</a>  	<a href="/neovim-docs-web/en/pi_netrw#netrw-v">netrw-v</a>
Associated setting variables:
   <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_winsize">g:netrw_winsize</a> control initial sizing</div>
<div class="old-help-para">BROWSING WITH A VERTICALLY SPLIT WINDOW			<a name="netrw-v"></a><code class="help-tag-right">netrw-v</code> {{{2</div>
<div class="old-help-para">Normally one enters a file or directory using the <code>&lt;cr&gt;</code>.  However, the "v" map
allows one to open a new window to hold the new directory listing or file.  A
vertical split is used.  (for horizontal splitting, see <a href="/neovim-docs-web/en/pi_netrw#netrw-o">netrw-o</a>)</div>
<div class="old-help-para">Normally, the v key splits the window vertically with the new window and
cursor at the left.</div>
<div class="old-help-para">There is only one tree listing buffer; using "v" on a displayed subdirectory
will split the screen, but the same buffer will be shown twice.</div>
<div class="old-help-para">Related topics:
	<a href="/neovim-docs-web/en/pi_netrw#netrw-ctrl-r">netrw-ctrl-r</a>  	<a href="/neovim-docs-web/en/pi_netrw#netrw-o">netrw-o</a>  	<a href="/neovim-docs-web/en/pi_netrw#netrw-p">netrw-p</a>
	<a href="/neovim-docs-web/en/pi_netrw#netrw-P">netrw-P</a>  	<a href="/neovim-docs-web/en/pi_netrw#netrw-t">netrw-t</a>  	<a href="/neovim-docs-web/en/pi_netrw#netrw-v">netrw-v</a>
Associated setting variables:
   <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_altv">g:netrw_altv</a>    control right/left splitting
   <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_winsize">g:netrw_winsize</a> control initial sizing</div>
<div class="old-help-para">BROWSING USING A GVIM SERVER			<a name="netrw-ctrl-r"></a><code class="help-tag-right">netrw-ctrl-r</code> {{{2</div>
<div class="old-help-para">One may keep a browsing gvim separate from the gvim being used to edit.
Use the <code>&lt;c-r&gt;</code> map on a file (not a directory) in the netrw browser, and it
will use a gvim server (see <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_servername">g:netrw_servername</a>).  Subsequent use of <code>&lt;cr&gt;</code>
(see <a href="/neovim-docs-web/en/pi_netrw#netrw-cr">netrw-cr</a>) will re-use that server for editing files.</div>
<div class="old-help-para">Related topics:
	<a href="/neovim-docs-web/en/pi_netrw#netrw-ctrl-r">netrw-ctrl-r</a>  	<a href="/neovim-docs-web/en/pi_netrw#netrw-o">netrw-o</a>  	<a href="/neovim-docs-web/en/pi_netrw#netrw-p">netrw-p</a>
	<a href="/neovim-docs-web/en/pi_netrw#netrw-P">netrw-P</a>  	<a href="/neovim-docs-web/en/pi_netrw#netrw-t">netrw-t</a>  	<a href="/neovim-docs-web/en/pi_netrw#netrw-v">netrw-v</a>
Associated setting variables:
	<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_servername">g:netrw_servername</a>   : sets name of server
	<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_browse_split">g:netrw_browse_split</a> : controls how <code>&lt;cr&gt;</code> will open files</div>
<div class="old-help-para"><h3 class="help-heading">CHANGE LISTING STYLE  (THIN LONG WIDE TREE)<span class="help-heading-tags">			<a name="netrw-i"></a><span class="help-tag">netrw-i</span> {{{2</span></h3></div>
<div class="old-help-para">The "i" map cycles between the thin, long, wide, and tree listing formats.</div>
<div class="old-help-para">The thin listing format gives just the files' and directories' names.</div>
<div class="old-help-para">The long listing is either based on the "ls" command via ssh for remote
directories or displays the filename, file size (in bytes), and the time and
date of last modification for local directories.  With the long listing
format, netrw is not able to recognize filenames which have trailing spaces.
Use the thin listing format for such files.</div>
<div class="old-help-para">The wide listing format uses two or more contiguous spaces to delineate
filenames; when using that format, netrw won't be able to recognize or use
filenames which have two or more contiguous spaces embedded in the name or any
trailing spaces.  The thin listing format will, however, work with such files.
The wide listing format is the most compact.</div>
<div class="old-help-para">The tree listing format has a top directory followed by files and directories
preceded by one or more "|"s, which indicate the directory depth.  One may
open and close directories by pressing the <code>&lt;cr&gt;</code> key while atop the directory
name.</div>
<div class="old-help-para">One may make a preferred listing style your default; see <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_liststyle">g:netrw_liststyle</a>.
As an example, by putting the following line in your .vimrc,<pre>let g:netrw_liststyle= 3</pre>
the tree style will become your default listing style.</div>
<div class="old-help-para">One typical way to use the netrw tree display is to:<pre>vim .
(use i until a tree display shows)
navigate to a file
v  (edit as desired in vertically split window)
ctrl-w h  (to return to the netrw listing)
P (edit newly selected file in the previous window)
ctrl-w h  (to return to the netrw listing)
P (edit newly selected file in the previous window)
...etc...</pre></div>
<div class="old-help-para">Associated setting variables: <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_liststyle">g:netrw_liststyle</a> <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_maxfilenamelen">g:netrw_maxfilenamelen</a>
                              <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_timefmt">g:netrw_timefmt</a>   <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_list_cmd">g:netrw_list_cmd</a></div>
<div class="old-help-para"><h3 class="help-heading">CHANGE FILE PERMISSION<span class="help-heading-tags">						<a name="netrw-gp"></a><span class="help-tag">netrw-gp</span> {{{2</span></h3></div>
<div class="old-help-para">"gp" will ask you for a new permission for the file named under the cursor.
Currently, this only works for local files.</div>
<div class="old-help-para">Associated setting variables: <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_chgperm">g:netrw_chgperm</a></div>
<div class="old-help-para">CHANGING TO A BOOKMARKED DIRECTORY			<a name="netrw-gb"></a><code class="help-tag-right">netrw-gb</code>  {{{2</div>
<div class="old-help-para">To change directory back to a bookmarked directory, use</div>
<div class="old-help-para">	<code>{cnt}</code>gb</div>
<div class="old-help-para">Any count may be used to reference any of the bookmarks.
Note that <a href="/neovim-docs-web/en/pi_netrw#netrw-qb">netrw-qb</a> shows both bookmarks and history; to go
to a location stored in the history see <a href="/neovim-docs-web/en/pi_netrw#netrw-u">netrw-u</a> and <a href="/neovim-docs-web/en/pi_netrw#netrw-U">netrw-U</a>.</div>
<div class="old-help-para">Related Topics:
	<a href="/neovim-docs-web/en/pi_netrw#netrw-mB">netrw-mB</a> how to delete bookmarks
	<a href="/neovim-docs-web/en/pi_netrw#netrw-mb">netrw-mb</a> how to make a bookmark
	<a href="/neovim-docs-web/en/pi_netrw#netrw-qb">netrw-qb</a> how to list bookmarks</div>
<div class="old-help-para">CHANGING TO A PREDECESSOR DIRECTORY		<a name="netrw-u"></a><code class="help-tag-right">netrw-u</code> <a name="netrw-updir"></a><code class="help-tag">netrw-updir</code> {{{2</div>
<div class="old-help-para">Every time you change to a new directory (new for the current session), netrw
will save the directory in a recently-visited directory history list (unless
<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_dirhistmax">g:netrw_dirhistmax</a> is zero; by default, it holds ten entries).  With the "u"
map, one can change to an earlier directory (predecessor).  To do the
opposite, see <a href="/neovim-docs-web/en/pi_netrw#netrw-U">netrw-U</a>.</div>
<div class="old-help-para">The "u" map also accepts counts to go back in the history several slots.  For
your convenience, qb (see <a href="/neovim-docs-web/en/pi_netrw#netrw-qb">netrw-qb</a>) lists the history number which may be
used in that count.</div>
<div class="old-help-para">						<a name=".netrwhist"></a><code class="help-tag-right">.netrwhist</code>
See <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_dirhistmax">g:netrw_dirhistmax</a> for how to control the quantity of history stack
slots.  The file ".netrwhist" holds history when netrw (and vim) is not
active.  By default, its stored on the first directory on the user's
<a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.</div>
<div class="old-help-para">Related Topics:
	<a href="/neovim-docs-web/en/pi_netrw#netrw-U">netrw-U</a> changing to a successor directory
	<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_home">g:netrw_home</a> controls where .netrwhist is kept</div>
<div class="old-help-para">CHANGING TO A SUCCESSOR DIRECTORY		<a name="netrw-U"></a><code class="help-tag-right">netrw-U</code> <a name="netrw-downdir"></a><code class="help-tag">netrw-downdir</code> {{{2</div>
<div class="old-help-para">With the "U" map, one can change to a later directory (successor).
This map is the opposite of the "u" map. (see <a href="/neovim-docs-web/en/pi_netrw#netrw-u">netrw-u</a>)  Use the
qb map to list both the bookmarks and history. (see <a href="/neovim-docs-web/en/pi_netrw#netrw-qb">netrw-qb</a>)</div>
<div class="old-help-para">The "U" map also accepts counts to go forward in the history several slots.</div>
<div class="old-help-para">See <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_dirhistmax">g:netrw_dirhistmax</a> for how to control the quantity of history stack
slots.</div>
<div class="old-help-para"><h3 class="help-heading">CHANGING TREE TOP<span class="help-heading-tags">			<a name="netrw-ntree"></a><span class="help-tag">netrw-ntree</span>  <a name="%3ANtree"></a><span class="help-tag">:Ntree</span>  <a name="netrw-gn"></a><span class="help-tag">netrw-gn</span> {{{2</span></h3></div>
<div class="old-help-para">One may specify a new tree top for tree listings using<pre>:Ntree [dirname]</pre>
Without a "dirname", the current line is used (and any leading depth
information is elided).
With a "dirname", the specified directory name is used.</div>
<div class="old-help-para">The "gn" map will take the word below the cursor and use that for
changing the top of the tree listing.</div>
<div class="old-help-para"><h3 class="help-heading">NETRW CLEAN<span class="help-heading-tags">					<a name="netrw-clean"></a><span class="help-tag">netrw-clean</span> <a name="%3ANetrwClean"></a><span class="help-tag">:NetrwClean</span> {{{2</span></h3></div>
<div class="old-help-para">With :NetrwClean one may easily remove netrw from one's home directory;
more precisely, from the first directory on your <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.</div>
<div class="old-help-para">With :NetrwClean!, netrw will attempt to remove netrw from all directories on
your <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.  Of course, you have to have write/delete permissions
correct to do this.</div>
<div class="old-help-para">With either form of the command, netrw will first ask for confirmation
that the removal is in fact what you want to do.  If netrw doesn't have
permission to remove a file, it will issue an error message.</div>
<div class="old-help-para">						<a name="netrw-gx"></a><code class="help-tag-right">netrw-gx</code>
CUSTOMIZING BROWSING WITH A SPECIAL HANDLER	<a name="netrw-x"></a><code class="help-tag">netrw-x</code> <a name="netrw-handler"></a><code class="help-tag">netrw-handler</code> {{{2
						(also see <a href="/neovim-docs-web/en/pi_netrw#netrw_filehandler">netrw_filehandler</a>)</div>
<div class="old-help-para">Certain files, such as html, gif, jpeg, (word/office) doc, etc, files, are
best seen with a special handler (ie. a tool provided with your computer's
operating system).  Netrw allows one to invoke such special handlers by:<pre>* when Exploring, hit the "x" key
* when editing, hit gx with the cursor atop the special filename</pre></div>
<div class="old-help-para">	  (latter not available if the <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_nogx">g:netrw_nogx</a> variable exists)</div>
<div class="old-help-para">Netrw determines which special handler by the following method:</div>
<div class="old-help-para"><div class="help-li" style=""> if <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_browsex_viewer">g:netrw_browsex_viewer</a> exists, then it will be used to attempt to
    view files.  Examples of useful settings (place into your &lt;.vimrc&gt;):<pre>:let g:netrw_browsex_viewer= "kfmclient exec"</pre>
</div></div>
<div class="old-help-para">   or<pre>:let g:netrw_browsex_viewer= "xdg-open"</pre></div>
<div class="old-help-para">    If g:netrw_browsex_viewer == '-', then netrwFileHandlers#Invoke() will be
    used instead (see <a href="/neovim-docs-web/en/pi_netrw#netrw_filehandler">netrw_filehandler</a>).</div>
<div class="old-help-para">    If the viewer you wish to use does not support handling of a remote URL
    directory, set <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_browsex_support_remote">g:netrw_browsex_support_remote</a> to 0.
<div class="help-li" style=""> for Windows 32 or 64, the URL and FileProtocolHandler dlls are used.
</div><div class="help-li" style=""> for Gnome (with gnome-open): gnome-open is used.
</div><div class="help-li" style=""> for KDE (with kfmclient)   : kfmclient is used
</div><div class="help-li" style=""> for Mac OS X               : open is used.
</div><div class="help-li" style=""> otherwise the netrwFileHandler plugin is used.
</div></div>
<div class="old-help-para">The file's suffix is used by these various approaches to determine an
appropriate application to use to "handle" these files.  Such things as
OpenOffice (.sfx), visualization (.jpg, *.gif, etc), and PostScript (.ps,
.eps) can be handled.</div>
<div class="old-help-para">The gx mapping extends to all buffers; apply "gx" while atop a word and netrw
will apply a special handler to it (like "x" works when in a netrw buffer).
One may also use visual mode (see <a href="/neovim-docs-web/en/visual#visual-start">visual-start</a>) to select the text that the
special handler will use.  Normally gx uses expand("&lt;cfile&gt;") to pick up the
text under the cursor; one may change what <a href="/neovim-docs-web/en/builtin#expand()">expand()</a> uses via the
<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_gx">g:netrw_gx</a> variable (options include "&lt;cword&gt;", "&lt;cWORD&gt;").  Note that
expand("&lt;cfile&gt;") depends on the <a href="/neovim-docs-web/en/options#'isfname'">'isfname'</a> setting.  Alternatively, one may
select the text to be used by gx by making a visual selection (see
<a href="/neovim-docs-web/en/visual#visual-block">visual-block</a>) and then pressing gx.</div>
<div class="old-help-para">Associated setting variables:
	<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_gx">g:netrw_gx</a>  	control how gx picks up the text under the cursor
	<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_nogx">g:netrw_nogx</a>  	prevent gx map while editing
	<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_suppress_gx_mesg">g:netrw_suppress_gx_mesg</a> controls gx's suppression of browser messages</div>
<div class="old-help-para">							<a name="netrw_filehandler"></a><code class="help-tag-right">netrw_filehandler</code></div>
<div class="old-help-para">When <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_browsex_viewer">g:netrw_browsex_viewer</a> exists and is "-", then netrw will attempt to
handle the special file with a vim function.  The "x" map applies a function
to a file, based on its extension.  Of course, the handler function must exist
for it to be called!
<pre>Ex. mypgm.html   x -&gt; NFH_html("scp://user@host/some/path/mypgm.html")</pre></div>
<div class="old-help-para">	Users may write their own netrw File Handler functions to
	support more suffixes with special handling.  See
	&lt;autoload/netrwFileHandlers.vim&gt; for examples on how to make
	file handler functions.   As an example:<pre>" NFH_suffix(filename)
fun! NFH_suffix(filename)
..do something special with filename..
endfun</pre></div>
<div class="old-help-para">These functions need to be defined in some file in your .vim/plugin
(vimfiles\plugin) directory.  Vim's function names may not have punctuation
characters (except for the underscore) in them.  To support suffices that
contain such characters, netrw will first convert the suffix using the
following table:<pre>@ -&gt; AT       ! -&gt; EXCLAMATION    % -&gt; PERCENT
: -&gt; COLON    = -&gt; EQUAL          ? -&gt; QUESTION
, -&gt; COMMA    - -&gt; MINUS          ; -&gt; SEMICOLON
$ -&gt; DOLLAR   + -&gt; PLUS           ~ -&gt; TILDE</pre></div>
<div class="old-help-para">So, for example:<pre>file.rcs,v  -&gt;  NFH_rcsCOMMAv()</pre></div>
<div class="old-help-para">If more such translations are necessary, please send me email:<pre>NcampObell@SdrPchip.AorgM-NOSPAM</pre>
with a request.  (remove the embedded NOSPAM first)</div>
<div class="old-help-para">Associated setting variable: <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_browsex_viewer">g:netrw_browsex_viewer</a></div>
<div class="old-help-para">							<a name="netrw-curdir"></a><code class="help-tag-right">netrw-curdir</code>
<h3 class="help-heading">DELETING BOOKMARKS<span class="help-heading-tags">					<a name="netrw-mB"></a><span class="help-tag">netrw-mB</span> {{{2</span></h3></div>
<div class="old-help-para">To delete a bookmark, use<pre>{cnt}mB</pre>
If there are marked files, then mB will remove them from the
bookmark list.</div>
<div class="old-help-para">Alternatively, one may use :NetrwMB! (see <a href="/neovim-docs-web/en/pi_netrw#netrw-%3ANetrwMB">netrw-:NetrwMB</a>).<pre>:NetrwMB! [files/directories]</pre>
Related Topics:
	<a href="/neovim-docs-web/en/pi_netrw#netrw-gb">netrw-gb</a> how to return (go) to a bookmark
	<a href="/neovim-docs-web/en/pi_netrw#netrw-mb">netrw-mb</a> how to make a bookmark
	<a href="/neovim-docs-web/en/pi_netrw#netrw-qb">netrw-qb</a> how to list bookmarks</div>
<div class="old-help-para"><h3 class="help-heading">DELETING FILES OR DIRECTORIES<span class="help-heading-tags">	<a name="netrw-delete"></a><span class="help-tag">netrw-delete</span> <a name="netrw-D"></a><span class="help-tag">netrw-D</span> <a name="netrw-del"></a><span class="help-tag">netrw-del</span> {{{2</span></h3></div>
<div class="old-help-para">If files have not been marked with <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a>:   (local marked file list)</div>
<div class="old-help-para">    Deleting/removing files and directories involves moving the cursor to the
    file/directory to be deleted and pressing "D".  Directories must be empty
    first before they can be successfully removed.  If the directory is a
    softlink to a directory, then netrw will make two requests to remove the
    directory before succeeding.  Netrw will ask for confirmation before doing
    the removal(s).  You may select a range of lines with the "V" command
    (visual selection), and then pressing "D".</div>
<div class="old-help-para">If files have been marked with <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a>:   (local marked file list)</div>
<div class="old-help-para">    Marked files (and empty directories) will be deleted; again, you'll be
    asked to confirm the deletion before it actually takes place.</div>
<div class="old-help-para">A further approach is to delete files which match a pattern.</div>
<div class="old-help-para"><div class="help-li" style=""> use  :MF pattern  (see <a href="/neovim-docs-web/en/pi_netrw#netrw-%3AMF">netrw-:MF</a>); then press "D".
</div></div>
<div class="old-help-para"><div class="help-li" style=""> use mr (see <a href="/neovim-docs-web/en/pi_netrw#netrw-mr">netrw-mr</a>) which will prompt you for pattern.
      This will cause the matching files to be marked.  Then,
      press "D".
</div></div>
<div class="old-help-para">If your vim has 7.4 with patch#1107, then <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_localrmdir">g:netrw_localrmdir</a> no longer
is used to remove directories; instead, vim's <a href="/neovim-docs-web/en/builtin#delete()">delete()</a> is used with
the "d" option.  Please note that only empty directories may be deleted
with the "D" mapping.  Regular files are deleted with <a href="/neovim-docs-web/en/builtin#delete()">delete()</a>, too.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_rm_cmd">g:netrw_rm_cmd</a>, <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_rmf_cmd">g:netrw_rmf_cmd</a>, and <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_rmdir_cmd">g:netrw_rmdir_cmd</a> variables are
used to control the attempts to remove remote files and directories.  The
g:netrw_rm_cmd is used with files, and its default value is:</div>
<div class="old-help-para">	g:netrw_rm_cmd: ssh HOSTNAME rm</div>
<div class="old-help-para">The g:netrw_rmdir_cmd variable is used to support the removal of directories.
Its default value is:</div>
<div class="old-help-para">	<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_rmdir_cmd">g:netrw_rmdir_cmd</a>: ssh HOSTNAME rmdir</div>
<div class="old-help-para">If removing a directory fails with g:netrw_rmdir_cmd, netrw then will attempt
to remove it again using the g:netrw_rmf_cmd variable.  Its default value is:</div>
<div class="old-help-para">	<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_rmf_cmd">g:netrw_rmf_cmd</a>: ssh HOSTNAME rm -f</div>
<div class="old-help-para">Related topics: <a href="/neovim-docs-web/en/pi_netrw#netrw-d">netrw-d</a>
Associated setting variable: <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_localrmdir">g:netrw_localrmdir</a> <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_rm_cmd">g:netrw_rm_cmd</a>
                             <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_rmdir_cmd">g:netrw_rmdir_cmd</a>   <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_ssh_cmd">g:netrw_ssh_cmd</a></div>
<div class="old-help-para"><a name="netrw-explore"></a><code class="help-tag">netrw-explore</code>  <a name="netrw-hexplore"></a><code class="help-tag">netrw-hexplore</code> <a name="netrw-nexplore"></a><code class="help-tag">netrw-nexplore</code> <a name="netrw-pexplore"></a><code class="help-tag">netrw-pexplore</code>
<a name="netrw-rexplore"></a><code class="help-tag">netrw-rexplore</code> <a name="netrw-sexplore"></a><code class="help-tag">netrw-sexplore</code> <a name="netrw-texplore"></a><code class="help-tag">netrw-texplore</code> <a name="netrw-vexplore"></a><code class="help-tag">netrw-vexplore</code> <a name="netrw-lexplore"></a><code class="help-tag">netrw-lexplore</code>
DIRECTORY EXPLORATION COMMANDS  {{{2</div>
<div class="old-help-para">     :[N]Explore[!]  [dir]... Explore directory of current file      <a name="%3AExplore"></a><code class="help-tag">:Explore</code>
     :[N]Hexplore[!] [dir]... Horizontal Split &amp; Explore             <a name="%3AHexplore"></a><code class="help-tag-right">:Hexplore</code>
     :[N]Lexplore[!] [dir]... Left Explorer Toggle                   <a name="%3ALexplore"></a><code class="help-tag-right">:Lexplore</code>
     :[N]Sexplore[!] [dir]... Split&amp;Explore current file's directory <a name="%3ASexplore"></a><code class="help-tag">:Sexplore</code>
     :[N]Vexplore[!] [dir]... Vertical   Split &amp; Explore             <a name="%3AVexplore"></a><code class="help-tag-right">:Vexplore</code>
     :Texplore       [dir]... Tab &amp; Explore                          <a name="%3ATexplore"></a><code class="help-tag-right">:Texplore</code>
     :Rexplore            ... Return to/from Explorer                <a name="%3ARexplore"></a><code class="help-tag-right">:Rexplore</code></div>
<div class="old-help-para">     Used with :Explore **/pattern : (also see <a href="/neovim-docs-web/en/pi_netrw#netrw-starstar">netrw-starstar</a>)
     :Nexplore............. go to next matching file                <a name="%3ANexplore"></a><code class="help-tag-right">:Nexplore</code>
     :Pexplore............. go to previous matching file            <a name="%3APexplore"></a><code class="help-tag-right">:Pexplore</code></div>
<div class="old-help-para">						<a name="netrw-%3AExplore"></a><code class="help-tag-right">netrw-:Explore</code>
:Explore  will open the local-directory browser on the current file's
          directory (or on directory [dir] if specified).  The window will be
	  split only if the file has been modified and <a href="/neovim-docs-web/en/options#'hidden'">'hidden'</a> is not set,
	  otherwise the browsing window will take over that window.  Normally
	  the splitting is taken horizontally.
	  Also see: <a href="/neovim-docs-web/en/pi_netrw#netrw-%3ARexplore">netrw-:Rexplore</a>
:Explore! is like :Explore, but will use vertical splitting.</div>
<div class="old-help-para">						<a name="netrw-%3AHexplore"></a><code class="help-tag-right">netrw-:Hexplore</code>
:Hexplore  [dir] does an :Explore with <a href="/neovim-docs-web/en/windows#%3Abelowright">:belowright</a> horizontal splitting.
:Hexplore! [dir] does an :Explore with <a href="/neovim-docs-web/en/windows#%3Aaboveleft">:aboveleft</a>  horizontal splitting.</div>
<div class="old-help-para">						<a name="netrw-%3ALexplore"></a><code class="help-tag-right">netrw-:Lexplore</code>
:[N]Lexplore [dir] toggles a full height Explorer window on the left hand side
	  of the current tab.  It will open a netrw window on the current
	  directory if [dir] is omitted; a :Lexplore [dir] will show the
	  specified directory in the left-hand side browser display no matter
	  from which window the command is issued.</div>
<div class="old-help-para">	  By default, :Lexplore will change an uninitialized <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_chgwin">g:netrw_chgwin</a>
	  to 2; edits will thus preferentially be made in window#2.</div>
<div class="old-help-para">	  The [N] specifies a <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_winsize">g:netrw_winsize</a> just for the new :Lexplore
	  window.</div>
<div class="old-help-para">	  Those who like this method often also like tree style displays;
	  see <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_liststyle">g:netrw_liststyle</a>.</div>
<div class="old-help-para">:[N]Lexplore! [dir] is similar to :Lexplore, except that the full-height
	  Explorer window will open on the right hand side and an
	  uninitialized <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_chgwin">g:netrw_chgwin</a> will be set to 1 (eg. edits will
	  preferentially occur in the leftmost window).</div>
<div class="old-help-para">	  Also see: <a href="/neovim-docs-web/en/pi_netrw#netrw-C">netrw-C</a>           <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_browse_split">g:netrw_browse_split</a>   <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_wiw">g:netrw_wiw</a>
		    <a href="/neovim-docs-web/en/pi_netrw#netrw-p">netrw-p</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-P">netrw-P</a>   <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_chgwin">g:netrw_chgwin</a>
		    <a href="/neovim-docs-web/en/pi_netrw#netrw-c-tab">netrw-c-tab</a>       <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_winsize">g:netrw_winsize</a></div>
<div class="old-help-para">						<a name="netrw-%3ASexplore"></a><code class="help-tag-right">netrw-:Sexplore</code>
:[N]Sexplore will always split the window before invoking the local-directory
	  browser.  As with Explore, the splitting is normally done
	  horizontally.
:[N]Sexplore! [dir] is like :Sexplore, but the splitting will be done vertically.</div>
<div class="old-help-para">						<a name="netrw-%3ATexplore"></a><code class="help-tag-right">netrw-:Texplore</code>
:Texplore  [dir] does a <a href="/neovim-docs-web/en/tabpage#%3Atabnew">:tabnew</a> before generating the browser window</div>
<div class="old-help-para">						<a name="netrw-%3AVexplore"></a><code class="help-tag-right">netrw-:Vexplore</code>
:[N]Vexplore  [dir] does an :Explore with <a href="/neovim-docs-web/en/windows#%3Aleftabove">:leftabove</a>  vertical splitting.
:[N]Vexplore! [dir] does an :Explore with <a href="/neovim-docs-web/en/windows#%3Arightbelow">:rightbelow</a> vertical splitting.</div>
<div class="old-help-para">The optional parameters are:</div>
<div class="old-help-para"> [N]: This parameter will override <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_winsize">g:netrw_winsize</a> to specify the quantity of
      rows and/or columns the new explorer window should have.
      Otherwise, the <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_winsize">g:netrw_winsize</a> variable, if it has been specified by the
      user, is used to control the quantity of rows and/or columns new
      explorer windows should have.</div>
<div class="old-help-para"> [dir]: By default, these explorer commands use the current file's directory.
        However, one may explicitly provide a directory (path) to use instead;
	ie.<pre>:Explore /some/path</pre></div>
<div class="old-help-para">						<a name="netrw-%3ARexplore"></a><code class="help-tag-right">netrw-:Rexplore</code>
:Rexplore  This command is a little different from the other Explore commands
	   as it doesn't necessarily open an Explorer window.</div>
<div class="old-help-para">	   Return to Explorer~
	   When one edits a file using netrw which can occur, for example,
	   when pressing <code>&lt;cr&gt;</code> while the cursor is atop a filename in a netrw
	   browser window, a :Rexplore issued while editing that file will
	   return the display to that of the last netrw browser display in
	   that window.</div>
<div class="old-help-para">	   Return from Explorer~
	   Conversely, when one is editing a directory, issuing a :Rexplore
	   will return to editing the file that was last edited in that
	   window.</div>
<div class="old-help-para">	   The <code>&lt;2-leftmouse&gt;</code> map (which is only available under gvim and
	   cooperative terms) does the same as :Rexplore.</div>
<div class="old-help-para">Also see: <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_alto">g:netrw_alto</a> <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_altv">g:netrw_altv</a> <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_winsize">g:netrw_winsize</a></div>
<div class="old-help-para"><a name="netrw-star"></a><code class="help-tag">netrw-star</code> <a name="netrw-starpat"></a><code class="help-tag">netrw-starpat</code> <a name="netrw-starstar"></a><code class="help-tag">netrw-starstar</code> <a name="netrw-starstarpat"></a><code class="help-tag">netrw-starstarpat</code> <a name="netrw-grep"></a><code class="help-tag">netrw-grep</code>
EXPLORING WITH STARS AND PATTERNS {{{2</div>
<div class="old-help-para">When Explore, Sexplore, Hexplore, or Vexplore are used with one of the
following four patterns Explore generates a list of files which satisfy the
request for the local file system.  These exploration patterns will not work
with remote file browsing.</div>
<div class="old-help-para">/filepat	files in current directory which satisfy filepat
    **/filepat	files in current directory or below which satisfy the
		file pattern//pattern	files in the current directory which contain the
		pattern (vimgrep is used)
    **//pattern	files in the current directory or below which contain
		the pattern (vimgrep is used)</div>
<div class="old-help-para">The cursor will be placed on the first file in the list.  One may then
continue to go to subsequent files on that list via <a href="/neovim-docs-web/en/pi_netrw#%3ANexplore">:Nexplore</a> or to
preceding files on that list with <a href="/neovim-docs-web/en/pi_netrw#%3APexplore">:Pexplore</a>.  Explore will update the
directory and place the cursor appropriately.</div>
<div class="old-help-para">A plain<pre>:Explore</pre>
will clear the explore list.</div>
<div class="old-help-para">If your console or gui produces recognizable shift-up or shift-down sequences,
then you'll likely find using shift-downarrow and shift-uparrow convenient.
They're mapped by netrw as follows:</div>
<div class="old-help-para">	<code>&lt;s-down&gt;</code>  == Nexplore, and
	<code>&lt;s-up&gt;</code>    == Pexplore.</div>
<div class="old-help-para">As an example, consider
<pre>:Explore */*.c
:Nexplore
:Nexplore
:Pexplore</pre></div>
<div class="old-help-para">The status line will show, on the right hand side of the status line, a
message like "Match 3 of 20".</div>
<div class="old-help-para">Associated setting variables:
	<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_keepdir">g:netrw_keepdir</a>          <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_browse_split">g:netrw_browse_split</a>
	<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_fastbrowse">g:netrw_fastbrowse</a>       <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_ftp_browse_reject">g:netrw_ftp_browse_reject</a>
	<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_ftp_list_cmd">g:netrw_ftp_list_cmd</a>     <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_ftp_sizelist_cmd">g:netrw_ftp_sizelist_cmd</a>
	<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_ftp_timelist_cmd">g:netrw_ftp_timelist_cmd</a> <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_list_cmd">g:netrw_list_cmd</a>
	<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_liststyle">g:netrw_liststyle</a></div>
<div class="old-help-para"><h3 class="help-heading">DISPLAYING INFORMATION ABOUT FILE<span class="help-heading-tags">				<a name="netrw-qf"></a><span class="help-tag">netrw-qf</span> {{{2</span></h3></div>
<div class="old-help-para">With the cursor atop a filename, pressing "qf" will reveal the file's size
and last modification timestamp.  Currently this capability is only available
for local files.</div>
<div class="old-help-para"><h3 class="help-heading">EDIT FILE OR DIRECTORY HIDING LIST<span class="help-heading-tags">	<a name="netrw-ctrl-h"></a><span class="help-tag">netrw-ctrl-h</span> <a name="netrw-edithide"></a><span class="help-tag">netrw-edithide</span> {{{2</span></h3></div>
<div class="old-help-para">The "&lt;ctrl-h&gt;" map brings up a requestor allowing the user to change the
file/directory hiding list contained in <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_list_hide">g:netrw_list_hide</a>.  The hiding list
consists of one or more patterns delimited by commas.  Files and/or
directories satisfying these patterns will either be hidden (ie. not shown) or
be the only ones displayed (see <a href="/neovim-docs-web/en/pi_netrw#netrw-a">netrw-a</a>).</div>
<div class="old-help-para">The "gh" mapping (see <a href="/neovim-docs-web/en/pi_netrw#netrw-gh">netrw-gh</a>) quickly alternates between the usual
hiding list and the hiding of files or directories that begin with ".".</div>
<div class="old-help-para">As an example,<pre>let g:netrw_list_hide= '\(^\|\s\s\)\zs\.\S\+'</pre>
Effectively, this makes the effect of a <a href="/neovim-docs-web/en/pi_netrw#netrw-gh">netrw-gh</a> command the initial setting.
What it means:</div>
<div class="old-help-para">	\(^\|\s\s\)   : if the line begins with the following, -or-
	                two consecutive spaces are encountered
	\zs           : start the hiding match now
	\.            : if it now begins with a dot
	\S\+          : and is followed by one or more non-whitespace
	                characters</div>
<div class="old-help-para">Associated setting variables: <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_hide">g:netrw_hide</a> <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_list_hide">g:netrw_list_hide</a>
Associated topics: <a href="/neovim-docs-web/en/pi_netrw#netrw-a">netrw-a</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-gh">netrw-gh</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-mh">netrw-mh</a></div>
<div class="old-help-para">					<a name="netrw-sort-sequence"></a><code class="help-tag-right">netrw-sort-sequence</code>
<h3 class="help-heading">EDITING THE SORTING SEQUENCE<span class="help-heading-tags">		<a name="netrw-S"></a><span class="help-tag">netrw-S</span> <a name="netrw-sortsequence"></a><span class="help-tag">netrw-sortsequence</span> {{{2</span></h3></div>
<div class="old-help-para">When "Sorted by" is name, one may specify priority via the sorting sequence
(g:netrw_sort_sequence).  The sorting sequence typically prioritizes the
name-listing by suffix, although any pattern will do.  Patterns are delimited
by commas.  The default sorting sequence is (all one line):</div>
<div class="old-help-para">For Unix:<pre>'[\/]$,\&lt;core\%(\.\d\+\)\=,\.[a-np-z]$,\.h$,\.c$,\.cpp$,*,\.o$,\.obj$,
\.info$,\.swp$,\.bak$,\~$'</pre></div>
<div class="old-help-para">Otherwise:<pre>'[\/]$,\.[a-np-z]$,\.h$,\.c$,\.cpp$,*,\.o$,\.obj$,\.info$,
\.swp$,\.bak$,\~$'</pre></div>
<div class="old-help-para">The lone * is where all filenames not covered by one of the other patterns
will end up.  One may change the sorting sequence by modifying the
g:netrw_sort_sequence variable (either manually or in your &lt;.vimrc&gt;) or by
using the "S" map.</div>
<div class="old-help-para">Related topics:               <a href="/neovim-docs-web/en/pi_netrw#netrw-s">netrw-s</a>               <a href="/neovim-docs-web/en/pi_netrw#netrw-S">netrw-S</a>
Associated setting variables: <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_sort_sequence">g:netrw_sort_sequence</a> <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_sort_options">g:netrw_sort_options</a></div>
<div class="old-help-para"><h3 class="help-heading">EXECUTING FILE UNDER CURSOR VIA SYSTEM()<span class="help-heading-tags">			<a name="netrw-X"></a><span class="help-tag">netrw-X</span> {{{2</span></h3></div>
<div class="old-help-para">Pressing X while the cursor is atop an executable file will yield a prompt
using the filename asking for any arguments.  Upon pressing a [return], netrw
will then call <a href="/neovim-docs-web/en/builtin#system()">system()</a> with that command and arguments.  The result will be
displayed by <a href="/neovim-docs-web/en/eval#%3Aechomsg">:echomsg</a>, and so <a href="/neovim-docs-web/en/message#%3Amessages">:messages</a> will repeat display of the result.
Ansi escape sequences will be stripped out.</div>
<div class="old-help-para">See <a href="/neovim-docs-web/en/cmdline#cmdline-window">cmdline-window</a> for directions for more on how to edit the arguments.</div>
<div class="old-help-para">FORCING TREATMENT AS A FILE OR DIRECTORY	<a name="netrw-gd"></a><code class="help-tag">netrw-gd</code> <a name="netrw-gf"></a><code class="help-tag">netrw-gf</code> {{{2</div>
<div class="old-help-para">Remote symbolic links (ie. those listed via ssh or ftp) are problematic
in that it is difficult to tell whether they link to a file or to a
directory.</div>
<div class="old-help-para">To force treatment as a file: use<pre>gf</pre></div>
<div class="old-help-para">To force treatment as a directory: use<pre>gd</pre></div>
<div class="old-help-para"><h3 class="help-heading">GOING UP<span class="help-heading-tags">							<a name="netrw--"></a><span class="help-tag">netrw--</span> {{{2</span></h3></div>
<div class="old-help-para">To go up a directory, press "-" or press the <code>&lt;cr&gt;</code> when atop the ../ directory
entry in the listing.</div>
<div class="old-help-para">Netrw will use the command in <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_list_cmd">g:netrw_list_cmd</a> to perform the directory
listing operation after changing HOSTNAME to the host specified by the
user-prpvided url.  By default netrw provides the command as:<pre>ssh HOSTNAME ls -FLa</pre></div>
<div class="old-help-para">where the HOSTNAME becomes the [user@]hostname as requested by the attempt to
read.  Naturally, the user may override this command with whatever is
preferred.  The NetList function which implements remote browsing
expects that directories will be flagged by a trailing slash.</div>
<div class="old-help-para"><h3 class="help-heading">HIDING FILES OR DIRECTORIES<span class="help-heading-tags">			<a name="netrw-a"></a><span class="help-tag">netrw-a</span> <a name="netrw-hiding"></a><span class="help-tag">netrw-hiding</span> {{{2</span></h3></div>
<div class="old-help-para">Netrw's browsing facility allows one to use the hiding list in one of three
ways: ignore it, hide files which match, and show only those files which
match.</div>
<div class="old-help-para">If no files have been marked via <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a>:</div>
<div class="old-help-para">The "a" map allows the user to cycle through the three hiding modes.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_list_hide">g:netrw_list_hide</a> variable holds a comma delimited list of patterns
based on regular expressions (ex. ^.*\.obj$,^\.) which specify the hiding list.
(also see <a href="/neovim-docs-web/en/pi_netrw#netrw-ctrl-h">netrw-ctrl-h</a>)  To set the hiding list, use the <code>&lt;c-h&gt;</code> map.  As an
example, to hide files which begin with a ".", one may use the <code>&lt;c-h&gt;</code> map to
set the hiding list to '^\..*' (or one may put let g:netrw_list_hide= '^\..*'
in one's &lt;.vimrc&gt;).  One may then use the "a" key to show all files, hide
matching files, or to show only the matching files.</div>
<div class="old-help-para">	Example: \.[ch]$
		This hiding list command will hide/show all *.c and *.h files.</div>
<div class="old-help-para">	Example: \.c$,\.h$
		This hiding list command will also hide/show all *.c and *.h		files.</div>
<div class="old-help-para">Don't forget to use the "a" map to select the mode (normal/hiding/show) you
want!</div>
<div class="old-help-para">If files have been marked using <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a>, then this command will:</div>
<div class="old-help-para">  if showing all files or non-hidden files:
   modify the g:netrw_list_hide list by appending the marked files to it
   and showing only non-hidden files.</div>
<div class="old-help-para">  else if showing hidden files only:
   modify the g:netrw_list_hide list by removing the marked files from it
   and showing only non-hidden files.
  endif</div>
<div class="old-help-para">					<a name="netrw-gh"></a><code class="help-tag-right">netrw-gh</code> <a name="netrw-hide"></a><code class="help-tag">netrw-hide</code>
As a quick shortcut, one may press<pre>gh</pre>
to toggle between hiding files which begin with a period (dot) and not hiding
them.</div>
<div class="old-help-para">Associated setting variables: <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_list_hide">g:netrw_list_hide</a>  <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_hide">g:netrw_hide</a>
Associated topics: <a href="/neovim-docs-web/en/pi_netrw#netrw-a">netrw-a</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-ctrl-h">netrw-ctrl-h</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-mh">netrw-mh</a></div>
<div class="old-help-para">					<a name="netrw-gitignore"></a><code class="help-tag-right">netrw-gitignore</code>
Netrw provides a helper function 'netrw_gitignore#Hide()' that, when used with
<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_list_hide">g:netrw_list_hide</a> automatically hides all git-ignored files.</div>
<div class="old-help-para">'netrw_gitignore#Hide' searches for patterns in the following files:<pre>'./.gitignore'
'./.git/info/exclude'
global gitignore file: `git config --global core.excludesfile`
system gitignore file: `git config --system core.excludesfile`</pre></div>
<div class="old-help-para">Files that do not exist, are ignored.
Git-ignore patterns are taken from existing files, and converted to patterns for
hiding files. For example, if you had '.log' in your '.gitignore' file, it
would be converted to '.*\.log'.
To use this function, simply assign its output to <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_list_hide">g:netrw_list_hide</a> option.<pre>Example: let g:netrw_list_hide= netrw_gitignore#Hide()
        Git-ignored files are hidden in Netrw.

Example: let g:netrw_list_hide= netrw_gitignore#Hide('my_gitignore_file')
        Function can take additional files with git-ignore patterns.

Example: let g:netrw_list_hide= netrw_gitignore#Hide() .. '.*\.swp$'
        Combining 'netrw_gitignore#Hide' with custom patterns.</pre></div>
<div class="old-help-para"><h3 class="help-heading">IMPROVING BROWSING<span class="help-heading-tags">			<a name="netrw-listhack"></a><span class="help-tag">netrw-listhack</span> <a name="netrw-ssh-hack"></a><span class="help-tag">netrw-ssh-hack</span> {{{2</span></h3></div>
<div class="old-help-para">Especially with the remote directory browser, constantly entering the password
is tedious.</div>
<div class="old-help-para">For Linux/Unix systems, the book "Linux Server Hacks - 100 industrial strength
tips &amp; tools" by Rob Flickenger (O'Reilly, ISBN 0-596-00461-3) gives a tip
for setting up no-password ssh and scp and discusses associated security
issues.  It used to be available at <a href="http://hacks.oreilly.com/pub/h/66">http://hacks.oreilly.com/pub/h/66</a> ,
but apparently that address is now being redirected to some "hackzine".
I'll attempt a summary based on that article and on a communication from
Ben Schmidt:</div>
<div class="old-help-para">	1. Generate a public/private key pair on the local machine
	   (ssh client):<pre>ssh-keygen -t rsa
(saving the file in ~/.ssh/id_rsa as prompted)</pre></div>
<div class="old-help-para">	2. Just hit the <code>&lt;CR&gt;</code> when asked for passphrase (twice) for no
	   passphrase.  If you do use a passphrase, you will also need to use
	   ssh-agent so you only have to type the passphrase once per session.
	   If you don't use a passphrase, simply logging onto your local
	   computer or getting access to the keyfile in any way will suffice
	   to access any ssh servers which have that key authorized for login.</div>
<div class="old-help-para">	3. This creates two files:<pre>~/.ssh/id_rsa
~/.ssh/id_rsa.pub</pre></div>
<div class="old-help-para">	4. On the target machine (ssh server):<pre>cd
mkdir -p .ssh
chmod 0700 .ssh</pre></div>
<div class="old-help-para">	5. On your local machine (ssh client): (one line)<pre>ssh {serverhostname}
  cat '&gt;&gt;' '~/.ssh/authorized_keys2' &lt; ~/.ssh/id_rsa.pub</pre></div>
<div class="old-help-para">	   or, for OpenSSH, (one line)<pre>ssh {serverhostname}
  cat '&gt;&gt;' '~/.ssh/authorized_keys' &lt; ~/.ssh/id_rsa.pub</pre></div>
<div class="old-help-para">You can test it out with<pre>ssh {serverhostname}</pre>
and you should be log onto the server machine without further need to type
anything.</div>
<div class="old-help-para">If you decided to use a passphrase, do:<pre>ssh-agent $SHELL
ssh-add
ssh {serverhostname}</pre>
You will be prompted for your key passphrase when you use ssh-add, but not
subsequently when you use ssh.  For use with vim, you can use<pre>ssh-agent vim</pre>
and, when next within vim, use<pre>:!ssh-add</pre>
Alternatively, you can apply ssh-agent to the terminal you're planning on
running vim in:<pre>ssh-agent xterm &amp;</pre>
and do ssh-add whenever you need.</div>
<div class="old-help-para">For Windows, folks on the vim mailing list have mentioned that Pageant helps
with avoiding the constant need to enter the password.</div>
<div class="old-help-para">Kingston Fung wrote about another way to avoid constantly needing to enter
passwords:</div>
<div class="old-help-para">    In order to avoid the need to type in the password for scp each time, you
    provide a hack in the docs to set up a non password ssh account. I found a
    better way to do that: I can use a regular ssh account which uses a
    password to access the material without the need to key-in the password
    each time. It's good for security and convenience. I tried ssh public key
    authorization + ssh-agent, implementing this, and it works! Here are two
    links with instructions:</div>
<div class="old-help-para">    <a href="http://www.ibm.com/developerworks/library/l-keyc2/">http://www.ibm.com/developerworks/library/l-keyc2/</a>
    <a href="http://sial.org/howto/openssh/publickey-auth/">http://sial.org/howto/openssh/publickey-auth/</a></div>
<div class="old-help-para">    Ssh hints:</div>
<div class="old-help-para">	Thomer Gil has provided a hint on how to speed up netrw+ssh:
	    <a href="http://thomer.com/howtos/netrw_ssh.html">http://thomer.com/howtos/netrw_ssh.html</a></div>
<div class="old-help-para">	Alex Young has several hints on speeding ssh up:
	    <a href="http://usevim.com/2012/03/16/editing-remote-files/">http://usevim.com/2012/03/16/editing-remote-files/</a></div>
<div class="old-help-para"><h3 class="help-heading">LISTING BOOKMARKS AND HISTORY<span class="help-heading-tags">		<a name="netrw-qb"></a><span class="help-tag">netrw-qb</span> <a name="netrw-listbookmark"></a><span class="help-tag">netrw-listbookmark</span> {{{2</span></h3></div>
<div class="old-help-para">Pressing "qb" (query bookmarks) will list both the bookmarked directories and
directory traversal history.</div>
<div class="old-help-para">Related Topics:
	<a href="/neovim-docs-web/en/pi_netrw#netrw-gb">netrw-gb</a> how to return (go) to a bookmark
	<a href="/neovim-docs-web/en/pi_netrw#netrw-mb">netrw-mb</a> how to make a bookmark
	<a href="/neovim-docs-web/en/pi_netrw#netrw-mB">netrw-mB</a> how to delete bookmarks
	<a href="/neovim-docs-web/en/pi_netrw#netrw-u">netrw-u</a>  change to a predecessor directory via the history stack
	<a href="/neovim-docs-web/en/pi_netrw#netrw-U">netrw-U</a>  change to a successor   directory via the history stack</div>
<div class="old-help-para">MAKING A NEW DIRECTORY					<a name="netrw-d"></a><code class="help-tag-right">netrw-d</code> {{{2</div>
<div class="old-help-para">With the "d" map one may make a new directory either remotely (which depends
on the global variable g:netrw_mkdir_cmd) or locally (which depends on the
global variable g:netrw_localmkdir).  Netrw will issue a request for the new
directory's name.  A bare <code>&lt;CR&gt;</code> at that point will abort the making of the
directory.  Attempts to make a local directory that already exists (as either
a file or a directory) will be detected, reported on, and ignored.</div>
<div class="old-help-para">Related topics: <a href="/neovim-docs-web/en/pi_netrw#netrw-D">netrw-D</a>
Associated setting variables:	<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_localmkdir">g:netrw_localmkdir</a>   <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_mkdir_cmd">g:netrw_mkdir_cmd</a>
				<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_remote_mkdir">g:netrw_remote_mkdir</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-%25">netrw-%</a></div>
<div class="old-help-para"><h3 class="help-heading">MAKING THE BROWSING DIRECTORY THE CURRENT DIRECTORY<span class="help-heading-tags">	<a name="netrw-cd"></a><span class="help-tag">netrw-cd</span> {{{2</span></h3></div>
<div class="old-help-para">By default, <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_keepdir">g:netrw_keepdir</a> is 1.  This setting means that the current
directory will not track the browsing directory. (done for backwards
compatibility with v6's file explorer).</div>
<div class="old-help-para">Setting g:netrw_keepdir to 0 tells netrw to make vim's current directory
track netrw's browsing directory.</div>
<div class="old-help-para">However, given the default setting for g:netrw_keepdir of 1 where netrw
maintains its own separate notion of the current directory, in order to make
the two directories the same, use the "cd" map (type cd).  That map will
set Vim's notion of the current directory to netrw's current browsing
directory.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/pi_netrw#netrw-cd">netrw-cd</a> : This map's name was changed from "c" to cd (see <a href="/neovim-docs-web/en/pi_netrw#netrw-cd">netrw-cd</a>).
           This change was done to allow for <a href="/neovim-docs-web/en/pi_netrw#netrw-cb">netrw-cb</a> and <a href="/neovim-docs-web/en/pi_netrw#netrw-cB">netrw-cB</a> maps.</div>
<div class="old-help-para">Associated setting variable: <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_keepdir">g:netrw_keepdir</a></div>
<div class="old-help-para"><h3 class="help-heading">MARKING FILES<span class="help-heading-tags">					<a name="netrw-%3AMF"></a><span class="help-tag">netrw-:MF</span>  	<a name="netrw-mf"></a><span class="help-tag">netrw-mf</span> {{{2</span></h3>	(also see <a href="/neovim-docs-web/en/pi_netrw#netrw-mr">netrw-mr</a>)</div>
<div class="old-help-para">Netrw provides several ways to mark files:</div>
<div class="old-help-para"><div class="help-li" style=""> One may mark files with the cursor atop a filename and
	  then pressing "mf".
</div></div>
<div class="old-help-para"><div class="help-li" style=""> With gvim, in addition one may mark files with
	  <code>&lt;s-leftmouse&gt;</code>. (see <a href="/neovim-docs-web/en/pi_netrw#netrw-mouse">netrw-mouse</a>)
</div></div>
<div class="old-help-para"><div class="help-li" style=""> One may use the :MF command, which takes a list of
	  files (for local directories, the list may include
	  wildcards -- see <a href="/neovim-docs-web/en/builtin#glob()">glob()</a>)<pre>:MF *.c</pre>
</div></div>
<div class="old-help-para">	  (Note that :MF uses <a href="/neovim-docs-web/en/map#%3Cf-args%3E">&lt;f-args&gt;</a> to break the line
	  at spaces)</div>
<div class="old-help-para"><div class="help-li" style=""> Mark files using the <a href="/neovim-docs-web/en/editing#argument-list">argument-list</a> (<a href="/neovim-docs-web/en/pi_netrw#netrw-mA">netrw-mA</a>)
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Mark files based upon a <a href="/neovim-docs-web/en/quickfix#location-list">location-list</a> (<a href="/neovim-docs-web/en/pi_netrw#netrw-qL">netrw-qL</a>)
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Mark files based upon the quickfix list (<a href="/neovim-docs-web/en/pi_netrw#netrw-qF">netrw-qF</a>)
	  (<a href="/neovim-docs-web/en/quickfix#quickfix-error-lists">quickfix-error-lists</a>)
</div></div>
<div class="old-help-para">The following netrw maps make use of marked files:</div>
<div class="old-help-para">    <a href="/neovim-docs-web/en/pi_netrw#netrw-a">netrw-a</a>  	Hide marked files/directories
    <a href="/neovim-docs-web/en/pi_netrw#netrw-D">netrw-D</a>  	Delete marked files/directories
    <a href="/neovim-docs-web/en/pi_netrw#netrw-ma">netrw-ma</a>  	Move marked files' names to <a href="/neovim-docs-web/en/editing#arglist">arglist</a>
    <a href="/neovim-docs-web/en/pi_netrw#netrw-mA">netrw-mA</a>  	Move <a href="/neovim-docs-web/en/editing#arglist">arglist</a> filenames to marked file list
    <a href="/neovim-docs-web/en/pi_netrw#netrw-mb">netrw-mb</a>  	Append marked files to bookmarks
    <a href="/neovim-docs-web/en/pi_netrw#netrw-mB">netrw-mB</a>  	Delete marked files from bookmarks
    <a href="/neovim-docs-web/en/pi_netrw#netrw-mc">netrw-mc</a>  	Copy marked files to target
    <a href="/neovim-docs-web/en/pi_netrw#netrw-md">netrw-md</a>  	Apply vimdiff to marked files
    <a href="/neovim-docs-web/en/pi_netrw#netrw-me">netrw-me</a>  	Edit marked files
    <a href="/neovim-docs-web/en/pi_netrw#netrw-mF">netrw-mF</a>  	Unmark marked files
    <a href="/neovim-docs-web/en/pi_netrw#netrw-mg">netrw-mg</a>  	Apply vimgrep to marked files
    <a href="/neovim-docs-web/en/pi_netrw#netrw-mm">netrw-mm</a>  	Move marked files to target
    <a href="/neovim-docs-web/en/pi_netrw#netrw-mp">netrw-mp</a>  	Print marked files
    <a href="/neovim-docs-web/en/pi_netrw#netrw-ms">netrw-ms</a>  	Netrw will source marked files
    <a href="/neovim-docs-web/en/pi_netrw#netrw-mt">netrw-mt</a>  	Set target for <a href="/neovim-docs-web/en/pi_netrw#netrw-mm">netrw-mm</a> and <a href="/neovim-docs-web/en/pi_netrw#netrw-mc">netrw-mc</a>
    <a href="/neovim-docs-web/en/pi_netrw#netrw-mT">netrw-mT</a>  	Generate tags using marked files
    <a href="/neovim-docs-web/en/pi_netrw#netrw-mv">netrw-mv</a>  	Apply vim command to marked files
    <a href="/neovim-docs-web/en/pi_netrw#netrw-mx">netrw-mx</a>  	Apply shell command to marked files
    <a href="/neovim-docs-web/en/pi_netrw#netrw-mX">netrw-mX</a>  	Apply shell command to marked files, en bloc
    <a href="/neovim-docs-web/en/pi_netrw#netrw-mz">netrw-mz</a>  	Compress/Decompress marked files
    <a href="/neovim-docs-web/en/pi_netrw#netrw-O">netrw-O</a>  	Obtain marked files
    <a href="/neovim-docs-web/en/pi_netrw#netrw-R">netrw-R</a>  	Rename marked files</div>
<div class="old-help-para">One may unmark files one at a time the same way one marks them; ie. place
the cursor atop a marked file and press "mf".  This process also works
with <code>&lt;s-leftmouse&gt;</code> using gvim.  One may unmark all files by pressing
"mu" (see <a href="/neovim-docs-web/en/pi_netrw#netrw-mu">netrw-mu</a>).</div>
<div class="old-help-para">Marked files are highlighted using the "netrwMarkFile" highlighting group,
which by default is linked to "Identifier" (see Identifier under
<a href="/neovim-docs-web/en/syntax#group-name">group-name</a>).  You may change the highlighting group by putting something
like<pre>highlight clear netrwMarkFile
hi link netrwMarkFile ..whatever..</pre></div>
<div class="old-help-para">into $HOME/.vim/after/syntax/netrw.vim .</div>
<div class="old-help-para">If the mouse is enabled and works with your vim, you may use <code>&lt;s-leftmouse&gt;</code> to
mark one or more files.  You may mark multiple files by dragging the shifted
leftmouse.  (see <a href="/neovim-docs-web/en/pi_netrw#netrw-mouse">netrw-mouse</a>)</div>
<div class="old-help-para">			<a name="markfilelist"></a><code class="help-tag-right">markfilelist</code> <a name="global_markfilelist"></a><code class="help-tag">global_markfilelist</code> <a name="local_markfilelist"></a><code class="help-tag">local_markfilelist</code>
All marked files are entered onto the global marked file list; there is only
one such list.  In addition, every netrw buffer also has its own buffer-local
marked file list; since netrw buffers are associated with specific
directories, this means that each directory has its own local marked file
list.  The various commands which operate on marked files use one or the other
of the marked file lists.</div>
<div class="old-help-para">Known Problem: if one is using tree mode (<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_liststyle">g:netrw_liststyle</a>) and several
directories have files with the same name,  then marking such a file will
result in all such files being highlighted as if they were all marked.  The
<a href="/neovim-docs-web/en/pi_netrw#markfilelist">markfilelist</a>, however, will only have the selected file in it.  This problem
is unlikely to be fixed.</div>
<div class="old-help-para"><h3 class="help-heading">UNMARKING FILES<span class="help-heading-tags">							<a name="netrw-mF"></a><span class="help-tag">netrw-mF</span> {{{2</span></h3>	(also see <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a>, <a href="/neovim-docs-web/en/pi_netrw#netrw-mu">netrw-mu</a>)</div>
<div class="old-help-para">The "mF" command will unmark all files in the current buffer.  One may also use
mf (<a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a>) on a specific, already marked, file to unmark just that file.</div>
<div class="old-help-para"><h3 class="help-heading">MARKING FILES BY LOCATION LIST<span class="help-heading-tags">					<a name="netrw-qL"></a><span class="help-tag">netrw-qL</span> {{{2</span></h3>	(also see <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a>)</div>
<div class="old-help-para">One may convert <a href="/neovim-docs-web/en/quickfix#location-list">location-list</a>s into a marked file list using "qL".
You may then proceed with commands such as me (<a href="/neovim-docs-web/en/pi_netrw#netrw-me">netrw-me</a>) to edit them.</div>
<div class="old-help-para"><h3 class="help-heading">MARKING FILES BY QUICKFIX LIST<span class="help-heading-tags">					<a name="netrw-qF"></a><span class="help-tag">netrw-qF</span> {{{2</span></h3>	(also see <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a>)</div>
<div class="old-help-para">One may convert <a href="/neovim-docs-web/en/quickfix#quickfix-error-lists">quickfix-error-lists</a> into a marked file list using "qF".
You may then proceed with commands such as me (<a href="/neovim-docs-web/en/pi_netrw#netrw-me">netrw-me</a>) to edit them.
Quickfix error lists are generated, for example, by calls to <a href="/neovim-docs-web/en/quickfix#%3Avimgrep">:vimgrep</a>.</div>
<div class="old-help-para"><h3 class="help-heading">MARKING FILES BY REGULAR EXPRESSION<span class="help-heading-tags">				<a name="netrw-mr"></a><span class="help-tag">netrw-mr</span> {{{2</span></h3>	(also see <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a>)</div>
<div class="old-help-para">One may also mark files by pressing "mr"; netrw will then issue a prompt,
"Enter regexp: ".  You may then enter a shell-style regular expression such
as.c$ (see <a href="/neovim-docs-web/en/builtin#glob()">glob()</a>).  For remote systems, glob() doesn't work -- so netrw
converts "*" into ".*" (see <a href="/neovim-docs-web/en/pattern#regexp">regexp</a>) and marks files based on that.  In the
future I may make it possible to use <a href="/neovim-docs-web/en/pattern#regexp">regexp</a>s instead of glob()-style
expressions (yet-another-option).</div>
<div class="old-help-para">See <a href="/neovim-docs-web/en/cmdline#cmdline-window">cmdline-window</a> for directions on more on how to edit the regular
expression.</div>
<div class="old-help-para">MARKED FILES, ARBITRARY VIM COMMAND				<a name="netrw-mv"></a><code class="help-tag-right">netrw-mv</code>  {{{2
	    (See <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a> and <a href="/neovim-docs-web/en/pi_netrw#netrw-mr">netrw-mr</a> for how to mark files)
		      (uses the local marked-file list)</div>
<div class="old-help-para">The "mv" map causes netrw to execute an arbitrary vim command on each file on
the local marked file list, individually:</div>
<div class="old-help-para"><div class="help-li" style=""> 1split
</div><div class="help-li" style=""> sil! keepalt e file
</div><div class="help-li" style=""> run vim command
</div><div class="help-li" style=""> sil! keepalt wq!
</div></div>
<div class="old-help-para">A prompt, "Enter vim command: ", will be issued to elicit the vim command you
wish used.  See <a href="/neovim-docs-web/en/cmdline#cmdline-window">cmdline-window</a> for directions for more on how to edit the
command.</div>
<div class="old-help-para">MARKED FILES, ARBITRARY SHELL COMMAND				<a name="netrw-mx"></a><code class="help-tag-right">netrw-mx</code> {{{2
	    (See <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a> and <a href="/neovim-docs-web/en/pi_netrw#netrw-mr">netrw-mr</a> for how to mark files)
		      (uses the local marked-file list)</div>
<div class="old-help-para">Upon activation of the "mx" map, netrw will query the user for some (external)
command to be applied to all marked files.  All "%"s in the command will be
substituted with the name of each marked file in turn.  If no "%"s are in the
command, then the command will be followed by a space and a marked filename.</div>
<div class="old-help-para">Example:
	(mark files)
	mx
	Enter command: cat</div>
<div class="old-help-para">	The result is a series of shell commands:
	cat 'file1'
	cat 'file2'
	...</div>
<div class="old-help-para">MARKED FILES, ARBITRARY SHELL COMMAND, EN BLOC 			<a name="netrw-mX"></a><code class="help-tag-right">netrw-mX</code> {{{2
	    (See <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a> and <a href="/neovim-docs-web/en/pi_netrw#netrw-mr">netrw-mr</a> for how to mark files)
		      (uses the global marked-file list)</div>
<div class="old-help-para">Upon activation of the 'mX' map, netrw will query the user for some (external)
command to be applied to all marked files on the global marked file list.  The
"en bloc" means that one command will be executed on all the files at once:<pre>command files</pre>
This approach is useful, for example, to select files and make a tarball:<pre>(mark files)
mX
Enter command: tar cf mynewtarball.tar</pre></div>
<div class="old-help-para">The command that will be run with this example:</div>
<div class="old-help-para">	tar cf mynewtarball.tar 'file1' 'file2' ...</div>
<div class="old-help-para">MARKED FILES: ARGUMENT LIST				<a name="netrw-ma"></a><code class="help-tag-right">netrw-ma</code> <a name="netrw-mA"></a><code class="help-tag">netrw-mA</code>
	    (See <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a> and <a href="/neovim-docs-web/en/pi_netrw#netrw-mr">netrw-mr</a> for how to mark files)
		      (uses the global marked-file list)</div>
<div class="old-help-para">Using ma, one moves filenames from the marked file list to the argument list.
Using mA, one moves filenames from the argument list to the marked file list.</div>
<div class="old-help-para">See Also: <a href="/neovim-docs-web/en/pi_netrw#netrw-cb">netrw-cb</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-cB">netrw-cB</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-qF">netrw-qF</a> <a href="/neovim-docs-web/en/editing#argument-list">argument-list</a> <a href="/neovim-docs-web/en/editing#%3Aargs">:args</a></div>
<div class="old-help-para">MARKED FILES: BUFFER LIST				<a name="netrw-cb"></a><code class="help-tag-right">netrw-cb</code> <a name="netrw-cB"></a><code class="help-tag">netrw-cB</code>
	    (See <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a> and <a href="/neovim-docs-web/en/pi_netrw#netrw-mr">netrw-mr</a> for how to mark files)
		      (uses the global marked-file list)</div>
<div class="old-help-para">Using cb, one moves  filenames from the marked file list to the buffer list.
Using cB, one copies filenames from the buffer list to the marked file list.</div>
<div class="old-help-para">See Also: <a href="/neovim-docs-web/en/pi_netrw#netrw-ma">netrw-ma</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-mA">netrw-mA</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-qF">netrw-qF</a> <a href="/neovim-docs-web/en/windows#buffer-list">buffer-list</a> <a href="/neovim-docs-web/en/windows#%3Abuffers">:buffers</a></div>
<div class="old-help-para">MARKED FILES: COMPRESSION AND DECOMPRESSION		<a name="netrw-mz"></a><code class="help-tag-right">netrw-mz</code> {{{2
	    (See <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a> and <a href="/neovim-docs-web/en/pi_netrw#netrw-mr">netrw-mr</a> for how to mark files)
		      (uses the local marked file list)</div>
<div class="old-help-para">If any marked files are compressed,   then "mz" will decompress them.
If any marked files are decompressed, then "mz" will compress them
using the command specified by <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_compress">g:netrw_compress</a>; by default,
that's "gzip".</div>
<div class="old-help-para">For decompression, netrw uses a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> of suffices and their
associated decompressing utilities; see <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_decompress">g:netrw_decompress</a>.</div>
<div class="old-help-para">Remember that one can mark multiple files by regular expression
(see <a href="/neovim-docs-web/en/pi_netrw#netrw-mr">netrw-mr</a>); this is particularly useful to facilitate compressing and
decompressing a large number of files.</div>
<div class="old-help-para">Associated setting variables: <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_compress">g:netrw_compress</a> <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_decompress">g:netrw_decompress</a></div>
<div class="old-help-para">MARKED FILES: COPYING						<a name="netrw-mc"></a><code class="help-tag-right">netrw-mc</code> {{{2
	    (See <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a> and <a href="/neovim-docs-web/en/pi_netrw#netrw-mr">netrw-mr</a> for how to mark files)
		      (Uses the global marked file list)</div>
<div class="old-help-para">Select a target directory with mt (<a href="/neovim-docs-web/en/pi_netrw#netrw-mt">netrw-mt</a>).  Then change directory,
select file(s) (see <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a>), and press "mc".  The copy is done
from the current window (where one does the mf) to the target.</div>
<div class="old-help-para">If one does not have a target directory set with <a href="/neovim-docs-web/en/pi_netrw#netrw-mt">netrw-mt</a>, then netrw
will query you for a directory to copy to.</div>
<div class="old-help-para">One may also copy directories and their contents (local only) to a target
directory.</div>
<div class="old-help-para">Associated setting variables:
	<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_localcopycmd">g:netrw_localcopycmd</a>  		<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_localcopycmdopt">g:netrw_localcopycmdopt</a>
	<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_localcopydircmd">g:netrw_localcopydircmd</a>  	<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_localcopydircmdopt">g:netrw_localcopydircmdopt</a>
	<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_ssh_cmd">g:netrw_ssh_cmd</a></div>
<div class="old-help-para">MARKED FILES: DIFF						<a name="netrw-md"></a><code class="help-tag-right">netrw-md</code> {{{2
	    (See <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a> and <a href="/neovim-docs-web/en/pi_netrw#netrw-mr">netrw-mr</a> for how to mark files)
		      (uses the global marked file list)</div>
<div class="old-help-para">Use vimdiff to visualize difference between selected files (two or
three may be selected for this).  Uses the global marked file list.</div>
<div class="old-help-para">MARKED FILES: EDITING						<a name="netrw-me"></a><code class="help-tag-right">netrw-me</code> {{{2
	    (See <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a> and <a href="/neovim-docs-web/en/pi_netrw#netrw-mr">netrw-mr</a> for how to mark files)
		      (uses the global marked file list)</div>
<div class="old-help-para">The "me" command will place the marked files on the <a href="/neovim-docs-web/en/editing#arglist">arglist</a> and commence
editing them.  One may return the to explorer window with <a href="/neovim-docs-web/en/pi_netrw#%3ARexplore">:Rexplore</a>.
(use <a href="/neovim-docs-web/en/editing#%3An">:n</a> and <a href="/neovim-docs-web/en/various#%3Ap">:p</a> to edit next and previous files in the arglist)</div>
<div class="old-help-para">MARKED FILES: GREP						<a name="netrw-mg"></a><code class="help-tag-right">netrw-mg</code> {{{2
	    (See <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a> and <a href="/neovim-docs-web/en/pi_netrw#netrw-mr">netrw-mr</a> for how to mark files)
		      (uses the global marked file list)</div>
<div class="old-help-para">The "mg" command will apply <a href="/neovim-docs-web/en/quickfix#%3Avimgrep">:vimgrep</a> to the marked files.
The command will ask for the requested pattern; one may then enter:<pre>/pattern/[g][j]
! /pattern/[g][j]
pattern</pre></div>
<div class="old-help-para">With /pattern/, editing will start with the first item on the <a href="/neovim-docs-web/en/quickfix#quickfix">quickfix</a> list
that vimgrep sets up (see <a href="/neovim-docs-web/en/quickfix#%3Acopen">:copen</a>, <a href="/neovim-docs-web/en/quickfix#%3Acnext">:cnext</a>, <a href="/neovim-docs-web/en/quickfix#%3Acprevious">:cprevious</a>, <a href="/neovim-docs-web/en/quickfix#%3Acclose">:cclose</a>).  The <a href="/neovim-docs-web/en/quickfix#%3Avimgrep">:vimgrep</a>
command is in use, so without 'g' each line is added to quickfix list only
once; with 'g' every match is included.</div>
<div class="old-help-para">With /pattern/j, "mg" will winnow the current marked file list to just those
marked files also possessing the specified pattern.  Thus, one may use<pre>mr ...file-pattern...
mg /pattern/j</pre></div>
<div class="old-help-para">to have a marked file list satisfying the file-pattern but also restricted to
files containing some desired pattern.</div>
<div class="old-help-para">MARKED FILES: HIDING AND UNHIDING BY SUFFIX			<a name="netrw-mh"></a><code class="help-tag-right">netrw-mh</code> {{{2
	    (See <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a> and <a href="/neovim-docs-web/en/pi_netrw#netrw-mr">netrw-mr</a> for how to mark files)
		      (uses the local marked file list)</div>
<div class="old-help-para">The "mh" command extracts the suffices of the marked files and toggles their
presence on the hiding list.  Please note that marking the same suffix
this way multiple times will result in the suffix's presence being toggled
for each file (so an even quantity of marked files having the same suffix
is the same as not having bothered to select them at all).</div>
<div class="old-help-para">Related topics: <a href="/neovim-docs-web/en/pi_netrw#netrw-a">netrw-a</a> <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_list_hide">g:netrw_list_hide</a></div>
<div class="old-help-para">MARKED FILES: MOVING						<a name="netrw-mm"></a><code class="help-tag-right">netrw-mm</code> {{{2
	    (See <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a> and <a href="/neovim-docs-web/en/pi_netrw#netrw-mr">netrw-mr</a> for how to mark files)
		      (uses the global marked file list)</div>
<div class="old-help-para">	WARNING: moving files is more dangerous than copying them.
	A file being moved is first copied and then deleted; if the
	copy operation fails and the delete succeeds, you will lose
	the file.  Either try things out with unimportant files
	first or do the copy and then delete yourself using mc and D.
	Use at your own risk!</div>
<div class="old-help-para">Select a target directory with mt (<a href="/neovim-docs-web/en/pi_netrw#netrw-mt">netrw-mt</a>).  Then change directory,
select file(s) (see <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a>), and press "mm".  The move is done
from the current window (where one does the mf) to the target.</div>
<div class="old-help-para">Associated setting variable: <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_localmovecmd">g:netrw_localmovecmd</a> <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_ssh_cmd">g:netrw_ssh_cmd</a></div>
<div class="old-help-para">MARKED FILES: PRINTING						<a name="netrw-mp"></a><code class="help-tag-right">netrw-mp</code> {{{2
	    (See <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a> and <a href="/neovim-docs-web/en/pi_netrw#netrw-mr">netrw-mr</a> for how to mark files)
		      (uses the local marked file list)</div>
<div class="old-help-para">When "mp" is used, netrw will apply the <a href="/neovim-docs-web/en/print#%3Ahardcopy">:hardcopy</a> command to marked files.
What netrw does is open each file in a one-line window, execute hardcopy, then
close the one-line window.</div>
<div class="old-help-para">MARKED FILES: SOURCING						<a name="netrw-ms"></a><code class="help-tag-right">netrw-ms</code> {{{2
	    (See <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a> and <a href="/neovim-docs-web/en/pi_netrw#netrw-mr">netrw-mr</a> for how to mark files)
		      (uses the local marked file list)</div>
<div class="old-help-para">With "ms", netrw will source the marked files (using vim's <a href="/neovim-docs-web/en/repeat#%3Asource">:source</a> command)</div>
<div class="old-help-para">MARKED FILES: SETTING THE TARGET DIRECTORY			<a name="netrw-mt"></a><code class="help-tag-right">netrw-mt</code> {{{2
     (See <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a> and <a href="/neovim-docs-web/en/pi_netrw#netrw-mr">netrw-mr</a> for how to mark files)</div>
<div class="old-help-para">Set the marked file copy/move-to target (see <a href="/neovim-docs-web/en/pi_netrw#netrw-mc">netrw-mc</a> and <a href="/neovim-docs-web/en/pi_netrw#netrw-mm">netrw-mm</a>):</div>
<div class="old-help-para"><div class="help-li" style=""> If the cursor is atop a file name, then the netrw window's currently
    displayed directory is used for the copy/move-to target.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Also, if the cursor is in the banner, then the netrw window's currently
    displayed directory is used for the copy/move-to target.
    Unless the target already is the current directory.  In which case,
    typing "mf" clears the target.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> However, if the cursor is atop a directory name, then that directory is
    used for the copy/move-to target
</div></div>
<div class="old-help-para"><div class="help-li" style=""> One may use the :MT [directory] command to set the target	<a name="netrw-%3AMT"></a><code class="help-tag">netrw-:MT</code>  
    This command uses <a href="/neovim-docs-web/en/map#%3Cq-args%3E">&lt;q-args&gt;</a>, so spaces in the directory name are
    permitted without escaping.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> With mouse-enabled vim or with gvim, one may select a target by using
    <code>&lt;c-leftmouse&gt;</code>
</div></div>
<div class="old-help-para">There is only one copy/move-to target at a time in a vim session; ie. the
target is a script variable (see <a href="/neovim-docs-web/en/eval#s%3Avar">s:var</a>) and is shared between all netrw
windows (in an instance of vim).</div>
<div class="old-help-para">When using menus and gvim, netrw provides a "Targets" entry which allows one
to pick a target from the list of bookmarks and history.</div>
<div class="old-help-para">Related topics:
      Marking Files......................................|netrw-mf|
      Marking Files by Regular Expression................|netrw-mr|
      Marked Files: Target Directory Using Bookmarks.....|netrw-Tb|
      Marked Files: Target Directory Using History.......|netrw-Th|</div>
<div class="old-help-para">MARKED FILES: TAGGING						<a name="netrw-mT"></a><code class="help-tag-right">netrw-mT</code> {{{2
	    (See <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a> and <a href="/neovim-docs-web/en/pi_netrw#netrw-mr">netrw-mr</a> for how to mark files)
		      (uses the global marked file list)</div>
<div class="old-help-para">The "mT" mapping will apply the command in <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_ctags">g:netrw_ctags</a> (by default, it is
"ctags") to marked files.  For remote browsing, in order to create a tags file
netrw will use ssh (see <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_ssh_cmd">g:netrw_ssh_cmd</a>), and so ssh must be available for
this to work on remote systems.  For your local system, see <a href="/neovim-docs-web/en/tagsrch#ctags">ctags</a> on how to
get a version.  I myself use hdrtags, currently available at
<a href="http://www.drchip.org/astronaut/src/index.html">http://www.drchip.org/astronaut/src/index.html</a> , and have<pre>let g:netrw_ctags= "hdrtag"</pre></div>
<div class="old-help-para">in my &lt;.vimrc&gt;.</div>
<div class="old-help-para">When a remote set of files are tagged, the resulting tags file is "obtained";
ie. a copy is transferred to the local system's directory.  The now local tags
file is then modified so that one may use it through the network.  The
modification made concerns the names of the files in the tags; each filename is
preceded by the netrw-compatible URL used to obtain it.  When one subsequently
uses one of the go to tag actions (<a href="/neovim-docs-web/en/tagsrch#tags">tags</a>), the URL will be used by netrw to
edit the desired file and go to the tag.</div>
<div class="old-help-para">Associated setting variables: <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_ctags">g:netrw_ctags</a> <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_ssh_cmd">g:netrw_ssh_cmd</a></div>
<div class="old-help-para">MARKED FILES: TARGET DIRECTORY USING BOOKMARKS		<a name="netrw-Tb"></a><code class="help-tag-right">netrw-Tb</code> {{{2</div>
<div class="old-help-para">Sets the marked file copy/move-to target.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/pi_netrw#netrw-qb">netrw-qb</a> map will give you a list of bookmarks (and history).
One may choose one of the bookmarks to become your marked file
target by using [count]Tb (default count: 1).</div>
<div class="old-help-para">Related topics:
      Copying files to target............................|netrw-mc|
      Listing Bookmarks and History......................|netrw-qb|
      Marked Files: Setting The Target Directory.........|netrw-mt|
      Marked Files: Target Directory Using History.......|netrw-Th|
      Marking Files......................................|netrw-mf|
      Marking Files by Regular Expression................|netrw-mr|
      Moving files to target.............................|netrw-mm|</div>
<div class="old-help-para">MARKED FILES: TARGET DIRECTORY USING HISTORY			<a name="netrw-Th"></a><code class="help-tag-right">netrw-Th</code> {{{2</div>
<div class="old-help-para">Sets the marked file copy/move-to target.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/pi_netrw#netrw-qb">netrw-qb</a> map will give you a list of history (and bookmarks).
One may choose one of the history entries to become your marked file
target by using [count]Th (default count: 0; ie. the current directory).</div>
<div class="old-help-para">Related topics:
      Copying files to target............................|netrw-mc|
      Listing Bookmarks and History......................|netrw-qb|
      Marked Files: Setting The Target Directory.........|netrw-mt|
      Marked Files: Target Directory Using Bookmarks.....|netrw-Tb|
      Marking Files......................................|netrw-mf|
      Marking Files by Regular Expression................|netrw-mr|
      Moving files to target.............................|netrw-mm|</div>
<div class="old-help-para">MARKED FILES: UNMARKING						<a name="netrw-mu"></a><code class="help-tag-right">netrw-mu</code> {{{2
     (See <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a>, <a href="/neovim-docs-web/en/pi_netrw#netrw-mF">netrw-mF</a>)</div>
<div class="old-help-para">The "mu" mapping will unmark all currently marked files.  This command differs
from "mF" as the latter only unmarks files in the current directory whereas
"mu" will unmark global and all buffer-local marked files.
(see <a href="/neovim-docs-web/en/pi_netrw#netrw-mF">netrw-mF</a>)</div>
<div class="old-help-para">				<a name="netrw-browser-settings"></a><code class="help-tag-right">netrw-browser-settings</code>
<h3 class="help-heading">NETRW BROWSER VARIABLES<span class="help-heading-tags">		<a name="netrw-browser-options"></a><span class="help-tag">netrw-browser-options</span> <a name="netrw-browser-var"></a><span class="help-tag">netrw-browser-var</span> {{{2</span></h3></div>
<div class="old-help-para">(if you're interested in the netrw file transfer settings, see <a href="/neovim-docs-web/en/pi_netrw#netrw-options">netrw-options</a>
 and <a href="/neovim-docs-web/en/pi_netrw#netrw-protocol">netrw-protocol</a>)</div>
<div class="old-help-para">The &lt;netrw.vim&gt; browser provides settings in the form of variables which
you may modify; by placing these settings in your &lt;.vimrc&gt;, you may customize
your browsing preferences.  (see also: <a href="/neovim-docs-web/en/pi_netrw#netrw-settings">netrw-settings</a>)
<pre>---                                -----------
Var                                Explanation
---                                -----------</pre></div>
<div class="old-help-para">  <a name="g%3Anetrw_altfile"></a><code class="help-tag">g:netrw_altfile</code>  		some like <a href="/neovim-docs-web/en/editing#CTRL-%5E">CTRL-^</a> to return to the last
				edited file.  Choose that by setting this
				parameter to 1.
				Others like <a href="/neovim-docs-web/en/editing#CTRL-%5E">CTRL-^</a> to return to the
				netrw browsing buffer.  Choose that by setting
				this parameter to 0.
				 default: =0</div>
<div class="old-help-para">  <a name="g%3Anetrw_alto"></a><code class="help-tag">g:netrw_alto</code>  		change from above splitting to below splitting
				by setting this variable (see <a href="/neovim-docs-web/en/pi_netrw#netrw-o">netrw-o</a>)
				 default: =&amp;sb           (see <a href="/neovim-docs-web/en/options#'sb'">'sb'</a>)</div>
<div class="old-help-para">  <a name="g%3Anetrw_altv"></a><code class="help-tag">g:netrw_altv</code>  		change from left splitting to right splitting
				by setting this variable (see <a href="/neovim-docs-web/en/pi_netrw#netrw-v">netrw-v</a>)
				 default: =&amp;spr          (see <a href="/neovim-docs-web/en/options#'spr'">'spr'</a>)</div>
<div class="old-help-para">  <a name="g%3Anetrw_banner"></a><code class="help-tag">g:netrw_banner</code>  		enable/suppress the banner
				=0: suppress the banner
				=1: banner is enabled (default)</div>
<div class="old-help-para">  <a name="g%3Anetrw_bannerbackslash"></a><code class="help-tag">g:netrw_bannerbackslash</code>  	if this variable exists and is not zero, the
				banner will be displayed with backslashes
				rather than forward slashes.</div>
<div class="old-help-para">  <a name="g%3Anetrw_browse_split"></a><code class="help-tag">g:netrw_browse_split</code>  	when browsing, <code>&lt;cr&gt;</code> will open the file by:
				=0: re-using the same window  (default)
				=1: horizontally splitting the window first
				=2: vertically   splitting the window first
				=3: open file in new tab
				=4: act like "P" (ie. open previous window)
				    Note that <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_preview">g:netrw_preview</a> may be used
				    to get vertical splitting instead of
				    horizontal splitting.
				=[servername,tab-number,window-number]
				    Given a <a href="/neovim-docs-web/en/eval#List">List</a> such as this, a remote server
				    named by the "servername" will be used for
				    editing.  It will also use the specified tab
				    and window numbers to perform editing
				    (see <a href="/neovim-docs-web/en/remote#clientserver">clientserver</a>, <a href="/neovim-docs-web/en/pi_netrw#netrw-ctrl-r">netrw-ctrl-r</a>)
				This option does not affect the production of
				<a href="/neovim-docs-web/en/pi_netrw#%3ALexplore">:Lexplore</a> windows.</div>
<div class="old-help-para">				Related topics:
				    <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_alto">g:netrw_alto</a>  	<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_altv">g:netrw_altv</a>
				    <a href="/neovim-docs-web/en/pi_netrw#netrw-C">netrw-C</a>  		<a href="/neovim-docs-web/en/pi_netrw#netrw-cr">netrw-cr</a>
				    <a href="/neovim-docs-web/en/pi_netrw#netrw-ctrl-r">netrw-ctrl-r</a></div>
<div class="old-help-para">  <a name="g%3Anetrw_browsex_viewer"></a><code class="help-tag">g:netrw_browsex_viewer</code>  	specify user's preference for a viewer:<pre>"kfmclient exec"
"gnome-open"</pre></div>
<div class="old-help-para">				If<pre>"-"</pre></div>
<div class="old-help-para">				is used, then netrwFileHandler() will look for
				a script/function to handle the given
				extension.  (see <a href="/neovim-docs-web/en/pi_netrw#netrw_filehandler">netrw_filehandler</a>).</div>
<div class="old-help-para">  <a name="g%3Anetrw_browsex_support_remote"></a><code class="help-tag">g:netrw_browsex_support_remote</code>
				specify if the specified viewer supports a
				remote URL.  (see <a href="/neovim-docs-web/en/pi_netrw#netrw-handler">netrw-handler</a>).</div>
<div class="old-help-para">  <a name="g%3Anetrw_chgperm"></a><code class="help-tag">g:netrw_chgperm</code>  		Unix/Linux: "chmod PERM FILENAME"
				Windows:    "cacls FILENAME /e /p PERM"
				Used to change access permission for a file.</div>
<div class="old-help-para">  <a name="g%3Anetrw_clipboard"></a><code class="help-tag">g:netrw_clipboard</code>  		=1
  				By default, netrw will attempt to insure that
				the clipboard's values will remain unchanged.
				However, some users report that they have
				speed problems with this; consequently, this
				option, when set to zero,  lets such users
				prevent netrw from saving and restoring the
				clipboard (the latter is done only as needed).
				That means that if the clipboard is changed
				(inadvertently) by normal netrw operation that
				it will not be restored to its prior state.</div>
<div class="old-help-para">  <a name="g%3Anetrw_compress"></a><code class="help-tag">g:netrw_compress</code>  		="gzip"
				Will compress marked files with this
				command</div>
<div class="old-help-para">  <a name="g%3ANetrw_corehandler"></a><code class="help-tag">g:Netrw_corehandler</code>  		Allows one to specify something additional
				to do when handling <code>&lt;core&gt;</code> files via netrw's
				browser's "x" command (see <a href="/neovim-docs-web/en/pi_netrw#netrw-x">netrw-x</a>).  If
				present, g:Netrw_corehandler specifies
				either one or more function references
				(see <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a>).  (the capital g:Netrw...
				is required its holding a function reference)</div>
<div class="old-help-para">  <a name="g%3Anetrw_ctags"></a><code class="help-tag">g:netrw_ctags</code>  		="ctags"
				The default external program used to create
				tags</div>
<div class="old-help-para">  <a name="g%3Anetrw_cursor"></a><code class="help-tag">g:netrw_cursor</code>  		= 2 (default)
				This option controls the use of the
				<a href="/neovim-docs-web/en/options#'cursorline'">'cursorline'</a> (cul) and <a href="/neovim-docs-web/en/options#'cursorcolumn'">'cursorcolumn'</a>
				(cuc) settings by netrw:</div>
<div class="old-help-para">				Value   Thin-Long-Tree      Wide
				 =0      u-cul u-cuc      u-cul u-cuc
				 =1      u-cul u-cuc        cul u-cuc
				 =2        cul u-cuc        cul u-cuc
				 =3        cul u-cuc        cul   cuc
				 =4        cul   cuc        cul   cuc
				 =5      U-cul U-cuc      U-cul U-cuc
				 =6      U-cul U-cuc        cul U-cuc
				 =7        cul U-cuc        cul U-cuc
				 =8        cul U-cuc        cul   cuc</div>
<div class="old-help-para">				Where
				  u-cul : user's <a href="/neovim-docs-web/en/options#'cursorline'">'cursorline'</a>   initial setting used
				  u-cuc : user's <a href="/neovim-docs-web/en/options#'cursorcolumn'">'cursorcolumn'</a> initial setting used
				  U-cul : user's <a href="/neovim-docs-web/en/options#'cursorline'">'cursorline'</a>   current setting used
				  U-cuc : user's <a href="/neovim-docs-web/en/options#'cursorcolumn'">'cursorcolumn'</a> current setting used
				  cul   : <a href="/neovim-docs-web/en/options#'cursorline'">'cursorline'</a>   will be locally set
				  cuc   : <a href="/neovim-docs-web/en/options#'cursorcolumn'">'cursorcolumn'</a> will be locally set</div>
<div class="old-help-para">				  The "initial setting" means the values of
				  the <a href="/neovim-docs-web/en/options#'cuc'">'cuc'</a> and <a href="/neovim-docs-web/en/options#'cul'">'cul'</a> settings in effect when
				  netrw last saw <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_cursor">g:netrw_cursor</a> &gt;= 5 or when
				  netrw was initially run.</div>
<div class="old-help-para">  <a name="g%3Anetrw_decompress"></a><code class="help-tag">g:netrw_decompress</code>  		= { ".gz"  : "gunzip" ,
				    ".bz2" : "bunzip2" ,
				    ".zip" : "unzip" ,
				    ".tar" : "tar -xf"}
				  A dictionary mapping suffices to
				  decompression programs.</div>
<div class="old-help-para">  <a name="g%3Anetrw_dirhistmax"></a><code class="help-tag">g:netrw_dirhistmax</code>            =10: controls maximum quantity of past
                                     history.  May be zero to suppress
				     history.
				     (related: <a href="/neovim-docs-web/en/pi_netrw#netrw-qb">netrw-qb</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-u">netrw-u</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-U">netrw-U</a>)</div>
<div class="old-help-para">  <a name="g%3Anetrw_dynamic_maxfilenamelen"></a><code class="help-tag">g:netrw_dynamic_maxfilenamelen</code> =32: enables dynamic determination of
				    <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_maxfilenamelen">g:netrw_maxfilenamelen</a>, which affects
				    local file long listing.</div>
<div class="old-help-para">  <a name="g%3Anetrw_errorlvl"></a><code class="help-tag">g:netrw_errorlvl</code>  		=0: error levels greater than or equal to
				    this are permitted to be displayed
				    0: notes
				    1: warnings
				    2: errors</div>
<div class="old-help-para">  <a name="g%3Anetrw_fastbrowse"></a><code class="help-tag">g:netrw_fastbrowse</code>  		=0: slow speed directory browsing;
				    never re-uses directory listings;
				    always obtains directory listings.
				=1: medium speed directory browsing;
				    re-use directory listings only
				    when remote directory browsing.
				    (default value)
				=2: fast directory browsing;
				    only obtains directory listings when the
				    directory hasn't been seen before
				    (or <a href="/neovim-docs-web/en/pi_netrw#netrw-ctrl-l">netrw-ctrl-l</a> is used).</div>
<div class="old-help-para">				Fast browsing retains old directory listing
				buffers so that they don't need to be
				re-acquired.  This feature is especially
				important for remote browsing.  However, if
				a file is introduced or deleted into or from
				such directories, the old directory buffer
				becomes out-of-date.  One may always refresh
				such a directory listing with <a href="/neovim-docs-web/en/pi_netrw#netrw-ctrl-l">netrw-ctrl-l</a>.
				This option gives the user the choice of
				trading off accuracy (ie. up-to-date listing)
				versus speed.</div>
<div class="old-help-para">  <a name="g%3Anetrw_ffkeep"></a><code class="help-tag">g:netrw_ffkeep</code>  		(default: doesn't exist)
				If this variable exists and is zero, then
				netrw will not do a save and restore for
				<a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a>.</div>
<div class="old-help-para">  <a name="g%3Anetrw_fname_escape"></a><code class="help-tag">g:netrw_fname_escape</code>  	=' ?&amp;;%'
				Used on filenames before remote reading/writing</div>
<div class="old-help-para">  <a name="g%3Anetrw_ftp_browse_reject"></a><code class="help-tag">g:netrw_ftp_browse_reject</code>  	ftp can produce a number of errors and warnings
				that can show up as "directories" and "files"
				in the listing.  This pattern is used to
				remove such embedded messages.  By default its
				value is:
				 '^total\s\+\d\+$\|
				 ^Trying\s\+\d\+.*$\|
				 ^KERBEROS_V\d rejected\|
				 ^Security extensions not\|
				 No such file\|
				 : connect to address [0-9a-fA-F:]*
				 : No route to host$'</div>
<div class="old-help-para">  <a name="g%3Anetrw_ftp_list_cmd"></a><code class="help-tag">g:netrw_ftp_list_cmd</code>  	options for passing along to ftp for directory
				listing.  Defaults:
				 unix or g:netrw_cygwin set: : "ls -lF"
				 otherwise                     "dir"</div>
<div class="old-help-para">  <a name="g%3Anetrw_ftp_sizelist_cmd"></a><code class="help-tag">g:netrw_ftp_sizelist_cmd</code>  	options for passing along to ftp for directory
				listing, sorted by size of file.
				Defaults:
				 unix or g:netrw_cygwin set: : "ls -slF"
				 otherwise                     "dir"</div>
<div class="old-help-para">  <a name="g%3Anetrw_ftp_timelist_cmd"></a><code class="help-tag">g:netrw_ftp_timelist_cmd</code>  	options for passing along to ftp for directory
				listing, sorted by time of last modification.
				Defaults:
				 unix or g:netrw_cygwin set: : "ls -tlF"
				 otherwise                     "dir"</div>
<div class="old-help-para">  <a name="g%3Anetrw_glob_escape"></a><code class="help-tag">g:netrw_glob_escape</code>  		='[]*?`{~$'  (unix)
				='[]*?`{$'  (windows
				These characters in directory names are
				escaped before applying glob()</div>
<div class="old-help-para">  <a name="g%3Anetrw_gx"></a><code class="help-tag">g:netrw_gx</code>  			="&lt;cfile&gt;"
 				This option controls how gx (<a href="/neovim-docs-web/en/pi_netrw#netrw-gx">netrw-gx</a>) picks
				up the text under the cursor.  See <a href="/neovim-docs-web/en/builtin#expand()">expand()</a>
				for possibilities.</div>
<div class="old-help-para">  <a name="g%3Anetrw_hide"></a><code class="help-tag">g:netrw_hide</code>  		Controlled by the "a" map (see <a href="/neovim-docs-web/en/pi_netrw#netrw-a">netrw-a</a>)
				=0 : show all
				=1 : show not-hidden files
				=2 : show hidden files only
				 default: =1</div>
<div class="old-help-para">  <a name="g%3Anetrw_home"></a><code class="help-tag">g:netrw_home</code>  		The home directory for where bookmarks and
				history are saved (as .netrwbook and
				.netrwhist).
				Netrw uses <a href="/neovim-docs-web/en/builtin#expand()">expand()</a> on the string.
				 default: stdpath("data") (see <a href="/neovim-docs-web/en/builtin#stdpath()">stdpath()</a>)</div>
<div class="old-help-para">  <a name="g%3Anetrw_keepdir"></a><code class="help-tag">g:netrw_keepdir</code>  		=1 (default) keep current directory immune from
				   the browsing directory.
				=0 keep the current directory the same as the
				   browsing directory.
				The current browsing directory is contained in
				b:netrw_curdir (also see <a href="/neovim-docs-web/en/pi_netrw#netrw-cd">netrw-cd</a>)</div>
<div class="old-help-para">  <a name="g%3Anetrw_keepj"></a><code class="help-tag">g:netrw_keepj</code>  		="keepj" (default) netrw attempts to keep the
				         <a href="/neovim-docs-web/en/motion#%3Ajumps">:jumps</a> table unaffected.
				=""      netrw will not use <a href="/neovim-docs-web/en/motion#%3Akeepjumps">:keepjumps</a> with
					 exceptions only for the
					 saving/restoration of position.</div>
<div class="old-help-para">  <a name="g%3Anetrw_list_cmd"></a><code class="help-tag">g:netrw_list_cmd</code>  		command for listing remote directories
				 default: (if ssh is executable)
				          "ssh HOSTNAME ls -FLa"</div>
<div class="old-help-para">  <a name="g%3Anetrw_list_cmd_options"></a><code class="help-tag">g:netrw_list_cmd_options</code>  	If this variable exists, then its contents are
				appended to the g:netrw_list_cmd.  For
				example, use "2&gt;/dev/null" to get rid of banner
				messages on unix systems.</div>
<div class="old-help-para">  <a name="g%3Anetrw_liststyle"></a><code class="help-tag">g:netrw_liststyle</code>  		Set the default listing style:
                                = 0: thin listing (one file per line)
                                = 1: long listing (one file per line with time
				     stamp information and file size)
				= 2: wide listing (multiple files in columns)
				= 3: tree style listing</div>
<div class="old-help-para">  <a name="g%3Anetrw_list_hide"></a><code class="help-tag">g:netrw_list_hide</code>  		comma-separated pattern list for hiding files
				Patterns are regular expressions (see <a href="/neovim-docs-web/en/pattern#regexp">regexp</a>)
				There's some special support for git-ignore
				files: you may add the output from the helper
				function 'netrw_gitignore#Hide() automatically
				hiding all gitignored files.
				For more details see <a href="/neovim-docs-web/en/pi_netrw#netrw-gitignore">netrw-gitignore</a>.</div>
<div class="old-help-para">				Examples:
				 let g:netrw_list_hide= '.*\.swp$'				 let g:netrw_list_hide= netrw_gitignore#Hide() .. '.*\.swp$'				default: ""</div>
<div class="old-help-para">  <a name="g%3Anetrw_localcopycmd"></a><code class="help-tag">g:netrw_localcopycmd</code>  	="cp"           Linux/Unix/MacOS/Cygwin
				=expand("$COMSPEC")             Windows
				Copies marked files (<a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a>) to target
				directory (<a href="/neovim-docs-web/en/pi_netrw#netrw-mt">netrw-mt</a>, <a href="/neovim-docs-web/en/pi_netrw#netrw-mc">netrw-mc</a>)</div>
<div class="old-help-para">  <a name="g%3Anetrw_localcopycmdopt"></a><code class="help-tag">g:netrw_localcopycmdopt</code>  	=''             Linux/Unix/MacOS/Cygwin
  				=' \c copy'                     Windows
				Options for the <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_localcopycmd">g:netrw_localcopycmd</a></div>
<div class="old-help-para">  <a name="g%3Anetrw_localcopydircmd"></a><code class="help-tag">g:netrw_localcopydircmd</code>  	="cp"           Linux/Unix/MacOS/Cygwin
 				=expand("$COMSPEC")             Windows
				Copies directories to target directory.
				(<a href="/neovim-docs-web/en/pi_netrw#netrw-mc">netrw-mc</a>, <a href="/neovim-docs-web/en/pi_netrw#netrw-mt">netrw-mt</a>)</div>
<div class="old-help-para">  <a name="g%3Anetrw_localcopydircmdopt"></a><code class="help-tag">g:netrw_localcopydircmdopt</code>  	=" -R"          Linux/Unix/MacOS/Cygwin
				=" /c xcopy /e /c /h/ /i /k"    Windows
				Options for <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_localcopydircmd">g:netrw_localcopydircmd</a></div>
<div class="old-help-para">  <a name="g%3Anetrw_localmkdir"></a><code class="help-tag">g:netrw_localmkdir</code>  		="mkdir"        Linux/Unix/MacOS/Cygwin
				=expand("$COMSPEC")             Windows
                                command for making a local directory</div>
<div class="old-help-para">  <a name="g%3Anetrw_localmkdiropt"></a><code class="help-tag">g:netrw_localmkdiropt</code>  	=""             Linux/Unix/MacOS/Cygwin
				=" /c mkdir"                    Windows
				Options for <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_localmkdir">g:netrw_localmkdir</a></div>
<div class="old-help-para">  <a name="g%3Anetrw_localmovecmd"></a><code class="help-tag">g:netrw_localmovecmd</code>  	="mv"           Linux/Unix/MacOS/Cygwin
				=expand("$COMSPEC")             Windows
				Moves marked files (<a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a>) to target
				directory (<a href="/neovim-docs-web/en/pi_netrw#netrw-mt">netrw-mt</a>, <a href="/neovim-docs-web/en/pi_netrw#netrw-mm">netrw-mm</a>)</div>
<div class="old-help-para">  <a name="g%3Anetrw_localmovecmdopt"></a><code class="help-tag">g:netrw_localmovecmdopt</code>  	=""             Linux/Unix/MacOS/Cygwin
				=" /c move"                     Windows
				Options for <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_localmovecmd">g:netrw_localmovecmd</a></div>
<div class="old-help-para">  <a name="g%3Anetrw_localrmdir"></a><code class="help-tag">g:netrw_localrmdir</code>  		="rmdir"        Linux/Unix/MacOS/Cygwin
 				=expand("$COMSPEC")             Windows
				Remove directory command (rmdir)
				This variable is only used if your vim is
				earlier than 7.4 or if your vim doesn't
				have patch#1107.  Otherwise, <a href="/neovim-docs-web/en/builtin#delete()">delete()</a>
				is used with the "d" option.</div>
<div class="old-help-para">  <a name="g%3Anetrw_localrmdiropt"></a><code class="help-tag">g:netrw_localrmdiropt</code>  	=""             Linux/Unix/MacOS/Cygwin
				=" /c rmdir"                    Windows
				Options for <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_localrmdir">g:netrw_localrmdir</a></div>
<div class="old-help-para">  <a name="g%3Anetrw_maxfilenamelen"></a><code class="help-tag">g:netrw_maxfilenamelen</code>  	=32 by default, selected so as to make long
				    listings fit on 80 column displays.
				If your screen is wider, and you have file
				or directory names longer than 32 bytes,
				you may set this option to keep listings
				columnar.</div>
<div class="old-help-para">  <a name="g%3Anetrw_mkdir_cmd"></a><code class="help-tag">g:netrw_mkdir_cmd</code>  		command for making a remote directory
				via ssh  (also see <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_remote_mkdir">g:netrw_remote_mkdir</a>)
				 default: "ssh USEPORT HOSTNAME mkdir"</div>
<div class="old-help-para">  <a name="g%3Anetrw_mousemaps"></a><code class="help-tag">g:netrw_mousemaps</code>  		  =1 (default) enables mouse buttons while
				   browsing to:
				     leftmouse       : open file/directory
				     shift-leftmouse : mark file
				     middlemouse     : same as P
				     rightmouse      : remove file/directory
				=0: disables mouse maps</div>
<div class="old-help-para">  <a name="g%3Anetrw_nobeval"></a><code class="help-tag">g:netrw_nobeval</code>  		doesn't exist (default)
				If this variable exists, then balloon
				evaluation will be suppressed
				(see <a href="/neovim-docs-web/en/vim_diff#'ballooneval'">'ballooneval'</a>)</div>
<div class="old-help-para"> <a name="g%3Anetrw_sizestyle"></a><code class="help-tag">g:netrw_sizestyle</code>  		not defined: actual bytes (default)
 				="b" : actual bytes       (default)
 				="h" : human-readable (ex. 5k, 4m, 3g)
				       uses 1000 base
 				="H" : human-readable (ex. 5K, 4M, 3G)
				       uses 1024 base
				The long listing (<a href="/neovim-docs-web/en/pi_netrw#netrw-i">netrw-i</a>) and query-file
				maps (<a href="/neovim-docs-web/en/pi_netrw#netrw-qf">netrw-qf</a>) will display file size
				using the specified style.</div>
<div class="old-help-para">  <a name="g%3Anetrw_usetab"></a><code class="help-tag">g:netrw_usetab</code>  		if this variable exists and is non-zero, then
				the <code>&lt;tab&gt;</code> map supporting shrinking/expanding a
				Lexplore or netrw window will be enabled.
				(see <a href="/neovim-docs-web/en/pi_netrw#netrw-c-tab">netrw-c-tab</a>)</div>
<div class="old-help-para">  <a name="g%3Anetrw_remote_mkdir"></a><code class="help-tag">g:netrw_remote_mkdir</code>  	command for making a remote directory
				via ftp  (also see <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_mkdir_cmd">g:netrw_mkdir_cmd</a>)
				 default: "mkdir"</div>
<div class="old-help-para">  <a name="g%3Anetrw_retmap"></a><code class="help-tag">g:netrw_retmap</code>  		if it exists and is set to one, then:
<div class="help-li" style=""> if in a netrw-selected file, AND
</div><div class="help-li" style=""> no normal-mode <code>&lt;2-leftmouse&gt;</code> mapping exists,
				then the <code>&lt;2-leftmouse&gt;</code> will be mapped for easy
				return to the netrw browser window.
				 example: click once to select and open a file,
				          double-click to return.
</div></div>
<div class="old-help-para">				Note that one may instead choose to:
<div class="help-li" style=""> let g:netrw_retmap= 1, AND
</div><div class="help-li" style=""> nmap <code>&lt;silent&gt;</code> YourChoice <code>&lt;Plug&gt;</code>NetrwReturn
				and have another mapping instead of
				<code>&lt;2-leftmouse&gt;</code> to invoke the return.
</div></div>
<div class="old-help-para">				You may also use the <a href="/neovim-docs-web/en/pi_netrw#%3ARexplore">:Rexplore</a> command to do
				the same thing.</div>
<div class="old-help-para">				  default: =0</div>
<div class="old-help-para">  <a name="g%3Anetrw_rm_cmd"></a><code class="help-tag">g:netrw_rm_cmd</code>  		command for removing remote files
				 default: "ssh USEPORT HOSTNAME rm"</div>
<div class="old-help-para">  <a name="g%3Anetrw_rmdir_cmd"></a><code class="help-tag">g:netrw_rmdir_cmd</code>  		command for removing remote directories
				 default: "ssh USEPORT HOSTNAME rmdir"</div>
<div class="old-help-para">  <a name="g%3Anetrw_rmf_cmd"></a><code class="help-tag">g:netrw_rmf_cmd</code>  		command for removing remote softlinks
				 default: "ssh USEPORT HOSTNAME rm -f"</div>
<div class="old-help-para">  <a name="g%3Anetrw_servername"></a><code class="help-tag">g:netrw_servername</code>  		use this variable to provide a name for
				<a href="/neovim-docs-web/en/pi_netrw#netrw-ctrl-r">netrw-ctrl-r</a> to use for its server.
				 default: "NETRWSERVER"</div>
<div class="old-help-para">  <a name="g%3Anetrw_sort_by"></a><code class="help-tag">g:netrw_sort_by</code>  		sort by "name", "time", "size", or
  				"exten".
				 default: "name"</div>
<div class="old-help-para">  <a name="g%3Anetrw_sort_direction"></a><code class="help-tag">g:netrw_sort_direction</code>  	sorting direction: "normal" or "reverse"
				 default: "normal"</div>
<div class="old-help-para">  <a name="g%3Anetrw_sort_options"></a><code class="help-tag">g:netrw_sort_options</code>  	sorting is done using <a href="/neovim-docs-web/en/change#%3Asort">:sort</a>; this
				variable's value is appended to the
				sort command.  Thus one may ignore case,
				for example, with the following in your
				.vimrc:<pre>let g:netrw_sort_options="i"</pre></div>
<div class="old-help-para">				 default: ""</div>
<div class="old-help-para">  <a name="g%3Anetrw_sort_sequence"></a><code class="help-tag">g:netrw_sort_sequence</code>  	when sorting by name, first sort by the
				comma-separated pattern sequence.  Note that
				any filigree added to indicate filetypes
				should be accounted for in your pattern.
				 default: '[\/]$,*,\.bak$,\.o$,\.h$,
				           \.info$,\.swp$,\.obj$'</div>
<div class="old-help-para">  <a name="g%3Anetrw_special_syntax"></a><code class="help-tag">g:netrw_special_syntax</code>  	If true, then certain files will be shown
				using special syntax in the browser:</div>
<div class="old-help-para">					netrwBak     : *.bak					netrwCompress: *.gz *.bz2 *.Z *.zip					netrwCoreDump: core.\d\+
					netrwData    : *.dat					netrwDoc     : <a name=".doc%2C"></a><code class="help-tag">.doc,</code>.txt,*.pdf,
					               <a name=".pdf%2C"></a><code class="help-tag-right">.pdf,</code>.docx
					netrwHdr     : *.h
					netrwLex     : *.l *.lex					netrwLib     : *.a *.so *.lib *.dll					netrwMakefile: [mM]akefile *.mak
					netrwObj     : *.o *.obj					netrwPix     : <a name=".bmp%2C"></a><code class="help-tag">.bmp,</code>.fit,*.fits,*.gif,
					               <a name=".jpg%2C"></a><code class="help-tag-right">.jpg,</code>.jpeg,*.pcx,*.ppc
					               <a name=".pgm%2C"></a><code class="help-tag-right">.pgm,</code>.png,*.psd,*.rgb
					               <a name=".tif%2C"></a><code class="help-tag-right">.tif,</code>.xbm,*.xcf
					netrwTags    : tags ANmenu ANtags
					netrwTilde   : *					netrwTmp     : tmp* *tmp
					netrwYacc    : *.y
				In addition, those groups mentioned in
				<a href="/neovim-docs-web/en/options#'suffixes'">'suffixes'</a> are also added to the special
				file highlighting group.
				 These syntax highlighting groups are linked
				to netrwGray or Folded by default
				(see <a href="/neovim-docs-web/en/syntax#hl-Folded">hl-Folded</a>), but one may put lines like<pre>hi link netrwCompress Visual</pre></div>
<div class="old-help-para">				into one's &lt;.vimrc&gt; to use one's own
				preferences.  Alternatively, one may
				put such specifications into<pre>.vim/after/syntax/netrw.vim.</pre></div>
<div class="old-help-para">				 The netrwGray highlighting is set up by
				netrw when<pre>       * netrwGray has not been previously
  defined
* the gui is running</pre></div>
<div class="old-help-para">				 As an example, I myself use a dark-background
				colorscheme with the following in
				.vim/after/syntax/netrw.vim:<pre>hi netrwCompress term=NONE cterm=NONE gui=NONE ctermfg=10 guifg=green  ctermbg=0 guibg=black
hi netrwData          term=NONE cterm=NONE gui=NONE ctermfg=9 guifg=blue ctermbg=0 guibg=black
hi netrwHdr          term=NONE cterm=NONE,italic gui=NONE guifg=SeaGreen1
hi netrwLex          term=NONE cterm=NONE,italic gui=NONE guifg=SeaGreen1
hi netrwYacc          term=NONE cterm=NONE,italic gui=NONE guifg=SeaGreen1
hi netrwLib          term=NONE cterm=NONE gui=NONE ctermfg=14 guifg=yellow
hi netrwObj          term=NONE cterm=NONE gui=NONE ctermfg=12 guifg=red
hi netrwTilde          term=NONE cterm=NONE gui=NONE ctermfg=12 guifg=red
hi netrwTmp          term=NONE cterm=NONE gui=NONE ctermfg=12 guifg=red
hi netrwTags          term=NONE cterm=NONE gui=NONE ctermfg=12 guifg=red
hi netrwDoc          term=NONE cterm=NONE gui=NONE ctermfg=220 ctermbg=27 guifg=yellow2 guibg=Blue3
hi netrwSymLink  term=NONE cterm=NONE gui=NONE ctermfg=220 ctermbg=27 guifg=grey60</pre></div>
<div class="old-help-para">  <a name="g%3Anetrw_ssh_browse_reject"></a><code class="help-tag">g:netrw_ssh_browse_reject</code>  	ssh can sometimes produce unwanted lines,
				messages, banners, and whatnot that one doesn't
				want masquerading as "directories" and "files".
				Use this pattern to remove such embedded
				messages.  By default its value is:
					 '^total\s\+\d\+$'</div>
<div class="old-help-para">  <a name="g%3Anetrw_ssh_cmd"></a><code class="help-tag">g:netrw_ssh_cmd</code>  		One may specify an executable command
				to use instead of ssh for remote actions
				such as listing, file removal, etc.
				 default: ssh</div>
<div class="old-help-para"> <a name="g%3Anetrw_suppress_gx_mesg"></a><code class="help-tag">g:netrw_suppress_gx_mesg</code>  	=1 : browsers sometimes produce messages
				which are normally unwanted intermixed
				with the page.
				However, when using links, for example,
				those messages are what the browser produces.
				By setting this option to 0, netrw will not
				suppress browser messages.</div>
<div class="old-help-para">  <a name="g%3Anetrw_tmpfile_escape"></a><code class="help-tag">g:netrw_tmpfile_escape</code>  	=' &amp;;'
				escape() is applied to all temporary files
				to escape these characters.</div>
<div class="old-help-para">  <a name="g%3Anetrw_timefmt"></a><code class="help-tag">g:netrw_timefmt</code>  		specify format string to vim's strftime().
				The default, "%c", is "the preferred date
				and time representation for the current
				locale" according to my manpage entry for
				strftime(); however, not all are satisfied
				with it.  Some alternatives:
				 "%a %d %b %Y %T",
				 " %a %Y-%m-%d  %I-%M-%S %p"
				 default: "%c"</div>
<div class="old-help-para">  <a name="g%3Anetrw_use_noswf"></a><code class="help-tag">g:netrw_use_noswf</code>  		netrw normally avoids writing swapfiles
				for browser buffers.  However, under some
				systems this apparently is causing nasty
				ml_get errors to appear; if you're getting
				ml_get errors, try putting
				  let g:netrw_use_noswf= 0
				in your .vimrc.
				  default: 1</div>
<div class="old-help-para">  <a name="g%3Anetrw_winsize"></a><code class="help-tag">g:netrw_winsize</code>  		specify initial size of new windows made with
				"o" (see <a href="/neovim-docs-web/en/pi_netrw#netrw-o">netrw-o</a>), "v" (see <a href="/neovim-docs-web/en/pi_netrw#netrw-v">netrw-v</a>),
				<a href="/neovim-docs-web/en/pi_netrw#%3AHexplore">:Hexplore</a> or <a href="/neovim-docs-web/en/pi_netrw#%3AVexplore">:Vexplore</a>.  The g:netrw_winsize
				is an integer describing the percentage of the
				current netrw buffer's window to be used for
				the new window.
				 If g:netrw_winsize is less than zero, then
				the absolute value of g:netrw_winsize will be
				used to specify the quantity of lines or
				columns for the new window.
				 If g:netrw_winsize is zero, then a normal
				split will be made (ie. <a href="/neovim-docs-web/en/options#'equalalways'">'equalalways'</a> will
				take effect, for example).
				 default: 50  (for 50%)</div>
<div class="old-help-para">  <a name="g%3Anetrw_wiw"></a><code class="help-tag">g:netrw_wiw</code>  			=1 specifies the minimum window width to use
				when shrinking a netrw/Lexplore window
				(see <a href="/neovim-docs-web/en/pi_netrw#netrw-c-tab">netrw-c-tab</a>).</div>
<div class="old-help-para">  <a name="g%3Anetrw_xstrlen"></a><code class="help-tag">g:netrw_xstrlen</code>  		Controls how netrw computes string lengths,
				including multi-byte characters' string
				length. (thanks to N Weibull, T Mechelynck)
				=0: uses Vim's built-in strlen()
				=1: number of codepoints (Latin a + combining
				    circumflex is two codepoints)  (DEFAULT)
				=2: number of spacing codepoints (Latin a +
				    combining circumflex is one spacing
				    codepoint; a hard tab is one; wide and
				    narrow CJK are one each; etc.)
				=3: virtual length (counting tabs as anything
				    between 1 and <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a>, wide CJK as 2
				    rather than 1, Arabic alif as zero when
				    immediately preceded by lam, one
				    otherwise, etc)</div>
<div class="old-help-para">  <a name="g%3ANetrwTopLvlMenu"></a><code class="help-tag">g:NetrwTopLvlMenu</code>  		This variable specifies the top level
				menu name; by default, it's "Netrw.".  If
				you wish to change this, do so in your
				.vimrc.</div>
<div class="old-help-para"><h3 class="help-heading">NETRW BROWSING AND OPTION INCOMPATIBILITIES<span class="help-heading-tags">	<a name="netrw-incompatible"></a><span class="help-tag">netrw-incompatible</span> {{{2</span></h3></div>
<div class="old-help-para">Netrw has been designed to handle user options by saving them, setting the
options to something that's compatible with netrw's needs, and then restoring
them.  However, the autochdir option:<pre>:set acd</pre>
is problematic.  Autochdir sets the current directory to that containing the
file you edit; this apparently also applies to directories.  In other words,
autochdir sets the current directory to that containing the "file" (even if
that "file" is itself a directory).</div>
<div class="old-help-para"><h3 class="help-heading">NETRW SETTINGS WINDOW<span class="help-heading-tags">				<a name="netrw-settings-window"></a><span class="help-tag">netrw-settings-window</span> {{{2</span></h3></div>
<div class="old-help-para">With the NetrwSettings.vim plugin,<pre>:NetrwSettings</pre>
will bring up a window with the many variables that netrw uses for its
settings.  You may change any of their values; when you save the file, the
settings therein will be used.  One may also press "?" on any of the lines for
help on what each of the variables do.</div>
<div class="old-help-para">(also see: <a href="/neovim-docs-web/en/pi_netrw#netrw-browser-var">netrw-browser-var</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-protocol">netrw-protocol</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-variables">netrw-variables</a>)</div>
<div class="old-help-para"><h2 class="help-heading">OBTAINING A FILE<span class="help-heading-tags">					<a name="netrw-obtain"></a><span class="help-tag">netrw-obtain</span> <a name="netrw-O"></a><span class="help-tag">netrw-O</span> {{{2</span></h2></div>
<div class="old-help-para">If there are no marked files:</div>
<div class="old-help-para">    When browsing a remote directory, one may obtain a file under the cursor
    (ie.  get a copy on your local machine, but not edit it) by pressing the O
    key.</div>
<div class="old-help-para">If there are marked files:</div>
<div class="old-help-para">    The marked files will be obtained (ie. a copy will be transferred to your
    local machine, but not set up for editing).</div>
<div class="old-help-para">Only ftp and scp are supported for this operation (but since these two are
available for browsing, that shouldn't be a problem).  The status bar will
then show, on its right hand side, a message like "Obtaining filename".  The
statusline will be restored after the transfer is complete.</div>
<div class="old-help-para">Netrw can also "obtain" a file using the local browser.  Netrw's display
of a directory is not necessarily the same as Vim's "current directory",
unless <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_keepdir">g:netrw_keepdir</a> is set to 0 in the user's &lt;.vimrc&gt;.  One may select
a file using the local browser (by putting the cursor on it) and pressing
"O" will then "obtain" the file; ie. copy it to Vim's current directory.</div>
<div class="old-help-para">Related topics:
<div class="help-li" style=""> To see what the current directory is, use <a href="/neovim-docs-web/en/editing#%3Apwd">:pwd</a>
</div><div class="help-li" style=""> To make the currently browsed directory the current directory, see
   <a href="/neovim-docs-web/en/pi_netrw#netrw-cd">netrw-cd</a>
</div><div class="help-li" style=""> To automatically make the currently browsed directory the current
   directory, see <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_keepdir">g:netrw_keepdir</a>.
</div></div>
<div class="old-help-para">					<a name="netrw-newfile"></a><code class="help-tag-right">netrw-newfile</code> <a name="netrw-createfile"></a><code class="help-tag">netrw-createfile</code>
OPEN A NEW FILE IN NETRW'S CURRENT DIRECTORY		<a name="netrw-%25"></a><code class="help-tag-right">netrw-%</code> {{{2</div>
<div class="old-help-para">To open a new file in netrw's current directory, press "%".  This map
will query the user for a new filename; an empty file by that name will
be placed in the netrw's current directory (ie. b:netrw_curdir).</div>
<div class="old-help-para">If Lexplore (<a href="/neovim-docs-web/en/pi_netrw#netrw-%3ALexplore">netrw-:Lexplore</a>) is in use, the new file will be generated
in the <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_chgwin">g:netrw_chgwin</a> window.</div>
<div class="old-help-para">Related topics:               <a href="/neovim-docs-web/en/pi_netrw#netrw-d">netrw-d</a></div>
<div class="old-help-para"><h3 class="help-heading">PREVIEW WINDOW<span class="help-heading-tags">				<a name="netrw-p"></a><span class="help-tag">netrw-p</span> <a name="netrw-preview"></a><span class="help-tag">netrw-preview</span> {{{2</span></h3></div>
<div class="old-help-para">One may use a preview window by using the "p" key when the cursor is atop the
desired filename to be previewed.  The display will then split to show both
the browser (where the cursor will remain) and the file (see <a href="/neovim-docs-web/en/windows#%3Apedit">:pedit</a>).  By
default, the split will be taken horizontally; one may use vertical splitting
if one has set <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_preview">g:netrw_preview</a> first.</div>
<div class="old-help-para">An interesting set of netrw settings is:<pre>let g:netrw_preview   = 1
let g:netrw_liststyle = 3
let g:netrw_winsize   = 30</pre>
These will:</div>
<div class="old-help-para">	1. Make vertical splitting the default for previewing files
	2. Make the default listing style "tree"
	3. When a vertical preview window is opened, the directory listing
	   will use only 30% of the columns available; the rest of the window
	   is used for the preview window.</div>
<div class="old-help-para">	Related: if you like this idea, you may also find :Lexplore
	         (<a href="/neovim-docs-web/en/pi_netrw#netrw-%3ALexplore">netrw-:Lexplore</a>) or <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_chgwin">g:netrw_chgwin</a> of interest</div>
<div class="old-help-para">Also see: <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_chgwin">g:netrw_chgwin</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-P">netrw-P</a> <a href="/neovim-docs-web/en/options#'previewwindow'">'previewwindow'</a> <a href="/neovim-docs-web/en/windows#CTRL-W_z">CTRL-W_z</a> <a href="/neovim-docs-web/en/windows#%3Apclose">:pclose</a></div>
<div class="old-help-para"><h3 class="help-heading">PREVIOUS WINDOW<span class="help-heading-tags">					<a name="netrw-P"></a><span class="help-tag">netrw-P</span> <a name="netrw-prvwin"></a><span class="help-tag">netrw-prvwin</span> {{{2</span></h3></div>
<div class="old-help-para">To edit a file or directory under the cursor in the previously used (last
accessed) window (see :he <a href="/neovim-docs-web/en/windows#CTRL-W_p">CTRL-W_p</a>), press a "P".  If there's only one
window, then the one window will be horizontally split (by default).</div>
<div class="old-help-para">If there's more than one window, the previous window will be re-used on
the selected file/directory.  If the previous window's associated buffer
has been modified, and there's only one window with that buffer, then
the user will be asked if they wish to save the buffer first (yes, no, or
cancel).</div>
<div class="old-help-para">Related Actions <a href="/neovim-docs-web/en/pi_netrw#netrw-cr">netrw-cr</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-o">netrw-o</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-t">netrw-t</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-v">netrw-v</a>
Associated setting variables:
   <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_alto">g:netrw_alto</a>    control above/below splitting
   <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_altv">g:netrw_altv</a>    control right/left splitting
   <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_preview">g:netrw_preview</a> control horizontal vs vertical splitting
   <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_winsize">g:netrw_winsize</a> control initial sizing</div>
<div class="old-help-para">Also see: <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_chgwin">g:netrw_chgwin</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-p">netrw-p</a></div>
<div class="old-help-para"><h3 class="help-heading">REFRESHING THE LISTING<span class="help-heading-tags">		<a name="netrw-refresh"></a><span class="help-tag">netrw-refresh</span> <a name="netrw-ctrl-l"></a><span class="help-tag">netrw-ctrl-l</span> <a name="netrw-ctrl_l"></a><span class="help-tag">netrw-ctrl_l</span> {{{2</span></h3></div>
<div class="old-help-para">To refresh either a local or remote directory listing, press ctrl-l (<code>&lt;c-l&gt;</code>) or
hit the <code>&lt;cr&gt;</code> when atop the ./ directory entry in the listing.  One may also
refresh a local directory by using ":e .".</div>
<div class="old-help-para"><h3 class="help-heading">REVERSING SORTING ORDER<span class="help-heading-tags">		<a name="netrw-r"></a><span class="help-tag">netrw-r</span> <a name="netrw-reverse"></a><span class="help-tag">netrw-reverse</span> {{{2</span></h3></div>
<div class="old-help-para">One may toggle between normal and reverse sorting order by pressing the
"r" key.</div>
<div class="old-help-para">Related topics:              <a href="/neovim-docs-web/en/pi_netrw#netrw-s">netrw-s</a>
Associated setting variable: <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_sort_direction">g:netrw_sort_direction</a></div>
<div class="old-help-para"><h3 class="help-heading">RENAMING FILES OR DIRECTORIES<span class="help-heading-tags">	<a name="netrw-move"></a><span class="help-tag">netrw-move</span> <a name="netrw-rename"></a><span class="help-tag">netrw-rename</span> <a name="netrw-R"></a><span class="help-tag">netrw-R</span> {{{2</span></h3></div>
<div class="old-help-para">If there are no marked files: (see <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a>)</div>
<div class="old-help-para">    Renaming files and directories involves moving the cursor to the
    file/directory to be moved (renamed) and pressing "R".  You will then be
    queried for what you want the file/directory to be renamed to.  You may
    select a range of lines with the "V" command (visual selection), and then
    press "R"; you will be queried for each file as to what you want it
    renamed to.</div>
<div class="old-help-para">If there are marked files:  (see <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a>)</div>
<div class="old-help-para">    Marked files will be renamed (moved).  You will be queried as above in
    order to specify where you want the file/directory to be moved.</div>
<div class="old-help-para">    If you answer a renaming query with a "s/frompattern/topattern/", then
    subsequent files on the marked file list will be renamed by taking each
    name, applying that substitute, and renaming each file to the result.
    As an example :<pre>    mr  [query: reply with *.c]
R   [query: reply with s/^\(.*\)\.c$/\1.cpp/]</pre></div>
<div class="old-help-para">    This example will mark all.c files and then rename them to *.cpp    files.  Netrw will protect you from overwriting local files without
    confirmation, but not remote ones.</div>
<div class="old-help-para">    The ctrl-X character has special meaning for renaming files:<pre>    &lt;c-x&gt;      : a single ctrl-x tells netrw to ignore the portion of the response
             lying between the last '/' and the ctrl-x.

&lt;c-x&gt;&lt;c-x&gt; : a pair of contiguous ctrl-x's tells netrw to ignore any
             portion of the string preceding the double ctrl-x's.</pre></div>
<div class="old-help-para">    WARNING:~</div>
<div class="old-help-para">    Note that moving files is a dangerous operation; copies are safer.  That's
    because a "move" for remote files is actually a copy + delete -- and if
    the copy fails and the delete succeeds you may lose the file.
    Use at your own risk.</div>
<div class="old-help-para">The <a name="g%3Anetrw_rename_cmd"></a><code class="help-tag">g:netrw_rename_cmd</code> variable is used to implement remote renaming.  By
default its value is:<pre>ssh HOSTNAME mv</pre></div>
<div class="old-help-para">One may rename a block of files and directories by selecting them with
V (<a href="/neovim-docs-web/en/visual#linewise-visual">linewise-visual</a>) when using thin style.</div>
<div class="old-help-para">See <a href="/neovim-docs-web/en/cmdline#cmdline-editing">cmdline-editing</a> for more on how to edit the command line; in particular,
you'll find <code>&lt;ctrl-f&gt;</code> (initiates cmdline window editing) and <code>&lt;ctrl-c&gt;</code> (uses the
command line under the cursor) useful in conjunction with the R command.</div>
<div class="old-help-para"><h3 class="help-heading">SELECTING SORTING STYLE<span class="help-heading-tags">			<a name="netrw-s"></a><span class="help-tag">netrw-s</span> <a name="netrw-sort"></a><span class="help-tag">netrw-sort</span> {{{2</span></h3></div>
<div class="old-help-para">One may select the sorting style by name, time, or (file) size.  The "s" map
allows one to circulate amongst the three choices; the directory listing will
automatically be refreshed to reflect the selected style.</div>
<div class="old-help-para">Related topics:               <a href="/neovim-docs-web/en/pi_netrw#netrw-r">netrw-r</a> <a href="/neovim-docs-web/en/pi_netrw#netrw-S">netrw-S</a>
Associated setting variables: <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_sort_by">g:netrw_sort_by</a> <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_sort_sequence">g:netrw_sort_sequence</a></div>
<div class="old-help-para"><h3 class="help-heading">SETTING EDITING WINDOW<span class="help-heading-tags">		<a name="netrw-editwindow"></a><span class="help-tag">netrw-editwindow</span> <a name="netrw-C"></a><span class="help-tag">netrw-C</span> <a name="netrw-%3ANetrwC"></a><span class="help-tag">netrw-:NetrwC</span> {{{2</span></h3></div>
<div class="old-help-para">One may select a netrw window for editing with the "C" mapping, using the
:NetrwC [win#] command, or by setting <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_chgwin">g:netrw_chgwin</a> to the selected window
number.  Subsequent selection of a file to edit (<a href="/neovim-docs-web/en/pi_netrw#netrw-cr">netrw-cr</a>) will use that
window.</div>
<div class="old-help-para"><div class="help-li" style=""> C : by itself, will select the current window holding a netrw buffer
	  for subsequent editing via <a href="/neovim-docs-web/en/pi_netrw#netrw-cr">netrw-cr</a>.  The C mapping is only available
	  while in netrw buffers.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> [count]C : the count will be used as the window number to be used
	  for subsequent editing via <a href="/neovim-docs-web/en/pi_netrw#netrw-cr">netrw-cr</a>.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> :NetrwC will set <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_chgwin">g:netrw_chgwin</a> to the current window
</div></div>
<div class="old-help-para"><div class="help-li" style=""> :NetrwC win#  will set <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_chgwin">g:netrw_chgwin</a> to the specified window
	  number
</div></div>
<div class="old-help-para">Using<pre>let g:netrw_chgwin= -1</pre>
will restore the default editing behavior
(ie. subsequent editing will use the current window).</div>
<div class="old-help-para">Related topics:			<a href="/neovim-docs-web/en/pi_netrw#netrw-cr">netrw-cr</a> <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_browse_split">g:netrw_browse_split</a>
Associated setting variables:	<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_chgwin">g:netrw_chgwin</a></div>
<div class="old-help-para">SHRINKING OR EXPANDING A NETRW OR LEXPLORE WINDOW	<a name="netrw-c-tab"></a><code class="help-tag">netrw-c-tab</code> {{{2</div>
<div class="old-help-para">The <code>&lt;c-tab&gt;</code> key will toggle a netrw or <a href="/neovim-docs-web/en/pi_netrw#%3ALexplore">:Lexplore</a> window's width,
but only if <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_usetab">g:netrw_usetab</a> exists and is non-zero (and, of course,
only if your terminal supports differentiating <code>&lt;c-tab&gt;</code> from a plain
<code>&lt;tab&gt;</code>).</div>
<div class="old-help-para"><div class="help-li" style=""> If the current window is a netrw window, toggle its width
    (between <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_wiw">g:netrw_wiw</a> and its original width)
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Else if there is a <a href="/neovim-docs-web/en/pi_netrw#%3ALexplore">:Lexplore</a> window in the current tab, toggle
    its width
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Else bring up a <a href="/neovim-docs-web/en/pi_netrw#%3ALexplore">:Lexplore</a> window
</div></div>
<div class="old-help-para">If <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_usetab">g:netrw_usetab</a> exists and is zero, or if there is a pre-existing mapping
for <code>&lt;c-tab&gt;</code>, then the <code>&lt;c-tab&gt;</code> will not be mapped.  One may map something other
than a <code>&lt;c-tab&gt;</code>, too: (but you'll still need to have had <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_usetab">g:netrw_usetab</a> set).<pre>nmap &lt;unique&gt; (whatever)        &lt;Plug&gt;NetrwShrink</pre></div>
<div class="old-help-para">Related topics:			<a href="/neovim-docs-web/en/pi_netrw#%3ALexplore">:Lexplore</a>
Associated setting variable:	<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_usetab">g:netrw_usetab</a></div>
<div class="old-help-para"><h3 class="help-heading">USER SPECIFIED MAPS<span class="help-heading-tags">					<a name="netrw-usermaps"></a><span class="help-tag">netrw-usermaps</span> {{{1</span></h3></div>
<div class="old-help-para">One may make customized user maps.  Specify a variable, <a href="/neovim-docs-web/en/pi_netrw#g%3ANetrw_UserMaps">g:Netrw_UserMaps</a>,
to hold a <a href="/neovim-docs-web/en/eval#List">List</a> of lists of keymap strings and function names:<pre>[["keymap-sequence","ExampleUserMapFunc"],...]</pre></div>
<div class="old-help-para">When netrw is setting up maps for a netrw buffer, if <a href="/neovim-docs-web/en/pi_netrw#g%3ANetrw_UserMaps">g:Netrw_UserMaps</a>
exists, then the internal function netrw#UserMaps(islocal) is called.
This function goes through all the entries in the <a href="/neovim-docs-web/en/pi_netrw#g%3ANetrw_UserMaps">g:Netrw_UserMaps</a> list:</div>
<div class="old-help-para"><div class="help-li" style=""> sets up maps:
<pre>nno &lt;buffer&gt; &lt;silent&gt; KEYMAP-SEQUENCE
:call s:UserMaps(islocal,"ExampleUserMapFunc")</pre></div><div class="help-li" style=""> refreshes if result from that function call is the string
	  "refresh"
</div><div class="help-li" style="margin-left: 3rem;"> if the result string is not "", then that string will be
	  executed (:exe result)
</div><div class="help-li" style="margin-left: 3rem;"> if the result is a List, then the above two actions on results
	  will be taken for every string in the result List
</div></div>
<div class="old-help-para">The user function is passed one argument; it resembles<pre>fun! ExampleUserMapFunc(islocal)</pre></div>
<div class="old-help-para">where a:islocal is 1 if its a local-directory system call or 0 when
remote-directory system call.</div>
<div class="old-help-para">			        <a name="netrw-call"></a><code class="help-tag-right">netrw-call</code>  <a name="netrw-expose"></a><code class="help-tag">netrw-expose</code>  <a name="netrw-modify"></a><code class="help-tag">netrw-modify</code>
Use netrw#Expose("varname")          to access netrw-internal (script-local)
				     variables.
Use netrw#Modify("varname",newvalue) to change netrw-internal variables.
Use netrw#Call("funcname"[,args])    to call a netrw-internal function with
				     specified arguments.</div>
<div class="old-help-para">Example: Get a copy of netrw's marked file list:<pre>let netrwmarkfilelist= netrw#Expose("netrwmarkfilelist")</pre></div>
<div class="old-help-para">Example: Modify the value of netrw's marked file list:<pre>call netrw#Modify("netrwmarkfilelist",[])</pre></div>
<div class="old-help-para">Example: Clear netrw's marked file list via a mapping on gu<pre>" ExampleUserMap: {{{2
fun! ExampleUserMap(islocal)
  call netrw#Modify("netrwmarkfilelist",[])
  call netrw#Modify('netrwmarkfilemtch_{bufnr("%")}',"")
  let retval= ["refresh"]
  return retval
endfun
let g:Netrw_UserMaps= [["gu","ExampleUserMap"]]</pre></div>
<div class="old-help-para">10. Problems and Fixes					<a name="netrw-problems"></a><code class="help-tag-right">netrw-problems</code> {{{1</div>
<div class="old-help-para">	(This section is likely to grow as I get feedback)
	(also see <a href="/neovim-docs-web/en/pi_netrw#netrw-debug">netrw-debug</a>)
								<a name="netrw-p1"></a><code class="help-tag-right">netrw-p1</code>
	P1. I use windows 95, and my ftp dumps four blank lines at the      {{{2
	    end of every read.</div>
<div class="old-help-para">		See <a href="/neovim-docs-web/en/pi_netrw#netrw-fixup">netrw-fixup</a>, and put the following into your
		&lt;.vimrc&gt; file:</div>
<div class="old-help-para">			let g:netrw_win95ftp= 1</div>
<div class="old-help-para">								<a name="netrw-p2"></a><code class="help-tag-right">netrw-p2</code>
	P2. I use Windows, and my network browsing with ftp doesn't sort by {{{2
	    time or size!  -or-  The remote system is a Windows server; why
	    don't I get sorts by time or size?</div>
<div class="old-help-para">		Windows' ftp has a minimal support for ls (ie. it doesn't
		accept sorting options).  It doesn't support the -F which
		gives an explanatory character (ABC/ for "ABC is a directory").
		Netrw then uses "dir" to get both its thin and long listings.
		If you think your ftp does support a full-up ls, put the
		following into your &lt;.vimrc&gt;:<pre>let g:netrw_ftp_list_cmd    = "ls -lF"
let g:netrw_ftp_timelist_cmd= "ls -tlF"
let g:netrw_ftp_sizelist_cmd= "ls -slF"</pre></div>
<div class="old-help-para">		Alternatively, if you have cygwin on your Windows box, put
		into your &lt;.vimrc&gt;:<pre>let g:netrw_cygwin= 1</pre></div>
<div class="old-help-para">		This problem also occurs when the remote system is Windows.
		In this situation, the various g:netrw_ftp_[time|size]list_cmds
		are as shown above, but the remote system will not correctly
		modify its listing behavior.</div>
<div class="old-help-para">								<a name="netrw-p3"></a><code class="help-tag-right">netrw-p3</code>
	P3. I tried rcp://user@host/ (or protocol other than ftp) and netrw {{{2
	    used ssh!  That wasn't what I asked for...</div>
<div class="old-help-para">		Netrw has two methods for browsing remote directories: ssh
		and ftp.  Unless you specify ftp specifically, ssh is used.
		When it comes time to do download a file (not just a directory
		listing), netrw will use the given protocol to do so.</div>
<div class="old-help-para">								<a name="netrw-p4"></a><code class="help-tag-right">netrw-p4</code>
	P4. I would like long listings to be the default.                   {{{2</div>
<div class="old-help-para">		Put the following statement into your <a href="/neovim-docs-web/en/starting#vimrc">vimrc</a>:<pre>let g:netrw_liststyle= 1</pre></div>
<div class="old-help-para">		Check out <a href="/neovim-docs-web/en/pi_netrw#netrw-browser-var">netrw-browser-var</a> for more customizations that
		you can set.</div>
<div class="old-help-para">								<a name="netrw-p5"></a><code class="help-tag-right">netrw-p5</code>
	P5. My times come up oddly in local browsing                        {{{2</div>
<div class="old-help-para">		Does your system's strftime() accept the "%c" to yield dates
		such as "Sun Apr 27 11:49:23 1997"?  If not, do a
		"man strftime" and find out what option should be used.  Then
		put it into your <a href="/neovim-docs-web/en/starting#vimrc">vimrc</a>:<pre>let g:netrw_timefmt= "%X"  (where X is the option)</pre></div>
<div class="old-help-para">								<a name="netrw-p6"></a><code class="help-tag-right">netrw-p6</code>
	P6. I want my current directory to track my browsing.               {{{2
	    How do I do that?</div>
<div class="old-help-para">	    Put the following line in your <a href="/neovim-docs-web/en/starting#vimrc">vimrc</a>:
<pre>let g:netrw_keepdir= 0</pre></div>
<div class="old-help-para">								<a name="netrw-p7"></a><code class="help-tag-right">netrw-p7</code>
	P7. I use Chinese (or other non-ascii) characters in my filenames,  {{{2
	    and netrw (Explore, Sexplore, Hexplore, etc) doesn't display them!</div>
<div class="old-help-para">		(taken from an answer provided by Wu Yongwei on the vim
		mailing list)
		I now see the problem. Your code page is not 936, right? Vim
		seems only able to open files with names that are valid in the
		current code page, as are many other applications that do not
		use the Unicode version of Windows APIs. This is an OS-related
		issue. You should not have such problems when the system
		locale uses UTF-8, such as modern Linux distros.</div>
<div class="old-help-para">		(...it is one more reason to recommend that people use utf-8!)</div>
<div class="old-help-para">								<a name="netrw-p8"></a><code class="help-tag-right">netrw-p8</code>
	P8. I'm getting "ssh is not executable on your system" -- what do I {{{2
	    do?</div>
<div class="old-help-para">		(Dudley Fox) Most people I know use putty for windows ssh.  It
		is a free ssh/telnet application. You can read more about it
		here:</div>
<div class="old-help-para">		<a href="http://www.chiark.greenend.org.uk/~sgtatham/putty/">http://www.chiark.greenend.org.uk/~sgtatham/putty/</a> Also:</div>
<div class="old-help-para">		(Marlin Unruh) This program also works for me. It's a single
		executable, so he/she can copy it into the Windows\System32
		folder and create a shortcut to it.</div>
<div class="old-help-para">		(Dudley Fox) You might also wish to consider plink, as it
		sounds most similar to what you are looking for. plink is an
		application in the putty suite.</div>
<div class="old-help-para">           <a href="http://the.earth.li/~sgtatham/putty/0.58/htmldoc/Chapter7.html#plink">http://the.earth.li/~sgtatham/putty/0.58/htmldoc/Chapter7.html#plink</a></div>
<div class="old-help-para">		(Vissale Neang) Maybe you can try OpenSSH for windows, which
		can be obtained from:</div>
<div class="old-help-para">		<a href="http://sshwindows.sourceforge.net/">http://sshwindows.sourceforge.net/</a></div>
<div class="old-help-para">		It doesn't need the full Cygwin package.</div>
<div class="old-help-para">		(Antoine Mechelynck) For individual Unix-like programs needed
		for work in a native-Windows environment, I recommend getting
		them from the GnuWin32 project on sourceforge if it has them:</div>
<div class="old-help-para">		    <a href="http://gnuwin32.sourceforge.net/">http://gnuwin32.sourceforge.net/</a></div>
<div class="old-help-para">		Unlike Cygwin, which sets up a Unix-like virtual machine on
		top of Windows, GnuWin32 is a rewrite of Unix utilities with
		Windows system calls, and its programs works quite well in the
		cmd.exe "Dos box".</div>
<div class="old-help-para">		(dave) Download WinSCP and use that to connect to the server.
		In Preferences &gt; Editors, set gvim as your editor:</div>
<div class="old-help-para"><div class="help-li" style=""> Click "Add..."
</div><div class="help-li" style=""> Set External Editor (adjust path as needed, include
			  the quotes and !.! at the end):
			    "c:\Program Files\Vim\vim82\gvim.exe" !.!
</div><div class="help-li" style=""> Check that the filetype in the box below is
			  <code>{asterisk}</code>.{asterisk} (all files), or whatever types
			  you want (cec: change <code>{asterisk}</code> to * ; I had to
			  write it that way because otherwise the helptags
			  system thinks it's a tag)
</div><div class="help-li" style=""> Make sure it's at the top of the listbox (click it,
			  then click "Up" if it's not)
		If using the Norton Commander style, you just have to hit <code>&lt;F4&gt;</code>
		to edit a file in a local copy of gvim.
</div></div>
<div class="old-help-para">		(Vit Gottwald) How to generate public/private key and save
		public key it on server:<pre>http://www.chiark.greenend.org.uk/~sgtatham/putty/0.60/htmldoc/Chapter8.html#pubkey-gettingready
                      (8.3 Getting ready for public key authentication)</pre></div>
<div class="old-help-para">		How to use a private key with "pscp":<pre>http://www.chiark.greenend.org.uk/~sgtatham/putty/0.60/htmldoc/Chapter5.html
                      (5.2.4 Using public key authentication with PSCP)</pre></div>
<div class="old-help-para">		(Ben Schmidt) I find the ssh included with cwRsync is
		brilliant, and install cwRsync or cwRsyncServer on most
		Windows systems I come across these days. I guess COPSSH,
		packed by the same person, is probably even better for use as
		just ssh on Windows, and probably includes sftp, etc. which I
		suspect the cwRsync doesn't, though it might</div>
<div class="old-help-para">		(cec) To make proper use of these suggestions above, you will
		need to modify the following user-settable variables in your
		.vimrc:</div>
<div class="old-help-para">		<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_ssh_cmd">g:netrw_ssh_cmd</a> <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_list_cmd">g:netrw_list_cmd</a>  <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_mkdir_cmd">g:netrw_mkdir_cmd</a>
		<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_rm_cmd">g:netrw_rm_cmd</a>  <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_rmdir_cmd">g:netrw_rmdir_cmd</a> <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_rmf_cmd">g:netrw_rmf_cmd</a></div>
<div class="old-help-para">		The first one (<a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_ssh_cmd">g:netrw_ssh_cmd</a>) is the most important; most
		of the others will use the string in g:netrw_ssh_cmd by
		default.</div>
<div class="old-help-para">						<a name="netrw-p9"></a><code class="help-tag-right">netrw-p9</code> <a name="netrw-ml_get"></a><code class="help-tag">netrw-ml_get</code>
	P9. I'm browsing, changing directory, and bang!  ml_get errors      {{{2
	    appear and I have to kill vim.  Any way around this?</div>
<div class="old-help-para">		Normally netrw attempts to avoid writing swapfiles for
		its temporary directory buffers.  However, on some systems
		this attempt appears to be causing ml_get errors to
		appear.  Please try setting <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_use_noswf">g:netrw_use_noswf</a> to 0
		in your &lt;.vimrc&gt;:<pre>let g:netrw_use_noswf= 0</pre></div>
<div class="old-help-para">								<a name="netrw-p10"></a><code class="help-tag-right">netrw-p10</code>
	P10. I'm being pestered with "[something] is a directory" and       {{{2
	     "Press ENTER or type command to continue" prompts...</div>
<div class="old-help-para">		The "[something] is a directory" prompt is issued by Vim,
		not by netrw, and there appears to be no way to work around
		it.  Coupled with the default cmdheight of 1, this message
		causes the "Press ENTER..." prompt.  So:  read <a href="/neovim-docs-web/en/message#hit-enter">hit-enter</a>;
		I also suggest that you set your <a href="/neovim-docs-web/en/options#'cmdheight'">'cmdheight'</a> to 2 (or more) in
		your &lt;.vimrc&gt; file.</div>
<div class="old-help-para">								<a name="netrw-p11"></a><code class="help-tag-right">netrw-p11</code>
	P11. I want to have two windows; a thin one on the left and my      {{{2
	     editing window on the right.  How may I accomplish this?</div>
<div class="old-help-para">	     You probably want netrw running as in a side window.  If so, you
	     will likely find that ":[N]Lexplore" does what you want.  The
	     optional "[N]" allows you to select the quantity of columns you
	     wish the <a href="/neovim-docs-web/en/pi_netrw#%3ALexplore">:Lexplore</a>r window to start with (see <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_winsize">g:netrw_winsize</a>
	     for how this parameter works).</div>
<div class="old-help-para">	     Previous solution:</div>
<div class="old-help-para"><div class="help-li" style=""> Put the following line in your &lt;.vimrc&gt;:
			let g:netrw_altv = 1
</div><div class="help-li" style=""> Edit the current directory:  :e .
</div><div class="help-li" style=""> Select some file, press v
</div><div class="help-li" style=""> Resize the windows as you wish (see <a href="/neovim-docs-web/en/windows#CTRL-W_%3C">CTRL-W_&lt;</a> and
		  <a href="/neovim-docs-web/en/windows#CTRL-W_%3E">CTRL-W_&gt;</a>).  If you're using gvim, you can drag
		  the separating bar with your mouse.
</div><div class="help-li" style=""> When you want a new file, use  ctrl-w h  to go back to the
		  netrw browser, select a file, then press P  (see <a href="/neovim-docs-web/en/windows#CTRL-W_h">CTRL-W_h</a>
		  and <a href="/neovim-docs-web/en/pi_netrw#netrw-P">netrw-P</a>).  If you're using gvim, you can press
		  <code>&lt;leftmouse&gt;</code> in the browser window and then press the
		  <code>&lt;middlemouse&gt;</code> to select the file.
</div></div>
<div class="old-help-para">								<a name="netrw-p12"></a><code class="help-tag-right">netrw-p12</code>
	P12. My directory isn't sorting correctly, or unwanted letters are  {{{2
	     appearing in the listed filenames, or things aren't lining
	     up properly in the wide listing, ...</div>
<div class="old-help-para">	     This may be due to an encoding problem.  I myself usually use
	     utf-8, but really only use ascii (ie. bytes from 32-126).
	     Multibyte encodings use two (or more) bytes per character.
	     You may need to change <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_sepchr">g:netrw_sepchr</a> and/or <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_xstrlen">g:netrw_xstrlen</a>.</div>
<div class="old-help-para">								<a name="netrw-p13"></a><code class="help-tag-right">netrw-p13</code>
	P13. I'm a Windows + putty + ssh user, and when I attempt to        {{{2
	     browse, the directories are missing trailing "/"s so netrw treats
	     them as file transfers instead of as attempts to browse
	     subdirectories.  How may I fix this?</div>
<div class="old-help-para">	     (mikeyao) If you want to use vim via ssh and putty under Windows,
	     try combining the use of pscp/psftp with plink.  pscp/psftp will
	     be used to connect and plink will be used to execute commands on
	     the server, for example: list files and directory using <a href="/neovim-docs-web/en/options#'ls'">'ls'</a>.</div>
<div class="old-help-para">	     These are the settings I use to do this:
<pre>" list files, it's the key setting, if you haven't set,
" you will get a blank buffer
let g:netrw_list_cmd = "plink HOSTNAME ls -Fa"
" if you haven't add putty directory in system path, you should
" specify scp/sftp command.  For examples:
"let g:netrw_sftp_cmd = "d:\\dev\\putty\\PSFTP.exe"
"let g:netrw_scp_cmd = "d:\\dev\\putty\\PSCP.exe"</pre></div>
<div class="old-help-para">								<a name="netrw-p14"></a><code class="help-tag-right">netrw-p14</code>
	P14. I would like to speed up writes using Nwrite and scp/ssh       {{{2
	     style connections.  How?  (Thomer M. Gil)</div>
<div class="old-help-para">	     Try using ssh's ControlMaster and ControlPath (see the ssh_config
	     man page) to share multiple ssh connections over a single network
	     connection. That cuts out the cryptographic handshake on each
	     file write, sometimes speeding it up by an order of magnitude.
	     (see  <a href="http://thomer.com/howtos/netrw_ssh.html">http://thomer.com/howtos/netrw_ssh.html</a>)
	     (included by permission)</div>
<div class="old-help-para">	     Add the following to your ~/.ssh/config:<pre># you change "*" to the hostname you care about
Host *
  ControlMaster auto
  ControlPath /tmp/%r@%h:%p</pre></div>
<div class="old-help-para">	     Then create an ssh connection to the host and leave it running:<pre>ssh -N host.domain.com</pre></div>
<div class="old-help-para">	     Now remotely open a file with Vim's Netrw and enjoy the
	     zippiness:<pre>vim scp://host.domain.com//home/user/.bashrc</pre></div>
<div class="old-help-para">								<a name="netrw-p15"></a><code class="help-tag-right">netrw-p15</code>
	P15. How may I use a double-click instead of netrw's usual single   {{{2
	     click to open a file or directory?  (Ben Fritz)</div>
<div class="old-help-para">	     First, disable netrw's mapping with<pre>let g:netrw_mousemaps= 0</pre></div>
<div class="old-help-para">	     and then create a netrw buffer only mapping in
	     $HOME/.vim/after/ftplugin/netrw.vim:<pre>nmap &lt;buffer&gt; &lt;2-leftmouse&gt; &lt;CR&gt;</pre></div>
<div class="old-help-para">	     Note that setting g:netrw_mousemaps to zero will turn off
	     all netrw's mouse mappings, not just the <code>&lt;leftmouse&gt;</code> one.
	     (see <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_mousemaps">g:netrw_mousemaps</a>)</div>
<div class="old-help-para">								<a name="netrw-p16"></a><code class="help-tag-right">netrw-p16</code>
	P16. When editing remote files (ex. :e ftp://hostname/path/file),   {{{2
	     under Windows I get an <a href="/neovim-docs-web/en/message#E303">E303</a> message complaining that its unable
	     to open a swap file.</div>
<div class="old-help-para">	     (romainl) It looks like you are starting Vim from a protected
	     directory.  Start netrw from your $HOME or other writable
	     directory.</div>
<div class="old-help-para">								<a name="netrw-p17"></a><code class="help-tag-right">netrw-p17</code>
	P17. Netrw is closing buffers on its own.                           {{{2
	     What steps will reproduce the problem?
		1. :Explore, navigate directories, open a file
		2. :Explore, open another file
		3. Buffer opened in step 1 will be closed. o
	    What is the expected output? What do you see instead?
		I expect both buffers to exist, but only the last one does.</div>
<div class="old-help-para">	   (Lance) Problem is caused by "set autochdir" in .vimrc.
	   (drchip) I am able to duplicate this problem with <a href="/neovim-docs-web/en/options#'acd'">'acd'</a> set.
	            It appears that the buffers are not exactly closed;
		    a ":ls!" will show them (although ":ls" does not).</div>
<div class="old-help-para">								<a name="netrw-P18"></a><code class="help-tag-right">netrw-P18</code>
	P18. How to locally edit a file that's only available via           {{{2
	     another server accessible via ssh?
	     See <a href="http://stackoverflow.com/questions/12469645/">http://stackoverflow.com/questions/12469645/</a>
	     "Using Vim to Remotely Edit A File on ServerB Only
	      Accessible From ServerA"</div>
<div class="old-help-para">								<a name="netrw-P19"></a><code class="help-tag-right">netrw-P19</code>
	P19. How do I get numbering on in directory listings?               {{{2
		With <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_bufsettings">g:netrw_bufsettings</a>, you can control netrw's buffer
		settings; try putting<pre>let g:netrw_bufsettings="noma nomod nu nobl nowrap ro nornu"</pre></div>
<div class="old-help-para">		in your .vimrc.  If you'd like to have relative numbering
		instead, try<pre>let g:netrw_bufsettings="noma nomod nonu nobl nowrap ro rnu"</pre></div>
<div class="old-help-para">								<a name="netrw-P20"></a><code class="help-tag-right">netrw-P20</code>
	P20. How may I have gvim start up showing a directory listing?      {{{2
		Try putting the following code snippet into your .vimrc:<pre>augroup VimStartup
  au!
  au VimEnter * if expand("%") == "" &amp;&amp; argc() == 0 &amp;&amp;
  \ (v:servername =~ 'GVIM\d*' || v:servername == "")
  \ | e . | endif
augroup END</pre></div>
<div class="old-help-para">		You may use Lexplore instead of "e" if you're so inclined.
		This snippet assumes that you have client-server enabled
		(ie. a "huge" vim version).</div>
<div class="old-help-para">								<a name="netrw-P21"></a><code class="help-tag-right">netrw-P21</code>
	P21. I've made a directory (or file) with an accented character,    {{{2
		but netrw isn't letting me enter that directory/read that file:</div>
<div class="old-help-para">		Its likely that the shell or o/s is using a different encoding
		than you have vim (netrw) using.  A patch to vim supporting
		"systemencoding" may address this issue in the future; for
		now, just have netrw use the proper encoding.  For example:<pre>au FileType netrw set enc=latin1</pre></div>
<div class="old-help-para">								<a name="netrw-P22"></a><code class="help-tag-right">netrw-P22</code>
	P22. I get an error message when I try to copy or move a file:      {{{2</div>
		**error**<div class="old-help-para"> (netrw) tried using g:netrw_localcopycmd&lt;cp&gt;; it doesn't work!</div>
<div class="old-help-para">	     What's wrong?</div>
<div class="old-help-para">	     Netrw uses several system level commands to do things (see</div>
<div class="old-help-para">		 <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_localcopycmd">g:netrw_localcopycmd</a>, <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_localmovecmd">g:netrw_localmovecmd</a>,
		 <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_localrmdir">g:netrw_localrmdir</a>, <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_mkdir_cmd">g:netrw_mkdir_cmd</a>).</div>
<div class="old-help-para">	    You may need to adjust the default commands for one or more of
	    these commands by setting them properly in your .vimrc.  Another
	    source of difficulty is that these commands use vim's local
	    directory, which may not be the same as the browsing directory
	    shown by netrw (see <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_keepdir">g:netrw_keepdir</a>).</div>
<div class="old-help-para"><h2 class="help-heading">11. Debugging Netrw Itself<span class="help-heading-tags">				<a name="netrw-debug"></a><span class="help-tag">netrw-debug</span> {{{1</span></h2></div>
<div class="old-help-para">Step 1: check that the problem you've encountered hasn't already been resolved
by obtaining a copy of the latest (often developmental) netrw at:</div>
<div class="old-help-para">	<a href="http://www.drchip.org/astronaut/vim/index.html#NETRW">http://www.drchip.org/astronaut/vim/index.html#NETRW</a></div>
<div class="old-help-para">The &lt;netrw.vim&gt; script is typically installed on systems as something like:
<pre>/usr/local/share/vim/vim8x/plugin/netrwPlugin.vim
/usr/local/share/vim/vim8x/autoload/netrw.vim
        (see output of :echo &amp;rtp)</pre></div>
<div class="old-help-para">which is loaded automatically at startup (assuming :set nocp).  If you
installed a new netrw, then it will be located at<pre>$HOME/.vim/plugin/netrwPlugin.vim
$HOME/.vim/autoload/netrw.vim</pre></div>
<div class="old-help-para">Step 2: assuming that you've installed the latest version of netrw,
check that your problem is really due to netrw.  Create a file
called netrw.vimrc with the following contents:<pre>set nocp
so $HOME/.vim/plugin/netrwPlugin.vim</pre></div>
<div class="old-help-para">Then run netrw as follows:<pre>vim -u netrw.vimrc --noplugins -i NONE [some path here]</pre></div>
<div class="old-help-para">Perform whatever netrw commands you need to, and check that the problem is
still present.  This procedure sidesteps any issues due to personal .vimrc
settings, .viminfo file, and other plugins.  If the problem does not appear,
then you need to determine which setting in your .vimrc is causing the
conflict with netrw or which plugin(s) is/are involved.</div>
<div class="old-help-para">Step 3: If the problem still is present, then get a debugging trace from
netrw:</div>
<div class="old-help-para">	1. Get the &lt;Decho.vim&gt; script, available as:</div>
<div class="old-help-para">	     <a href="http://www.drchip.org/astronaut/vim/index.html#DECHO">http://www.drchip.org/astronaut/vim/index.html#DECHO</a>
	   or
	     <a href="http://vim.sourceforge.net/scripts/script.php?script_id=120">http://vim.sourceforge.net/scripts/script.php?script_id=120</a></div>
<div class="old-help-para">	  Decho.vim is provided as a "vimball".  You
	  should edit the Decho.vba.gz file and source it in:<pre>  vim Decho.vba.gz
:so %
:q</pre></div>
<div class="old-help-para">	2. To turn on debug tracing in netrw, then edit the &lt;netrw.vim&gt;
	   file by typing:<pre>vim netrw.vim
:DechoOn
:wq</pre></div>
<div class="old-help-para">	   To restore to normal non-debugging behavior, re-edit &lt;netrw.vim&gt;
	   and type<pre>vim netrw.vim
:DechoOff
:wq</pre></div>
<div class="old-help-para">	   This command, provided by &lt;Decho.vim&gt;, will comment out all
	   Decho-debugging statements (Dfunc(), Dret(), Decho(), Dredir()).</div>
<div class="old-help-para">	3. Then bring up vim and attempt to evoke the problem by doing a
	   transfer or doing some browsing.  A set of messages should appear
	   concerning the steps that &lt;netrw.vim&gt; took in attempting to
	   read/write your file over the network in a separate tab or
	   server vim window.</div>
<div class="old-help-para">	   Change the netrw.vimrc file to include the Decho plugin:<pre>set nocp
so $HOME/.vim/plugin/Decho.vim
so $HOME/.vim/plugin/netrwPlugin.vim</pre></div>
<div class="old-help-para">	   You should continue to run vim with<pre>vim -u netrw.vimrc --noplugins -i NONE [some path here]</pre></div>
<div class="old-help-para">	   to avoid entanglements with options and other plugins.</div>
<div class="old-help-para">	   To save the file: under linux, the output will be in a separate
	   remote server window; in it, just save the file with<pre>:w! DBG</pre></div>
<div class="old-help-para">	   Under a vim that doesn't support clientserver, your debugging
	   output will appear in another tab:<pre>:tabnext
:set bt=
:w! DBG</pre></div>
<div class="old-help-para">	   Furthermore, it'd be helpful if you would type<pre>:Dsep &lt;command&gt;</pre></div>
<div class="old-help-para">	   where <code>&lt;command&gt;</code> is the command you're about to type next,
	   thereby making it easier to associate which part of the
	   debugging trace is due to which command.</div>
<div class="old-help-para">	   Please send that information to &lt;netrw.vim&gt;'s maintainer along
	   with the o/s you're using and the vim version that you're using
	   (see <a href="/neovim-docs-web/en/various#%3Aversion">:version</a>)  (remove the embedded NOSPAM first)<pre>NcampObell@SdrPchip.AorgM-NOSPAM</pre></div>
<div class="old-help-para"><h2 class="help-heading">12. History<span class="help-heading-tags">						<a name="netrw-history"></a><span class="help-tag">netrw-history</span> {{{1</span></h2></div>
<div class="old-help-para">	v171:	Oct 09, 2020	* included code in s:NetrwOptionsSafe()
				  to allow <a href="/neovim-docs-web/en/options#'bh'">'bh'</a> to be set to delete when
				  rather than hide when g:netrw_fastbrowse
				  was zero.
<div class="help-li" style=""> Installed <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_clipboard">g:netrw_clipboard</a> setting
</div><div class="help-li" style=""> Installed option bypass for <a href="/neovim-docs-web/en/options#'guioptions'">'guioptions'</a>
				  a/A settings
</div><div class="help-li" style=""> Changed popup_beval() to popup_atcursor()
				  in netrw#ErrorMsg (lacygoill). Apparently
				  popup_beval doesn't reliably close the
				  popup when the mouse is moved.
</div><div class="help-li" style=""> VimEnter() now using win_execute to examine
				  buffers for an attempt to open a directory.
				  Avoids issues with popups/terminal from
				  command line. (lacygoill)
		Jun 28, 2021	* (zeertzjq) provided a patch for use of
				  xmap,xno instead of vmap,vno in
				  netrwPlugin.vim. Avoids entanglement with
				  select mode.
		Jul 14, 2021	* Fixed problem addressed by tst976; opening
				  a file using tree mode, going up a
				  directory, and opening a file there was
				  opening the file in the wrong directory.
		Jul 28, 2021	* (Ingo Karkat) provided a patch fixing an
				  E488 error with netrwPlugin.vim
				  (occurred for vim versions &lt; 8.02)
	v170:	Mar 11, 2020	* (reported by Reiner Herrmann) netrw+tree
				  would not hide with the ^\..* pattern
				  correctly.
</div><div class="help-li" style=""> (Marcin Szamotulski) NetrwOptionRestore
				  did not restore options correctly that
				  had a single quote in the option string.
		Apr 13, 2020	* implemented error handling via popup
				  windows (see popup_beval())
		Apr 30, 2020	* (reported by Manatsu Takahashi) while
				  using Lexplore, a modified file could
				  be overwritten.  Sol'n: will not overwrite,
				  but will emit an <a href="/neovim-docs-web/en/message#E37">E37</a> (although one cannot
				  add an ! to override)
		Jun 07, 2020	* (reported by Jo Totland) repeatedly invoking
				  :Lexplore and quitting it left unused
				  hidden buffers.  Netrw will now set netrw
				  buffers created by :Lexplore to <a href="/neovim-docs-web/en/options#'bh'">'bh'</a>=wipe.
	v169:	Dec 20, 2019	* (reported by amkarthik) that netrw's x
				  (<a href="/neovim-docs-web/en/pi_netrw#netrw-x">netrw-x</a>) would throw an error when
				  attempting to open a local directory.
	v168:	Dec 12, 2019	* scp timeout error message not reported,
				  hopefully now fixed (Shane Xb Qian)
	v167:	Nov 29, 2019	* netrw does a save&amp;restore on @* and @+.
				  That causes problems with the clipboard.
				  Now restores occurs only if @* or @+ have
				  been changed.
</div><div class="help-li" style="margin-left: 3rem;"> netrw will change @* or @+ less often.
				  Never if I happen to have caught all the
				  operations that modify the unnamed
				  register (which also writes @*).
</div><div class="help-li" style=""> Modified hiding behavior so that "s"
				  will not ignore hiding.
	v166:	Nov 06, 2019	* Removed a space from a nmap for "-"
</div><div class="help-li" style=""> Numerous debugging statement changes
	v163:	Dec 05, 2017	* (Cristi Balan) reported that a setting (<a href="/neovim-docs-web/en/options#'sel'">'sel'</a>)
				  was left changed
</div><div class="help-li" style="margin-left: 3rem;"> (Holger Mitschke) reported a problem with
				  saving and restoring history.  Fixed.
</div><div class="help-li" style="margin-left: 3rem;"> Hopefully I fixed a nasty bug that caused a
				  file rename to wipe out a buffer that it
				  should not have wiped out.
</div><div class="help-li" style="margin-left: 3rem;"> (Holger Mitschke) amended this help file
				  with additional <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_special_syntax">g:netrw_special_syntax</a>
				  items
</div><div class="help-li" style=""> Prioritized wget over curl for
				  g:netrw_http_cmd
	v162:	Sep 19, 2016	* (haya14busa) pointed out two syntax errors
				  with a patch; these are now fixed.
		Oct 26, 2016	* I started using mate-terminal and found that
				  x and gx (<a href="/neovim-docs-web/en/pi_netrw#netrw-x">netrw-x</a> and <a href="/neovim-docs-web/en/pi_netrw#netrw-gx">netrw-gx</a>) were no
				  longer working.  Fixed (using atril when
				  $DESKTOP_SESSION is "mate").
		Nov 04, 2016	* (Martin Vuille) pointed out that @+ was
				  being restored with keepregstar rather than
				  keepregplus.
		Nov 09, 2016	* Broke apart the command from the options,
				  mostly for Windows.  Introduced new netrw
				  settings: <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_localcopycmdopt">g:netrw_localcopycmdopt</a>
				  <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_localcopydircmdopt">g:netrw_localcopydircmdopt</a> <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_localmkdiropt">g:netrw_localmkdiropt</a>
				  <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_localmovecmdopt">g:netrw_localmovecmdopt</a> <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_localrmdiropt">g:netrw_localrmdiropt</a>
		Nov 21, 2016	* (mattn) provided a patch for preview; swapped
				  winwidth() with winheight()
		Nov 22, 2016	* (glacambre) reported that files containing
				  spaces weren't being obtained properly via
				  scp.  Fix: apparently using single quotes
				  such as with 'file name' wasn't enough; the
				  spaces inside the quotes also had to be
				  escaped (ie. 'file\ name').
</div><div class="help-li" style=""> Also fixed obtain (<a href="/neovim-docs-web/en/pi_netrw#netrw-O">netrw-O</a>) to be able to
				  obtain files with spaces in their names
		Dec 20, 2016	* (xc1427) Reported that using "I" (<a href="/neovim-docs-web/en/pi_netrw#netrw-I">netrw-I</a>)
				  when atop "Hiding" in the banner also caused
				  the active-banner hiding control to occur
		Jan 03, 2017	* (Enno Nagel) reported that attempting to
				  apply netrw to a directory that was without
				  read permission caused a syntax error.
		Jan 13, 2017	* (Ingo Karkat) provided a patch which makes
				  using netrw#Call() better.  Now returns
				  value of internal routines return, for example.
		Jan 13, 2017	* (Ingo Karkat) changed netrw#FileUrlRead to
				  use <a href="/neovim-docs-web/en/editing#%3Aedit">:edit</a> instead of <a href="/neovim-docs-web/en/insert#%3Aread">:read</a>.  I also
				  changed the routine name to netrw#FileUrlEdit.
		Jan 16, 2017	* (Sayem) reported a problem where :Lexplore
				  could generate a new listing buffer and
				  window instead of toggling the netrw display.
				  Unfortunately, the directions for eliciting
				  the problem weren't complete, so I may or
				  may not have fixed that issue.
		Feb 06, 2017	* Implemented cb and cB.  Changed "c" to "cd".
				  (see <a href="/neovim-docs-web/en/pi_netrw#netrw-cb">netrw-cb</a>, <a href="/neovim-docs-web/en/pi_netrw#netrw-cB">netrw-cB</a>, and <a href="/neovim-docs-web/en/pi_netrw#netrw-cd">netrw-cd</a>)
		Mar 21, 2017	* previously, netrw would specify (safe) settings
				  even when the setting was already safe for
				  netrw.  Netrw now attempts to leave such
				  already-netrw-safe settings alone.
				  (affects s:NetrwOptionRestore() and
				  s:NetrwSafeOptions(); also introduced
				  s:NetrwRestoreSetting())
		Jun 26, 2017	* (Christian Brabandt) provided a patch to
				  allow curl to follow redirects (ie. -L
				  option)
		Jun 26, 2017	* (Callum Howard) reported a problem with
				  :Lexpore not removing the Lexplore window
				  after a change-directory
		Aug 30, 2017	* (Ingo Karkat) one cannot switch to the
				  previously edited file (e.g. with <code>CTRL-^</code>)
				  after editing a file:// URL.  Patch to
				  have a "keepalt" included.
		Oct 17, 2017	* (Adam Faryna) reported that gn (<a href="/neovim-docs-web/en/pi_netrw#netrw-gn">netrw-gn</a>)
				  did not work on directories in the current
				  tree
	v157:	Apr 20, 2016	* (Nicola) had set up a "nmap <code>&lt;expr&gt;</code> ..." with
				  a function that returned a 0 while silently
				  invoking a shell command.  The shell command
				  activated a ShellCmdPost event which in turn
				  called s:LocalBrowseRefresh().  That looks
				  over all netrw buffers for changes needing
				  refreshes.  However, inside a <a href="/neovim-docs-web/en/map#%3Amap-%3Cexpr%3E">:map-&lt;expr&gt;</a>,
				  tab and window changes are disallowed.  Fixed.
				  (affects netrw's s:LocalBrowseRefresh())
</div><div class="help-li" style="margin-left: 3rem;"> <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_localrmdir">g:netrw_localrmdir</a> not used any more, but
				  the relevant patch that causes <a href="/neovim-docs-web/en/builtin#delete()">delete()</a> to
				  take over was #1107 (not #1109).
</div><div class="help-li" style="margin-left: 3rem;"> <a href="/neovim-docs-web/en/builtin#expand()">expand()</a> is now used on <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_home">g:netrw_home</a>;
				  consequently, g:netrw_home may now use
				  environment variables
</div><div class="help-li" style=""> s:NetrwLeftmouse and s:NetrwCLeftmouse will
				  return without doing anything if invoked
				  when inside a non-netrw window
		Jun 15, 2016	* gx now calls netrw#GX() which returns
				  the word under the cursor.  The new
				  wrinkle: if one is in a netrw buffer,
				  then netrw's s:NetrwGetWord().
		Jun 22, 2016	* Netrw was executing all its associated
				  Filetype commands silently; I'm going
				  to try doing that "noisily" and see if
				  folks have a problem with that.
		Aug 12, 2016	* Changed order of tool selection for
				  handling <a href="http://..">http://..</a>. viewing.
				  (Nikolay Aleksandrovich Pavlov)
		Aug 21, 2016	* Included hiding/showing/all for tree
				  listings
</div><div class="help-li" style=""> Fixed refresh (^L) for tree listings
	v156:	Feb 18, 2016	* Changed =~ to =~# where appropriate
		Feb 23, 2016	* s:ComposePath(base,subdir) now uses
				  fnameescape() on the base portion
		Mar 01, 2016	* (gt_macki) reported where :Explore would
				  make file unlisted. Fixed (tst943)
		Apr 04, 2016	* (reported by John Little) netrw normally
				  suppresses browser messages, but sometimes
				  those "messages" are what is wanted.
				  See <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_suppress_gx_mesg">g:netrw_suppress_gx_mesg</a>
		Apr 06, 2016	* (reported by Carlos Pita) deleting a remote
				  file was giving an error message.  Fixed.
		Apr 08, 2016	* (Charles Cooper) had a problem with an
				  undefined b:netrw_curdir.  He also provided
				  a fix.
		Apr 20, 2016	* Changed s:NetrwGetBuffer(); now uses
				  dictionaries.  Also fixed the "No Name"
				  buffer problem.
	v155:	Oct 29, 2015	* (Timur Fayzrakhmanov) reported that netrw's
				  mapping of ctrl-l was not allowing refresh of
				  other windows when it was done in a netrw
				  window.
		Nov 05, 2015	* Improved s:TreeSqueezeDir() to use search()
				  instead of a loop
</div><div class="help-li" style=""> NetrwBrowse() will return line to
				  w:netrw_bannercnt if cursor ended up in
				  banner
		Nov 16, 2015	* Added a <code>&lt;Plug&gt;</code>NetrwTreeSqueeze (<a href="/neovim-docs-web/en/pi_netrw#netrw-s-cr">netrw-s-cr</a>)
		Nov 17, 2015	* Commented out imaps -- perhaps someone can
				  tell me how they're useful and should be
				  retained?
		Nov 20, 2015	* Added <a href="/neovim-docs-web/en/pi_netrw#netrw-ma">netrw-ma</a> and <a href="/neovim-docs-web/en/pi_netrw#netrw-mA">netrw-mA</a> support
		Nov 20, 2015	* gx (<a href="/neovim-docs-web/en/pi_netrw#netrw-gx">netrw-gx</a>) on a URL downloaded the
				  file in addition to simply bringing up the
				  URL in a browser.  Fixed.
		Nov 23, 2015	* Added <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_sizestyle">g:netrw_sizestyle</a> support
		Nov 27, 2015	* Inserted a lot of <code>&lt;c-u&gt;</code>s into various netrw
				  maps.
		Jan 05, 2016	* <a href="/neovim-docs-web/en/pi_netrw#netrw-qL">netrw-qL</a> implemented to mark files based
				  upon <a href="/neovim-docs-web/en/quickfix#location-list">location-list</a>s; similar to <a href="/neovim-docs-web/en/pi_netrw#netrw-qF">netrw-qF</a>.
		Jan 19, 2016	* using - call delete(directoryname,"d") -
				  instead of using g:netrw_localrmdir if
				  v7.4 + patch#1107 is available
		Jan 28, 2016	* changed to using <a href="/neovim-docs-web/en/builtin#winsaveview()">winsaveview()</a> and
				  <a href="/neovim-docs-web/en/builtin#winrestview()">winrestview()</a>
		Jan 28, 2016	* s:NetrwTreePath() now does a save and
				  restore of view
		Feb 08, 2016	* Fixed a tree-listing problem with remote
				  directories
	v154:	Feb 26, 2015	* (Yuri Kanivetsky) reported a situation where
				  a file was not treated properly as a file
				  due to g:netrw_keepdir == 1
		Mar 25, 2015	* (requested by Ben Friz) one may now sort by
				  extension
		Mar 28, 2015	* (requested by Matt Brooks) netrw has a lot
				  of buffer-local mappings; however, some
				  plugins (such as vim-surround) set up
				  conflicting mappings that cause vim to wait.
				  The "&lt;nowait&gt;" modifier has been included
				  with most of netrw's mappings to avoid that
				  delay.
		Jun 26, 2015	* <a href="/neovim-docs-web/en/pi_netrw#netrw-gn">netrw-gn</a> mapping implemted
</div><div class="help-li" style="margin-left: 3rem;"> :Ntree NotADir resulted in having
				  the tree listing expand in the error messages
				  window.  Fixed.
		Jun 29, 2015	* Attempting to delete a file remotely caused
				  an error with "keepsol" mentioned; fixed.
		Jul 08, 2015	* Several changes to keep the <a href="/neovim-docs-web/en/motion#%3Ajumps">:jumps</a> table
				  correct when working with
				  <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_fastbrowse">g:netrw_fastbrowse</a> set to 2
</div><div class="help-li" style="margin-left: 3rem;"> wide listing with accented characters fixed
				  (using %-S instead of %-s with a <a href="/neovim-docs-web/en/builtin#printf()">printf()</a>
		Jul 13, 2015	* (Daniel Hahler) CheckIfKde() could be true
				  but kfmclient not installed.  Changed order
				  in netrw#BrowseX(): checks if kde and
				  kfmclient, then will use xdg-open on a unix
				  system (if xdg-open is executable)
		Aug 11, 2015	* (McDonnell) tree listing mode wouldn't
				  select a file in a open subdirectory.
</div><div class="help-li" style="margin-left: 4rem;"> (McDonnell) when multiple subdirectories
				  were concurrently open in tree listing
				  mode, a ctrl-L wouldn't refresh properly.
</div><div class="help-li" style="margin-left: 3rem;"> The netrw:target menu showed duplicate
				  entries
		Oct 13, 2015	* (mattn) provided an exception to handle
				  windows with shellslash set but no shell
		Oct 23, 2015	* if g:netrw_usetab and <code>&lt;c-tab&gt;</code> now used
				  to control whether NetrwShrink is used
				  (see <a href="/neovim-docs-web/en/pi_netrw#netrw-c-tab">netrw-c-tab</a>)
	v153:	May 13, 2014	* added another <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_ffkeep">g:netrw_ffkeep</a> usage {{{2
		May 14, 2014	* changed s:PerformListing() so that it
				  always sets ft=netrw for netrw buffers
				  (ie. even when syntax highlighting is
				  off, not available, etc)
		May 16, 2014	* introduced the <a href="/neovim-docs-web/en/pi_netrw#netrw-ctrl-r">netrw-ctrl-r</a> functionality
		May 17, 2014	* introduced the <a href="/neovim-docs-web/en/pi_netrw#netrw-%3ANetrwMB">netrw-:NetrwMB</a> functionality
</div><div class="help-li" style="margin-left: 4rem;"> mb and mB (<a href="/neovim-docs-web/en/pi_netrw#netrw-mb">netrw-mb</a>, <a href="/neovim-docs-web/en/pi_netrw#netrw-mB">netrw-mB</a>) will
				  add/remove marked files from bookmark list
		May 20, 2014	* (Enno Nagel) reported that :Lex <code>&lt;dirname&gt;</code>
				  wasn't working.  Fixed.
		May 26, 2014	* restored test to prevent leftmouse window
				  resizing from causing refresh.
				  (see s:NetrwLeftmouse())
</div><div class="help-li" style="margin-left: 3rem;"> fixed problem where a refresh caused cursor
				  to go just under the banner instead of
				  staying put
		May 28, 2014	* (László Bimba) provided a patch for opening
				  the <a href="/neovim-docs-web/en/pi_netrw#%3ALexplore">:Lexplore</a> window 100% high, optionally
				  on the right, and will work with remote
				  files.
		May 29, 2014	* implemented :NetrwC  (see <a href="/neovim-docs-web/en/pi_netrw#netrw-%3ANetrwC">netrw-:NetrwC</a>)
		Jun 01, 2014	* Removed some "silent"s from commands used
				  to implemented scp://... and pscp://...
				  directory listing.  Permits request for
				  password to appear.
		Jun 05, 2014	* (Enno Nagel) reported that user maps "/"
				  caused problems with "b" and "w", which
				  are mapped (for wide listings only) to
				  skip over files rather than just words.
		Jun 10, 2014	* <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_gx">g:netrw_gx</a> introduced to allow users to
				  override default "&lt;cfile&gt;" with the gx
				  (<a href="/neovim-docs-web/en/pi_netrw#netrw-gx">netrw-gx</a>) map
		Jun 11, 2014	* gx (<a href="/neovim-docs-web/en/pi_netrw#netrw-gx">netrw-gx</a>), with <a href="/neovim-docs-web/en/options#'autowrite'">'autowrite'</a> set,
				  will write modified files.  s:NetrwBrowseX()
				  will now save, turn off, and restore the
				  <a href="/neovim-docs-web/en/options#'autowrite'">'autowrite'</a> setting.
		Jun 13, 2014	* added visual map for gx use
		Jun 15, 2014	* (Enno Nagel) reported that with having hls
				  set and wide listing style in use, that the
				  b and w maps caused unwanted highlighting.
		Jul 05, 2014	* <a href="/neovim-docs-web/en/pi_netrw#netrw-mv">netrw-mv</a> and <a href="/neovim-docs-web/en/pi_netrw#netrw-mX">netrw-mX</a> commands included
		Jul 09, 2014	* <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_keepj">g:netrw_keepj</a> included, allowing optional
				  keepj
		Jul 09, 2014	* fixing bugs due to previous update
		Jul 21, 2014	* (Bruno Sutic) provided an updated
				  netrw_gitignore.vim
		Jul 30, 2014	* (Yavuz Yetim) reported that editing two
				  remote files of the same name caused the
				  second instance to have a "temporary"
				  name.  Fixed: now they use the same buffer.
		Sep 18, 2014	* (Yasuhiro Matsumoto) provided a patch which
				  allows scp and windows local paths to work.
		Oct 07, 2014	* gx (see <a href="/neovim-docs-web/en/pi_netrw#netrw-gx">netrw-gx</a>) when atop a directory,
				  will now do <a href="/neovim-docs-web/en/editing#gf">gf</a> instead
		Nov 06, 2014	* For cygwin: cygstart will be available for
				  netrw#BrowseX() to use if its executable.
		Nov 07, 2014	* Began support for file://... urls.  Will use
				  <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_file_cmd">g:netrw_file_cmd</a> (typically elinks or links)
		Dec 02, 2014	* began work on having mc (<a href="/neovim-docs-web/en/pi_netrw#netrw-mc">netrw-mc</a>) copy
				  directories.  Works for linux machines,
				  cygwin+vim, but not for windows+gvim.
		Dec 02, 2014	* in tree mode, netrw was not opening
				  directories via symbolic links.
		Dec 02, 2014	* added resolved link information to
				  thin and tree modes
		Dec 30, 2014	* (issue#231) <a href="/neovim-docs-web/en/windows#%3Als">:ls</a> was not showing
				  remote-file buffers reliably.  Fixed.
	v152:	Apr 08, 2014	* uses the <a href="/neovim-docs-web/en/options#'noswapfile'">'noswapfile'</a> option (requires {{{2
				  vim 7.4 with patch 213)
</div><div class="help-li" style="margin-left: 4rem;"> (Enno Nagel) turn <a href="/neovim-docs-web/en/options#'rnu'">'rnu'</a> off in netrw
				  buffers.
</div><div class="help-li" style="margin-left: 4rem;"> (Quinn Strahl) suggested that netrw
				  allow regular window splitting to occur,
				  thereby allowing <a href="/neovim-docs-web/en/options#'equalalways'">'equalalways'</a> to take
				  effect.
</div><div class="help-li" style="margin-left: 3rem;"> (qingtian zhao) normally, netrw will
				  save and restore the <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a>;
				  however, sometimes that isn't wanted
		Apr 14, 2014	* whenever netrw marks a buffer as ro,
				  it will also mark it as nomod.
		Apr 16, 2014	* sftp protocol now supported by
				  netrw#Obtain(); this means that one
				  may use "mc" to copy a remote file
				  to a local file using sftp, and that
				  the <a href="/neovim-docs-web/en/pi_netrw#netrw-O">netrw-O</a> command can obtain remote
				  files via sftp.
</div><div class="help-li" style=""> added [count]C support (see <a href="/neovim-docs-web/en/pi_netrw#netrw-C">netrw-C</a>)
		Apr 18, 2014	* when <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_chgwin">g:netrw_chgwin</a> is one more than
				  the last window, then vertically split
				  the last window and use it as the
				  chgwin window.
		May 09, 2014	* SavePosn was "saving filename under cursor"
				  from a non-netrw window when using :Rex.
	v151:	Jan 22, 2014	* extended :Rexplore to return to buffer {{{2
				  prior to Explore or editing a directory
</div><div class="help-li" style="margin-left: 3rem;"> (Ken Takata) netrw gave error when
				  clipboard was disabled.  Sol'n: Placed
				  several if has("clipboard") tests in.
</div><div class="help-li" style="margin-left: 3rem;"> Fixed ftp://X@Y@Z// problem; X@Y now
				  part of user id, and only Z is part of
				  hostname.
</div><div class="help-li" style=""> (A Loumiotis) reported that completion
				  using a directory name containing spaces
				  did not work.  Fixed with a retry in
				  netrw#Explore() which removes the
				  backslashes vim inserted.
		Feb 26, 2014	* :Rexplore now records the current file
				   using w:netrw_rexfile when returning via
				  <a href="/neovim-docs-web/en/pi_netrw#%3ARexplore">:Rexplore</a>
		Mar 08, 2014	* (David Kotchan) provided some patches
				  allowing netrw to work properly with
				  windows shares.
</div><div class="help-li" style="margin-left: 3rem;"> Multiple one-liner help messages available
				  by pressing <code>&lt;cr&gt;</code> while atop the "Quick
				  Help" line
</div><div class="help-li" style="margin-left: 3rem;"> worked on ShellCmdPost, FocusGained event
				  handling.
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/pi_netrw#%3ALexplore">:Lexplore</a> path: will be used to update
				  a left-side netrw browsing directory.
		Mar 12, 2014	* <a href="/neovim-docs-web/en/pi_netrw#netrw-s-cr">netrw-s-cr</a>: use <code>&lt;s-cr&gt;</code>  to close
				  tree directory implemented
		Mar 13, 2014	* (Tony Mechylynck) reported that using
				  the browser with ftp on a directory,
				  and selecting a gzipped txt file, that
				  an E19 occurred (which was issued by
				  gzip.vim).  Fixed.
		Mar 14, 2014	* Implemented :MF and :MT (see <a href="/neovim-docs-web/en/pi_netrw#netrw-%3AMF">netrw-:MF</a>
				  and <a href="/neovim-docs-web/en/pi_netrw#netrw-%3AMT">netrw-:MT</a>, respectively)
		Mar 17, 2014	* <a href="/neovim-docs-web/en/pi_netrw#%3ANtree">:Ntree</a> [dir] wasn't working properly; fixed
		Mar 18, 2014	* Changed all uses of set to setl
		Mar 18, 2014	* Commented the netrw_btkeep line in
				  s:NetrwOptionSave(); the effect is that
				  netrw buffers will remain as <a href="/neovim-docs-web/en/options#'bt'">'bt'</a>=nofile.
				  This should prevent swapfiles being created
				  for netrw buffers.
		Mar 20, 2014	* Changed all uses of lcd to use s:NetrwLcd()
				  instead.  Consistent error handling results
				  and it also handles Window's shares
</div><div class="help-li" style="margin-left: 3rem;"> Fixed <a href="/neovim-docs-web/en/pi_netrw#netrw-d">netrw-d</a> command when applied with ftp
</div><div class="help-li" style=""> https: support included for netrw#NetRead()
	v150:	Jul 12, 2013	* removed a "keepalt" to allow ":e #" to {{{2
				  return to the netrw directory listing
		Jul 13, 2013	* (Jonas Diemer) suggested changing
				  a <code>&lt;cWORD&gt;</code> to <code>&lt;cfile&gt;</code>.
		Jul 21, 2013	* (Yuri Kanivetsky) reported that netrw's
				  use of mkdir did not produce directories
				  following the user's umask.
		Aug 27, 2013	* introduced <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_altfile">g:netrw_altfile</a> option
		Sep 05, 2013	* s:Strlen() now uses <a href="/neovim-docs-web/en/builtin#strdisplaywidth()">strdisplaywidth()</a>
				  when available, by default
		Sep 12, 2013	* (Selyano Baldo) reported that netrw wasn't
				  opening some directories properly from the
				  command line.
		Nov 09, 2013	* <a href="/neovim-docs-web/en/pi_netrw#%3ALexplore">:Lexplore</a> introduced
</div><div class="help-li" style="margin-left: 3rem;"> (Ondrej Platek) reported an issue with
				  netrw's trees (P15).  Fixed.
</div><div class="help-li" style=""> (Jorge Solis) reported that "t" in
				  tree mode caused netrw to forget its
				  line position.
		Dec 05, 2013	* Added <code>&lt;s-leftmouse&gt;</code> file marking
				  (see <a href="/neovim-docs-web/en/pi_netrw#netrw-mf">netrw-mf</a>)
		Dec 05, 2013	* (Yasuhiro Matsumoto) Explore should use
				  strlen() instead s:Strlen() when handling
				  multibyte chars with strpart()
				  (ie. strpart() is byte oriented, not
				  display-width oriented).
		Dec 09, 2013	* (Ken Takata) Provided a patch; File sizes
				  and a portion of timestamps were wrongly
				  highlighted with the directory color when
				  setting <code>:let g:netrw_liststyle=1</code> on Windows.
</div><div class="help-li" style=""> (Paul Domaskis) noted that sometimes
				  cursorline was activating in non-netrw
				  windows.  All but one setting of cursorline
				  was done via setl; there was one that was
				  overlooked.  Fixed.
		Dec 24, 2013	* (esquifit) asked that netrw allow the
				  /cygdrive prefix be a user-alterable
				  parameter.
		Jan 02, 2014	* Fixed a problem with netrw-based ballon
				  evaluation (ie. netrw#NetrwBaloonHelp()
				  not having been loaded error messages)
		Jan 03, 2014	* Fixed a problem with tree listings
</div><div class="help-li" style=""> New command installed: <a href="/neovim-docs-web/en/pi_netrw#%3ANtree">:Ntree</a>
		Jan 06, 2014	* (Ivan Brennan) reported a problem with
				  <a href="/neovim-docs-web/en/pi_netrw#netrw-P">netrw-P</a>.  Fixed.
		Jan 06, 2014	* Fixed a problem with <a href="/neovim-docs-web/en/pi_netrw#netrw-P">netrw-P</a> when the
				  modified file was to be abandoned.
		Jan 15, 2014	* (Matteo Cavalleri) reported that when the
				  banner is suppressed and tree listing is
				  used, a blank line was left at the top of
				  the display.  Fixed.
		Jan 20, 2014	* (Gideon Go) reported that, in tree listing
				  style, with a previous window open, that
				  the wrong directory was being used to open
				  a file.  Fixed. (P21)
	v149:	Apr 18, 2013	* in wide listing format, now have maps for {{{2
				  w and b to move to next/previous file
		Apr 26, 2013	* one may now copy files in the same
				  directory; netrw will issue requests for
				  what names the files should be copied under
		Apr 29, 2013	* Trying Benzinger's problem again.  Seems
				  that commenting out the BufEnter and
				  installing VimEnter (only) works.  Weird
				  problem!  (tree listing, vim -O Dir1 Dir2)
		May 01, 2013	* :Explore ftp://... wasn't working.  Fixed.
		May 02, 2013	* introduced <a href="/neovim-docs-web/en/pi_netrw#g%3Anetrw_bannerbackslash">g:netrw_bannerbackslash</a> as
				  requested by Paul Domaskis.
		Jul 03, 2013	* Explore now avoids splitting when a buffer
				  will be hidden.
	v148:	Apr 16, 2013	* changed Netrw's Style menu to allow direct {{{2
				  choice of listing style, hiding style, and
				  sorting style
</div></div>
<div class="old-help-para"><h2 class="help-heading">13. Todo<span class="help-heading-tags">						<a name="netrw-todo"></a><span class="help-tag">netrw-todo</span> {{{1</span></h2></div>
<div class="old-help-para">07/29/09 : banner	:|g:netrw_banner| can be used to suppress the
	   suppression	  banner.  This feature is new and experimental,
			  so its in the process of being debugged.
09/04/09 : "gp"		: See if it can be made to work for remote systems.
			: See if it can be made to work with marked files.</div>
<div class="old-help-para"><h2 class="help-heading">14. Credits<span class="help-heading-tags">						<a name="netrw-credits"></a><span class="help-tag">netrw-credits</span> {{{1</span></h2></div>
<div class="old-help-para">	Vim editor	by Bram Moolenaar (Thanks, Bram!)
	dav		support by C Campbell
	fetch		support by Bram Moolenaar and C Campbell
	ftp		support by C Campbell &lt;NcampObell@SdrPchip.AorgM-NOSPAM&gt;
	http		support by Bram Moolenaar &lt;bram@moolenaar.net&gt;
	rcp
	rsync		support by C Campbell (suggested by Erik Warendorph)
	scp		support by raf &lt;raf@comdyn.com.au&gt;
	sftp		support by C Campbell</div>
<div class="old-help-para">	inputsecret(), BufReadCmd, BufWriteCmd contributed by C Campbell</div>
<div class="old-help-para">	Jérôme Augé		-- also using new buffer method with ftp+.netrc
	Bram Moolenaar		-- obviously vim itself, :e and v:cmdarg use,
	                           fetch,...
	Yasuhiro Matsumoto	-- pointing out undo+0r problem and a solution
	Erik Warendorph		-- for several suggestions (g:netrw_..._cmd
				   variables, rsync etc)
	Doug Claar		-- modifications to test for success with ftp
	                           operation</div>
<div class="old-help-para"><a name="_-modelines:-{{{1"></a><h2 class="help-heading">Modelines: {{{1</h2></div>

  
  