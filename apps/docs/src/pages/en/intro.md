---
title:  Intro
layout: ../../layouts/MainLayout.astro
---

  <a name="intro.txt"></a><a name="ref"></a><h1> Intro</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/intro.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Nvim <a name="reference"></a><code class="help-tag">reference</code></div>
<div class="old-help-para"><h2 class="help-heading">Introduction<span class="help-heading-tags">						<a name="intro"></a><span class="help-tag">intro</span></span></h2></div>
<div class="old-help-para">Vim is a text editor which includes most commands from the Unix program "Vi"
and many new ones.</div>
<div class="old-help-para">An overview of this manual can be found in the file "help.txt", <a href="index.html#help.txt">help.txt</a>.
It can be accessed from within Vim with the <code>&lt;Help&gt;</code> or <code>&lt;F1&gt;</code> key and with the
<a href="helphelp.html#%3Ahelp">:help</a> command (just type ":help", without the bars or quotes).
   The <a href="options.html#'helpfile'">'helpfile'</a> option can be set to the name of the help file, in case it
is not located in the default place.  You can jump to subjects like with tags:
Use <code>CTRL-]</code> to jump to a subject under the cursor, use <code>CTRL-T</code> to jump back.</div>
<div class="old-help-para">							<a name="pronounce"></a><code class="help-tag-right">pronounce</code>
Vim is pronounced as one word, like Jim.  So Nvim is N-Jim, which sounds like
"Ninja".  Starting Nvim is like performing a roundhouse kick.</div>
<div class="old-help-para">This manual is a reference for all Nvim editor and API features.  It is not an
introduction; instead for beginners, there is a hands-on <a href="usr_01.html#tutor">tutor</a> and a user
manual <a href="usr_toc.html#usr_toc.txt">usr_toc.txt</a>.</div>
<div class="old-help-para">							<a name="book"></a><code class="help-tag-right">book</code>
There are many books on Vi and Vim.  We recommend:</div>
<div class="old-help-para">	"Practical Vim" by Drew Neil
	"Modern Vim" by Drew Neil
	<a href="https://vimcasts.org/publications/">https://vimcasts.org/publications/</a></div>
<div class="old-help-para">"Practical Vim" is acclaimed for its focus on quickly learning common editing
tasks with Vim.  "Modern Vim" explores new features in Nvim and Vim 8.</div>
<div class="old-help-para">	"Vim - Vi Improved" by Steve Oualline</div>
<div class="old-help-para">This was the first book dedicated to Vim.  Parts of it were included in the
user manual. <a href="usr_01.html#frombook">frombook</a>  ISBN: 0735710015
For more information try one of these:
	<a href="https://iccf-holland.org/click5.html">https://iccf-holland.org/click5.html</a>
	<a href="https://www.vim.org/iccf/click5.html">https://www.vim.org/iccf/click5.html</a></div>
<div class="old-help-para"><h2 class="help-heading">Nvim on the interwebs<span class="help-heading-tags">					<a name="internet"></a><span class="help-tag">internet</span></span></h2></div>
<div class="old-help-para">			<a name="www"></a><code class="help-tag-right">www</code> <a name="faq"></a><code class="help-tag">faq</code> <a name="distribution"></a><code class="help-tag">distribution</code> <a name="download"></a><code class="help-tag">download</code></div>
<div class="old-help-para">	Nvim home page:	  <a href="https://neovim.io/">https://neovim.io/</a>
	Nvim FAQ:	  <a href="https://github.com/neovim/neovim/wiki/FAQ">https://github.com/neovim/neovim/wiki/FAQ</a>
	Downloads:	  <a href="https://github.com/neovim/neovim/releases">https://github.com/neovim/neovim/releases</a>
	Vim FAQ:	  <a href="https://vimhelp.org/vim_faq.txt.html">https://vimhelp.org/vim_faq.txt.html</a></div>
<div class="old-help-para">			<a name="bugs"></a><code class="help-tag-right">bugs</code> <a name="bug-report"></a><code class="help-tag">bug-report</code>
Report bugs and request features here:
<a href="https://github.com/neovim/neovim/issues">https://github.com/neovim/neovim/issues</a></div>
<div class="old-help-para">Be brief, yet complete.  Always give a reproducible example and try to find
out which settings or other things trigger the bug.</div>
<div class="old-help-para">If Nvim crashes, try to get a backtrace.  See <a href="debug.html#debug.txt">debug.txt</a>.</div>
<div class="old-help-para"><h2 class="help-heading">Sponsor Vim/Nvim development<span class="help-heading-tags">				<a name="sponsor"></a><span class="help-tag">sponsor</span> <a name="register"></a><span class="help-tag">register</span></span></h2></div>
<div class="old-help-para">Fixing bugs and adding new features takes a lot of time and effort.  To show
your appreciation for the work and motivate Bram and others to continue
working on Vim please send a donation.</div>
<div class="old-help-para">Since Bram is back to a paid job the money will now be used to help children
in Uganda.  See <a href="uganda.html#uganda">uganda</a>.  But at the same time donations increase Bram's
motivation to keep working on Vim!</div>
<div class="old-help-para">For the most recent information about sponsoring look on the Vim web site:</div>
<div class="old-help-para">	<a href="https://www.vim.org/sponsor/">https://www.vim.org/sponsor/</a></div>
<div class="old-help-para">Neovim development is funded separately from Vim:</div>
<div class="old-help-para">	<a href="https://neovim.io/#sponsor">https://neovim.io/#sponsor</a></div>
<div class="old-help-para"><h2 class="help-heading">Credits<span class="help-heading-tags">				<a name="credits"></a><span class="help-tag">credits</span></span></h2></div>
<div class="old-help-para">Most of Vim was written by Bram Moolenaar &lt;Bram@vim.org&gt;.</div>
<div class="old-help-para">Parts of the documentation come from several Vi manuals, written by:
	W.N. Joy
	Alan P.W. Hewett
	Mark Horton</div>
<div class="old-help-para">The Vim editor is based on Stevie and includes (ideas from) other software,
worked on by the people mentioned here.  Other people helped by sending me
patches, suggestions and giving feedback about what is good and bad in Vim.</div>
<div class="old-help-para">Vim would never have become what it is now, without the help of these people!</div>
<div class="old-help-para">	Ron Aaron		Win32 GUI changes
	Mohsin Ahmed		encryption
	Zoltan Arpadffy		work on VMS port
	Tony Andrews		Stevie
	Gert van Antwerpen	changes for DJGPP on MS-DOS
	Berkeley DB(3)		ideas for swap file implementation
	Keith Bostic		Nvi
	Walter Briscoe		Makefile updates, various patches
	Ralf Brown		SPAWNO library for MS-DOS
	Robert Colon		many useful remarks
	Marcin Dalecki		GTK+ GUI port, toolbar icons, gettext()
	Kayhan Demirel		sent me news in Uganda
	Chris &amp; John Downey	xvi (ideas for multi-windows version)
	Henk Elbers		first VMS port
	Daniel Elstner		GTK+ 2 port
	Eric Fischer		Mac port, <a href="options.html#'cindent'">'cindent'</a>, and other improvements
	Benji Fisher		Answering lots of user questions
	Bill Foster		Athena GUI port (later removed)
	Google			Lets me work on Vim one day a week
	Loic Grenie		xvim (ideas for multi windows version)
	Sven Guckes		Vim promoter and previous WWW page maintainer
	Darren Hiebert		Exuberant ctags
	Jason Hildebrand	GTK+ 2 port
	Bruce Hunsaker		improvements for VMS port
	Andy Kahn		Cscope support, GTK+ GUI port
	Oezguer Kesim		Maintainer of Vim Mailing Lists
	Axel Kielhorn		work on the Macintosh port
	Steve Kirkendall	Elvis
	Roger Knobbe		original port to Windows NT
	Sergey Laskavy		Vim's help from Moscow
	Felix von Leitner	Previous maintainer of Vim Mailing Lists
	David Leonard		Port of Python extensions to Unix
	Avner Lottem		Edit in right-to-left windows
	Flemming Madsen		X11 client-server, various features and patches
	Tony Mechelynck		answers many user questions
	Paul Moore		Python interface extensions, many patches
	Katsuhito Nagano	Work on multibyte versions
	Sung-Hyun Nam		Work on multibyte versions
	Vince Negri		Win32 GUI and generic console enhancements
	Steve Oualline		Author of the first Vim book <a href="usr_01.html#frombook">frombook</a>
	Dominique Pelle		Valgrind reports and many fixes
	A.Politz		Many bug reports and some fixes
	George V. Reilly	Win32 port, Win32 GUI start-off
	Stephen Riehm		bug collector
	Stefan Roemer		various patches and help to users
	Ralf Schandl		IBM OS/390 port
	Olaf Seibert		DICE and BeBox version, regexp improvements
	Mortaza Shiran		Farsi patches
	Peter da Silva		termlib
	Paul Slootman		OS/2 port
	Henry Spencer		regular expressions
	Dany St-Amant		Macintosh port
	Tim Thompson		Stevie
	G. R. (Fred) Walter	Stevie
	Sven Verdoolaege	Perl interface
	Robert Webb		Command-line completion, GUI versions, and
				lots of patches
	Ingo Wilken		Tcl interface
	Mike Williams		PostScript printing
	Juergen Weigert		Lattice version, AUX improvements, Unix and
				MS-DOS ports, autoconf
	Stefan 'Sec' Zehl	Maintainer of vim.org
	Yasuhiro Matsumoto	many MS-Windows improvements
	Ken Takata		fixes and features
	Kazunobu Kuriyama	GTK 3
	Christian Brabandt	many fixes, features, user support, etc.
	Yegappan Lakshmanan	many quickfix features</div>
<div class="old-help-para">I wish to thank all the people that sent me bug reports and suggestions.  The
list is too long to mention them all here.  Vim would not be the same without
the ideas from all these people: They keep Vim alive!
<a name="love"></a><code class="help-tag">love</code> <a name="peace"></a><code class="help-tag">peace</code> <a name="friendship"></a><code class="help-tag">friendship</code> <a name="gross-national-happiness"></a><code class="help-tag">gross-national-happiness</code></div>
<div class="old-help-para">Documentation may refer to other versions of Vi:
							<a name="Vi"></a><code class="help-tag-right">Vi</code> <a name="vi"></a><code class="help-tag">vi</code>
Vi	"the original".  Without further remarks this is the version
	of Vi that appeared in Sun OS 4.x.  ":version" returns
	"Version 3.7, 6/7/85".  Source code only available with a license.
							<a name="Nvi"></a><code class="help-tag-right">Nvi</code>
Nvi	The "New" Vi.  The version of Vi that comes with BSD 4.4 and FreeBSD.
	Very good compatibility with the original Vi, with a few extensions.
	The version used is 1.79.  ":version" returns "Version 1.79
	(10/23/96)".  Source code is freely available.
							<a name="Elvis"></a><code class="help-tag-right">Elvis</code>
Elvis	Another Vi clone, made by Steve Kirkendall.  Very compact but isn't
	as flexible as Vim.  Source code is freely available.</div>
<div class="old-help-para">Vim	Nvim is based on Vim.  <a href="https://www.vim.org/">https://www.vim.org/</a></div>
<div class="old-help-para"><h2 class="help-heading">Notation<span class="help-heading-tags">						<a name="notation"></a><span class="help-tag">notation</span></span></h2></div>
<div class="old-help-para">When syntax highlighting is used to read this, text that is not typed
literally is often highlighted with the Special group.  These are items in [],
{} and &lt;&gt;, and <code>CTRL-X</code>.</div>
<div class="old-help-para">Note that Vim uses all possible characters in commands.  Sometimes the [], {}
and &lt;&gt; are part of what you type, the context should make this clear.</div>
<div class="old-help-para">[]		Characters in square brackets are optional.</div>
<div class="old-help-para">						    <a name="count"></a><code class="help-tag-right">count</code> <a name="%5Bcount%5D"></a><code class="help-tag">[count]</code>
[count]		An optional number that may precede the command to multiply
		or iterate the command.  If no number is given, a count of one
		is used, unless otherwise noted.  Note that in this manual the
		[count] is not mentioned in the description of the command,
		but only in the explanation.  This was done to make the
		commands easier to look up.  If the <a href="options.html#'showcmd'">'showcmd'</a> option is on,
		the (partially) entered count is shown at the bottom of the
		window.  You can use <code>&lt;Del&gt;</code> to erase the last digit (<a href="various.html#N%3CDel%3E">N&lt;Del&gt;</a>).</div>
<div class="old-help-para">							<a name="%5Bquotex%5D"></a><code class="help-tag-right">[quotex]</code>
["x]		An optional register designation where text can be stored.
		See <a href="change.html#registers">registers</a>.  The x is a single character between 'a' and
		'z' or 'A' and 'Z' or '"', and in some cases (with the put
		command) between '0' and '9', '%', '#', or others.  The
		uppercase and lowercase letter designate the same register,
		but the lowercase letter is used to overwrite the previous
		register contents, while the uppercase letter is used to
		append to the previous register contents.  Without the ""x" or
		with """" the stored text is put into the unnamed register.</div>
<div class="old-help-para">							<a name="%7B%7D"></a><code class="help-tag-right">{}</code>
{}		Curly braces denote parts of the command which must appear,
		but which can take a number of different values.  The
		differences between Vim and Vi are also given in curly braces
		(this will be clear from the context).</div>
<div class="old-help-para">							<a name="%7Bchar1-char2%7D"></a><code class="help-tag-right">{char1-char2}</code>
<code>{char1-char2}</code>	A single character from the range char1 to char2.  For
		example: <code>{a-z}</code> is a lowercase letter.  Multiple ranges may be
		concatenated.  For example, <code>{a-zA-Z0-9}</code> is any alphanumeric
		character.</div>
<div class="old-help-para">						<a name="%7Bmotion%7D"></a><code class="help-tag-right">{motion}</code> <a name="movement"></a><code class="help-tag">movement</code>
<code>{motion}</code>	A command that moves the cursor.  These are explained in
		<a href="motion.html#motion.txt">motion.txt</a>.  Examples:
			w		to start of next word
			b		to begin of current word
			4j		four lines down
			/The&lt;CR&gt;	to next occurrence of "The"
		This is used after an <a href="motion.html#operator">operator</a> command to move over the text
		that is to be operated upon.
<div class="help-li" style=""> If the motion includes a count and the operator also has a
		  count, the two counts are multiplied.  For example: "2d3w"
		  deletes six words.
</div><div class="help-li" style=""> The motion can be backwards, e.g. "db" to delete to the
		  start of the word.
</div><div class="help-li" style=""> The motion can also be a mouse click.  The mouse is not
		  supported in every terminal though.
</div><div class="help-li" style=""> The ":omap" command can be used to map characters while an
		  operator is pending.
</div><div class="help-li" style=""> Ex commands can be used to move the cursor.  This can be
		  used to call a function that does some complicated motion.
		  The motion is always charwise exclusive, no matter
		  what ":" command is used.  This means it's impossible to
		  include the last character of a line without the line break
		  (unless <a href="options.html#'virtualedit'">'virtualedit'</a> is set).
		  If the Ex command changes the text before where the operator
		  starts or jumps to another buffer the result is
		  unpredictable.  It is possible to change the text further
		  down.  Jumping to another buffer is possible if the current
		  buffer is not unloaded.
</div></div>
<div class="old-help-para">							<a name="%7BVisual%7D"></a><code class="help-tag-right">{Visual}</code>
<code>{Visual}</code>	A selected text area.  It is started with the "v", "V", or
		<code>CTRL-V</code> command, then any cursor movement command can be used
		to change the end of the selected text.
		This is used before an <a href="motion.html#operator">operator</a> command to highlight the
		text that is to be operated upon.
		See <a href="visual.html#Visual-mode">Visual-mode</a>.</div>
<div class="old-help-para">							<a name="%3Ccharacter%3E"></a><code class="help-tag-right">&lt;character&gt;</code>
<code>&lt;character&gt;</code>	A special character from the table below, optionally with
		modifiers, or a single ASCII character with modifiers.</div>
<div class="old-help-para">							<a name="'character'"></a><code class="help-tag-right">'character'</code>
'c'		A single ASCII character.</div>
<div class="old-help-para">							<a name="CTRL-%7Bchar%7D"></a><code class="help-tag-right">CTRL-{char}</code>
<code>CTRL-{char}</code>	<code>{char}</code> typed as a control character; that is, typing <code>{char}</code>
		while holding the CTRL key down.  The case of <code>{char}</code> is
		ignored; thus <code>CTRL-A</code> and <code>CTRL-a</code> are equivalent.  But in
		some terminals and environments, using the SHIFT key will
		produce a distinct code (e.g. <code>CTRL-SHIFT-a</code>); in these
		environments using the SHIFT key will not trigger commands
		such as <code>CTRL-A</code>.</div>
<div class="old-help-para">							<a name="'option'"></a><code class="help-tag-right">'option'</code>
<a href="intro.html#'option'">'option'</a>	An option, or parameter, that can be set to a value, is
		enclosed in single quotes.  See <a href="options.html#options">options</a>.</div>
<div class="old-help-para">							<a name="quotecommandquote"></a><code class="help-tag-right">quotecommandquote</code>
"command"	A reference to a command that you can type is enclosed in
		double quotes.
<code>command</code>  	New style command, this distinguishes it from other quoted
		text and strings.</div>
<div class="old-help-para">					<a name="key-notation"></a><code class="help-tag-right">key-notation</code> <a name="key-codes"></a><code class="help-tag">key-codes</code> <a name="keycodes"></a><code class="help-tag">keycodes</code>
These names for keys are used in the documentation.  They can also be used
with the ":map" command.</div>
<div class="old-help-para"><div class="help-column_heading">notation	meaning		    equivalent	decimal value(s)</div><div class="help-column_heading">-----------------------------------------------------------------------</div><code>&lt;Nul&gt;</code>		zero			<code>CTRL-@</code>	  0 (stored as 10) <a name="%3CNul%3E"></a><code class="help-tag">&lt;Nul&gt;</code>
<code>&lt;BS&gt;</code>		backspace		<code>CTRL-H</code>	  8	<a name="backspace"></a><code class="help-tag">backspace</code>
<code>&lt;Tab&gt;</code>		tab			<code>CTRL-I</code>	  9	<a name="tab"></a><code class="help-tag">tab</code> <a name="Tab"></a><code class="help-tag">Tab</code>
							<a name="linefeed"></a><code class="help-tag-right">linefeed</code>
<code>&lt;NL&gt;</code>		linefeed		<code>CTRL-J</code>	 10 (used for <code>&lt;Nul&gt;</code>)
<code>&lt;CR&gt;</code>		carriage return		<code>CTRL-M</code>	 13	<a name="carriage-return"></a><code class="help-tag">carriage-return</code>
<code>&lt;Return&gt;</code>	same as <code>&lt;CR&gt;</code>				<a name="%3CReturn%3E"></a><code class="help-tag-right">&lt;Return&gt;</code>
<code>&lt;Enter&gt;</code>		same as <code>&lt;CR&gt;</code>				<a name="%3CEnter%3E"></a><code class="help-tag-right">&lt;Enter&gt;</code>
<code>&lt;Esc&gt;</code>		escape			<code>CTRL-[</code>	 27	<a name="escape"></a><code class="help-tag">escape</code> <a name="%3CEsc%3E"></a><code class="help-tag">&lt;Esc&gt;</code>
<code>&lt;Space&gt;</code>		space				 32	<a name="space"></a><code class="help-tag">space</code>
<code>&lt;lt&gt;</code>		less-than		&lt;	 60	<a name="%3Clt%3E"></a><code class="help-tag">&lt;lt&gt;</code>
<code>&lt;Bslash&gt;</code>	backslash		\	 92	<a name="backslash"></a><code class="help-tag">backslash</code> <a name="%3CBslash%3E"></a><code class="help-tag">&lt;Bslash&gt;</code>
<code>&lt;Bar&gt;</code>		vertical bar		|	124	<a name="%3CBar%3E"></a><code class="help-tag">&lt;Bar&gt;</code>
<code>&lt;Del&gt;</code>		delete				127
<code>&lt;CSI&gt;</code>		command sequence intro  <code>ALT-E</code>sc 155	<a name="%3CCSI%3E"></a><code class="help-tag">&lt;CSI&gt;</code></div>
<div class="old-help-para"><code>&lt;EOL&gt;</code>		end-of-line (can be <code>&lt;CR&gt;</code>, <code>&lt;NL&gt;</code> or <code>&lt;CR&gt;</code><code>&lt;NL&gt;</code>,
		depends on system and <a href="options.html#'fileformat'">'fileformat'</a>)	<a name="%3CEOL%3E"></a><code class="help-tag">&lt;EOL&gt;</code>
<code>&lt;Ignore&gt;</code>	cancel wait-for-character		<a name="%3CIgnore%3E"></a><code class="help-tag-right">&lt;Ignore&gt;</code>
<code>&lt;NOP&gt;</code>		no-op: do nothing (useful in mappings)	<a name="%3CNop%3E"></a><code class="help-tag">&lt;Nop&gt;</code></div>
<div class="old-help-para"><code>&lt;Up&gt;</code>		cursor-up			<a name="cursor-up"></a><code class="help-tag-right">cursor-up</code> <a name="cursor_up"></a><code class="help-tag">cursor_up</code>
<code>&lt;Down&gt;</code>		cursor-down			<a name="cursor-down"></a><code class="help-tag-right">cursor-down</code> <a name="cursor_down"></a><code class="help-tag">cursor_down</code>
<code>&lt;Left&gt;</code>		cursor-left			<a name="cursor-left"></a><code class="help-tag-right">cursor-left</code> <a name="cursor_left"></a><code class="help-tag">cursor_left</code>
<code>&lt;Right&gt;</code>		cursor-right			<a name="cursor-right"></a><code class="help-tag-right">cursor-right</code> <a name="cursor_right"></a><code class="help-tag">cursor_right</code>
<code>&lt;S-Up&gt;</code>		shift-cursor-up
<code>&lt;S-Down&gt;</code>	shift-cursor-down
<code>&lt;S-Left&gt;</code>	shift-cursor-left
<code>&lt;S-Right&gt;</code>	shift-cursor-right
<code>&lt;C-Left&gt;</code>	control-cursor-left
<code>&lt;C-Right&gt;</code>	control-cursor-right
<code>&lt;F1&gt;</code> - <code>&lt;F12&gt;</code>	function keys 1 to 12		<a name="function_key"></a><code class="help-tag-right">function_key</code> <a name="function-key"></a><code class="help-tag">function-key</code>
<code>&lt;S-F1&gt;</code> - <code>&lt;S-F12&gt;</code> shift-function keys 1 to 12	<a name="%3CS-F1%3E"></a><code class="help-tag">&lt;S-F1&gt;</code>
<code>&lt;Help&gt;</code>		help key
<code>&lt;Undo&gt;</code>		undo key
<code>&lt;Insert&gt;</code>	insert key
<code>&lt;Home&gt;</code>		home				<a name="home"></a><code class="help-tag-right">home</code>
<code>&lt;End&gt;</code>		end				<a name="end"></a><code class="help-tag-right">end</code>
<code>&lt;PageUp&gt;</code>	page-up				<a name="page_up"></a><code class="help-tag-right">page_up</code> <a name="page-up"></a><code class="help-tag">page-up</code>
<code>&lt;PageDown&gt;</code>	page-down			<a name="page_down"></a><code class="help-tag-right">page_down</code> <a name="page-down"></a><code class="help-tag">page-down</code>
<code>&lt;kUp&gt;</code>		keypad cursor-up		<a name="keypad-cursor-up"></a><code class="help-tag-right">keypad-cursor-up</code>
<code>&lt;kDown&gt;</code>		keypad cursor-down		<a name="keypad-cursor-down"></a><code class="help-tag-right">keypad-cursor-down</code>
<code>&lt;kLeft&gt;</code>		keypad cursor-left		<a name="keypad-cursor-left"></a><code class="help-tag-right">keypad-cursor-left</code>
<code>&lt;kRight&gt;</code>	keypad cursor-right		<a name="keypad-cursor-right"></a><code class="help-tag-right">keypad-cursor-right</code>
<code>&lt;kHome&gt;</code>		keypad home (upper left)	<a name="keypad-home"></a><code class="help-tag">keypad-home</code>
<code>&lt;kEnd&gt;</code>		keypad end (lower left)		<a name="keypad-end"></a><code class="help-tag-right">keypad-end</code>
<code>&lt;kOrigin&gt;</code>	keypad origin (middle)		<a name="keypad-origin"></a><code class="help-tag-right">keypad-origin</code>
<code>&lt;kPageUp&gt;</code>	keypad page-up (upper right)	<a name="keypad-page-up"></a><code class="help-tag">keypad-page-up</code>
<code>&lt;kPageDown&gt;</code>	keypad page-down (lower right)	<a name="keypad-page-down"></a><code class="help-tag">keypad-page-down</code>
<code>&lt;kDel&gt;</code>		keypad delete 			<a name="keypad-delete"></a><code class="help-tag-right">keypad-delete</code>
<code>&lt;kPlus&gt;</code>		keypad +			<a name="keypad-plus"></a><code class="help-tag-right">keypad-plus</code>
<code>&lt;kMinus&gt;</code>	keypad -				<a name="keypad-minus"></a><code class="help-tag-right">keypad-minus</code>
<code>&lt;kMultiply&gt;</code>	keypad *			<a name="keypad-multiply"></a><code class="help-tag-right">keypad-multiply</code>
<code>&lt;kDivide&gt;</code>	keypad /			<a name="keypad-divide"></a><code class="help-tag-right">keypad-divide</code>
<code>&lt;kPoint&gt;</code>	keypad .			<a name="keypad-point"></a><code class="help-tag-right">keypad-point</code>
<code>&lt;kComma&gt;</code>	keypad ,			<a name="keypad-comma"></a><code class="help-tag-right">keypad-comma</code>
<code>&lt;kEqual&gt;</code>	keypad =			<a name="keypad-equal"></a><code class="help-tag-right">keypad-equal</code>
<code>&lt;kEnter&gt;</code>	keypad Enter			<a name="keypad-enter"></a><code class="help-tag-right">keypad-enter</code>
<code>&lt;k0&gt;</code> - <code>&lt;k9&gt;</code>	keypad 0 to 9			<a name="keypad-0"></a><code class="help-tag-right">keypad-0</code> <a name="keypad-9"></a><code class="help-tag">keypad-9</code>
<code>&lt;S-…&gt;</code>		shift-key			<a name="shift"></a><code class="help-tag-right">shift</code> <a name="%3CS-"></a><code class="help-tag">&lt;S-</code>
<code>&lt;C-…&gt;</code>		control-key			<a name="control"></a><code class="help-tag-right">control</code> <a name="ctrl"></a><code class="help-tag">ctrl</code> <a name="%3CC-"></a><code class="help-tag">&lt;C-</code>
<code>&lt;M-…&gt;</code>		alt-key or meta-key		<a name="META"></a><code class="help-tag-right">META</code> <a name="ALT"></a><code class="help-tag">ALT</code> <a name="%3CM-"></a><code class="help-tag">&lt;M-</code>
<code>&lt;A-…&gt;</code>		same as <code>&lt;M-…&gt;</code>			<a name="%3CA-"></a><code class="help-tag-right">&lt;A-</code>
<code>&lt;D-…&gt;</code>		command-key or "super" key	<a name="%3CD-"></a><code class="help-tag">&lt;D-</code>
<div class="help-column_heading">-----------------------------------------------------------------------</div></div>
<div class="old-help-para">Note:</div>
<div class="old-help-para"><div class="help-li" style=""> Availability of some keys (<code>&lt;Help&gt;</code>, <code>&lt;S-Right&gt;</code>, …) depends on the UI or host
  terminal.
</div><div class="help-li" style=""> If numlock is on the <a href="term.html#TUI">TUI</a> receives plain ASCII values, so mapping <code>&lt;k0&gt;</code>,
  <code>&lt;k1&gt;</code>, ..., <code>&lt;k9&gt;</code> and <code>&lt;kPoint&gt;</code> will not work.
</div><div class="help-li" style=""> Nvim supports mapping multibyte chars with modifiers such as <code>&lt;M-ä&gt;</code>. Which
  combinations actually work depends on the the UI or host terminal.
</div><div class="help-li" style=""> When a key is pressed using a meta or alt modifier and no mapping exists for
  that keypress, Nvim may behave as though <code>&lt;Esc&gt;</code> was pressed before the key.
</div><div class="help-li" style=""> It is possible to notate combined modifiers (e.g. <code>&lt;C-A-T&gt;</code> for <code>CTRL-A</code>LT-T),
  but your terminal must encode the input for that to work. <a href="term.html#tui-input">tui-input</a>
</div></div>
<div class="old-help-para">								<a name="%3C%3E"></a><code class="help-tag-right">&lt;&gt;</code>
Examples are often given in the &lt;&gt; notation.  Sometimes this is just to make
clear what you need to type, but often it can be typed literally, e.g., with
the ":map" command.  The rules are:
 1.  Printable characters are typed directly, except backslash and "&lt;"
 2.  Backslash is represented with "\\", double backslash, or "&lt;Bslash&gt;".
 3.  Literal "&lt;" is represented with "\&lt;" or "&lt;lt&gt;".  When there is no
     confusion possible, "&lt;" can be used directly.
 4.  "&lt;key&gt;" means the special key typed (see the table above).  Examples:
	   <code>&lt;Esc&gt;</code>		Escape key
	   <code>&lt;C-G&gt;</code>		<code>CTRL-G</code>
	   <code>&lt;Up&gt;</code>			cursor up key
	   <code>&lt;C-LeftMouse&gt;</code>	Control- left mouse click
	   <code>&lt;S-F11&gt;</code>		Shifted function key 11
	   <code>&lt;M-a&gt;</code>		Meta- a  ('a' with bit 8 set)
	   <code>&lt;M-A&gt;</code>		Meta- A  ('A' with bit 8 set)</div>
<div class="old-help-para">The &lt;&gt; notation uses <code>&lt;lt&gt;</code> to escape the special meaning of key names.  Using a
backslash also works, but only when <a href="options.html#'cpoptions'">'cpoptions'</a> does not include the 'B' flag.</div>
<div class="old-help-para">Examples for mapping <code>CTRL-H</code> to the six characters "&lt;Home&gt;":<pre>:imap &lt;C-H&gt; \&lt;Home&gt;
:imap &lt;C-H&gt; &lt;lt&gt;Home&gt;</pre>
The first one only works when the 'B' flag is not in <a href="options.html#'cpoptions'">'cpoptions'</a>.  The second
one always works.
To get a literal "&lt;lt&gt;" in a mapping:<pre>:map &lt;C-L&gt; &lt;lt&gt;lt&gt;</pre>
The notation can be used in a double quoted strings, using "\&lt;" at the start,
e.g. "\&lt;C-Space&gt;".  This results in a special key code.  To convert this back
to readable text use <code>keytrans()</code>.</div>
<div class="old-help-para"><h2 class="help-heading">Modes, introduction<span class="help-heading-tags">				<a name="vim-modes-intro"></a><span class="help-tag">vim-modes-intro</span> <a name="vim-modes"></a><span class="help-tag">vim-modes</span></span></h2></div>
<div class="old-help-para">Vim has seven BASIC modes:</div>
<div class="old-help-para">					<a name="Normal"></a><code class="help-tag-right">Normal</code> <a name="Normal-mode"></a><code class="help-tag">Normal-mode</code> <a name="command-mode"></a><code class="help-tag">command-mode</code>
Normal mode		In Normal mode you can enter all the normal editor
			commands.  If you start the editor you are in this
			mode.  This is also known as command mode.</div>
<div class="old-help-para">Visual mode		This is like Normal mode, but the movement commands
			extend a highlighted area.  When a non-movement
			command is used, it is executed for the highlighted
			area.  See <a href="visual.html#Visual-mode">Visual-mode</a>.
			If the <a href="options.html#'showmode'">'showmode'</a> option is on "-- VISUAL --" is shown
			at the bottom of the window.</div>
<div class="old-help-para">Select mode		This looks most like the MS-Windows selection mode.
			Typing a printable character deletes the selection
			and starts Insert mode.  See <a href="visual.html#Select-mode">Select-mode</a>.
			If the <a href="options.html#'showmode'">'showmode'</a> option is on "-- SELECT --" is shown
			at the bottom of the window.</div>
<div class="old-help-para">Insert mode		In Insert mode the text you type is inserted into the
			buffer.  See <a href="insert.html#Insert-mode">Insert-mode</a>.
			If the <a href="options.html#'showmode'">'showmode'</a> option is on "-- INSERT --" is shown
			at the bottom of the window.</div>
<div class="old-help-para">Command-line mode	In Command-line mode (also called Cmdline mode) you
Cmdline mode		can enter one line of text at the bottom of the
			window.  This is for the Ex commands, ":", the pattern
			search commands, "?" and "/", and the filter command,
			"!".  <a href="cmdline.html#Cmdline-mode">Cmdline-mode</a></div>
<div class="old-help-para">Ex mode			Like Command-line mode, but after entering a command
			you remain in Ex mode.  Very limited editing of the
			command line.  <a href="intro.html#Ex-mode">Ex-mode</a></div>
<div class="old-help-para">							<a name="Terminal-mode"></a><code class="help-tag-right">Terminal-mode</code>
Terminal mode		In Terminal mode all input (except <code>CTRL-\</code>) is sent to
			the process running in the current <a href="nvim_terminal_emulator.html#terminal">terminal</a> buffer.
			If <code>CTRL-\</code> is pressed, the next key is sent unless it
			is <code>CTRL-N</code> (<a href="intro.html#CTRL-%5C_CTRL-N">CTRL-\_CTRL-N</a>) or <code>CTRL-O</code> (<a href="nvim_terminal_emulator.html#t_CTRL-%5C_CTRL-O">t_CTRL-\_CTRL-O</a>).
			If the <a href="options.html#'showmode'">'showmode'</a> option is on "-- TERMINAL --" is shown
			at the bottom of the window.</div>
<div class="old-help-para">There are six ADDITIONAL modes.  These are variants of the BASIC modes:</div>
<div class="old-help-para">				<a name="Operator-pending"></a><code class="help-tag-right">Operator-pending</code> <a name="Operator-pending-mode"></a><code class="help-tag">Operator-pending-mode</code>
Operator-pending mode	This is like Normal mode, but after an operator
			command has started, and Vim is waiting for a <code>{motion}</code>
			to specify the text that the operator will work on.</div>
<div class="old-help-para">Replace mode		Replace mode is a special case of Insert mode.  You
			can do the same things as in Insert mode, but for
			each character you enter, one character of the existing
			text is deleted.  See <a href="insert.html#Replace-mode">Replace-mode</a>.
			If the <a href="options.html#'showmode'">'showmode'</a> option is on "-- REPLACE --" is
			shown at the bottom of the window.</div>
<div class="old-help-para">Virtual Replace mode	Virtual Replace mode is similar to Replace mode, but
			instead of file characters you are replacing screen
			real estate.  See <a href="insert.html#Virtual-Replace-mode">Virtual-Replace-mode</a>.
			If the <a href="options.html#'showmode'">'showmode'</a> option is on "-- VREPLACE --" is
			shown at the bottom of the window.</div>
<div class="old-help-para">Insert Normal mode	Entered when <code>CTRL-O</code> is typed in Insert mode (see
			<a href="insert.html#i_CTRL-O">i_CTRL-O</a>).  This is like Normal mode, but after
			executing one command Vim returns to Insert mode.
			If the <a href="options.html#'showmode'">'showmode'</a> option is on "-- (insert) --" is
			shown at the bottom of the window.</div>
<div class="old-help-para">Insert Visual mode	Entered when starting a Visual selection from Insert
			mode, e.g., by using <code>CTRL-O</code> and then "v", "V" or
			<code>CTRL-V</code>.  When the Visual selection ends, Vim returns
			to Insert mode.
			If the <a href="options.html#'showmode'">'showmode'</a> option is on "-- (insert) VISUAL --"
			is shown at the bottom of the window.</div>
<div class="old-help-para">Insert Select mode	Entered when starting Select mode from Insert mode.
			E.g., by dragging the mouse or <code>&lt;S-Right&gt;</code>.
			When the Select mode ends, Vim returns to Insert mode.
			If the <a href="options.html#'showmode'">'showmode'</a> option is on "-- (insert) SELECT --"
			is shown at the bottom of the window.</div>
<div class="old-help-para"><h2 class="help-heading">Switching from mode to mode<span class="help-heading-tags">				<a name="mode-switching"></a><span class="help-tag">mode-switching</span></span></h2></div>
<div class="old-help-para">If for any reason you do not know which mode you are in, you can always get
back to Normal mode by typing <code>&lt;Esc&gt;</code> twice.  This doesn't work for Ex mode
though, use ":visual".
You will know you are back in Normal mode when you see the screen flash or
hear the bell after you type <code>&lt;Esc&gt;</code>.  However, when pressing <code>&lt;Esc&gt;</code> after using
CTRL-O in Insert mode you get a beep but you are still in Insert mode, type
<code>&lt;Esc&gt;</code> again.</div>
<div class="old-help-para">							<a name="i_esc"></a><code class="help-tag-right">i_esc</code>
<div class="help-column_heading">		TO mode</div><div class="help-column_heading">		Normal	Visual	Select	Insert	  Replace   Cmd-line  Ex</div><div class="help-column_heading">FROM mode</div>Normal			v V ^V	  *4	 *1	   R gR     : / ? !   Q
Visual2		  ^G	 c C	    --	      :       --
Select		 *5	^O ^G		 *6	    --	      --      --
Insert		 <code>&lt;Esc&gt;</code>	  --	  --		  <code>&lt;Insert&gt;</code>    --      --
Replace		 <code>&lt;Esc&gt;</code>	  --	  --	<code>&lt;Insert&gt;</code>	      --      --
Command-line3	  --	  --	 :start	    --		      --
Ex		 :vi	  --	  --	 --	    --	      --</div>
<div class="old-help-para">-- not possible</div>
<div class="old-help-para"><div class="help-li" style=""> 1 Go from Normal mode to Insert mode by giving the command "i", "I", "a",
    "A", "o", "O", "c", "C", "s" or S".
</div><div class="help-li" style=""> 2 Go from Visual mode to Normal mode by giving a non-movement command, which
    causes the command to be executed, or by hitting <code>&lt;Esc&gt;</code> "v", "V" or "CTRL-V"
    (see <a href="visual.html#v_v">v_v</a>), which just stops Visual mode without side effects.
</div><div class="help-li" style=""> 3 Go from Command-line mode to Normal mode by:
</div><div class="help-li" style="margin-left: 3rem;"> Hitting <code>&lt;CR&gt;</code> or <code>&lt;NL&gt;</code>, which causes the entered command to be executed.
</div><div class="help-li" style="margin-left: 3rem;"> Deleting the complete line (e.g., with <code>CTRL-U</code>) and giving a final <code>&lt;BS&gt;</code>.
</div><div class="help-li" style="margin-left: 3rem;"> Hitting <code>CTRL-C</code> or <code>&lt;Esc&gt;</code>, which quits the command-line without executing
      the command.
    In the last case <code>&lt;Esc&gt;</code> may be the character defined with the <a href="options.html#'wildchar'">'wildchar'</a>
    option, in which case it will start command-line completion.  You can
    ignore that and type <code>&lt;Esc&gt;</code> again.
</div><div class="help-li" style=""> 4 Go from Normal to Select mode by:
</div><div class="help-li" style="margin-left: 3rem;"> use the mouse to select text while <a href="options.html#'selectmode'">'selectmode'</a> contains "mouse"
</div><div class="help-li" style="margin-left: 3rem;"> use a non-printable command to move the cursor while keeping the Shift
      key pressed, and the <a href="options.html#'selectmode'">'selectmode'</a> option contains "key"
</div><div class="help-li" style="margin-left: 3rem;"> use "v", "V" or "CTRL-V" while <a href="options.html#'selectmode'">'selectmode'</a> contains "cmd"
</div><div class="help-li" style="margin-left: 3rem;"> use "gh", "gH" or "g <code>CTRL-H</code>"  <a href="visual.html#g_CTRL-H">g_CTRL-H</a>
</div><div class="help-li" style=""> 5 Go from Select mode to Normal mode by using a non-printable command to move
    the cursor, without keeping the Shift key pressed.
</div><div class="help-li" style=""> 6 Go from Select mode to Insert mode by typing a printable character.  The
    selection is deleted and the character is inserted.
</div></div>
<div class="old-help-para">			<a name="CTRL-%5C_CTRL-N"></a><code class="help-tag-right">CTRL-\_CTRL-N</code> <a name="i_CTRL-%5C_CTRL-N"></a><code class="help-tag">i_CTRL-\_CTRL-N</code> <a name="c_CTRL-%5C_CTRL-N"></a><code class="help-tag">c_CTRL-\_CTRL-N</code>
				      <a name="v_CTRL-%5C_CTRL-N"></a><code class="help-tag-right">v_CTRL-\_CTRL-N</code> <a name="t_CTRL-%5C_CTRL-N"></a><code class="help-tag">t_CTRL-\_CTRL-N</code>
Additionally the command <code>CTRL-\</code> <code>CTRL-N</code> or <code>&lt;C-\&gt;</code><code>&lt;C-N&gt;</code> can be used to go to
Normal mode from any other mode.  This can be used to make sure Vim is in
Normal mode, without causing a beep like <code>&lt;Esc&gt;</code> would.  However, this does not
work in Ex mode.  When used after a command that takes an argument, such as
<a href="motion.html#f">f</a> or <a href="motion.html#m">m</a>, the timeout set with <a href="options.html#'ttimeoutlen'">'ttimeoutlen'</a> applies.</div>
<div class="old-help-para">	<a name="CTRL-%5C_CTRL-G"></a><code class="help-tag">CTRL-\_CTRL-G</code> <a name="i_CTRL-%5C_CTRL-G"></a><code class="help-tag">i_CTRL-\_CTRL-G</code> <a name="c_CTRL-%5C_CTRL-G"></a><code class="help-tag">c_CTRL-\_CTRL-G</code> <a name="v_CTRL-%5C_CTRL-G"></a><code class="help-tag">v_CTRL-\_CTRL-G</code>
<code>CTRL-\</code> <code>CTRL-G</code> works the same as <a href="intro.html#CTRL-%5C_CTRL-N">CTRL-\_CTRL-N</a> for backward compatibility.</div>
<div class="old-help-para">				<a name="gQ"></a><code class="help-tag-right">gQ</code> <a name="mode-Ex"></a><code class="help-tag">mode-Ex</code> <a name="Ex-mode"></a><code class="help-tag">Ex-mode</code> <a name="Ex"></a><code class="help-tag">Ex</code> <a name="EX"></a><code class="help-tag">EX</code> <a name="E501"></a><code class="help-tag">E501</code>
gQ			Switch to Ex mode.  This is like typing ":" commands
			one after another, except:
<div class="help-li" style=""> You don't have to keep pressing ":".
</div><div class="help-li" style=""> The screen doesn't get updated after each command.
			Use the <code>:vi</code> command (<a href="editing.html#%3Avisual">:visual</a>) to exit this mode.
</div></div>
<div class="old-help-para"><h2 class="help-heading">Window contents<span class="help-heading-tags">						<a name="window-contents"></a><span class="help-tag">window-contents</span></span></h2></div>
<div class="old-help-para">In Normal mode and Insert/Replace mode the screen window will show the current
contents of the buffer: What You See Is What You Get.  There are two
exceptions:
<div class="help-li" style=""> When the <a href="options.html#'cpoptions'">'cpoptions'</a> option contains '$', and the change is within one line,
  the text is not directly deleted, but a '$' is put at the last deleted
  character.
</div><div class="help-li" style=""> When inserting text in one window, other windows on the same text are not
  updated until the insert is finished.
</div></div>
<div class="old-help-para">Lines longer than the window width will wrap, unless the <a href="options.html#'wrap'">'wrap'</a> option is off
(see below).  The <a href="options.html#'linebreak'">'linebreak'</a> option can be set to wrap at a blank character.</div>
<div class="old-help-para">If the window has room after the last line of the buffer, Vim will show '~' in
the first column of the last lines in the window, like this:</div>
<div class="old-help-para">	+-----------------------+
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+intro.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/intro.html%0D%0DContext%3A%0D%0D%60%60%60%0Dthe%20first%20column%20of%20the%20last%20lines%20in%20the%20window%2C%20like%20this%3A%0A%0A%09%2B-----------------------%2B%0A%09%7Csome%20line%09%09%7C%0A%09%7Clast%20line%09%09%7C%0A%09%7C~%09%09%09%7C%0A%09%7C~%09%09%09%7C%0D%60%60%60">some</a> line		|
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+intro.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/intro.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%09%2B-----------------------%2B%0A%09%7Csome%20line%09%09%7C%0A%09%7Clast%20line%09%09%7C%0A%09%7C~%09%09%09%7C%0A%09%7C~%09%09%09%7C%0A%09%2B-----------------------%2B%0D%60%60%60">last</a> line		|
	|~			|
	|~			|
	+-----------------------+</div>
<div class="old-help-para">Thus the '~' lines indicate that the end of the buffer was reached.</div>
<div class="old-help-para">If the last line in a window doesn't fit, Vim will indicate this with a '@' in
the first column of the last lines in the window, like this:</div>
<div class="old-help-para">	+-----------------------+
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+intro.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/intro.html%0D%0DContext%3A%0D%0D%60%60%60%0Dthe%20first%20column%20of%20the%20last%20lines%20in%20the%20window%2C%20like%20this%3A%0A%0A%09%2B-----------------------%2B%0A%09%7Cfirst%20line%09%09%7C%0A%09%7Csecond%20line%09%09%7C%0A%09%7C%40%09%09%09%7C%0A%09%7C%40%09%09%09%7C%0D%60%60%60">first</a> line		|
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+intro.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/intro.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%09%2B-----------------------%2B%0A%09%7Cfirst%20line%09%09%7C%0A%09%7Csecond%20line%09%09%7C%0A%09%7C%40%09%09%09%7C%0A%09%7C%40%09%09%09%7C%0A%09%2B-----------------------%2B%0D%60%60%60">second</a> line		|
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+intro.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/intro.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%2B-----------------------%2B%0A%09%7Cfirst%20line%09%09%7C%0A%09%7Csecond%20line%09%09%7C%0A%09%7C%40%09%09%09%7C%0A%09%7C%40%09%09%09%7C%0A%09%2B-----------------------%2B%0A%0D%60%60%60">@</a>			|
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+intro.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/intro.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7Cfirst%20line%09%09%7C%0A%09%7Csecond%20line%09%09%7C%0A%09%7C%40%09%09%09%7C%0A%09%7C%40%09%09%09%7C%0A%09%2B-----------------------%2B%0A%0AThus%20the%20'%40'%20lines%20indicate%20that%20there%20is%20a%20line%20that%20doesn't%20fit%20in%20the%0D%60%60%60">@</a>			|
	+-----------------------+</div>
<div class="old-help-para">Thus the '@' lines indicate that there is a line that doesn't fit in the
window.</div>
<div class="old-help-para">When the "lastline" flag is present in the <a href="options.html#'display'">'display'</a> option, you will not see
'@' characters at the left side of window.  If the last line doesn't fit
completely, only the part that fits is shown, and the last three characters of
the last line are replaced with "@@@", like this:</div>
<div class="old-help-para">	+-----------------------+
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+intro.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/intro.html%0D%0DContext%3A%0D%0D%60%60%60%0Dthe%20last%20line%20are%20replaced%20with%20%22%40%40%40%22%2C%20like%20this%3A%0A%0A%09%2B-----------------------%2B%0A%09%7Cfirst%20line%09%09%7C%0A%09%7Csecond%20line%09%09%7C%0A%09%7Ca%20very%20long%20line%20that%20d%7C%0A%09%7Coesn't%20fit%20in%20the%20wi%40%40%40%7C%0D%60%60%60">first</a> line		|
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+intro.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/intro.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%09%2B-----------------------%2B%0A%09%7Cfirst%20line%09%09%7C%0A%09%7Csecond%20line%09%09%7C%0A%09%7Ca%20very%20long%20line%20that%20d%7C%0A%09%7Coesn't%20fit%20in%20the%20wi%40%40%40%7C%0A%09%2B-----------------------%2B%0D%60%60%60">second</a> line		|
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+intro.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/intro.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%2B-----------------------%2B%0A%09%7Cfirst%20line%09%09%7C%0A%09%7Csecond%20line%09%09%7C%0A%09%7Ca%20very%20long%20line%20that%20d%7C%0A%09%7Coesn't%20fit%20in%20the%20wi%40%40%40%7C%0A%09%2B-----------------------%2B%0A%0D%60%60%60">a</a> very long line that d|
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+intro.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/intro.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7Cfirst%20line%09%09%7C%0A%09%7Csecond%20line%09%09%7C%0A%09%7Ca%20very%20long%20line%20that%20d%7C%0A%09%7Coesn't%20fit%20in%20the%20wi%40%40%40%7C%0A%09%2B-----------------------%2B%0A%0AIf%20there%20is%20a%20single%20line%20that%20is%20too%20long%20to%20fit%20in%20the%20window%2C%20this%20is%20a%0D%60%60%60">oesn't</a> fit in the wi@@@|
	+-----------------------+</div>
<div class="old-help-para">If there is a single line that is too long to fit in the window, this is a
special situation.  Vim will show only part of the line, around where the
cursor is.  There are no special characters shown, so that you can edit all
parts of this line.</div>
<div class="old-help-para">The <a href="syntax.html#hl-NonText">hl-NonText</a> highlight group can be used to set special highlighting
for the '@' and '~' characters.  This makes it possible to distinguish them
from real characters in the buffer.</div>
<div class="old-help-para">The <a href="options.html#'showbreak'">'showbreak'</a> option contains the string to put in front of wrapped lines.</div>
<div class="old-help-para">							<a name="wrap-off"></a><code class="help-tag-right">wrap-off</code>
If the <a href="options.html#'wrap'">'wrap'</a> option is off, long lines will not wrap.  Only the part that
fits on the screen is shown.  If the cursor is moved to a part of the line
that is not shown, the screen is scrolled horizontally.  The advantage of
this method is that columns are shown as they are and lines that cannot fit
on the screen can be edited.  The disadvantage is that you cannot see all the
characters of a line at once.  The <a href="options.html#'sidescroll'">'sidescroll'</a> option can be set to the
minimal number of columns to scroll.</div>
<div class="old-help-para">All normal ASCII characters are displayed directly on the screen.  The <code>&lt;Tab&gt;</code>
is replaced with the number of spaces that it represents.  Other non-printing
characters are replaced with "^{char}", where <code>{char}</code> is the non-printing
character with 64 added.  Thus character 7 (bell) will be shown as "^G".
Characters between 127 and 160 are replaced with "~{char}", where <code>{char}</code> is
the character with 64 subtracted.  These characters occupy more than one
position on the screen.  The cursor can only be positioned on the first one.</div>
<div class="old-help-para">If you set the <a href="options.html#'number'">'number'</a> option, all lines will be preceded with their
number.  Tip: If you don't like wrapping lines to mix with the line numbers,
set the <a href="options.html#'showbreak'">'showbreak'</a> option to eight spaces:
	":set showbreak=\ \ \ \ \ \ \ \ "</div>
<div class="old-help-para">If you set the <a href="options.html#'list'">'list'</a> option, <code>&lt;Tab&gt;</code> characters will not be shown as several
spaces, but as "^I".  A '$' will be placed at the end of the line, so you can
find trailing blanks.</div>
<div class="old-help-para">In Command-line mode only the command-line itself is shown correctly.  The
display of the buffer contents is updated as soon as you go back to Command
mode.</div>
<div class="old-help-para">The last line of the window is used for status and other messages.  The
status messages will only be used if an option is on:</div>
<div class="old-help-para"><div class="help-column_heading">status message			option	     default	Unix default</div>current mode			<a href="options.html#'showmode'">'showmode'</a>	on	    on
command characters		<a href="options.html#'showcmd'">'showcmd'</a>	on	    off
cursor position			<a href="options.html#'ruler'">'ruler'</a>		off	    off</div>
<div class="old-help-para">The current mode is "-- INSERT --" or "-- REPLACE --", see <a href="options.html#'showmode'">'showmode'</a>.  The
command characters are those that you typed but were not used yet.</div>
<div class="old-help-para">If you have a slow terminal you can switch off the status messages to speed
up editing:
	:set nosc noru nosm</div>
<div class="old-help-para">If there is an error, an error message will be shown for at least one second
(in reverse video).</div>
<div class="old-help-para">Some commands show how many lines were affected.  Above which threshold this
happens can be controlled with the <a href="options.html#'report'">'report'</a> option (default 2).</div>
<div class="old-help-para">The name Vim and the full name of the current file name will be shown in the
title bar.  When the window is resized, Vim will automatically redraw the
window.  You may make the window as small as you like, but if it gets too
small not a single line will fit in it.  Make it at least 40 characters wide
to be able to read most messages on the last line.</div>
<div class="old-help-para"><h2 class="help-heading">Definitions<span class="help-heading-tags">						<a name="definitions"></a><span class="help-tag">definitions</span> <a name="jargon"></a><span class="help-tag">jargon</span></span></h2></div>
<div class="old-help-para">  buffer		Contains lines of text, usually from a file.
  screen		The whole area that Nvim uses to display things.
  window		A view on a buffer.  There can be multiple windows for
			one buffer.
  frame			Windows are kept in a tree of frames.  Each frame
			contains a column, row, or window ("leaf" frame).</div>
<div class="old-help-para">A screen contains one or more windows, separated by status lines and with the
command line at the bottom.</div>
<div class="old-help-para">	+-------------------------------+
screen	| window 1	| window 2	|
	|		|		|
	|		|		|
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+intro.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/intro.html%0D%0DContext%3A%0D%0D%60%60%60%0Dscreen%09%7C%20window%201%09%7C%20window%202%09%7C%0A%09%7C%09%09%7C%09%09%7C%0A%09%7C%09%09%7C%09%09%7C%0A%09%7C%3D%20status%20line%20%3D%7C%3D%20status%20line%20%3D%7C%0A%09%7C%20window%203%09%09%09%7C%0A%09%7C%09%09%09%09%7C%0A%09%7C%09%09%09%09%7C%0D%60%60%60">=</a> status line =|= status line =|
	| window 3			|
	|				|
	|				|
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+intro.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/intro.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7C%20window%203%09%09%09%7C%0A%09%7C%09%09%09%09%7C%0A%09%7C%09%09%09%09%7C%0A%09%7C%3D%3D%3D%3D%20status%20line%20%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7Ccommand%20line%09%09%09%7C%0A%09%2B-------------------------------%2B%0A%0D%60%60%60">====</a> status line ==============|
	|<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+intro.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/intro.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%7C%09%09%09%09%7C%0A%09%7C%09%09%09%09%7C%0A%09%7C%3D%3D%3D%3D%20status%20line%20%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%7C%0A%09%7Ccommand%20line%09%09%09%7C%0A%09%2B-------------------------------%2B%0A%0AThe%20command%20line%20is%20also%20used%20for%20messages.%20%20It%20scrolls%20up%20the%20screen%20when%0D%60%60%60">command</a> line			|
	+-------------------------------+</div>
<div class="old-help-para">The command line is also used for messages.  It scrolls up the screen when
there is not enough room in the command line.</div>
<div class="old-help-para">A difference is made between four types of lines:</div>
<div class="old-help-para">  buffer lines		The lines in the buffer.  This is the same as the
			lines as they are read from/written to a file.  They
			can be thousands of characters long.
  logical lines		The buffer lines with folding applied.  Buffer lines
			in a closed fold are changed to a single logical line:
			"+-- 99 lines folded".  They can be thousands of
			characters long.
  window lines		The lines displayed in a window: A range of logical
			lines with wrapping, line breaks, etc.  applied.  They
			can only be as long as the width of the window allows,
			longer lines are wrapped or truncated.
  screen lines		The lines of the screen that Nvim uses.  Consists of
			the window lines of all windows, with status lines
			and the command line added.  They can only be as long
			as the width of the screen allows.  When the command
			line gets longer it wraps and lines are scrolled to
			make room.</div>
<div class="old-help-para"><div class="help-column_heading">buffer lines	logical lines	window lines	screen lines</div></div>
<div class="old-help-para">1. one		1. one		1. +-- folded   1.  +-- folded
2. two		2. +-- folded	2. five		2.  five
3. three	3. five		3. six		3.  six
4. four		4. six		4. seven	4.  seven
5. five		5. seven			5.  === status line ===
6. six						6.  aaa
7. seven					7.  bbb
						8.  ccc ccc c
1. aaa		1. aaa		1. aaa		9.  cc
2. bbb		2. bbb		2. bbb		10. ddd
3. ccc ccc ccc	3. ccc ccc ccc	3. ccc ccc c	11. ~
4. ddd		4. ddd		4. cc		12. === status line ===
				5. ddd		13. (command line)
				6. ~</div>
<div class="old-help-para"><div class="help-column_heading">API client</div>All external UIs and remote plugins (as opposed to regular Vim plugins) are
"clients" in general; but we call something an "API client" if its purpose is
to abstract or wrap the RPC API for the convenience of other applications
(just like a REST client or SDK such as boto3 for AWS: you can speak AWS REST
using an HTTP client like curl, but boto3 wraps that in a convenient python
interface). For example, the Nvim lua-client is an API client:
    <a href="https://github.com/neovim/lua-client">https://github.com/neovim/lua-client</a></div>
<div class="old-help-para"><div class="help-column_heading">Host</div>A plugin "host" is both a client (of the Nvim API) and a server (of an
external platform, e.g. python). It is a remote plugin that hosts other
plugins.</div>
<div class="old-help-para"><div class="help-column_heading">Remote plugin</div>Arbitrary code registered via <a href="remote_plugin.html#%3AUpdateRemotePlugins">:UpdateRemotePlugins</a>, that runs in a separate
process and communicates with Nvim via the <a href="api.html#api">api</a>.</div>

  
  