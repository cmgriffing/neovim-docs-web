---
title:  Options
layout: ../../layouts/MainLayout.astro
---

  <a name="options.txt"></a><a name="options"></a><h1> Options</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/options.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Options</div>
<div class="old-help-para">For an overview of options see quickref.txt <a href="/neovim-docs-web/en/quickref#option-list">option-list</a>.</div>
<div class="old-help-para">Vim has a number of internal variables and switches which can be set to
achieve special effects.  These options come in three forms:
	boolean		can only be on or off		<a name="boolean"></a><code class="help-tag-right">boolean</code> <a name="toggle"></a><code class="help-tag">toggle</code>
	number		has a numeric value
	string		has a string value</div>
<div class="old-help-para"><h2 class="help-heading">1. Setting options<span class="help-heading-tags">					<a name="set-option"></a><span class="help-tag">set-option</span> <a name="E764"></a><span class="help-tag">E764</span></span></h2></div>
<div class="old-help-para">							<a name="%3Ase"></a><code class="help-tag-right">:se</code> <a name="%3Aset"></a><code class="help-tag">:set</code>
:se[t][!]		Show all options that differ from their default value.
			When [!] is present every option is on a separate
			line.</div>
<div class="old-help-para">:se[t][!] all		Show all options.
			When [!] is present every option is on a separate
			line.</div>
<div class="old-help-para">								<a name="E518"></a><code class="help-tag-right">E518</code> <a name="E519"></a><code class="help-tag">E519</code>
:se[t] <code>{option}</code>?	Show value of <code>{option}</code>.</div>
<div class="old-help-para">:se[t] <code>{option}</code>		Toggle option: set, switch it on.
			Number option: show value.
			String option: show value.</div>
<div class="old-help-para">:se[t] no{option}	Toggle option: Reset, switch it off.</div>
<div class="old-help-para">							   <a name="%3Aset-%21"></a><code class="help-tag-right">:set-!</code> <a name="%3Aset-inv"></a><code class="help-tag">:set-inv</code>
:se[t] <code>{option}</code>!   or
:se[t] inv{option}	Toggle option: Invert value.</div>
<div class="old-help-para">				<a name="%3Aset-default"></a><code class="help-tag-right">:set-default</code> <a name="%3Aset-%26"></a><code class="help-tag">:set-&amp;</code> <a name="%3Aset-%26vi"></a><code class="help-tag">:set-&amp;vi</code> <a name="%3Aset-%26vim"></a><code class="help-tag">:set-&amp;vim</code>
:se[t] <code>{option}</code>&amp;	Reset option to its default value.
:se[t] <code>{option}</code>&amp;vi	Reset option to its Vi default value.
:se[t] <code>{option}</code>&amp;vim	Reset option to its Vim default value.</div>
<div class="old-help-para">:se[t] all&amp;		Set all options to their default value.  The values of
			these options are not changed:
			  <a href="/neovim-docs-web/en/options#'columns'">'columns'</a>
			  <a href="/neovim-docs-web/en/options#'lines'">'lines'</a>
			Warning: This may have a lot of side effects.</div>
<div class="old-help-para">						<a name="%3Aset-args"></a><code class="help-tag-right">:set-args</code> <a name="E487"></a><code class="help-tag">E487</code> <a name="E521"></a><code class="help-tag">E521</code>
:se[t] <code>{option}</code>={value}		or
:se[t] <code>{option}</code>:{value}
			Set string or number option to <code>{value}</code>.
			For numeric options the value can be given in decimal,
			hex (preceded with 0x) or octal (preceded with '0').
			The old value can be inserted by typing <a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a> (by
			default this is a <code>&lt;Tab&gt;</code>).  See <a href="/neovim-docs-web/en/cmdline#cmdline-completion">cmdline-completion</a>.
			White space between <code>{option}</code> and '=' is allowed and
			will be ignored.  White space between '=' and <code>{value}</code>
			is not allowed.
			See <a href="/neovim-docs-web/en/options#option-backslash">option-backslash</a> for using white space and
			backslashes in <code>{value}</code>.</div>
<div class="old-help-para">:se[t] <code>{option}</code>+={value}				<a name="%3Aset%2B%3D"></a><code class="help-tag-right">:set+=</code>
			Add the <code>{value}</code> to a number option, or append the
			<code>{value}</code> to a string option.  When the option is a
			comma-separated list, a comma is added, unless the
			value was empty.
			If the option is a list of flags, superfluous flags
			are removed.  When adding a flag that was already
			present the option value doesn't change.
			Also see <a href="/neovim-docs-web/en/options#%3Aset-args">:set-args</a> above.</div>
<div class="old-help-para">:se[t] <code>{option}</code>^={value}				<a name="%3Aset%5E%3D"></a><code class="help-tag-right">:set^=</code>
			Multiply the <code>{value}</code> to a number option, or prepend
			the <code>{value}</code> to a string option.  When the option is a
			comma-separated list, a comma is added, unless the
			value was empty.
			Also see <a href="/neovim-docs-web/en/options#%3Aset-args">:set-args</a> above.</div>
<div class="old-help-para">:se[t] <code>{option}</code>-={value}				<a name="%3Aset-%3D"></a><code class="help-tag-right">:set-=</code>
			Subtract the <code>{value}</code> from a number option, or remove
			the <code>{value}</code> from a string option, if it is there.
			If the <code>{value}</code> is not found in a string option, there
			is no error or warning.  When the option is a comma-
			separated list, a comma is deleted, unless the option
			becomes empty.
			When the option is a list of flags, <code>{value}</code> must be
			exactly as they appear in the option.  Remove flags
			one by one to avoid problems.
			Also see <a href="/neovim-docs-web/en/options#%3Aset-args">:set-args</a> above.</div>
<div class="old-help-para">The <code>{option}</code> arguments to ":set" may be repeated.  For example:<pre>:set ai nosi sw=3 ts=3</pre>
If you make an error in one of the arguments, an error message will be given
and the following arguments will be ignored.</div>
<div class="old-help-para">							<a name="%3Aset-verbose"></a><code class="help-tag-right">:set-verbose</code>
When <a href="/neovim-docs-web/en/options#'verbose'">'verbose'</a> is non-zero, displaying an option value will also tell where it
was last set.  Example:<pre>:verbose set shiftwidth cindent?</pre></div>
<div class="old-help-para"><div class="help-column_heading">  shiftwidth=4</div><div class="help-column_heading">	  Last set from modeline line 1</div><div class="help-column_heading">  cindent</div><div class="help-column_heading">	  Last set from /usr/local/share/vim/vim60/ftplugin/c.vim line 30</div>This is only done when specific option values are requested, not for ":verbose
set all" or ":verbose set" without an argument.
When the option was set by hand there is no "Last set" message.
When the option was set while executing a function, user command or
autocommand, the script in which it was defined is reported.
A few special texts:
<div class="help-column_heading">	Last set from modeline line 1</div>		Option was set in a <a href="/neovim-docs-web/en/options#modeline">modeline</a>.
<div class="help-column_heading">	Last set from --cmd argument</div>		Option was set with command line argument <a href="/neovim-docs-web/en/starting#--cmd">--cmd</a> or +.
<div class="help-column_heading">	Last set from -c argument</div>		Option was set with command line argument <a href="/neovim-docs-web/en/starting#-c">-c</a>, +, <a href="/neovim-docs-web/en/starting#-S">-S</a> or
		<a href="/neovim-docs-web/en/starting#-q">-q</a>.
<div class="help-column_heading">	Last set from environment variable</div>		Option was set from $VIMINIT.
<div class="help-column_heading">	Last set from error handler</div>		Option was cleared when evaluating it resulted in an error.</div>
<div class="old-help-para">							<a name="option-backslash"></a><code class="help-tag-right">option-backslash</code>
To include white space in a string option value it has to be preceded with a
backslash.  To include a backslash you have to use two.  Effectively this
means that the number of backslashes in an option value is halved (rounded
down).
A few examples:<pre>:set tags=tags\ /usr/tags            results in "tags /usr/tags"
:set tags=tags\\,file            results in "tags\,file"
:set tags=tags\\\ file            results in "tags\ file"</pre>
The "|" character separates a ":set" command from a following command.  To
include the "|" in the option value, use "\|" instead.  This example sets the
<a href="/neovim-docs-web/en/options#'titlestring'">'titlestring'</a> option to "hi|there":<pre>:set titlestring=hi\|there</pre>
This sets the <a href="/neovim-docs-web/en/options#'titlestring'">'titlestring'</a> option to "hi" and <a href="/neovim-docs-web/en/options#'iconstring'">'iconstring'</a> to "there":<pre>:set titlestring=hi|set iconstring=there</pre>
Similarly, the double quote character starts a comment.  To include the '"' in
the option value, use '\"' instead.  This example sets the <a href="/neovim-docs-web/en/options#'titlestring'">'titlestring'</a>
option to '<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+options.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/options.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0ASimilarly%2C%20the%20double%20quote%20character%20starts%20a%20comment.%20%20To%20include%20the%20'%22'%20in%0Athe%20option%20value%2C%20use%20'%5C%22'%20instead.%20%20This%20example%20sets%20the%20'titlestring'%0Aoption%20to%20'hi%20%22there%22'%3A%20%3E%0A%20%20%20%3Aset%20titlestring%3Dhi%5C%20%5C%22there%5C%22%0A%0AFor%20Win32%20backslashes%20in%20file%20names%20are%20mostly%20not%20removed.%20%20More%20precise%3A%20For%0D%60%60%60">hi</a> "there"':<pre>:set titlestring=hi\ \"there\"</pre>
For Win32 backslashes in file names are mostly not removed.  More precise: For
options that expect a file name (those where environment variables are
expanded) a backslash before a normal file name character is not removed.  But
a backslash before a special character (space, backslash, comma, etc.) is used
like explained above.
There is one special situation, when the value starts with "\\":<pre>:set dir=\\machine\path            results in "\\machine\path"
:set dir=\\\\machine\\path            results in "\\machine\path"
:set dir=\\path\\file            results in "\\path\file" (wrong!)</pre>
For the first one the start is kept, but for the second one the backslashes
are halved.  This makes sure it works both when you expect backslashes to be
halved and when you expect the backslashes to be kept.  The third gives a
result which is probably not what you want.  Avoid it.</div>
<div class="old-help-para">				<a name="add-option-flags"></a><code class="help-tag-right">add-option-flags</code> <a name="remove-option-flags"></a><code class="help-tag">remove-option-flags</code>
				<a name="E539"></a><code class="help-tag-right">E539</code> <a name="E550"></a><code class="help-tag">E550</code> <a name="E551"></a><code class="help-tag">E551</code> <a name="E552"></a><code class="help-tag">E552</code>
Some options are a list of flags.  When you want to add a flag to such an
option, without changing the existing ones, you can do it like this:<pre>:set guioptions+=a</pre>
Remove a flag from an option like this:<pre>:set guioptions-=a</pre>
This removes the 'a' flag from <a href="/neovim-docs-web/en/options#'guioptions'">'guioptions'</a>.
Note that you should add or remove one flag at a time.  If <a href="/neovim-docs-web/en/options#'guioptions'">'guioptions'</a> has
the value "ab", using "set guioptions-=ba" won't work, because the string "ba"
doesn't appear.</div>
<div class="old-help-para">			   <a name="%3Aset_env"></a><code class="help-tag-right">:set_env</code> <a name="expand-env"></a><code class="help-tag">expand-env</code> <a name="expand-environment-var"></a><code class="help-tag">expand-environment-var</code>
Environment variables in specific string options will be expanded.  If the
environment variable exists the '$' and the following environment variable
name is replaced with its value.  If it does not exist the '$' and the name
are not modified.  Any non-id character (not a letter, digit or '_') may
follow the environment variable name.  That character and what follows is
appended to the value of the environment variable.  Examples:<pre>:set term=$TERM.new
:set path=/usr/$INCLUDE,$HOME/include,.</pre>
When adding or removing a string from an option with ":set opt-=val" or ":set
opt+=val" the expansion is done before the adding or removing.</div>
<div class="old-help-para">Handling of local options			<a name="local-options"></a><code class="help-tag-right">local-options</code></div>
<div class="old-help-para">Some of the options only apply to a window or buffer.  Each window or buffer
has its own copy of this option, thus each can have its own value.  This
allows you to set <a href="/neovim-docs-web/en/options#'list'">'list'</a> in one window but not in another.  And set
<a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> to 3 in one buffer and 4 in another.</div>
<div class="old-help-para">The following explains what happens to these local options in specific
situations.  You don't really need to know all of this, since Vim mostly uses
the option values you would expect.  Unfortunately, doing what the user
expects is a bit complicated...</div>
<div class="old-help-para">When splitting a window, the local options are copied to the new window.  Thus
right after the split the contents of the two windows look the same.</div>
<div class="old-help-para">When editing a new buffer, its local option values must be initialized.  Since
the local options of the current buffer might be specifically for that buffer,
these are not used.  Instead, for each buffer-local option there also is a
global value, which is used for new buffers.  With ":set" both the local and
global value is changed.  With "setlocal" only the local value is changed,
thus this value is not used when editing a new buffer.</div>
<div class="old-help-para">When editing a buffer that has been edited before, the options from the window
that was last closed are used again.  If this buffer has been edited in this
window, the values from back then are used.  Otherwise the values from the
last closed window where the buffer was edited last are used.</div>
<div class="old-help-para">It's possible to set a local window option specifically for a type of buffer.
When you edit another buffer in the same window, you don't want to keep
using these local window options.  Therefore Vim keeps a global value of the
local window options, which is used when editing another buffer.  Each window
has its own copy of these values.  Thus these are local to the window, but
global to all buffers in the window.  With this you can do:<pre>:e one
:set list
:e two</pre>
Now the <a href="/neovim-docs-web/en/options#'list'">'list'</a> option will also be set in "two", since with the ":set list"
command you have also set the global value.<pre>:set nolist
:e one
:setlocal list
:e two</pre>
Now the <a href="/neovim-docs-web/en/options#'list'">'list'</a> option is not set, because ":set nolist" resets the global
value, ":setlocal list" only changes the local value and ":e two" gets the
global value.  Note that if you do this next:<pre>:e one</pre>
You will get back the <a href="/neovim-docs-web/en/options#'list'">'list'</a> value as it was the last time you edited "one".
The options local to a window are remembered for each buffer.  This also
happens when the buffer is not loaded, but they are lost when the buffer is
wiped out <a href="/neovim-docs-web/en/windows#%3Abwipe">:bwipe</a>.</div>
<div class="old-help-para">							<a name="%3Asetl"></a><code class="help-tag-right">:setl</code> <a name="%3Asetlocal"></a><code class="help-tag">:setlocal</code>
:setl[ocal][!] ...	Like ":set" but set only the value local to the
			current buffer or window.  Not all options have a
			local value.  If the option does not have a local
			value the global value is set.
			With the "all" argument: display local values for all
			local options.
			Without argument: Display local values for all local
			options which are different from the default.
			When displaying a specific local option, show the
			local value.  For a global/local boolean option, when
			the global value is being used, "--" is displayed
			before the option name.
			For a global option the global value is
			shown (but that might change in the future).</div>
<div class="old-help-para">:setl[ocal] <code>{option}</code>&lt;	Set the local value of <code>{option}</code> to its global value by
			copying the value.</div>
<div class="old-help-para">:se[t] <code>{option}</code>&lt;	For <a href="/neovim-docs-web/en/options#global-local">global-local</a> options: Remove the local value of
			<code>{option}</code>, so that the global value will be used.</div>
<div class="old-help-para">							<a name="%3Asetg"></a><code class="help-tag-right">:setg</code> <a name="%3Asetglobal"></a><code class="help-tag">:setglobal</code>
:setg[lobal][!] ...	Like ":set" but set only the global value for a local
			option without changing the local value.
			When displaying an option, the global value is shown.
			With the "all" argument: display global values for all
			local options.
			Without argument: display global values for all local
			options which are different from the default.</div>
<div class="old-help-para">For buffer-local and window-local options:
<div class="help-column_heading">	Command		 global value	    local value</div>      :set option=value	     set		set
 :setlocal option=value	      -				set
:setglobal option=value	     set		 -
      :set option?	      -			       display
 :setlocal option?	      -			       display
:setglobal option?	    display		 -</div>
<div class="old-help-para">Global options with a local value			<a name="global-local"></a><code class="help-tag-right">global-local</code></div>
<div class="old-help-para">Options are global when you mostly use one value for all buffers and windows.
For some global options it's useful to sometimes have a different local value.
You can set the local value with ":setlocal".  That buffer or window will then
use the local value, while other buffers and windows continue using the global
value.</div>
<div class="old-help-para">For example, you have two windows, both on C source code.  They use the global
<a href="/neovim-docs-web/en/options#'makeprg'">'makeprg'</a> option.  If you do this in one of the two windows:<pre>:set makeprg=gmake</pre>
then the other window will switch to the same value.  There is no need to set
the <a href="/neovim-docs-web/en/options#'makeprg'">'makeprg'</a> option in the other C source window too.
However, if you start editing a Perl file in a new window, you want to use
another <a href="/neovim-docs-web/en/options#'makeprg'">'makeprg'</a> for it, without changing the value used for the C source
files.  You use this command:<pre>:setlocal makeprg=perlmake</pre>
You can switch back to using the global value by making the local value empty:<pre>:setlocal makeprg=</pre>
This only works for a string option.  For a number or boolean option you need
to use the "&lt;" flag, like this:<pre>:setlocal autoread&lt;</pre>
Note that for non-boolean and non-number options using "&lt;" copies the global
value to the local value, it doesn't switch back to using the global value
(that matters when the global value changes later).  You can also use:<pre>:set path&lt;</pre>
This will make the local value of <a href="/neovim-docs-web/en/options#'path'">'path'</a> empty, so that the global value is
used.  Thus it does the same as:<pre>:setlocal path=</pre>
Note: In the future more global options can be made <a href="/neovim-docs-web/en/options#global-local">global-local</a>.  Using
":setlocal" on a global option might work differently then.</div>
<div class="old-help-para">						<a name="option-value-function"></a><code class="help-tag-right">option-value-function</code>
Some options (<a href="/neovim-docs-web/en/options#'completefunc'">'completefunc'</a>, <a href="/neovim-docs-web/en/options#'omnifunc'">'omnifunc'</a>, <a href="/neovim-docs-web/en/options#'operatorfunc'">'operatorfunc'</a>, <a href="/neovim-docs-web/en/options#'quickfixtextfunc'">'quickfixtextfunc'</a>,
<a href="/neovim-docs-web/en/options#'tagfunc'">'tagfunc'</a> and <a href="/neovim-docs-web/en/options#'thesaurusfunc'">'thesaurusfunc'</a>) are set to a function name or a function
reference or a lambda function.  When using a lambda it will be converted to
the name, e.g. "&lt;lambda&gt;123".  Examples:
<pre>set opfunc=MyOpFunc
set opfunc=function('MyOpFunc')
set opfunc=funcref('MyOpFunc')
set opfunc={a\ -&gt;\ MyOpFunc(a)}
" set using a funcref variable
let Fn = function('MyTagFunc')
let &amp;tagfunc = string(Fn)
" set using a lambda expression
let &amp;tagfunc = {t -&gt; MyTagFunc(t)}
" set using a variable with lambda expression
let L = {a, b, c -&gt; MyTagFunc(a, b , c)}
let &amp;tagfunc = L</pre></div>
<div class="old-help-para">Setting the filetype</div>
<div class="old-help-para">:setf[iletype] [FALLBACK] <code>{filetype}</code>			<a name="%3Asetf"></a><code class="help-tag-right">:setf</code> <a name="%3Asetfiletype"></a><code class="help-tag">:setfiletype</code>
			Set the <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> option to <code>{filetype}</code>, but only if
			not done yet in a sequence of (nested) autocommands.
			This is short for:<pre>:if !did_filetype()
:  setlocal filetype={filetype}
:endif</pre></div>
<div class="old-help-para">			This command is used in a filetype.vim file to avoid
			setting the <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> option twice, causing different
			settings and syntax files to be loaded.</div>
<div class="old-help-para">			When the optional FALLBACK argument is present, a
			later :setfiletype command will override the
			<a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a>.  This is to be used for filetype
			detections that are just a guess.  <a href="/neovim-docs-web/en/builtin#did_filetype()">did_filetype()</a>
			will return false after this command.</div>
<div class="old-help-para">				<a name="option-window"></a><code class="help-tag-right">option-window</code> <a name="optwin"></a><code class="help-tag">optwin</code>
:bro[wse] se[t]			<a name="%3Aset-browse"></a><code class="help-tag-right">:set-browse</code> <a name="%3Abrowse-set"></a><code class="help-tag">:browse-set</code> <a name="%3Aopt"></a><code class="help-tag">:opt</code> <a name="%3Aoptions"></a><code class="help-tag">:options</code>
:opt[ions]		Open a window for viewing and setting all options.
			Options are grouped by function.
			Offers short help for each option.  Hit <code>&lt;CR&gt;</code> on the
			short help to open a help window with more help for
			the option.
			Modify the value of the option and hit <code>&lt;CR&gt;</code> on the
			"set" line to set the new value.  For window and
			buffer specific options, the last accessed window is
			used to set the option value in, unless this is a help
			window, in which case the window below help window is
			used (skipping the option-window).</div>
<div class="old-help-para">								<a name="%24HOME"></a><code class="help-tag-right">$HOME</code>
Using "~" is like using "$HOME", but it is only recognized at the start of an
option and after a space or comma.</div>
<div class="old-help-para">On Unix systems "~user" can be used too.  It is replaced by the home directory
of user "user".  Example:<pre>:set path=~mool/include,/usr/include,.</pre>
On Unix systems the form "${HOME}" can be used too.  The name between {} can
contain non-id characters then.  Note that if you want to use this for the
"gf" command, you need to add the '<code>{' and '}</code>' characters to <a href="/neovim-docs-web/en/options#'isfname'">'isfname'</a>.</div>
<div class="old-help-para">NOTE: expanding environment variables and "~/" is only done with the ":set"
command, not when assigning a value to an option with ":let".</div>
<div class="old-help-para">							<a name="%24HOME-windows"></a><code class="help-tag-right">$HOME-windows</code>
On MS-Windows, if $HOME is not defined as an environment variable, then
at runtime Vim will set it to the expansion of $HOMEDRIVE$HOMEPATH.
If $HOMEDRIVE is not set then $USERPROFILE is used.</div>
<div class="old-help-para">This expanded value is not exported to the environment, this matters when
running an external command:<pre>:echo system('set | findstr ^HOME=')</pre>
and<pre>:echo luaeval('os.getenv("HOME")')</pre>
should echo nothing (an empty string) despite exists('$HOME') being true.
When setting $HOME to a non-empty string it will be exported to the
subprocesses.</div>
<div class="old-help-para">Note the maximum length of an expanded option is limited.  How much depends on
the system, mostly it is something like 256 or 1024 characters.</div>
<div class="old-help-para"><h2 class="help-heading">2. Automatically setting options<span class="help-heading-tags">			<a name="auto-setting"></a><span class="help-tag">auto-setting</span></span></h2></div>
<div class="old-help-para">Besides changing options with the ":set" command, there are three alternatives
to set options automatically for one or more files:</div>
<div class="old-help-para">1. When starting Vim initializations are read from various places.  See
   <a href="/neovim-docs-web/en/starting#initialization">initialization</a>.  Most of them are performed for all editing sessions,
   and some of them depend on the directory where Vim is started.
   You can create an initialization file with <a href="/neovim-docs-web/en/starting#%3Amkvimrc">:mkvimrc</a>, <a href="/neovim-docs-web/en/starting#%3Amkview">:mkview</a> and
   <a href="/neovim-docs-web/en/starting#%3Amksession">:mksession</a>.
2. If you start editing a new file, the automatic commands are executed.
   This can be used to set options for files matching a particular pattern and
   many other things.  See <a href="/neovim-docs-web/en/autocmd#autocommand">autocommand</a>.
3. If you start editing a new file, and the <a href="/neovim-docs-web/en/options#'modeline'">'modeline'</a> option is on, a
   number of lines at the beginning and end of the file are checked for
   modelines.  This is explained here.</div>
<div class="old-help-para">					<a name="modeline"></a><code class="help-tag-right">modeline</code> <a name="vim%3A"></a><code class="help-tag">vim:</code> <a name="vi%3A"></a><code class="help-tag">vi:</code> <a name="ex%3A"></a><code class="help-tag">ex:</code> <a name="E520"></a><code class="help-tag">E520</code>
There are two forms of modelines.  The first form:
	[text{white}]{vi:|vim:|ex:}[white]{options}</div>
<div class="old-help-para">[text{white}]		empty or any text followed by at least one blank
			character (<code>&lt;Space&gt;</code> or <code>&lt;Tab&gt;</code>); "ex:" always requires at
			least one blank character
<code>{vi:|vim:|ex:}</code>		the string "vi:", "vim:" or "ex:"
[white]			optional white space
<code>{options}</code>		a list of option settings, separated with white space
			or ':', where each part between ':' is the argument
			for a ":set" command (can be empty)</div>
<div class="old-help-para">Examples:
<div class="help-column_heading">   vi:noai:sw=3 ts=6</div><div class="help-column_heading">   vim: tw=77</div></div>
<div class="old-help-para">The second form (this is compatible with some versions of Vi):</div>
<div class="old-help-para">	[text{white}]{vi:|vim:|Vim:|ex:}[white]se[t] <code>{options}</code>:[text]</div>
<div class="old-help-para">[text{white}]		empty or any text followed by at least one blank
			character (<code>&lt;Space&gt;</code> or <code>&lt;Tab&gt;</code>); "ex:" always requires at
			least one blank character
<code>{vi:|vim:|Vim:|ex:}</code>	the string "vi:", "vim:", "Vim:" or "ex:"
[white]			optional white space
se[t]			the string "set " or "se " (note the space); When
			"Vim" is used it must be "set".
<code>{options}</code>		a list of options, separated with white space, which
			is the argument for a ":set" command
:			a colon
[text]			any text or empty</div>
<div class="old-help-para">Examples:<pre>/* vim: set ai tw=75: */
/* Vim: set ai tw=75: */</pre>
The white space before <code>{vi:|vim:|Vim:|ex:}</code> is required.  This minimizes the
chance that a normal word like "lex:" is caught.  There is one exception:
"vi:" and "vim:" can also be at the start of the line (for compatibility with
version 3.0).  Using "ex:" at the start of the line will be ignored (this
could be short for "example:").</div>
<div class="old-help-para">If the modeline is disabled within a modeline, subsequent modelines will be
ignored.  This is to allow turning off modeline on a per-file basis.  This is
useful when a line looks like a modeline but isn't.  For example, it would be
good to start a YAML file containing strings like "vim:" with
<div class="help-column_heading">    # vim: nomodeline</div>so as to avoid modeline misdetection.  Following options on the same line
after modeline deactivation, if any, are still evaluated (but you would
normally not have any).</div>
<div class="old-help-para">							<a name="modeline-local"></a><code class="help-tag-right">modeline-local</code>
The options are set like with ":setlocal": The new value only applies to the
buffer and window that contain the file.  Although it's possible to set global
options from a modeline, this is unusual.  If you have two windows open and
the files in it set the same global option to a different value, the result
depends on which one was opened last.</div>
<div class="old-help-para">When editing a file that was already loaded, only the window-local options
from the modeline are used.  Thus if you manually changed a buffer-local
option after opening the file, it won't be changed if you edit the same buffer
in another window.  But window-local options will be set.</div>
<div class="old-help-para">							<a name="modeline-version"></a><code class="help-tag-right">modeline-version</code>
If the modeline is only to be used for some versions of Vim, the version
number can be specified where "vim:" or "Vim:" is used:
	vim{vers}:	version <code>{vers}</code> or later
	vim&lt;{vers}:	version before <code>{vers}</code>
	vim={vers}:	version <code>{vers}</code>
	vim&gt;{vers}:	version after <code>{vers}</code>
<code>{vers}</code> is 700 for Vim 7.0 (hundred times the major version plus minor).
For example, to use a modeline only for Vim 7.0:<pre>/* vim700: set foldmethod=marker */</pre>
To use a modeline for Vim after version 7.2:<pre>/* vim&gt;702: set cole=2: */</pre>
There can be no blanks between "vim" and the ":".
The modeline is ignored if <code>{vers}</code> does not fit in an integer.</div>
<div class="old-help-para">The number of lines that are checked can be set with the <a href="/neovim-docs-web/en/options#'modelines'">'modelines'</a> option.
If <a href="/neovim-docs-web/en/options#'modeline'">'modeline'</a> is off or <a href="/neovim-docs-web/en/options#'modelines'">'modelines'</a> is 0 no lines are checked.</div>
<div class="old-help-para">Note that for the first form all of the rest of the line is used, thus a line
like:<pre>/* vi:ts=4: */</pre>
will give an error message for the trailing "*/".  This line is OK:<pre>/* vi:set ts=4: */</pre>
If an error is detected the rest of the line is skipped.</div>
<div class="old-help-para">If you want to include a ':' in a set command precede it with a '\'.  The
backslash in front of the ':' will be removed.  Example:<pre>/* vi:set fillchars=stl\:^,vert\:\|: */</pre>
This sets the <a href="/neovim-docs-web/en/options#'fillchars'">'fillchars'</a> option to "stl:^,vert:\|".  Only a single backslash
before the ':' is removed.  Thus to include "\:" you have to specify "\\:".
							<a name="E992"></a><code class="help-tag-right">E992</code>
No other commands than "set" are supported, for security reasons (somebody
might create a Trojan horse text file with modelines).  And not all options
can be set.  For some options a flag is set, so that when the value is used
the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a> is effective.  Some options can only be set from the modeline
when <a href="/neovim-docs-web/en/options#'modelineexpr'">'modelineexpr'</a> is set (the default is off).</div>
<div class="old-help-para">Still, there is always a small risk that a modeline causes trouble.  E.g.,
when some joker sets <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> to 5 all your lines are wrapped unexpectedly.
So disable modelines before editing untrusted text.  The mail ftplugin does
this, for example.</div>
<div class="old-help-para">Hint: If you would like to do something else than setting an option, you could
define an autocommand that checks the file for a specific string.  For
example:<pre>au BufReadPost * if getline(1) =~ "VAR" | call SetVar() | endif</pre>
And define a function SetVar() that does something with the line containing
"VAR".</div>
<div class="old-help-para"><h2 class="help-heading">3. Options summary<span class="help-heading-tags">					<a name="option-summary"></a><span class="help-tag">option-summary</span></span></h2></div>
<div class="old-help-para">In the list below all the options are mentioned with their full name and with
an abbreviation if there is one.  Both forms may be used.</div>
<div class="old-help-para">In this document when a boolean option is "set" that means that ":set option"
is entered.  When an option is "reset", ":set nooption" is used.</div>
<div class="old-help-para">Most options are the same in all windows and buffers.  There are a few that
are specific to how the text is presented in a window.  These can be set to a
different value in each window.  For example the <a href="/neovim-docs-web/en/options#'list'">'list'</a> option can be set in
one window and reset in another for the same text, giving both types of view
at the same time.  There are a few options that are specific to a certain
file.  These can have a different value for each file or buffer.  For example
the <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> option can be 78 for a normal text file and 0 for a C
program.</div>
<div class="old-help-para">	global			one option for all buffers and windows
	local to window		each window has its own copy of this option
	local to buffer		each buffer has its own copy of this option</div>
<div class="old-help-para">When creating a new window the option values from the currently active window
are used as a default value for the window-specific options.  For the
buffer-specific options this depends on the 's' and 'S' flags in the
<a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> option.  If 's' is included (which is the default) the values for
buffer options are copied from the currently active buffer when a buffer is
first entered.  If 'S' is present the options are copied each time the buffer
is entered, this is almost like having global options.  If 's' and 'S' are not
present, the options are copied from the currently active buffer when the
buffer is created.</div>
<div class="old-help-para">Hidden options						<a name="hidden-options"></a><code class="help-tag-right">hidden-options</code></div>
<div class="old-help-para">Not all options are supported in all versions.  This depends on the supported
features and sometimes on the system.  A remark about this is in curly braces
below.  When an option is not supported it may still be set without getting an
error, this is called a hidden option.  You can't get the value of a hidden
option though, it is not stored.</div>
<div class="old-help-para">To test if option "foo" can be used with ":set" use something like this:<pre>if exists('&amp;foo')</pre>
This also returns true for a hidden option.  To test if option "foo" is really
supported use something like this:<pre>if exists('+foo')</pre></div>
<div class="old-help-para">							<a name="E355"></a><code class="help-tag-right">E355</code>
A jump table for the options with a short description can be found at <a href="/neovim-docs-web/en/quickref#Q_op">Q_op</a>.</div>
<div class="old-help-para">					<a name="'aleph'"></a><code class="help-tag-right">'aleph'</code> <a name="'al'"></a><code class="help-tag">'al'</code> <a name="aleph"></a><code class="help-tag">aleph</code> <a name="Aleph"></a><code class="help-tag">Aleph</code>
<a href="/neovim-docs-web/en/options#'aleph'">'aleph'</a> <a href="/neovim-docs-web/en/options#'al'">'al'</a>		number	(default 224)
			global
	The ASCII code for the first letter of the Hebrew alphabet.  The
	routine that maps the keyboard in Hebrew mode, both in Insert mode
	(when hkmap is set) and on the command-line (when hitting <code>CTRL-_</code>)
	outputs the Hebrew characters in the range [aleph..aleph+26].
	aleph=128 applies to PC code, and aleph=224 applies to ISO 8859-8.
	See <a href="/neovim-docs-web/en/rileft#rileft.txt">rileft.txt</a>.</div>
<div class="old-help-para">			<a name="'allowrevins'"></a><code class="help-tag-right">'allowrevins'</code> <a name="'ari'"></a><code class="help-tag">'ari'</code> <a name="'noallowrevins'"></a><code class="help-tag">'noallowrevins'</code> <a name="'noari'"></a><code class="help-tag">'noari'</code>
<a href="/neovim-docs-web/en/options#'allowrevins'">'allowrevins'</a> <a href="/neovim-docs-web/en/options#'ari'">'ari'</a>	boolean	(default off)
			global
	Allow <code>CTRL-_</code> in Insert and Command-line mode.  This is default off, to
	avoid that users that accidentally type <code>CTRL-_</code> instead of SHIFT-_ get
	into reverse Insert mode, and don't know how to get out.  See
	<a href="/neovim-docs-web/en/options#'revins'">'revins'</a>.</div>
<div class="old-help-para">						<a name="'ambiwidth'"></a><code class="help-tag-right">'ambiwidth'</code> <a name="'ambw'"></a><code class="help-tag">'ambw'</code>
<a href="/neovim-docs-web/en/options#'ambiwidth'">'ambiwidth'</a> <a href="/neovim-docs-web/en/options#'ambw'">'ambw'</a>	string (default: "single")
			global
	Tells Vim what to do with characters with East Asian Width Class
	Ambiguous (such as Euro, Registered Sign, Copyright Sign, Greek
	letters, Cyrillic letters).</div>
<div class="old-help-para">	There are currently two possible values:
	"single":	Use the same width as characters in US-ASCII.  This is
			expected by most users.
	"double":	Use twice the width of ASCII characters.
							<a name="E834"></a><code class="help-tag-right">E834</code> <a name="E835"></a><code class="help-tag">E835</code>
	The value "double" cannot be used if <a href="/neovim-docs-web/en/options#'listchars'">'listchars'</a> or <a href="/neovim-docs-web/en/options#'fillchars'">'fillchars'</a>
	contains a character that would be double width.  These errors may
	also be given when calling setcellwidths().</div>
<div class="old-help-para">	The values are overruled for characters specified with
	<a href="/neovim-docs-web/en/builtin#setcellwidths()">setcellwidths()</a>.</div>
<div class="old-help-para">	There are a number of CJK fonts for which the width of glyphs for
	those characters are solely based on how many octets they take in
	legacy/traditional CJK encodings.  In those encodings, Euro,
	Registered sign, Greek/Cyrillic letters are represented by two octets,
	therefore those fonts have "wide" glyphs for them.  This is also
	true of some line drawing characters used to make tables in text
	file.  Therefore, when a CJK font is used for GUI Vim or
	Vim is running inside a terminal (emulators) that uses a CJK font
	(or Vim is run inside an xterm invoked with "-cjkwidth" option.),
	this option should be set to "double" to match the width perceived
	by Vim with the width of glyphs in the font.  Perhaps it also has
	to be set to "double" under CJK MS-Windows when the system locale is
	set to one of CJK locales.  See Unicode Standard Annex #11
	(<a href="https://www.unicode.org/reports/tr11">https://www.unicode.org/reports/tr11</a>).</div>
<div class="old-help-para">			<a name="'autochdir'"></a><code class="help-tag-right">'autochdir'</code> <a name="'acd'"></a><code class="help-tag">'acd'</code> <a name="'noautochdir'"></a><code class="help-tag">'noautochdir'</code> <a name="'noacd'"></a><code class="help-tag">'noacd'</code>
<a href="/neovim-docs-web/en/options#'autochdir'">'autochdir'</a> <a href="/neovim-docs-web/en/options#'acd'">'acd'</a>	boolean (default off)
			global
	When on, Vim will change the current working directory whenever you
	open a file, switch buffers, delete a buffer or open/close a window.
	It will change to the directory containing the file which was opened
	or selected.  When a buffer has no name it also has no directory, thus
	the current directory won't change when navigating to it.
	Note: When this option is on some plugins may not work.</div>
<div class="old-help-para">				<a name="'arabic'"></a><code class="help-tag-right">'arabic'</code> <a name="'arab'"></a><code class="help-tag">'arab'</code> <a name="'noarabic'"></a><code class="help-tag">'noarabic'</code> <a name="'noarab'"></a><code class="help-tag">'noarab'</code>
<a href="/neovim-docs-web/en/options#'arabic'">'arabic'</a> <a href="/neovim-docs-web/en/options#'arab'">'arab'</a>		boolean (default off)
			local to window
	This option can be set to start editing Arabic text.
	Setting this option will:
<div class="help-li" style=""> Set the <a href="/neovim-docs-web/en/options#'rightleft'">'rightleft'</a> option, unless <a href="/neovim-docs-web/en/options#'termbidi'">'termbidi'</a> is set.
</div><div class="help-li" style=""> Set the <a href="/neovim-docs-web/en/options#'arabicshape'">'arabicshape'</a> option, unless <a href="/neovim-docs-web/en/options#'termbidi'">'termbidi'</a> is set.
</div><div class="help-li" style=""> Set the <a href="/neovim-docs-web/en/options#'keymap'">'keymap'</a> option to "arabic"; in Insert mode <code>CTRL-^</code> toggles
	  between typing English and Arabic key mapping.
</div><div class="help-li" style=""> Set the <a href="/neovim-docs-web/en/options#'delcombine'">'delcombine'</a> option
</div></div>
<div class="old-help-para">	Resetting this option will:
<div class="help-li" style=""> Reset the <a href="/neovim-docs-web/en/options#'rightleft'">'rightleft'</a> option.
</div><div class="help-li" style=""> Disable the use of <a href="/neovim-docs-web/en/options#'keymap'">'keymap'</a> (without changing its value).
	Note that <a href="/neovim-docs-web/en/options#'arabicshape'">'arabicshape'</a> and <a href="/neovim-docs-web/en/options#'delcombine'">'delcombine'</a> are not reset (it is a global
	option).
	Also see <a href="/neovim-docs-web/en/arabic#arabic.txt">arabic.txt</a>.
</div></div>
<div class="old-help-para">					<a name="'arabicshape'"></a><code class="help-tag-right">'arabicshape'</code> <a name="'arshape'"></a><code class="help-tag">'arshape'</code>
					<a name="'noarabicshape'"></a><code class="help-tag-right">'noarabicshape'</code> <a name="'noarshape'"></a><code class="help-tag">'noarshape'</code>
<a href="/neovim-docs-web/en/options#'arabicshape'">'arabicshape'</a> <a href="/neovim-docs-web/en/options#'arshape'">'arshape'</a>	boolean (default on)
			global
	When on and <a href="/neovim-docs-web/en/options#'termbidi'">'termbidi'</a> is off, the required visual character
	corrections that need to take place for displaying the Arabic language
	take effect.  Shaping, in essence, gets enabled; the term is a broad
	one which encompasses:
	  a) the changing/morphing of characters based on their location
	     within a word (initial, medial, final and stand-alone).
	  b) the enabling of the ability to compose characters
	  c) the enabling of the required combining of some characters
	When disabled the display shows each character's true stand-alone
	form.
	Arabic is a complex language which requires other settings, for
	further details see <a href="/neovim-docs-web/en/arabic#arabic.txt">arabic.txt</a>.</div>
<div class="old-help-para">			<a name="'autoindent'"></a><code class="help-tag-right">'autoindent'</code> <a name="'ai'"></a><code class="help-tag">'ai'</code> <a name="'noautoindent'"></a><code class="help-tag">'noautoindent'</code> <a name="'noai'"></a><code class="help-tag">'noai'</code>
<a href="/neovim-docs-web/en/options#'autoindent'">'autoindent'</a> <a href="/neovim-docs-web/en/options#'ai'">'ai'</a>	boolean	(default on)
			local to buffer
	Copy indent from current line when starting a new line (typing <code>&lt;CR&gt;</code>
	in Insert mode or when using the "o" or "O" command).  If you do not
	type anything on the new line except <code>&lt;BS&gt;</code> or <code>CTRL-D</code> and then type
	<code>&lt;Esc&gt;</code>, <code>CTRL-O</code> or <code>&lt;CR&gt;</code>, the indent is deleted again.  Moving the cursor
	to another line has the same effect, unless the 'I' flag is included
	in <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a>.
	When autoindent is on, formatting (with the "gq" command or when you
	reach <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> in Insert mode) uses the indentation of the first
	line.
	When <a href="/neovim-docs-web/en/options#'smartindent'">'smartindent'</a> or <a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a> is on the indent is changed in
	a different way.
	The <a href="/neovim-docs-web/en/options#'autoindent'">'autoindent'</a> option is reset when the <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> option is set and
	restored when <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> is reset.
	<code>{small difference from Vi: After the indent is deleted when typing}</code>
	<code>&lt;Esc&gt;</code> or <code>&lt;CR&gt;</code>, the cursor position when moving up or down is after the
	deleted indent; Vi puts the cursor somewhere in the deleted indent}.</div>
<div class="old-help-para">				 <a name="'autoread'"></a><code class="help-tag-right">'autoread'</code> <a name="'ar'"></a><code class="help-tag">'ar'</code> <a name="'noautoread'"></a><code class="help-tag">'noautoread'</code> <a name="'noar'"></a><code class="help-tag">'noar'</code>
<a href="/neovim-docs-web/en/options#'autoread'">'autoread'</a> <a href="/neovim-docs-web/en/options#'ar'">'ar'</a>		boolean	(default on)
			global or local to buffer <a href="/neovim-docs-web/en/options#global-local">global-local</a>
	When a file has been detected to have been changed outside of Vim and
	it has not been changed inside of Vim, automatically read it again.
	When the file has been deleted this is not done, so you have the text
	from before it was deleted.  When it appears again then it is read.
	<a href="/neovim-docs-web/en/editing#timestamp">timestamp</a>
	If this option has a local value, use this command to switch back to
	using the global value:<pre>:set autoread&lt;</pre></div>
<div class="old-help-para">				 <a name="'autowrite'"></a><code class="help-tag-right">'autowrite'</code> <a name="'aw'"></a><code class="help-tag">'aw'</code> <a name="'noautowrite'"></a><code class="help-tag">'noautowrite'</code> <a name="'noaw'"></a><code class="help-tag">'noaw'</code>
<a href="/neovim-docs-web/en/options#'autowrite'">'autowrite'</a> <a href="/neovim-docs-web/en/options#'aw'">'aw'</a>	boolean	(default off)
			global
	Write the contents of the file, if it has been modified, on each
	<code>:next</code>, <code>:rewind</code>, <code>:last</code>, <code>:first</code>, <code>:previous</code>, <code>:stop</code>,
	<code>:suspend</code>, <code>:tag</code>, <code>:!</code>, <code>:make</code>, <code>CTRL-]</code> and <code>CTRL-^</code> command; and when
	a <code>:buffer</code>, <code>CTRL-O</code>, <code>CTRL-I</code>, '<code>{A-Z0-9}</code>, or{A-Z0-9} command takes one
	to another file.
	A buffer is not written if it becomes hidden, e.g. when <a href="/neovim-docs-web/en/options#'bufhidden'">'bufhidden'</a> is
	set to "hide" and <code>:next</code> is used.
	Note that for some commands the <a href="/neovim-docs-web/en/options#'autowrite'">'autowrite'</a> option is not used, see
	<a href="/neovim-docs-web/en/options#'autowriteall'">'autowriteall'</a> for that.
	Some buffers will not be written, specifically when <a href="/neovim-docs-web/en/options#'buftype'">'buftype'</a> is
	"nowrite", "nofile", "terminal" or "prompt".</div>
<div class="old-help-para">			 <a name="'autowriteall'"></a><code class="help-tag-right">'autowriteall'</code> <a name="'awa'"></a><code class="help-tag">'awa'</code> <a name="'noautowriteall'"></a><code class="help-tag">'noautowriteall'</code> <a name="'noawa'"></a><code class="help-tag">'noawa'</code>
<a href="/neovim-docs-web/en/options#'autowriteall'">'autowriteall'</a> <a href="/neovim-docs-web/en/options#'awa'">'awa'</a>	boolean	(default off)
			global
	Like <a href="/neovim-docs-web/en/options#'autowrite'">'autowrite'</a>, but also used for commands ":edit", ":enew", ":quit",
	":qall", ":exit", ":xit", ":recover" and closing the Vim window.
	Setting this option also implies that Vim behaves like <a href="/neovim-docs-web/en/options#'autowrite'">'autowrite'</a> has
	been set.</div>
<div class="old-help-para">							<a name="'background'"></a><code class="help-tag-right">'background'</code> <a name="'bg'"></a><code class="help-tag">'bg'</code>
<a href="/neovim-docs-web/en/options#'background'">'background'</a> <a href="/neovim-docs-web/en/options#'bg'">'bg'</a>	string	(default "dark")
			global
	When set to "dark" or "light", adjusts the default color groups for
	that background type.  The <a href="/neovim-docs-web/en/term#TUI">TUI</a> or other UI sets this on startup
	(triggering <a href="/neovim-docs-web/en/autocmd#OptionSet">OptionSet</a>) if it can detect the background color.</div>
<div class="old-help-para">	This option does NOT change the background color, it tells Nvim what
	the "inherited" (terminal/GUI) background looks like.
	See <a href="/neovim-docs-web/en/syntax#%3Ahi-normal">:hi-normal</a> if you want to set the background color explicitly.
						<a name="g%3Acolors_name"></a><code class="help-tag-right">g:colors_name</code>
	When a color scheme is loaded (the "g:colors_name" variable is set)
	setting <a href="/neovim-docs-web/en/options#'background'">'background'</a> will cause the color scheme to be reloaded.  If
	the color scheme adjusts to the value of <a href="/neovim-docs-web/en/options#'background'">'background'</a> this will work.
	However, if the color scheme sets <a href="/neovim-docs-web/en/options#'background'">'background'</a> itself the effect may
	be undone.  First delete the "g:colors_name" variable when needed.</div>
<div class="old-help-para">	Normally this option would be set in the vimrc file.  Possibly
	depending on the terminal name.  Example:<pre>:if $TERM ==# "xterm"
:  set background=dark
:endif</pre></div>
<div class="old-help-para">	When this option is set, the default settings for the highlight groups
	will change.  To use other settings, place ":highlight" commands AFTER
	the setting of the <a href="/neovim-docs-web/en/options#'background'">'background'</a> option.
	This option is also used in the "$VIMRUNTIME/syntax/syntax.vim" file
	to select the colors for syntax highlighting.  After changing this
	option, you must load syntax.vim again to see the result.  This can be
	done with ":syntax on".</div>
<div class="old-help-para">							<a name="'backspace'"></a><code class="help-tag-right">'backspace'</code> <a name="'bs'"></a><code class="help-tag">'bs'</code>
<a href="/neovim-docs-web/en/options#'backspace'">'backspace'</a> <a href="/neovim-docs-web/en/options#'bs'">'bs'</a>	string	(default "indent,eol,start")
			global
	Influences the working of <code>&lt;BS&gt;</code>, <code>&lt;Del&gt;</code>, <code>CTRL-W</code> and <code>CTRL-U</code> in Insert
	mode.  This is a list of items, separated by commas.  Each item allows
	a way to backspace over something:
<div class="help-column_heading">	value	effect</div>	indent	allow backspacing over autoindent
	eol	allow backspacing over line breaks (join lines)
	start	allow backspacing over the start of insert; <code>CTRL-W</code> and <code>CTRL-U</code>
		stop once at the start of insert.
	nostop	like start, except <code>CTRL-W</code> and <code>CTRL-U</code> do not stop at the start of
		insert.</div>
<div class="old-help-para">	When the value is empty, Vi compatible backspacing is used, none of
	the ways mentioned for the items above are possible.</div>
<div class="old-help-para">	For backwards compatibility with version 5.4 and earlier:
<div class="help-column_heading">	value	effect</div>	  0	same as ":set backspace=" (Vi compatible)
	  1	same as ":set backspace=indent,eol"
	  2	same as ":set backspace=indent,eol,start"
	  3	same as ":set backspace=indent,eol,nostop"</div>
<div class="old-help-para">				<a name="'backup'"></a><code class="help-tag-right">'backup'</code> <a name="'bk'"></a><code class="help-tag">'bk'</code> <a name="'nobackup'"></a><code class="help-tag">'nobackup'</code> <a name="'nobk'"></a><code class="help-tag">'nobk'</code>
<a href="/neovim-docs-web/en/options#'backup'">'backup'</a> <a href="/neovim-docs-web/en/options#'bk'">'bk'</a>		boolean	(default off)
			global
	Make a backup before overwriting a file.  Leave it around after the
	file has been successfully written.  If you do not want to keep the
	backup file, but you do want a backup while the file is being
	written, reset this option and set the <a href="/neovim-docs-web/en/options#'writebackup'">'writebackup'</a> option (this is
	the default).  If you do not want a backup file at all reset both
	options (use this if your file system is almost full).  See the
	<a href="/neovim-docs-web/en/editing#backup-table">backup-table</a> for more explanations.
	When the <a href="/neovim-docs-web/en/options#'backupskip'">'backupskip'</a> pattern matches, a backup is not made anyway.
	When <a href="/neovim-docs-web/en/options#'patchmode'">'patchmode'</a> is set, the backup may be renamed to become the
	oldest version of a file.</div>
<div class="old-help-para">						<a name="'backupcopy'"></a><code class="help-tag-right">'backupcopy'</code> <a name="'bkc'"></a><code class="help-tag">'bkc'</code>
<a href="/neovim-docs-web/en/options#'backupcopy'">'backupcopy'</a> <a href="/neovim-docs-web/en/options#'bkc'">'bkc'</a>	string	(default: "auto")
			global or local to buffer <a href="/neovim-docs-web/en/options#global-local">global-local</a>
	When writing a file and a backup is made, this option tells how it's
	done.  This is a comma-separated list of words.</div>
<div class="old-help-para">	The main values are:
	"yes"	make a copy of the file and overwrite the original one
	"no"	rename the file and write a new one
	"auto"	one of the previous, what works best</div>
<div class="old-help-para">	Extra values that can be combined with the ones above are:
	"breaksymlink"	always break symlinks when writing
	"breakhardlink"	always break hardlinks when writing</div>
<div class="old-help-para">	Making a copy and overwriting the original file:
<div class="help-li" style=""> Takes extra time to copy the file.
</div><div class="help-li" style=""> When the file has special attributes, is a (hard/symbolic) link or
	  has a resource fork, all this is preserved.
</div><div class="help-li" style=""> When the file is a link the backup will have the name of the link,
	  not of the real file.
</div></div>
<div class="old-help-para">	Renaming the file and writing a new one:
<div class="help-li" style=""> It's fast.
</div><div class="help-li" style=""> Sometimes not all attributes of the file can be copied to the new
	  file.
</div><div class="help-li" style=""> When the file is a link the new file will not be a link.
</div></div>
<div class="old-help-para">	The "auto" value is the middle way: When Vim sees that renaming the
	file is possible without side effects (the attributes can be passed on
	and the file is not a link) that is used.  When problems are expected,
	a copy will be made.</div>
<div class="old-help-para">	The "breaksymlink" and "breakhardlink" values can be used in
	combination with any of "yes", "no" and "auto".  When included, they
	force Vim to always break either symbolic or hard links by doing
	exactly what the "no" option does, renaming the original file to
	become the backup and writing a new file in its place.  This can be
	useful for example in source trees where all the files are symbolic or
	hard links and any changes should stay in the local source tree, not
	be propagated back to the original source.
							<a name="crontab"></a><code class="help-tag-right">crontab</code>
	One situation where "no" and "auto" will cause problems: A program
	that opens a file, invokes Vim to edit that file, and then tests if
	the open file was changed (through the file descriptor) will check the
	backup file instead of the newly created file.  "crontab -e" is an
	example.</div>
<div class="old-help-para">	When a copy is made, the original file is truncated and then filled
	with the new text.  This means that protection bits, owner and
	symbolic links of the original file are unmodified.  The backup file,
	however, is a new file, owned by the user who edited the file.  The
	group of the backup is set to the group of the original file.  If this
	fails, the protection bits for the group are made the same as for
	others.</div>
<div class="old-help-para">	When the file is renamed, this is the other way around: The backup has
	the same attributes of the original file, and the newly written file
	is owned by the current user.  When the file was a (hard/symbolic)
	link, the new file will not!  That's why the "auto" value doesn't
	rename when the file is a link.  The owner and group of the newly
	written file will be set to the same ones as the original file, but
	the system may refuse to do this.  In that case the "auto" value will
	again not rename the file.</div>
<div class="old-help-para">						<a name="'backupdir'"></a><code class="help-tag-right">'backupdir'</code> <a name="'bdir'"></a><code class="help-tag">'bdir'</code>
<a href="/neovim-docs-web/en/options#'backupdir'">'backupdir'</a> <a href="/neovim-docs-web/en/options#'bdir'">'bdir'</a>	string	(default ".,$XDG_STATE_HOME/nvim/backup//")
			global
	List of directories for the backup file, separated with commas.
<div class="help-li" style=""> The backup file will be created in the first directory in the list
	  where this is possible.  If none of the directories exist Nvim will
	  attempt to create the last directory in the list.
</div><div class="help-li" style=""> Empty means that no backup file will be created (<a href="/neovim-docs-web/en/options#'patchmode'">'patchmode'</a> is
	  impossible!).  Writing may fail because of this.
</div><div class="help-li" style=""> A directory "." means to put the backup file in the same directory
	  as the edited file.
</div><div class="help-li" style=""> A directory starting with "./" (or ".\" for MS-Windows) means to put
	  the backup file relative to where the edited file is.  The leading
	  "." is replaced with the path name of the edited file.
	  ("." inside a directory name has no special meaning).
</div><div class="help-li" style=""> Spaces after the comma are ignored, other spaces are considered part
	  of the directory name.  To have a space at the start of a directory
	  name, precede it with a backslash.
</div><div class="help-li" style=""> To include a comma in a directory name precede it with a backslash.
</div><div class="help-li" style=""> A directory name may end in an '/'.
</div><div class="help-li" style=""> For Unix and Win32, if a directory ends in two path separators "//",
	  the swap file name will be built from the complete path to the file
	  with all path separators changed to percent '%' signs. This will
	  ensure file name uniqueness in the backup directory.
	  On Win32, it is also possible to end with "\\".  However, When a
	  separating comma is following, you must use "//", since "\\" will
	  include the comma in the file name. Therefore it is recommended to
	  use '//', instead of '\\'.
</div><div class="help-li" style=""> Environment variables are expanded <a href="/neovim-docs-web/en/options#%3Aset_env">:set_env</a>.
</div><div class="help-li" style=""> Careful with '\' characters, type one before a space, type two to
	  get one in the option (see <a href="/neovim-docs-web/en/options#option-backslash">option-backslash</a>), for example:<pre>:set bdir=c:\\tmp,\ dir\\,with\\,commas,\\\ dir\ with\ spaces</pre>
</div><div class="help-li" style=""> For backwards compatibility with Vim version 3.0 a '&gt;' at the start
	  of the option is removed.
	See also <a href="/neovim-docs-web/en/options#'backup'">'backup'</a> and <a href="/neovim-docs-web/en/options#'writebackup'">'writebackup'</a> options.
	If you want to hide your backup files on Unix, consider this value:<pre>:set backupdir=./.backup,~/.backup,.,/tmp</pre>
</div></div>
<div class="old-help-para">	You must create a ".backup" directory in each directory and in your
	home directory for this to work properly.
	The use of <a href="/neovim-docs-web/en/options#%3Aset%2B%3D">:set+=</a> and <a href="/neovim-docs-web/en/options#%3Aset-%3D">:set-=</a> is preferred when adding or removing
	directories from the list.  This avoids problems when a future version
	uses another default.
	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">						<a name="'backupext'"></a><code class="help-tag-right">'backupext'</code> <a name="'bex'"></a><code class="help-tag">'bex'</code> <a name="E589"></a><code class="help-tag">E589</code>
<a href="/neovim-docs-web/en/options#'backupext'">'backupext'</a> <a href="/neovim-docs-web/en/options#'bex'">'bex'</a>	string	(default "~")
			global
	String which is appended to a file name to make the name of the
	backup file.  The default is quite unusual, because this avoids
	accidentally overwriting existing files with a backup file.  You might
	prefer using ".bak", but make sure that you don't have files with
	".bak" that you want to keep.
	Only normal file name characters can be used; "/\*?[|&lt;&gt;" are illegal.</div>
<div class="old-help-para">	If you like to keep a lot of backups, you could use a BufWritePre
	autocommand to change <a href="/neovim-docs-web/en/options#'backupext'">'backupext'</a> just before writing the file to
	include a timestamp.<pre>:au BufWritePre * let &amp;bex = '-' .. strftime("%Y%b%d%X") .. '~'</pre></div>
<div class="old-help-para">	Use <a href="/neovim-docs-web/en/options#'backupdir'">'backupdir'</a> to put the backup in a different directory.</div>
<div class="old-help-para">						<a name="'backupskip'"></a><code class="help-tag-right">'backupskip'</code> <a name="'bsk'"></a><code class="help-tag">'bsk'</code>
<a href="/neovim-docs-web/en/options#'backupskip'">'backupskip'</a> <a href="/neovim-docs-web/en/options#'bsk'">'bsk'</a>	string	(default: "$TMPDIR/*,$TMP/*,$TEMP/*"
				 Unix: "/tmp/*,$TMPDIR/*,$TMP/*,$TEMP/*"
				 Mac: "/private/tmp/*,$TMPDIR/*,$TMP/*,$TEMP/*")
			global
	A list of file patterns.  When one of the patterns matches with the
	name of the file which is written, no backup file is created.  Both
	the specified file name and the full path name of the file are used.
	The pattern is used like with <a href="/neovim-docs-web/en/autocmd#%3Aautocmd">:autocmd</a>, see <a href="/neovim-docs-web/en/autocmd#autocmd-pattern">autocmd-pattern</a>.
	Watch out for special characters, see <a href="/neovim-docs-web/en/options#option-backslash">option-backslash</a>.
	When $TMPDIR, $TMP or $TEMP is not defined, it is not used for the
	default value.  "/tmp/*" is only used for Unix.</div>
<div class="old-help-para">	WARNING: Not having a backup file means that when Vim fails to write
	your buffer correctly and then, for whatever reason, Vim exits, you
	lose both the original file and what you were writing.  Only disable
	backups if you don't care about losing the file.</div>
<div class="old-help-para">	Note that environment variables are not expanded.  If you want to use
	$HOME you must expand it explicitly, e.g.:<pre>:let &amp;backupskip = escape(expand('$HOME'), '\') .. '/tmp/*'</pre></div>
<div class="old-help-para">	Note that the default also makes sure that "crontab -e" works (when a
	backup would be made by renaming the original file crontab won't see
	the newly created file).  Also see <a href="/neovim-docs-web/en/options#'backupcopy'">'backupcopy'</a> and <a href="/neovim-docs-web/en/options#crontab">crontab</a>.</div>
<div class="old-help-para">						<a name="'belloff'"></a><code class="help-tag-right">'belloff'</code> <a name="'bo'"></a><code class="help-tag">'bo'</code>
<a href="/neovim-docs-web/en/options#'belloff'">'belloff'</a> <a href="/neovim-docs-web/en/options#'bo'">'bo'</a>		string	(default "all")
			global
	Specifies for which events the bell will not be rung. It is a comma-
	separated list of items. For each item that is present, the bell
	will be silenced. This is most useful to specify specific events in
	insert mode to be silenced.</div>
<div class="old-help-para"><div class="help-column_heading">	item	    meaning when present</div>	all	    All events.
	backspace   When hitting <code>&lt;BS&gt;</code> or <code>&lt;Del&gt;</code> and deleting results in an
		    error.
	cursor	    Fail to move around using the cursor keys or
		    <code>&lt;PageUp&gt;</code>/&lt;PageDown&gt; in <a href="/neovim-docs-web/en/insert#Insert-mode">Insert-mode</a>.
	complete    Error occurred when using <a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-K">i_CTRL-X_CTRL-K</a> or
		    <a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-T">i_CTRL-X_CTRL-T</a>.
	copy	    Cannot copy char from insert mode using <a href="/neovim-docs-web/en/insert#i_CTRL-Y">i_CTRL-Y</a> or
		    <a href="/neovim-docs-web/en/insert#i_CTRL-E">i_CTRL-E</a>.
	ctrlg	    Unknown Char after <code>&lt;C-G&gt;</code> in Insert mode.
	error	    Other Error occurred (e.g. try to join last line)
		    (mostly used in <a href="/neovim-docs-web/en/intro#Normal-mode">Normal-mode</a> or <a href="/neovim-docs-web/en/cmdline#Cmdline-mode">Cmdline-mode</a>).
	esc	    hitting <code>&lt;Esc&gt;</code> in <a href="/neovim-docs-web/en/intro#Normal-mode">Normal-mode</a>.
	hangul	    Ignored.
	lang	    Calling the beep module for Lua/Mzscheme/TCL.
	mess	    No output available for <a href="/neovim-docs-web/en/message#g%3C">g&lt;</a>.
	showmatch   Error occurred for <a href="/neovim-docs-web/en/options#'showmatch'">'showmatch'</a> function.
	operator    Empty region error <a href="/neovim-docs-web/en/options#cpo-E">cpo-E</a>.
	register    Unknown register after <code>&lt;C-R&gt;</code> in <a href="/neovim-docs-web/en/insert#Insert-mode">Insert-mode</a>.
	shell	    Bell from shell output <a href="/neovim-docs-web/en/various#%3A%21">:!</a>.
	spell	    Error happened on spell suggest.
	wildmode    More matches in <a href="/neovim-docs-web/en/cmdline#cmdline-completion">cmdline-completion</a> available
		    (depends on the <a href="/neovim-docs-web/en/options#'wildmode'">'wildmode'</a> setting).</div>
<div class="old-help-para">	This is most useful to fine tune when in Insert mode the bell should
	be rung. For Normal mode and Ex commands, the bell is often rung to
	indicate that an error occurred. It can be silenced by adding the
	"error" keyword.</div>
<div class="old-help-para">				     <a name="'binary'"></a><code class="help-tag-right">'binary'</code> <a name="'bin'"></a><code class="help-tag">'bin'</code> <a name="'nobinary'"></a><code class="help-tag">'nobinary'</code> <a name="'nobin'"></a><code class="help-tag">'nobin'</code>
<a href="/neovim-docs-web/en/options#'binary'">'binary'</a> <a href="/neovim-docs-web/en/options#'bin'">'bin'</a>		boolean	(default off)
			local to buffer
	This option should be set before editing a binary file.  You can also
	use the <a href="/neovim-docs-web/en/starting#-b">-b</a> Vim argument.  When this option is switched on a few
	options will be changed (also when it already was on):
		<a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a>  will be set to 0
		<a href="/neovim-docs-web/en/options#'wrapmargin'">'wrapmargin'</a> will be set to 0
		<a href="/neovim-docs-web/en/options#'modeline'">'modeline'</a>   will be off
		<a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a>  will be off
	Also, <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> and <a href="/neovim-docs-web/en/options#'fileformats'">'fileformats'</a> options will not be used, the
	file is read and written like <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> was "unix" (a single <code>&lt;NL&gt;</code>
	separates lines).
	The <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> and <a href="/neovim-docs-web/en/options#'fileencodings'">'fileencodings'</a> options will not be used, the
	file is read without conversion.
	NOTE: When you start editing a(nother) file while the <a href="/neovim-docs-web/en/options#'bin'">'bin'</a> option is
	on, settings from autocommands may change the settings again (e.g.,
	<a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a>), causing trouble when editing.  You might want to set
	<a href="/neovim-docs-web/en/options#'bin'">'bin'</a> again when the file has been loaded.
	The previous values of these options are remembered and restored when
	<a href="/neovim-docs-web/en/options#'bin'">'bin'</a> is switched from on to off.  Each buffer has its own set of
	saved option values.
	To edit a file with <a href="/neovim-docs-web/en/options#'binary'">'binary'</a> set you can use the <a href="/neovim-docs-web/en/editing#%2B%2Bbin">++bin</a> argument.
	This avoids you have to do ":set bin", which would have effect for all
	files you edit.
	When writing a file the <code>&lt;EOL&gt;</code> for the last line is only written if
	there was one in the original file (normally Vim appends an <code>&lt;EOL&gt;</code> to
	the last line if there is none; this would make the file longer).  See
	the <a href="/neovim-docs-web/en/options#'endofline'">'endofline'</a> option.</div>
<div class="old-help-para">							<a name="'bomb'"></a><code class="help-tag-right">'bomb'</code> <a name="'nobomb'"></a><code class="help-tag">'nobomb'</code>
<a href="/neovim-docs-web/en/options#'bomb'">'bomb'</a>			boolean	(default off)
			local to buffer
	When writing a file and the following conditions are met, a BOM (Byte
	Order Mark) is prepended to the file:
<div class="help-li" style=""> this option is on
</div><div class="help-li" style=""> the <a href="/neovim-docs-web/en/options#'binary'">'binary'</a> option is off
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> is "utf-8", "ucs-2", "ucs-4" or one of the little/big
	  endian variants.
	Some applications use the BOM to recognize the encoding of the file.
	Often used for UCS-2 files on MS-Windows.  For other applications it
	causes trouble, for example: "cat file1 file2" makes the BOM of file2
	appear halfway through the resulting file.  Gcc doesn't accept a BOM.
	When Vim reads a file and <a href="/neovim-docs-web/en/options#'fileencodings'">'fileencodings'</a> starts with "ucs-bom", a
	check for the presence of the BOM is done and <a href="/neovim-docs-web/en/options#'bomb'">'bomb'</a> set accordingly.
	Unless <a href="/neovim-docs-web/en/options#'binary'">'binary'</a> is set, it is removed from the first line, so that you
	don't see it when editing.  When you don't change the options, the BOM
	will be restored when writing the file.
</div></div>
<div class="old-help-para">						<a name="'breakat'"></a><code class="help-tag-right">'breakat'</code> <a name="'brk'"></a><code class="help-tag">'brk'</code>
<a href="/neovim-docs-web/en/options#'breakat'">'breakat'</a> <a href="/neovim-docs-web/en/options#'brk'">'brk'</a>		string	(default " ^I!@*-+;:,./?")
			global
	This option lets you choose which characters might cause a line
	break if <a href="/neovim-docs-web/en/options#'linebreak'">'linebreak'</a> is on.  Only works for ASCII characters.</div>
<div class="old-help-para">			<a name="'breakindent'"></a><code class="help-tag-right">'breakindent'</code> <a name="'bri'"></a><code class="help-tag">'bri'</code> <a name="'nobreakindent'"></a><code class="help-tag">'nobreakindent'</code> <a name="'nobri'"></a><code class="help-tag">'nobri'</code>
<a href="/neovim-docs-web/en/options#'breakindent'">'breakindent'</a> <a href="/neovim-docs-web/en/options#'bri'">'bri'</a>	boolean (default off)
			local to window
	Every wrapped line will continue visually indented (same amount of
	space as the beginning of that line), thus preserving horizontal blocks
	of text.</div>
<div class="old-help-para">						<a name="'breakindentopt'"></a><code class="help-tag-right">'breakindentopt'</code> <a name="'briopt'"></a><code class="help-tag">'briopt'</code>
<a href="/neovim-docs-web/en/options#'breakindentopt'">'breakindentopt'</a> <a href="/neovim-docs-web/en/options#'briopt'">'briopt'</a> string (default empty)
			local to window
	Settings for <a href="/neovim-docs-web/en/options#'breakindent'">'breakindent'</a>. It can consist of the following optional
	items and must be separated by a comma:
		min:{n}	    Minimum text width that will be kept after
			    applying <a href="/neovim-docs-web/en/options#'breakindent'">'breakindent'</a>, even if the resulting
			    text should normally be narrower. This prevents
			    text indented almost to the right window border
			    occupying lot of vertical space when broken.
			    (default: 20)
		shift:{n}   After applying <a href="/neovim-docs-web/en/options#'breakindent'">'breakindent'</a>, the wrapped line's
			    beginning will be shifted by the given number of
			    characters.  It permits dynamic French paragraph
			    indentation (negative) or emphasizing the line
			    continuation (positive).
			    (default: 0)
		sbr	    Display the <a href="/neovim-docs-web/en/options#'showbreak'">'showbreak'</a> value before applying the
			    additional indent.
			    (default: off)
		list:{n}    Adds an additional indent for lines that match a
			    numbered or bulleted list (using the
			    <a href="/neovim-docs-web/en/options#'formatlistpat'">'formatlistpat'</a> setting).
		list:-1	    Uses the length of a match with <a href="/neovim-docs-web/en/options#'formatlistpat'">'formatlistpat'</a>
			    for indentation.
			    (default: 0)
		column:{n}  Indent at column <code>{n}</code>. Will overrule the other
			    sub-options. Note: an additional indent may be
			    added for the <a href="/neovim-docs-web/en/options#'showbreak'">'showbreak'</a> setting.
			    (default: off)</div>
<div class="old-help-para">						<a name="'browsedir'"></a><code class="help-tag-right">'browsedir'</code> <a name="'bsdir'"></a><code class="help-tag">'bsdir'</code>
<a href="/neovim-docs-web/en/options#'browsedir'">'browsedir'</a> <a href="/neovim-docs-web/en/options#'bsdir'">'bsdir'</a>	string	(default: "last")
			global
	Which directory to use for the file browser:
	   last		Use same directory as with last file browser, where a
			file was opened or saved.
	   buffer	Use the directory of the related buffer.
	   current	Use the current directory.
	   <code>{path}</code>	Use the specified directory</div>
<div class="old-help-para">						<a name="'bufhidden'"></a><code class="help-tag-right">'bufhidden'</code> <a name="'bh'"></a><code class="help-tag">'bh'</code>
<a href="/neovim-docs-web/en/options#'bufhidden'">'bufhidden'</a> <a href="/neovim-docs-web/en/options#'bh'">'bh'</a>	string (default: "")
			local to buffer
	This option specifies what happens when a buffer is no longer
	displayed in a window:
	  <code>&lt;empty&gt;</code>	follow the global <a href="/neovim-docs-web/en/options#'hidden'">'hidden'</a> option
	  hide		hide the buffer (don't unload it), even if <a href="/neovim-docs-web/en/options#'hidden'">'hidden'</a> is
			not set
	  unload	unload the buffer, even if <a href="/neovim-docs-web/en/options#'hidden'">'hidden'</a> is set; the
			<a href="/neovim-docs-web/en/windows#%3Ahide">:hide</a> command will also unload the buffer
	  delete	delete the buffer from the buffer list, even if
			<a href="/neovim-docs-web/en/options#'hidden'">'hidden'</a> is set; the <a href="/neovim-docs-web/en/windows#%3Ahide">:hide</a> command will also delete
			the buffer, making it behave like <a href="/neovim-docs-web/en/windows#%3Abdelete">:bdelete</a>
	  wipe		wipe the buffer from the buffer list, even if
			<a href="/neovim-docs-web/en/options#'hidden'">'hidden'</a> is set; the <a href="/neovim-docs-web/en/windows#%3Ahide">:hide</a> command will also wipe
			out the buffer, making it behave like <a href="/neovim-docs-web/en/windows#%3Abwipeout">:bwipeout</a></div>
<div class="old-help-para">	CAREFUL: when "unload", "delete" or "wipe" is used changes in a buffer
	are lost without a warning.  Also, these values may break autocommands
	that switch between buffers temporarily.
	This option is used together with <a href="/neovim-docs-web/en/options#'buftype'">'buftype'</a> and <a href="/neovim-docs-web/en/options#'swapfile'">'swapfile'</a> to specify
	special kinds of buffers.   See <a href="/neovim-docs-web/en/windows#special-buffers">special-buffers</a>.</div>
<div class="old-help-para">			<a name="'buflisted'"></a><code class="help-tag-right">'buflisted'</code> <a name="'bl'"></a><code class="help-tag">'bl'</code> <a name="'nobuflisted'"></a><code class="help-tag">'nobuflisted'</code> <a name="'nobl'"></a><code class="help-tag">'nobl'</code> <a name="E85"></a><code class="help-tag">E85</code>
<a href="/neovim-docs-web/en/options#'buflisted'">'buflisted'</a> <a href="/neovim-docs-web/en/options#'bl'">'bl'</a>	boolean (default: on)
			local to buffer
	When this option is set, the buffer shows up in the buffer list.  If
	it is reset it is not used for ":bnext", "ls", the Buffers menu, etc.
	This option is reset by Vim for buffers that are only used to remember
	a file name or marks.  Vim sets it when starting to edit a buffer.
	But not when moving to a buffer with ":buffer".</div>
<div class="old-help-para">						<a name="'buftype'"></a><code class="help-tag-right">'buftype'</code> <a name="'bt'"></a><code class="help-tag">'bt'</code> <a name="E382"></a><code class="help-tag">E382</code>
<a href="/neovim-docs-web/en/options#'buftype'">'buftype'</a> <a href="/neovim-docs-web/en/options#'bt'">'bt'</a>		string (default: "")
			local to buffer
	The value of this option specifies the type of a buffer:
	  <code>&lt;empty&gt;</code>	normal buffer
	  acwrite	buffer will always be written with <a href="/neovim-docs-web/en/autocmd#BufWriteCmd">BufWriteCmd</a>s
	  help		help buffer (do not set this manually)
	  nofile	buffer is not related to a file, will not be written
	  nowrite	buffer will not be written
	  quickfix	list of errors <a href="/neovim-docs-web/en/quickfix#%3Acwindow">:cwindow</a> or locations <a href="/neovim-docs-web/en/quickfix#%3Alwindow">:lwindow</a>
	  terminal	<a href="/neovim-docs-web/en/nvim_terminal_emulator#terminal-emulator">terminal-emulator</a> buffer
	  prompt	buffer where only the last line can be edited, meant
			to be used by a plugin, see <a href="/neovim-docs-web/en/channel#prompt-buffer">prompt-buffer</a></div>
<div class="old-help-para">	This option is used together with <a href="/neovim-docs-web/en/options#'bufhidden'">'bufhidden'</a> and <a href="/neovim-docs-web/en/options#'swapfile'">'swapfile'</a> to
	specify special kinds of buffers.   See <a href="/neovim-docs-web/en/windows#special-buffers">special-buffers</a>.
	Also see <a href="/neovim-docs-web/en/builtin#win_gettype()">win_gettype()</a>, which returns the type of the window.</div>
<div class="old-help-para">	Be careful with changing this option, it can have many side effects!
	One such effect is that Vim will not check the timestamp of the file,
	if the file is changed by another program this will not be noticed.</div>
<div class="old-help-para">	A "quickfix" buffer is only used for the error list and the location
	list.  This value is set by the <a href="/neovim-docs-web/en/quickfix#%3Acwindow">:cwindow</a> and <a href="/neovim-docs-web/en/quickfix#%3Alwindow">:lwindow</a> commands and
	you are not supposed to change it.</div>
<div class="old-help-para">	"nofile" and "nowrite" buffers are similar:
	both:		The buffer is not to be written to disk, ":w" doesn't
			work (":w filename" does work though).
	both:		The buffer is never considered to be <a href="/neovim-docs-web/en/options#'modified'">'modified'</a>.
			There is no warning when the changes will be lost, for
			example when you quit Vim.
	both:		A swap file is only created when using too much memory
			(when <a href="/neovim-docs-web/en/options#'swapfile'">'swapfile'</a> has been reset there is never a swap
			file).
	nofile only:	The buffer name is fixed, it is not handled like a
			file name.  It is not modified in response to a <a href="/neovim-docs-web/en/editing#%3Acd">:cd</a>
			command.
	both:		When using ":e bufname" and already editing "bufname"
			the buffer is made empty and autocommands are
			triggered as usual for <a href="/neovim-docs-web/en/editing#%3Aedit">:edit</a>.
							<a name="E676"></a><code class="help-tag-right">E676</code>
	"acwrite" implies that the buffer name is not related to a file, like
	"nofile", but it will be written.  Thus, in contrast to "nofile" and
	"nowrite", ":w" does work and a modified buffer can't be abandoned
	without saving.  For writing there must be matching <a href="/neovim-docs-web/en/autocmd#BufWriteCmd">BufWriteCmd</a>,
	<a href="/neovim-docs-web/en/autocmd#FileWriteCmd">FileWriteCmd</a> or <a href="/neovim-docs-web/en/autocmd#FileAppendCmd">FileAppendCmd</a> autocommands.</div>
<div class="old-help-para">						<a name="'casemap'"></a><code class="help-tag-right">'casemap'</code> <a name="'cmp'"></a><code class="help-tag">'cmp'</code>
<a href="/neovim-docs-web/en/options#'casemap'">'casemap'</a> <a href="/neovim-docs-web/en/options#'cmp'">'cmp'</a>		string	(default: "internal,keepascii")
			global
	Specifies details about changing the case of letters.  It may contain
	these words, separated by a comma:
	internal	Use internal case mapping functions, the current
			locale does not change the case mapping. When
			"internal" is omitted, the towupper() and towlower()
			system library functions are used when available.
	keepascii	For the ASCII characters (0x00 to 0x7f) use the US
			case mapping, the current locale is not effective.
			This probably only matters for Turkish.</div>
<div class="old-help-para">						<a name="'cdhome'"></a><code class="help-tag-right">'cdhome'</code> <a name="'cdh'"></a><code class="help-tag">'cdh'</code>
<a href="/neovim-docs-web/en/options#'cdhome'">'cdhome'</a> <a href="/neovim-docs-web/en/options#'cdh'">'cdh'</a>		boolean	(default: off)
			global
	When on, <a href="/neovim-docs-web/en/editing#%3Acd">:cd</a>, <a href="/neovim-docs-web/en/editing#%3Atcd">:tcd</a> and <a href="/neovim-docs-web/en/editing#%3Alcd">:lcd</a> without an argument changes the
	current working directory to the <a href="/neovim-docs-web/en/options#%24HOME">$HOME</a> directory like in Unix.
	When off, those commands just print the current directory name.
	On Unix this option has no effect.</div>
<div class="old-help-para">						<a name="'cdpath'"></a><code class="help-tag-right">'cdpath'</code> <a name="'cd'"></a><code class="help-tag">'cd'</code> <a name="E344"></a><code class="help-tag">E344</code> <a name="E346"></a><code class="help-tag">E346</code>
<a href="/neovim-docs-web/en/options#'cdpath'">'cdpath'</a> <a href="/neovim-docs-web/en/options#'cd'">'cd'</a>		string	(default: equivalent to $CDPATH or ",,")
			global
	This is a list of directories which will be searched when using the
	<a href="/neovim-docs-web/en/editing#%3Acd">:cd</a>, <a href="/neovim-docs-web/en/editing#%3Atcd">:tcd</a> and <a href="/neovim-docs-web/en/editing#%3Alcd">:lcd</a> commands, provided that the directory being
	searched for has a relative path, not an absolute part starting with
	"/", "./" or "../", the <a href="/neovim-docs-web/en/options#'cdpath'">'cdpath'</a> option is not used then.
	The <a href="/neovim-docs-web/en/options#'cdpath'">'cdpath'</a> option's value has the same form and semantics as
	<a href="/neovim-docs-web/en/options#'path'">'path'</a>.  Also see <a href="/neovim-docs-web/en/editing#file-searching">file-searching</a>.
	The default value is taken from $CDPATH, with a "," prepended to look
	in the current directory first.
	If the default value taken from $CDPATH is not what you want, include
	a modified version of the following command in your vimrc file to
	override it:<pre>:let &amp;cdpath = ',' .. substitute(substitute($CDPATH, '[, ]', '\\\0', 'g'), ':', ',', 'g')</pre></div>
<div class="old-help-para">	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.
	(parts of <a href="/neovim-docs-web/en/options#'cdpath'">'cdpath'</a> can be passed to the shell to expand file names).</div>
<div class="old-help-para">						<a name="'cedit'"></a><code class="help-tag-right">'cedit'</code>
<a href="/neovim-docs-web/en/options#'cedit'">'cedit'</a>			string	(default: <code>CTRL-F</code>)
			global
	The key used in Command-line Mode to open the command-line window.
	Only non-printable keys are allowed.
	The key can be specified as a single character, but it is difficult to
	type.  The preferred way is to use the &lt;&gt; notation.  Examples:<pre>:exe "set cedit=\&lt;C-Y&gt;"
:exe "set cedit=\&lt;Esc&gt;"</pre></div>
<div class="old-help-para">	<a href="/neovim-docs-web/en/intro#Nvi">Nvi</a> also has this option, but it only uses the first character.
	See <a href="/neovim-docs-web/en/cmdline#cmdwin">cmdwin</a>.</div>
<div class="old-help-para">						<a name="'channel'"></a><code class="help-tag-right">'channel'</code>
<a href="/neovim-docs-web/en/options#'channel'">'channel'</a>		number (default: 0)
			local to buffer
	<a href="/neovim-docs-web/en/channel#channel">channel</a> connected to the buffer, or 0 if no channel is connected.
	In a <a href="/neovim-docs-web/en/various#%3Aterminal">:terminal</a> buffer this is the terminal channel.
	Read-only.</div>
<div class="old-help-para">				<a name="'charconvert'"></a><code class="help-tag-right">'charconvert'</code> <a name="'ccv'"></a><code class="help-tag">'ccv'</code> <a name="E202"></a><code class="help-tag">E202</code> <a name="E214"></a><code class="help-tag">E214</code> <a name="E513"></a><code class="help-tag">E513</code>
<a href="/neovim-docs-web/en/options#'charconvert'">'charconvert'</a> <a href="/neovim-docs-web/en/options#'ccv'">'ccv'</a>	string (default "")
			global
	An expression that is used for character encoding conversion.  It is
	evaluated when a file that is to be read or has been written has a
	different encoding from what is desired.
	<a href="/neovim-docs-web/en/options#'charconvert'">'charconvert'</a> is not used when the internal iconv() function is
	supported and is able to do the conversion.  Using iconv() is
	preferred, because it is much faster.
	<a href="/neovim-docs-web/en/options#'charconvert'">'charconvert'</a> is not used when reading stdin <a href="/neovim-docs-web/en/starting#--">--</a>, because there is no
	file to convert from.  You will have to save the text in a file first.
	The expression must return zero, false or an empty string for success,
	non-zero or true for failure.
	See <a href="/neovim-docs-web/en/mbyte#encoding-names">encoding-names</a> for possible encoding names.
	Additionally, names given in <a href="/neovim-docs-web/en/options#'fileencodings'">'fileencodings'</a> and <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> are
	used.
	Conversion between "latin1", "unicode", "ucs-2", "ucs-4" and "utf-8"
	is done internally by Vim, <a href="/neovim-docs-web/en/options#'charconvert'">'charconvert'</a> is not used for this.
	Also used for Unicode conversion.
	Example:<pre>set charconvert=CharConvert()
fun CharConvert()
  system("recode "
        \ .. v:charconvert_from .. ".." .. v:charconvert_to
        \ .. " &lt;" .. v:fname_in .. " &gt;" .. v:fname_out)
  return v:shell_error
endfun</pre></div>
<div class="old-help-para">	The related Vim variables are:
		v:charconvert_from	name of the current encoding
		v:charconvert_to	name of the desired encoding
		v:fname_in		name of the input file
		v:fname_out		name of the output file
	Note that v:fname_in and v:fname_out will never be the same.
	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">				   <a name="'cindent'"></a><code class="help-tag-right">'cindent'</code> <a name="'cin'"></a><code class="help-tag">'cin'</code> <a name="'nocindent'"></a><code class="help-tag">'nocindent'</code> <a name="'nocin'"></a><code class="help-tag">'nocin'</code>
<a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a> <a href="/neovim-docs-web/en/options#'cin'">'cin'</a>		boolean	(default off)
			local to buffer
	Enables automatic C program indenting.  See <a href="/neovim-docs-web/en/options#'cinkeys'">'cinkeys'</a> to set the keys
	that trigger reindenting in insert mode and <a href="/neovim-docs-web/en/options#'cinoptions'">'cinoptions'</a> to set your
	preferred indent style.
	If <a href="/neovim-docs-web/en/options#'indentexpr'">'indentexpr'</a> is not empty, it overrules <a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a>.
	If <a href="/neovim-docs-web/en/options#'lisp'">'lisp'</a> is not on and both <a href="/neovim-docs-web/en/options#'indentexpr'">'indentexpr'</a> and <a href="/neovim-docs-web/en/options#'equalprg'">'equalprg'</a> are empty,
	the "=" operator indents using this algorithm rather than calling an
	external program.
	See <a href="/neovim-docs-web/en/indent#C-indenting">C-indenting</a>.
	When you don't like the way <a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a> works, try the <a href="/neovim-docs-web/en/options#'smartindent'">'smartindent'</a>
	option or <a href="/neovim-docs-web/en/options#'indentexpr'">'indentexpr'</a>.
	This option is not used when <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> is set.</div>
<div class="old-help-para">							<a name="'cinkeys'"></a><code class="help-tag-right">'cinkeys'</code> <a name="'cink'"></a><code class="help-tag">'cink'</code>
<a href="/neovim-docs-web/en/options#'cinkeys'">'cinkeys'</a> <a href="/neovim-docs-web/en/options#'cink'">'cink'</a>	string	(default "0{,0},0),0],:,0#,!^F,o,O,e")
			local to buffer
	A list of keys that, when typed in Insert mode, cause reindenting of
	the current line.  Only used if <a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a> is on and <a href="/neovim-docs-web/en/options#'indentexpr'">'indentexpr'</a> is
	empty.
	For the format of this option see <a href="/neovim-docs-web/en/indent#cinkeys-format">cinkeys-format</a>.
	See <a href="/neovim-docs-web/en/indent#C-indenting">C-indenting</a>.</div>
<div class="old-help-para">						<a name="'cinoptions'"></a><code class="help-tag-right">'cinoptions'</code> <a name="'cino'"></a><code class="help-tag">'cino'</code>
<a href="/neovim-docs-web/en/options#'cinoptions'">'cinoptions'</a> <a href="/neovim-docs-web/en/options#'cino'">'cino'</a>	string	(default "")
			local to buffer
	The <a href="/neovim-docs-web/en/options#'cinoptions'">'cinoptions'</a> affect the way <a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a> reindents lines in a C
	program.  See <a href="/neovim-docs-web/en/indent#cinoptions-values">cinoptions-values</a> for the values of this option, and
	<a href="/neovim-docs-web/en/indent#C-indenting">C-indenting</a> for info on C indenting in general.</div>
<div class="old-help-para">						<a name="'cinwords'"></a><code class="help-tag-right">'cinwords'</code> <a name="'cinw'"></a><code class="help-tag">'cinw'</code>
<a href="/neovim-docs-web/en/options#'cinwords'">'cinwords'</a> <a href="/neovim-docs-web/en/options#'cinw'">'cinw'</a>	string	(default "if,else,while,do,for,switch")
			local to buffer
	These keywords start an extra indent in the next line when
	<a href="/neovim-docs-web/en/options#'smartindent'">'smartindent'</a> or <a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a> is set.  For <a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a> this is only done at
	an appropriate place (inside {}).
	Note that <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> isn't used for <a href="/neovim-docs-web/en/options#'cinwords'">'cinwords'</a>.  If case doesn't
	matter, include the keyword both the uppercase and lowercase:
	"if,If,IF".</div>
<div class="old-help-para">						<a name="'cinscopedecls'"></a><code class="help-tag-right">'cinscopedecls'</code> <a name="'cinsd'"></a><code class="help-tag">'cinsd'</code>
<a href="/neovim-docs-web/en/options#'cinscopedecls'">'cinscopedecls'</a> <a href="/neovim-docs-web/en/options#'cinsd'">'cinsd'</a>	string	(default "public,protected,private")
			local to buffer
	Keywords that are interpreted as a C++ scope declaration by <a href="/neovim-docs-web/en/indent#cino-g">cino-g</a>.
	Useful e.g. for working with the Qt framework that defines additional
	scope declarations "signals", "public slots" and "private slots":<pre>set cinscopedecls+=signals,public\ slots,private\ slots</pre></div>
<div class="old-help-para">						<a name="'clipboard'"></a><code class="help-tag-right">'clipboard'</code> <a name="'cb'"></a><code class="help-tag">'cb'</code>
<a href="/neovim-docs-web/en/options#'clipboard'">'clipboard'</a> <a href="/neovim-docs-web/en/options#'cb'">'cb'</a>	string	(default "")
			global
	This option is a list of comma-separated names.
	These names are recognized:</div>
<div class="old-help-para">						<a name="clipboard-unnamed"></a><code class="help-tag-right">clipboard-unnamed</code>
	unnamed		When included, Vim will use the clipboard register '*'			for all yank, delete, change and put operations which
			would normally go to the unnamed register.  When a
			register is explicitly specified, it will always be
			used regardless of whether "unnamed" is in <a href="/neovim-docs-web/en/options#'clipboard'">'clipboard'</a>
			or not.  The clipboard register can always be
			explicitly accessed using the "* notation.  Also see
			<a href="/neovim-docs-web/en/provider#clipboard">clipboard</a>.</div>
<div class="old-help-para">						<a name="clipboard-unnamedplus"></a><code class="help-tag-right">clipboard-unnamedplus</code>
	unnamedplus	A variant of the "unnamed" flag which uses the
			clipboard register '+' (<a href="/neovim-docs-web/en/provider#quoteplus">quoteplus</a>) instead of
			register '' for all yank, delete, change and put
			operations which would normally go to the unnamed
			register.  When "unnamed" is also included to the
			option, yank and delete operations (but not put)
			will additionally copy the text into register
			''. See <a href="/neovim-docs-web/en/provider#clipboard">clipboard</a>.</div>
<div class="old-help-para">						<a name="'cmdheight'"></a><code class="help-tag-right">'cmdheight'</code> <a name="'ch'"></a><code class="help-tag">'ch'</code>
<a href="/neovim-docs-web/en/options#'cmdheight'">'cmdheight'</a> <a href="/neovim-docs-web/en/options#'ch'">'ch'</a>	number	(default 1)
			global or local to tab page
	Number of screen lines to use for the command-line.  Helps avoiding
	<a href="/neovim-docs-web/en/message#hit-enter">hit-enter</a> prompts.
	The value of this option is stored with the tab page, so that each tab
	page can have a different value.</div>
<div class="old-help-para">	When <a href="/neovim-docs-web/en/options#'cmdheight'">'cmdheight'</a> is zero, there is no command-line unless it is being
	used.  The command-line will cover the last line of the screen when
	shown.</div>
<div class="old-help-para">	WARNING: <code>cmdheight=0</code> is considered experimental. Expect some
	unwanted behaviour. Some <a href="/neovim-docs-web/en/options#'shortmess'">'shortmess'</a> flags and similar
	mechanism might fail to take effect, causing unwanted hit-enter
	prompts.  Some informative messages, both from Nvim itself and
	plugins, will not be displayed.</div>
<div class="old-help-para">						<a name="'cmdwinheight'"></a><code class="help-tag-right">'cmdwinheight'</code> <a name="'cwh'"></a><code class="help-tag">'cwh'</code>
<a href="/neovim-docs-web/en/options#'cmdwinheight'">'cmdwinheight'</a> <a href="/neovim-docs-web/en/options#'cwh'">'cwh'</a>	number	(default 7)
			global
	Number of screen lines to use for the command-line window. <a href="/neovim-docs-web/en/cmdline#cmdwin">cmdwin</a></div>
<div class="old-help-para">						<a name="'colorcolumn'"></a><code class="help-tag-right">'colorcolumn'</code> <a name="'cc'"></a><code class="help-tag">'cc'</code>
<a href="/neovim-docs-web/en/options#'colorcolumn'">'colorcolumn'</a> <a href="/neovim-docs-web/en/options#'cc'">'cc'</a>	string	(default "")
			local to window
	<a href="/neovim-docs-web/en/options#'colorcolumn'">'colorcolumn'</a> is a comma-separated list of screen columns that are
	highlighted with ColorColumn <a href="/neovim-docs-web/en/syntax#hl-ColorColumn">hl-ColorColumn</a>.  Useful to align
	text.  Will make screen redrawing slower.
	The screen column can be an absolute number, or a number preceded with
	'+' or '-', which is added to or subtracted from <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a>.<pre>:set cc=+1  " highlight column after 'textwidth'
:set cc=+1,+2,+3  " highlight three columns after 'textwidth'
:hi ColorColumn ctermbg=lightgrey guibg=lightgrey</pre></div>
<div class="old-help-para">	When <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> is zero then the items with '-' and '+' are not used.
	A maximum of 256 columns are highlighted.</div>
<div class="old-help-para">						<a name="'columns'"></a><code class="help-tag-right">'columns'</code> <a name="'co'"></a><code class="help-tag">'co'</code> <a name="E594"></a><code class="help-tag">E594</code>
<a href="/neovim-docs-web/en/options#'columns'">'columns'</a> <a href="/neovim-docs-web/en/options#'co'">'co'</a>		number	(default 80 or terminal width)
			global
	Number of columns of the screen.  Normally this is set by the terminal
	initialization and does not have to be set by hand.
	When Vim is running in the GUI or in a resizable window, setting this
	option will cause the window size to be changed.  When you only want
	to use the size for the GUI, put the command in your <a href="/neovim-docs-web/en/gui#ginit.vim">ginit.vim</a> file.
	When you set this option and Vim is unable to change the physical
	number of columns of the display, the display may be messed up.  For
	the GUI it is always possible and Vim limits the number of columns to
	what fits on the screen.  You can use this command to get the widest
	window possible:<pre>:set columns=9999</pre></div>
<div class="old-help-para">	Minimum value is 12, maximum value is 10000.</div>
<div class="old-help-para">					<a name="'comments'"></a><code class="help-tag-right">'comments'</code> <a name="'com'"></a><code class="help-tag">'com'</code> <a name="E524"></a><code class="help-tag">E524</code> <a name="E525"></a><code class="help-tag">E525</code>
<a href="/neovim-docs-web/en/options#'comments'">'comments'</a> <a href="/neovim-docs-web/en/options#'com'">'com'</a>	string	(default
				"s1:/*,mb:*,ex:*/,://,b:#,:%,:XCOMM,n:&gt;,fb:-")
			local to buffer
	A comma-separated list of strings that can start a comment line.  See
	<a href="/neovim-docs-web/en/change#format-comments">format-comments</a>.  See <a href="/neovim-docs-web/en/options#option-backslash">option-backslash</a> about using backslashes to
	insert a space.</div>
<div class="old-help-para">					<a name="'commentstring'"></a><code class="help-tag-right">'commentstring'</code> <a name="'cms'"></a><code class="help-tag">'cms'</code> <a name="E537"></a><code class="help-tag">E537</code>
<a href="/neovim-docs-web/en/options#'commentstring'">'commentstring'</a> <a href="/neovim-docs-web/en/options#'cms'">'cms'</a>	string	(default "/*%s*/")
			local to buffer
	A template for a comment.  The "%s" in the value is replaced with the
	comment text.  Currently only used to add markers for folding, see
	<a href="/neovim-docs-web/en/fold#fold-marker">fold-marker</a>.</div>
<div class="old-help-para">						<a name="'complete'"></a><code class="help-tag-right">'complete'</code> <a name="'cpt'"></a><code class="help-tag">'cpt'</code> <a name="E535"></a><code class="help-tag">E535</code>
<a href="/neovim-docs-web/en/options#'complete'">'complete'</a> <a href="/neovim-docs-web/en/options#'cpt'">'cpt'</a>	string	(default: ".,w,b,u,t")
			local to buffer
	This option specifies how keyword completion <a href="/neovim-docs-web/en/insert#ins-completion">ins-completion</a> works
	when <code>CTRL-P</code> or <code>CTRL-N</code> are used.  It is also used for whole-line
	completion <a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-L">i_CTRL-X_CTRL-L</a>.  It indicates the type of completion
	and the places to scan.  It is a comma-separated list of flags:
	.	scan the current buffer (<a href="/neovim-docs-web/en/options#'wrapscan'">'wrapscan'</a> is ignored)
	w	scan buffers from other windows
	b	scan other loaded buffers that are in the buffer list
	u	scan the unloaded buffers that are in the buffer list
	U	scan the buffers that are not in the buffer list
	k	scan the files given with the <a href="/neovim-docs-web/en/options#'dictionary'">'dictionary'</a> option
	kspell  use the currently active spell checking <a href="/neovim-docs-web/en/spell#spell">spell</a>
	k{dict}	scan the file <code>{dict}</code>.  Several "k" flags can be given,
		patterns are valid too.  For example:<pre>:set cpt=k/usr/dict/*,k~/spanish</pre></div>
<div class="old-help-para">	s	scan the files given with the <a href="/neovim-docs-web/en/options#'thesaurus'">'thesaurus'</a> option
	s{tsr}	scan the file <code>{tsr}</code>.  Several "s" flags can be given, patterns
		are valid too.
	i	scan current and included files
	d	scan current and included files for defined name or macro
		<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-D">i_CTRL-X_CTRL-D</a>
	]	tag completion
	t	same as "]"</div>
<div class="old-help-para">	Unloaded buffers are not loaded, thus their autocmds <a href="/neovim-docs-web/en/autocmd#%3Aautocmd">:autocmd</a> are
	not executed, this may lead to unexpected completions from some files
	(gzipped files for example).  Unloaded buffers are not scanned for
	whole-line completion.</div>
<div class="old-help-para">	As you can see, <code>CTRL-N</code> and <code>CTRL-P</code> can be used to do any <a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a>-
	based expansion (e.g., dictionary <a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-K">i_CTRL-X_CTRL-K</a>, included patterns
	<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-I">i_CTRL-X_CTRL-I</a>, tags <a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-%5D">i_CTRL-X_CTRL-]</a> and normal expansions).</div>
<div class="old-help-para">						<a name="'completefunc'"></a><code class="help-tag-right">'completefunc'</code> <a name="'cfu'"></a><code class="help-tag">'cfu'</code>
<a href="/neovim-docs-web/en/options#'completefunc'">'completefunc'</a> <a href="/neovim-docs-web/en/options#'cfu'">'cfu'</a>	string	(default: empty)
			local to buffer
	This option specifies a function to be used for Insert mode completion
	with <code>CTRL-X</code> <code>CTRL-U</code>. <a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-U">i_CTRL-X_CTRL-U</a>
	See <a href="/neovim-docs-web/en/insert#complete-functions">complete-functions</a> for an explanation of how the function is
	invoked and what it should return.  The value can be the name of a
	function, a <a href="/neovim-docs-web/en/eval#lambda">lambda</a> or a <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a>. See <a href="/neovim-docs-web/en/options#option-value-function">option-value-function</a> for
	more information.
	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">						<a name="'completeslash'"></a><code class="help-tag-right">'completeslash'</code> <a name="'csl'"></a><code class="help-tag">'csl'</code>
<a href="/neovim-docs-web/en/options#'completeslash'">'completeslash'</a> <a href="/neovim-docs-web/en/options#'csl'">'csl'</a>	string	(default: "")
			local to buffer
			<code>{only for MS-Windows}</code>
	When this option is set it overrules <a href="/neovim-docs-web/en/options#'shellslash'">'shellslash'</a> for completion:
<div class="help-li" style=""> When this option is set to "slash", a forward slash is used for path
	  completion in insert mode. This is useful when editing HTML tag, or
	  Makefile with <a href="/neovim-docs-web/en/options#'noshellslash'">'noshellslash'</a> on MS-Windows.
</div><div class="help-li" style=""> When this option is set to "backslash", backslash is used. This is
	  useful when editing a batch file with <a href="/neovim-docs-web/en/options#'shellslash'">'shellslash'</a> set on MS-Windows.
</div><div class="help-li" style=""> When this option is empty, same character is used as for
	  <a href="/neovim-docs-web/en/options#'shellslash'">'shellslash'</a>.
	For Insert mode completion the buffer-local value is used.  For
	command line completion the global value is used.
</div></div>
<div class="old-help-para">						<a name="'completeopt'"></a><code class="help-tag-right">'completeopt'</code> <a name="'cot'"></a><code class="help-tag">'cot'</code>
<a href="/neovim-docs-web/en/options#'completeopt'">'completeopt'</a> <a href="/neovim-docs-web/en/options#'cot'">'cot'</a>	string	(default: "menu,preview")
			global
	A comma-separated list of options for Insert mode completion
	<a href="/neovim-docs-web/en/insert#ins-completion">ins-completion</a>.  The supported values are:</div>
<div class="old-help-para">	   menu	    Use a popup menu to show the possible completions.  The
		    menu is only shown when there is more than one match and
		    sufficient colors are available.  <a href="/neovim-docs-web/en/insert#ins-completion-menu">ins-completion-menu</a></div>
<div class="old-help-para">	   menuone  Use the popup menu also when there is only one match.
		    Useful when there is additional information about the
		    match, e.g., what file it comes from.</div>
<div class="old-help-para">	   longest  Only insert the longest common text of the matches.  If
		    the menu is displayed you can use <code>CTRL-L</code> to add more
		    characters.  Whether case is ignored depends on the kind
		    of completion.  For buffer text the <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> option is
		    used.</div>
<div class="old-help-para">	   preview  Show extra information about the currently selected
		    completion in the preview window.  Only works in
		    combination with "menu" or "menuone".</div>
<div class="old-help-para">	  noinsert  Do not insert any text for a match until the user selects
		    a match from the menu. Only works in combination with
		    "menu" or "menuone". No effect if "longest" is present.</div>
<div class="old-help-para">	  noselect  Do not select a match in the menu, force the user to
		    select one from the menu. Only works in combination with
		    "menu" or "menuone".</div>
<div class="old-help-para">						<a name="'concealcursor'"></a><code class="help-tag-right">'concealcursor'</code> <a name="'cocu'"></a><code class="help-tag">'cocu'</code>
<a href="/neovim-docs-web/en/options#'concealcursor'">'concealcursor'</a> <a href="/neovim-docs-web/en/options#'cocu'">'cocu'</a>	string (default: "")
			local to window
	Sets the modes in which text in the cursor line can also be concealed.
	When the current mode is listed then concealing happens just like in
	other lines.
	  n		Normal mode
	  v		Visual mode
	  i		Insert mode
	  c		Command line editing, for <a href="/neovim-docs-web/en/options#'incsearch'">'incsearch'</a></div>
<div class="old-help-para">	'v' applies to all lines in the Visual area, not only the cursor.
	A useful value is "nc".  This is used in help files.  So long as you
	are moving around text is concealed, but when starting to insert text
	or selecting a Visual area the concealed text is displayed, so that
	you can see what you are doing.
	Keep in mind that the cursor position is not always where it's
	displayed.  E.g., when moving vertically it may change column.</div>
<div class="old-help-para">						<a name="'conceallevel'"></a><code class="help-tag-right">'conceallevel'</code> <a name="'cole'"></a><code class="help-tag">'cole'</code>
<a href="/neovim-docs-web/en/options#'conceallevel'">'conceallevel'</a> <a href="/neovim-docs-web/en/options#'cole'">'cole'</a>	number (default 0)
			local to window
	Determine how text with the "conceal" syntax attribute <a href="/neovim-docs-web/en/syntax#%3Asyn-conceal">:syn-conceal</a>
	is shown:</div>
<div class="old-help-para"><div class="help-column_heading">	Value		Effect</div>	0		Text is shown normally
	1		Each block of concealed text is replaced with one
			character.  If the syntax item does not have a custom
			replacement character defined (see <a href="/neovim-docs-web/en/syntax#%3Asyn-cchar">:syn-cchar</a>) the
			character defined in <a href="/neovim-docs-web/en/options#'listchars'">'listchars'</a> is used.
			It is highlighted with the "Conceal" highlight group.
	2		Concealed text is completely hidden unless it has a
			custom replacement character defined (see
			<a href="/neovim-docs-web/en/syntax#%3Asyn-cchar">:syn-cchar</a>).
	3		Concealed text is completely hidden.</div>
<div class="old-help-para">	Note: in the cursor line concealed text is not hidden, so that you can
	edit and copy the text.  This can be changed with the <a href="/neovim-docs-web/en/options#'concealcursor'">'concealcursor'</a>
	option.</div>
<div class="old-help-para">				<a name="'confirm'"></a><code class="help-tag-right">'confirm'</code> <a name="'cf'"></a><code class="help-tag">'cf'</code> <a name="'noconfirm'"></a><code class="help-tag">'noconfirm'</code> <a name="'nocf'"></a><code class="help-tag">'nocf'</code>
<a href="/neovim-docs-web/en/options#'confirm'">'confirm'</a> <a href="/neovim-docs-web/en/options#'cf'">'cf'</a>		boolean (default off)
			global
	When <a href="/neovim-docs-web/en/options#'confirm'">'confirm'</a> is on, certain operations that would normally
	fail because of unsaved changes to a buffer, e.g. ":q" and ":e",
	instead raise a dialog asking if you wish to save the current
	file(s).  You can still use a ! to unconditionally <a href="/neovim-docs-web/en/editing#abandon">abandon</a> a buffer.
	If <a href="/neovim-docs-web/en/options#'confirm'">'confirm'</a> is off you can still activate confirmation for one
	command only (this is most useful in mappings) with the <a href="/neovim-docs-web/en/editing#%3Aconfirm">:confirm</a>
	command.
	Also see the <a href="/neovim-docs-web/en/builtin#confirm()">confirm()</a> function and the 'v' flag in <a href="/neovim-docs-web/en/options#'guioptions'">'guioptions'</a>.</div>
<div class="old-help-para">			<a name="'copyindent'"></a><code class="help-tag-right">'copyindent'</code> <a name="'ci'"></a><code class="help-tag">'ci'</code> <a name="'nocopyindent'"></a><code class="help-tag">'nocopyindent'</code> <a name="'noci'"></a><code class="help-tag">'noci'</code>
<a href="/neovim-docs-web/en/options#'copyindent'">'copyindent'</a> <a href="/neovim-docs-web/en/options#'ci'">'ci'</a>	boolean	(default off)
			local to buffer
	Copy the structure of the existing lines indent when autoindenting a
	new line.  Normally the new indent is reconstructed by a series of
	tabs followed by spaces as required (unless <a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a> is enabled,
	in which case only spaces are used).  Enabling this option makes the
	new line copy whatever characters were used for indenting on the
	existing line.  <a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a> has no effect on these characters, a Tab
	remains a Tab.  If the new indent is greater than on the existing
	line, the remaining space is filled in the normal manner.
	See <a href="/neovim-docs-web/en/options#'preserveindent'">'preserveindent'</a>.</div>
<div class="old-help-para">						<a name="'cpoptions'"></a><code class="help-tag-right">'cpoptions'</code> <a name="'cpo'"></a><code class="help-tag">'cpo'</code> <a name="cpo"></a><code class="help-tag">cpo</code>
<a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> <a href="/neovim-docs-web/en/options#'cpo'">'cpo'</a>	string	(default: "aABceFs_")
			global
	A sequence of single character flags.  When a character is present
	this indicates Vi-compatible behavior.  This is used for things where
	not being Vi-compatible is mostly or sometimes preferred.
	<a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> stands for "compatible-options".
	Commas can be added for readability.
	To avoid problems with flags that are added in the future, use the
	"+=" and "-=" feature of ":set" <a href="/neovim-docs-web/en/options#add-option-flags">add-option-flags</a>.</div>
<div class="old-help-para"><div class="help-column_heading">	    contains	behavior</div>								<a name="cpo-a"></a><code class="help-tag-right">cpo-a</code>
		a	When included, a ":read" command with a file name
			argument will set the alternate file name for the
			current window.
								<a name="cpo-A"></a><code class="help-tag-right">cpo-A</code>
		A	When included, a ":write" command with a file name
			argument will set the alternate file name for the
			current window.
								<a name="cpo-b"></a><code class="help-tag-right">cpo-b</code>
		b	"\|" in a ":map" command is recognized as the end of
			the map command.  The '\' is included in the mapping,
			the text after the '|' is interpreted as the next
			command.  Use a <code>CTRL-V</code> instead of a backslash to
			include the '|' in the mapping.  Applies to all
			mapping, abbreviation, menu and autocmd commands.
			See also <a href="/neovim-docs-web/en/map#map_bar">map_bar</a>.
								<a name="cpo-B"></a><code class="help-tag-right">cpo-B</code>
		B	A backslash has no special meaning in mappings,
			abbreviations, user commands and the "to" part of the
			menu commands.  Remove this flag to be able to use a
			backslash like a <code>CTRL-V</code>.  For example, the command
			":map X \&lt;Esc&gt;" results in X being mapped to:
				'B' included:	"\^["	 (^[ is a real <code>&lt;Esc&gt;</code>)
				'B' excluded:	"&lt;Esc&gt;"  (5 characters)
								<a name="cpo-c"></a><code class="help-tag-right">cpo-c</code>
		c	Searching continues at the end of any match at the
			cursor position, but not further than the start of the
			next line.  When not present searching continues
			one character from the cursor position.  With 'c'
			"abababababab" only gets three matches when repeating
			"/abab", without 'c' there are five matches.
								<a name="cpo-C"></a><code class="help-tag-right">cpo-C</code>
		C	Do not concatenate sourced lines that start with a
			backslash.  See <a href="/neovim-docs-web/en/repeat#line-continuation">line-continuation</a>.
								<a name="cpo-d"></a><code class="help-tag-right">cpo-d</code>
		d	Using "./" in the <a href="/neovim-docs-web/en/options#'tags'">'tags'</a> option doesn't mean to use
			the tags file relative to the current file, but the
			tags file in the current directory.
								<a name="cpo-D"></a><code class="help-tag-right">cpo-D</code>
		D	Can't use <code>CTRL-K</code> to enter a digraph after Normal mode
			commands with a character argument, like <a href="/neovim-docs-web/en/change#r">r</a>, <a href="/neovim-docs-web/en/motion#f">f</a> and
			<a href="/neovim-docs-web/en/motion#t">t</a>.
								<a name="cpo-e"></a><code class="help-tag-right">cpo-e</code>
		e	When executing a register with ":@r", always add a
			<code>&lt;CR&gt;</code> to the last line, also when the register is not
			linewise.  If this flag is not present, the register
			is not linewise and the last line does not end in a
			<code>&lt;CR&gt;</code>, then the last line is put on the command-line
			and can be edited before hitting <code>&lt;CR&gt;</code>.
								<a name="cpo-E"></a><code class="help-tag-right">cpo-E</code>
		E	It is an error when using "y", "d", "c", "g~", "gu" or
			"gU" on an Empty region.  The operators only work when
			at least one character is to be operated on.  Example:
			This makes "y0" fail in the first column.
								<a name="cpo-f"></a><code class="help-tag-right">cpo-f</code>
		f	When included, a ":read" command with a file name
			argument will set the file name for the current buffer,
			if the current buffer doesn't have a file name yet.
								<a name="cpo-F"></a><code class="help-tag-right">cpo-F</code>
		F	When included, a ":write" command with a file name
			argument will set the file name for the current
			buffer, if the current buffer doesn't have a file name
			yet.  Also see <a href="/neovim-docs-web/en/options#cpo-P">cpo-P</a>.
								<a name="cpo-i"></a><code class="help-tag-right">cpo-i</code>
		i	When included, interrupting the reading of a file will
			leave it modified.
								<a name="cpo-I"></a><code class="help-tag-right">cpo-I</code>
		I	When moving the cursor up or down just after inserting
			indent for <a href="/neovim-docs-web/en/options#'autoindent'">'autoindent'</a>, do not delete the indent.
								<a name="cpo-J"></a><code class="help-tag-right">cpo-J</code>
		J	A <a href="/neovim-docs-web/en/motion#sentence">sentence</a> has to be followed by two spaces after
			the '.', '!' or '?'.  A <code>&lt;Tab&gt;</code> is not recognized as
			white space.
								<a name="cpo-K"></a><code class="help-tag-right">cpo-K</code>
		K	Don't wait for a key code to complete when it is
			halfway through a mapping.  This breaks mapping
			<code>&lt;F1&gt;</code><code>&lt;F1&gt;</code> when only part of the second <code>&lt;F1&gt;</code> has been
			read.  It enables cancelling the mapping by typing
			<code>&lt;F1&gt;</code><code>&lt;Esc&gt;</code>.
								<a name="cpo-l"></a><code class="help-tag-right">cpo-l</code>
		l	Backslash in a [] range in a search pattern is taken
			literally, only "\]", "\^", "\-" and "\\" are special.
			See <a href="/neovim-docs-web/en/pattern#%2F%5B%5D">/[]</a>
			   'l' included: "/[ \t]"  finds <code>&lt;Space&gt;</code>, '\' and 't'
			   'l' excluded: "/[ \t]"  finds <code>&lt;Space&gt;</code> and <code>&lt;Tab&gt;</code>
								<a name="cpo-L"></a><code class="help-tag-right">cpo-L</code>
		L	When the <a href="/neovim-docs-web/en/options#'list'">'list'</a> option is set, <a href="/neovim-docs-web/en/options#'wrapmargin'">'wrapmargin'</a>,
			<a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a>, <a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a> and Virtual Replace mode
			(see <a href="/neovim-docs-web/en/change#gR">gR</a>) count a <code>&lt;Tab&gt;</code> as two characters, instead of
			the normal behavior of a <code>&lt;Tab&gt;</code>.
								<a name="cpo-m"></a><code class="help-tag-right">cpo-m</code>
		m	When included, a showmatch will always wait half a
			second.  When not included, a showmatch will wait half
			a second or until a character is typed.  <a href="/neovim-docs-web/en/options#'showmatch'">'showmatch'</a>
								<a name="cpo-M"></a><code class="help-tag-right">cpo-M</code>
		M	When excluded, "%" matching will take backslashes into
			account.  Thus in "( \( )" and "\( ( \)" the outer
			parenthesis match.  When included "%" ignores
			backslashes, which is Vi compatible.
								<a name="cpo-n"></a><code class="help-tag-right">cpo-n</code>
		n	When included, the column used for <a href="/neovim-docs-web/en/options#'number'">'number'</a> and
			<a href="/neovim-docs-web/en/options#'relativenumber'">'relativenumber'</a> will also be used for text of wrapped
			lines.
								<a name="cpo-o"></a><code class="help-tag-right">cpo-o</code>
		o	Line offset to search command is not remembered for
			next search.
								<a name="cpo-O"></a><code class="help-tag-right">cpo-O</code>
		O	Don't complain if a file is being overwritten, even
			when it didn't exist when editing it.  This is a
			protection against a file unexpectedly created by
			someone else.  Vi didn't complain about this.
								<a name="cpo-p"></a><code class="help-tag-right">cpo-p</code>
		p	Vi compatible Lisp indenting.  When not present, a
			slightly better algorithm is used.
								<a name="cpo-P"></a><code class="help-tag-right">cpo-P</code>
		P	When included, a ":write" command that appends to a
			file will set the file name for the current buffer, if
			the current buffer doesn't have a file name yet and
			the 'F' flag is also included <a href="/neovim-docs-web/en/options#cpo-F">cpo-F</a>.
								<a name="cpo-q"></a><code class="help-tag-right">cpo-q</code>
		q	When joining multiple lines leave the cursor at the
			position where it would be when joining two lines.
								<a name="cpo-r"></a><code class="help-tag-right">cpo-r</code>
		r	Redo ("." command) uses "/" to repeat a search
			command, instead of the actually used search string.
								<a name="cpo-R"></a><code class="help-tag-right">cpo-R</code>
		R	Remove marks from filtered lines.  Without this flag
			marks are kept like <a href="/neovim-docs-web/en/motion#%3Akeepmarks">:keepmarks</a> was used.
								<a name="cpo-s"></a><code class="help-tag-right">cpo-s</code>
		s	Set buffer options when entering the buffer for the
			first time.  This is like it is in Vim version 3.0.
			And it is the default.  If not present the options are
			set when the buffer is created.
								<a name="cpo-S"></a><code class="help-tag-right">cpo-S</code>
		S	Set buffer options always when entering a buffer
			(except <a href="/neovim-docs-web/en/options#'readonly'">'readonly'</a>, <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a>, <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> and
			<a href="/neovim-docs-web/en/options#'syntax'">'syntax'</a>).  This is the (most) Vi compatible setting.
			The options are set to the values in the current
			buffer.  When you change an option and go to another
			buffer, the value is copied.  Effectively makes the
			buffer options global to all buffers.</div>
<div class="old-help-para">			's'    'S'     copy buffer options
			no     no      when buffer created
			yes    no      when buffer first entered (default)
			 X     yes     each time when buffer entered (vi comp.)
								<a name="cpo-t"></a><code class="help-tag-right">cpo-t</code>
		t	Search pattern for the tag command is remembered for
			"n" command.  Otherwise Vim only puts the pattern in
			the history for search pattern, but doesn't change the
			last used search pattern.
								<a name="cpo-u"></a><code class="help-tag-right">cpo-u</code>
		u	Undo is Vi compatible.  See <a href="/neovim-docs-web/en/undo#undo-two-ways">undo-two-ways</a>.
								<a name="cpo-v"></a><code class="help-tag-right">cpo-v</code>
		v	Backspaced characters remain visible on the screen in
			Insert mode.  Without this flag the characters are
			erased from the screen right away.  With this flag the
			screen newly typed text overwrites backspaced
			characters.
								<a name="cpo-W"></a><code class="help-tag-right">cpo-W</code>
		W	Don't overwrite a readonly file.  When omitted, ":w!"
			overwrites a readonly file, if possible.
								<a name="cpo-x"></a><code class="help-tag-right">cpo-x</code>
		x	<code>&lt;Esc&gt;</code> on the command-line executes the command-line.
			The default in Vim is to abandon the command-line,
			because <code>&lt;Esc&gt;</code> normally aborts a command.  <a href="/neovim-docs-web/en/cmdline#c_%3CEsc%3E">c_&lt;Esc&gt;</a>
								<a name="cpo-X"></a><code class="help-tag-right">cpo-X</code>
		X	When using a count with "R" the replaced text is
			deleted only once.  Also when repeating "R" with "."
			and a count.
								<a name="cpo-y"></a><code class="help-tag-right">cpo-y</code>
		y	A yank command can be redone with ".".  Think twice if
			you really want to use this, it may break some
			plugins, since most people expect "." to only repeat a
			change.
								<a name="cpo-Z"></a><code class="help-tag-right">cpo-Z</code>
		Z	When using "w!" while the <a href="/neovim-docs-web/en/options#'readonly'">'readonly'</a> option is set,
			don't reset <a href="/neovim-docs-web/en/options#'readonly'">'readonly'</a>.
								<a name="cpo-%21"></a><code class="help-tag-right">cpo-!</code>
		!	When redoing a filter command, use the last used
			external command, whatever it was.  Otherwise the last
			used -filter- command is used.
								<a name="cpo-%24"></a><code class="help-tag-right">cpo-$</code>
		$	When making a change to one line, don't redisplay the
			line, but put a '$' at the end of the changed text.
			The changed text will be overwritten when you type the
			new text.  The line is redisplayed if you type any
			command that moves the cursor from the insertion
			point.
								<a name="cpo-%25"></a><code class="help-tag-right">cpo-%</code>
		%	Vi-compatible matching is done for the "%" command.
			Does not recognize "#if", "#endif", etc.
			Does not recognize "/*" and "*/".
			Parens inside single and double quotes are also
			counted, causing a string that contains a paren to
			disturb the matching.  For example, in a line like
			"if (strcmp("foo(", s))" the first paren does not
			match the last one.  When this flag is not included,
			parens inside single and double quotes are treated
			specially.  When matching a paren outside of quotes,
			everything inside quotes is ignored.  When matching a
			paren inside quotes, it will find the matching one (if
			there is one).  This works very well for C programs.
			This flag is also used for other features, such as
			C-indenting.
								<a name="cpo-%2B"></a><code class="help-tag-right">cpo-+</code>
		+	When included, a ":write file" command will reset the
			<a href="/neovim-docs-web/en/options#'modified'">'modified'</a> flag of the buffer, even though the buffer
			itself may still be different from its file.
								<a name="cpo-%3E"></a><code class="help-tag-right">cpo-&gt;</code>
		&gt;	When appending to a register, put a line break before
			the appended text.
								<a name="cpo-%3B"></a><code class="help-tag-right">cpo-;</code>
		;	When using <a href="/neovim-docs-web/en/motion#%2C">,</a> or <a href="/neovim-docs-web/en/motion#%3B">;</a> to repeat the last <a href="/neovim-docs-web/en/motion#t">t</a> search
			and the cursor is right in front of the searched
			character, the cursor won't move. When not included,
			the cursor would skip over it and jump to the
			following occurrence.
								<a name="cpo-_"></a><code class="help-tag-right">cpo-_</code>
		_	When using <a href="/neovim-docs-web/en/change#cw">cw</a> on a word, do not include the
			whitespace following the word in the motion.</div>
<div class="old-help-para">			<a name="'cursorbind'"></a><code class="help-tag-right">'cursorbind'</code> <a name="'crb'"></a><code class="help-tag">'crb'</code> <a name="'nocursorbind'"></a><code class="help-tag">'nocursorbind'</code> <a name="'nocrb'"></a><code class="help-tag">'nocrb'</code>
<a href="/neovim-docs-web/en/options#'cursorbind'">'cursorbind'</a> <a href="/neovim-docs-web/en/options#'crb'">'crb'</a>	boolean  (default off)
			local to window
	When this option is set, as the cursor in the current
	window moves other cursorbound windows (windows that also have
	this option set) move their cursors to the corresponding line and
	column.  This option is useful for viewing the
	differences between two versions of a file (see <a href="/neovim-docs-web/en/options#'diff'">'diff'</a>); in diff mode,
	inserted and deleted lines (though not characters within a line) are
	taken into account.</div>
<div class="old-help-para">			<a name="'cursorcolumn'"></a><code class="help-tag-right">'cursorcolumn'</code> <a name="'cuc'"></a><code class="help-tag">'cuc'</code> <a name="'nocursorcolumn'"></a><code class="help-tag">'nocursorcolumn'</code> <a name="'nocuc'"></a><code class="help-tag">'nocuc'</code>
<a href="/neovim-docs-web/en/options#'cursorcolumn'">'cursorcolumn'</a> <a href="/neovim-docs-web/en/options#'cuc'">'cuc'</a>	boolean	(default off)
			local to window
	Highlight the screen column of the cursor with CursorColumn
	<a href="/neovim-docs-web/en/syntax#hl-CursorColumn">hl-CursorColumn</a>.  Useful to align text.  Will make screen redrawing
	slower.
	If you only want the highlighting in the current window you can use
	these autocommands:<pre>au WinLeave * set nocursorline nocursorcolumn
au WinEnter * set cursorline cursorcolumn</pre></div>
<div class="old-help-para">			<a name="'cursorline'"></a><code class="help-tag-right">'cursorline'</code> <a name="'cul'"></a><code class="help-tag">'cul'</code> <a name="'nocursorline'"></a><code class="help-tag">'nocursorline'</code> <a name="'nocul'"></a><code class="help-tag">'nocul'</code>
<a href="/neovim-docs-web/en/options#'cursorline'">'cursorline'</a> <a href="/neovim-docs-web/en/options#'cul'">'cul'</a>	boolean	(default off)
			local to window
	Highlight the text line of the cursor with CursorLine <a href="/neovim-docs-web/en/syntax#hl-CursorLine">hl-CursorLine</a>.
	Useful to easily spot the cursor.  Will make screen redrawing slower.
	When Visual mode is active the highlighting isn't used to make it
	easier to see the selected text.</div>
<div class="old-help-para">						<a name="'cursorlineopt'"></a><code class="help-tag-right">'cursorlineopt'</code> <a name="'culopt'"></a><code class="help-tag">'culopt'</code>
<a href="/neovim-docs-web/en/options#'cursorlineopt'">'cursorlineopt'</a> <a href="/neovim-docs-web/en/options#'culopt'">'culopt'</a> string (default: "number,line")
			local to window
	Comma-separated list of settings for how <a href="/neovim-docs-web/en/options#'cursorline'">'cursorline'</a> is displayed.
	Valid values:
	"line"		Highlight the text line of the cursor with
			CursorLine <a href="/neovim-docs-web/en/syntax#hl-CursorLine">hl-CursorLine</a>.
	"screenline"	Highlight only the screen line of the cursor with
			CursorLine <a href="/neovim-docs-web/en/syntax#hl-CursorLine">hl-CursorLine</a>.
	"number"	Highlight the line number of the cursor with
			CursorLineNr <a href="/neovim-docs-web/en/syntax#hl-CursorLineNr">hl-CursorLineNr</a>.</div>
<div class="old-help-para">	Special value:
	"both"		Alias for the values "line,number".</div>
<div class="old-help-para">	"line" and "screenline" cannot be used together.</div>
<div class="old-help-para">						<a name="'debug'"></a><code class="help-tag-right">'debug'</code>
<a href="/neovim-docs-web/en/options#'debug'">'debug'</a>			string	(default "")
			global
	These values can be used:
	msg	Error messages that would otherwise be omitted will be given
		anyway.
	throw	Error messages that would otherwise be omitted will be given
		anyway and also throw an exception and set <a href="/neovim-docs-web/en/eval#v%3Aerrmsg">v:errmsg</a>.
	beep	A message will be given when otherwise only a beep would be
		produced.
	The values can be combined, separated by a comma.
	"msg" and "throw" are useful for debugging <a href="/neovim-docs-web/en/options#'foldexpr'">'foldexpr'</a>, <a href="/neovim-docs-web/en/options#'formatexpr'">'formatexpr'</a> or
	<a href="/neovim-docs-web/en/options#'indentexpr'">'indentexpr'</a>.</div>
<div class="old-help-para">						<a name="'define'"></a><code class="help-tag-right">'define'</code> <a name="'def'"></a><code class="help-tag">'def'</code>
<a href="/neovim-docs-web/en/options#'define'">'define'</a> <a href="/neovim-docs-web/en/options#'def'">'def'</a>		string	(default "^\s*#\s*define")
			global or local to buffer <a href="/neovim-docs-web/en/options#global-local">global-local</a>
	Pattern to be used to find a macro definition.  It is a search
	pattern, just like for the "/" command.  This option is used for the
	commands like "[i" and "[d" <a href="/neovim-docs-web/en/tagsrch#include-search">include-search</a>.  The <a href="/neovim-docs-web/en/options#'isident'">'isident'</a> option is
	used to recognize the defined name after the match:
		<code>{match with 'define'}</code><code>{non-ID chars}</code><code>{defined name}</code><code>{non-ID char}</code>
	See <a href="/neovim-docs-web/en/options#option-backslash">option-backslash</a> about inserting backslashes to include a space
	or backslash.
	The default value is for C programs.  For C++ this value would be
	useful, to include const type declarations:<pre>^\(#\s*define\|[a-z]*\s*const\s*[a-z]*\)</pre></div>
<div class="old-help-para">	You can also use "\ze" just before the name and continue the pattern
	to check what is following.  E.g. for Javascript, if a function is
	defined with <code>func_name = function(args)</code>:<pre>^\s*\ze\i\+\s*=\s*function(</pre></div>
<div class="old-help-para">	If the function is defined with <code>func_name : function() {...</code>:<pre>^\s*\ze\i\+\s*[:]\s*(*function\s*(</pre></div>
<div class="old-help-para">	When using the ":set" command, you need to double the backslashes!
	To avoid that use <code>:let</code> with a single quote string:<pre>let &amp;l:define = '^\s*\ze\k\+\s*=\s*function('</pre></div>
<div class="old-help-para">			<a name="'delcombine'"></a><code class="help-tag-right">'delcombine'</code> <a name="'deco'"></a><code class="help-tag">'deco'</code> <a name="'nodelcombine'"></a><code class="help-tag">'nodelcombine'</code> <a name="'nodeco'"></a><code class="help-tag">'nodeco'</code>
<a href="/neovim-docs-web/en/options#'delcombine'">'delcombine'</a> <a href="/neovim-docs-web/en/options#'deco'">'deco'</a>	boolean (default off)
			global
	If editing Unicode and this option is set, backspace and Normal mode
	"x" delete each combining character on its own.  When it is off (the
	default) the character along with its combining characters are
	deleted.
	Note: When <a href="/neovim-docs-web/en/options#'delcombine'">'delcombine'</a> is set "xx" may work differently from "2x"!</div>
<div class="old-help-para">	This is useful for Arabic, Hebrew and many other languages where one
	may have combining characters overtop of base characters, and want
	to remove only the combining ones.</div>
<div class="old-help-para">						<a name="'dictionary'"></a><code class="help-tag-right">'dictionary'</code> <a name="'dict'"></a><code class="help-tag">'dict'</code>
<a href="/neovim-docs-web/en/options#'dictionary'">'dictionary'</a> <a href="/neovim-docs-web/en/options#'dict'">'dict'</a>	string	(default "")
			global or local to buffer <a href="/neovim-docs-web/en/options#global-local">global-local</a>
	List of file names, separated by commas, that are used to lookup words
	for keyword completion commands <a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-K">i_CTRL-X_CTRL-K</a>.  Each file should
	contain a list of words.  This can be one word per line, or several
	words per line, separated by non-keyword characters (white space is
	preferred).  Maximum line length is 510 bytes.</div>
<div class="old-help-para">	When this option is empty or an entry "spell" is present, and spell
	checking is enabled, words in the word lists for the currently active
	<a href="/neovim-docs-web/en/options#'spelllang'">'spelllang'</a> are used. See <a href="/neovim-docs-web/en/spell#spell">spell</a>.</div>
<div class="old-help-para">	To include a comma in a file name precede it with a backslash.  Spaces
	after a comma are ignored, otherwise spaces are included in the file
	name.  See <a href="/neovim-docs-web/en/options#option-backslash">option-backslash</a> about using backslashes.
	This has nothing to do with the <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> variable type.
	Where to find a list of words?
<div class="help-li" style=""> BSD/macOS include the "/usr/share/dict/words" file.
</div><div class="help-li" style=""> Try "apt install spell" to get the "/usr/share/dict/words" file on
	  apt-managed systems (Debian/Ubuntu).
	The use of <a href="/neovim-docs-web/en/options#%3Aset%2B%3D">:set+=</a> and <a href="/neovim-docs-web/en/options#%3Aset-%3D">:set-=</a> is preferred when adding or removing
	directories from the list.  This avoids problems when a future version
	uses another default.
	Backticks cannot be used in this option for security reasons.
</div></div>
<div class="old-help-para">							<a name="'diff'"></a><code class="help-tag-right">'diff'</code> <a name="'nodiff'"></a><code class="help-tag">'nodiff'</code>
<a href="/neovim-docs-web/en/options#'diff'">'diff'</a>			boolean	(default off)
			local to window
	Join the current window in the group of windows that shows differences
	between files.  See <a href="/neovim-docs-web/en/diff#diff-mode">diff-mode</a>.</div>
<div class="old-help-para">						<a name="'dex'"></a><code class="help-tag-right">'dex'</code> <a name="'diffexpr'"></a><code class="help-tag">'diffexpr'</code>
<a href="/neovim-docs-web/en/options#'diffexpr'">'diffexpr'</a> <a href="/neovim-docs-web/en/options#'dex'">'dex'</a>	string	(default "")
			global
	Expression which is evaluated to obtain a diff file (either ed-style
	or unified-style) from two versions of a file.  See <a href="/neovim-docs-web/en/diff#diff-diffexpr">diff-diffexpr</a>.
	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">						<a name="'dip'"></a><code class="help-tag-right">'dip'</code> <a name="'diffopt'"></a><code class="help-tag">'diffopt'</code>
<a href="/neovim-docs-web/en/options#'diffopt'">'diffopt'</a> <a href="/neovim-docs-web/en/options#'dip'">'dip'</a>		string	(default "internal,filler,closeoff")
			global
	Option settings for diff mode.  It can consist of the following items.
	All are optional.  Items must be separated by a comma.</div>
<div class="old-help-para">		filler		Show filler lines, to keep the text
				synchronized with a window that has inserted
				lines at the same position.  Mostly useful
				when windows are side-by-side and <a href="/neovim-docs-web/en/options#'scrollbind'">'scrollbind'</a>
				is set.</div>
<div class="old-help-para">		context:{n}	Use a context of <code>{n}</code> lines between a change
				and a fold that contains unchanged lines.
				When omitted a context of six lines is used.
				When using zero the context is actually one,
				since folds require a line in between, also
				for a deleted line.
				See <a href="/neovim-docs-web/en/fold#fold-diff">fold-diff</a>.</div>
<div class="old-help-para">		iblank		Ignore changes where lines are all blank.  Adds
				the "-B" flag to the "diff" command if
				<a href="/neovim-docs-web/en/options#'diffexpr'">'diffexpr'</a> is empty.  Check the documentation
				of the "diff" command for what this does
				exactly.
				NOTE: the diff windows will get out of sync,
				because no differences between blank lines are
				taken into account.</div>
<div class="old-help-para">		icase		Ignore changes in case of text.  "a" and "A"
				are considered the same.  Adds the "-i" flag
				to the "diff" command if <a href="/neovim-docs-web/en/options#'diffexpr'">'diffexpr'</a> is empty.</div>
<div class="old-help-para">		iwhite		Ignore changes in amount of white space.  Adds
				the "-b" flag to the "diff" command if
				<a href="/neovim-docs-web/en/options#'diffexpr'">'diffexpr'</a> is empty.  Check the documentation
				of the "diff" command for what this does
				exactly.  It should ignore adding trailing
				white space, but not leading white space.</div>
<div class="old-help-para">		iwhiteall	Ignore all white space changes.  Adds
				the "-w" flag to the "diff" command if
				<a href="/neovim-docs-web/en/options#'diffexpr'">'diffexpr'</a> is empty.  Check the documentation
				of the "diff" command for what this does
				exactly.</div>
<div class="old-help-para">		iwhiteeol	Ignore white space changes at end of line.
				Adds the "-Z" flag to the "diff" command if
				<a href="/neovim-docs-web/en/options#'diffexpr'">'diffexpr'</a> is empty.  Check the documentation
				of the "diff" command for what this does
				exactly.</div>
<div class="old-help-para">		horizontal	Start diff mode with horizontal splits (unless
				explicitly specified otherwise).</div>
<div class="old-help-para">		vertical	Start diff mode with vertical splits (unless
				explicitly specified otherwise).</div>
<div class="old-help-para">		closeoff	When a window is closed where <a href="/neovim-docs-web/en/options#'diff'">'diff'</a> is set
				and there is only one window remaining in the
				same tab page with <a href="/neovim-docs-web/en/options#'diff'">'diff'</a> set, execute
				<code>:diffoff</code> in that window.  This undoes a
				<code>:diffsplit</code> command.</div>
<div class="old-help-para">		hiddenoff	Do not use diff mode for a buffer when it
				becomes hidden.</div>
<div class="old-help-para">		foldcolumn:{n}	Set the <a href="/neovim-docs-web/en/options#'foldcolumn'">'foldcolumn'</a> option to <code>{n}</code> when
				starting diff mode.  Without this 2 is used.</div>
<div class="old-help-para">		followwrap	Follow the <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> option and leave as it is.</div>
<div class="old-help-para">		internal	Use the internal diff library.  This is
				ignored when <a href="/neovim-docs-web/en/options#'diffexpr'">'diffexpr'</a> is set.  <a name="E960"></a><code class="help-tag">E960</code>
				When running out of memory when writing a
				buffer this item will be ignored for diffs
				involving that buffer.  Set the <a href="/neovim-docs-web/en/options#'verbose'">'verbose'</a>
				option to see when this happens.</div>
<div class="old-help-para">		indent-heuristic
				Use the indent heuristic for the internal
				diff library.</div>
<div class="old-help-para">		linematch:{n}   Enable a second stage diff on each generated
				hunk in order to align lines. When the total
				number of lines in a hunk exceeds <code>{n}</code>, the
				second stage diff will not be performed as
				very large hunks can cause noticeable lag. A
				recommended setting is "linematch:60", as this
				will enable alignment for a 2 buffer diff with
				hunks of up to 30 lines each, or a 3 buffer
				diff with hunks of up to 20 lines each.</div>
<div class="old-help-para">                algorithm:{text} Use the specified diff algorithm with the
				internal diff engine. Currently supported
				algorithms are:
				myers      the default algorithm
				minimal    spend extra time to generate the
					   smallest possible diff
				patience   patience diff algorithm
				histogram  histogram diff algorithm</div>
<div class="old-help-para">	Examples:<pre>:set diffopt=internal,filler,context:4
:set diffopt=
:set diffopt=internal,filler,foldcolumn:3
:set diffopt-=internal  " do NOT use the internal diff parser</pre></div>
<div class="old-help-para">				     <a name="'digraph'"></a><code class="help-tag-right">'digraph'</code> <a name="'dg'"></a><code class="help-tag">'dg'</code> <a name="'nodigraph'"></a><code class="help-tag">'nodigraph'</code> <a name="'nodg'"></a><code class="help-tag">'nodg'</code>
<a href="/neovim-docs-web/en/options#'digraph'">'digraph'</a> <a href="/neovim-docs-web/en/options#'dg'">'dg'</a>		boolean	(default off)
			global
	Enable the entering of digraphs in Insert mode with <code>{char1}</code> <code>&lt;BS&gt;</code>
	<code>{char2}</code>.  See <a href="/neovim-docs-web/en/digraph#digraphs">digraphs</a>.</div>
<div class="old-help-para">						<a name="'directory'"></a><code class="help-tag-right">'directory'</code> <a name="'dir'"></a><code class="help-tag">'dir'</code>
<a href="/neovim-docs-web/en/options#'directory'">'directory'</a> <a href="/neovim-docs-web/en/options#'dir'">'dir'</a>	string	(default "$XDG_STATE_HOME/nvim/swap//")
			global
	List of directory names for the swap file, separated with commas.</div>
<div class="old-help-para">	Possible items:
<div class="help-li" style=""> The swap file will be created in the first directory where this is
	  possible.  If it is not possible in any directory, but last
	  directory listed in the option does not exist, it is created.
</div><div class="help-li" style=""> Empty means that no swap file will be used (recovery is
	  impossible!) and no <a href="/neovim-docs-web/en/message#E303">E303</a> error will be given.
</div><div class="help-li" style=""> A directory "." means to put the swap file in the same directory as
	  the edited file.  On Unix, a dot is prepended to the file name, so
	  it doesn't show in a directory listing.  On MS-Windows the "hidden"
	  attribute is set and a dot prepended if possible.
</div><div class="help-li" style=""> A directory starting with "./" (or ".\" for MS-Windows) means to put
	  the swap file relative to where the edited file is.  The leading "."
	  is replaced with the path name of the edited file.
</div><div class="help-li" style=""> For Unix and Win32, if a directory ends in two path separators "//",
	  the swap file name will be built from the complete path to the file
	  with all path separators replaced by percent '%' signs (including
	  the colon following the drive letter on Win32). This will ensure
	  file name uniqueness in the preserve directory.
	  On Win32, it is also possible to end with "\\".  However, When a
	  separating comma is following, you must use "//", since "\\" will
	  include the comma in the file name. Therefore it is recommended to
	  use '//', instead of '\\'.
</div><div class="help-li" style=""> Spaces after the comma are ignored, other spaces are considered part
	  of the directory name.  To have a space at the start of a directory
	  name, precede it with a backslash.
</div><div class="help-li" style=""> To include a comma in a directory name precede it with a backslash.
</div><div class="help-li" style=""> A directory name may end in an ':' or '/'.
</div><div class="help-li" style=""> Environment variables are expanded <a href="/neovim-docs-web/en/options#%3Aset_env">:set_env</a>.
</div><div class="help-li" style=""> Careful with '\' characters, type one before a space, type two to
	  get one in the option (see <a href="/neovim-docs-web/en/options#option-backslash">option-backslash</a>), for example:<pre>:set dir=c:\\tmp,\ dir\\,with\\,commas,\\\ dir\ with\ spaces</pre>
</div><div class="help-li" style=""> For backwards compatibility with Vim version 3.0 a '&gt;' at the start
	  of the option is removed.
	Using "." first in the list is recommended.  This means that editing
	the same file twice will result in a warning.  Using "/tmp" on Unix is
	discouraged: When the system crashes you lose the swap file.
	"/var/tmp" is often not cleared when rebooting, thus is a better
	choice than "/tmp".  But others on the computer may be able to see the
	files, and it can contain a lot of files, your swap files get lost in
	the crowd.  That is why a "tmp" directory in your home directory is
	tried first.
	The use of <a href="/neovim-docs-web/en/options#%3Aset%2B%3D">:set+=</a> and <a href="/neovim-docs-web/en/options#%3Aset-%3D">:set-=</a> is preferred when adding or removing
	directories from the list.  This avoids problems when a future version
	uses another default.
	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.
</div></div>
<div class="old-help-para">					<a name="'display'"></a><code class="help-tag-right">'display'</code> <a name="'dy'"></a><code class="help-tag">'dy'</code>
<a href="/neovim-docs-web/en/options#'display'">'display'</a> <a href="/neovim-docs-web/en/options#'dy'">'dy'</a>		string	(default "lastline")
			global
	Change the way text is displayed.  This is a comma-separated list of
	flags:
	lastline	When included, as much as possible of the last line
			in a window will be displayed.  "@@@" is put in the
			last columns of the last screen line to indicate the
			rest of the line is not displayed.
	truncate	Like "lastline", but "@@@" is displayed in the first
			column of the last screen line.  Overrules "lastline".
	uhex		Show unprintable characters hexadecimal as <code>&lt;xx&gt;</code>
			instead of using ^C and ~C.
	msgsep		Obsolete flag. Allowed but takes no effect. <a href="/neovim-docs-web/en/vim_diff#msgsep">msgsep</a></div>
<div class="old-help-para">	When neither "lastline" nor "truncate" is included, a last line that
	doesn't fit is replaced with "@" lines.</div>
<div class="old-help-para">	The "@" character can be changed by setting the "lastline" item in
	<a href="/neovim-docs-web/en/options#'fillchars'">'fillchars'</a>.  The character is highlighted with <a href="/neovim-docs-web/en/syntax#hl-NonText">hl-NonText</a>.</div>
<div class="old-help-para">						<a name="'eadirection'"></a><code class="help-tag-right">'eadirection'</code> <a name="'ead'"></a><code class="help-tag">'ead'</code>
<a href="/neovim-docs-web/en/options#'eadirection'">'eadirection'</a> <a href="/neovim-docs-web/en/options#'ead'">'ead'</a>	string	(default "both")
			global
	Tells when the <a href="/neovim-docs-web/en/options#'equalalways'">'equalalways'</a> option applies:
		ver	vertically, width of windows is not affected
		hor	horizontally, height of windows is not affected
		both	width and height of windows is affected</div>
<div class="old-help-para">					<a name="'emoji'"></a><code class="help-tag-right">'emoji'</code> <a name="'emo'"></a><code class="help-tag">'emo'</code> <a name="'noemoji'"></a><code class="help-tag">'noemoji'</code> <a name="'noemo'"></a><code class="help-tag">'noemo'</code>
<a href="/neovim-docs-web/en/options#'emoji'">'emoji'</a> <a href="/neovim-docs-web/en/options#'emo'">'emo'</a>	boolean (default: on)
			global
	When on all Unicode emoji characters are considered to be full width.
	This excludes "text emoji" characters, which are normally displayed as
	single width.  Unfortunately there is no good specification for this
	and it has been determined on trial-and-error basis.  Use the
	<a href="/neovim-docs-web/en/builtin#setcellwidths()">setcellwidths()</a> function to change the behavior.</div>
<div class="old-help-para">					<a name="'encoding'"></a><code class="help-tag-right">'encoding'</code> <a name="'enc'"></a><code class="help-tag">'enc'</code> <a name="E543"></a><code class="help-tag">E543</code>
<a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> <a href="/neovim-docs-web/en/options#'enc'">'enc'</a>
	String-encoding used internally and for <a href="/neovim-docs-web/en/api#RPC">RPC</a> communication.
	Always UTF-8.</div>
<div class="old-help-para">	See <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> to control file-content encoding.</div>
<div class="old-help-para">			<a name="'endoffile'"></a><code class="help-tag-right">'endoffile'</code> <a name="'eof'"></a><code class="help-tag">'eof'</code> <a name="'noendoffile'"></a><code class="help-tag">'noendoffile'</code> <a name="'noeof'"></a><code class="help-tag">'noeof'</code>
<a href="/neovim-docs-web/en/options#'endoffile'">'endoffile'</a> <a href="/neovim-docs-web/en/options#'eof'">'eof'</a>	boolean	(default off)
			local to buffer
	Indicates that a <code>CTRL-Z</code> character was found at the end of the file
	when reading it.  Normally only happens when <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> is "dos".
	When writing a file and this option is off and the <a href="/neovim-docs-web/en/options#'binary'">'binary'</a> option
	is on, or <a href="/neovim-docs-web/en/options#'fixeol'">'fixeol'</a> option is off, no <code>CTRL-Z</code> will be written at the
	end of the file.
	See <a href="/neovim-docs-web/en/editing#eol-and-eof">eol-and-eof</a> for example settings.</div>
<div class="old-help-para">			<a name="'endofline'"></a><code class="help-tag-right">'endofline'</code> <a name="'eol'"></a><code class="help-tag">'eol'</code> <a name="'noendofline'"></a><code class="help-tag">'noendofline'</code> <a name="'noeol'"></a><code class="help-tag">'noeol'</code>
<a href="/neovim-docs-web/en/options#'endofline'">'endofline'</a> <a href="/neovim-docs-web/en/options#'eol'">'eol'</a>	boolean	(default on)
			local to buffer
	When writing a file and this option is off and the <a href="/neovim-docs-web/en/options#'binary'">'binary'</a> option
	is on, or <a href="/neovim-docs-web/en/options#'fixeol'">'fixeol'</a> option is off, no <code>&lt;EOL&gt;</code> will be written for the
	last line in the file.  This option is automatically set or reset when
	starting to edit a new file, depending on whether file has an <code>&lt;EOL&gt;</code>
	for the last line in the file.  Normally you don't have to set or
	reset this option.
	When <a href="/neovim-docs-web/en/options#'binary'">'binary'</a> is off and <a href="/neovim-docs-web/en/options#'fixeol'">'fixeol'</a> is on the value is not used when
	writing the file.  When <a href="/neovim-docs-web/en/options#'binary'">'binary'</a> is on or <a href="/neovim-docs-web/en/options#'fixeol'">'fixeol'</a> is off it is used
	to remember the presence of a <code>&lt;EOL&gt;</code> for the last line in the file, so
	that when you write the file the situation from the original file can
	be kept.  But you can change it if you want to.
	See <a href="/neovim-docs-web/en/editing#eol-and-eof">eol-and-eof</a> for example settings.</div>
<div class="old-help-para">			     <a name="'equalalways'"></a><code class="help-tag-right">'equalalways'</code> <a name="'ea'"></a><code class="help-tag">'ea'</code> <a name="'noequalalways'"></a><code class="help-tag">'noequalalways'</code> <a name="'noea'"></a><code class="help-tag">'noea'</code>
<a href="/neovim-docs-web/en/options#'equalalways'">'equalalways'</a> <a href="/neovim-docs-web/en/options#'ea'">'ea'</a>	boolean	(default on)
			global
	When on, all the windows are automatically made the same size after
	splitting or closing a window.  This also happens the moment the
	option is switched on.  When off, splitting a window will reduce the
	size of the current window and leave the other windows the same.  When
	closing a window the extra lines are given to the window next to it
	(depending on <a href="/neovim-docs-web/en/options#'splitbelow'">'splitbelow'</a> and <a href="/neovim-docs-web/en/options#'splitright'">'splitright'</a>).
	When mixing vertically and horizontally split windows, a minimal size
	is computed and some windows may be larger if there is room.  The
	<a href="/neovim-docs-web/en/options#'eadirection'">'eadirection'</a> option tells in which direction the size is affected.
	Changing the height and width of a window can be avoided by setting
	<a href="/neovim-docs-web/en/options#'winfixheight'">'winfixheight'</a> and <a href="/neovim-docs-web/en/options#'winfixwidth'">'winfixwidth'</a>, respectively.
	If a window size is specified when creating a new window sizes are
	currently not equalized (it's complicated, but may be implemented in
	the future).</div>
<div class="old-help-para">						<a name="'equalprg'"></a><code class="help-tag-right">'equalprg'</code> <a name="'ep'"></a><code class="help-tag">'ep'</code>
<a href="/neovim-docs-web/en/options#'equalprg'">'equalprg'</a> <a href="/neovim-docs-web/en/options#'ep'">'ep'</a>		string	(default "")
			global or local to buffer <a href="/neovim-docs-web/en/options#global-local">global-local</a>
	External program to use for "=" command.  When this option is empty
	the internal formatting functions are used; either <a href="/neovim-docs-web/en/options#'lisp'">'lisp'</a>, <a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a>
	or <a href="/neovim-docs-web/en/options#'indentexpr'">'indentexpr'</a>.
	Environment variables are expanded <a href="/neovim-docs-web/en/options#%3Aset_env">:set_env</a>.  See <a href="/neovim-docs-web/en/options#option-backslash">option-backslash</a>
	about including spaces and backslashes.
	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">			<a name="'errorbells'"></a><code class="help-tag-right">'errorbells'</code> <a name="'eb'"></a><code class="help-tag">'eb'</code> <a name="'noerrorbells'"></a><code class="help-tag">'noerrorbells'</code> <a name="'noeb'"></a><code class="help-tag">'noeb'</code>
<a href="/neovim-docs-web/en/options#'errorbells'">'errorbells'</a> <a href="/neovim-docs-web/en/options#'eb'">'eb'</a>	boolean	(default off)
			global
	Ring the bell (beep or screen flash) for error messages.  This only
	makes a difference for error messages, the bell will be used always
	for a lot of errors without a message (e.g., hitting <code>&lt;Esc&gt;</code> in Normal
	mode).  See <a href="/neovim-docs-web/en/options#'visualbell'">'visualbell'</a> to make the bell behave like a screen flash
	or do nothing. See <a href="/neovim-docs-web/en/options#'belloff'">'belloff'</a> to finetune when to ring the bell.</div>
<div class="old-help-para">						<a name="'errorfile'"></a><code class="help-tag-right">'errorfile'</code> <a name="'ef'"></a><code class="help-tag">'ef'</code>
<a href="/neovim-docs-web/en/options#'errorfile'">'errorfile'</a> <a href="/neovim-docs-web/en/options#'ef'">'ef'</a>	string	(default: "errors.err")
			global
	Name of the errorfile for the QuickFix mode (see <a href="/neovim-docs-web/en/quickfix#%3Acf">:cf</a>).
	When the "-q" command-line argument is used, <a href="/neovim-docs-web/en/options#'errorfile'">'errorfile'</a> is set to the
	following argument.  See <a href="/neovim-docs-web/en/starting#-q">-q</a>.
	NOT used for the ":make" command.  See <a href="/neovim-docs-web/en/options#'makeef'">'makeef'</a> for that.
	Environment variables are expanded <a href="/neovim-docs-web/en/options#%3Aset_env">:set_env</a>.
	See <a href="/neovim-docs-web/en/options#option-backslash">option-backslash</a> about including spaces and backslashes.
	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">						<a name="'errorformat'"></a><code class="help-tag-right">'errorformat'</code> <a name="'efm'"></a><code class="help-tag">'efm'</code>
<a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a> <a href="/neovim-docs-web/en/options#'efm'">'efm'</a>	string	(default is very long)
			global or local to buffer <a href="/neovim-docs-web/en/options#global-local">global-local</a>
	Scanf-like description of the format for the lines in the error file
	(see <a href="/neovim-docs-web/en/quickfix#errorformat">errorformat</a>).</div>
<div class="old-help-para">						<a name="'eventignore'"></a><code class="help-tag-right">'eventignore'</code> <a name="'ei'"></a><code class="help-tag">'ei'</code>
<a href="/neovim-docs-web/en/options#'eventignore'">'eventignore'</a> <a href="/neovim-docs-web/en/options#'ei'">'ei'</a>	string	(default "")
			global
	A list of autocommand event names, which are to be ignored.
	When set to "all" or when "all" is one of the items, all autocommand
	events are ignored, autocommands will not be executed.
	Otherwise this is a comma-separated list of event names.  Example:<pre>:set ei=WinEnter,WinLeave</pre></div>
<div class="old-help-para">				 <a name="'expandtab'"></a><code class="help-tag-right">'expandtab'</code> <a name="'et'"></a><code class="help-tag">'et'</code> <a name="'noexpandtab'"></a><code class="help-tag">'noexpandtab'</code> <a name="'noet'"></a><code class="help-tag">'noet'</code>
<a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a> <a href="/neovim-docs-web/en/options#'et'">'et'</a>	boolean	(default off)
			local to buffer
	In Insert mode: Use the appropriate number of spaces to insert a
	<code>&lt;Tab&gt;</code>.  Spaces are used in indents with the '&gt;' and '&lt;' commands and
	when <a href="/neovim-docs-web/en/options#'autoindent'">'autoindent'</a> is on.  To insert a real tab when <a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a> is
	on, use <code>CTRL-V</code><code>&lt;Tab&gt;</code>.  See also <a href="/neovim-docs-web/en/change#%3Aretab">:retab</a> and <a href="/neovim-docs-web/en/insert#ins-expandtab">ins-expandtab</a>.
	This option is reset when the <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> option is set and restored when
	the <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> option is reset.</div>
<div class="old-help-para">					<a name="'exrc'"></a><code class="help-tag-right">'exrc'</code> <a name="'ex'"></a><code class="help-tag">'ex'</code> <a name="'noexrc'"></a><code class="help-tag">'noexrc'</code> <a name="'noex'"></a><code class="help-tag">'noex'</code>
<a href="/neovim-docs-web/en/options#'exrc'">'exrc'</a> <a href="/neovim-docs-web/en/options#'ex'">'ex'</a>		boolean (default off)
			global
	Enables the reading of .nvimrc and .exrc files in the current
	directory.</div>
<div class="old-help-para">	The file is only sourced if the user indicates the file is trusted. If
	it is, the SHA256 hash of the file contents and the full path of the
	file are persisted to a trust database. The user is only prompted
	again if the file contents change. See <a href="/neovim-docs-web/en/lua#vim.secure.read()">vim.secure.read()</a>.</div>
<div class="old-help-para">	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">				<a name="'fileencoding'"></a><code class="help-tag-right">'fileencoding'</code> <a name="'fenc'"></a><code class="help-tag">'fenc'</code> <a name="E213"></a><code class="help-tag">E213</code>
<a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> <a href="/neovim-docs-web/en/options#'fenc'">'fenc'</a>	string (default: "")
			local to buffer
	File-content encoding for the current buffer. Conversion is done with
	iconv() or as specified with <a href="/neovim-docs-web/en/options#'charconvert'">'charconvert'</a>.</div>
<div class="old-help-para">	When <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> is not UTF-8, conversion will be done when
	writing the file.  For reading see below.
	When <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> is empty, the file will be saved with UTF-8
	encoding (no conversion when reading or writing a file).</div>
<div class="old-help-para">	WARNING: Conversion to a non-Unicode encoding can cause loss of
	information!</div>
<div class="old-help-para">	See <a href="/neovim-docs-web/en/mbyte#encoding-names">encoding-names</a> for the possible values.  Additionally, values may be
	specified that can be handled by the converter, see
	<a href="/neovim-docs-web/en/mbyte#mbyte-conversion">mbyte-conversion</a>.</div>
<div class="old-help-para">	When reading a file <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> will be set from <a href="/neovim-docs-web/en/options#'fileencodings'">'fileencodings'</a>.
	To read a file in a certain encoding it won't work by setting
	<a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a>, use the <a href="/neovim-docs-web/en/editing#%2B%2Benc">++enc</a> argument.  One exception: when
	<a href="/neovim-docs-web/en/options#'fileencodings'">'fileencodings'</a> is empty the value of <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> is used.
	For a new file the global value of <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> is used.</div>
<div class="old-help-para">	Prepending "8bit-" and "2byte-" has no meaning here, they are ignored.
	When the option is set, the value is converted to lowercase.  Thus
	you can set it with uppercase values too.  '_' characters are
	replaced with '-'.  If a name is recognized from the list at
	<a href="/neovim-docs-web/en/mbyte#encoding-names">encoding-names</a>, it is replaced by the standard name.  For example
	"ISO8859-2" becomes "iso-8859-2".</div>
<div class="old-help-para">	When this option is set, after starting to edit a file, the <a href="/neovim-docs-web/en/options#'modified'">'modified'</a>
	option is set, because the file would be different when written.</div>
<div class="old-help-para">	Keep in mind that changing <a href="/neovim-docs-web/en/options#'fenc'">'fenc'</a> from a modeline happens
	AFTER the text has been read, thus it applies to when the file will be
	written.  If you do set <a href="/neovim-docs-web/en/options#'fenc'">'fenc'</a> in a modeline, you might want to set
	<a href="/neovim-docs-web/en/options#'nomodified'">'nomodified'</a> to avoid not being able to ":q".</div>
<div class="old-help-para">	This option cannot be changed when <a href="/neovim-docs-web/en/options#'modifiable'">'modifiable'</a> is off.</div>
<div class="old-help-para">					<a name="'fileencodings'"></a><code class="help-tag-right">'fileencodings'</code> <a name="'fencs'"></a><code class="help-tag">'fencs'</code>
<a href="/neovim-docs-web/en/options#'fileencodings'">'fileencodings'</a> <a href="/neovim-docs-web/en/options#'fencs'">'fencs'</a>	string (default: "ucs-bom,utf-8,default,latin1")
			global
	This is a list of character encodings considered when starting to edit
	an existing file.  When a file is read, Vim tries to use the first
	mentioned character encoding.  If an error is detected, the next one
	in the list is tried.  When an encoding is found that works,
	<a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> is set to it.  If all fail, <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> is set to
	an empty string, which means that UTF-8 is used.
		WARNING: Conversion can cause loss of information! You can use
		the <a href="/neovim-docs-web/en/editing#%2B%2Bbad">++bad</a> argument to specify what is done with characters
		that can't be converted.
	For an empty file or a file with only ASCII characters most encodings
	will work and the first entry of <a href="/neovim-docs-web/en/options#'fileencodings'">'fileencodings'</a> will be used (except
	"ucs-bom", which requires the BOM to be present).  If you prefer
	another encoding use an BufReadPost autocommand event to test if your
	preferred encoding is to be used.  Example:<pre>au BufReadPost * if search('\S', 'w') == 0 |
        \ set fenc=iso-2022-jp | endif</pre></div>
<div class="old-help-para">	This sets <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> to "iso-2022-jp" if the file does not contain
	non-blank characters.
	When the <a href="/neovim-docs-web/en/editing#%2B%2Benc">++enc</a> argument is used then the value of <a href="/neovim-docs-web/en/options#'fileencodings'">'fileencodings'</a> is
	not used.
	Note that <a href="/neovim-docs-web/en/options#'fileencodings'">'fileencodings'</a> is not used for a new file, the global value
	of <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> is used instead.  You can set it with:<pre>:setglobal fenc=iso-8859-2</pre></div>
<div class="old-help-para">	This means that a non-existing file may get a different encoding than
	an empty file.
	The special value "ucs-bom" can be used to check for a Unicode BOM
	(Byte Order Mark) at the start of the file.  It must not be preceded
	by "utf-8" or another Unicode encoding for this to work properly.
	An entry for an 8-bit encoding (e.g., "latin1") should be the last,
	because Vim cannot detect an error, thus the encoding is always
	accepted.
	The special value "default" can be used for the encoding from the
	environment.  It is useful when your environment uses a non-latin1
	encoding, such as Russian.
	When a file contains an illegal UTF-8 byte sequence it won't be
	recognized as "utf-8".  You can use the <a href="/neovim-docs-web/en/various#8g8">8g8</a> command to find the
	illegal byte sequence.
	WRONG VALUES:			WHAT'S WRONG:
		latin1,utf-8		"latin1" will always be used
		utf-8,ucs-bom,latin1	BOM won't be recognized in an utf-8
					file
		cp1250,latin1		"cp1250" will always be used
	If <a href="/neovim-docs-web/en/options#'fileencodings'">'fileencodings'</a> is empty, <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> is not modified.
	See <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> for the possible values.
	Setting this option does not have an effect until the next time a file
	is read.</div>
<div class="old-help-para">					<a name="'fileformat'"></a><code class="help-tag-right">'fileformat'</code> <a name="'ff'"></a><code class="help-tag">'ff'</code>
<a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> <a href="/neovim-docs-web/en/options#'ff'">'ff'</a>	string (Windows default: "dos",
				Unix default: "unix")
			local to buffer
	This gives the <code>&lt;EOL&gt;</code> of the current buffer, which is used for
	reading/writing the buffer from/to a file:
	    dos	    <code>&lt;CR&gt;</code><code>&lt;NL&gt;</code>
	    unix    <code>&lt;NL&gt;</code>
	    mac	    <code>&lt;CR&gt;</code>
	When "dos" is used, <code>CTRL-Z</code> at the end of a file is ignored.
	See <a href="/neovim-docs-web/en/editing#file-formats">file-formats</a> and <a href="/neovim-docs-web/en/insert#file-read">file-read</a>.
	For the character encoding of the file see <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a>.
	When <a href="/neovim-docs-web/en/options#'binary'">'binary'</a> is set, the value of <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> is ignored, file I/O
	works like it was set to "unix".
	This option is set automatically when starting to edit a file and
	<a href="/neovim-docs-web/en/options#'fileformats'">'fileformats'</a> is not empty and <a href="/neovim-docs-web/en/options#'binary'">'binary'</a> is off.
	When this option is set, after starting to edit a file, the <a href="/neovim-docs-web/en/options#'modified'">'modified'</a>
	option is set, because the file would be different when written.
	This option cannot be changed when <a href="/neovim-docs-web/en/options#'modifiable'">'modifiable'</a> is off.</div>
<div class="old-help-para">					<a name="'fileformats'"></a><code class="help-tag-right">'fileformats'</code> <a name="'ffs'"></a><code class="help-tag">'ffs'</code>
<a href="/neovim-docs-web/en/options#'fileformats'">'fileformats'</a> <a href="/neovim-docs-web/en/options#'ffs'">'ffs'</a>	string (default:
				Win32: "dos,unix",
				Unix: "unix,dos")
			global
	This gives the end-of-line (<code>&lt;EOL&gt;</code>) formats that will be tried when
	starting to edit a new buffer and when reading a file into an existing
	buffer:
<div class="help-li" style=""> When empty, the format defined with <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> will be used
	  always.  It is not set automatically.
</div><div class="help-li" style=""> When set to one name, that format will be used whenever a new buffer
	  is opened.  <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> is set accordingly for that buffer.  The
	  <a href="/neovim-docs-web/en/options#'fileformats'">'fileformats'</a> name will be used when a file is read into an existing
	  buffer, no matter what <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> for that buffer is set to.
</div><div class="help-li" style=""> When more than one name is present, separated by commas, automatic
	  <code>&lt;EOL&gt;</code> detection will be done when reading a file.  When starting to
	  edit a file, a check is done for the <code>&lt;EOL&gt;</code>:
	  1. If all lines end in <code>&lt;CR&gt;</code><code>&lt;NL&gt;</code>, and <a href="/neovim-docs-web/en/options#'fileformats'">'fileformats'</a> includes "dos",
	     <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> is set to "dos".
	  2. If a <code>&lt;NL&gt;</code> is found and <a href="/neovim-docs-web/en/options#'fileformats'">'fileformats'</a> includes "unix", <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a>
	     is set to "unix".  Note that when a <code>&lt;NL&gt;</code> is found without a
	     preceding <code>&lt;CR&gt;</code>, "unix" is preferred over "dos".
	  3. If <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> has not yet been set, and if a <code>&lt;CR&gt;</code> is found, and
	     if <a href="/neovim-docs-web/en/options#'fileformats'">'fileformats'</a> includes "mac", <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> is set to "mac".
	     This means that "mac" is only chosen when:
	      "unix" is not present or no <code>&lt;NL&gt;</code> is found in the file, and
	      "dos" is not present or no <code>&lt;CR&gt;</code><code>&lt;NL&gt;</code> is found in the file.
	     Except: if "unix" was chosen, but there is a <code>&lt;CR&gt;</code> before
	     the first <code>&lt;NL&gt;</code>, and there appear to be more <code>&lt;CR&gt;</code>s than <code>&lt;NL&gt;</code>s in
	     the first few lines, "mac" is used.
	  4. If <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> is still not set, the first name from
	     <a href="/neovim-docs-web/en/options#'fileformats'">'fileformats'</a> is used.
	  When reading a file into an existing buffer, the same is done, but
	  this happens like <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> has been set appropriately for that
	  file only, the option is not changed.
	When <a href="/neovim-docs-web/en/options#'binary'">'binary'</a> is set, the value of <a href="/neovim-docs-web/en/options#'fileformats'">'fileformats'</a> is not used.
</div></div>
<div class="old-help-para">	When Vim starts up with an empty buffer the first item is used.  You
	can overrule this by setting <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> in your .vimrc.</div>
<div class="old-help-para">	For systems with a Dos-like <code>&lt;EOL&gt;</code> (<code>&lt;CR&gt;</code><code>&lt;NL&gt;</code>), when reading files that
	are ":source"ed and for vimrc files, automatic <code>&lt;EOL&gt;</code> detection may be
	done:
<div class="help-li" style=""> When <a href="/neovim-docs-web/en/options#'fileformats'">'fileformats'</a> is empty, there is no automatic detection.  Dos
	  format will be used.
</div><div class="help-li" style=""> When <a href="/neovim-docs-web/en/options#'fileformats'">'fileformats'</a> is set to one or more names, automatic detection
	  is done.  This is based on the first <code>&lt;NL&gt;</code> in the file: If there is a
	  <code>&lt;CR&gt;</code> in front of it, Dos format is used, otherwise Unix format is
	  used.
	Also see <a href="/neovim-docs-web/en/editing#file-formats">file-formats</a>.
</div></div>
<div class="old-help-para">		<a name="'fileignorecase'"></a><code class="help-tag-right">'fileignorecase'</code> <a name="'fic'"></a><code class="help-tag">'fic'</code> <a name="'nofileignorecase'"></a><code class="help-tag">'nofileignorecase'</code> <a name="'nofic'"></a><code class="help-tag">'nofic'</code>
<a href="/neovim-docs-web/en/options#'fileignorecase'">'fileignorecase'</a> <a href="/neovim-docs-web/en/options#'fic'">'fic'</a>	boolean	(default on for systems where case in file
				 names is normally ignored)
			global
	When set case is ignored when using file names and directories.
	See <a href="/neovim-docs-web/en/options#'wildignorecase'">'wildignorecase'</a> for only ignoring case when doing completion.</div>
<div class="old-help-para">					<a name="'filetype'"></a><code class="help-tag-right">'filetype'</code> <a name="'ft'"></a><code class="help-tag">'ft'</code>
<a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> <a href="/neovim-docs-web/en/options#'ft'">'ft'</a>		string (default: "")
			local to buffer
	When this option is set, the FileType autocommand event is triggered.
	All autocommands that match with the value of this option will be
	executed.  Thus the value of <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> is used in place of the file
	name.
	Otherwise this option does not always reflect the current file type.
	This option is normally set when the file type is detected.  To enable
	this use the ":filetype on" command. <a href="/neovim-docs-web/en/filetype#%3Afiletype">:filetype</a>
	Setting this option to a different value is most useful in a modeline,
	for a file for which the file type is not automatically recognized.
	Example, for in an IDL file:<pre>/* vim: set filetype=idl : */</pre></div>
<div class="old-help-para">	<a href="/neovim-docs-web/en/autocmd#FileType">FileType</a> <a href="/neovim-docs-web/en/filetype#filetypes">filetypes</a>
	When a dot appears in the value then this separates two filetype
	names.  Example:<pre>/* vim: set filetype=c.doxygen : */</pre></div>
<div class="old-help-para">	This will use the "c" filetype first, then the "doxygen" filetype.
	This works both for filetype plugins and for syntax files.  More than
	one dot may appear.
	This option is not copied to another buffer, independent of the 's' or
	'S' flag in <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a>.
	Only normal file name characters can be used, "/\*?[|&lt;&gt;" are illegal.</div>
<div class="old-help-para">						<a name="'fillchars'"></a><code class="help-tag-right">'fillchars'</code> <a name="'fcs'"></a><code class="help-tag">'fcs'</code>
<a href="/neovim-docs-web/en/options#'fillchars'">'fillchars'</a> <a href="/neovim-docs-web/en/options#'fcs'">'fcs'</a>	string	(default "")
			global or local to window <a href="/neovim-docs-web/en/options#global-local">global-local</a>
	Characters to fill the statuslines, vertical separators and special
	lines in the window.
	It is a comma-separated list of items.  Each item has a name, a colon
	and the value of that item:</div>
<div class="old-help-para"><div class="help-column_heading">	  item		default		Used for</div>	  stl		' ' or '^'	statusline of the current window
	  stlnc		' ' or '='	statusline of the non-current windows
	  wbr		' '		window bar
	  horiz		'???' or '-'	horizontal separators <a href="/neovim-docs-web/en/windows#%3Asplit">:split</a>
	  horizup	'???' or '-'	upwards facing horizontal separator
	  horizdown	'???' or '-'	downwards facing horizontal separator
	  vert		'???' or '|'	vertical separators <a href="/neovim-docs-web/en/windows#%3Avsplit">:vsplit</a>
	  vertleft	'???' or '|'	left facing vertical separator
	  vertright	'???' or '|'	right facing vertical separator
	  verthoriz	'???' or '+'	overlapping vertical and horizontal
					separator
	  fold		'??' or '-'	filling <a href="/neovim-docs-web/en/options#'foldtext'">'foldtext'</a>
	  foldopen	'-'		mark the beginning of a fold
	  foldclose	'+'		show a closed fold
	  foldsep	'???' or '|'      open fold middle marker
	  diff		'-'		deleted lines of the <a href="/neovim-docs-web/en/options#'diff'">'diff'</a> option
	  msgsep	' '		message separator <a href="/neovim-docs-web/en/options#'display'">'display'</a>
	  eob		'~'		empty lines at the end of a buffer
	  lastline	'@'		<a href="/neovim-docs-web/en/options#'display'">'display'</a> contains lastline/truncate</div>
<div class="old-help-para">	Any one that is omitted will fall back to the default.  For "stl" and
	"stlnc" the space will be used when there is highlighting, '^' or '='
	otherwise.</div>
<div class="old-help-para">	Note that "horiz", "horizup", "horizdown", "vertleft", "vertright" and
	"verthoriz" are only used when <a href="/neovim-docs-web/en/options#'laststatus'">'laststatus'</a> is 3, since only vertical
	window separators are used otherwise.</div>
<div class="old-help-para">	If <a href="/neovim-docs-web/en/options#'ambiwidth'">'ambiwidth'</a> is "double" then "horiz", "horizup", "horizdown",
	"vert", "vertleft", "vertright", "verthoriz", "foldsep" and "fold"
	default to single-byte alternatives.</div>
<div class="old-help-para">	Example:<pre>:set fillchars=stl:^,stlnc:=,vert:???,fold:??,diff:-</pre></div>
<div class="old-help-para">	This is similar to the default, except that these characters will also
	be used when there is highlighting.</div>
<div class="old-help-para">	For the "stl", "stlnc", "foldopen", "foldclose" and "foldsep" items
	single-byte and multibyte characters are supported.  But double-width
	characters are not supported.</div>
<div class="old-help-para">	The highlighting used for these items:
<div class="help-column_heading">	  item		highlight group</div>	  stl		StatusLine		<a href="/neovim-docs-web/en/syntax#hl-StatusLine">hl-StatusLine</a>
	  stlnc		StatusLineNC		<a href="/neovim-docs-web/en/syntax#hl-StatusLineNC">hl-StatusLineNC</a>
	  wbr		WinBar			<a href="/neovim-docs-web/en/syntax#hl-WinBar">hl-WinBar</a> or <a href="/neovim-docs-web/en/syntax#hl-WinBarNC">hl-WinBarNC</a>
	  horiz		WinSeparator		<a href="/neovim-docs-web/en/syntax#hl-WinSeparator">hl-WinSeparator</a>
	  horizup	WinSeparator		<a href="/neovim-docs-web/en/syntax#hl-WinSeparator">hl-WinSeparator</a>
	  horizdown	WinSeparator		<a href="/neovim-docs-web/en/syntax#hl-WinSeparator">hl-WinSeparator</a>
	  vert		WinSeparator		<a href="/neovim-docs-web/en/syntax#hl-WinSeparator">hl-WinSeparator</a>
	  vertleft	WinSeparator		<a href="/neovim-docs-web/en/syntax#hl-WinSeparator">hl-WinSeparator</a>
	  vertright	WinSeparator		<a href="/neovim-docs-web/en/syntax#hl-WinSeparator">hl-WinSeparator</a>
	  verthoriz	WinSeparator		<a href="/neovim-docs-web/en/syntax#hl-WinSeparator">hl-WinSeparator</a>
	  fold		Folded			<a href="/neovim-docs-web/en/syntax#hl-Folded">hl-Folded</a>
	  diff		DiffDelete		<a href="/neovim-docs-web/en/syntax#hl-DiffDelete">hl-DiffDelete</a>
	  eob		EndOfBuffer		<a href="/neovim-docs-web/en/syntax#hl-EndOfBuffer">hl-EndOfBuffer</a>
	  lastline	NonText			<a href="/neovim-docs-web/en/syntax#hl-NonText">hl-NonText</a></div>
<div class="old-help-para">		<a name="'fixendofline'"></a><code class="help-tag-right">'fixendofline'</code> <a name="'fixeol'"></a><code class="help-tag">'fixeol'</code> <a name="'nofixendofline'"></a><code class="help-tag">'nofixendofline'</code> <a name="'nofixeol'"></a><code class="help-tag">'nofixeol'</code>
<a href="/neovim-docs-web/en/options#'fixendofline'">'fixendofline'</a> <a href="/neovim-docs-web/en/options#'fixeol'">'fixeol'</a>	boolean	(default on)
			local to buffer
	When writing a file and this option is on, <code>&lt;EOL&gt;</code> at the end of file
	will be restored if missing.  Turn this option off if you want to
	preserve the situation from the original file.
	When the <a href="/neovim-docs-web/en/options#'binary'">'binary'</a> option is set the value of this option doesn't
	matter.
	See the <a href="/neovim-docs-web/en/options#'endofline'">'endofline'</a> option.
	See <a href="/neovim-docs-web/en/editing#eol-and-eof">eol-and-eof</a> for example settings.</div>
<div class="old-help-para">						<a name="'foldclose'"></a><code class="help-tag-right">'foldclose'</code> <a name="'fcl'"></a><code class="help-tag">'fcl'</code>
<a href="/neovim-docs-web/en/options#'foldclose'">'foldclose'</a> <a href="/neovim-docs-web/en/options#'fcl'">'fcl'</a>	string (default "")
			global
	When set to "all", a fold is closed when the cursor isn't in it and
	its level is higher than <a href="/neovim-docs-web/en/options#'foldlevel'">'foldlevel'</a>.  Useful if you want folds to
	automatically close when moving out of them.</div>
<div class="old-help-para">						<a name="'foldcolumn'"></a><code class="help-tag-right">'foldcolumn'</code> <a name="'fdc'"></a><code class="help-tag">'fdc'</code>
<a href="/neovim-docs-web/en/options#'foldcolumn'">'foldcolumn'</a> <a href="/neovim-docs-web/en/options#'fdc'">'fdc'</a>	string (default "0")
			local to window
	When and how to draw the foldcolumn. Valid values are:
	    "auto":       resize to the minimum amount of folds to display.
	    "auto:[1-9]": resize to accommodate multiple folds up to the
			  selected level
            0:            to disable foldcolumn
	    "[1-9]":      to display a fixed number of columns
	See <a href="/neovim-docs-web/en/fold#folding">folding</a>.</div>
<div class="old-help-para">			<a name="'foldenable'"></a><code class="help-tag-right">'foldenable'</code> <a name="'fen'"></a><code class="help-tag">'fen'</code> <a name="'nofoldenable'"></a><code class="help-tag">'nofoldenable'</code> <a name="'nofen'"></a><code class="help-tag">'nofen'</code>
<a href="/neovim-docs-web/en/options#'foldenable'">'foldenable'</a> <a href="/neovim-docs-web/en/options#'fen'">'fen'</a>	boolean (default on)
			local to window
	When off, all folds are open.  This option can be used to quickly
	switch between showing all text unfolded and viewing the text with
	folds (including manually opened or closed folds).  It can be toggled
	with the <a href="/neovim-docs-web/en/fold#zi">zi</a> command.  The <a href="/neovim-docs-web/en/options#'foldcolumn'">'foldcolumn'</a> will remain blank when
	<a href="/neovim-docs-web/en/options#'foldenable'">'foldenable'</a> is off.
	This option is set by commands that create a new fold or close a fold.
	See <a href="/neovim-docs-web/en/fold#folding">folding</a>.</div>
<div class="old-help-para">						<a name="'foldexpr'"></a><code class="help-tag-right">'foldexpr'</code> <a name="'fde'"></a><code class="help-tag">'fde'</code>
<a href="/neovim-docs-web/en/options#'foldexpr'">'foldexpr'</a> <a href="/neovim-docs-web/en/options#'fde'">'fde'</a>	string (default: "0")
			local to window
	The expression used for when <a href="/neovim-docs-web/en/options#'foldmethod'">'foldmethod'</a> is "expr".  It is evaluated
	for each line to obtain its fold level.  See <a href="/neovim-docs-web/en/fold#fold-expr">fold-expr</a>.</div>
<div class="old-help-para">	The expression will be evaluated in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a> if set from a
	modeline, see <a href="/neovim-docs-web/en/eval#sandbox-option">sandbox-option</a>.
	This option can't be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> when the <a href="/neovim-docs-web/en/options#'diff'">'diff'</a> option is
	on or the <a href="/neovim-docs-web/en/options#'modelineexpr'">'modelineexpr'</a> option is off.</div>
<div class="old-help-para">	It is not allowed to change text or jump to another window while
	evaluating <a href="/neovim-docs-web/en/options#'foldexpr'">'foldexpr'</a> <a href="/neovim-docs-web/en/eval#textlock">textlock</a>.</div>
<div class="old-help-para">						<a name="'foldignore'"></a><code class="help-tag-right">'foldignore'</code> <a name="'fdi'"></a><code class="help-tag">'fdi'</code>
<a href="/neovim-docs-web/en/options#'foldignore'">'foldignore'</a> <a href="/neovim-docs-web/en/options#'fdi'">'fdi'</a>	string (default: "#")
			local to window
	Used only when <a href="/neovim-docs-web/en/options#'foldmethod'">'foldmethod'</a> is "indent".  Lines starting with
	characters in <a href="/neovim-docs-web/en/options#'foldignore'">'foldignore'</a> will get their fold level from surrounding
	lines.  White space is skipped before checking for this character.
	The default "#" works well for C programs.  See <a href="/neovim-docs-web/en/fold#fold-indent">fold-indent</a>.</div>
<div class="old-help-para">						<a name="'foldlevel'"></a><code class="help-tag-right">'foldlevel'</code> <a name="'fdl'"></a><code class="help-tag">'fdl'</code>
<a href="/neovim-docs-web/en/options#'foldlevel'">'foldlevel'</a> <a href="/neovim-docs-web/en/options#'fdl'">'fdl'</a>	number (default: 0)
			local to window
	Sets the fold level: Folds with a higher level will be closed.
	Setting this option to zero will close all folds.  Higher numbers will
	close fewer folds.
	This option is set by commands like <a href="/neovim-docs-web/en/fold#zm">zm</a>, <a href="/neovim-docs-web/en/fold#zM">zM</a> and <a href="/neovim-docs-web/en/fold#zR">zR</a>.
	See <a href="/neovim-docs-web/en/fold#fold-foldlevel">fold-foldlevel</a>.</div>
<div class="old-help-para">						<a name="'foldlevelstart'"></a><code class="help-tag-right">'foldlevelstart'</code> <a name="'fdls'"></a><code class="help-tag">'fdls'</code>
<a href="/neovim-docs-web/en/options#'foldlevelstart'">'foldlevelstart'</a> <a href="/neovim-docs-web/en/options#'fdls'">'fdls'</a>	number (default: -1)
			global
	Sets <a href="/neovim-docs-web/en/options#'foldlevel'">'foldlevel'</a> when starting to edit another buffer in a window.
	Useful to always start editing with all folds closed (value zero),
	some folds closed (one) or no folds closed (99).
	This is done before reading any modeline, thus a setting in a modeline
	overrules this option.  Starting to edit a file for <a href="/neovim-docs-web/en/diff#diff-mode">diff-mode</a> also
	ignores this option and closes all folds.
	It is also done before BufReadPre autocommands, to allow an autocmd to
	overrule the <a href="/neovim-docs-web/en/options#'foldlevel'">'foldlevel'</a> value for specific files.
	When the value is negative, it is not used.</div>
<div class="old-help-para">						<a name="'foldmarker'"></a><code class="help-tag-right">'foldmarker'</code> <a name="'fmr'"></a><code class="help-tag">'fmr'</code> <a name="E536"></a><code class="help-tag">E536</code>
<a href="/neovim-docs-web/en/options#'foldmarker'">'foldmarker'</a> <a href="/neovim-docs-web/en/options#'fmr'">'fmr'</a>	string (default: "{{{,}}}")
			local to window
	The start and end marker used when <a href="/neovim-docs-web/en/options#'foldmethod'">'foldmethod'</a> is "marker".  There
	must be one comma, which separates the start and end marker.  The
	marker is a literal string (a regular expression would be too slow).
	See <a href="/neovim-docs-web/en/fold#fold-marker">fold-marker</a>.</div>
<div class="old-help-para">						<a name="'foldmethod'"></a><code class="help-tag-right">'foldmethod'</code> <a name="'fdm'"></a><code class="help-tag">'fdm'</code>
<a href="/neovim-docs-web/en/options#'foldmethod'">'foldmethod'</a> <a href="/neovim-docs-web/en/options#'fdm'">'fdm'</a>	string (default: "manual")
			local to window
	The kind of folding used for the current window.  Possible values:
	<a href="/neovim-docs-web/en/fold#fold-manual">fold-manual</a>  	manual	    Folds are created manually.
	<a href="/neovim-docs-web/en/fold#fold-indent">fold-indent</a>  	indent	    Lines with equal indent form a fold.
	<a href="/neovim-docs-web/en/fold#fold-expr">fold-expr</a>  	expr	    <a href="/neovim-docs-web/en/options#'foldexpr'">'foldexpr'</a> gives the fold level of a line.
	<a href="/neovim-docs-web/en/fold#fold-marker">fold-marker</a>  	marker	    Markers are used to specify folds.
	<a href="/neovim-docs-web/en/fold#fold-syntax">fold-syntax</a>  	syntax	    Syntax highlighting items specify folds.
	<a href="/neovim-docs-web/en/fold#fold-diff">fold-diff</a>  	diff	    Fold text that is not changed.</div>
<div class="old-help-para">						<a name="'foldminlines'"></a><code class="help-tag-right">'foldminlines'</code> <a name="'fml'"></a><code class="help-tag">'fml'</code>
<a href="/neovim-docs-web/en/options#'foldminlines'">'foldminlines'</a> <a href="/neovim-docs-web/en/options#'fml'">'fml'</a>	number (default: 1)
			local to window
	Sets the number of screen lines above which a fold can be displayed
	closed.  Also for manually closed folds.  With the default value of
	one a fold can only be closed if it takes up two or more screen lines.
	Set to zero to be able to close folds of just one screen line.
	Note that this only has an effect on what is displayed.  After using
	"zc" to close a fold, which is displayed open because it's smaller
	than <a href="/neovim-docs-web/en/options#'foldminlines'">'foldminlines'</a>, a following "zc" may close a containing fold.</div>
<div class="old-help-para">						<a name="'foldnestmax'"></a><code class="help-tag-right">'foldnestmax'</code> <a name="'fdn'"></a><code class="help-tag">'fdn'</code>
<a href="/neovim-docs-web/en/options#'foldnestmax'">'foldnestmax'</a> <a href="/neovim-docs-web/en/options#'fdn'">'fdn'</a>	number (default: 20)
			local to window
	Sets the maximum nesting of folds for the "indent" and "syntax"
	methods.  This avoids that too many folds will be created.  Using more
	than 20 doesn't work, because the internal limit is 20.</div>
<div class="old-help-para">						<a name="'foldopen'"></a><code class="help-tag-right">'foldopen'</code> <a name="'fdo'"></a><code class="help-tag">'fdo'</code>
<a href="/neovim-docs-web/en/options#'foldopen'">'foldopen'</a> <a href="/neovim-docs-web/en/options#'fdo'">'fdo'</a>	string (default: "block,hor,mark,percent,quickfix,
							     search,tag,undo")
			global
	Specifies for which type of commands folds will be opened, if the
	command moves the cursor into a closed fold.  It is a comma-separated
	list of items.
	NOTE: When the command is part of a mapping this option is not used.
	Add the <a href="/neovim-docs-web/en/fold#zv">zv</a> command to the mapping to get the same effect.
	(rationale: the mapping may want to control opening folds itself)</div>
<div class="old-help-para"><div class="help-column_heading">		item		commands</div>		all		any
		block		"(", "{", "[[", "[{", etc.
		hor		horizontal movements: "l", "w", "fx", etc.
		insert		any command in Insert mode
		jump		far jumps: "G", "gg", etc.
		mark		jumping to a mark: "'m", <code>CTRL-O</code>, etc.
		percent		"%"
		quickfix	":cn", ":crew", ":make", etc.
		search		search for a pattern: "/", "n", "*", "gd", etc.
				(not for a search pattern in a ":" command)
				Also for <a href="/neovim-docs-web/en/spell#%5Bs">[s</a> and <a href="/neovim-docs-web/en/spell#%5Ds">]s</a>.
		tag		jumping to a tag: ":ta", <code>CTRL-T</code>, etc.
		undo		undo or redo: "u" and <code>CTRL-R</code>
	When a movement command is used for an operator (e.g., "dl" or "y%")
	this option is not used.  This means the operator will include the
	whole closed fold.
	Note that vertical movements are not here, because it would make it
	very difficult to move onto a closed fold.
	In insert mode the folds containing the cursor will always be open
	when text is inserted.
	To close folds you can re-apply <a href="/neovim-docs-web/en/options#'foldlevel'">'foldlevel'</a> with the <a href="/neovim-docs-web/en/fold#zx">zx</a> command or
	set the <a href="/neovim-docs-web/en/options#'foldclose'">'foldclose'</a> option to "all".</div>
<div class="old-help-para">						<a name="'foldtext'"></a><code class="help-tag-right">'foldtext'</code> <a name="'fdt'"></a><code class="help-tag">'fdt'</code>
<a href="/neovim-docs-web/en/options#'foldtext'">'foldtext'</a> <a href="/neovim-docs-web/en/options#'fdt'">'fdt'</a>	string (default: "foldtext()")
			local to window
	An expression which is used to specify the text displayed for a closed
	fold.  See <a href="/neovim-docs-web/en/fold#fold-foldtext">fold-foldtext</a>.</div>
<div class="old-help-para">	The expression will be evaluated in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a> if set from a
	modeline, see <a href="/neovim-docs-web/en/eval#sandbox-option">sandbox-option</a>.
	This option cannot be set in a modeline when <a href="/neovim-docs-web/en/options#'modelineexpr'">'modelineexpr'</a> is off.</div>
<div class="old-help-para">	It is not allowed to change text or jump to another window while
	evaluating <a href="/neovim-docs-web/en/options#'foldtext'">'foldtext'</a> <a href="/neovim-docs-web/en/eval#textlock">textlock</a>.</div>
<div class="old-help-para">						<a name="'formatexpr'"></a><code class="help-tag-right">'formatexpr'</code> <a name="'fex'"></a><code class="help-tag">'fex'</code>
<a href="/neovim-docs-web/en/options#'formatexpr'">'formatexpr'</a> <a href="/neovim-docs-web/en/options#'fex'">'fex'</a>	string (default "")
			local to buffer
	Expression which is evaluated to format a range of lines for the <a href="/neovim-docs-web/en/change#gq">gq</a>
	operator or automatic formatting (see <a href="/neovim-docs-web/en/options#'formatoptions'">'formatoptions'</a>).  When this
	option is empty <a href="/neovim-docs-web/en/options#'formatprg'">'formatprg'</a> is used.</div>
<div class="old-help-para">	The <a href="/neovim-docs-web/en/eval#v%3Alnum">v:lnum</a>  variable holds the first line to be formatted.
	The <a href="/neovim-docs-web/en/eval#v%3Acount">v:count</a> variable holds the number of lines to be formatted.
	The <a href="/neovim-docs-web/en/eval#v%3Achar">v:char</a>  variable holds the character that is going to be
		      inserted if the expression is being evaluated due to
		      automatic formatting.  This can be empty.  Don't insert
		      it yet!</div>
<div class="old-help-para">	Example:<pre>:set formatexpr=mylang#Format()</pre></div>
<div class="old-help-para">	This will invoke the mylang#Format() function in the
	autoload/mylang.vim file in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>. <a href="/neovim-docs-web/en/userfunc#autoload">autoload</a></div>
<div class="old-help-para">	The expression is also evaluated when <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> is set and adding
	text beyond that limit.  This happens under the same conditions as
	when internal formatting is used.  Make sure the cursor is kept in the
	same spot relative to the text then!  The <a href="/neovim-docs-web/en/builtin#mode()">mode()</a> function will
	return "i" or "R" in this situation.</div>
<div class="old-help-para">	When the expression evaluates to non-zero Vim will fall back to using
	the internal format mechanism.</div>
<div class="old-help-para">	The expression will be evaluated in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a> when set from a
	modeline, see <a href="/neovim-docs-web/en/eval#sandbox-option">sandbox-option</a>.  That stops the option from working,
	since changing the buffer text is not allowed.
	This option cannot be set in a modeline when <a href="/neovim-docs-web/en/options#'modelineexpr'">'modelineexpr'</a> is off.
	NOTE: This option is set to "" when <a href="/neovim-docs-web/en/vim_diff#'compatible'">'compatible'</a> is set.</div>
<div class="old-help-para">					<a name="'formatlistpat'"></a><code class="help-tag-right">'formatlistpat'</code> <a name="'flp'"></a><code class="help-tag">'flp'</code>
<a href="/neovim-docs-web/en/options#'formatlistpat'">'formatlistpat'</a> <a href="/neovim-docs-web/en/options#'flp'">'flp'</a>	string (default: "^\s*\d\+[\]:.)}\t ]\s*")
			local to buffer
	A pattern that is used to recognize a list header.  This is used for
	the "n" flag in <a href="/neovim-docs-web/en/options#'formatoptions'">'formatoptions'</a>.
	The pattern must match exactly the text that will be the indent for
	the line below it.  You can use <a href="/neovim-docs-web/en/pattern#%2F%5Cze">/\ze</a> to mark the end of the match
	while still checking more characters.  There must be a character
	following the pattern, when it matches the whole line it is handled
	like there is no match.
	The default recognizes a number, followed by an optional punctuation
	character and white space.</div>
<div class="old-help-para">					<a name="'formatoptions'"></a><code class="help-tag-right">'formatoptions'</code> <a name="'fo'"></a><code class="help-tag">'fo'</code>
<a href="/neovim-docs-web/en/options#'formatoptions'">'formatoptions'</a> <a href="/neovim-docs-web/en/options#'fo'">'fo'</a>	string (default: "tcqj")
			local to buffer
	This is a sequence of letters which describes how automatic
	formatting is to be done.  See <a href="/neovim-docs-web/en/change#fo-table">fo-table</a>.  When the <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> option is
	on, no formatting is done (like <a href="/neovim-docs-web/en/options#'formatoptions'">'formatoptions'</a> is empty).  Commas can
	be inserted for readability.
	To avoid problems with flags that are added in the future, use the
	"+=" and "-=" feature of ":set" <a href="/neovim-docs-web/en/options#add-option-flags">add-option-flags</a>.</div>
<div class="old-help-para">						<a name="'formatprg'"></a><code class="help-tag-right">'formatprg'</code> <a name="'fp'"></a><code class="help-tag">'fp'</code>
<a href="/neovim-docs-web/en/options#'formatprg'">'formatprg'</a> <a href="/neovim-docs-web/en/options#'fp'">'fp'</a>	string (default "")
			global or local to buffer <a href="/neovim-docs-web/en/options#global-local">global-local</a>
	The name of an external program that will be used to format the lines
	selected with the <a href="/neovim-docs-web/en/change#gq">gq</a> operator.  The program must take the input on
	stdin and produce the output on stdout.  The Unix program "fmt" is
	such a program.
	If the <a href="/neovim-docs-web/en/options#'formatexpr'">'formatexpr'</a> option is not empty it will be used instead.
	Otherwise, if <a href="/neovim-docs-web/en/options#'formatprg'">'formatprg'</a> option is an empty string, the internal
	format function will be used <a href="/neovim-docs-web/en/indent#C-indenting">C-indenting</a>.
	Environment variables are expanded <a href="/neovim-docs-web/en/options#%3Aset_env">:set_env</a>.  See <a href="/neovim-docs-web/en/options#option-backslash">option-backslash</a>
	about including spaces and backslashes.
	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">					<a name="'fsync'"></a><code class="help-tag-right">'fsync'</code> <a name="'fs'"></a><code class="help-tag">'fs'</code> <a name="'nofsync'"></a><code class="help-tag">'nofsync'</code> <a name="'nofs'"></a><code class="help-tag">'nofs'</code>
<a href="/neovim-docs-web/en/options#'fsync'">'fsync'</a> <a href="/neovim-docs-web/en/options#'fs'">'fs'</a>		boolean	(default off)
			global
	When on, the OS function fsync() will be called after saving a file
	(<a href="/neovim-docs-web/en/editing#%3Awrite">:write</a>, <a href="/neovim-docs-web/en/builtin#writefile()">writefile()</a>, ???), <a href="/neovim-docs-web/en/recover#swap-file">swap-file</a> and <a href="/neovim-docs-web/en/starting#shada-file">shada-file</a>. This
	flushes the file to disk, ensuring that it is safely written.
	Slow on some systems: writing buffers, quitting Nvim, and other
	operations may sometimes take a few seconds.</div>
<div class="old-help-para">	Files are ALWAYS flushed (<a href="/neovim-docs-web/en/options#'fsync'">'fsync'</a> is ignored) when:
<div class="help-li" style=""> <a href="/neovim-docs-web/en/autocmd#CursorHold">CursorHold</a> event is triggered
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/recover#%3Apreserve">:preserve</a> is called
</div><div class="help-li" style=""> system signals low battery life
</div><div class="help-li" style=""> Nvim exits abnormally
</div></div>
<div class="old-help-para">	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">				   <a name="'gdefault'"></a><code class="help-tag-right">'gdefault'</code> <a name="'gd'"></a><code class="help-tag">'gd'</code> <a name="'nogdefault'"></a><code class="help-tag">'nogdefault'</code> <a name="'nogd'"></a><code class="help-tag">'nogd'</code>
<a href="/neovim-docs-web/en/options#'gdefault'">'gdefault'</a> <a href="/neovim-docs-web/en/options#'gd'">'gd'</a>		boolean	(default off)
			global
	When on, the ":substitute" flag 'g' is default on.  This means that
	all matches in a line are substituted instead of one.  When a 'g' flag
	is given to a ":substitute" command, this will toggle the substitution
	of all or one match.  See <a href="/neovim-docs-web/en/change#complex-change">complex-change</a>.</div>
<div class="old-help-para"><div class="help-column_heading">		command		<a href="/neovim-docs-web/en/options#'gdefault'">'gdefault'</a> on	<a href="/neovim-docs-web/en/options#'gdefault'">'gdefault'</a> off</div>		:s///		  subst. all	  subst. one
		:s///g		  subst. one	  subst. all
		:s///gg		  subst. all	  subst. one</div>
<div class="old-help-para">	DEPRECATED: Setting this option may break plugins that are not aware
	of this option.  Also, many users get confused that adding the /g flag
	has the opposite effect of that it normally does.</div>
<div class="old-help-para">						<a name="'grepformat'"></a><code class="help-tag-right">'grepformat'</code> <a name="'gfm'"></a><code class="help-tag">'gfm'</code>
<a href="/neovim-docs-web/en/options#'grepformat'">'grepformat'</a> <a href="/neovim-docs-web/en/options#'gfm'">'gfm'</a>	string	(default "%f:%l:%m,%f:%l%m,%f  %l%m")
			global
	Format to recognize for the ":grep" command output.
	This is a scanf-like string that uses the same format as the
	<a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a> option: see <a href="/neovim-docs-web/en/quickfix#errorformat">errorformat</a>.</div>
<div class="old-help-para">						<a name="'grepprg'"></a><code class="help-tag-right">'grepprg'</code> <a name="'gp'"></a><code class="help-tag">'gp'</code>
<a href="/neovim-docs-web/en/options#'grepprg'">'grepprg'</a> <a href="/neovim-docs-web/en/options#'gp'">'gp'</a>		string	(default "grep -n ",
				 Unix: "grep -n $* /dev/null")
			global or local to buffer <a href="/neovim-docs-web/en/options#global-local">global-local</a>
	Program to use for the <a href="/neovim-docs-web/en/quickfix#%3Agrep">:grep</a> command.  This option may contain '%'
	and '#' characters, which are expanded like when used in a command-
	line.  The placeholder "$*" is allowed to specify where the arguments
	will be included.  Environment variables are expanded <a href="/neovim-docs-web/en/options#%3Aset_env">:set_env</a>.  See
	<a href="/neovim-docs-web/en/options#option-backslash">option-backslash</a> about including spaces and backslashes.
	When your "grep" accepts the "-H" argument, use this to make ":grep"
	also work well with a single file:<pre>:set grepprg=grep\ -nH</pre></div>
<div class="old-help-para">	Special value: When <a href="/neovim-docs-web/en/options#'grepprg'">'grepprg'</a> is set to "internal" the <a href="/neovim-docs-web/en/quickfix#%3Agrep">:grep</a> command
	works like <a href="/neovim-docs-web/en/quickfix#%3Avimgrep">:vimgrep</a>, <a href="/neovim-docs-web/en/quickfix#%3Algrep">:lgrep</a> like <a href="/neovim-docs-web/en/quickfix#%3Alvimgrep">:lvimgrep</a>, <a href="/neovim-docs-web/en/quickfix#%3Agrepadd">:grepadd</a> like
	<a href="/neovim-docs-web/en/quickfix#%3Avimgrepadd">:vimgrepadd</a> and <a href="/neovim-docs-web/en/quickfix#%3Algrepadd">:lgrepadd</a> like <a href="/neovim-docs-web/en/quickfix#%3Alvimgrepadd">:lvimgrepadd</a>.
	See also the section <a href="/neovim-docs-web/en/quickfix#%3Amake_makeprg">:make_makeprg</a>, since most of the comments there
	apply equally to <a href="/neovim-docs-web/en/options#'grepprg'">'grepprg'</a>.
	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">			<a name="'guicursor'"></a><code class="help-tag-right">'guicursor'</code> <a name="'gcr'"></a><code class="help-tag">'gcr'</code> <a name="E545"></a><code class="help-tag">E545</code> <a name="E546"></a><code class="help-tag">E546</code> <a name="E548"></a><code class="help-tag">E548</code> <a name="E549"></a><code class="help-tag">E549</code>
<a href="/neovim-docs-web/en/options#'guicursor'">'guicursor'</a> <a href="/neovim-docs-web/en/options#'gcr'">'gcr'</a>	string	(default "n-v-c-sm:block,i-ci-ve:ver25,r-cr-o:hor20")
			global
	Configures the cursor style for each mode. Works in the GUI and many
	terminals.  See <a href="/neovim-docs-web/en/term#tui-cursor-shape">tui-cursor-shape</a>.</div>
<div class="old-help-para">	To disable cursor-styling, reset the option:<pre>:set guicursor=</pre></div>
<div class="old-help-para">	To enable mode shapes, "Cursor" highlight, and blinking:<pre>:set guicursor=n-v-c:block,i-ci-ve:ver25,r-cr:hor20,o:hor50
  \,a:blinkwait700-blinkoff400-blinkon250-Cursor/lCursor
  \,sm:block-blinkwait175-blinkoff150-blinkon175</pre></div>
<div class="old-help-para">	The option is a comma-separated list of parts.  Each part consists of a
	mode-list and an argument-list:
		mode-list:argument-list,mode-list:argument-list,..
	The mode-list is a dash separated list of these modes:
		n	Normal mode
		v	Visual mode
		ve	Visual mode with <a href="/neovim-docs-web/en/options#'selection'">'selection'</a> "exclusive" (same as 'v',
			if not specified)
		o	Operator-pending mode
		i	Insert mode
		r	Replace mode
		c	Command-line Normal (append) mode
		ci	Command-line Insert mode
		cr	Command-line Replace mode
		sm	showmatch in Insert mode
		a	all modes
	The argument-list is a dash separated list of these arguments:
		hor{N}	horizontal bar, <code>{N}</code> percent of the character height
		ver{N}	vertical bar, <code>{N}</code> percent of the character width
		block	block cursor, fills the whole character
<div class="help-li" style=""> Only one of the above three should be present.
</div><div class="help-li" style=""> Default is "block" for each mode.
		blinkwait{N}				<a name="cursor-blinking"></a><code class="help-tag-right">cursor-blinking</code>
		blinkon{N}
		blinkoff{N}
			blink times for cursor: blinkwait is the delay before
			the cursor starts blinking, blinkon is the time that
			the cursor is shown and blinkoff is the time that the
			cursor is not shown.  Times are in msec.  When one of
			the numbers is zero, there is no blinking. E.g.:<pre>:set guicursor=n:blinkon0</pre>
</div><div class="help-li" style=""> Default is "blinkon0" for each mode.
		<code>{group-name}</code>
			Highlight group that decides the color and font of the
			cursor.
			In the <a href="/neovim-docs-web/en/term#TUI">TUI</a>:
</div><div class="help-li" style="margin-left: 3rem;"> <a href="/neovim-docs-web/en/syntax#inverse">inverse</a>/reverse and no group-name are interpreted
			  as "host-terminal default cursor colors" which
			  typically means "inverted bg and fg colors".
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/syntax#ctermfg">ctermfg</a> and <a href="/neovim-docs-web/en/syntax#guifg">guifg</a> are ignored.
		<code>{group-name}</code>/{group-name}
			Two highlight group names, the first is used when
			no language mappings are used, the other when they
			are. <a href="/neovim-docs-web/en/map#language-mapping">language-mapping</a>
</div></div>
<div class="old-help-para">	Examples of parts:
	   n-c-v:block-nCursor	In Normal, Command-line and Visual mode, use a
				block cursor with colors from the "nCursor"
				highlight group
	   n-v-c-sm:block,i-ci-ve:ver25-Cursor,r-cr-o:hor20
				In Normal et al. modes, use a block cursor
				with the default colors defined by the host
				terminal.  In Insert-likes modes, use
				a vertical bar cursor with colors from
				"Cursor" highlight group.  In Replace-likes
				modes, use a underline cursor with
				default colors.
	   i-ci:ver30-iCursor-blinkwait300-blinkon200-blinkoff150
				In Insert and Command-line Insert mode, use a
				30% vertical bar cursor with colors from the
				"iCursor" highlight group.  Blink a bit
				faster.</div>
<div class="old-help-para">	The 'a' mode is different.  It will set the given argument-list for
	all modes.  It does not reset anything to defaults.  This can be used
	to do a common setting for all modes.  For example, to switch off
	blinking: "a:blinkon0"</div>
<div class="old-help-para">	Examples of cursor highlighting:<pre>:highlight Cursor gui=reverse guifg=NONE guibg=NONE
:highlight Cursor gui=NONE guifg=bg guibg=fg</pre></div>
<div class="old-help-para">					<a name="'guifont'"></a><code class="help-tag-right">'guifont'</code> <a name="'gfn'"></a><code class="help-tag">'gfn'</code>
						   <a name="E235"></a><code class="help-tag-right">E235</code> <a name="E596"></a><code class="help-tag">E596</code>
<a href="/neovim-docs-web/en/options#'guifont'">'guifont'</a> <a href="/neovim-docs-web/en/options#'gfn'">'gfn'</a>		string	(default "")
			global
	This is a list of fonts which will be used for the GUI version of Vim.
	In its simplest form the value is just one font name.  When
	the font cannot be found you will get an error message.  To try other
	font names a list can be specified, font names separated with commas.
	The first valid font is used.</div>
<div class="old-help-para">	Spaces after a comma are ignored.  To include a comma in a font name
	precede it with a backslash.  Setting an option requires an extra
	backslash before a space and a backslash.  See also
	<a href="/neovim-docs-web/en/options#option-backslash">option-backslash</a>.  For example:<pre>:set guifont=Screen15,\ 7x13,font\\,with\\,commas</pre></div>
<div class="old-help-para">	will make Vim try to use the font "Screen15" first, and if it fails it
	will try to use "7x13" and then "font,with,commas" instead.</div>
<div class="old-help-para">	If none of the fonts can be loaded, Vim will keep the current setting.
	If an empty font list is given, Vim will try using other resource
	settings (for X, it will use the Vim.font resource), and finally it
	will try some builtin default which should always be there ("7x13" in
	the case of X).  The font names given should be "normal" fonts.  Vim
	will try to find the related bold and italic fonts.</div>
<div class="old-help-para">	For Win32 and Mac OS:<pre>:set guifont=*</pre></div>
<div class="old-help-para">	will bring up a font requester, where you can pick the font you want.</div>
<div class="old-help-para">	The font name depends on the GUI used.</div>
<div class="old-help-para">	For Mac OSX you can use something like this:<pre>:set guifont=Monaco:h10</pre></div>
<div class="old-help-para">								<a name="E236"></a><code class="help-tag-right">E236</code>
	Note that the fonts must be mono-spaced (all characters have the same
	width).</div>
<div class="old-help-para">	To preview a font on X11, you might be able to use the "xfontsel"
	program.  The "xlsfonts" program gives a list of all available fonts.</div>
<div class="old-help-para">	For the Win32 GUI					<a name="E244"></a><code class="help-tag-right">E244</code> <a name="E245"></a><code class="help-tag">E245</code>
<div class="help-li" style=""> takes these options in the font name:
		hXX - height is XX (points, can be floating-point)
		wXX - width is XX (points, can be floating-point)
		b   - bold
		i   - italic
		u   - underline
		s   - strikeout
		cXX - character set XX.  Valid charsets are: ANSI, ARABIC,
		      BALTIC, CHINESEBIG5, DEFAULT, EASTEUROPE, GB2312, GREEK,
		      HANGEUL, HEBREW, JOHAB, MAC, OEM, RUSSIAN, SHIFTJIS,
		      SYMBOL, THAI, TURKISH, VIETNAMESE ANSI and BALTIC.
		      Normally you would use "cDEFAULT".
</div></div>
<div class="old-help-para">	  Use a ':' to separate the options.
<div class="help-li" style=""> A '_' can be used in the place of a space, so you don't need to use
	  backslashes to escape the spaces.
</div><div class="help-li" style=""> Examples:
<pre>:set guifont=courier_new:h12:w5:b:cRUSSIAN
:set guifont=Andale_Mono:h7.5:w4.5</pre></div></div>
<div class="old-help-para">				<a name="'guifontwide'"></a><code class="help-tag-right">'guifontwide'</code> <a name="'gfw'"></a><code class="help-tag">'gfw'</code> <a name="E231"></a><code class="help-tag">E231</code> <a name="E533"></a><code class="help-tag">E533</code> <a name="E534"></a><code class="help-tag">E534</code>
<a href="/neovim-docs-web/en/options#'guifontwide'">'guifontwide'</a> <a href="/neovim-docs-web/en/options#'gfw'">'gfw'</a>	string	(default "")
			global
	Comma-separated list of fonts to be used for double-width characters.
	The first font that can be loaded is used.
	Note: The size of these fonts must be exactly twice as wide as the one
	specified with <a href="/neovim-docs-web/en/options#'guifont'">'guifont'</a> and the same height.</div>
<div class="old-help-para">	When <a href="/neovim-docs-web/en/options#'guifont'">'guifont'</a> has a valid font and <a href="/neovim-docs-web/en/options#'guifontwide'">'guifontwide'</a> is empty Vim will
	attempt to set <a href="/neovim-docs-web/en/options#'guifontwide'">'guifontwide'</a> to a matching double-width font.</div>
<div class="old-help-para">						<a name="'guioptions'"></a><code class="help-tag-right">'guioptions'</code> <a name="'go'"></a><code class="help-tag">'go'</code>
<a href="/neovim-docs-web/en/options#'guioptions'">'guioptions'</a> <a href="/neovim-docs-web/en/options#'go'">'go'</a>	string	(default "egmrLT"   (MS-Windows))
			global
	This option only has an effect in the GUI version of Vim.  It is a
	sequence of letters which describes what components and options of the
	GUI should be used.
	To avoid problems with flags that are added in the future, use the
	"+=" and "-=" feature of ":set" <a href="/neovim-docs-web/en/options#add-option-flags">add-option-flags</a>.</div>
<div class="old-help-para">	Valid letters are as follows:
							<a name="guioptions_a"></a><code class="help-tag-right">guioptions_a</code> <a name="'go-a'"></a><code class="help-tag">'go-a'</code>
	  'a'	Autoselect:  If present, then whenever VISUAL mode is started,
		or the Visual area extended, Vim tries to become the owner of
		the windowing system's global selection.  This means that the
		Visually highlighted text is available for pasting into other
		applications as well as into Vim itself.  When the Visual mode
		ends, possibly due to an operation on the text, or when an
		application wants to paste the selection, the highlighted text
		is automatically yanked into the "* selection register.
		Thus the selection is still available for pasting into other
		applications after the VISUAL mode has ended.
		    If not present, then Vim won't become the owner of the
		windowing system's global selection unless explicitly told to
		by a yank or delete operation for the "* register.
		The same applies to the modeless selection.
								<a name="'go-P'"></a><code class="help-tag-right">'go-P'</code>
	  'P'	Like autoselect but using the "+ register instead of the "*
		register.
								<a name="'go-A'"></a><code class="help-tag-right">'go-A'</code>
	  'A'	Autoselect for the modeless selection.  Like 'a', but only
		applies to the modeless selection.</div>
<div class="old-help-para"><div class="help-column_heading">		    <a href="/neovim-docs-web/en/options#'guioptions'">'guioptions'</a>   autoselect Visual  autoselect modeless</div>			 ""		 -				 -
			 "a"		yes			yes
			 "A"		 -				yes
			 "aA"		yes			yes</div>
<div class="old-help-para">								<a name="'go-c'"></a><code class="help-tag-right">'go-c'</code>
	  'c'	Use console dialogs instead of popup dialogs for simple
		choices.
								<a name="'go-d'"></a><code class="help-tag-right">'go-d'</code>
	  'd'	Use dark theme variant if available.
								<a name="'go-e'"></a><code class="help-tag-right">'go-e'</code>
	  'e'	Add tab pages when indicated with <a href="/neovim-docs-web/en/options#'showtabline'">'showtabline'</a>.
		<a href="/neovim-docs-web/en/options#'guitablabel'">'guitablabel'</a> can be used to change the text in the labels.
		When 'e' is missing a non-GUI tab pages line may be used.
		The GUI tabs are only supported on some systems, currently
		Mac OS/X and MS-Windows.
								<a name="'go-i'"></a><code class="help-tag-right">'go-i'</code>
	  'i'	Use a Vim icon.
								<a name="'go-m'"></a><code class="help-tag-right">'go-m'</code>
	  'm'	Menu bar is present.
								<a name="'go-M'"></a><code class="help-tag-right">'go-M'</code>
	  'M'	The system menu "$VIMRUNTIME/menu.vim" is not sourced.  Note
		that this flag must be added in the vimrc file, before
		switching on syntax or filetype recognition (when the <a href="/neovim-docs-web/en/gui#gvimrc">gvimrc</a>
		file is sourced the system menu has already been loaded; the
		<code>:syntax on</code> and <code>:filetype on</code> commands load the menu too).
								<a name="'go-g'"></a><code class="help-tag-right">'go-g'</code>
	  'g'	Grey menu items: Make menu items that are not active grey.  If
		'g' is not included inactive menu items are not shown at all.
								<a name="'go-T'"></a><code class="help-tag-right">'go-T'</code>
	  'T'	Include Toolbar.  Currently only in Win32 GUI.
								<a name="'go-r'"></a><code class="help-tag-right">'go-r'</code>
	  'r'	Right-hand scrollbar is always present.
								<a name="'go-R'"></a><code class="help-tag-right">'go-R'</code>
	  'R'	Right-hand scrollbar is present when there is a vertically
		split window.
								<a name="'go-l'"></a><code class="help-tag-right">'go-l'</code>
	  'l'	Left-hand scrollbar is always present.
								<a name="'go-L'"></a><code class="help-tag-right">'go-L'</code>
	  'L'	Left-hand scrollbar is present when there is a vertically
		split window.
								<a name="'go-b'"></a><code class="help-tag-right">'go-b'</code>
	  'b'	Bottom (horizontal) scrollbar is present.  Its size depends on
		the longest visible line, or on the cursor line if the 'h'
		flag is included. <a href="/neovim-docs-web/en/gui#gui-horiz-scroll">gui-horiz-scroll</a>
								<a name="'go-h'"></a><code class="help-tag-right">'go-h'</code>
	  'h'	Limit horizontal scrollbar size to the length of the cursor
		line.  Reduces computations. <a href="/neovim-docs-web/en/gui#gui-horiz-scroll">gui-horiz-scroll</a></div>
<div class="old-help-para">	And yes, you may even have scrollbars on the left AND the right if
	you really want to :-).  See <a href="/neovim-docs-web/en/gui#gui-scrollbars">gui-scrollbars</a> for more information.</div>
<div class="old-help-para">								<a name="'go-v'"></a><code class="help-tag-right">'go-v'</code>
	  'v'	Use a vertical button layout for dialogs.  When not included,
		a horizontal layout is preferred, but when it doesn't fit a
		vertical layout is used anyway.  Not supported in GTK 3.
								<a name="'go-p'"></a><code class="help-tag-right">'go-p'</code>
	  'p'	Use Pointer callbacks for X11 GUI.  This is required for some
		window managers.  If the cursor is not blinking or hollow at
		the right moment, try adding this flag.  This must be done
		before starting the GUI.  Set it in your <a href="/neovim-docs-web/en/gui#gvimrc">gvimrc</a>.  Adding or
		removing it after the GUI has started has no effect.
								<a name="'go-k'"></a><code class="help-tag-right">'go-k'</code>
	  'k'	Keep the GUI window size when adding/removing a scrollbar, or
		toolbar, tabline, etc.  Instead, the behavior is similar to
		when the window is maximized and will adjust <a href="/neovim-docs-web/en/options#'lines'">'lines'</a> and
		<a href="/neovim-docs-web/en/options#'columns'">'columns'</a> to fit to the window.  Without the 'k' flag Vim will
		try to keep <a href="/neovim-docs-web/en/options#'lines'">'lines'</a> and <a href="/neovim-docs-web/en/options#'columns'">'columns'</a> the same when adding and
		removing GUI components.</div>
<div class="old-help-para">						<a name="'guitablabel'"></a><code class="help-tag-right">'guitablabel'</code> <a name="'gtl'"></a><code class="help-tag">'gtl'</code>
<a href="/neovim-docs-web/en/options#'guitablabel'">'guitablabel'</a> <a href="/neovim-docs-web/en/options#'gtl'">'gtl'</a>	string	(default empty)
			global
	When non-empty describes the text to use in a label of the GUI tab
	pages line.  When empty and when the result is empty Vim will use a
	default label.  See <a href="/neovim-docs-web/en/tabpage#setting-guitablabel">setting-guitablabel</a> for more info.</div>
<div class="old-help-para">	The format of this option is like that of <a href="/neovim-docs-web/en/options#'statusline'">'statusline'</a>.
	<a href="/neovim-docs-web/en/options#'guitabtooltip'">'guitabtooltip'</a> is used for the tooltip, see below.
	The expression will be evaluated in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a> when set from a
	modeline, see <a href="/neovim-docs-web/en/eval#sandbox-option">sandbox-option</a>.
	This option cannot be set in a modeline when <a href="/neovim-docs-web/en/options#'modelineexpr'">'modelineexpr'</a> is off.</div>
<div class="old-help-para">	Only used when the GUI tab pages line is displayed.  'e' must be
	present in <a href="/neovim-docs-web/en/options#'guioptions'">'guioptions'</a>.  For the non-GUI tab pages line <a href="/neovim-docs-web/en/options#'tabline'">'tabline'</a> is
	used.</div>
<div class="old-help-para">						<a name="'guitabtooltip'"></a><code class="help-tag-right">'guitabtooltip'</code> <a name="'gtt'"></a><code class="help-tag">'gtt'</code>
<a href="/neovim-docs-web/en/options#'guitabtooltip'">'guitabtooltip'</a> <a href="/neovim-docs-web/en/options#'gtt'">'gtt'</a>	string	(default empty)
			global
	When non-empty describes the text to use in a tooltip for the GUI tab
	pages line.  When empty Vim will use a default tooltip.
	This option is otherwise just like <a href="/neovim-docs-web/en/options#'guitablabel'">'guitablabel'</a> above.
	You can include a line break.  Simplest method is to use <a href="/neovim-docs-web/en/eval#%3Alet">:let</a>:<pre>:let &amp;guitabtooltip = "line one\nline two"</pre></div>
<div class="old-help-para">						<a name="'helpfile'"></a><code class="help-tag-right">'helpfile'</code> <a name="'hf'"></a><code class="help-tag">'hf'</code>
<a href="/neovim-docs-web/en/options#'helpfile'">'helpfile'</a> <a href="/neovim-docs-web/en/options#'hf'">'hf'</a>		string	(default (MS-Windows) "$VIMRUNTIME\doc\help.txt"
					 (others) "$VIMRUNTIME/doc/help.txt")
			global
	Name of the main help file.  All distributed help files should be
	placed together in one directory.  Additionally, all "doc" directories
	in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a> will be used.
	Environment variables are expanded <a href="/neovim-docs-web/en/options#%3Aset_env">:set_env</a>.  For example:
	"$VIMRUNTIME/doc/help.txt".  If $VIMRUNTIME is not set, $VIM is also
	tried.  Also see <a href="/neovim-docs-web/en/starting#%24VIMRUNTIME">$VIMRUNTIME</a> and <a href="/neovim-docs-web/en/options#option-backslash">option-backslash</a> about including
	spaces and backslashes.
	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">						<a name="'helpheight'"></a><code class="help-tag-right">'helpheight'</code> <a name="'hh'"></a><code class="help-tag">'hh'</code>
<a href="/neovim-docs-web/en/options#'helpheight'">'helpheight'</a> <a href="/neovim-docs-web/en/options#'hh'">'hh'</a>	number	(default 20)
			global
	Minimal initial height of the help window when it is opened with the
	":help" command.  The initial height of the help window is half of the
	current window, or (when the <a href="/neovim-docs-web/en/options#'ea'">'ea'</a> option is on) the same as other
	windows.  When the height is less than <a href="/neovim-docs-web/en/options#'helpheight'">'helpheight'</a>, the height is
	set to <a href="/neovim-docs-web/en/options#'helpheight'">'helpheight'</a>.  Set to zero to disable.</div>
<div class="old-help-para">						<a name="'helplang'"></a><code class="help-tag-right">'helplang'</code> <a name="'hlg'"></a><code class="help-tag">'hlg'</code>
<a href="/neovim-docs-web/en/options#'helplang'">'helplang'</a> <a href="/neovim-docs-web/en/options#'hlg'">'hlg'</a>	string	(default: messages language or empty)
			global
	Comma-separated list of languages.  Vim will use the first language
	for which the desired help can be found.  The English help will always
	be used as a last resort.  You can add "en" to prefer English over
	another language, but that will only find tags that exist in that
	language and not in the English help.
	Example:<pre>:set helplang=de,it</pre></div>
<div class="old-help-para">	This will first search German, then Italian and finally English help
	files.
	When using <a href="/neovim-docs-web/en/tagsrch#CTRL-%5D">CTRL-]</a> and ":help!" in a non-English help file Vim will
	try to find the tag in the current language before using this option.
	See <a href="/neovim-docs-web/en/helphelp#help-translated">help-translated</a>.</div>
<div class="old-help-para">				     <a name="'hidden'"></a><code class="help-tag-right">'hidden'</code> <a name="'hid'"></a><code class="help-tag">'hid'</code> <a name="'nohidden'"></a><code class="help-tag">'nohidden'</code> <a name="'nohid'"></a><code class="help-tag">'nohid'</code>
<a href="/neovim-docs-web/en/options#'hidden'">'hidden'</a> <a href="/neovim-docs-web/en/options#'hid'">'hid'</a>		boolean	(default on)
			global
	When off a buffer is unloaded (including loss of undo information)
	when it is <a href="/neovim-docs-web/en/editing#abandon">abandon</a>ed.  When on a buffer becomes hidden when it is
	<a href="/neovim-docs-web/en/editing#abandon">abandon</a>ed.  A buffer displayed in another window does not become
	hidden, of course.</div>
<div class="old-help-para">	Commands that move through the buffer list sometimes hide a buffer
	although the <a href="/neovim-docs-web/en/options#'hidden'">'hidden'</a> option is off when these three are true:
<div class="help-li" style=""> the buffer is modified
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'autowrite'">'autowrite'</a> is off or writing is not possible
</div><div class="help-li" style=""> the '!' flag was used
	Also see <a href="/neovim-docs-web/en/windows#windows">windows</a>.
</div></div>
<div class="old-help-para">	To hide a specific buffer use the <a href="/neovim-docs-web/en/options#'bufhidden'">'bufhidden'</a> option.
	<a href="/neovim-docs-web/en/options#'hidden'">'hidden'</a> is set for one command with ":hide <code>{command}</code>" <a href="/neovim-docs-web/en/windows#%3Ahide">:hide</a>.</div>
<div class="old-help-para">						<a name="'history'"></a><code class="help-tag-right">'history'</code> <a name="'hi'"></a><code class="help-tag">'hi'</code>
<a href="/neovim-docs-web/en/options#'history'">'history'</a> <a href="/neovim-docs-web/en/options#'hi'">'hi'</a>		number	(default: 10000)
			global
	A history of ":" commands, and a history of previous search patterns
	is remembered.  This option decides how many entries may be stored in
	each of these histories (see <a href="/neovim-docs-web/en/cmdline#cmdline-editing">cmdline-editing</a>).
	The maximum value is 10000.</div>
<div class="old-help-para">					 <a name="'hkmap'"></a><code class="help-tag-right">'hkmap'</code> <a name="'hk'"></a><code class="help-tag">'hk'</code> <a name="'nohkmap'"></a><code class="help-tag">'nohkmap'</code> <a name="'nohk'"></a><code class="help-tag">'nohk'</code>
<a href="/neovim-docs-web/en/options#'hkmap'">'hkmap'</a> <a href="/neovim-docs-web/en/options#'hk'">'hk'</a>		boolean (default off)
			global
	When on, the keyboard is mapped for the Hebrew character set.
	Normally you would set <a href="/neovim-docs-web/en/options#'allowrevins'">'allowrevins'</a> and use <code>CTRL-_</code> in insert mode to
	toggle this option.  See <a href="/neovim-docs-web/en/rileft#rileft.txt">rileft.txt</a>.</div>
<div class="old-help-para">				 <a name="'hkmapp'"></a><code class="help-tag-right">'hkmapp'</code> <a name="'hkp'"></a><code class="help-tag">'hkp'</code> <a name="'nohkmapp'"></a><code class="help-tag">'nohkmapp'</code> <a name="'nohkp'"></a><code class="help-tag">'nohkp'</code>
<a href="/neovim-docs-web/en/options#'hkmapp'">'hkmapp'</a> <a href="/neovim-docs-web/en/options#'hkp'">'hkp'</a>		boolean (default off)
			global
	When on, phonetic keyboard mapping is used.  <a href="/neovim-docs-web/en/options#'hkmap'">'hkmap'</a> must also be on.
	This is useful if you have a non-Hebrew keyboard.
	See <a href="/neovim-docs-web/en/rileft#rileft.txt">rileft.txt</a>.</div>
<div class="old-help-para">				 <a name="'hlsearch'"></a><code class="help-tag-right">'hlsearch'</code> <a name="'hls'"></a><code class="help-tag">'hls'</code> <a name="'nohlsearch'"></a><code class="help-tag">'nohlsearch'</code> <a name="'nohls'"></a><code class="help-tag">'nohls'</code>
<a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a> <a href="/neovim-docs-web/en/options#'hls'">'hls'</a>	boolean	(default on)
			global
	When there is a previous search pattern, highlight all its matches.
	The <a href="/neovim-docs-web/en/syntax#hl-Search">hl-Search</a> highlight group determines the highlighting for all
	matches not under the cursor while the <a href="/neovim-docs-web/en/syntax#hl-CurSearch">hl-CurSearch</a> highlight group
	(if defined) determines the highlighting for the match under the
	cursor. If <a href="/neovim-docs-web/en/syntax#hl-CurSearch">hl-CurSearch</a> is not defined, then <a href="/neovim-docs-web/en/syntax#hl-Search">hl-Search</a> is used for
	both. Note that only the matching text is highlighted, any offsets
	are not applied.
	See also: <a href="/neovim-docs-web/en/options#'incsearch'">'incsearch'</a> and <a href="/neovim-docs-web/en/pattern#%3Amatch">:match</a>.
	When you get bored looking at the highlighted matches, you can turn it
	off with <a href="/neovim-docs-web/en/pattern#%3Anohlsearch">:nohlsearch</a>.  This does not change the option value, as
	soon as you use a search command, the highlighting comes back.
	<a href="/neovim-docs-web/en/options#'redrawtime'">'redrawtime'</a> specifies the maximum time spent on finding matches.
	When the search pattern can match an end-of-line, Vim will try to
	highlight all of the matched text.  However, this depends on where the
	search starts.  This will be the first line in the window or the first
	line below a closed fold.  A match in a previous line which is not
	drawn may not continue in a newly drawn line.
	You can specify whether the highlight status is restored on startup
	with the 'h' flag in <a href="/neovim-docs-web/en/options#'shada'">'shada'</a> <a href="/neovim-docs-web/en/options#shada-h">shada-h</a>.</div>
<div class="old-help-para">						<a name="'icon'"></a><code class="help-tag-right">'icon'</code> <a name="'noicon'"></a><code class="help-tag">'noicon'</code>
<a href="/neovim-docs-web/en/options#'icon'">'icon'</a>			boolean	(default off, on when title can be restored)
			global
	When on, the icon text of the window will be set to the value of
	<a href="/neovim-docs-web/en/options#'iconstring'">'iconstring'</a> (if it is not empty), or to the name of the file
	currently being edited.  Only the last part of the name is used.
	Overridden by the <a href="/neovim-docs-web/en/options#'iconstring'">'iconstring'</a> option.
	Only works if the terminal supports setting window icons.</div>
<div class="old-help-para">						<a name="'iconstring'"></a><code class="help-tag-right">'iconstring'</code>
<a href="/neovim-docs-web/en/options#'iconstring'">'iconstring'</a>		string	(default "")
			global
	When this option is not empty, it will be used for the icon text of
	the window.  This happens only when the <a href="/neovim-docs-web/en/options#'icon'">'icon'</a> option is on.
	Only works if the terminal supports setting window icon text
	When this option contains printf-style '%' items, they will be
	expanded according to the rules used for <a href="/neovim-docs-web/en/options#'statusline'">'statusline'</a>.  See
	<a href="/neovim-docs-web/en/options#'titlestring'">'titlestring'</a> for example settings.
	This option cannot be set in a modeline when <a href="/neovim-docs-web/en/options#'modelineexpr'">'modelineexpr'</a> is off.</div>
<div class="old-help-para">			<a name="'ignorecase'"></a><code class="help-tag-right">'ignorecase'</code> <a name="'ic'"></a><code class="help-tag">'ic'</code> <a name="'noignorecase'"></a><code class="help-tag">'noignorecase'</code> <a name="'noic'"></a><code class="help-tag">'noic'</code>
<a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> <a href="/neovim-docs-web/en/options#'ic'">'ic'</a>	boolean	(default off)
			global
	Ignore case in search patterns.  Also used when searching in the tags
	file.
	Also see <a href="/neovim-docs-web/en/options#'smartcase'">'smartcase'</a> and <a href="/neovim-docs-web/en/options#'tagcase'">'tagcase'</a>.
	Can be overruled by using "\c" or "\C" in the pattern, see
	<a href="/neovim-docs-web/en/pattern#%2Fignorecase">/ignorecase</a>.</div>
<div class="old-help-para">				<a name="'imcmdline'"></a><code class="help-tag-right">'imcmdline'</code> <a name="'imc'"></a><code class="help-tag">'imc'</code> <a name="'noimcmdline'"></a><code class="help-tag">'noimcmdline'</code> <a name="'noimc'"></a><code class="help-tag">'noimc'</code>
<a href="/neovim-docs-web/en/options#'imcmdline'">'imcmdline'</a> <a href="/neovim-docs-web/en/options#'imc'">'imc'</a>	boolean (default off)
			global
	When set the Input Method is always on when starting to edit a command
	line, unless entering a search pattern (see <a href="/neovim-docs-web/en/options#'imsearch'">'imsearch'</a> for that).
	Setting this option is useful when your input method allows entering
	English characters directly, e.g., when it's used to type accented
	characters with dead keys.</div>
<div class="old-help-para">				<a name="'imdisable'"></a><code class="help-tag-right">'imdisable'</code> <a name="'imd'"></a><code class="help-tag">'imd'</code> <a name="'noimdisable'"></a><code class="help-tag">'noimdisable'</code> <a name="'noimd'"></a><code class="help-tag">'noimd'</code>
<a href="/neovim-docs-web/en/options#'imdisable'">'imdisable'</a> <a href="/neovim-docs-web/en/options#'imd'">'imd'</a>	boolean (default off, on for some systems (SGI))
			global
	When set the Input Method is never used.  This is useful to disable
	the IM when it doesn't work properly.
	Currently this option is on by default for SGI/IRIX machines.  This
	may change in later releases.</div>
<div class="old-help-para">						<a name="'iminsert'"></a><code class="help-tag-right">'iminsert'</code> <a name="'imi'"></a><code class="help-tag">'imi'</code>
<a href="/neovim-docs-web/en/options#'iminsert'">'iminsert'</a> <a href="/neovim-docs-web/en/options#'imi'">'imi'</a>	number (default 0)
			local to buffer
	Specifies whether :lmap or an Input Method (IM) is to be used in
	Insert mode.  Valid values:
		0	:lmap is off and IM is off
		1	:lmap is ON and IM is off
		2	:lmap is off and IM is ON
	To always reset the option to zero when leaving Insert mode with <code>&lt;Esc&gt;</code>
	this can be used:<pre>:inoremap &lt;ESC&gt; &lt;ESC&gt;:set iminsert=0&lt;CR&gt;</pre></div>
<div class="old-help-para">	This makes :lmap and IM turn off automatically when leaving Insert
	mode.
	Note that this option changes when using <code>CTRL-^</code> in Insert mode
	<a href="/neovim-docs-web/en/insert#i_CTRL-%5E">i_CTRL-^</a>.
	The value is set to 1 when setting <a href="/neovim-docs-web/en/options#'keymap'">'keymap'</a> to a valid keymap name.
	It is also used for the argument of commands like "r" and "f".</div>
<div class="old-help-para">						<a name="'imsearch'"></a><code class="help-tag-right">'imsearch'</code> <a name="'ims'"></a><code class="help-tag">'ims'</code>
<a href="/neovim-docs-web/en/options#'imsearch'">'imsearch'</a> <a href="/neovim-docs-web/en/options#'ims'">'ims'</a>	number (default -1)
			local to buffer
	Specifies whether :lmap or an Input Method (IM) is to be used when
	entering a search pattern.  Valid values:
		-1	the value of <a href="/neovim-docs-web/en/options#'iminsert'">'iminsert'</a> is used, makes it look like
			<a href="/neovim-docs-web/en/options#'iminsert'">'iminsert'</a> is also used when typing a search pattern
		0	:lmap is off and IM is off
		1	:lmap is ON and IM is off
		2	:lmap is off and IM is ON
	Note that this option changes when using <code>CTRL-^</code> in Command-line mode
	<a href="/neovim-docs-web/en/cmdline#c_CTRL-%5E">c_CTRL-^</a>.
	The value is set to 1 when it is not -1 and setting the <a href="/neovim-docs-web/en/options#'keymap'">'keymap'</a>
	option to a valid keymap name.</div>
<div class="old-help-para">						<a name="'inccommand'"></a><code class="help-tag-right">'inccommand'</code> <a name="'icm'"></a><code class="help-tag">'icm'</code>
<a href="/neovim-docs-web/en/options#'inccommand'">'inccommand'</a> <a href="/neovim-docs-web/en/options#'icm'">'icm'</a>	string	(default "nosplit")
			global</div>
<div class="old-help-para">	When nonempty, shows the effects of <a href="/neovim-docs-web/en/change#%3Asubstitute">:substitute</a>, <a href="/neovim-docs-web/en/change#%3Asmagic">:smagic</a>,
	<a href="/neovim-docs-web/en/change#%3Asnomagic">:snomagic</a> and user commands with the <a href="/neovim-docs-web/en/map#%3Acommand-preview">:command-preview</a> flag as you
	type.</div>
<div class="old-help-para">	Possible values:
		nosplit	Shows the effects of a command incrementally in the
			buffer.
		split	Like "nosplit", but also shows partial off-screen
			results in a preview window.</div>
<div class="old-help-para">	If the preview for built-in commands is too slow (exceeds
	<a href="/neovim-docs-web/en/options#'redrawtime'">'redrawtime'</a>) then <a href="/neovim-docs-web/en/options#'inccommand'">'inccommand'</a> is automatically disabled until
	<a href="/neovim-docs-web/en/cmdline#Command-line-mode">Command-line-mode</a> is done.</div>
<div class="old-help-para">						<a name="'include'"></a><code class="help-tag-right">'include'</code> <a name="'inc'"></a><code class="help-tag">'inc'</code>
<a href="/neovim-docs-web/en/options#'include'">'include'</a> <a href="/neovim-docs-web/en/options#'inc'">'inc'</a>		string	(default "^\s*#\s*include")
			global or local to buffer <a href="/neovim-docs-web/en/options#global-local">global-local</a>
	Pattern to be used to find an include command.  It is a search
	pattern, just like for the "/" command (See <a href="/neovim-docs-web/en/pattern#pattern">pattern</a>).  The default
	value is for C programs.  This option is used for the commands "[i",
	"]I", "[d", etc.
	Normally the <a href="/neovim-docs-web/en/options#'isfname'">'isfname'</a> option is used to recognize the file name that
	comes after the matched pattern.  But if "\zs" appears in the pattern
	then the text matched from "\zs" to the end, or until "\ze" if it
	appears, is used as the file name.  Use this to include characters
	that are not in <a href="/neovim-docs-web/en/options#'isfname'">'isfname'</a>, such as a space.  You can then use
	<a href="/neovim-docs-web/en/options#'includeexpr'">'includeexpr'</a> to process the matched text.
	See <a href="/neovim-docs-web/en/options#option-backslash">option-backslash</a> about including spaces and backslashes.</div>
<div class="old-help-para">						<a name="'includeexpr'"></a><code class="help-tag-right">'includeexpr'</code> <a name="'inex'"></a><code class="help-tag">'inex'</code>
<a href="/neovim-docs-web/en/options#'includeexpr'">'includeexpr'</a> <a href="/neovim-docs-web/en/options#'inex'">'inex'</a>	string	(default "")
			local to buffer
	Expression to be used to transform the string found with the <a href="/neovim-docs-web/en/options#'include'">'include'</a>
	option to a file name.  Mostly useful to change "." to "/" for Java:<pre>:set includeexpr=substitute(v:fname,'\\.','/','g')</pre></div>
<div class="old-help-para">	The "v:fname" variable will be set to the file name that was detected.</div>
<div class="old-help-para">	Also used for the <a href="/neovim-docs-web/en/editing#gf">gf</a> command if an unmodified file name can't be
	found.  Allows doing "gf" on the name after an <a href="/neovim-docs-web/en/options#'include'">'include'</a> statement.
	Also used for <a href="/neovim-docs-web/en/cmdline#%3Ccfile%3E">&lt;cfile&gt;</a>.</div>
<div class="old-help-para">	The expression will be evaluated in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a> when set from a
	modeline, see <a href="/neovim-docs-web/en/eval#sandbox-option">sandbox-option</a>.
	This option cannot be set in a modeline when <a href="/neovim-docs-web/en/options#'modelineexpr'">'modelineexpr'</a> is off.</div>
<div class="old-help-para">	It is not allowed to change text or jump to another window while
	evaluating <a href="/neovim-docs-web/en/options#'includeexpr'">'includeexpr'</a> <a href="/neovim-docs-web/en/eval#textlock">textlock</a>.</div>
<div class="old-help-para">				 <a name="'incsearch'"></a><code class="help-tag-right">'incsearch'</code> <a name="'is'"></a><code class="help-tag">'is'</code> <a name="'noincsearch'"></a><code class="help-tag">'noincsearch'</code> <a name="'nois'"></a><code class="help-tag">'nois'</code>
<a href="/neovim-docs-web/en/options#'incsearch'">'incsearch'</a> <a href="/neovim-docs-web/en/options#'is'">'is'</a>	boolean	(default on)
			global
	While typing a search command, show where the pattern, as it was typed
	so far, matches.  The matched string is highlighted.  If the pattern
	is invalid or not found, nothing is shown.  The screen will be updated
	often, this is only useful on fast terminals.
	Note that the match will be shown, but the cursor will return to its
	original position when no match is found and when pressing <code>&lt;Esc&gt;</code>.  You
	still need to finish the search command with <code>&lt;Enter&gt;</code> to move the
	cursor to the match.
	You can use the <code>CTRL-G</code> and <code>CTRL-T</code> keys to move to the next and
	previous match. <a href="/neovim-docs-web/en/cmdline#c_CTRL-G">c_CTRL-G</a> <a href="/neovim-docs-web/en/cmdline#c_CTRL-T">c_CTRL-T</a>
	Vim only searches for about half a second.  With a complicated
	pattern and/or a lot of text the match may not be found.  This is to
	avoid that Vim hangs while you are typing the pattern.
	The <a href="/neovim-docs-web/en/syntax#hl-IncSearch">hl-IncSearch</a> highlight group determines the highlighting.
	When <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a> is on, all matched strings are highlighted too while
	typing a search command. See also: <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a>.
	If you don't want to turn <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a> on, but want to highlight all
	matches while searching, you can turn on and off <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a> with
	autocmd.  Example:<pre>augroup vimrc-incsearch-highlight
  autocmd!
  autocmd CmdlineEnter /,\? :set hlsearch
  autocmd CmdlineLeave /,\? :set nohlsearch
augroup END</pre></div>
<div class="old-help-para">	<code>CTRL-L</code> can be used to add one character from after the current match
	to the command line.  If <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> and <a href="/neovim-docs-web/en/options#'smartcase'">'smartcase'</a> are set and the
	command line has no uppercase characters, the added character is
	converted to lowercase.
	<code>CTRL-R</code> <code>CTRL-W</code> can be used to add the word at the end of the current
	match, excluding the characters that were already typed.</div>
<div class="old-help-para">						<a name="'indentexpr'"></a><code class="help-tag-right">'indentexpr'</code> <a name="'inde'"></a><code class="help-tag">'inde'</code>
<a href="/neovim-docs-web/en/options#'indentexpr'">'indentexpr'</a> <a href="/neovim-docs-web/en/options#'inde'">'inde'</a>	string	(default "")
			local to buffer
	Expression which is evaluated to obtain the proper indent for a line.
	It is used when a new line is created, for the <a href="/neovim-docs-web/en/change#%3D">=</a> operator and
	in Insert mode as specified with the <a href="/neovim-docs-web/en/options#'indentkeys'">'indentkeys'</a> option.
	When this option is not empty, it overrules the <a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a> and
	<a href="/neovim-docs-web/en/options#'smartindent'">'smartindent'</a> indenting.  When <a href="/neovim-docs-web/en/options#'lisp'">'lisp'</a> is set, this option is
	is only used when <a href="/neovim-docs-web/en/options#'lispoptions'">'lispoptions'</a> contains "expr:1".
	When <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> is set this option is not used for indenting.
	The expression is evaluated with <a href="/neovim-docs-web/en/eval#v%3Alnum">v:lnum</a> set to the line number for
	which the indent is to be computed.  The cursor is also in this line
	when the expression is evaluated (but it may be moved around).
	The expression must return the number of spaces worth of indent.  It
	can return "-1" to keep the current indent (this means <a href="/neovim-docs-web/en/options#'autoindent'">'autoindent'</a> is
	used for the indent).
	Functions useful for computing the indent are <a href="/neovim-docs-web/en/builtin#indent()">indent()</a>, <a href="/neovim-docs-web/en/builtin#cindent()">cindent()</a>
	and <a href="/neovim-docs-web/en/builtin#lispindent()">lispindent()</a>.
	The evaluation of the expression must not have side effects!  It must
	not change the text, jump to another window, etc.  Afterwards the
	cursor position is always restored, thus the cursor may be moved.
	Normally this option would be set to call a function:<pre>:set indentexpr=GetMyIndent()</pre></div>
<div class="old-help-para">	Error messages will be suppressed, unless the <a href="/neovim-docs-web/en/options#'debug'">'debug'</a> option contains
	"msg".
	See <a href="/neovim-docs-web/en/indent#indent-expression">indent-expression</a>.</div>
<div class="old-help-para">	The expression will be evaluated in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a> when set from a
	modeline, see <a href="/neovim-docs-web/en/eval#sandbox-option">sandbox-option</a>.
	This option cannot be set in a modeline when <a href="/neovim-docs-web/en/options#'modelineexpr'">'modelineexpr'</a> is off.</div>
<div class="old-help-para">	It is not allowed to change text or jump to another window while
	evaluating <a href="/neovim-docs-web/en/options#'indentexpr'">'indentexpr'</a> <a href="/neovim-docs-web/en/eval#textlock">textlock</a>.</div>
<div class="old-help-para">						<a name="'indentkeys'"></a><code class="help-tag-right">'indentkeys'</code> <a name="'indk'"></a><code class="help-tag">'indk'</code>
<a href="/neovim-docs-web/en/options#'indentkeys'">'indentkeys'</a> <a href="/neovim-docs-web/en/options#'indk'">'indk'</a>	string	(default "0{,0},0),0],:,0#,!^F,o,O,e")
			local to buffer
	A list of keys that, when typed in Insert mode, cause reindenting of
	the current line.  Only happens if <a href="/neovim-docs-web/en/options#'indentexpr'">'indentexpr'</a> isn't empty.
	The format is identical to <a href="/neovim-docs-web/en/options#'cinkeys'">'cinkeys'</a>, see <a href="/neovim-docs-web/en/indent#indentkeys-format">indentkeys-format</a>.
	See <a href="/neovim-docs-web/en/indent#C-indenting">C-indenting</a> and <a href="/neovim-docs-web/en/indent#indent-expression">indent-expression</a>.</div>
<div class="old-help-para">			<a name="'infercase'"></a><code class="help-tag-right">'infercase'</code> <a name="'inf'"></a><code class="help-tag">'inf'</code> <a name="'noinfercase'"></a><code class="help-tag">'noinfercase'</code> <a name="'noinf'"></a><code class="help-tag">'noinf'</code>
<a href="/neovim-docs-web/en/options#'infercase'">'infercase'</a> <a href="/neovim-docs-web/en/options#'inf'">'inf'</a>	boolean	(default off)
			local to buffer
	When doing keyword completion in insert mode <a href="/neovim-docs-web/en/insert#ins-completion">ins-completion</a>, and
	<a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> is also on, the case of the match is adjusted depending
	on the typed text.  If the typed text contains a lowercase letter
	where the match has an upper case letter, the completed part is made
	lowercase.  If the typed text has no lowercase letters and the match
	has a lowercase letter where the typed text has an uppercase letter,
	and there is a letter before it, the completed part is made uppercase.
	With <a href="/neovim-docs-web/en/options#'noinfercase'">'noinfercase'</a> the match is used as-is.</div>
<div class="old-help-para">						<a name="'isfname'"></a><code class="help-tag-right">'isfname'</code> <a name="'isf'"></a><code class="help-tag">'isf'</code>
<a href="/neovim-docs-web/en/options#'isfname'">'isfname'</a> <a href="/neovim-docs-web/en/options#'isf'">'isf'</a>		string	(default for Windows:
			     "@,48-57,/,\,.,-,_,+,,,#,$,%,{,},[,],:,@-@,!,~,="
			    otherwise: "@,48-57,/,.,-,_,+,,,#,$,%,~,=")
			global
	The characters specified by this option are included in file names and
	path names.  Filenames are used for commands like "gf", "[i" and in
	the tags file.  It is also used for "\f" in a <a href="/neovim-docs-web/en/pattern#pattern">pattern</a>.
	Multi-byte characters 256 and above are always included, only the
	characters up to 255 are specified with this option.
	For UTF-8 the characters 0xa0 to 0xff are included as well.
	Think twice before adding white space to this option.  Although a
	space may appear inside a file name, the effect will be that Vim
	doesn't know where a file name starts or ends when doing completion.
	It most likely works better without a space in <a href="/neovim-docs-web/en/options#'isfname'">'isfname'</a>.</div>
<div class="old-help-para">	Note that on systems using a backslash as path separator, Vim tries to
	do its best to make it work as you would expect.  That is a bit
	tricky, since Vi originally used the backslash to escape special
	characters.  Vim will not remove a backslash in front of a normal file
	name character on these systems, but it will on Unix and alikes.  The
	'&amp;' and '^' are not included by default, because these are special for
	cmd.exe.</div>
<div class="old-help-para">	The format of this option is a list of parts, separated with commas.
	Each part can be a single character number or a range.  A range is two
	character numbers with '-' in between.  A character number can be a
	decimal number between 0 and 255 or the ASCII character itself (does
	not work for digits).  Example:
		"_,-,128-140,#-43"	(include '_' and '-' and the range
					128 to 140 and '#' to 43)
	If a part starts with '^', the following character number or range
	will be excluded from the option.  The option is interpreted from left
	to right.  Put the excluded character after the range where it is
	included.  To include '^' itself use it as the last character of the
	option or the end of a range.  Example:
		"^a-z,#,^"	(exclude 'a' to 'z', include '#' and '^')
	If the character is '@', all characters where isalpha() returns TRUE
	are included.  Normally these are the characters a to z and A to Z,
	plus accented characters.  To include '@' itself use "@-@".  Examples:
		"@,^a-z"	All alphabetic characters, excluding lower
				case ASCII letters.
		"a-z,A-Z,@-@"	All letters plus the '@' character.
	A comma can be included by using it where a character number is
	expected.  Example:
		"48-57,,,_"	Digits, comma and underscore.
	A comma can be excluded by prepending a '^'.  Example:
		" -~,^,,9"	All characters from space to '~', excluding
				comma, plus <code>&lt;Tab&gt;</code>.
	See <a href="/neovim-docs-web/en/options#option-backslash">option-backslash</a> about including spaces and backslashes.</div>
<div class="old-help-para">						<a name="'isident'"></a><code class="help-tag-right">'isident'</code> <a name="'isi'"></a><code class="help-tag">'isi'</code>
<a href="/neovim-docs-web/en/options#'isident'">'isident'</a> <a href="/neovim-docs-web/en/options#'isi'">'isi'</a>		string	(default for Windows:
					   "@,48-57,_,128-167,224-235"
				otherwise: "@,48-57,_,192-255")
			global
	The characters given by this option are included in identifiers.
	Identifiers are used in recognizing environment variables and after a
	match of the <a href="/neovim-docs-web/en/options#'define'">'define'</a> option.  It is also used for "\i" in a
	<a href="/neovim-docs-web/en/pattern#pattern">pattern</a>.  See <a href="/neovim-docs-web/en/options#'isfname'">'isfname'</a> for a description of the format of this
	option.  For '@' only characters up to 255 are used.
	Careful: If you change this option, it might break expanding
	environment variables.  E.g., when '/' is included and Vim tries to
	expand "$HOME/.local/state/nvim/shada/main.shada".  Maybe you should
	change <a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a> instead.</div>
<div class="old-help-para">						<a name="'iskeyword'"></a><code class="help-tag-right">'iskeyword'</code> <a name="'isk'"></a><code class="help-tag">'isk'</code>
<a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a> <a href="/neovim-docs-web/en/options#'isk'">'isk'</a>	string (default: @,48-57,_,192-255)
			local to buffer
	Keywords are used in searching and recognizing with many commands:
	"w", "*", "[i", etc.  It is also used for "\k" in a <a href="/neovim-docs-web/en/pattern#pattern">pattern</a>.  See
	<a href="/neovim-docs-web/en/options#'isfname'">'isfname'</a> for a description of the format of this option.  For '@'
	characters above 255 check the "word" character class (any character
	that is not white space or punctuation).
	For C programs you could use "a-z,A-Z,48-57,_,.,-,&gt;".
	For a help file it is set to all non-blank printable characters except
	'', '"' and '|' (so that <code>CTRL-]</code> on a command finds the help for that
	command).
	When the <a href="/neovim-docs-web/en/options#'lisp'">'lisp'</a> option is on the '-' character is always included.
	This option also influences syntax highlighting, unless the syntax
	uses <a href="/neovim-docs-web/en/syntax#%3Asyn-iskeyword">:syn-iskeyword</a>.</div>
<div class="old-help-para">						<a name="'isprint'"></a><code class="help-tag-right">'isprint'</code> <a name="'isp'"></a><code class="help-tag">'isp'</code>
<a href="/neovim-docs-web/en/options#'isprint'">'isprint'</a> <a href="/neovim-docs-web/en/options#'isp'">'isp'</a>	string	(default: "@,161-255")
			global
	The characters given by this option are displayed directly on the
	screen.  It is also used for "\p" in a <a href="/neovim-docs-web/en/pattern#pattern">pattern</a>.  The characters from
	space (ASCII 32) to '~' (ASCII 126) are always displayed directly,
	even when they are not included in <a href="/neovim-docs-web/en/options#'isprint'">'isprint'</a> or excluded.  See
	<a href="/neovim-docs-web/en/options#'isfname'">'isfname'</a> for a description of the format of this option.</div>
<div class="old-help-para">	Non-printable characters are displayed with two characters:
		  0 -  31	"^@" - "^_"
		 32 - 126	always single characters
		   127		"^?"
		128 - 159	"~@" - "~_"
		160 - 254	"| " - "|~"
		   255		"~?"
	Illegal bytes from 128 to 255 (invalid UTF-8) are
	displayed as <code>&lt;xx&gt;</code>, with the hexadecimal value of the byte.
	When <a href="/neovim-docs-web/en/options#'display'">'display'</a> contains "uhex" all unprintable characters are
	displayed as <code>&lt;xx&gt;</code>.
	The SpecialKey highlighting will be used for unprintable characters.
	<a href="/neovim-docs-web/en/syntax#hl-SpecialKey">hl-SpecialKey</a></div>
<div class="old-help-para">	Multi-byte characters 256 and above are always included, only the
	characters up to 255 are specified with this option.  When a character
	is printable but it is not available in the current font, a
	replacement character will be shown.
	Unprintable and zero-width Unicode characters are displayed as <code>&lt;xxxx&gt;</code>.
	There is no option to specify these characters.</div>
<div class="old-help-para">						<a name="'jumpoptions'"></a><code class="help-tag-right">'jumpoptions'</code> <a name="'jop'"></a><code class="help-tag">'jop'</code>
<a href="/neovim-docs-web/en/options#'jumpoptions'">'jumpoptions'</a> <a href="/neovim-docs-web/en/options#'jop'">'jop'</a>	string	(default "")
			global
	List of words that change the behavior of the <a href="/neovim-docs-web/en/motion#jumplist">jumplist</a>.
	  stack         Make the jumplist behave like the tagstack or like a
	                web browser.  Relative location of entries in the
			jumplist is preserved at the cost of discarding
			subsequent entries when navigating backwards in the
			jumplist and then jumping to a location.
			<a href="/neovim-docs-web/en/motion#jumplist-stack">jumplist-stack</a></div>
<div class="old-help-para">	  view          When moving through the jumplist, <a href="/neovim-docs-web/en/motion#changelist">changelist</a>,
			<a href="/neovim-docs-web/en/editing#alternate-file">alternate-file</a> or using <a href="/neovim-docs-web/en/motion#mark-motions">mark-motions</a> try to
			restore the <a href="/neovim-docs-web/en/motion#mark-view">mark-view</a> in which the action occurred.</div>
<div class="old-help-para">			<a name="'joinspaces'"></a><code class="help-tag-right">'joinspaces'</code> <a name="'js'"></a><code class="help-tag">'js'</code> <a name="'nojoinspaces'"></a><code class="help-tag">'nojoinspaces'</code> <a name="'nojs'"></a><code class="help-tag">'nojs'</code>
<a href="/neovim-docs-web/en/options#'joinspaces'">'joinspaces'</a> <a href="/neovim-docs-web/en/options#'js'">'js'</a>	boolean	(default off)
			global
	Insert two spaces after a '.', '?' and '!' with a join command.
	Otherwise only one space is inserted.</div>
<div class="old-help-para">					<a name="'keymap'"></a><code class="help-tag-right">'keymap'</code> <a name="'kmp'"></a><code class="help-tag">'kmp'</code> <a name="E544"></a><code class="help-tag">E544</code>
<a href="/neovim-docs-web/en/options#'keymap'">'keymap'</a> <a href="/neovim-docs-web/en/options#'kmp'">'kmp'</a>		string	(default "")
			local to buffer
	Name of a keyboard mapping.  See <a href="/neovim-docs-web/en/mbyte#mbyte-keymap">mbyte-keymap</a>.
	Setting this option to a valid keymap name has the side effect of
	setting <a href="/neovim-docs-web/en/options#'iminsert'">'iminsert'</a> to one, so that the keymap becomes effective.
	<a href="/neovim-docs-web/en/options#'imsearch'">'imsearch'</a> is also set to one, unless it was -1
	Only normal file name characters can be used, "/\*?[|&lt;&gt;" are illegal.</div>
<div class="old-help-para">					<a name="'keymodel'"></a><code class="help-tag-right">'keymodel'</code> <a name="'km'"></a><code class="help-tag">'km'</code>
<a href="/neovim-docs-web/en/options#'keymodel'">'keymodel'</a> <a href="/neovim-docs-web/en/options#'km'">'km'</a>		string	(default "")
			global
	List of comma-separated words, which enable special things that keys
	can do.  These values can be used:
	   startsel	Using a shifted special key starts selection (either
			Select mode or Visual mode, depending on "key" being
			present in <a href="/neovim-docs-web/en/options#'selectmode'">'selectmode'</a>).
	   stopsel	Using a not-shifted special key stops selection.
	Special keys in this context are the cursor keys, <code>&lt;End&gt;</code>, <code>&lt;Home&gt;</code>,
	<code>&lt;PageUp&gt;</code> and <code>&lt;PageDown&gt;</code>.
	The <a href="/neovim-docs-web/en/options#'keymodel'">'keymodel'</a> option is set by the <a href="/neovim-docs-web/en/options#%3Abehave">:behave</a> command.</div>
<div class="old-help-para">					<a name="'keywordprg'"></a><code class="help-tag-right">'keywordprg'</code> <a name="'kp'"></a><code class="help-tag">'kp'</code>
<a href="/neovim-docs-web/en/options#'keywordprg'">'keywordprg'</a> <a href="/neovim-docs-web/en/options#'kp'">'kp'</a>	string	(default ":Man", Windows: ":help")
			global or local to buffer <a href="/neovim-docs-web/en/options#global-local">global-local</a>
	Program to use for the <a href="/neovim-docs-web/en/various#K">K</a> command.  Environment variables are
	expanded <a href="/neovim-docs-web/en/options#%3Aset_env">:set_env</a>.  ":help" may be used to access the Vim internal
	help.  (Note that previously setting the global option to the empty
	value did this, which is now deprecated.)
	When the first character is ":", the command is invoked as a Vim
	Ex command prefixed with [count].
	When "man" or "man -s" is used, Vim will automatically translate
	a [count] for the "K" command to a section number.
	See <a href="/neovim-docs-web/en/options#option-backslash">option-backslash</a> about including spaces and backslashes.
	Example:<pre>:set keywordprg=man\ -s
:set keywordprg=:Man</pre></div>
<div class="old-help-para">	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">					<a name="'langmap'"></a><code class="help-tag-right">'langmap'</code> <a name="'lmap'"></a><code class="help-tag">'lmap'</code> <a name="E357"></a><code class="help-tag">E357</code> <a name="E358"></a><code class="help-tag">E358</code>
<a href="/neovim-docs-web/en/options#'langmap'">'langmap'</a> <a href="/neovim-docs-web/en/options#'lmap'">'lmap'</a>	string	(default "")
			global
	This option allows switching your keyboard into a special language
	mode.  When you are typing text in Insert mode the characters are
	inserted directly.  When in Normal mode the <a href="/neovim-docs-web/en/options#'langmap'">'langmap'</a> option takes
	care of translating these special characters to the original meaning
	of the key.  This means you don't have to change the keyboard mode to
	be able to execute Normal mode commands.
	This is the opposite of the <a href="/neovim-docs-web/en/options#'keymap'">'keymap'</a> option, where characters are
	mapped in Insert mode.
	Also consider setting <a href="/neovim-docs-web/en/options#'langremap'">'langremap'</a> to off, to prevent <a href="/neovim-docs-web/en/options#'langmap'">'langmap'</a> from
	applying to characters resulting from a mapping.
	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">	Example (for Greek, in UTF-8):				<a name="greek"></a><code class="help-tag-right">greek</code><pre>:set langmap=??A,??B,??C,??D,??E,??F,??G,??H,??I,??J,??K,??L,??M,??N,??O,??P,QQ,??R,??S,??T,??U,??V,WW,??X,??Y,??Z,??a,??b,??c,??d,??e,??f,??g,??h,??i,??j,??k,??l,??m,??n,??o,??p,qq,??r,??s,??t,??u,??v,??w,??x,??y,??z</pre></div>
<div class="old-help-para">	Example (exchanges meaning of z and y for commands):<pre>:set langmap=zy,yz,ZY,YZ</pre></div>
<div class="old-help-para">	The <a href="/neovim-docs-web/en/options#'langmap'">'langmap'</a> option is a list of parts, separated with commas.  Each
	part can be in one of two forms:
	1.  A list of pairs.  Each pair is a "from" character immediately
	    followed by the "to" character.  Examples: "aA", "aAbBcC".
	2.  A list of "from" characters, a semi-colon and a list of "to"
	    characters.  Example: "abc;ABC"
	Example: "aA,fgh;FGH,cCdDeE"
	Special characters need to be preceded with a backslash.  These are
	";", ',', '"', '|' and backslash itself.</div>
<div class="old-help-para">	This will allow you to activate vim actions without having to switch
	back and forth between the languages.  Your language characters will
	be understood as normal vim English characters (according to the
	langmap mappings) in the following cases:
	 o Normal/Visual mode (commands, buffer/register names, user mappings)
	 o Insert/Replace Mode: Register names after <code>CTRL-R</code>
	 o Insert/Replace Mode: Mappings
	Characters entered in Command-line mode will NOT be affected by
	this option.   Note that this option can be changed at any time
	allowing to switch between mappings for different languages/encodings.
	Use a mapping to avoid having to type it each time!</div>
<div class="old-help-para">					<a name="'langmenu'"></a><code class="help-tag-right">'langmenu'</code> <a name="'lm'"></a><code class="help-tag">'lm'</code>
<a href="/neovim-docs-web/en/options#'langmenu'">'langmenu'</a> <a href="/neovim-docs-web/en/options#'lm'">'lm'</a>		string	(default "")
			global
	Language to use for menu translation.  Tells which file is loaded
	from the "lang" directory in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>:<pre>"lang/menu_" .. &amp;langmenu .. ".vim"</pre></div>
<div class="old-help-para">	(without the spaces).  For example, to always use the Dutch menus, no
	matter what $LANG is set to:<pre>:set langmenu=nl_NL.ISO_8859-1</pre></div>
<div class="old-help-para">	When <a href="/neovim-docs-web/en/options#'langmenu'">'langmenu'</a> is empty, <a href="/neovim-docs-web/en/eval#v%3Alang">v:lang</a> is used.
	Only normal file name characters can be used, "/\*?[|&lt;&gt;" are illegal.
	If your $LANG is set to a non-English language but you do want to use
	the English menus:<pre>:set langmenu=none</pre></div>
<div class="old-help-para">	This option must be set before loading menus, switching on filetype
	detection or syntax highlighting.  Once the menus are defined setting
	this option has no effect.  But you could do this:<pre>:source $VIMRUNTIME/delmenu.vim
:set langmenu=de_DE.ISO_8859-1
:source $VIMRUNTIME/menu.vim</pre></div>
<div class="old-help-para">	Warning: This deletes all menus that you defined yourself!</div>
<div class="old-help-para">			<a name="'langremap'"></a><code class="help-tag-right">'langremap'</code> <a name="'lrm'"></a><code class="help-tag">'lrm'</code> <a name="'nolangremap'"></a><code class="help-tag">'nolangremap'</code> <a name="'nolrm'"></a><code class="help-tag">'nolrm'</code>
<a href="/neovim-docs-web/en/options#'langremap'">'langremap'</a> <a href="/neovim-docs-web/en/options#'lrm'">'lrm'</a>	boolean (default off)
			global
	When off, setting <a href="/neovim-docs-web/en/options#'langmap'">'langmap'</a> does not apply to characters resulting from
	a mapping.  If setting <a href="/neovim-docs-web/en/options#'langmap'">'langmap'</a> disables some of your mappings, make
	sure this option is off.</div>
<div class="old-help-para">					<a name="'laststatus'"></a><code class="help-tag-right">'laststatus'</code> <a name="'ls'"></a><code class="help-tag">'ls'</code>
<a href="/neovim-docs-web/en/options#'laststatus'">'laststatus'</a> <a href="/neovim-docs-web/en/options#'ls'">'ls'</a>	number	(default 2)
			global
	The value of this option influences when the last window will have a
	status line:
		0: never
		1: only if there are at least two windows
		2: always
		3: always and ONLY the last window
	The screen looks nicer with a status line if you have several
	windows, but it takes another screen line. <a href="/neovim-docs-web/en/windows#status-line">status-line</a></div>
<div class="old-help-para">			<a name="'lazyredraw'"></a><code class="help-tag-right">'lazyredraw'</code> <a name="'lz'"></a><code class="help-tag">'lz'</code> <a name="'nolazyredraw'"></a><code class="help-tag">'nolazyredraw'</code> <a name="'nolz'"></a><code class="help-tag">'nolz'</code>
<a href="/neovim-docs-web/en/options#'lazyredraw'">'lazyredraw'</a> <a href="/neovim-docs-web/en/options#'lz'">'lz'</a>	boolean	(default off)
			global
	When this option is set, the screen will not be redrawn while
	executing macros, registers and other commands that have not been
	typed.  Also, updating the window title is postponed.  To force an
	update use <a href="/neovim-docs-web/en/various#%3Aredraw">:redraw</a>.
	This may occasionally cause display errors.  It is only meant to be set
	temporarily when performing an operation where redrawing may cause
	flickering or cause a slow down.</div>
<div class="old-help-para">			<a name="'linebreak'"></a><code class="help-tag-right">'linebreak'</code> <a name="'lbr'"></a><code class="help-tag">'lbr'</code> <a name="'nolinebreak'"></a><code class="help-tag">'nolinebreak'</code> <a name="'nolbr'"></a><code class="help-tag">'nolbr'</code>
<a href="/neovim-docs-web/en/options#'linebreak'">'linebreak'</a> <a href="/neovim-docs-web/en/options#'lbr'">'lbr'</a>	boolean	(default off)
			local to window
	If on, Vim will wrap long lines at a character in <a href="/neovim-docs-web/en/options#'breakat'">'breakat'</a> rather
	than at the last character that fits on the screen.  Unlike
	<a href="/neovim-docs-web/en/options#'wrapmargin'">'wrapmargin'</a> and <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a>, this does not insert <code>&lt;EOL&gt;</code>s in the file,
	it only affects the way the file is displayed, not its contents.
	If <a href="/neovim-docs-web/en/options#'breakindent'">'breakindent'</a> is set, line is visually indented. Then, the value
	of <a href="/neovim-docs-web/en/options#'showbreak'">'showbreak'</a> is used to put in front of wrapped lines. This option
	is not used when the <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> option is off.
	Note that <code>&lt;Tab&gt;</code> characters after an <code>&lt;EOL&gt;</code> are mostly not displayed
	with the right amount of white space.</div>
<div class="old-help-para">						<a name="'lines'"></a><code class="help-tag-right">'lines'</code> <a name="E593"></a><code class="help-tag">E593</code>
<a href="/neovim-docs-web/en/options#'lines'">'lines'</a>			number	(default 24 or terminal height)
			global
	Number of lines of the Vim window.
	Normally you don't need to set this.  It is done automatically by the
	terminal initialization code.
	When Vim is running in the GUI or in a resizable window, setting this
	option will cause the window size to be changed.  When you only want
	to use the size for the GUI, put the command in your <a href="/neovim-docs-web/en/gui#gvimrc">gvimrc</a> file.
	Vim limits the number of lines to what fits on the screen.  You can
	use this command to get the tallest window possible:<pre>:set lines=999</pre></div>
<div class="old-help-para">	Minimum value is 2, maximum value is 1000.</div>
<div class="old-help-para">						<a name="'linespace'"></a><code class="help-tag-right">'linespace'</code> <a name="'lsp'"></a><code class="help-tag">'lsp'</code>
<a href="/neovim-docs-web/en/options#'linespace'">'linespace'</a> <a href="/neovim-docs-web/en/options#'lsp'">'lsp'</a>	number	(default 0)
			global
			<code>{only in the GUI}</code>
	Number of pixel lines inserted between characters.  Useful if the font
	uses the full character cell height, making lines touch each other.
	When non-zero there is room for underlining.
	With some fonts there can be too much room between lines (to have
	space for ascents and descents).  Then it makes sense to set
	<a href="/neovim-docs-web/en/options#'linespace'">'linespace'</a> to a negative value.  This may cause display problems
	though!</div>
<div class="old-help-para">						<a name="'lisp'"></a><code class="help-tag-right">'lisp'</code> <a name="'nolisp'"></a><code class="help-tag">'nolisp'</code>
<a href="/neovim-docs-web/en/options#'lisp'">'lisp'</a>			boolean	(default off)
			local to buffer
	Lisp mode: When <code>&lt;Enter&gt;</code> is typed in insert mode set the indent for
	the next line to Lisp standards (well, sort of).  Also happens with
	"cc" or "S".  <a href="/neovim-docs-web/en/options#'autoindent'">'autoindent'</a> must also be on for this to work.  The 'p'
	flag in <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> changes the method of indenting: Vi compatible or
	better.  Also see <a href="/neovim-docs-web/en/options#'lispwords'">'lispwords'</a>.
	The '-' character is included in keyword characters.  Redefines the
	"=" operator to use this same indentation algorithm rather than
	calling an external program if <a href="/neovim-docs-web/en/options#'equalprg'">'equalprg'</a> is empty.
	This option is not used when <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> is set.</div>
<div class="old-help-para">						<a name="'lispoptions'"></a><code class="help-tag-right">'lispoptions'</code> <a name="'lop'"></a><code class="help-tag">'lop'</code>
<a href="/neovim-docs-web/en/options#'lispoptions'">'lispoptions'</a> <a href="/neovim-docs-web/en/options#'lop'">'lop'</a>	string	(default "")
			local to buffer
	Comma-separated list of items that influence the Lisp indenting when
	enabled with the <a href="/neovim-docs-web/en/options#'lisp'">'lisp'</a> option.  Currently only one item is
	supported:
		expr:1	use <a href="/neovim-docs-web/en/options#'indentexpr'">'indentexpr'</a> for Lisp indenting when it is set
		expr:0	do not use <a href="/neovim-docs-web/en/options#'indentexpr'">'indentexpr'</a> for Lisp indenting (default)
	Note that when using <a href="/neovim-docs-web/en/options#'indentexpr'">'indentexpr'</a> the <code>=</code> operator indents all the
	lines, otherwise the first line is not indented (Vi-compatible).</div>
<div class="old-help-para">						<a name="'lispwords'"></a><code class="help-tag-right">'lispwords'</code> <a name="'lw'"></a><code class="help-tag">'lw'</code>
<a href="/neovim-docs-web/en/options#'lispwords'">'lispwords'</a> <a href="/neovim-docs-web/en/options#'lw'">'lw'</a>	string	(default is very long)
			global or local to buffer <a href="/neovim-docs-web/en/options#global-local">global-local</a>
	Comma-separated list of words that influence the Lisp indenting when
	enabled with the <a href="/neovim-docs-web/en/options#'lisp'">'lisp'</a> option.</div>
<div class="old-help-para">						<a name="'list'"></a><code class="help-tag-right">'list'</code> <a name="'nolist'"></a><code class="help-tag">'nolist'</code>
<a href="/neovim-docs-web/en/options#'list'">'list'</a>			boolean	(default off)
			local to window
	List mode: By default, show tabs as "&gt;", trailing spaces as "-", and
	non-breakable space characters as "+". Useful to see the difference
	between tabs and spaces and for trailing blanks. Further changed by
	the <a href="/neovim-docs-web/en/options#'listchars'">'listchars'</a> option.</div>
<div class="old-help-para">	The cursor is displayed at the start of the space a Tab character
	occupies, not at the end as usual in Normal mode.  To get this cursor
	position while displaying Tabs with spaces, use:<pre>:set list lcs=tab:\ \</pre></div>
<div class="old-help-para">	Note that list mode will also affect formatting (set with <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a>
	or <a href="/neovim-docs-web/en/options#'wrapmargin'">'wrapmargin'</a>) when <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> includes 'L'.  See <a href="/neovim-docs-web/en/options#'listchars'">'listchars'</a> for
	changing the way tabs are displayed.</div>
<div class="old-help-para">						<a name="'listchars'"></a><code class="help-tag-right">'listchars'</code> <a name="'lcs'"></a><code class="help-tag">'lcs'</code>
<a href="/neovim-docs-web/en/options#'listchars'">'listchars'</a> <a href="/neovim-docs-web/en/options#'lcs'">'lcs'</a>	string	(default: "tab:&gt; ,trail:-,nbsp:+")
			global or local to window <a href="/neovim-docs-web/en/options#global-local">global-local</a>
	Strings to use in <a href="/neovim-docs-web/en/options#'list'">'list'</a> mode and for the <a href="/neovim-docs-web/en/various#%3Alist">:list</a> command.  It is a
	comma-separated list of string settings.</div>
<div class="old-help-para">							<a name="lcs-eol"></a><code class="help-tag-right">lcs-eol</code>
	  eol:c		Character to show at the end of each line.  When
			omitted, there is no extra character at the end of the
			line.
							<a name="lcs-tab"></a><code class="help-tag-right">lcs-tab</code>
	  tab:xy[z]	Two or three characters to be used to show a tab.
			The third character is optional.</div>
<div class="old-help-para">	  tab:xy	The 'x' is always used, then 'y' as many times as will
			fit.  Thus "tab:&gt;-" displays:
<pre>                      &gt;-
                      &gt;--
                      etc.

tab:xyz        The 'z' is always used, then 'x' is prepended, and
              then 'y' is used as many times as will fit.  Thus
              "tab:&lt;-&gt;" displays:
                      &gt;
                      &lt;&gt;
                      &lt;-&gt;
                      &lt;--&gt;
                      etc.

              When "tab:" is omitted, a tab is shown as ^I.
                                              *lcs-space*
space:c        Character to show for a space.  When omitted, spaces
              are left blank.
                                              *lcs-multispace*
multispace:c...
               One or more characters to use cyclically to show for
               multiple consecutive spaces.  Overrides the "space"
              setting, except for single spaces.  When omitted, the
              "space" setting is used.  For example,
              `:set listchars=multispace:---+` shows ten consecutive
              spaces as:
                      ---+---+-- ~
                                              *lcs-lead*
lead:c        Character to show for leading spaces.  When omitted,
              leading spaces are blank.  Overrides the "space" and
              "multispace" settings for leading spaces.  You can
              combine it with "tab:", for example: &gt;
                      :set listchars+=tab:&gt;-,lead:.</pre></div>
<div class="old-help-para">							<a name="lcs-leadmultispace"></a><code class="help-tag-right">lcs-leadmultispace</code>
	  leadmultispace:c...
			Like the <a href="/neovim-docs-web/en/options#lcs-multispace">lcs-multispace</a> value, but for leading
			spaces only.  Also overrides <a href="/neovim-docs-web/en/options#lcs-lead">lcs-lead</a> for leading
			multiple spaces.
			<code>:set listchars=leadmultispace:---+</code> shows ten
			consecutive leading spaces as:
<div class="help-column_heading">				---+---+--XXX</div>			Where "XXX" denotes the first non-blank characters in
			the line.
							<a name="lcs-trail"></a><code class="help-tag-right">lcs-trail</code>
	  trail:c	Character to show for trailing spaces.  When omitted,
			trailing spaces are blank.  Overrides the "space" and
			"multispace" settings for trailing spaces.
							<a name="lcs-extends"></a><code class="help-tag-right">lcs-extends</code>
	  extends:c	Character to show in the last column, when <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> is
			off and the line continues beyond the right of the
			screen.
							<a name="lcs-precedes"></a><code class="help-tag-right">lcs-precedes</code>
	  precedes:c	Character to show in the first visible column of the
			physical line, when there is text preceding the
			character visible in the first column.
							<a name="lcs-conceal"></a><code class="help-tag-right">lcs-conceal</code>
	  conceal:c	Character to show in place of concealed text, when
			<a href="/neovim-docs-web/en/options#'conceallevel'">'conceallevel'</a> is set to 1.  A space when omitted.
							<a name="lcs-nbsp"></a><code class="help-tag-right">lcs-nbsp</code>
	  nbsp:c	Character to show for a non-breakable space character
			(0xA0 (160 decimal) and U+202F).  Left blank when
			omitted.</div>
<div class="old-help-para">	The characters ':' and ',' should not be used.  UTF-8 characters can
	be used.  All characters must be single width.</div>
<div class="old-help-para">	Each character can be specified as hex:<pre>set listchars=eol:\\x24
set listchars=eol:\\u21b5
set listchars=eol:\\U000021b5</pre></div>
<div class="old-help-para">	Note that a double backslash is used.  The number of hex characters
	must be exactly 2 for \\x, 4 for \\u and 8 for \\U.</div>
<div class="old-help-para">	Examples:<pre>:set lcs=tab:&gt;-,trail:-
:set lcs=tab:&gt;-,eol:&lt;,nbsp:%
:set lcs=extends:&gt;,precedes:&lt;</pre></div>
<div class="old-help-para">	<a href="/neovim-docs-web/en/syntax#hl-NonText">hl-NonText</a> highlighting will be used for "eol", "extends" and
	"precedes". <a href="/neovim-docs-web/en/syntax#hl-Whitespace">hl-Whitespace</a> for "nbsp", "space", "tab", "multispace",
	"lead" and "trail".</div>
<div class="old-help-para">			<a name="'lpl'"></a><code class="help-tag-right">'lpl'</code> <a name="'nolpl'"></a><code class="help-tag">'nolpl'</code> <a name="'loadplugins'"></a><code class="help-tag">'loadplugins'</code> <a name="'noloadplugins'"></a><code class="help-tag">'noloadplugins'</code>
<a href="/neovim-docs-web/en/options#'loadplugins'">'loadplugins'</a> <a href="/neovim-docs-web/en/options#'lpl'">'lpl'</a>	boolean	(default on)
			global
	When on the plugin scripts are loaded when starting up <a href="/neovim-docs-web/en/starting#load-plugins">load-plugins</a>.
	This option can be reset in your <a href="/neovim-docs-web/en/starting#vimrc">vimrc</a> file to disable the loading
	of plugins.
	Note that using the "-u NONE" and "--noplugin" command line arguments
	reset this option. <a href="/neovim-docs-web/en/starting#-u">-u</a> <a href="/neovim-docs-web/en/starting#--noplugin">--noplugin</a></div>
<div class="old-help-para">						<a name="'magic'"></a><code class="help-tag-right">'magic'</code> <a name="'nomagic'"></a><code class="help-tag">'nomagic'</code>
<a href="/neovim-docs-web/en/options#'magic'">'magic'</a>			boolean	(default on)
			global
	Changes the special characters that can be used in search patterns.
	See <a href="/neovim-docs-web/en/pattern#pattern">pattern</a>.
	WARNING: Switching this option off most likely breaks plugins!  That
	is because many patterns assume it's on and will fail when it's off.
	Only switch it off when working with old Vi scripts.  In any other
	situation write patterns that work when <a href="/neovim-docs-web/en/options#'magic'">'magic'</a> is on.  Include "\M"
	when you want to <a href="/neovim-docs-web/en/pattern#%2F%5CM">/\M</a>.</div>
<div class="old-help-para">						<a name="'makeef'"></a><code class="help-tag-right">'makeef'</code> <a name="'mef'"></a><code class="help-tag">'mef'</code>
<a href="/neovim-docs-web/en/options#'makeef'">'makeef'</a> <a href="/neovim-docs-web/en/options#'mef'">'mef'</a>		string	(default: "")
			global
	Name of the errorfile for the <a href="/neovim-docs-web/en/quickfix#%3Amake">:make</a> command (see <a href="/neovim-docs-web/en/quickfix#%3Amake_makeprg">:make_makeprg</a>)
	and the <a href="/neovim-docs-web/en/quickfix#%3Agrep">:grep</a> command.
	When it is empty, an internally generated temp file will be used.
	When "##" is included, it is replaced by a number to make the name
	unique.  This makes sure that the ":make" command doesn't overwrite an
	existing file.
	NOT used for the ":cf" command.  See <a href="/neovim-docs-web/en/options#'errorfile'">'errorfile'</a> for that.
	Environment variables are expanded <a href="/neovim-docs-web/en/options#%3Aset_env">:set_env</a>.
	See <a href="/neovim-docs-web/en/options#option-backslash">option-backslash</a> about including spaces and backslashes.
	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">					<a name="'makeencoding'"></a><code class="help-tag-right">'makeencoding'</code> <a name="'menc'"></a><code class="help-tag">'menc'</code>
<a href="/neovim-docs-web/en/options#'makeencoding'">'makeencoding'</a> <a href="/neovim-docs-web/en/options#'menc'">'menc'</a>	string	(default "")
			global or local to buffer <a href="/neovim-docs-web/en/options#global-local">global-local</a>
	Encoding used for reading the output of external commands.  When empty,
	encoding is not converted.
	This is used for <code>:make</code>, <code>:lmake</code>, <code>:grep</code>, <code>:lgrep</code>, <code>:grepadd</code>,
	<code>:lgrepadd</code>, <code>:cfile</code>, <code>:cgetfile</code>, <code>:caddfile</code>, <code>:lfile</code>, <code>:lgetfile</code>,
	and <code>:laddfile</code>.</div>
<div class="old-help-para">	This would be mostly useful when you use MS-Windows.  If iconv is
	enabled, setting <a href="/neovim-docs-web/en/options#'makeencoding'">'makeencoding'</a> to "char" has the same effect as
	setting to the system locale encoding.  Example:<pre>:set makeencoding=char        " system locale is used</pre></div>
<div class="old-help-para">						<a name="'makeprg'"></a><code class="help-tag-right">'makeprg'</code> <a name="'mp'"></a><code class="help-tag">'mp'</code>
<a href="/neovim-docs-web/en/options#'makeprg'">'makeprg'</a> <a href="/neovim-docs-web/en/options#'mp'">'mp'</a>		string	(default "make")
			global or local to buffer <a href="/neovim-docs-web/en/options#global-local">global-local</a>
	Program to use for the ":make" command.  See <a href="/neovim-docs-web/en/quickfix#%3Amake_makeprg">:make_makeprg</a>.
	This option may contain '%' and '#' characters (see  <a href="/neovim-docs-web/en/cmdline#%3A_%25">:_%</a> and <a href="/neovim-docs-web/en/cmdline#%3A_%23">:_#</a>),
	which are expanded to the current and alternate file name.  Use <a href="/neovim-docs-web/en/cmdline#%3A%3AS">::S</a>
	to escape file names in case they contain special characters.
	Environment variables are expanded <a href="/neovim-docs-web/en/options#%3Aset_env">:set_env</a>.  See <a href="/neovim-docs-web/en/options#option-backslash">option-backslash</a>
	about including spaces and backslashes.
	Note that a '|' must be escaped twice: once for ":set" and once for
	the interpretation of a command.  When you use a filter called
	"myfilter" do it like this:<pre>:set makeprg=gmake\ \\\|\ myfilter</pre></div>
<div class="old-help-para">	The placeholder "$*" can be given (even multiple times) to specify
	where the arguments will be included, for example:<pre>:set makeprg=latex\ \\\\nonstopmode\ \\\\input\\{$*}</pre></div>
<div class="old-help-para">	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">						<a name="'matchpairs'"></a><code class="help-tag-right">'matchpairs'</code> <a name="'mps'"></a><code class="help-tag">'mps'</code>
<a href="/neovim-docs-web/en/options#'matchpairs'">'matchpairs'</a> <a href="/neovim-docs-web/en/options#'mps'">'mps'</a>	string	(default "(:),{:},[:]")
			local to buffer
	Characters that form pairs.  The <a href="/neovim-docs-web/en/motion#%25">%</a> command jumps from one to the
	other.
	Only character pairs are allowed that are different, thus you cannot
	jump between two double quotes.
	The characters must be separated by a colon.
	The pairs must be separated by a comma.  Example for including '&lt;' and
	'&gt;' (for HTML):<pre>:set mps+=&lt;:&gt;</pre></div>
<div class="old-help-para">	A more exotic example, to jump between the '=' and ';' in an
	assignment, useful for languages like C and Java:<pre>:au FileType c,cpp,java set mps+==:;</pre></div>
<div class="old-help-para">	For a more advanced way of using "%", see the matchit.vim plugin in
	the $VIMRUNTIME/plugin directory. <a href="/neovim-docs-web/en/usr_05#add-local-help">add-local-help</a></div>
<div class="old-help-para">						<a name="'matchtime'"></a><code class="help-tag-right">'matchtime'</code> <a name="'mat'"></a><code class="help-tag">'mat'</code>
<a href="/neovim-docs-web/en/options#'matchtime'">'matchtime'</a> <a href="/neovim-docs-web/en/options#'mat'">'mat'</a>	number	(default 5)
			global
	Tenths of a second to show the matching paren, when <a href="/neovim-docs-web/en/options#'showmatch'">'showmatch'</a> is
	set.  Note that this is not in milliseconds, like other options that
	set a time.  This is to be compatible with Nvi.</div>
<div class="old-help-para">						<a name="'maxfuncdepth'"></a><code class="help-tag-right">'maxfuncdepth'</code> <a name="'mfd'"></a><code class="help-tag">'mfd'</code>
<a href="/neovim-docs-web/en/options#'maxfuncdepth'">'maxfuncdepth'</a> <a href="/neovim-docs-web/en/options#'mfd'">'mfd'</a>	number	(default 100)
			global
	Maximum depth of function calls for user functions.  This normally
	catches endless recursion.  When using a recursive function with
	more depth, set <a href="/neovim-docs-web/en/options#'maxfuncdepth'">'maxfuncdepth'</a> to a bigger number.  But this will use
	more memory, there is the danger of failing when memory is exhausted.
	Increasing this limit above 200 also changes the maximum for Ex
	command recursion, see <a href="/neovim-docs-web/en/message#E169">E169</a>.
	See also <a href="/neovim-docs-web/en/userfunc#%3Afunction">:function</a>.</div>
<div class="old-help-para">						<a name="'maxmapdepth'"></a><code class="help-tag-right">'maxmapdepth'</code> <a name="'mmd'"></a><code class="help-tag">'mmd'</code> <a name="E223"></a><code class="help-tag">E223</code>
<a href="/neovim-docs-web/en/options#'maxmapdepth'">'maxmapdepth'</a> <a href="/neovim-docs-web/en/options#'mmd'">'mmd'</a>	number	(default 1000)
			global
	Maximum number of times a mapping is done without resulting in a
	character to be used.  This normally catches endless mappings, like
	":map x y" with ":map y x".  It still does not catch ":map g wg",
	because the 'w' is used before the next mapping is done.  See also
	<a href="/neovim-docs-web/en/map#key-mapping">key-mapping</a>.</div>
<div class="old-help-para">						<a name="'maxmempattern'"></a><code class="help-tag-right">'maxmempattern'</code> <a name="'mmp'"></a><code class="help-tag">'mmp'</code>
<a href="/neovim-docs-web/en/options#'maxmempattern'">'maxmempattern'</a> <a href="/neovim-docs-web/en/options#'mmp'">'mmp'</a>	number	(default 1000)
			global
	Maximum amount of memory (in Kbyte) to use for pattern matching.
	The maximum value is about 2000000.  Use this to work without a limit.
							<a name="E363"></a><code class="help-tag-right">E363</code>
	When Vim runs into the limit it gives an error message and mostly
	behaves like <code>CTRL-C</code> was typed.
	Running into the limit often means that the pattern is very
	inefficient or too complex.  This may already happen with the pattern
	"\(.\)*" on a very long line.  ".*" works much better.
	Might also happen on redraw, when syntax rules try to match a complex
	text structure.
	Vim may run out of memory before hitting the <a href="/neovim-docs-web/en/options#'maxmempattern'">'maxmempattern'</a> limit, in
	which case you get an "Out of memory" error instead.</div>
<div class="old-help-para">						<a name="'menuitems'"></a><code class="help-tag-right">'menuitems'</code> <a name="'mis'"></a><code class="help-tag">'mis'</code>
<a href="/neovim-docs-web/en/options#'menuitems'">'menuitems'</a> <a href="/neovim-docs-web/en/options#'mis'">'mis'</a>	number	(default 25)
			global
	Maximum number of items to use in a menu.  Used for menus that are
	generated from a list of items, e.g., the Buffers menu.  Changing this
	option has no direct effect, the menu must be refreshed first.</div>
<div class="old-help-para">						<a name="'mkspellmem'"></a><code class="help-tag-right">'mkspellmem'</code> <a name="'msm'"></a><code class="help-tag">'msm'</code>
<a href="/neovim-docs-web/en/options#'mkspellmem'">'mkspellmem'</a> <a href="/neovim-docs-web/en/options#'msm'">'msm'</a>	string	(default "460000,2000,500")
			global
	Parameters for <a href="/neovim-docs-web/en/spell#%3Amkspell">:mkspell</a>.  This tunes when to start compressing the
	word tree.  Compression can be slow when there are many words, but
	it's needed to avoid running out of memory.  The amount of memory used
	per word depends very much on how similar the words are, that's why
	this tuning is complicated.</div>
<div class="old-help-para">	There are three numbers, separated by commas:
		<code>{start}</code>,{inc},{added}</div>
<div class="old-help-para">	For most languages the uncompressed word tree fits in memory.  <code>{start}</code>
	gives the amount of memory in Kbyte that can be used before any
	compression is done.  It should be a bit smaller than the amount of
	memory that is available to Vim.</div>
<div class="old-help-para">	When going over the <code>{start}</code> limit the <code>{inc}</code> number specifies the
	amount of memory in Kbyte that can be allocated before another
	compression is done.  A low number means compression is done after
	less words are added, which is slow.  A high number means more memory
	will be allocated.</div>
<div class="old-help-para">	After doing compression, <code>{added}</code> times 1024 words can be added before
	the <code>{inc}</code> limit is ignored and compression is done when any extra
	amount of memory is needed.  A low number means there is a smaller
	chance of hitting the <code>{inc}</code> limit, less memory is used but it's
	slower.</div>
<div class="old-help-para">	The languages for which these numbers are important are Italian and
	Hungarian.  The default works for when you have about 512 Mbyte.  If
	you have 1 Gbyte you could use:<pre>:set mkspellmem=900000,3000,800</pre></div>
<div class="old-help-para">	If you have less than 512 Mbyte <a href="/neovim-docs-web/en/spell#%3Amkspell">:mkspell</a> may fail for some
	languages, no matter what you set <a href="/neovim-docs-web/en/options#'mkspellmem'">'mkspellmem'</a> to.</div>
<div class="old-help-para">	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>.</div>
<div class="old-help-para">				   <a name="'modeline'"></a><code class="help-tag-right">'modeline'</code> <a name="'ml'"></a><code class="help-tag">'ml'</code> <a name="'nomodeline'"></a><code class="help-tag">'nomodeline'</code> <a name="'noml'"></a><code class="help-tag">'noml'</code>
<a href="/neovim-docs-web/en/options#'modeline'">'modeline'</a> <a href="/neovim-docs-web/en/options#'ml'">'ml'</a>		boolean	(default: on (off for root))
			local to buffer
	If <a href="/neovim-docs-web/en/options#'modeline'">'modeline'</a> is on <a href="/neovim-docs-web/en/options#'modelines'">'modelines'</a> gives the number of lines that is
	checked for set commands.  If <a href="/neovim-docs-web/en/options#'modeline'">'modeline'</a> is off or <a href="/neovim-docs-web/en/options#'modelines'">'modelines'</a> is zero
	no lines are checked.  See <a href="/neovim-docs-web/en/options#modeline">modeline</a>.</div>
<div class="old-help-para">			   <a name="'modelineexpr'"></a><code class="help-tag-right">'modelineexpr'</code> <a name="'mle'"></a><code class="help-tag">'mle'</code> <a name="'nomodelineexpr'"></a><code class="help-tag">'nomodelineexpr'</code> <a name="'nomle'"></a><code class="help-tag">'nomle'</code>
<a href="/neovim-docs-web/en/options#'modelineexpr'">'modelineexpr'</a> <a href="/neovim-docs-web/en/options#'mle'">'mle'</a>	boolean (default: off)
			global
	When on allow some options that are an expression to be set in the
	modeline.  Check the option for whether it is affected by
	<a href="/neovim-docs-web/en/options#'modelineexpr'">'modelineexpr'</a>.  Also see <a href="/neovim-docs-web/en/options#modeline">modeline</a>.
	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">						<a name="'modelines'"></a><code class="help-tag-right">'modelines'</code> <a name="'mls'"></a><code class="help-tag">'mls'</code>
<a href="/neovim-docs-web/en/options#'modelines'">'modelines'</a> <a href="/neovim-docs-web/en/options#'mls'">'mls'</a>	number	(default 5)
			global
	If <a href="/neovim-docs-web/en/options#'modeline'">'modeline'</a> is on <a href="/neovim-docs-web/en/options#'modelines'">'modelines'</a> gives the number of lines that is
	checked for set commands.  If <a href="/neovim-docs-web/en/options#'modeline'">'modeline'</a> is off or <a href="/neovim-docs-web/en/options#'modelines'">'modelines'</a> is zero
	no lines are checked.  See <a href="/neovim-docs-web/en/options#modeline">modeline</a>.</div>
<div class="old-help-para">				<a name="'modifiable'"></a><code class="help-tag-right">'modifiable'</code> <a name="'ma'"></a><code class="help-tag">'ma'</code> <a name="'nomodifiable'"></a><code class="help-tag">'nomodifiable'</code> <a name="'noma'"></a><code class="help-tag">'noma'</code> <a name="E21"></a><code class="help-tag">E21</code>
<a href="/neovim-docs-web/en/options#'modifiable'">'modifiable'</a> <a href="/neovim-docs-web/en/options#'ma'">'ma'</a>	boolean	(default on)
			local to buffer
	When off the buffer contents cannot be changed.  The <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> and
	<a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> options also can't be changed.
	Can be reset on startup with the <a href="/neovim-docs-web/en/starting#-M">-M</a> command line argument.</div>
<div class="old-help-para">				<a name="'modified'"></a><code class="help-tag-right">'modified'</code> <a name="'mod'"></a><code class="help-tag">'mod'</code> <a name="'nomodified'"></a><code class="help-tag">'nomodified'</code> <a name="'nomod'"></a><code class="help-tag">'nomod'</code>
<a href="/neovim-docs-web/en/options#'modified'">'modified'</a> <a href="/neovim-docs-web/en/options#'mod'">'mod'</a>	boolean	(default off)
			local to buffer
	When on, the buffer is considered to be modified.  This option is set
	when:
	1. A change was made to the text since it was last written.  Using the
	   <a href="/neovim-docs-web/en/undo#undo">undo</a> command to go back to the original text will reset the
	   option.  But undoing changes that were made before writing the
	   buffer will set the option again, since the text is different from
	   when it was written.
	2. <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> or <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> is different from its original
	   value.  The original value is set when the buffer is read or
	   written.  A ":set nomodified" command also resets the original
	   values to the current values and the <a href="/neovim-docs-web/en/options#'modified'">'modified'</a> option will be
	   reset.
	   Similarly for <a href="/neovim-docs-web/en/options#'eol'">'eol'</a> and <a href="/neovim-docs-web/en/options#'bomb'">'bomb'</a>.
	This option is not set when a change is made to the buffer as the
	result of a BufNewFile, BufRead/BufReadPost, BufWritePost,
	FileAppendPost or VimLeave autocommand event.  See <a href="/neovim-docs-web/en/autocmd#gzip-example">gzip-example</a> for
	an explanation.
	When <a href="/neovim-docs-web/en/options#'buftype'">'buftype'</a> is "nowrite" or "nofile" this option may be set, but
	will be ignored.
	Note that the text may actually be the same, e.g. <a href="/neovim-docs-web/en/options#'modified'">'modified'</a> is set
	when using "rA" on an "A".</div>
<div class="old-help-para">						<a name="'more'"></a><code class="help-tag-right">'more'</code> <a name="'nomore'"></a><code class="help-tag">'nomore'</code>
<a href="/neovim-docs-web/en/options#'more'">'more'</a>			boolean	(default: on)
			global
	When on, listings pause when the whole screen is filled.  You will get
	the <a href="/neovim-docs-web/en/message#more-prompt">more-prompt</a>.  When this option is off there are no pauses, the
	listing continues until finished.</div>
<div class="old-help-para">						<a name="'mouse'"></a><code class="help-tag-right">'mouse'</code>
<a href="/neovim-docs-web/en/options#'mouse'">'mouse'</a>			string	(default "nvi")
			global</div>
<div class="old-help-para">	Enables mouse support. For example, to enable the mouse in Normal mode
	and Visual mode:<pre>:set mouse=nv</pre></div>
<div class="old-help-para">	To temporarily disable mouse support, hold the shift key while using
	the mouse.</div>
<div class="old-help-para">	Mouse support can be enabled for different modes:
		n	Normal mode
		v	Visual mode
		i	Insert mode
		c	Command-line mode
		h	all previous modes when editing a help file
		a	all previous modes
		r	for <a href="/neovim-docs-web/en/message#hit-enter">hit-enter</a> and <a href="/neovim-docs-web/en/message#more-prompt">more-prompt</a> prompt</div>
<div class="old-help-para">	Left-click anywhere in a text buffer to place the cursor there.  This
	works with operators too, e.g. type <a href="/neovim-docs-web/en/change#d">d</a> then left-click to delete text
	from the current cursor position to the position where you clicked.</div>
<div class="old-help-para">	Drag the <a href="/neovim-docs-web/en/windows#status-line">status-line</a> or vertical separator of a window to resize it.</div>
<div class="old-help-para">	If enabled for "v" (Visual mode) then double-click selects word-wise,
	triple-click makes it line-wise, and quadruple-click makes it
	rectangular block-wise.</div>
<div class="old-help-para">	For scrolling with a mouse wheel see <a href="/neovim-docs-web/en/scroll#scroll-mouse-wheel">scroll-mouse-wheel</a>.</div>
<div class="old-help-para">	Note: When enabling the mouse in a terminal, copy/paste will use the
	"* register if possible. See also <a href="/neovim-docs-web/en/options#'clipboard'">'clipboard'</a>.</div>
<div class="old-help-para">	Related options:
	<a href="/neovim-docs-web/en/options#'mousefocus'">'mousefocus'</a>	window focus follows mouse pointer
	<a href="/neovim-docs-web/en/options#'mousemodel'">'mousemodel'</a>	what mouse button does which action
	<a href="/neovim-docs-web/en/options#'mousehide'">'mousehide'</a>	hide mouse pointer while typing text
	<a href="/neovim-docs-web/en/options#'selectmode'">'selectmode'</a>	whether to start Select mode or Visual mode</div>
<div class="old-help-para">	The :behave command provides some "profiles" for mouse behavior.
								<a name="%3Abehave"></a><code class="help-tag-right">:behave</code> <a name="%3Abe"></a><code class="help-tag">:be</code>
	:be[have] <code>{model}</code>	Set behavior for mouse and selection.  Valid
				arguments are:
				   mswin	MS-Windows behavior
				   xterm	Xterm behavior</div>
<div class="old-help-para">				Using ":behave" changes these options:
<div class="help-column_heading">				option		mswin			xterm</div>				<a href="/neovim-docs-web/en/options#'selectmode'">'selectmode'</a>	"mouse,key"		""
				<a href="/neovim-docs-web/en/options#'mousemodel'">'mousemodel'</a>	"popup"			"extend"
				<a href="/neovim-docs-web/en/options#'keymodel'">'keymodel'</a>	"startsel,stopsel"	""
				<a href="/neovim-docs-web/en/options#'selection'">'selection'</a>	"exclusive"		"inclusive"</div>
<div class="old-help-para">			<a name="'mousefocus'"></a><code class="help-tag-right">'mousefocus'</code> <a name="'mousef'"></a><code class="help-tag">'mousef'</code> <a name="'nomousefocus'"></a><code class="help-tag">'nomousefocus'</code> <a name="'nomousef'"></a><code class="help-tag">'nomousef'</code>
<a href="/neovim-docs-web/en/options#'mousefocus'">'mousefocus'</a> <a href="/neovim-docs-web/en/options#'mousef'">'mousef'</a>	boolean	(default off)
			global
	The window that the mouse pointer is on is automatically activated.
	When changing the window layout or window focus in another way, the
	mouse pointer is moved to the window with keyboard focus.  Off is the
	default because it makes using the pull down menus a little goofy, as
	a pointer transit may activate a window unintentionally.</div>
<div class="old-help-para">			<a name="'mousehide'"></a><code class="help-tag-right">'mousehide'</code> <a name="'mh'"></a><code class="help-tag">'mh'</code> <a name="'nomousehide'"></a><code class="help-tag">'nomousehide'</code> <a name="'nomh'"></a><code class="help-tag">'nomh'</code>
<a href="/neovim-docs-web/en/options#'mousehide'">'mousehide'</a> <a href="/neovim-docs-web/en/options#'mh'">'mh'</a>	boolean	(default on)
			global
			<code>{only works in the GUI}</code>
	When on, the mouse pointer is hidden when characters are typed.
	The mouse pointer is restored when the mouse is moved.</div>
<div class="old-help-para">						<a name="'mousemodel'"></a><code class="help-tag-right">'mousemodel'</code> <a name="'mousem'"></a><code class="help-tag">'mousem'</code>
<a href="/neovim-docs-web/en/options#'mousemodel'">'mousemodel'</a> <a href="/neovim-docs-web/en/options#'mousem'">'mousem'</a>	string	(default "popup_setpos")
			global
	Sets the model to use for the mouse.  The name mostly specifies what
	the right mouse button is used for:
	   extend	Right mouse button extends a selection.  This works
			like in an xterm.
	   popup	Right mouse button pops up a menu.  The shifted left
			mouse button extends a selection.  This works like
			with Microsoft Windows.
	   popup_setpos Like "popup", but the cursor will be moved to the
			position where the mouse was clicked, and thus the
			selected operation will act upon the clicked object.
			If clicking inside a selection, that selection will
			be acted upon, i.e. no cursor move.  This implies of
			course, that right clicking outside a selection will
			end Visual mode.
	Overview of what button does what for each model:
<div class="help-column_heading">	mouse		    extend		popup(_setpos)</div>	left click	    place cursor	place cursor
	left drag	    start selection	start selection
	shift-left	    search word		extend selection
	right click	    extend selection	popup menu (place cursor)
	right drag	    extend selection	-
	middle click	    paste		paste</div>
<div class="old-help-para">	In the "popup" model the right mouse button produces a pop-up menu.
	Nvim creates a default <a href="/neovim-docs-web/en/gui#popup-menu">popup-menu</a> but you can redefine it.</div>
<div class="old-help-para">	Note that you can further refine the meaning of buttons with mappings.
	See <a href="/neovim-docs-web/en/term#mouse-overview">mouse-overview</a>.  But mappings are NOT used for modeless selection.</div>
<div class="old-help-para">	Example:<pre>:map &lt;S-LeftMouse&gt;     &lt;RightMouse&gt;
:map &lt;S-LeftDrag&gt;      &lt;RightDrag&gt;
:map &lt;S-LeftRelease&gt;   &lt;RightRelease&gt;
:map &lt;2-S-LeftMouse&gt;   &lt;2-RightMouse&gt;
:map &lt;2-S-LeftDrag&gt;    &lt;2-RightDrag&gt;
:map &lt;2-S-LeftRelease&gt; &lt;2-RightRelease&gt;
:map &lt;3-S-LeftMouse&gt;   &lt;3-RightMouse&gt;
:map &lt;3-S-LeftDrag&gt;    &lt;3-RightDrag&gt;
:map &lt;3-S-LeftRelease&gt; &lt;3-RightRelease&gt;
:map &lt;4-S-LeftMouse&gt;   &lt;4-RightMouse&gt;
:map &lt;4-S-LeftDrag&gt;    &lt;4-RightDrag&gt;
:map &lt;4-S-LeftRelease&gt; &lt;4-RightRelease&gt;</pre></div>
<div class="old-help-para">	Mouse commands requiring the CTRL modifier can be simulated by typing
	the "g" key before using the mouse:
	    "g&lt;LeftMouse&gt;"  is "&lt;C-LeftMouse&gt;	(jump to tag under mouse click)
	    "g&lt;RightMouse&gt;" is "&lt;C-RightMouse&gt;	("CTRL-T")</div>
<div class="old-help-para">	The <a href="/neovim-docs-web/en/options#'mousemodel'">'mousemodel'</a> option is set by the <a href="/neovim-docs-web/en/options#%3Abehave">:behave</a> command.</div>
<div class="old-help-para">						<a name="'mousemoveevent'"></a><code class="help-tag-right">'mousemoveevent'</code> <a name="'mousemev'"></a><code class="help-tag">'mousemev'</code>
<a href="/neovim-docs-web/en/options#'mousemoveevent'">'mousemoveevent'</a> <a href="/neovim-docs-web/en/options#'mousemev'">'mousemev'</a>  boolean	(default off)
			global
	When on, mouse move events are delivered to the input queue and are
	available for mapping. The default, off, avoids the mouse movement
	overhead except when needed.
	Warning: Setting this option can make pending mappings to be aborted
	when the mouse is moved.</div>
<div class="old-help-para">						<a name="'mousescroll'"></a><code class="help-tag-right">'mousescroll'</code>
<a href="/neovim-docs-web/en/options#'mousescroll'">'mousescroll'</a>		string	(default "ver:3,hor:6")
			global
	This option controls the number of lines / columns to scroll by when
	scrolling with a mouse. The option is a comma separated list of parts.
	Each part consists of a direction and a count as follows:
		direction:count,direction:count
	Direction is one of either "hor" or "ver". "hor" controls horizontal
	scrolling and "ver" controls vertical scrolling. Count sets the amount
	to scroll by for the given direction, it should be a non negative
	integer. Each direction should be set at most once. If a direction
	is omitted, a default value is used (6 for horizontal scrolling and 3
	for vertical scrolling). You can disable mouse scrolling by using
	a count of 0.</div>
<div class="old-help-para">	Example:<pre>:set mousescroll=ver:5,hor:2</pre></div>
<div class="old-help-para">	Will make Nvim scroll 5 lines at a time when scrolling vertically, and
	scroll 2 columns at a time when scrolling horizontally.</div>
<div class="old-help-para">					<a name="'mouseshape'"></a><code class="help-tag-right">'mouseshape'</code> <a name="'mouses'"></a><code class="help-tag">'mouses'</code> <a name="E547"></a><code class="help-tag">E547</code>
<a href="/neovim-docs-web/en/options#'mouseshape'">'mouseshape'</a> <a href="/neovim-docs-web/en/options#'mouses'">'mouses'</a>	string	(default "i:beam,r:beam,s:updown,sd:cross,
					m:no,ml:up-arrow,v:rightup-arrow")
			global
	This option tells Vim what the mouse pointer should look like in
	different modes.  The option is a comma-separated list of parts, much
	like used for <a href="/neovim-docs-web/en/options#'guicursor'">'guicursor'</a>.  Each part consist of a mode/location-list
	and an argument-list:
		mode-list:shape,mode-list:shape,..
	The mode-list is a dash separated list of these modes/locations:
<div class="help-column_heading">			In a normal window:</div>		n	Normal mode
		v	Visual mode
		ve	Visual mode with <a href="/neovim-docs-web/en/options#'selection'">'selection'</a> "exclusive" (same as 'v',
			if not specified)
		o	Operator-pending mode
		i	Insert mode
		r	Replace mode</div>
<div class="old-help-para"><div class="help-column_heading">			Others:</div>		c	appending to the command-line
		ci	inserting in the command-line
		cr	replacing in the command-line
		m	at the 'Hit ENTER' or 'More' prompts
		ml	idem, but cursor in the last line
		e	any mode, pointer below last window
		s	any mode, pointer on a status line
		sd	any mode, while dragging a status line
		vs	any mode, pointer on a vertical separator line
		vd	any mode, while dragging a vertical separator line
		a	everywhere</div>
<div class="old-help-para">	The shape is one of the following:
<div class="help-column_heading">	avail	name		looks like</div>	w x	arrow		Normal mouse pointer
	w x	blank		no pointer at all (use with care!)
	w x	beam		I-beam
	w x	updown		up-down sizing arrows
	w x	leftright	left-right sizing arrows
	w x	busy		The system's usual busy pointer
	w x	no		The system's usual '<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+options.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/options.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09w%20x%09updown%09%09up-down%20sizing%20arrows%0A%09w%20x%09leftright%09left-right%20sizing%20arrows%0A%09w%20x%09busy%09%09The%20system's%20usual%20busy%20pointer%0A%09w%20x%09no%09%09The%20system's%20usual%20'no%20input'%20pointer%0A%09%20%20x%09udsizing%09indicates%20up-down%20resizing%0A%09%20%20x%09lrsizing%09indicates%20left-right%20resizing%0A%09%20%20x%09crosshair%09like%20a%20big%20thin%20%2B%0D%60%60%60">no</a> input' pointer
	  x	udsizing	indicates up-down resizing
	  x	lrsizing	indicates left-right resizing
	  x	crosshair	like a big thin +
	  x	hand1		black hand
	  x	hand2		white hand
	  x	pencil		what you write with
	  x	question	big ?
	  x	rightup-arrow	arrow pointing right-up
	w x	up-arrow	arrow pointing up
	  x	<code>&lt;number&gt;</code>	any X11 pointer number (see X11/cursorfont.h)</div>
<div class="old-help-para">	The "avail" column contains a 'w' if the shape is available for Win32,
	x for X11.
	Any modes not specified or shapes not available use the normal mouse
	pointer.</div>
<div class="old-help-para">	Example:<pre>:set mouseshape=s:udsizing,m:no</pre></div>
<div class="old-help-para">	will make the mouse turn to a sizing arrow over the status lines and
	indicate no input when the hit-enter prompt is displayed (since
	clicking the mouse has no effect in this state.)</div>
<div class="old-help-para">						<a name="'mousetime'"></a><code class="help-tag-right">'mousetime'</code> <a name="'mouset'"></a><code class="help-tag">'mouset'</code>
<a href="/neovim-docs-web/en/options#'mousetime'">'mousetime'</a> <a href="/neovim-docs-web/en/options#'mouset'">'mouset'</a>	number	(default 500)
			global
	Defines the maximum time in msec between two mouse clicks for the
	second click to be recognized as a multi click.</div>
<div class="old-help-para">							<a name="'nrformats'"></a><code class="help-tag-right">'nrformats'</code> <a name="'nf'"></a><code class="help-tag">'nf'</code>
<a href="/neovim-docs-web/en/options#'nrformats'">'nrformats'</a> <a href="/neovim-docs-web/en/options#'nf'">'nf'</a>	string	(default "bin,hex")
			local to buffer
	This defines what bases Vim will consider for numbers when using the
	<code>CTRL-A</code> and <code>CTRL-X</code> commands for adding to and subtracting from a number
	respectively; see <a href="/neovim-docs-web/en/change#CTRL-A">CTRL-A</a> for more info on these commands.
	alpha	If included, single alphabetical characters will be
		incremented or decremented.  This is useful for a list with a
		letter index a), b), etc.		<a name="octal-nrformats"></a><code class="help-tag-right">octal-nrformats</code>
	octal	If included, numbers that start with a zero will be considered
		to be octal.  Example: Using <code>CTRL-A</code> on "007" results in "010".
	hex	If included, numbers starting with "0x" or "0X" will be
		considered to be hexadecimal.  Example: Using <code>CTRL-X</code> on
		"0x100" results in "0x0ff".
	bin	If included, numbers starting with "0b" or "0B" will be
		considered to be binary.  Example: Using <code>CTRL-X</code> on
		"0b1000" subtracts one, resulting in "0b0111".
	unsigned    If included, numbers are recognized as unsigned. Thus a
		leading dash or negative sign won't be considered as part of
		the number.  Examples:
		    Using <code>CTRL-X</code> on "2020" in "9-2020" results in "9-2019"
		    (without "unsigned" it would become "9-2021").
		    Using <code>CTRL-A</code> on "2020" in "9-2020" results in "9-2021"
		    (without "unsigned" it would become "9-2019").
		    Using <code>CTRL-X</code> on "0" or <code>CTRL-A</code> on "18446744073709551615"
		    (2^64 - 1) has no effect, overflow is prevented.
	Numbers which simply begin with a digit in the range 1-9 are always
	considered decimal.  This also happens for numbers that are not
	recognized as octal or hex.</div>
<div class="old-help-para">				<a name="'number'"></a><code class="help-tag-right">'number'</code> <a name="'nu'"></a><code class="help-tag">'nu'</code> <a name="'nonumber'"></a><code class="help-tag">'nonumber'</code> <a name="'nonu'"></a><code class="help-tag">'nonu'</code>
<a href="/neovim-docs-web/en/options#'number'">'number'</a> <a href="/neovim-docs-web/en/options#'nu'">'nu'</a>		boolean	(default off)
			local to window
	Print the line number in front of each line.  When the 'n' option is
	excluded from <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> a wrapped line will not use the column of
	line numbers.
	Use the <a href="/neovim-docs-web/en/options#'numberwidth'">'numberwidth'</a> option to adjust the room for the line number.
	When a long, wrapped line doesn't start with the first character, '-'
	characters are put before the number.
	For highlighting see <a href="/neovim-docs-web/en/syntax#hl-LineNr">hl-LineNr</a>, <a href="/neovim-docs-web/en/syntax#hl-CursorLineNr">hl-CursorLineNr</a>, and the
	<a href="/neovim-docs-web/en/sign#%3Asign-define">:sign-define</a> "numhl" argument.
						<a name="number_relativenumber"></a><code class="help-tag-right">number_relativenumber</code>
	The <a href="/neovim-docs-web/en/options#'relativenumber'">'relativenumber'</a> option changes the displayed number to be
	relative to the cursor.  Together with <a href="/neovim-docs-web/en/options#'number'">'number'</a> there are these
	four combinations (cursor in line 3):</div>
<div class="old-help-para">		<a href="/neovim-docs-web/en/options#'nonu'">'nonu'</a>          <a href="/neovim-docs-web/en/options#'nu'">'nu'</a>            <a href="/neovim-docs-web/en/options#'nonu'">'nonu'</a>          <a href="/neovim-docs-web/en/options#'nu'">'nu'</a>
		<a href="/neovim-docs-web/en/options#'nornu'">'nornu'</a>         <a href="/neovim-docs-web/en/options#'nornu'">'nornu'</a>         <a href="/neovim-docs-web/en/options#'rnu'">'rnu'</a>           <a href="/neovim-docs-web/en/options#'rnu'">'rnu'</a></div>
<div class="old-help-para">	    |<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+options.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/options.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%09'nonu'%20%20%20%20%20%20%20%20%20%20'nu'%20%20%20%20%20%20%20%20%20%20%20%20'nonu'%20%20%20%20%20%20%20%20%20%20'nu'%0A%09%09'nornu'%20%20%20%20%20%20%20%20%20'nornu'%20%20%20%20%20%20%20%20%20'rnu'%20%20%20%20%20%20%20%20%20%20%20'rnu'%0A%0A%09%20%20%20%20%7Capple%20%20%20%20%20%20%20%20%20%20%7C%20%201%20apple%20%20%20%20%20%20%7C%20%202%20apple%20%20%20%20%20%20%7C%20%202%20apple%0A%09%20%20%20%20%7Cpear%20%20%20%20%20%20%20%20%20%20%20%7C%20%202%20pear%20%20%20%20%20%20%20%7C%20%201%20pear%20%20%20%20%20%20%20%7C%20%201%20pear%0A%09%20%20%20%20%7Cnobody%20%20%20%20%20%20%20%20%20%7C%20%203%20nobody%20%20%20%20%20%7C%20%200%20nobody%20%20%20%20%20%7C3%20%20%20nobody%0A%09%20%20%20%20%7Cthere%20%20%20%20%20%20%20%20%20%20%7C%20%204%20there%20%20%20%20%20%20%7C%20%201%20there%20%20%20%20%20%20%7C%20%201%20there%0D%60%60%60">apple</a>          |  1 apple      |  2 apple      |  2 apple
	    |<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+options.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/options.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%09'nornu'%20%20%20%20%20%20%20%20%20'nornu'%20%20%20%20%20%20%20%20%20'rnu'%20%20%20%20%20%20%20%20%20%20%20'rnu'%0A%0A%09%20%20%20%20%7Capple%20%20%20%20%20%20%20%20%20%20%7C%20%201%20apple%20%20%20%20%20%20%7C%20%202%20apple%20%20%20%20%20%20%7C%20%202%20apple%0A%09%20%20%20%20%7Cpear%20%20%20%20%20%20%20%20%20%20%20%7C%20%202%20pear%20%20%20%20%20%20%20%7C%20%201%20pear%20%20%20%20%20%20%20%7C%20%201%20pear%0A%09%20%20%20%20%7Cnobody%20%20%20%20%20%20%20%20%20%7C%20%203%20nobody%20%20%20%20%20%7C%20%200%20nobody%20%20%20%20%20%7C3%20%20%20nobody%0A%09%20%20%20%20%7Cthere%20%20%20%20%20%20%20%20%20%20%7C%20%204%20there%20%20%20%20%20%20%7C%20%201%20there%20%20%20%20%20%20%7C%20%201%20there%0A%0D%60%60%60">pear</a>           |  2 pear       |  1 pear       |  1 pear
	    |<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+options.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/options.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%09%20%20%20%20%7Capple%20%20%20%20%20%20%20%20%20%20%7C%20%201%20apple%20%20%20%20%20%20%7C%20%202%20apple%20%20%20%20%20%20%7C%20%202%20apple%0A%09%20%20%20%20%7Cpear%20%20%20%20%20%20%20%20%20%20%20%7C%20%202%20pear%20%20%20%20%20%20%20%7C%20%201%20pear%20%20%20%20%20%20%20%7C%20%201%20pear%0A%09%20%20%20%20%7Cnobody%20%20%20%20%20%20%20%20%20%7C%20%203%20nobody%20%20%20%20%20%7C%20%200%20nobody%20%20%20%20%20%7C3%20%20%20nobody%0A%09%20%20%20%20%7Cthere%20%20%20%20%20%20%20%20%20%20%7C%20%204%20there%20%20%20%20%20%20%7C%20%201%20there%20%20%20%20%20%20%7C%20%201%20there%0A%0A%09%09%09%09%09%09%2A'numberwidth'%2A%20%2A'nuw'%2A%0D%60%60%60">nobody</a>         |  3 nobody     |  0 nobody     |<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+options.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/options.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%09%20%20%20%20%7Capple%20%20%20%20%20%20%20%20%20%20%7C%20%201%20apple%20%20%20%20%20%20%7C%20%202%20apple%20%20%20%20%20%20%7C%20%202%20apple%0A%09%20%20%20%20%7Cpear%20%20%20%20%20%20%20%20%20%20%20%7C%20%202%20pear%20%20%20%20%20%20%20%7C%20%201%20pear%20%20%20%20%20%20%20%7C%20%201%20pear%0A%09%20%20%20%20%7Cnobody%20%20%20%20%20%20%20%20%20%7C%20%203%20nobody%20%20%20%20%20%7C%20%200%20nobody%20%20%20%20%20%7C3%20%20%20nobody%0A%09%20%20%20%20%7Cthere%20%20%20%20%20%20%20%20%20%20%7C%20%204%20there%20%20%20%20%20%20%7C%20%201%20there%20%20%20%20%20%20%7C%20%201%20there%0A%0A%09%09%09%09%09%09%2A'numberwidth'%2A%20%2A'nuw'%2A%0D%60%60%60">3</a>   nobody
	    |<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+options.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/options.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%20%20%20%20%7Capple%20%20%20%20%20%20%20%20%20%20%7C%20%201%20apple%20%20%20%20%20%20%7C%20%202%20apple%20%20%20%20%20%20%7C%20%202%20apple%0A%09%20%20%20%20%7Cpear%20%20%20%20%20%20%20%20%20%20%20%7C%20%202%20pear%20%20%20%20%20%20%20%7C%20%201%20pear%20%20%20%20%20%20%20%7C%20%201%20pear%0A%09%20%20%20%20%7Cnobody%20%20%20%20%20%20%20%20%20%7C%20%203%20nobody%20%20%20%20%20%7C%20%200%20nobody%20%20%20%20%20%7C3%20%20%20nobody%0A%09%20%20%20%20%7Cthere%20%20%20%20%20%20%20%20%20%20%7C%20%204%20there%20%20%20%20%20%20%7C%20%201%20there%20%20%20%20%20%20%7C%20%201%20there%0A%0A%09%09%09%09%09%09%2A'numberwidth'%2A%20%2A'nuw'%2A%0A'numberwidth'%20'nuw'%09number%09(default%3A%204)%0D%60%60%60">there</a>          |  4 there      |  1 there      |  1 there</div>
<div class="old-help-para">						<a name="'numberwidth'"></a><code class="help-tag-right">'numberwidth'</code> <a name="'nuw'"></a><code class="help-tag">'nuw'</code>
<a href="/neovim-docs-web/en/options#'numberwidth'">'numberwidth'</a> <a href="/neovim-docs-web/en/options#'nuw'">'nuw'</a>	number	(default: 4)
			local to window
	Minimal number of columns to use for the line number.  Only relevant
	when the <a href="/neovim-docs-web/en/options#'number'">'number'</a> or <a href="/neovim-docs-web/en/options#'relativenumber'">'relativenumber'</a> option is set or printing lines
	with a line number. Since one space is always between the number and
	the text, there is one less character for the number itself.
	The value is the minimum width.  A bigger width is used when needed to
	fit the highest line number in the buffer respectively the number of
	rows in the window, depending on whether <a href="/neovim-docs-web/en/options#'number'">'number'</a> or <a href="/neovim-docs-web/en/options#'relativenumber'">'relativenumber'</a>
	is set. Thus with the Vim default of 4 there is room for a line number
	up to 999. When the buffer has 1000 lines five columns will be used.
	The minimum value is 1, the maximum value is 20.</div>
<div class="old-help-para">						<a name="'omnifunc'"></a><code class="help-tag-right">'omnifunc'</code> <a name="'ofu'"></a><code class="help-tag">'ofu'</code>
<a href="/neovim-docs-web/en/options#'omnifunc'">'omnifunc'</a> <a href="/neovim-docs-web/en/options#'ofu'">'ofu'</a>	string	(default: empty)
			local to buffer
	This option specifies a function to be used for Insert mode omni
	completion with <code>CTRL-X</code> <code>CTRL-O</code>. <a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-O">i_CTRL-X_CTRL-O</a>
	See <a href="/neovim-docs-web/en/insert#complete-functions">complete-functions</a> for an explanation of how the function is
	invoked and what it should return.  The value can be the name of a
	function, a <a href="/neovim-docs-web/en/eval#lambda">lambda</a> or a <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a>. See <a href="/neovim-docs-web/en/options#option-value-function">option-value-function</a> for
	more information.
	This option is usually set by a filetype plugin:
	<a href="/neovim-docs-web/en/filetype#%3Afiletype-plugin-on">:filetype-plugin-on</a>
	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">			    <a name="'opendevice'"></a><code class="help-tag-right">'opendevice'</code> <a name="'odev'"></a><code class="help-tag">'odev'</code> <a name="'noopendevice'"></a><code class="help-tag">'noopendevice'</code> <a name="'noodev'"></a><code class="help-tag">'noodev'</code>
<a href="/neovim-docs-web/en/options#'opendevice'">'opendevice'</a> <a href="/neovim-docs-web/en/options#'odev'">'odev'</a>	boolean	(default off)
			global
			<code>{only for Windows}</code>
	Enable reading and writing from devices.  This may get Vim stuck on a
	device that can be opened but doesn't actually do the I/O.  Therefore
	it is off by default.
	Note that on Windows editing "aux.h", "lpt1.txt" and the like also
	result in editing a device.</div>
<div class="old-help-para">						<a name="'operatorfunc'"></a><code class="help-tag-right">'operatorfunc'</code> <a name="'opfunc'"></a><code class="help-tag">'opfunc'</code>
<a href="/neovim-docs-web/en/options#'operatorfunc'">'operatorfunc'</a> <a href="/neovim-docs-web/en/options#'opfunc'">'opfunc'</a>	string	(default: empty)
			global
	This option specifies a function to be called by the <a href="/neovim-docs-web/en/map#g%40">g@</a> operator.
	See <a href="/neovim-docs-web/en/map#%3Amap-operator">:map-operator</a> for more info and an example.  The value can be
	the name of a function, a <a href="/neovim-docs-web/en/eval#lambda">lambda</a> or a <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a>. See
	<a href="/neovim-docs-web/en/options#option-value-function">option-value-function</a> for more information.</div>
<div class="old-help-para">	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">				<a name="'packpath'"></a><code class="help-tag-right">'packpath'</code> <a name="'pp'"></a><code class="help-tag">'pp'</code>
<a href="/neovim-docs-web/en/options#'packpath'">'packpath'</a> <a href="/neovim-docs-web/en/options#'pp'">'pp'</a>		string	(default: see <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>)
	Directories used to find packages.  See <a href="/neovim-docs-web/en/repeat#packages">packages</a> andrtp-packages.</div>
<div class="old-help-para">						<a name="'paragraphs'"></a><code class="help-tag-right">'paragraphs'</code> <a name="'para'"></a><code class="help-tag">'para'</code>
<a href="/neovim-docs-web/en/options#'paragraphs'">'paragraphs'</a> <a href="/neovim-docs-web/en/options#'para'">'para'</a>	string	(default "IPLPPPQPP TPHPLIPpLpItpplpipbp")
			global
	Specifies the nroff macros that separate paragraphs.  These are pairs
	of two letters (see <a href="/neovim-docs-web/en/motion#object-motions">object-motions</a>).</div>
<div class="old-help-para">						<a name="'paste'"></a><code class="help-tag-right">'paste'</code> <a name="'nopaste'"></a><code class="help-tag">'nopaste'</code>
<a href="/neovim-docs-web/en/options#'paste'">'paste'</a>			boolean	(default off)
			global
	This option is obsolete; <a href="/neovim-docs-web/en/provider#bracketed-paste-mode">bracketed-paste-mode</a> is built-in.</div>
<div class="old-help-para">	Put Vim in Paste mode.  This is useful if you want to cut or copy
	some text from one window and paste it in Vim.  This will avoid
	unexpected effects.
	Setting this option is useful when using Vim in a terminal, where Vim
	cannot distinguish between typed text and pasted text.  In the GUI, Vim
	knows about pasting and will mostly do the right thing without <a href="/neovim-docs-web/en/options#'paste'">'paste'</a>
	being set.  The same is true for a terminal where Vim handles the
	mouse clicks itself.
	This option is reset when starting the GUI.  Thus if you set it in
	your vimrc it will work in a terminal, but not in the GUI.  Setting
	<a href="/neovim-docs-web/en/options#'paste'">'paste'</a> in the GUI has side effects: e.g., the Paste toolbar button
	will no longer work in Insert mode, because it uses a mapping.
	When the <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> option is switched on (also when it was already on):
<div class="help-li" style=""> mapping in Insert mode and Command-line mode is disabled
</div><div class="help-li" style=""> abbreviations are disabled
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'autoindent'">'autoindent'</a> is reset
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a> is reset
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'hkmap'">'hkmap'</a> is reset
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'revins'">'revins'</a> is reset
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'ruler'">'ruler'</a> is reset
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'showmatch'">'showmatch'</a> is reset
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'smarttab'">'smarttab'</a> is reset
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a> is set to 0
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> is set to 0
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'wrapmargin'">'wrapmargin'</a> is set to 0
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'varsofttabstop'">'varsofttabstop'</a> is made empty
	These options keep their value, but their effect is disabled:
</div><div class="help-li" style="margin-left: 3rem;"> <a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a>
</div><div class="help-li" style="margin-left: 3rem;"> <a href="/neovim-docs-web/en/options#'formatoptions'">'formatoptions'</a> is used like it is empty
</div><div class="help-li" style="margin-left: 3rem;"> <a href="/neovim-docs-web/en/options#'indentexpr'">'indentexpr'</a>
</div><div class="help-li" style="margin-left: 3rem;"> <a href="/neovim-docs-web/en/options#'lisp'">'lisp'</a>
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'smartindent'">'smartindent'</a>
	NOTE: When you start editing another file while the <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> option is
	on, settings from the modelines or autocommands may change the
	settings again, causing trouble when pasting text.  You might want to
	set the <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> option again.
	When the <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> option is reset the mentioned options are restored to
	the value before the moment <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> was switched from off to on.
	Resetting <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> before ever setting it does not have any effect.
	Since mapping doesn't work while <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> is active, you need to use
	the <a href="/neovim-docs-web/en/options#'pastetoggle'">'pastetoggle'</a> option to toggle the <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> option with some key.
</div></div>
<div class="old-help-para">						<a name="'pastetoggle'"></a><code class="help-tag-right">'pastetoggle'</code> <a name="'pt'"></a><code class="help-tag">'pt'</code>
<a href="/neovim-docs-web/en/options#'pastetoggle'">'pastetoggle'</a> <a href="/neovim-docs-web/en/options#'pt'">'pt'</a>	string	(default "")
			global
	When non-empty, specifies the key sequence that toggles the <a href="/neovim-docs-web/en/options#'paste'">'paste'</a>
	option.  This is like specifying a mapping:<pre>:map {keys} :set invpaste&lt;CR&gt;</pre></div>
<div class="old-help-para">	Where <code>{keys}</code> is the value of <a href="/neovim-docs-web/en/options#'pastetoggle'">'pastetoggle'</a>.
	The difference is that it will work even when <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> is set.
	<a href="/neovim-docs-web/en/options#'pastetoggle'">'pastetoggle'</a> works in Insert mode and Normal mode, but not in
	Command-line mode.
	Mappings are checked first, thus overrule <a href="/neovim-docs-web/en/options#'pastetoggle'">'pastetoggle'</a>.  However,
	when <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> is on mappings are ignored in Insert mode, thus you can do
	this:<pre>:map &lt;F10&gt; :set paste&lt;CR&gt;
:map &lt;F11&gt; :set nopaste&lt;CR&gt;
:imap &lt;F10&gt; &lt;C-O&gt;:set paste&lt;CR&gt;
:imap &lt;F11&gt; &lt;nop&gt;
:set pastetoggle=&lt;F11&gt;</pre></div>
<div class="old-help-para">	This will make <code>&lt;F10&gt;</code> start paste mode and <code>&lt;F11&gt;</code> stop paste mode.
	Note that typing <code>&lt;F10&gt;</code> in paste mode inserts "&lt;F10&gt;", since in paste
	mode everything is inserted literally, except the <a href="/neovim-docs-web/en/options#'pastetoggle'">'pastetoggle'</a> key
	sequence.
	When the value has several bytes <a href="/neovim-docs-web/en/options#'ttimeoutlen'">'ttimeoutlen'</a> applies.</div>
<div class="old-help-para">						<a name="'pex'"></a><code class="help-tag-right">'pex'</code> <a name="'patchexpr'"></a><code class="help-tag">'patchexpr'</code>
<a href="/neovim-docs-web/en/options#'patchexpr'">'patchexpr'</a> <a href="/neovim-docs-web/en/options#'pex'">'pex'</a>	string	(default "")
			global
	Expression which is evaluated to apply a patch to a file and generate
	the resulting new version of the file.  See <a href="/neovim-docs-web/en/diff#diff-patchexpr">diff-patchexpr</a>.</div>
<div class="old-help-para">					<a name="'patchmode'"></a><code class="help-tag-right">'patchmode'</code> <a name="'pm'"></a><code class="help-tag">'pm'</code> <a name="E205"></a><code class="help-tag">E205</code> <a name="E206"></a><code class="help-tag">E206</code>
<a href="/neovim-docs-web/en/options#'patchmode'">'patchmode'</a> <a href="/neovim-docs-web/en/options#'pm'">'pm'</a>	string	(default "")
			global
	When non-empty the oldest version of a file is kept.  This can be used
	to keep the original version of a file if you are changing files in a
	source distribution.  Only the first time that a file is written a
	copy of the original file will be kept.  The name of the copy is the
	name of the original file with the string in the <a href="/neovim-docs-web/en/options#'patchmode'">'patchmode'</a> option
	appended.  This option should start with a dot.  Use a string like
	".orig" or ".org".  <a href="/neovim-docs-web/en/options#'backupdir'">'backupdir'</a> must not be empty for this to work
	(Detail: The backup file is renamed to the patchmode file after the
	new file has been successfully written, that's why it must be possible
	to write a backup file).  If there was no file to be backed up, an
	empty file is created.
	When the <a href="/neovim-docs-web/en/options#'backupskip'">'backupskip'</a> pattern matches, a patchmode file is not made.
	Using <a href="/neovim-docs-web/en/options#'patchmode'">'patchmode'</a> for compressed files appends the extension at the
	end (e.g., "file.gz.orig"), thus the resulting name isn't always
	recognized as a compressed file.
	Only normal file name characters can be used, "/\*?[|&lt;&gt;" are illegal.</div>
<div class="old-help-para">				<a name="'path'"></a><code class="help-tag-right">'path'</code> <a name="'pa'"></a><code class="help-tag">'pa'</code> <a name="E343"></a><code class="help-tag">E343</code> <a name="E345"></a><code class="help-tag">E345</code> <a name="E347"></a><code class="help-tag">E347</code> <a name="E854"></a><code class="help-tag">E854</code>
<a href="/neovim-docs-web/en/options#'path'">'path'</a> <a href="/neovim-docs-web/en/options#'pa'">'pa'</a>		string	(default on Unix: ".,/usr/include,,"
				   other systems: ".,,")
			global or local to buffer <a href="/neovim-docs-web/en/options#global-local">global-local</a>
	This is a list of directories which will be searched when using the
	<a href="/neovim-docs-web/en/editing#gf">gf</a>, [f, ]f, ^Wf, <a href="/neovim-docs-web/en/editing#%3Afind">:find</a>, <a href="/neovim-docs-web/en/windows#%3Asfind">:sfind</a>, <a href="/neovim-docs-web/en/tabpage#%3Atabfind">:tabfind</a> and other commands,
	provided that the file being searched for has a relative path (not
	starting with "/", "./" or "../").  The directories in the <a href="/neovim-docs-web/en/options#'path'">'path'</a>
	option may be relative or absolute.
<div class="help-li" style=""> Use commas to separate directory names:
<pre>:set path=.,/usr/local/include,/usr/include</pre></div><div class="help-li" style=""> Spaces can also be used to separate directory names (for backwards
	  compatibility with version 3.0).  To have a space in a directory
	  name, precede it with an extra backslash, and escape the space:<pre>:set path=.,/dir/with\\\ space</pre>
</div><div class="help-li" style=""> To include a comma in a directory name precede it with an extra
	  backslash:<pre>:set path=.,/dir/with\\,comma</pre>
</div><div class="help-li" style=""> To search relative to the directory of the current file, use:
<pre>:set path=.</pre></div><div class="help-li" style=""> To search in the current directory use an empty string between two
	  commas:<pre>:set path=,,</pre>
</div><div class="help-li" style=""> A directory name may end in a ':' or '/'.
</div><div class="help-li" style="margin-left: 3rem;"> Environment variables are expanded <a href="/neovim-docs-web/en/options#%3Aset_env">:set_env</a>.
</div><div class="help-li" style="margin-left: 3rem;"> When using <a href="/neovim-docs-web/en/pi_netrw#netrw.vim">netrw.vim</a> URLs can be used.  For example, adding
	  "https://www.vim.org" will make ":find index.html" work.
</div><div class="help-li" style="margin-left: 3rem;"> Search upwards and downwards in a directory tree using "*", "**" and
	  ";".  See <a href="/neovim-docs-web/en/editing#file-searching">file-searching</a> for info and syntax.
</div><div class="help-li" style="margin-left: 3rem;"> Careful with '\' characters, type two to get one in the option:
<pre>:set path=.,c:\\include</pre></div></div>
<div class="old-help-para">	  Or just use '/' instead:<pre>:set path=.,c:/include</pre></div>
<div class="old-help-para">	Don't forget "." or files won't even be found in the same directory as
	the file!
	The maximum length is limited.  How much depends on the system, mostly
	it is something like 256 or 1024 characters.
	You can check if all the include files are found, using the value of
	<a href="/neovim-docs-web/en/options#'path'">'path'</a>, see <a href="/neovim-docs-web/en/tagsrch#%3Acheckpath">:checkpath</a>.
	The use of <a href="/neovim-docs-web/en/options#%3Aset%2B%3D">:set+=</a> and <a href="/neovim-docs-web/en/options#%3Aset-%3D">:set-=</a> is preferred when adding or removing
	directories from the list.  This avoids problems when a future version
	uses another default.  To remove the current directory use:<pre>:set path-=</pre></div>
<div class="old-help-para">	To add the current directory use:<pre>:set path+=</pre></div>
<div class="old-help-para">	To use an environment variable, you probably need to replace the
	separator.  Here is an example to append $INCL, in which directory
	names are separated with a semi-colon:<pre>:let &amp;path = &amp;path .. "," .. substitute($INCL, ';', ',', 'g')</pre></div>
<div class="old-help-para">	Replace the ';' with a ':' or whatever separator is used.  Note that
	this doesn't work when $INCL contains a comma or white space.</div>
<div class="old-help-para">			<a name="'preserveindent'"></a><code class="help-tag-right">'preserveindent'</code> <a name="'pi'"></a><code class="help-tag">'pi'</code> <a name="'nopreserveindent'"></a><code class="help-tag">'nopreserveindent'</code> <a name="'nopi'"></a><code class="help-tag">'nopi'</code>
<a href="/neovim-docs-web/en/options#'preserveindent'">'preserveindent'</a> <a href="/neovim-docs-web/en/options#'pi'">'pi'</a>	boolean	(default off)
			local to buffer
	When changing the indent of the current line, preserve as much of the
	indent structure as possible.  Normally the indent is replaced by a
	series of tabs followed by spaces as required (unless <a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a> is
	enabled, in which case only spaces are used).  Enabling this option
	means the indent will preserve as many existing characters as possible
	for indenting, and only add additional tabs or spaces as required.
	<a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a> does not apply to the preserved white space, a Tab remains
	a Tab.
	NOTE: When using "&gt;&gt;" multiple times the resulting indent is a mix of
	tabs and spaces.  You might not like this.
	Also see <a href="/neovim-docs-web/en/options#'copyindent'">'copyindent'</a>.
	Use <a href="/neovim-docs-web/en/change#%3Aretab">:retab</a> to clean up white space.</div>
<div class="old-help-para">					<a name="'previewheight'"></a><code class="help-tag-right">'previewheight'</code> <a name="'pvh'"></a><code class="help-tag">'pvh'</code>
<a href="/neovim-docs-web/en/options#'previewheight'">'previewheight'</a> <a href="/neovim-docs-web/en/options#'pvh'">'pvh'</a>	number (default 12)
			global
	Default height for a preview window.  Used for <a href="/neovim-docs-web/en/windows#%3Aptag">:ptag</a> and associated
	commands.  Used for <a href="/neovim-docs-web/en/windows#CTRL-W_%7D">CTRL-W_}</a> when no count is given.</div>
<div class="old-help-para">					<a name="'previewwindow'"></a><code class="help-tag-right">'previewwindow'</code> <a name="'nopreviewwindow'"></a><code class="help-tag">'nopreviewwindow'</code>
					<a name="'pvw'"></a><code class="help-tag-right">'pvw'</code> <a name="'nopvw'"></a><code class="help-tag">'nopvw'</code> <a name="E590"></a><code class="help-tag">E590</code>
<a href="/neovim-docs-web/en/options#'previewwindow'">'previewwindow'</a> <a href="/neovim-docs-web/en/options#'pvw'">'pvw'</a>	boolean (default off)
			local to window
	Identifies the preview window.  Only one window can have this option
	set.  It's normally not set directly, but by using one of the commands
	<a href="/neovim-docs-web/en/windows#%3Aptag">:ptag</a>, <a href="/neovim-docs-web/en/windows#%3Apedit">:pedit</a>, etc.</div>
<div class="old-help-para">						<a name="'printdevice'"></a><code class="help-tag-right">'printdevice'</code> <a name="'pdev'"></a><code class="help-tag">'pdev'</code>
<a href="/neovim-docs-web/en/options#'printdevice'">'printdevice'</a> <a href="/neovim-docs-web/en/options#'pdev'">'pdev'</a>	string	(default empty)
			global
	The name of the printer to be used for <a href="/neovim-docs-web/en/print#%3Ahardcopy">:hardcopy</a>.
	See <a href="/neovim-docs-web/en/print#pdev-option">pdev-option</a>.
	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">						<a name="'printencoding'"></a><code class="help-tag-right">'printencoding'</code> <a name="'penc'"></a><code class="help-tag">'penc'</code>
<a href="/neovim-docs-web/en/options#'printencoding'">'printencoding'</a> <a href="/neovim-docs-web/en/options#'penc'">'penc'</a>	string	(default empty, except for some systems)
			global
	Sets the character encoding used when printing.
	See <a href="/neovim-docs-web/en/print#penc-option">penc-option</a>.</div>
<div class="old-help-para">						<a name="'printexpr'"></a><code class="help-tag-right">'printexpr'</code> <a name="'pexpr'"></a><code class="help-tag">'pexpr'</code>
<a href="/neovim-docs-web/en/options#'printexpr'">'printexpr'</a> <a href="/neovim-docs-web/en/options#'pexpr'">'pexpr'</a>	string	(default: see below)
			global
	Expression used to print the PostScript produced with <a href="/neovim-docs-web/en/print#%3Ahardcopy">:hardcopy</a>.
	See <a href="/neovim-docs-web/en/print#pexpr-option">pexpr-option</a>.
	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">						<a name="'printfont'"></a><code class="help-tag-right">'printfont'</code> <a name="'pfn'"></a><code class="help-tag">'pfn'</code>
<a href="/neovim-docs-web/en/options#'printfont'">'printfont'</a> <a href="/neovim-docs-web/en/options#'pfn'">'pfn'</a>	string	(default "courier")
			global
	The name of the font that will be used for <a href="/neovim-docs-web/en/print#%3Ahardcopy">:hardcopy</a>.
	See <a href="/neovim-docs-web/en/print#pfn-option">pfn-option</a>.</div>
<div class="old-help-para">						<a name="'printheader'"></a><code class="help-tag-right">'printheader'</code> <a name="'pheader'"></a><code class="help-tag">'pheader'</code>
<a href="/neovim-docs-web/en/options#'printheader'">'printheader'</a> <a href="/neovim-docs-web/en/options#'pheader'">'pheader'</a>  string  (default "%&lt;%f%h%m%=Page %N")
			global
	The format of the header produced in <a href="/neovim-docs-web/en/print#%3Ahardcopy">:hardcopy</a> output.
	See <a href="/neovim-docs-web/en/print#pheader-option">pheader-option</a>.</div>
<div class="old-help-para">						<a name="'printmbcharset'"></a><code class="help-tag-right">'printmbcharset'</code> <a name="'pmbcs'"></a><code class="help-tag">'pmbcs'</code>
<a href="/neovim-docs-web/en/options#'printmbcharset'">'printmbcharset'</a> <a href="/neovim-docs-web/en/options#'pmbcs'">'pmbcs'</a>  string (default "")
			global
	The CJK character set to be used for CJK output from <a href="/neovim-docs-web/en/print#%3Ahardcopy">:hardcopy</a>.
	See <a href="/neovim-docs-web/en/print#pmbcs-option">pmbcs-option</a>.</div>
<div class="old-help-para">						<a name="'printmbfont'"></a><code class="help-tag-right">'printmbfont'</code> <a name="'pmbfn'"></a><code class="help-tag">'pmbfn'</code>
<a href="/neovim-docs-web/en/options#'printmbfont'">'printmbfont'</a> <a href="/neovim-docs-web/en/options#'pmbfn'">'pmbfn'</a>	string (default "")
			global
	List of font names to be used for CJK output from <a href="/neovim-docs-web/en/print#%3Ahardcopy">:hardcopy</a>.
	See <a href="/neovim-docs-web/en/print#pmbfn-option">pmbfn-option</a>.</div>
<div class="old-help-para">						<a name="'printoptions'"></a><code class="help-tag-right">'printoptions'</code> <a name="'popt'"></a><code class="help-tag">'popt'</code>
<a href="/neovim-docs-web/en/options#'printoptions'">'printoptions'</a> <a href="/neovim-docs-web/en/options#'popt'">'popt'</a> string (default "")
			global
	List of items that control the format of the output of <a href="/neovim-docs-web/en/print#%3Ahardcopy">:hardcopy</a>.
	See <a href="/neovim-docs-web/en/print#popt-option">popt-option</a>.</div>
<div class="old-help-para">						<a name="'pumblend'"></a><code class="help-tag-right">'pumblend'</code> <a name="'pb'"></a><code class="help-tag">'pb'</code>
<a href="/neovim-docs-web/en/options#'pumblend'">'pumblend'</a> <a href="/neovim-docs-web/en/options#'pb'">'pb'</a>		number	(default 0)
			global
	Enables pseudo-transparency for the <a href="/neovim-docs-web/en/gui#popup-menu">popup-menu</a>. Valid values are in
	the range of 0 for fully opaque popupmenu (disabled) to 100 for fully
	transparent background. Values between 0-30 are typically most useful.</div>
<div class="old-help-para">	It is possible to override the level for individual highlights within
	the popupmenu using <a href="/neovim-docs-web/en/syntax#highlight-blend">highlight-blend</a>. For instance, to enable
	transparency but force the current selected element to be fully opaque:<pre>:set pumblend=15
:hi PmenuSel blend=0</pre></div>
<div class="old-help-para">	UI-dependent. Works best with RGB colors. <a href="/neovim-docs-web/en/options#'termguicolors'">'termguicolors'</a></div>
<div class="old-help-para">						<a name="'pumheight'"></a><code class="help-tag-right">'pumheight'</code> <a name="'ph'"></a><code class="help-tag">'ph'</code>
<a href="/neovim-docs-web/en/options#'pumheight'">'pumheight'</a> <a href="/neovim-docs-web/en/options#'ph'">'ph'</a>	number	(default 0)
			global
	Maximum number of items to show in the popup menu
	(<a href="/neovim-docs-web/en/insert#ins-completion-menu">ins-completion-menu</a>). Zero means "use available screen space".</div>
<div class="old-help-para">						<a name="'pumwidth'"></a><code class="help-tag-right">'pumwidth'</code> <a name="'pw'"></a><code class="help-tag">'pw'</code>
<a href="/neovim-docs-web/en/options#'pumwidth'">'pumwidth'</a> <a href="/neovim-docs-web/en/options#'pw'">'pw'</a>		number	(default 15)
			global
	Minimum width for the popup menu (<a href="/neovim-docs-web/en/insert#ins-completion-menu">ins-completion-menu</a>).  If the
	cursor column + <a href="/neovim-docs-web/en/options#'pumwidth'">'pumwidth'</a> exceeds screen width, the popup menu is
	nudged to fit on the screen.</div>
<div class="old-help-para">						<a name="'pyxversion'"></a><code class="help-tag-right">'pyxversion'</code> <a name="'pyx'"></a><code class="help-tag">'pyx'</code>
<a href="/neovim-docs-web/en/options#'pyxversion'">'pyxversion'</a> <a href="/neovim-docs-web/en/options#'pyx'">'pyx'</a>	number	(default 3)
			global
	Specifies the python version used for pyx* functions and commands
	<a href="/neovim-docs-web/en/if_pyth#python_x">python_x</a>.  As only Python 3 is supported, this always has the value
	<code>3</code>. Setting any other value is an error.</div>
<div class="old-help-para">	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">						<a name="'quickfixtextfunc'"></a><code class="help-tag-right">'quickfixtextfunc'</code> <a name="'qftf'"></a><code class="help-tag">'qftf'</code>
<a href="/neovim-docs-web/en/options#'quickfixtextfunc'">'quickfixtextfunc'</a> <a href="/neovim-docs-web/en/options#'qftf'">'qftf'</a>	string (default "")
			global
	This option specifies a function to be used to get the text to display
	in the quickfix and location list windows.  This can be used to
	customize the information displayed in the quickfix or location window
	for each entry in the corresponding quickfix or location list.  See
	<a href="/neovim-docs-web/en/quickfix#quickfix-window-function">quickfix-window-function</a> for an explanation of how to write the
	function and an example.  The value can be the name of a function, a
	<a href="/neovim-docs-web/en/eval#lambda">lambda</a> or a <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a>. See <a href="/neovim-docs-web/en/options#option-value-function">option-value-function</a> for more
	information.</div>
<div class="old-help-para">	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">						<a name="'quoteescape'"></a><code class="help-tag-right">'quoteescape'</code> <a name="'qe'"></a><code class="help-tag">'qe'</code>
<a href="/neovim-docs-web/en/options#'quoteescape'">'quoteescape'</a> <a href="/neovim-docs-web/en/options#'qe'">'qe'</a>	string	(default "\")
			local to buffer
	The characters that are used to escape quotes in a string.  Used for
	objects like a', a" and a` <a href="/neovim-docs-web/en/motion#a'">a'</a>.
	When one of the characters in this option is found inside a string,
	the following character will be skipped.  The default value makes the
	text "foo\"bar\\" considered to be one string.</div>
<div class="old-help-para">				   <a name="'readonly'"></a><code class="help-tag-right">'readonly'</code> <a name="'ro'"></a><code class="help-tag">'ro'</code> <a name="'noreadonly'"></a><code class="help-tag">'noreadonly'</code> <a name="'noro'"></a><code class="help-tag">'noro'</code>
<a href="/neovim-docs-web/en/options#'readonly'">'readonly'</a> <a href="/neovim-docs-web/en/options#'ro'">'ro'</a>		boolean	(default off)
			local to buffer
	If on, writes fail unless you use a '!'.  Protects you from
	accidentally overwriting a file.  Default on when Vim is started
	in read-only mode ("vim -R") or when the executable is called "view".
	When using ":w!" the <a href="/neovim-docs-web/en/options#'readonly'">'readonly'</a> option is reset for the current
	buffer, unless the 'Z' flag is in <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a>.
	When using the ":view" command the <a href="/neovim-docs-web/en/options#'readonly'">'readonly'</a> option is set for the
	newly edited buffer.
	See <a href="/neovim-docs-web/en/options#'modifiable'">'modifiable'</a> for disallowing changes to the buffer.</div>
<div class="old-help-para">						<a name="'redrawdebug'"></a><code class="help-tag-right">'redrawdebug'</code> <a name="'rdb'"></a><code class="help-tag">'rdb'</code>
<a href="/neovim-docs-web/en/options#'redrawdebug'">'redrawdebug'</a> <a href="/neovim-docs-web/en/options#'rdb'">'rdb'</a>	string	(default '')
			global
	Flags to change the way redrawing works, for debugging purposes.
	Most useful with <a href="/neovim-docs-web/en/options#'writedelay'">'writedelay'</a> set to some reasonable value.
	Supports the following flags:
	    compositor	Indicate what redraws come from the compositor
			by briefly flashing the redrawn regions in colors
			indicating the redraw type. These are the highlight
			groups used (and their default colors):
		RedrawDebugNormal   gui=reverse   normal redraw passed through
		RedrawDebugClear    guibg=Yellow  clear event passed through
		RedrawDebugComposed guibg=Green   redraw event modified by the
						  compositor (due to
						  overlapping grids, etc)
		RedrawDebugRecompose guibg=Red    redraw generated by the
						  compositor itself, due to a
						  grid being moved or deleted.
	    nothrottle	Turn off throttling of the message grid. This is an
			optimization that joins many small scrolls to one
			larger scroll when drawing the message area (with
			<a href="/neovim-docs-web/en/options#'display'">'display'</a> msgsep flag active).
	    invalid	Enable stricter checking (abort) of inconsistencies
			of the internal screen state. This is mostly
			useful when running nvim inside a debugger (and
			the test suite).
	    nodelta	Send all internally redrawn cells to the UI, even if
	                they are unchanged from the already displayed state.</div>
<div class="old-help-para">						<a name="'redrawtime'"></a><code class="help-tag-right">'redrawtime'</code> <a name="'rdt'"></a><code class="help-tag">'rdt'</code>
<a href="/neovim-docs-web/en/options#'redrawtime'">'redrawtime'</a> <a href="/neovim-docs-web/en/options#'rdt'">'rdt'</a>	number	(default 2000)
			global
	Time in milliseconds for redrawing the display.  Applies to
	<a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a>, <a href="/neovim-docs-web/en/options#'inccommand'">'inccommand'</a>, <a href="/neovim-docs-web/en/pattern#%3Amatch">:match</a> highlighting and syntax
	highlighting.
	When redrawing takes more than this many milliseconds no further
	matches will be highlighted.
	For syntax highlighting the time applies per window.  When over the
	limit syntax highlighting is disabled until <a href="/neovim-docs-web/en/various#CTRL-L">CTRL-L</a> is used.
	This is used to avoid that Vim hangs when using a very complicated
	pattern.</div>
<div class="old-help-para">						<a name="'regexpengine'"></a><code class="help-tag-right">'regexpengine'</code> <a name="'re'"></a><code class="help-tag">'re'</code>
<a href="/neovim-docs-web/en/options#'regexpengine'">'regexpengine'</a> <a href="/neovim-docs-web/en/options#'re'">'re'</a>	number	(default 0)
			global
	This selects the default regexp engine. <a href="/neovim-docs-web/en/pattern#two-engines">two-engines</a>
	The possible values are:
		0	automatic selection
		1	old engine
		2	NFA engine
	Note that when using the NFA engine and the pattern contains something
	that is not supported the pattern will not match.  This is only useful
	for debugging the regexp engine.
	Using automatic selection enables Vim to switch the engine, if the
	default engine becomes too costly.  E.g., when the NFA engine uses too
	many states.  This should prevent Vim from hanging on a combination of
	a complex pattern with long text.</div>
<div class="old-help-para">		<a name="'relativenumber'"></a><code class="help-tag-right">'relativenumber'</code> <a name="'rnu'"></a><code class="help-tag">'rnu'</code> <a name="'norelativenumber'"></a><code class="help-tag">'norelativenumber'</code> <a name="'nornu'"></a><code class="help-tag">'nornu'</code>
<a href="/neovim-docs-web/en/options#'relativenumber'">'relativenumber'</a> <a href="/neovim-docs-web/en/options#'rnu'">'rnu'</a>	boolean	(default off)
			local to window
	Show the line number relative to the line with the cursor in front of
	each line. Relative line numbers help you use the <a href="/neovim-docs-web/en/intro#count">count</a> you can
	precede some vertical motion commands (e.g. j k + -) with, without
	having to calculate it yourself. Especially useful in combination with
	other commands (e.g. y d c &lt; &gt; gq gw =).
	When the 'n' option is excluded from <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> a wrapped
	line will not use the column of line numbers.
	The <a href="/neovim-docs-web/en/options#'numberwidth'">'numberwidth'</a> option can be used to set the room used for the line
	number.
	When a long, wrapped line doesn't start with the first character, '-'
	characters are put before the number.
	See <a href="/neovim-docs-web/en/syntax#hl-LineNr">hl-LineNr</a>  and <a href="/neovim-docs-web/en/syntax#hl-CursorLineNr">hl-CursorLineNr</a> for the highlighting used for
	the number.</div>
<div class="old-help-para">	The number in front of the cursor line also depends on the value of
	<a href="/neovim-docs-web/en/options#'number'">'number'</a>, see <a href="/neovim-docs-web/en/options#number_relativenumber">number_relativenumber</a> for all combinations of the two
	options.</div>
<div class="old-help-para">						<a name="'report'"></a><code class="help-tag-right">'report'</code>
<a href="/neovim-docs-web/en/options#'report'">'report'</a>		number	(default 2)
			global
	Threshold for reporting number of lines changed.  When the number of
	changed lines is more than <a href="/neovim-docs-web/en/options#'report'">'report'</a> a message will be given for most
	":" commands.  If you want it always, set <a href="/neovim-docs-web/en/options#'report'">'report'</a> to 0.
	For the ":substitute" command the number of substitutions is used
	instead of the number of lines.</div>
<div class="old-help-para">				<a name="'revins'"></a><code class="help-tag-right">'revins'</code> <a name="'ri'"></a><code class="help-tag">'ri'</code> <a name="'norevins'"></a><code class="help-tag">'norevins'</code> <a name="'nori'"></a><code class="help-tag">'nori'</code>
<a href="/neovim-docs-web/en/options#'revins'">'revins'</a> <a href="/neovim-docs-web/en/options#'ri'">'ri'</a>		boolean	(default off)
			global
	Inserting characters in Insert mode will work backwards.  See "typing
	backwards" <a href="/neovim-docs-web/en/rileft#ins-reverse">ins-reverse</a>.  This option can be toggled with the <code>CTRL-_</code>
	command in Insert mode, when <a href="/neovim-docs-web/en/options#'allowrevins'">'allowrevins'</a> is set.
	This option is reset when <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> is set and restored when <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> is
	reset.</div>
<div class="old-help-para">				 <a name="'rightleft'"></a><code class="help-tag-right">'rightleft'</code> <a name="'rl'"></a><code class="help-tag">'rl'</code> <a name="'norightleft'"></a><code class="help-tag">'norightleft'</code> <a name="'norl'"></a><code class="help-tag">'norl'</code>
<a href="/neovim-docs-web/en/options#'rightleft'">'rightleft'</a> <a href="/neovim-docs-web/en/options#'rl'">'rl'</a>	boolean	(default off)
			local to window
	When on, display orientation becomes right-to-left, i.e., characters
	that are stored in the file appear from the right to the left.
	Using this option, it is possible to edit files for languages that
	are written from the right to the left such as Hebrew and Arabic.
	This option is per window, so it is possible to edit mixed files
	simultaneously, or to view the same file in both ways (this is
	useful whenever you have a mixed text file with both right-to-left
	and left-to-right strings so that both sets are displayed properly
	in different windows).  Also see <a href="/neovim-docs-web/en/rileft#rileft.txt">rileft.txt</a>.</div>
<div class="old-help-para">			<a name="'rightleftcmd'"></a><code class="help-tag-right">'rightleftcmd'</code> <a name="'rlc'"></a><code class="help-tag">'rlc'</code>
<a href="/neovim-docs-web/en/options#'rightleftcmd'">'rightleftcmd'</a> <a href="/neovim-docs-web/en/options#'rlc'">'rlc'</a>	string	(default "search")
			local to window
	Each word in this option enables the command line editing to work in
	right-to-left mode for a group of commands:</div>
<div class="old-help-para">		search		"/" and "?" commands</div>
<div class="old-help-para">	This is useful for languages such as Hebrew, Arabic and Farsi.
	The <a href="/neovim-docs-web/en/options#'rightleft'">'rightleft'</a> option must be set for <a href="/neovim-docs-web/en/options#'rightleftcmd'">'rightleftcmd'</a> to take effect.</div>
<div class="old-help-para">					 <a name="'ruler'"></a><code class="help-tag-right">'ruler'</code> <a name="'ru'"></a><code class="help-tag">'ru'</code> <a name="'noruler'"></a><code class="help-tag">'noruler'</code> <a name="'noru'"></a><code class="help-tag">'noru'</code>
<a href="/neovim-docs-web/en/options#'ruler'">'ruler'</a> <a href="/neovim-docs-web/en/options#'ru'">'ru'</a>		boolean	(default on)
			global
	Show the line and column number of the cursor position, separated by a
	comma.  When there is room, the relative position of the displayed
	text in the file is shown on the far right:
		Top	first line is visible
		Bot	last line is visible
		All	first and last line are visible
		45%	relative position in the file
	If <a href="/neovim-docs-web/en/options#'rulerformat'">'rulerformat'</a> is set, it will determine the contents of the ruler.
	Each window has its own ruler.  If a window has a status line, the
	ruler is shown there.  If a window doesn't have a status line and
	<a href="/neovim-docs-web/en/options#'cmdheight'">'cmdheight'</a> is zero, the ruler is not shown.  Otherwise it is shown in
	the last line of the screen.  If the statusline is given by
	<a href="/neovim-docs-web/en/options#'statusline'">'statusline'</a> (i.e. not empty), this option takes precedence over
	<a href="/neovim-docs-web/en/options#'ruler'">'ruler'</a> and <a href="/neovim-docs-web/en/options#'rulerformat'">'rulerformat'</a>.
	If the number of characters displayed is different from the number of
	bytes in the text (e.g., for a TAB or a multibyte character), both
	the text column (byte number) and the screen column are shown,
	separated with a dash.
	For an empty line "0-1" is shown.
	For an empty buffer the line number will also be zero: "0,0-1".
	This option is reset when <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> is set and restored when <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> is
	reset.
	If you don't want to see the ruler all the time but want to know where
	you are, use "g <code>CTRL-G</code>" <a href="/neovim-docs-web/en/editing#g_CTRL-G">g_CTRL-G</a>.</div>
<div class="old-help-para">						<a name="'rulerformat'"></a><code class="help-tag-right">'rulerformat'</code> <a name="'ruf'"></a><code class="help-tag">'ruf'</code>
<a href="/neovim-docs-web/en/options#'rulerformat'">'rulerformat'</a> <a href="/neovim-docs-web/en/options#'ruf'">'ruf'</a>	string	(default empty)
			global
	When this option is not empty, it determines the content of the ruler
	string, as displayed for the <a href="/neovim-docs-web/en/options#'ruler'">'ruler'</a> option.
	The format of this option is like that of <a href="/neovim-docs-web/en/options#'statusline'">'statusline'</a>.
	This option cannot be set in a modeline when <a href="/neovim-docs-web/en/options#'modelineexpr'">'modelineexpr'</a> is off.</div>
<div class="old-help-para">	The default ruler width is 17 characters.  To make the ruler 15
	characters wide, put "%15(" at the start and "%)" at the end.
	Example:<pre>:set rulerformat=%15(%c%V\ %p%%%)</pre></div>
<div class="old-help-para">				<a name="'runtimepath'"></a><code class="help-tag-right">'runtimepath'</code> <a name="'rtp'"></a><code class="help-tag">'rtp'</code> <a name="vimfiles"></a><code class="help-tag">vimfiles</code>
<a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a> <a href="/neovim-docs-web/en/options#'rtp'">'rtp'</a>	string	(default:     "$XDG_CONFIG_HOME/nvim,
					       $XDG_CONFIG_DIRS[1]/nvim,
					       $XDG_CONFIG_DIRS[2]/nvim,
					       ???
					       $XDG_DATA_HOME/nvim[-data]/site,
					       $XDG_DATA_DIRS[1]/nvim/site,
					       $XDG_DATA_DIRS[2]/nvim/site,
					       ???
					       $VIMRUNTIME,
					       ???
					       $XDG_DATA_DIRS[2]/nvim/site/after,
					       $XDG_DATA_DIRS[1]/nvim/site/after,
					       $XDG_DATA_HOME/nvim[-data]/site/after,
					       ???
					       $XDG_CONFIG_DIRS[2]/nvim/after,
					       $XDG_CONFIG_DIRS[1]/nvim/after,
					       $XDG_CONFIG_HOME/nvim/after")
			global
	List of directories to be searched for these runtime files:
	  filetype.lua	filetypes <a href="/neovim-docs-web/en/filetype#new-filetype">new-filetype</a>
	  autoload/	automatically loaded scripts <a href="/neovim-docs-web/en/userfunc#autoload-functions">autoload-functions</a>
	  colors/	color scheme files <a href="/neovim-docs-web/en/syntax#%3Acolorscheme">:colorscheme</a>
	  compiler/	compiler files <a href="/neovim-docs-web/en/quickfix#%3Acompiler">:compiler</a>
	  doc/		documentation <a href="/neovim-docs-web/en/usr_41#write-local-help">write-local-help</a>
	  ftplugin/	filetype plugins <a href="/neovim-docs-web/en/usr_41#write-filetype-plugin">write-filetype-plugin</a>
	  indent/	indent scripts <a href="/neovim-docs-web/en/indent#indent-expression">indent-expression</a>
	  keymap/	key mapping files <a href="/neovim-docs-web/en/mbyte#mbyte-keymap">mbyte-keymap</a>
	  lang/		menu translations <a href="/neovim-docs-web/en/mlang#%3Amenutrans">:menutrans</a>
	  lua/		<a href="/neovim-docs-web/en/lua#Lua">Lua</a> plugins
	  menu.vim	GUI menus <a href="/neovim-docs-web/en/gui#menu.vim">menu.vim</a>
	  pack/		packages <a href="/neovim-docs-web/en/repeat#%3Apackadd">:packadd</a>
	  parser/	<a href="/neovim-docs-web/en/treesitter#treesitter">treesitter</a> syntax parsers
	  plugin/	plugin scripts <a href="/neovim-docs-web/en/usr_41#write-plugin">write-plugin</a>
	  print/	files for printing <a href="/neovim-docs-web/en/print#postscript-print-encoding">postscript-print-encoding</a>
	  query/	<a href="/neovim-docs-web/en/treesitter#treesitter">treesitter</a> queries
	  rplugin/	<a href="/neovim-docs-web/en/remote_plugin#remote-plugin">remote-plugin</a> scripts
	  spell/	spell checking files <a href="/neovim-docs-web/en/spell#spell">spell</a>
	  syntax/	syntax files <a href="/neovim-docs-web/en/syntax#mysyntaxfile">mysyntaxfile</a>
	  tutor/	tutorial files <a href="/neovim-docs-web/en/pi_tutor#%3ATutor">:Tutor</a></div>
<div class="old-help-para">	And any other file searched for with the <a href="/neovim-docs-web/en/repeat#%3Aruntime">:runtime</a> command.</div>
<div class="old-help-para">	Defaults are setup to search these locations:
	1. Your home directory, for personal preferences.
	   Given by <code>stdpath("config")</code>.  <a href="/neovim-docs-web/en/starting#%24XDG_CONFIG_HOME">$XDG_CONFIG_HOME</a>
	2. Directories which must contain configuration files according to
	   <a href="/neovim-docs-web/en/starting#xdg">xdg</a> ($XDG_CONFIG_DIRS, defaults to /etc/xdg).  This also contains
	   preferences from system administrator.
	3. Data home directory, for plugins installed by user.
	   Given by <code>stdpath("data")/site</code>.  <a href="/neovim-docs-web/en/starting#%24XDG_DATA_HOME">$XDG_DATA_HOME</a>
	4. nvim/site subdirectories for each directory in $XDG_DATA_DIRS.
	   This is for plugins which were installed by system administrator,
	   but are not part of the Nvim distribution. XDG_DATA_DIRS defaults
	   to /usr/local/share/:/usr/share/, so system administrators are
	   expected to install site plugins to /usr/share/nvim/site.
	5. Session state directory, for state data such as swap, backupdir,
	   viewdir, undodir, etc.
	   Given by <code>stdpath("state")</code>.  <a href="/neovim-docs-web/en/starting#%24XDG_STATE_HOME">$XDG_STATE_HOME</a>
	6. $VIMRUNTIME, for files distributed with Nvim.
							<a name="after-directory"></a><code class="help-tag-right">after-directory</code>
	7, 8, 9, 10. In after/ subdirectories of 1, 2, 3 and 4, with reverse
	   ordering.  This is for preferences to overrule or add to the
	   distributed defaults or system-wide settings (rarely needed).</div>
<div class="old-help-para">							<a name="packages-runtimepath"></a><code class="help-tag-right">packages-runtimepath</code>
	"start" packages will also be searched (<a href="/neovim-docs-web/en/repeat#runtime-search-path">runtime-search-path</a>) for
	runtime files after these, though such packages are not explicitly
	reported in &amp;runtimepath. But "opt" packages are explicitly added to
	&amp;runtimepath by <a href="/neovim-docs-web/en/repeat#%3Apackadd">:packadd</a>.</div>
<div class="old-help-para">	Note that, unlike <a href="/neovim-docs-web/en/options#'path'">'path'</a>, no wildcards like "**" are allowed.  Normal
	wildcards are allowed, but can significantly slow down searching for
	runtime files.  For speed, use as few items as possible and avoid
	wildcards.
	See <a href="/neovim-docs-web/en/repeat#%3Aruntime">:runtime</a>.
	Example:<pre>:set runtimepath=~/vimruntime,/mygroup/vim,$VIMRUNTIME</pre></div>
<div class="old-help-para">	This will use the directory "~/vimruntime" first (containing your
	personal Nvim runtime files), then "/mygroup/vim", and finally
	"$VIMRUNTIME" (the default runtime files).
	You can put a directory before $VIMRUNTIME to find files which replace
	distributed runtime files.  You can put a directory after $VIMRUNTIME
	to find files which add to distributed runtime files.</div>
<div class="old-help-para">	With <a href="/neovim-docs-web/en/starting#--clean">--clean</a> the home directory entries are not included.</div>
<div class="old-help-para">						<a name="'scroll'"></a><code class="help-tag-right">'scroll'</code> <a name="'scr'"></a><code class="help-tag">'scr'</code>
<a href="/neovim-docs-web/en/options#'scroll'">'scroll'</a> <a href="/neovim-docs-web/en/options#'scr'">'scr'</a>		number	(default: half the window height)
			local to window
	Number of lines to scroll with <code>CTRL-U</code> and <code>CTRL-D</code> commands.  Will be
	set to half the number of lines in the window when the window size
	changes.  This may happen when enabling the <a href="/neovim-docs-web/en/windows#status-line">status-line</a> or
	<a href="/neovim-docs-web/en/options#'tabline'">'tabline'</a> option after setting the <a href="/neovim-docs-web/en/options#'scroll'">'scroll'</a> option.
	If you give a count to the <code>CTRL-U</code> or <code>CTRL-D</code> command it will
	be used as the new value for <a href="/neovim-docs-web/en/options#'scroll'">'scroll'</a>.  Reset to half the window
	height with ":set scroll=0".</div>
<div class="old-help-para">						<a name="'scrollback'"></a><code class="help-tag-right">'scrollback'</code> <a name="'scbk'"></a><code class="help-tag">'scbk'</code>
<a href="/neovim-docs-web/en/options#'scrollback'">'scrollback'</a> <a href="/neovim-docs-web/en/options#'scbk'">'scbk'</a>	number	(default: 10000)
			local to buffer
	Maximum number of lines kept beyond the visible screen. Lines at the
	top are deleted if new lines exceed this limit.
	Minimum is 1, maximum is 100000.
	Only in <a href="/neovim-docs-web/en/nvim_terminal_emulator#terminal">terminal</a> buffers.</div>
<div class="old-help-para">			<a name="'scrollbind'"></a><code class="help-tag-right">'scrollbind'</code> <a name="'scb'"></a><code class="help-tag">'scb'</code> <a name="'noscrollbind'"></a><code class="help-tag">'noscrollbind'</code> <a name="'noscb'"></a><code class="help-tag">'noscb'</code>
<a href="/neovim-docs-web/en/options#'scrollbind'">'scrollbind'</a> <a href="/neovim-docs-web/en/options#'scb'">'scb'</a>	boolean  (default off)
			local to window
	See also <a href="/neovim-docs-web/en/scroll#scroll-binding">scroll-binding</a>.  When this option is set, the current
	window scrolls as other scrollbind windows (windows that also have
	this option set) scroll.  This option is useful for viewing the
	differences between two versions of a file, see <a href="/neovim-docs-web/en/options#'diff'">'diff'</a>.
	See <a href="/neovim-docs-web/en/options#'scrollopt'">'scrollopt'</a> for options that determine how this option should be
	interpreted.
	This option is mostly reset when splitting a window to edit another
	file.  This means that ":split | edit file" results in two windows
	with scroll-binding, but ":split file" does not.</div>
<div class="old-help-para">						<a name="'scrolljump'"></a><code class="help-tag-right">'scrolljump'</code> <a name="'sj'"></a><code class="help-tag">'sj'</code>
<a href="/neovim-docs-web/en/options#'scrolljump'">'scrolljump'</a> <a href="/neovim-docs-web/en/options#'sj'">'sj'</a>	number	(default 1)
			global
	Minimal number of lines to scroll when the cursor gets off the
	screen (e.g., with "j").  Not used for scroll commands (e.g., <code>CTRL-E</code>,
	<code>CTRL-D</code>).  Useful if your terminal scrolls very slowly.
	When set to a negative number from -1 to -100 this is used as the
	percentage of the window height.  Thus -50 scrolls half the window
	height.</div>
<div class="old-help-para">						<a name="'scrolloff'"></a><code class="help-tag-right">'scrolloff'</code> <a name="'so'"></a><code class="help-tag">'so'</code>
<a href="/neovim-docs-web/en/options#'scrolloff'">'scrolloff'</a> <a href="/neovim-docs-web/en/options#'so'">'so'</a>	number	(default 0)
			global or local to window <a href="/neovim-docs-web/en/options#global-local">global-local</a>
	Minimal number of screen lines to keep above and below the cursor.
	This will make some context visible around where you are working.  If
	you set it to a very large value (999) the cursor line will always be
	in the middle of the window (except at the start or end of the file or
	when long lines wrap).
	After using the local value, go back the global value with one of
	these two:<pre>setlocal scrolloff&lt;
setlocal scrolloff=-1</pre></div>
<div class="old-help-para">	For scrolling horizontally see <a href="/neovim-docs-web/en/options#'sidescrolloff'">'sidescrolloff'</a>.</div>
<div class="old-help-para">						<a name="'scrollopt'"></a><code class="help-tag-right">'scrollopt'</code> <a name="'sbo'"></a><code class="help-tag">'sbo'</code>
<a href="/neovim-docs-web/en/options#'scrollopt'">'scrollopt'</a> <a href="/neovim-docs-web/en/options#'sbo'">'sbo'</a>	string	(default "ver,jump")
			global
	This is a comma-separated list of words that specifies how
	<a href="/neovim-docs-web/en/options#'scrollbind'">'scrollbind'</a> windows should behave.  <a href="/neovim-docs-web/en/options#'sbo'">'sbo'</a> stands for ScrollBind
	Options.
	The following words are available:
	    ver		Bind vertical scrolling for <a href="/neovim-docs-web/en/options#'scrollbind'">'scrollbind'</a> windows
	    hor		Bind horizontal scrolling for <a href="/neovim-docs-web/en/options#'scrollbind'">'scrollbind'</a> windows
	    jump	Applies to the offset between two windows for vertical
			scrolling.  This offset is the difference in the first
			displayed line of the bound windows.  When moving
			around in a window, another <a href="/neovim-docs-web/en/options#'scrollbind'">'scrollbind'</a> window may
			reach a position before the start or after the end of
			the buffer.  The offset is not changed though, when
			moving back the <a href="/neovim-docs-web/en/options#'scrollbind'">'scrollbind'</a> window will try to scroll
			to the desired position when possible.
			When now making that window the current one, two
			things can be done with the relative offset:
			1. When "jump" is not included, the relative offset is
			   adjusted for the scroll position in the new current
			   window.  When going back to the other window, the
			   new relative offset will be used.
			2. When "jump" is included, the other windows are
			   scrolled to keep the same relative offset.  When
			   going back to the other window, it still uses the
			   same relative offset.
	Also see <a href="/neovim-docs-web/en/scroll#scroll-binding">scroll-binding</a>.
	When <a href="/neovim-docs-web/en/options#'diff'">'diff'</a> mode is active there always is vertical scroll binding,
	even when "ver" isn't there.</div>
<div class="old-help-para">						<a name="'sections'"></a><code class="help-tag-right">'sections'</code> <a name="'sect'"></a><code class="help-tag">'sect'</code>
<a href="/neovim-docs-web/en/options#'sections'">'sections'</a> <a href="/neovim-docs-web/en/options#'sect'">'sect'</a>	string	(default "SHNHH HUnhsh")
			global
	Specifies the nroff macros that separate sections.  These are pairs of
	two letters (See <a href="/neovim-docs-web/en/motion#object-motions">object-motions</a>).  The default makes a section start
	at the nroff macros ".SH", ".NH", ".H", ".HU", ".nh" and ".sh".</div>
<div class="old-help-para">						<a name="'selection'"></a><code class="help-tag-right">'selection'</code> <a name="'sel'"></a><code class="help-tag">'sel'</code>
<a href="/neovim-docs-web/en/options#'selection'">'selection'</a> <a href="/neovim-docs-web/en/options#'sel'">'sel'</a>	string	(default "inclusive")
			global
	This option defines the behavior of the selection.  It is only used
	in Visual and Select mode.
	Possible values:
<div class="help-column_heading">	   value	past line     inclusive</div>	   old		   no		yes
	   inclusive	   yes		yes
	   exclusive	   yes		no
	"past line" means that the cursor is allowed to be positioned one
	character past the line.
	"inclusive" means that the last character of the selection is included
	in an operation.  For example, when "x" is used to delete the
	selection.
	When "old" is used and <a href="/neovim-docs-web/en/options#'virtualedit'">'virtualedit'</a> allows the cursor to move past
	the end of line the line break still isn't included.
	Note that when "exclusive" is used and selecting from the end
	backwards, you cannot include the last character of a line, when
	starting in Normal mode and <a href="/neovim-docs-web/en/options#'virtualedit'">'virtualedit'</a> empty.</div>
<div class="old-help-para">	The <a href="/neovim-docs-web/en/options#'selection'">'selection'</a> option is set by the <a href="/neovim-docs-web/en/options#%3Abehave">:behave</a> command.</div>
<div class="old-help-para">						<a name="'selectmode'"></a><code class="help-tag-right">'selectmode'</code> <a name="'slm'"></a><code class="help-tag">'slm'</code>
<a href="/neovim-docs-web/en/options#'selectmode'">'selectmode'</a> <a href="/neovim-docs-web/en/options#'slm'">'slm'</a>	string	(default "")
			global
	This is a comma-separated list of words, which specifies when to start
	Select mode instead of Visual mode, when a selection is started.
	Possible values:
	   mouse	when using the mouse
	   key		when using shifted special keys
	   cmd		when using "v", "V" or <code>CTRL-V</code>
	See <a href="/neovim-docs-web/en/visual#Select-mode">Select-mode</a>.
	The <a href="/neovim-docs-web/en/options#'selectmode'">'selectmode'</a> option is set by the <a href="/neovim-docs-web/en/options#%3Abehave">:behave</a> command.</div>
<div class="old-help-para">						<a name="'sessionoptions'"></a><code class="help-tag-right">'sessionoptions'</code> <a name="'ssop'"></a><code class="help-tag">'ssop'</code>
<a href="/neovim-docs-web/en/options#'sessionoptions'">'sessionoptions'</a> <a href="/neovim-docs-web/en/options#'ssop'">'ssop'</a>	string	(default: "blank,buffers,curdir,folds,
					       help,tabpages,winsize,terminal")
			global
	Changes the effect of the <a href="/neovim-docs-web/en/starting#%3Amksession">:mksession</a> command.  It is a comma-
	separated list of words.  Each word enables saving and restoring
	something:
<div class="help-column_heading">	   word		save and restore</div>	   blank	empty windows
	   buffers	hidden and unloaded buffers, not just those in windows
	   curdir	the current directory
	   folds	manually created folds, opened/closed folds and local
			fold options
	   globals	global variables that start with an uppercase letter
			and contain at least one lowercase letter.  Only
			String and Number types are stored.
	   help		the help window
	   localoptions	options and mappings local to a window or buffer (not
			global values for local options)
	   options	all options and mappings (also global values for local
			options)
	   skiprtp	exclude <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a> and <a href="/neovim-docs-web/en/options#'packpath'">'packpath'</a> from the options
	   resize	size of the Vim window: <a href="/neovim-docs-web/en/options#'lines'">'lines'</a> and <a href="/neovim-docs-web/en/options#'columns'">'columns'</a>
	   sesdir	the directory in which the session file is located
			will become the current directory (useful with
			projects accessed over a network from different
			systems)
	   tabpages	all tab pages; without this only the current tab page
			is restored, so that you can make a session for each
			tab page separately
	   terminal	include terminal windows where the command can be
			restored
	   winpos	position of the whole Vim window
	   winsize	window sizes
	   slash	<a href="/neovim-docs-web/en/deprecated#deprecated">deprecated</a> Always enabled. Uses "/" in filenames.
	   unix		<a href="/neovim-docs-web/en/deprecated#deprecated">deprecated</a> Always enabled. Uses "\n" line endings.</div>
<div class="old-help-para">	Don't include both "curdir" and "sesdir". When neither is included
	filenames are stored as absolute paths.
	If you leave out "options" many things won't work well after restoring
	the session.
				<a name="'shada'"></a><code class="help-tag-right">'shada'</code> <a name="'sd'"></a><code class="help-tag">'sd'</code> <a name="E526"></a><code class="help-tag">E526</code> <a name="E527"></a><code class="help-tag">E527</code> <a name="E528"></a><code class="help-tag">E528</code>
<a href="/neovim-docs-web/en/options#'shada'">'shada'</a> <a href="/neovim-docs-web/en/options#'sd'">'sd'</a>		string	(default for
				   Win32:  !,'100,&lt;50,s10,h,rA:,rB:
				   others: !,'100,&lt;50,s10,h)
			global
	When non-empty, the shada file is read upon startup and written
	when exiting Vim (see <a href="/neovim-docs-web/en/starting#shada-file">shada-file</a>).  The string should be a comma-
	separated list of parameters, each consisting of a single character
	identifying the particular parameter, followed by a number or string
	which specifies the value of that parameter.  If a particular
	character is left out, then the default value is used for that
	parameter.  The following is a list of the identifying characters and
	the effect of their value.
<div class="help-column_heading">	CHAR	VALUE</div>							<a name="shada-%21"></a><code class="help-tag-right">shada-!</code>
	!	When included, save and restore global variables that start
		with an uppercase letter, and don't contain a lowercase
		letter.  Thus "KEEPTHIS and "K_L_M" are stored, but "KeepThis"
		and "_K_L_M" are not.  Nested List and Dict items may not be
		read back correctly, you end up with an empty item.
							<a name="shada-quote"></a><code class="help-tag-right">shada-quote</code>
	"	Maximum number of lines saved for each register.  Old name of
		the '&lt;' item, with the disadvantage that you need to put a
		backslash before the ", otherwise it will be recognized as the
		start of a comment!
							<a name="shada-%25"></a><code class="help-tag-right">shada-%</code>
	%	When included, save and restore the buffer list.  If Vim is
		started with a file name argument, the buffer list is not
		restored.  If Vim is started without a file name argument, the
		buffer list is restored from the shada file.  Quickfix
		(<a href="/neovim-docs-web/en/options#'buftype'">'buftype'</a>), unlisted (<a href="/neovim-docs-web/en/options#'buflisted'">'buflisted'</a>), unnamed and buffers on
		removable media (<a href="/neovim-docs-web/en/options#shada-r">shada-r</a>) are not saved.
		When followed by a number, the number specifies the maximum
		number of buffers that are stored.  Without a number all
		buffers are stored.
							<a name="shada-'"></a><code class="help-tag-right">shada-'</code>
	'	Maximum number of previously edited files for which the marks
		are remembered.  This parameter must always be included when
		<a href="/neovim-docs-web/en/options#'shada'">'shada'</a> is non-empty.
		Including this item also means that the <a href="/neovim-docs-web/en/motion#jumplist">jumplist</a> and the
		<a href="/neovim-docs-web/en/motion#changelist">changelist</a> are stored in the shada file.
							<a name="shada-%2F"></a><code class="help-tag-right">shada-/</code>
	/	Maximum number of items in the search pattern history to be
		saved.  If non-zero, then the previous search and substitute
		patterns are also saved.  When not included, the value of
		<a href="/neovim-docs-web/en/options#'history'">'history'</a> is used.
							<a name="shada-%3A"></a><code class="help-tag-right">shada-:</code>
	:	Maximum number of items in the command-line history to be
		saved.  When not included, the value of <a href="/neovim-docs-web/en/options#'history'">'history'</a> is used.
							<a name="shada-%3C"></a><code class="help-tag-right">shada-&lt;</code>
	&lt;	Maximum number of lines saved for each register.  If zero then
		registers are not saved.  When not included, all lines are
		saved.  '"' is the old name for this item.
		Also see the 's' item below: limit specified in KiB.
							<a name="shada-%40"></a><code class="help-tag-right">shada-@</code>
	@	Maximum number of items in the input-line history to be
		saved.  When not included, the value of <a href="/neovim-docs-web/en/options#'history'">'history'</a> is used.
							<a name="shada-c"></a><code class="help-tag-right">shada-c</code>
	c	Dummy option, kept for compatibility reasons.  Has no actual
		effect: ShaDa always uses UTF-8 and <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> value is fixed
		to UTF-8 as well.
							<a name="shada-f"></a><code class="help-tag-right">shada-f</code>
	f	Whether file marks need to be stored.  If zero, file marks ('0
		to '9, 'A to 'Z) are not stored.  When not present or when
		non-zero, they are all stored.  '0 is used for the current
		cursor position (when exiting or when doing <a href="/neovim-docs-web/en/starting#%3Awshada">:wshada</a>).
							<a name="shada-h"></a><code class="help-tag-right">shada-h</code>
	h	Disable the effect of <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a> when loading the shada
		file.  When not included, it depends on whether ":nohlsearch"
		has been used since the last search command.
							<a name="shada-n"></a><code class="help-tag-right">shada-n</code>
	n	Name of the shada file.  The name must immediately follow
		the 'n'.  Must be at the end of the option!  If the
		<a href="/neovim-docs-web/en/options#'shadafile'">'shadafile'</a> option is set, that file name overrides the one
		given here with <a href="/neovim-docs-web/en/options#'shada'">'shada'</a>.  Environment variables are
		expanded when opening the file, not when setting the option.
							<a name="shada-r"></a><code class="help-tag-right">shada-r</code>
	r	Removable media.  The argument is a string (up to the next
		',').  This parameter can be given several times.  Each
		specifies the start of a path for which no marks will be
		stored.  This is to avoid removable media.  For Windows you
		could use "ra:,rb:".  You can also use it for temp files,
		e.g., for Unix: "r/tmp".  Case is ignored.
							<a name="shada-s"></a><code class="help-tag-right">shada-s</code>
	s	Maximum size of an item contents in KiB.  If zero then nothing
		is saved.  Unlike Vim this applies to all items, except for
		the buffer list and header.  Full item size is off by three
		unsigned integers: with <code>s10</code> maximum item size may be 1 byte
		(type: 7-bit integer) + 9 bytes (timestamp: up to 64-bit
		integer) + 3 bytes (item size: up to 16-bit integer because
		2^8 &lt; 10240 &lt; 2^16) + 10240 bytes (requested maximum item
		contents size) = 10253 bytes.</div>
<div class="old-help-para">	Example:<pre>:set shada='50,&lt;1000,s100,:0,n~/nvim/shada</pre></div>
<div class="old-help-para">	'50		Marks will be remembered for the last 50 files you
			edited.
	&lt;1000		Contents of registers (up to 1000 lines each) will be
			remembered.
	s100		Items with contents occupying more then 100 KiB are
			skipped.
	:0		Command-line history will not be saved.
	n~/nvim/shada	The name of the file to use is "~/nvim/shada".
	no /		Since '/' is not specified, the default will be used,
			that is, save all of the search history, and also the
			previous search and substitute patterns.
	no %		The buffer list will not be saved nor read back.
	no h		<a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a> highlighting will be restored.</div>
<div class="old-help-para">	When setting <a href="/neovim-docs-web/en/options#'shada'">'shada'</a> from an empty value you can use <a href="/neovim-docs-web/en/starting#%3Arshada">:rshada</a> to
	load the contents of the file, this is not done automatically.</div>
<div class="old-help-para">	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">				<a name="'shadafile'"></a><code class="help-tag-right">'shadafile'</code> <a name="'sdf'"></a><code class="help-tag">'sdf'</code>
<a href="/neovim-docs-web/en/options#'shadafile'">'shadafile'</a> <a href="/neovim-docs-web/en/options#'sdf'">'sdf'</a>	string	(default: "")
			global
	When non-empty, overrides the file name used for <a href="/neovim-docs-web/en/starting#shada">shada</a> (viminfo).
	When equal to "NONE" no shada file will be read or written.
	This option can be set with the <a href="/neovim-docs-web/en/starting#-i">-i</a> command line flag.  The <a href="/neovim-docs-web/en/starting#--clean">--clean</a>
	command line flag sets it to "NONE".
	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">						<a name="'shell'"></a><code class="help-tag-right">'shell'</code> <a name="'sh'"></a><code class="help-tag">'sh'</code> <a name="E91"></a><code class="help-tag">E91</code>
<a href="/neovim-docs-web/en/options#'shell'">'shell'</a> <a href="/neovim-docs-web/en/options#'sh'">'sh'</a>		string	(default $SHELL or "sh", Win32: "cmd.exe")
			global
	Name of the shell to use for ! and :! commands.  When changing the
	value also check these options: <a href="/neovim-docs-web/en/options#'shellpipe'">'shellpipe'</a>, <a href="/neovim-docs-web/en/options#'shellslash'">'shellslash'</a>
	<a href="/neovim-docs-web/en/options#'shellredir'">'shellredir'</a>, <a href="/neovim-docs-web/en/options#'shellquote'">'shellquote'</a>, <a href="/neovim-docs-web/en/options#'shellxquote'">'shellxquote'</a> and <a href="/neovim-docs-web/en/options#'shellcmdflag'">'shellcmdflag'</a>.
	It is allowed to give an argument to the command, e.g.  "csh -f".
	See <a href="/neovim-docs-web/en/options#option-backslash">option-backslash</a> about including spaces and backslashes.
	Environment variables are expanded <a href="/neovim-docs-web/en/options#%3Aset_env">:set_env</a>.</div>
<div class="old-help-para">	If the name of the shell contains a space, you need to enclose it in
	quotes.  Example with quotes:<pre>:set shell=\"c:\program\ files\unix\sh.exe\"\ -f</pre></div>
<div class="old-help-para">	Note the backslash before each quote (to avoid starting a comment) and
	each space (to avoid ending the option value), so better use <a href="/neovim-docs-web/en/eval#%3Alet-%26">:let-&amp;</a>
	like this:<pre>:let &amp;shell='"C:\Program Files\unix\sh.exe" -f'</pre></div>
<div class="old-help-para">	Also note that the "-f" is not inside the quotes, because it is not
	part of the command name.
							<a name="shell-unquoting"></a><code class="help-tag-right">shell-unquoting</code>
	Rules regarding quotes:
	1. Option is split on space and tab characters that are not inside
	   quotes: "abc def" runs shell named "abc" with additional argument
	   "def", '"abc def"' runs shell named "abc def" with no additional
	   arguments (here and below: additional means ???additional to
	   <a href="/neovim-docs-web/en/options#'shellcmdflag'">'shellcmdflag'</a>???).
	2. Quotes in option may be present in any position and any number:
	   '"abc"', '"a"bc', 'a"b"c', 'ab"c"' and '"a"b"c"' are all equivalent
	   to just "abc".
	3. Inside quotes backslash preceding backslash means one backslash.
	   Backslash preceding quote means one quote. Backslash preceding
	   anything else means backslash and next character literally:
	   '"a\\b"' is the same as "a\b", '"a\\"b"' runs shell named literally
	   'a"b', '"a\b"' is the same as "a\b" again.
	4. Outside of quotes backslash always means itself, it cannot be used
	   to escape quote: 'a\"b"' is the same as "a\b".
	Note that such processing is done after <a href="/neovim-docs-web/en/options#%3Aset">:set</a> did its own round of
	unescaping, so to keep yourself sane use <a href="/neovim-docs-web/en/eval#%3Alet-%26">:let-&amp;</a> like shown above.
							<a name="shell-powershell"></a><code class="help-tag-right">shell-powershell</code>
	To use PowerShell:<pre>let &amp;shell = executable('pwsh') ? 'pwsh' : 'powershell'
let &amp;shellcmdflag = '-NoLogo -NoProfile -ExecutionPolicy RemoteSigned -Command [Console]::InputEncoding=[Console]::OutputEncoding=[System.Text.Encoding]::UTF8;'
let &amp;shellredir = '2&gt;&amp;1 | Out-File -Encoding UTF8 %s; exit $LastExitCode'
let &amp;shellpipe = '2&gt;&amp;1 | Out-File -Encoding UTF8 %s; exit $LastExitCode'
set shellquote= shellxquote=</pre></div>
<div class="old-help-para">	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">						<a name="'shellcmdflag'"></a><code class="help-tag-right">'shellcmdflag'</code> <a name="'shcf'"></a><code class="help-tag">'shcf'</code>
<a href="/neovim-docs-web/en/options#'shellcmdflag'">'shellcmdflag'</a> <a href="/neovim-docs-web/en/options#'shcf'">'shcf'</a>	string	(default: "-c"; Windows: "/s /c")
			global
	Flag passed to the shell to execute "!" and ":!" commands; e.g.,
	<code>bash.exe -c ls</code> or <code>cmd.exe /s /c "dir"</code>.  For MS-Windows, the
	default is set according to the value of <a href="/neovim-docs-web/en/options#'shell'">'shell'</a>, to reduce the need
	to set this option by the user.
	On Unix it can have more than one flag.  Each white space separated
	part is passed as an argument to the shell command.
	See <a href="/neovim-docs-web/en/options#option-backslash">option-backslash</a> about including spaces and backslashes.
	See <a href="/neovim-docs-web/en/options#shell-unquoting">shell-unquoting</a> which talks about separating this option into
	multiple arguments.
	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">						<a name="'shellpipe'"></a><code class="help-tag-right">'shellpipe'</code> <a name="'sp'"></a><code class="help-tag">'sp'</code>
<a href="/neovim-docs-web/en/options#'shellpipe'">'shellpipe'</a> <a href="/neovim-docs-web/en/options#'sp'">'sp'</a>	string	(default "&gt;", "&gt;%s 2&gt;&amp;1", "| tee", "|&amp; tee" or
				 "2&gt;&amp;1| tee")
			global
	String to be used to put the output of the ":make" command in the
	error file.  See also <a href="/neovim-docs-web/en/quickfix#%3Amake_makeprg">:make_makeprg</a>.  See <a href="/neovim-docs-web/en/options#option-backslash">option-backslash</a> about
	including spaces and backslashes.
	The name of the temporary file can be represented by "%s" if necessary
	(the file name is appended automatically if no %s appears in the value
	of this option).
	For MS-Windows the default is "&gt;%s 2&gt;&amp;1".  The output is directly
	saved in a file and not echoed to the screen.
	For Unix the default is "| tee".  The stdout of the compiler is saved
	in a file and echoed to the screen.  If the <a href="/neovim-docs-web/en/options#'shell'">'shell'</a> option is "csh" or
	"tcsh" after initializations, the default becomes "|&amp; tee".  If the
	<a href="/neovim-docs-web/en/options#'shell'">'shell'</a> option is "sh", "ksh", "mksh", "pdksh", "zsh", "zsh-beta",
	"bash", "fish", "ash" or "dash" the default becomes "2&gt;&amp;1| tee".  This
	means that stderr is also included.  Before using the <a href="/neovim-docs-web/en/options#'shell'">'shell'</a> option a
	path is removed, thus "/bin/sh" uses "sh".
	The initialization of this option is done after reading the vimrc
	and the other initializations, so that when the <a href="/neovim-docs-web/en/options#'shell'">'shell'</a> option is set
	there, the <a href="/neovim-docs-web/en/options#'shellpipe'">'shellpipe'</a> option changes automatically, unless it was
	explicitly set before.
	When <a href="/neovim-docs-web/en/options#'shellpipe'">'shellpipe'</a> is set to an empty string, no redirection of the
	":make" output will be done.  This is useful if you use a <a href="/neovim-docs-web/en/options#'makeprg'">'makeprg'</a>
	that writes to <a href="/neovim-docs-web/en/options#'makeef'">'makeef'</a> by itself.  If you want no piping, but do
	want to include the <a href="/neovim-docs-web/en/options#'makeef'">'makeef'</a>, set <a href="/neovim-docs-web/en/options#'shellpipe'">'shellpipe'</a> to a single space.
	Don't forget to precede the space with a backslash: ":set sp=\ ".
	In the future pipes may be used for filtering and this option will
	become obsolete (at least for Unix).
	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">						<a name="'shellquote'"></a><code class="help-tag-right">'shellquote'</code> <a name="'shq'"></a><code class="help-tag">'shq'</code>
<a href="/neovim-docs-web/en/options#'shellquote'">'shellquote'</a> <a href="/neovim-docs-web/en/options#'shq'">'shq'</a>	string	(default: ""; Windows, when <a href="/neovim-docs-web/en/options#'shell'">'shell'</a>
					contains "sh" somewhere: "\"")
			global
	Quoting character(s), put around the command passed to the shell, for
	the "!" and ":!" commands.  The redirection is kept outside of the
	quoting.  See <a href="/neovim-docs-web/en/options#'shellxquote'">'shellxquote'</a> to include the redirection.  It's
	probably not useful to set both options.
	This is an empty string by default.  Only known to be useful for
	third-party shells on Windows systems, such as the MKS Korn Shell
	or bash, where it should be "\"".  The default is adjusted according
	the value of <a href="/neovim-docs-web/en/options#'shell'">'shell'</a>, to reduce the need to set this option by the
	user.
	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">						<a name="'shellredir'"></a><code class="help-tag-right">'shellredir'</code> <a name="'srr'"></a><code class="help-tag">'srr'</code>
<a href="/neovim-docs-web/en/options#'shellredir'">'shellredir'</a> <a href="/neovim-docs-web/en/options#'srr'">'srr'</a>	string	(default "&gt;", "&gt;&amp;" or "&gt;%s 2&gt;&amp;1")
			global
	String to be used to put the output of a filter command in a temporary
	file.  See also <a href="/neovim-docs-web/en/various#%3A%21">:!</a>.  See <a href="/neovim-docs-web/en/options#option-backslash">option-backslash</a> about including spaces
	and backslashes.
	The name of the temporary file can be represented by "%s" if necessary
	(the file name is appended automatically if no %s appears in the value
	of this option).
	The default is "&gt;".  For Unix, if the <a href="/neovim-docs-web/en/options#'shell'">'shell'</a> option is "csh" or
	"tcsh" during initializations, the default becomes "&gt;&amp;".  If the
	<a href="/neovim-docs-web/en/options#'shell'">'shell'</a> option is "sh", "ksh", "mksh", "pdksh", "zsh", "zsh-beta",
	"bash" or "fish", the default becomes "&gt;%s 2&gt;&amp;1".  This means that
	stderr is also included.  For Win32, the Unix checks are done and
	additionally "cmd" is checked for, which makes the default "&gt;%s 2&gt;&amp;1".
	Also, the same names with ".exe" appended are checked for.
	The initialization of this option is done after reading the vimrc
	and the other initializations, so that when the <a href="/neovim-docs-web/en/options#'shell'">'shell'</a> option is set
	there, the <a href="/neovim-docs-web/en/options#'shellredir'">'shellredir'</a> option changes automatically unless it was
	explicitly set before.
	In the future pipes may be used for filtering and this option will
	become obsolete (at least for Unix).
	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">			<a name="'shellslash'"></a><code class="help-tag-right">'shellslash'</code> <a name="'ssl'"></a><code class="help-tag">'ssl'</code> <a name="'noshellslash'"></a><code class="help-tag">'noshellslash'</code> <a name="'nossl'"></a><code class="help-tag">'nossl'</code>
<a href="/neovim-docs-web/en/options#'shellslash'">'shellslash'</a> <a href="/neovim-docs-web/en/options#'ssl'">'ssl'</a>	boolean	(default off)
			global
			<code>{only for MS-Windows}</code>
	When set, a forward slash is used when expanding file names.  This is
	useful when a Unix-like shell is used instead of cmd.exe.  Backward
	slashes can still be typed, but they are changed to forward slashes by
	Vim.
	Note that setting or resetting this option has no effect for some
	existing file names, thus this option needs to be set before opening
	any file for best results.  This might change in the future.
	<a href="/neovim-docs-web/en/options#'shellslash'">'shellslash'</a> only works when a backslash can be used as a path
	separator.  To test if this is so use:<pre>if exists('+shellslash')</pre></div>
<div class="old-help-para">	Also see <a href="/neovim-docs-web/en/options#'completeslash'">'completeslash'</a>.</div>
<div class="old-help-para">			<a name="'shelltemp'"></a><code class="help-tag-right">'shelltemp'</code> <a name="'stmp'"></a><code class="help-tag">'stmp'</code> <a name="'noshelltemp'"></a><code class="help-tag">'noshelltemp'</code> <a name="'nostmp'"></a><code class="help-tag">'nostmp'</code>
<a href="/neovim-docs-web/en/options#'shelltemp'">'shelltemp'</a> <a href="/neovim-docs-web/en/options#'stmp'">'stmp'</a>	boolean	(default on)
			global
	When on, use temp files for shell commands.  When off use a pipe.
	When using a pipe is not possible temp files are used anyway.
	The advantage of using a pipe is that nobody can read the temp file
	and the <a href="/neovim-docs-web/en/options#'shell'">'shell'</a> command does not need to support redirection.
	The advantage of using a temp file is that the file type and encoding
	can be detected.
	The <a href="/neovim-docs-web/en/autocmd#FilterReadPre">FilterReadPre</a>, <a href="/neovim-docs-web/en/autocmd#FilterReadPost">FilterReadPost</a> and <a href="/neovim-docs-web/en/autocmd#FilterWritePre">FilterWritePre</a>,
	<a href="/neovim-docs-web/en/autocmd#FilterWritePost">FilterWritePost</a> autocommands event are not triggered when
	<a href="/neovim-docs-web/en/options#'shelltemp'">'shelltemp'</a> is off.
	<a href="/neovim-docs-web/en/builtin#system()">system()</a> does not respect this option, it always uses pipes.</div>
<div class="old-help-para">						<a name="'shellxescape'"></a><code class="help-tag-right">'shellxescape'</code> <a name="'sxe'"></a><code class="help-tag">'sxe'</code>
<a href="/neovim-docs-web/en/options#'shellxescape'">'shellxescape'</a> <a href="/neovim-docs-web/en/options#'sxe'">'sxe'</a>	string	(default: "")
			global
	When <a href="/neovim-docs-web/en/options#'shellxquote'">'shellxquote'</a> is set to "(" then the characters listed in this
	option will be escaped with a '^' character.  This makes it possible
	to execute most external commands with cmd.exe.</div>
<div class="old-help-para">						<a name="'shellxquote'"></a><code class="help-tag-right">'shellxquote'</code> <a name="'sxq'"></a><code class="help-tag">'sxq'</code>
<a href="/neovim-docs-web/en/options#'shellxquote'">'shellxquote'</a> <a href="/neovim-docs-web/en/options#'sxq'">'sxq'</a>	string	(default: "", Windows: "\"")
			global
	Quoting character(s), put around the command passed to the shell, for
	the "!" and ":!" commands.  Includes the redirection.  See
	<a href="/neovim-docs-web/en/options#'shellquote'">'shellquote'</a> to exclude the redirection.  It's probably not useful
	to set both options.
	When the value is '(' then ')' is appended. When the value is '"('
	then ')"' is appended.
	When the value is '(' then also see <a href="/neovim-docs-web/en/options#'shellxescape'">'shellxescape'</a>.
	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">			<a name="'shiftround'"></a><code class="help-tag-right">'shiftround'</code> <a name="'sr'"></a><code class="help-tag">'sr'</code> <a name="'noshiftround'"></a><code class="help-tag">'noshiftround'</code> <a name="'nosr'"></a><code class="help-tag">'nosr'</code>
<a href="/neovim-docs-web/en/options#'shiftround'">'shiftround'</a> <a href="/neovim-docs-web/en/options#'sr'">'sr'</a>	boolean	(default off)
			global
	Round indent to multiple of <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a>.  Applies to &gt; and &lt;
	commands.  <code>CTRL-T</code> and <code>CTRL-D</code> in Insert mode always round the indent to
	a multiple of <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> (this is Vi compatible).</div>
<div class="old-help-para">						<a name="'shiftwidth'"></a><code class="help-tag-right">'shiftwidth'</code> <a name="'sw'"></a><code class="help-tag">'sw'</code>
<a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> <a href="/neovim-docs-web/en/options#'sw'">'sw'</a>	number	(default 8)
			local to buffer
	Number of spaces to use for each step of (auto)indent.  Used for
	<a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a>, <a href="/neovim-docs-web/en/change#%3E%3E">&gt;&gt;</a>, <a href="/neovim-docs-web/en/change#%3C%3C">&lt;&lt;</a>, etc.
	When zero the <a href="/neovim-docs-web/en/options#'ts'">'ts'</a> value will be used.  Use the <a href="/neovim-docs-web/en/builtin#shiftwidth()">shiftwidth()</a>
	function to get the effective shiftwidth value.</div>
<div class="old-help-para">						<a name="'shortmess'"></a><code class="help-tag-right">'shortmess'</code> <a name="'shm'"></a><code class="help-tag">'shm'</code>
<a href="/neovim-docs-web/en/options#'shortmess'">'shortmess'</a> <a href="/neovim-docs-web/en/options#'shm'">'shm'</a>	string	(default "filnxtToOF")
			global
	This option helps to avoid all the <a href="/neovim-docs-web/en/message#hit-enter">hit-enter</a> prompts caused by file
	messages, for example  with <code>CTRL-G</code>, and to avoid some other messages.
	It is a list of flags:
<div class="help-column_heading">	 flag	meaning when present</div>	  f	use "(3 of 5)" instead of "(file 3 of 5)"
	  i	use "[noeol]" instead of "[Incomplete last line]"
	  l	use "999L, 888B" instead of "999 lines, 888 bytes"
	  m	use "[+]" instead of "[Modified]"
	  n	use "[New]" instead of "[New File]"
	  r	use "[RO]" instead of "[readonly]"
	  w	use "[w]" instead of "written" for file write message
		and "[a]" instead of "appended" for ':w &gt;&gt; file' command
	  x	use "[dos]" instead of "[dos format]", "[unix]" instead of
		"[unix format]" and "[mac]" instead of "[mac format]".
	  a	all of the above abbreviations</div>
<div class="old-help-para">	  o	overwrite message for writing a file with subsequent message
		for reading a file (useful for ":wn" or when <a href="/neovim-docs-web/en/options#'autowrite'">'autowrite'</a> on)
	  O	message for reading a file overwrites any previous message.
		Also for quickfix message (e.g., ":cn").
	  s	don't give "search hit BOTTOM, continuing at TOP" or "search
		hit TOP, continuing at BOTTOM" messages; when using the search
		count do not show "W" after the count message (see S below)
	  t	truncate file message at the start if it is too long to fit
		on the command-line, "&lt;" will appear in the left most column.
		Ignored in Ex mode.
	  T	truncate other messages in the middle if they are too long to
		fit on the command line.  "..." will appear in the middle.
		Ignored in Ex mode.
	  W	don't give "written" or "[w]" when writing a file
	  A	don't give the "ATTENTION" message when an existing swap file
		is found.
	  I	don't give the intro message when starting Vim <a href="/neovim-docs-web/en/starting#%3Aintro">:intro</a>.
	  c	don't give <a href="/neovim-docs-web/en/insert#ins-completion-menu">ins-completion-menu</a> messages.  For example,
		"-- XXX completion (YYY)", "match 1 of 2", "The only match",
		"Pattern not found", "Back at original", etc.
	  C	don't give messages while scanning for ins-completion items,
		for instance "scanning tags"
	  q	use "recording" instead of "recording @a"
	  F	don't give the file info when editing a file, like <code>:silent</code>
		was used for the command
	  S     do not show search count message when searching, e.g.
	        "[1/5]"</div>
<div class="old-help-para">	This gives you the opportunity to avoid that a change between buffers
	requires you to hit <code>&lt;Enter&gt;</code>, but still gives as useful a message as
	possible for the space available.  To get the whole message that you
	would have got with <a href="/neovim-docs-web/en/options#'shm'">'shm'</a> empty, use ":file!"
	Useful values:
	    shm=	No abbreviation of message.
	    shm=a	Abbreviation, but no loss of information.
	    shm=at	Abbreviation, and truncate message when necessary.</div>
<div class="old-help-para">						<a name="'showbreak'"></a><code class="help-tag-right">'showbreak'</code> <a name="'sbr'"></a><code class="help-tag">'sbr'</code> <a name="E595"></a><code class="help-tag">E595</code>
<a href="/neovim-docs-web/en/options#'showbreak'">'showbreak'</a> <a href="/neovim-docs-web/en/options#'sbr'">'sbr'</a>	string	(default "")
			global or local to window <a href="/neovim-docs-web/en/options#global-local">global-local</a>
	String to put at the start of lines that have been wrapped.  Useful
	values are "&gt; " or "+++ ":<pre>:set showbreak=&gt;\</pre></div>
<div class="old-help-para">	Note the backslash to escape the trailing space.  It's easier like
	this:<pre>:let &amp;showbreak = '+++ '</pre></div>
<div class="old-help-para">	Only printable single-cell characters are allowed, excluding <code>&lt;Tab&gt;</code> and
	comma (in a future version the comma might be used to separate the
	part that is shown at the end and at the start of a line).
	The <a href="/neovim-docs-web/en/syntax#hl-NonText">hl-NonText</a> highlight group determines the highlighting.
	Note that tabs after the showbreak will be displayed differently.
	If you want the <a href="/neovim-docs-web/en/options#'showbreak'">'showbreak'</a> to appear in between line numbers, add the
	"n" flag to <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a>.
	A window-local value overrules a global value.  If the global value is
	set and you want no value in the current window use NONE:<pre>:setlocal showbreak=NONE</pre></div>
<div class="old-help-para">				     <a name="'showcmd'"></a><code class="help-tag-right">'showcmd'</code> <a name="'sc'"></a><code class="help-tag">'sc'</code> <a name="'noshowcmd'"></a><code class="help-tag">'noshowcmd'</code> <a name="'nosc'"></a><code class="help-tag">'nosc'</code>
<a href="/neovim-docs-web/en/options#'showcmd'">'showcmd'</a> <a href="/neovim-docs-web/en/options#'sc'">'sc'</a>		boolean	(default: on)
			global
	Show (partial) command in the last line of the screen.  Set this
	option off if your terminal is slow.
	The option has no effect when <a href="/neovim-docs-web/en/options#'cmdheight'">'cmdheight'</a> is zero.
	In Visual mode the size of the selected area is shown:
<div class="help-li" style=""> When selecting characters within a line, the number of characters.
	  If the number of bytes is different it is also displayed: "2-6"
	  means two characters and six bytes.
</div><div class="help-li" style=""> When selecting more than one line, the number of lines.
</div><div class="help-li" style=""> When selecting a block, the size in screen characters:
	  <code>{lines}</code>x{columns}.
</div></div>
<div class="old-help-para">			<a name="'showfulltag'"></a><code class="help-tag-right">'showfulltag'</code> <a name="'sft'"></a><code class="help-tag">'sft'</code> <a name="'noshowfulltag'"></a><code class="help-tag">'noshowfulltag'</code> <a name="'nosft'"></a><code class="help-tag">'nosft'</code>
<a href="/neovim-docs-web/en/options#'showfulltag'">'showfulltag'</a> <a href="/neovim-docs-web/en/options#'sft'">'sft'</a>	boolean (default off)
			global
	When completing a word in insert mode (see <a href="/neovim-docs-web/en/insert#ins-completion">ins-completion</a>) from the
	tags file, show both the tag name and a tidied-up form of the search
	pattern (if there is one) as possible matches.  Thus, if you have
	matched a C function, you can see a template for what arguments are
	required (coding style permitting).
	Note that this doesn't work well together with having "longest" in
	<a href="/neovim-docs-web/en/options#'completeopt'">'completeopt'</a>, because the completion from the search pattern may not
	match the typed text.</div>
<div class="old-help-para">				 <a name="'showmatch'"></a><code class="help-tag-right">'showmatch'</code> <a name="'sm'"></a><code class="help-tag">'sm'</code> <a name="'noshowmatch'"></a><code class="help-tag">'noshowmatch'</code> <a name="'nosm'"></a><code class="help-tag">'nosm'</code>
<a href="/neovim-docs-web/en/options#'showmatch'">'showmatch'</a> <a href="/neovim-docs-web/en/options#'sm'">'sm'</a>	boolean	(default off)
			global
	When a bracket is inserted, briefly jump to the matching one.  The
	jump is only done if the match can be seen on the screen.  The time to
	show the match can be set with <a href="/neovim-docs-web/en/options#'matchtime'">'matchtime'</a>.
	A Beep is given if there is no match (no matter if the match can be
	seen or not).
	This option is reset when <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> is set and restored when <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> is
	reset.
	When the 'm' flag is not included in <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a>, typing a character
	will immediately move the cursor back to where it belongs.
	See the "sm" field in <a href="/neovim-docs-web/en/options#'guicursor'">'guicursor'</a> for setting the cursor shape and
	blinking when showing the match.
	The <a href="/neovim-docs-web/en/options#'matchpairs'">'matchpairs'</a> option can be used to specify the characters to show
	matches for.  <a href="/neovim-docs-web/en/options#'rightleft'">'rightleft'</a> and <a href="/neovim-docs-web/en/options#'revins'">'revins'</a> are used to look for opposite
	matches.
	Also see the matchparen plugin for highlighting the match when moving
	around <a href="/neovim-docs-web/en/pi_paren#pi_paren.txt">pi_paren.txt</a>.
	Note: Use of the short form is rated PG.</div>
<div class="old-help-para">				 <a name="'showmode'"></a><code class="help-tag-right">'showmode'</code> <a name="'smd'"></a><code class="help-tag">'smd'</code> <a name="'noshowmode'"></a><code class="help-tag">'noshowmode'</code> <a name="'nosmd'"></a><code class="help-tag">'nosmd'</code>
<a href="/neovim-docs-web/en/options#'showmode'">'showmode'</a> <a href="/neovim-docs-web/en/options#'smd'">'smd'</a>	boolean	(default: on)
			global
	If in Insert, Replace or Visual mode put a message on the last line.
	The <a href="/neovim-docs-web/en/syntax#hl-ModeMsg">hl-ModeMsg</a> highlight group determines the highlighting.
	The option has no effect when <a href="/neovim-docs-web/en/options#'cmdheight'">'cmdheight'</a> is zero.</div>
<div class="old-help-para">						<a name="'showtabline'"></a><code class="help-tag-right">'showtabline'</code> <a name="'stal'"></a><code class="help-tag">'stal'</code>
<a href="/neovim-docs-web/en/options#'showtabline'">'showtabline'</a> <a href="/neovim-docs-web/en/options#'stal'">'stal'</a>	number	(default 1)
			global
	The value of this option specifies when the line with tab page labels
	will be displayed:
		0: never
		1: only if there are at least two tab pages
		2: always
	This is both for the GUI and non-GUI implementation of the tab pages
	line.
	See <a href="/neovim-docs-web/en/tabpage#tab-page">tab-page</a> for more information about tab pages.</div>
<div class="old-help-para">						<a name="'sidescroll'"></a><code class="help-tag-right">'sidescroll'</code> <a name="'ss'"></a><code class="help-tag">'ss'</code>
<a href="/neovim-docs-web/en/options#'sidescroll'">'sidescroll'</a> <a href="/neovim-docs-web/en/options#'ss'">'ss'</a>	number	(default 1)
			global
	The minimal number of columns to scroll horizontally.  Used only when
	the <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> option is off and the cursor is moved off of the screen.
	When it is zero the cursor will be put in the middle of the screen.
	When using a slow terminal set it to a large number or 0.  Not used
	for "zh" and "zl" commands.</div>
<div class="old-help-para">						<a name="'sidescrolloff'"></a><code class="help-tag-right">'sidescrolloff'</code> <a name="'siso'"></a><code class="help-tag">'siso'</code>
<a href="/neovim-docs-web/en/options#'sidescrolloff'">'sidescrolloff'</a> <a href="/neovim-docs-web/en/options#'siso'">'siso'</a>	number (default 0)
			global or local to window <a href="/neovim-docs-web/en/options#global-local">global-local</a>
	The minimal number of screen columns to keep to the left and to the
	right of the cursor if <a href="/neovim-docs-web/en/options#'nowrap'">'nowrap'</a> is set.  Setting this option to a
	value greater than 0 while having <a href="/neovim-docs-web/en/options#'sidescroll'">'sidescroll'</a> also at a non-zero
	value makes some context visible in the line you are scrolling in
	horizontally (except at beginning of the line).  Setting this option
	to a large value (like 999) has the effect of keeping the cursor
	horizontally centered in the window, as long as one does not come too
	close to the beginning of the line.
	After using the local value, go back the global value with one of
	these two:<pre>setlocal sidescrolloff&lt;
setlocal sidescrolloff=-1</pre></div>
<div class="old-help-para">	Example: Try this together with <a href="/neovim-docs-web/en/options#'sidescroll'">'sidescroll'</a> and <a href="/neovim-docs-web/en/options#'listchars'">'listchars'</a> as
		 in the following example to never allow the cursor to move
		 onto the "extends" character:<pre>:set nowrap sidescroll=1 listchars=extends:&gt;,precedes:&lt;
:set sidescrolloff=1</pre></div>
<div class="old-help-para">						<a name="'signcolumn'"></a><code class="help-tag-right">'signcolumn'</code> <a name="'scl'"></a><code class="help-tag">'scl'</code>
<a href="/neovim-docs-web/en/options#'signcolumn'">'signcolumn'</a> <a href="/neovim-docs-web/en/options#'scl'">'scl'</a>	string	(default "auto")
			local to window
	When and how to draw the signcolumn. Valid values are:
	   "auto"   	only when there is a sign to display
	   "auto:[1-9]" resize to accommodate multiple signs up to the
	                given number (maximum 9), e.g. "auto:4"
	   "auto:[1-8]-[2-9]"
	                resize to accommodate multiple signs up to the
			given maximum number (maximum 9) while keeping
			at least the given minimum (maximum 8) fixed
			space. The minimum number should always be less
			than the maximum number, e.g. "auto:2-5"
	   "no"	    	never
	   "yes"    	always
	   "yes:[1-9]"  always, with fixed space for signs up to the given
	                number (maximum 9), e.g. "yes:3"
	   "number"	display signs in the <a href="/neovim-docs-web/en/options#'number'">'number'</a> column. If the number
			column is not present, then behaves like "auto".</div>
<div class="old-help-para">	Note regarding "orphaned signs": with signcolumn numbers higher than
	1, deleting lines will also remove the associated signs automatically,
	in contrast to the default Vim behavior of keeping and grouping them.
	This is done in order for the signcolumn appearance not appear weird
	during line deletion.</div>
<div class="old-help-para">			<a name="'smartcase'"></a><code class="help-tag-right">'smartcase'</code> <a name="'scs'"></a><code class="help-tag">'scs'</code> <a name="'nosmartcase'"></a><code class="help-tag">'nosmartcase'</code> <a name="'noscs'"></a><code class="help-tag">'noscs'</code>
<a href="/neovim-docs-web/en/options#'smartcase'">'smartcase'</a> <a href="/neovim-docs-web/en/options#'scs'">'scs'</a>	boolean	(default off)
			global
	Override the <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> option if the search pattern contains upper
	case characters.  Only used when the search pattern is typed and
	<a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> option is on.  Used for the commands "/", "?", "n", "N",
	":g" and ":s".  Not used for "*", "#", "gd", tag search, etc.  After
	"*" and "#" you can make <a href="/neovim-docs-web/en/options#'smartcase'">'smartcase'</a> used by doing a "/" command,
	recalling the search pattern from history and hitting <code>&lt;Enter&gt;</code>.</div>
<div class="old-help-para">			     <a name="'smartindent'"></a><code class="help-tag-right">'smartindent'</code> <a name="'si'"></a><code class="help-tag">'si'</code> <a name="'nosmartindent'"></a><code class="help-tag">'nosmartindent'</code> <a name="'nosi'"></a><code class="help-tag">'nosi'</code>
<a href="/neovim-docs-web/en/options#'smartindent'">'smartindent'</a> <a href="/neovim-docs-web/en/options#'si'">'si'</a>	boolean	(default off)
			local to buffer
	Do smart autoindenting when starting a new line.  Works for C-like
	programs, but can also be used for other languages.  <a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a> does
	something like this, works better in most cases, but is more strict,
	see <a href="/neovim-docs-web/en/indent#C-indenting">C-indenting</a>.  When <a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a> is on or <a href="/neovim-docs-web/en/options#'indentexpr'">'indentexpr'</a> is set,
	setting <a href="/neovim-docs-web/en/options#'si'">'si'</a> has no effect.  <a href="/neovim-docs-web/en/options#'indentexpr'">'indentexpr'</a> is a more advanced
	alternative.
	Normally <a href="/neovim-docs-web/en/options#'autoindent'">'autoindent'</a> should also be on when using <a href="/neovim-docs-web/en/options#'smartindent'">'smartindent'</a>.
	An indent is automatically inserted:
<div class="help-li" style=""> After a line ending in '{
'.</div><div class="help-li" style=""> After a line starting with a keyword from <a href="/neovim-docs-web/en/options#'cinwords'">'cinwords'</a>.
</div><div class="help-li" style=""> Before a line starting with '}' (only with the "O" command).
	When typing '}' as the first character in a new line, that line is
	given the same indent as the matching '{'.
	When typing '#' as the first character in a new line, the indent for
	that line is removed, the '#' is put in the first column.  The indent
	is restored for the next line.  If you don't want this, use this
	mapping: ":inoremap # X^H#", where ^H is entered with <code>CTRL-V</code> <code>CTRL-H</code>.
	When using the "&gt;&gt;" command, lines starting with '#' are not shifted
	right.
	This option is reset when <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> is set and restored when <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> is
	reset.
</div></div>
<div class="old-help-para">				 <a name="'smarttab'"></a><code class="help-tag-right">'smarttab'</code> <a name="'sta'"></a><code class="help-tag">'sta'</code> <a name="'nosmarttab'"></a><code class="help-tag">'nosmarttab'</code> <a name="'nosta'"></a><code class="help-tag">'nosta'</code>
<a href="/neovim-docs-web/en/options#'smarttab'">'smarttab'</a> <a href="/neovim-docs-web/en/options#'sta'">'sta'</a>	boolean	(default on)
			global
	When on, a <code>&lt;Tab&gt;</code> in front of a line inserts blanks according to
	<a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a>.  <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> or <a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a> is used in other places.  A
	<code>&lt;BS&gt;</code> will delete a <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> worth of space at the start of the
	line.
	When off, a <code>&lt;Tab&gt;</code> always inserts blanks according to <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> or
	<a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a>.  <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> is only used for shifting text left or
	right <a href="/neovim-docs-web/en/change#shift-left-right">shift-left-right</a>.
	What gets inserted (a <code>&lt;Tab&gt;</code> or spaces) depends on the <a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a>
	option.  Also see <a href="/neovim-docs-web/en/insert#ins-expandtab">ins-expandtab</a>.  When <a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a> is not set, the
	number of spaces is minimized by using <code>&lt;Tab&gt;</code>s.
	This option is reset when <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> is set and restored when <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> is
	reset.</div>
<div class="old-help-para">					<a name="'softtabstop'"></a><code class="help-tag-right">'softtabstop'</code> <a name="'sts'"></a><code class="help-tag">'sts'</code>
<a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a> <a href="/neovim-docs-web/en/options#'sts'">'sts'</a>	number	(default 0)
			local to buffer
	Number of spaces that a <code>&lt;Tab&gt;</code> counts for while performing editing
	operations, like inserting a <code>&lt;Tab&gt;</code> or using <code>&lt;BS&gt;</code>.  It "feels" like
	<code>&lt;Tab&gt;</code>s are being inserted, while in fact a mix of spaces and <code>&lt;Tab&gt;</code>s is
	used.  This is useful to keep the <a href="/neovim-docs-web/en/options#'ts'">'ts'</a> setting at its standard value
	of 8, while being able to edit like it is set to <a href="/neovim-docs-web/en/options#'sts'">'sts'</a>.  However,
	commands like "x" still work on the actual characters.
	When <a href="/neovim-docs-web/en/options#'sts'">'sts'</a> is zero, this feature is off.
	When <a href="/neovim-docs-web/en/options#'sts'">'sts'</a> is negative, the value of <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> is used.
	<a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a> is set to 0 when the <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> option is set and restored
	when <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> is reset.
	See also <a href="/neovim-docs-web/en/insert#ins-expandtab">ins-expandtab</a>.  When <a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a> is not set, the number of
	spaces is minimized by using <code>&lt;Tab&gt;</code>s.
	The 'L' flag in <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> changes how tabs are used when <a href="/neovim-docs-web/en/options#'list'">'list'</a> is
	set.</div>
<div class="old-help-para">	The value of <a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a> will be ignored if <a href="/neovim-docs-web/en/options#'varsofttabstop'">'varsofttabstop'</a> is set
	to anything other than an empty string.</div>
<div class="old-help-para">						<a name="'spell'"></a><code class="help-tag-right">'spell'</code> <a name="'nospell'"></a><code class="help-tag">'nospell'</code>
<a href="/neovim-docs-web/en/options#'spell'">'spell'</a>			boolean	(default off)
			local to window
	When on spell checking will be done.  See <a href="/neovim-docs-web/en/spell#spell">spell</a>.
	The languages are specified with <a href="/neovim-docs-web/en/options#'spelllang'">'spelllang'</a>.</div>
<div class="old-help-para">						<a name="'spellcapcheck'"></a><code class="help-tag-right">'spellcapcheck'</code> <a name="'spc'"></a><code class="help-tag">'spc'</code>
<a href="/neovim-docs-web/en/options#'spellcapcheck'">'spellcapcheck'</a> <a href="/neovim-docs-web/en/options#'spc'">'spc'</a>	string	(default "[.?!]\_[\])'" \t]\+")
			local to buffer
	Pattern to locate the end of a sentence.  The following word will be
	checked to start with a capital letter.  If not then it is highlighted
	with SpellCap <a href="/neovim-docs-web/en/syntax#hl-SpellCap">hl-SpellCap</a> (unless the word is also badly spelled).
	When this check is not wanted make this option empty.
	Only used when <a href="/neovim-docs-web/en/options#'spell'">'spell'</a> is set.
	Be careful with special characters, see <a href="/neovim-docs-web/en/options#option-backslash">option-backslash</a> about
	including spaces and backslashes.
	To set this option automatically depending on the language, see
	<a href="/neovim-docs-web/en/spell#set-spc-auto">set-spc-auto</a>.</div>
<div class="old-help-para">						<a name="'spellfile'"></a><code class="help-tag-right">'spellfile'</code> <a name="'spf'"></a><code class="help-tag">'spf'</code>
<a href="/neovim-docs-web/en/options#'spellfile'">'spellfile'</a> <a href="/neovim-docs-web/en/options#'spf'">'spf'</a>	string	(default empty)
			local to buffer
	Name of the word list file where words are added for the <a href="/neovim-docs-web/en/spell#zg">zg</a> and <a href="/neovim-docs-web/en/spell#zw">zw</a>
	commands.  It must end in ".{encoding}.add".  You need to include the
	path, otherwise the file is placed in the current directory.
								<a name="E765"></a><code class="help-tag-right">E765</code>
	It may also be a comma-separated list of names.  A count before the
	<a href="/neovim-docs-web/en/spell#zg">zg</a> and <a href="/neovim-docs-web/en/spell#zw">zw</a> commands can be used to access each.  This allows using
	a personal word list file and a project word list file.
	When a word is added while this option is empty Vim will set it for
	you: Using the first directory in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a> that is writable.  If
	there is no "spell" directory yet it will be created.  For the file
	name the first language name that appears in <a href="/neovim-docs-web/en/options#'spelllang'">'spelllang'</a> is used,
	ignoring the region.
	The resulting ".spl" file will be used for spell checking, it does not
	have to appear in <a href="/neovim-docs-web/en/options#'spelllang'">'spelllang'</a>.
	Normally one file is used for all regions, but you can add the region
	name if you want to.  However, it will then only be used when
	<a href="/neovim-docs-web/en/options#'spellfile'">'spellfile'</a> is set to it, for entries in <a href="/neovim-docs-web/en/options#'spelllang'">'spelllang'</a> only files
	without region name will be found.
	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">						<a name="'spelllang'"></a><code class="help-tag-right">'spelllang'</code> <a name="'spl'"></a><code class="help-tag">'spl'</code>
<a href="/neovim-docs-web/en/options#'spelllang'">'spelllang'</a> <a href="/neovim-docs-web/en/options#'spl'">'spl'</a>	string	(default "en")
			local to buffer
	A comma-separated list of word list names.  When the <a href="/neovim-docs-web/en/options#'spell'">'spell'</a> option is
	on spellchecking will be done for these languages.  Example:<pre>set spelllang=en_us,nl,medical</pre></div>
<div class="old-help-para">	This means US English, Dutch and medical words are recognized.  Words
	that are not recognized will be highlighted.
	The word list name must consist of alphanumeric characters, a dash or
	an underscore.  It should not include a comma or dot.  Using a dash is
	recommended to separate the two letter language name from a
	specification.  Thus "en-rare" is used for rare English words.
	A region name must come last and have the form "_xx", where "xx" is
	the two-letter, lower case region name.  You can use more than one
	region by listing them: "en_us,en_ca" supports both US and Canadian
	English, but not words specific for Australia, New Zealand or Great
	Britain. (Note: currently en_au and en_nz dictionaries are older than
	en_ca, en_gb and en_us).
	If the name "cjk" is included East Asian characters are excluded from
	spell checking.  This is useful when editing text that also has Asian
	words.
	Note that the "medical" dictionary does not exist, it is just an
	example of a longer name.
							<a name="E757"></a><code class="help-tag-right">E757</code>
	As a special case the name of a .spl file can be given as-is.  The
	first "_xx" in the name is removed and used as the region name
	(_xx is an underscore, two letters and followed by a non-letter).
	This is mainly for testing purposes.  You must make sure the correct
	encoding is used, Vim doesn't check it.
	How the related spell files are found is explained here: <a href="/neovim-docs-web/en/spell#spell-load">spell-load</a>.</div>
<div class="old-help-para">	If the <a href="/neovim-docs-web/en/spell#spellfile.vim">spellfile.vim</a> plugin is active and you use a language name
	for which Vim cannot find the .spl file in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a> the plugin
	will ask you if you want to download the file.</div>
<div class="old-help-para">	After this option has been set successfully, Vim will source the files
	"spell/LANG.vim" in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.  "LANG" is the value of <a href="/neovim-docs-web/en/options#'spelllang'">'spelllang'</a>
	up to the first character that is not an ASCII letter or number and
	not a dash.  Also see <a href="/neovim-docs-web/en/spell#set-spc-auto">set-spc-auto</a>.</div>
<div class="old-help-para">						<a name="'spelloptions'"></a><code class="help-tag-right">'spelloptions'</code> <a name="'spo'"></a><code class="help-tag">'spo'</code>
<a href="/neovim-docs-web/en/options#'spelloptions'">'spelloptions'</a> <a href="/neovim-docs-web/en/options#'spo'">'spo'</a>	string	(default "")
			local to buffer
	A comma-separated list of options for spell checking:
	camel		When a word is CamelCased, assume "Cased" is a
			separate word: every upper-case character in a word
			that comes after a lower case character indicates the
			start of a new word.
	noplainbuffer	Only spellcheck a buffer when <a href="/neovim-docs-web/en/options#'syntax'">'syntax'</a> is enabled,
			or when extmarks are set within the buffer. Only
			designated regions of the buffer are spellchecked in
			this case.</div>
<div class="old-help-para">						<a name="'spellsuggest'"></a><code class="help-tag-right">'spellsuggest'</code> <a name="'sps'"></a><code class="help-tag">'sps'</code>
<a href="/neovim-docs-web/en/options#'spellsuggest'">'spellsuggest'</a> <a href="/neovim-docs-web/en/options#'sps'">'sps'</a>	string	(default "best")
			global
	Methods used for spelling suggestions.  Both for the <a href="/neovim-docs-web/en/spell#z%3D">z=</a> command and
	the <a href="/neovim-docs-web/en/builtin#spellsuggest()">spellsuggest()</a> function.  This is a comma-separated list of
	items:</div>
<div class="old-help-para">	best		Internal method that works best for English.  Finds
			changes like "fast" and uses a bit of sound-a-like
			scoring to improve the ordering.</div>
<div class="old-help-para">	double		Internal method that uses two methods and mixes the
			results.  The first method is "fast", the other method
			computes how much the suggestion sounds like the bad
			word.  That only works when the language specifies
			sound folding.  Can be slow and doesn't always give
			better results.</div>
<div class="old-help-para">	fast		Internal method that only checks for simple changes:
			character inserts/deletes/swaps.  Works well for
			simple typing mistakes.</div>
<div class="old-help-para">	<code>{number}</code>	The maximum number of suggestions listed for <a href="/neovim-docs-web/en/spell#z%3D">z=</a>.
			Not used for <a href="/neovim-docs-web/en/builtin#spellsuggest()">spellsuggest()</a>.  The number of
			suggestions is never more than the value of <a href="/neovim-docs-web/en/options#'lines'">'lines'</a>
			minus two.</div>
<div class="old-help-para">	timeout:{millisec}   Limit the time searching for suggestions to
			<code>{millisec}</code> milli seconds.  Applies to the following
			methods.  When omitted the limit is 5000. When
			negative there is no limit.</div>
<div class="old-help-para">	file:{filename} Read file <code>{filename}</code>, which must have two columns,
			separated by a slash.  The first column contains the
			bad word, the second column the suggested good word.
			Example:
<div class="help-column_heading">				theribal/terrible</div>			Use this for common mistakes that do not appear at the
			top of the suggestion list with the internal methods.
			Lines without a slash are ignored, use this for
			comments.
			The word in the second column must be correct,
			otherwise it will not be used.  Add the word to an
			".add" file if it is currently flagged as a spelling
			mistake.
			The file is used for all languages.</div>
<div class="old-help-para">	expr:{expr}	Evaluate expression <code>{expr}</code>.  Use a function to avoid
			trouble with spaces.  <a href="/neovim-docs-web/en/eval#v%3Aval">v:val</a> holds the badly spelled
			word.  The expression must evaluate to a List of
			Lists, each with a suggestion and a score.
			Example:
<div class="help-column_heading">				[['the', 33], ['that', 44]]</div>			Set <a href="/neovim-docs-web/en/options#'verbose'">'verbose'</a> and use <a href="/neovim-docs-web/en/spell#z%3D">z=</a> to see the scores that the
			internal methods use.  A lower score is better.
			This may invoke <a href="/neovim-docs-web/en/builtin#spellsuggest()">spellsuggest()</a> if you temporarily
			set <a href="/neovim-docs-web/en/options#'spellsuggest'">'spellsuggest'</a> to exclude the "expr:" part.
			Errors are silently ignored, unless you set the
			<a href="/neovim-docs-web/en/options#'verbose'">'verbose'</a> option to a non-zero value.</div>
<div class="old-help-para">	Only one of "best", "double" or "fast" may be used.  The others may
	appear several times in any order.  Example:<pre>:set sps=file:~/.config/nvim/sugg,best,expr:MySuggest()</pre></div>
<div class="old-help-para">	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">			<a name="'splitbelow'"></a><code class="help-tag-right">'splitbelow'</code> <a name="'sb'"></a><code class="help-tag">'sb'</code> <a name="'nosplitbelow'"></a><code class="help-tag">'nosplitbelow'</code> <a name="'nosb'"></a><code class="help-tag">'nosb'</code>
<a href="/neovim-docs-web/en/options#'splitbelow'">'splitbelow'</a> <a href="/neovim-docs-web/en/options#'sb'">'sb'</a>	boolean	(default off)
			global
	When on, splitting a window will put the new window below the current
	one. <a href="/neovim-docs-web/en/windows#%3Asplit">:split</a></div>
<div class="old-help-para">			<a name="'splitkeep'"></a><code class="help-tag-right">'splitkeep'</code> <a name="'spk'"></a><code class="help-tag">'spk'</code>
<a href="/neovim-docs-web/en/options#'splitkeep'">'splitkeep'</a> <a href="/neovim-docs-web/en/options#'spk'">'spk'</a>	string	(default "cursor")
			global
	The value of this option determines the scroll behavior when opening,
	closing or resizing horizontal splits.</div>
<div class="old-help-para">	Possible values are:
	  cursor	Keep the same relative cursor position.
	  screen	Keep the text on the same screen line.
	  topline	Keep the topline the same.</div>
<div class="old-help-para">	For the "screen" and "topline" values, the cursor position will be
	changed when necessary. In this case, the jumplist will be populated
	with the previous cursor position. For "screen", the text cannot always
	be kept on the same screen line when <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> is enabled.</div>
<div class="old-help-para">			<a name="'splitright'"></a><code class="help-tag-right">'splitright'</code> <a name="'spr'"></a><code class="help-tag">'spr'</code> <a name="'nosplitright'"></a><code class="help-tag">'nosplitright'</code> <a name="'nospr'"></a><code class="help-tag">'nospr'</code>
<a href="/neovim-docs-web/en/options#'splitright'">'splitright'</a> <a href="/neovim-docs-web/en/options#'spr'">'spr'</a>	boolean	(default off)
			global
	When on, splitting a window will put the new window right of the
	current one. <a href="/neovim-docs-web/en/windows#%3Avsplit">:vsplit</a></div>
<div class="old-help-para">			   <a name="'startofline'"></a><code class="help-tag-right">'startofline'</code> <a name="'sol'"></a><code class="help-tag">'sol'</code> <a name="'nostartofline'"></a><code class="help-tag">'nostartofline'</code> <a name="'nosol'"></a><code class="help-tag">'nosol'</code>
<a href="/neovim-docs-web/en/options#'startofline'">'startofline'</a> <a href="/neovim-docs-web/en/options#'sol'">'sol'</a>	boolean	(default off)
			global
	When "on" the commands listed below move the cursor to the first
	non-blank of the line.  When off the cursor is kept in the same column
	(if possible).  This applies to the commands: <code>CTRL-D</code>, <code>CTRL-U</code>, <code>CTRL-B</code>,
	<code>CTRL-F</code>, "G", "H", "M", "L", gg, and to the commands "d", "&lt;&lt;" and "&gt;&gt;"
	with a linewise operator, with "%" with a count and to buffer changing
	commands (<code>CTRL-^</code>, :bnext, :bNext, etc.).  Also for an Ex command that
	only has a line number, e.g., ":25" or ":+".
	In case of buffer changing commands the cursor is placed at the column
	where it was the last time the buffer was edited.</div>
<div class="old-help-para">			   <a name="'statusline'"></a><code class="help-tag-right">'statusline'</code> <a name="'stl'"></a><code class="help-tag">'stl'</code> <a name="E540"></a><code class="help-tag">E540</code> <a name="E542"></a><code class="help-tag">E542</code>
<a href="/neovim-docs-web/en/options#'statusline'">'statusline'</a> <a href="/neovim-docs-web/en/options#'stl'">'stl'</a>	string	(default empty)
			global or local to window <a href="/neovim-docs-web/en/options#global-local">global-local</a>
	When non-empty, this option determines the content of the status line.
	Also see <a href="/neovim-docs-web/en/windows#status-line">status-line</a>.</div>
<div class="old-help-para">	The option consists of printf style '%' items interspersed with
	normal text.  Each status line item is of the form:
	  %-0{minwid}.{maxwid}{item}
	All fields except the <code>{item}</code> are optional.  A single percent sign can
	be given as "%%".</div>
<div class="old-help-para">	When the option starts with "%!" then it is used as an expression,
	evaluated and the result is used as the option value.  Example:<pre>:set statusline=%!MyStatusLine()</pre></div>
<div class="old-help-para">	The <a name="g%3Astatusline_winid"></a><code class="help-tag">g:statusline_winid</code> variable will be set to the <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a> of the
	window that the status line belongs to.
	The result can contain %{} items that will be evaluated too.
	Note that the "%!" expression is evaluated in the context of the
	current window and buffer, while %{} items are evaluated in the
	context of the window that the statusline belongs to.</div>
<div class="old-help-para">	When there is error while evaluating the option then it will be made
	empty to avoid further errors.  Otherwise screen updating would loop.</div>
<div class="old-help-para">	Note that the only effect of <a href="/neovim-docs-web/en/options#'ruler'">'ruler'</a> when this option is set (and
	<a href="/neovim-docs-web/en/options#'laststatus'">'laststatus'</a> is 2 or 3) is controlling the output of <a href="/neovim-docs-web/en/editing#CTRL-G">CTRL-G</a>.</div>
<div class="old-help-para"><div class="help-column_heading">	field	    meaning</div>	-		    Left justify the item.  The default is right justified
		    when minwid is larger than the length of the item.
	0	    Leading zeroes in numeric items.  Overridden by '-'.
	minwid	    Minimum width of the item, padding as set by '-' &amp; '0'.
		    Value must be 50 or less.
	maxwid	    Maximum width of the item.  Truncation occurs with a '&lt;'
		    on the left for text items.  Numeric items will be
		    shifted down to maxwid-2 digits followed by '&gt;'<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+options.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/options.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%09%20%20%20%20Value%20must%20be%2050%20or%20less.%0A%09maxwid%09%20%20%20%20Maximum%20width%20of%20the%20item.%20%20Truncation%20occurs%20with%20a%20'%3C'%0A%09%09%20%20%20%20on%20the%20left%20for%20text%20items.%20%20Numeric%20items%20will%20be%0A%09%09%20%20%20%20shifted%20down%20to%20maxwid-2%20digits%20followed%20by%20'%3E'number%0A%09%09%20%20%20%20where%20number%20is%20the%20amount%20of%20missing%20digits%2C%20much%20like%0A%09%09%20%20%20%20an%20exponential%20notation.%0A%09item%09%20%20%20%20A%20one%20letter%20code%20as%20described%20below.%0D%60%60%60">number</a>
		    where number is the amount of missing digits, much like
		    an exponential notation.
	item	    A one letter code as described below.</div>
<div class="old-help-para">	Following is a description of the possible statusline items.  The
	second character in "item" is the type:
		N for number
		S for string
		F for flags as described below
<div class="help-li" style=""> not applicable
</div></div>
<div class="old-help-para"><div class="help-column_heading">	item  meaning</div>	f S   Path to the file in the buffer, as typed or relative to current
	      directory.
	F S   Full path to the file in the buffer.
	t S   File name (tail) of file in the buffer.
	m F   Modified flag, text is "[+]"; "[-]" if <a href="/neovim-docs-web/en/options#'modifiable'">'modifiable'</a> is off.
	M F   Modified flag, text is ",+" or ",-".
	r F   Readonly flag, text is "[RO]".
	R F   Readonly flag, text is ",RO".
	h F   Help buffer flag, text is "[help]".
	H F   Help buffer flag, text is ",HLP".
	w F   Preview window flag, text is "[Preview]".
	W F   Preview window flag, text is ",PRV".
	y F   Type of file in the buffer, e.g., "[vim]".  See <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a>.
	Y F   Type of file in the buffer, e.g., ",VIM".  See <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a>.
	q S   "[Quickfix List]", "[Location List]" or empty.
	k S   Value of "b:keymap_name" or <a href="/neovim-docs-web/en/options#'keymap'">'keymap'</a> when <a href="/neovim-docs-web/en/map#%3Almap">:lmap</a> mappings are
	      being used: "&lt;keymap&gt;"
	n N   Buffer number.
	b N   Value of character under cursor.
	B N   As above, in hexadecimal.
	o N   Byte number in file of byte under cursor, first byte is 1.
	      Mnemonic: Offset from start of file (with one added)
	O N   As above, in hexadecimal.
	N N   Printer page number.  (Only works in the <a href="/neovim-docs-web/en/options#'printheader'">'printheader'</a> option.)
	l N   Line number.
	L N   Number of lines in buffer.
	c N   Column number (byte index).
	v N   Virtual column number (screen column).
	V N   Virtual column number as -{num}.  Not displayed if equal to 'c'.
	p N   Percentage through file in lines as in <a href="/neovim-docs-web/en/editing#CTRL-G">CTRL-G</a>.
	P S   Percentage through file of displayed window.  This is like the
	      percentage described for <a href="/neovim-docs-web/en/options#'ruler'">'ruler'</a>.  Always 3 in length, unless
	      translated.
	a S   Argument list status as in default title.  (<code>{current}</code> of <code>{max}</code>)
	      Empty if the argument file count is zero or one.
	{ NF  Evaluate expression between '%<code>{' and '}</code>' and substitute result.
	      Note that there is no '%' before the closing '}'.  The
	      expression cannot contain a '}' character, call a function to
	      work around that.  See <a href="/neovim-docs-web/en/options#stl-%25%7B">stl-%{</a> below.
	{<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+options.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/options.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%20%20%20%20%20%20Note%20that%20there%20is%20no%20'%25'%20before%20the%20closing%20'%7D'.%20%20The%0A%09%20%20%20%20%20%20expression%20cannot%20contain%20a%20'%7D'%20character%2C%20call%20a%20function%20to%0A%09%20%20%20%20%20%20work%20around%20that.%20%20See%20%7Cstl-%25%7B%7C%20below.%0A%09%7B%25%20-%20%20This%20is%20almost%20same%20as%20%7B%20except%20the%20result%20of%20the%20expression%20is%0A%09%20%20%20%20%20%20re-evaluated%20as%20a%20statusline%20format%20string.%20%20Thus%20if%20the%0A%09%20%20%20%20%20%20return%20value%20of%20expr%20contains%20%25%20items%20they%20will%20get%20expanded.%0A%09%20%20%20%20%20%20The%20expression%20can%20contain%20the%20%7D%20character%2C%20the%20end%20of%0D%60%60%60">% -  This is almost same as {</a> except the result of the expression is
	      re-evaluated as a statusline format string.  Thus if the
	      return value of expr contains % items they will get expanded.
	      The expression can contain the } character, the end of
	      expression is denoted by %}.
	      For example:<pre>func! Stl_filename() abort
    return "%t"
endfunc</pre></div>
<div class="old-help-para">	        <code>stl=%{Stl_filename()}</code>   results in <code>"%t"</code>
	        <code>stl=%{%Stl_filename()%}</code> results in <code>"Name of current file"</code>
	%} -  End of <code>{%</code> expression
	( -   Start of item group.  Can be used for setting the width and
	      alignment of a section.  Must be followed by %) somewhere.
	) -   End of item group.  No width fields allowed.
	T N   For <a href="/neovim-docs-web/en/options#'tabline'">'tabline'</a>: start of tab page N label.  Use %T or %X to end
	      the label.  Clicking this label with left mouse button switches
	      to the specified tab page.
	X N   For <a href="/neovim-docs-web/en/options#'tabline'">'tabline'</a>: start of close tab N label.  Use %X or %T to end
	      the label, e.g.: %3Xclose%X.  Use %999X for a "close current
	      tab" label.    Clicking this label with left mouse button closes
	      specified tab page.
	@ N   Start of execute function label. Use %X or %T to
	      end the label, e.g.: %10@SwitchBuffer@foo.c%X.  Clicking this
	      label runs specified function: in the example when clicking once
	      using left mouse button on "foo.c" "SwitchBuffer(10, 1, 'l',
	      '    ')" expression will be run.  Function receives the
	      following arguments in order:
	      1. minwid field value or zero if no N was specified
	      2. number of mouse clicks to detect multiple clicks
	      3. mouse button used: "l", "r" or "m" for left, right or middle
	         button respectively; one should not rely on third argument
	         being only "l", "r" or "m": any other non-empty string value
	         that contains only ASCII lower case letters may be expected
	         for other mouse buttons
	      4. modifiers pressed: string which contains "s" if shift
	         modifier was pressed, "c" for control, "a" for alt and "m"
	         for meta; currently if modifier is not pressed string
	         contains space instead, but one should not rely on presence
	         of spaces or specific order of modifiers: use <a href="/neovim-docs-web/en/builtin#stridx()">stridx()</a> to
	         test whether some modifier is present; string is guaranteed
	         to contain only ASCII letters and spaces, one letter per
	         modifier; "?" modifier may also be present, but its presence
	         is a bug that denotes that new mouse button recognition was
	         added without modifying code that reacts on mouse clicks on
	         this label.
	&lt; -   Where to truncate line if too long.  Default is at the start.
	      No width fields allowed.
	= -   Separation point between alignment sections. Each section will
	      be separated by an equal number of spaces.
	      No width fields allowed.
	# -   Set highlight group.  The name must follow and then a # again.
	      Thus use %#HLname# for highlight group HLname.  The same
	      highlighting is used, also for the statusline of non-current
	      windows.
<div class="help-li" style=""> -   Set highlight group to User{N}, where <code>{N}</code> is taken from the
	      minwid field, e.g. %1*.  Restore normal highlight with %* or %0*.
	      The difference between User{N} and StatusLine  will be applied
	      to StatusLineNC for the statusline of non-current windows.
	      The number N must be between 1 and 9.  See <a href="/neovim-docs-web/en/syntax#hl-User1..9">hl-User1..9</a>
</div></div>
<div class="old-help-para">	When displaying a flag, Vim removes the leading comma, if any, when
	that flag comes right after plaintext.  This will make a nice display
	when flags are used like in the examples below.</div>
<div class="old-help-para">	When all items in a group becomes an empty string (i.e. flags that are
	not set) and a minwid is not set for the group, the whole group will
	become empty.  This will make a group like the following disappear
	completely from the statusline when none of the flags are set.<pre>:set statusline=...%(\ [%M%R%H]%)...</pre></div>
<div class="old-help-para">	Beware that an expression is evaluated each and every time the status
	line is displayed.
				<a name="stl-%25%7B"></a><code class="help-tag-right">stl-%{</code> <a name="g%3Aactual_curbuf"></a><code class="help-tag">g:actual_curbuf</code> <a name="g%3Aactual_curwin"></a><code class="help-tag">g:actual_curwin</code>
	While evaluating %{} the current buffer and current window will be set
	temporarily to that of the window (and buffer) whose statusline is
	currently being drawn.  The expression will evaluate in this context.
	The variable "g:actual_curbuf" is set to the <code>bufnr()</code> number of the
	real current buffer and "g:actual_curwin" to the <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a> of the
	real current window.  These values are strings.</div>
<div class="old-help-para">	The <a href="/neovim-docs-web/en/options#'statusline'">'statusline'</a> option will be evaluated in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a> if set from
	a modeline, see <a href="/neovim-docs-web/en/eval#sandbox-option">sandbox-option</a>.
	This option cannot be set in a modeline when <a href="/neovim-docs-web/en/options#'modelineexpr'">'modelineexpr'</a> is off.</div>
<div class="old-help-para">	It is not allowed to change text or jump to another window while
	evaluating <a href="/neovim-docs-web/en/options#'statusline'">'statusline'</a> <a href="/neovim-docs-web/en/eval#textlock">textlock</a>.</div>
<div class="old-help-para">	If the statusline is not updated when you want it (e.g., after setting
	a variable that's used in an expression), you can force an update by
	using <code>:redrawstatus</code>.</div>
<div class="old-help-para">	A result of all digits is regarded a number for display purposes.
	Otherwise the result is taken as flag text and applied to the rules
	described above.</div>
<div class="old-help-para">	Watch out for errors in expressions.  They may render Vim unusable!
	If you are stuck, hold down ':' or 'Q' to get a prompt, then quit and
	edit your vimrc or whatever with "vim --clean" to get it right.</div>
<div class="old-help-para">	Examples:
	Emulate standard status line with <a href="/neovim-docs-web/en/options#'ruler'">'ruler'</a> set<pre>:set statusline=%&lt;%f\ %h%m%r%=%-14.(%l,%c%V%)\ %P</pre></div>
<div class="old-help-para">	Similar, but add ASCII value of char under the cursor (like "ga")<pre>:set statusline=%&lt;%f%h%m%r%=%b\ 0x%B\ \ %l,%c%V\ %P</pre></div>
<div class="old-help-para">	Display byte count and byte value, modified flag in red.<pre>:set statusline=%&lt;%f%=\ [%1*%M%*%n%R%H]\ %-19(%3l,%02c%03V%)%O'%02b'
:hi User1 term=inverse,bold cterm=inverse,bold ctermfg=red</pre></div>
<div class="old-help-para">	Display a ,GZ flag if a compressed file is loaded<pre>:set statusline=...%r%{VarExists('b:gzflag','\ [GZ]')}%h...</pre></div>
<div class="old-help-para">	In the <a href="/neovim-docs-web/en/autocmd#%3Aautocmd">:autocmd</a>'s:<pre>:let b:gzflag = 1</pre></div>
<div class="old-help-para">	And:<pre>:unlet b:gzflag</pre></div>
<div class="old-help-para">	And define this function:<pre>:function VarExists(var, val)
:    if exists(a:var) | return a:val | else | return '' | endif
:endfunction</pre></div>
<div class="old-help-para">						<a name="'suffixes'"></a><code class="help-tag-right">'suffixes'</code> <a name="'su'"></a><code class="help-tag">'su'</code>
<a href="/neovim-docs-web/en/options#'suffixes'">'suffixes'</a> <a href="/neovim-docs-web/en/options#'su'">'su'</a>		string	(default ".bak,~,.o,.h,.info,.swp,.obj")
			global
	Files with these suffixes get a lower priority when multiple files
	match a wildcard.  See <a href="/neovim-docs-web/en/cmdline#suffixes">suffixes</a>.  Commas can be used to separate the
	suffixes.  Spaces after the comma are ignored.  A dot is also seen as
	the start of a suffix.  To avoid a dot or comma being recognized as a
	separator, precede it with a backslash (see <a href="/neovim-docs-web/en/options#option-backslash">option-backslash</a> about
	including spaces and backslashes).
	See <a href="/neovim-docs-web/en/options#'wildignore'">'wildignore'</a> for completely ignoring files.
	The use of <a href="/neovim-docs-web/en/options#%3Aset%2B%3D">:set+=</a> and <a href="/neovim-docs-web/en/options#%3Aset-%3D">:set-=</a> is preferred when adding or removing
	suffixes from the list.  This avoids problems when a future version
	uses another default.</div>
<div class="old-help-para">						<a name="'suffixesadd'"></a><code class="help-tag-right">'suffixesadd'</code> <a name="'sua'"></a><code class="help-tag">'sua'</code>
<a href="/neovim-docs-web/en/options#'suffixesadd'">'suffixesadd'</a> <a href="/neovim-docs-web/en/options#'sua'">'sua'</a>	string	(default "")
			local to buffer
	Comma-separated list of suffixes, which are used when searching for a
	file for the "gf", "[I", etc. commands.  Example:<pre>:set suffixesadd=.java</pre></div>
<div class="old-help-para">				<a name="'swapfile'"></a><code class="help-tag-right">'swapfile'</code> <a name="'swf'"></a><code class="help-tag">'swf'</code> <a name="'noswapfile'"></a><code class="help-tag">'noswapfile'</code> <a name="'noswf'"></a><code class="help-tag">'noswf'</code>
<a href="/neovim-docs-web/en/options#'swapfile'">'swapfile'</a> <a href="/neovim-docs-web/en/options#'swf'">'swf'</a>	boolean (default on)
			local to buffer
	Use a swapfile for the buffer.  This option can be reset when a
	swapfile is not wanted for a specific buffer.  For example, with
	confidential information that even root must not be able to access.
	Careful: All text will be in memory:
<div class="help-li" style=""> Don't use this for big files.
</div><div class="help-li" style=""> Recovery will be impossible!
	A swapfile will only be present when <a href="/neovim-docs-web/en/options#'updatecount'">'updatecount'</a> is non-zero and
	<a href="/neovim-docs-web/en/options#'swapfile'">'swapfile'</a> is set.
	When <a href="/neovim-docs-web/en/options#'swapfile'">'swapfile'</a> is reset, the swap file for the current buffer is
	immediately deleted.  When <a href="/neovim-docs-web/en/options#'swapfile'">'swapfile'</a> is set, and <a href="/neovim-docs-web/en/options#'updatecount'">'updatecount'</a> is
	non-zero, a swap file is immediately created.
	Also see <a href="/neovim-docs-web/en/recover#swap-file">swap-file</a>.
	If you want to open a new buffer without creating a swap file for it,
	use the <a href="/neovim-docs-web/en/recover#%3Anoswapfile">:noswapfile</a> modifier.
	See <a href="/neovim-docs-web/en/options#'directory'">'directory'</a> for where the swap file is created.
</div></div>
<div class="old-help-para">	This option is used together with <a href="/neovim-docs-web/en/options#'bufhidden'">'bufhidden'</a> and <a href="/neovim-docs-web/en/options#'buftype'">'buftype'</a> to
	specify special kinds of buffers.   See <a href="/neovim-docs-web/en/windows#special-buffers">special-buffers</a>.</div>
<div class="old-help-para">						<a name="'switchbuf'"></a><code class="help-tag-right">'switchbuf'</code> <a name="'swb'"></a><code class="help-tag">'swb'</code>
<a href="/neovim-docs-web/en/options#'switchbuf'">'switchbuf'</a> <a href="/neovim-docs-web/en/options#'swb'">'swb'</a>	string	(default "uselast")
			global
	This option controls the behavior when switching between buffers.
	Mostly for <a href="/neovim-docs-web/en/quickfix#quickfix">quickfix</a> commands some values are also used for other
	commands, as mentioned below.
	Possible values (comma-separated list):
	   useopen	If included, jump to the first open window that
			contains the specified buffer (if there is one).
			Otherwise: Do not examine other windows.
			This setting is checked with <a href="/neovim-docs-web/en/quickfix#quickfix">quickfix</a> commands, when
			jumping to errors (":cc", ":cn", "cp", etc.).  It is
			also used in all buffer related split commands, for
			example ":sbuffer", ":sbnext", or ":sbrewind".
	   usetab	Like "useopen", but also consider windows in other tab
			pages.
	   split	If included, split the current window before loading
			a buffer for a <a href="/neovim-docs-web/en/quickfix#quickfix">quickfix</a> command that display errors.
			Otherwise: do not split, use current window (when used
			in the quickfix window: the previously used window or
			split if there is no other window).
	   vsplit	Just like "split" but split vertically.
	   newtab	Like "split", but open a new tab page.  Overrules
			"split" when both are present.
	   uselast	If included, jump to the previously used window when
			jumping to errors with <a href="/neovim-docs-web/en/quickfix#quickfix">quickfix</a> commands.</div>
<div class="old-help-para">						<a name="'synmaxcol'"></a><code class="help-tag-right">'synmaxcol'</code> <a name="'smc'"></a><code class="help-tag">'smc'</code>
<a href="/neovim-docs-web/en/options#'synmaxcol'">'synmaxcol'</a> <a href="/neovim-docs-web/en/options#'smc'">'smc'</a>	number	(default 3000)
			local to buffer
	Maximum column in which to search for syntax items.  In long lines the
	text after this column is not highlighted and following lines may not
	be highlighted correctly, because the syntax state is cleared.
	This helps to avoid very slow redrawing for an XML file that is one
	long line.
	Set to zero to remove the limit.</div>
<div class="old-help-para">						<a name="'syntax'"></a><code class="help-tag-right">'syntax'</code> <a name="'syn'"></a><code class="help-tag">'syn'</code>
<a href="/neovim-docs-web/en/options#'syntax'">'syntax'</a> <a href="/neovim-docs-web/en/options#'syn'">'syn'</a>		string	(default empty)
			local to buffer
	When this option is set, the syntax with this name is loaded, unless
	syntax highlighting has been switched off with ":syntax off".
	Otherwise this option does not always reflect the current syntax (the
	b:current_syntax variable does).
	This option is most useful in a modeline, for a file which syntax is
	not automatically recognized.  Example, in an IDL file:<pre>/* vim: set syntax=idl : */</pre></div>
<div class="old-help-para">	When a dot appears in the value then this separates two filetype
	names.  Example:<pre>/* vim: set syntax=c.doxygen : */</pre></div>
<div class="old-help-para">	This will use the "c" syntax first, then the "doxygen" syntax.
	Note that the second one must be prepared to be loaded as an addition,
	otherwise it will be skipped.  More than one dot may appear.
	To switch off syntax highlighting for the current file, use:<pre>:set syntax=OFF</pre></div>
<div class="old-help-para">	To switch syntax highlighting on according to the current value of the
	<a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> option:<pre>:set syntax=ON</pre></div>
<div class="old-help-para">	What actually happens when setting the <a href="/neovim-docs-web/en/options#'syntax'">'syntax'</a> option is that the
	Syntax autocommand event is triggered with the value as argument.
	This option is not copied to another buffer, independent of the 's' or
	'S' flag in <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a>.
	Only normal file name characters can be used, "/\*?[|&lt;&gt;" are illegal.</div>
<div class="old-help-para">						<a name="'tabline'"></a><code class="help-tag-right">'tabline'</code> <a name="'tal'"></a><code class="help-tag">'tal'</code>
<a href="/neovim-docs-web/en/options#'tabline'">'tabline'</a> <a href="/neovim-docs-web/en/options#'tal'">'tal'</a>		string	(default empty)
			global
	When non-empty, this option determines the content of the tab pages
	line at the top of the Vim window.  When empty Vim will use a default
	tab pages line.  See <a href="/neovim-docs-web/en/tabpage#setting-tabline">setting-tabline</a> for more info.</div>
<div class="old-help-para">	The tab pages line only appears as specified with the <a href="/neovim-docs-web/en/options#'showtabline'">'showtabline'</a>
	option and only when there is no GUI tab line.  When 'e' is in
	<a href="/neovim-docs-web/en/options#'guioptions'">'guioptions'</a> and the GUI supports a tab line <a href="/neovim-docs-web/en/options#'guitablabel'">'guitablabel'</a> is used
	instead.  Note that the two tab pages lines are very different.</div>
<div class="old-help-para">	The value is evaluated like with <a href="/neovim-docs-web/en/options#'statusline'">'statusline'</a>.  You can use
	<a href="/neovim-docs-web/en/builtin#tabpagenr()">tabpagenr()</a>, <a href="/neovim-docs-web/en/builtin#tabpagewinnr()">tabpagewinnr()</a> and <a href="/neovim-docs-web/en/builtin#tabpagebuflist()">tabpagebuflist()</a> to figure out
	the text to be displayed.  Use "%1T" for the first label, "%2T" for
	the second one, etc.  Use "%X" items for closing labels.</div>
<div class="old-help-para">	When changing something that is used in <a href="/neovim-docs-web/en/options#'tabline'">'tabline'</a> that does not
	trigger it to be updated, use <a href="/neovim-docs-web/en/various#%3Aredrawtabline">:redrawtabline</a>.
	This option cannot be set in a modeline when <a href="/neovim-docs-web/en/options#'modelineexpr'">'modelineexpr'</a> is off.</div>
<div class="old-help-para">	Keep in mind that only one of the tab pages is the current one, others
	are invisible and you can't jump to their windows.</div>
<div class="old-help-para">						<a name="'tabpagemax'"></a><code class="help-tag-right">'tabpagemax'</code> <a name="'tpm'"></a><code class="help-tag">'tpm'</code>
<a href="/neovim-docs-web/en/options#'tabpagemax'">'tabpagemax'</a> <a href="/neovim-docs-web/en/options#'tpm'">'tpm'</a>	number	(default 50)
			global
	Maximum number of tab pages to be opened by the <a href="/neovim-docs-web/en/starting#-p">-p</a> command line
	argument or the ":tab all" command. <a href="/neovim-docs-web/en/tabpage#tabpage">tabpage</a></div>
<div class="old-help-para">						<a name="'tabstop'"></a><code class="help-tag-right">'tabstop'</code> <a name="'ts'"></a><code class="help-tag">'ts'</code>
<a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> <a href="/neovim-docs-web/en/options#'ts'">'ts'</a>		number	(default 8)
			local to buffer
	Number of spaces that a <code>&lt;Tab&gt;</code> in the file counts for.  Also see
	the <a href="/neovim-docs-web/en/change#%3Aretab">:retab</a> command, and the <a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a> option.</div>
<div class="old-help-para">	Note: Setting <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> to any other value than 8 can make your file
	appear wrong in many places, e.g., when printing it.
	The value must be more than 0 and less than 10000.</div>
<div class="old-help-para">	There are four main ways to use tabs in Vim:
	1. Always keep <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> at 8, set <a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a> and <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> to 4
	   (or 3 or whatever you prefer) and use <a href="/neovim-docs-web/en/options#'noexpandtab'">'noexpandtab'</a>.  Then Vim
	   will use a mix of tabs and spaces, but typing <code>&lt;Tab&gt;</code> and <code>&lt;BS&gt;</code> will
	   behave like a tab appears every 4 (or 3) characters.
	2. Set <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> and <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> to whatever you prefer and use
	   <a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a>.  This way you will always insert spaces.  The
	   formatting will never be messed up when <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> is changed.
	3. Set <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> and <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> to whatever you prefer and use a
	   <a href="/neovim-docs-web/en/options#modeline">modeline</a> to set these values when editing the file again.  Only
	   works when using Vim to edit the file.
	4. Always set <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> and <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> to the same value, and
	   <a href="/neovim-docs-web/en/options#'noexpandtab'">'noexpandtab'</a>.  This should then work (for initial indents only)
	   for any tabstop setting that people use.  It might be nice to have
	   tabs after the first non-blank inserted as spaces if you do this
	   though.  Otherwise aligned comments will be wrong when <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> is
	   changed.</div>
<div class="old-help-para">	The value of <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> will be ignored if <a href="/neovim-docs-web/en/options#'vartabstop'">'vartabstop'</a> is set to
	anything other than an empty string.</div>
<div class="old-help-para">			<a name="'tagbsearch'"></a><code class="help-tag-right">'tagbsearch'</code> <a name="'tbs'"></a><code class="help-tag">'tbs'</code> <a name="'notagbsearch'"></a><code class="help-tag">'notagbsearch'</code> <a name="'notbs'"></a><code class="help-tag">'notbs'</code>
<a href="/neovim-docs-web/en/options#'tagbsearch'">'tagbsearch'</a> <a href="/neovim-docs-web/en/options#'tbs'">'tbs'</a>	boolean	(default on)
			global
	When searching for a tag (e.g., for the <a href="/neovim-docs-web/en/tagsrch#%3Ata">:ta</a> command), Vim can either
	use a binary search or a linear search in a tags file.  Binary
	searching makes searching for a tag a LOT faster, but a linear search
	will find more tags if the tags file wasn't properly sorted.
	Vim normally assumes that your tags files are sorted, or indicate that
	they are not sorted.  Only when this is not the case does the
	<a href="/neovim-docs-web/en/options#'tagbsearch'">'tagbsearch'</a> option need to be switched off.</div>
<div class="old-help-para">	When <a href="/neovim-docs-web/en/options#'tagbsearch'">'tagbsearch'</a> is on, binary searching is first used in the tags
	files.  In certain situations, Vim will do a linear search instead for
	certain files, or retry all files with a linear search.  When
	<a href="/neovim-docs-web/en/options#'tagbsearch'">'tagbsearch'</a> is off, only a linear search is done.</div>
<div class="old-help-para">	Linear searching is done anyway, for one file, when Vim finds a line
	at the start of the file indicating that it's not sorted:<pre>!_TAG_FILE_SORTED        0        /some comment/</pre></div>
<div class="old-help-para">	[The whitespace before and after the '0' must be a single <code>&lt;Tab&gt;</code>]</div>
<div class="old-help-para">	When a binary search was done and no match was found in any of the
	files listed in <a href="/neovim-docs-web/en/options#'tags'">'tags'</a>, and case is ignored or a pattern is used
	instead of a normal tag name, a retry is done with a linear search.
	Tags in unsorted tags files, and matches with different case will only
	be found in the retry.</div>
<div class="old-help-para">	If a tag file indicates that it is case-fold sorted, the second,
	linear search can be avoided when case is ignored.  Use a value of '2'
	in the "!_TAG_FILE_SORTED" line for this.  A tag file can be case-fold
	sorted with the -f switch to "sort" in most unices, as in the command:
	"sort -f -o tags tags".  For Universal ctags and Exuberant ctags
	version 5.x or higher (at least 5.5) the --sort=foldcase switch can be
	used for this as well.  Note that case must be folded to uppercase for
	this to work.</div>
<div class="old-help-para">	By default, tag searches are case-sensitive.  Case is ignored when
	<a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> is set and <a href="/neovim-docs-web/en/options#'tagcase'">'tagcase'</a> is "followic", or when <a href="/neovim-docs-web/en/options#'tagcase'">'tagcase'</a> is
	"ignore".
	Also when <a href="/neovim-docs-web/en/options#'tagcase'">'tagcase'</a> is "followscs" and <a href="/neovim-docs-web/en/options#'smartcase'">'smartcase'</a> is set, or
	<a href="/neovim-docs-web/en/options#'tagcase'">'tagcase'</a> is "smart", and the pattern contains only lowercase
	characters.</div>
<div class="old-help-para">	When <a href="/neovim-docs-web/en/options#'tagbsearch'">'tagbsearch'</a> is off, tags searching is slower when a full match
	exists, but faster when no full match exists.  Tags in unsorted tags
	files may only be found with <a href="/neovim-docs-web/en/options#'tagbsearch'">'tagbsearch'</a> off.
	When the tags file is not sorted, or sorted in a wrong way (not on
	ASCII byte value), <a href="/neovim-docs-web/en/options#'tagbsearch'">'tagbsearch'</a> should be off, or the line given above
	must be included in the tags file.
	This option doesn't affect commands that find all matching tags (e.g.,
	command-line completion and ":help").</div>
<div class="old-help-para">							<a name="'tagcase'"></a><code class="help-tag-right">'tagcase'</code> <a name="'tc'"></a><code class="help-tag">'tc'</code>
<a href="/neovim-docs-web/en/options#'tagcase'">'tagcase'</a> <a href="/neovim-docs-web/en/options#'tc'">'tc'</a>		string	(default "followic")
			global or local to buffer <a href="/neovim-docs-web/en/options#global-local">global-local</a>
	This option specifies how case is handled when searching the tags
	file:
	   followic	Follow the <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> option
	   followscs    Follow the <a href="/neovim-docs-web/en/options#'smartcase'">'smartcase'</a> and <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> options
	   ignore	Ignore case
	   match	Match case
	   smart	Ignore case unless an upper case letter is used</div>
<div class="old-help-para">							<a name="'tagfunc'"></a><code class="help-tag-right">'tagfunc'</code> <a name="'tfu'"></a><code class="help-tag">'tfu'</code>
<a href="/neovim-docs-web/en/options#'tagfunc'">'tagfunc'</a> <a href="/neovim-docs-web/en/options#'tfu'">'tfu'</a>		string	(default: empty)
			local to buffer
	This option specifies a function to be used to perform tag searches.
	The function gets the tag pattern and should return a List of matching
	tags.  See <a href="/neovim-docs-web/en/tagsrch#tag-function">tag-function</a> for an explanation of how to write the
	function and an example.  The value can be the name of a function, a
	<a href="/neovim-docs-web/en/eval#lambda">lambda</a> or a <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a>. See <a href="/neovim-docs-web/en/options#option-value-function">option-value-function</a> for more
	information.</div>
<div class="old-help-para">						<a name="'taglength'"></a><code class="help-tag-right">'taglength'</code> <a name="'tl'"></a><code class="help-tag">'tl'</code>
<a href="/neovim-docs-web/en/options#'taglength'">'taglength'</a> <a href="/neovim-docs-web/en/options#'tl'">'tl'</a>	number	(default 0)
			global
	If non-zero, tags are significant up to this number of characters.</div>
<div class="old-help-para">			<a name="'tagrelative'"></a><code class="help-tag-right">'tagrelative'</code> <a name="'tr'"></a><code class="help-tag">'tr'</code> <a name="'notagrelative'"></a><code class="help-tag">'notagrelative'</code> <a name="'notr'"></a><code class="help-tag">'notr'</code>
<a href="/neovim-docs-web/en/options#'tagrelative'">'tagrelative'</a> <a href="/neovim-docs-web/en/options#'tr'">'tr'</a>	boolean	(default: on)
			global
	If on and using a tags file in another directory, file names in that
	tags file are relative to the directory where the tags file is.</div>
<div class="old-help-para">						<a name="'tags'"></a><code class="help-tag-right">'tags'</code> <a name="'tag'"></a><code class="help-tag">'tag'</code> <a name="E433"></a><code class="help-tag">E433</code>
<a href="/neovim-docs-web/en/options#'tags'">'tags'</a> <a href="/neovim-docs-web/en/options#'tag'">'tag'</a>		string	(default "./tags;,tags")
			global or local to buffer <a href="/neovim-docs-web/en/options#global-local">global-local</a>
	Filenames for the tag command, separated by spaces or commas.  To
	include a space or comma in a file name, precede it with a backslash
	(see <a href="/neovim-docs-web/en/options#option-backslash">option-backslash</a> about including spaces and backslashes).
	When a file name starts with "./", the '.' is replaced with the path
	of the current file.  But only when the 'd' flag is not included in
	<a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a>.  Environment variables are expanded <a href="/neovim-docs-web/en/options#%3Aset_env">:set_env</a>.  Also see
	<a href="/neovim-docs-web/en/tagsrch#tags-option">tags-option</a>.
	"*", "**" and other wildcards can be used to search for tags files in
	a directory tree.  See <a href="/neovim-docs-web/en/editing#file-searching">file-searching</a>.  E.g., "/lib/**/tags" will
	find all files named "tags" below "/lib".  The filename itself cannot
	contain wildcards, it is used as-is.  E.g., "/lib/**/tags?" will find
	files called "tags?".
	The <a href="/neovim-docs-web/en/builtin#tagfiles()">tagfiles()</a> function can be used to get a list of the file names
	actually used.
	The use of <a href="/neovim-docs-web/en/options#%3Aset%2B%3D">:set+=</a> and <a href="/neovim-docs-web/en/options#%3Aset-%3D">:set-=</a> is preferred when adding or removing
	file names from the list.  This avoids problems when a future version
	uses another default.</div>
<div class="old-help-para">				<a name="'tagstack'"></a><code class="help-tag-right">'tagstack'</code> <a name="'tgst'"></a><code class="help-tag">'tgst'</code> <a name="'notagstack'"></a><code class="help-tag">'notagstack'</code> <a name="'notgst'"></a><code class="help-tag">'notgst'</code>
<a href="/neovim-docs-web/en/options#'tagstack'">'tagstack'</a> <a href="/neovim-docs-web/en/options#'tgst'">'tgst'</a>	boolean	(default on)
			global
	When on, the <a href="/neovim-docs-web/en/tagsrch#tagstack">tagstack</a> is used normally.  When off, a ":tag" or
	":tselect" command with an argument will not push the tag onto the
	tagstack.  A following ":tag" without an argument, a ":pop" command or
	any other command that uses the tagstack will use the unmodified
	tagstack, but does change the pointer to the active entry.
	Resetting this option is useful when using a ":tag" command in a
	mapping which should not change the tagstack.</div>
<div class="old-help-para">						<a name="'termbidi'"></a><code class="help-tag-right">'termbidi'</code> <a name="'tbidi'"></a><code class="help-tag">'tbidi'</code>
						<a name="'notermbidi'"></a><code class="help-tag-right">'notermbidi'</code> <a name="'notbidi'"></a><code class="help-tag">'notbidi'</code>
<a href="/neovim-docs-web/en/options#'termbidi'">'termbidi'</a> <a href="/neovim-docs-web/en/options#'tbidi'">'tbidi'</a>	boolean (default off)
			global
	The terminal is in charge of Bi-directionality of text (as specified
	by Unicode).  The terminal is also expected to do the required shaping
	that some languages (such as Arabic) require.
	Setting this option implies that <a href="/neovim-docs-web/en/options#'rightleft'">'rightleft'</a> will not be set when
	<a href="/neovim-docs-web/en/options#'arabic'">'arabic'</a> is set and the value of <a href="/neovim-docs-web/en/options#'arabicshape'">'arabicshape'</a> will be ignored.
	Note that setting <a href="/neovim-docs-web/en/options#'termbidi'">'termbidi'</a> has the immediate effect that
	<a href="/neovim-docs-web/en/options#'arabicshape'">'arabicshape'</a> is ignored, but <a href="/neovim-docs-web/en/options#'rightleft'">'rightleft'</a> isn't changed automatically.
	For further details see <a href="/neovim-docs-web/en/arabic#arabic.txt">arabic.txt</a>.</div>
<div class="old-help-para">			<a name="'termguicolors'"></a><code class="help-tag-right">'termguicolors'</code> <a name="'tgc'"></a><code class="help-tag">'tgc'</code> <a name="'notermguicolors'"></a><code class="help-tag">'notermguicolors'</code> <a name="'notgc'"></a><code class="help-tag">'notgc'</code>
<a href="/neovim-docs-web/en/options#'termguicolors'">'termguicolors'</a> <a href="/neovim-docs-web/en/options#'tgc'">'tgc'</a>	boolean (default off)
			global
	Enables 24-bit RGB color in the <a href="/neovim-docs-web/en/term#TUI">TUI</a>.  Uses "gui" <a href="/neovim-docs-web/en/syntax#%3Ahighlight">:highlight</a>
	attributes instead of "cterm" attributes. <a href="/neovim-docs-web/en/syntax#guifg">guifg</a>
	Requires an ISO-8613-3 compatible terminal.</div>
<div class="old-help-para">						<a name="'termpastefilter'"></a><code class="help-tag-right">'termpastefilter'</code> <a name="'tpf'"></a><code class="help-tag">'tpf'</code>
<a href="/neovim-docs-web/en/options#'termpastefilter'">'termpastefilter'</a> <a href="/neovim-docs-web/en/options#'tpf'">'tpf'</a>	string	(default: "BS,HT,ESC,DEL")
			global
	A comma-separated list of options for specifying control characters
	to be removed from the text pasted into the terminal window. The
	supported values are:</div>
<div class="old-help-para">	   BS	    Backspace</div>
<div class="old-help-para">	   HT	    TAB</div>
<div class="old-help-para">	   FF	    Form feed</div>
<div class="old-help-para">	   ESC	    Escape</div>
<div class="old-help-para">	   DEL	    DEL</div>
<div class="old-help-para">	   C0	    Other control characters, excluding Line feed and
		    Carriage return &lt; ' '</div>
<div class="old-help-para">	   C1	    Control characters 0x80...0x9F</div>
<div class="old-help-para">						<a name="'textwidth'"></a><code class="help-tag-right">'textwidth'</code> <a name="'tw'"></a><code class="help-tag">'tw'</code>
<a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> <a href="/neovim-docs-web/en/options#'tw'">'tw'</a>	number	(default 0)
			local to buffer
	Maximum width of text that is being inserted.  A longer line will be
	broken after white space to get this width.  A zero value disables
	this.
	<a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> is set to 0 when the <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> option is set and restored
	when <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> is reset.
	When <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> is zero, <a href="/neovim-docs-web/en/options#'wrapmargin'">'wrapmargin'</a> may be used.  See also
	<a href="/neovim-docs-web/en/options#'formatoptions'">'formatoptions'</a> and <a href="/neovim-docs-web/en/insert#ins-textwidth">ins-textwidth</a>.
	When <a href="/neovim-docs-web/en/options#'formatexpr'">'formatexpr'</a> is set it will be used to break the line.</div>
<div class="old-help-para">						<a name="'thesaurus'"></a><code class="help-tag-right">'thesaurus'</code> <a name="'tsr'"></a><code class="help-tag">'tsr'</code>
<a href="/neovim-docs-web/en/options#'thesaurus'">'thesaurus'</a> <a href="/neovim-docs-web/en/options#'tsr'">'tsr'</a>	string	(default "")
			global or local to buffer <a href="/neovim-docs-web/en/options#global-local">global-local</a>
	List of file names, separated by commas, that are used to lookup words
	for thesaurus completion commands <a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-T">i_CTRL-X_CTRL-T</a>.  See
	<a href="/neovim-docs-web/en/insert#compl-thesaurus">compl-thesaurus</a>.</div>
<div class="old-help-para">	This option is not used if <a href="/neovim-docs-web/en/options#'thesaurusfunc'">'thesaurusfunc'</a> is set, either for the
	buffer or globally.</div>
<div class="old-help-para">	To include a comma in a file name precede it with a backslash.  Spaces
	after a comma are ignored, otherwise spaces are included in the file
	name.  See <a href="/neovim-docs-web/en/options#option-backslash">option-backslash</a> about using backslashes.  The use of
	<a href="/neovim-docs-web/en/options#%3Aset%2B%3D">:set+=</a> and <a href="/neovim-docs-web/en/options#%3Aset-%3D">:set-=</a> is preferred when adding or removing directories
	from the list.  This avoids problems when a future version uses
	another default.  Backticks cannot be used in this option for security
	reasons.</div>
<div class="old-help-para">						<a name="'thesaurusfunc'"></a><code class="help-tag-right">'thesaurusfunc'</code> <a name="'tsrfu'"></a><code class="help-tag">'tsrfu'</code>
<a href="/neovim-docs-web/en/options#'thesaurusfunc'">'thesaurusfunc'</a> <a href="/neovim-docs-web/en/options#'tsrfu'">'tsrfu'</a>	string	(default: empty)
			global or local to buffer <a href="/neovim-docs-web/en/options#global-local">global-local</a>
	This option specifies a function to be used for thesaurus completion
	with <code>CTRL-X</code> <code>CTRL-T</code>. <a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-T">i_CTRL-X_CTRL-T</a> See <a href="/neovim-docs-web/en/insert#compl-thesaurusfunc">compl-thesaurusfunc</a>.
	The value can be the name of a function, a <a href="/neovim-docs-web/en/eval#lambda">lambda</a> or a <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a>.
	See <a href="/neovim-docs-web/en/options#option-value-function">option-value-function</a> for more information.</div>
<div class="old-help-para">	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">			     <a name="'tildeop'"></a><code class="help-tag-right">'tildeop'</code> <a name="'top'"></a><code class="help-tag">'top'</code> <a name="'notildeop'"></a><code class="help-tag">'notildeop'</code> <a name="'notop'"></a><code class="help-tag">'notop'</code>
<a href="/neovim-docs-web/en/options#'tildeop'">'tildeop'</a> <a href="/neovim-docs-web/en/options#'top'">'top'</a>		boolean	(default off)
			global
	When on: The tilde command "~" behaves like an operator.</div>
<div class="old-help-para">				<a name="'timeout'"></a><code class="help-tag-right">'timeout'</code> <a name="'to'"></a><code class="help-tag">'to'</code> <a name="'notimeout'"></a><code class="help-tag">'notimeout'</code> <a name="'noto'"></a><code class="help-tag">'noto'</code>
<a href="/neovim-docs-web/en/options#'timeout'">'timeout'</a> <a href="/neovim-docs-web/en/options#'to'">'to'</a>		boolean (default on)
			global
	This option and <a href="/neovim-docs-web/en/options#'timeoutlen'">'timeoutlen'</a> determine the behavior when part of a
	mapped key sequence has been received. For example, if <code>&lt;c-f&gt;</code> is
	pressed and <a href="/neovim-docs-web/en/options#'timeout'">'timeout'</a> is set, Nvim will wait <a href="/neovim-docs-web/en/options#'timeoutlen'">'timeoutlen'</a> milliseconds
	for any key that can follow <code>&lt;c-f&gt;</code> in a mapping.</div>
<div class="old-help-para">						<a name="'ttimeout'"></a><code class="help-tag-right">'ttimeout'</code> <a name="'nottimeout'"></a><code class="help-tag">'nottimeout'</code>
<a href="/neovim-docs-web/en/options#'ttimeout'">'ttimeout'</a>		boolean (default on)
			global
	This option and <a href="/neovim-docs-web/en/options#'ttimeoutlen'">'ttimeoutlen'</a> determine the behavior when part of a
	key code sequence has been received by the <a href="/neovim-docs-web/en/term#TUI">TUI</a>.</div>
<div class="old-help-para">	For example if <code>&lt;Esc&gt;</code> (the \x1b byte) is received and <a href="/neovim-docs-web/en/options#'ttimeout'">'ttimeout'</a> is
	set, Nvim waits <a href="/neovim-docs-web/en/options#'ttimeoutlen'">'ttimeoutlen'</a> milliseconds for the terminal to
	complete a key code sequence. If no input arrives before the timeout,
	a single <code>&lt;Esc&gt;</code> is assumed. Many TUI cursor key codes start with <code>&lt;Esc&gt;</code>.</div>
<div class="old-help-para">	On very slow systems this may fail, causing cursor keys not to work
	sometimes.  If you discover this problem you can ":set ttimeoutlen=9999".
	Nvim will wait for the next character to arrive after an <code>&lt;Esc&gt;</code>.</div>
<div class="old-help-para">						<a name="'timeoutlen'"></a><code class="help-tag-right">'timeoutlen'</code> <a name="'tm'"></a><code class="help-tag">'tm'</code>
<a href="/neovim-docs-web/en/options#'timeoutlen'">'timeoutlen'</a> <a href="/neovim-docs-web/en/options#'tm'">'tm'</a>	number	(default 1000)
			global
	Time in milliseconds to wait for a mapped sequence to complete.</div>
<div class="old-help-para">						<a name="'ttimeoutlen'"></a><code class="help-tag-right">'ttimeoutlen'</code> <a name="'ttm'"></a><code class="help-tag">'ttm'</code>
<a href="/neovim-docs-web/en/options#'ttimeoutlen'">'ttimeoutlen'</a> <a href="/neovim-docs-web/en/options#'ttm'">'ttm'</a>	number	(default 50)
			global
	Time in milliseconds to wait for a key code sequence to complete. Also
	used for <code>CTRL-\</code> <code>CTRL-N</code> and <code>CTRL-\</code> <code>CTRL-G</code> when part of a command has
	been typed.</div>
<div class="old-help-para">						<a name="'title'"></a><code class="help-tag-right">'title'</code> <a name="'notitle'"></a><code class="help-tag">'notitle'</code>
<a href="/neovim-docs-web/en/options#'title'">'title'</a>			boolean	(default off)
			global
	When on, the title of the window will be set to the value of
	<a href="/neovim-docs-web/en/options#'titlestring'">'titlestring'</a> (if it is not empty), or to:
		filename [+=-] (path) - NVIM
	Where:
		filename	the name of the file being edited
		-			indicates the file cannot be modified, <a href="/neovim-docs-web/en/options#'ma'">'ma'</a> off
		+		indicates the file was modified
		=		indicates the file is read-only
		=+		indicates the file is read-only and modified
		(path)		is the path of the file being edited
<div class="help-li" style=""> NVIM		the server name <a href="/neovim-docs-web/en/eval#v%3Aservername">v:servername</a> or "NVIM"
</div></div>
<div class="old-help-para">								<a name="'titlelen'"></a><code class="help-tag-right">'titlelen'</code>
<a href="/neovim-docs-web/en/options#'titlelen'">'titlelen'</a>		number	(default 85)
			global
	Gives the percentage of <a href="/neovim-docs-web/en/options#'columns'">'columns'</a> to use for the length of the window
	title.  When the title is longer, only the end of the path name is
	shown.  A '&lt;' character before the path name is used to indicate this.
	Using a percentage makes this adapt to the width of the window.  But
	it won't work perfectly, because the actual number of characters
	available also depends on the font used and other things in the title
	bar.  When <a href="/neovim-docs-web/en/options#'titlelen'">'titlelen'</a> is zero the full path is used.  Otherwise,
	values from 1 to 30000 percent can be used.
	<a href="/neovim-docs-web/en/options#'titlelen'">'titlelen'</a> is also used for the <a href="/neovim-docs-web/en/options#'titlestring'">'titlestring'</a> option.</div>
<div class="old-help-para">						<a name="'titleold'"></a><code class="help-tag-right">'titleold'</code>
<a href="/neovim-docs-web/en/options#'titleold'">'titleold'</a>		string	(default "")
			global
	If not empty, this option will be used to set the window title when
	exiting.  Only if <a href="/neovim-docs-web/en/options#'title'">'title'</a> is enabled.
	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.
						<a name="'titlestring'"></a><code class="help-tag-right">'titlestring'</code>
<a href="/neovim-docs-web/en/options#'titlestring'">'titlestring'</a>		string	(default "")
			global
	When this option is not empty, it will be used for the title of the
	window.  This happens only when the <a href="/neovim-docs-web/en/options#'title'">'title'</a> option is on.</div>
<div class="old-help-para">	When this option contains printf-style '%' items, they will be
	expanded according to the rules used for <a href="/neovim-docs-web/en/options#'statusline'">'statusline'</a>.
	This option cannot be set in a modeline when <a href="/neovim-docs-web/en/options#'modelineexpr'">'modelineexpr'</a> is off.</div>
<div class="old-help-para">	Example:<pre>:auto BufEnter * let &amp;titlestring = hostname() .. "/" .. expand("%:p")
:set title titlestring=%&lt;%F%=%l/%L-%P titlelen=70</pre></div>
<div class="old-help-para">	The value of <a href="/neovim-docs-web/en/options#'titlelen'">'titlelen'</a> is used to align items in the middle or right
	of the available space.
	Some people prefer to have the file name first:<pre>:set titlestring=%t%(\ %M%)%(\ (%{expand(\"%:~:.:h\")})%)%(\ %a%)</pre></div>
<div class="old-help-para">	Note the use of "%{ }" and an expression to get the path of the file,
	without the file name.  The "%( %)" constructs are used to add a
	separating space only when needed.
	NOTE: Use of special characters in <a href="/neovim-docs-web/en/options#'titlestring'">'titlestring'</a> may cause the display
	to be garbled (e.g., when it contains a CR or NL character).</div>
<div class="old-help-para">						<a name="'undodir'"></a><code class="help-tag-right">'undodir'</code> <a name="'udir'"></a><code class="help-tag">'udir'</code> <a name="E5003"></a><code class="help-tag">E5003</code>
<a href="/neovim-docs-web/en/options#'undodir'">'undodir'</a> <a href="/neovim-docs-web/en/options#'udir'">'udir'</a>	string	(default "$XDG_STATE_HOME/nvim/undo//")
			global
	List of directory names for undo files, separated with commas.
	See <a href="/neovim-docs-web/en/options#'backupdir'">'backupdir'</a> for details of the format.
	"." means using the directory of the file.  The undo file name for
	"file.txt" is ".file.txt.un~".
	For other directories the file name is the full path of the edited
	file, with path separators replaced with "%".
	When writing: The first directory that exists is used.  "." always
	works, no directories after "." will be used for writing.  If none of
	the directories exist Nvim will attempt to create the last directory in
	the list.
	When reading all entries are tried to find an undo file.  The first
	undo file that exists is used.  When it cannot be read an error is
	given, no further entry is used.
	See <a href="/neovim-docs-web/en/undo#undo-persistence">undo-persistence</a>.
	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">	Note that unlike <a href="/neovim-docs-web/en/options#'directory'">'directory'</a> and <a href="/neovim-docs-web/en/options#'backupdir'">'backupdir'</a>, <a href="/neovim-docs-web/en/options#'undodir'">'undodir'</a> always acts as
	though the trailing slashes are present (see <a href="/neovim-docs-web/en/options#'backupdir'">'backupdir'</a> for what this
	means).</div>
<div class="old-help-para">				<a name="'undofile'"></a><code class="help-tag-right">'undofile'</code> <a name="'noundofile'"></a><code class="help-tag">'noundofile'</code> <a name="'udf'"></a><code class="help-tag">'udf'</code> <a name="'noudf'"></a><code class="help-tag">'noudf'</code>
<a href="/neovim-docs-web/en/options#'undofile'">'undofile'</a> <a href="/neovim-docs-web/en/options#'udf'">'udf'</a>	boolean	(default off)
			local to buffer
	When on, Vim automatically saves undo history to an undo file when
	writing a buffer to a file, and restores undo history from the same
	file on buffer read.
	The directory where the undo file is stored is specified by <a href="/neovim-docs-web/en/options#'undodir'">'undodir'</a>.
	For more information about this feature see <a href="/neovim-docs-web/en/undo#undo-persistence">undo-persistence</a>.
	The undo file is not read when <a href="/neovim-docs-web/en/options#'undoreload'">'undoreload'</a> causes the buffer from
	before a reload to be saved for undo.
	When <a href="/neovim-docs-web/en/options#'undofile'">'undofile'</a> is turned off the undo file is NOT deleted.</div>
<div class="old-help-para">						<a name="'undolevels'"></a><code class="help-tag-right">'undolevels'</code> <a name="'ul'"></a><code class="help-tag">'ul'</code>
<a href="/neovim-docs-web/en/options#'undolevels'">'undolevels'</a> <a href="/neovim-docs-web/en/options#'ul'">'ul'</a>	number	(default 1000)
			global or local to buffer <a href="/neovim-docs-web/en/options#global-local">global-local</a>
	Maximum number of changes that can be undone.  Since undo information
	is kept in memory, higher numbers will cause more memory to be used.
	Nevertheless, a single change can already use a large amount of memory.
	Set to 0 for Vi compatibility: One level of undo and "u" undoes
	itself:<pre>set ul=0</pre></div>
<div class="old-help-para">	But you can also get Vi compatibility by including the 'u' flag in
	<a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a>, and still be able to use <code>CTRL-R</code> to repeat undo.
	Also see <a href="/neovim-docs-web/en/undo#undo-two-ways">undo-two-ways</a>.
	Set to -1 for no undo at all.  You might want to do this only for the
	current buffer:<pre>setlocal ul=-1</pre></div>
<div class="old-help-para">	This helps when you run out of memory for a single change.</div>
<div class="old-help-para">	The local value is set to -123456 when the global value is to be used.</div>
<div class="old-help-para">	Also see <a href="/neovim-docs-web/en/undo#clear-undo">clear-undo</a>.</div>
<div class="old-help-para">						<a name="'undoreload'"></a><code class="help-tag-right">'undoreload'</code> <a name="'ur'"></a><code class="help-tag">'ur'</code>
<a href="/neovim-docs-web/en/options#'undoreload'">'undoreload'</a> <a href="/neovim-docs-web/en/options#'ur'">'ur'</a>	number	(default 10000)
			global
	Save the whole buffer for undo when reloading it.  This applies to the
	":e!" command and reloading for when the buffer changed outside of
	Vim. <a href="/neovim-docs-web/en/autocmd#FileChangedShell">FileChangedShell</a>
	The save only happens when this option is negative or when the number
	of lines is smaller than the value of this option.
	Set this option to zero to disable undo for a reload.</div>
<div class="old-help-para">	When saving undo for a reload, any undo file is not read.</div>
<div class="old-help-para">	Note that this causes the whole buffer to be stored in memory.  Set
	this option to a lower value if you run out of memory.</div>
<div class="old-help-para">						<a name="'updatecount'"></a><code class="help-tag-right">'updatecount'</code> <a name="'uc'"></a><code class="help-tag">'uc'</code>
<a href="/neovim-docs-web/en/options#'updatecount'">'updatecount'</a> <a href="/neovim-docs-web/en/options#'uc'">'uc'</a>	number	(default: 200)
			global
	After typing this many characters the swap file will be written to
	disk.  When zero, no swap file will be created at all (see chapter on
	recovery <a href="/neovim-docs-web/en/recover#crash-recovery">crash-recovery</a>).  <a href="/neovim-docs-web/en/options#'updatecount'">'updatecount'</a> is set to zero by starting
	Vim with the "-n" option, see <a href="/neovim-docs-web/en/starting#startup">startup</a>.  When editing in readonly
	mode this option will be initialized to 10000.
	The swapfile can be disabled per buffer with <a href="/neovim-docs-web/en/options#'swapfile'">'swapfile'</a>.
	When <a href="/neovim-docs-web/en/options#'updatecount'">'updatecount'</a> is set from zero to non-zero, swap files are
	created for all buffers that have <a href="/neovim-docs-web/en/options#'swapfile'">'swapfile'</a> set.  When <a href="/neovim-docs-web/en/options#'updatecount'">'updatecount'</a>
	is set to zero, existing swap files are not deleted.
	This option has no meaning in buffers where <a href="/neovim-docs-web/en/options#'buftype'">'buftype'</a> is "nofile"
	or "nowrite".</div>
<div class="old-help-para">						<a name="'updatetime'"></a><code class="help-tag-right">'updatetime'</code> <a name="'ut'"></a><code class="help-tag">'ut'</code>
<a href="/neovim-docs-web/en/options#'updatetime'">'updatetime'</a> <a href="/neovim-docs-web/en/options#'ut'">'ut'</a>	number	(default 4000)
			global
	If this many milliseconds nothing is typed the swap file will be
	written to disk (see <a href="/neovim-docs-web/en/recover#crash-recovery">crash-recovery</a>).  Also used for the
	<a href="/neovim-docs-web/en/autocmd#CursorHold">CursorHold</a> autocommand event.</div>
<div class="old-help-para">					<a name="'varsofttabstop'"></a><code class="help-tag-right">'varsofttabstop'</code> <a name="'vsts'"></a><code class="help-tag">'vsts'</code>
<a href="/neovim-docs-web/en/options#'varsofttabstop'">'varsofttabstop'</a> <a href="/neovim-docs-web/en/options#'vsts'">'vsts'</a>	string	(default "")
			local to buffer
	A list of the number of spaces that a <code>&lt;Tab&gt;</code> counts for while editing,
	such as inserting a <code>&lt;Tab&gt;</code> or using <code>&lt;BS&gt;</code>.  It "feels" like variable-
	width <code>&lt;Tab&gt;</code>s are being inserted, while in fact a mixture of spaces
	and <code>&lt;Tab&gt;</code>s is used.  Tab widths are separated with commas, with the
	final value applying to all subsequent tabs.</div>
<div class="old-help-para">	For example, when editing assembly language files where statements
	start in the 9th column and comments in the 41st, it may be useful
	to use the following:<pre>:set varsofttabstop=8,32,8</pre></div>
<div class="old-help-para">	This will set soft tabstops with 8 and 8 + 32 spaces, and 8 more
	for every column thereafter.</div>
<div class="old-help-para">	Note that the value of <a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a> will be ignored while
	<a href="/neovim-docs-web/en/options#'varsofttabstop'">'varsofttabstop'</a> is set.</div>
<div class="old-help-para">						<a name="'vartabstop'"></a><code class="help-tag-right">'vartabstop'</code> <a name="'vts'"></a><code class="help-tag">'vts'</code>
<a href="/neovim-docs-web/en/options#'vartabstop'">'vartabstop'</a> <a href="/neovim-docs-web/en/options#'vts'">'vts'</a>	string	(default "")
			local to buffer
	A list of the number of spaces that a <code>&lt;Tab&gt;</code> in the file counts for,
	separated by commas.  Each value corresponds to one tab, with the
	final value applying to all subsequent tabs. For example:<pre>:set vartabstop=4,20,10,8</pre></div>
<div class="old-help-para">	This will make the first tab 4 spaces wide, the second 20 spaces,
	the third 10 spaces, and all following tabs 8 spaces.</div>
<div class="old-help-para">	Note that the value of <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> will be ignored while <a href="/neovim-docs-web/en/options#'vartabstop'">'vartabstop'</a>
	is set.</div>
<div class="old-help-para">						<a name="'verbose'"></a><code class="help-tag-right">'verbose'</code> <a name="'vbs'"></a><code class="help-tag">'vbs'</code>
<a href="/neovim-docs-web/en/options#'verbose'">'verbose'</a> <a href="/neovim-docs-web/en/options#'vbs'">'vbs'</a>		number	(default 0)
			global
	Sets the verbosity level.  Also set by <a href="/neovim-docs-web/en/starting#-V">-V</a> and <a href="/neovim-docs-web/en/various#%3Averbose">:verbose</a>.</div>
<div class="old-help-para">	Tracing of options in Lua scripts is activated at level 1; Lua scripts
	are not traced with verbose=0, for performance.</div>
<div class="old-help-para">	If greater than or equal to a given level, Nvim produces the following
	messages:</div>
<div class="old-help-para"><div class="help-column_heading">	Level   Messages</div>	----------------------------------------------------------------------
	1	Lua assignments to options, mappings, etc.
	2	When a file is ":source"'ed, or <a href="/neovim-docs-web/en/starting#shada">shada</a> file is read or written.
	3	UI info, terminal capabilities.
	4	Shell commands.
	5	Every searched tags file and include file.
	8	Files for which a group of autocommands is executed.
	9	Executed autocommands.
	11	Finding items in a path.
	12	Vimscript function calls.
	13	When an exception is thrown, caught, finished, or discarded.
	14	Anything pending in a ":finally" clause.
	15	Ex commands from a script (truncated at 200 characters).
	16	Ex commands.</div>
<div class="old-help-para">	If <a href="/neovim-docs-web/en/options#'verbosefile'">'verbosefile'</a> is set then the verbose messages are not displayed.</div>
<div class="old-help-para">						<a name="'verbosefile'"></a><code class="help-tag-right">'verbosefile'</code> <a name="'vfile'"></a><code class="help-tag">'vfile'</code>
<a href="/neovim-docs-web/en/options#'verbosefile'">'verbosefile'</a> <a href="/neovim-docs-web/en/options#'vfile'">'vfile'</a>	string	(default empty)
			global
	When not empty all messages are written in a file with this name.
	When the file exists messages are appended.
	Writing to the file ends when Vim exits or when <a href="/neovim-docs-web/en/options#'verbosefile'">'verbosefile'</a> is made
	empty.  Writes are buffered, thus may not show up for some time.
	Setting <a href="/neovim-docs-web/en/options#'verbosefile'">'verbosefile'</a> to a new value is like making it empty first.
	The difference with <a href="/neovim-docs-web/en/various#%3Aredir">:redir</a> is that verbose messages are not
	displayed when <a href="/neovim-docs-web/en/options#'verbosefile'">'verbosefile'</a> is set.</div>
<div class="old-help-para">						<a name="'viewdir'"></a><code class="help-tag-right">'viewdir'</code> <a name="'vdir'"></a><code class="help-tag">'vdir'</code>
<a href="/neovim-docs-web/en/options#'viewdir'">'viewdir'</a> <a href="/neovim-docs-web/en/options#'vdir'">'vdir'</a>	string	(default: "$XDG_STATE_HOME/nvim/view//")
			global
	Name of the directory where to store files for <a href="/neovim-docs-web/en/starting#%3Amkview">:mkview</a>.
	This option cannot be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> or in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>, for
	security reasons.</div>
<div class="old-help-para">						<a name="'viewoptions'"></a><code class="help-tag-right">'viewoptions'</code> <a name="'vop'"></a><code class="help-tag">'vop'</code>
<a href="/neovim-docs-web/en/options#'viewoptions'">'viewoptions'</a> <a href="/neovim-docs-web/en/options#'vop'">'vop'</a>	string	(default: "folds,cursor,curdir")
			global
	Changes the effect of the <a href="/neovim-docs-web/en/starting#%3Amkview">:mkview</a> command.  It is a comma-separated
	list of words.  Each word enables saving and restoring something:
<div class="help-column_heading">	   word		save and restore</div>	   cursor	cursor position in file and in window
	   curdir	local current directory, if set with <a href="/neovim-docs-web/en/editing#%3Alcd">:lcd</a>
	   folds	manually created folds, opened/closed folds and local
			fold options
	   options	options and mappings local to a window or buffer (not
			global values for local options)
	   localoptions same as "options"
	   slash	<a href="/neovim-docs-web/en/deprecated#deprecated">deprecated</a> Always enabled. Uses "/" in filenames.
	   unix		<a href="/neovim-docs-web/en/deprecated#deprecated">deprecated</a> Always enabled. Uses "\n" line endings.</div>
<div class="old-help-para">					    <a name="'virtualedit'"></a><code class="help-tag-right">'virtualedit'</code> <a name="'ve'"></a><code class="help-tag">'ve'</code>
<a href="/neovim-docs-web/en/options#'virtualedit'">'virtualedit'</a> <a href="/neovim-docs-web/en/options#'ve'">'ve'</a>	string	(default "")
			global or local to window <a href="/neovim-docs-web/en/options#global-local">global-local</a>
	A comma-separated list of these words:
	    block	Allow virtual editing in Visual block mode.
	    insert	Allow virtual editing in Insert mode.
	    all		Allow virtual editing in all modes.
	    onemore	Allow the cursor to move just past the end of the line
	    none	When used as the local value, do not allow virtual
			editing even when the global value is set.  When used
			as the global value, "none" is the same as "".
	    NONE	Alternative spelling of "none".</div>
<div class="old-help-para">	Virtual editing means that the cursor can be positioned where there is
	no actual character.  This can be halfway into a tab or beyond the end
	of the line.  Useful for selecting a rectangle in Visual mode and
	editing a table.
	"onemore" is not the same, it will only allow moving the cursor just
	after the last character of the line.  This makes some commands more
	consistent.  Previously the cursor was always past the end of the line
	if the line was empty.  But it is far from Vi compatible.  It may also
	break some plugins or Vim scripts.  For example because <a href="/neovim-docs-web/en/motion#l">l</a> can move
	the cursor after the last character.  Use with care!
	Using the <code>$</code> command will move to the last character in the line, not
	past it.  This may actually move the cursor to the left!
	The <code>g$</code> command will move to the end of the screen line.
	It doesn't make sense to combine "all" with "onemore", but you will
	not get a warning for it.
	When combined with other words, "none" is ignored.</div>
<div class="old-help-para">			<a name="'visualbell'"></a><code class="help-tag-right">'visualbell'</code> <a name="'vb'"></a><code class="help-tag">'vb'</code> <a name="'novisualbell'"></a><code class="help-tag">'novisualbell'</code> <a name="'novb'"></a><code class="help-tag">'novb'</code> <a name="beep"></a><code class="help-tag">beep</code>
<a href="/neovim-docs-web/en/options#'visualbell'">'visualbell'</a> <a href="/neovim-docs-web/en/options#'vb'">'vb'</a>	boolean	(default off)
			global
	Use visual bell instead of beeping.  Also see <a href="/neovim-docs-web/en/options#'errorbells'">'errorbells'</a>.</div>
<div class="old-help-para">						<a name="'warn'"></a><code class="help-tag-right">'warn'</code> <a name="'nowarn'"></a><code class="help-tag">'nowarn'</code>
<a href="/neovim-docs-web/en/options#'warn'">'warn'</a>			boolean	(default on)
			global
	Give a warning message when a shell command is used while the buffer
	has been changed.</div>
<div class="old-help-para">						<a name="'whichwrap'"></a><code class="help-tag-right">'whichwrap'</code> <a name="'ww'"></a><code class="help-tag">'ww'</code>
<a href="/neovim-docs-web/en/options#'whichwrap'">'whichwrap'</a> <a href="/neovim-docs-web/en/options#'ww'">'ww'</a>	string	(default: "b,s")
			global
	Allow specified keys that move the cursor left/right to move to the
	previous/next line when the cursor is on the first/last character in
	the line.  Concatenate characters to allow this for these keys:
<div class="help-column_heading">		char   key	  mode</div>		 b    <code>&lt;BS&gt;</code>	 Normal and Visual
		 s    <code>&lt;Space&gt;</code>	 Normal and Visual
		 h    "h"	 Normal and Visual (not recommended)
		 l    "l"	 Normal and Visual (not recommended)
		 &lt;    <code>&lt;Left&gt;</code>	 Normal and Visual
		 &gt;    <code>&lt;Right&gt;</code>	 Normal and Visual
		 ~    "~"	 Normal
		 [    <code>&lt;Left&gt;</code>	 Insert and Replace
		 ]    <code>&lt;Right&gt;</code>	 Insert and Replace
	For example:<pre>:set ww=&lt;,&gt;,[,]</pre></div>
<div class="old-help-para">	allows wrap only when cursor keys are used.
	When the movement keys are used in combination with a delete or change
	operator, the <code>&lt;EOL&gt;</code> also counts for a character.  This makes "3h"
	different from "3dh" when the cursor crosses the end of a line.  This
	is also true for "x" and "X", because they do the same as "dl" and
	"dh".  If you use this, you may also want to use the mapping
	":map <code>&lt;BS&gt;</code> X" to make backspace delete the character in front of the
	cursor.
	When 'l' is included and it is used after an operator at the end of a
	line (not an empty line) then it will not move to the next line.  This
	makes "dl", "cl", "yl" etc. work normally.</div>
<div class="old-help-para">						<a name="'wildchar'"></a><code class="help-tag-right">'wildchar'</code> <a name="'wc'"></a><code class="help-tag">'wc'</code>
<a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a> <a href="/neovim-docs-web/en/options#'wc'">'wc'</a>		number	(default: <code>&lt;Tab&gt;</code>)
			global
	Character you have to type to start wildcard expansion in the
	command-line, as specified with <a href="/neovim-docs-web/en/options#'wildmode'">'wildmode'</a>.
	More info here: <a href="/neovim-docs-web/en/cmdline#cmdline-completion">cmdline-completion</a>.
	The character is not recognized when used inside a macro.  See
	<a href="/neovim-docs-web/en/options#'wildcharm'">'wildcharm'</a> for that.
	Some keys will not work, such as <code>CTRL-C</code>, <code>&lt;CR&gt;</code> and Enter.
	Although <a href="/neovim-docs-web/en/options#'wc'">'wc'</a> is a number option, you can set it to a special key:<pre>:set wc=&lt;Tab&gt;</pre></div>
<div class="old-help-para">						<a name="'wildcharm'"></a><code class="help-tag-right">'wildcharm'</code> <a name="'wcm'"></a><code class="help-tag">'wcm'</code>
<a href="/neovim-docs-web/en/options#'wildcharm'">'wildcharm'</a> <a href="/neovim-docs-web/en/options#'wcm'">'wcm'</a>	number	(default: none (0))
			global
	<a href="/neovim-docs-web/en/options#'wildcharm'">'wildcharm'</a> works exactly like <a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a>, except that it is
	recognized when used inside a macro.  You can find "spare" command-line
	keys suitable for this option by looking at <a href="/neovim-docs-web/en/vimindex#ex-edit-index">ex-edit-index</a>.  Normally
	you'll never actually type <a href="/neovim-docs-web/en/options#'wildcharm'">'wildcharm'</a>, just use it in mappings that
	automatically invoke completion mode, e.g.:<pre>:set wcm=&lt;C-Z&gt;
:cnoremap ss so $vim/sessions/*.vim&lt;C-Z&gt;</pre></div>
<div class="old-help-para">	Then after typing :ss you can use <code>CTRL-P</code> &amp; <code>CTRL-N</code>.</div>
<div class="old-help-para">						<a name="'wildignore'"></a><code class="help-tag-right">'wildignore'</code> <a name="'wig'"></a><code class="help-tag">'wig'</code>
<a href="/neovim-docs-web/en/options#'wildignore'">'wildignore'</a> <a href="/neovim-docs-web/en/options#'wig'">'wig'</a>	string	(default "")
			global
	A list of file patterns.  A file that matches with one of these
	patterns is ignored when expanding <a href="/neovim-docs-web/en/editing#wildcards">wildcards</a>, completing file or
	directory names, and influences the result of <a href="/neovim-docs-web/en/builtin#expand()">expand()</a>, <a href="/neovim-docs-web/en/builtin#glob()">glob()</a> and
	<a href="/neovim-docs-web/en/builtin#globpath()">globpath()</a> unless a flag is passed to disable this.
	The pattern is used like with <a href="/neovim-docs-web/en/autocmd#%3Aautocmd">:autocmd</a>, see <a href="/neovim-docs-web/en/autocmd#autocmd-pattern">autocmd-pattern</a>.
	Also see <a href="/neovim-docs-web/en/options#'suffixes'">'suffixes'</a>.
	Example:<pre>:set wildignore=*.o,*.obj</pre></div>
<div class="old-help-para">	The use of <a href="/neovim-docs-web/en/options#%3Aset%2B%3D">:set+=</a> and <a href="/neovim-docs-web/en/options#%3Aset-%3D">:set-=</a> is preferred when adding or removing
	a pattern from the list.  This avoids problems when a future version
	uses another default.</div>
<div class="old-help-para">			<a name="'wildignorecase'"></a><code class="help-tag-right">'wildignorecase'</code> <a name="'wic'"></a><code class="help-tag">'wic'</code> <a name="'nowildignorecase'"></a><code class="help-tag">'nowildignorecase'</code> <a name="'nowic'"></a><code class="help-tag">'nowic'</code>
<a href="/neovim-docs-web/en/options#'wildignorecase'">'wildignorecase'</a> <a href="/neovim-docs-web/en/options#'wic'">'wic'</a>	boolean	(default off)
			global
	When set case is ignored when completing file names and directories.
	Has no effect when <a href="/neovim-docs-web/en/options#'fileignorecase'">'fileignorecase'</a> is set.
	Does not apply when the shell is used to expand wildcards, which
	happens when there are special characters.</div>
<div class="old-help-para">				<a name="'wildmenu'"></a><code class="help-tag-right">'wildmenu'</code> <a name="'wmnu'"></a><code class="help-tag">'wmnu'</code> <a name="'nowildmenu'"></a><code class="help-tag">'nowildmenu'</code> <a name="'nowmnu'"></a><code class="help-tag">'nowmnu'</code>
<a href="/neovim-docs-web/en/options#'wildmenu'">'wildmenu'</a> <a href="/neovim-docs-web/en/options#'wmnu'">'wmnu'</a>	boolean	(default on)
			global
	When <a href="/neovim-docs-web/en/options#'wildmenu'">'wildmenu'</a> is on, command-line completion operates in an enhanced
	mode.  On pressing <a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a> (usually <code>&lt;Tab&gt;</code>) to invoke completion,
	the possible matches are shown.
	When <a href="/neovim-docs-web/en/options#'wildoptions'">'wildoptions'</a> contains "pum", then the completion matches are
	shown in a popup menu.  Otherwise they are displayed just above the
	command line, with the first match highlighted (overwriting the status
	line, if there is one).
	Keys that show the previous/next match, such as <code>&lt;Tab&gt;</code> or
	<code>CTRL-P</code>/CTRL-N, cause the highlight to move to the appropriate match.
	<a href="/neovim-docs-web/en/options#'wildmode'">'wildmode'</a> must specify "full": "longest" and "list" do not start
	<a href="/neovim-docs-web/en/options#'wildmenu'">'wildmenu'</a> mode. You can check the current mode with <a href="/neovim-docs-web/en/builtin#wildmenumode()">wildmenumode()</a>.
	The menu is cancelled when a key is hit that is not used for selecting
	a completion.</div>
<div class="old-help-para">	While the menu is active these keys have special meanings:</div>
<div class="old-help-para">	<code>CTRL-Y</code>		- accept the currently selected match and stop
			  completion.
	<code>CTRL-E</code>		- end completion, go back to what was there before
			  selecting a match.
	<code>&lt;Left&gt;</code> <code>&lt;Right&gt;</code>	- select previous/next match (like <code>CTRL-P</code>/CTRL-N)
	<code>&lt;Down&gt;</code>		- in filename/menu name completion: move into a
			  subdirectory or submenu.
	<code>&lt;CR&gt;</code>		- in menu completion, when the cursor is just after a
			  dot: move into a submenu.
	<code>&lt;Up&gt;</code>		- in filename/menu name completion: move up into
			  parent directory or parent menu.</div>
<div class="old-help-para">	If you want <code>&lt;Left&gt;</code> and <code>&lt;Right&gt;</code> to move the cursor instead of selecting
	a different match, use this:<pre>:cnoremap &lt;Left&gt; &lt;Space&gt;&lt;BS&gt;&lt;Left&gt;
:cnoremap &lt;Right&gt; &lt;Space&gt;&lt;BS&gt;&lt;Right&gt;</pre></div>
<div class="old-help-para">	<a href="/neovim-docs-web/en/syntax#hl-WildMenu">hl-WildMenu</a> highlights the current match.</div>
<div class="old-help-para">						<a name="'wildmode'"></a><code class="help-tag-right">'wildmode'</code> <a name="'wim'"></a><code class="help-tag">'wim'</code>
<a href="/neovim-docs-web/en/options#'wildmode'">'wildmode'</a> <a href="/neovim-docs-web/en/options#'wim'">'wim'</a>	string	(default: "full")
			global
	Completion mode that is used for the character specified with
	<a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a>.  It is a comma-separated list of up to four parts.  Each
	part specifies what to do for each consecutive use of <a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a>.  The
	first part specifies the behavior for the first use of <a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a>,
	The second part for the second use, etc.</div>
<div class="old-help-para">	Each part consists of a colon separated list consisting of the
	following possible values:
	""		Complete only the first match.
	"full"		Complete the next full match.  After the last match,
			the original string is used and then the first match
			again.  Will also start <a href="/neovim-docs-web/en/options#'wildmenu'">'wildmenu'</a> if it is enabled.
	"longest"	Complete till longest common string.  If this doesn't
			result in a longer string, use the next part.
	"list"		When more than one match, list all matches.
	"lastused"	When completing buffer names and more than one buffer
			matches, sort buffers by time last used (other than
			the current buffer).
	When there is only a single match, it is fully completed in all cases.</div>
<div class="old-help-para">	Examples of useful colon-separated values:
	"longest:full"	Like "longest", but also start <a href="/neovim-docs-web/en/options#'wildmenu'">'wildmenu'</a> if it is
			enabled.  Will not complete to the next full match.
	"list:full"	When more than one match, list all matches and
			complete first match.
	"list:longest"	When more than one match, list all matches and
			complete till longest common string.
	"list:lastused" When more than one buffer matches, list all matches
			and sort buffers by time last used (other than the
			current buffer).</div>
<div class="old-help-para">	Examples:<pre>:set wildmode=full</pre></div>
<div class="old-help-para">	Complete first full match, next match, etc.  (the default)<pre>:set wildmode=longest,full</pre></div>
<div class="old-help-para">	Complete longest common string, then each full match<pre>:set wildmode=list:full</pre></div>
<div class="old-help-para">	List all matches and complete each full match<pre>:set wildmode=list,full</pre></div>
<div class="old-help-para">	List all matches without completing, then each full match<pre>:set wildmode=longest,list</pre></div>
<div class="old-help-para">	Complete longest common string, then list alternatives.
	More info here: <a href="/neovim-docs-web/en/cmdline#cmdline-completion">cmdline-completion</a>.</div>
<div class="old-help-para">						<a name="'wildoptions'"></a><code class="help-tag-right">'wildoptions'</code> <a name="'wop'"></a><code class="help-tag">'wop'</code>
<a href="/neovim-docs-web/en/options#'wildoptions'">'wildoptions'</a> <a href="/neovim-docs-web/en/options#'wop'">'wop'</a>	string	(default "pum,tagfile")
			global
	A list of words that change how <a href="/neovim-docs-web/en/cmdline#cmdline-completion">cmdline-completion</a> is done.
	The following values are supported:
	  pum		Display the completion matches using the popup menu
			in the same style as the <a href="/neovim-docs-web/en/insert#ins-completion-menu">ins-completion-menu</a>.
	  tagfile	When using <code>CTRL-D</code> to list matching tags, the kind of
			tag and the file of the tag is listed.	Only one match
			is displayed per line.  Often used tag kinds are:
				d	#define
				f	function</div>
<div class="old-help-para">						<a name="'winaltkeys'"></a><code class="help-tag-right">'winaltkeys'</code> <a name="'wak'"></a><code class="help-tag">'wak'</code>
<a href="/neovim-docs-web/en/options#'winaltkeys'">'winaltkeys'</a> <a href="/neovim-docs-web/en/options#'wak'">'wak'</a>	string	(default "menu")
			global
			<code>{only used in Win32}</code>
	Some GUI versions allow the access to menu entries by using the ALT
	key in combination with a character that appears underlined in the
	menu.  This conflicts with the use of the ALT key for mappings and
	entering special characters.  This option tells what to do:
	  no	Don't use ALT keys for menus.  ALT key combinations can be
		mapped, but there is no automatic handling.
	  yes	ALT key handling is done by the windowing system.  ALT key
		combinations cannot be mapped.
	  menu	Using ALT in combination with a character that is a menu
		shortcut key, will be handled by the windowing system.  Other
		keys can be mapped.
	If the menu is disabled by excluding 'm' from <a href="/neovim-docs-web/en/options#'guioptions'">'guioptions'</a>, the ALT
	key is never used for the menu.
	This option is not used for <code>&lt;F10&gt;</code>; on Win32.</div>
<div class="old-help-para">						<a name="'winbar'"></a><code class="help-tag-right">'winbar'</code> <a name="'wbr'"></a><code class="help-tag">'wbr'</code>
<a href="/neovim-docs-web/en/options#'winbar'">'winbar'</a> <a href="/neovim-docs-web/en/options#'wbr'">'wbr'</a>		string (default empty)
			global or local to window <a href="/neovim-docs-web/en/options#global-local">global-local</a>
	When non-empty, this option enables the window bar and determines its
	contents. The window bar is a bar that's shown at the top of every
	window with it enabled. The value of <a href="/neovim-docs-web/en/options#'winbar'">'winbar'</a> is evaluated like with
	<a href="/neovim-docs-web/en/options#'statusline'">'statusline'</a>.</div>
<div class="old-help-para">	When changing something that is used in <a href="/neovim-docs-web/en/options#'winbar'">'winbar'</a> that does not trigger
	it to be updated, use <a href="/neovim-docs-web/en/various#%3Aredrawstatus">:redrawstatus</a>.</div>
<div class="old-help-para">	Floating windows do not use the global value of <a href="/neovim-docs-web/en/options#'winbar'">'winbar'</a>. The
	window-local value of <a href="/neovim-docs-web/en/options#'winbar'">'winbar'</a> must be set for a floating window to
	have a window bar.</div>
<div class="old-help-para">	This option cannot be set in a modeline when <a href="/neovim-docs-web/en/options#'modelineexpr'">'modelineexpr'</a> is off.</div>
<div class="old-help-para">						<a name="'winblend'"></a><code class="help-tag-right">'winblend'</code> <a name="'winbl'"></a><code class="help-tag">'winbl'</code>
<a href="/neovim-docs-web/en/options#'winblend'">'winblend'</a> <a href="/neovim-docs-web/en/options#'winbl'">'winbl'</a>		number	(default 0)
			local to window
	Enables pseudo-transparency for a floating window. Valid values are in
	the range of 0 for fully opaque window (disabled) to 100 for fully
	transparent background. Values between 0-30 are typically most useful.</div>
<div class="old-help-para">	UI-dependent. Works best with RGB colors. <a href="/neovim-docs-web/en/options#'termguicolors'">'termguicolors'</a></div>
<div class="old-help-para">						<a name="'window'"></a><code class="help-tag-right">'window'</code> <a name="'wi'"></a><code class="help-tag">'wi'</code>
<a href="/neovim-docs-web/en/options#'window'">'window'</a> <a href="/neovim-docs-web/en/options#'wi'">'wi'</a>		number  (default screen height - 1)
			global
	Window height used for <a href="/neovim-docs-web/en/scroll#CTRL-F">CTRL-F</a> and <a href="/neovim-docs-web/en/scroll#CTRL-B">CTRL-B</a> when there is only one
	window and the value is smaller than <a href="/neovim-docs-web/en/options#'lines'">'lines'</a> minus one.  The screen
	will scroll <a href="/neovim-docs-web/en/options#'window'">'window'</a> minus two lines, with a minimum of one.
	When <a href="/neovim-docs-web/en/options#'window'">'window'</a> is equal to <a href="/neovim-docs-web/en/options#'lines'">'lines'</a> minus one <code>CTRL-F</code> and <code>CTRL-B</code> scroll
	in a much smarter way, taking care of wrapping lines.
	When resizing the Vim window, the value is smaller than 1 or more than
	or equal to <a href="/neovim-docs-web/en/options#'lines'">'lines'</a> it will be set to <a href="/neovim-docs-web/en/options#'lines'">'lines'</a> minus 1.
	Note: Do not confuse this with the height of the Vim window, use
	<a href="/neovim-docs-web/en/options#'lines'">'lines'</a> for that.</div>
<div class="old-help-para">						<a name="'winheight'"></a><code class="help-tag-right">'winheight'</code> <a name="'wh'"></a><code class="help-tag">'wh'</code> <a name="E591"></a><code class="help-tag">E591</code>
<a href="/neovim-docs-web/en/options#'winheight'">'winheight'</a> <a href="/neovim-docs-web/en/options#'wh'">'wh'</a>	number	(default 1)
			global
	Minimal number of lines for the current window.  This is not a hard
	minimum, Vim will use fewer lines if there is not enough room.  If the
	focus goes to a window that is smaller, its size is increased, at the
	cost of the height of other windows.
	Set <a href="/neovim-docs-web/en/options#'winheight'">'winheight'</a> to a small number for normal editing.
	Set it to 999 to make the current window fill most of the screen.
	Other windows will be only <a href="/neovim-docs-web/en/options#'winminheight'">'winminheight'</a> high.  This has the drawback
	that ":all" will create only two windows.  To avoid "vim -o 1 2 3 4"
	to create only two windows, set the option after startup is done,
	using the <a href="/neovim-docs-web/en/autocmd#VimEnter">VimEnter</a> event:<pre>au VimEnter * set winheight=999</pre></div>
<div class="old-help-para">	Minimum value is 1.
	The height is not adjusted after one of the commands that change the
	height of the current window.
	<a href="/neovim-docs-web/en/options#'winheight'">'winheight'</a> applies to the current window.  Use <a href="/neovim-docs-web/en/options#'winminheight'">'winminheight'</a> to set
	the minimal height for other windows.</div>
<div class="old-help-para">						<a name="'winhighlight'"></a><code class="help-tag-right">'winhighlight'</code> <a name="'winhl'"></a><code class="help-tag">'winhl'</code>
<a href="/neovim-docs-web/en/options#'winhighlight'">'winhighlight'</a> <a href="/neovim-docs-web/en/options#'winhl'">'winhl'</a>	string (default empty)
			local to window
	Window-local highlights.  Comma-delimited list of highlight
	<a href="/neovim-docs-web/en/syntax#group-name">group-name</a> pairs "{hl-from}:{hl-to},..." where each <code>{hl-from}</code> is
	a <a href="/neovim-docs-web/en/syntax#highlight-groups">highlight-groups</a> item to be overridden by <code>{hl-to}</code> group in
	the window.</div>
<div class="old-help-para">	Note: highlight namespaces take precedence over <a href="/neovim-docs-web/en/options#'winhighlight'">'winhighlight'</a>.
	See <a href="/neovim-docs-web/en/api#nvim_win_set_hl_ns()">nvim_win_set_hl_ns()</a> and <a href="/neovim-docs-web/en/api#nvim_set_hl()">nvim_set_hl()</a>.</div>
<div class="old-help-para">	Highlights of vertical separators are determined by the window to the
	left of the separator.  The <a href="/neovim-docs-web/en/options#'tabline'">'tabline'</a> highlight of a tabpage is
	decided by the last-focused window of the tabpage.  Highlights of
	the popupmenu are determined by the current window.  Highlights in the
	message area cannot be overridden.</div>
<div class="old-help-para">	Example: show a different color for non-current windows:<pre>set winhighlight=Normal:MyNormal,NormalNC:MyNormalNC</pre></div>
<div class="old-help-para">			<a name="'winfixheight'"></a><code class="help-tag-right">'winfixheight'</code> <a name="'wfh'"></a><code class="help-tag">'wfh'</code> <a name="'nowinfixheight'"></a><code class="help-tag">'nowinfixheight'</code> <a name="'nowfh'"></a><code class="help-tag">'nowfh'</code>
<a href="/neovim-docs-web/en/options#'winfixheight'">'winfixheight'</a> <a href="/neovim-docs-web/en/options#'wfh'">'wfh'</a>	boolean	(default off)
			local to window
	Keep the window height when windows are opened or closed and
	<a href="/neovim-docs-web/en/options#'equalalways'">'equalalways'</a> is set.  Also for <a href="/neovim-docs-web/en/windows#CTRL-W_%3D">CTRL-W_=</a>.  Set by default for the
	<a href="/neovim-docs-web/en/windows#preview-window">preview-window</a> and <a href="/neovim-docs-web/en/quickfix#quickfix-window">quickfix-window</a>.
	The height may be changed anyway when running out of room.</div>
<div class="old-help-para">			<a name="'winfixwidth'"></a><code class="help-tag-right">'winfixwidth'</code> <a name="'wfw'"></a><code class="help-tag">'wfw'</code> <a name="'nowinfixwidth'"></a><code class="help-tag">'nowinfixwidth'</code> <a name="'nowfw'"></a><code class="help-tag">'nowfw'</code>
<a href="/neovim-docs-web/en/options#'winfixwidth'">'winfixwidth'</a> <a href="/neovim-docs-web/en/options#'wfw'">'wfw'</a>	boolean	(default off)
			local to window
	Keep the window width when windows are opened or closed and
	<a href="/neovim-docs-web/en/options#'equalalways'">'equalalways'</a> is set.  Also for <a href="/neovim-docs-web/en/windows#CTRL-W_%3D">CTRL-W_=</a>.
	The width may be changed anyway when running out of room.</div>
<div class="old-help-para">						<a name="'winminheight'"></a><code class="help-tag-right">'winminheight'</code> <a name="'wmh'"></a><code class="help-tag">'wmh'</code>
<a href="/neovim-docs-web/en/options#'winminheight'">'winminheight'</a> <a href="/neovim-docs-web/en/options#'wmh'">'wmh'</a>	number	(default 1)
			global
	The minimal height of a window, when it's not the current window.
	This is a hard minimum, windows will never become smaller.
	When set to zero, windows may be "squashed" to zero lines (i.e. just a
	status bar) if necessary.  They will return to at least one line when
	they become active (since the cursor has to have somewhere to go.)
	Use <a href="/neovim-docs-web/en/options#'winheight'">'winheight'</a> to set the minimal height of the current window.
	This option is only checked when making a window smaller.  Don't use a
	large number, it will cause errors when opening more than a few
	windows.  A value of 0 to 3 is reasonable.</div>
<div class="old-help-para">						<a name="'winminwidth'"></a><code class="help-tag-right">'winminwidth'</code> <a name="'wmw'"></a><code class="help-tag">'wmw'</code>
<a href="/neovim-docs-web/en/options#'winminwidth'">'winminwidth'</a> <a href="/neovim-docs-web/en/options#'wmw'">'wmw'</a>	number	(default 1)
			global
	The minimal width of a window, when it's not the current window.
	This is a hard minimum, windows will never become smaller.
	When set to zero, windows may be "squashed" to zero columns (i.e. just
	a vertical separator) if necessary.  They will return to at least one
	line when they become active (since the cursor has to have somewhere
	to go.)
	Use <a href="/neovim-docs-web/en/options#'winwidth'">'winwidth'</a> to set the minimal width of the current window.
	This option is only checked when making a window smaller.  Don't use a
	large number, it will cause errors when opening more than a few
	windows.  A value of 0 to 12 is reasonable.</div>
<div class="old-help-para">						<a name="'winwidth'"></a><code class="help-tag-right">'winwidth'</code> <a name="'wiw'"></a><code class="help-tag">'wiw'</code> <a name="E592"></a><code class="help-tag">E592</code>
<a href="/neovim-docs-web/en/options#'winwidth'">'winwidth'</a> <a href="/neovim-docs-web/en/options#'wiw'">'wiw'</a>	number	(default 20)
			global
	Minimal number of columns for the current window.  This is not a hard
	minimum, Vim will use fewer columns if there is not enough room.  If
	the current window is smaller, its size is increased, at the cost of
	the width of other windows.  Set it to 999 to make the current window
	always fill the screen.  Set it to a small number for normal editing.
	The width is not adjusted after one of the commands to change the
	width of the current window.
	<a href="/neovim-docs-web/en/options#'winwidth'">'winwidth'</a> applies to the current window.  Use <a href="/neovim-docs-web/en/options#'winminwidth'">'winminwidth'</a> to set
	the minimal width for other windows.</div>
<div class="old-help-para">						<a name="'wrap'"></a><code class="help-tag-right">'wrap'</code> <a name="'nowrap'"></a><code class="help-tag">'nowrap'</code>
<a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a>			boolean	(default on)
			local to window
	This option changes how text is displayed.  It doesn't change the text
	in the buffer, see <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> for that.
	When on, lines longer than the width of the window will wrap and
	displaying continues on the next line.  When off lines will not wrap
	and only part of long lines will be displayed.  When the cursor is
	moved to a part that is not shown, the screen will scroll
	horizontally.
	The line will be broken in the middle of a word if necessary.  See
	<a href="/neovim-docs-web/en/options#'linebreak'">'linebreak'</a> to get the break at a word boundary.
	To make scrolling horizontally a bit more useful, try this:<pre>:set sidescroll=5
:set listchars+=precedes:&lt;,extends:&gt;</pre></div>
<div class="old-help-para">	See <a href="/neovim-docs-web/en/options#'sidescroll'">'sidescroll'</a>, <a href="/neovim-docs-web/en/options#'listchars'">'listchars'</a> and <a href="/neovim-docs-web/en/intro#wrap-off">wrap-off</a>.
	This option can't be set from a <a href="/neovim-docs-web/en/options#modeline">modeline</a> when the <a href="/neovim-docs-web/en/options#'diff'">'diff'</a> option is
	on.</div>
<div class="old-help-para">						<a name="'wrapmargin'"></a><code class="help-tag-right">'wrapmargin'</code> <a name="'wm'"></a><code class="help-tag">'wm'</code>
<a href="/neovim-docs-web/en/options#'wrapmargin'">'wrapmargin'</a> <a href="/neovim-docs-web/en/options#'wm'">'wm'</a>	number	(default 0)
			local to buffer
	Number of characters from the right window border where wrapping
	starts.  When typing text beyond this limit, an <code>&lt;EOL&gt;</code> will be inserted
	and inserting continues on the next line.
	Options that add a margin, such as <a href="/neovim-docs-web/en/options#'number'">'number'</a> and <a href="/neovim-docs-web/en/options#'foldcolumn'">'foldcolumn'</a>, cause
	the text width to be further reduced.
	When <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> is non-zero, this option is not used.
	See also <a href="/neovim-docs-web/en/options#'formatoptions'">'formatoptions'</a> and <a href="/neovim-docs-web/en/insert#ins-textwidth">ins-textwidth</a>.</div>
<div class="old-help-para">				   <a name="'wrapscan'"></a><code class="help-tag-right">'wrapscan'</code> <a name="'ws'"></a><code class="help-tag">'ws'</code> <a name="'nowrapscan'"></a><code class="help-tag">'nowrapscan'</code> <a name="'nows'"></a><code class="help-tag">'nows'</code>
<a href="/neovim-docs-web/en/options#'wrapscan'">'wrapscan'</a> <a href="/neovim-docs-web/en/options#'ws'">'ws'</a>		boolean	(default on)			<a name="E384"></a><code class="help-tag-right">E384</code> <a name="E385"></a><code class="help-tag">E385</code>
			global
	Searches wrap around the end of the file.  Also applies to <a href="/neovim-docs-web/en/spell#%5Ds">]s</a> and
	<a href="/neovim-docs-web/en/spell#%5Bs">[s</a>, searching for spelling mistakes.</div>
<div class="old-help-para">						   <a name="'write'"></a><code class="help-tag-right">'write'</code> <a name="'nowrite'"></a><code class="help-tag">'nowrite'</code>
<a href="/neovim-docs-web/en/options#'write'">'write'</a>			boolean	(default on)
			global
	Allows writing files.  When not set, writing a file is not allowed.
	Can be used for a view-only mode, where modifications to the text are
	still allowed.  Can be reset with the <a href="/neovim-docs-web/en/starting#-m">-m</a> or <a href="/neovim-docs-web/en/starting#-M">-M</a> command line
	argument.  Filtering text is still possible, even though this requires
	writing a temporary file.</div>
<div class="old-help-para">				   <a name="'writeany'"></a><code class="help-tag-right">'writeany'</code> <a name="'wa'"></a><code class="help-tag">'wa'</code> <a name="'nowriteany'"></a><code class="help-tag">'nowriteany'</code> <a name="'nowa'"></a><code class="help-tag">'nowa'</code>
<a href="/neovim-docs-web/en/options#'writeany'">'writeany'</a> <a href="/neovim-docs-web/en/options#'wa'">'wa'</a>		boolean	(default off)
			global
	Allows writing to any file with no need for "!" override.</div>
<div class="old-help-para">			     <a name="'writebackup'"></a><code class="help-tag-right">'writebackup'</code> <a name="'wb'"></a><code class="help-tag">'wb'</code> <a name="'nowritebackup'"></a><code class="help-tag">'nowritebackup'</code> <a name="'nowb'"></a><code class="help-tag">'nowb'</code>
<a href="/neovim-docs-web/en/options#'writebackup'">'writebackup'</a> <a href="/neovim-docs-web/en/options#'wb'">'wb'</a>	boolean	(default on)
			global
	Make a backup before overwriting a file.  The backup is removed after
	the file was successfully written, unless the <a href="/neovim-docs-web/en/options#'backup'">'backup'</a> option is
	also on.
	WARNING: Switching this option off means that when Vim fails to write
	your buffer correctly and then, for whatever reason, Vim exits, you
	lose both the original file and what you were writing.  Only reset
	this option if your file system is almost full and it makes the write
	fail (and make sure not to exit Vim until the write was successful).
	See <a href="/neovim-docs-web/en/editing#backup-table">backup-table</a> for another explanation.
	When the <a href="/neovim-docs-web/en/options#'backupskip'">'backupskip'</a> pattern matches, a backup is not made anyway.
	Depending on <a href="/neovim-docs-web/en/options#'backupcopy'">'backupcopy'</a> the backup is a new file or the original
	file renamed (and a new file is written).</div>
<div class="old-help-para">						<a name="'writedelay'"></a><code class="help-tag-right">'writedelay'</code> <a name="'wd'"></a><code class="help-tag">'wd'</code>
<a href="/neovim-docs-web/en/options#'writedelay'">'writedelay'</a> <a href="/neovim-docs-web/en/options#'wd'">'wd'</a>	number	(default 0)
			global
	The number of milliseconds to wait for each character sent to the
	screen.  When positive, characters are sent to the UI one by one.
	See <a href="/neovim-docs-web/en/options#'redrawdebug'">'redrawdebug'</a> for more options.  For debugging purposes.</div>

  
  