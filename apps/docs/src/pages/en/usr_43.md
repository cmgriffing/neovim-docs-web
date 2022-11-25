---
title:  Usr_43
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_43.txt"></a><a name="43.1"></a><h1> Usr_43</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_43.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">			       Using filetypes</div>
<div class="old-help-para">When you are editing a file of a certain type, for example a C program or a
shell script, you often use the same option settings and mappings.  You
quickly get tired of manually setting these each time.  This chapter explains
how to do it automatically.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_43#43.1">43.1</a>  	Plugins for a filetype
<a href="/neovim-docs-web/en/usr_43#43.2">43.2</a>  	Adding a filetype</div>
<div class="old-help-para">     Next chapter: <a href="/neovim-docs-web/en/usr_44#usr_44.txt">usr_44.txt</a>  Your own syntax highlighted
 Previous chapter: <a href="/neovim-docs-web/en/usr_42#usr_42.txt">usr_42.txt</a>  Add new menus
Table of contents: <a href="/neovim-docs-web/en/usr_toc#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	Plugins for a filetype<span class="help-heading-tags">				<a name="filetype-plugin"></a><span class="help-tag">filetype-plugin</span></span></h2></div>
<div class="old-help-para">How to start using filetype plugins has already been discussed here:
<a href="/neovim-docs-web/en/usr_05#add-filetype-plugin">add-filetype-plugin</a>.  But you probably are not satisfied with the default
settings, because they have been kept minimal.  Suppose that for C files you
want to set the <a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a> option to 4 and define a mapping to insert a
three-line comment.  You do this with only two steps:</div>
<div class="old-help-para">							<a name="your-runtime-dir"></a><code class="help-tag-right">your-runtime-dir</code>
1. Create your own runtime directory.  On Unix this usually is
   "~/.config/nvim".  In this directory create the "ftplugin" directory:<pre>mkdir -p ~/.config/nvim/ftplugin</pre></div>
<div class="old-help-para">   When you are not on Unix, check the value of the <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a> option to
   see where Vim will look for the "ftplugin" directory:<pre>set runtimepath?</pre></div>
<div class="old-help-para">  You would normally use the first directory name (before the first comma).
   You might want to prepend a directory name to the <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a> option in
   your <a href="/neovim-docs-web/en/starting#init.vim">init.vim</a> file if you don't like the default value.</div>
<div class="old-help-para">2. Create the file "~/.config/nvim/ftplugin/c.vim", with the contents:<pre>setlocal softtabstop=4
noremap &lt;buffer&gt; &lt;LocalLeader&gt;c o/**************&lt;CR&gt;&lt;CR&gt;/&lt;Esc&gt;
let b:undo_ftplugin = "setl softtabstop&lt; | unmap &lt;buffer&gt; &lt;LocalLeader&gt;c"</pre>
Try editing a C file.  You should notice that the <a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a> option is set
to 4.  But when you edit another file it's reset to the default zero.  That is
because the ":setlocal" command was used.  This sets the <a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a> option
only locally to the buffer.  As soon as you edit another buffer, it will be
set to the value set for that buffer.  For a new buffer it will get the
default value or the value from the last ":set" command.</div>
<div class="old-help-para">Likewise, the mapping for "\c" will disappear when editing another buffer.
The ":map <code>&lt;buffer&gt;</code>" command creates a mapping that is local to the current
buffer.  This works with any mapping command: ":map!", ":vmap", etc.  The
<a href="/neovim-docs-web/en/map#%3CLocalLeader%3E">&lt;LocalLeader&gt;</a> in the mapping is replaced with the value of the
"maplocalleader" variable.</div>
<div class="old-help-para">The line to set b:undo_ftplugin is for when the filetype is set to another
value.  In that case you will want to undo your preferences.  The
b:undo_ftplugin variable is executed as a command. Watch out for characters
with a special meaning inside a string, such as a backslash.</div>
<div class="old-help-para">You can find examples for filetype plugins in this directory:<pre>$VIMRUNTIME/ftplugin/</pre>
More details about writing a filetype plugin can be found here:
<a href="/neovim-docs-web/en/usr_41#write-plugin">write-plugin</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="43.2"></a><span class="help-tag">43.2</span>  	Adding a filetype</span></h2></div>
<div class="old-help-para">If you are using a type of file that is not recognized by Vim, this is how to
get it recognized.  You need a runtime directory of your own.  See
<a href="/neovim-docs-web/en/usr_43#your-runtime-dir">your-runtime-dir</a> above.</div>
<div class="old-help-para">Create a file "filetype.vim" which contains an autocommand for your filetype.
(Autocommands were explained in section <a href="/neovim-docs-web/en/usr_40#40.3">40.3</a>.)  Example:<pre>augroup filetypedetect
au BufNewFile,BufRead *.xyz        setf xyz
augroup END</pre>
This will recognize all files that end in ".xyz" as the "xyz" filetype.  The
":augroup" commands put this autocommand in the "filetypedetect" group.  This
allows removing all autocommands for filetype detection when doing ":filetype
off".  The "setf" command will set the <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> option to its argument,
unless it was set already.  This will make sure that <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> isn't set
twice.</div>
<div class="old-help-para">You can use many different patterns to match the name of your file.  Directory
names can also be included.  See <a href="/neovim-docs-web/en/autocmd#autocmd-pattern">autocmd-pattern</a>.  For example, the files
under "/usr/share/scripts/" are all "ruby" files, but don't have the expected
file name extension.  Adding this to the example above:<pre>augroup filetypedetect
au BufNewFile,BufRead *.xyz                        setf xyz
au BufNewFile,BufRead /usr/share/scripts/*        setf ruby
augroup END</pre>
However, if you now edit a file /usr/share/scripts/README.txt, this is not a
ruby file.  The danger of a pattern ending in "*" is that it quickly matches
too many files.  To avoid trouble with this, put the filetype.vim file in
another directory, one that is at the end of <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.  For Unix for
example, you could use "~/.config/nvim/after/filetype.vim".
   You now put the detection of text files in ~/.config/nvim/filetype.vim:<pre>augroup filetypedetect
au BufNewFile,BufRead *.txt                        setf text
augroup END</pre>
That file is found in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a> first.  Then use this in
~/.config/nvim/after/filetype.vim, which is found last:<pre>augroup filetypedetect
au BufNewFile,BufRead /usr/share/scripts/*        setf ruby
augroup END</pre>
What will happen now is that Vim searches for "filetype.vim" files in each
directory in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.  First ~/.config/nvim/filetype.vim is found.  The
autocommand to catch.txt files is defined there.  Then Vim finds the
filetype.vim file in $VIMRUNTIME, which is halfway <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.  Finally
~/.config/nvim/after/filetype.vim is found and the autocommand for detecting
ruby files in /usr/share/scripts is added.
   When you now edit /usr/share/scripts/README.txt, the autocommands are
checked in the order in which they were defined.  The.txt pattern matches,
thus "setf text" is executed to set the filetype to "text".  The pattern for
ruby matches too, and the "setf ruby" is executed.  But since <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> was
already set to "text", nothing happens here.
   When you edit the file /usr/share/scripts/foobar the same autocommands are
checked.  Only the one for ruby matches and "setf ruby" sets <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> to
ruby.</div>
<div class="old-help-para"><a name="_recognizing-by-contents"></a><h3 class="help-heading">RECOGNIZING BY CONTENTS</h3></div>
<div class="old-help-para">If your file cannot be recognized by its file name, you might be able to
recognize it by its contents.  For example, many script files start with a
line like:</div>
<div class="old-help-para"><div class="help-column_heading">	#!/bin/xyz</div></div>
<div class="old-help-para">To recognize this script create a file "scripts.vim" in your runtime directory
(same place where filetype.vim goes).  It might look like this:<pre>if did_filetype()
  finish
endif
if getline(1) =~ '^#!.*[/\\]xyz\&gt;'
  setf xyz
endif</pre>
The first check with did_filetype() is to avoid that you will check the
contents of files for which the filetype was already detected by the file
name.  That avoids wasting time on checking the file when the "setf" command
won't do anything.
   The scripts.vim file is sourced by an autocommand in the default
filetype.vim file.  Therefore, the order of checks is:</div>
<div class="old-help-para">	1. filetype.vim files before $VIMRUNTIME in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>
	2. first part of $VIMRUNTIME/filetype.vim
	3. all scripts.vim files in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>
	4. remainder of $VIMRUNTIME/filetype.vim
	5. filetype.vim files after $VIMRUNTIME in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a></div>
<div class="old-help-para">If this is not sufficient for you, add an autocommand that matches all files
and sources a script or executes a function to check the contents of the file.</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Next chapter: <a href="/neovim-docs-web/en/usr_44#usr_44.txt">usr_44.txt</a>  Your own syntax highlighted</div>
<div class="old-help-para">Copyright: see <a href="/neovim-docs-web/en/usr_01#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  