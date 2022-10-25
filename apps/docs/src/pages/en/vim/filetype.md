---
title: Filetype
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="Nvim" class="section-title" href="#Nvim"> Filetype Txt</a> 

VIM REFERENCE MANUAL    by Bram Moolenaar


### <a id="filetype file-type" class="section-title" href="#filetype file-type">Filetypes</a>

Also see |autocmd.txt|.

                                      Type [gO](undefined#gO) to see the table of contents.


## <a id="filetypes file-types" class="section-title" href="#filetypes file-types">1. Filetypes</a> 

Vim can detect the type of file that is edited.  This is done by checking the
file name and sometimes by inspecting the contents of the file for specific
text.

### <a id=":filetype :filet" class="section-title" href="#:filetype :filet">Note:</a>
To enable file type detection, use this command in your vimrc:
```	:filetype on
Each time a new or existing file is edited, Vim will try to recognize the type
of the file and set the 'filetype' option.  This will trigger the FileType
event, which can be used to set the syntax highlighting, set options, etc.

Detail: The ":filetype on" command will load these files:
		$VIMRUNTIME/filetype.lua
		$VIMRUNTIME/filetype.vim
	filetype.lua creates an autocommand that fires for all BufNewFile and
	BufRead events. It tries to detect the filetype based off of the
	file's extension or name.

	filetype.vim is a Vim script that defines autocommands for the
	BufNewFile and BufRead events. In contrast to filetype.lua, this
	file creates separate BufNewFile and BufRead events for each filetype
	pattern.

	If the file type is not found by the name, the file
	$VIMRUNTIME/scripts.vim is used to detect it from the contents of the
	file.
	When the GUI is running or will start soon, the |menu.vim| script is
	also sourced.  See |'go-M'| about avoiding that.

To add your own file types, see [new-filetype](undefined#new-filetype) below.  To search for help on a
filetype prepend "ft-" and optionally append "-syntax", "-indent" or
"-plugin".  For example:
	:help ft-vim-indent
	:help ft-vim-syntax
	:help ft-man-plugin

If the file type is not detected automatically, or it finds the wrong type,
you can either set the 'filetype' option manually, or add a modeline to your
file.  Example, for an IDL file use the command:
	:set filetype=idl

or add this [modeline](undefined#modeline) to the file:
	/* vim: set filetype=idl : */ ~

### <a id=":filetype-plugin-on" class="section-title" href="#:filetype-plugin-on">Note:</a>
You can enable loading the plugin files for specific file types with:
	:filetype plugin on
If filetype detection was not switched on yet, it will be as well.
This actually loads the file "ftplugin.vim" in 'runtimepath'.
The result is that when a file is edited its plugin file is loaded (if there
is one for the detected filetype). [filetype-plugin](/neovim-docs-web/en/usr/usr_43#filetype-plugin)

### <a id=":filetype-plugin-off" class="section-title" href="#:filetype-plugin-off">Note:</a>
You can disable it again with:
	:filetype plugin off
The filetype detection is not switched off then.  But if you do switch off
filetype detection, the plugins will not be loaded either.
This actually loads the file "ftplugof.vim" in 'runtimepath'.

### <a id=":filetype-indent-on" class="section-title" href="#:filetype-indent-on">Note:</a>
You can enable loading the indent file for specific file types with:
	:filetype indent on
If filetype detection was not switched on yet, it will be as well.
This actually loads the file "indent.vim" in 'runtimepath'.
The result is that when a file is edited its indent file is loaded (if there
is one for the detected filetype). [indent-expression](/neovim-docs-web/en/vim/indent#indent-expression)

### <a id=":filetype-indent-off" class="section-title" href="#:filetype-indent-off">Note:</a>
You can disable it again with:
	:filetype indent off
The filetype detection is not switched off then.  But if you do switch off
filetype detection, the indent files will not be loaded either.
This actually loads the file "indoff.vim" in 'runtimepath'.
This disables auto-indenting for files you will open.  It will keep working in
already opened files.  Reset 'autoindent', 'cindent', 'smartindent' and/or
'indentexpr' to disable indenting in an opened file.

### <a id=":filetype-off" class="section-title" href="#:filetype-off">Note:</a>
To disable file type detection, use this command:
	:filetype off
This will keep the flags for "plugin" and "indent", but since no file types
are being detected, they won't work until the next ":filetype on".


### <a id=":filetype-overview" class="section-title" href="#:filetype-overview">Overview:</a>

command				detection	plugin		indent ~
:filetype on			on		unchanged	unchanged
:filetype off			off		unchanged	unchanged
:filetype plugin on		on		on		unchanged
:filetype plugin off		unchanged	off		unchanged
:filetype indent on		on		unchanged	on
:filetype indent off		unchanged	unchanged	off
:filetype plugin indent on	on		on		on
:filetype plugin indent off	unchanged	off		off

To see the current status, type:
	:filetype
The output looks something like this:
	filetype detection:ON  plugin:ON  indent:OFF

The file types are also used for syntax highlighting.  If the ":syntax on"
command is used, the file type detection is installed too.  There is no need
to do ":filetype on" after ":syntax on".

To disable one of the file types, add a line in your filetype file, see
[remove-filetype](undefined#remove-filetype).

### <a id="filetype-detect" class="section-title" href="#filetype-detect">Note:</a>
To detect the file type again:
	:filetype detect
Use this if you started with an empty file and typed text that makes it
possible to detect the file type.  For example, when you entered this in a
shell script: "#!/bin/csh".
   When filetype detection was off, it will be enabled first, like the "on"
argument was used.

### <a id="filetype-overrule" class="section-title" href="#filetype-overrule">Note:</a>
When the same extension is used for multiple filetypes, Vim tries to guess
what kind of file it is.  This doesn't always work.  A number of global
variables can be used to overrule the filetype used for certain extensions:

	file name	variable ~
	*.asa		g:filetype_asa	[ft-aspvbs-syntax](undefined#ft-aspvbs-syntax) [ft-aspperl-syntax](undefined#ft-aspperl-syntax)
	*.asm		g:asmsyntax	[ft-asm-syntax](undefined#ft-asm-syntax)
	*.asp		g:filetype_asp	[ft-aspvbs-syntax](undefined#ft-aspvbs-syntax) [ft-aspperl-syntax](undefined#ft-aspperl-syntax)
	*.bas		g:filetype_bas	[ft-basic-syntax](undefined#ft-basic-syntax)
	*.cfg		g:filetype_cfg
	*.cls		g:filetype_cls
	*.csh		g:filetype_csh	[ft-csh-syntax](undefined#ft-csh-syntax)
	*.dat		g:filetype_dat
	*.frm		g:filetype_frm	[ft-form-syntax](undefined#ft-form-syntax)
	*.fs		g:filetype_fs	[ft-forth-syntax](undefined#ft-forth-syntax)
	*.i		g:filetype_i	[ft-progress-syntax](undefined#ft-progress-syntax)
	*.inc		g:filetype_inc
	*.lsl		g:filetype_lsl
	*.m		g:filetype_m	[ft-mathematica-syntax](undefined#ft-mathematica-syntax)
	*.mod		g:filetype_mod
	*.p		g:filetype_p	[ft-pascal-syntax](undefined#ft-pascal-syntax)
	*.pl		g:filetype_pl
	*.pp		g:filetype_pp	[ft-pascal-syntax](undefined#ft-pascal-syntax)
	*.prg		g:filetype_prg
	*.r		g:filetype_r
	*.sig		g:filetype_sig
	*.sql		g:filetype_sql	[ft-sql-syntax](undefined#ft-sql-syntax)
	*.src		g:filetype_src
	*.sys		g:filetype_sys
	*.sh		g:bash_is_sh	[ft-sh-syntax](undefined#ft-sh-syntax)
	*.tex		g:tex_flavor	[ft-tex-plugin](undefined#ft-tex-plugin)
	*.w		g:filetype_w	[ft-cweb-syntax](undefined#ft-cweb-syntax)

For a few filetypes the global variable is used only when the filetype could
not be detected:
	*.r		g:filetype_r	[ft-rexx-syntax](undefined#ft-rexx-syntax)

### <a id="filetype-ignore" class="section-title" href="#filetype-ignore">Note:</a>
To avoid that certain files are being inspected, the g:ft_ignore_pat variable
is used.  The default value is set like this:
	:let g:ft_ignore_pat = '\.\(Z\|gz\|bz2\|zip\|tgz\)$'
This means that the contents of compressed files are not inspected.

### <a id="new-filetype" class="section-title" href="#new-filetype">Note:</a>
If a file type that you want to use is not detected yet, there are a few ways
to add it.  The recommended way is to use |vim.filetype.add()| to add it to
Nvim's builtin filetype detection mechanism.  If you want to handle the
detection manually, proceed as follows:

A. If you want to overrule all default file type checks.
   This works by writing one file for each filetype.  The disadvantage is that
   there can be many files.  The advantage is that you can simply drop this
   file in the right directory to make it work.
### <a id="ftdetect" class="section-title" href="#ftdetect">Note:</a>
   1. Create your user runtime directory.  You would normally use the first
      item of the 'runtimepath' option.  Then create the directory "ftdetect"
      inside it.  Example for Unix:
	:!mkdir -p ~/.config/nvim/ftdetect
```

   2. Create a file that contains an autocommand to detect the file type.
      Example:
```	au BufRead,BufNewFile *.mine		set filetype=mine
     Note that there is no "augroup" command, this has already been done
      when sourcing your file.  You could also use the pattern "*" and then
      check the contents of the file to recognize it.
      Write this file as "mine.vim" in the "ftdetect" directory in your user
      runtime directory.  For example, for Unix:
	:w ~/.config/nvim/ftdetect/mine.vim

  3. To use the new filetype detection you must restart Vim.

   The files in the "ftdetect" directory are used after all the default
   checks, thus they can overrule a previously detected file type.  But you
   can also use |:setfiletype| to keep a previously detected filetype.

B. If you want to detect your file after the default file type checks.

   This works like A above, but instead of setting 'filetype' unconditionally
   use ":setfiletype".  This will only set 'filetype' if no file type was
   detected yet.  Example:
	au BufRead,BufNewFile *.txt		setfiletype text
```

   You can also use the already detected file type in your command.  For
   example, to use the file type "mypascal" when "pascal" has been detected:
```	au BufRead,BufNewFile *		if &ft == 'pascal' | set ft=mypascal
								       | endif

C. If your file type can be detected by the file name or extension.
   1. Create your user runtime directory.  You would normally use the first
      item of the 'runtimepath' option.  Example for Unix:
	:!mkdir -p ~/.config/nvim
```

   2. Create a file that contains autocommands to detect the file type.
      Example:
```	" my filetype file
	if exists("did_load_filetypes")
	  finish
	endif
	augroup filetypedetect
### <a id="au! BufRead,BufNewFile .mine" class="section-title" href="#au! BufRead,BufNewFile .mine">Note:</a>
### <a id="au! BufRead,BufNewFile .xyz" class="section-title" href="#au! BufRead,BufNewFile .xyz">Note:</a>
	augroup END
```

      Write this file as "filetype.vim" in your user runtime directory.  For
      example, for Unix:
```	:w ~/.config/nvim/filetype.vim

   3. To use the new filetype detection you must restart Vim.

   Your filetype.vim will be sourced before the default FileType autocommands
   have been installed.  Your autocommands will match first, and the
   ":setfiletype" command will make sure that no other autocommands will set
   'filetype' after this.
### <a id="new-filetype-scripts" class="section-title" href="#new-filetype-scripts">Note:</a>
D. If your filetype can only be detected by inspecting the contents of the
   file.

   1. Create your user runtime directory.  You would normally use the first
      item of the 'runtimepath' option.  Example for Unix:
	:!mkdir -p ~/.config/nvim
```

   2. Create a vim script file for doing this.  Example:
```	if did_filetype()	" filetype already set..
	  finish		" ..don't do these checks
	endif
	if getline(1) =~ '^#!.*\<mine\>'
	  setfiletype mine
	elseif getline(1) =~? '\<drawing\>'
	  setfiletype drawing
	endif
     See $VIMRUNTIME/scripts.vim for more examples.
      Write this file as "scripts.vim" in your user runtime directory.  For
      example, for Unix:
	:w ~/.config/nvim/scripts.vim
```

   3. The detection will work right away, no need to restart Vim.

   Your scripts.vim is loaded before the default checks for file types, which
   means that your rules override the default rules in
   $VIMRUNTIME/scripts.vim.

### <a id="remove-filetype" class="section-title" href="#remove-filetype">Note:</a>
If a file type is detected that is wrong for you, you can set 'filetype' to
a non-existing name such as `ignored` to avoid that it will be set later anyway.

### <a id="g:did_load_filetypes" class="section-title" href="#g:did_load_filetypes">Note:</a>
The builtin filetype detection provided by Nvim can be disabled by setting
the `did_load_filetypes` global variable. If this variable exists, the default
`$VIMRUNTIME/filetype.lua` will not run.

### <a id="plugin-details" class="section-title" href="#plugin-details">Note:</a>
The "plugin" directory can be in any of the directories in the 'runtimepath'
option.  All of these directories will be searched for plugins and they are
all loaded.  For example, if this command:

	set runtimepath

produces this output:

	runtimepath=/etc/vim,~/.config/nvim,/usr/local/share/vim/vim82 ~

then Vim will load all plugins in these directories and below:

	/etc/vim/plugin/  ~
	~/.config/nvim/plugin/  ~
	/usr/local/share/vim/vim82/plugin/  ~

Note that the last one is the value of $VIMRUNTIME which has been expanded.

Note that when using a plugin manager or [packages](/neovim-docs-web/en/vim/repeat#packages) many directories will be
added to 'runtimepath'.  These plugins each require their own directory, don't
put them directly in ~/.config/nvim/plugin.

What if it looks like your plugin is not being loaded?  You can find out what
happens when Vim starts up by using the [-V](undefined#-V) argument:

	vim -V2

You will see a lot of messages, in between them is a remark about loading the
plugins.  It starts with:

	Searching for "plugin/**/*.vim" in ~

There you can see where Vim looks for your plugin scripts.


## <a id="filetype-plugins" class="section-title" href="#filetype-plugins">2. Filetype Plugin</a> 

When loading filetype plugins has been enabled |:filetype-plugin-on|, options
will be set and mappings defined.  These are all local to the buffer, they
will not be used for other files.

Defining mappings for a filetype may get in the way of the mappings you
define yourself.  There are a few ways to avoid this:
1. Set the "maplocalleader" variable to the key sequence you want the mappings
   to start with.  Example:
```	:let maplocalleader = ","
  All mappings will then start with a comma instead of the default, which
   is a backslash.  Also see |<LocalLeader>|.

2. Define your own mapping.  Example:
	:map ,p <Plug>MailQuote
  You need to check the description of the plugin file below for the
   functionality it offers and the string to map to.
   You need to define your own mapping before the plugin is loaded (before
   editing a file of that type).  The plugin will then skip installing the
   default mapping.
### <a id="no_mail_maps g:no_mail_maps" class="section-title" href="#no_mail_maps g:no_mail_maps">Note:</a>
3. Disable defining mappings for a specific filetype by setting a variable,
   which contains the name of the filetype.  For the "mail" filetype this
   would be:
	:let no_mail_maps = 1
### <a id="no_plugin_maps g:no_plugin_maps" class="section-title" href="#no_plugin_maps g:no_plugin_maps">Note:</a>
4. Disable defining mappings for all filetypes by setting a variable:
	:let no_plugin_maps = 1
```


### <a id="ftplugin-overrule" class="section-title" href="#ftplugin-overrule">Note:</a>
If a global filetype plugin does not do exactly what you want, there are three
ways to change this:

1. Add a few settings.
   You must create a new filetype plugin in a directory early in
   'runtimepath'.  For Unix, for example you could use this file:
	vim ~/.config/nvim/ftplugin/fortran.vim
  You can set those settings and mappings that you would like to add.  Note
   that the global plugin will be loaded after this, it may overrule the
   settings that you do here.  If this is the case, you need to use one of the
   following two methods.

2. Make a copy of the plugin and change it.
   You must put the copy in a directory early in 'runtimepath'.  For Unix, for
   example, you could do this:
	cp $VIMRUNTIME/ftplugin/fortran.vim ~/.config/nvim/ftplugin/fortran.vim
  Then you can edit the copied file to your liking.  Since the b:did_ftplugin
   variable will be set, the global plugin will not be loaded.
   A disadvantage of this method is that when the distributed plugin gets
   improved, you will have to copy and modify it again.

3. Overrule the settings after loading the global plugin.
   You must create a new filetype plugin in a directory from the end of
   'runtimepath'.  For Unix, for example, you could use this file:
	vim ~/.config/nvim/after/ftplugin/fortran.vim
  In this file you can change just those settings that you want to change.


## <a id="Docs for the default filetype plugins." class="section-title" href="#Docs for the default filetype plugins.">3.</a> 

### <a id="ft-awk-plugin" class="section-title" href="#ft-awk-plugin">AWK</a>

Support for features specific to GNU Awk, like @include, can be enabled by
setting:
```	let g:awk_is_gawk = 1


### <a id="ft-changelog-plugin" class="section-title" href="#ft-changelog-plugin">CHANGELOG</a>

Allows for easy entrance of Changelog entries in Changelog files.  There are
some commands, mappings, and variables worth exploring:

Options:
'comments'		is made empty to not mess up formatting.
'textwidth'		is set to 78, which is standard.
'formatoptions'		the 't' flag is added to wrap when inserting text.

Commands:
NewChangelogEntry	Adds a new Changelog entry in an intelligent fashion
			(see below).

Local mappings:
Leader>o		Starts a new Changelog entry in an equally intelligent
			fashion (see below).

Global mappings:
			NOTE: The global mappings are accessed by sourcing the
			ftplugin/changelog.vim file first, e.g. with
				runtime ftplugin/changelog.vim
			in your |init.vim|.
Leader>o		Switches to the ChangeLog buffer opened for the
			current directory, or opens it in a new buffer if it
			exists in the current directory.  Then it does the
			same as the local <Leader>o described above.

Variables:
g:changelog_timeformat  Deprecated; use g:changelog_dateformat instead.
g:changelog_dateformat	The date (and time) format used in ChangeLog entries.
			The format accepted is the same as for the
			|strftime()| function.
			The default is "%Y-%m-%d" which is the standard format
			for many ChangeLog layouts.
g:changelog_username	The name and email address of the user.
			The default is deduced from environment variables and
			system files.  It searches /etc/passwd for the comment
			part of the current user, which informally contains
			the real name of the user up to the first separating
			comma.  then it checks the $NAME environment variable
			and finally runs `whoami` and `hostname` to build an
			email address.  The final form is
				Full Name  <user@host>
```

g:changelog_new_date_format
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
			of the line)
```				|2003-01-14  Full Name  <user@host>
				|
				|        * prefix|
```

g:changelog_new_entry_format
			The format used when creating a new entry.
			The following table describes special tokens in the
			string:
                                %p	insert result of b:changelog_entry_prefix
				%c	where to position cursor when done
### <a id="The default is "\t%c", which produces something" class="section-title" href="#The default is "\t%c", which produces something">Note:</a>
			similar to
```				|        * prefix|
```

g:changelog_date_entry_search
			The search pattern to use when searching for a
			date-entry.
			The same tokens that can be used for
			g:changelog_new_date_format can be used here as well.
### <a id="The default is '^\s%d\_s%u' which finds lines" class="section-title" href="#The default is '^\s%d\_s%u' which finds lines">Note:</a>
			matching the form
```				|2003-01-14  Full Name  <user@host>
			and some similar formats.

g:changelog_date_end_entry_search
			The search pattern to use when searching for the end
			of a date-entry.
			The same tokens that can be used for
			g:changelog_new_date_format can be used here as well.
### <a id="The default is '^\s$' which finds lines that contain" class="section-title" href="#The default is '^\s$' which finds lines that contain">Note:</a>
			only whitespace or are completely empty.

### <a id="b:changelog_name" class="section-title" href="#b:changelog_name">b:changelog_name</a>
			Name of the ChangeLog file to look for.
			The default is 'ChangeLog'.

b:changelog_path
			Path of the ChangeLog to use for the current buffer.
			The default is empty, thus looking for a file named
			|b:changelog_name| in the same directory as the
			current buffer.  If not found, the parent directory of
			the current buffer is searched.  This continues
			recursively until a file is found or there are no more
			parent directories to search.

b:changelog_entry_prefix
			Name of a function to call to generate a prefix to a
			new entry.  This function takes no arguments and
			should return a string containing the prefix.
			Returning an empty prefix is fine.
			The default generates the shortest path between the
			ChangeLog's pathname and the current buffers pathname.
			In the future, it will also be possible to use other
			variable contexts for this variable, for example, g:.

The Changelog entries are inserted where they add the least amount of text.
After figuring out the current date and user, the file is searched for an
entry beginning with the current date and user and if found adds another item
under it.  If not found, a new entry and item is prepended to the beginning of
the Changelog.


### <a id="ft-fortran-plugin" class="section-title" href="#ft-fortran-plugin">FORTRAN</a>

Options:
'expandtab'	is switched on to avoid tabs as required by the Fortran
		standards unless the user has set fortran_have_tabs in vimrc.
'textwidth'	is set to 72 for fixed source format as required by the
		Fortran standards and to 80 for free source format.
'formatoptions' is set to break code and comment lines and to preserve long
		lines.  You can format comments with [gq](undefined#gq).
For further discussion of fortran_have_tabs and the method used for the
detection of source format see [ft-fortran-syntax](undefined#ft-fortran-syntax).


### <a id="ft-freebasic-plugin" class="section-title" href="#ft-freebasic-plugin">FREEBASIC</a>

This plugin aims to treat the four FreeBASIC dialects, "fb", "qb", "fblite"
and "deprecated", as distinct languages.

The dialect will be set to the first name found in g:freebasic_forcelang, any
#lang directive or $lang metacommand in the file being edited, or finally
g:freebasic_lang.  These global variables conceptually map to the fbc options
-forcelang and -lang.  If no dialect is explicitly specified "fb" will be
used.

For example, to set the dialect to a default of "fblite" but still allow for
any #lang directive overrides, use the following command:

     let g:freebasic_lang = "fblite"


### <a id="ft-gitcommit-plugin" class="section-title" href="#ft-gitcommit-plugin">Git Commit</a>

One command, :DiffGitCached, is provided to show a diff of the current commit
in the preview window.  It is equivalent to calling "git diff --cached" plus
any arguments given to the command.


### <a id="ft-gprof-plugin" class="section-title" href="#ft-gprof-plugin">GPROF</a>

The gprof filetype plugin defines a mapping <C-]> to jump from a function
entry in the gprof flat profile or from a function entry in the call graph
to the details of that function in the call graph.

The mapping can be disabled with:
	let g:no_gprof_maps = 1


### <a id="ft-mail-plugin" class="section-title" href="#ft-mail-plugin">MAIL</a>

Options:
'modeline'	is switched off to avoid the danger of trojan horses, and to
		avoid that a Subject line with "Vim:" in it will cause an
		error message.
'textwidth'	is set to 72.  This is often recommended for e-mail.
'formatoptions'	is set to break text lines and to repeat the comment leader
		in new lines, so that a leading ">" for quotes is repeated.
		You can also format quoted text with [gq](undefined#gq).

Local mappings:
LocalLeader>q   or   \\MailQuote
	Quotes the text selected in Visual mode, or from the cursor position
	to the end of the file in Normal mode.  This means "> " is inserted in
	each line.

### <a id="ft-man-plugin :Man man.lua" class="section-title" href="#ft-man-plugin :Man man.lua">MAN</a>

View manpages in Nvim. Supports highlighting, completion, locales, and
navigation. Also see [find-manpage](/neovim-docs-web/en/usr/usr_12#find-manpage).

man.lua will always attempt to reuse the closest man window (above/left) but
otherwise create a split.

The case sensitivity of completion is controlled by 'fileignorecase'.

Commands:
Man {name}                Display the manpage for {name}.
Man {sect} {name}         Display the manpage for {name} and section {sect}.
Man {name}({sect})        Same as above.
Man {sect} {name}({sect}) Used during completion to show the real section of
                          when the provided section is a prefix, e.g. 1m vs 1.
Man {path}                Open the manpage at {path}. Prepend "./" if {path}
                          is relative to the current directory.
Man                       Open the manpage for the <cWORD> (man buffers)
                          or <cword> (non-man buffers) under the cursor.
Man!                      Display the current buffer contents as a manpage.

|:Man| accepts command modifiers. For example, to use a vertical split:
     :vertical Man printf

Local mappings:
K or CTRL-]               Jump to the manpage for the <cWORD> under the
                          cursor. Takes a count for the section.
CTRL-T                    Jump back to the location that the manpage was
                          opened from.
gO                        Show the manpage outline. [gO](undefined#gO)
q                         :quit if invoked as $MANPAGER, otherwise :close.

Variables:
*g:no_man_maps*             Do not create mappings in manpage buffers.
*g:ft_man_folding_enable*   Fold manpages with foldmethod=indent foldnestmax=1.
*b:man_default_sects*       Comma-separated, ordered list of preferred sections.
                          For example in C one usually wants section 3 or 2:
                               :let b:man_default_sections = '3,2'
*g:man_hardwrap*            Hard-wrap to $MANWIDTH or window width if $MANWIDTH is
                          empty. Enabled by default. Set [FALSE](undefined#FALSE) to enable soft
                          wrapping.

To use Nvim as a manpager:
     export MANPAGER='nvim +Man!'

Note that when running `man` from the shell and with that `MANPAGER` in your
environment, `man` will pre-format the manpage using `groff`. Thus, Neovim
will inevitably display the manual page as it was passed to it from stdin. One
of the caveats of this is that the width will _always_ be hard-wrapped and not
soft wrapped as with `g:man_hardwrap=0`. You can set in your environment:
     export MANWIDTH=999

So `groff`'s pre-formatting output will be the same as with `g:man_hardwrap=0` i.e soft-wrapped.

To disable bold highlighting:
     :highlight link manBold Normal


### <a id="ft-markdown-plugin" class="section-title" href="#ft-markdown-plugin">MARKDOWN</a>

To enable folding use this:
	let g:markdown_folding = 1
```


### <a id="ft-pdf-plugin" class="section-title" href="#ft-pdf-plugin">PDF</a>

Two maps, <C-]> and <C-T>, are provided to simulate a tag stack for navigating
the PDF.  The following are treated as tags:

- The byte offset after "startxref" to the xref table
- The byte offset after the /Prev key in the trailer to an earlier xref table
- A line of the form "0123456789 00000 n" in the xref table
- An object reference like "1 0 R" anywhere in the PDF

These maps can be disabled with
```	:let g:no_pdf_maps = 1
```


### <a id="ft-python-plugin PEP8" class="section-title" href="#ft-python-plugin PEP8">PYTHON</a>

By default the following options are set, in accordance with PEP8:
```
	setlocal expandtab shiftwidth=4 softtabstop=4 tabstop=8

To disable this behavior, set the following variable in your vimrc:

	let g:python_recommended_style = 0


### <a id="qf.vim ft-qf-plugin" class="section-title" href="#qf.vim ft-qf-plugin">Qf Quickfix</a>

The "qf" filetype is used for the quickfix window, see [quickfix-window](/neovim-docs-web/en/vim/quickfix#quickfix-window).

The quickfix filetype plugin includes configuration for displaying the command
that produced the quickfix list in the [status-line](undefined#status-line). To disable this setting,
configure as follows:
	:let g:qf_disable_statusline = 1


### <a id="ft-rmd-plugin" class="section-title" href="#ft-rmd-plugin">R Markdown</a>

By default ftplugin/html.vim is not sourced. If you want it sourced, add to
your [vimrc](undefined#vimrc):
	let rmd_include_html = 1

The 'formatexpr' option is set dynamically with different values for R code
and for Markdown code. If you prefer that 'formatexpr' is not set, add to your
[vimrc](undefined#vimrc):
	let rmd_dynamic_comments = 0


### <a id="ft-rrst-plugin" class="section-title" href="#ft-rrst-plugin">R Restructured Text</a>

The 'formatexpr' option is set dynamically with different values for R code
and for ReStructured text. If you prefer that 'formatexpr' is not set, add to
your [vimrc](undefined#vimrc):
	let rrst_dynamic_comments = 0


### <a id="ft-rst-plugin" class="section-title" href="#ft-rst-plugin">RESTRUCTUREDTEXT</a>

The following formatting setting are optionally available:
	setlocal expandtab shiftwidth=3 softtabstop=3 tabstop=8

To enable this behavior, set the following variable in your vimrc:
	let g:rst_style = 1


### <a id="ft-spec-plugin" class="section-title" href="#ft-spec-plugin">Rpm Spec</a>

Since the text for this plugin is rather long it has been put in a separate
file: |pi_spec.txt|.


### <a id="ft-shada" class="section-title" href="#ft-shada">SHADA</a>

Allows editing binary [shada-file](undefined#shada-file)s in a nice way.  Opened binary files are 
displayed in the following format:

    Type with timestamp YYYY-mm-ddTHH:MM:SS:
      % Key__  Description___  Value
      + fooba  foo bar baz fo  {msgpack-value}
      + abcde  abc def ghi jk  {msgpack-value}
    Other type with timestamp YYYY-mm-ddTHH:MM:SS:
      @ Description__  Value
      - foo bar baz t  {msgpack-value}
      # Expected more elements in list
    Some other type with timestamp YYYY-mm-ddTHH:MM:SS:
      # Unexpected type: type instead of map
      = {msgpack-value}

Filetype plugin defines all [Cmd-event](undefined#Cmd-event)s.  Defined [SourceCmd](undefined#SourceCmd) event makes 
"source file.shada" be equivalent to "|:rshada| file.shada".  [BufWriteCmd](undefined#BufWriteCmd), 
[FileWriteCmd](undefined#FileWriteCmd) and [FileAppendCmd](undefined#FileAppendCmd) events are affected by the following 
settings:

*g:shada#keep_old_header*	Boolean, if set to false all header entries 
				are ignored when writing.  Defaults to 1.
*g:shada#add_own_header*	Boolean, if set to true first written entry 
				will always be header entry with two values in 
				a map with attached data: |v:version| attached 
				to "version" key and "shada.vim" attached to 
				"generator" key.  Defaults to 1.

Format description:

1. `#` starts a comment.  Lines starting with space characters and then `#` 
   are ignored.  Plugin may only add comment lines to indicate some errors in 
   ShaDa format.  Lines containing no non-whitespace characters are also 
   ignored.
2. Each entry starts with line that has format "{type} with timestamp 
   {timestamp}:". {timestamp} is |strftime()|-formatted string representing 
   actual Unix timestamp value. First strftime() argument is equal to
   `%Y-%m-%dT%H:%M:%S`.  When writing this timestamp is parsed using 
   |msgpack#strptime()|, with caching (it remembers which timestamp produced 
   particular strftime() output and uses this value if you did not change 
   timestamp). {type} is one of
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
### <a id=" - Unknown (0x{type-hex})" class="section-title" href="# - Unknown (0x{type-hex})">Note:</a>

   Each type may be represented using Unknown entry: "Jump with timestamp ..." 
   is the same as "Unknown (0x8) with timestamp ....".
3. After header there is one of the following lines:
   1. "  % Key__  Description__  Value": map header.  After mapping header 
      follows a table which may contain comments and lines consisting of 
      "  +", key, description and |{msgpack-value}|.  Key is separated by at 
      least two spaces with description, description is separated by at least 
      two spaces with the value.  Each key in the map must be at most as wide 
      as "Key__" header: "Key" allows at most 3-byte keys, "Key__" allows at 
      most 5-byte keys.  If keys actually occupy less bytes then the rest is 
      filled with spaces.  Keys cannot be empty, end with spaces, contain two 
      consequent spaces inside of them or contain multibyte characters (use 
      "=" format if you need this).  Descriptions have the same restrictions 
      on width and contents, except that empty descriptions are allowed.  
      Description column may be omitted.

      When writing description is ignored.  Keys with values |msgpack#equal| 
      to default ones are ignored.  Order of keys is preserved.  All keys are 
      treated as strings (not binary strings).

      Note: specifically for buffer list entries it is allowed to have more 
      then one map header.  Each map header starts a new map entry inside 
      buffer list because ShaDa buffer list entry is an array of maps.  I.e.

        Buffer list with timestamp 1970-01-01T00:00:00:
          % Key  Description  Value
          + f    file name    "/foo"
          + l    line number  1
          + c    column       10
```

      is equivalent to
```
        Buffer list with timestamp 1970-01-01T00:00:00:
          = [{="f": "/foo", ="c": 10}]
```

      and
```
        Buffer list with timestamp 1970-01-01T00:00:00:
          % Key  Description  Value
          + f    file name    "/foo"

          % Key  Description  Value
          + f    file name    "/bar"
```

      is equivalent to
```
        Buffer list with timestamp 1970-01-01T00:00:00:
          = [{="f": "/foo"}, {="f": "/bar"}]
```

      Note 2: specifically for register entries special syntax for arrays was 
      designed:
```
        Register with timestamp 1970-01-01T00:00:00:
          % Key  Description  Value
          + rc   contents     @
          | - "line1"
          | - "line2"
```

      This is equivalent to
```
        Register with timestamp 1970-01-01T00:00:00:
          % Key  Description  Value
          + rc   contents     ["line1", "line2"]
```

      Such syntax is automatically used if array representation appears to be 
      too lengthy.
   2. "  @  Description__  Value": array header.  Same as map, but key is 
      omitted and description cannot be omitted.  Array entries start with 
      "  -". Example:
```
        History entry with timestamp 1970-01-01T00:00:00:
          @ Description_  Value
          - history type  SEARCH
          - contents      "foo"
          - separator     '/'
```

      is equivalent to
```
        History entry with timestamp 1970-01-01T00:00:00:
          = [SEARCH, "foo", '/']
```

      Note: special array syntax for register entries is not recognized here.
   3. "  = {msgpack-value}": raw values.  |{msgpack-value}| in this case may 
      have absolutely any type.  Special array syntax for register entries is 
      not recognized here as well.


### <a id="ft-rust" class="section-title" href="#ft-rust">RUST</a>

Since the text for this plugin is rather long it has been put in a separate
file: |ft_rust.txt|.


### <a id="ft-sql" class="section-title" href="#ft-sql">SQL</a>

Since the text for this plugin is rather long it has been put in a separate
file: |ft_sql.txt|.


### <a id="ft-tex-plugin g:tex_flavor" class="section-title" href="#ft-tex-plugin g:tex_flavor">TEX</a>

If the first line of a *.tex file has the form
```	%&<format>
then this determined the file type:  plaintex (for plain TeX), context (for
ConTeXt), or tex (for LaTeX).  Otherwise, the file is searched for keywords to
choose context or tex.  If no keywords are found, it defaults to plaintex.
You can change the default by defining the variable g:tex_flavor to the format
(not the file type) you use most.  Use one of these:
	let g:tex_flavor = "plain"
	let g:tex_flavor = "context"
	let g:tex_flavor = "latex"
Currently no other formats are recognized.


### <a id="ft-vim-plugin" class="section-title" href="#ft-vim-plugin">VIM</a>

The Vim filetype plugin defines mappings to move to the start and end of
functions with [[ and ]].  Move around comments with ]" and [".

The mappings can be disabled with:
	let g:no_vim_maps = 1


### <a id="ft-zimbu-plugin" class="section-title" href="#ft-zimbu-plugin">ZIMBU</a>

The Zimbu filetype plugin defines mappings to move to the start and end of
functions with [[ and ]].

The mappings can be disabled with:
	let g:no_zimbu_maps = 1
```



 vim:tw=78:ts=8:noet:ft=help:norl:

