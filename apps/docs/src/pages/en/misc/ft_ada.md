---
title: Ft Ada
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="" class="section-title" href="#">*Ft_Ada.Txt*	Nvim</a> 

ADA FILE TYPE PLUG-INS REFERENCE MANUAL~

### <a id="ada.vim" class="section-title" href="#ada.vim">ADA</a>

1.  Syntax Highlighting			    [ft-ada-syntax](/neovim-docs-web/en/misc/ft_ada#ft-ada-syntax)
2.  File type Plug-in			    [ft-ada-plugin](undefined#ft-ada-plugin)
3.  Omni Completion			    [ft-ada-omni](/neovim-docs-web/en/misc/ft_ada#ft-ada-omni)
3.1 Omni Completion with "gnat xref"	[gnat-xref](/neovim-docs-web/en/misc/ft_ada#gnat-xref)
3.2 Omni Completion with "ctags"		[ada-ctags](/neovim-docs-web/en/misc/ft_ada#ada-ctags)
4.  Compiler Support			    [ada-compiler](/neovim-docs-web/en/misc/ft_ada#ada-compiler)
4.1 GNAT					[compiler-gnat](/neovim-docs-web/en/misc/ft_ada#compiler-gnat)
4.2 Dec Ada					[compiler-decada](undefined#compiler-decada)
5.  References				    [ada-reference](/neovim-docs-web/en/misc/ft_ada#ada-reference)
5.1 Options					[ft-ada-options](/neovim-docs-web/en/misc/ft_ada#ft-ada-options)
5.2 Commands				[ft-ada-commands](/neovim-docs-web/en/misc/ft_ada#ft-ada-commands)
5.3 Variables				[ft-ada-variables](/neovim-docs-web/en/misc/ft_ada#ft-ada-variables)
5.4 Constants				[ft-ada-constants](/neovim-docs-web/en/misc/ft_ada#ft-ada-constants)
5.5 Functions				[ft-ada-functions](/neovim-docs-web/en/misc/ft_ada#ft-ada-functions)
6.  Extra Plug-ins			    [ada-extra-plugins](/neovim-docs-web/en/misc/ft_ada#ada-extra-plugins)


## <a id="" class="section-title" href="#">1. Syntax Highlighting ~</a> <span id="ft-ada-syntax"></span>

This mode is designed for the 2005 edition of Ada ("Ada 2005"), which includes
support for objected-programming, protected types, and so on.  It handles code
written for the original Ada language ("Ada83", "Ada87", "Ada95") as well,
though code which uses Ada 2005-only keywords will be wrongly colored (such
code should be fixed anyway).  For more information about Ada, see
http://www.adapower.com.

The Ada mode handles a number of situations cleanly.

For example, it knows that the "-" in "-5" is a number, but the same character
in "A-5" is an operator.  Normally, a "with" or "use" clause referencing
another compilation unit is coloured the same way as C's "#include" is coloured.
If you have "Conditional" or "Repeat" groups coloured differently, then "end
if" and "end loop" will be coloured as part of those respective groups.

You can set these to different colours using vim's "highlight" command (e.g.,
to change how loops are displayed, enter the command ":hi Repeat" followed by
the colour specification; on simple terminals the colour specification
ctermfg=White often shows well).

There are several options you can select in this Ada mode. See [ft-ada-options](/neovim-docs-web/en/misc/ft_ada#ft-ada-options)
for a complete list.

To enable them, assign a value to the option.  For example, to turn one on:
> let g:ada_standard_types = 1

To disable them use ":unlet".  Example:
> unlet g:ada_standard_types

You can just use ":" and type these into the command line to set these
temporarily before loading an Ada file.  You can make these option settings
permanent by adding the "let" command(s), without a colon, to your |init.vim|
file.

Even on a slow (90Mhz) PC this mode works quickly, but if you find the
performance unacceptable, turn on |g:ada_withuse_ordinary|.

Syntax folding instructions ([fold-syntax](undefined#fold-syntax)) are added when |g:ada_folding| is
set.


## <a id="" class="section-title" href="#">2. File Type Plug-in ~</a> <span id="ft-ada-indent"></span>

The Ada plug-in provides support for:

- auto indenting	(|indent.txt|)
- insert completion	(|i_CTRL-N|)
- user completion	(|i_CTRL-X_CTRL-U|)
- tag searches		(|tagsrch.txt|)
- Quick Fix		(|quickfix.txt|)
- backspace handling	(|'backspace'|)
- comment handling	(|'comments'|, |'commentstring'|)

The plug-in only activates the features of the Ada mode whenever an Ada
file is opened and adds Ada related entries to the main and pop-up menu.


## <a id="" class="section-title" href="#">3. Omni Completion ~</a> <span id="ft-ada-omni"></span>

The Ada omni-completions (|i_CTRL-X_CTRL-O|) uses tags database created either
by "gnat xref -v" or the "Universal Ctags" (https://ctags.io).  The complete
function will automatically detect which tool was used to create the tags
file.


## <a id="" class="section-title" href="#">3.1 Omni Completion With "Gnat Xref" ~</a> <span id="gnat-xref"></span>

GNAT XREF uses the compiler internal information (ali-files) to produce the
tags file. This has the advantage to be 100% correct and the option of deep
nested analysis. However the code must compile, the generator is quite
slow and the created tags file contains only the basic Ctags information for
each entry - not enough for some of the more advanced Vim code browser
plug-ins.

NOTE: "gnat xref -v" is very tricky to use as it has almost no diagnostic
output - If nothing is printed then usually the parameters are wrong.
Here some important tips:

1)  You need to compile your code first and use the "-aO" option to point to
your .ali files.
2)  "gnat xref -v ../Include/adacl.ads" won't work - use  the "gnat xref -v
-aI../Include adacl.ads" instead.
### <a id=""gnat xref -v -aI../Include .ad?" won't work - use "cd ../Include" and" class="section-title" href="#"gnat xref -v -aI../Include .ad?" won't work - use "cd ../Include" and">3)</a>
### <a id="then "gnat xref -v .ad?"" class="section-title" href="#then "gnat xref -v .ad?"">Note:</a>
4)  Project manager support is completely broken - don't even try "gnat xref
-Padacl.gpr".
5)  Vim is faster when the tags file is sorted - use "sort --unique
--ignore-case --output=tags tags" .
6)  Remember to insert "!_TAG_FILE_SORTED 2 %sort ui" as first line to mark
the file assorted.


## <a id="" class="section-title" href="#">3.2 Omni Completion With "Ctags"~</a> <span id="ada-ctags"></span>

Universal/Exuberant Ctags use their own multi-language code parser.  The
parser is quite fast, produces a lot of extra information and can run on files
which currently do not compile.

There are also lots of other Vim-tools which use Universal/Exuberant Ctags.
Universal Ctags is preferred, Exuberant Ctags is no longer being developed.

You will need to install Universal Ctags which is available from
https://ctags.io

The Ada parser for Universal/Exuberant Ctags is fairly new - don't expect
complete support yet.


## <a id="" class="section-title" href="#">4. Compiler Support ~</a> <span id="ada-compiler"></span>

The Ada mode supports more than one Ada compiler and will automatically load the
compiler set in |g:ada_default_compiler| whenever an Ada source is opened. The
provided compiler plug-ins are split into the actual compiler plug-in and a
collection of support functions and variables. This allows the easy
development of specialized compiler plug-ins fine tuned to your development
environment.


## <a id="" class="section-title" href="#">4.1 Gnat ~</a> <span id="compiler-gnat"></span>

GNAT is the only free (beer and speech) Ada compiler available. There are
several versions available which differ in the licence terms used.

The GNAT compiler plug-in will perform a compile on pressing <F7> and then
immediately shows the result. You can set the project file to be used by
setting:
> call g:gnat.Set_Project_File ('my_project.gpr')

Setting a project file will also create a Vim session ([views-sessions](/neovim-docs-web/en/vim/starting#views-sessions)) so -
like with the GPS - opened files, window positions etc. will be remembered
separately for all projects.

### <a id="gnat_members" class="section-title" href="#gnat_members">Note:</a>
GNAT OBJECT ~

### <a id="g:gnat.Make()" class="section-title" href="#g:gnat.Make()">Note:</a>
g:gnat.Make()
Calls |g:gnat.Make_Command| and displays the result inside a
[quickfix](undefined#quickfix) window.

### <a id="g:gnat.Pretty()" class="section-title" href="#g:gnat.Pretty()">Note:</a>
g:gnat.Pretty()
Calls |g:gnat.Pretty_Program|

### <a id="g:gnat.Find()" class="section-title" href="#g:gnat.Find()">Note:</a>
g:gnat.Find()
Calls |g:gnat.Find_Program|

### <a id="g:gnat.Tags()" class="section-title" href="#g:gnat.Tags()">Note:</a>
g:gnat.Tags()
Calls |g:gnat.Tags_Command|

### <a id="g:gnat.Set_Project_File()" class="section-title" href="#g:gnat.Set_Project_File()">Note:</a>
g:gnat.Set_Project_File([{file}])
Set gnat project file and load associated session.  An open
project will be closed and the session written.  If called
without file name the file selector opens for selection of a
project file. If called with an empty string then the project
and associated session are closed.

### <a id="g:gnat.Project_File" class="section-title" href="#g:gnat.Project_File">Note:</a>
g:gnat.Project_File	string
Current project file.

### <a id="g:gnat.Make_Command" class="section-title" href="#g:gnat.Make_Command">Note:</a>
g:gnat.Make_Command	string
External command used for |g:gnat.Make()| (|'makeprg'|).

### <a id="g:gnat.Pretty_Program" class="section-title" href="#g:gnat.Pretty_Program">Note:</a>
g:gnat.Pretty_Program	string
External command used for |g:gnat.Pretty()|

### <a id="g:gnat.Find_Program" class="section-title" href="#g:gnat.Find_Program">Note:</a>
g:gnat.Find_Program	string
External command used for |g:gnat.Find()|

### <a id="g:gnat.Tags_Command" class="section-title" href="#g:gnat.Tags_Command">Note:</a>
g:gnat.Tags_Command	string
External command used for |g:gnat.Tags()|

### <a id="g:gnat.Error_Format" class="section-title" href="#g:gnat.Error_Format">Note:</a>
g:gnat.Error_Format	string
Error format (|'errorformat'|)


## <a id="" class="section-title" href="#">4.2 Dec Ada ~</a> <span id="compiler-hpada"></span>

### <a id="compiler-vaxada compiler-compaqada" class="section-title" href="#compiler-vaxada compiler-compaqada">Note:</a>

Dec Ada (also known by - in chronological order - VAX Ada, Dec Ada, Compaq Ada
and HP Ada) is a fairly dated Ada 83 compiler. Support is basic: <F7> will
compile the current unit.

The Dec Ada compiler expects the package name and not the file name to be
passed as a parameter. The compiler plug-in supports the usual file name
convention to convert the file into a unit name. Both '-' and '__' are allowed
as separators.

### <a id="decada_members" class="section-title" href="#decada_members">Note:</a>
DEC ADA OBJECT ~

### <a id="g:decada.Make()" class="section-title" href="#g:decada.Make()">Note:</a>
g:decada.Make()		function
Calls |g:decada.Make_Command| and displays the result inside a
[quickfix](undefined#quickfix) window.

### <a id="g:decada.Unit_Name()" class="section-title" href="#g:decada.Unit_Name()">Note:</a>
g:decada.Unit_Name()	function
Get the Unit name for the current file.

### <a id="g:decada.Make_Command" class="section-title" href="#g:decada.Make_Command">Note:</a>
g:decada.Make_Command	string
External command used for |g:decada.Make()| (|'makeprg'|).

### <a id="g:decada.Error_Format" class="section-title" href="#g:decada.Error_Format">Note:</a>
g:decada.Error_Format	string
Error format (|'errorformat'|).


## <a id="" class="section-title" href="#">5. References ~</a> <span id="ada-reference"></span>




## <a id="" class="section-title" href="#">5.1 Options ~</a> <span id="ft-ada-options"></span>

### <a id="g:ada_standard_types" class="section-title" href="#g:ada_standard_types">Note:</a>
g:ada_standard_types	bool (true when exists)
Highlight types in package Standard (e.g., "Float").

### <a id="g:ada_space_errors" class="section-title" href="#g:ada_space_errors">Note:</a>
### <a id="g:ada_no_trail_space_error" class="section-title" href="#g:ada_no_trail_space_error">Note:</a>
### <a id="g:ada_no_tab_space_error" class="section-title" href="#g:ada_no_tab_space_error">Note:</a>
### <a id="g:ada_all_tab_usage" class="section-title" href="#g:ada_all_tab_usage">Note:</a>
g:ada_space_errors	 bool (true when exists)
Highlight extraneous errors in spaces ...
g:ada_no_trail_space_error
- but ignore trailing spaces at the end of a line
g:ada_no_tab_space_error
- but ignore tabs after spaces
g:ada_all_tab_usage
- highlight all tab use

### <a id="g:ada_line_errors" class="section-title" href="#g:ada_line_errors">Note:</a>
g:ada_line_errors	  bool (true when exists)
Highlight lines which are too long. Note: This highlighting
option is quite CPU intensive.

### <a id="g:ada_rainbow_color" class="section-title" href="#g:ada_rainbow_color">Note:</a>
g:ada_rainbow_color	  bool (true when exists)
Use rainbow colours for '(' and ')'. You need the
rainbow_parenthesis for this to work.

### <a id="g:ada_folding" class="section-title" href="#g:ada_folding">Note:</a>
g:ada_folding		  set ("sigpft")
Use folding for Ada sources.
's':    activate syntax folding on load
'p':    fold packages
'f':    fold functions and procedures
't':    fold types
'c':    fold conditionals
'g':    activate gnat pretty print folding on load
'i':    lone "is" folded with line above
'b':	lone "begin" folded with line above
'p':	lone "private" folded with line above
'x':	lone "exception" folded with line above
'i':    activate indent folding on load

Note: Syntax folding is in an early (unusable) stage and
indent or gnat pretty folding is suggested.

For gnat pretty folding to work the following settings are
suggested: -cl3 -M79 -c2 -c3 -c4 -A1 -A2 -A3 -A4 -A5

For indent folding to work the following settings are
suggested: shiftwidth=3 softtabstop=3

### <a id="g:ada_abbrev" class="section-title" href="#g:ada_abbrev">Note:</a>
g:ada_abbrev		  bool (true when exists)
Add some abbreviations. This feature is more or less superseded
by the various completion methods.

### <a id="g:ada_withuse_ordinary" class="section-title" href="#g:ada_withuse_ordinary">Note:</a>
g:ada_withuse_ordinary	  bool (true when exists)
Show "with" and "use" as ordinary keywords (when used to
reference other compilation units they're normally highlighted
specially).

### <a id="g:ada_begin_preproc" class="section-title" href="#g:ada_begin_preproc">Note:</a>
g:ada_begin_preproc	  bool (true when exists)
Show all begin-like keywords using the colouring of C
preprocessor commands.

### <a id="g:ada_omni_with_keywords" class="section-title" href="#g:ada_omni_with_keywords">Note:</a>
g:ada_omni_with_keywords
Add Keywords, Pragmas, Attributes to omni-completions
([compl-omni](undefined#compl-omni)). Note: You can always complete then with user
completion (|i_CTRL-X_CTRL-U|).

### <a id="g:ada_extended_tagging" class="section-title" href="#g:ada_extended_tagging">Note:</a>
g:ada_extended_tagging	  enum ("jump", "list")
use extended tagging, two options are available
"jump": use tjump to jump.
"list": add tags quick fix list.
Normal tagging does not support function or operator
overloading as these features are not available in C and
tagging was originally developed for C.

### <a id="g:ada_extended_completion" class="section-title" href="#g:ada_extended_completion">Note:</a>
g:ada_extended_completion
Uses extended completion for <C-N> and <C-R> completions
(|i_CTRL-N|). In this mode the '.' is used as part of the
identifier so that 'Object.Method' or 'Package.Procedure' are
completed together.

### <a id="g:ada_gnat_extensions" class="section-title" href="#g:ada_gnat_extensions">Note:</a>
g:ada_gnat_extensions	  bool (true when exists)
Support GNAT extensions.

### <a id="g:ada_with_gnat_project_files" class="section-title" href="#g:ada_with_gnat_project_files">Note:</a>
g:ada_with_gnat_project_files	 bool (true when exists)
Add gnat project file keywords and Attributes.

### <a id="g:ada_default_compiler" class="section-title" href="#g:ada_default_compiler">Note:</a>
g:ada_default_compiler	  string
set default compiler. Currently supported are "gnat" and
"decada".

An "exists" type is a boolean considered true when the variable is defined and
false when the variable is undefined. The value to which the variable is set
makes no difference.


## <a id="" class="section-title" href="#">5.2 Commands ~</a> <span id="ft-ada-commands"></span>

### <a id=":AdaRainbow" class="section-title" href="#:AdaRainbow">:AdaRainbow</a>
Toggles rainbow colour (|g:ada_rainbow_color|) mode for
'(' and ')'.

### <a id=":AdaLines" class="section-title" href="#:AdaLines">:AdaLines</a>
Toggles line error (|g:ada_line_errors|) display.

### <a id=":AdaSpaces" class="section-title" href="#:AdaSpaces">:AdaSpaces</a>
Toggles space error (|g:ada_space_errors|) display.

### <a id=":AdaTagDir" class="section-title" href="#:AdaTagDir">:AdaTagDir</a>
Creates tags file for the directory of the current file.

### <a id=":AdaTagFile" class="section-title" href="#:AdaTagFile">:AdaTagFile</a>
Creates tags file for the current file.

### <a id=":AdaTypes" class="section-title" href="#:AdaTypes">:AdaTypes</a>
Toggles standard types (|g:ada_standard_types|) colour.

### <a id=":GnatFind" class="section-title" href="#:GnatFind">:GnatFind</a>
Calls |g:gnat.Find()|

### <a id=":GnatPretty" class="section-title" href="#:GnatPretty">:GnatPretty</a>
Calls |g:gnat.Pretty()|

### <a id=":GnatTags" class="section-title" href="#:GnatTags">:GnatTags</a>
Calls |g:gnat.Tags()|


## <a id="" class="section-title" href="#">5.3 Variables ~</a> <span id="ft-ada-variables"></span>

### <a id="g:gnat" class="section-title" href="#g:gnat">Note:</a>
g:gnat			    object
Control object which manages GNAT compiles.  The object
is created when the first Ada source code is loaded provided
that |g:ada_default_compiler| is set to "gnat". See
|gnat_members| for details.

### <a id="g:decada" class="section-title" href="#g:decada">Note:</a>
g:decada		      object
Control object which manages Dec Ada compiles.	The object
is created when the first Ada source code is loaded provided
that |g:ada_default_compiler| is set to "decada". See
|decada_members| for details.


## <a id="" class="section-title" href="#">5.4 Constants ~</a> <span id="ft-ada-constants"></span>

All constants are locked. See |:lockvar| for details.

### <a id="g:ada#WordRegex" class="section-title" href="#g:ada#WordRegex">Note:</a>
g:ada#WordRegex		string
Regular expression to search for Ada words.

### <a id="g:ada#DotWordRegex" class="section-title" href="#g:ada#DotWordRegex">Note:</a>
g:ada#DotWordRegex	string
Regular expression to search for Ada words separated by dots.

### <a id="g:ada#Comment" class="section-title" href="#g:ada#Comment">Note:</a>
g:ada#Comment		string
Regular expression to search for Ada comments.

### <a id="g:ada#Keywords" class="section-title" href="#g:ada#Keywords">Note:</a>
g:ada#Keywords		list of dictionaries
List of keywords, attributes etc. pp. in the format used by
omni completion. See [complete-items](undefined#complete-items) for details.

### <a id="g:ada#Ctags_Kinds" class="section-title" href="#g:ada#Ctags_Kinds">Note:</a>
g:ada#Ctags_Kinds	dictionary of lists
Dictionary of the various kinds of items which the Ada support
for Ctags generates.


## <a id="" class="section-title" href="#">5.5 Functions ~</a> <span id="ft-ada-functions"></span>

### <a id="ada#Word()" class="section-title" href="#ada#Word()">ada#Word([{line}, {col}])</a>
Return full name of Ada entity under the cursor (or at given
line/column), stripping white space/newlines as necessary.

### <a id="ada#Listtags()" class="section-title" href="#ada#Listtags()">ada#List_Tag([{line}, {col}])</a>
List all occurrences of the Ada entity under the cursor (or at
given line/column) inside the quick-fix window.

### <a id="ada#Jump_Tag()" class="section-title" href="#ada#Jump_Tag()">ada#Jump_Tag ({ident}, {mode})</a>
List all occurrences of the Ada entity under the cursor (or at
given line/column) in the tag jump list. Mode can either be
"tjump" or "stjump".

### <a id="ada#Create_Tags()" class="section-title" href="#ada#Create_Tags()">ada#Create_Tags ({option})</a>
Creates tag file using Ctags. The option can either be "file"
for the current file, "dir" for the directory of the current
file or a file name.

### <a id="gnat#Insert_Tags_Header()" class="section-title" href="#gnat#Insert_Tags_Header()">gnat#Insert_Tags_Header()</a>
Adds the tag file header (!_TAG_) information to the current
file which are missing from the GNAT XREF output.

### <a id="ada#Switch_Syntax_Option()" class="section-title" href="#ada#Switch_Syntax_Option()">ada#Switch_Syntax_Option ({option})</a>
Toggles highlighting options on or off. Used for the Ada menu.

### <a id="gnat#New()" class="section-title" href="#gnat#New()">Note:</a>
gnat#New ()
Create a new gnat object. See |g:gnat| for details.


## <a id="" class="section-title" href="#">6. Extra Plugins ~</a> <span id="ada-extra-plugins"></span>

You can optionally install the following extra plug-ins. They work well with
Ada and enhance the ability of the Ada mode:

backup.vim
https://www.vim.org/scripts/script.php?script_id=1537
Keeps as many backups as you like so you don't have to.

rainbow_parenthesis.vim
https://www.vim.org/scripts/script.php?script_id=1561
Very helpful since Ada uses only '(' and ')'.

nerd_comments.vim
https://www.vim.org/scripts/script.php?script_id=1218
Excellent commenting and uncommenting support for almost any
programming language.

matchit.vim
https://www.vim.org/scripts/script.php?script_id=39
'%' jumping for any language. The normal '%' jump only works for '{}'
style languages. The Ada mode will set the needed search patterns.

taglist.vim
https://www.vim.org/scripts/script.php?script_id=273
Source code explorer sidebar. There is a patch for Ada available.

The GNU Ada Project distribution (http://gnuada.sourceforge.net) of Vim
contains all of the above.


## <a id="" class="section-title" href="#">Vim: Textwidth=78 Nowrap Tabstop=8 Shiftwidth=4 Softtabstop=4 Noexpandtab</a> 

vim: filetype=help

