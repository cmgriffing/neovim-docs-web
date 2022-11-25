---
title:  Filetype
layout: ../../layouts/MainLayout.astro
---

  <a name="filetype.txt"></a><a name="filetype"></a><h1> Filetype</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/filetype.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Filetypes <a name="file-type"></a><code class="help-tag">file-type</code></div>
<div class="old-help-para">Also see <a href="/neovim-docs-web/en/autocmd#autocmd.txt">autocmd.txt</a>.</div>
<div class="old-help-para"><h2 class="help-heading">1. Filetypes<span class="help-heading-tags">					<a name="filetypes"></a><span class="help-tag">filetypes</span> <a name="file-types"></a><span class="help-tag">file-types</span></span></h2></div>
<div class="old-help-para">Vim can detect the type of file that is edited.  This is done by checking the
file name and sometimes by inspecting the contents of the file for specific
text.</div>
<div class="old-help-para">							<a name="%3Afiletype"></a><code class="help-tag-right">:filetype</code> <a name="%3Afilet"></a><code class="help-tag">:filet</code>
To enable file type detection, use this command in your vimrc:<pre>:filetype on</pre>
Each time a new or existing file is edited, Vim will try to recognize the type
of the file and set the <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> option.  This will trigger the FileType
event, which can be used to set the syntax highlighting, set options, etc.</div>
<div class="old-help-para">Detail: The ":filetype on" command will load these files:
		$VIMRUNTIME/filetype.lua
		$VIMRUNTIME/filetype.vim
	filetype.lua creates an autocommand that fires for all BufNewFile and
	BufRead events. It tries to detect the filetype based off of the
	file's extension or name.</div>
<div class="old-help-para">	filetype.vim is a Vim script that defines autocommands for the
	BufNewFile and BufRead events. In contrast to filetype.lua, this
	file creates separate BufNewFile and BufRead events for each filetype
	pattern.</div>
<div class="old-help-para">	If the file type is not found by the name, the file
	$VIMRUNTIME/scripts.vim is used to detect it from the contents of the
	file.
	When the GUI is running or will start soon, the <a href="/neovim-docs-web/en/gui#menu.vim">menu.vim</a> script is
	also sourced.  See <a href="/neovim-docs-web/en/options#'go-M'">'go-M'</a> about avoiding that.</div>
<div class="old-help-para">To add your own file types, see <a href="/neovim-docs-web/en/filetype#new-filetype">new-filetype</a> below.  To search for help on a
filetype prepend "ft-" and optionally append "-syntax", "-indent" or
"-plugin".  For example:<pre>:help ft-vim-indent
:help ft-vim-syntax
:help ft-man-plugin</pre>
If the file type is not detected automatically, or it finds the wrong type,
you can either set the <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> option manually, or add a modeline to your
file.  Example, for an IDL file use the command:<pre>:set filetype=idl</pre>
or add this <a href="/neovim-docs-web/en/options#modeline">modeline</a> to the file:
/* vim: set filetype=idl :/</div>
<div class="old-help-para">						<a name="%3Afiletype-plugin-on"></a><code class="help-tag-right">:filetype-plugin-on</code>
You can enable loading the plugin files for specific file types with:<pre>:filetype plugin on</pre>
If filetype detection was not switched on yet, it will be as well.
This actually loads the file "ftplugin.vim" in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.
The result is that when a file is edited its plugin file is loaded (if there
is one for the detected filetype). <a href="/neovim-docs-web/en/usr_43#filetype-plugin">filetype-plugin</a></div>
<div class="old-help-para">						<a name="%3Afiletype-plugin-off"></a><code class="help-tag-right">:filetype-plugin-off</code>
You can disable it again with:<pre>:filetype plugin off</pre>
The filetype detection is not switched off then.  But if you do switch off
filetype detection, the plugins will not be loaded either.
This actually loads the file "ftplugof.vim" in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.</div>
<div class="old-help-para">						<a name="%3Afiletype-indent-on"></a><code class="help-tag-right">:filetype-indent-on</code>
You can enable loading the indent file for specific file types with:<pre>:filetype indent on</pre>
If filetype detection was not switched on yet, it will be as well.
This actually loads the file "indent.vim" in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.
The result is that when a file is edited its indent file is loaded (if there
is one for the detected filetype). <a href="/neovim-docs-web/en/indent#indent-expression">indent-expression</a></div>
<div class="old-help-para">						<a name="%3Afiletype-indent-off"></a><code class="help-tag-right">:filetype-indent-off</code>
You can disable it again with:<pre>:filetype indent off</pre>
The filetype detection is not switched off then.  But if you do switch off
filetype detection, the indent files will not be loaded either.
This actually loads the file "indoff.vim" in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.
This disables auto-indenting for files you will open.  It will keep working in
already opened files.  Reset <a href="/neovim-docs-web/en/options#'autoindent'">'autoindent'</a>, <a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a>, <a href="/neovim-docs-web/en/options#'smartindent'">'smartindent'</a> and/or
<a href="/neovim-docs-web/en/options#'indentexpr'">'indentexpr'</a> to disable indenting in an opened file.</div>
<div class="old-help-para">						<a name="%3Afiletype-off"></a><code class="help-tag-right">:filetype-off</code>
To disable file type detection, use this command:<pre>:filetype off</pre>
This will keep the flags for "plugin" and "indent", but since no file types
are being detected, they won't work until the next ":filetype on".</div>
<div class="old-help-para">Overview:					<a name="%3Afiletype-overview"></a><code class="help-tag-right">:filetype-overview</code></div>
<div class="old-help-para"><div class="help-column_heading">command				detection	plugin		indent</div>:filetype on			on		unchanged	unchanged
:filetype off			off		unchanged	unchanged
:filetype plugin on		on		on		unchanged
:filetype plugin off		unchanged	off		unchanged
:filetype indent on		on		unchanged	on
:filetype indent off		unchanged	unchanged	off
:filetype plugin indent on	on		on		on
:filetype plugin indent off	unchanged	off		off</div>
<div class="old-help-para">To see the current status, type:<pre>:filetype</pre>
The output looks something like this:<pre>filetype detection:ON  plugin:ON  indent:OFF</pre>
The file types are also used for syntax highlighting.  If the ":syntax on"
command is used, the file type detection is installed too.  There is no need
to do ":filetype on" after ":syntax on".</div>
<div class="old-help-para">To disable one of the file types, add a line in your filetype file, see
<a href="/neovim-docs-web/en/filetype#remove-filetype">remove-filetype</a>.</div>
<div class="old-help-para">							<a name="filetype-detect"></a><code class="help-tag-right">filetype-detect</code>
To detect the file type again:<pre>:filetype detect</pre>
Use this if you started with an empty file and typed text that makes it
possible to detect the file type.  For example, when you entered this in a
shell script: "#!/bin/csh".
   When filetype detection was off, it will be enabled first, like the "on"
argument was used.</div>
<div class="old-help-para">							<a name="filetype-overrule"></a><code class="help-tag-right">filetype-overrule</code>
When the same extension is used for multiple filetypes, Vim tries to guess
what kind of file it is.  This doesn't always work.  A number of global
variables can be used to overrule the filetype used for certain extensions:</div>
<div class="old-help-para"><div class="help-column_heading">	file name	variable</div>.asa		g:filetype_asa	<a href="/neovim-docs-web/en/syntax#ft-aspvbs-syntax">ft-aspvbs-syntax</a> <a href="/neovim-docs-web/en/syntax#ft-aspperl-syntax">ft-aspperl-syntax</a>
.asm		g:asmsyntax	<a href="/neovim-docs-web/en/syntax#ft-asm-syntax">ft-asm-syntax</a>
.asp		g:filetype_asp	<a href="/neovim-docs-web/en/syntax#ft-aspvbs-syntax">ft-aspvbs-syntax</a> <a href="/neovim-docs-web/en/syntax#ft-aspperl-syntax">ft-aspperl-syntax</a>
.bas		g:filetype_bas	<a href="/neovim-docs-web/en/syntax#ft-basic-syntax">ft-basic-syntax</a>
.cfg		g:filetype_cfg
.cls		g:filetype_cls
.csh		g:filetype_csh	<a href="/neovim-docs-web/en/syntax#ft-csh-syntax">ft-csh-syntax</a>
.dat		g:filetype_dat
.frm		g:filetype_frm	<a href="/neovim-docs-web/en/syntax#ft-form-syntax">ft-form-syntax</a>
.fs		g:filetype_fs	<a href="/neovim-docs-web/en/syntax#ft-forth-syntax">ft-forth-syntax</a>
.i		g:filetype_i	<a href="/neovim-docs-web/en/syntax#ft-progress-syntax">ft-progress-syntax</a>
.inc		g:filetype_inc
.lsl		g:filetype_lsl
.m		g:filetype_m	<a href="/neovim-docs-web/en/syntax#ft-mathematica-syntax">ft-mathematica-syntax</a>
.mod		g:filetype_mod
.p		g:filetype_p	<a href="/neovim-docs-web/en/syntax#ft-pascal-syntax">ft-pascal-syntax</a>
.pl		g:filetype_pl
.pp		g:filetype_pp	<a href="/neovim-docs-web/en/syntax#ft-pascal-syntax">ft-pascal-syntax</a>
.prg		g:filetype_prg
.r		g:filetype_r
.sig		g:filetype_sig
.sql		g:filetype_sql	<a href="/neovim-docs-web/en/syntax#ft-sql-syntax">ft-sql-syntax</a>
.src		g:filetype_src
.sys		g:filetype_sys
.sh		g:bash_is_sh	<a href="/neovim-docs-web/en/syntax#ft-sh-syntax">ft-sh-syntax</a>
.tex		g:tex_flavor	<a href="/neovim-docs-web/en/filetype#ft-tex-plugin">ft-tex-plugin</a>
.w		g:filetype_w	<a href="/neovim-docs-web/en/syntax#ft-cweb-syntax">ft-cweb-syntax</a></div>
<div class="old-help-para">For a few filetypes the global variable is used only when the filetype could
not be detected:
.r		g:filetype_r	<a href="/neovim-docs-web/en/syntax#ft-rexx-syntax">ft-rexx-syntax</a></div>
<div class="old-help-para">							<a name="filetype-ignore"></a><code class="help-tag-right">filetype-ignore</code>
To avoid that certain files are being inspected, the g:ft_ignore_pat variable
is used.  The default value is set like this:<pre>:let g:ft_ignore_pat = '\.\(Z\|gz\|bz2\|zip\|tgz\)$'</pre>
This means that the contents of compressed files are not inspected.</div>
<div class="old-help-para">							<a name="new-filetype"></a><code class="help-tag-right">new-filetype</code>
If a file type that you want to use is not detected yet, there are a few ways
to add it.  The recommended way is to use <a href="/neovim-docs-web/en/lua#vim.filetype.add()">vim.filetype.add()</a> to add it to
Nvim's builtin filetype detection mechanism.  If you want to handle the
detection manually, proceed as follows:</div>
<div class="old-help-para">A. If you want to overrule all default file type checks.
   This works by writing one file for each filetype.  The disadvantage is that
   there can be many files.  The advantage is that you can simply drop this
   file in the right directory to make it work.
							<a name="ftdetect"></a><code class="help-tag-right">ftdetect</code>
   1. Create your user runtime directory.  You would normally use the first
      item of the <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a> option.  Then create the directory "ftdetect"
      inside it.  Example for Unix:<pre>:!mkdir -p ~/.config/nvim/ftdetect</pre></div>
<div class="old-help-para">   2. Create a file that contains an autocommand to detect the file type.
      Example:<pre>au BufRead,BufNewFile *.mine                set filetype=mine</pre></div>
<div class="old-help-para">     Note that there is no "augroup" command, this has already been done
      when sourcing your file.  You could also use the pattern "*" and then
      check the contents of the file to recognize it.
      Write this file as "mine.vim" in the "ftdetect" directory in your user
      runtime directory.  For example, for Unix:<pre>:w ~/.config/nvim/ftdetect/mine.vim</pre></div>
<div class="old-help-para">  3. To use the new filetype detection you must restart Vim.</div>
<div class="old-help-para">   The files in the "ftdetect" directory are used after all the default
   checks, thus they can overrule a previously detected file type.  But you
   can also use <a href="/neovim-docs-web/en/options#%3Asetfiletype">:setfiletype</a> to keep a previously detected filetype.</div>
<div class="old-help-para">B. If you want to detect your file after the default file type checks.</div>
<div class="old-help-para">   This works like A above, but instead of setting <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> unconditionally
   use ":setfiletype".  This will only set <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> if no file type was
   detected yet.  Example:<pre>au BufRead,BufNewFile *.txt                setfiletype text</pre></div>
<div class="old-help-para">   You can also use the already detected file type in your command.  For
   example, to use the file type "mypascal" when "pascal" has been detected:<pre>au BufRead,BufNewFile *                if &amp;ft == 'pascal' | set ft=mypascal
                                                               | endif</pre>
C. If your file type can be detected by the file name or extension.
   1. Create your user runtime directory.  You would normally use the first
      item of the <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a> option.  Example for Unix:<pre>:!mkdir -p ~/.config/nvim</pre></div>
<div class="old-help-para">   2. Create a file that contains autocommands to detect the file type.
      Example:<pre>" my filetype file
if exists("did_load_filetypes")
  finish
endif
augroup filetypedetect
  au! BufRead,BufNewFile *.mine                setfiletype mine
  au! BufRead,BufNewFile *.xyz                setfiletype drawing
augroup END</pre></div>
<div class="old-help-para">      Write this file as "filetype.vim" in your user runtime directory.  For
      example, for Unix:<pre>:w ~/.config/nvim/filetype.vim</pre></div>
<div class="old-help-para">   3. To use the new filetype detection you must restart Vim.</div>
<div class="old-help-para">   Your filetype.vim will be sourced before the default FileType autocommands
   have been installed.  Your autocommands will match first, and the
   ":setfiletype" command will make sure that no other autocommands will set
   <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> after this.
							<a name="new-filetype-scripts"></a><code class="help-tag-right">new-filetype-scripts</code>
D. If your filetype can only be detected by inspecting the contents of the
   file.</div>
<div class="old-help-para">   1. Create your user runtime directory.  You would normally use the first
      item of the <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a> option.  Example for Unix:<pre>:!mkdir -p ~/.config/nvim</pre></div>
<div class="old-help-para">   2. Create a vim script file for doing this.  Example:<pre>if did_filetype()        " filetype already set..
  finish                " ..don't do these checks
endif
if getline(1) =~ '^#!.*\&lt;mine\&gt;'
  setfiletype mine
elseif getline(1) =~? '\&lt;drawing\&gt;'
  setfiletype drawing
endif</pre></div>
<div class="old-help-para">     See $VIMRUNTIME/scripts.vim for more examples.
      Write this file as "scripts.vim" in your user runtime directory.  For
      example, for Unix:<pre>:w ~/.config/nvim/scripts.vim</pre></div>
<div class="old-help-para">   3. The detection will work right away, no need to restart Vim.</div>
<div class="old-help-para">   Your scripts.vim is loaded before the default checks for file types, which
   means that your rules override the default rules in
   $VIMRUNTIME/scripts.vim.</div>
<div class="old-help-para">							<a name="remove-filetype"></a><code class="help-tag-right">remove-filetype</code>
If a file type is detected that is wrong for you, you can set <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> to
a non-existing name such as <code>ignored</code> to avoid that it will be set later anyway.</div>
<div class="old-help-para">						     <a name="g%3Adid_load_filetypes"></a><code class="help-tag-right">g:did_load_filetypes</code>
The builtin filetype detection provided by Nvim can be disabled by setting
the <code>did_load_filetypes</code> global variable. If this variable exists, the default
<code>$VIMRUNTIME/filetype.lua</code> will not run.</div>
<div class="old-help-para">							<a name="plugin-details"></a><code class="help-tag-right">plugin-details</code>
The "plugin" directory can be in any of the directories in the <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>
option.  All of these directories will be searched for plugins and they are
all loaded.  For example, if this command:<pre>set runtimepath</pre>
produces this output:</div>
<div class="old-help-para"><div class="help-column_heading">	runtimepath=/etc/vim,~/.config/nvim,/usr/local/share/vim/vim82</div></div>
<div class="old-help-para">then Vim will load all plugins in these directories and below:</div>
<div class="old-help-para"><div class="help-column_heading">	/etc/vim/plugin/</div><div class="help-column_heading">	~/.config/nvim/plugin/</div><div class="help-column_heading">	/usr/local/share/vim/vim82/plugin/</div></div>
<div class="old-help-para">Note that the last one is the value of $VIMRUNTIME which has been expanded.</div>
<div class="old-help-para">Note that when using a plugin manager or <a href="/neovim-docs-web/en/repeat#packages">packages</a> many directories will be
added to <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.  These plugins each require their own directory, don't
put them directly in ~/.config/nvim/plugin.</div>
<div class="old-help-para">What if it looks like your plugin is not being loaded?  You can find out what
happens when Vim starts up by using the <a href="/neovim-docs-web/en/starting#-V">-V</a> argument:<pre>vim -V2</pre>
You will see a lot of messages, in between them is a remark about loading the
plugins.  It starts with:</div>
<div class="old-help-para"><div class="help-column_heading">	Searching for "plugin/**/*.vim" in</div></div>
<div class="old-help-para">There you can see where Vim looks for your plugin scripts.</div>
<div class="old-help-para"><h2 class="help-heading">2. Filetype plugin<span class="help-heading-tags">					<a name="filetype-plugins"></a><span class="help-tag">filetype-plugins</span></span></h2></div>
<div class="old-help-para">When loading filetype plugins has been enabled <a href="/neovim-docs-web/en/filetype#%3Afiletype-plugin-on">:filetype-plugin-on</a>, options
will be set and mappings defined.  These are all local to the buffer, they
will not be used for other files.</div>
<div class="old-help-para">Defining mappings for a filetype may get in the way of the mappings you
define yourself.  There are a few ways to avoid this:
1. Set the "maplocalleader" variable to the key sequence you want the mappings
   to start with.  Example:<pre>:let maplocalleader = ","</pre></div>
<div class="old-help-para">  All mappings will then start with a comma instead of the default, which
   is a backslash.  Also see <a href="/neovim-docs-web/en/map#%3CLocalLeader%3E">&lt;LocalLeader&gt;</a>.</div>
<div class="old-help-para">2. Define your own mapping.  Example:<pre>:map ,p &lt;Plug&gt;MailQuote</pre></div>
<div class="old-help-para">  You need to check the description of the plugin file below for the
   functionality it offers and the string to map to.
   You need to define your own mapping before the plugin is loaded (before
   editing a file of that type).  The plugin will then skip installing the
   default mapping.
					<a name="no_mail_maps"></a><code class="help-tag-right">no_mail_maps</code> <a name="g%3Ano_mail_maps"></a><code class="help-tag">g:no_mail_maps</code>
3. Disable defining mappings for a specific filetype by setting a variable,
   which contains the name of the filetype.  For the "mail" filetype this
   would be:<pre>:let no_mail_maps = 1</pre></div>
<div class="old-help-para">					<a name="no_plugin_maps"></a><code class="help-tag-right">no_plugin_maps</code> <a name="g%3Ano_plugin_maps"></a><code class="help-tag">g:no_plugin_maps</code>
4. Disable defining mappings for all filetypes by setting a variable:<pre>:let no_plugin_maps = 1</pre></div>
<div class="old-help-para">							<a name="ftplugin-overrule"></a><code class="help-tag-right">ftplugin-overrule</code>
If a global filetype plugin does not do exactly what you want, there are three
ways to change this:</div>
<div class="old-help-para">1. Add a few settings.
   You must create a new filetype plugin in a directory early in
   <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.  For Unix, for example you could use this file:<pre>vim ~/.config/nvim/ftplugin/fortran.vim</pre></div>
<div class="old-help-para">  You can set those settings and mappings that you would like to add.  Note
   that the global plugin will be loaded after this, it may overrule the
   settings that you do here.  If this is the case, you need to use one of the
   following two methods.</div>
<div class="old-help-para">2. Make a copy of the plugin and change it.
   You must put the copy in a directory early in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.  For Unix, for
   example, you could do this:<pre>cp $VIMRUNTIME/ftplugin/fortran.vim ~/.config/nvim/ftplugin/fortran.vim</pre></div>
<div class="old-help-para">  Then you can edit the copied file to your liking.  Since the b:did_ftplugin
   variable will be set, the global plugin will not be loaded.
   A disadvantage of this method is that when the distributed plugin gets
   improved, you will have to copy and modify it again.</div>
<div class="old-help-para">3. Overrule the settings after loading the global plugin.
   You must create a new filetype plugin in a directory from the end of
   <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.  For Unix, for example, you could use this file:<pre>vim ~/.config/nvim/after/ftplugin/fortran.vim</pre></div>
<div class="old-help-para">  In this file you can change just those settings that you want to change.</div>
<div class="old-help-para"><h2 class="help-heading">3.  Docs for the default filetype plugins.<span class="help-heading-tags">		<a name="ftplugin-docs"></a><span class="help-tag">ftplugin-docs</span></span></h2></div>
<div class="old-help-para"><h3 class="help-heading">AWK<span class="help-heading-tags">							<a name="ft-awk-plugin"></a><span class="help-tag">ft-awk-plugin</span></span></h3></div>
<div class="old-help-para">Support for features specific to GNU Awk, like @include, can be enabled by
setting:<pre>let g:awk_is_gawk = 1</pre>
<h3 class="help-heading">CHANGELOG<span class="help-heading-tags">						<a name="ft-changelog-plugin"></a><span class="help-tag">ft-changelog-plugin</span></span></h3></div>
<div class="old-help-para">Allows for easy entrance of Changelog entries in Changelog files.  There are
some commands, mappings, and variables worth exploring:</div>
<div class="old-help-para">Options:
<a href="/neovim-docs-web/en/options#'comments'">'comments'</a>		is made empty to not mess up formatting.
<a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a>		is set to 78, which is standard.
<a href="/neovim-docs-web/en/options#'formatoptions'">'formatoptions'</a>		the 't' flag is added to wrap when inserting text.</div>
<div class="old-help-para">Commands:
NewChangelogEntry	Adds a new Changelog entry in an intelligent fashion
			(see below).</div>
<div class="old-help-para">Local mappings:
<code>&lt;Leader&gt;</code>o		Starts a new Changelog entry in an equally intelligent
			fashion (see below).</div>
<div class="old-help-para">Global mappings:
			NOTE: The global mappings are accessed by sourcing the
			ftplugin/changelog.vim file first, e.g. with<pre>runtime ftplugin/changelog.vim</pre></div>
<div class="old-help-para">			in your <a href="/neovim-docs-web/en/starting#init.vim">init.vim</a>.
<code>&lt;Leader&gt;</code>o		Switches to the ChangeLog buffer opened for the
			current directory, or opens it in a new buffer if it
			exists in the current directory.  Then it does the
			same as the local <code>&lt;Leader&gt;</code>o described above.</div>
<div class="old-help-para">Variables:
g:changelog_timeformat  Deprecated; use g:changelog_dateformat instead.
g:changelog_dateformat	The date (and time) format used in ChangeLog entries.
			The format accepted is the same as for the
			<a href="/neovim-docs-web/en/builtin#strftime()">strftime()</a> function.
			The default is "%Y-%m-%d" which is the standard format
			for many ChangeLog layouts.
g:changelog_username	The name and email address of the user.
			The default is deduced from environment variables and
			system files.  It searches /etc/passwd for the comment
			part of the current user, which informally contains
			the real name of the user up to the first separating
			comma.  then it checks the $NAME environment variable
			and finally runs <code>whoami</code> and <code>hostname</code> to build an
			email address.  The final form is<pre>Full Name  &lt;user@host&gt;</pre></div>
<div class="old-help-para">g:changelog_new_date_format
			The format to use when creating a new date-entry.
			The following table describes special tokens in the
			string:
				%%	insert a single '%' character
				%d	insert the date from above
				%u	insert the user from above
                                %p	insert result of b:changelog_entry_prefix
				%c	where to position cursor when done
			The default is "%d  %u\n\n\t* %p%c\n\n", which produces
			something like (| is where cursor will be, unless at
			the start of the line where it denotes the beginning
			of the line)<pre>|2003-01-14  Full Name  &lt;user@host&gt;
|
|        * prefix|</pre></div>
<div class="old-help-para">g:changelog_new_entry_format
			The format used when creating a new entry.
			The following table describes special tokens in the
			string:
                                %p	insert result of b:changelog_entry_prefix
				%c	where to position cursor when done
			The default is "\t*%c", which produces something
			similar to<pre>|        * prefix|</pre></div>
<div class="old-help-para">g:changelog_date_entry_search
			The search pattern to use when searching for a
			date-entry.
			The same tokens that can be used for
			g:changelog_new_date_format can be used here as well.
			The default is '^\s*%d\_s*%u' which finds lines
			matching the form<pre>|2003-01-14  Full Name  &lt;user@host&gt;</pre></div>
<div class="old-help-para">			and some similar formats.</div>
<div class="old-help-para">g:changelog_date_end_entry_search
			The search pattern to use when searching for the end
			of a date-entry.
			The same tokens that can be used for
			g:changelog_new_date_format can be used here as well.
			The default is '^\s*$' which finds lines that contain
			only whitespace or are completely empty.</div>
<div class="old-help-para">b:changelog_name					<a name="b%3Achangelog_name"></a><code class="help-tag-right">b:changelog_name</code>
			Name of the ChangeLog file to look for.
			The default is 'ChangeLog'.</div>
<div class="old-help-para">b:changelog_path
			Path of the ChangeLog to use for the current buffer.
			The default is empty, thus looking for a file named
			<a href="/neovim-docs-web/en/filetype#b%3Achangelog_name">b:changelog_name</a> in the same directory as the
			current buffer.  If not found, the parent directory of
			the current buffer is searched.  This continues
			recursively until a file is found or there are no more
			parent directories to search.</div>
<div class="old-help-para">b:changelog_entry_prefix
			Name of a function to call to generate a prefix to a
			new entry.  This function takes no arguments and
			should return a string containing the prefix.
			Returning an empty prefix is fine.
			The default generates the shortest path between the
			ChangeLog's pathname and the current buffers pathname.
			In the future, it will also be possible to use other
			variable contexts for this variable, for example, g:.</div>
<div class="old-help-para">The Changelog entries are inserted where they add the least amount of text.
After figuring out the current date and user, the file is searched for an
entry beginning with the current date and user and if found adds another item
under it.  If not found, a new entry and item is prepended to the beginning of
the Changelog.</div>
<div class="old-help-para"><h3 class="help-heading">FORTRAN<span class="help-heading-tags">							<a name="ft-fortran-plugin"></a><span class="help-tag">ft-fortran-plugin</span></span></h3></div>
<div class="old-help-para">Options:
<a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a>	is switched on to avoid tabs as required by the Fortran
		standards unless the user has set fortran_have_tabs in vimrc.
<a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a>	is set to 72 for fixed source format as required by the
		Fortran standards and to 80 for free source format.
<a href="/neovim-docs-web/en/options#'formatoptions'">'formatoptions'</a> is set to break code and comment lines and to preserve long
		lines.  You can format comments with <a href="/neovim-docs-web/en/change#gq">gq</a>.
For further discussion of fortran_have_tabs and the method used for the
detection of source format see <a href="/neovim-docs-web/en/syntax#ft-fortran-syntax">ft-fortran-syntax</a>.</div>
<div class="old-help-para"><h3 class="help-heading">FREEBASIC<span class="help-heading-tags">						<a name="ft-freebasic-plugin"></a><span class="help-tag">ft-freebasic-plugin</span></span></h3></div>
<div class="old-help-para">This plugin aims to treat the four FreeBASIC dialects, "fb", "qb", "fblite"
and "deprecated", as distinct languages.</div>
<div class="old-help-para">The dialect will be set to the first name found in g:freebasic_forcelang, any
#lang directive or $lang metacommand in the file being edited, or finally
g:freebasic_lang.  These global variables conceptually map to the fbc options
-forcelang and -lang.  If no dialect is explicitly specified "fb" will be
used.</div>
<div class="old-help-para">For example, to set the dialect to a default of "fblite" but still allow for
any #lang directive overrides, use the following command:<pre>let g:freebasic_lang = "fblite"</pre>
<h3 class="help-heading">GIT COMMIT<span class="help-heading-tags">                                              <a name="ft-gitcommit-plugin"></a><span class="help-tag">ft-gitcommit-plugin</span></span></h3></div>
<div class="old-help-para">One command, :DiffGitCached, is provided to show a diff of the current commit
in the preview window.  It is equivalent to calling "git diff --cached" plus
any arguments given to the command.</div>
<div class="old-help-para"><h3 class="help-heading">GPROF<span class="help-heading-tags">							<a name="ft-gprof-plugin"></a><span class="help-tag">ft-gprof-plugin</span></span></h3></div>
<div class="old-help-para">The gprof filetype plugin defines a mapping <code>&lt;C-]&gt;</code> to jump from a function
entry in the gprof flat profile or from a function entry in the call graph
to the details of that function in the call graph.</div>
<div class="old-help-para">The mapping can be disabled with:<pre>let g:no_gprof_maps = 1</pre>
<h3 class="help-heading">MAIL<span class="help-heading-tags">							<a name="ft-mail-plugin"></a><span class="help-tag">ft-mail-plugin</span></span></h3></div>
<div class="old-help-para">Options:
<a href="/neovim-docs-web/en/options#'modeline'">'modeline'</a>	is switched off to avoid the danger of trojan horses, and to
		avoid that a Subject line with "Vim:" in it will cause an
		error message.
<a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a>	is set to 72.  This is often recommended for e-mail.
<a href="/neovim-docs-web/en/options#'formatoptions'">'formatoptions'</a>	is set to break text lines and to repeat the comment leader
		in new lines, so that a leading "&gt;" for quotes is repeated.
		You can also format quoted text with <a href="/neovim-docs-web/en/change#gq">gq</a>.</div>
<div class="old-help-para">Local mappings:
<code>&lt;LocalLeader&gt;</code>q   or   \\MailQuote
	Quotes the text selected in Visual mode, or from the cursor position
	to the end of the file in Normal mode.  This means "&gt; " is inserted in
	each line.</div>
<div class="old-help-para"><h3 class="help-heading">MAN<span class="help-heading-tags">					<a name="ft-man-plugin"></a><span class="help-tag">ft-man-plugin</span> <a name="%3AMan"></a><span class="help-tag">:Man</span> <a name="man.lua"></a><span class="help-tag">man.lua</span></span></h3></div>
<div class="old-help-para">View manpages in Nvim. Supports highlighting, completion, locales, and
navigation. Also see <a href="/neovim-docs-web/en/usr_12#find-manpage">find-manpage</a>.</div>
<div class="old-help-para">man.lua will always attempt to reuse the closest man window (above/left) but
otherwise create a split.</div>
<div class="old-help-para">The case sensitivity of completion is controlled by <a href="/neovim-docs-web/en/options#'fileignorecase'">'fileignorecase'</a>.</div>
<div class="old-help-para">Commands:
Man <code>{name}</code>                Display the manpage for <code>{name}</code>.
Man <code>{sect}</code> <code>{name}</code>         Display the manpage for <code>{name}</code> and section <code>{sect}</code>.
Man <code>{name}</code>(<code>{sect}</code>)        Same as above.
Man <code>{sect}</code> <code>{name}</code>(<code>{sect}</code>) Used during completion to show the real section of
                          when the provided section is a prefix, e.g. 1m vs 1.
Man <code>{path}</code>                Open the manpage at <code>{path}</code>. Prepend "./" if <code>{path}</code>
                          is relative to the current directory.
Man                       Open the manpage for the <code>&lt;cWORD&gt;</code> (man buffers)
                          or <code>&lt;cword&gt;</code> (non-man buffers) under the cursor.
Man!                      Display the current buffer contents as a manpage.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/filetype#%3AMan">:Man</a> accepts command modifiers. For example, to use a vertical split:<pre>:vertical Man printf</pre>
Local mappings:
K or <code>CTRL-]</code>               Jump to the manpage for the <code>&lt;cWORD&gt;</code> under the
                          cursor. Takes a count for the section.
CTRL-T                    Jump back to the location that the manpage was
                          opened from.
gO                        Show the manpage outline. <a href="/neovim-docs-web/en/various#gO">gO</a>
q                         :quit if invoked as $MANPAGER, otherwise :close.</div>
<div class="old-help-para">Variables:
<a name="g%3Ano_man_maps"></a><code class="help-tag">g:no_man_maps</code>             Do not create mappings in manpage buffers.
<a name="g%3Aft_man_folding_enable"></a><code class="help-tag">g:ft_man_folding_enable</code>   Fold manpages with foldmethod=indent foldnestmax=1.
<a name="b%3Aman_default_sects"></a><code class="help-tag">b:man_default_sects</code>       Comma-separated, ordered list of preferred sections.
                          For example in C one usually wants section 3 or 2:<pre>:let b:man_default_sections = '3,2'</pre>
<a name="g%3Aman_hardwrap"></a><code class="help-tag">g:man_hardwrap</code>            Hard-wrap to $MANWIDTH or window width if $MANWIDTH is
                          empty. Enabled by default. Set <a href="/neovim-docs-web/en/eval#FALSE">FALSE</a> to enable soft
                          wrapping.</div>
<div class="old-help-para">To use Nvim as a manpager:<pre>export MANPAGER='nvim +Man!'</pre>
Note that when running <code>man</code> from the shell and with that <code>MANPAGER</code> in your
environment, <code>man</code> will pre-format the manpage using <code>groff</code>. Thus, Neovim
will inevitably display the manual page as it was passed to it from stdin. One
of the caveats of this is that the width will _always_ be hard-wrapped and not
soft wrapped as with <code>g:man_hardwrap=0</code>. You can set in your environment:<pre>export MANWIDTH=999</pre>
So <code>groff</code>'s pre-formatting output will be the same as with <code>g:man_hardwrap=0</code> i.e soft-wrapped.</div>
<div class="old-help-para">To disable bold highlighting:<pre>:highlight link manBold Normal</pre>
<h3 class="help-heading">MARKDOWN<span class="help-heading-tags">                                                <a name="ft-markdown-plugin"></a><span class="help-tag">ft-markdown-plugin</span></span></h3></div>
<div class="old-help-para">To enable folding use this:<pre>let g:markdown_folding = 1</pre></div>
<div class="old-help-para"><h3 class="help-heading">PDF<span class="help-heading-tags">							<a name="ft-pdf-plugin"></a><span class="help-tag">ft-pdf-plugin</span></span></h3></div>
<div class="old-help-para">Two maps, <code>&lt;C-]&gt;</code> and <code>&lt;C-T&gt;</code>, are provided to simulate a tag stack for navigating
the PDF.  The following are treated as tags:</div>
<div class="old-help-para"><div class="help-li" style=""> The byte offset after "startxref" to the xref table
</div><div class="help-li" style=""> The byte offset after the /Prev key in the trailer to an earlier xref table
</div><div class="help-li" style=""> A line of the form "0123456789 00000 n" in the xref table
</div><div class="help-li" style=""> An object reference like "1 0 R" anywhere in the PDF
</div></div>
<div class="old-help-para">These maps can be disabled with<pre>:let g:no_pdf_maps = 1</pre></div>
<div class="old-help-para"><h3 class="help-heading">PYTHON<span class="help-heading-tags">						<a name="ft-python-plugin"></a><span class="help-tag">ft-python-plugin</span> <a name="PEP8"></a><span class="help-tag">PEP8</span></span></h3></div>
<div class="old-help-para">By default the following options are set, in accordance with PEP8:<pre>setlocal expandtab shiftwidth=4 softtabstop=4 tabstop=8</pre>
To disable this behavior, set the following variable in your vimrc:<pre>let g:python_recommended_style = 0</pre>
<h3 class="help-heading">QF QUICKFIX<span class="help-heading-tags">					    <a name="qf.vim"></a><span class="help-tag">qf.vim</span> <a name="ft-qf-plugin"></a><span class="help-tag">ft-qf-plugin</span></span></h3></div>
<div class="old-help-para">The "qf" filetype is used for the quickfix window, see <a href="/neovim-docs-web/en/quickfix#quickfix-window">quickfix-window</a>.</div>
<div class="old-help-para">The quickfix filetype plugin includes configuration for displaying the command
that produced the quickfix list in the <a href="/neovim-docs-web/en/windows#status-line">status-line</a>. To disable this setting,
configure as follows:<pre>:let g:qf_disable_statusline = 1</pre>
R MARKDOWN						<a name="ft-rmd-plugin"></a><code class="help-tag-right">ft-rmd-plugin</code></div>
<div class="old-help-para">By default ftplugin/html.vim is not sourced. If you want it sourced, add to
your <a href="/neovim-docs-web/en/starting#vimrc">vimrc</a>:<pre>let rmd_include_html = 1</pre>
The <a href="/neovim-docs-web/en/options#'formatexpr'">'formatexpr'</a> option is set dynamically with different values for R code
and for Markdown code. If you prefer that <a href="/neovim-docs-web/en/options#'formatexpr'">'formatexpr'</a> is not set, add to your
<a href="/neovim-docs-web/en/starting#vimrc">vimrc</a>:<pre>let rmd_dynamic_comments = 0</pre>
R RESTRUCTURED TEXT					<a name="ft-rrst-plugin"></a><code class="help-tag-right">ft-rrst-plugin</code></div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'formatexpr'">'formatexpr'</a> option is set dynamically with different values for R code
and for ReStructured text. If you prefer that <a href="/neovim-docs-web/en/options#'formatexpr'">'formatexpr'</a> is not set, add to
your <a href="/neovim-docs-web/en/starting#vimrc">vimrc</a>:<pre>let rrst_dynamic_comments = 0</pre>
<h3 class="help-heading">RESTRUCTUREDTEXT<span class="help-heading-tags">					<a name="ft-rst-plugin"></a><span class="help-tag">ft-rst-plugin</span></span></h3></div>
<div class="old-help-para">The following formatting setting are optionally available:<pre>setlocal expandtab shiftwidth=3 softtabstop=3 tabstop=8</pre>
To enable this behavior, set the following variable in your vimrc:<pre>let g:rst_style = 1</pre>
<h3 class="help-heading">RPM SPEC<span class="help-heading-tags">						<a name="ft-spec-plugin"></a><span class="help-tag">ft-spec-plugin</span></span></h3></div>
<div class="old-help-para">Since the text for this plugin is rather long it has been put in a separate
file: <a href="/neovim-docs-web/en/pi_spec#pi_spec.txt">pi_spec.txt</a>.</div>
<div class="old-help-para"><h3 class="help-heading">SHADA<span class="help-heading-tags">							<a name="ft-shada"></a><span class="help-tag">ft-shada</span></span></h3></div>
<div class="old-help-para">Allows editing binary <a href="/neovim-docs-web/en/starting#shada-file">shada-file</a>s in a nice way.  Opened binary files are
displayed in the following format:<pre>Type with timestamp YYYY-mm-ddTHH:MM:SS:
  % Key__  Description___  Value
  + fooba  foo bar baz fo  {msgpack-value}
  + abcde  abc def ghi jk  {msgpack-value}
Other type with timestamp YYYY-mm-ddTHH:MM:SS:
  @ Description__  Value
  - foo bar baz t  {msgpack-value}
  # Expected more elements in list
Some other type with timestamp YYYY-mm-ddTHH:MM:SS:
  # Unexpected type: type instead of map
  = {msgpack-value}</pre>
Filetype plugin defines all <a href="/neovim-docs-web/en/autocmd#Cmd-event">Cmd-event</a>s.  Defined <a href="/neovim-docs-web/en/autocmd#SourceCmd">SourceCmd</a> event makes
"source file.shada" be equivalent to "|:rshada| file.shada".  <a href="/neovim-docs-web/en/autocmd#BufWriteCmd">BufWriteCmd</a>,
<a href="/neovim-docs-web/en/autocmd#FileWriteCmd">FileWriteCmd</a> and <a href="/neovim-docs-web/en/autocmd#FileAppendCmd">FileAppendCmd</a> events are affected by the following
settings:</div>
<div class="old-help-para"><a name="g%3Ashada%23keep_old_header"></a><code class="help-tag">g:shada#keep_old_header</code>  	Boolean, if set to false all header entries
				are ignored when writing.  Defaults to 1.
<a name="g%3Ashada%23add_own_header"></a><code class="help-tag">g:shada#add_own_header</code>  	Boolean, if set to true first written entry
				will always be header entry with two values in
				a map with attached data: <a href="/neovim-docs-web/en/eval#v%3Aversion">v:version</a> attached
				to "version" key and "shada.vim" attached to
				"generator" key.  Defaults to 1.</div>
<div class="old-help-para">Format description:</div>
<div class="old-help-para">1. <code>#</code> starts a comment.  Lines starting with space characters and then <code>#</code>
   are ignored.  Plugin may only add comment lines to indicate some errors in
   ShaDa format.  Lines containing no non-whitespace characters are also
   ignored.
2. Each entry starts with line that has format "{type} with timestamp
   <code>{timestamp}</code>:". <code>{timestamp}</code> is <a href="/neovim-docs-web/en/builtin#strftime()">strftime()</a>-formatted string representing
   actual Unix timestamp value. First strftime() argument is equal to
   <code>%Y-%m-%dT%H:%M:%S</code>.  When writing this timestamp is parsed using
   <a href="/neovim-docs-web/en/pi_msgpack#msgpack%23strptime()">msgpack#strptime()</a>, with caching (it remembers which timestamp produced
   particular strftime() output and uses this value if you did not change
   timestamp). <code>{type}</code> is one of
    1 - Header
    2 - Search pattern
    3 - Replacement string
    4 - History entry
    5 - Register
    6 - Variable
    7 - Global mark
    8 - Jump
    9 - Buffer list
   10 - Local mark
   11 - Change
<div class="help-li" style=""> - Unknown (0x{type-hex})
</div></div>
<div class="old-help-para">   Each type may be represented using Unknown entry: "Jump with timestamp ..."
   is the same as "Unknown (0x8) with timestamp ....".
3. After header there is one of the following lines:
   1. "  % Key__  Description__  Value": map header.  After mapping header
      follows a table which may contain comments and lines consisting of
      "  +", key, description and <a href="/neovim-docs-web/en/pi_msgpack#%7Bmsgpack-value%7D">{msgpack-value}</a>.  Key is separated by at
      least two spaces with description, description is separated by at least
      two spaces with the value.  Each key in the map must be at most as wide
      as "Key__" header: "Key" allows at most 3-byte keys, "Key__" allows at
      most 5-byte keys.  If keys actually occupy less bytes then the rest is
      filled with spaces.  Keys cannot be empty, end with spaces, contain two
      consequent spaces inside of them or contain multibyte characters (use
      "=" format if you need this).  Descriptions have the same restrictions
      on width and contents, except that empty descriptions are allowed.
      Description column may be omitted.</div>
<div class="old-help-para">      When writing description is ignored.  Keys with values <a href="/neovim-docs-web/en/pi_msgpack#msgpack%23equal">msgpack#equal</a>
      to default ones are ignored.  Order of keys is preserved.  All keys are
      treated as strings (not binary strings).</div>
<div class="old-help-para">      Note: specifically for buffer list entries it is allowed to have more
      then one map header.  Each map header starts a new map entry inside
      buffer list because ShaDa buffer list entry is an array of maps.  I.e.<pre>Buffer list with timestamp 1970-01-01T00:00:00:
  % Key  Description  Value
  + f    file name    "/foo"
  + l    line number  1
  + c    column       10</pre></div>
<div class="old-help-para">      is equivalent to<pre>Buffer list with timestamp 1970-01-01T00:00:00:
  = [{="f": "/foo", ="c": 10}]</pre></div>
<div class="old-help-para">      and<pre>Buffer list with timestamp 1970-01-01T00:00:00:
  % Key  Description  Value
  + f    file name    "/foo"

  % Key  Description  Value
  + f    file name    "/bar"</pre></div>
<div class="old-help-para">      is equivalent to<pre>Buffer list with timestamp 1970-01-01T00:00:00:
  = [{="f": "/foo"}, {="f": "/bar"}]</pre></div>
<div class="old-help-para">      Note 2: specifically for register entries special syntax for arrays was
      designed:<pre>Register with timestamp 1970-01-01T00:00:00:
  % Key  Description  Value
  + rc   contents     @
  | - "line1"
  | - "line2"</pre></div>
<div class="old-help-para">      This is equivalent to<pre>Register with timestamp 1970-01-01T00:00:00:
  % Key  Description  Value
  + rc   contents     ["line1", "line2"]</pre></div>
<div class="old-help-para">      Such syntax is automatically used if array representation appears to be
      too lengthy.
   2. "  @  Description__  Value": array header.  Same as map, but key is
      omitted and description cannot be omitted.  Array entries start with
      "  -". Example:<pre>History entry with timestamp 1970-01-01T00:00:00:
  @ Description_  Value
  - history type  SEARCH
  - contents      "foo"
  - separator     '/'</pre></div>
<div class="old-help-para">      is equivalent to<pre>History entry with timestamp 1970-01-01T00:00:00:
  = [SEARCH, "foo", '/']</pre></div>
<div class="old-help-para">      Note: special array syntax for register entries is not recognized here.
   3. "  = <code>{msgpack-value}</code>": raw values.  <a href="/neovim-docs-web/en/pi_msgpack#%7Bmsgpack-value%7D">{msgpack-value}</a> in this case may
      have absolutely any type.  Special array syntax for register entries is
      not recognized here as well.</div>
<div class="old-help-para"><h3 class="help-heading">RUST<span class="help-heading-tags">							<a name="ft-rust"></a><span class="help-tag">ft-rust</span></span></h3></div>
<div class="old-help-para">Since the text for this plugin is rather long it has been put in a separate
file: <a href="/neovim-docs-web/en/ft_rust#ft_rust.txt">ft_rust.txt</a>.</div>
<div class="old-help-para"><h3 class="help-heading">SQL<span class="help-heading-tags">							<a name="ft-sql"></a><span class="help-tag">ft-sql</span></span></h3></div>
<div class="old-help-para">Since the text for this plugin is rather long it has been put in a separate
file: <a href="/neovim-docs-web/en/ft_sql#ft_sql.txt">ft_sql.txt</a>.</div>
<div class="old-help-para"><h3 class="help-heading">TEX<span class="help-heading-tags">						<a name="ft-tex-plugin"></a><span class="help-tag">ft-tex-plugin</span> <a name="g%3Atex_flavor"></a><span class="help-tag">g:tex_flavor</span></span></h3></div>
<div class="old-help-para">If the first line of a.tex file has the form<pre>%&amp;&lt;format&gt;</pre>
then this determined the file type:  plaintex (for plain TeX), context (for
ConTeXt), or tex (for LaTeX).  Otherwise, the file is searched for keywords to
choose context or tex.  If no keywords are found, it defaults to plaintex.
You can change the default by defining the variable g:tex_flavor to the format
(not the file type) you use most.  Use one of these:<pre>let g:tex_flavor = "plain"
let g:tex_flavor = "context"
let g:tex_flavor = "latex"</pre>
Currently no other formats are recognized.</div>
<div class="old-help-para"><h3 class="help-heading">VIM<span class="help-heading-tags">							<a name="ft-vim-plugin"></a><span class="help-tag">ft-vim-plugin</span></span></h3></div>
<div class="old-help-para">The Vim filetype plugin defines mappings to move to the start and end of
functions with [[ and ]].  Move around comments with ]" and [".</div>
<div class="old-help-para">The mappings can be disabled with:<pre>let g:no_vim_maps = 1</pre>
<h3 class="help-heading">ZIMBU<span class="help-heading-tags">							<a name="ft-zimbu-plugin"></a><span class="help-tag">ft-zimbu-plugin</span></span></h3></div>
<div class="old-help-para">The Zimbu filetype plugin defines mappings to move to the start and end of
functions with [[ and ]].</div>
<div class="old-help-para">The mappings can be disabled with:<pre>let g:no_zimbu_maps = 1</pre></div>

  
  