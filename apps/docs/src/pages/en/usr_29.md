---
title:  Usr_29
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_29.txt"></a><a name="29.1"></a><h1> Usr_29</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_29.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">			    Moving through programs</div>
<div class="old-help-para">The creator of Vim is a computer programmer.  It's no surprise that Vim
contains many features to aid in writing programs.  Jump around to find where
identifiers are defined and used.  Preview declarations in a separate window.
There is more in the next chapter.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_29#29.1">29.1</a>  	Using tags
<a href="/neovim-docs-web/en/usr_29#29.2">29.2</a>  	The preview window
<a href="/neovim-docs-web/en/usr_29#29.3">29.3</a>  	Moving through a program
<a href="/neovim-docs-web/en/usr_29#29.4">29.4</a>  	Finding global identifiers
<a href="/neovim-docs-web/en/usr_29#29.5">29.5</a>  	Finding local identifiers</div>
<div class="old-help-para">     Next chapter: <a href="/neovim-docs-web/en/usr_30#usr_30.txt">usr_30.txt</a>  Editing programs
 Previous chapter: <a href="/neovim-docs-web/en/usr_28#usr_28.txt">usr_28.txt</a>  Folding
Table of contents: <a href="/neovim-docs-web/en/usr_toc#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	Using tags</h2></div>
<div class="old-help-para">What is a tag?  It is a location where an identifier is defined.  An example
is a function definition in a C or C++ program.  A list of tags is kept in a
tags file.  This can be used by Vim to directly jump from any place to the
tag, the place where an identifier is defined.
   To generate the tags file for all C files in the current directory, use the
following command:<pre>ctags *.c</pre>
"ctags" is a separate program.  Most Unix systems already have it installed.
If you do not have it yet, you can find Universal ctags at:
<div class="help-column_heading">	<a href="https://ctags.io">https://ctags.io</a></div></div>
<div class="old-help-para">Universal ctags is preferred, Exuberant ctags is no longer being developed.</div>
<div class="old-help-para">Now when you are in Vim and you want to go to a function definition, you can
jump to it by using the following command:<pre>:tag startlist</pre>
This command will find the function "startlist" even if it is in another file.
   The <code>CTRL-]</code> command jumps to the tag of the word that is under the cursor.
This makes it easy to explore a tangle of C code.  Suppose, for example, that
you are in the function "write_block".  You can see that it calls
"write_line".  But what does "write_line" do?  By placing the cursor on the
call to "write_line" and pressing <code>CTRL-]</code>, you jump to the definition of this
function.
   The "write_line" function calls "write_char".  You need to figure out what
it does.  So you position the cursor over the call to "write_char" and press
<code>CTRL-]</code>.  Now you are at the definition of "write_char".</div>
<div class="old-help-para">	+-------------------------------------+
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_29.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_29.html%0D%0DContext%3A%0D%0D%60%60%60%0DCTRL-%5D.%20%20Now%20you%20are%20at%20the%20definition%20of%20%22write_char%22.%0A%0A%09%2B-------------------------------------%2B%0A%09%7Cvoid%20write_block(char%20%2A%2As%3B%20int%20cnt)%20%20%7C%0A%09%7C%7B%09%09%09%09%20%20%20%20%20%20%7C%0A%09%7C%20%20%20int%20i%3B%09%09%09%20%20%20%20%20%20%7C%0A%09%7C%20%20%20for%20(i%20%3D%200%3B%20i%20%3C%20cnt%3B%20%2B%2Bi)%09%20%20%20%20%20%20%7C%0D%60%60%60">void</a> write_block(char **s; int cnt)  |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_29.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_29.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%09%2B-------------------------------------%2B%0A%09%7Cvoid%20write_block(char%20%2A%2As%3B%20int%20cnt)%20%20%7C%0A%09%7C%7B%09%09%09%09%20%20%20%20%20%20%7C%0A%09%7C%20%20%20int%20i%3B%09%09%09%20%20%20%20%20%20%7C%0A%09%7C%20%20%20for%20(i%20%3D%200%3B%20i%20%3C%20cnt%3B%20%2B%2Bi)%09%20%20%20%20%20%20%7C%0A%09%7C%20%20%20%20%20%20write_line(s%5Bi%5D)%3B%09%20%20%20%20%20%20%7C%0D%60%60%60">{</a>				      |
	|   int i;			      |
	|   for (i = 0; i &lt; cnt; ++i)	      |
	|      write_line(s[i]);	      |
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_29.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_29.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7C%20%20%20int%20i%3B%09%09%09%20%20%20%20%20%20%7C%0A%09%7C%20%20%20for%20(i%20%3D%200%3B%20i%20%3C%20cnt%3B%20%2B%2Bi)%09%20%20%20%20%20%20%7C%0A%09%7C%20%20%20%20%20%20write_line(s%5Bi%5D)%3B%09%20%20%20%20%20%20%7C%0A%09%7C%7D%09%20%20%20%20%7C%09%09%09%20%20%20%20%20%20%7C%0A%09%2B-----------%7C-------------------------%2B%0A%09%09%20%20%20%20%7C%0A%09%20%20%20%20%20CTRL-%5D%20%7C%0D%60%60%60">}</a>	    |			      |
	+-----------|-------------------------+
		    |
	     <code>CTRL-]</code> |
		    |	 +----------------------------+
		    +--&gt; |<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_29.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_29.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%09%20%20%20%20%7C%0A%09%20%20%20%20%20CTRL-%5D%20%7C%0A%09%09%20%20%20%20%7C%09%20%2B----------------------------%2B%0A%09%09%20%20%20%20%2B--%3E%20%7Cvoid%20write_line(char%20%2As)%20%20%20%20%7C%0A%09%09%09%20%7C%7B%09%09%09%20%20%20%20%20%20%7C%0A%09%09%09%20%7C%20%20%20while%20(%2As%20%21%3D%200)%09%20%20%20%20%20%20%7C%0A%09%09%09%20%7C%09write_char(%2As%2B%2B)%3B%20%20%20%20%20%7C%0D%60%60%60">void</a> write_line(chars)    |
			 |<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_29.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_29.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%20%20%20%20%20CTRL-%5D%20%7C%0A%09%09%20%20%20%20%7C%09%20%2B----------------------------%2B%0A%09%09%20%20%20%20%2B--%3E%20%7Cvoid%20write_line(char%20%2As)%20%20%20%20%7C%0A%09%09%09%20%7C%7B%09%09%09%20%20%20%20%20%20%7C%0A%09%09%09%20%7C%20%20%20while%20(%2As%20%21%3D%200)%09%20%20%20%20%20%20%7C%0A%09%09%09%20%7C%09write_char(%2As%2B%2B)%3B%20%20%20%20%20%7C%0A%09%09%09%20%7C%7D%09%20%20%7C%09%09%20%20%20%20%20%20%7C%0D%60%60%60">{</a>			      |
			 |   while (s != 0)	      |
			 |	write_char(s++);     |
			 |<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_29.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_29.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%09%09%20%7C%7B%09%09%09%20%20%20%20%20%20%7C%0A%09%09%09%20%7C%20%20%20while%20(%2As%20%21%3D%200)%09%20%20%20%20%20%20%7C%0A%09%09%09%20%7C%09write_char(%2As%2B%2B)%3B%20%20%20%20%20%7C%0A%09%09%09%20%7C%7D%09%20%20%7C%09%09%20%20%20%20%20%20%7C%0A%09%09%09%20%2B--------%7C-------------------%2B%0A%09%09%09%09%20%20%7C%0A%09%09%09%20%20%20CTRL-%5D%20%7C%0D%60%60%60">}</a>	  |		      |
			 +--------|-------------------+
				  |
			   <code>CTRL-]</code> |
				  |    +------------------------------------+
				  +--&gt; |<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_29.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_29.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%09%09%09%20%20%7C%0A%09%09%09%20%20%20CTRL-%5D%20%7C%0A%09%09%09%09%20%20%7C%20%20%20%20%2B------------------------------------%2B%0A%09%09%09%09%20%20%2B--%3E%20%7Cvoid%20write_char(char%20c)%09%09%20%20%20%20%7C%0A%09%09%09%09%20%20%20%20%20%20%20%7C%7B%09%09%09%09%20%20%20%20%7C%0A%09%09%09%09%20%20%20%20%20%20%20%7C%20%20%20%20putchar((int)(unsigned%20char)c)%3B%20%7C%0A%09%09%09%09%20%20%20%20%20%20%20%7C%7D%09%09%09%09%20%20%20%20%7C%0D%60%60%60">void</a> write_char(char c)		    |
				       |<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_29.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_29.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%09%09%20%20%20CTRL-%5D%20%7C%0A%09%09%09%09%20%20%7C%20%20%20%20%2B------------------------------------%2B%0A%09%09%09%09%20%20%2B--%3E%20%7Cvoid%20write_char(char%20c)%09%09%20%20%20%20%7C%0A%09%09%09%09%20%20%20%20%20%20%20%7C%7B%09%09%09%09%20%20%20%20%7C%0A%09%09%09%09%20%20%20%20%20%20%20%7C%20%20%20%20putchar((int)(unsigned%20char)c)%3B%20%7C%0A%09%09%09%09%20%20%20%20%20%20%20%7C%7D%09%09%09%09%20%20%20%20%7C%0A%09%09%09%09%20%20%20%20%20%20%20%2B------------------------------------%2B%0D%60%60%60">{</a>				    |
				       |    putchar((int)(unsigned char)c); |
				       |<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+usr_29.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/usr_29.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%09%09%09%20%20%2B--%3E%20%7Cvoid%20write_char(char%20c)%09%09%20%20%20%20%7C%0A%09%09%09%09%20%20%20%20%20%20%20%7C%7B%09%09%09%09%20%20%20%20%7C%0A%09%09%09%09%20%20%20%20%20%20%20%7C%20%20%20%20putchar((int)(unsigned%20char)c)%3B%20%7C%0A%09%09%09%09%20%20%20%20%20%20%20%7C%7D%09%09%09%09%20%20%20%20%7C%0A%09%09%09%09%20%20%20%20%20%20%20%2B------------------------------------%2B%0A%0AThe%20%22%3Atags%22%20command%20shows%20the%20list%20of%20tags%20that%20you%20traversed%20through%3A%0D%60%60%60">}</a>				    |
				       +------------------------------------+</div>
<div class="old-help-para">The ":tags" command shows the list of tags that you traversed through:</div>
<div class="old-help-para">	:tags
<div class="help-column_heading">	  # TO tag	   FROM line  in file/text</div><div class="help-column_heading">	  1  1 write_line	   8  write_block.c</div><div class="help-column_heading">	  2  1 write_char	   7  write_line.c</div><div class="help-column_heading">	&gt;</div>Now to go back.  The <code>CTRL-T</code> command goes to the preceding tag.  In the example
above you get back to the "write_line" function, in the call to "write_char".
   This command takes a count argument that indicates how many tags to jump
back.  You have gone forward, and now back.  Let's go forward again.  The
following command goes to the tag on top of the list:<pre>:tag</pre>
You can prefix it with a count and jump forward that many tags.  For example:
":3tag".  <code>CTRL-T</code> also can be preceded with a count.
   These commands thus allow you to go down a call tree with <code>CTRL-]</code> and back
up again with <code>CTRL-T</code>.  Use ":tags" to find out where you are.</div>
<div class="old-help-para"><a name="_split-windows"></a><h3 class="help-heading">SPLIT WINDOWS</h3></div>
<div class="old-help-para">The ":tag" command replaces the file in the current window with the one
containing the new function.  But suppose you want to see not only the old
function but also the new one?  You can split the window using the ":split"
command followed by the ":tag" command.  Vim has a shorthand command that does
both:<pre>:stag tagname</pre>
To split the current window and jump to the tag under the cursor use this
command:<pre>CTRL-W ]</pre>
If a count is specified, the new window will be that many lines high.</div>
<div class="old-help-para"><a name="_more-tags-files"></a><h3 class="help-heading">MORE TAGS FILES</h3></div>
<div class="old-help-para">When you have files in many directories, you can create a tags file in each of
them.  Vim will then only be able to jump to tags within that directory.
   To find more tags files, set the <a href="/neovim-docs-web/en/options#'tags'">'tags'</a> option to include all the relevant
tags files.  Example:<pre>:set tags=./tags,./../tags,./*/tags</pre>
This finds a tags file in the same directory as the current file, one
directory level higher and in all subdirectories.
   This is quite a number of tags files, but it may still not be enough.  For
example, when editing a file in "~/proj/src", you will not find the tags file
"~/proj/sub/tags".  For this situation Vim offers to search a whole directory
tree for tags files.  Example:<pre>:set tags=~/proj/**/tags</pre>
<a name="_one-tags-file"></a><h3 class="help-heading">ONE TAGS FILE</h3></div>
<div class="old-help-para">When Vim has to search many places for tags files, you can hear the disk
rattling.  It may get a bit slow.  In that case it's better to spend this
time while generating one big tags file.  You might do this overnight.
   This requires the Universal or Exuberant ctags program, mentioned above.
It offers an argument to search a whole directory tree:<pre>cd ~/proj
ctags -R .</pre>
The nice thing about this is that Universal/Exuberant ctags recognizes various
file types.  Thus this doesn't work just for C and C++ programs, also for
Eiffel and even Vim scripts.  See the ctags documentation to tune this.
   Now you only need to tell Vim where your big tags file is:<pre>:set tags=~/proj/tags</pre>
<a name="_multiple-matches"></a><h3 class="help-heading">MULTIPLE MATCHES</h3></div>
<div class="old-help-para">When a function is defined multiple times (or a method in several classes),
the ":tag" command will jump to the first one.  If there is a match in the
current file, that one is used first.
   You can now jump to other matches for the same tag with:<pre>:tnext</pre>
Repeat this to find further matches.  If there are many, you can select which
one to jump to:<pre>:tselect tagname</pre>
Vim will present you with a list of choices:</div>
<div class="old-help-para"><div class="help-column_heading">	  # pri kind tag	       file</div><div class="help-column_heading">	  1 F	f    mch_init	       os_amiga.c</div><div class="help-column_heading">		       mch_init()</div><div class="help-column_heading">	  2 F	f    mch_init	       os_mac.c</div><div class="help-column_heading">		       mch_init()</div><div class="help-column_heading">	  3 F	f    mch_init	       os_msdos.c</div><div class="help-column_heading">		       mch_init(void)</div><div class="help-column_heading">	  4 F	f    mch_init	       os_riscos.c</div><div class="help-column_heading">		       mch_init()</div><div class="help-column_heading">	Enter nr of choice (<code>&lt;CR&gt;</code> to abort):</div></div>
<div class="old-help-para">You can now enter the number (in the first column) of the match that you would
like to jump to.  The information in the other columns give you a good idea of
where the match is defined.</div>
<div class="old-help-para">To move between the matching tags, these commands can be used:</div>
<div class="old-help-para">	:tfirst			go to first match
	:[count]tprevious	go to [count] previous match
	:[count]tnext		go to [count] next match
	:tlast			go to last match</div>
<div class="old-help-para">If [count] is omitted then one is used.</div>
<div class="old-help-para"><a name="_guessing-tag-names"></a><h3 class="help-heading">GUESSING TAG NAMES</h3></div>
<div class="old-help-para">Command line completion is a good way to avoid typing a long tag name.  Just
type the first bit and press <code>&lt;Tab&gt;</code>:<pre>:tag write_&lt;Tab&gt;</pre>
You will get the first match.  If it's not the one you want, press <code>&lt;Tab&gt;</code> until
you find the right one.
   Sometimes you only know part of the name of a function.  Or you have many
tags that start with the same string, but end differently.  Then you can tell
Vim to use a pattern to find the tag.
   Suppose you want to jump to a tag that contains "block".  First type
this:<pre>:tag /block</pre>
Now use command line completion: press <code>&lt;Tab&gt;</code>.  Vim will find all tags that
contain "block" and use the first match.
   The "/" before a tag name tells Vim that what follows is not a literal tag
name, but a pattern.  You can use all the items for search patterns here.  For
example, suppose you want to select a tag that starts with "write_":<pre>:tselect /^write_</pre>
The "^" specifies that the tag starts with "write_".  Otherwise it would also
be found halfway in a tag name.  Similarly "$" at the end makes sure the
pattern matches until the end of a tag.</div>
<div class="old-help-para">A TAGS BROWSER</div>
<div class="old-help-para">Since <code>CTRL-]</code> takes you to the definition of the identifier under the cursor,
you can use a list of identifier names as a table of contents.  Here is an
example.
   First create a list of identifiers (this requires Universal or Exuberant
ctags):<pre>ctags --c-types=f -f functions *.c</pre>
Now start Vim without a file, and edit this file in Vim, in a vertically split
window:<pre>vim
:vsplit functions</pre>
The window contains a list of all the functions.  There is some more stuff,
but you can ignore that.  Do ":setlocal ts=99" to clean it up a bit.
   In this window, define a mapping:<pre>:nnoremap &lt;buffer&gt; &lt;CR&gt; 0ye&lt;C-W&gt;w:tag &lt;C-R&gt;"&lt;CR&gt;</pre>
Move the cursor to the line that contains the function you want to go to.
Now press <code>&lt;Enter&gt;</code>.  Vim will go to the other window and jump to the selected
function.</div>
<div class="old-help-para"><a name="_related-items"></a><h3 class="help-heading">RELATED ITEMS</h3></div>
<div class="old-help-para">To make case in tag names be ignored, you can set <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> while leaving
<a href="/neovim-docs-web/en/options#'tagcase'">'tagcase'</a> as "followic", or set <a href="/neovim-docs-web/en/options#'tagcase'">'tagcase'</a> to "ignore".</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'tagbsearch'">'tagbsearch'</a> option tells if the tags file is sorted or not.  The default
is to assume a sorted tags file, which makes a tags search a lot faster, but
doesn't work if the tags file isn't sorted.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'taglength'">'taglength'</a> option can be used to tell Vim the number of significant
characters in a tag.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="29.2"></a><span class="help-tag">29.2</span>  	The preview window</span></h2></div>
<div class="old-help-para">When you edit code that contains a function call, you need to use the correct
arguments.  To know what values to pass you can look at how the function is
defined.  The tags mechanism works very well for this.  Preferably the
definition is displayed in another window.  For this the preview window can be
used.
   To open a preview window to display the function "write_char":<pre>:ptag write_char</pre>
Vim will open a window, and jumps to the tag "write_char".  Then it takes you
back to the original position.  Thus you can continue typing without the need
to use a <code>CTRL-W</code> command.
   If the name of a function appears in the text, you can get its definition
in the preview window with:<pre>CTRL-W }</pre>
There is a script that automatically displays the text where the word under
the cursor was defined.  See <a href="/neovim-docs-web/en/windows#CursorHold-example">CursorHold-example</a>.</div>
<div class="old-help-para">To close the preview window use this command:<pre>:pclose</pre>
To edit a specific file in the preview window, use ":pedit".  This can be
useful to edit a header file, for example:<pre>:pedit defs.h</pre>
Finally, ":psearch" can be used to find a word in the current file and any
included files and display the match in the preview window.  This is
especially useful when using library functions, for which you do not have a
tags file.  Example:<pre>:psearch popen</pre>
This will show the "stdio.h" file in the preview window, with the function
prototype for popen():</div>
<div class="old-help-para">FILEpopen __P((const char, const char));</div>
<div class="old-help-para">You can specify the height of the preview window, when it is opened, with the
<a href="/neovim-docs-web/en/options#'previewheight'">'previewheight'</a> option.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="29.3"></a><span class="help-tag">29.3</span>  	Moving through a program</span></h2></div>
<div class="old-help-para">Since a program is structured, Vim can recognize items in it.  Specific
commands can be used to move around.
   C programs often contain constructs like this:</div>
<div class="old-help-para"><div class="help-column_heading">	#ifdef USE_POPEN</div><div class="help-column_heading">	    fd = popen("ls", "r")</div><div class="help-column_heading">	#else</div><div class="help-column_heading">	    fd = fopen("tmp", "w")</div><div class="help-column_heading">	#endif</div></div>
<div class="old-help-para">But then much longer, and possibly nested.  Position the cursor on the
"#ifdef" and press %.  Vim will jump to the "#else".  Pressing % again takes
you to the "#endif".  Another % takes you to the "#ifdef" again.
   When the construct is nested, Vim will find the matching items.  This is a
good way to check if you didn't forget an "#endif".
   When you are somewhere inside a "#if" - "#endif", you can jump to the start
of it with:<pre>[#</pre>
If you are not after a "#if" or "#ifdef" Vim will beep.  To jump forward to
the next "#else" or "#endif" use:<pre>]#</pre>
These two commands skip any "#if" - "#endif" blocks that they encounter.
Example:</div>
<div class="old-help-para"><div class="help-column_heading">	#if defined(HAS_INC_H)</div><div class="help-column_heading">	    a = a + inc();</div><div class="help-column_heading">	# ifdef USE_THEME</div><div class="help-column_heading">	    a += 3;</div><div class="help-column_heading">	# endif</div><div class="help-column_heading">	    set_width(a);</div></div>
<div class="old-help-para">With the cursor in the last line, "[#" moves to the first line.  The "#ifdef"
<div class="help-li" style=""> "#endif" block in the middle is skipped.
</div></div>
<div class="old-help-para"><a name="_moving-in-code-blocks"></a><h3 class="help-heading">MOVING IN CODE BLOCKS</h3></div>
<div class="old-help-para">In C code blocks are enclosed in {}.  These can get pretty long.  To move to
the start of the outer block use the "[[" command.  Use "][" to find the end.
This assumes that the "{" and "}" are in the first column.
   The "[{" command moves to the start of the current block.  It skips over
pairs of {} at the same level.  "]}" jumps to the end.
   An overview:</div>
<div class="old-help-para">			function(int a)
	   +-&gt;		{
	   |		    if (a)
	   |	   +-&gt;	    {
	[[ |	   |		for (;;)	       --+
	   |	   |	  +-&gt;	{			 |
	   |	[{ |	  |	    foo(32);		 |     --+
	   |	   |   [{ |	    if (bar(a))  --+	 | ]}	 |
	   +--	   |	  +--		break;	   | ]}  |	 |
		   |		}		 &lt;-+	 |	 | ][
		   +--		foobar(a)		 |	 |
			    }			       &lt;-+	 |
			}				       &lt;-+</div>
<div class="old-help-para">When writing C++ or Java, the outer {} block is for the class.  The next level
of {} is for a method.  When somewhere inside a class use "[m" to find the
previous start of a method.  "]m" finds the next start of a method.</div>
<div class="old-help-para">Additionally, "[]" moves backward to the end of a function and "]]" moves
forward to the start of the next function.  The end of a function is defined
by a "}" in the first column.</div>
<div class="old-help-para">				int func1(void)
				{
					return 1;
		  +----------&gt;  }
		  |
	      []  |		int func2(void)
		  |	   +-&gt;	{
		  |    [[  |		if (flag)
	start	  +--	   +--			return flag;
		  |    ][  |		return 2;
		  |	   +-&gt;	}
	      ]]  |
		  |		int func3(void)
		  +----------&gt;	{
					return 3;
				}</div>
<div class="old-help-para">Don't forget you can also use "%" to move between matching (), {} and [].
That also works when they are many lines apart.</div>
<div class="old-help-para"><a name="_moving-in-braces"></a><h3 class="help-heading">MOVING IN BRACES</h3></div>
<div class="old-help-para">The "[(" and "])" commands work similar to "[{" and "]}", except that they
work on () pairs instead of {} pairs.
<pre>[(</pre></div>
<div class="old-help-para">		    &lt;--------------------------------
			      &lt;-------
<div class="help-column_heading">		if (a == b &amp;&amp; (c == d || (e &gt; f)) &amp;&amp; x &gt; y)</div>				  --------------&gt;
			  --------------------------------&gt;<pre>])</pre>
<a name="_moving-in-comments"></a><h3 class="help-heading">MOVING IN COMMENTS</h3></div>
<div class="old-help-para">To move back to the start of a comment use "[/".  Move forward to the end of a
comment with "]/".  This only works for /* -/ comments.</div>
<div class="old-help-para">	  +-&gt;	  +-&gt; /*
	  |    [/ |    * A comment about      --+
       [/ |	  +--  * wonderful life.	| ]/
	  |/		      &lt;-+
	  |
	  +--	       foo = bar * 3;	      --+
						| ]/
		       /* a short comment/  &lt;-+</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="29.4"></a><span class="help-tag">29.4</span>  	Finding global identifiers</span></h2></div>
<div class="old-help-para">You are editing a C program and wonder if a variable is declared as "int" or
"unsigned".  A quick way to find this is with the "[I" command.
   Suppose the cursor is on the word "column".  Type:<pre>[I</pre>
Vim will list the matching lines it can find.  Not only in the current file,
but also in all included files (and files included in them, etc.).  The result
looks like this:</div>
<div class="old-help-para"><div class="help-column_heading">	structs.h</div>1:   29     unsigned     column;    /* column number/</div>
<div class="old-help-para">The advantage over using tags or the preview window is that included files are
searched.  In most cases this results in the right declaration to be found.
Also when the tags file is out of date.  Also when you don't have tags for the
included files.
   However, a few things must be right for "[I" to do its work.  First of all,
the <a href="/neovim-docs-web/en/options#'include'">'include'</a> option must specify how a file is included.  The default value
works for C and C++.  For other languages you will have to change it.</div>
<div class="old-help-para"><a name="_locating-included-files"></a><h3 class="help-heading">LOCATING INCLUDED FILES</h3></div>
<div class="old-help-para">   Vim will find included files in the places specified with the <a href="/neovim-docs-web/en/options#'path'">'path'</a>
option.  If a directory is missing, some include files will not be found.  You
can discover this with this command:<pre>:checkpath</pre>
It will list the include files that could not be found.  Also files included
by the files that could be found.  An example of the output:</div>
<div class="old-help-para"><div class="help-column_heading">	--- Included files not found in path ---</div><div class="help-column_heading">	&lt;io.h&gt;</div><div class="help-column_heading">	vim.h --&gt;</div><div class="help-column_heading">	  &lt;functions.h&gt;</div><div class="help-column_heading">	  &lt;clib/exec_protos.h&gt;</div></div>
<div class="old-help-para">The "io.h" file is included by the current file and can't be found.  "vim.h"
can be found, thus ":checkpath" goes into this file and checks what it
includes.  The "functions.h" and "clib/exec_protos.h" files, included by
"vim.h" are not found.</div>
<div class="old-help-para">	Note:
	Vim is not a compiler.  It does not recognize "#ifdef" statements.
	This means every "#include" statement is used, also when it comes
	after "#if NEVER".</div>
<div class="old-help-para">To fix the files that could not be found, add a directory to the <a href="/neovim-docs-web/en/options#'path'">'path'</a>
option.  A good place to find out about this is the Makefile.  Look out for
lines that contain "-I" items, like "-I/usr/local/X11".  To add this directory
use:<pre>:set path+=/usr/local/X11</pre>
When there are many subdirectories, you can use the "*" wildcard.  Example:<pre>:set path+=/usr/*/include</pre>
This would find files in "/usr/local/include" as well as "/usr/X11/include".</div>
<div class="old-help-para">When working on a project with a whole nested tree of included files, the "**"
items is useful.  This will search down in all subdirectories.  Example:<pre>:set path+=/projects/invent/**/include</pre>
This will find files in the directories:</div>
<div class="old-help-para"><div class="help-column_heading">	/projects/invent/include</div><div class="help-column_heading">	/projects/invent/main/include</div><div class="help-column_heading">	/projects/invent/main/os/include</div>	etc.</div>
<div class="old-help-para">There are even more possibilities.  Check out the <a href="/neovim-docs-web/en/options#'path'">'path'</a> option for info.
   If you want to see which included files are actually found, use this
command:<pre>:checkpath!</pre>
You will get a (very long) list of included files, the files they include, and
so on.  To shorten the list a bit, Vim shows "(Already listed)" for files that
were found before and doesn't list the included files in there again.</div>
<div class="old-help-para">JUMPING TO A MATCH</div>
<div class="old-help-para">"[I" produces a list with only one line of text.  When you want to have a
closer look at the first item, you can jump to that line with the command:<pre>[&lt;Tab&gt;</pre>
You can also use "[ <code>CTRL-I</code>", since <code>CTRL-I</code> is the same as pressing <code>&lt;Tab&gt;</code>.</div>
<div class="old-help-para">The list that "[I" produces has a number at the start of each line.  When you
want to jump to another item than the first one, type the number first:<pre>3[&lt;Tab&gt;</pre>
Will jump to the third item in the list.  Remember that you can use <code>CTRL-O</code> to
jump back to where you started from.</div>
<div class="old-help-para"><a name="_related-commands"></a><h3 class="help-heading">RELATED COMMANDS</h3></div>
<div class="old-help-para">	[i		only lists the first match
	]I		only lists items below the cursor
	]i		only lists the first item below the cursor</div>
<div class="old-help-para"><a name="_finding-defined-identifiers"></a><h3 class="help-heading">FINDING DEFINED IDENTIFIERS</h3></div>
<div class="old-help-para">The "[I" command finds any identifier.  To find only macros, defined with
"#define" use:<pre>[D</pre>
Again, this searches in included files.  The <a href="/neovim-docs-web/en/options#'define'">'define'</a> option specifies what a
line looks like that defines the items for "[D".  You could change it to make
it work with other languages than C or C++.
   The commands related to "[D" are:</div>
<div class="old-help-para">	[d		only lists the first match
	]D		only lists items below the cursor
	]d		only lists the first item below the cursor</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="29.5"></a><span class="help-tag">29.5</span>  	Finding local identifiers</span></h2></div>
<div class="old-help-para">The "[I" command searches included files.  To search in the current file only,
and jump to the first place where the word under the cursor is used:<pre>gD</pre>
Hint: Goto Definition.  This command is very useful to find a variable or
function that was declared locally ("static", in C terms).  Example (cursor on
"counter"):</div>
<div class="old-help-para">	   +-&gt;   static int counter = 0;
	   |
	   |     int get_counter(void)
	gD |     {
	   |	     ++counter;
	   +--	     return counter;
		 }</div>
<div class="old-help-para">To restrict the search even further, and look only in the current function,
use this command:<pre>gd</pre>
This will go back to the start of the current function and find the first
occurrence of the word under the cursor.  Actually, it searches backwards to
an empty line above a "{" in the first column.  From there it searches forward
for the identifier.  Example (cursor on "idx"):</div>
<div class="old-help-para">		int find_entry(char *name)		{
	   +-&gt;	    int idx;
	   |
	gd |	    for (idx = 0; idx &lt; table_len; ++idx)
	   |		if (strcmp(table[idx].name, name) == 0)
	   +--		    return idx;
		}</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Next chapter: <a href="/neovim-docs-web/en/usr_30#usr_30.txt">usr_30.txt</a>  Editing programs</div>
<div class="old-help-para">Copyright: see <a href="/neovim-docs-web/en/usr_01#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  