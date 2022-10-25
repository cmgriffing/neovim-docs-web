---
title: Pi Paren
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="Nvim" class="section-title" href="#Nvim"> Pi Paren Txt</a> 

VIM REFERENCE MANUAL    by Bram Moolenaar


### <a id="matchparen" class="section-title" href="#matchparen">Highlighting matching parens</a>

The functionality mentioned here is a [standard-plugin](undefined#standard-plugin).
This plugin is only available if 'compatible' is not set.

You can avoid loading this plugin by setting the "loaded_matchparen" variable:
	:let loaded_matchparen = 1

The plugin installs CursorMoved, CursorMovedI and WinEnter autocommands to
redefine the match highlighting.

### <a id=":NoMatchParen :DoMatchParen" class="section-title" href="#:NoMatchParen :DoMatchParen">Note:</a>
To disable the plugin after it was loaded use this command:

	:NoMatchParen

And to enable it again:

	:DoMatchParen

The highlighting used is MatchParen.  You can specify different colors with
the ":highlight" command.  Example:

	:hi MatchParen ctermbg=blue guibg=lightblue

The characters to be matched come from the 'matchpairs' option.  You can
change the value to highlight different matches.  Note that not everything is
possible.  For example, you can't highlight single or double quotes, because
the start and end are equal.

The syntax highlighting attributes are used.  When the cursor currently is not
in a string or comment syntax item, then matches inside string and comment
syntax items are ignored.  Any syntax items with "string" or "comment"
somewhere in their name are considered string or comment items.

The search is limited to avoid a delay when moving the cursor.  The limits
are:
- What is visible in the window.
- 100 lines above or below the cursor to avoid a long delay when there are
  closed folds.
- 'synmaxcol' times 2 bytes before or after the cursor to avoid a delay
  in a long line with syntax highlighting.
- A timeout of 300 msec (60 msec in Insert mode). This can be changed with the
  g:matchparen_timeout and g:matchparen_insert_timeout variables and their
  buffer-local equivalents b:matchparen_timeout and
  b:matchparen_insert_timeout.

If you would like the |%| command to work better, the [matchit](undefined#matchit) plugin can be
used.  This plugin also helps to skip matches in comments.  This is unrelated
to the matchparen highlighting, they use a different mechanism.


## <a id="" class="section-title" href="#">Vim Tw 78 Ts 8 Noet Ft Help Norl</a> 



