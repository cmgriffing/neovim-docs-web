---
title:  Ft_ada
layout: ../../layouts/MainLayout.astro
---

  <a name="ft_ada.txt"></a><a name="ada.vim"></a><h1> Ft_ada</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/ft_ada.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">		    ADA FILE TYPE PLUG-INS REFERENCE MANUAL~</div>
<div class="old-help-para"><h3 class="help-heading">ADA</h3></div>
<div class="old-help-para">1.  Syntax Highlighting			    <a href="/neovim-docs-web/en/ft_ada#ft-ada-syntax">ft-ada-syntax</a>
2.  File type Plug-in			    <a href="/neovim-docs-web/en/ft_ada#ft-ada-plugin">ft-ada-plugin</a>
3.  Omni Completion			    <a href="/neovim-docs-web/en/ft_ada#ft-ada-omni">ft-ada-omni</a>
    3.1 Omni Completion with "gnat xref"	<a href="/neovim-docs-web/en/ft_ada#gnat-xref">gnat-xref</a>
    3.2 Omni Completion with "ctags"		<a href="/neovim-docs-web/en/ft_ada#ada-ctags">ada-ctags</a>
4.  Compiler Support			    <a href="/neovim-docs-web/en/ft_ada#ada-compiler">ada-compiler</a>
    4.1 GNAT					<a href="/neovim-docs-web/en/ft_ada#compiler-gnat">compiler-gnat</a>
    4.2 Dec Ada					<a href="/neovim-docs-web/en/ft_ada#compiler-decada">compiler-decada</a>
5.  References				    <a href="/neovim-docs-web/en/ft_ada#ada-reference">ada-reference</a>
    5.1 Options					<a href="/neovim-docs-web/en/ft_ada#ft-ada-options">ft-ada-options</a>
    5.2 Commands				<a href="/neovim-docs-web/en/ft_ada#ft-ada-commands">ft-ada-commands</a>
    5.3 Variables				<a href="/neovim-docs-web/en/ft_ada#ft-ada-variables">ft-ada-variables</a>
    5.4 Constants				<a href="/neovim-docs-web/en/ft_ada#ft-ada-constants">ft-ada-constants</a>
    5.5 Functions				<a href="/neovim-docs-web/en/ft_ada#ft-ada-functions">ft-ada-functions</a>
6.  Extra Plug-ins			    <a href="/neovim-docs-web/en/ft_ada#ada-extra-plugins">ada-extra-plugins</a></div>
<div class="old-help-para"><a name="_-1.-syntax-highlighting-~"></a><h2 class="help-heading">1. Syntax Highlighting ~</h2>							       <a name="ft-ada-syntax"></a><code class="help-tag-right">ft-ada-syntax</code></div>
<div class="old-help-para">This mode is designed for the 2005 edition of Ada ("Ada 2005"), which includes
support for objected-programming, protected types, and so on.  It handles code
written for the original Ada language ("Ada83", "Ada87", "Ada95") as well,
though code which uses Ada 2005-only keywords will be wrongly colored (such
code should be fixed anyway).  For more information about Ada, see
<a href="http://www.adapower.com">http://www.adapower.com</a>.</div>
<div class="old-help-para">The Ada mode handles a number of situations cleanly.</div>
<div class="old-help-para">For example, it knows that the "-" in "-5" is a number, but the same character
in "A-5" is an operator.  Normally, a "with" or "use" clause referencing
another compilation unit is coloured the same way as C's "#include" is coloured.
If you have "Conditional" or "Repeat" groups coloured differently, then "end
if" and "end loop" will be coloured as part of those respective groups.</div>
<div class="old-help-para">You can set these to different colours using vim's "highlight" command (e.g.,
to change how loops are displayed, enter the command ":hi Repeat" followed by
the colour specification; on simple terminals the colour specification
ctermfg=White often shows well).</div>
<div class="old-help-para">There are several options you can select in this Ada mode. See <a href="/neovim-docs-web/en/ft_ada#ft-ada-options">ft-ada-options</a>
for a complete list.</div>
<div class="old-help-para">To enable them, assign a value to the option.  For example, to turn one on:
<pre>&gt; let g:ada_standard_types = 1</pre>
To disable them use ":unlet".  Example:
<pre>&gt; unlet g:ada_standard_types</pre>
You can just use ":" and type these into the command line to set these
temporarily before loading an Ada file.  You can make these option settings
permanent by adding the "let" command(s), without a colon, to your <a href="/neovim-docs-web/en/starting#init.vim">init.vim</a>
file.</div>
<div class="old-help-para">Even on a slow (90Mhz) PC this mode works quickly, but if you find the
performance unacceptable, turn on <a href="/neovim-docs-web/en/ft_ada#g%3Aada_withuse_ordinary">g:ada_withuse_ordinary</a>.</div>
<div class="old-help-para">Syntax folding instructions (<a href="/neovim-docs-web/en/fold#fold-syntax">fold-syntax</a>) are added when <a href="/neovim-docs-web/en/ft_ada#g%3Aada_folding">g:ada_folding</a> is
set.</div>
<div class="old-help-para"><a name="_-2.-file-type-plug-in-~"></a><h2 class="help-heading">2. File type Plug-in ~</h2>					       <a name="ft-ada-indent"></a><code class="help-tag-right">ft-ada-indent</code> <a name="ft-ada-plugin"></a><code class="help-tag">ft-ada-plugin</code></div>
<div class="old-help-para">The Ada plug-in provides support for:</div>
<div class="old-help-para"><div class="help-li" style=""> auto indenting	(<a href="/neovim-docs-web/en/indent#indent.txt">indent.txt</a>)
</div><div class="help-li" style=""> insert completion	(<a href="/neovim-docs-web/en/insert#i_CTRL-N">i_CTRL-N</a>)
</div><div class="help-li" style=""> user completion	(<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-U">i_CTRL-X_CTRL-U</a>)
</div><div class="help-li" style=""> tag searches		(<a href="/neovim-docs-web/en/tagsrch#tagsrch.txt">tagsrch.txt</a>)
</div><div class="help-li" style=""> Quick Fix		(<a href="/neovim-docs-web/en/quickfix#quickfix.txt">quickfix.txt</a>)
</div><div class="help-li" style=""> backspace handling	(<a href="/neovim-docs-web/en/options#'backspace'">'backspace'</a>)
</div><div class="help-li" style=""> comment handling	(<a href="/neovim-docs-web/en/options#'comments'">'comments'</a>, <a href="/neovim-docs-web/en/options#'commentstring'">'commentstring'</a>)
</div></div>
<div class="old-help-para">The plug-in only activates the features of the Ada mode whenever an Ada
file is opened and adds Ada related entries to the main and pop-up menu.</div>
<div class="old-help-para"><a name="_-3.-omni-completion-~"></a><h2 class="help-heading">3. Omni Completion ~</h2>								 <a name="ft-ada-omni"></a><code class="help-tag-right">ft-ada-omni</code></div>
<div class="old-help-para">The Ada omni-completions (<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-O">i_CTRL-X_CTRL-O</a>) uses tags database created either
by "gnat xref -v" or the "Universal Ctags" (<a href="https://ctags.io">https://ctags.io</a>).  The complete
function will automatically detect which tool was used to create the tags
file.</div>
<div class="old-help-para"><a name="_-3.1-omni-completion-with-" gnat-xref"-~"=""></a><h3 class="help-heading">3.1 Omni Completion with "gnat xref" ~</h3>								   <a name="gnat-xref"></a><code class="help-tag-right">gnat-xref</code></div>
<div class="old-help-para">GNAT XREF uses the compiler internal information (ali-files) to produce the
tags file. This has the advantage to be 100% correct and the option of deep
nested analysis. However the code must compile, the generator is quite
slow and the created tags file contains only the basic Ctags information for
each entry - not enough for some of the more advanced Vim code browser
plug-ins.</div>
<div class="old-help-para">NOTE: "gnat xref -v" is very tricky to use as it has almost no diagnostic
       output - If nothing is printed then usually the parameters are wrong.
       Here some important tips:</div>
<div class="old-help-para">1)  You need to compile your code first and use the "-aO" option to point to
    your .ali files.
2)  "gnat xref -v ../Include/adacl.ads" won't work - use  the "gnat xref -v
    -aI../Include adacl.ads" instead.
3)  "gnat xref -v -aI../Include.ad?" won't work - use "cd ../Include" and
    then "gnat xref -v *.ad?"
4)  Project manager support is completely broken - don't even try "gnat xref
    -Padacl.gpr".
5)  Vim is faster when the tags file is sorted - use "sort --unique
    --ignore-case --output=tags tags" .
6)  Remember to insert "!_TAG_FILE_SORTED 2 %sort ui" as first line to mark
    the file assorted.</div>
<div class="old-help-para"><a name="_-3.2-omni-completion-with-" ctags"~"=""></a><h3 class="help-heading">3.2 Omni Completion with "ctags"~</h3>								   <a name="ada-ctags"></a><code class="help-tag-right">ada-ctags</code></div>
<div class="old-help-para">Universal/Exuberant Ctags use their own multi-language code parser.  The
parser is quite fast, produces a lot of extra information and can run on files
which currently do not compile.</div>
<div class="old-help-para">There are also lots of other Vim-tools which use Universal/Exuberant Ctags.
Universal Ctags is preferred, Exuberant Ctags is no longer being developed.</div>
<div class="old-help-para">You will need to install Universal Ctags which is available from
<a href="https://ctags.io">https://ctags.io</a></div>
<div class="old-help-para">The Ada parser for Universal/Exuberant Ctags is fairly new - don't expect
complete support yet.</div>
<div class="old-help-para"><a name="_-4.-compiler-support-~"></a><h2 class="help-heading">4. Compiler Support ~</h2>								<a name="ada-compiler"></a><code class="help-tag-right">ada-compiler</code></div>
<div class="old-help-para">The Ada mode supports more than one Ada compiler and will automatically load the
compiler set in <a href="/neovim-docs-web/en/ft_ada#g%3Aada_default_compiler">g:ada_default_compiler</a> whenever an Ada source is opened. The
provided compiler plug-ins are split into the actual compiler plug-in and a
collection of support functions and variables. This allows the easy
development of specialized compiler plug-ins fine tuned to your development
environment.</div>
<div class="old-help-para"><a name="_-4.1-gnat-~"></a><h3 class="help-heading">4.1 GNAT ~</h3>							       <a name="compiler-gnat"></a><code class="help-tag-right">compiler-gnat</code></div>
<div class="old-help-para">GNAT is the only free (beer and speech) Ada compiler available. There are
several versions available which differ in the licence terms used.</div>
<div class="old-help-para">The GNAT compiler plug-in will perform a compile on pressing <code>&lt;F7&gt;</code> and then
immediately shows the result. You can set the project file to be used by
setting:
<pre>&gt; call g:gnat.Set_Project_File ('my_project.gpr')</pre>
Setting a project file will also create a Vim session (<a href="/neovim-docs-web/en/starting#views-sessions">views-sessions</a>) so -
like with the GPS - opened files, window positions etc. will be remembered
separately for all projects.</div>
<div class="old-help-para">								<a name="gnat_members"></a><code class="help-tag-right">gnat_members</code>
<div class="help-column_heading">GNAT OBJECT</div></div>
<div class="old-help-para">							       <a name="g%3Agnat.Make()"></a><code class="help-tag-right">g:gnat.Make()</code>
g:gnat.Make()
		Calls <a href="/neovim-docs-web/en/ft_ada#g%3Agnat.Make_Command">g:gnat.Make_Command</a> and displays the result inside a
               <a href="/neovim-docs-web/en/quickfix#quickfix">quickfix</a> window.</div>
<div class="old-help-para">							     <a name="g%3Agnat.Pretty()"></a><code class="help-tag-right">g:gnat.Pretty()</code>
g:gnat.Pretty()
		Calls <a href="/neovim-docs-web/en/ft_ada#g%3Agnat.Pretty_Program">g:gnat.Pretty_Program</a></div>
<div class="old-help-para">							       <a name="g%3Agnat.Find()"></a><code class="help-tag-right">g:gnat.Find()</code>
g:gnat.Find()
		Calls <a href="/neovim-docs-web/en/ft_ada#g%3Agnat.Find_Program">g:gnat.Find_Program</a></div>
<div class="old-help-para">							       <a name="g%3Agnat.Tags()"></a><code class="help-tag-right">g:gnat.Tags()</code>
g:gnat.Tags()
		Calls <a href="/neovim-docs-web/en/ft_ada#g%3Agnat.Tags_Command">g:gnat.Tags_Command</a></div>
<div class="old-help-para">						   <a name="g%3Agnat.Set_Project_File()"></a><code class="help-tag-right">g:gnat.Set_Project_File()</code>
g:gnat.Set_Project_File([{file}])
		Set gnat project file and load associated session.  An open
		project will be closed and the session written.  If called
		without file name the file selector opens for selection of a
		project file. If called with an empty string then the project
		and associated session are closed.</div>
<div class="old-help-para">							 <a name="g%3Agnat.Project_File"></a><code class="help-tag-right">g:gnat.Project_File</code>
g:gnat.Project_File	string
		Current project file.</div>
<div class="old-help-para">							 <a name="g%3Agnat.Make_Command"></a><code class="help-tag-right">g:gnat.Make_Command</code>
g:gnat.Make_Command	string
		External command used for <a href="/neovim-docs-web/en/ft_ada#g%3Agnat.Make()">g:gnat.Make()</a> (<a href="/neovim-docs-web/en/options#'makeprg'">'makeprg'</a>).</div>
<div class="old-help-para">						       <a name="g%3Agnat.Pretty_Program"></a><code class="help-tag-right">g:gnat.Pretty_Program</code>
g:gnat.Pretty_Program	string
		External command used for <a href="/neovim-docs-web/en/ft_ada#g%3Agnat.Pretty()">g:gnat.Pretty()</a></div>
<div class="old-help-para">							 <a name="g%3Agnat.Find_Program"></a><code class="help-tag-right">g:gnat.Find_Program</code>
g:gnat.Find_Program	string
		External command used for <a href="/neovim-docs-web/en/ft_ada#g%3Agnat.Find()">g:gnat.Find()</a></div>
<div class="old-help-para">							 <a name="g%3Agnat.Tags_Command"></a><code class="help-tag-right">g:gnat.Tags_Command</code>
g:gnat.Tags_Command	string
		External command used for <a href="/neovim-docs-web/en/ft_ada#g%3Agnat.Tags()">g:gnat.Tags()</a></div>
<div class="old-help-para">							 <a name="g%3Agnat.Error_Format"></a><code class="help-tag-right">g:gnat.Error_Format</code>
g:gnat.Error_Format	string
		Error format (<a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a>)</div>
<div class="old-help-para"><a name="_-4.2-dec-ada-~"></a><h3 class="help-heading">4.2 Dec Ada ~</h3>					    <a name="compiler-hpada"></a><code class="help-tag-right">compiler-hpada</code> <a name="compiler-decada"></a><code class="help-tag">compiler-decada</code>
					<a name="compiler-vaxada"></a><code class="help-tag-right">compiler-vaxada</code> <a name="compiler-compaqada"></a><code class="help-tag">compiler-compaqada</code></div>
<div class="old-help-para">Dec Ada (also known by - in chronological order - VAX Ada, Dec Ada, Compaq Ada
and HP Ada) is a fairly dated Ada 83 compiler. Support is basic: <code>&lt;F7&gt;</code> will
compile the current unit.</div>
<div class="old-help-para">The Dec Ada compiler expects the package name and not the file name to be
passed as a parameter. The compiler plug-in supports the usual file name
convention to convert the file into a unit name. Both '-' and '__' are allowed
as separators.</div>
<div class="old-help-para">							      <a name="decada_members"></a><code class="help-tag-right">decada_members</code>
<div class="help-column_heading">DEC ADA OBJECT</div></div>
<div class="old-help-para">							     <a name="g%3Adecada.Make()"></a><code class="help-tag-right">g:decada.Make()</code>
g:decada.Make()		function
		Calls <a href="/neovim-docs-web/en/ft_ada#g%3Adecada.Make_Command">g:decada.Make_Command</a> and displays the result inside a
		<a href="/neovim-docs-web/en/quickfix#quickfix">quickfix</a> window.</div>
<div class="old-help-para">							<a name="g%3Adecada.Unit_Name()"></a><code class="help-tag-right">g:decada.Unit_Name()</code>
g:decada.Unit_Name()	function
		Get the Unit name for the current file.</div>
<div class="old-help-para">						       <a name="g%3Adecada.Make_Command"></a><code class="help-tag-right">g:decada.Make_Command</code>
g:decada.Make_Command	string
		External command used for <a href="/neovim-docs-web/en/ft_ada#g%3Adecada.Make()">g:decada.Make()</a> (<a href="/neovim-docs-web/en/options#'makeprg'">'makeprg'</a>).</div>
<div class="old-help-para">						       <a name="g%3Adecada.Error_Format"></a><code class="help-tag-right">g:decada.Error_Format</code>
g:decada.Error_Format	string
		Error format (<a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a>).</div>
<div class="old-help-para"><a name="_-5.-references-~"></a><h2 class="help-heading">5. References ~</h2>							       <a name="ada-reference"></a><code class="help-tag-right">ada-reference</code></div>
<div class="old-help-para"><a name="_-5.1-options-~"></a><h3 class="help-heading">5.1 Options ~</h3>							      <a name="ft-ada-options"></a><code class="help-tag-right">ft-ada-options</code></div>
<div class="old-help-para">							<a name="g%3Aada_standard_types"></a><code class="help-tag-right">g:ada_standard_types</code>
g:ada_standard_types	bool (true when exists)
		Highlight types in package Standard (e.g., "Float").</div>
<div class="old-help-para">							  <a name="g%3Aada_space_errors"></a><code class="help-tag-right">g:ada_space_errors</code>
						  <a name="g%3Aada_no_trail_space_error"></a><code class="help-tag-right">g:ada_no_trail_space_error</code>
						    <a name="g%3Aada_no_tab_space_error"></a><code class="help-tag-right">g:ada_no_tab_space_error</code>
							 <a name="g%3Aada_all_tab_usage"></a><code class="help-tag-right">g:ada_all_tab_usage</code>
g:ada_space_errors	 bool (true when exists)
		Highlight extraneous errors in spaces ...
		g:ada_no_trail_space_error
<div class="help-li" style=""> but ignore trailing spaces at the end of a line
		g:ada_no_tab_space_error
</div><div class="help-li" style=""> but ignore tabs after spaces
		g:ada_all_tab_usage
</div><div class="help-li" style="margin-left: 3rem;"> highlight all tab use
</div></div>
<div class="old-help-para">							   <a name="g%3Aada_line_errors"></a><code class="help-tag-right">g:ada_line_errors</code>
g:ada_line_errors	  bool (true when exists)
		Highlight lines which are too long. Note: This highlighting
		option is quite CPU intensive.</div>
<div class="old-help-para">							 <a name="g%3Aada_rainbow_color"></a><code class="help-tag-right">g:ada_rainbow_color</code>
g:ada_rainbow_color	  bool (true when exists)
		Use rainbow colours for '(' and ')'. You need the
		rainbow_parenthesis for this to work.</div>
<div class="old-help-para">							       <a name="g%3Aada_folding"></a><code class="help-tag-right">g:ada_folding</code>
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
		    'i':    activate indent folding on load</div>
<div class="old-help-para">		Note: Syntax folding is in an early (unusable) stage and
		      indent or gnat pretty folding is suggested.</div>
<div class="old-help-para">		For gnat pretty folding to work the following settings are
		suggested: -cl3 -M79 -c2 -c3 -c4 -A1 -A2 -A3 -A4 -A5</div>
<div class="old-help-para">		For indent folding to work the following settings are
		suggested: shiftwidth=3 softtabstop=3</div>
<div class="old-help-para">								<a name="g%3Aada_abbrev"></a><code class="help-tag-right">g:ada_abbrev</code>
g:ada_abbrev		  bool (true when exists)
		Add some abbreviations. This feature is more or less superseded
		by the various completion methods.</div>
<div class="old-help-para">						      <a name="g%3Aada_withuse_ordinary"></a><code class="help-tag-right">g:ada_withuse_ordinary</code>
g:ada_withuse_ordinary	  bool (true when exists)
		Show "with" and "use" as ordinary keywords (when used to
		reference other compilation units they're normally highlighted
		specially).</div>
<div class="old-help-para">							 <a name="g%3Aada_begin_preproc"></a><code class="help-tag-right">g:ada_begin_preproc</code>
g:ada_begin_preproc	  bool (true when exists)
		Show all begin-like keywords using the colouring of C
		preprocessor commands.</div>
<div class="old-help-para">						    <a name="g%3Aada_omni_with_keywords"></a><code class="help-tag-right">g:ada_omni_with_keywords</code>
g:ada_omni_with_keywords
		Add Keywords, Pragmas, Attributes to omni-completions
		(<a href="/neovim-docs-web/en/insert#compl-omni">compl-omni</a>). Note: You can always complete then with user
		completion (<a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-U">i_CTRL-X_CTRL-U</a>).</div>
<div class="old-help-para">						      <a name="g%3Aada_extended_tagging"></a><code class="help-tag-right">g:ada_extended_tagging</code>
g:ada_extended_tagging	  enum ("jump", "list")
		use extended tagging, two options are available
		    "jump": use tjump to jump.
		    "list": add tags quick fix list.
		Normal tagging does not support function or operator
		overloading as these features are not available in C and
		tagging was originally developed for C.</div>
<div class="old-help-para">						   <a name="g%3Aada_extended_completion"></a><code class="help-tag-right">g:ada_extended_completion</code>
g:ada_extended_completion
		Uses extended completion for <code>&lt;C-N&gt;</code> and <code>&lt;C-R&gt;</code> completions
		(<a href="/neovim-docs-web/en/insert#i_CTRL-N">i_CTRL-N</a>). In this mode the '.' is used as part of the
		identifier so that 'Object.Method' or 'Package.Procedure' are
		completed together.</div>
<div class="old-help-para">						       <a name="g%3Aada_gnat_extensions"></a><code class="help-tag-right">g:ada_gnat_extensions</code>
g:ada_gnat_extensions	  bool (true when exists)
		 Support GNAT extensions.</div>
<div class="old-help-para">					       <a name="g%3Aada_with_gnat_project_files"></a><code class="help-tag-right">g:ada_with_gnat_project_files</code>
g:ada_with_gnat_project_files	 bool (true when exists)
		 Add gnat project file keywords and Attributes.</div>
<div class="old-help-para">						      <a name="g%3Aada_default_compiler"></a><code class="help-tag-right">g:ada_default_compiler</code>
g:ada_default_compiler	  string
		set default compiler. Currently supported are "gnat" and
		"decada".</div>
<div class="old-help-para">An "exists" type is a boolean considered true when the variable is defined and
false when the variable is undefined. The value to which the variable is set
makes no difference.</div>
<div class="old-help-para"><a name="_-5.2-commands-~"></a><h3 class="help-heading">5.2 Commands ~</h3>							     <a name="ft-ada-commands"></a><code class="help-tag-right">ft-ada-commands</code></div>
<div class="old-help-para">:AdaRainbow							 <a name="%3AAdaRainbow"></a><code class="help-tag-right">:AdaRainbow</code>
		Toggles rainbow colour (<a href="/neovim-docs-web/en/ft_ada#g%3Aada_rainbow_color">g:ada_rainbow_color</a>) mode for
		'(' and ')'.</div>
<div class="old-help-para">:AdaLines							   <a name="%3AAdaLines"></a><code class="help-tag-right">:AdaLines</code>
		Toggles line error (<a href="/neovim-docs-web/en/ft_ada#g%3Aada_line_errors">g:ada_line_errors</a>) display.</div>
<div class="old-help-para">:AdaSpaces							  <a name="%3AAdaSpaces"></a><code class="help-tag-right">:AdaSpaces</code>
		Toggles space error (<a href="/neovim-docs-web/en/ft_ada#g%3Aada_space_errors">g:ada_space_errors</a>) display.</div>
<div class="old-help-para">:AdaTagDir							  <a name="%3AAdaTagDir"></a><code class="help-tag-right">:AdaTagDir</code>
		Creates tags file for the directory of the current file.</div>
<div class="old-help-para">:AdaTagFile							 <a name="%3AAdaTagFile"></a><code class="help-tag-right">:AdaTagFile</code>
		Creates tags file for the current file.</div>
<div class="old-help-para">:AdaTypes							   <a name="%3AAdaTypes"></a><code class="help-tag-right">:AdaTypes</code>
		Toggles standard types (<a href="/neovim-docs-web/en/ft_ada#g%3Aada_standard_types">g:ada_standard_types</a>) colour.</div>
<div class="old-help-para">:GnatFind							   <a name="%3AGnatFind"></a><code class="help-tag-right">:GnatFind</code>
		Calls <a href="/neovim-docs-web/en/ft_ada#g%3Agnat.Find()">g:gnat.Find()</a></div>
<div class="old-help-para">:GnatPretty							 <a name="%3AGnatPretty"></a><code class="help-tag-right">:GnatPretty</code>
		Calls <a href="/neovim-docs-web/en/ft_ada#g%3Agnat.Pretty()">g:gnat.Pretty()</a></div>
<div class="old-help-para">:GnatTags							   <a name="%3AGnatTags"></a><code class="help-tag-right">:GnatTags</code>
		Calls <a href="/neovim-docs-web/en/ft_ada#g%3Agnat.Tags()">g:gnat.Tags()</a></div>
<div class="old-help-para"><a name="_-5.3-variables-~"></a><h3 class="help-heading">5.3 Variables ~</h3>							    <a name="ft-ada-variables"></a><code class="help-tag-right">ft-ada-variables</code></div>
<div class="old-help-para">								      <a name="g%3Agnat"></a><code class="help-tag-right">g:gnat</code>
g:gnat			    object
		Control object which manages GNAT compiles.  The object
		is created when the first Ada source code is loaded provided
		that <a href="/neovim-docs-web/en/ft_ada#g%3Aada_default_compiler">g:ada_default_compiler</a> is set to "gnat". See
		<a href="/neovim-docs-web/en/ft_ada#gnat_members">gnat_members</a> for details.</div>
<div class="old-help-para">								    <a name="g%3Adecada"></a><code class="help-tag-right">g:decada</code>
g:decada		      object
		Control object which manages Dec Ada compiles.	The object
		is created when the first Ada source code is loaded provided
		that <a href="/neovim-docs-web/en/ft_ada#g%3Aada_default_compiler">g:ada_default_compiler</a> is set to "decada". See
		<a href="/neovim-docs-web/en/ft_ada#decada_members">decada_members</a> for details.</div>
<div class="old-help-para"><a name="_-5.4-constants-~"></a><h3 class="help-heading">5.4 Constants ~</h3>							    <a name="ft-ada-constants"></a><code class="help-tag-right">ft-ada-constants</code></div>
<div class="old-help-para">All constants are locked. See <a href="/neovim-docs-web/en/eval#%3Alockvar">:lockvar</a> for details.</div>
<div class="old-help-para">							     <a name="g%3Aada%23WordRegex"></a><code class="help-tag-right">g:ada#WordRegex</code>
g:ada#WordRegex		string
		Regular expression to search for Ada words.</div>
<div class="old-help-para">							  <a name="g%3Aada%23DotWordRegex"></a><code class="help-tag-right">g:ada#DotWordRegex</code>
g:ada#DotWordRegex	string
		Regular expression to search for Ada words separated by dots.</div>
<div class="old-help-para">							       <a name="g%3Aada%23Comment"></a><code class="help-tag-right">g:ada#Comment</code>
g:ada#Comment		string
		Regular expression to search for Ada comments.</div>
<div class="old-help-para">							      <a name="g%3Aada%23Keywords"></a><code class="help-tag-right">g:ada#Keywords</code>
g:ada#Keywords		list of dictionaries
		List of keywords, attributes etc. pp. in the format used by
		omni completion. See <a href="/neovim-docs-web/en/insert#complete-items">complete-items</a> for details.</div>
<div class="old-help-para">							   <a name="g%3Aada%23Ctags_Kinds"></a><code class="help-tag-right">g:ada#Ctags_Kinds</code>
g:ada#Ctags_Kinds	dictionary of lists
		Dictionary of the various kinds of items which the Ada support
		for Ctags generates.</div>
<div class="old-help-para"><a name="_-5.5-functions-~"></a><h3 class="help-heading">5.5 Functions ~</h3>							    <a name="ft-ada-functions"></a><code class="help-tag-right">ft-ada-functions</code></div>
<div class="old-help-para">ada#Word([{line}, <code>{col}</code>])					  <a name="ada%23Word()"></a><code class="help-tag-right">ada#Word()</code>
		Return full name of Ada entity under the cursor (or at given
		line/column), stripping white space/newlines as necessary.</div>
<div class="old-help-para">ada#List_Tag([{line}, <code>{col}</code>])				      <a name="ada%23Listtags()"></a><code class="help-tag-right">ada#Listtags()</code>
		List all occurrences of the Ada entity under the cursor (or at
		given line/column) inside the quick-fix window.</div>
<div class="old-help-para">ada#Jump_Tag (<code>{ident}</code>, <code>{mode}</code>)				      <a name="ada%23Jump_Tag()"></a><code class="help-tag-right">ada#Jump_Tag()</code>
		List all occurrences of the Ada entity under the cursor (or at
		given line/column) in the tag jump list. Mode can either be
		"tjump" or "stjump".</div>
<div class="old-help-para">ada#Create_Tags (<code>{option}</code>)				   <a name="ada%23Create_Tags()"></a><code class="help-tag-right">ada#Create_Tags()</code>
		Creates tag file using Ctags. The option can either be "file"
		for the current file, "dir" for the directory of the current
		file or a file name.</div>
<div class="old-help-para">gnat#Insert_Tags_Header()			   <a name="gnat%23Insert_Tags_Header()"></a><code class="help-tag-right">gnat#Insert_Tags_Header()</code>
		Adds the tag file header (!_TAG_) information to the current
		file which are missing from the GNAT XREF output.</div>
<div class="old-help-para">ada#Switch_Syntax_Option (<code>{option}</code>)		  <a name="ada%23Switch_Syntax_Option()"></a><code class="help-tag-right">ada#Switch_Syntax_Option()</code>
		Toggles highlighting options on or off. Used for the Ada menu.</div>
<div class="old-help-para">								  <a name="gnat%23New()"></a><code class="help-tag-right">gnat#New()</code>
gnat#New ()
		Create a new gnat object. See <a href="/neovim-docs-web/en/ft_ada#g%3Agnat">g:gnat</a> for details.</div>
<div class="old-help-para"><a name="_-6.-extra-plugins-~"></a><h2 class="help-heading">6. Extra Plugins ~</h2>							   <a name="ada-extra-plugins"></a><code class="help-tag-right">ada-extra-plugins</code></div>
<div class="old-help-para">You can optionally install the following extra plug-ins. They work well with
Ada and enhance the ability of the Ada mode:</div>
<div class="old-help-para">backup.vim
	<a href="https://www.vim.org/scripts/script.php?script_id=1537">https://www.vim.org/scripts/script.php?script_id=1537</a>
	Keeps as many backups as you like so you don't have to.</div>
<div class="old-help-para">rainbow_parenthesis.vim
	<a href="https://www.vim.org/scripts/script.php?script_id=1561">https://www.vim.org/scripts/script.php?script_id=1561</a>
	Very helpful since Ada uses only '(' and ')'.</div>
<div class="old-help-para">nerd_comments.vim
	<a href="https://www.vim.org/scripts/script.php?script_id=1218">https://www.vim.org/scripts/script.php?script_id=1218</a>
	Excellent commenting and uncommenting support for almost any
	programming language.</div>
<div class="old-help-para">matchit.vim
	<a href="https://www.vim.org/scripts/script.php?script_id=39">https://www.vim.org/scripts/script.php?script_id=39</a>
	'%' jumping for any language. The normal '%' jump only works for '{}'
	style languages. The Ada mode will set the needed search patterns.</div>
<div class="old-help-para">taglist.vim
	<a href="https://www.vim.org/scripts/script.php?script_id=273">https://www.vim.org/scripts/script.php?script_id=273</a>
	Source code explorer sidebar. There is a patch for Ada available.</div>
<div class="old-help-para">The GNU Ada Project distribution (<a href="http://gnuada.sourceforge.net">http://gnuada.sourceforge.net</a>) of Vim
contains all of the above.</div>
<div class="old-help-para"><a name="_-vim:-textwidth=78-nowrap-tabstop=8-shiftwidth=4-softtabstop=4-noexpandtab"></a><h2 class="help-heading">vim: textwidth=78 nowrap tabstop=8 shiftwidth=4 softtabstop=4 noexpandtab</h2></div>

  
  