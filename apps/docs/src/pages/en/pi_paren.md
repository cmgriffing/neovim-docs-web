---
title:  Pi_paren
layout: ../../layouts/MainLayout.astro
---

  <a name="pi_paren.txt"></a><a name="matchparen"></a><h1> Pi_paren</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/pi_paren.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Highlighting matching parens</div>
<div class="old-help-para">The functionality mentioned here is a <a href="usr_05.html#standard-plugin">standard-plugin</a>.
This plugin is only available if <a href="vim_diff.html#'compatible'">'compatible'</a> is not set.</div>
<div class="old-help-para">You can avoid loading this plugin by setting the "loaded_matchparen" variable:<pre>:let loaded_matchparen = 1</pre>
The plugin installs CursorMoved, CursorMovedI and WinEnter autocommands to
redefine the match highlighting.</div>
<div class="old-help-para">					<a name="%3ANoMatchParen"></a><code class="help-tag-right">:NoMatchParen</code> <a name="%3ADoMatchParen"></a><code class="help-tag">:DoMatchParen</code>
To disable the plugin after it was loaded use this command:<pre>:NoMatchParen</pre>
And to enable it again:<pre>:DoMatchParen</pre>
The highlighting used is MatchParen.  You can specify different colors with
the ":highlight" command.  Example:<pre>:hi MatchParen ctermbg=blue guibg=lightblue</pre>
The characters to be matched come from the <a href="options.html#'matchpairs'">'matchpairs'</a> option.  You can
change the value to highlight different matches.  Note that not everything is
possible.  For example, you can't highlight single or double quotes, because
the start and end are equal.</div>
<div class="old-help-para">The syntax highlighting attributes are used.  When the cursor currently is not
in a string or comment syntax item, then matches inside string and comment
syntax items are ignored.  Any syntax items with "string" or "comment"
somewhere in their name are considered string or comment items.</div>
<div class="old-help-para">The search is limited to avoid a delay when moving the cursor.  The limits
are:
<div class="help-li" style=""> What is visible in the window.
</div><div class="help-li" style=""> 100 lines above or below the cursor to avoid a long delay when there are
  closed folds.
</div><div class="help-li" style=""> <a href="options.html#'synmaxcol'">'synmaxcol'</a> times 2 bytes before or after the cursor to avoid a delay
  in a long line with syntax highlighting.
</div><div class="help-li" style=""> A timeout of 300 msec (60 msec in Insert mode). This can be changed with the
  g:matchparen_timeout and g:matchparen_insert_timeout variables and their
  buffer-local equivalents b:matchparen_timeout and
  b:matchparen_insert_timeout.
</div></div>
<div class="old-help-para">If you would like the <a href="motion.html#%25">%</a> command to work better, thematchit plugin can be
used.  This plugin also helps to skip matches in comments.  This is unrelated
to the matchparen highlighting, they use a different mechanism.</div>

  
  