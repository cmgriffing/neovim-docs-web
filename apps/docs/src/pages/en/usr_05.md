---
title:  Usr_05
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_05.txt"></a><a name="05.1"></a><h1> Usr_05</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_05.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">			      Set your settings</div>
<div class="old-help-para">Vim can be tuned to work like you want it to.  This chapter shows you how to
make Vim start with options set to different values.  Add plugins to extend
Vim's capabilities.  Or define your own macros.</div>
<div class="old-help-para"><a href="usr_05.html#05.1">05.1</a>  	The vimrc file
<a href="usr_05.html#05.2">05.2</a>  	The example vimrc file explained
<a href="usr_05.html#05.3">05.3</a>  	Simple mappings
<a href="usr_05.html#05.4">05.4</a>  	Adding a package
<a href="usr_05.html#05.5">05.5</a>  	Adding a plugin
<a href="usr_05.html#05.6">05.6</a>  	Adding a help file
<a href="usr_05.html#05.7">05.7</a>  	The option window
<a href="usr_05.html#05.8">05.8</a>  	Often used options</div>
<div class="old-help-para">     Next chapter: <a href="usr_06.html#usr_06.txt">usr_06.txt</a>  Using syntax highlighting
 Previous chapter: <a href="usr_04.html#usr_04.txt">usr_04.txt</a>  Making small changes
Table of contents: <a href="usr_toc.html#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	The vimrc file<span class="help-heading-tags">				<a name="vimrc-intro"></a><span class="help-tag">vimrc-intro</span></span></h2></div>
<div class="old-help-para">You probably got tired of typing commands that you use very often.  To start
Vim with all your favorite option settings and mappings, you write them in
what is called the init.vim file.  Vim executes the commands in this file when
it starts up.</div>
<div class="old-help-para">If you already have a init.vim file (e.g., when your sysadmin has one setup
for you), you can edit it this way:<pre>:edit $MYVIMRC</pre>
If you don't have a vimrc file yet, see <a href="starting.html#init.vim">init.vim</a> to find out where you can
create a vimrc file.</div>
<div class="old-help-para">This file is always used and is recommended:</div>
<div class="old-help-para"><div class="help-column_heading">	~/.config/nvim/init.vim         (Unix and OSX)</div><div class="help-column_heading">	~/AppData/Local/nvim/init.vim   (Windows)</div></div>
<div class="old-help-para">The vimrc file can contain all the commands that you type after a colon.  The
simplest ones are for setting options.  For example, if you want Vim to always
start with the <a href="options.html#'ignorecase'">'ignorecase'</a> option on, add this line your vimrc file:<pre>set ignorecase</pre>
For this new line to take effect you need to exit Vim and start it again.
Later you will learn how to do this without exiting Vim.</div>
<div class="old-help-para">This chapter only explains the most basic items.  For more information on how
to write a Vim script file: <a href="usr_41.html#usr_41.txt">usr_41.txt</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="05.2"></a><span class="help-tag">05.2</span>  	The example vimrc file explained<span class="help-heading-tags">		<a name="vimrc_example.vim"></a><span class="help-tag">vimrc_example.vim</span></span></span></h2></div>
<div class="old-help-para">In the first chapter was explained how to create a vimrc file.<pre>:exe 'edit' stdpath('config').'/init.vim'</pre>
In this section we will explain the various commands used in this file.  This
will give you hints about how to set up your own preferences.  Not everything
will be explained though.  Use the ":help" command to find out more.</div>
<div class="old-help-para"><pre>set backspace=indent,eol,start</pre>
This specifies where in Insert mode the <code>&lt;BS&gt;</code> is allowed to delete the
character in front of the cursor.  The three items, separated by commas, tell
Vim to delete the white space at the start of the line, a line break and the
character before where Insert mode started.
<pre>set autoindent</pre>
This makes Vim use the indent of the previous line for a newly created line.
Thus there is the same amount of white space before the new line.  For example
when pressing <code>&lt;Enter&gt;</code> in Insert mode, and when using the "o" command to open a
new line.
<pre>set backup</pre>
This tells Vim to keep a backup copy of a file when overwriting it. The backup
file will have the same name as the original file with "~" added.  See <a href="usr_07.html#07.4">07.4</a>
<pre>set history=50</pre>
Keep 50 commands and 50 search patterns in the history.  Use another number if
you want to remember fewer or more lines.
<pre>set ruler</pre>
Always display the current cursor position in the lower right corner of the
Vim window.</div>
<div class="old-help-para"><pre>set showcmd</pre>
Display an incomplete command in the lower right corner of the Vim window,
left of the ruler.  For example, when you type "2f", Vim is waiting for you to
type the character to find and "2f" is displayed.  When you press "w" next,
the "2fw" command is executed and the displayed "2f" is removed.</div>
<div class="old-help-para">	+-------------------------------------------------+
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_05.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_05.html%0D%0DContext%3A%0D%0D%60%60%60%0Dthe%20%222fw%22%20command%20is%20executed%20and%20the%20displayed%20%222f%22%20is%20removed.%0A%0A%09%2B-------------------------------------------------%2B%0A%09%7Ctext%20in%20the%20Vim%20window%09%09%09%09%20%20%7C%0A%09%7C~%09%09%09%09%09%09%20%20%7C%0A%09%7C~%09%09%09%09%09%09%20%20%7C%0A%09%7C--%20VISUAL%20--%09%09%092f%20%20%20%20%2043%2C8%20%20%2017%25%20%7C%0D%60%60%60">text</a> in the Vim window				  |
	|~						  |
	|~						  |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_05.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_05.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7Ctext%20in%20the%20Vim%20window%09%09%09%09%20%20%7C%0A%09%7C~%09%09%09%09%09%09%20%20%7C%0A%09%7C~%09%09%09%09%09%09%20%20%7C%0A%09%7C--%20VISUAL%20--%09%09%092f%20%20%20%20%2043%2C8%20%20%2017%25%20%7C%0A%09%2B-------------------------------------------------%2B%0A%09%20%5E%5E%5E%5E%5E%5E%5E%5E%5E%5E%5E%09%09%20%20%20%20%20%20%5E%5E%5E%5E%5E%5E%5E%5E%20%5E%5E%5E%5E%5E%5E%5E%5E%5E%5E%0A%09%20%20'showmode'%09%09%20%20%20%20%20'showcmd'%09'ruler'%0D%60%60%60">--</a> VISUAL --			2f     43,8   17% |
	+-------------------------------------------------+
	 ^^^^^^^^^^^		      ^^^^^^^^ ^^^^^^^^^^
	  <a href="options.html#'showmode'">'showmode'</a>		     <a href="options.html#'showcmd'">'showcmd'</a>	<a href="options.html#'ruler'">'ruler'</a></div>
<div class="old-help-para"><pre>set incsearch</pre>
Display matches for a search pattern while you type.</div>
<div class="old-help-para"><pre>map Q gq</pre>
This defines a key mapping.  More about that in the next section.  This
defines the "Q" command to do formatting with the "gq" operator.  This is how
it worked before Vim 5.0.  Otherwise the "Q" command repeats the last recorded
register.</div>
<div class="old-help-para"><pre>vnoremap _g y:exe "grep /" .. escape(@", '\\/') .. "/ *.c *.h"&lt;CR&gt;</pre>
This mapping yanks the visually selected text and searches for it in C files.
This is a complicated mapping.  You can see that mappings can be used to do
quite complicated things.  Still, it is just a sequence of commands that are
executed like you typed them.</div>
<div class="old-help-para"><pre>set hlsearch</pre>
This option tells Vim to highlight matches with the last used search pattern.
The "if" command is very useful to set options only when some condition is
met.  More about that in <a href="usr_41.html#usr_41.txt">usr_41.txt</a>.</div>
<div class="old-help-para">							<a name="vimrc-filetype"></a><code class="help-tag-right">vimrc-filetype</code><pre>filetype plugin indent on</pre>
This switches on three very clever mechanisms:
1. Filetype detection.
   Whenever you start editing a file, Vim will try to figure out what kind of
   file this is.  When you edit "main.c", Vim will see the ".c" extension and
   recognize this as a "c" filetype.  When you edit a file that starts with
   "#!/bin/sh", Vim will recognize it as a "sh" filetype.
   The filetype detection is used for syntax highlighting and the other two
   items below.
   See <a href="filetype.html#filetypes">filetypes</a>.</div>
<div class="old-help-para">2. Using filetype plugin files
   Many different filetypes are edited with different options.  For example,
   when you edit a "c" file, it's very useful to set the <a href="options.html#'cindent'">'cindent'</a> option to
   automatically indent the lines.  These commonly useful option settings are
   included with Vim in filetype plugins.  You can also add your own, see
   <a href="usr_41.html#write-filetype-plugin">write-filetype-plugin</a>.</div>
<div class="old-help-para">3. Using indent files
   When editing programs, the indent of a line can often be computed
   automatically.  Vim comes with these indent rules for a number of
   filetypes.  See <a href="filetype.html#%3Afiletype-indent-on">:filetype-indent-on</a> and <a href="options.html#'indentexpr'">'indentexpr'</a>.</div>
<div class="old-help-para">				<a name="restore-cursor"></a><code class="help-tag-right">restore-cursor</code> <a name="last-position-jump"></a><code class="help-tag">last-position-jump</code><pre>autocmd BufRead * autocmd FileType &lt;buffer&gt; ++once
  \ if &amp;ft !~# 'commit\|rebase' &amp;&amp; line("'\"") &gt; 1 &amp;&amp; line("'\"") &lt;= line("$") | exe 'normal! g`"' | endif</pre>
Another autocommand.  This time it is used after reading any file.  The
complicated stuff after it checks if the '" mark is defined, and jumps to it
if so.  The backslash at the start of a line is used to continue the command
from the previous line.  That avoids a line getting very long.
See <a href="repeat.html#line-continuation">line-continuation</a>.  This only works in a Vim script file, not when
typing commands at the command-line.</div>
<div class="old-help-para"><pre>command DiffOrig vert new | set bt=nofile | r ++edit # | 0d_ | diffthis
          \ | wincmd p | diffthis</pre>
This adds the ":DiffOrig" command.  Use this in a modified buffer to see the
differences with the file it was loaded from.  See <a href="diff.html#diff">diff</a> and <a href="diff.html#%3ADiffOrig">:DiffOrig</a>.</div>
<div class="old-help-para"><pre>set nolangremap</pre>
Prevent that the langmap option applies to characters that result from a
mapping.  If set (default), this may break plugins (but it's backward
compatible).  See <a href="options.html#'langremap'">'langremap'</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="05.3"></a><span class="help-tag">05.3</span>  	Simple mappings</span></h2></div>
<div class="old-help-para">A mapping enables you to bind a set of Vim commands to a single key.  Suppose,
for example, that you need to surround certain words with curly braces.  In
other words, you need to change a word such as "amount" into "{amount}".  With
the :map command, you can tell Vim that the F5 key does this job.  The command
is as follows:<pre>:map &lt;F5&gt; i{&lt;Esc&gt;ea}&lt;Esc&gt;</pre></div>
<div class="old-help-para">	Note:
	When entering this command, you must enter <code>&lt;F5&gt;</code> by typing four
	characters.  Similarly, <code>&lt;Esc&gt;</code> is not entered by pressing the <code>&lt;Esc&gt;</code>
	key, but by typing five characters.  Watch out for this difference
	when reading the manual!</div>
<div class="old-help-para">Let's break this down:
    <code>&lt;F5&gt;</code>	The F5 function key.  This is the trigger key that causes the
		command to be executed as the key is pressed.</div>
<div class="old-help-para">    i{&lt;Esc&gt;	Insert the { character.  The <code>&lt;Esc&gt;</code> key ends Insert mode.</div>
<div class="old-help-para">    e		Move to the end of the word.</div>
<div class="old-help-para">    a}&lt;Esc&gt;	Append the } to the word.</div>
<div class="old-help-para">After you execute the ":map" command, all you have to do to put {} around a
word is to put the cursor on the first character and press F5.</div>
<div class="old-help-para">In this example, the trigger is a single key; it can be any string.  But when
you use an existing Vim command, that command will no longer be available.
You better avoid that.
   One key that can be used with mappings is the backslash.  Since you
probably want to define more than one mapping, add another character.  You
could map "\p" to add parentheses around a word, and "\c" to add curly braces,
for example:<pre>:map \p i(&lt;Esc&gt;ea)&lt;Esc&gt;
:map \c i{&lt;Esc&gt;ea}&lt;Esc&gt;</pre>
You need to type the \ and the p quickly after another, so that Vim knows they
belong together.</div>
<div class="old-help-para">The ":map" command (with no arguments) lists your current mappings.  At
least the ones for Normal mode.  More about mappings in section <a href="usr_40.html#40.1">40.1</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="05.4"></a><span class="help-tag">05.4</span>  	Adding a package<span class="help-heading-tags">			<a name="add-package"></a><span class="help-tag">add-package</span> <a name="vimball-install"></a><span class="help-tag">vimball-install</span></span></span></h2></div>
<div class="old-help-para">A package is a set of files that you can add to Vim.  There are two kinds of
packages: optional and automatically loaded on startup.</div>
<div class="old-help-para">The Vim distribution comes with a few packages that you can optionally use.
For example, the vimball plugin.  This plugin supports creating and using
vimballs (self-installing Vim plugin archives).</div>
<div class="old-help-para">To start using the vimball plugin, add one line to your vimrc file:<pre>packadd vimball</pre>
That's all!  You can also type the command to try it out.  Now you can find
help about this plugin:<pre>:help vimball</pre>
This works, because when <code>:packadd</code> loaded the plugin it also added the
package directory in <a href="options.html#'runtimepath'">'runtimepath'</a>, so that the help file can be found.  The
tags for vimball's help are already created.  If you need to generate the help
tags for a package, see the <code>:helptags</code> command.</div>
<div class="old-help-para">You can find packages on the Internet in various places.  It usually comes as
an archive or as a repository.  For an archive you can follow these steps:
	1. create the package directory:<pre>mkdir -p ~/.local/share/nvim/site/pack/fancy</pre></div>
<div class="old-help-para">	   "fancy" can be any name of your liking.  Use one that describes the
	   package.
	2. unpack the archive in that directory.  This assumes the top
	   directory in the archive is "start":<pre>   cd ~/.local/share/nvim/site/pack/fancy
unzip /tmp/fancy.zip</pre></div>
<div class="old-help-para">	   If the archive layout is different make sure that you end up with a
	   path like this:
<div class="help-column_heading">		~/.local/share/nvim/site/pack/fancy/start/fancytext/plugin/fancy.vim</div>	   Here "fancytext" is the name of the package, it can be anything
	   else.</div>
<div class="old-help-para">More information about packages can be found here: <a href="repeat.html#packages">packages</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="05.5"></a><span class="help-tag">05.5</span>  	Adding a plugin<span class="help-heading-tags">					<a name="add-plugin"></a><span class="help-tag">add-plugin</span> <a name="plugin"></a><span class="help-tag">plugin</span></span></span></h2></div>
<div class="old-help-para">Vim's functionality can be extended by adding plugins.  A plugin is nothing
more than a Vim script file that is loaded automatically when Vim starts.  You
can add a plugin very easily by dropping it in your plugin directory.</div>
<div class="old-help-para">There are two types of plugins:</div>
<div class="old-help-para">    global plugin: Used for all kinds of files
  filetype plugin: Only used for a specific type of file</div>
<div class="old-help-para">The global plugins will be discussed first, then the filetype ones
<a href="usr_05.html#add-filetype-plugin">add-filetype-plugin</a>.</div>
<div class="old-help-para"><h3 class="help-heading">GLOBAL PLUGINS<span class="help-heading-tags">						<a name="standard-plugin"></a><span class="help-tag">standard-plugin</span></span></h3></div>
<div class="old-help-para">When you start Vim, it will automatically load a number of global plugins.
You don't have to do anything for this.  They add functionality that most
people will want to use, but which was implemented as a Vim script instead of
being compiled into Vim.  You can find them listed in the help index
<a href="index.html#standard-plugin-list">standard-plugin-list</a>.  Also see <a href="starting.html#load-plugins">load-plugins</a>.</div>
<div class="old-help-para">							<a name="add-global-plugin"></a><code class="help-tag-right">add-global-plugin</code>
You can add a global plugin to add functionality that will always be present
when you use Vim.  There are only two steps for adding a global plugin:
1. Get a copy of the plugin.
2. Drop it in the right directory.</div>
<div class="old-help-para">GETTING A GLOBAL PLUGIN</div>
<div class="old-help-para">Where can you find plugins?
<div class="help-li" style=""> Some are always loaded, you can see them in the directory $VIMRUNTIME/plugin.
</div><div class="help-li" style=""> Some come with Vim.  You can find them in the directory $VIMRUNTIME/macros
  and its sub-directories and under $VIM/vimfiles/pack/dist/opt/.
</div><div class="help-li" style=""> Download from the net.  There is a large collection on <a href="https://www.vim.org">https://www.vim.org</a>.
</div><div class="help-li" style=""> They are sometimes posted in a Vim maillist.
</div><div class="help-li" style=""> You could write one yourself, see <a href="usr_41.html#write-plugin">write-plugin</a>.
</div></div>
<div class="old-help-para">USING A GLOBAL PLUGIN</div>
<div class="old-help-para">First read the text in the plugin itself to check for any special conditions.
Then copy the file to your plugin directory:</div>
<div class="old-help-para"><div class="help-column_heading">	system		plugin directory</div>	Unix		~/.local/share/nvim/site/plugin</div>
<div class="old-help-para">Example for Unix (assuming you didn't have a plugin directory yet):<pre>mkdir -p ~/.local/share/nvim/site/plugin
cp /tmp/yourplugin.vim ~/.local/share/nvim/site/plugin</pre>
That's all!  Now you can use the commands defined in this plugin.</div>
<div class="old-help-para">Instead of putting plugins directly into the plugin/ directory, you may
better organize them by putting them into subdirectories under plugin/.
As an example, consider using "~/.local/share/nvim/site/plugin/perl/*.vim" for
all your Perl plugins.</div>
<div class="old-help-para"><h3 class="help-heading">FILETYPE PLUGINS<span class="help-heading-tags">			<a name="add-filetype-plugin"></a><span class="help-tag">add-filetype-plugin</span> <a name="ftplugins"></a><span class="help-tag">ftplugins</span></span></h3></div>
<div class="old-help-para">The Vim distribution comes with a set of plugins for different filetypes that
you can start using with this command:<pre>:filetype plugin on</pre>
That's all!  See <a href="usr_05.html#vimrc-filetype">vimrc-filetype</a>.</div>
<div class="old-help-para">If you are missing a plugin for a filetype you are using, or you found a
better one, you can add it.  There are two steps for adding a filetype plugin:
1. Get a copy of the plugin.
2. Drop it in the right directory.</div>
<div class="old-help-para">GETTING A FILETYPE PLUGIN</div>
<div class="old-help-para">You can find them in the same places as the global plugins.  Watch out if the
type of file is mentioned, then you know if the plugin is a global or a
filetype one.  The scripts in $VIMRUNTIME/macros are global ones, the filetype
plugins are in $VIMRUNTIME/ftplugin.</div>
<div class="old-help-para">USING A FILETYPE PLUGIN					<a name="ftplugin-name"></a><code class="help-tag-right">ftplugin-name</code></div>
<div class="old-help-para">You can add a filetype plugin by dropping it in the right directory.  The
name of this directory is in the same directory mentioned above for global
plugins, but the last part is "ftplugin".  Suppose you have found a plugin for
the "stuff" filetype, and you are on Unix.  Then you can move this file to the
ftplugin directory:<pre>mkdir -p ~/.local/share/nvim/site/ftplugin
mv thefile ~/.local/share/nvim/site/ftplugin/stuff.vim</pre>
If that file already exists you already have a plugin for "stuff".  You might
want to check if the existing plugin doesn't conflict with the one you are
adding.  If it's OK, you can give the new one another name:<pre>mv thefile ~/.local/share/nvim/site/ftplugin/stuff_too.vim</pre>
The underscore is used to separate the name of the filetype from the rest,
which can be anything.  If you use "otherstuff.vim" it wouldn't work, it would
be loaded for the "otherstuff" filetype.</div>
<div class="old-help-para">The generic names for the filetype plugins are:<pre>ftplugin/&lt;filetype&gt;.vim
ftplugin/&lt;filetype&gt;_&lt;name&gt;.vim
ftplugin/&lt;filetype&gt;/&lt;name&gt;.vim</pre>
Here "&lt;name&gt;" can be any name that you prefer.
Examples for the "stuff" filetype on Unix:<pre>~/.local/share/nvim/site/ftplugin/stuff.vim
~/.local/share/nvim/site/ftplugin/stuff_def.vim
~/.local/share/nvim/site/ftplugin/stuff/header.vim</pre>
The <code>&lt;filetype&gt;</code> part is the name of the filetype the plugin is to be used for.
Only files of this filetype will use the settings from the plugin.  The <code>&lt;name&gt;</code>
part of the plugin file doesn't matter, you can use it to have several plugins
for the same filetype.  Note that it must end in ".vim" or ".lua".</div>
<div class="old-help-para">Further reading:
<a href="filetype.html#filetype-plugins">filetype-plugins</a>  	Documentation for the filetype plugins and information
			about how to avoid that mappings cause problems.
<a href="starting.html#load-plugins">load-plugins</a>  		When the global plugins are loaded during startup.
<a href="filetype.html#ftplugin-overrule">ftplugin-overrule</a>  	Overruling the settings from a global plugin.
<a href="usr_41.html#write-plugin">write-plugin</a>  		How to write a plugin script.
<a href="filetype.html#plugin-details">plugin-details</a>  	For more information about using plugins or when your
			plugin doesn't work.
<a href="filetype.html#new-filetype">new-filetype</a>  		How to detect a new file type.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="05.6"></a><span class="help-tag">05.6</span>  	Adding a help file<span class="help-heading-tags">		                   <a name="add-local-help"></a><span class="help-tag">add-local-help</span></span></span></h2></div>
<div class="old-help-para">If you are lucky, the plugin you installed also comes with a help file.  We
will explain how to install the help file, so that you can easily find help
for your new plugin.</div>
<div class="old-help-para">Let us suppose a plugin ("my-plugin"), which comes with a help file in a
non-standard place (it usually resides in a sub-folder called <code>doc/</code>).</div>
<div class="old-help-para">First, create a "doc" directory in one of the directories in <a href="options.html#'runtimepath'">'runtimepath'</a>:<pre>:!mkdir -p ~/.local/share/nvim/site/doc</pre>
Now, copy the help file to the "doc" directory:<pre>:!cp my-plugin/my-plugin-doc.txt ~/.local/share/nvim/site/doc</pre>
Here comes the trick, which allows you to jump to the subjects in the new help
file. Generate the local tags file with the <a href="helphelp.html#%3Ahelptags">:helptags</a> command:<pre>:helptags ~/.local/share/nvim/site/doc</pre>
You can see an entry for the local help file when you do:<pre>:help local-additions</pre>
The title lines from the local help files are automagically added to this
section.  There you can see which local help files have been added and jump to
them through the tag.</div>
<div class="old-help-para">For writing a local help file, see <a href="usr_41.html#write-local-help">write-local-help</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="05.7"></a><span class="help-tag">05.7</span>  	The option window</span></h2></div>
<div class="old-help-para">If you are looking for an option that does what you want, you can search in
the help files here: <a href="options.html#options">options</a>.  Another way is by using this command:<pre>:options</pre>
This opens a new window, with a list of options with a one-line explanation.
The options are grouped by subject.  Move the cursor to a subject and press
<code>&lt;Enter&gt;</code> to jump there.  Press <code>&lt;Enter&gt;</code> again to jump back.  Or use <code>CTRL-O</code>.</div>
<div class="old-help-para">You can change the value of an option.  For example, move to the "displaying
text" subject.  Then move the cursor down to this line:</div>
<div class="old-help-para"><div class="help-column_heading">	set wrap	nowrap</div></div>
<div class="old-help-para">When you hit <code>&lt;Enter&gt;</code>, the line will change to:</div>
<div class="old-help-para"><div class="help-column_heading">	set nowrap	wrap</div></div>
<div class="old-help-para">The option has now been switched off.</div>
<div class="old-help-para">Just above this line is a short description of the <a href="options.html#'wrap'">'wrap'</a> option.  Move the
cursor one line up to place it in this line.  Now hit <code>&lt;Enter&gt;</code> and you jump to
the full help on the <a href="options.html#'wrap'">'wrap'</a> option.</div>
<div class="old-help-para">For options that take a number or string argument you can edit the value.
Then press <code>&lt;Enter&gt;</code> to apply the new value.  For example, move the cursor a few
lines up to this line:</div>
<div class="old-help-para"><div class="help-column_heading">	set so=0</div></div>
<div class="old-help-para">Position the cursor on the zero with "$".  Change it into a five with "r5".
Then press <code>&lt;Enter&gt;</code> to apply the new value.  When you now move the cursor
around you will notice that the text starts scrolling before you reach the
border.  This is what the <a href="options.html#'scrolloff'">'scrolloff'</a> option does, it specifies an offset
from the window border where scrolling starts.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="05.8"></a><span class="help-tag">05.8</span>  	Often used options</span></h2></div>
<div class="old-help-para">There are an awful lot of options.  Most of them you will hardly ever use.
Some of the more useful ones will be mentioned here.  Don't forget you can
find more help on these options with the ":help" command, with single quotes
before and after the option name.  For example:<pre>:help 'wrap'</pre>
In case you have messed up an option value, you can set it back to the
default by putting an ampersand (&amp;) after the option name.  Example:<pre>:set iskeyword&amp;</pre>
<a name="_not-wrapping-lines"></a><h3 class="help-heading">NOT WRAPPING LINES</h3></div>
<div class="old-help-para">Vim normally wraps long lines, so that you can see all of the text.  Sometimes
it's better to let the text continue right of the window.  Then you need to
scroll the text left-right to see all of a long line.  Switch wrapping off
with this command:<pre>:set nowrap</pre>
Vim will automatically scroll the text when you move to text that is not
displayed.  To see a context of ten characters, do this:<pre>:set sidescroll=10</pre>
This doesn't change the text in the file, only the way it is displayed.</div>
<div class="old-help-para"><a name="_wrapping-movement-commands"></a><h3 class="help-heading">WRAPPING MOVEMENT COMMANDS</h3></div>
<div class="old-help-para">Most commands for moving around will stop moving at the start and end of a
line.  You can change that with the <a href="options.html#'whichwrap'">'whichwrap'</a> option.  This sets it to the
default value:<pre>:set whichwrap=b,s</pre>
This allows the <code>&lt;BS&gt;</code> key, when used in the first position of a line, to move
the cursor to the end of the previous line.  And the <code>&lt;Space&gt;</code> key moves from
the end of a line to the start of the next one.</div>
<div class="old-help-para">To allow the cursor keys <code>&lt;Left&gt;</code> and <code>&lt;Right&gt;</code> to also wrap, use this command:<pre>:set whichwrap=b,s,&lt;,&gt;</pre>
This is still only for Normal mode.  To let <code>&lt;Left&gt;</code> and <code>&lt;Right&gt;</code> do this in
Insert mode as well:<pre>:set whichwrap=b,s,&lt;,&gt;,[,]</pre>
There are a few other flags that can be added, see <a href="options.html#'whichwrap'">'whichwrap'</a>.</div>
<div class="old-help-para"><a name="_viewing-tabs"></a><h3 class="help-heading">VIEWING TABS</h3></div>
<div class="old-help-para">When there are tabs in a file, you cannot see where they are.  To make them
visible:<pre>:set list</pre>
Now every tab is displayed as ^I.  And a $ is displayed at the end of each
line, so that you can spot trailing spaces that would otherwise go unnoticed.
   A disadvantage is that this looks ugly when there are many Tabs in a file.
If you have a color terminal, or are using the GUI, Vim can show the spaces
and tabs as highlighted characters.  Use the <a href="options.html#'listchars'">'listchars'</a> option:<pre>:set listchars=tab:&gt;-,trail:-</pre>
Now every tab will be displayed as "&gt;---" (with more or less "-") and trailing
white space as "-".  Looks a lot better, doesn't it?</div>
<div class="old-help-para"><a name="_keywords"></a><h3 class="help-heading">KEYWORDS</h3></div>
<div class="old-help-para">The <a href="options.html#'iskeyword'">'iskeyword'</a> option specifies which characters can appear in a word:<pre>:set iskeyword</pre></div>
<div class="old-help-para"><div class="help-column_heading">	  iskeyword=@,48-57,_,192-255</div></div>
<div class="old-help-para">The "@" stands for all alphabetic letters.  "48-57" stands for ASCII
characters 48 to 57, which are the numbers 0 to 9.  "192-255" are the
printable latin characters.
   Sometimes you will want to include a dash in keywords, so that commands
like "w" consider "upper-case" to be one word.  You can do it like this:<pre>:set iskeyword+=-
:set iskeyword</pre></div>
<div class="old-help-para"><div class="help-column_heading">	  iskeyword=@,48-57,_,192-255,-</div></div>
<div class="old-help-para">If you look at the new value, you will see that Vim has added a comma for you.
   To remove a character use "-=".  For example, to remove the underscore:<pre>:set iskeyword-=_
:set iskeyword</pre></div>
<div class="old-help-para"><div class="help-column_heading">	  iskeyword=@,48-57,192-255,-</div></div>
<div class="old-help-para">This time a comma is automatically deleted.</div>
<div class="old-help-para"><a name="_room-for-messages"></a><h3 class="help-heading">ROOM FOR MESSAGES</h3></div>
<div class="old-help-para">When Vim starts there is one line at the bottom that is used for messages.
When a message is long, it is either truncated, thus you can only see part of
it, or the text scrolls and you have to press <code>&lt;Enter&gt;</code> to continue.
   You can set the <a href="options.html#'cmdheight'">'cmdheight'</a> option to the number of lines used for
messages.  Example:<pre>:set cmdheight=3</pre>
This does mean there is less room to edit text, thus it's a compromise.</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Next chapter: <a href="usr_06.html#usr_06.txt">usr_06.txt</a>  Using syntax highlighting</div>
<div class="old-help-para">Copyright: see <a href="usr_01.html#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  