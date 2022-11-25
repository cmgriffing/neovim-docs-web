---
title:  Usr_01
layout: ../../layouts/MainLayout.astro
---

  <a name="usr_01.txt"></a><a name="01.1"></a><h1> Usr_01</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/usr_01.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		     VIM USER MANUAL - by Bram Moolenaar</div>
<div class="old-help-para">			      About the manuals</div>
<div class="old-help-para">This chapter introduces the manuals available with Vim.  Read this to know the
conditions under which the commands are explained.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/usr_01#01.1">01.1</a>  	Two manuals
<a href="/neovim-docs-web/en/usr_01#01.2">01.2</a>  	Vim installed
<a href="/neovim-docs-web/en/usr_01#01.3">01.3</a>  	Using the Vim tutor
<a href="/neovim-docs-web/en/usr_01#01.4">01.4</a>  	Copyright</div>
<div class="old-help-para">     Next chapter: <a href="/neovim-docs-web/en/usr_02#usr_02.txt">usr_02.txt</a>  The first steps in Vim
Table of contents: <a href="/neovim-docs-web/en/usr_toc#usr_toc.txt">usr_toc.txt</a></div>
<div class="old-help-para"><h2 class="help-heading">	Two manuals</h2></div>
<div class="old-help-para">The Vim documentation consists of two parts:</div>
<div class="old-help-para">1. The User manual
   Task oriented explanations, from simple to complex.  Reads from start to
   end like a book.</div>
<div class="old-help-para">2. The Reference manual
   Precise description of how everything in Vim works.</div>
<div class="old-help-para">The notation used in these manuals is explained here: <a href="/neovim-docs-web/en/intro#notation">notation</a></div>
<div class="old-help-para"><a name="_jumping-around"></a><h3 class="help-heading">JUMPING AROUND</h3></div>
<div class="old-help-para">The text contains hyperlinks between the two parts, allowing you to quickly
jump between the description of an editing task and a precise explanation of
the commands and options used for it.  Use these two commands:</div>
<div class="old-help-para">	Press  <code>CTRL-]</code>  to jump to a subject under the cursor.
	Press  <code>CTRL-O</code>  to jump back (repeat to go further back).</div>
<div class="old-help-para">Many links are in vertical bars, like this: <a href="/neovim-docs-web/en/index#bars">bars</a>.  The bars themselves may
be hidden or invisible; see below.  An option name, like <a href="/neovim-docs-web/en/options#'number'">'number'</a>, a command
in double quotes like ":write" and any other word can also be used as a link.
Try it out: Move the cursor to  <code>CTRL-]</code>  and press <code>CTRL-]</code> on it.</div>
<div class="old-help-para">Other subjects can be found with the ":help" command; see <a href="/neovim-docs-web/en/index#help.txt">help.txt</a>.</div>
<div class="old-help-para">The bars and stars are usually hidden with the <a href="/neovim-docs-web/en/syntax#conceal">conceal</a> feature.  They also
use <a href="/neovim-docs-web/en/syntax#hl-Ignore">hl-Ignore</a>, using the same color for the text as the background.  You can
make them visible with:<pre>:set conceallevel=0
:hi link HelpBar Normal
:hi link HelpStar Normal</pre>
<h2 class="help-heading"><span class="help-heading-tags"><a name="01.2"></a><span class="help-tag">01.2</span>  	Vim installed<span class="help-heading-tags">					   <a name="setup-vimrc_example"></a><span class="help-tag">setup-vimrc_example</span></span></span></h2></div>
<div class="old-help-para">To create an empty vimrc:<pre>:call mkdir(stdpath('config'),'p')
:exe 'edit' stdpath('config').'/init.vim'
:write</pre>
For more info see <a href="/neovim-docs-web/en/starting#vimrc">vimrc</a>.</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="01.3"></a><span class="help-tag">01.3</span>  	Using the Vim tutor<span class="help-heading-tags">			         <a name="tutor"></a><span class="help-tag">tutor</span> <a name="vimtutor"></a><span class="help-tag">vimtutor</span></span></span></h2></div>
<div class="old-help-para">Instead of reading the text (boring!) you can use :Tutor to learn your first
Vim commands.  This is a 30-minute tutorial that teaches the most basic Vim
functionality hands-on.</div>
<div class="old-help-para">To start the tutorial, execute<pre>:Tutor</pre></div>
<div class="old-help-para">from within nvim. The tutorial will lead you from that point. Have fun!</div>
<div class="old-help-para"><h2 class="help-heading"><span class="help-heading-tags"><a name="01.4"></a><span class="help-tag">01.4</span>  	Copyright<span class="help-heading-tags">					<a name="manual-copyright"></a><span class="help-tag">manual-copyright</span></span></span></h2></div>
<div class="old-help-para">The Vim user manual and reference manual are Copyright (c) 1988-2003 by Bram
Moolenaar.  This material may be distributed only subject to the terms and
conditions set forth in the Open Publication License, v1.0 or later.  The
latest version is presently available at:
	     <a href="https://www.opencontent.org/openpub/">https://www.opencontent.org/openpub/</a></div>
<div class="old-help-para">People who contribute to the manuals must agree with the above copyright
notice.
							<a name="frombook"></a><code class="help-tag-right">frombook</code>
Parts of the user manual come from the book "Vi IMproved - Vim" by Steve
Oualline (published by New Riders Publishing, ISBN: 0735710015).  The Open
Publication License applies to this book.  Only selected parts are included
and these have been modified (e.g., by removing the pictures, updating the
text for Vim 6.0 and later, fixing mistakes).  The omission of the <a href="/neovim-docs-web/en/usr_01#frombook">frombook</a>
tag does not mean that the text does not come from the book.</div>
<div class="old-help-para">Many thanks to Steve Oualline and New Riders for creating this book and
publishing it under the OPL!  It has been a great help while writing the user
manual.  Not only by providing literal text, but also by setting the tone and
style.</div>
<div class="old-help-para">If you make money through selling the manuals, you are strongly encouraged to
donate part of the profit to help AIDS victims in Uganda.  See <a href="/neovim-docs-web/en/uganda#iccf">iccf</a>.</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>Next chapter: <a href="/neovim-docs-web/en/usr_02#usr_02.txt">usr_02.txt</a>  The first steps in Vim</div>
<div class="old-help-para">Copyright: see <a href="/neovim-docs-web/en/usr_01#manual-copyright">manual-copyright</a>  vim:tw=78:ts=8:noet:ft=help:norl:</div>

  
  