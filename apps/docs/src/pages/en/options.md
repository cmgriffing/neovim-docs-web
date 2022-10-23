---
title: Tree Sitter
description: Some page
layout: ../../layouts/MainLayout.astro
---


## <a id="" class="section-title" href="#">*Options.Txt*	Nvim</a> 

VIM REFERENCE MANUAL	  by Bram Moolenaar


### <a id="options" class="section-title" href="#options">Options</a>

For an overview of options see quickref.txt [option-list](#option-list).

Vim has a number of internal variables and switches which can be set to
achieve special effects.  These options come in three forms:
boolean		can only be on or off		*boolean* *toggle*
number		has a numeric value
string		has a string value

Type [gO](#gO) to see the table of contents.


## <a id="set-option E764" class="section-title" href="#set-option E764">1. Setting Options</a> 

### <a id=":se :set" class="section-title" href="#:se :set">Note:</a>
:se[t][!]		Show all options that differ from their default value.
When [!] is present every option is on a separate
line.

:se[t][!] all		Show all options.
When [!] is present every option is on a separate
line.

### <a id="E518 E519" class="section-title" href="#E518 E519">Note:</a>
:se[t] {option}?	Show value of {option}.

:se[t] {option}		Toggle option: set, switch it on.
Number option: show value.
String option: show value.

:se[t] no{option}	Toggle option: Reset, switch it off.

### <a id=":set-! :set-inv" class="section-title" href="#:set-! :set-inv">Note:</a>
:se[t] {option}!   or
:se[t] inv{option}	Toggle option: Invert value.

### <a id=":set-default :set-& :set-&vi :set-&vim" class="section-title" href="#:set-default :set-& :set-&vi :set-&vim">Note:</a>
:se[t] {option}&	Reset option to its default value.
:se[t] {option}&vi	Reset option to its Vi default value.
:se[t] {option}&vim	Reset option to its Vim default value.

:se[t] all&		Set all options to their default value.  The values of
these options are not changed:
'columns'
'lines'
Warning: This may have a lot of side effects.

### <a id=":set-args E487 E521" class="section-title" href="#:set-args E487 E521">Note:</a>
:se[t] {option}={value}		or
:se[t] {option}:{value}
Set string or number option to {value}.
For numeric options the value can be given in decimal,
hex (preceded with 0x) or octal (preceded with '0').
The old value can be inserted by typing 'wildchar' (by
default this is a <Tab>).  See [cmdline-completion](#cmdline-completion).
White space between {option} and '=' is allowed and
will be ignored.  White space between '=' and {value}
is not allowed.
See [option-backslash](#option-backslash) for using white space and
backslashes in {value}.

### <a id=":set+=" class="section-title" href="#:set+=">:se[t] {option}+={value}</a>
Add the {value} to a number option, or append the
{value} to a string option.  When the option is a
comma-separated list, a comma is added, unless the
value was empty.
If the option is a list of flags, superfluous flags
are removed.  When adding a flag that was already
present the option value doesn't change.
Also see [:set-args](#:set-args) above.

### <a id=":set^=" class="section-title" href="#:set^=">:se[t] {option}^={value}</a>
Multiply the {value} to a number option, or prepend
the {value} to a string option.  When the option is a
comma-separated list, a comma is added, unless the
value was empty.
Also see [:set-args](#:set-args) above.

### <a id=":set-=" class="section-title" href="#:set-=">:se[t] {option}-={value}</a>
Subtract the {value} from a number option, or remove
the {value} from a string option, if it is there.
If the {value} is not found in a string option, there
is no error or warning.  When the option is a comma-
separated list, a comma is deleted, unless the option
becomes empty.
When the option is a list of flags, {value} must be
exactly as they appear in the option.  Remove flags
one by one to avoid problems.
Also see [:set-args](#:set-args) above.

The {option} arguments to ":set" may be repeated.  For example:
```
:set ai nosi sw=3 ts=3
If you make an error in one of the arguments, an error message will be given
and the following arguments will be ignored.

### <a id=":set-verbose" class="section-title" href="#:set-verbose">Note:</a>
When 'verbose' is non-zero, displaying an option value will also tell where it
was last set.  Example:
```
:verbose set shiftwidth cindent?

```
  shiftwidth=4 ~
Last set from modeline line 1 ~
cindent ~
Last set from /usr/local/share/vim/vim60/ftplugin/c.vim line 30 ~
This is only done when specific option values are requested, not for ":verbose
set all" or ":verbose set" without an argument.
When the option was set by hand there is no "Last set" message.
When the option was set while executing a function, user command or
autocommand, the script in which it was defined is reported.
A few special texts:
Last set from modeline line 1 ~
Option was set in a [modeline](#modeline).
Last set from --cmd argument ~
Option was set with command line argument [--cmd](#--cmd) or +.
Last set from -c argument ~
Option was set with command line argument [-c|, +, |-S](#-c|, +, |-S) or
[-q](#-q).
Last set from environment variable ~
Option was set from $VIMINIT.
Last set from error handler ~
Option was cleared when evaluating it resulted in an error.

### <a id="option-backslash" class="section-title" href="#option-backslash">Note:</a>
To include white space in a string option value it has to be preceded with a
backslash.  To include a backslash you have to use two.  Effectively this
means that the number of backslashes in an option value is halved (rounded
down).
A few examples:
```
:set tags=tags\ /usr/tags	    results in "tags /usr/tags"
:set tags=tags\\,file	    results in "tags\,file"
:set tags=tags\\\ file	    results in "tags\ file"

The "|" character separates a ":set" command from a following command.  To
include the "[" in the option value, use "\](#" in the option value, use "\)" instead.  This example sets the
'titlestring' option to "hi|there":
```
:set titlestring=hi\|there
This sets the 'titlestring' option to "hi" and 'iconstring' to "there":
```
:set titlestring=hi|set iconstring=there

Similarly, the double quote character starts a comment.  To include the '"' in
the option value, use '\"' instead.  This example sets the 'titlestring'
option to 'hi "there"':
```
:set titlestring=hi\ \"there\"

For Win32 backslashes in file names are mostly not removed.  More precise: For
options that expect a file name (those where environment variables are
expanded) a backslash before a normal file name character is not removed.  But
a backslash before a special character (space, backslash, comma, etc.) is used
like explained above.
There is one special situation, when the value starts with "\\":
```
:set dir=\\machine\path	    results in "\\machine\path"
:set dir=\\\\machine\\path	    results in "\\machine\path"
:set dir=\\path\\file	    results in "\\path\file" (wrong!)
For the first one the start is kept, but for the second one the backslashes
are halved.  This makes sure it works both when you expect backslashes to be
halved and when you expect the backslashes to be kept.  The third gives a
result which is probably not what you want.  Avoid it.

### <a id="add-option-flags remove-option-flags" class="section-title" href="#add-option-flags remove-option-flags">Note:</a>
### <a id="E539 E550 E551 E552" class="section-title" href="#E539 E550 E551 E552">Note:</a>
Some options are a list of flags.  When you want to add a flag to such an
option, without changing the existing ones, you can do it like this:
```
:set guioptions+=a
Remove a flag from an option like this:
```
:set guioptions-=a
This removes the 'a' flag from 'guioptions'.
Note that you should add or remove one flag at a time.  If 'guioptions' has
the value "ab", using "set guioptions-=ba" won't work, because the string "ba"
doesn't appear.

### <a id=":set_env expand-env expand-environment-var" class="section-title" href="#:set_env expand-env expand-environment-var">Note:</a>
Environment variables in specific string options will be expanded.  If the
environment variable exists the '$' and the following environment variable
name is replaced with its value.  If it does not exist the '$' and the name
are not modified.  Any non-id character (not a letter, digit or '_') may
follow the environment variable name.  That character and what follows is
appended to the value of the environment variable.  Examples:
```
:set term=$TERM.new
:set path=/usr/$INCLUDE,$HOME/include,.
When adding or removing a string from an option with ":set opt-=val" or ":set
opt+=val" the expansion is done before the adding or removing.


### <a id="local-options" class="section-title" href="#local-options">Handling of local options</a>

Some of the options only apply to a window or buffer.  Each window or buffer
has its own copy of this option, thus each can have its own value.  This
allows you to set 'list' in one window but not in another.  And set
'shiftwidth' to 3 in one buffer and 4 in another.

The following explains what happens to these local options in specific
situations.  You don't really need to know all of this, since Vim mostly uses
the option values you would expect.  Unfortunately, doing what the user
expects is a bit complicated...

When splitting a window, the local options are copied to the new window.  Thus
right after the split the contents of the two windows look the same.

When editing a new buffer, its local option values must be initialized.  Since
the local options of the current buffer might be specifically for that buffer,
these are not used.  Instead, for each buffer-local option there also is a
global value, which is used for new buffers.  With ":set" both the local and
global value is changed.  With "setlocal" only the local value is changed,
thus this value is not used when editing a new buffer.

When editing a buffer that has been edited before, the options from the window
that was last closed are used again.  If this buffer has been edited in this
window, the values from back then are used.  Otherwise the values from the
last closed window where the buffer was edited last are used.

It's possible to set a local window option specifically for a type of buffer.
When you edit another buffer in the same window, you don't want to keep
using these local window options.  Therefore Vim keeps a global value of the
local window options, which is used when editing another buffer.  Each window
has its own copy of these values.  Thus these are local to the window, but
global to all buffers in the window.  With this you can do:
```
:e one
:set list
:e two
Now the 'list' option will also be set in "two", since with the ":set list"
command you have also set the global value.
```
:set nolist
:e one
:setlocal list
:e two
Now the 'list' option is not set, because ":set nolist" resets the global
value, ":setlocal list" only changes the local value and ":e two" gets the
global value.  Note that if you do this next:
```
:e one
You will get back the 'list' value as it was the last time you edited "one".
The options local to a window are remembered for each buffer.  This also
happens when the buffer is not loaded, but they are lost when the buffer is
wiped out [:bwipe](#:bwipe).

### <a id=":setl :setlocal" class="section-title" href="#:setl :setlocal">Note:</a>
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
shown (but that might change in the future).

:setl[ocal] {option}<	Set the local value of {option} to its global value by
copying the value.

:se[t] {option}<	For [global-local](#global-local) options: Remove the local value of
{option}, so that the global value will be used.

### <a id=":setg :setglobal" class="section-title" href="#:setg :setglobal">Note:</a>
:setg[lobal][!] ...	Like ":set" but set only the global value for a local
option without changing the local value.
When displaying an option, the global value is shown.
With the "all" argument: display global values for all
local options.
Without argument: display global values for all local
options which are different from the default.

For buffer-local and window-local options:
Command		 global value	    local value ~
:set option=value	     set		set
:setlocal option=value	      -			set
:setglobal option=value	     set		 -
:set option?	      -		       display
:setlocal option?	      -		       display
:setglobal option?	    display		 -


### <a id="global-local" class="section-title" href="#global-local">Global options with a local value</a>

Options are global when you mostly use one value for all buffers and windows.
For some global options it's useful to sometimes have a different local value.
You can set the local value with ":setlocal".  That buffer or window will then
use the local value, while other buffers and windows continue using the global
value.

For example, you have two windows, both on C source code.  They use the global
'makeprg' option.  If you do this in one of the two windows:
```
:set makeprg=gmake
then the other window will switch to the same value.  There is no need to set
the 'makeprg' option in the other C source window too.
However, if you start editing a Perl file in a new window, you want to use
another 'makeprg' for it, without changing the value used for the C source
files.  You use this command:
```
:setlocal makeprg=perlmake
You can switch back to using the global value by making the local value empty:
```
:setlocal makeprg=
This only works for a string option.  For a number or boolean option you need
to use the "<" flag, like this:
```
:setlocal autoread<
Note that for non-boolean and non-number options using "<" copies the global
value to the local value, it doesn't switch back to using the global value
(that matters when the global value changes later).  You can also use:
```
:set path<
This will make the local value of 'path' empty, so that the global value is
used.  Thus it does the same as:
```
:setlocal path=
Note: In the future more global options can be made [global-local](#global-local).  Using
":setlocal" on a global option might work differently then.


### <a id="option-value-function" class="section-title" href="#option-value-function">Note:</a>
Some options ('completefunc', 'imactivatefunc', 'imstatusfunc', 'omnifunc',
'operatorfunc', 'quickfixtextfunc' and 'tagfunc') are set to a function name
or a function reference or a lambda function.  Examples:
```
set opfunc=MyOpFunc
set opfunc=function("MyOpFunc")
set opfunc=funcref("MyOpFunc")
set opfunc={t\ ->\ MyOpFunc(t)}

```


Setting the filetype

### <a id=":setf :setfiletype" class="section-title" href="#:setf :setfiletype">:setf[iletype] [FALLBACK] {filetype}</a>
Set the 'filetype' option to {filetype}, but only if
not done yet in a sequence of (nested) autocommands.
This is short for:
```
:if !did_filetype()
:  setlocal filetype={filetype}
:endif

```
			This command is used in a filetype.vim file to avoid
setting the 'filetype' option twice, causing different
settings and syntax files to be loaded.

When the optional FALLBACK argument is present, a
later :setfiletype command will override the
'filetype'.  This is to be used for filetype
detections that are just a guess.  [did_filetype()](#did_filetype())
will return false after this command.

### <a id="option-window optwin" class="section-title" href="#option-window optwin">Note:</a>
### <a id=":set-browse :browse-set :opt :options" class="section-title" href="#:set-browse :browse-set :opt :options">:bro[wse] se[t]</a>
:opt[ions]		Open a window for viewing and setting all options.
Options are grouped by function.
Offers short help for each option.  Hit <CR> on the
short help to open a help window with more help for
the option.
Modify the value of the option and hit <CR> on the
"set" line to set the new value.  For window and
buffer specific options, the last accessed window is
used to set the option value in, unless this is a help
window, in which case the window below help window is
used (skipping the option-window).

### <a id="$HOME" class="section-title" href="#$HOME">Note:</a>
Using "~" is like using "$HOME", but it is only recognized at the start of an
option and after a space or comma.

On Unix systems "~user" can be used too.  It is replaced by the home directory
of user "user".  Example:
```
:set path=~mool/include,/usr/include,.

On Unix systems the form "${HOME}" can be used too.  The name between {} can
contain non-id characters then.  Note that if you want to use this for the
"gf" command, you need to add the '{' and '}' characters to 'isfname'.

NOTE: expanding environment variables and "~/" is only done with the ":set"
command, not when assigning a value to an option with ":let".

### <a id="$HOME-windows" class="section-title" href="#$HOME-windows">Note:</a>
On MS-Windows, if $HOME is not defined as an environment variable, then
at runtime Vim will set it to the expansion of $HOMEDRIVE$HOMEPATH.
If $HOMEDRIVE is not set then $USERPROFILE is used.

This expanded value is not exported to the environment, this matters when
running an external command:
```
:echo system('set | findstr ^HOME=')
and
```
:echo luaeval('os.getenv("HOME")')
should echo nothing (an empty string) despite exists('$HOME') being true.
When setting $HOME to a non-empty string it will be exported to the
subprocesses.


Note the maximum length of an expanded option is limited.  How much depends on
the system, mostly it is something like 256 or 1024 characters.


## <a id="auto-setting" class="section-title" href="#auto-setting">2. Automatically Setting Options</a> 

Besides changing options with the ":set" command, there are three alternatives
to set options automatically for one or more files:

1. When starting Vim initializations are read from various places.  See
[initialization](#initialization).  Most of them are performed for all editing sessions,
and some of them depend on the directory where Vim is started.
You can create an initialization file with [:mkvimrc|, |:mkview](#:mkvimrc|, |:mkview) and
[:mksession](#:mksession).
2. If you start editing a new file, the automatic commands are executed.
This can be used to set options for files matching a particular pattern and
many other things.  See [autocommand](#autocommand).
3. If you start editing a new file, and the 'modeline' option is on, a
number of lines at the beginning and end of the file are checked for
modelines.  This is explained here.

### <a id="modeline vim: vi: ex: E520" class="section-title" href="#modeline vim: vi: ex: E520">Note:</a>
There are two forms of modelines.  The first form:
[text{white}]{vi:[vim:](#vim:)ex:}[white]{options}

[text{white}]		empty or any text followed by at least one blank
character (<Space> or <Tab>); "ex:" always requires at
least one blank character
{vi:[vim:](#vim:)ex:}		the string "vi:", "vim:" or "ex:"
[white]			optional white space
{options}		a list of option settings, separated with white space
or ':', where each part between ':' is the argument
for a ":set" command (can be empty)

Examples:
vi:noai:sw=3 ts=6 ~
vim: tw=77 ~

The second form (this is compatible with some versions of Vi):

[text{white}]{vi:[vim:|Vim:](#vim:|Vim:)ex:}[white]se[t] {options}:[text]

[text{white}]		empty or any text followed by at least one blank
character (<Space> or <Tab>); "ex:" always requires at
least one blank character
{vi:[vim:|Vim:](#vim:|Vim:)ex:}	the string "vi:", "vim:", "Vim:" or "ex:"
[white]			optional white space
se[t]			the string "set " or "se " (note the space); When
"Vim" is used it must be "set".
{options}		a list of options, separated with white space, which
is the argument for a ":set" command
:			a colon
[text]			any text or empty

Examples:
### <a id="/ vim: set ai tw=75: / ~" class="section-title" href="#/ vim: set ai tw=75: / ~">Note:</a>
### <a id="/ Vim: set ai tw=75: / ~" class="section-title" href="#/ Vim: set ai tw=75: / ~">Note:</a>

The white space before {vi:[vim:|Vim:](#vim:|Vim:)ex:} is required.  This minimizes the
chance that a normal word like "lex:" is caught.  There is one exception:
"vi:" and "vim:" can also be at the start of the line (for compatibility with
version 3.0).  Using "ex:" at the start of the line will be ignored (this
could be short for "example:").

If the modeline is disabled within a modeline, subsequent modelines will be
ignored.  This is to allow turning off modeline on a per-file basis.  This is
useful when a line looks like a modeline but isn't.  For example, it would be
good to start a YAML file containing strings like "vim:" with
# vim: nomodeline ~
so as to avoid modeline misdetection.  Following options on the same line
after modeline deactivation, if any, are still evaluated (but you would
normally not have any).

### <a id="modeline-local" class="section-title" href="#modeline-local">Note:</a>
The options are set like with ":setlocal": The new value only applies to the
buffer and window that contain the file.  Although it's possible to set global
options from a modeline, this is unusual.  If you have two windows open and
the files in it set the same global option to a different value, the result
depends on which one was opened last.

When editing a file that was already loaded, only the window-local options
from the modeline are used.  Thus if you manually changed a buffer-local
option after opening the file, it won't be changed if you edit the same buffer
in another window.  But window-local options will be set.

### <a id="modeline-version" class="section-title" href="#modeline-version">Note:</a>
If the modeline is only to be used for some versions of Vim, the version
number can be specified where "vim:" or "Vim:" is used:
vim{vers}:	version {vers} or later
vim<{vers}:	version before {vers}
vim={vers}:	version {vers}
vim>{vers}:	version after {vers}
{vers} is 700 for Vim 7.0 (hundred times the major version plus minor).
For example, to use a modeline only for Vim 7.0:
/* vim700: set foldmethod=marker */ ~
To use a modeline for Vim after version 7.2:
/* vim>702: set cole=2: */ ~
There can be no blanks between "vim" and the ":".
The modeline is ignored if {vers} does not fit in an integer.


The number of lines that are checked can be set with the 'modelines' option.
If 'modeline' is off or 'modelines' is 0 no lines are checked.

Note that for the first form all of the rest of the line is used, thus a line
like:
### <a id="/ vi:ts=4: / ~" class="section-title" href="#/ vi:ts=4: / ~">Note:</a>
will give an error message for the trailing "*/".  This line is OK:
### <a id="/ vi:set ts=4: / ~" class="section-title" href="#/ vi:set ts=4: / ~">Note:</a>

If an error is detected the rest of the line is skipped.

If you want to include a ':' in a set command precede it with a '\'.  The
backslash in front of the ':' will be removed.  Example:
### <a id="/ vi:set fillchars=stl\:^,vert\:\[: / ~" class="section-title" href="#/ vi:set fillchars=stl\:^,vert\:\](#: / ~" class="section-title" href="#/ vi:set fillchars=stl\:^,vert\:\): / ~">Note:</a>
This sets the 'fillchars' option to "stl:^,vert:\|".  Only a single backslash
before the ':' is removed.  Thus to include "\:" you have to specify "\\:".
### <a id="E992" class="section-title" href="#E992">Note:</a>
No other commands than "set" are supported, for security reasons (somebody
might create a Trojan horse text file with modelines).  And not all options
can be set.  For some options a flag is set, so that when the value is used
the [sandbox](#sandbox) is effective.  Some options can only be set from the modeline
when 'modelineexpr' is set (the default is off).

Still, there is always a small risk that a modeline causes trouble.  E.g.,
when some joker sets 'textwidth' to 5 all your lines are wrapped unexpectedly.
So disable modelines before editing untrusted text.  The mail ftplugin does
this, for example.

Hint: If you would like to do something else than setting an option, you could
define an autocommand that checks the file for a specific string.  For
example:
```
au BufReadPost * if getline(1) =~ "VAR" [ call SetVar() ](# call SetVar() ) endif
And define a function SetVar() that does something with the line containing
"VAR".


## <a id="option-summary" class="section-title" href="#option-summary">3. Options Summary</a> 

In the list below all the options are mentioned with their full name and with
an abbreviation if there is one.  Both forms may be used.

In this document when a boolean option is "set" that means that ":set option"
is entered.  When an option is "reset", ":set nooption" is used.

Most options are the same in all windows and buffers.  There are a few that
are specific to how the text is presented in a window.  These can be set to a
different value in each window.  For example the 'list' option can be set in
one window and reset in another for the same text, giving both types of view
at the same time.  There are a few options that are specific to a certain
file.  These can have a different value for each file or buffer.  For example
the 'textwidth' option can be 78 for a normal text file and 0 for a C
program.

global			one option for all buffers and windows
local to window		each window has its own copy of this option
local to buffer		each buffer has its own copy of this option

When creating a new window the option values from the currently active window
are used as a default value for the window-specific options.  For the
buffer-specific options this depends on the 's' and 'S' flags in the
'cpoptions' option.  If 's' is included (which is the default) the values for
buffer options are copied from the currently active buffer when a buffer is
first entered.  If 'S' is present the options are copied each time the buffer
is entered, this is almost like having global options.  If 's' and 'S' are not
present, the options are copied from the currently active buffer when the
buffer is created.

### <a id="hidden-options" class="section-title" href="#hidden-options">Hidden options</a>

Not all options are supported in all versions.  This depends on the supported
features and sometimes on the system.  A remark about this is in curly braces
below.  When an option is not supported it may still be set without getting an
error, this is called a hidden option.  You can't get the value of a hidden
option though, it is not stored.

To test if option "foo" can be used with ":set" use something like this:
```
if exists('&foo')
This also returns true for a hidden option.  To test if option "foo" is really
supported use something like this:
```
if exists('+foo')

```

### <a id="E355" class="section-title" href="#E355">Note:</a>
A jump table for the options with a short description can be found at [Q_op](#Q_op).

### <a id="'aleph' 'al' aleph Aleph" class="section-title" href="#'aleph' 'al' aleph Aleph">Note:</a>
'aleph' 'al'		number	(default 224)
global
The ASCII code for the first letter of the Hebrew alphabet.  The
routine that maps the keyboard in Hebrew mode, both in Insert mode
(when hkmap is set) and on the command-line (when hitting CTRL-_)
outputs the Hebrew characters in the range [aleph..aleph+26].
aleph=128 applies to PC code, and aleph=224 applies to ISO 8859-8.
See [rileft.txt](#rileft.txt).

### <a id="'allowrevins' 'ari' 'noallowrevins' 'noari'" class="section-title" href="#'allowrevins' 'ari' 'noallowrevins' 'noari'">Note:</a>
'allowrevins' 'ari'	boolean	(default off)
global
Allow CTRL-_ in Insert and Command-line mode.  This is default off, to
avoid that users that accidentally type CTRL-_ instead of SHIFT-_ get
into reverse Insert mode, and don't know how to get out.  See
'revins'.

### <a id="'ambiwidth' 'ambw'" class="section-title" href="#'ambiwidth' 'ambw'">Note:</a>
'ambiwidth' 'ambw'	string (default: "single")
global
Tells Vim what to do with characters with East Asian Width Class
Ambiguous (such as Euro, Registered Sign, Copyright Sign, Greek
letters, Cyrillic letters).

There are currently two possible values:
"single":	Use the same width as characters in US-ASCII.  This is
expected by most users.
"double":	Use twice the width of ASCII characters.
### <a id="E834 E835" class="section-title" href="#E834 E835">Note:</a>
The value "double" cannot be used if 'listchars' or 'fillchars'
contains a character that would be double width.  These errors may
also be given when calling setcellwidths().

The values are overruled for characters specified with
[setcellwidths()](#setcellwidths()).

There are a number of CJK fonts for which the width of glyphs for
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
(https://www.unicode.org/reports/tr11).

### <a id="'autochdir' 'acd' 'noautochdir' 'noacd'" class="section-title" href="#'autochdir' 'acd' 'noautochdir' 'noacd'">Note:</a>
'autochdir' 'acd'	boolean (default off)
global
When on, Vim will change the current working directory whenever you
open a file, switch buffers, delete a buffer or open/close a window.
It will change to the directory containing the file which was opened
or selected.  When a buffer has no name it also has no directory, thus
the current directory won't change when navigating to it.
Note: When this option is on some plugins may not work.

### <a id="'arabic' 'arab' 'noarabic' 'noarab'" class="section-title" href="#'arabic' 'arab' 'noarabic' 'noarab'">Note:</a>
'arabic' 'arab'		boolean (default off)
local to window
This option can be set to start editing Arabic text.
Setting this option will:
- Set the 'rightleft' option, unless 'termbidi' is set.
- Set the 'arabicshape' option, unless 'termbidi' is set.
- Set the 'keymap' option to "arabic"; in Insert mode CTRL-^ toggles
between typing English and Arabic key mapping.
- Set the 'delcombine' option

Resetting this option will:
- Reset the 'rightleft' option.
- Disable the use of 'keymap' (without changing its value).
Note that 'arabicshape' and 'delcombine' are not reset (it is a global
option).
Also see [arabic.txt](#arabic.txt).

### <a id="'arabicshape' 'arshape'" class="section-title" href="#'arabicshape' 'arshape'">Note:</a>
### <a id="'noarabicshape' 'noarshape'" class="section-title" href="#'noarabicshape' 'noarshape'">Note:</a>
'arabicshape' 'arshape'	boolean (default on)
global
When on and 'termbidi' is off, the required visual character
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
further details see [arabic.txt](#arabic.txt).

### <a id="'autoindent' 'ai' 'noautoindent' 'noai'" class="section-title" href="#'autoindent' 'ai' 'noautoindent' 'noai'">Note:</a>
'autoindent' 'ai'	boolean	(default on)
local to buffer
Copy indent from current line when starting a new line (typing <CR>
in Insert mode or when using the "o" or "O" command).  If you do not
type anything on the new line except <BS> or CTRL-D and then type

```
Esc>, CTRL-O or <CR>, the indent is deleted again.  Moving the cursor
to another line has the same effect, unless the 'I' flag is included
in 'cpoptions'.
When autoindent is on, formatting (with the "gq" command or when you
reach 'textwidth' in Insert mode) uses the indentation of the first
line.
When 'smartindent' or 'cindent' is on the indent is changed in
a different way.
The 'autoindent' option is reset when the 'paste' option is set and
restored when 'paste' is reset.
{small difference from Vi: After the indent is deleted when typing

```
Esc> or <CR>, the cursor position when moving up or down is after the
deleted indent; Vi puts the cursor somewhere in the deleted indent}.

### <a id="'autoread' 'ar' 'noautoread' 'noar'" class="section-title" href="#'autoread' 'ar' 'noautoread' 'noar'">Note:</a>
'autoread' 'ar'		boolean	(default on)
global or local to buffer [global-local](#global-local)
When a file has been detected to have been changed outside of Vim and
it has not been changed inside of Vim, automatically read it again.
When the file has been deleted this is not done, so you have the text
from before it was deleted.  When it appears again then it is read.
[timestamp](#timestamp)
If this option has a local value, use this command to switch back to
using the global value:
```
:set autoread<

```

### <a id="'autowrite' 'aw' 'noautowrite' 'noaw'" class="section-title" href="#'autowrite' 'aw' 'noautowrite' 'noaw'">Note:</a>
'autowrite' 'aw'	boolean	(default off)
global
Write the contents of the file, if it has been modified, on each
`:next`, `:rewind`, `:last`, `:first`, `:previous`, `:stop`,
`:suspend`, `:tag`, `:!`, `:make`, CTRL-] and CTRL-^ command; and when
a `:buffer`, CTRL-O, CTRL-I, '{A-Z0-9}, or `{A-Z0-9} command takes one
to another file.
A buffer is not written if it becomes hidden, e.g. when 'bufhidden' is
set to "hide" and `:next` is used.
Note that for some commands the 'autowrite' option is not used, see
'autowriteall' for that.
Some buffers will not be written, specifically when 'buftype' is
"nowrite", "nofile", "terminal" or "prompt".

### <a id="'autowriteall' 'awa' 'noautowriteall' 'noawa'" class="section-title" href="#'autowriteall' 'awa' 'noautowriteall' 'noawa'">Note:</a>
'autowriteall' 'awa'	boolean	(default off)
global
Like 'autowrite', but also used for commands ":edit", ":enew", ":quit",
":qall", ":exit", ":xit", ":recover" and closing the Vim window.
Setting this option also implies that Vim behaves like 'autowrite' has
been set.

### <a id="'background' 'bg'" class="section-title" href="#'background' 'bg'">Note:</a>
'background' 'bg'	string	(default "dark")
global
When set to "dark" or "light", adjusts the default color groups for
that background type.  The [TUI](#TUI) or other UI sets this on startup
(triggering [OptionSet](#OptionSet)) if it can detect the background color.

This option does NOT change the background color, it tells Nvim what
the "inherited" (terminal/GUI) background looks like.
See [:hi-normal](#:hi-normal) if you want to set the background color explicitly.
### <a id="g:colors_name" class="section-title" href="#g:colors_name">Note:</a>
When a color scheme is loaded (the "g:colors_name" variable is set)
setting 'background' will cause the color scheme to be reloaded.  If
the color scheme adjusts to the value of 'background' this will work.
However, if the color scheme sets 'background' itself the effect may
be undone.  First delete the "g:colors_name" variable when needed.

Normally this option would be set in the vimrc file.  Possibly
depending on the terminal name.  Example:
```
:if $TERM ==# "xterm"
:  set background=dark
:endif

```
	When this option is set, the default settings for the highlight groups
will change.  To use other settings, place ":highlight" commands AFTER
the setting of the 'background' option.
This option is also used in the "$VIMRUNTIME/syntax/syntax.vim" file
to select the colors for syntax highlighting.  After changing this
option, you must load syntax.vim again to see the result.  This can be
done with ":syntax on".

### <a id="'backspace' 'bs'" class="section-title" href="#'backspace' 'bs'">Note:</a>
'backspace' 'bs'	string	(default "indent,eol,start")
global
Influences the working of <BS>, <Del>, CTRL-W and CTRL-U in Insert
mode.  This is a list of items, separated by commas.  Each item allows
a way to backspace over something:
value	effect	~
indent	allow backspacing over autoindent
eol	allow backspacing over line breaks (join lines)
start	allow backspacing over the start of insert; CTRL-W and CTRL-U
stop once at the start of insert.
nostop	like start, except CTRL-W and CTRL-U do not stop at the start of
insert.

When the value is empty, Vi compatible backspacing is used, none of
the ways mentioned for the items above are possible.

For backwards compatibility with version 5.4 and earlier:
value	effect	~
0	same as ":set backspace=" (Vi compatible)
1	same as ":set backspace=indent,eol"
2	same as ":set backspace=indent,eol,start"
3	same as ":set backspace=indent,eol,nostop"

### <a id="'backup' 'bk' 'nobackup' 'nobk'" class="section-title" href="#'backup' 'bk' 'nobackup' 'nobk'">Note:</a>
'backup' 'bk'		boolean	(default off)
global
Make a backup before overwriting a file.  Leave it around after the
file has been successfully written.  If you do not want to keep the
backup file, but you do want a backup while the file is being
written, reset this option and set the 'writebackup' option (this is
the default).  If you do not want a backup file at all reset both
options (use this if your file system is almost full).  See the
[backup-table](#backup-table) for more explanations.
When the 'backupskip' pattern matches, a backup is not made anyway.
When 'patchmode' is set, the backup may be renamed to become the
oldest version of a file.

### <a id="'backupcopy' 'bkc'" class="section-title" href="#'backupcopy' 'bkc'">Note:</a>
'backupcopy' 'bkc'	string	(default: "auto")
global or local to buffer [global-local](#global-local)
When writing a file and a backup is made, this option tells how it's
done.  This is a comma-separated list of words.

The main values are:
"yes"	make a copy of the file and overwrite the original one
"no"	rename the file and write a new one
"auto"	one of the previous, what works best

Extra values that can be combined with the ones above are:
"breaksymlink"	always break symlinks when writing
"breakhardlink"	always break hardlinks when writing

Making a copy and overwriting the original file:
- Takes extra time to copy the file.
+ When the file has special attributes, is a (hard/symbolic) link or
has a resource fork, all this is preserved.
- When the file is a link the backup will have the name of the link,
not of the real file.

Renaming the file and writing a new one:
+ It's fast.
- Sometimes not all attributes of the file can be copied to the new
file.
- When the file is a link the new file will not be a link.

The "auto" value is the middle way: When Vim sees that renaming the
file is possible without side effects (the attributes can be passed on
and the file is not a link) that is used.  When problems are expected,
a copy will be made.

The "breaksymlink" and "breakhardlink" values can be used in
combination with any of "yes", "no" and "auto".  When included, they
force Vim to always break either symbolic or hard links by doing
exactly what the "no" option does, renaming the original file to
become the backup and writing a new file in its place.  This can be
useful for example in source trees where all the files are symbolic or
hard links and any changes should stay in the local source tree, not
be propagated back to the original source.
### <a id="crontab" class="section-title" href="#crontab">Note:</a>
One situation where "no" and "auto" will cause problems: A program
that opens a file, invokes Vim to edit that file, and then tests if
the open file was changed (through the file descriptor) will check the
backup file instead of the newly created file.  "crontab -e" is an
example.

When a copy is made, the original file is truncated and then filled
with the new text.  This means that protection bits, owner and
symbolic links of the original file are unmodified.  The backup file,
however, is a new file, owned by the user who edited the file.  The
group of the backup is set to the group of the original file.  If this
fails, the protection bits for the group are made the same as for
others.

When the file is renamed, this is the other way around: The backup has
the same attributes of the original file, and the newly written file
is owned by the current user.  When the file was a (hard/symbolic)
link, the new file will not!  That's why the "auto" value doesn't
rename when the file is a link.  The owner and group of the newly
written file will be set to the same ones as the original file, but
the system may refuse to do this.  In that case the "auto" value will
again not rename the file.

### <a id="'backupdir' 'bdir'" class="section-title" href="#'backupdir' 'bdir'">Note:</a>
'backupdir' 'bdir'	string	(default ".,$XDG_STATE_HOME/nvim/backup//")
global
List of directories for the backup file, separated with commas.
- The backup file will be created in the first directory in the list
where this is possible.  If none of the directories exist Nvim will
attempt to create the last directory in the list.
- Empty means that no backup file will be created ('patchmode' is
impossible!).  Writing may fail because of this.
- A directory "." means to put the backup file in the same directory
as the edited file.
- A directory starting with "./" (or ".\" for MS-Windows) means to put
the backup file relative to where the edited file is.  The leading
"." is replaced with the path name of the edited file.
("." inside a directory name has no special meaning).
- Spaces after the comma are ignored, other spaces are considered part
of the directory name.  To have a space at the start of a directory
name, precede it with a backslash.
- To include a comma in a directory name precede it with a backslash.
- A directory name may end in an '/'.
- For Unix and Win32, if a directory ends in two path separators "//",
the swap file name will be built from the complete path to the file
with all path separators changed to percent '%' signs. This will
ensure file name uniqueness in the backup directory.
On Win32, it is also possible to end with "\\".  However, When a
separating comma is following, you must use "//", since "\\" will
include the comma in the file name. Therefore it is recommended to
use '//', instead of '\\'.
- Environment variables are expanded [:set_env](#:set_env).
- Careful with '\' characters, type one before a space, type two to
get one in the option (see [option-backslash](#option-backslash)), for example:
```
:set bdir=c:\\tmp,\ dir\\,with\\,commas,\\\ dir\ with\ spaces

```
	- For backwards compatibility with Vim version 3.0 a '>' at the start
of the option is removed.
See also 'backup' and 'writebackup' options.
If you want to hide your backup files on Unix, consider this value:
```
:set backupdir=./.backup,~/.backup,.,/tmp

```
	You must create a ".backup" directory in each directory and in your
home directory for this to work properly.
The use of [:set+=| and |:set-=](#:set+=| and |:set-=) is preferred when adding or removing
directories from the list.  This avoids problems when a future version
uses another default.
This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'backupext' 'bex' E589" class="section-title" href="#'backupext' 'bex' E589">Note:</a>
'backupext' 'bex'	string	(default "~")
global
String which is appended to a file name to make the name of the
backup file.  The default is quite unusual, because this avoids
accidentally overwriting existing files with a backup file.  You might
prefer using ".bak", but make sure that you don't have files with
".bak" that you want to keep.
Only normal file name characters can be used; "/\*?[|<>" are illegal.

If you like to keep a lot of backups, you could use a BufWritePre
autocommand to change 'backupext' just before writing the file to
include a timestamp.
```
### <a id=":au BufWritePre  let &bex = '-' .. strftime("%Y%b%d%X") .. '~'" class="section-title" href="#:au BufWritePre  let &bex = '-' .. strftime("%Y%b%d%X") .. '~'">Note:</a>

```
	Use 'backupdir' to put the backup in a different directory.

### <a id="'backupskip' 'bsk'" class="section-title" href="#'backupskip' 'bsk'">Note:</a>
'backupskip' 'bsk'	string	(default: "$TMPDIR/*,$TMP/*,$TEMP/*"
### <a id="Unix: "/tmp/,$TMPDIR/,$TMP/,$TEMP/"" class="section-title" href="#Unix: "/tmp/,$TMPDIR/,$TMP/,$TEMP/"">Note:</a>
### <a id="Mac: "/private/tmp/,$TMPDIR/,$TMP/,$TEMP/")" class="section-title" href="#Mac: "/private/tmp/,$TMPDIR/,$TMP/,$TEMP/")">Note:</a>
global
A list of file patterns.  When one of the patterns matches with the
name of the file which is written, no backup file is created.  Both
the specified file name and the full path name of the file are used.
The pattern is used like with [:autocmd|, see |autocmd-pattern](#:autocmd|, see |autocmd-pattern).
Watch out for special characters, see [option-backslash](#option-backslash).
When $TMPDIR, $TMP or $TEMP is not defined, it is not used for the
### <a id=""/tmp/" is only used for Unix." class="section-title" href="#"/tmp/" is only used for Unix.">	default value.</a>

WARNING: Not having a backup file means that when Vim fails to write
your buffer correctly and then, for whatever reason, Vim exits, you
lose both the original file and what you were writing.  Only disable
backups if you don't care about losing the file.

Note that environment variables are not expanded.  If you want to use
$HOME you must expand it explicitly, e.g.:
```
### <a id=":let &backupskip = escape(expand('$HOME'), '\') .. '/tmp/'" class="section-title" href="#:let &backupskip = escape(expand('$HOME'), '\') .. '/tmp/'">Note:</a>


```
	Note that the default also makes sure that "crontab -e" works (when a
backup would be made by renaming the original file crontab won't see
the newly created file).  Also see 'backupcopy' and [crontab](#crontab).

### <a id="'belloff' 'bo'" class="section-title" href="#'belloff' 'bo'">Note:</a>
'belloff' 'bo'		string	(default "all")
global
Specifies for which events the bell will not be rung. It is a comma-
separated list of items. For each item that is present, the bell
will be silenced. This is most useful to specify specific events in
insert mode to be silenced.

item	    meaning when present	~
all	    All events.
backspace   When hitting <BS> or <Del> and deleting results in an
error.
cursor	    Fail to move around using the cursor keys or

```
PageUp>/<PageDown> in [Insert-mode](#Insert-mode).
complete    Error occurred when using [i_CTRL-X_CTRL-K](#i_CTRL-X_CTRL-K) or
[i_CTRL-X_CTRL-T](#i_CTRL-X_CTRL-T).
copy	    Cannot copy char from insert mode using [i_CTRL-Y](#i_CTRL-Y) or
[i_CTRL-E](#i_CTRL-E).
ctrlg	    Unknown Char after <C-G> in Insert mode.
error	    Other Error occurred (e.g. try to join last line)
(mostly used in [Normal-mode| or |Cmdline-mode](#Normal-mode| or |Cmdline-mode)).
esc	    hitting <Esc> in [Normal-mode](#Normal-mode).
hangul	    Ignored.
lang	    Calling the beep module for Lua/Mzscheme/TCL.
mess	    No output available for [g<](#g<).
showmatch   Error occurred for 'showmatch' function.
operator    Empty region error [cpo-E](#cpo-E).
register    Unknown register after <C-R> in [Insert-mode](#Insert-mode).
shell	    Bell from shell output [:!](#:!).
spell	    Error happened on spell suggest.
wildmode    More matches in [cmdline-completion](#cmdline-completion) available
(depends on the 'wildmode' setting).

This is most useful to fine tune when in Insert mode the bell should
be rung. For Normal mode and Ex commands, the bell is often rung to
indicate that an error occurred. It can be silenced by adding the
"error" keyword.

### <a id="'binary' 'bin' 'nobinary' 'nobin'" class="section-title" href="#'binary' 'bin' 'nobinary' 'nobin'">Note:</a>
'binary' 'bin'		boolean	(default off)
local to buffer
This option should be set before editing a binary file.  You can also
use the [-b](#-b) Vim argument.  When this option is switched on a few
options will be changed (also when it already was on):
'textwidth'  will be set to 0
'wrapmargin' will be set to 0
'modeline'   will be off
'expandtab'  will be off
Also, 'fileformat' and 'fileformats' options will not be used, the
file is read and written like 'fileformat' was "unix" (a single <NL>
separates lines).
The 'fileencoding' and 'fileencodings' options will not be used, the
file is read without conversion.
NOTE: When you start editing a(nother) file while the 'bin' option is
on, settings from autocommands may change the settings again (e.g.,
'textwidth'), causing trouble when editing.  You might want to set
'bin' again when the file has been loaded.
The previous values of these options are remembered and restored when
'bin' is switched from on to off.  Each buffer has its own set of
saved option values.
To edit a file with 'binary' set you can use the [++bin](#++bin) argument.
This avoids you have to do ":set bin", which would have effect for all
files you edit.
When writing a file the <EOL> for the last line is only written if
there was one in the original file (normally Vim appends an <EOL> to
the last line if there is none; this would make the file longer).  See
the 'endofline' option.

### <a id="'bomb' 'nobomb'" class="section-title" href="#'bomb' 'nobomb'">Note:</a>
'bomb'			boolean	(default off)
local to buffer
When writing a file and the following conditions are met, a BOM (Byte
Order Mark) is prepended to the file:
- this option is on
- the 'binary' option is off
- 'fileencoding' is "utf-8", "ucs-2", "ucs-4" or one of the little/big
endian variants.
Some applications use the BOM to recognize the encoding of the file.
Often used for UCS-2 files on MS-Windows.  For other applications it
causes trouble, for example: "cat file1 file2" makes the BOM of file2
appear halfway through the resulting file.  Gcc doesn't accept a BOM.
When Vim reads a file and 'fileencodings' starts with "ucs-bom", a
check for the presence of the BOM is done and 'bomb' set accordingly.
Unless 'binary' is set, it is removed from the first line, so that you
don't see it when editing.  When you don't change the options, the BOM
will be restored when writing the file.

### <a id="'breakat' 'brk'" class="section-title" href="#'breakat' 'brk'">Note:</a>
### <a id="string	(default " ^I!@-+;:,./?")" class="section-title" href="#string	(default " ^I!@-+;:,./?")">'breakat' 'brk'</a>
global
This option lets you choose which characters might cause a line
break if 'linebreak' is on.  Only works for ASCII characters.

### <a id="'breakindent' 'bri' 'nobreakindent' 'nobri'" class="section-title" href="#'breakindent' 'bri' 'nobreakindent' 'nobri'">Note:</a>
'breakindent' 'bri'	boolean (default off)
local to window
Every wrapped line will continue visually indented (same amount of
space as the beginning of that line), thus preserving horizontal blocks
of text.

### <a id="'breakindentopt' 'briopt'" class="section-title" href="#'breakindentopt' 'briopt'">Note:</a>
'breakindentopt' 'briopt' string (default empty)
local to window
Settings for 'breakindent'. It can consist of the following optional
items and must be separated by a comma:
min:{n}	    Minimum text width that will be kept after
applying 'breakindent', even if the resulting
text should normally be narrower. This prevents
text indented almost to the right window border
occupying lot of vertical space when broken.
shift:{n}   After applying 'breakindent', the wrapped line's
beginning will be shifted by the given number of
characters.  It permits dynamic French paragraph
indentation (negative) or emphasizing the line
continuation (positive).
sbr	    Display the 'showbreak' value before applying the
additional indent.
list:{n}    Adds an additional indent for lines that match a
numbered or bulleted list (using the
'formatlistpat' setting).
list:-1	    Uses the length of a match with 'formatlistpat'
for indentation.
The default value for min is 20, shift and list is 0.

### <a id="'browsedir' 'bsdir'" class="section-title" href="#'browsedir' 'bsdir'">Note:</a>
'browsedir' 'bsdir'	string	(default: "last")
global
Which directory to use for the file browser:
last		Use same directory as with last file browser, where a
file was opened or saved.
buffer	Use the directory of the related buffer.
current	Use the current directory.
{path}	Use the specified directory

### <a id="'bufhidden' 'bh'" class="section-title" href="#'bufhidden' 'bh'">Note:</a>
'bufhidden' 'bh'	string (default: "")
local to buffer
This option specifies what happens when a buffer is no longer
displayed in a window:

```
empty>	follow the global 'hidden' option
hide		hide the buffer (don't unload it), even if 'hidden' is
not set
unload	unload the buffer, even if 'hidden' is set; the
[:hide](#:hide) command will also unload the buffer
delete	delete the buffer from the buffer list, even if
'hidden' is set; the [:hide](#:hide) command will also delete
the buffer, making it behave like [:bdelete](#:bdelete)
wipe		wipe the buffer from the buffer list, even if
'hidden' is set; the [:hide](#:hide) command will also wipe
out the buffer, making it behave like [:bwipeout](#:bwipeout)

CAREFUL: when "unload", "delete" or "wipe" is used changes in a buffer
are lost without a warning.  Also, these values may break autocommands
that switch between buffers temporarily.
This option is used together with 'buftype' and 'swapfile' to specify
special kinds of buffers.   See [special-buffers](#special-buffers).

### <a id="'buflisted' 'bl' 'nobuflisted' 'nobl' E85" class="section-title" href="#'buflisted' 'bl' 'nobuflisted' 'nobl' E85">Note:</a>
'buflisted' 'bl'	boolean (default: on)
local to buffer
When this option is set, the buffer shows up in the buffer list.  If
it is reset it is not used for ":bnext", "ls", the Buffers menu, etc.
This option is reset by Vim for buffers that are only used to remember
a file name or marks.  Vim sets it when starting to edit a buffer.
But not when moving to a buffer with ":buffer".

### <a id="'buftype' 'bt' E382" class="section-title" href="#'buftype' 'bt' E382">Note:</a>
'buftype' 'bt'		string (default: "")
local to buffer
The value of this option specifies the type of a buffer:

```
empty>	normal buffer
acwrite	buffer will always be written with [BufWriteCmd](#BufWriteCmd)s
help		help buffer (do not set this manually)
nofile	buffer is not related to a file, will not be written
nowrite	buffer will not be written
quickfix	list of errors [:cwindow| or locations |:lwindow](#:cwindow| or locations |:lwindow)
terminal	[terminal-emulator](#terminal-emulator) buffer
prompt	buffer where only the last line can be edited, meant
to be used by a plugin, see [prompt-buffer](#prompt-buffer)

This option is used together with 'bufhidden' and 'swapfile' to
specify special kinds of buffers.   See [special-buffers](#special-buffers).
Also see [win_gettype()](#win_gettype()), which returns the type of the window.

Be careful with changing this option, it can have many side effects!
One such effect is that Vim will not check the timestamp of the file,
if the file is changed by another program this will not be noticed.

A "quickfix" buffer is only used for the error list and the location
list.  This value is set by the [:cwindow| and |:lwindow](#:cwindow| and |:lwindow) commands and
you are not supposed to change it.

"nofile" and "nowrite" buffers are similar:
both:		The buffer is not to be written to disk, ":w" doesn't
work (":w filename" does work though).
both:		The buffer is never considered to be ['modified'](#'modified').
There is no warning when the changes will be lost, for
example when you quit Vim.
both:		A swap file is only created when using too much memory
(when 'swapfile' has been reset there is never a swap
file).
nofile only:	The buffer name is fixed, it is not handled like a
file name.  It is not modified in response to a [:cd](#:cd)
command.
both:		When using ":e bufname" and already editing "bufname"
the buffer is made empty and autocommands are
triggered as usual for [:edit](#:edit).
### <a id="E676" class="section-title" href="#E676">Note:</a>
"acwrite" implies that the buffer name is not related to a file, like
"nofile", but it will be written.  Thus, in contrast to "nofile" and
"nowrite", ":w" does work and a modified buffer can't be abandoned
without saving.  For writing there must be matching [BufWriteCmd](#BufWriteCmd),
[FileWriteCmd| or |FileAppendCmd](#FileWriteCmd| or |FileAppendCmd) autocommands.

### <a id="'casemap' 'cmp'" class="section-title" href="#'casemap' 'cmp'">Note:</a>
'casemap' 'cmp'		string	(default: "internal,keepascii")
global
Specifies details about changing the case of letters.  It may contain
these words, separated by a comma:
internal	Use internal case mapping functions, the current
locale does not change the case mapping. When
"internal" is omitted, the towupper() and towlower()
system library functions are used when available.
keepascii	For the ASCII characters (0x00 to 0x7f) use the US
case mapping, the current locale is not effective.
This probably only matters for Turkish.

### <a id="'cdhome' 'cdh'" class="section-title" href="#'cdhome' 'cdh'">Note:</a>
'cdhome' 'cdh'		boolean	(default: off)
global
When on, [:cd|, |:tcd| and |:lcd](#:cd|, |:tcd| and |:lcd) without an argument changes the
current working directory to the [$HOME](#$HOME) directory like in Unix.
When off, those commands just print the current directory name.
On Unix this option has no effect.

### <a id="'cdpath' 'cd' E344 E346" class="section-title" href="#'cdpath' 'cd' E344 E346">Note:</a>
'cdpath' 'cd'		string	(default: equivalent to $CDPATH or ",,")
global
This is a list of directories which will be searched when using the
[:cd|, |:tcd| and |:lcd](#:cd|, |:tcd| and |:lcd) commands, provided that the directory being
searched for has a relative path, not an absolute part starting with
"/", "./" or "../", the 'cdpath' option is not used then.
The 'cdpath' option's value has the same form and semantics as
['path'|.  Also see |file-searching](#'path'|.  Also see |file-searching).
The default value is taken from $CDPATH, with a "," prepended to look
in the current directory first.
If the default value taken from $CDPATH is not what you want, include
a modified version of the following command in your vimrc file to
override it:
```
:let &cdpath = ',' .. substitute(substitute($CDPATH, '[, ]', '\\\0', 'g'), ':', ',', 'g')

```
	This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.
(parts of 'cdpath' can be passed to the shell to expand file names).

### <a id="'cedit'" class="section-title" href="#'cedit'">Note:</a>
'cedit'			string	(default: CTRL-F)
global
The key used in Command-line Mode to open the command-line window.
Only non-printable keys are allowed.
The key can be specified as a single character, but it is difficult to
type.  The preferred way is to use the <> notation.  Examples:
```
:exe "set cedit=\<C-Y>"
:exe "set cedit=\<Esc>"

```
	[Nvi](#Nvi) also has this option, but it only uses the first character.
See [cmdwin](#cmdwin).

### <a id="'channel'" class="section-title" href="#'channel'">Note:</a>
'channel'		number (default: 0)
local to buffer
[channel](#channel) connected to the buffer, or 0 if no channel is connected.
In a [:terminal](#:terminal) buffer this is the terminal channel.
Read-only.

### <a id="'charconvert' 'ccv' E202 E214 E513" class="section-title" href="#'charconvert' 'ccv' E202 E214 E513">Note:</a>
'charconvert' 'ccv'	string (default "")
global
An expression that is used for character encoding conversion.  It is
evaluated when a file that is to be read or has been written has a
different encoding from what is desired.
'charconvert' is not used when the internal iconv() function is
supported and is able to do the conversion.  Using iconv() is
preferred, because it is much faster.
'charconvert' is not used when reading stdin [--](#--), because there is no
file to convert from.  You will have to save the text in a file first.
The expression must return zero, false or an empty string for success,
non-zero or true for failure.
See [encoding-names](#encoding-names) for possible encoding names.
Additionally, names given in 'fileencodings' and 'fileencoding' are
used.
Conversion between "latin1", "unicode", "ucs-2", "ucs-4" and "utf-8"
is done internally by Vim, 'charconvert' is not used for this.
Also used for Unicode conversion.
Example:
```
set charconvert=CharConvert()
fun CharConvert()
system("recode "
\ .. v:charconvert_from .. ".." .. v:charconvert_to
\ .. " <" .. v:fname_in .. " >" .. v:fname_out)
return v:shell_error
endfun

```
	The related Vim variables are:
v:charconvert_from	name of the current encoding
v:charconvert_to	name of the desired encoding
v:fname_in		name of the input file
v:fname_out		name of the output file
Note that v:fname_in and v:fname_out will never be the same.
This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'cindent' 'cin' 'nocindent' 'nocin'" class="section-title" href="#'cindent' 'cin' 'nocindent' 'nocin'">Note:</a>
'cindent' 'cin'		boolean	(default off)
local to buffer
Enables automatic C program indenting.  See 'cinkeys' to set the keys
that trigger reindenting in insert mode and 'cinoptions' to set your
preferred indent style.
If 'indentexpr' is not empty, it overrules 'cindent'.
If 'lisp' is not on and both 'indentexpr' and 'equalprg' are empty,
the "=" operator indents using this algorithm rather than calling an
external program.
See [C-indenting](#C-indenting).
When you don't like the way 'cindent' works, try the 'smartindent'
option or 'indentexpr'.
This option is not used when 'paste' is set.

### <a id="'cinkeys' 'cink'" class="section-title" href="#'cinkeys' 'cink'">Note:</a>
'cinkeys' 'cink'	string	(default "0{,0},0),0],:,0#,!^F,o,O,e")
local to buffer
A list of keys that, when typed in Insert mode, cause reindenting of
the current line.  Only used if 'cindent' is on and 'indentexpr' is
empty.
For the format of this option see [cinkeys-format](#cinkeys-format).
See [C-indenting](#C-indenting).

### <a id="'cinoptions' 'cino'" class="section-title" href="#'cinoptions' 'cino'">Note:</a>
'cinoptions' 'cino'	string	(default "")
local to buffer
The 'cinoptions' affect the way 'cindent' reindents lines in a C
program.  See [cinoptions-values](#cinoptions-values) for the values of this option, and
[C-indenting](#C-indenting) for info on C indenting in general.


### <a id="'cinwords' 'cinw'" class="section-title" href="#'cinwords' 'cinw'">Note:</a>
'cinwords' 'cinw'	string	(default "if,else,while,do,for,switch")
local to buffer
These keywords start an extra indent in the next line when
'smartindent' or 'cindent' is set.  For 'cindent' this is only done at
an appropriate place (inside {}).
Note that 'ignorecase' isn't used for 'cinwords'.  If case doesn't
matter, include the keyword both the uppercase and lowercase:
"if,If,IF".

### <a id="'cinscopedecls' 'cinsd'" class="section-title" href="#'cinscopedecls' 'cinsd'">Note:</a>
'cinscopedecls' 'cinsd'	string	(default "public,protected,private")
local to buffer
Keywords that are interpreted as a C++ scope declaration by [cino-g](#cino-g).
Useful e.g. for working with the Qt framework that defines additional
scope declarations "signals", "public slots" and "private slots":
```
set cinscopedecls+=signals,public\ slots,private\ slots

### <a id="'clipboard' 'cb'" class="section-title" href="#'clipboard' 'cb'"><</a>
'clipboard' 'cb'	string	(default "")
global
This option is a list of comma-separated names.
These names are recognized:

### <a id="clipboard-unnamed" class="section-title" href="#clipboard-unnamed">Note:</a>
### <a id="When included, Vim will use the clipboard register ''" class="section-title" href="#When included, Vim will use the clipboard register ''">	unnamed</a>
for all yank, delete, change and put operations which
would normally go to the unnamed register.  When a
register is explicitly specified, it will always be
used regardless of whether "unnamed" is in 'clipboard'
or not.  The clipboard register can always be
### <a id="explicitly accessed using the " notation." class="section-title" href="#explicitly accessed using the " notation.">Note:</a>
[clipboard](#clipboard).

### <a id="clipboard-unnamedplus" class="section-title" href="#clipboard-unnamedplus">Note:</a>
unnamedplus	A variant of the "unnamed" flag which uses the
clipboard register '+' ([quoteplus](#quoteplus)) instead of
### <a id="register '' for all yank, delete, change and put" class="section-title" href="#register '' for all yank, delete, change and put">Note:</a>
operations which would normally go to the unnamed
register.  When "unnamed" is also included to the
option, yank and delete operations (but not put)
will additionally copy the text into register
### <a id="''. See [clipboard|." class="section-title" href="#''. See |clipboard](#clipboard|." class="section-title" href="#''. See |clipboard).">Note:</a>

### <a id="'cmdheight' 'ch'" class="section-title" href="#'cmdheight' 'ch'">Note:</a>
'cmdheight' 'ch'	number	(default 1)
global or local to tab page
Number of screen lines to use for the command-line.  Helps avoiding
[hit-enter](#hit-enter) prompts.
The value of this option is stored with the tab page, so that each tab
page can have a different value.

When 'cmdheight' is zero, there is no command-line unless it is being
used.  The command-line will cover the last line of the screen when
shown.

WARNING: `cmdheight=0` is considered experimental. Expect some
unwanted behaviour. Some 'shortmess' flags and similar
mechanism might fail to take effect, causing unwanted hit-enter
prompts.  Some informative messages, both from Nvim itself and
plugins, will not be displayed.

### <a id="'cmdwinheight' 'cwh'" class="section-title" href="#'cmdwinheight' 'cwh'">Note:</a>
'cmdwinheight' 'cwh'	number	(default 7)
global
Number of screen lines to use for the command-line window. [cmdwin](#cmdwin)

### <a id="'colorcolumn' 'cc'" class="section-title" href="#'colorcolumn' 'cc'">Note:</a>
'colorcolumn' 'cc'	string	(default "")
local to window
'colorcolumn' is a comma-separated list of screen columns that are
highlighted with ColorColumn [hl-ColorColumn](#hl-ColorColumn).  Useful to align
text.  Will make screen redrawing slower.
The screen column can be an absolute number, or a number preceded with
'+' or '-', which is added to or subtracted from 'textwidth'.
```

:set cc=+1  " highlight column after 'textwidth'
:set cc=+1,+2,+3  " highlight three columns after 'textwidth'
:hi ColorColumn ctermbg=lightgrey guibg=lightgrey

```

When 'textwidth' is zero then the items with '-' and '+' are not used.
A maximum of 256 columns are highlighted.

### <a id="'columns' 'co' E594" class="section-title" href="#'columns' 'co' E594">Note:</a>
'columns' 'co'		number	(default 80 or terminal width)
global
Number of columns of the screen.  Normally this is set by the terminal
initialization and does not have to be set by hand.
When Vim is running in the GUI or in a resizable window, setting this
option will cause the window size to be changed.  When you only want
to use the size for the GUI, put the command in your [ginit.vim](#ginit.vim) file.
When you set this option and Vim is unable to change the physical
number of columns of the display, the display may be messed up.  For
the GUI it is always possible and Vim limits the number of columns to
what fits on the screen.  You can use this command to get the widest
window possible:
```
:set columns=9999

```
	Minimum value is 12, maximum value is 10000.

### <a id="'comments' 'com' E524 E525" class="section-title" href="#'comments' 'com' E524 E525">Note:</a>
'comments' 'com'	string	(default
### <a id=""s1:/,mb:,ex:/,://,b:#,:%,:XCOMM,n:>,fb:-")" class="section-title" href="#"s1:/,mb:,ex:/,://,b:#,:%,:XCOMM,n:>,fb:-")">Note:</a>
local to buffer
A comma-separated list of strings that can start a comment line.  See
[format-comments|.  See |option-backslash](#format-comments|.  See |option-backslash) about using backslashes to
insert a space.

### <a id="'commentstring' 'cms' E537" class="section-title" href="#'commentstring' 'cms' E537">Note:</a>
'commentstring' 'cms'	string	(default "/*%s*/")
local to buffer
A template for a comment.  The "%s" in the value is replaced with the
comment text.  Currently only used to add markers for folding, see
[fold-marker](#fold-marker).

### <a id="'complete' 'cpt' E535" class="section-title" href="#'complete' 'cpt' E535">Note:</a>
'complete' 'cpt'	string	(default: ".,w,b,u,t")
local to buffer
This option specifies how keyword completion [ins-completion](#ins-completion) works
when CTRL-P or CTRL-N are used.  It is also used for whole-line
completion [i_CTRL-X_CTRL-L](#i_CTRL-X_CTRL-L).  It indicates the type of completion
and the places to scan.  It is a comma-separated list of flags:
.	scan the current buffer ('wrapscan' is ignored)
w	scan buffers from other windows
b	scan other loaded buffers that are in the buffer list
u	scan the unloaded buffers that are in the buffer list
U	scan the buffers that are not in the buffer list
k	scan the files given with the 'dictionary' option
kspell  use the currently active spell checking [spell](#spell)
k{dict}	scan the file {dict}.  Several "k" flags can be given,
patterns are valid too.  For example:
```
### <a id=":set cpt=k/usr/dict/,k~/spanish" class="section-title" href="#:set cpt=k/usr/dict/,k~/spanish">Note:</a>

```
	s	scan the files given with the 'thesaurus' option
s{tsr}	scan the file {tsr}.  Several "s" flags can be given, patterns
are valid too.
i	scan current and included files
d	scan current and included files for defined name or macro
[i_CTRL-X_CTRL-D](#i_CTRL-X_CTRL-D)
]	tag completion
t	same as "]"

Unloaded buffers are not loaded, thus their autocmds [:autocmd](#:autocmd) are
not executed, this may lead to unexpected completions from some files
(gzipped files for example).  Unloaded buffers are not scanned for
whole-line completion.

As you can see, CTRL-N and CTRL-P can be used to do any 'iskeyword'-
based expansion (e.g., dictionary [i_CTRL-X_CTRL-K](#i_CTRL-X_CTRL-K), included patterns
[i_CTRL-X_CTRL-I|, tags |i_CTRL-X_CTRL-]](#i_CTRL-X_CTRL-I|, tags |i_CTRL-X_CTRL-]) and normal expansions).

### <a id="'completefunc' 'cfu'" class="section-title" href="#'completefunc' 'cfu'">Note:</a>
'completefunc' 'cfu'	string	(default: empty)
local to buffer
This option specifies a function to be used for Insert mode completion
with CTRL-X CTRL-U. [i_CTRL-X_CTRL-U](#i_CTRL-X_CTRL-U)
See [complete-functions](#complete-functions) for an explanation of how the function is
invoked and what it should return.
This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'completeslash' 'csl'" class="section-title" href="#'completeslash' 'csl'">Note:</a>
'completeslash' 'csl'	string	(default: "")
local to buffer
{only for MS-Windows}
When this option is set it overrules 'shellslash' for completion:
- When this option is set to "slash", a forward slash is used for path
completion in insert mode. This is useful when editing HTML tag, or
Makefile with 'noshellslash' on MS-Windows.
- When this option is set to "backslash", backslash is used. This is
useful when editing a batch file with 'shellslash' set on MS-Windows.
- When this option is empty, same character is used as for
'shellslash'.
For Insert mode completion the buffer-local value is used.  For
command line completion the global value is used.

### <a id="'completeopt' 'cot'" class="section-title" href="#'completeopt' 'cot'">Note:</a>
'completeopt' 'cot'	string	(default: "menu,preview")
global
A comma-separated list of options for Insert mode completion
[ins-completion](#ins-completion).  The supported values are:

menu	    Use a popup menu to show the possible completions.  The
menu is only shown when there is more than one match and
sufficient colors are available.  [ins-completion-menu](#ins-completion-menu)

menuone  Use the popup menu also when there is only one match.
Useful when there is additional information about the
match, e.g., what file it comes from.

longest  Only insert the longest common text of the matches.  If
the menu is displayed you can use CTRL-L to add more
characters.  Whether case is ignored depends on the kind
of completion.  For buffer text the 'ignorecase' option is
used.

preview  Show extra information about the currently selected
completion in the preview window.  Only works in
combination with "menu" or "menuone".

noinsert  Do not insert any text for a match until the user selects
a match from the menu. Only works in combination with
"menu" or "menuone". No effect if "longest" is present.

noselect  Do not select a match in the menu, force the user to
select one from the menu. Only works in combination with
"menu" or "menuone".


### <a id="'concealcursor' 'cocu'" class="section-title" href="#'concealcursor' 'cocu'">Note:</a>
'concealcursor' 'cocu'	string (default: "")
local to window
Sets the modes in which text in the cursor line can also be concealed.
When the current mode is listed then concealing happens just like in
other lines.
n		Normal mode
v		Visual mode
i		Insert mode
c		Command line editing, for 'incsearch'

'v' applies to all lines in the Visual area, not only the cursor.
A useful value is "nc".  This is used in help files.  So long as you
are moving around text is concealed, but when starting to insert text
or selecting a Visual area the concealed text is displayed, so that
you can see what you are doing.
Keep in mind that the cursor position is not always where it's
displayed.  E.g., when moving vertically it may change column.


### <a id="'conceallevel' 'cole'" class="section-title" href="#'conceallevel' 'cole'">Note:</a>
'conceallevel' 'cole'	number (default 0)
local to window
Determine how text with the "conceal" syntax attribute [:syn-conceal](#:syn-conceal)
is shown:

Value		Effect ~
0		Text is shown normally
1		Each block of concealed text is replaced with one
character.  If the syntax item does not have a custom
replacement character defined (see [:syn-cchar](#:syn-cchar)) the
character defined in 'listchars' is used.
It is highlighted with the "Conceal" highlight group.
2		Concealed text is completely hidden unless it has a
custom replacement character defined (see
[:syn-cchar](#:syn-cchar)).
3		Concealed text is completely hidden.

Note: in the cursor line concealed text is not hidden, so that you can
edit and copy the text.  This can be changed with the 'concealcursor'
option.

### <a id="'confirm' 'cf' 'noconfirm' 'nocf'" class="section-title" href="#'confirm' 'cf' 'noconfirm' 'nocf'">Note:</a>
'confirm' 'cf'		boolean (default off)
global
When 'confirm' is on, certain operations that would normally
fail because of unsaved changes to a buffer, e.g. ":q" and ":e",
instead raise a dialog asking if you wish to save the current
file(s).  You can still use a ! to unconditionally [abandon](#abandon) a buffer.
If 'confirm' is off you can still activate confirmation for one
command only (this is most useful in mappings) with the [:confirm](#:confirm)
command.
Also see the [confirm()](#confirm()) function and the 'v' flag in 'guioptions'.

### <a id="'copyindent' 'ci' 'nocopyindent' 'noci'" class="section-title" href="#'copyindent' 'ci' 'nocopyindent' 'noci'">Note:</a>
'copyindent' 'ci'	boolean	(default off)
local to buffer
Copy the structure of the existing lines indent when autoindenting a
new line.  Normally the new indent is reconstructed by a series of
tabs followed by spaces as required (unless ['expandtab'](#'expandtab') is enabled,
in which case only spaces are used).  Enabling this option makes the
new line copy whatever characters were used for indenting on the
existing line.  'expandtab' has no effect on these characters, a Tab
remains a Tab.  If the new indent is greater than on the existing
line, the remaining space is filled in the normal manner.
See 'preserveindent'.

### <a id="'cpoptions' 'cpo' cpo" class="section-title" href="#'cpoptions' 'cpo' cpo">Note:</a>
'cpoptions' 'cpo'	string	(default: "aABceFs_")
global
A sequence of single character flags.  When a character is present
this indicates Vi-compatible behavior.  This is used for things where
not being Vi-compatible is mostly or sometimes preferred.
'cpoptions' stands for "compatible-options".
Commas can be added for readability.
To avoid problems with flags that are added in the future, use the
"+=" and "-=" feature of ":set" [add-option-flags](#add-option-flags).

contains	behavior	~
### <a id="cpo-a" class="section-title" href="#cpo-a">Note:</a>
a	When included, a ":read" command with a file name
argument will set the alternate file name for the
current window.
### <a id="cpo-A" class="section-title" href="#cpo-A">Note:</a>
A	When included, a ":write" command with a file name
argument will set the alternate file name for the
current window.
### <a id="cpo-b" class="section-title" href="#cpo-b">Note:</a>
b	"\|" in a ":map" command is recognized as the end of
the map command.  The '\' is included in the mapping,
the text after the '|' is interpreted as the next
command.  Use a CTRL-V instead of a backslash to
include the '|' in the mapping.  Applies to all
mapping, abbreviation, menu and autocmd commands.
See also [map_bar](#map_bar).
### <a id="cpo-B" class="section-title" href="#cpo-B">Note:</a>
B	A backslash has no special meaning in mappings,
abbreviations, user commands and the "to" part of the
menu commands.  Remove this flag to be able to use a
backslash like a CTRL-V.  For example, the command
":map X \<Esc>" results in X being mapped to:
'B' included:	"\^["	 (^[ is a real <Esc>)
'B' excluded:	"<Esc>"  (5 characters)
### <a id="cpo-c" class="section-title" href="#cpo-c">Note:</a>
c	Searching continues at the end of any match at the
cursor position, but not further than the start of the
next line.  When not present searching continues
one character from the cursor position.  With 'c'
"abababababab" only gets three matches when repeating
"/abab", without 'c' there are five matches.
### <a id="cpo-C" class="section-title" href="#cpo-C">Note:</a>
C	Do not concatenate sourced lines that start with a
backslash.  See [line-continuation](#line-continuation).
### <a id="cpo-d" class="section-title" href="#cpo-d">Note:</a>
d	Using "./" in the 'tags' option doesn't mean to use
the tags file relative to the current file, but the
tags file in the current directory.
### <a id="cpo-D" class="section-title" href="#cpo-D">Note:</a>
D	Can't use CTRL-K to enter a digraph after Normal mode
commands with a character argument, like [r|, |f](#r|, |f) and
[t](#t).
### <a id="cpo-e" class="section-title" href="#cpo-e">Note:</a>
e	When executing a register with ":@r", always add a

```
CR> to the last line, also when the register is not
linewise.  If this flag is not present, the register
is not linewise and the last line does not end in a

```
CR>, then the last line is put on the command-line
and can be edited before hitting <CR>.
### <a id="cpo-E" class="section-title" href="#cpo-E">Note:</a>
E	It is an error when using "y", "d", "c", "g~", "gu" or
"gU" on an Empty region.  The operators only work when
at least one character is to be operated on.  Example:
This makes "y0" fail in the first column.
### <a id="cpo-f" class="section-title" href="#cpo-f">Note:</a>
f	When included, a ":read" command with a file name
argument will set the file name for the current buffer,
if the current buffer doesn't have a file name yet.
### <a id="cpo-F" class="section-title" href="#cpo-F">Note:</a>
F	When included, a ":write" command with a file name
argument will set the file name for the current
buffer, if the current buffer doesn't have a file name
yet.  Also see [cpo-P](#cpo-P).
### <a id="cpo-i" class="section-title" href="#cpo-i">Note:</a>
i	When included, interrupting the reading of a file will
leave it modified.
### <a id="cpo-I" class="section-title" href="#cpo-I">Note:</a>
I	When moving the cursor up or down just after inserting
indent for 'autoindent', do not delete the indent.
### <a id="cpo-J" class="section-title" href="#cpo-J">Note:</a>
J	A [sentence](#sentence) has to be followed by two spaces after
the '.', '!' or '?'.  A <Tab> is not recognized as
white space.
### <a id="cpo-K" class="section-title" href="#cpo-K">Note:</a>
K	Don't wait for a key code to complete when it is
halfway through a mapping.  This breaks mapping

```
F1><F1> when only part of the second <F1> has been
read.  It enables cancelling the mapping by typing

```
F1><Esc>.
### <a id="cpo-l" class="section-title" href="#cpo-l">Note:</a>
l	Backslash in a [] range in a search pattern is taken
literally, only "\]", "\^", "\-" and "\\" are special.
See [/[]](#/[])
'l' included: "/[ \t]"  finds <Space>, '\' and 't'
'l' excluded: "/[ \t]"  finds <Space> and <Tab>
### <a id="cpo-L" class="section-title" href="#cpo-L">Note:</a>
L	When the 'list' option is set, 'wrapmargin',
'textwidth', 'softtabstop' and Virtual Replace mode
(see [gR](#gR)) count a <Tab> as two characters, instead of
the normal behavior of a <Tab>.
### <a id="cpo-m" class="section-title" href="#cpo-m">Note:</a>
m	When included, a showmatch will always wait half a
second.  When not included, a showmatch will wait half
a second or until a character is typed.  ['showmatch'](#'showmatch')
### <a id="cpo-M" class="section-title" href="#cpo-M">Note:</a>
M	When excluded, "%" matching will take backslashes into
account.  Thus in "( \( )" and "\( ( \)" the outer
parenthesis match.  When included "%" ignores
backslashes, which is Vi compatible.
### <a id="cpo-n" class="section-title" href="#cpo-n">Note:</a>
n	When included, the column used for 'number' and
'relativenumber' will also be used for text of wrapped
lines.
### <a id="cpo-o" class="section-title" href="#cpo-o">Note:</a>
o	Line offset to search command is not remembered for
next search.
### <a id="cpo-O" class="section-title" href="#cpo-O">Note:</a>
O	Don't complain if a file is being overwritten, even
when it didn't exist when editing it.  This is a
protection against a file unexpectedly created by
someone else.  Vi didn't complain about this.
### <a id="cpo-p" class="section-title" href="#cpo-p">Note:</a>
p	Vi compatible Lisp indenting.  When not present, a
slightly better algorithm is used.
### <a id="cpo-P" class="section-title" href="#cpo-P">Note:</a>
P	When included, a ":write" command that appends to a
file will set the file name for the current buffer, if
the current buffer doesn't have a file name yet and
the 'F' flag is also included [cpo-F](#cpo-F).
### <a id="cpo-q" class="section-title" href="#cpo-q">Note:</a>
q	When joining multiple lines leave the cursor at the
position where it would be when joining two lines.
### <a id="cpo-r" class="section-title" href="#cpo-r">Note:</a>
r	Redo ("." command) uses "/" to repeat a search
command, instead of the actually used search string.
### <a id="cpo-R" class="section-title" href="#cpo-R">Note:</a>
R	Remove marks from filtered lines.  Without this flag
marks are kept like [:keepmarks](#:keepmarks) was used.
### <a id="cpo-s" class="section-title" href="#cpo-s">Note:</a>
s	Set buffer options when entering the buffer for the
first time.  This is like it is in Vim version 3.0.
And it is the default.  If not present the options are
set when the buffer is created.
### <a id="cpo-S" class="section-title" href="#cpo-S">Note:</a>
S	Set buffer options always when entering a buffer
(except 'readonly', 'fileformat', 'filetype' and
'syntax').  This is the (most) Vi compatible setting.
The options are set to the values in the current
buffer.  When you change an option and go to another
buffer, the value is copied.  Effectively makes the
buffer options global to all buffers.

's'    'S'     copy buffer options
no     no      when buffer created
yes    no      when buffer first entered (default)
X     yes     each time when buffer entered (vi comp.)
### <a id="cpo-t" class="section-title" href="#cpo-t">Note:</a>
t	Search pattern for the tag command is remembered for
"n" command.  Otherwise Vim only puts the pattern in
the history for search pattern, but doesn't change the
last used search pattern.
### <a id="cpo-u" class="section-title" href="#cpo-u">Note:</a>
u	Undo is Vi compatible.  See [undo-two-ways](#undo-two-ways).
### <a id="cpo-v" class="section-title" href="#cpo-v">Note:</a>
v	Backspaced characters remain visible on the screen in
Insert mode.  Without this flag the characters are
erased from the screen right away.  With this flag the
screen newly typed text overwrites backspaced
characters.
### <a id="cpo-W" class="section-title" href="#cpo-W">Note:</a>
W	Don't overwrite a readonly file.  When omitted, ":w!"
overwrites a readonly file, if possible.
### <a id="cpo-x" class="section-title" href="#cpo-x">Note:</a>
x	<Esc> on the command-line executes the command-line.
The default in Vim is to abandon the command-line,
because <Esc> normally aborts a command.  [c_<Esc>](#c_<Esc>)
### <a id="cpo-X" class="section-title" href="#cpo-X">Note:</a>
X	When using a count with "R" the replaced text is
deleted only once.  Also when repeating "R" with "."
and a count.
### <a id="cpo-y" class="section-title" href="#cpo-y">Note:</a>
y	A yank command can be redone with ".".  Think twice if
you really want to use this, it may break some
plugins, since most people expect "." to only repeat a
change.
### <a id="cpo-Z" class="section-title" href="#cpo-Z">Note:</a>
Z	When using "w!" while the 'readonly' option is set,
don't reset 'readonly'.
### <a id="cpo-!" class="section-title" href="#cpo-!">Note:</a>
!	When redoing a filter command, use the last used
external command, whatever it was.  Otherwise the last
used -filter- command is used.
### <a id="cpo-$" class="section-title" href="#cpo-$">Note:</a>
$	When making a change to one line, don't redisplay the
line, but put a '$' at the end of the changed text.
The changed text will be overwritten when you type the
new text.  The line is redisplayed if you type any
command that moves the cursor from the insertion
point.
### <a id="cpo-%" class="section-title" href="#cpo-%">Note:</a>
%	Vi-compatible matching is done for the "%" command.
Does not recognize "#if", "#endif", etc.
### <a id="Does not recognize "/" and "/"." class="section-title" href="#Does not recognize "/" and "/".">Note:</a>
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
### <a id="cpo-+" class="section-title" href="#cpo-+">Note:</a>
+	When included, a ":write file" command will reset the
'modified' flag of the buffer, even though the buffer
itself may still be different from its file.
### <a id="cpo->" class="section-title" href="#cpo->">Note:</a>
>	When appending to a register, put a line break before
the appended text.
### <a id="cpo-;" class="section-title" href="#cpo-;">Note:</a>
;	When using [,| or |;| to repeat the last |t](#,| or |;| to repeat the last |t) search
and the cursor is right in front of the searched
character, the cursor won't move. When not included,
the cursor would skip over it and jump to the
following occurrence.
### <a id="cpo-_" class="section-title" href="#cpo-_">Note:</a>
_	When using [cw](#cw) on a word, do not include the
whitespace following the word in the motion.

### <a id="'cursorbind' 'crb' 'nocursorbind' 'nocrb'" class="section-title" href="#'cursorbind' 'crb' 'nocursorbind' 'nocrb'">Note:</a>
'cursorbind' 'crb'	boolean  (default off)
local to window
When this option is set, as the cursor in the current
window moves other cursorbound windows (windows that also have
this option set) move their cursors to the corresponding line and
column.  This option is useful for viewing the
differences between two versions of a file (see 'diff'); in diff mode,
inserted and deleted lines (though not characters within a line) are
taken into account.


### <a id="'cursorcolumn' 'cuc' 'nocursorcolumn' 'nocuc'" class="section-title" href="#'cursorcolumn' 'cuc' 'nocursorcolumn' 'nocuc'">Note:</a>
'cursorcolumn' 'cuc'	boolean	(default off)
local to window
Highlight the screen column of the cursor with CursorColumn
[hl-CursorColumn](#hl-CursorColumn).  Useful to align text.  Will make screen redrawing
slower.
If you only want the highlighting in the current window you can use
these autocommands:
```
### <a id="au WinLeave  set nocursorline nocursorcolumn" class="section-title" href="#au WinLeave  set nocursorline nocursorcolumn">Note:</a>
### <a id="au WinEnter  set cursorline cursorcolumn" class="section-title" href="#au WinEnter  set cursorline cursorcolumn">Note:</a>

```


### <a id="'cursorline' 'cul' 'nocursorline' 'nocul'" class="section-title" href="#'cursorline' 'cul' 'nocursorline' 'nocul'">Note:</a>
'cursorline' 'cul'	boolean	(default off)
local to window
Highlight the text line of the cursor with CursorLine [hl-CursorLine](#hl-CursorLine).
Useful to easily spot the cursor.  Will make screen redrawing slower.
When Visual mode is active the highlighting isn't used to make it
easier to see the selected text.


### <a id="'cursorlineopt' 'culopt'" class="section-title" href="#'cursorlineopt' 'culopt'">Note:</a>
'cursorlineopt' 'culopt' string (default: "number,line")
local to window
Comma-separated list of settings for how 'cursorline' is displayed.
Valid values:
"line"		Highlight the text line of the cursor with
CursorLine [hl-CursorLine](#hl-CursorLine).
"screenline"	Highlight only the screen line of the cursor with
CursorLine [hl-CursorLine](#hl-CursorLine).
"number"	Highlight the line number of the cursor with
CursorLineNr [hl-CursorLineNr](#hl-CursorLineNr).

Special value:
"both"		Alias for the values "line,number".

"line" and "screenline" cannot be used together.


### <a id="'debug'" class="section-title" href="#'debug'">Note:</a>
'debug'			string	(default "")
global
These values can be used:
msg	Error messages that would otherwise be omitted will be given
anyway.
throw	Error messages that would otherwise be omitted will be given
anyway and also throw an exception and set [v:errmsg](#v:errmsg).
beep	A message will be given when otherwise only a beep would be
produced.
The values can be combined, separated by a comma.
"msg" and "throw" are useful for debugging 'foldexpr', 'formatexpr' or
'indentexpr'.

### <a id="'define' 'def'" class="section-title" href="#'define' 'def'">Note:</a>
### <a id="string	(default "^\s#\sdefine")" class="section-title" href="#string	(default "^\s#\sdefine")">'define' 'def'</a>
global or local to buffer [global-local](#global-local)
Pattern to be used to find a macro definition.  It is a search
pattern, just like for the "/" command.  This option is used for the
commands like "[i" and "[d" [include-search](#include-search).  The 'isident' option is
used to recognize the defined name after the match:
{match with 'define'}{non-ID chars}{defined name}{non-ID char}
See [option-backslash](#option-backslash) about inserting backslashes to include a space
or backslash.
The default value is for C programs.  For C++ this value would be
useful, to include const type declarations:
```
### <a id="^\(#\sdefine\[[a-z]\sconst\s[a-z]\)" class="section-title" href="#^\(#\sdefine\](#[a-z]\sconst\s[a-z]\)" class="section-title" href="#^\(#\sdefine\)[a-z]\sconst\s[a-z]\)">Note:</a>

```
	You can also use "\ze" just before the name and continue the pattern
to check what is following.  E.g. for Javascript, if a function is
defined with "func_name = function(args)":
```
### <a id="^\s\ze\i\+\s=\sfunction(" class="section-title" href="#^\s\ze\i\+\s=\sfunction(">Note:</a>

```
	If the function is defined with "func_name : function() {...":
```
### <a id="^\s\ze\i\+\s[:]\s(function\s(" class="section-title" href="#^\s\ze\i\+\s[:]\s(function\s(">Note:</a>

```
	When using the ":set" command, you need to double the backslashes!
To avoid that use `:let` with a single quote string:
```
### <a id="let &l:define = '^\s\ze\k\+\s=\sfunction('" class="section-title" href="#let &l:define = '^\s\ze\k\+\s=\sfunction('">Note:</a>

```


### <a id="'delcombine' 'deco' 'nodelcombine' 'nodeco'" class="section-title" href="#'delcombine' 'deco' 'nodelcombine' 'nodeco'">Note:</a>
'delcombine' 'deco'	boolean (default off)
global
If editing Unicode and this option is set, backspace and Normal mode
"x" delete each combining character on its own.  When it is off (the
default) the character along with its combining characters are
deleted.
Note: When 'delcombine' is set "xx" may work differently from "2x"!

This is useful for Arabic, Hebrew and many other languages where one
may have combining characters overtop of base characters, and want
to remove only the combining ones.

### <a id="'dictionary' 'dict'" class="section-title" href="#'dictionary' 'dict'">Note:</a>
'dictionary' 'dict'	string	(default "")
global or local to buffer [global-local](#global-local)
List of file names, separated by commas, that are used to lookup words
for keyword completion commands [i_CTRL-X_CTRL-K](#i_CTRL-X_CTRL-K).  Each file should
contain a list of words.  This can be one word per line, or several
words per line, separated by non-keyword characters (white space is
preferred).  Maximum line length is 510 bytes.

When this option is empty or an entry "spell" is present, and spell
checking is enabled, words in the word lists for the currently active
'spelllang' are used. See [spell](#spell).

To include a comma in a file name precede it with a backslash.  Spaces
after a comma are ignored, otherwise spaces are included in the file
name.  See [option-backslash](#option-backslash) about using backslashes.
This has nothing to do with the [Dictionary](#Dictionary) variable type.
Where to find a list of words?
- BSD/macOS include the "/usr/share/dict/words" file.
- Try "apt install spell" to get the "/usr/share/dict/words" file on
apt-managed systems (Debian/Ubuntu).
The use of [:set+=| and |:set-=](#:set+=| and |:set-=) is preferred when adding or removing
directories from the list.  This avoids problems when a future version
uses another default.
Backticks cannot be used in this option for security reasons.

### <a id="'diff' 'nodiff'" class="section-title" href="#'diff' 'nodiff'">Note:</a>
'diff'			boolean	(default off)
local to window
Join the current window in the group of windows that shows differences
between files.  See [diff-mode](#diff-mode).

### <a id="'dex' 'diffexpr'" class="section-title" href="#'dex' 'diffexpr'">Note:</a>
'diffexpr' 'dex'	string	(default "")
global
Expression which is evaluated to obtain a diff file (either ed-style
or unified-style) from two versions of a file.  See [diff-diffexpr](#diff-diffexpr).
This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'dip' 'diffopt'" class="section-title" href="#'dip' 'diffopt'">Note:</a>
'diffopt' 'dip'		string	(default "internal,filler,closeoff")
global
Option settings for diff mode.  It can consist of the following items.
All are optional.  Items must be separated by a comma.

filler		Show filler lines, to keep the text
synchronized with a window that has inserted
lines at the same position.  Mostly useful
when windows are side-by-side and 'scrollbind'
is set.

context:{n}	Use a context of {n} lines between a change
and a fold that contains unchanged lines.
When omitted a context of six lines is used.
When using zero the context is actually one,
since folds require a line in between, also
for a deleted line.
See [fold-diff](#fold-diff).

iblank		Ignore changes where lines are all blank.  Adds
the "-B" flag to the "diff" command if
'diffexpr' is empty.  Check the documentation
of the "diff" command for what this does
exactly.
NOTE: the diff windows will get out of sync,
because no differences between blank lines are
taken into account.

icase		Ignore changes in case of text.  "a" and "A"
are considered the same.  Adds the "-i" flag
to the "diff" command if 'diffexpr' is empty.

iwhite		Ignore changes in amount of white space.  Adds
the "-b" flag to the "diff" command if
'diffexpr' is empty.  Check the documentation
of the "diff" command for what this does
exactly.  It should ignore adding trailing
white space, but not leading white space.

iwhiteall	Ignore all white space changes.  Adds
the "-w" flag to the "diff" command if
'diffexpr' is empty.  Check the documentation
of the "diff" command for what this does
exactly.

iwhiteeol	Ignore white space changes at end of line.
Adds the "-Z" flag to the "diff" command if
'diffexpr' is empty.  Check the documentation
of the "diff" command for what this does
exactly.

horizontal	Start diff mode with horizontal splits (unless
explicitly specified otherwise).

vertical	Start diff mode with vertical splits (unless
explicitly specified otherwise).

closeoff	When a window is closed where 'diff' is set
and there is only one window remaining in the
same tab page with 'diff' set, execute
`:diffoff` in that window.  This undoes a
`:diffsplit` command.

hiddenoff	Do not use diff mode for a buffer when it
becomes hidden.

foldcolumn:{n}	Set the 'foldcolumn' option to {n} when
starting diff mode.  Without this 2 is used.

followwrap	Follow the 'wrap' option and leave as it is.

internal	Use the internal diff library.  This is
ignored when 'diffexpr' is set.  *E960*
When running out of memory when writing a
buffer this item will be ignored for diffs
involving that buffer.  Set the 'verbose'
option to see when this happens.

indent-heuristic
Use the indent heuristic for the internal
diff library.

algorithm:{text} Use the specified diff algorithm with the
internal diff engine. Currently supported
algorithms are:
myers      the default algorithm
minimal    spend extra time to generate the
smallest possible diff
patience   patience diff algorithm
histogram  histogram diff algorithm

Examples:
```
:set diffopt=internal,filler,context:4
:set diffopt=
:set diffopt=internal,filler,foldcolumn:3
:set diffopt-=internal  " do NOT use the internal diff parser

```

### <a id="'digraph' 'dg' 'nodigraph' 'nodg'" class="section-title" href="#'digraph' 'dg' 'nodigraph' 'nodg'">Note:</a>
'digraph' 'dg'		boolean	(default off)
global
Enable the entering of digraphs in Insert mode with {char1} <BS>
{char2}.  See [digraphs](#digraphs).

### <a id="'directory' 'dir'" class="section-title" href="#'directory' 'dir'">Note:</a>
'directory' 'dir'	string	(default "$XDG_STATE_HOME/nvim/swap//")
global
List of directory names for the swap file, separated with commas.

Possible items:
- The swap file will be created in the first directory where this is
possible.  If it is not possible in any directory, but last 
directory listed in the option does not exist, it is created.
- Empty means that no swap file will be used (recovery is
impossible!) and no [E303](#E303) error will be given.
- A directory "." means to put the swap file in the same directory as
the edited file.  On Unix, a dot is prepended to the file name, so
it doesn't show in a directory listing.  On MS-Windows the "hidden"
attribute is set and a dot prepended if possible.
- A directory starting with "./" (or ".\" for MS-Windows) means to put
the swap file relative to where the edited file is.  The leading "."
is replaced with the path name of the edited file.
- For Unix and Win32, if a directory ends in two path separators "//",
the swap file name will be built from the complete path to the file
with all path separators replaced by percent '%' signs (including
the colon following the drive letter on Win32). This will ensure
file name uniqueness in the preserve directory.
On Win32, it is also possible to end with "\\".  However, When a
separating comma is following, you must use "//", since "\\" will
include the comma in the file name. Therefore it is recommended to
use '//', instead of '\\'.
- Spaces after the comma are ignored, other spaces are considered part
of the directory name.  To have a space at the start of a directory
name, precede it with a backslash.
- To include a comma in a directory name precede it with a backslash.
- A directory name may end in an ':' or '/'.
- Environment variables are expanded [:set_env](#:set_env).
- Careful with '\' characters, type one before a space, type two to
get one in the option (see [option-backslash](#option-backslash)), for example:
```
:set dir=c:\\tmp,\ dir\\,with\\,commas,\\\ dir\ with\ spaces

```
	- For backwards compatibility with Vim version 3.0 a '>' at the start
of the option is removed.
Using "." first in the list is recommended.  This means that editing
the same file twice will result in a warning.  Using "/tmp" on Unix is
discouraged: When the system crashes you lose the swap file.
"/var/tmp" is often not cleared when rebooting, thus is a better
choice than "/tmp".  But others on the computer may be able to see the
files, and it can contain a lot of files, your swap files get lost in
the crowd.  That is why a "tmp" directory in your home directory is
tried first.
The use of [:set+=| and |:set-=](#:set+=| and |:set-=) is preferred when adding or removing
directories from the list.  This avoids problems when a future version
uses another default.
This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'display' 'dy'" class="section-title" href="#'display' 'dy'">Note:</a>
'display' 'dy'		string	(default "lastline")
global
Change the way text is displayed.  This is a comma-separated list of
flags:
lastline	When included, as much as possible of the last line
in a window will be displayed.  "@@@" is put in the
last columns of the last screen line to indicate the
rest of the line is not displayed.
truncate	Like "lastline", but "@@@" is displayed in the first
column of the last screen line.  Overrules "lastline".
uhex		Show unprintable characters hexadecimal as <xx>
instead of using ^C and ~C.
msgsep		Obsolete flag. Allowed but takes no effect. [msgsep](#msgsep)

When neither "lastline" nor "truncate" is included, a last line that
doesn't fit is replaced with "@" lines.

The "@" character can be changed by setting the "lastline" item in
'fillchars'.  The character is highlighted with [hl-NonText](#hl-NonText).

### <a id="'eadirection' 'ead'" class="section-title" href="#'eadirection' 'ead'">Note:</a>
'eadirection' 'ead'	string	(default "both")
global
Tells when the 'equalalways' option applies:
ver	vertically, width of windows is not affected
hor	horizontally, height of windows is not affected
both	width and height of windows is affected

### <a id="'emoji' 'emo' 'noemoji' 'noemo'" class="section-title" href="#'emoji' 'emo' 'noemoji' 'noemo'">Note:</a>
'emoji' 'emo'	boolean (default: on)
global
When on all Unicode emoji characters are considered to be full width.
This excludes "text emoji" characters, which are normally displayed as
single width.  Unfortunately there is no good specification for this
and it has been determined on trial-and-error basis.  Use the
[setcellwidths()](#setcellwidths()) function to change the behavior.

### <a id="'encoding' 'enc' E543" class="section-title" href="#'encoding' 'enc' E543">Note:</a>
'encoding' 'enc'
String-encoding used internally and for [RPC](#RPC) communication.
Always UTF-8.

See 'fileencoding' to control file-content encoding.

### <a id="'endofline' 'eol' 'noendofline' 'noeol'" class="section-title" href="#'endofline' 'eol' 'noendofline' 'noeol'">Note:</a>
'endofline' 'eol'	boolean	(default on)
local to buffer
When writing a file and this option is off and the 'binary' option
is on, or 'fixeol' option is off, no <EOL> will be written for the
last line in the file.  This option is automatically set or reset when
starting to edit a new file, depending on whether file has an <EOL>
for the last line in the file.  Normally you don't have to set or
reset this option.
When 'binary' is off and 'fixeol' is on the value is not used when
writing the file.  When 'binary' is on or 'fixeol' is off it is used
to remember the presence of a <EOL> for the last line in the file, so
that when you write the file the situation from the original file can
be kept.  But you can change it if you want to.

### <a id="'equalalways' 'ea' 'noequalalways' 'noea'" class="section-title" href="#'equalalways' 'ea' 'noequalalways' 'noea'">Note:</a>
'equalalways' 'ea'	boolean	(default on)
global
When on, all the windows are automatically made the same size after
splitting or closing a window.  This also happens the moment the
option is switched on.  When off, splitting a window will reduce the
size of the current window and leave the other windows the same.  When
closing a window the extra lines are given to the window next to it
(depending on 'splitbelow' and 'splitright').
When mixing vertically and horizontally split windows, a minimal size
is computed and some windows may be larger if there is room.  The
'eadirection' option tells in which direction the size is affected.
Changing the height and width of a window can be avoided by setting
'winfixheight' and 'winfixwidth', respectively.
If a window size is specified when creating a new window sizes are
currently not equalized (it's complicated, but may be implemented in
the future).

### <a id="'equalprg' 'ep'" class="section-title" href="#'equalprg' 'ep'">Note:</a>
'equalprg' 'ep'		string	(default "")
global or local to buffer [global-local](#global-local)
External program to use for "=" command.  When this option is empty
the internal formatting functions are used; either 'lisp', 'cindent'
or 'indentexpr'.
Environment variables are expanded [:set_env|.  See |option-backslash](#:set_env|.  See |option-backslash)
about including spaces and backslashes.
This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'errorbells' 'eb' 'noerrorbells' 'noeb'" class="section-title" href="#'errorbells' 'eb' 'noerrorbells' 'noeb'">Note:</a>
'errorbells' 'eb'	boolean	(default off)
global
Ring the bell (beep or screen flash) for error messages.  This only
makes a difference for error messages, the bell will be used always
for a lot of errors without a message (e.g., hitting <Esc> in Normal
mode).  See 'visualbell' to make the bell behave like a screen flash
or do nothing. See 'belloff' to finetune when to ring the bell.

### <a id="'errorfile' 'ef'" class="section-title" href="#'errorfile' 'ef'">Note:</a>
'errorfile' 'ef'	string	(default: "errors.err")
global
Name of the errorfile for the QuickFix mode (see [:cf](#:cf)).
When the "-q" command-line argument is used, 'errorfile' is set to the
following argument.  See [-q](#-q).
NOT used for the ":make" command.  See 'makeef' for that.
Environment variables are expanded [:set_env](#:set_env).
See [option-backslash](#option-backslash) about including spaces and backslashes.
This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'errorformat' 'efm'" class="section-title" href="#'errorformat' 'efm'">Note:</a>
'errorformat' 'efm'	string	(default is very long)
global or local to buffer [global-local](#global-local)
Scanf-like description of the format for the lines in the error file
(see [errorformat](#errorformat)).

### <a id="'eventignore' 'ei'" class="section-title" href="#'eventignore' 'ei'">Note:</a>
'eventignore' 'ei'	string	(default "")
global
A list of autocommand event names, which are to be ignored.
When set to "all" or when "all" is one of the items, all autocommand
events are ignored, autocommands will not be executed.
Otherwise this is a comma-separated list of event names.  Example:
```
:set ei=WinEnter,WinLeave

```

### <a id="'expandtab' 'et' 'noexpandtab' 'noet'" class="section-title" href="#'expandtab' 'et' 'noexpandtab' 'noet'">Note:</a>
'expandtab' 'et'	boolean	(default off)
local to buffer
In Insert mode: Use the appropriate number of spaces to insert a

```
Tab>.  Spaces are used in indents with the '>' and '<' commands and
when 'autoindent' is on.  To insert a real tab when 'expandtab' is
on, use CTRL-V<Tab>.  See also [:retab| and |ins-expandtab](#:retab| and |ins-expandtab).
This option is reset when the 'paste' option is set and restored when
the 'paste' option is reset.

### <a id="'fileencoding' 'fenc' E213" class="section-title" href="#'fileencoding' 'fenc' E213">Note:</a>
'fileencoding' 'fenc'	string (default: "")
local to buffer
File-content encoding for the current buffer. Conversion is done with
iconv() or as specified with 'charconvert'.

When 'fileencoding' is not UTF-8, conversion will be done when
writing the file.  For reading see below.
When 'fileencoding' is empty, the file will be saved with UTF-8
encoding (no conversion when reading or writing a file).

WARNING: Conversion to a non-Unicode encoding can cause loss of
information!

See [encoding-names](#encoding-names) for the possible values.  Additionally, values may be
specified that can be handled by the converter, see
[mbyte-conversion](#mbyte-conversion).

When reading a file 'fileencoding' will be set from 'fileencodings'.
To read a file in a certain encoding it won't work by setting
'fileencoding', use the [++enc](#++enc) argument.  One exception: when
'fileencodings' is empty the value of 'fileencoding' is used.
For a new file the global value of 'fileencoding' is used.

Prepending "8bit-" and "2byte-" has no meaning here, they are ignored.
When the option is set, the value is converted to lowercase.  Thus
you can set it with uppercase values too.  '_' characters are
replaced with '-'.  If a name is recognized from the list at
[encoding-names](#encoding-names), it is replaced by the standard name.  For example
"ISO8859-2" becomes "iso-8859-2".

When this option is set, after starting to edit a file, the 'modified'
option is set, because the file would be different when written.

Keep in mind that changing 'fenc' from a modeline happens
AFTER the text has been read, thus it applies to when the file will be
written.  If you do set 'fenc' in a modeline, you might want to set
'nomodified' to avoid not being able to ":q".

This option cannot be changed when 'modifiable' is off.

### <a id="'fileencodings' 'fencs'" class="section-title" href="#'fileencodings' 'fencs'">Note:</a>
'fileencodings' 'fencs'	string (default: "ucs-bom,utf-8,default,latin1")
global
This is a list of character encodings considered when starting to edit
an existing file.  When a file is read, Vim tries to use the first
mentioned character encoding.  If an error is detected, the next one
in the list is tried.  When an encoding is found that works,
'fileencoding' is set to it.  If all fail, 'fileencoding' is set to
an empty string, which means that UTF-8 is used.
WARNING: Conversion can cause loss of information! You can use
the [++bad](#++bad) argument to specify what is done with characters
that can't be converted.
For an empty file or a file with only ASCII characters most encodings
will work and the first entry of 'fileencodings' will be used (except
"ucs-bom", which requires the BOM to be present).  If you prefer
another encoding use an BufReadPost autocommand event to test if your
preferred encoding is to be used.  Example:
```
### <a id="au BufReadPost  if search('\S', 'w') == 0 [" class="section-title" href="#au BufReadPost  if search('\S', 'w') == 0 ](#" class="section-title" href="#au BufReadPost  if search('\S', 'w') == 0 )">Note:</a>
\ set fenc=iso-2022-jp | endif

```
	This sets 'fileencoding' to "iso-2022-jp" if the file does not contain
non-blank characters.
When the [++enc](#++enc) argument is used then the value of 'fileencodings' is
not used.
Note that 'fileencodings' is not used for a new file, the global value
of 'fileencoding' is used instead.  You can set it with:
```
:setglobal fenc=iso-8859-2

```
	This means that a non-existing file may get a different encoding than
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
recognized as "utf-8".  You can use the [8g8](#8g8) command to find the
illegal byte sequence.
WRONG VALUES:			WHAT'S WRONG:
latin1,utf-8		"latin1" will always be used
utf-8,ucs-bom,latin1	BOM won't be recognized in an utf-8
file
cp1250,latin1		"cp1250" will always be used
If 'fileencodings' is empty, 'fileencoding' is not modified.
See 'fileencoding' for the possible values.
Setting this option does not have an effect until the next time a file
is read.

### <a id="'fileformat' 'ff'" class="section-title" href="#'fileformat' 'ff'">Note:</a>
'fileformat' 'ff'	string (Windows default: "dos",
Unix default: "unix")
local to buffer
This gives the <EOL> of the current buffer, which is used for
reading/writing the buffer from/to a file:
dos	    <CR><NL>
unix    <NL>
mac	    <CR>
When "dos" is used, CTRL-Z at the end of a file is ignored.
See [file-formats| and |file-read](#file-formats| and |file-read).
For the character encoding of the file see 'fileencoding'.
When 'binary' is set, the value of 'fileformat' is ignored, file I/O
works like it was set to "unix".
This option is set automatically when starting to edit a file and
'fileformats' is not empty and 'binary' is off.
When this option is set, after starting to edit a file, the 'modified'
option is set, because the file would be different when written.
This option cannot be changed when 'modifiable' is off.

### <a id="'fileformats' 'ffs'" class="section-title" href="#'fileformats' 'ffs'">Note:</a>
'fileformats' 'ffs'	string (default:
Win32: "dos,unix",
Unix: "unix,dos")
global
This gives the end-of-line (<EOL>) formats that will be tried when
starting to edit a new buffer and when reading a file into an existing
buffer:
- When empty, the format defined with 'fileformat' will be used
always.  It is not set automatically.
- When set to one name, that format will be used whenever a new buffer
is opened.  'fileformat' is set accordingly for that buffer.  The
'fileformats' name will be used when a file is read into an existing
buffer, no matter what 'fileformat' for that buffer is set to.
- When more than one name is present, separated by commas, automatic

```
EOL> detection will be done when reading a file.  When starting to
edit a file, a check is done for the <EOL>:
1. If all lines end in <CR><NL>, and 'fileformats' includes "dos",
'fileformat' is set to "dos".
2. If a <NL> is found and 'fileformats' includes "unix", 'fileformat'
is set to "unix".  Note that when a <NL> is found without a
preceding <CR>, "unix" is preferred over "dos".
3. If 'fileformat' has not yet been set, and if a <CR> is found, and
if 'fileformats' includes "mac", 'fileformat' is set to "mac".
This means that "mac" is only chosen when:
"unix" is not present or no <NL> is found in the file, and
"dos" is not present or no <CR><NL> is found in the file.
Except: if "unix" was chosen, but there is a <CR> before
the first <NL>, and there appear to be more <CR>s than <NL>s in
the first few lines, "mac" is used.
4. If 'fileformat' is still not set, the first name from
'fileformats' is used.
When reading a file into an existing buffer, the same is done, but
this happens like 'fileformat' has been set appropriately for that
file only, the option is not changed.
When 'binary' is set, the value of 'fileformats' is not used.

When Vim starts up with an empty buffer the first item is used.  You
can overrule this by setting 'fileformat' in your .vimrc.

For systems with a Dos-like <EOL> (<CR><NL>), when reading files that
are ":source"ed and for vimrc files, automatic <EOL> detection may be
done:
- When 'fileformats' is empty, there is no automatic detection.  Dos
format will be used.
- When 'fileformats' is set to one or more names, automatic detection
is done.  This is based on the first <NL> in the file: If there is a

```
CR> in front of it, Dos format is used, otherwise Unix format is
used.
Also see [file-formats](#file-formats).

### <a id="'fileignorecase' 'fic' 'nofileignorecase' 'nofic'" class="section-title" href="#'fileignorecase' 'fic' 'nofileignorecase' 'nofic'">Note:</a>
'fileignorecase' 'fic'	boolean	(default on for systems where case in file
names is normally ignored)
global
When set case is ignored when using file names and directories.
See 'wildignorecase' for only ignoring case when doing completion.

### <a id="'filetype' 'ft'" class="section-title" href="#'filetype' 'ft'">Note:</a>
'filetype' 'ft'		string (default: "")
local to buffer
When this option is set, the FileType autocommand event is triggered.
All autocommands that match with the value of this option will be
executed.  Thus the value of 'filetype' is used in place of the file
name.
Otherwise this option does not always reflect the current file type.
This option is normally set when the file type is detected.  To enable
this use the ":filetype on" command. [:filetype](#:filetype)
Setting this option to a different value is most useful in a modeline,
for a file for which the file type is not automatically recognized.
Example, for in an IDL file:
### <a id="/ vim: set filetype=idl : / ~" class="section-title" href="#/ vim: set filetype=idl : / ~">Note:</a>
[FileType| |filetypes](#FileType| |filetypes)
When a dot appears in the value then this separates two filetype
names.  Example:
### <a id="/ vim: set filetype=c.doxygen : / ~" class="section-title" href="#/ vim: set filetype=c.doxygen : / ~">Note:</a>
This will use the "c" filetype first, then the "doxygen" filetype.
This works both for filetype plugins and for syntax files.  More than
one dot may appear.
This option is not copied to another buffer, independent of the 's' or
'S' flag in 'cpoptions'.
Only normal file name characters can be used, "/\*?[|<>" are illegal.

### <a id="'fillchars' 'fcs'" class="section-title" href="#'fillchars' 'fcs'">Note:</a>
'fillchars' 'fcs'	string	(default "")
global or local to window [global-local](#global-local)
Characters to fill the statuslines, vertical separators and special
lines in the window.
It is a comma-separated list of items.  Each item has a name, a colon
and the value of that item:

item		default		Used for ~
stl		' ' or '^'	statusline of the current window
stlnc		' ' or '='	statusline of the non-current windows
wbr		' '		window bar
horiz		'─' or '-'	horizontal separators [:split](#:split)
horizup	'┴' or '-'	upwards facing horizontal separator
horizdown	'┬' or '-'	downwards facing horizontal separator
vert		'│' or '['	vertical separators |:vsplit](#'	vertical separators |:vsplit)
vertleft	'┤' or '|'	left facing vertical separator
vertright	'├' or '|'	right facing vertical separator
verthoriz	'┼' or '+'	overlapping vertical and horizontal
separator
fold		'·' or '-'	filling 'foldtext'
foldopen	'-'		mark the beginning of a fold
foldclose	'+'		show a closed fold
foldsep	'│' or '|'      open fold middle marker
diff		'-'		deleted lines of the 'diff' option
msgsep	' '		message separator 'display'
eob		'~'		empty lines at the end of a buffer
lastline	'@'		'display' contains lastline/truncate

Any one that is omitted will fall back to the default.  For "stl" and
"stlnc" the space will be used when there is highlighting, '^' or '='
otherwise.

Note that "horiz", "horizup", "horizdown", "vertleft", "vertright" and
"verthoriz" are only used when 'laststatus' is 3, since only vertical
window separators are used otherwise.

If 'ambiwidth' is "double" then "horiz", "horizup", "horizdown",
"vert", "vertleft", "vertright", "verthoriz", "foldsep" and "fold"
default to single-byte alternatives.

Example:
```
:set fillchars=stl:^,stlnc:=,vert:│,fold:·,diff:-

```
	This is similar to the default, except that these characters will also
be used when there is highlighting.

For the "stl", "stlnc", "foldopen", "foldclose" and "foldsep" items
single-byte and multibyte characters are supported.  But double-width
characters are not supported.

The highlighting used for these items:
item		highlight group ~
stl		StatusLine		[hl-StatusLine](#hl-StatusLine)
stlnc		StatusLineNC		[hl-StatusLineNC](#hl-StatusLineNC)
wbr		WinBar			[hl-WinBar| or |hl-WinBarNC](#hl-WinBar| or |hl-WinBarNC)
horiz		WinSeparator		[hl-WinSeparator](#hl-WinSeparator)
horizup	WinSeparator		[hl-WinSeparator](#hl-WinSeparator)
horizdown	WinSeparator		[hl-WinSeparator](#hl-WinSeparator)
vert		WinSeparator		[hl-WinSeparator](#hl-WinSeparator)
vertleft	WinSeparator		[hl-WinSeparator](#hl-WinSeparator)
vertright	WinSeparator		[hl-WinSeparator](#hl-WinSeparator)
verthoriz	WinSeparator		[hl-WinSeparator](#hl-WinSeparator)
fold		Folded			[hl-Folded](#hl-Folded)
diff		DiffDelete		[hl-DiffDelete](#hl-DiffDelete)
eob		EndOfBuffer		[hl-EndOfBuffer](#hl-EndOfBuffer)
lastline	NonText			[hl-NonText](#hl-NonText)

### <a id="'fixendofline' 'fixeol' 'nofixendofline' 'nofixeol'" class="section-title" href="#'fixendofline' 'fixeol' 'nofixendofline' 'nofixeol'">Note:</a>
'fixendofline' 'fixeol'	boolean	(default on)
local to buffer
When writing a file and this option is on, <EOL> at the end of file
will be restored if missing. Turn this option off if you want to
preserve the situation from the original file.
When the 'binary' option is set the value of this option doesn't
matter.
See the 'endofline' option.

### <a id="'foldclose' 'fcl'" class="section-title" href="#'foldclose' 'fcl'">Note:</a>
'foldclose' 'fcl'	string (default "")
global
When set to "all", a fold is closed when the cursor isn't in it and
its level is higher than 'foldlevel'.  Useful if you want folds to
automatically close when moving out of them.

### <a id="'foldcolumn' 'fdc'" class="section-title" href="#'foldcolumn' 'fdc'">Note:</a>
'foldcolumn' 'fdc'	string (default "0")
local to window
When and how to draw the foldcolumn. Valid values are:
"auto":       resize to the minimum amount of folds to display.
"auto:[1-9]": resize to accommodate multiple folds up to the
selected level
0:            to disable foldcolumn
"[1-9]":      to display a fixed number of columns
See [folding](#folding).

### <a id="'foldenable' 'fen' 'nofoldenable' 'nofen'" class="section-title" href="#'foldenable' 'fen' 'nofoldenable' 'nofen'">Note:</a>
'foldenable' 'fen'	boolean (default on)
local to window
When off, all folds are open.  This option can be used to quickly
switch between showing all text unfolded and viewing the text with
folds (including manually opened or closed folds).  It can be toggled
with the [zi](#zi) command.  The 'foldcolumn' will remain blank when
'foldenable' is off.
This option is set by commands that create a new fold or close a fold.
See [folding](#folding).

### <a id="'foldexpr' 'fde'" class="section-title" href="#'foldexpr' 'fde'">Note:</a>
'foldexpr' 'fde'	string (default: "0")
local to window
The expression used for when 'foldmethod' is "expr".  It is evaluated
for each line to obtain its fold level.  See [fold-expr](#fold-expr).

The expression will be evaluated in the [sandbox](#sandbox) if set from a
modeline, see [sandbox-option](#sandbox-option).
This option can't be set from a [modeline](#modeline) when the 'diff' option is
on or the 'modelineexpr' option is off.

It is not allowed to change text or jump to another window while
evaluating 'foldexpr' [textlock](#textlock).

### <a id="'foldignore' 'fdi'" class="section-title" href="#'foldignore' 'fdi'">Note:</a>
'foldignore' 'fdi'	string (default: "#")
local to window
Used only when 'foldmethod' is "indent".  Lines starting with
characters in 'foldignore' will get their fold level from surrounding
lines.  White space is skipped before checking for this character.
The default "#" works well for C programs.  See [fold-indent](#fold-indent).

### <a id="'foldlevel' 'fdl'" class="section-title" href="#'foldlevel' 'fdl'">Note:</a>
'foldlevel' 'fdl'	number (default: 0)
local to window
Sets the fold level: Folds with a higher level will be closed.
Setting this option to zero will close all folds.  Higher numbers will
close fewer folds.
This option is set by commands like [zm|, |zM| and |zR](#zm|, |zM| and |zR).
See [fold-foldlevel](#fold-foldlevel).

### <a id="'foldlevelstart' 'fdls'" class="section-title" href="#'foldlevelstart' 'fdls'">Note:</a>
'foldlevelstart' 'fdls'	number (default: -1)
global
Sets 'foldlevel' when starting to edit another buffer in a window.
Useful to always start editing with all folds closed (value zero),
some folds closed (one) or no folds closed (99).
This is done before reading any modeline, thus a setting in a modeline
overrules this option.  Starting to edit a file for [diff-mode](#diff-mode) also
ignores this option and closes all folds.
It is also done before BufReadPre autocommands, to allow an autocmd to
overrule the 'foldlevel' value for specific files.
When the value is negative, it is not used.

### <a id="'foldmarker' 'fmr' E536" class="section-title" href="#'foldmarker' 'fmr' E536">Note:</a>
'foldmarker' 'fmr'	string (default: "{{{,}}}")
local to window
The start and end marker used when 'foldmethod' is "marker".  There
must be one comma, which separates the start and end marker.  The
marker is a literal string (a regular expression would be too slow).
See [fold-marker](#fold-marker).

### <a id="'foldmethod' 'fdm'" class="section-title" href="#'foldmethod' 'fdm'">Note:</a>
'foldmethod' 'fdm'	string (default: "manual")
local to window
The kind of folding used for the current window.  Possible values:
[fold-manual](#fold-manual)	manual	    Folds are created manually.
[fold-indent](#fold-indent)	indent	    Lines with equal indent form a fold.
[fold-expr](#fold-expr)	expr	    'foldexpr' gives the fold level of a line.
[fold-marker](#fold-marker)	marker	    Markers are used to specify folds.
[fold-syntax](#fold-syntax)	syntax	    Syntax highlighting items specify folds.
[fold-diff](#fold-diff)	diff	    Fold text that is not changed.

### <a id="'foldminlines' 'fml'" class="section-title" href="#'foldminlines' 'fml'">Note:</a>
'foldminlines' 'fml'	number (default: 1)
local to window
Sets the number of screen lines above which a fold can be displayed
closed.  Also for manually closed folds.  With the default value of
one a fold can only be closed if it takes up two or more screen lines.
Set to zero to be able to close folds of just one screen line.
Note that this only has an effect on what is displayed.  After using
"zc" to close a fold, which is displayed open because it's smaller
than 'foldminlines', a following "zc" may close a containing fold.

### <a id="'foldnestmax' 'fdn'" class="section-title" href="#'foldnestmax' 'fdn'">Note:</a>
'foldnestmax' 'fdn'	number (default: 20)
local to window
Sets the maximum nesting of folds for the "indent" and "syntax"
methods.  This avoids that too many folds will be created.  Using more
than 20 doesn't work, because the internal limit is 20.

### <a id="'foldopen' 'fdo'" class="section-title" href="#'foldopen' 'fdo'">Note:</a>
'foldopen' 'fdo'	string (default: "block,hor,mark,percent,quickfix,
search,tag,undo")
global
Specifies for which type of commands folds will be opened, if the
command moves the cursor into a closed fold.  It is a comma-separated
list of items.
NOTE: When the command is part of a mapping this option is not used.
Add the [zv](#zv) command to the mapping to get the same effect.
(rationale: the mapping may want to control opening folds itself)

item		commands ~
all		any
block		"(", "{", "[[", "[{", etc.
hor		horizontal movements: "l", "w", "fx", etc.
insert		any command in Insert mode
jump		far jumps: "G", "gg", etc.
mark		jumping to a mark: "'m", CTRL-O, etc.
percent		"%"
quickfix	":cn", ":crew", ":make", etc.
search		search for a pattern: "/", "n", "*", "gd", etc.
(not for a search pattern in a ":" command)
Also for [[s| and |]s](#[s| and |]s).
tag		jumping to a tag: ":ta", CTRL-T, etc.
undo		undo or redo: "u" and CTRL-R
When a movement command is used for an operator (e.g., "dl" or "y%")
this option is not used.  This means the operator will include the
whole closed fold.
Note that vertical movements are not here, because it would make it
very difficult to move onto a closed fold.
In insert mode the folds containing the cursor will always be open
when text is inserted.
To close folds you can re-apply 'foldlevel' with the [zx](#zx) command or
set the 'foldclose' option to "all".

### <a id="'foldtext' 'fdt'" class="section-title" href="#'foldtext' 'fdt'">Note:</a>
'foldtext' 'fdt'	string (default: "foldtext()")
local to window
An expression which is used to specify the text displayed for a closed
fold.  See [fold-foldtext](#fold-foldtext).

The expression will be evaluated in the [sandbox](#sandbox) if set from a
modeline, see [sandbox-option](#sandbox-option).
This option cannot be set in a modeline when 'modelineexpr' is off.

It is not allowed to change text or jump to another window while
evaluating 'foldtext' [textlock](#textlock).

### <a id="'formatexpr' 'fex'" class="section-title" href="#'formatexpr' 'fex'">Note:</a>
'formatexpr' 'fex'	string (default "")
local to buffer
Expression which is evaluated to format a range of lines for the [gq](#gq)
operator or automatic formatting (see 'formatoptions').  When this
option is empty 'formatprg' is used.

The [v:lnum](#v:lnum)  variable holds the first line to be formatted.
The [v:count](#v:count) variable holds the number of lines to be formatted.
The [v:char](#v:char)  variable holds the character that is going to be
inserted if the expression is being evaluated due to
automatic formatting.  This can be empty.  Don't insert
it yet!

Example:
```
:set formatexpr=mylang#Format()

```
	This will invoke the mylang#Format() function in the
autoload/mylang.vim file in 'runtimepath'. [autoload](#autoload)

The expression is also evaluated when 'textwidth' is set and adding
text beyond that limit.  This happens under the same conditions as
when internal formatting is used.  Make sure the cursor is kept in the
same spot relative to the text then!  The [mode()](#mode()) function will
return "i" or "R" in this situation.

When the expression evaluates to non-zero Vim will fall back to using
the internal format mechanism.

The expression will be evaluated in the [sandbox](#sandbox) when set from a
modeline, see [sandbox-option](#sandbox-option).  That stops the option from working,
since changing the buffer text is not allowed.
This option cannot be set in a modeline when 'modelineexpr' is off.
NOTE: This option is set to "" when 'compatible' is set.

### <a id="'formatlistpat' 'flp'" class="section-title" href="#'formatlistpat' 'flp'">Note:</a>
'formatlistpat' 'flp'	string (default: "^\s*\d\+[\]:.)}\t ]\s*")
local to buffer
A pattern that is used to recognize a list header.  This is used for
the "n" flag in 'formatoptions'.
The pattern must match exactly the text that will be the indent for
the line below it.  You can use [/\ze](#/\ze) to mark the end of the match
while still checking more characters.  There must be a character
following the pattern, when it matches the whole line it is handled
like there is no match.
The default recognizes a number, followed by an optional punctuation
character and white space.

### <a id="'formatoptions' 'fo'" class="section-title" href="#'formatoptions' 'fo'">Note:</a>
'formatoptions' 'fo'	string (default: "tcqj")
local to buffer
This is a sequence of letters which describes how automatic
formatting is to be done.  See [fo-table](#fo-table).  When the 'paste' option is
on, no formatting is done (like 'formatoptions' is empty).  Commas can
be inserted for readability.
To avoid problems with flags that are added in the future, use the
"+=" and "-=" feature of ":set" [add-option-flags](#add-option-flags).

### <a id="'formatprg' 'fp'" class="section-title" href="#'formatprg' 'fp'">Note:</a>
'formatprg' 'fp'	string (default "")
global or local to buffer [global-local](#global-local)
The name of an external program that will be used to format the lines
selected with the [gq](#gq) operator.  The program must take the input on
stdin and produce the output on stdout.  The Unix program "fmt" is
such a program.
If the 'formatexpr' option is not empty it will be used instead.
Otherwise, if 'formatprg' option is an empty string, the internal
format function will be used [C-indenting](#C-indenting).
Environment variables are expanded [:set_env|.  See |option-backslash](#:set_env|.  See |option-backslash)
about including spaces and backslashes.
This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'fsync' 'fs' 'nofsync' 'nofs'" class="section-title" href="#'fsync' 'fs' 'nofsync' 'nofs'">Note:</a>
'fsync' 'fs'		boolean	(default off)
global
When on, the OS function fsync() will be called after saving a file
([:write|, |writefile()|, …), |swap-file| and |shada-file](#:write|, |writefile()|, …), |swap-file| and |shada-file). This
flushes the file to disk, ensuring that it is safely written.
Slow on some systems: writing buffers, quitting Nvim, and other
operations may sometimes take a few seconds.

Files are ALWAYS flushed ('fsync' is ignored) when:
- [CursorHold](#CursorHold) event is triggered
- [:preserve](#:preserve) is called
- system signals low battery life
- Nvim exits abnormally

This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'gdefault' 'gd' 'nogdefault' 'nogd'" class="section-title" href="#'gdefault' 'gd' 'nogdefault' 'nogd'">Note:</a>
'gdefault' 'gd'		boolean	(default off)
global
When on, the ":substitute" flag 'g' is default on.  This means that
all matches in a line are substituted instead of one.  When a 'g' flag
is given to a ":substitute" command, this will toggle the substitution
of all or one match.  See [complex-change](#complex-change).

command		'gdefault' on	'gdefault' off	~
:s///		  subst. all	  subst. one
:s///g		  subst. one	  subst. all
:s///gg		  subst. all	  subst. one

DEPRECATED: Setting this option may break plugins that are not aware
of this option.  Also, many users get confused that adding the /g flag
has the opposite effect of that it normally does.

### <a id="'grepformat' 'gfm'" class="section-title" href="#'grepformat' 'gfm'">Note:</a>
'grepformat' 'gfm'	string	(default "%f:%l:%m,%f:%l%m,%f  %l%m")
global
Format to recognize for the ":grep" command output.
This is a scanf-like string that uses the same format as the
'errorformat' option: see [errorformat](#errorformat).

### <a id="'grepprg' 'gp'" class="section-title" href="#'grepprg' 'gp'">Note:</a>
'grepprg' 'gp'		string	(default "grep -n ",
### <a id="Unix: "grep -n $ /dev/null")" class="section-title" href="#Unix: "grep -n $ /dev/null")">Note:</a>
global or local to buffer [global-local](#global-local)
Program to use for the [:grep](#:grep) command.  This option may contain '%'
and '#' characters, which are expanded like when used in a command-
### <a id="The placeholder "$" is allowed to specify where the arguments" class="section-title" href="#The placeholder "$" is allowed to specify where the arguments">	line.</a>
will be included.  Environment variables are expanded [:set_env](#:set_env).  See
[option-backslash](#option-backslash) about including spaces and backslashes.
When your "grep" accepts the "-H" argument, use this to make ":grep"
also work well with a single file:
```
:set grepprg=grep\ -nH

```
	Special value: When 'grepprg' is set to "internal" the [:grep](#:grep) command
works like [:vimgrep|, |:lgrep| like |:lvimgrep|, |:grepadd](#:vimgrep|, |:lgrep| like |:lvimgrep|, |:grepadd) like
[:vimgrepadd| and |:lgrepadd| like |:lvimgrepadd](#:vimgrepadd| and |:lgrepadd| like |:lvimgrepadd).
See also the section [:make_makeprg](#:make_makeprg), since most of the comments there
apply equally to 'grepprg'.
This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'guicursor' 'gcr' E545 E546 E548 E549" class="section-title" href="#'guicursor' 'gcr' E545 E546 E548 E549">Note:</a>
'guicursor' 'gcr'	string	(default "n-v-c-sm:block,i-ci-ve:ver25,r-cr-o:hor20")
global
Configures the cursor style for each mode. Works in the GUI and many
terminals.  See [tui-cursor-shape](#tui-cursor-shape).

To disable cursor-styling, reset the option:
```
:set guicursor=


```
	To enable mode shapes, "Cursor" highlight, and blinking:
```
:set guicursor=n-v-c:block,i-ci-ve:ver25,r-cr:hor20,o:hor50
\,a:blinkwait700-blinkoff400-blinkon250-Cursor/lCursor
\,sm:block-blinkwait175-blinkoff150-blinkon175


```
	The option is a comma-separated list of parts.  Each part consists of a
mode-list and an argument-list:
mode-list:argument-list,mode-list:argument-list,..
The mode-list is a dash separated list of these modes:
n	Normal mode
v	Visual mode
ve	Visual mode with 'selection' "exclusive" (same as 'v',
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
hor{N}	horizontal bar, {N} percent of the character height
ver{N}	vertical bar, {N} percent of the character width
block	block cursor, fills the whole character
- Only one of the above three should be present.
- Default is "block" for each mode.
blinkwait{N}				*cursor-blinking*
blinkon{N}
blinkoff{N}
blink times for cursor: blinkwait is the delay before
the cursor starts blinking, blinkon is the time that
the cursor is shown and blinkoff is the time that the
cursor is not shown.  Times are in msec.  When one of
the numbers is zero, there is no blinking. E.g.:
```
:set guicursor=n:blinkon0

```
			- Default is "blinkon0" for each mode.
{group-name}
Highlight group that decides the color and font of the
cursor.
In the [TUI](#TUI):
- [inverse](#inverse)/reverse and no group-name are interpreted
as "host-terminal default cursor colors" which
typically means "inverted bg and fg colors".
- [ctermfg| and |guifg](#ctermfg| and |guifg) are ignored.
{group-name}/{group-name}
Two highlight group names, the first is used when
no language mappings are used, the other when they
are. [language-mapping](#language-mapping)

Examples of parts:
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
faster.

The 'a' mode is different.  It will set the given argument-list for
all modes.  It does not reset anything to defaults.  This can be used
to do a common setting for all modes.  For example, to switch off
blinking: "a:blinkon0"

Examples of cursor highlighting:
```
:highlight Cursor gui=reverse guifg=NONE guibg=NONE
:highlight Cursor gui=NONE guifg=bg guibg=fg

```

### <a id="'guifont' 'gfn'" class="section-title" href="#'guifont' 'gfn'">Note:</a>
### <a id="E235 E596" class="section-title" href="#E235 E596">Note:</a>
'guifont' 'gfn'		string	(default "")
global
This is a list of fonts which will be used for the GUI version of Vim.
In its simplest form the value is just one font name.  When
the font cannot be found you will get an error message.  To try other
font names a list can be specified, font names separated with commas.
The first valid font is used.

Spaces after a comma are ignored.  To include a comma in a font name
precede it with a backslash.  Setting an option requires an extra
backslash before a space and a backslash.  See also
[option-backslash](#option-backslash).  For example:
```
:set guifont=Screen15,\ 7x13,font\\,with\\,commas

```
	will make Vim try to use the font "Screen15" first, and if it fails it
will try to use "7x13" and then "font,with,commas" instead.

If none of the fonts can be loaded, Vim will keep the current setting.
If an empty font list is given, Vim will try using other resource
settings (for X, it will use the Vim.font resource), and finally it
will try some builtin default which should always be there ("7x13" in
the case of X).  The font names given should be "normal" fonts.  Vim
will try to find the related bold and italic fonts.

For Win32 and Mac OS:
```
### <a id=":set guifont=" class="section-title" href="#:set guifont=">Note:</a>

```
	will bring up a font requester, where you can pick the font you want.

The font name depends on the GUI used.

For Mac OSX you can use something like this:
```
:set guifont=Monaco:h10
### <a id="E236" class="section-title" href="#E236"><</a>
Note that the fonts must be mono-spaced (all characters have the same
width).

To preview a font on X11, you might be able to use the "xfontsel"
program.  The "xlsfonts" program gives a list of all available fonts.

### <a id="E244 E245" class="section-title" href="#E244 E245">	For the Win32 GUI</a>
- takes these options in the font name:
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

Use a ':' to separate the options.
- A '_' can be used in the place of a space, so you don't need to use
backslashes to escape the spaces.
- Examples:
```
:set guifont=courier_new:h12:w5:b:cRUSSIAN
:set guifont=Andale_Mono:h7.5:w4.5

```

### <a id="'guifontwide' 'gfw' E231 E533 E534" class="section-title" href="#'guifontwide' 'gfw' E231 E533 E534">Note:</a>
'guifontwide' 'gfw'	string	(default "")
global
Comma-separated list of fonts to be used for double-width characters.
The first font that can be loaded is used.
Note: The size of these fonts must be exactly twice as wide as the one
specified with 'guifont' and the same height.

When 'guifont' has a valid font and 'guifontwide' is empty Vim will
attempt to set 'guifontwide' to a matching double-width font.

### <a id="'guioptions' 'go'" class="section-title" href="#'guioptions' 'go'">Note:</a>
'guioptions' 'go'	string	(default "egmrLT"   (MS-Windows))
global
This option only has an effect in the GUI version of Vim.  It is a
sequence of letters which describes what components and options of the
GUI should be used.
To avoid problems with flags that are added in the future, use the
"+=" and "-=" feature of ":set" [add-option-flags](#add-option-flags).

Valid letters are as follows:
### <a id="guioptions_a 'go-a'" class="section-title" href="#guioptions_a 'go-a'">Note:</a>
'a'	Autoselect:  If present, then whenever VISUAL mode is started,
or the Visual area extended, Vim tries to become the owner of
the windowing system's global selection.  This means that the
Visually highlighted text is available for pasting into other
applications as well as into Vim itself.  When the Visual mode
ends, possibly due to an operation on the text, or when an
application wants to paste the selection, the highlighted text
### <a id="is automatically yanked into the " selection register." class="section-title" href="#is automatically yanked into the " selection register.">Note:</a>
Thus the selection is still available for pasting into other
applications after the VISUAL mode has ended.
If not present, then Vim won't become the owner of the
windowing system's global selection unless explicitly told to
### <a id="by a yank or delete operation for the " register." class="section-title" href="#by a yank or delete operation for the " register.">Note:</a>
The same applies to the modeless selection.
### <a id="'go-P'" class="section-title" href="#'go-P'">Note:</a>
### <a id="'P'	Like autoselect but using the "+ register instead of the "" class="section-title" href="#'P'	Like autoselect but using the "+ register instead of the "">Note:</a>
register.
### <a id="'go-A'" class="section-title" href="#'go-A'">Note:</a>
'A'	Autoselect for the modeless selection.  Like 'a', but only
applies to the modeless selection.

'guioptions'   autoselect Visual  autoselect modeless ~
""		 -			 -
"a"		yes			yes
"A"		 -			yes
"aA"		yes			yes

### <a id="'go-c'" class="section-title" href="#'go-c'">Note:</a>
'c'	Use console dialogs instead of popup dialogs for simple
choices.
### <a id="'go-d'" class="section-title" href="#'go-d'">Note:</a>
'd'	Use dark theme variant if available.
### <a id="'go-e'" class="section-title" href="#'go-e'">Note:</a>
'e'	Add tab pages when indicated with 'showtabline'.
'guitablabel' can be used to change the text in the labels.
When 'e' is missing a non-GUI tab pages line may be used.
The GUI tabs are only supported on some systems, currently
Mac OS/X and MS-Windows.
### <a id="'go-i'" class="section-title" href="#'go-i'">Note:</a>
'i'	Use a Vim icon.
### <a id="'go-m'" class="section-title" href="#'go-m'">Note:</a>
'm'	Menu bar is present.
### <a id="'go-M'" class="section-title" href="#'go-M'">Note:</a>
'M'	The system menu "$VIMRUNTIME/menu.vim" is not sourced.  Note
that this flag must be added in the vimrc file, before
switching on syntax or filetype recognition (when the [gvimrc](#gvimrc)
file is sourced the system menu has already been loaded; the
`:syntax on` and `:filetype on` commands load the menu too).
### <a id="'go-g'" class="section-title" href="#'go-g'">Note:</a>
'g'	Grey menu items: Make menu items that are not active grey.  If
'g' is not included inactive menu items are not shown at all.
### <a id="'go-T'" class="section-title" href="#'go-T'">Note:</a>
'T'	Include Toolbar.  Currently only in Win32 GUI.
### <a id="'go-r'" class="section-title" href="#'go-r'">Note:</a>
'r'	Right-hand scrollbar is always present.
### <a id="'go-R'" class="section-title" href="#'go-R'">Note:</a>
'R'	Right-hand scrollbar is present when there is a vertically
split window.
### <a id="'go-l'" class="section-title" href="#'go-l'">Note:</a>
'l'	Left-hand scrollbar is always present.
### <a id="'go-L'" class="section-title" href="#'go-L'">Note:</a>
'L'	Left-hand scrollbar is present when there is a vertically
split window.
### <a id="'go-b'" class="section-title" href="#'go-b'">Note:</a>
'b'	Bottom (horizontal) scrollbar is present.  Its size depends on
the longest visible line, or on the cursor line if the 'h'
flag is included. [gui-horiz-scroll](#gui-horiz-scroll)
### <a id="'go-h'" class="section-title" href="#'go-h'">Note:</a>
'h'	Limit horizontal scrollbar size to the length of the cursor
line.  Reduces computations. [gui-horiz-scroll](#gui-horiz-scroll)

And yes, you may even have scrollbars on the left AND the right if
you really want to :-).  See [gui-scrollbars](#gui-scrollbars) for more information.

### <a id="'go-v'" class="section-title" href="#'go-v'">Note:</a>
'v'	Use a vertical button layout for dialogs.  When not included,
a horizontal layout is preferred, but when it doesn't fit a
vertical layout is used anyway.  Not supported in GTK 3.
### <a id="'go-p'" class="section-title" href="#'go-p'">Note:</a>
'p'	Use Pointer callbacks for X11 GUI.  This is required for some
window managers.  If the cursor is not blinking or hollow at
the right moment, try adding this flag.  This must be done
before starting the GUI.  Set it in your [gvimrc](#gvimrc).  Adding or
removing it after the GUI has started has no effect.
### <a id="'go-k'" class="section-title" href="#'go-k'">Note:</a>
'k'	Keep the GUI window size when adding/removing a scrollbar, or
toolbar, tabline, etc.  Instead, the behavior is similar to
when the window is maximized and will adjust 'lines' and
'columns' to fit to the window.  Without the 'k' flag Vim will
try to keep 'lines' and 'columns' the same when adding and
removing GUI components.

### <a id="'guitablabel' 'gtl'" class="section-title" href="#'guitablabel' 'gtl'">Note:</a>
'guitablabel' 'gtl'	string	(default empty)
global
When non-empty describes the text to use in a label of the GUI tab
pages line.  When empty and when the result is empty Vim will use a
default label.  See [setting-guitablabel](#setting-guitablabel) for more info.

The format of this option is like that of 'statusline'.
'guitabtooltip' is used for the tooltip, see below.
The expression will be evaluated in the [sandbox](#sandbox) when set from a
modeline, see [sandbox-option](#sandbox-option).
This option cannot be set in a modeline when 'modelineexpr' is off.

Only used when the GUI tab pages line is displayed.  'e' must be
present in 'guioptions'.  For the non-GUI tab pages line 'tabline' is
used.

### <a id="'guitabtooltip' 'gtt'" class="section-title" href="#'guitabtooltip' 'gtt'">Note:</a>
'guitabtooltip' 'gtt'	string	(default empty)
global
When non-empty describes the text to use in a tooltip for the GUI tab
pages line.  When empty Vim will use a default tooltip.
This option is otherwise just like 'guitablabel' above.
You can include a line break.  Simplest method is to use [:let](#:let):
```
:let &guitabtooltip = "line one\nline two"

```


### <a id="'helpfile' 'hf'" class="section-title" href="#'helpfile' 'hf'">Note:</a>
'helpfile' 'hf'		string	(default (MS-Windows) "$VIMRUNTIME\doc\help.txt"
(others) "$VIMRUNTIME/doc/help.txt")
global
Name of the main help file.  All distributed help files should be
placed together in one directory.  Additionally, all "doc" directories
in 'runtimepath' will be used.
Environment variables are expanded [:set_env](#:set_env).  For example:
"$VIMRUNTIME/doc/help.txt".  If $VIMRUNTIME is not set, $VIM is also
tried.  Also see [$VIMRUNTIME| and |option-backslash](#$VIMRUNTIME| and |option-backslash) about including
spaces and backslashes.
This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'helpheight' 'hh'" class="section-title" href="#'helpheight' 'hh'">Note:</a>
'helpheight' 'hh'	number	(default 20)
global
Minimal initial height of the help window when it is opened with the
":help" command.  The initial height of the help window is half of the
current window, or (when the 'ea' option is on) the same as other
windows.  When the height is less than 'helpheight', the height is
set to 'helpheight'.  Set to zero to disable.

### <a id="'helplang' 'hlg'" class="section-title" href="#'helplang' 'hlg'">Note:</a>
'helplang' 'hlg'	string	(default: messages language or empty)
global
Comma-separated list of languages.  Vim will use the first language
for which the desired help can be found.  The English help will always
be used as a last resort.  You can add "en" to prefer English over
another language, but that will only find tags that exist in that
language and not in the English help.
Example:
```
:set helplang=de,it

```
	This will first search German, then Italian and finally English help
files.
When using [CTRL-]](#CTRL-]) and ":help!" in a non-English help file Vim will
try to find the tag in the current language before using this option.
See [help-translated](#help-translated).

### <a id="'hidden' 'hid' 'nohidden' 'nohid'" class="section-title" href="#'hidden' 'hid' 'nohidden' 'nohid'">Note:</a>
'hidden' 'hid'		boolean	(default on)
global
When off a buffer is unloaded (including loss of undo information)
when it is [abandon](#abandon)ed.  When on a buffer becomes hidden when it is
[abandon](#abandon)ed.  A buffer displayed in another window does not become
hidden, of course.

Commands that move through the buffer list sometimes hide a buffer
although the 'hidden' option is off when these three are true:
- the buffer is modified
- 'autowrite' is off or writing is not possible
- the '!' flag was used
Also see [windows](#windows).

To hide a specific buffer use the 'bufhidden' option.
'hidden' is set for one command with ":hide {command}" [:hide](#:hide).

### <a id="'history' 'hi'" class="section-title" href="#'history' 'hi'">Note:</a>
'history' 'hi'		number	(default: 10000)
global
A history of ":" commands, and a history of previous search patterns
is remembered.  This option decides how many entries may be stored in
each of these histories (see [cmdline-editing](#cmdline-editing)).
The maximum value is 10000.

### <a id="'hkmap' 'hk' 'nohkmap' 'nohk'" class="section-title" href="#'hkmap' 'hk' 'nohkmap' 'nohk'">Note:</a>
'hkmap' 'hk'		boolean (default off)
global
When on, the keyboard is mapped for the Hebrew character set.
Normally you would set 'allowrevins' and use CTRL-_ in insert mode to
toggle this option.  See [rileft.txt](#rileft.txt).

### <a id="'hkmapp' 'hkp' 'nohkmapp' 'nohkp'" class="section-title" href="#'hkmapp' 'hkp' 'nohkmapp' 'nohkp'">Note:</a>
'hkmapp' 'hkp'		boolean (default off)
global
When on, phonetic keyboard mapping is used.  'hkmap' must also be on.
This is useful if you have a non-Hebrew keyboard.
See [rileft.txt](#rileft.txt).

### <a id="'hlsearch' 'hls' 'nohlsearch' 'nohls'" class="section-title" href="#'hlsearch' 'hls' 'nohlsearch' 'nohls'">Note:</a>
'hlsearch' 'hls'	boolean	(default on)
global
When there is a previous search pattern, highlight all its matches.
The [hl-Search](#hl-Search) highlight group determines the highlighting for all
matches not under the cursor while the [hl-CurSearch](#hl-CurSearch) highlight group
(if defined) determines the highlighting for the match under the
cursor. If [hl-CurSearch| is not defined, then |hl-Search](#hl-CurSearch| is not defined, then |hl-Search) is used for
both. Note that only the matching text is highlighted, any offsets
are not applied.
See also: 'incsearch' and [:match](#:match).
When you get bored looking at the highlighted matches, you can turn it
off with [:nohlsearch](#:nohlsearch).  This does not change the option value, as
soon as you use a search command, the highlighting comes back.
'redrawtime' specifies the maximum time spent on finding matches.
When the search pattern can match an end-of-line, Vim will try to
highlight all of the matched text.  However, this depends on where the
search starts.  This will be the first line in the window or the first
line below a closed fold.  A match in a previous line which is not
drawn may not continue in a newly drawn line.
You can specify whether the highlight status is restored on startup
with the 'h' flag in 'shada' [shada-h](#shada-h).

### <a id="'icon' 'noicon'" class="section-title" href="#'icon' 'noicon'">Note:</a>
'icon'			boolean	(default off, on when title can be restored)
global
When on, the icon text of the window will be set to the value of
'iconstring' (if it is not empty), or to the name of the file
currently being edited.  Only the last part of the name is used.
Overridden by the 'iconstring' option.
Only works if the terminal supports setting window icons.

### <a id="'iconstring'" class="section-title" href="#'iconstring'">Note:</a>
'iconstring'		string	(default "")
global
When this option is not empty, it will be used for the icon text of
the window.  This happens only when the 'icon' option is on.
Only works if the terminal supports setting window icon text
When this option contains printf-style '%' items, they will be
expanded according to the rules used for 'statusline'.  See
'titlestring' for example settings.
This option cannot be set in a modeline when 'modelineexpr' is off.

### <a id="'ignorecase' 'ic' 'noignorecase' 'noic'" class="section-title" href="#'ignorecase' 'ic' 'noignorecase' 'noic'">Note:</a>
'ignorecase' 'ic'	boolean	(default off)
global
Ignore case in search patterns.  Also used when searching in the tags
file.
Also see 'smartcase' and 'tagcase'.
Can be overruled by using "\c" or "\C" in the pattern, see
[/ignorecase](#/ignorecase).

### <a id="'imcmdline' 'imc' 'noimcmdline' 'noimc'" class="section-title" href="#'imcmdline' 'imc' 'noimcmdline' 'noimc'">Note:</a>
'imcmdline' 'imc'	boolean (default off)
global
When set the Input Method is always on when starting to edit a command
line, unless entering a search pattern (see 'imsearch' for that).
Setting this option is useful when your input method allows entering
English characters directly, e.g., when it's used to type accented
characters with dead keys.

### <a id="'imdisable' 'imd' 'noimdisable' 'noimd'" class="section-title" href="#'imdisable' 'imd' 'noimdisable' 'noimd'">Note:</a>
'imdisable' 'imd'	boolean (default off, on for some systems (SGI))
global
When set the Input Method is never used.  This is useful to disable
the IM when it doesn't work properly.
Currently this option is on by default for SGI/IRIX machines.  This
may change in later releases.

### <a id="'iminsert' 'imi'" class="section-title" href="#'iminsert' 'imi'">Note:</a>
'iminsert' 'imi'	number (default 0)
local to buffer
Specifies whether :lmap or an Input Method (IM) is to be used in
Insert mode.  Valid values:
0	:lmap is off and IM is off
1	:lmap is ON and IM is off
2	:lmap is off and IM is ON
To always reset the option to zero when leaving Insert mode with <Esc>
this can be used:
```
:inoremap <ESC> <ESC>:set iminsert=0<CR>

```
	This makes :lmap and IM turn off automatically when leaving Insert
mode.
Note that this option changes when using CTRL-^ in Insert mode
[i_CTRL-^](#i_CTRL-^).
The value is set to 1 when setting 'keymap' to a valid keymap name.
It is also used for the argument of commands like "r" and "f".

### <a id="'imsearch' 'ims'" class="section-title" href="#'imsearch' 'ims'">Note:</a>
'imsearch' 'ims'	number (default -1)
local to buffer
Specifies whether :lmap or an Input Method (IM) is to be used when
entering a search pattern.  Valid values:
-1	the value of 'iminsert' is used, makes it look like
'iminsert' is also used when typing a search pattern
0	:lmap is off and IM is off
1	:lmap is ON and IM is off
2	:lmap is off and IM is ON
Note that this option changes when using CTRL-^ in Command-line mode
[c_CTRL-^](#c_CTRL-^).
The value is set to 1 when it is not -1 and setting the 'keymap'
option to a valid keymap name.

### <a id="'inccommand' 'icm'" class="section-title" href="#'inccommand' 'icm'">Note:</a>
'inccommand' 'icm'	string	(default "nosplit")
global

When nonempty, shows the effects of [:substitute|, |:smagic](#:substitute|, |:smagic),
[:snomagic| and user commands with the |:command-preview](#:snomagic| and user commands with the |:command-preview) flag as you
type.

Possible values:
nosplit	Shows the effects of a command incrementally in the
buffer.
split	Like "nosplit", but also shows partial off-screen
results in a preview window.

If the preview for built-in commands is too slow (exceeds
'redrawtime') then 'inccommand' is automatically disabled until
[Command-line-mode](#Command-line-mode) is done.

### <a id="'include' 'inc'" class="section-title" href="#'include' 'inc'">Note:</a>
### <a id="string	(default "^\s#\sinclude")" class="section-title" href="#string	(default "^\s#\sinclude")">'include' 'inc'</a>
global or local to buffer [global-local](#global-local)
Pattern to be used to find an include command.  It is a search
pattern, just like for the "/" command (See [pattern](#pattern)).  The default
value is for C programs.  This option is used for the commands "[i",
"]I", "[d", etc.
Normally the 'isfname' option is used to recognize the file name that
comes after the matched pattern.  But if "\zs" appears in the pattern
then the text matched from "\zs" to the end, or until "\ze" if it
appears, is used as the file name.  Use this to include characters
that are not in 'isfname', such as a space.  You can then use
'includeexpr' to process the matched text.
See [option-backslash](#option-backslash) about including spaces and backslashes.

### <a id="'includeexpr' 'inex'" class="section-title" href="#'includeexpr' 'inex'">Note:</a>
'includeexpr' 'inex'	string	(default "")
local to buffer
Expression to be used to transform the string found with the 'include'
option to a file name.  Mostly useful to change "." to "/" for Java:
```
:set includeexpr=substitute(v:fname,'\\.','/','g')

```
	The "v:fname" variable will be set to the file name that was detected.

Also used for the [gf](#gf) command if an unmodified file name can't be
found.  Allows doing "gf" on the name after an 'include' statement.
Also used for [<cfile>](#<cfile>).

The expression will be evaluated in the [sandbox](#sandbox) when set from a
modeline, see [sandbox-option](#sandbox-option).
This option cannot be set in a modeline when 'modelineexpr' is off.

It is not allowed to change text or jump to another window while
evaluating 'includeexpr' [textlock](#textlock).

### <a id="'incsearch' 'is' 'noincsearch' 'nois'" class="section-title" href="#'incsearch' 'is' 'noincsearch' 'nois'">Note:</a>
'incsearch' 'is'	boolean	(default on)
global
While typing a search command, show where the pattern, as it was typed
so far, matches.  The matched string is highlighted.  If the pattern
is invalid or not found, nothing is shown.  The screen will be updated
often, this is only useful on fast terminals.
Note that the match will be shown, but the cursor will return to its
original position when no match is found and when pressing <Esc>.  You
still need to finish the search command with <Enter> to move the
cursor to the match.
You can use the CTRL-G and CTRL-T keys to move to the next and
previous match. [c_CTRL-G| |c_CTRL-T](#c_CTRL-G| |c_CTRL-T)
Vim only searches for about half a second.  With a complicated
pattern and/or a lot of text the match may not be found.  This is to
avoid that Vim hangs while you are typing the pattern.
The [hl-IncSearch](#hl-IncSearch) highlight group determines the highlighting.
When 'hlsearch' is on, all matched strings are highlighted too while
typing a search command. See also: 'hlsearch'.
If you don't want to turn 'hlsearch' on, but want to highlight all
matches while searching, you can turn on and off 'hlsearch' with
autocmd.  Example:
```
augroup vimrc-incsearch-highlight
autocmd!
autocmd CmdlineEnter /,\? :set hlsearch
autocmd CmdlineLeave /,\? :set nohlsearch
augroup END

```

CTRL-L can be used to add one character from after the current match
to the command line.  If 'ignorecase' and 'smartcase' are set and the
command line has no uppercase characters, the added character is
converted to lowercase.
CTRL-R CTRL-W can be used to add the word at the end of the current
match, excluding the characters that were already typed.

### <a id="'indentexpr' 'inde'" class="section-title" href="#'indentexpr' 'inde'">Note:</a>
'indentexpr' 'inde'	string	(default "")
local to buffer
Expression which is evaluated to obtain the proper indent for a line.
It is used when a new line is created, for the [=](#=) operator and
in Insert mode as specified with the 'indentkeys' option.
When this option is not empty, it overrules the 'cindent' and
'smartindent' indenting.  When 'lisp' is set, this option is
is only used when 'lispoptions' contains "expr:1".
When 'paste' is set this option is not used for indenting.
The expression is evaluated with [v:lnum](#v:lnum) set to the line number for
which the indent is to be computed.  The cursor is also in this line
when the expression is evaluated (but it may be moved around).
The expression must return the number of spaces worth of indent.  It
can return "-1" to keep the current indent (this means 'autoindent' is
used for the indent).
Functions useful for computing the indent are [indent()|, |cindent()](#indent()|, |cindent())
and [lispindent()](#lispindent()).
The evaluation of the expression must not have side effects!  It must
not change the text, jump to another window, etc.  Afterwards the
cursor position is always restored, thus the cursor may be moved.
Normally this option would be set to call a function:
```
:set indentexpr=GetMyIndent()

```
	Error messages will be suppressed, unless the 'debug' option contains
"msg".
See [indent-expression](#indent-expression).

The expression will be evaluated in the [sandbox](#sandbox) when set from a
modeline, see [sandbox-option](#sandbox-option).
This option cannot be set in a modeline when 'modelineexpr' is off.

It is not allowed to change text or jump to another window while
evaluating 'indentexpr' [textlock](#textlock).


### <a id="'indentkeys' 'indk'" class="section-title" href="#'indentkeys' 'indk'">Note:</a>
'indentkeys' 'indk'	string	(default "0{,0},0),0],:,0#,!^F,o,O,e")
local to buffer
A list of keys that, when typed in Insert mode, cause reindenting of
the current line.  Only happens if 'indentexpr' isn't empty.
The format is identical to 'cinkeys', see [indentkeys-format](#indentkeys-format).
See [C-indenting| and |indent-expression](#C-indenting| and |indent-expression).

### <a id="'infercase' 'inf' 'noinfercase' 'noinf'" class="section-title" href="#'infercase' 'inf' 'noinfercase' 'noinf'">Note:</a>
'infercase' 'inf'	boolean	(default off)
local to buffer
When doing keyword completion in insert mode [ins-completion](#ins-completion), and
'ignorecase' is also on, the case of the match is adjusted depending
on the typed text.  If the typed text contains a lowercase letter
where the match has an upper case letter, the completed part is made
lowercase.  If the typed text has no lowercase letters and the match
has a lowercase letter where the typed text has an uppercase letter,
and there is a letter before it, the completed part is made uppercase.
With 'noinfercase' the match is used as-is.

### <a id="'isfname' 'isf'" class="section-title" href="#'isfname' 'isf'">Note:</a>
'isfname' 'isf'		string	(default for Windows:
"@,48-57,/,\,.,-,_,+,,,#,$,%,{,},[,],:,@-@,!,~,="
otherwise: "@,48-57,/,.,-,_,+,,,#,$,%,~,=")
global
The characters specified by this option are included in file names and
path names.  Filenames are used for commands like "gf", "[i" and in
the tags file.  It is also used for "\f" in a [pattern](#pattern).
Multi-byte characters 256 and above are always included, only the
characters up to 255 are specified with this option.
For UTF-8 the characters 0xa0 to 0xff are included as well.
Think twice before adding white space to this option.  Although a
space may appear inside a file name, the effect will be that Vim
doesn't know where a file name starts or ends when doing completion.
It most likely works better without a space in 'isfname'.

Note that on systems using a backslash as path separator, Vim tries to
do its best to make it work as you would expect.  That is a bit
tricky, since Vi originally used the backslash to escape special
characters.  Vim will not remove a backslash in front of a normal file
name character on these systems, but it will on Unix and alikes.  The
'&' and '^' are not included by default, because these are special for
cmd.exe.

The format of this option is a list of parts, separated with commas.
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
comma, plus <Tab>.
See [option-backslash](#option-backslash) about including spaces and backslashes.

### <a id="'isident' 'isi'" class="section-title" href="#'isident' 'isi'">Note:</a>
'isident' 'isi'		string	(default for Windows:
"@,48-57,_,128-167,224-235"
otherwise: "@,48-57,_,192-255")
global
The characters given by this option are included in identifiers.
Identifiers are used in recognizing environment variables and after a
match of the 'define' option.  It is also used for "\i" in a
[pattern](#pattern).  See 'isfname' for a description of the format of this
option.  For '@' only characters up to 255 are used.
Careful: If you change this option, it might break expanding
environment variables.  E.g., when '/' is included and Vim tries to
expand "$HOME/.local/state/nvim/shada/main.shada".  Maybe you should
change 'iskeyword' instead.

### <a id="'iskeyword' 'isk'" class="section-title" href="#'iskeyword' 'isk'">Note:</a>
'iskeyword' 'isk'	string (default: @,48-57,_,192-255)
local to buffer
Keywords are used in searching and recognizing with many commands:
"w", "*", "[i", etc.  It is also used for "\k" in a [pattern](#pattern).  See
'isfname' for a description of the format of this option.  For '@'
characters above 255 check the "word" character class (any character
that is not white space or punctuation).
For C programs you could use "a-z,A-Z,48-57,_,.,-,>".
For a help file it is set to all non-blank printable characters except
'*', '"' and '|' (so that CTRL-] on a command finds the help for that
command).
When the 'lisp' option is on the '-' character is always included.
This option also influences syntax highlighting, unless the syntax
uses [:syn-iskeyword](#:syn-iskeyword).

### <a id="'isprint' 'isp'" class="section-title" href="#'isprint' 'isp'">Note:</a>
'isprint' 'isp'	string	(default: "@,161-255")
global
The characters given by this option are displayed directly on the
screen.  It is also used for "\p" in a [pattern](#pattern).  The characters from
space (ASCII 32) to '~' (ASCII 126) are always displayed directly,
even when they are not included in 'isprint' or excluded.  See
'isfname' for a description of the format of this option.

Non-printable characters are displayed with two characters:
0 -  31	"^@" - "^_"
32 - 126	always single characters
127		"^?"
128 - 159	"~@" - "~_"
160 - 254	"[ " - "](# " - ")~"
255		"~?"
Illegal bytes from 128 to 255 (invalid UTF-8) are
displayed as <xx>, with the hexadecimal value of the byte.
When 'display' contains "uhex" all unprintable characters are
displayed as <xx>.
The SpecialKey highlighting will be used for unprintable characters.
[hl-SpecialKey](#hl-SpecialKey)

Multi-byte characters 256 and above are always included, only the
characters up to 255 are specified with this option.  When a character
is printable but it is not available in the current font, a
replacement character will be shown.
Unprintable and zero-width Unicode characters are displayed as <xxxx>.
There is no option to specify these characters.

### <a id="'jumpoptions' 'jop'" class="section-title" href="#'jumpoptions' 'jop'">Note:</a>
'jumpoptions' 'jop'	string	(default "")
global
List of words that change the behavior of the [jumplist](#jumplist).
stack         Make the jumplist behave like the tagstack or like a
web browser.  Relative location of entries in the
jumplist is preserved at the cost of discarding
subsequent entries when navigating backwards in the
jumplist and then jumping to a location.
[jumplist-stack](#jumplist-stack)

view          When moving through the jumplist, [changelist](#changelist),
[alternate-file| or using |mark-motions](#alternate-file| or using |mark-motions) try to
restore the [mark-view](#mark-view) in which the action occurred.

### <a id="'joinspaces' 'js' 'nojoinspaces' 'nojs'" class="section-title" href="#'joinspaces' 'js' 'nojoinspaces' 'nojs'">Note:</a>
'joinspaces' 'js'	boolean	(default off)
global
Insert two spaces after a '.', '?' and '!' with a join command.
Otherwise only one space is inserted.

### <a id="'keymap' 'kmp' E544" class="section-title" href="#'keymap' 'kmp' E544">Note:</a>
'keymap' 'kmp'		string	(default "")
local to buffer
Name of a keyboard mapping.  See [mbyte-keymap](#mbyte-keymap).
Setting this option to a valid keymap name has the side effect of
setting 'iminsert' to one, so that the keymap becomes effective.
'imsearch' is also set to one, unless it was -1
Only normal file name characters can be used, "/\*?[|<>" are illegal.

### <a id="'keymodel' 'km'" class="section-title" href="#'keymodel' 'km'">Note:</a>
'keymodel' 'km'		string	(default "")
global
List of comma-separated words, which enable special things that keys
can do.  These values can be used:
startsel	Using a shifted special key starts selection (either
Select mode or Visual mode, depending on "key" being
present in 'selectmode').
stopsel	Using a not-shifted special key stops selection.
Special keys in this context are the cursor keys, <End>, <Home>,

```
PageUp> and <PageDown>.
The 'keymodel' option is set by the [:behave](#:behave) command.

### <a id="'keywordprg' 'kp'" class="section-title" href="#'keywordprg' 'kp'">Note:</a>
'keywordprg' 'kp'	string	(default ":Man", Windows: ":help")
global or local to buffer [global-local](#global-local)
Program to use for the [K](#K) command.  Environment variables are
expanded [:set_env](#:set_env).  ":help" may be used to access the Vim internal
help.  (Note that previously setting the global option to the empty
value did this, which is now deprecated.)
When the first character is ":", the command is invoked as a Vim
Ex command prefixed with [count].
When "man" or "man -s" is used, Vim will automatically translate
a [count] for the "K" command to a section number.
See [option-backslash](#option-backslash) about including spaces and backslashes.
Example:
```
:set keywordprg=man\ -s
:set keywordprg=:Man

```
	This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'langmap' 'lmap' E357 E358" class="section-title" href="#'langmap' 'lmap' E357 E358">Note:</a>
'langmap' 'lmap'	string	(default "")
global
This option allows switching your keyboard into a special language
mode.  When you are typing text in Insert mode the characters are
inserted directly.  When in Normal mode the 'langmap' option takes
care of translating these special characters to the original meaning
of the key.  This means you don't have to change the keyboard mode to
be able to execute Normal mode commands.
This is the opposite of the 'keymap' option, where characters are
mapped in Insert mode.
Also consider setting 'langremap' to off, to prevent 'langmap' from
applying to characters resulting from a mapping.
This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="greek" class="section-title" href="#greek">	Example (for Greek, in UTF-8):</a>
:set langmap=ΑA,ΒB,ΨC,ΔD,ΕE,ΦF,ΓG,ΗH,ΙI,ΞJ,ΚK,ΛL,ΜM,ΝN,ΟO,ΠP,QQ,ΡR,ΣS,ΤT,ΘU,ΩV,WW,ΧX,ΥY,ΖZ,αa,βb,ψc,δd,εe,φf,γg,ηh,ιi,ξj,κk,λl,μm,νn,οo,πp,qq,ρr,σs,τt,θu,ωv,ςw,χx,υy,ζz

```
	Example (exchanges meaning of z and y for commands):
```
:set langmap=zy,yz,ZY,YZ

```

The 'langmap' option is a list of parts, separated with commas.  Each
part can be in one of two forms:
1.  A list of pairs.  Each pair is a "from" character immediately
followed by the "to" character.  Examples: "aA", "aAbBcC".
2.  A list of "from" characters, a semi-colon and a list of "to"
characters.  Example: "abc;ABC"
Example: "aA,fgh;FGH,cCdDeE"
Special characters need to be preceded with a backslash.  These are
";", ',', '"', '|' and backslash itself.

This will allow you to activate vim actions without having to switch
back and forth between the languages.  Your language characters will
be understood as normal vim English characters (according to the
langmap mappings) in the following cases:
o Normal/Visual mode (commands, buffer/register names, user mappings)
o Insert/Replace Mode: Register names after CTRL-R
o Insert/Replace Mode: Mappings
Characters entered in Command-line mode will NOT be affected by
this option.   Note that this option can be changed at any time
allowing to switch between mappings for different languages/encodings.
Use a mapping to avoid having to type it each time!

### <a id="'langmenu' 'lm'" class="section-title" href="#'langmenu' 'lm'">Note:</a>
'langmenu' 'lm'		string	(default "")
global
Language to use for menu translation.  Tells which file is loaded
from the "lang" directory in 'runtimepath':
```
"lang/menu_" .. &langmenu .. ".vim"

```
	(without the spaces).  For example, to always use the Dutch menus, no
matter what $LANG is set to:
```
:set langmenu=nl_NL.ISO_8859-1

```
	When 'langmenu' is empty, [v:lang](#v:lang) is used.
Only normal file name characters can be used, "/\*?[|<>" are illegal.
If your $LANG is set to a non-English language but you do want to use
the English menus:
```
:set langmenu=none

```
	This option must be set before loading menus, switching on filetype
detection or syntax highlighting.  Once the menus are defined setting
this option has no effect.  But you could do this:
```
:source $VIMRUNTIME/delmenu.vim
:set langmenu=de_DE.ISO_8859-1
:source $VIMRUNTIME/menu.vim

```
	Warning: This deletes all menus that you defined yourself!

### <a id="'langremap' 'lrm' 'nolangremap' 'nolrm'" class="section-title" href="#'langremap' 'lrm' 'nolangremap' 'nolrm'">Note:</a>
'langremap' 'lrm'	boolean (default off)
global
When off, setting 'langmap' does not apply to characters resulting from
a mapping.  If setting 'langmap' disables some of your mappings, make
sure this option is off.

### <a id="'laststatus' 'ls'" class="section-title" href="#'laststatus' 'ls'">Note:</a>
'laststatus' 'ls'	number	(default 2)
global
The value of this option influences when the last window will have a
status line:
0: never
1: only if there are at least two windows
2: always
3: always and ONLY the last window
The screen looks nicer with a status line if you have several
windows, but it takes another screen line. [status-line](#status-line)

### <a id="'lazyredraw' 'lz' 'nolazyredraw' 'nolz'" class="section-title" href="#'lazyredraw' 'lz' 'nolazyredraw' 'nolz'">Note:</a>
'lazyredraw' 'lz'	boolean	(default off)
global
When this option is set, the screen will not be redrawn while
executing macros, registers and other commands that have not been
typed.  Also, updating the window title is postponed.  To force an
update use [:redraw](#:redraw).
This may occasionally cause display errors.  It is only meant to be set
temporarily when performing an operation where redrawing may cause
flickering or cause a slow down.

### <a id="'linebreak' 'lbr' 'nolinebreak' 'nolbr'" class="section-title" href="#'linebreak' 'lbr' 'nolinebreak' 'nolbr'">Note:</a>
'linebreak' 'lbr'	boolean	(default off)
local to window
If on, Vim will wrap long lines at a character in 'breakat' rather
than at the last character that fits on the screen.  Unlike
'wrapmargin' and 'textwidth', this does not insert <EOL>s in the file,
it only affects the way the file is displayed, not its contents.
If 'breakindent' is set, line is visually indented. Then, the value
of 'showbreak' is used to put in front of wrapped lines. This option
is not used when the 'wrap' option is off.
Note that <Tab> characters after an <EOL> are mostly not displayed
with the right amount of white space.

### <a id="'lines' E593" class="section-title" href="#'lines' E593">Note:</a>
'lines'			number	(default 24 or terminal height)
global
Number of lines of the Vim window.
Normally you don't need to set this.  It is done automatically by the
terminal initialization code.
When Vim is running in the GUI or in a resizable window, setting this
option will cause the window size to be changed.  When you only want
to use the size for the GUI, put the command in your [gvimrc](#gvimrc) file.
Vim limits the number of lines to what fits on the screen.  You can
use this command to get the tallest window possible:
```
:set lines=999

```
	Minimum value is 2, maximum value is 1000.

### <a id="'linespace' 'lsp'" class="section-title" href="#'linespace' 'lsp'">Note:</a>
'linespace' 'lsp'	number	(default 0)
global
{only in the GUI}
Number of pixel lines inserted between characters.  Useful if the font
uses the full character cell height, making lines touch each other.
When non-zero there is room for underlining.
With some fonts there can be too much room between lines (to have
space for ascents and descents).  Then it makes sense to set
'linespace' to a negative value.  This may cause display problems
though!

### <a id="'lisp' 'nolisp'" class="section-title" href="#'lisp' 'nolisp'">Note:</a>
'lisp'			boolean	(default off)
local to buffer
Lisp mode: When <Enter> is typed in insert mode set the indent for
the next line to Lisp standards (well, sort of).  Also happens with
"cc" or "S".  'autoindent' must also be on for this to work.  The 'p'
flag in 'cpoptions' changes the method of indenting: Vi compatible or
better.  Also see 'lispwords'.
The '-' character is included in keyword characters.  Redefines the
"=" operator to use this same indentation algorithm rather than
calling an external program if 'equalprg' is empty.
This option is not used when 'paste' is set.

### <a id="'lispoptions' 'lop'" class="section-title" href="#'lispoptions' 'lop'">Note:</a>
'lispoptions' 'lop'	string	(default "")
local to buffer
Comma-separated list of items that influence the Lisp indenting when
enabled with the ['lisp'](#'lisp') option.  Currently only one item is
supported:
expr:1	use 'indentexpr' for Lisp indenting when it is set
expr:0	do not use 'indentexpr' for Lisp indenting (default)
Note that when using 'indentexpr' the `=` operator indents all the
lines, otherwise the first line is not indented (Vi-compatible).

### <a id="'lispwords' 'lw'" class="section-title" href="#'lispwords' 'lw'">Note:</a>
'lispwords' 'lw'	string	(default is very long)
global or local to buffer [global-local](#global-local)
Comma-separated list of words that influence the Lisp indenting when
enabled with the ['lisp'](#'lisp') option.

### <a id="'list' 'nolist'" class="section-title" href="#'list' 'nolist'">Note:</a>
'list'			boolean	(default off)
local to window
List mode: By default, show tabs as ">", trailing spaces as "-", and
non-breakable space characters as "+". Useful to see the difference
between tabs and spaces and for trailing blanks. Further changed by
the 'listchars' option.

The cursor is displayed at the start of the space a Tab character
occupies, not at the end as usual in Normal mode.  To get this cursor
position while displaying Tabs with spaces, use:
```
:set list lcs=tab:\ \ 

```

Note that list mode will also affect formatting (set with 'textwidth'
or 'wrapmargin') when 'cpoptions' includes 'L'.  See 'listchars' for
changing the way tabs are displayed.

### <a id="'listchars' 'lcs'" class="section-title" href="#'listchars' 'lcs'">Note:</a>
'listchars' 'lcs'	string	(default: "tab:> ,trail:-,nbsp:+")
global or local to window [global-local](#global-local)
Strings to use in 'list' mode and for the [:list](#:list) command.  It is a
comma-separated list of string settings.

### <a id="lcs-eol" class="section-title" href="#lcs-eol">Note:</a>
eol:c		Character to show at the end of each line.  When
omitted, there is no extra character at the end of the
line.
### <a id="lcs-tab" class="section-title" href="#lcs-tab">Note:</a>
tab:xy[z]	Two or three characters to be used to show a tab.
The third character is optional.

tab:xy	The 'x' is always used, then 'y' as many times as will
fit.  Thus "tab:>-" displays:
```
>-
>--
etc.

tab:xyz	The 'z' is always used, then 'x' is prepended, and
then 'y' is used as many times as will fit.  Thus
"tab:<->" displays:
```

```
>

```
->

```
-->
etc.

When "tab:" is omitted, a tab is shown as ^I.
### <a id="lcs-space" class="section-title" href="#lcs-space">Note:</a>
space:c	Character to show for a space.  When omitted, spaces
are left blank.
### <a id="lcs-multispace" class="section-title" href="#lcs-multispace">Note:</a>
multispace:c...
One or more characters to use cyclically to show for
multiple consecutive spaces.  Overrides the "space"
setting, except for single spaces.  When omitted, the
"space" setting is used.  For example,
`:set listchars=multispace:---+` shows ten consecutive
spaces as:
---+---+-- ~
### <a id="lcs-lead" class="section-title" href="#lcs-lead">Note:</a>
lead:c	Character to show for leading spaces.  When omitted,
leading spaces are blank.  Overrides the "space" and
"multispace" settings for leading spaces.  You can
combine it with "tab:", for example:
```
:set listchars+=tab:>-,lead:.
### <a id="lcs-leadmultispace" class="section-title" href="#lcs-leadmultispace"><</a>
leadmultispace:c...
Like the [lcs-multispace](#lcs-multispace) value, but for leading
spaces only.  Also overrides [lcs-lead](#lcs-lead) for leading
multiple spaces.
`:set listchars=leadmultispace:---+` shows ten
consecutive leading spaces as:
---+---+--XXX ~
Where "XXX" denotes the first non-blank characters in
the line.
### <a id="lcs-trail" class="section-title" href="#lcs-trail">Note:</a>
trail:c	Character to show for trailing spaces.  When omitted,
trailing spaces are blank.  Overrides the "space" and
"multispace" settings for trailing spaces.
### <a id="lcs-extends" class="section-title" href="#lcs-extends">Note:</a>
extends:c	Character to show in the last column, when 'wrap' is
off and the line continues beyond the right of the
screen.
### <a id="lcs-precedes" class="section-title" href="#lcs-precedes">Note:</a>
precedes:c	Character to show in the first visible column of the
physical line, when there is text preceding the
character visible in the first column.
### <a id="lcs-conceal" class="section-title" href="#lcs-conceal">Note:</a>
conceal:c	Character to show in place of concealed text, when
'conceallevel' is set to 1.  A space when omitted.
### <a id="lcs-nbsp" class="section-title" href="#lcs-nbsp">Note:</a>
nbsp:c	Character to show for a non-breakable space character
(0xA0 (160 decimal) and U+202F).  Left blank when
omitted.

The characters ':' and ',' should not be used.  UTF-8 characters can
be used.  All characters must be single width.

Each character can be specified as hex:
```
set listchars=eol:\\x24
set listchars=eol:\\u21b5
set listchars=eol:\\U000021b5

```
	Note that a double backslash is used.  The number of hex characters
must be exactly 2 for \\x, 4 for \\u and 8 for \\U.

Examples:
```
:set lcs=tab:>-,trail:-
:set lcs=tab:>-,eol:<,nbsp:%
:set lcs=extends:>,precedes:<

```
	[hl-NonText](#hl-NonText) highlighting will be used for "eol", "extends" and
"precedes". [hl-Whitespace](#hl-Whitespace) for "nbsp", "space", "tab", "multispace",
"lead" and "trail".

### <a id="'lpl' 'nolpl' 'loadplugins' 'noloadplugins'" class="section-title" href="#'lpl' 'nolpl' 'loadplugins' 'noloadplugins'">Note:</a>
'loadplugins' 'lpl'	boolean	(default on)
global
When on the plugin scripts are loaded when starting up [load-plugins](#load-plugins).
This option can be reset in your [vimrc](#vimrc) file to disable the loading
of plugins.
Note that using the "-u NONE" and "--noplugin" command line arguments
reset this option. [-u| |--noplugin](#-u| |--noplugin)

### <a id="'magic' 'nomagic'" class="section-title" href="#'magic' 'nomagic'">Note:</a>
'magic'			boolean	(default on)
global
Changes the special characters that can be used in search patterns.
See [pattern](#pattern).
WARNING: Switching this option off most likely breaks plugins!  That
is because many patterns assume it's on and will fail when it's off.
Only switch it off when working with old Vi scripts.  In any other
situation write patterns that work when 'magic' is on.  Include "\M"
when you want to [/\M](#/\M).

### <a id="'makeef' 'mef'" class="section-title" href="#'makeef' 'mef'">Note:</a>
'makeef' 'mef'		string	(default: "")
global
Name of the errorfile for the [:make| command (see |:make_makeprg](#:make| command (see |:make_makeprg))
and the [:grep](#:grep) command.
When it is empty, an internally generated temp file will be used.
When "##" is included, it is replaced by a number to make the name
unique.  This makes sure that the ":make" command doesn't overwrite an
existing file.
NOT used for the ":cf" command.  See 'errorfile' for that.
Environment variables are expanded [:set_env](#:set_env).
See [option-backslash](#option-backslash) about including spaces and backslashes.
This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'makeencoding' 'menc'" class="section-title" href="#'makeencoding' 'menc'">Note:</a>
'makeencoding' 'menc'	string	(default "")
global or local to buffer [global-local](#global-local)
Encoding used for reading the output of external commands.  When empty,
encoding is not converted.
This is used for `:make`, `:lmake`, `:grep`, `:lgrep`, `:grepadd`,
`:lgrepadd`, `:cfile`, `:cgetfile`, `:caddfile`, `:lfile`, `:lgetfile`,
and `:laddfile`.

This would be mostly useful when you use MS-Windows.  If iconv is
enabled, setting 'makeencoding' to "char" has the same effect as
setting to the system locale encoding.  Example:
```
:set makeencoding=char	" system locale is used

```

### <a id="'makeprg' 'mp'" class="section-title" href="#'makeprg' 'mp'">Note:</a>
'makeprg' 'mp'		string	(default "make")
global or local to buffer [global-local](#global-local)
Program to use for the ":make" command.  See [:make_makeprg](#:make_makeprg).
This option may contain '%' and '#' characters (see  [:_%| and |:_#](#:_%| and |:_#)),
which are expanded to the current and alternate file name.  Use [::S](#::S)
to escape file names in case they contain special characters.
Environment variables are expanded [:set_env|.  See |option-backslash](#:set_env|.  See |option-backslash)
about including spaces and backslashes.
Note that a '|' must be escaped twice: once for ":set" and once for
the interpretation of a command.  When you use a filter called
"myfilter" do it like this:
```
:set makeprg=gmake\ \\\|\ myfilter

```
	The placeholder "$*" can be given (even multiple times) to specify
where the arguments will be included, for example:
```
### <a id=":set makeprg=latex\ \\\\nonstopmode\ \\\\input\\{$}" class="section-title" href="#:set makeprg=latex\ \\\\nonstopmode\ \\\\input\\{$}">Note:</a>

```
	This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'matchpairs' 'mps'" class="section-title" href="#'matchpairs' 'mps'">Note:</a>
'matchpairs' 'mps'	string	(default "(:),{:},[:]")
local to buffer
Characters that form pairs.  The [%](#%) command jumps from one to the
other.
Only character pairs are allowed that are different, thus you cannot
jump between two double quotes.
The characters must be separated by a colon.
The pairs must be separated by a comma.  Example for including '<' and
'>' (for HTML):
```
:set mps+=<:>


```
	A more exotic example, to jump between the '=' and ';' in an
assignment, useful for languages like C and Java:
```
:au FileType c,cpp,java set mps+==:;


```
	For a more advanced way of using "%", see the matchit.vim plugin in
the $VIMRUNTIME/plugin directory. [add-local-help](#add-local-help)

### <a id="'matchtime' 'mat'" class="section-title" href="#'matchtime' 'mat'">Note:</a>
'matchtime' 'mat'	number	(default 5)
global
Tenths of a second to show the matching paren, when 'showmatch' is
set.  Note that this is not in milliseconds, like other options that
set a time.  This is to be compatible with Nvi.

### <a id="'maxfuncdepth' 'mfd'" class="section-title" href="#'maxfuncdepth' 'mfd'">Note:</a>
'maxfuncdepth' 'mfd'	number	(default 100)
global
Maximum depth of function calls for user functions.  This normally
catches endless recursion.  When using a recursive function with
more depth, set 'maxfuncdepth' to a bigger number.  But this will use
more memory, there is the danger of failing when memory is exhausted.
Increasing this limit above 200 also changes the maximum for Ex
command recursion, see [E169](#E169).
See also [:function](#:function).

### <a id="'maxmapdepth' 'mmd' E223" class="section-title" href="#'maxmapdepth' 'mmd' E223">Note:</a>
'maxmapdepth' 'mmd'	number	(default 1000)
global
Maximum number of times a mapping is done without resulting in a
character to be used.  This normally catches endless mappings, like
":map x y" with ":map y x".  It still does not catch ":map g wg",
because the 'w' is used before the next mapping is done.  See also
[key-mapping](#key-mapping).

### <a id="'maxmempattern' 'mmp'" class="section-title" href="#'maxmempattern' 'mmp'">Note:</a>
'maxmempattern' 'mmp'	number	(default 1000)
global
Maximum amount of memory (in Kbyte) to use for pattern matching.
The maximum value is about 2000000.  Use this to work without a limit.
### <a id="E363" class="section-title" href="#E363">Note:</a>
When Vim runs into the limit it gives an error message and mostly
behaves like CTRL-C was typed.
Running into the limit often means that the pattern is very
inefficient or too complex.  This may already happen with the pattern
### <a id=""." works much better." class="section-title" href="#"." works much better.">	"\(.\)*" on a very long line.</a>
Might also happen on redraw, when syntax rules try to match a complex
text structure.
Vim may run out of memory before hitting the 'maxmempattern' limit, in
which case you get an "Out of memory" error instead.

### <a id="'menuitems' 'mis'" class="section-title" href="#'menuitems' 'mis'">Note:</a>
'menuitems' 'mis'	number	(default 25)
global
Maximum number of items to use in a menu.  Used for menus that are
generated from a list of items, e.g., the Buffers menu.  Changing this
option has no direct effect, the menu must be refreshed first.

### <a id="'mkspellmem' 'msm'" class="section-title" href="#'mkspellmem' 'msm'">Note:</a>
'mkspellmem' 'msm'	string	(default "460000,2000,500")
global
Parameters for [:mkspell](#:mkspell).  This tunes when to start compressing the
word tree.  Compression can be slow when there are many words, but
it's needed to avoid running out of memory.  The amount of memory used
per word depends very much on how similar the words are, that's why
this tuning is complicated.

There are three numbers, separated by commas:
{start},{inc},{added}

For most languages the uncompressed word tree fits in memory.  {start}
gives the amount of memory in Kbyte that can be used before any
compression is done.  It should be a bit smaller than the amount of
memory that is available to Vim.

When going over the {start} limit the {inc} number specifies the
amount of memory in Kbyte that can be allocated before another
compression is done.  A low number means compression is done after
less words are added, which is slow.  A high number means more memory
will be allocated.

After doing compression, {added} times 1024 words can be added before
the {inc} limit is ignored and compression is done when any extra
amount of memory is needed.  A low number means there is a smaller
chance of hitting the {inc} limit, less memory is used but it's
slower.

The languages for which these numbers are important are Italian and
Hungarian.  The default works for when you have about 512 Mbyte.  If
you have 1 Gbyte you could use:
```
:set mkspellmem=900000,3000,800

```
	If you have less than 512 Mbyte [:mkspell](#:mkspell) may fail for some
languages, no matter what you set 'mkspellmem' to.

This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox).

### <a id="'modeline' 'ml' 'nomodeline' 'noml'" class="section-title" href="#'modeline' 'ml' 'nomodeline' 'noml'">Note:</a>
'modeline' 'ml'		boolean	(default: on (off for root))
local to buffer
If 'modeline' is on 'modelines' gives the number of lines that is
checked for set commands.  If 'modeline' is off or 'modelines' is zero
no lines are checked.  See [modeline](#modeline).

### <a id="'modelineexpr' 'mle' 'nomodelineexpr' 'nomle'" class="section-title" href="#'modelineexpr' 'mle' 'nomodelineexpr' 'nomle'">Note:</a>
'modelineexpr' 'mle'	boolean (default: off)
global
When on allow some options that are an expression to be set in the
modeline.  Check the option for whether it is affected by
'modelineexpr'.  Also see [modeline](#modeline).
This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'modelines' 'mls'" class="section-title" href="#'modelines' 'mls'">Note:</a>
'modelines' 'mls'	number	(default 5)
global
If 'modeline' is on 'modelines' gives the number of lines that is
checked for set commands.  If 'modeline' is off or 'modelines' is zero
no lines are checked.  See [modeline](#modeline).

### <a id="'modifiable' 'ma' 'nomodifiable' 'noma' E21" class="section-title" href="#'modifiable' 'ma' 'nomodifiable' 'noma' E21">Note:</a>
'modifiable' 'ma'	boolean	(default on)
local to buffer
When off the buffer contents cannot be changed.  The 'fileformat' and
'fileencoding' options also can't be changed.
Can be reset on startup with the [-M](#-M) command line argument.

### <a id="'modified' 'mod' 'nomodified' 'nomod'" class="section-title" href="#'modified' 'mod' 'nomodified' 'nomod'">Note:</a>
'modified' 'mod'	boolean	(default off)
local to buffer
When on, the buffer is considered to be modified.  This option is set
when:
1. A change was made to the text since it was last written.  Using the
[undo](#undo) command to go back to the original text will reset the
option.  But undoing changes that were made before writing the
buffer will set the option again, since the text is different from
when it was written.
2. 'fileformat' or 'fileencoding' is different from its original
value.  The original value is set when the buffer is read or
written.  A ":set nomodified" command also resets the original
values to the current values and the 'modified' option will be
reset.
Similarly for 'eol' and 'bomb'.
This option is not set when a change is made to the buffer as the
result of a BufNewFile, BufRead/BufReadPost, BufWritePost,
FileAppendPost or VimLeave autocommand event.  See [gzip-example](#gzip-example) for
an explanation.
When 'buftype' is "nowrite" or "nofile" this option may be set, but
will be ignored.
Note that the text may actually be the same, e.g. 'modified' is set
when using "rA" on an "A".

### <a id="'more' 'nomore'" class="section-title" href="#'more' 'nomore'">Note:</a>
'more'			boolean	(default: on)
global
When on, listings pause when the whole screen is filled.  You will get
the [more-prompt](#more-prompt).  When this option is off there are no pauses, the
listing continues until finished.

### <a id="'mouse'" class="section-title" href="#'mouse'">Note:</a>
'mouse'			string	(default "nvi")
global

Enables mouse support. For example, to enable the mouse in Normal mode
and Visual mode:
```
:set mouse=nv

```

To temporarily disable mouse support, hold the shift key while using
the mouse.

Mouse support can be enabled for different modes:
n	Normal mode
v	Visual mode
i	Insert mode
c	Command-line mode
h	all previous modes when editing a help file
a	all previous modes
r	for [hit-enter| and |more-prompt](#hit-enter| and |more-prompt) prompt

Left-click anywhere in a text buffer to place the cursor there.  This
works with operators too, e.g. type [d](#d) then left-click to delete text
from the current cursor position to the position where you clicked.

Drag the [status-line](#status-line) or vertical separator of a window to resize it.

If enabled for "v" (Visual mode) then double-click selects word-wise,
triple-click makes it line-wise, and quadruple-click makes it
rectangular block-wise.

For scrolling with a mouse wheel see [scroll-mouse-wheel](#scroll-mouse-wheel).

Note: When enabling the mouse in a terminal, copy/paste will use the
"* register if possible. See also 'clipboard'.

Related options:
'mousefocus'	window focus follows mouse pointer
'mousemodel'	what mouse button does which action
'mousehide'	hide mouse pointer while typing text
'selectmode'	whether to start Select mode or Visual mode

The :behave command provides some "profiles" for mouse behavior.
### <a id=":behave :be" class="section-title" href="#:behave :be">Note:</a>
:be[have] {model}	Set behavior for mouse and selection.  Valid
arguments are:
mswin	MS-Windows behavior
xterm	Xterm behavior

Using ":behave" changes these options:
option		mswin			xterm	~
'selectmode'	"mouse,key"		""
'mousemodel'	"popup"			"extend"
'keymodel'	"startsel,stopsel"	""
'selection'	"exclusive"		"inclusive"


### <a id="'mousefocus' 'mousef' 'nomousefocus' 'nomousef'" class="section-title" href="#'mousefocus' 'mousef' 'nomousefocus' 'nomousef'">Note:</a>
'mousefocus' 'mousef'	boolean	(default off)
global
The window that the mouse pointer is on is automatically activated.
When changing the window layout or window focus in another way, the
mouse pointer is moved to the window with keyboard focus.  Off is the
default because it makes using the pull down menus a little goofy, as
a pointer transit may activate a window unintentionally.

### <a id="'mousehide' 'mh' 'nomousehide' 'nomh'" class="section-title" href="#'mousehide' 'mh' 'nomousehide' 'nomh'">Note:</a>
'mousehide' 'mh'	boolean	(default on)
global
{only works in the GUI}
When on, the mouse pointer is hidden when characters are typed.
The mouse pointer is restored when the mouse is moved.

### <a id="'mousemodel' 'mousem'" class="section-title" href="#'mousemodel' 'mousem'">Note:</a>
'mousemodel' 'mousem'	string	(default "popup_setpos")
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
mouse		    extend		popup(_setpos) ~
left click	    place cursor	place cursor
left drag	    start selection	start selection
shift-left	    search word		extend selection
right click	    extend selection	popup menu (place cursor)
right drag	    extend selection	-
middle click	    paste		paste

In the "popup" model the right mouse button produces a pop-up menu.
Nvim creates a default [popup-menu](#popup-menu) but you can redefine it.

Note that you can further refine the meaning of buttons with mappings.
See [mouse-overview](#mouse-overview).  But mappings are NOT used for modeless selection.

Example:
```
:map <S-LeftMouse>     <RightMouse>
:map <S-LeftDrag>      <RightDrag>
:map <S-LeftRelease>   <RightRelease>
:map <2-S-LeftMouse>   <2-RightMouse>
:map <2-S-LeftDrag>    <2-RightDrag>
:map <2-S-LeftRelease> <2-RightRelease>
:map <3-S-LeftMouse>   <3-RightMouse>
:map <3-S-LeftDrag>    <3-RightDrag>
:map <3-S-LeftRelease> <3-RightRelease>
:map <4-S-LeftMouse>   <4-RightMouse>
:map <4-S-LeftDrag>    <4-RightDrag>
:map <4-S-LeftRelease> <4-RightRelease>

```

Mouse commands requiring the CTRL modifier can be simulated by typing
the "g" key before using the mouse:
"g<LeftMouse>"  is "<C-LeftMouse>	(jump to tag under mouse click)
"g<RightMouse>" is "<C-RightMouse>	("CTRL-T")

The 'mousemodel' option is set by the [:behave](#:behave) command.

### <a id="'mousemoveevent' 'mousemev'" class="section-title" href="#'mousemoveevent' 'mousemev'">Note:</a>
'mousemoveevent' 'mousemev'  boolean	(default off)
global
When on, mouse move events are delivered to the input queue and are
available for mapping. The default, off, avoids the mouse movement
overhead except when needed.
Warning: Setting this option can make pending mappings to be aborted
when the mouse is moved.

### <a id="'mousescroll'" class="section-title" href="#'mousescroll'">Note:</a>
'mousescroll'		string	(default "ver:3,hor:6")
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
a count of 0.

Example:
```
:set mousescroll=ver:5,hor:2

```
	Will make Nvim scroll 5 lines at a time when scrolling vertically, and
scroll 2 columns at a time when scrolling horizontally.

### <a id="'mouseshape' 'mouses' E547" class="section-title" href="#'mouseshape' 'mouses' E547">Note:</a>
'mouseshape' 'mouses'	string	(default "i:beam,r:beam,s:updown,sd:cross,
m:no,ml:up-arrow,v:rightup-arrow")
global
This option tells Vim what the mouse pointer should look like in
different modes.  The option is a comma-separated list of parts, much
like used for 'guicursor'.  Each part consist of a mode/location-list
and an argument-list:
mode-list:shape,mode-list:shape,..
The mode-list is a dash separated list of these modes/locations:
In a normal window: ~
n	Normal mode
v	Visual mode
ve	Visual mode with 'selection' "exclusive" (same as 'v',
if not specified)
o	Operator-pending mode
i	Insert mode
r	Replace mode

Others: ~
c	appending to the command-line
ci	inserting in the command-line
cr	replacing in the command-line
m	at the 'Hit ENTER' or 'More' prompts
ml	idem, but cursor in the last line
e	any mode, pointer below last window
s	any mode, pointer on a status line
sd	any mode, while dragging a status line
vs	any mode, pointer on a vertical separator line
vd	any mode, while dragging a vertical separator line
a	everywhere

The shape is one of the following:
avail	name		looks like ~
w x	arrow		Normal mouse pointer
w x	blank		no pointer at all (use with care!)
w x	beam		I-beam
w x	updown		up-down sizing arrows
w x	leftright	left-right sizing arrows
w x	busy		The system's usual busy pointer
w x	no		The system's usual 'no input' pointer
x	udsizing	indicates up-down resizing
x	lrsizing	indicates left-right resizing
x	crosshair	like a big thin +
x	hand1		black hand
x	hand2		white hand
x	pencil		what you write with
x	question	big ?
x	rightup-arrow	arrow pointing right-up
w x	up-arrow	arrow pointing up
x	<number>	any X11 pointer number (see X11/cursorfont.h)

The "avail" column contains a 'w' if the shape is available for Win32,
x for X11.
Any modes not specified or shapes not available use the normal mouse
pointer.

Example:
```
:set mouseshape=s:udsizing,m:no

```
	will make the mouse turn to a sizing arrow over the status lines and
indicate no input when the hit-enter prompt is displayed (since
clicking the mouse has no effect in this state.)

### <a id="'mousetime' 'mouset'" class="section-title" href="#'mousetime' 'mouset'">Note:</a>
'mousetime' 'mouset'	number	(default 500)
global
Defines the maximum time in msec between two mouse clicks for the
second click to be recognized as a multi click.

### <a id="'nrformats' 'nf'" class="section-title" href="#'nrformats' 'nf'">Note:</a>
'nrformats' 'nf'	string	(default "bin,hex")
local to buffer
This defines what bases Vim will consider for numbers when using the
CTRL-A and CTRL-X commands for adding to and subtracting from a number
respectively; see [CTRL-A](#CTRL-A) for more info on these commands.
alpha	If included, single alphabetical characters will be
incremented or decremented.  This is useful for a list with a
letter index a), b), etc.		*octal-nrformats*
octal	If included, numbers that start with a zero will be considered
to be octal.  Example: Using CTRL-A on "007" results in "010".
hex	If included, numbers starting with "0x" or "0X" will be
considered to be hexadecimal.  Example: Using CTRL-X on
"0x100" results in "0x0ff".
bin	If included, numbers starting with "0b" or "0B" will be
considered to be binary.  Example: Using CTRL-X on
"0b1000" subtracts one, resulting in "0b0111".
unsigned    If included, numbers are recognized as unsigned. Thus a
leading dash or negative sign won't be considered as part of
the number.  Examples:
Using CTRL-X on "2020" in "9-2020" results in "9-2019"
(without "unsigned" it would become "9-2021").
Using CTRL-A on "2020" in "9-2020" results in "9-2021"
(without "unsigned" it would become "9-2019").
Using CTRL-X on "0" or CTRL-A on "18446744073709551615"
(2^64 - 1) has no effect, overflow is prevented.
Numbers which simply begin with a digit in the range 1-9 are always
considered decimal.  This also happens for numbers that are not
recognized as octal or hex.

### <a id="'number' 'nu' 'nonumber' 'nonu'" class="section-title" href="#'number' 'nu' 'nonumber' 'nonu'">Note:</a>
'number' 'nu'		boolean	(default off)
local to window
Print the line number in front of each line.  When the 'n' option is
excluded from 'cpoptions' a wrapped line will not use the column of
line numbers.
Use the 'numberwidth' option to adjust the room for the line number.
When a long, wrapped line doesn't start with the first character, '-'
characters are put before the number.
For highlighting see [hl-LineNr|, |hl-CursorLineNr](#hl-LineNr|, |hl-CursorLineNr), and the
[:sign-define](#:sign-define) "numhl" argument.
### <a id="number_relativenumber" class="section-title" href="#number_relativenumber">Note:</a>
The 'relativenumber' option changes the displayed number to be
relative to the cursor.  Together with 'number' there are these
four combinations (cursor in line 3):

'nonu'          'nu'            'nonu'          'nu'
'nornu'         'nornu'         'rnu'           'rnu'

[apple          |  1 apple      |  2 apple      ](#apple          |  1 apple      |  2 apple      )  2 apple
[pear           |  2 pear       |  1 pear       ](#pear           |  2 pear       |  1 pear       )  1 pear
[nobody         |  3 nobody     |  0 nobody     ](#nobody         |  3 nobody     |  0 nobody     )3   nobody
[there          |  4 there      |  1 there      ](#there          |  4 there      |  1 there      )  1 there

### <a id="'numberwidth' 'nuw'" class="section-title" href="#'numberwidth' 'nuw'">Note:</a>
'numberwidth' 'nuw'	number	(default: 4)
local to window
Minimal number of columns to use for the line number.  Only relevant
when the 'number' or 'relativenumber' option is set or printing lines
with a line number. Since one space is always between the number and
the text, there is one less character for the number itself.
The value is the minimum width.  A bigger width is used when needed to
fit the highest line number in the buffer respectively the number of
rows in the window, depending on whether 'number' or 'relativenumber'
is set. Thus with the Vim default of 4 there is room for a line number
up to 999. When the buffer has 1000 lines five columns will be used.
The minimum value is 1, the maximum value is 20.

### <a id="'omnifunc' 'ofu'" class="section-title" href="#'omnifunc' 'ofu'">Note:</a>
'omnifunc' 'ofu'	string	(default: empty)
local to buffer
This option specifies a function to be used for Insert mode omni
completion with CTRL-X CTRL-O. [i_CTRL-X_CTRL-O](#i_CTRL-X_CTRL-O)
See [complete-functions](#complete-functions) for an explanation of how the function is
invoked and what it should return.
This option is usually set by a filetype plugin:
[:filetype-plugin-on](#:filetype-plugin-on)
This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.


### <a id="'opendevice' 'odev' 'noopendevice' 'noodev'" class="section-title" href="#'opendevice' 'odev' 'noopendevice' 'noodev'">Note:</a>
'opendevice' 'odev'	boolean	(default off)
global
{only for Windows}
Enable reading and writing from devices.  This may get Vim stuck on a
device that can be opened but doesn't actually do the I/O.  Therefore
it is off by default.
Note that on Windows editing "aux.h", "lpt1.txt" and the like also
result in editing a device.


### <a id="'operatorfunc' 'opfunc'" class="section-title" href="#'operatorfunc' 'opfunc'">Note:</a>
'operatorfunc' 'opfunc'	string	(default: empty)
global
This option specifies a function to be called by the [g@](#g@) operator.
See [:map-operator](#:map-operator) for more info and an example.  The value can be
the name of a function, a [lambda| or a |Funcref](#lambda| or a |Funcref). See
[option-value-function](#option-value-function) for more information.

This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'packpath' 'pp'" class="section-title" href="#'packpath' 'pp'">Note:</a>
'packpath' 'pp'		string	(default: see 'runtimepath')
Directories used to find packages.  See [packages| and |rtp-packages](#packages| and |rtp-packages).


### <a id="'paragraphs' 'para'" class="section-title" href="#'paragraphs' 'para'">Note:</a>
'paragraphs' 'para'	string	(default "IPLPPPQPP TPHPLIPpLpItpplpipbp")
global
Specifies the nroff macros that separate paragraphs.  These are pairs
of two letters (see [object-motions](#object-motions)).

### <a id="'paste' 'nopaste'" class="section-title" href="#'paste' 'nopaste'">Note:</a>
'paste'			boolean	(default off)
global
This option is obsolete; [bracketed-paste-mode](#bracketed-paste-mode) is built-in.

Put Vim in Paste mode.  This is useful if you want to cut or copy
some text from one window and paste it in Vim.  This will avoid
unexpected effects.
Setting this option is useful when using Vim in a terminal, where Vim
cannot distinguish between typed text and pasted text.  In the GUI, Vim
knows about pasting and will mostly do the right thing without 'paste'
being set.  The same is true for a terminal where Vim handles the
mouse clicks itself.
This option is reset when starting the GUI.  Thus if you set it in
your vimrc it will work in a terminal, but not in the GUI.  Setting
'paste' in the GUI has side effects: e.g., the Paste toolbar button
will no longer work in Insert mode, because it uses a mapping.
When the 'paste' option is switched on (also when it was already on):
- mapping in Insert mode and Command-line mode is disabled
- abbreviations are disabled
- 'autoindent' is reset
- 'expandtab' is reset
- 'hkmap' is reset
- 'revins' is reset
- 'ruler' is reset
- 'showmatch' is reset
- 'smarttab' is reset
- 'softtabstop' is set to 0
- 'textwidth' is set to 0
- 'wrapmargin' is set to 0
- 'varsofttabstop' is made empty
These options keep their value, but their effect is disabled:
- 'cindent'
- 'formatoptions' is used like it is empty
- 'indentexpr'
- 'lisp'
- 'smartindent'
NOTE: When you start editing another file while the 'paste' option is
on, settings from the modelines or autocommands may change the
settings again, causing trouble when pasting text.  You might want to
set the 'paste' option again.
When the 'paste' option is reset the mentioned options are restored to
the value before the moment 'paste' was switched from off to on.
Resetting 'paste' before ever setting it does not have any effect.
Since mapping doesn't work while 'paste' is active, you need to use
the 'pastetoggle' option to toggle the 'paste' option with some key.

### <a id="'pastetoggle' 'pt'" class="section-title" href="#'pastetoggle' 'pt'">Note:</a>
'pastetoggle' 'pt'	string	(default "")
global
When non-empty, specifies the key sequence that toggles the 'paste'
option.  This is like specifying a mapping:
```
:map {keys} :set invpaste<CR>

```
	Where {keys} is the value of 'pastetoggle'.
The difference is that it will work even when 'paste' is set.
'pastetoggle' works in Insert mode and Normal mode, but not in
Command-line mode.
Mappings are checked first, thus overrule 'pastetoggle'.  However,
when 'paste' is on mappings are ignored in Insert mode, thus you can do
this:
```
:map <F10> :set paste<CR>
:map <F11> :set nopaste<CR>
:imap <F10> <C-O>:set paste<CR>
:imap <F11> <nop>
:set pastetoggle=<F11>

```
	This will make <F10> start paste mode and <F11> stop paste mode.
Note that typing <F10> in paste mode inserts "<F10>", since in paste
mode everything is inserted literally, except the 'pastetoggle' key
sequence.
When the value has several bytes 'ttimeoutlen' applies.

### <a id="'pex' 'patchexpr'" class="section-title" href="#'pex' 'patchexpr'">Note:</a>
'patchexpr' 'pex'	string	(default "")
global
Expression which is evaluated to apply a patch to a file and generate
the resulting new version of the file.  See [diff-patchexpr](#diff-patchexpr).

### <a id="'patchmode' 'pm' E205 E206" class="section-title" href="#'patchmode' 'pm' E205 E206">Note:</a>
'patchmode' 'pm'	string	(default "")
global
When non-empty the oldest version of a file is kept.  This can be used
to keep the original version of a file if you are changing files in a
source distribution.  Only the first time that a file is written a
copy of the original file will be kept.  The name of the copy is the
name of the original file with the string in the 'patchmode' option
appended.  This option should start with a dot.  Use a string like
".orig" or ".org".  'backupdir' must not be empty for this to work
(Detail: The backup file is renamed to the patchmode file after the
new file has been successfully written, that's why it must be possible
to write a backup file).  If there was no file to be backed up, an
empty file is created.
When the 'backupskip' pattern matches, a patchmode file is not made.
Using 'patchmode' for compressed files appends the extension at the
end (e.g., "file.gz.orig"), thus the resulting name isn't always
recognized as a compressed file.
Only normal file name characters can be used, "/\*?[|<>" are illegal.

### <a id="'path' 'pa' E343 E345 E347 E854" class="section-title" href="#'path' 'pa' E343 E345 E347 E854">Note:</a>
'path' 'pa'		string	(default on Unix: ".,/usr/include,,"
other systems: ".,,")
global or local to buffer [global-local](#global-local)
This is a list of directories which will be searched when using the
[gf|, [f, ]f, ^Wf, |:find|, |:sfind|, |:tabfind](#gf|, [f, ]f, ^Wf, |:find|, |:sfind|, |:tabfind) and other commands,
provided that the file being searched for has a relative path (not
starting with "/", "./" or "../").  The directories in the 'path'
option may be relative or absolute.
- Use commas to separate directory names:
```
:set path=.,/usr/local/include,/usr/include

```
	- Spaces can also be used to separate directory names (for backwards
compatibility with version 3.0).  To have a space in a directory
name, precede it with an extra backslash, and escape the space:
```
:set path=.,/dir/with\\\ space

```
	- To include a comma in a directory name precede it with an extra
backslash:
```
:set path=.,/dir/with\\,comma

```
	- To search relative to the directory of the current file, use:
```
:set path=.

```
	- To search in the current directory use an empty string between two
commas:
```
:set path=,,

```
	- A directory name may end in a ':' or '/'.
- Environment variables are expanded [:set_env](#:set_env).
- When using [netrw.vim](#netrw.vim) URLs can be used.  For example, adding
"https://www.vim.org" will make ":find index.html" work.
- Search upwards and downwards in a directory tree using "*", "**" and
";".  See [file-searching](#file-searching) for info and syntax.
- Careful with '\' characters, type two to get one in the option:
```
:set path=.,c:\\include

```
	  Or just use '/' instead:
```
:set path=.,c:/include

```
	Don't forget "." or files won't even be found in the same directory as
the file!
The maximum length is limited.  How much depends on the system, mostly
it is something like 256 or 1024 characters.
You can check if all the include files are found, using the value of
'path', see [:checkpath](#:checkpath).
The use of [:set+=| and |:set-=](#:set+=| and |:set-=) is preferred when adding or removing
directories from the list.  This avoids problems when a future version
uses another default.  To remove the current directory use:
```
:set path-=

```
	To add the current directory use:
```
:set path+=

```
	To use an environment variable, you probably need to replace the
separator.  Here is an example to append $INCL, in which directory
names are separated with a semi-colon:
```
:let &path = &path .. "," .. substitute($INCL, ';', ',', 'g')

```
	Replace the ';' with a ':' or whatever separator is used.  Note that
this doesn't work when $INCL contains a comma or white space.

### <a id="'preserveindent' 'pi' 'nopreserveindent' 'nopi'" class="section-title" href="#'preserveindent' 'pi' 'nopreserveindent' 'nopi'">Note:</a>
'preserveindent' 'pi'	boolean	(default off)
local to buffer
When changing the indent of the current line, preserve as much of the
indent structure as possible.  Normally the indent is replaced by a
series of tabs followed by spaces as required (unless ['expandtab'](#'expandtab') is
enabled, in which case only spaces are used).  Enabling this option
means the indent will preserve as many existing characters as possible
for indenting, and only add additional tabs or spaces as required.
'expandtab' does not apply to the preserved white space, a Tab remains
a Tab.
NOTE: When using ">>" multiple times the resulting indent is a mix of
tabs and spaces.  You might not like this.
Also see 'copyindent'.
Use [:retab](#:retab) to clean up white space.

### <a id="'previewheight' 'pvh'" class="section-title" href="#'previewheight' 'pvh'">Note:</a>
'previewheight' 'pvh'	number (default 12)
global
Default height for a preview window.  Used for [:ptag](#:ptag) and associated
commands.  Used for [CTRL-W_}](#CTRL-W_}) when no count is given.

### <a id="'previewwindow' 'nopreviewwindow'" class="section-title" href="#'previewwindow' 'nopreviewwindow'">Note:</a>
### <a id="'pvw' 'nopvw' E590" class="section-title" href="#'pvw' 'nopvw' E590">Note:</a>
'previewwindow' 'pvw'	boolean (default off)
local to window
Identifies the preview window.  Only one window can have this option
set.  It's normally not set directly, but by using one of the commands
[:ptag|, |:pedit](#:ptag|, |:pedit), etc.

### <a id="'printdevice' 'pdev'" class="section-title" href="#'printdevice' 'pdev'">Note:</a>
'printdevice' 'pdev'	string	(default empty)
global
The name of the printer to be used for [:hardcopy](#:hardcopy).
See [pdev-option](#pdev-option).
This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'printencoding' 'penc'" class="section-title" href="#'printencoding' 'penc'">Note:</a>
'printencoding' 'penc'	string	(default empty, except for some systems)
global
Sets the character encoding used when printing.
See [penc-option](#penc-option).

### <a id="'printexpr' 'pexpr'" class="section-title" href="#'printexpr' 'pexpr'">Note:</a>
'printexpr' 'pexpr'	string	(default: see below)
global
Expression used to print the PostScript produced with [:hardcopy](#:hardcopy).
See [pexpr-option](#pexpr-option).
This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'printfont' 'pfn'" class="section-title" href="#'printfont' 'pfn'">Note:</a>
'printfont' 'pfn'	string	(default "courier")
global
The name of the font that will be used for [:hardcopy](#:hardcopy).
See [pfn-option](#pfn-option).

### <a id="'printheader' 'pheader'" class="section-title" href="#'printheader' 'pheader'">Note:</a>
'printheader' 'pheader'  string  (default "%<%f%h%m%=Page %N")
global
The format of the header produced in [:hardcopy](#:hardcopy) output.
See [pheader-option](#pheader-option).

### <a id="'printmbcharset' 'pmbcs'" class="section-title" href="#'printmbcharset' 'pmbcs'">Note:</a>
'printmbcharset' 'pmbcs'  string (default "")
global
The CJK character set to be used for CJK output from [:hardcopy](#:hardcopy).
See [pmbcs-option](#pmbcs-option).

### <a id="'printmbfont' 'pmbfn'" class="section-title" href="#'printmbfont' 'pmbfn'">Note:</a>
'printmbfont' 'pmbfn'	string (default "")
global
List of font names to be used for CJK output from [:hardcopy](#:hardcopy).
See [pmbfn-option](#pmbfn-option).

### <a id="'printoptions' 'popt'" class="section-title" href="#'printoptions' 'popt'">Note:</a>
'printoptions' 'popt' string (default "")
global
List of items that control the format of the output of [:hardcopy](#:hardcopy).
See [popt-option](#popt-option).

### <a id="'pumblend' 'pb'" class="section-title" href="#'pumblend' 'pb'">Note:</a>
'pumblend' 'pb'		number	(default 0)
global
Enables pseudo-transparency for the [popup-menu](#popup-menu). Valid values are in
the range of 0 for fully opaque popupmenu (disabled) to 100 for fully
transparent background. Values between 0-30 are typically most useful.

It is possible to override the level for individual highlights within
the popupmenu using [highlight-blend](#highlight-blend). For instance, to enable
transparency but force the current selected element to be fully opaque:
```

:set pumblend=15
:hi PmenuSel blend=0

```

UI-dependent. Works best with RGB colors. 'termguicolors'

### <a id="'pumheight' 'ph'" class="section-title" href="#'pumheight' 'ph'">Note:</a>
'pumheight' 'ph'	number	(default 0)
global
Maximum number of items to show in the popup menu
([ins-completion-menu](#ins-completion-menu)). Zero means "use available screen space".

### <a id="'pumwidth' 'pw'" class="section-title" href="#'pumwidth' 'pw'">Note:</a>
'pumwidth' 'pw'		number	(default 15)
global
Minimum width for the popup menu ([ins-completion-menu](#ins-completion-menu)).  If the
cursor column + 'pumwidth' exceeds screen width, the popup menu is
nudged to fit on the screen.

### <a id="'pyxversion' 'pyx'" class="section-title" href="#'pyxversion' 'pyx'">Note:</a>
'pyxversion' 'pyx'	number	(default 3)
global
Specifies the python version used for pyx* functions and commands
[python_x](#python_x).  As only Python 3 is supported, this always has the value
`3`. Setting any other value is an error.

This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'quickfixtextfunc' 'qftf'" class="section-title" href="#'quickfixtextfunc' 'qftf'">Note:</a>
'quickfixtextfunc' 'qftf'	string (default "")
global
This option specifies a function to be used to get the text to display
in the quickfix and location list windows.  This can be used to
customize the information displayed in the quickfix or location window
for each entry in the corresponding quickfix or location list.  See
[quickfix-window-function](#quickfix-window-function) for an explanation of how to write the
function and an example.  The value can be the name of a function, a
[lambda| or a |Funcref|. See |option-value-function](#lambda| or a |Funcref|. See |option-value-function) for more
information.

This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'quoteescape' 'qe'" class="section-title" href="#'quoteescape' 'qe'">Note:</a>
'quoteescape' 'qe'	string	(default "\")
local to buffer
The characters that are used to escape quotes in a string.  Used for
objects like a', a" and a` [a'](#a').
When one of the characters in this option is found inside a string,
the following character will be skipped.  The default value makes the
text "foo\"bar\\" considered to be one string.

### <a id="'readonly' 'ro' 'noreadonly' 'noro'" class="section-title" href="#'readonly' 'ro' 'noreadonly' 'noro'">Note:</a>
'readonly' 'ro'		boolean	(default off)
local to buffer
If on, writes fail unless you use a '!'.  Protects you from
accidentally overwriting a file.  Default on when Vim is started
in read-only mode ("vim -R") or when the executable is called "view".
When using ":w!" the 'readonly' option is reset for the current
buffer, unless the 'Z' flag is in 'cpoptions'.
When using the ":view" command the 'readonly' option is set for the
newly edited buffer.
See 'modifiable' for disallowing changes to the buffer.

### <a id="'redrawdebug' 'rdb'" class="section-title" href="#'redrawdebug' 'rdb'">Note:</a>
'redrawdebug' 'rdb'	string	(default '')
global
Flags to change the way redrawing works, for debugging purposes.
Most useful with 'writedelay' set to some reasonable value.
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
'display' msgsep flag active).
invalid	Enable stricter checking (abort) of inconsistencies
of the internal screen state. This is mostly
useful when running nvim inside a debugger (and
the test suite).
nodelta	Send all internally redrawn cells to the UI, even if
they are unchanged from the already displayed state.

### <a id="'redrawtime' 'rdt'" class="section-title" href="#'redrawtime' 'rdt'">Note:</a>
'redrawtime' 'rdt'	number	(default 2000)
global
Time in milliseconds for redrawing the display.  Applies to
'hlsearch', 'inccommand', [:match](#:match) highlighting and syntax
highlighting.
When redrawing takes more than this many milliseconds no further
matches will be highlighted.
For syntax highlighting the time applies per window.  When over the
limit syntax highlighting is disabled until [CTRL-L](#CTRL-L) is used.
This is used to avoid that Vim hangs when using a very complicated
pattern.

### <a id="'regexpengine' 're'" class="section-title" href="#'regexpengine' 're'">Note:</a>
'regexpengine' 're'	number	(default 0)
global
This selects the default regexp engine. [two-engines](#two-engines)
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
a complex pattern with long text.

### <a id="'relativenumber' 'rnu' 'norelativenumber' 'nornu'" class="section-title" href="#'relativenumber' 'rnu' 'norelativenumber' 'nornu'">Note:</a>
'relativenumber' 'rnu'	boolean	(default off)
local to window
Show the line number relative to the line with the cursor in front of
each line. Relative line numbers help you use the [count](#count) you can
precede some vertical motion commands (e.g. j k + -) with, without
having to calculate it yourself. Especially useful in combination with
other commands (e.g. y d c < > gq gw =).
When the 'n' option is excluded from 'cpoptions' a wrapped
line will not use the column of line numbers.
The 'numberwidth' option can be used to set the room used for the line
number.
When a long, wrapped line doesn't start with the first character, '-'
characters are put before the number.
See [hl-LineNr|  and |hl-CursorLineNr](#hl-LineNr|  and |hl-CursorLineNr) for the highlighting used for
the number.

The number in front of the cursor line also depends on the value of
'number', see [number_relativenumber](#number_relativenumber) for all combinations of the two
options.

### <a id="'report'" class="section-title" href="#'report'">Note:</a>
'report'		number	(default 2)
global
Threshold for reporting number of lines changed.  When the number of
changed lines is more than 'report' a message will be given for most
":" commands.  If you want it always, set 'report' to 0.
For the ":substitute" command the number of substitutions is used
instead of the number of lines.

### <a id="'revins' 'ri' 'norevins' 'nori'" class="section-title" href="#'revins' 'ri' 'norevins' 'nori'">Note:</a>
'revins' 'ri'		boolean	(default off)
global
Inserting characters in Insert mode will work backwards.  See "typing
backwards" [ins-reverse](#ins-reverse).  This option can be toggled with the CTRL-_
command in Insert mode, when 'allowrevins' is set.
This option is reset when 'paste' is set and restored when 'paste' is
reset.

### <a id="'rightleft' 'rl' 'norightleft' 'norl'" class="section-title" href="#'rightleft' 'rl' 'norightleft' 'norl'">Note:</a>
'rightleft' 'rl'	boolean	(default off)
local to window
When on, display orientation becomes right-to-left, i.e., characters
that are stored in the file appear from the right to the left.
Using this option, it is possible to edit files for languages that
are written from the right to the left such as Hebrew and Arabic.
This option is per window, so it is possible to edit mixed files
simultaneously, or to view the same file in both ways (this is
useful whenever you have a mixed text file with both right-to-left
and left-to-right strings so that both sets are displayed properly
in different windows).  Also see [rileft.txt](#rileft.txt).

### <a id="'rightleftcmd' 'rlc'" class="section-title" href="#'rightleftcmd' 'rlc'">Note:</a>
'rightleftcmd' 'rlc'	string	(default "search")
local to window
Each word in this option enables the command line editing to work in
right-to-left mode for a group of commands:

search		"/" and "?" commands

This is useful for languages such as Hebrew, Arabic and Farsi.
The 'rightleft' option must be set for 'rightleftcmd' to take effect.

### <a id="'ruler' 'ru' 'noruler' 'noru'" class="section-title" href="#'ruler' 'ru' 'noruler' 'noru'">Note:</a>
'ruler' 'ru'		boolean	(default on)
global
Show the line and column number of the cursor position, separated by a
comma.  When there is room, the relative position of the displayed
text in the file is shown on the far right:
Top	first line is visible
Bot	last line is visible
All	first and last line are visible
45%	relative position in the file
If 'rulerformat' is set, it will determine the contents of the ruler.
Each window has its own ruler.  If a window has a status line, the
ruler is shown there.  If a window doesn't have a status line and
'cmdheight' is zero, the ruler is not shown.  Otherwise it is shown in
the last line of the screen.  If the statusline is given by
'statusline' (i.e. not empty), this option takes precedence over
'ruler' and 'rulerformat'.
If the number of characters displayed is different from the number of
bytes in the text (e.g., for a TAB or a multibyte character), both
the text column (byte number) and the screen column are shown,
separated with a dash.
For an empty line "0-1" is shown.
For an empty buffer the line number will also be zero: "0,0-1".
This option is reset when 'paste' is set and restored when 'paste' is
reset.
If you don't want to see the ruler all the time but want to know where
you are, use "g CTRL-G" [g_CTRL-G](#g_CTRL-G).

### <a id="'rulerformat' 'ruf'" class="section-title" href="#'rulerformat' 'ruf'">Note:</a>
'rulerformat' 'ruf'	string	(default empty)
global
When this option is not empty, it determines the content of the ruler
string, as displayed for the 'ruler' option.
The format of this option is like that of 'statusline'.
This option cannot be set in a modeline when 'modelineexpr' is off.

The default ruler width is 17 characters.  To make the ruler 15
characters wide, put "%15(" at the start and "%)" at the end.
Example:
```
:set rulerformat=%15(%c%V\ %p%%%)

```

### <a id="'runtimepath' 'rtp' vimfiles" class="section-title" href="#'runtimepath' 'rtp' vimfiles">Note:</a>
'runtimepath' 'rtp'	string	(default:     "$XDG_CONFIG_HOME/nvim,
$XDG_CONFIG_DIRS[1]/nvim,
$XDG_CONFIG_DIRS[2]/nvim,
…
$XDG_DATA_HOME/nvim[-data]/site,
$XDG_DATA_DIRS[1]/nvim/site,
$XDG_DATA_DIRS[2]/nvim/site,
…
$VIMRUNTIME,
…
$XDG_DATA_DIRS[2]/nvim/site/after,
$XDG_DATA_DIRS[1]/nvim/site/after,
$XDG_DATA_HOME/nvim[-data]/site/after,
…
$XDG_CONFIG_DIRS[2]/nvim/after,
$XDG_CONFIG_DIRS[1]/nvim/after,
$XDG_CONFIG_HOME/nvim/after")
global
List of directories to be searched for these runtime files:
filetype.lua	filetypes [new-filetype](#new-filetype)
autoload/	automatically loaded scripts [autoload-functions](#autoload-functions)
colors/	color scheme files [:colorscheme](#:colorscheme)
compiler/	compiler files [:compiler](#:compiler)
doc/		documentation [write-local-help](#write-local-help)
ftplugin/	filetype plugins [write-filetype-plugin](#write-filetype-plugin)
indent/	indent scripts [indent-expression](#indent-expression)
keymap/	key mapping files [mbyte-keymap](#mbyte-keymap)
lang/		menu translations [:menutrans](#:menutrans)
lua/		[Lua](#Lua) plugins
menu.vim	GUI menus [menu.vim](#menu.vim)
pack/		packages [:packadd](#:packadd)
parser/	[treesitter](#treesitter) syntax parsers
plugin/	plugin scripts [write-plugin](#write-plugin)
print/	files for printing [postscript-print-encoding](#postscript-print-encoding)
query/	[treesitter](#treesitter) queries
rplugin/	[remote-plugin](#remote-plugin) scripts
spell/	spell checking files [spell](#spell)
syntax/	syntax files [mysyntaxfile](#mysyntaxfile)
tutor/	tutorial files [:Tutor](#:Tutor)

And any other file searched for with the [:runtime](#:runtime) command.

Defaults are setup to search these locations:
1. Your home directory, for personal preferences.
Given by `stdpath("config")`.  [$XDG_CONFIG_HOME](#$XDG_CONFIG_HOME)
2. Directories which must contain configuration files according to 
[xdg](#xdg) ($XDG_CONFIG_DIRS, defaults to /etc/xdg).  This also contains
preferences from system administrator.
3. Data home directory, for plugins installed by user.
Given by `stdpath("data")/site`.  [$XDG_DATA_HOME](#$XDG_DATA_HOME)
4. nvim/site subdirectories for each directory in $XDG_DATA_DIRS.
This is for plugins which were installed by system administrator,
but are not part of the Nvim distribution. XDG_DATA_DIRS defaults
to /usr/local/share/:/usr/share/, so system administrators are
expected to install site plugins to /usr/share/nvim/site.
5. Session state directory, for state data such as swap, backupdir,
viewdir, undodir, etc.
Given by `stdpath("state")`.  [$XDG_STATE_HOME](#$XDG_STATE_HOME)
6. $VIMRUNTIME, for files distributed with Nvim.
### <a id="after-directory" class="section-title" href="#after-directory">Note:</a>
7, 8, 9, 10. In after/ subdirectories of 1, 2, 3 and 4, with reverse
ordering.  This is for preferences to overrule or add to the
distributed defaults or system-wide settings (rarely needed).

### <a id="packages-runtimepath" class="section-title" href="#packages-runtimepath">Note:</a>
"start" packages will also be searched ([runtime-search-path](#runtime-search-path)) for
runtime files after these, though such packages are not explicitly
reported in &runtimepath. But "opt" packages are explicitly added to
&runtimepath by [:packadd](#:packadd).

Note that, unlike 'path', no wildcards like "**" are allowed.  Normal
wildcards are allowed, but can significantly slow down searching for
runtime files.  For speed, use as few items as possible and avoid
wildcards.
See [:runtime](#:runtime).
Example:
```
:set runtimepath=~/vimruntime,/mygroup/vim,$VIMRUNTIME

```
	This will use the directory "~/vimruntime" first (containing your
personal Nvim runtime files), then "/mygroup/vim", and finally
"$VIMRUNTIME" (the default runtime files).
You can put a directory before $VIMRUNTIME to find files which replace
distributed runtime files.  You can put a directory after $VIMRUNTIME
to find files which add to distributed runtime files.

With [--clean](#--clean) the home directory entries are not included.

### <a id="'scroll' 'scr'" class="section-title" href="#'scroll' 'scr'">Note:</a>
'scroll' 'scr'		number	(default: half the window height)
local to window
Number of lines to scroll with CTRL-U and CTRL-D commands.  Will be
set to half the number of lines in the window when the window size
changes.  This may happen when enabling the [status-line](#status-line) or
'tabline' option after setting the 'scroll' option.
If you give a count to the CTRL-U or CTRL-D command it will
be used as the new value for 'scroll'.  Reset to half the window
height with ":set scroll=0".

### <a id="'scrollback' 'scbk'" class="section-title" href="#'scrollback' 'scbk'">Note:</a>
'scrollback' 'scbk'	number	(default: 10000)
local to buffer
Maximum number of lines kept beyond the visible screen. Lines at the
top are deleted if new lines exceed this limit.
Minimum is 1, maximum is 100000.
Only in [terminal](#terminal) buffers.

### <a id="'scrollbind' 'scb' 'noscrollbind' 'noscb'" class="section-title" href="#'scrollbind' 'scb' 'noscrollbind' 'noscb'">Note:</a>
'scrollbind' 'scb'	boolean  (default off)
local to window
See also [scroll-binding](#scroll-binding).  When this option is set, the current
window scrolls as other scrollbind windows (windows that also have
this option set) scroll.  This option is useful for viewing the
differences between two versions of a file, see 'diff'.
See ['scrollopt'](#'scrollopt') for options that determine how this option should be
interpreted.
This option is mostly reset when splitting a window to edit another
file.  This means that ":split | edit file" results in two windows
with scroll-binding, but ":split file" does not.

### <a id="'scrolljump' 'sj'" class="section-title" href="#'scrolljump' 'sj'">Note:</a>
'scrolljump' 'sj'	number	(default 1)
global
Minimal number of lines to scroll when the cursor gets off the
screen (e.g., with "j").  Not used for scroll commands (e.g., CTRL-E,
CTRL-D).  Useful if your terminal scrolls very slowly.
When set to a negative number from -1 to -100 this is used as the
percentage of the window height.  Thus -50 scrolls half the window
height.

### <a id="'scrolloff' 'so'" class="section-title" href="#'scrolloff' 'so'">Note:</a>
'scrolloff' 'so'	number	(default 0)
global or local to window [global-local](#global-local)
Minimal number of screen lines to keep above and below the cursor.
This will make some context visible around where you are working.  If
you set it to a very large value (999) the cursor line will always be
in the middle of the window (except at the start or end of the file or
when long lines wrap).
After using the local value, go back the global value with one of
these two:
```
setlocal scrolloff<
setlocal scrolloff=-1

```
	For scrolling horizontally see 'sidescrolloff'.

### <a id="'scrollopt' 'sbo'" class="section-title" href="#'scrollopt' 'sbo'">Note:</a>
'scrollopt' 'sbo'	string	(default "ver,jump")
global
This is a comma-separated list of words that specifies how
'scrollbind' windows should behave.  'sbo' stands for ScrollBind
Options.
The following words are available:
ver		Bind vertical scrolling for 'scrollbind' windows
hor		Bind horizontal scrolling for 'scrollbind' windows
jump	Applies to the offset between two windows for vertical
scrolling.  This offset is the difference in the first
displayed line of the bound windows.  When moving
around in a window, another 'scrollbind' window may
reach a position before the start or after the end of
the buffer.  The offset is not changed though, when
moving back the 'scrollbind' window will try to scroll
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
Also see [scroll-binding](#scroll-binding).
When 'diff' mode is active there always is vertical scroll binding,
even when "ver" isn't there.

### <a id="'sections' 'sect'" class="section-title" href="#'sections' 'sect'">Note:</a>
'sections' 'sect'	string	(default "SHNHH HUnhsh")
global
Specifies the nroff macros that separate sections.  These are pairs of
two letters (See [object-motions](#object-motions)).  The default makes a section start
at the nroff macros ".SH", ".NH", ".H", ".HU", ".nh" and ".sh".

### <a id="'secure' 'nosecure' E523" class="section-title" href="#'secure' 'nosecure' E523">Note:</a>
'secure'		boolean	(default off)
global
When on, ":autocmd", shell and write commands are not allowed in
".nvimrc" and ".exrc" in the current directory and map commands are
displayed.  Switch it off only if you know that you will not run into
problems, or when the 'exrc' option is off.  On Unix this option is
only used if the ".nvimrc" or ".exrc" is not owned by you.  This can be
dangerous if the systems allows users to do a "chown".  You better set
'secure' at the end of your [init.vim](#init.vim) then.
This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'selection' 'sel'" class="section-title" href="#'selection' 'sel'">Note:</a>
'selection' 'sel'	string	(default "inclusive")
global
This option defines the behavior of the selection.  It is only used
in Visual and Select mode.
Possible values:
value	past line     inclusive ~
old		   no		yes
inclusive	   yes		yes
exclusive	   yes		no
"past line" means that the cursor is allowed to be positioned one
character past the line.
"inclusive" means that the last character of the selection is included
in an operation.  For example, when "x" is used to delete the
selection.
When "old" is used and 'virtualedit' allows the cursor to move past
the end of line the line break still isn't included.
Note that when "exclusive" is used and selecting from the end
backwards, you cannot include the last character of a line, when
starting in Normal mode and 'virtualedit' empty.

The 'selection' option is set by the [:behave](#:behave) command.

### <a id="'selectmode' 'slm'" class="section-title" href="#'selectmode' 'slm'">Note:</a>
'selectmode' 'slm'	string	(default "")
global
This is a comma-separated list of words, which specifies when to start
Select mode instead of Visual mode, when a selection is started.
Possible values:
mouse	when using the mouse
key		when using shifted special keys
cmd		when using "v", "V" or CTRL-V
See [Select-mode](#Select-mode).
The 'selectmode' option is set by the [:behave](#:behave) command.

### <a id="'sessionoptions' 'ssop'" class="section-title" href="#'sessionoptions' 'ssop'">Note:</a>
'sessionoptions' 'ssop'	string	(default: "blank,buffers,curdir,folds,
help,tabpages,winsize,terminal")
global
Changes the effect of the [:mksession](#:mksession) command.  It is a comma-
separated list of words.  Each word enables saving and restoring
something:
word		save and restore ~
blank	empty windows
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
skiprtp	exclude 'runtimepath' and 'packpath' from the options
resize	size of the Vim window: 'lines' and 'columns'
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
slash	[deprecated](#deprecated) Always enabled. Uses "/" in filenames.
unix		[deprecated](#deprecated) Always enabled. Uses "\n" line endings.

Don't include both "curdir" and "sesdir". When neither is included
filenames are stored as absolute paths.
If you leave out "options" many things won't work well after restoring
the session.
### <a id="'shada' 'sd' E526 E527 E528" class="section-title" href="#'shada' 'sd' E526 E527 E528">Note:</a>
'shada' 'sd'		string	(default for
Win32:  !,'100,<50,s10,h,rA:,rB:
others: !,'100,<50,s10,h)
global
When non-empty, the shada file is read upon startup and written
when exiting Vim (see [shada-file](#shada-file)).  The string should be a comma-
separated list of parameters, each consisting of a single character
identifying the particular parameter, followed by a number or string
which specifies the value of that parameter.  If a particular
character is left out, then the default value is used for that
parameter.  The following is a list of the identifying characters and
the effect of their value.
CHAR	VALUE	~
### <a id="shada-!" class="section-title" href="#shada-!">Note:</a>
!	When included, save and restore global variables that start
with an uppercase letter, and don't contain a lowercase
letter.  Thus "KEEPTHIS and "K_L_M" are stored, but "KeepThis"
and "_K_L_M" are not.  Nested List and Dict items may not be
read back correctly, you end up with an empty item.
### <a id="shada-quote" class="section-title" href="#shada-quote">Note:</a>
"	Maximum number of lines saved for each register.  Old name of
the '<' item, with the disadvantage that you need to put a
backslash before the ", otherwise it will be recognized as the
start of a comment!
### <a id="shada-%" class="section-title" href="#shada-%">Note:</a>
%	When included, save and restore the buffer list.  If Vim is
started with a file name argument, the buffer list is not
restored.  If Vim is started without a file name argument, the
buffer list is restored from the shada file.  Quickfix 
('buftype'), unlisted ('buflisted'), unnamed and buffers on 
removable media ([shada-r](#shada-r)) are not saved.
When followed by a number, the number specifies the maximum
number of buffers that are stored.  Without a number all
buffers are stored.
### <a id="shada-'" class="section-title" href="#shada-'">Note:</a>
'	Maximum number of previously edited files for which the marks
are remembered.  This parameter must always be included when
'shada' is non-empty.
Including this item also means that the [jumplist](#jumplist) and the
[changelist](#changelist) are stored in the shada file.
### <a id="shada-/" class="section-title" href="#shada-/">Note:</a>
/	Maximum number of items in the search pattern history to be
saved.  If non-zero, then the previous search and substitute
patterns are also saved.  When not included, the value of
'history' is used.
### <a id="shada-:" class="section-title" href="#shada-:">Note:</a>
:	Maximum number of items in the command-line history to be
saved.  When not included, the value of 'history' is used.
### <a id="shada-<" class="section-title" href="#shada-<">Note:</a>

```
	Maximum number of lines saved for each register.  If zero then
registers are not saved.  When not included, all lines are
saved.  '"' is the old name for this item.
Also see the 's' item below: limit specified in KiB.
### <a id="shada-@" class="section-title" href="#shada-@">Note:</a>
@	Maximum number of items in the input-line history to be
saved.  When not included, the value of 'history' is used.
### <a id="shada-c" class="section-title" href="#shada-c">Note:</a>
c	Dummy option, kept for compatibility reasons.  Has no actual 
effect: ShaDa always uses UTF-8 and 'encoding' value is fixed 
to UTF-8 as well.
### <a id="shada-f" class="section-title" href="#shada-f">Note:</a>
f	Whether file marks need to be stored.  If zero, file marks ('0
to '9, 'A to 'Z) are not stored.  When not present or when
non-zero, they are all stored.  '0 is used for the current
cursor position (when exiting or when doing [:wshada](#:wshada)).
### <a id="shada-h" class="section-title" href="#shada-h">Note:</a>
h	Disable the effect of 'hlsearch' when loading the shada
file.  When not included, it depends on whether ":nohlsearch"
has been used since the last search command.
### <a id="shada-n" class="section-title" href="#shada-n">Note:</a>
n	Name of the shada file.  The name must immediately follow
the 'n'.  Must be at the end of the option!  If the
'shadafile' option is set, that file name overrides the one
given here with 'shada'.  Environment variables are
expanded when opening the file, not when setting the option.
### <a id="shada-r" class="section-title" href="#shada-r">Note:</a>
r	Removable media.  The argument is a string (up to the next
',').  This parameter can be given several times.  Each
specifies the start of a path for which no marks will be
stored.  This is to avoid removable media.  For Windows you
could use "ra:,rb:".  You can also use it for temp files,
e.g., for Unix: "r/tmp".  Case is ignored.
### <a id="shada-s" class="section-title" href="#shada-s">Note:</a>
s	Maximum size of an item contents in KiB.  If zero then nothing 
is saved.  Unlike Vim this applies to all items, except for 
the buffer list and header.  Full item size is off by three 
unsigned integers: with `s10` maximum item size may be 1 byte 
(type: 7-bit integer) + 9 bytes (timestamp: up to 64-bit 
integer) + 3 bytes (item size: up to 16-bit integer because 
2^8 < 10240 < 2^16) + 10240 bytes (requested maximum item 
contents size) = 10253 bytes.

Example:
```
:set shada='50,<1000,s100,:0,n~/nvim/shada

```

'50		Marks will be remembered for the last 50 files you
edited.

```
1000		Contents of registers (up to 1000 lines each) will be
remembered.
s100		Items with contents occupying more then 100 KiB are 
skipped.
:0		Command-line history will not be saved.
n~/nvim/shada	The name of the file to use is "~/nvim/shada".
no /		Since '/' is not specified, the default will be used,
that is, save all of the search history, and also the
previous search and substitute patterns.
no %		The buffer list will not be saved nor read back.
no h		'hlsearch' highlighting will be restored.

When setting 'shada' from an empty value you can use [:rshada](#:rshada) to
load the contents of the file, this is not done automatically.

This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'shadafile' 'sdf'" class="section-title" href="#'shadafile' 'sdf'">Note:</a>
'shadafile' 'sdf'	string	(default: "")
global
When non-empty, overrides the file name used for [shada](#shada) (viminfo).
When equal to "NONE" no shada file will be read or written.
This option can be set with the [-i| command line flag.  The |--clean](#-i| command line flag.  The |--clean)
command line flag sets it to "NONE".
This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'shell' 'sh' E91" class="section-title" href="#'shell' 'sh' E91">Note:</a>
'shell' 'sh'		string	(default $SHELL or "sh", Win32: "cmd.exe")
global
Name of the shell to use for ! and :! commands.  When changing the
value also check these options: 'shellpipe', 'shellslash'
'shellredir', 'shellquote', 'shellxquote' and 'shellcmdflag'.
It is allowed to give an argument to the command, e.g.  "csh -f".
See [option-backslash](#option-backslash) about including spaces and backslashes.
Environment variables are expanded [:set_env](#:set_env).

If the name of the shell contains a space, you need to enclose it in
quotes.  Example with quotes:
```
:set shell=\"c:\program\ files\unix\sh.exe\"\ -f

```
	Note the backslash before each quote (to avoid starting a comment) and 
each space (to avoid ending the option value), so better use [:let-&](#:let-&) 
like this:
```
:let &shell='"C:\Program Files\unix\sh.exe" -f'

```
	Also note that the "-f" is not inside the quotes, because it is not 
part of the command name.
### <a id="shell-unquoting" class="section-title" href="#shell-unquoting">Note:</a>
Rules regarding quotes:
1. Option is split on space and tab characters that are not inside 
quotes: "abc def" runs shell named "abc" with additional argument 
"def", '"abc def"' runs shell named "abc def" with no additional 
arguments (here and below: additional means “additional to 
'shellcmdflag'”).
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
Note that such processing is done after [:set](#:set) did its own round of 
unescaping, so to keep yourself sane use [:let-&](#:let-&) like shown above.
### <a id="shell-powershell" class="section-title" href="#shell-powershell">Note:</a>
To use PowerShell:
```
let &shell = executable('pwsh') ? 'pwsh' : 'powershell'
let &shellcmdflag = '-NoLogo -NoProfile -ExecutionPolicy RemoteSigned -Command [Console]::InputEncoding=[Console]::OutputEncoding=[System.Text.Encoding]::UTF8;'
let &shellredir = '2>&1 | Out-File -Encoding UTF8 %s; exit $LastExitCode'
let &shellpipe = '2>&1 | Out-File -Encoding UTF8 %s; exit $LastExitCode'
set shellquote= shellxquote=


```
	This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'shellcmdflag' 'shcf'" class="section-title" href="#'shellcmdflag' 'shcf'">Note:</a>
'shellcmdflag' 'shcf'	string	(default: "-c"; Windows: "/s /c")
global
Flag passed to the shell to execute "!" and ":!" commands; e.g.,
`bash.exe -c ls` or `cmd.exe /s /c "dir"`.  For MS-Windows, the
default is set according to the value of 'shell', to reduce the need
to set this option by the user.
On Unix it can have more than one flag.  Each white space separated
part is passed as an argument to the shell command.
See [option-backslash](#option-backslash) about including spaces and backslashes.
See [shell-unquoting](#shell-unquoting) which talks about separating this option into 
multiple arguments.
This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'shellpipe' 'sp'" class="section-title" href="#'shellpipe' 'sp'">Note:</a>
'shellpipe' 'sp'	string	(default ">", ">%s 2>&1", "[ tee", "](# tee", ")& tee" or
"2>&1| tee")
global
String to be used to put the output of the ":make" command in the
error file.  See also [:make_makeprg|.  See |option-backslash](#:make_makeprg|.  See |option-backslash) about
including spaces and backslashes.
The name of the temporary file can be represented by "%s" if necessary
(the file name is appended automatically if no %s appears in the value
of this option).
For MS-Windows the default is ">%s 2>&1".  The output is directly
saved in a file and not echoed to the screen.
For Unix the default is "| tee".  The stdout of the compiler is saved
in a file and echoed to the screen.  If the 'shell' option is "csh" or
"tcsh" after initializations, the default becomes "|& tee".  If the
'shell' option is "sh", "ksh", "mksh", "pdksh", "zsh", "zsh-beta",
"bash", "fish", "ash" or "dash" the default becomes "2>&1| tee".  This
means that stderr is also included.  Before using the 'shell' option a
path is removed, thus "/bin/sh" uses "sh".
The initialization of this option is done after reading the vimrc
and the other initializations, so that when the 'shell' option is set
there, the 'shellpipe' option changes automatically, unless it was
explicitly set before.
When 'shellpipe' is set to an empty string, no redirection of the
":make" output will be done.  This is useful if you use a 'makeprg'
that writes to 'makeef' by itself.  If you want no piping, but do
want to include the 'makeef', set 'shellpipe' to a single space.
Don't forget to precede the space with a backslash: ":set sp=\ ".
In the future pipes may be used for filtering and this option will
become obsolete (at least for Unix).
This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'shellquote' 'shq'" class="section-title" href="#'shellquote' 'shq'">Note:</a>
'shellquote' 'shq'	string	(default: ""; Windows, when 'shell'
contains "sh" somewhere: "\"")
global
Quoting character(s), put around the command passed to the shell, for
the "!" and ":!" commands.  The redirection is kept outside of the
quoting.  See 'shellxquote' to include the redirection.  It's
probably not useful to set both options.
This is an empty string by default.  Only known to be useful for
third-party shells on Windows systems, such as the MKS Korn Shell
or bash, where it should be "\"".  The default is adjusted according
the value of 'shell', to reduce the need to set this option by the
user.
This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'shellredir' 'srr'" class="section-title" href="#'shellredir' 'srr'">Note:</a>
'shellredir' 'srr'	string	(default ">", ">&" or ">%s 2>&1")
global
String to be used to put the output of a filter command in a temporary
file.  See also [:!|.  See |option-backslash](#:!|.  See |option-backslash) about including spaces
and backslashes.
The name of the temporary file can be represented by "%s" if necessary
(the file name is appended automatically if no %s appears in the value
of this option).
The default is ">".  For Unix, if the 'shell' option is "csh" or
"tcsh" during initializations, the default becomes ">&".  If the
'shell' option is "sh", "ksh", "mksh", "pdksh", "zsh", "zsh-beta",
"bash" or "fish", the default becomes ">%s 2>&1".  This means that
stderr is also included.  For Win32, the Unix checks are done and
additionally "cmd" is checked for, which makes the default ">%s 2>&1".
Also, the same names with ".exe" appended are checked for.
The initialization of this option is done after reading the vimrc
and the other initializations, so that when the 'shell' option is set
there, the 'shellredir' option changes automatically unless it was
explicitly set before.
In the future pipes may be used for filtering and this option will
become obsolete (at least for Unix).
This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'shellslash' 'ssl' 'noshellslash' 'nossl'" class="section-title" href="#'shellslash' 'ssl' 'noshellslash' 'nossl'">Note:</a>
'shellslash' 'ssl'	boolean	(default off)
global
{only for MS-Windows}
When set, a forward slash is used when expanding file names.  This is
useful when a Unix-like shell is used instead of cmd.exe.  Backward
slashes can still be typed, but they are changed to forward slashes by
Vim.
Note that setting or resetting this option has no effect for some
existing file names, thus this option needs to be set before opening
any file for best results.  This might change in the future.
'shellslash' only works when a backslash can be used as a path
separator.  To test if this is so use:
```
if exists('+shellslash')

```
	Also see 'completeslash'.

### <a id="'shelltemp' 'stmp' 'noshelltemp' 'nostmp'" class="section-title" href="#'shelltemp' 'stmp' 'noshelltemp' 'nostmp'">Note:</a>
'shelltemp' 'stmp'	boolean	(default on)
global
When on, use temp files for shell commands.  When off use a pipe.
When using a pipe is not possible temp files are used anyway.
The advantage of using a pipe is that nobody can read the temp file
and the 'shell' command does not need to support redirection.
The advantage of using a temp file is that the file type and encoding
can be detected.
The [FilterReadPre|, |FilterReadPost| and |FilterWritePre](#FilterReadPre|, |FilterReadPost| and |FilterWritePre),
[FilterWritePost](#FilterWritePost) autocommands event are not triggered when
'shelltemp' is off.
[system()](#system()) does not respect this option, it always uses pipes.

### <a id="'shellxescape' 'sxe'" class="section-title" href="#'shellxescape' 'sxe'">Note:</a>
'shellxescape' 'sxe'	string	(default: "")
global
When 'shellxquote' is set to "(" then the characters listed in this
option will be escaped with a '^' character.  This makes it possible
to execute most external commands with cmd.exe.

### <a id="'shellxquote' 'sxq'" class="section-title" href="#'shellxquote' 'sxq'">Note:</a>
'shellxquote' 'sxq'	string	(default: "", Windows: "\"")
global
Quoting character(s), put around the command passed to the shell, for
the "!" and ":!" commands.  Includes the redirection.  See
'shellquote' to exclude the redirection.  It's probably not useful
to set both options.
When the value is '(' then ')' is appended. When the value is '"('
then ')"' is appended.
When the value is '(' then also see 'shellxescape'.
This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'shiftround' 'sr' 'noshiftround' 'nosr'" class="section-title" href="#'shiftround' 'sr' 'noshiftround' 'nosr'">Note:</a>
'shiftround' 'sr'	boolean	(default off)
global
Round indent to multiple of 'shiftwidth'.  Applies to > and <
commands.  CTRL-T and CTRL-D in Insert mode always round the indent to
a multiple of 'shiftwidth' (this is Vi compatible).

### <a id="'shiftwidth' 'sw'" class="section-title" href="#'shiftwidth' 'sw'">Note:</a>
'shiftwidth' 'sw'	number	(default 8)
local to buffer
Number of spaces to use for each step of (auto)indent.  Used for
['cindent'|, |>>|, |<<](#'cindent'|, |>>|, |<<), etc.
When zero the 'ts' value will be used.  Use the [shiftwidth()](#shiftwidth())
function to get the effective shiftwidth value.

### <a id="'shortmess' 'shm'" class="section-title" href="#'shortmess' 'shm'">Note:</a>
'shortmess' 'shm'	string	(default "filnxtToOF")
global
This option helps to avoid all the [hit-enter](#hit-enter) prompts caused by file
messages, for example  with CTRL-G, and to avoid some other messages.
It is a list of flags:
flag	meaning when present	~
f	use "(3 of 5)" instead of "(file 3 of 5)"
i	use "[noeol]" instead of "[Incomplete last line]"
l	use "999L, 888B" instead of "999 lines, 888 bytes"
m	use "[+]" instead of "[Modified]"
n	use "[New]" instead of "[New File]"
r	use "[RO]" instead of "[readonly]"
w	use "[w]" instead of "written" for file write message
and "[a]" instead of "appended" for ':w >> file' command
x	use "[dos]" instead of "[dos format]", "[unix]" instead of
"[unix format]" and "[mac]" instead of "[mac format]".
a	all of the above abbreviations

o	overwrite message for writing a file with subsequent message
for reading a file (useful for ":wn" or when 'autowrite' on)
O	message for reading a file overwrites any previous message.
Also for quickfix message (e.g., ":cn").
s	don't give "search hit BOTTOM, continuing at TOP" or "search
hit TOP, continuing at BOTTOM" messages; when using the search
count do not show "W" after the count message (see S below)
t	truncate file message at the start if it is too long to fit
on the command-line, "<" will appear in the left most column.
Ignored in Ex mode.
T	truncate other messages in the middle if they are too long to
fit on the command line.  "..." will appear in the middle.
Ignored in Ex mode.
W	don't give "written" or "[w]" when writing a file
A	don't give the "ATTENTION" message when an existing swap file
is found.
I	don't give the intro message when starting Vim [:intro](#:intro).
c	don't give [ins-completion-menu](#ins-completion-menu) messages.  For example,
"-- XXX completion (YYY)", "match 1 of 2", "The only match",
"Pattern not found", "Back at original", etc.
C	don't give messages while scanning for ins-completion items,
for instance "scanning tags"
q	use "recording" instead of "recording @a"
F	don't give the file info when editing a file, like `:silent`
was used for the command
S     do not show search count message when searching, e.g.
"[1/5]"

This gives you the opportunity to avoid that a change between buffers
requires you to hit <Enter>, but still gives as useful a message as
possible for the space available.  To get the whole message that you
would have got with 'shm' empty, use ":file!"
Useful values:
shm=	No abbreviation of message.
shm=a	Abbreviation, but no loss of information.
shm=at	Abbreviation, and truncate message when necessary.

### <a id="'showbreak' 'sbr' E595" class="section-title" href="#'showbreak' 'sbr' E595">Note:</a>
'showbreak' 'sbr'	string	(default "")
global or local to window [global-local](#global-local)
String to put at the start of lines that have been wrapped.  Useful
values are "> " or "+++ ":
```
:set showbreak=>\ 

```
	Note the backslash to escape the trailing space.  It's easier like
this:
```
:let &showbreak = '+++ '

```
	Only printable single-cell characters are allowed, excluding <Tab> and
comma (in a future version the comma might be used to separate the
part that is shown at the end and at the start of a line).
The [hl-NonText](#hl-NonText) highlight group determines the highlighting.
Note that tabs after the showbreak will be displayed differently.
If you want the 'showbreak' to appear in between line numbers, add the
"n" flag to 'cpoptions'.
A window-local value overrules a global value.  If the global value is
set and you want no value in the current window use NONE:
```
:setlocal showbreak=NONE

```

### <a id="'showcmd' 'sc' 'noshowcmd' 'nosc'" class="section-title" href="#'showcmd' 'sc' 'noshowcmd' 'nosc'">Note:</a>
'showcmd' 'sc'		boolean	(default: on)
global
Show (partial) command in the last line of the screen.  Set this
option off if your terminal is slow.
The option has no effect when 'cmdheight' is zero.
In Visual mode the size of the selected area is shown:
- When selecting characters within a line, the number of characters.
If the number of bytes is different it is also displayed: "2-6"
means two characters and six bytes.
- When selecting more than one line, the number of lines.
- When selecting a block, the size in screen characters:
{lines}x{columns}.

### <a id="'showfulltag' 'sft' 'noshowfulltag' 'nosft'" class="section-title" href="#'showfulltag' 'sft' 'noshowfulltag' 'nosft'">Note:</a>
'showfulltag' 'sft'	boolean (default off)
global
When completing a word in insert mode (see [ins-completion](#ins-completion)) from the
tags file, show both the tag name and a tidied-up form of the search
pattern (if there is one) as possible matches.  Thus, if you have
matched a C function, you can see a template for what arguments are
required (coding style permitting).
Note that this doesn't work well together with having "longest" in
'completeopt', because the completion from the search pattern may not
match the typed text.

### <a id="'showmatch' 'sm' 'noshowmatch' 'nosm'" class="section-title" href="#'showmatch' 'sm' 'noshowmatch' 'nosm'">Note:</a>
'showmatch' 'sm'	boolean	(default off)
global
When a bracket is inserted, briefly jump to the matching one.  The
jump is only done if the match can be seen on the screen.  The time to
show the match can be set with 'matchtime'.
A Beep is given if there is no match (no matter if the match can be
seen or not).
This option is reset when 'paste' is set and restored when 'paste' is
reset.
When the 'm' flag is not included in 'cpoptions', typing a character
will immediately move the cursor back to where it belongs.
See the "sm" field in 'guicursor' for setting the cursor shape and
blinking when showing the match.
The 'matchpairs' option can be used to specify the characters to show
matches for.  'rightleft' and 'revins' are used to look for opposite
matches.
Also see the matchparen plugin for highlighting the match when moving
around [pi_paren.txt](#pi_paren.txt).
Note: Use of the short form is rated PG.

### <a id="'showmode' 'smd' 'noshowmode' 'nosmd'" class="section-title" href="#'showmode' 'smd' 'noshowmode' 'nosmd'">Note:</a>
'showmode' 'smd'	boolean	(default: on)
global
If in Insert, Replace or Visual mode put a message on the last line.
The [hl-ModeMsg](#hl-ModeMsg) highlight group determines the highlighting.
The option has no effect when 'cmdheight' is zero.

### <a id="'showtabline' 'stal'" class="section-title" href="#'showtabline' 'stal'">Note:</a>
'showtabline' 'stal'	number	(default 1)
global
The value of this option specifies when the line with tab page labels
will be displayed:
0: never
1: only if there are at least two tab pages
2: always
This is both for the GUI and non-GUI implementation of the tab pages
line.
See [tab-page](#tab-page) for more information about tab pages.

### <a id="'sidescroll' 'ss'" class="section-title" href="#'sidescroll' 'ss'">Note:</a>
'sidescroll' 'ss'	number	(default 1)
global
The minimal number of columns to scroll horizontally.  Used only when
the 'wrap' option is off and the cursor is moved off of the screen.
When it is zero the cursor will be put in the middle of the screen.
When using a slow terminal set it to a large number or 0.  Not used
for "zh" and "zl" commands.

### <a id="'sidescrolloff' 'siso'" class="section-title" href="#'sidescrolloff' 'siso'">Note:</a>
'sidescrolloff' 'siso'	number (default 0)
global or local to window [global-local](#global-local)
The minimal number of screen columns to keep to the left and to the
right of the cursor if 'nowrap' is set.  Setting this option to a
value greater than 0 while having ['sidescroll'](#'sidescroll') also at a non-zero
value makes some context visible in the line you are scrolling in
horizontally (except at beginning of the line).  Setting this option
to a large value (like 999) has the effect of keeping the cursor
horizontally centered in the window, as long as one does not come too
close to the beginning of the line.
After using the local value, go back the global value with one of
these two:
```
setlocal sidescrolloff<
setlocal sidescrolloff=-1

```

Example: Try this together with 'sidescroll' and 'listchars' as
in the following example to never allow the cursor to move
onto the "extends" character:
```

:set nowrap sidescroll=1 listchars=extends:>,precedes:<
:set sidescrolloff=1

```

### <a id="'signcolumn' 'scl'" class="section-title" href="#'signcolumn' 'scl'">Note:</a>
'signcolumn' 'scl'	string	(default "auto")
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
"number"	display signs in the 'number' column. If the number
column is not present, then behaves like "auto".

Note regarding 'orphaned signs': with signcolumn numbers higher than
1, deleting lines will also remove the associated signs automatically,
in contrast to the default Vim behavior of keeping and grouping them.
This is done in order for the signcolumn appearance not appear weird
during line deletion.


### <a id="'smartcase' 'scs' 'nosmartcase' 'noscs'" class="section-title" href="#'smartcase' 'scs' 'nosmartcase' 'noscs'">Note:</a>
'smartcase' 'scs'	boolean	(default off)
global
Override the 'ignorecase' option if the search pattern contains upper
case characters.  Only used when the search pattern is typed and
'ignorecase' option is on.  Used for the commands "/", "?", "n", "N",
### <a id="Not used for "", "#", "gd", tag search, etc." class="section-title" href="#Not used for "", "#", "gd", tag search, etc.">	":g" and ":s".</a>
"*" and "#" you can make 'smartcase' used by doing a "/" command,
recalling the search pattern from history and hitting <Enter>.

### <a id="'smartindent' 'si' 'nosmartindent' 'nosi'" class="section-title" href="#'smartindent' 'si' 'nosmartindent' 'nosi'">Note:</a>
'smartindent' 'si'	boolean	(default off)
local to buffer
Do smart autoindenting when starting a new line.  Works for C-like
programs, but can also be used for other languages.  'cindent' does
something like this, works better in most cases, but is more strict,
see [C-indenting](#C-indenting).  When 'cindent' is on or 'indentexpr' is set,
setting 'si' has no effect.  'indentexpr' is a more advanced
alternative.
Normally 'autoindent' should also be on when using 'smartindent'.
An indent is automatically inserted:
- After a line ending in '{'.
- After a line starting with a keyword from 'cinwords'.
- Before a line starting with '}' (only with the "O" command).
When typing '}' as the first character in a new line, that line is
given the same indent as the matching '{'.
When typing '#' as the first character in a new line, the indent for
that line is removed, the '#' is put in the first column.  The indent
is restored for the next line.  If you don't want this, use this
mapping: ":inoremap # X^H#", where ^H is entered with CTRL-V CTRL-H.
When using the ">>" command, lines starting with '#' are not shifted
right.
This option is reset when 'paste' is set and restored when 'paste' is
reset.

### <a id="'smarttab' 'sta' 'nosmarttab' 'nosta'" class="section-title" href="#'smarttab' 'sta' 'nosmarttab' 'nosta'">Note:</a>
'smarttab' 'sta'	boolean	(default on)
global
When on, a <Tab> in front of a line inserts blanks according to
'shiftwidth'.  'tabstop' or 'softtabstop' is used in other places.  A

```
BS> will delete a 'shiftwidth' worth of space at the start of the
line.
When off, a <Tab> always inserts blanks according to 'tabstop' or
'softtabstop'.  'shiftwidth' is only used for shifting text left or
right [shift-left-right](#shift-left-right).
What gets inserted (a <Tab> or spaces) depends on the 'expandtab'
option.  Also see [ins-expandtab](#ins-expandtab).  When 'expandtab' is not set, the
number of spaces is minimized by using <Tab>s.
This option is reset when 'paste' is set and restored when 'paste' is
reset.

### <a id="'softtabstop' 'sts'" class="section-title" href="#'softtabstop' 'sts'">Note:</a>
'softtabstop' 'sts'	number	(default 0)
local to buffer
Number of spaces that a <Tab> counts for while performing editing
operations, like inserting a <Tab> or using <BS>.  It "feels" like

```
Tab>s are being inserted, while in fact a mix of spaces and <Tab>s is
used.  This is useful to keep the 'ts' setting at its standard value
of 8, while being able to edit like it is set to 'sts'.  However,
commands like "x" still work on the actual characters.
When 'sts' is zero, this feature is off.
When 'sts' is negative, the value of 'shiftwidth' is used.
'softtabstop' is set to 0 when the 'paste' option is set and restored
when 'paste' is reset.
See also [ins-expandtab](#ins-expandtab).  When 'expandtab' is not set, the number of
spaces is minimized by using <Tab>s.
The 'L' flag in 'cpoptions' changes how tabs are used when 'list' is
set.

The value of 'softtabstop' will be ignored if ['varsofttabstop'](#'varsofttabstop') is set
to anything other than an empty string.

### <a id="'spell' 'nospell'" class="section-title" href="#'spell' 'nospell'">Note:</a>
'spell'			boolean	(default off)
local to window
When on spell checking will be done.  See [spell](#spell).
The languages are specified with 'spelllang'.

### <a id="'spellcapcheck' 'spc'" class="section-title" href="#'spellcapcheck' 'spc'">Note:</a>
'spellcapcheck' 'spc'	string	(default "[.?!]\_[\])'" \t]\+")
local to buffer
Pattern to locate the end of a sentence.  The following word will be
checked to start with a capital letter.  If not then it is highlighted
with SpellCap [hl-SpellCap](#hl-SpellCap) (unless the word is also badly spelled).
When this check is not wanted make this option empty.
Only used when 'spell' is set.
Be careful with special characters, see [option-backslash](#option-backslash) about
including spaces and backslashes.
To set this option automatically depending on the language, see
[set-spc-auto](#set-spc-auto).

### <a id="'spellfile' 'spf'" class="section-title" href="#'spellfile' 'spf'">Note:</a>
'spellfile' 'spf'	string	(default empty)
local to buffer
Name of the word list file where words are added for the [zg| and |zw](#zg| and |zw)
commands.  It must end in ".{encoding}.add".  You need to include the
path, otherwise the file is placed in the current directory.
### <a id="E765" class="section-title" href="#E765">Note:</a>
It may also be a comma-separated list of names.  A count before the
[zg| and |zw](#zg| and |zw) commands can be used to access each.  This allows using
a personal word list file and a project word list file.
When a word is added while this option is empty Vim will set it for
you: Using the first directory in 'runtimepath' that is writable.  If
there is no "spell" directory yet it will be created.  For the file
name the first language name that appears in 'spelllang' is used,
ignoring the region.
The resulting ".spl" file will be used for spell checking, it does not
have to appear in 'spelllang'.
Normally one file is used for all regions, but you can add the region
name if you want to.  However, it will then only be used when
'spellfile' is set to it, for entries in 'spelllang' only files
without region name will be found.
This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'spelllang' 'spl'" class="section-title" href="#'spelllang' 'spl'">Note:</a>
'spelllang' 'spl'	string	(default "en")
local to buffer
A comma-separated list of word list names.  When the 'spell' option is
on spellchecking will be done for these languages.  Example:
```
set spelllang=en_us,nl,medical

```
	This means US English, Dutch and medical words are recognized.  Words
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
### <a id="E757" class="section-title" href="#E757">Note:</a>
As a special case the name of a .spl file can be given as-is.  The
first "_xx" in the name is removed and used as the region name
(_xx is an underscore, two letters and followed by a non-letter).
This is mainly for testing purposes.  You must make sure the correct
encoding is used, Vim doesn't check it.
How the related spell files are found is explained here: [spell-load](#spell-load).

If the [spellfile.vim](#spellfile.vim) plugin is active and you use a language name
for which Vim cannot find the .spl file in 'runtimepath' the plugin
will ask you if you want to download the file.

After this option has been set successfully, Vim will source the files
"spell/LANG.vim" in 'runtimepath'.  "LANG" is the value of 'spelllang'
up to the first character that is not an ASCII letter or number and
not a dash.  Also see [set-spc-auto](#set-spc-auto).

### <a id="'spelloptions' 'spo'" class="section-title" href="#'spelloptions' 'spo'">Note:</a>
'spelloptions' 'spo'	string	(default "")
local to buffer
A comma-separated list of options for spell checking:
camel		When a word is CamelCased, assume "Cased" is a
separate word: every upper-case character in a word
that comes after a lower case character indicates the
start of a new word.
noplainbuffer	Only spellcheck a buffer when 'syntax' is enabled,
or when extmarks are set within the buffer. Only
designated regions of the buffer are spellchecked in
this case.

### <a id="'spellsuggest' 'sps'" class="section-title" href="#'spellsuggest' 'sps'">Note:</a>
'spellsuggest' 'sps'	string	(default "best")
global
Methods used for spelling suggestions.  Both for the [z=](#z=) command and
the [spellsuggest()](#spellsuggest()) function.  This is a comma-separated list of
items:

best		Internal method that works best for English.  Finds
changes like "fast" and uses a bit of sound-a-like
scoring to improve the ordering.

double		Internal method that uses two methods and mixes the
results.  The first method is "fast", the other method
computes how much the suggestion sounds like the bad
word.  That only works when the language specifies
sound folding.  Can be slow and doesn't always give
better results.

fast		Internal method that only checks for simple changes:
character inserts/deletes/swaps.  Works well for
simple typing mistakes.

{number}	The maximum number of suggestions listed for [z=](#z=).
Not used for [spellsuggest()](#spellsuggest()).  The number of
suggestions is never more than the value of 'lines'
minus two.

timeout:{millisec}   Limit the time searching for suggestions to
{millisec} milli seconds.  Applies to the following
methods.  When omitted the limit is 5000. When
negative there is no limit.

file:{filename} Read file {filename}, which must have two columns,
separated by a slash.  The first column contains the
bad word, the second column the suggested good word.
Example:
theribal/terrible ~
Use this for common mistakes that do not appear at the
top of the suggestion list with the internal methods.
Lines without a slash are ignored, use this for
comments.
The word in the second column must be correct,
otherwise it will not be used.  Add the word to an
".add" file if it is currently flagged as a spelling
mistake.
The file is used for all languages.

expr:{expr}	Evaluate expression {expr}.  Use a function to avoid
trouble with spaces.  [v:val](#v:val) holds the badly spelled
word.  The expression must evaluate to a List of
Lists, each with a suggestion and a score.
Example:
[['the', 33], ['that', 44]] ~
Set 'verbose' and use [z=](#z=) to see the scores that the
internal methods use.  A lower score is better.
This may invoke [spellsuggest()](#spellsuggest()) if you temporarily
set 'spellsuggest' to exclude the "expr:" part.
Errors are silently ignored, unless you set the
'verbose' option to a non-zero value.

Only one of "best", "double" or "fast" may be used.  The others may
appear several times in any order.  Example:
```
:set sps=file:~/.config/nvim/sugg,best,expr:MySuggest()

```

This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.


### <a id="'splitbelow' 'sb' 'nosplitbelow' 'nosb'" class="section-title" href="#'splitbelow' 'sb' 'nosplitbelow' 'nosb'">Note:</a>
'splitbelow' 'sb'	boolean	(default off)
global
When on, splitting a window will put the new window below the current
one. [:split](#:split)

### <a id="'splitkeep' 'spk'" class="section-title" href="#'splitkeep' 'spk'">Note:</a>
'splitkeep' 'spk'	string	(default "cursor")
global
The value of this option determines the scroll behavior when opening,
closing or resizing horizontal splits.

Possible values are:
cursor	Keep the same relative cursor position.
screen	Keep the text on the same screen line.
topline	Keep the topline the same.

For the "screen" and "topline" values, the cursor position will be
changed when necessary. In this case, the jumplist will be populated
with the previous cursor position. For "screen", the text cannot always
be kept on the same screen line when 'wrap' is enabled.

### <a id="'splitright' 'spr' 'nosplitright' 'nospr'" class="section-title" href="#'splitright' 'spr' 'nosplitright' 'nospr'">Note:</a>
'splitright' 'spr'	boolean	(default off)
global
When on, splitting a window will put the new window right of the
current one. [:vsplit](#:vsplit)

### <a id="'startofline' 'sol' 'nostartofline' 'nosol'" class="section-title" href="#'startofline' 'sol' 'nostartofline' 'nosol'">Note:</a>
'startofline' 'sol'	boolean	(default off)
global
When "on" the commands listed below move the cursor to the first
non-blank of the line.  When off the cursor is kept in the same column
(if possible).  This applies to the commands: CTRL-D, CTRL-U, CTRL-B,
CTRL-F, "G", "H", "M", "L", gg, and to the commands "d", "<<" and ">>"
with a linewise operator, with "%" with a count and to buffer changing
commands (CTRL-^, :bnext, :bNext, etc.).  Also for an Ex command that
only has a line number, e.g., ":25" or ":+".
In case of buffer changing commands the cursor is placed at the column
where it was the last time the buffer was edited.

### <a id="'statusline' 'stl' E540 E542" class="section-title" href="#'statusline' 'stl' E540 E542">Note:</a>
'statusline' 'stl'	string	(default empty)
global or local to window [global-local](#global-local)
When non-empty, this option determines the content of the status line.
Also see [status-line](#status-line).

The option consists of printf style '%' items interspersed with
normal text.  Each status line item is of the form:
%-0{minwid}.{maxwid}{item}
All fields except the {item} are optional.  A single percent sign can
be given as "%%".

When the option starts with "%!" then it is used as an expression,
evaluated and the result is used as the option value.  Example:
```
:set statusline=%!MyStatusLine()

```
	The *g:statusline_winid* variable will be set to the [window-ID](#window-ID) of the
window that the status line belongs to.
The result can contain %{} items that will be evaluated too.
Note that the "%!" expression is evaluated in the context of the
current window and buffer, while %{} items are evaluated in the
context of the window that the statusline belongs to.

When there is error while evaluating the option then it will be made
empty to avoid further errors.  Otherwise screen updating would loop.

Note that the only effect of 'ruler' when this option is set (and
'laststatus' is 2 or 3) is controlling the output of [CTRL-G](#CTRL-G).

field	    meaning ~
-	    Left justify the item.  The default is right justified
when minwid is larger than the length of the item.
0	    Leading zeroes in numeric items.  Overridden by '-'.
minwid	    Minimum width of the item, padding as set by '-' & '0'.
Value must be 50 or less.
maxwid	    Maximum width of the item.  Truncation occurs with a '<'
on the left for text items.  Numeric items will be
shifted down to maxwid-2 digits followed by '>'number
where number is the amount of missing digits, much like
an exponential notation.
item	    A one letter code as described below.

Following is a description of the possible statusline items.  The
second character in "item" is the type:
N for number
S for string
F for flags as described below
- not applicable

item  meaning ~
f S   Path to the file in the buffer, as typed or relative to current
directory.
F S   Full path to the file in the buffer.
t S   File name (tail) of file in the buffer.
m F   Modified flag, text is "[+]"; "[-]" if 'modifiable' is off.
M F   Modified flag, text is ",+" or ",-".
r F   Readonly flag, text is "[RO]".
R F   Readonly flag, text is ",RO".
h F   Help buffer flag, text is "[help]".
H F   Help buffer flag, text is ",HLP".
w F   Preview window flag, text is "[Preview]".
W F   Preview window flag, text is ",PRV".
y F   Type of file in the buffer, e.g., "[vim]".  See 'filetype'.
Y F   Type of file in the buffer, e.g., ",VIM".  See 'filetype'.
q S   "[Quickfix List]", "[Location List]" or empty.
k S   Value of "b:keymap_name" or 'keymap' when [:lmap](#:lmap) mappings are
being used: "<keymap>"
n N   Buffer number.
b N   Value of character under cursor.
B N   As above, in hexadecimal.
o N   Byte number in file of byte under cursor, first byte is 1.
Mnemonic: Offset from start of file (with one added)
O N   As above, in hexadecimal.
N N   Printer page number.  (Only works in the 'printheader' option.)
l N   Line number.
L N   Number of lines in buffer.
c N   Column number (byte index).
v N   Virtual column number (screen column).
V N   Virtual column number as -{num}.  Not displayed if equal to 'c'.
p N   Percentage through file in lines as in [CTRL-G](#CTRL-G).
P S   Percentage through file of displayed window.  This is like the
percentage described for 'ruler'.  Always 3 in length, unless
translated.
a S   Argument list status as in default title.  ({current} of {max})
Empty if the argument file count is zero or one.
{ NF  Evaluate expression between '%{' and '}' and substitute result.
Note that there is no '%' before the closing '}'.  The
expression cannot contain a '}' character, call a function to
work around that.  See [stl-%{](#stl-%{) below.
{% -  This is almost same as { except the result of the expression is
re-evaluated as a statusline format string.  Thus if the
return value of expr contains % items they will get expanded.
The expression can contain the } character, the end of
expression is denoted by %}.
For example:
```
func! Stl_filename() abort
return "%t"
endfunc

```
	        `stl=%{Stl_filename()}`   results in `"%t"`
`stl=%{%Stl_filename()%}` results in `"Name of current file"`
%} -  End of `{%` expression
( -   Start of item group.  Can be used for setting the width and
alignment of a section.  Must be followed by %) somewhere.
) -   End of item group.  No width fields allowed.
T N   For 'tabline': start of tab page N label.  Use %T or %X to end 
the label.  Clicking this label with left mouse button switches 
to the specified tab page.
X N   For 'tabline': start of close tab N label.  Use %X or %T to end 
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
of spaces or specific order of modifiers: use [stridx()](#stridx()) to 
test whether some modifier is present; string is guaranteed 
to contain only ASCII letters and spaces, one letter per 
modifier; "?" modifier may also be present, but its presence 
is a bug that denotes that new mouse button recognition was 
added without modifying code that reacts on mouse clicks on 
this label.

```
 -   Where to truncate line if too long.  Default is at the start.
No width fields allowed.
= -   Separation point between alignment sections. Each section will
be separated by an equal number of spaces.
No width fields allowed.
# -   Set highlight group.  The name must follow and then a # again.
Thus use %#HLname# for highlight group HLname.  The same
highlighting is used, also for the statusline of non-current
windows.
* -   Set highlight group to User{N}, where {N} is taken from the
### <a id="minwid field, e.g. %1." class="section-title" href="#minwid field, e.g. %1.">Note:</a>
The difference between User{N} and StatusLine  will be applied
to StatusLineNC for the statusline of non-current windows.
The number N must be between 1 and 9.  See [hl-User1..9](#hl-User1..9)

When displaying a flag, Vim removes the leading comma, if any, when
that flag comes right after plaintext.  This will make a nice display
when flags are used like in the examples below.

When all items in a group becomes an empty string (i.e. flags that are
not set) and a minwid is not set for the group, the whole group will
become empty.  This will make a group like the following disappear
completely from the statusline when none of the flags are set.
```
:set statusline=...%(\ [%M%R%H]%)...

```
	Beware that an expression is evaluated each and every time the status
line is displayed.
### <a id="stl-%{ g:actual_curbuf g:actual_curwin" class="section-title" href="#stl-%{ g:actual_curbuf g:actual_curwin">Note:</a>
While evaluating %{} the current buffer and current window will be set
temporarily to that of the window (and buffer) whose statusline is
currently being drawn.  The expression will evaluate in this context.
The variable "g:actual_curbuf" is set to the `bufnr()` number of the
real current buffer and "g:actual_curwin" to the [window-ID](#window-ID) of the
real current window.  These values are strings.

The 'statusline' option will be evaluated in the [sandbox](#sandbox) if set from
a modeline, see [sandbox-option](#sandbox-option).
This option cannot be set in a modeline when 'modelineexpr' is off.

It is not allowed to change text or jump to another window while
evaluating 'statusline' [textlock](#textlock).

If the statusline is not updated when you want it (e.g., after setting
a variable that's used in an expression), you can force an update by
using `:redrawstatus`.

A result of all digits is regarded a number for display purposes.
Otherwise the result is taken as flag text and applied to the rules
described above.

Watch out for errors in expressions.  They may render Vim unusable!
If you are stuck, hold down ':' or 'Q' to get a prompt, then quit and
edit your vimrc or whatever with "vim --clean" to get it right.

Examples:
Emulate standard status line with 'ruler' set
```
:set statusline=%<%f\ %h%m%r%=%-14.(%l,%c%V%)\ %P

```
	Similar, but add ASCII value of char under the cursor (like "ga")
```
:set statusline=%<%f%h%m%r%=%b\ 0x%B\ \ %l,%c%V\ %P

```
	Display byte count and byte value, modified flag in red.
```
### <a id=":set statusline=%<%f%=\ [%1%M%%n%R%H]\ %-19(%3l,%02c%03V%)%O'%02b'" class="section-title" href="#:set statusline=%<%f%=\ [%1%M%%n%R%H]\ %-19(%3l,%02c%03V%)%O'%02b'">Note:</a>
:hi User1 term=inverse,bold cterm=inverse,bold ctermfg=red

```
	Display a ,GZ flag if a compressed file is loaded
```
:set statusline=...%r%{VarExists('b:gzflag','\ [GZ]')}%h...

```
	In the [:autocmd](#:autocmd)'s:
```
:let b:gzflag = 1

```
	And:
```
:unlet b:gzflag

```
	And define this function:
```
:function VarExists(var, val)
:    if exists(a:var) [ return a:val | else | return '' ](# return a:val | else | return '' ) endif
:endfunction

```

### <a id="'suffixes' 'su'" class="section-title" href="#'suffixes' 'su'">Note:</a>
'suffixes' 'su'		string	(default ".bak,~,.o,.h,.info,.swp,.obj")
global
Files with these suffixes get a lower priority when multiple files
match a wildcard.  See [suffixes](#suffixes).  Commas can be used to separate the
suffixes.  Spaces after the comma are ignored.  A dot is also seen as
the start of a suffix.  To avoid a dot or comma being recognized as a
separator, precede it with a backslash (see [option-backslash](#option-backslash) about
including spaces and backslashes).
See 'wildignore' for completely ignoring files.
The use of [:set+=| and |:set-=](#:set+=| and |:set-=) is preferred when adding or removing
suffixes from the list.  This avoids problems when a future version
uses another default.

### <a id="'suffixesadd' 'sua'" class="section-title" href="#'suffixesadd' 'sua'">Note:</a>
'suffixesadd' 'sua'	string	(default "")
local to buffer
Comma-separated list of suffixes, which are used when searching for a
file for the "gf", "[I", etc. commands.  Example:
```
:set suffixesadd=.java

```

### <a id="'swapfile' 'swf' 'noswapfile' 'noswf'" class="section-title" href="#'swapfile' 'swf' 'noswapfile' 'noswf'">Note:</a>
'swapfile' 'swf'	boolean (default on)
local to buffer
Use a swapfile for the buffer.  This option can be reset when a
swapfile is not wanted for a specific buffer.  For example, with
confidential information that even root must not be able to access.
Careful: All text will be in memory:
- Don't use this for big files.
- Recovery will be impossible!
A swapfile will only be present when ['updatecount'](#'updatecount') is non-zero and
'swapfile' is set.
When 'swapfile' is reset, the swap file for the current buffer is
immediately deleted.  When 'swapfile' is set, and 'updatecount' is
non-zero, a swap file is immediately created.
Also see [swap-file](#swap-file).
If you want to open a new buffer without creating a swap file for it,
use the [:noswapfile](#:noswapfile) modifier.
See 'directory' for where the swap file is created.

This option is used together with 'bufhidden' and 'buftype' to
specify special kinds of buffers.   See [special-buffers](#special-buffers).

### <a id="'switchbuf' 'swb'" class="section-title" href="#'switchbuf' 'swb'">Note:</a>
'switchbuf' 'swb'	string	(default "uselast")
global
This option controls the behavior when switching between buffers.
Mostly for [quickfix](#quickfix) commands some values are also used for other
commands, as mentioned below.
Possible values (comma-separated list):
useopen	If included, jump to the first open window that
contains the specified buffer (if there is one).
Otherwise: Do not examine other windows.
This setting is checked with [quickfix](#quickfix) commands, when
jumping to errors (":cc", ":cn", "cp", etc.).  It is
also used in all buffer related split commands, for
example ":sbuffer", ":sbnext", or ":sbrewind".
usetab	Like "useopen", but also consider windows in other tab
pages.
split	If included, split the current window before loading
a buffer for a [quickfix](#quickfix) command that display errors.
Otherwise: do not split, use current window (when used
in the quickfix window: the previously used window or
split if there is no other window).
vsplit	Just like "split" but split vertically.
newtab	Like "split", but open a new tab page.  Overrules
"split" when both are present.
uselast	If included, jump to the previously used window when
jumping to errors with [quickfix](#quickfix) commands.

### <a id="'synmaxcol' 'smc'" class="section-title" href="#'synmaxcol' 'smc'">Note:</a>
'synmaxcol' 'smc'	number	(default 3000)
local to buffer
Maximum column in which to search for syntax items.  In long lines the
text after this column is not highlighted and following lines may not
be highlighted correctly, because the syntax state is cleared.
This helps to avoid very slow redrawing for an XML file that is one
long line.
Set to zero to remove the limit.

### <a id="'syntax' 'syn'" class="section-title" href="#'syntax' 'syn'">Note:</a>
'syntax' 'syn'		string	(default empty)
local to buffer
When this option is set, the syntax with this name is loaded, unless
syntax highlighting has been switched off with ":syntax off".
Otherwise this option does not always reflect the current syntax (the
b:current_syntax variable does).
This option is most useful in a modeline, for a file which syntax is
not automatically recognized.  Example, in an IDL file:
### <a id="/ vim: set syntax=idl : / ~" class="section-title" href="#/ vim: set syntax=idl : / ~">Note:</a>
When a dot appears in the value then this separates two filetype
names.  Example:
### <a id="/ vim: set syntax=c.doxygen : / ~" class="section-title" href="#/ vim: set syntax=c.doxygen : / ~">Note:</a>
This will use the "c" syntax first, then the "doxygen" syntax.
Note that the second one must be prepared to be loaded as an addition,
otherwise it will be skipped.  More than one dot may appear.
To switch off syntax highlighting for the current file, use:
```
:set syntax=OFF

```
	To switch syntax highlighting on according to the current value of the
'filetype' option:
```
:set syntax=ON

```
	What actually happens when setting the 'syntax' option is that the
Syntax autocommand event is triggered with the value as argument.
This option is not copied to another buffer, independent of the 's' or
'S' flag in 'cpoptions'.
Only normal file name characters can be used, "/\*?[|<>" are illegal.

### <a id="'tabline' 'tal'" class="section-title" href="#'tabline' 'tal'">Note:</a>
'tabline' 'tal'		string	(default empty)
global
When non-empty, this option determines the content of the tab pages
line at the top of the Vim window.  When empty Vim will use a default
tab pages line.  See [setting-tabline](#setting-tabline) for more info.

The tab pages line only appears as specified with the 'showtabline'
option and only when there is no GUI tab line.  When 'e' is in
'guioptions' and the GUI supports a tab line 'guitablabel' is used
instead.  Note that the two tab pages lines are very different.

The value is evaluated like with 'statusline'.  You can use
[tabpagenr()|, |tabpagewinnr()| and |tabpagebuflist()](#tabpagenr()|, |tabpagewinnr()| and |tabpagebuflist()) to figure out
the text to be displayed.  Use "%1T" for the first label, "%2T" for
the second one, etc.  Use "%X" items for closing labels.

When changing something that is used in 'tabline' that does not
trigger it to be updated, use [:redrawtabline](#:redrawtabline).
This option cannot be set in a modeline when 'modelineexpr' is off.

Keep in mind that only one of the tab pages is the current one, others
are invisible and you can't jump to their windows.


### <a id="'tabpagemax' 'tpm'" class="section-title" href="#'tabpagemax' 'tpm'">Note:</a>
'tabpagemax' 'tpm'	number	(default 50)
global
Maximum number of tab pages to be opened by the [-p](#-p) command line
argument or the ":tab all" command. [tabpage](#tabpage)


### <a id="'tabstop' 'ts'" class="section-title" href="#'tabstop' 'ts'">Note:</a>
'tabstop' 'ts'		number	(default 8)
local to buffer
Number of spaces that a <Tab> in the file counts for.  Also see
the [:retab](#:retab) command, and the 'softtabstop' option.

Note: Setting 'tabstop' to any other value than 8 can make your file
appear wrong in many places, e.g., when printing it.
The value must be more than 0 and less than 10000.

There are four main ways to use tabs in Vim:
1. Always keep 'tabstop' at 8, set 'softtabstop' and 'shiftwidth' to 4
(or 3 or whatever you prefer) and use 'noexpandtab'.  Then Vim
will use a mix of tabs and spaces, but typing <Tab> and <BS> will
behave like a tab appears every 4 (or 3) characters.
2. Set 'tabstop' and 'shiftwidth' to whatever you prefer and use
'expandtab'.  This way you will always insert spaces.  The
formatting will never be messed up when 'tabstop' is changed.
3. Set 'tabstop' and 'shiftwidth' to whatever you prefer and use a
[modeline](#modeline) to set these values when editing the file again.  Only
works when using Vim to edit the file.
4. Always set 'tabstop' and 'shiftwidth' to the same value, and
'noexpandtab'.  This should then work (for initial indents only)
for any tabstop setting that people use.  It might be nice to have
tabs after the first non-blank inserted as spaces if you do this
though.  Otherwise aligned comments will be wrong when 'tabstop' is
changed.

The value of 'tabstop' will be ignored if ['vartabstop'](#'vartabstop') is set to
anything other than an empty string.

### <a id="'tagbsearch' 'tbs' 'notagbsearch' 'notbs'" class="section-title" href="#'tagbsearch' 'tbs' 'notagbsearch' 'notbs'">Note:</a>
'tagbsearch' 'tbs'	boolean	(default on)
global
When searching for a tag (e.g., for the [:ta](#:ta) command), Vim can either
use a binary search or a linear search in a tags file.  Binary
searching makes searching for a tag a LOT faster, but a linear search
will find more tags if the tags file wasn't properly sorted.
Vim normally assumes that your tags files are sorted, or indicate that
they are not sorted.  Only when this is not the case does the
'tagbsearch' option need to be switched off.

When 'tagbsearch' is on, binary searching is first used in the tags
files.  In certain situations, Vim will do a linear search instead for
certain files, or retry all files with a linear search.  When
'tagbsearch' is off, only a linear search is done.

Linear searching is done anyway, for one file, when Vim finds a line
at the start of the file indicating that it's not sorted:
```
!_TAG_FILE_SORTED	0	/some comment/

```
	[The whitespace before and after the '0' must be a single <Tab>]

When a binary search was done and no match was found in any of the
files listed in 'tags', and case is ignored or a pattern is used
instead of a normal tag name, a retry is done with a linear search.
Tags in unsorted tags files, and matches with different case will only
be found in the retry.

If a tag file indicates that it is case-fold sorted, the second,
linear search can be avoided when case is ignored.  Use a value of '2'
in the "!_TAG_FILE_SORTED" line for this.  A tag file can be case-fold
sorted with the -f switch to "sort" in most unices, as in the command:
"sort -f -o tags tags".  For Universal ctags and Exuberant ctags
version 5.x or higher (at least 5.5) the --sort=foldcase switch can be
used for this as well.  Note that case must be folded to uppercase for
this to work.

By default, tag searches are case-sensitive.  Case is ignored when
'ignorecase' is set and 'tagcase' is "followic", or when 'tagcase' is
"ignore".
Also when 'tagcase' is "followscs" and 'smartcase' is set, or
'tagcase' is "smart", and the pattern contains only lowercase
characters.

When 'tagbsearch' is off, tags searching is slower when a full match
exists, but faster when no full match exists.  Tags in unsorted tags
files may only be found with 'tagbsearch' off.
When the tags file is not sorted, or sorted in a wrong way (not on
ASCII byte value), 'tagbsearch' should be off, or the line given above
must be included in the tags file.
This option doesn't affect commands that find all matching tags (e.g.,
command-line completion and ":help").

### <a id="'tagcase' 'tc'" class="section-title" href="#'tagcase' 'tc'">Note:</a>
'tagcase' 'tc'		string	(default "followic")
global or local to buffer [global-local](#global-local)
This option specifies how case is handled when searching the tags
file:
followic	Follow the 'ignorecase' option
followscs    Follow the 'smartcase' and 'ignorecase' options
ignore	Ignore case
match	Match case
smart	Ignore case unless an upper case letter is used

### <a id="'tagfunc' 'tfu'" class="section-title" href="#'tagfunc' 'tfu'">Note:</a>
'tagfunc' 'tfu'		string	(default: empty)
local to buffer
This option specifies a function to be used to perform tag searches.
The function gets the tag pattern and should return a List of matching
tags.  See [tag-function](#tag-function) for an explanation of how to write the
function and an example.

### <a id="'taglength' 'tl'" class="section-title" href="#'taglength' 'tl'">Note:</a>
'taglength' 'tl'	number	(default 0)
global
If non-zero, tags are significant up to this number of characters.

### <a id="'tagrelative' 'tr' 'notagrelative' 'notr'" class="section-title" href="#'tagrelative' 'tr' 'notagrelative' 'notr'">Note:</a>
'tagrelative' 'tr'	boolean	(default: on)
global
If on and using a tags file in another directory, file names in that
tags file are relative to the directory where the tags file is.

### <a id="'tags' 'tag' E433" class="section-title" href="#'tags' 'tag' E433">Note:</a>
'tags' 'tag'		string	(default "./tags;,tags")
global or local to buffer [global-local](#global-local)
Filenames for the tag command, separated by spaces or commas.  To
include a space or comma in a file name, precede it with a backslash
(see [option-backslash](#option-backslash) about including spaces and backslashes).
When a file name starts with "./", the '.' is replaced with the path
of the current file.  But only when the 'd' flag is not included in
'cpoptions'.  Environment variables are expanded [:set_env](#:set_env).  Also see
[tags-option](#tags-option).
"*", "**" and other wildcards can be used to search for tags files in
a directory tree.  See [file-searching](#file-searching).  E.g., "/lib/**/tags" will
find all files named "tags" below "/lib".  The filename itself cannot
### <a id="E.g., "/lib//tags?" will find" class="section-title" href="#E.g., "/lib//tags?" will find">	contain wildcards, it is used as-is.</a>
files called "tags?".
The [tagfiles()](#tagfiles()) function can be used to get a list of the file names
actually used.
The use of [:set+=| and |:set-=](#:set+=| and |:set-=) is preferred when adding or removing
file names from the list.  This avoids problems when a future version
uses another default.

### <a id="'tagstack' 'tgst' 'notagstack' 'notgst'" class="section-title" href="#'tagstack' 'tgst' 'notagstack' 'notgst'">Note:</a>
'tagstack' 'tgst'	boolean	(default on)
global
When on, the [tagstack](#tagstack) is used normally.  When off, a ":tag" or
":tselect" command with an argument will not push the tag onto the
tagstack.  A following ":tag" without an argument, a ":pop" command or
any other command that uses the tagstack will use the unmodified
tagstack, but does change the pointer to the active entry.
Resetting this option is useful when using a ":tag" command in a
mapping which should not change the tagstack.

### <a id="'termbidi' 'tbidi'" class="section-title" href="#'termbidi' 'tbidi'">Note:</a>
### <a id="'notermbidi' 'notbidi'" class="section-title" href="#'notermbidi' 'notbidi'">Note:</a>
'termbidi' 'tbidi'	boolean (default off)
global
The terminal is in charge of Bi-directionality of text (as specified
by Unicode).  The terminal is also expected to do the required shaping
that some languages (such as Arabic) require.
Setting this option implies that 'rightleft' will not be set when
'arabic' is set and the value of 'arabicshape' will be ignored.
Note that setting 'termbidi' has the immediate effect that
'arabicshape' is ignored, but 'rightleft' isn't changed automatically.
For further details see [arabic.txt](#arabic.txt).

### <a id="'termguicolors' 'tgc' 'notermguicolors' 'notgc'" class="section-title" href="#'termguicolors' 'tgc' 'notermguicolors' 'notgc'">Note:</a>
'termguicolors' 'tgc'	boolean (default off)
global
Enables 24-bit RGB color in the [TUI|.  Uses "gui" |:highlight](#TUI|.  Uses "gui" |:highlight)
attributes instead of "cterm" attributes. [guifg](#guifg)
Requires an ISO-8613-3 compatible terminal.

### <a id="'termpastefilter' 'tpf'" class="section-title" href="#'termpastefilter' 'tpf'">Note:</a>
'termpastefilter' 'tpf'	string	(default: "BS,HT,ESC,DEL")
global
A comma-separated list of options for specifying control characters
to be removed from the text pasted into the terminal window. The
supported values are:

BS	    Backspace

HT	    TAB

FF	    Form feed

ESC	    Escape

DEL	    DEL

C0	    Other control characters, excluding Line feed and
Carriage return < ' '

C1	    Control characters 0x80...0x9F


### <a id="'textwidth' 'tw'" class="section-title" href="#'textwidth' 'tw'">Note:</a>
'textwidth' 'tw'	number	(default 0)
local to buffer
Maximum width of text that is being inserted.  A longer line will be
broken after white space to get this width.  A zero value disables
this.
'textwidth' is set to 0 when the 'paste' option is set and restored
when 'paste' is reset.
When 'textwidth' is zero, 'wrapmargin' may be used.  See also
'formatoptions' and [ins-textwidth](#ins-textwidth).
When 'formatexpr' is set it will be used to break the line.

### <a id="'thesaurus' 'tsr'" class="section-title" href="#'thesaurus' 'tsr'">Note:</a>
'thesaurus' 'tsr'	string	(default "")
global or local to buffer [global-local](#global-local)
List of file names, separated by commas, that are used to lookup words
for thesaurus completion commands [i_CTRL-X_CTRL-T](#i_CTRL-X_CTRL-T).  See
[compl-thesaurus](#compl-thesaurus).

This option is not used if 'thesaurusfunc' is set, either for the
buffer or globally.

To include a comma in a file name precede it with a backslash.  Spaces
after a comma are ignored, otherwise spaces are included in the file
name.  See [option-backslash](#option-backslash) about using backslashes.  The use of
[:set+=| and |:set-=](#:set+=| and |:set-=) is preferred when adding or removing directories
from the list.  This avoids problems when a future version uses
another default.  Backticks cannot be used in this option for security
reasons.

### <a id="'thesaurusfunc' 'tsrfu'" class="section-title" href="#'thesaurusfunc' 'tsrfu'">Note:</a>
'thesaurusfunc' 'tsrfu'	string	(default: empty)
global or local to buffer [global-local](#global-local)
This option specifies a function to be used for thesaurus completion
with CTRL-X CTRL-T. [i_CTRL-X_CTRL-T| See |compl-thesaurusfunc](#i_CTRL-X_CTRL-T| See |compl-thesaurusfunc).

This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'tildeop' 'top' 'notildeop' 'notop'" class="section-title" href="#'tildeop' 'top' 'notildeop' 'notop'">Note:</a>
'tildeop' 'top'		boolean	(default off)
global
When on: The tilde command "~" behaves like an operator.

### <a id="'timeout' 'to' 'notimeout' 'noto'" class="section-title" href="#'timeout' 'to' 'notimeout' 'noto'">Note:</a>
'timeout' 'to'		boolean (default on)
global
This option and 'timeoutlen' determine the behavior when part of a
mapped key sequence has been received. For example, if <c-f> is
pressed and 'timeout' is set, Nvim will wait 'timeoutlen' milliseconds
for any key that can follow <c-f> in a mapping.

### <a id="'ttimeout' 'nottimeout'" class="section-title" href="#'ttimeout' 'nottimeout'">Note:</a>
'ttimeout'		boolean (default on)
global
This option and 'ttimeoutlen' determine the behavior when part of a
key code sequence has been received by the [TUI](#TUI).

For example if <Esc> (the \x1b byte) is received and 'ttimeout' is
set, Nvim waits 'ttimeoutlen' milliseconds for the terminal to
complete a key code sequence. If no input arrives before the timeout,
a single <Esc> is assumed. Many TUI cursor key codes start with <Esc>.

On very slow systems this may fail, causing cursor keys not to work
sometimes.  If you discover this problem you can ":set ttimeoutlen=9999".
Nvim will wait for the next character to arrive after an <Esc>.

### <a id="'timeoutlen' 'tm'" class="section-title" href="#'timeoutlen' 'tm'">Note:</a>
'timeoutlen' 'tm'	number	(default 1000)
global
Time in milliseconds to wait for a mapped sequence to complete.

### <a id="'ttimeoutlen' 'ttm'" class="section-title" href="#'ttimeoutlen' 'ttm'">Note:</a>
'ttimeoutlen' 'ttm'	number	(default 50)
global
Time in milliseconds to wait for a key code sequence to complete. Also
used for CTRL-\ CTRL-N and CTRL-\ CTRL-G when part of a command has
been typed.

### <a id="'title' 'notitle'" class="section-title" href="#'title' 'notitle'">Note:</a>
'title'			boolean	(default off)
global
When on, the title of the window will be set to the value of
'titlestring' (if it is not empty), or to:
filename [+=-] (path) - NVIM
Where:
filename	the name of the file being edited
-		indicates the file cannot be modified, 'ma' off
+		indicates the file was modified
=		indicates the file is read-only
=+		indicates the file is read-only and modified
(path)		is the path of the file being edited
- NVIM		the server name [v:servername](#v:servername) or "NVIM"

### <a id="'titlelen'" class="section-title" href="#'titlelen'">Note:</a>
'titlelen'		number	(default 85)
global
Gives the percentage of 'columns' to use for the length of the window
title.  When the title is longer, only the end of the path name is
shown.  A '<' character before the path name is used to indicate this.
Using a percentage makes this adapt to the width of the window.  But
it won't work perfectly, because the actual number of characters
available also depends on the font used and other things in the title
bar.  When 'titlelen' is zero the full path is used.  Otherwise,
values from 1 to 30000 percent can be used.
'titlelen' is also used for the 'titlestring' option.

### <a id="'titleold'" class="section-title" href="#'titleold'">Note:</a>
'titleold'		string	(default "")
global
If not empty, this option will be used to set the window title when
exiting.  Only if 'title' is enabled.
This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.
### <a id="'titlestring'" class="section-title" href="#'titlestring'">Note:</a>
'titlestring'		string	(default "")
global
When this option is not empty, it will be used for the title of the
window.  This happens only when the 'title' option is on.

When this option contains printf-style '%' items, they will be
expanded according to the rules used for 'statusline'.
This option cannot be set in a modeline when 'modelineexpr' is off.

Example:
```
### <a id=":auto BufEnter  let &titlestring = hostname() .. "/" .. expand("%:p")" class="section-title" href="#:auto BufEnter  let &titlestring = hostname() .. "/" .. expand("%:p")">Note:</a>
:set title titlestring=%<%F%=%l/%L-%P titlelen=70

```
	The value of 'titlelen' is used to align items in the middle or right
of the available space.
Some people prefer to have the file name first:
```
:set titlestring=%t%(\ %M%)%(\ (%{expand(\"%:~:.:h\")})%)%(\ %a%)

```
	Note the use of "%{ }" and an expression to get the path of the file,
without the file name.  The "%( %)" constructs are used to add a
separating space only when needed.
NOTE: Use of special characters in 'titlestring' may cause the display
to be garbled (e.g., when it contains a CR or NL character).

### <a id="'undodir' 'udir' E5003" class="section-title" href="#'undodir' 'udir' E5003">Note:</a>
'undodir' 'udir'	string	(default "$XDG_STATE_HOME/nvim/undo//")
global
List of directory names for undo files, separated with commas.
See 'backupdir' for details of the format.
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
See [undo-persistence](#undo-persistence).
This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

Note that unlike 'directory' and 'backupdir', 'undodir' always acts as
though the trailing slashes are present (see 'backupdir' for what this
means).

### <a id="'undofile' 'noundofile' 'udf' 'noudf'" class="section-title" href="#'undofile' 'noundofile' 'udf' 'noudf'">Note:</a>
'undofile' 'udf'	boolean	(default off)
local to buffer
When on, Vim automatically saves undo history to an undo file when
writing a buffer to a file, and restores undo history from the same
file on buffer read.
The directory where the undo file is stored is specified by 'undodir'.
For more information about this feature see [undo-persistence](#undo-persistence).
The undo file is not read when 'undoreload' causes the buffer from
before a reload to be saved for undo.
When 'undofile' is turned off the undo file is NOT deleted.

### <a id="'undolevels' 'ul'" class="section-title" href="#'undolevels' 'ul'">Note:</a>
'undolevels' 'ul'	number	(default 1000)
global or local to buffer [global-local](#global-local)
Maximum number of changes that can be undone.  Since undo information
is kept in memory, higher numbers will cause more memory to be used.
Nevertheless, a single change can already use a large amount of memory.
Set to 0 for Vi compatibility: One level of undo and "u" undoes
itself:
```
set ul=0

```
	But you can also get Vi compatibility by including the 'u' flag in
'cpoptions', and still be able to use CTRL-R to repeat undo.
Also see [undo-two-ways](#undo-two-ways).
Set to -1 for no undo at all.  You might want to do this only for the
current buffer:
```
setlocal ul=-1

```
	This helps when you run out of memory for a single change.

The local value is set to -123456 when the global value is to be used.

Also see [clear-undo](#clear-undo).

### <a id="'undoreload' 'ur'" class="section-title" href="#'undoreload' 'ur'">Note:</a>
'undoreload' 'ur'	number	(default 10000)
global
Save the whole buffer for undo when reloading it.  This applies to the
":e!" command and reloading for when the buffer changed outside of
Vim. [FileChangedShell](#FileChangedShell)
The save only happens when this option is negative or when the number
of lines is smaller than the value of this option.
Set this option to zero to disable undo for a reload.

When saving undo for a reload, any undo file is not read.

Note that this causes the whole buffer to be stored in memory.  Set
this option to a lower value if you run out of memory.

### <a id="'updatecount' 'uc'" class="section-title" href="#'updatecount' 'uc'">Note:</a>
'updatecount' 'uc'	number	(default: 200)
global
After typing this many characters the swap file will be written to
disk.  When zero, no swap file will be created at all (see chapter on
recovery [crash-recovery](#crash-recovery)).  'updatecount' is set to zero by starting
Vim with the "-n" option, see [startup](#startup).  When editing in readonly
mode this option will be initialized to 10000.
The swapfile can be disabled per buffer with ['swapfile'](#'swapfile').
When 'updatecount' is set from zero to non-zero, swap files are
created for all buffers that have 'swapfile' set.  When 'updatecount'
is set to zero, existing swap files are not deleted.
This option has no meaning in buffers where ['buftype'](#'buftype') is "nofile"
or "nowrite".

### <a id="'updatetime' 'ut'" class="section-title" href="#'updatetime' 'ut'">Note:</a>
'updatetime' 'ut'	number	(default 4000)
global
If this many milliseconds nothing is typed the swap file will be
written to disk (see [crash-recovery](#crash-recovery)).  Also used for the
[CursorHold](#CursorHold) autocommand event.

### <a id="'varsofttabstop' 'vsts'" class="section-title" href="#'varsofttabstop' 'vsts'">Note:</a>
'varsofttabstop' 'vsts'	string	(default "")
local to buffer
A list of the number of spaces that a <Tab> counts for while editing,
such as inserting a <Tab> or using <BS>.  It "feels" like variable-
width <Tab>s are being inserted, while in fact a mixture of spaces
and <Tab>s is used.  Tab widths are separated with commas, with the
final value applying to all subsequent tabs.

For example, when editing assembly language files where statements
start in the 9th column and comments in the 41st, it may be useful
to use the following:
```
:set varsofttabstop=8,32,8

```
	This will set soft tabstops with 8 and 8 + 32 spaces, and 8 more
for every column thereafter.

Note that the value of ['softtabstop'](#'softtabstop') will be ignored while
'varsofttabstop' is set.

### <a id="'vartabstop' 'vts'" class="section-title" href="#'vartabstop' 'vts'">Note:</a>
'vartabstop' 'vts'	string	(default "")
local to buffer
A list of the number of spaces that a <Tab> in the file counts for,
separated by commas.  Each value corresponds to one tab, with the
final value applying to all subsequent tabs. For example:
```
:set vartabstop=4,20,10,8

```
	This will make the first tab 4 spaces wide, the second 20 spaces,
the third 10 spaces, and all following tabs 8 spaces.

Note that the value of ['tabstop'](#'tabstop') will be ignored while 'vartabstop'
is set.

### <a id="'verbose' 'vbs'" class="section-title" href="#'verbose' 'vbs'">Note:</a>
'verbose' 'vbs'		number	(default 0)
global
Sets the verbosity level.  Also set by [-V| and |:verbose](#-V| and |:verbose).

Tracing of options in Lua scripts is activated at level 1; Lua scripts
are not traced with verbose=0, for performance.

If greater than or equal to a given level, Nvim produces the following
messages:

Level   Messages ~
----------------------------------------------------------------------
1	Lua assignments to options, mappings, etc.
2	When a file is ":source"'ed, or [shada](#shada) file is read or written.
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
16	Ex commands.

If 'verbosefile' is set then the verbose messages are not displayed.

### <a id="'verbosefile' 'vfile'" class="section-title" href="#'verbosefile' 'vfile'">Note:</a>
'verbosefile' 'vfile'	string	(default empty)
global
When not empty all messages are written in a file with this name.
When the file exists messages are appended.
Writing to the file ends when Vim exits or when 'verbosefile' is made
empty.  Writes are buffered, thus may not show up for some time.
Setting 'verbosefile' to a new value is like making it empty first.
The difference with [:redir](#:redir) is that verbose messages are not
displayed when 'verbosefile' is set.

### <a id="'viewdir' 'vdir'" class="section-title" href="#'viewdir' 'vdir'">Note:</a>
'viewdir' 'vdir'	string	(default: "$XDG_STATE_HOME/nvim/view//")
global
Name of the directory where to store files for [:mkview](#:mkview).
This option cannot be set from a [modeline| or in the |sandbox](#modeline| or in the |sandbox), for
security reasons.

### <a id="'viewoptions' 'vop'" class="section-title" href="#'viewoptions' 'vop'">Note:</a>
'viewoptions' 'vop'	string	(default: "folds,cursor,curdir")
global
Changes the effect of the [:mkview](#:mkview) command.  It is a comma-separated
list of words.  Each word enables saving and restoring something:
word		save and restore ~
cursor	cursor position in file and in window
curdir	local current directory, if set with [:lcd](#:lcd)
folds	manually created folds, opened/closed folds and local
fold options
options	options and mappings local to a window or buffer (not
global values for local options)
localoptions same as "options"
slash	[deprecated](#deprecated) Always enabled. Uses "/" in filenames.
unix		[deprecated](#deprecated) Always enabled. Uses "\n" line endings.

### <a id="'virtualedit' 've'" class="section-title" href="#'virtualedit' 've'">Note:</a>
'virtualedit' 've'	string	(default "")
global or local to window [global-local](#global-local)
A comma-separated list of these words:
block	Allow virtual editing in Visual block mode.
insert	Allow virtual editing in Insert mode.
all		Allow virtual editing in all modes.
onemore	Allow the cursor to move just past the end of the line
none	When used as the local value, do not allow virtual
editing even when the global value is set.  When used
as the global value, "none" is the same as "".
NONE	Alternative spelling of "none".

Virtual editing means that the cursor can be positioned where there is
no actual character.  This can be halfway into a tab or beyond the end
of the line.  Useful for selecting a rectangle in Visual mode and
editing a table.
"onemore" is not the same, it will only allow moving the cursor just
after the last character of the line.  This makes some commands more
consistent.  Previously the cursor was always past the end of the line
if the line was empty.  But it is far from Vi compatible.  It may also
break some plugins or Vim scripts.  For example because [l](#l) can move
the cursor after the last character.  Use with care!
Using the `$` command will move to the last character in the line, not
past it.  This may actually move the cursor to the left!
The `g$` command will move to the end of the screen line.
It doesn't make sense to combine "all" with "onemore", but you will
not get a warning for it.
When combined with other words, "none" is ignored.

### <a id="'visualbell' 'vb' 'novisualbell' 'novb' beep" class="section-title" href="#'visualbell' 'vb' 'novisualbell' 'novb' beep">Note:</a>
'visualbell' 'vb'	boolean	(default off)
global
Use visual bell instead of beeping.  Also see 'errorbells'.

### <a id="'warn' 'nowarn'" class="section-title" href="#'warn' 'nowarn'">Note:</a>
'warn'			boolean	(default on)
global
Give a warning message when a shell command is used while the buffer
has been changed.

### <a id="'whichwrap' 'ww'" class="section-title" href="#'whichwrap' 'ww'">Note:</a>
'whichwrap' 'ww'	string	(default: "b,s")
global
Allow specified keys that move the cursor left/right to move to the
previous/next line when the cursor is on the first/last character in
the line.  Concatenate characters to allow this for these keys:
char   key	  mode	~
b    <BS>	 Normal and Visual
s    <Space>	 Normal and Visual
h    "h"	 Normal and Visual (not recommended)
l    "l"	 Normal and Visual (not recommended)

```
    <Left>	 Normal and Visual
>    <Right>	 Normal and Visual
~    "~"	 Normal
[    <Left>	 Insert and Replace
]    <Right>	 Insert and Replace
For example:
```
:set ww=<,>,[,]

```
	allows wrap only when cursor keys are used.
When the movement keys are used in combination with a delete or change
operator, the <EOL> also counts for a character.  This makes "3h"
different from "3dh" when the cursor crosses the end of a line.  This
is also true for "x" and "X", because they do the same as "dl" and
"dh".  If you use this, you may also want to use the mapping
":map <BS> X" to make backspace delete the character in front of the
cursor.
When 'l' is included and it is used after an operator at the end of a
line (not an empty line) then it will not move to the next line.  This
makes "dl", "cl", "yl" etc. work normally.

### <a id="'wildchar' 'wc'" class="section-title" href="#'wildchar' 'wc'">Note:</a>
'wildchar' 'wc'		number	(default: <Tab>)
global
Character you have to type to start wildcard expansion in the
command-line, as specified with 'wildmode'.
More info here: [cmdline-completion](#cmdline-completion).
The character is not recognized when used inside a macro.  See
'wildcharm' for that.
Some keys will not work, such as CTRL-C, <CR> and Enter.
Although 'wc' is a number option, you can set it to a special key:
```
:set wc=<Tab>

```


### <a id="'wildcharm' 'wcm'" class="section-title" href="#'wildcharm' 'wcm'">Note:</a>
'wildcharm' 'wcm'	number	(default: none (0))
global
'wildcharm' works exactly like 'wildchar', except that it is
recognized when used inside a macro.  You can find "spare" command-line
keys suitable for this option by looking at [ex-edit-index](#ex-edit-index).  Normally
you'll never actually type 'wildcharm', just use it in mappings that
automatically invoke completion mode, e.g.:
```
:set wcm=<C-Z>
### <a id=":cnoremap ss so $vim/sessions/.vim<C-Z>" class="section-title" href="#:cnoremap ss so $vim/sessions/.vim<C-Z>">Note:</a>

```
	Then after typing :ss you can use CTRL-P & CTRL-N.

### <a id="'wildignore' 'wig'" class="section-title" href="#'wildignore' 'wig'">Note:</a>
'wildignore' 'wig'	string	(default "")
global
A list of file patterns.  A file that matches with one of these
patterns is ignored when expanding [wildcards](#wildcards), completing file or
directory names, and influences the result of [expand()|, |glob()](#expand()|, |glob()) and
[globpath()](#globpath()) unless a flag is passed to disable this.
The pattern is used like with [:autocmd|, see |autocmd-pattern](#:autocmd|, see |autocmd-pattern).
Also see 'suffixes'.
Example:
```
### <a id=":set wildignore=.o,.obj" class="section-title" href="#:set wildignore=.o,.obj">Note:</a>

```
	The use of [:set+=| and |:set-=](#:set+=| and |:set-=) is preferred when adding or removing
a pattern from the list.  This avoids problems when a future version
uses another default.


### <a id="'wildignorecase' 'wic' 'nowildignorecase' 'nowic'" class="section-title" href="#'wildignorecase' 'wic' 'nowildignorecase' 'nowic'">Note:</a>
'wildignorecase' 'wic'	boolean	(default off)
global
When set case is ignored when completing file names and directories.
Has no effect when 'fileignorecase' is set.
Does not apply when the shell is used to expand wildcards, which
happens when there are special characters.


### <a id="'wildmenu' 'wmnu' 'nowildmenu' 'nowmnu'" class="section-title" href="#'wildmenu' 'wmnu' 'nowildmenu' 'nowmnu'">Note:</a>
'wildmenu' 'wmnu'	boolean	(default on)
global
When 'wildmenu' is on, command-line completion operates in an enhanced
mode.  On pressing 'wildchar' (usually <Tab>) to invoke completion,
the possible matches are shown.
When 'wildoptions' contains "pum", then the completion matches are
shown in a popup menu.  Otherwise they are displayed just above the
command line, with the first match highlighted (overwriting the status
line, if there is one).
Keys that show the previous/next match, such as <Tab> or
CTRL-P/CTRL-N, cause the highlight to move to the appropriate match.
'wildmode' must specify "full": "longest" and "list" do not start
'wildmenu' mode. You can check the current mode with [wildmenumode()](#wildmenumode()).
The menu is cancelled when a key is hit that is not used for selecting
a completion.

While the menu is active these keys have special meanings:

CTRL-Y		- accept the currently selected match and stop
completion.
CTRL-E		- end completion, go back to what was there before
selecting a match.

```
Left> <Right>	- select previous/next match (like CTRL-P/CTRL-N)

```
Down>		- in filename/menu name completion: move into a
subdirectory or submenu.

```
CR>		- in menu completion, when the cursor is just after a
dot: move into a submenu.

```
Up>		- in filename/menu name completion: move up into
parent directory or parent menu.

If you want <Left> and <Right> to move the cursor instead of selecting
a different match, use this:
```
:cnoremap <Left> <Space><BS><Left>
:cnoremap <Right> <Space><BS><Right>

```

[hl-WildMenu](#hl-WildMenu) highlights the current match.

### <a id="'wildmode' 'wim'" class="section-title" href="#'wildmode' 'wim'">Note:</a>
'wildmode' 'wim'	string	(default: "full")
global
Completion mode that is used for the character specified with
'wildchar'.  It is a comma-separated list of up to four parts.  Each
part specifies what to do for each consecutive use of 'wildchar'.  The
first part specifies the behavior for the first use of 'wildchar',
The second part for the second use, etc.

Each part consists of a colon separated list consisting of the
following possible values:
""		Complete only the first match.
"full"		Complete the next full match.  After the last match,
the original string is used and then the first match
again.  Will also start 'wildmenu' if it is enabled.
"longest"	Complete till longest common string.  If this doesn't
result in a longer string, use the next part.
"list"		When more than one match, list all matches.
"lastused"	When completing buffer names and more than one buffer
matches, sort buffers by time last used (other than
the current buffer).
When there is only a single match, it is fully completed in all cases.

Examples of useful colon-separated values:
"longest:full"	Like "longest", but also start 'wildmenu' if it is
enabled.  Will not complete to the next full match.
"list:full"	When more than one match, list all matches and
complete first match.
"list:longest"	When more than one match, list all matches and
complete till longest common string.
"list:lastused" When more than one buffer matches, list all matches
and sort buffers by time last used (other than the
current buffer).

Examples:
```
:set wildmode=full

```
	Complete first full match, next match, etc.  (the default)
```
:set wildmode=longest,full

```
	Complete longest common string, then each full match
```
:set wildmode=list:full

```
	List all matches and complete each full match
```
:set wildmode=list,full

```
	List all matches without completing, then each full match
```
:set wildmode=longest,list

```
	Complete longest common string, then list alternatives.
More info here: [cmdline-completion](#cmdline-completion).

### <a id="'wildoptions' 'wop'" class="section-title" href="#'wildoptions' 'wop'">Note:</a>
'wildoptions' 'wop'	string	(default "pum,tagfile")
global
A list of words that change how [cmdline-completion](#cmdline-completion) is done.
The following values are supported:
pum		Display the completion matches using the popup menu
in the same style as the [ins-completion-menu](#ins-completion-menu).
tagfile	When using CTRL-D to list matching tags, the kind of
tag and the file of the tag is listed.	Only one match
is displayed per line.  Often used tag kinds are:
d	#define
f	function

### <a id="'winaltkeys' 'wak'" class="section-title" href="#'winaltkeys' 'wak'">Note:</a>
'winaltkeys' 'wak'	string	(default "menu")
global
{only used in Win32}
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
If the menu is disabled by excluding 'm' from 'guioptions', the ALT
key is never used for the menu.
This option is not used for <F10>; on Win32.

### <a id="'winbar' 'wbr'" class="section-title" href="#'winbar' 'wbr'">Note:</a>
'winbar' 'wbr'		string (default empty)
global or local to window [global-local](#global-local)
When non-empty, this option enables the window bar and determines its
contents. The window bar is a bar that's shown at the top of every
window with it enabled. The value of 'winbar' is evaluated like with
'statusline'.

When changing something that is used in 'winbar' that does not trigger
it to be updated, use [:redrawstatus](#:redrawstatus).

Floating windows do not use the global value of 'winbar'. The
window-local value of 'winbar' must be set for a floating window to
have a window bar.

This option cannot be set in a modeline when 'modelineexpr' is off.

### <a id="'winblend' 'winbl'" class="section-title" href="#'winblend' 'winbl'">Note:</a>
'winblend' 'winbl'		number	(default 0)
local to window
Enables pseudo-transparency for a floating window. Valid values are in
the range of 0 for fully opaque window (disabled) to 100 for fully
transparent background. Values between 0-30 are typically most useful.

UI-dependent. Works best with RGB colors. 'termguicolors'

### <a id="'window' 'wi'" class="section-title" href="#'window' 'wi'">Note:</a>
'window' 'wi'		number  (default screen height - 1)
global
Window height used for [CTRL-F| and |CTRL-B](#CTRL-F| and |CTRL-B) when there is only one
window and the value is smaller than 'lines' minus one.  The screen
will scroll 'window' minus two lines, with a minimum of one.
When 'window' is equal to 'lines' minus one CTRL-F and CTRL-B scroll
in a much smarter way, taking care of wrapping lines.
When resizing the Vim window, the value is smaller than 1 or more than
or equal to 'lines' it will be set to 'lines' minus 1.
Note: Do not confuse this with the height of the Vim window, use
'lines' for that.

### <a id="'winheight' 'wh' E591" class="section-title" href="#'winheight' 'wh' E591">Note:</a>
'winheight' 'wh'	number	(default 1)
global
Minimal number of lines for the current window.  This is not a hard
minimum, Vim will use fewer lines if there is not enough room.  If the
focus goes to a window that is smaller, its size is increased, at the
cost of the height of other windows.
Set 'winheight' to a small number for normal editing.
Set it to 999 to make the current window fill most of the screen.
Other windows will be only 'winminheight' high.  This has the drawback
that ":all" will create only two windows.  To avoid "vim -o 1 2 3 4"
to create only two windows, set the option after startup is done,
using the [VimEnter](#VimEnter) event:
```
### <a id="au VimEnter  set winheight=999" class="section-title" href="#au VimEnter  set winheight=999">Note:</a>

```
	Minimum value is 1.
The height is not adjusted after one of the commands that change the
height of the current window.
'winheight' applies to the current window.  Use 'winminheight' to set
the minimal height for other windows.

### <a id="'winhighlight' 'winhl'" class="section-title" href="#'winhighlight' 'winhl'">Note:</a>
'winhighlight' 'winhl'	string (default empty)
local to window
Window-local highlights.  Comma-delimited list of highlight
[group-name](#group-name) pairs "{hl-from}:{hl-to},..." where each {hl-from} is
a [highlight-groups](#highlight-groups) item to be overridden by {hl-to} group in
the window.

Note: highlight namespaces take precedence over 'winhighlight'.
See [nvim_win_set_hl_ns()| and |nvim_set_hl()](#nvim_win_set_hl_ns()| and |nvim_set_hl()).

Highlights of vertical separators are determined by the window to the
left of the separator.  The 'tabline' highlight of a tabpage is
decided by the last-focused window of the tabpage.  Highlights of
the popupmenu are determined by the current window.  Highlights in the
message area cannot be overridden.

Example: show a different color for non-current windows:
```
set winhighlight=Normal:MyNormal,NormalNC:MyNormalNC

```

### <a id="'winfixheight' 'wfh' 'nowinfixheight' 'nowfh'" class="section-title" href="#'winfixheight' 'wfh' 'nowinfixheight' 'nowfh'">Note:</a>
'winfixheight' 'wfh'	boolean	(default off)
local to window
Keep the window height when windows are opened or closed and
'equalalways' is set.  Also for [CTRL-W_=](#CTRL-W_=).  Set by default for the
[preview-window| and |quickfix-window](#preview-window| and |quickfix-window).
The height may be changed anyway when running out of room.

### <a id="'winfixwidth' 'wfw' 'nowinfixwidth' 'nowfw'" class="section-title" href="#'winfixwidth' 'wfw' 'nowinfixwidth' 'nowfw'">Note:</a>
'winfixwidth' 'wfw'	boolean	(default off)
local to window
Keep the window width when windows are opened or closed and
'equalalways' is set.  Also for [CTRL-W_=](#CTRL-W_=).
The width may be changed anyway when running out of room.

### <a id="'winminheight' 'wmh'" class="section-title" href="#'winminheight' 'wmh'">Note:</a>
'winminheight' 'wmh'	number	(default 1)
global
The minimal height of a window, when it's not the current window.
This is a hard minimum, windows will never become smaller.
When set to zero, windows may be "squashed" to zero lines (i.e. just a
status bar) if necessary.  They will return to at least one line when
they become active (since the cursor has to have somewhere to go.)
Use 'winheight' to set the minimal height of the current window.
This option is only checked when making a window smaller.  Don't use a
large number, it will cause errors when opening more than a few
windows.  A value of 0 to 3 is reasonable.

### <a id="'winminwidth' 'wmw'" class="section-title" href="#'winminwidth' 'wmw'">Note:</a>
'winminwidth' 'wmw'	number	(default 1)
global
The minimal width of a window, when it's not the current window.
This is a hard minimum, windows will never become smaller.
When set to zero, windows may be "squashed" to zero columns (i.e. just
a vertical separator) if necessary.  They will return to at least one
line when they become active (since the cursor has to have somewhere
to go.)
Use 'winwidth' to set the minimal width of the current window.
This option is only checked when making a window smaller.  Don't use a
large number, it will cause errors when opening more than a few
windows.  A value of 0 to 12 is reasonable.

### <a id="'winwidth' 'wiw' E592" class="section-title" href="#'winwidth' 'wiw' E592">Note:</a>
'winwidth' 'wiw'	number	(default 20)
global
Minimal number of columns for the current window.  This is not a hard
minimum, Vim will use fewer columns if there is not enough room.  If
the current window is smaller, its size is increased, at the cost of
the width of other windows.  Set it to 999 to make the current window
always fill the screen.  Set it to a small number for normal editing.
The width is not adjusted after one of the commands to change the
width of the current window.
'winwidth' applies to the current window.  Use 'winminwidth' to set
the minimal width for other windows.

### <a id="'wrap' 'nowrap'" class="section-title" href="#'wrap' 'nowrap'">Note:</a>
'wrap'			boolean	(default on)
local to window
This option changes how text is displayed.  It doesn't change the text
in the buffer, see 'textwidth' for that.
When on, lines longer than the width of the window will wrap and
displaying continues on the next line.  When off lines will not wrap
and only part of long lines will be displayed.  When the cursor is
moved to a part that is not shown, the screen will scroll
horizontally.
The line will be broken in the middle of a word if necessary.  See
'linebreak' to get the break at a word boundary.
To make scrolling horizontally a bit more useful, try this:
```
:set sidescroll=5
:set listchars+=precedes:<,extends:>

```
	See 'sidescroll', 'listchars' and [wrap-off](#wrap-off).
This option can't be set from a [modeline](#modeline) when the 'diff' option is
on.

### <a id="'wrapmargin' 'wm'" class="section-title" href="#'wrapmargin' 'wm'">Note:</a>
'wrapmargin' 'wm'	number	(default 0)
local to buffer
Number of characters from the right window border where wrapping
starts.  When typing text beyond this limit, an <EOL> will be inserted
and inserting continues on the next line.
Options that add a margin, such as 'number' and 'foldcolumn', cause
the text width to be further reduced.
When 'textwidth' is non-zero, this option is not used.
See also 'formatoptions' and [ins-textwidth](#ins-textwidth).

### <a id="'wrapscan' 'ws' 'nowrapscan' 'nows'" class="section-title" href="#'wrapscan' 'ws' 'nowrapscan' 'nows'">Note:</a>
'wrapscan' 'ws'		boolean	(default on)			*E384* *E385*
global
Searches wrap around the end of the file.  Also applies to []s](#]s) and
[[s](#[s), searching for spelling mistakes.

### <a id="'write' 'nowrite'" class="section-title" href="#'write' 'nowrite'">Note:</a>
'write'			boolean	(default on)
global
Allows writing files.  When not set, writing a file is not allowed.
Can be used for a view-only mode, where modifications to the text are
still allowed.  Can be reset with the [-m| or |-M](#-m| or |-M) command line
argument.  Filtering text is still possible, even though this requires
writing a temporary file.

### <a id="'writeany' 'wa' 'nowriteany' 'nowa'" class="section-title" href="#'writeany' 'wa' 'nowriteany' 'nowa'">Note:</a>
'writeany' 'wa'		boolean	(default off)
global
Allows writing to any file with no need for "!" override.

### <a id="'writebackup' 'wb' 'nowritebackup' 'nowb'" class="section-title" href="#'writebackup' 'wb' 'nowritebackup' 'nowb'">Note:</a>
'writebackup' 'wb'	boolean	(default on)
global
Make a backup before overwriting a file.  The backup is removed after
the file was successfully written, unless the 'backup' option is
also on.
WARNING: Switching this option off means that when Vim fails to write
your buffer correctly and then, for whatever reason, Vim exits, you
lose both the original file and what you were writing.  Only reset
this option if your file system is almost full and it makes the write
fail (and make sure not to exit Vim until the write was successful).
See [backup-table](#backup-table) for another explanation.
When the 'backupskip' pattern matches, a backup is not made anyway.
Depending on 'backupcopy' the backup is a new file or the original
file renamed (and a new file is written).

### <a id="'writedelay' 'wd'" class="section-title" href="#'writedelay' 'wd'">Note:</a>
'writedelay' 'wd'	number	(default 0)
global
The number of milliseconds to wait for each character sent to the
screen.  When positive, characters are sent to the UI one by one.
See 'redrawdebug' for more options.  For debugging purposes.

vim:tw=78:ts=8:noet:ft=help:norl:
