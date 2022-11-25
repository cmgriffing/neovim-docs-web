---
title:  Quickref
layout: ../../layouts/MainLayout.astro
---

  <a name="quickref.txt"></a><a name="quickref"></a><h1> Quickref</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/quickref.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para"><a name="_-quick-reference-guide"></a><h2 class="help-heading">Quick reference guide</h2></div>
<div class="old-help-para"> <a name="Contents"></a><code class="help-tag">Contents</code>
<div class="help-column_heading"> tag	  subject			 tag	  subject</div><a href="/neovim-docs-web/en/index#Q_ct">Q_ct</a>  	list of help files		<a href="/neovim-docs-web/en/quickref#Q_re">Q_re</a>  	Repeating commands
<a href="/neovim-docs-web/en/quickref#Q_lr">Q_lr</a>  	motion: Left-right		<a href="/neovim-docs-web/en/quickref#Q_km">Q_km</a>  	Key mapping
<a href="/neovim-docs-web/en/quickref#Q_ud">Q_ud</a>  	motion: Up-down			<a href="/neovim-docs-web/en/quickref#Q_ab">Q_ab</a>  	Abbreviations
<a href="/neovim-docs-web/en/quickref#Q_tm">Q_tm</a>  	motion: Text object		<a href="/neovim-docs-web/en/quickref#Q_op">Q_op</a>  	Options
<a href="/neovim-docs-web/en/quickref#Q_pa">Q_pa</a>  	motion: Pattern searches	<a href="/neovim-docs-web/en/quickref#Q_ur">Q_ur</a>  	Undo/Redo commands
<a href="/neovim-docs-web/en/quickref#Q_ma">Q_ma</a>  	motion: Marks			<a href="/neovim-docs-web/en/quickref#Q_et">Q_et</a>  	External commands
<a href="/neovim-docs-web/en/quickref#Q_vm">Q_vm</a>  	motion: Various			<a href="/neovim-docs-web/en/quickref#Q_qf">Q_qf</a>  	Quickfix commands
<a href="/neovim-docs-web/en/quickref#Q_ta">Q_ta</a>  	motion: Using tags		<a href="/neovim-docs-web/en/quickref#Q_vc">Q_vc</a>  	Various commands
<a href="/neovim-docs-web/en/quickref#Q_sc">Q_sc</a>  	Scrolling			<a href="/neovim-docs-web/en/quickref#Q_ce">Q_ce</a>  	Ex: Command-line editing
<a href="/neovim-docs-web/en/quickref#Q_in">Q_in</a>  	insert: Inserting text		<a href="/neovim-docs-web/en/quickref#Q_ra">Q_ra</a>  	Ex: Ranges
<a href="/neovim-docs-web/en/quickref#Q_ai">Q_ai</a>  	insert: Keys			<a href="/neovim-docs-web/en/quickref#Q_ex">Q_ex</a>  	Ex: Special characters
<a href="/neovim-docs-web/en/quickref#Q_ss">Q_ss</a>  	insert: Special keys		<a href="/neovim-docs-web/en/quickref#Q_st">Q_st</a>  	Starting Vim
<a href="/neovim-docs-web/en/quickref#Q_di">Q_di</a>  	insert: Digraphs		<a href="/neovim-docs-web/en/quickref#Q_ed">Q_ed</a>  	Editing a file
<a href="/neovim-docs-web/en/quickref#Q_si">Q_si</a>  	insert: Special inserts		<a href="/neovim-docs-web/en/quickref#Q_fl">Q_fl</a>  	Using the argument list
<a href="/neovim-docs-web/en/quickref#Q_de">Q_de</a>  	change: Deleting text		<a href="/neovim-docs-web/en/quickref#Q_wq">Q_wq</a>  	Writing and quitting
<a href="/neovim-docs-web/en/quickref#Q_cm">Q_cm</a>  	change: Copying and moving	<a href="/neovim-docs-web/en/quickref#Q_ac">Q_ac</a>  	Automatic commands
<a href="/neovim-docs-web/en/quickref#Q_ch">Q_ch</a>  	change: Changing text		<a href="/neovim-docs-web/en/quickref#Q_wi">Q_wi</a>  	Multi-window commands
<a href="/neovim-docs-web/en/quickref#Q_co">Q_co</a>  	change: Complex			<a href="/neovim-docs-web/en/quickref#Q_bu">Q_bu</a>  	Buffer list commands
<a href="/neovim-docs-web/en/quickref#Q_vi">Q_vi</a>  	Visual mode			<a href="/neovim-docs-web/en/quickref#Q_sy">Q_sy</a>  	Syntax highlighting
<a href="/neovim-docs-web/en/quickref#Q_to">Q_to</a>  	Text objects			<a href="/neovim-docs-web/en/quickref#Q_gu">Q_gu</a>  	GUI commands
					<a href="/neovim-docs-web/en/quickref#Q_fo">Q_fo</a>  	Folding</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_lr"></a><span class="help-tag">Q_lr</span>  		Left-right motions</span></h3></div>
<div class="old-help-para">N is used to indicate an optional count that can be given before the command.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/motion#h">h</a>  	N  h		left (also: <code>CTRL-H</code>, <code>&lt;BS&gt;</code>, or <code>&lt;Left&gt;</code> key)
<a href="/neovim-docs-web/en/motion#l">l</a>  	N  l		right (also: <code>&lt;Space&gt;</code> or <code>&lt;Right&gt;</code> key)
<a href="/neovim-docs-web/en/motion#0">0</a>  	   0		to first character in the line (also: <code>&lt;Home&gt;</code> key)
<a href="/neovim-docs-web/en/motion#%5E">^</a>  	   ^		to first non-blank character in the line
<a href="/neovim-docs-web/en/motion#%24">$</a>  	N  $		to the next EOL (end of line) position
			   (also: <code>&lt;End&gt;</code> key)
<a href="/neovim-docs-web/en/motion#g0">g0</a>  	   g0		to first character in screen line (differs from "0"
			   when lines wrap)
<a href="/neovim-docs-web/en/motion#g%5E">g^</a>  	   g^		to first non-blank character in screen line (differs
			   from "^" when lines wrap)
<a href="/neovim-docs-web/en/motion#g%24">g$</a>  	N  g$		to last character in screen line (differs from "$"
			   when lines wrap)
<a href="/neovim-docs-web/en/motion#gm">gm</a>  	   gm		to middle of the screen line
<a href="/neovim-docs-web/en/motion#gM">gM</a>  	   gM		to middle of the line
<a href="/neovim-docs-web/en/motion#bar">bar</a>  	N  |		to column N (default: 1)
<a href="/neovim-docs-web/en/motion#f">f</a>  	N  f{char}	to the Nth occurrence of <code>{char}</code> to the right
<a href="/neovim-docs-web/en/motion#F">F</a>  	N  F{char}	to the Nth occurrence of <code>{char}</code> to the left
<a href="/neovim-docs-web/en/motion#t">t</a>  	N  t{char}	till before the Nth occurrence of <code>{char}</code> to the right
<a href="/neovim-docs-web/en/motion#T">T</a>  	N  T{char}	till before the Nth occurrence of <code>{char}</code> to the left
<a href="/neovim-docs-web/en/motion#%3B">;</a>  	N  ;		repeat the last "f", "F", "t", or "T" N times
<a href="/neovim-docs-web/en/motion#%2C">,</a>  	N  ,		repeat the last "f", "F", "t", or "T" N times in
			   opposite direction</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_ud"></a><span class="help-tag">Q_ud</span>  		Up-down motions</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/motion#k">k</a>  	N  k		up N lines (also: <code>CTRL-P</code> and <code>&lt;Up&gt;</code>)
<a href="/neovim-docs-web/en/motion#j">j</a>  	N  j		down N lines (also: <code>CTRL-J</code>, <code>CTRL-N</code>, <code>&lt;NL&gt;</code>, and <code>&lt;Down&gt;</code>)
<a href="/neovim-docs-web/en/motion#-">-</a>  	N  -			up N lines, on the first non-blank character
<a href="/neovim-docs-web/en/motion#%2B">+</a>  	N  +		down N lines, on the first non-blank character (also:
			   <code>CTRL-M</code> and <code>&lt;CR&gt;</code>)
<a href="/neovim-docs-web/en/motion#_">_</a>  	N  _		down N-1 lines, on the first non-blank character
<a href="/neovim-docs-web/en/motion#G">G</a>  	N  G		goto line N (default: last line), on the first
			   non-blank character
<a href="/neovim-docs-web/en/motion#gg">gg</a>  	N  gg		goto line N (default: first line), on the first
			   non-blank character
<a href="/neovim-docs-web/en/motion#N%25">N%</a>  	N  %		goto line N percentage down in the file; N must be
			   given, otherwise it is the <a href="/neovim-docs-web/en/motion#%25">%</a> command
<a href="/neovim-docs-web/en/motion#gk">gk</a>  	N  gk		up N screen lines (differs from "k" when line wraps)
<a href="/neovim-docs-web/en/motion#gj">gj</a>  	N  gj		down N screen lines (differs from "j" when line wraps)</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_tm"></a><span class="help-tag">Q_tm</span>  		Text object motions</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/motion#w">w</a>  	N  w		N words forward
<a href="/neovim-docs-web/en/motion#W">W</a>  	N  W		N blank-separated <a href="/neovim-docs-web/en/motion#WORD">WORD</a>s forward
<a href="/neovim-docs-web/en/motion#e">e</a>  	N  e		forward to the end of the Nth word
<a href="/neovim-docs-web/en/motion#E">E</a>  	N  E		forward to the end of the Nth blank-separated <a href="/neovim-docs-web/en/motion#WORD">WORD</a>
<a href="/neovim-docs-web/en/motion#b">b</a>  	N  b		N words backward
<a href="/neovim-docs-web/en/motion#B">B</a>  	N  B		N blank-separated <a href="/neovim-docs-web/en/motion#WORD">WORD</a>s backward
<a href="/neovim-docs-web/en/motion#ge">ge</a>  	N  ge		backward to the end of the Nth word
<a href="/neovim-docs-web/en/motion#gE">gE</a>  	N  gE		backward to the end of the Nth blank-separated <a href="/neovim-docs-web/en/motion#WORD">WORD</a></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/motion#)">)</a>  	N  )		N sentences forward
<a href="/neovim-docs-web/en/motion#(">(</a>  	N  (		N sentences backward
<a href="/neovim-docs-web/en/motion#%7D">}</a>  	N  }		N paragraphs forward
<a href="/neovim-docs-web/en/motion#%7B">{</a>  	N  {		N paragraphs backward
<a href="/neovim-docs-web/en/motion#%5D%5D">]]</a>  	N  ]]		N sections forward, at start of section
<a href="/neovim-docs-web/en/motion#%5B%5B">[[</a>  	N  [[		N sections backward, at start of section
<a href="/neovim-docs-web/en/motion#%5D%5B">][</a>  	N  ][		N sections forward, at end of section
<a href="/neovim-docs-web/en/motion#%5B%5D">[]</a>  	N  []		N sections backward, at end of section
<a href="/neovim-docs-web/en/motion#%5B(">[(</a>  	N  [(		N times back to unclosed '('
<a href="/neovim-docs-web/en/motion#%5B%7B">[{</a>  	N  [{		N times back to unclosed '{'
<a href="/neovim-docs-web/en/motion#%5Bm">[m</a>  	N  [m		N times back to start of method (for Java)
<a href="/neovim-docs-web/en/motion#%5BM">[M</a>  	N  [M		N times back to end of method (for Java)
<a href="/neovim-docs-web/en/motion#%5D)">])</a>  	N  ])		N times forward to unclosed ')'
<a href="/neovim-docs-web/en/motion#%5D%7D">]}</a>  	N  ]}		N times forward to unclosed '}'
<a href="/neovim-docs-web/en/motion#%5Dm">]m</a>  	N  ]m		N times forward to start of method (for Java)
<a href="/neovim-docs-web/en/motion#%5DM">]M</a>  	N  ]M		N times forward to end of method (for Java)
<a href="/neovim-docs-web/en/motion#%5B%23">[#</a>  	N  [#		N times back to unclosed "#if" or "#else"
<a href="/neovim-docs-web/en/motion#%5D%23">]#</a>  	N  ]#		N times forward to unclosed "#else" or "#endif"
<a href="/neovim-docs-web/en/motion#%5Bstar">[star</a>  	N  [*		N times back to start of comment "/*"
<a href="/neovim-docs-web/en/motion#%5Dstar">]star</a>  	N  ]*		N times forward to end of comment "*/"</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_pa"></a><span class="help-tag">Q_pa</span>  		Pattern searches</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/pattern#%2F">/</a>  	N  /{pattern}[/[offset]]&lt;CR&gt;
			search forward for the Nth occurrence of <code>{pattern}</code>
<a href="/neovim-docs-web/en/pattern#%3F">?</a>  	N  ?{pattern}[?[offset]]&lt;CR&gt;
			search backward for the Nth occurrence of <code>{pattern}</code>
<a href="/neovim-docs-web/en/pattern#%2F%3CCR%3E">/&lt;CR&gt;</a>  	N  /&lt;CR&gt;	repeat last search, in the forward direction
<a href="/neovim-docs-web/en/pattern#%3F%3CCR%3E">?&lt;CR&gt;</a>  	N  ?&lt;CR&gt;	repeat last search, in the backward direction
<a href="/neovim-docs-web/en/pattern#n">n</a>  	N  n		repeat last search
<a href="/neovim-docs-web/en/pattern#N">N</a>  	N  N		repeat last search, in opposite direction
<a href="/neovim-docs-web/en/pattern#star">star</a>  	N  *		search forward for the identifier under the cursor
<a href="/neovim-docs-web/en/pattern#%23">#</a>  	N  #		search backward for the identifier under the cursor
<a href="/neovim-docs-web/en/pattern#gstar">gstar</a>  	N  g*		like "*", but also find partial matches
<a href="/neovim-docs-web/en/pattern#g%23">g#</a>  	N  g#		like "#", but also find partial matches
<a href="/neovim-docs-web/en/pattern#gd">gd</a>  	   gd		goto local declaration of identifier under the cursor
<a href="/neovim-docs-web/en/pattern#gD">gD</a>  	   gD		goto global declaration of identifier under the cursor</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/pattern#pattern">pattern</a>  		Special characters in search patterns</div>
<div class="old-help-para"><div class="help-column_heading">			meaning		      magic   nomagic</div>		matches any single character	.	\.
		       matches start of line	^	^
			       matches <code>&lt;EOL&gt;</code>	$	$
		       matches start of word	\&lt;	\&lt;
			 matches end of word	\&gt;	\&gt;
	matches a single char from the range	[a-z]	\[a-z]
      matches a single char not in the range	[^a-z]	\[^a-z]
		  matches an identifier char	\i	\i
		   idem but excluding digits	\I	\I
		 matches a keyword character	\k	\k
		   idem but excluding digits	\K	\K
	       matches a file name character	\f	\f
		   idem but excluding digits	\F	\F
	       matches a printable character	\p	\p
		   idem but excluding digits	\P	\P
	     matches a white space character	\s	\s
	 matches a non-white space character	\S	\S</div>
<div class="old-help-para">			       matches <code>&lt;Esc&gt;</code>	\e	\e
			       matches <code>&lt;Tab&gt;</code>	\t	\t
				matches <code>&lt;CR&gt;</code>	\r	\r
				matches <code>&lt;BS&gt;</code>	\b	\b</div>
<div class="old-help-para">     matches 0 or more of the preceding atom	*	\*
     matches 1 or more of the preceding atom	\+	\+
	matches 0 or 1 of the preceding atom	\=	\=
	matches 2 to 5 of the preceding atom	\{2,5}  \{2,5}
		  separates two alternatives	\|	\|
		group a pattern into an atom	\(\)	\(\)</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/pattern#search-offset">search-offset</a>  		Offsets allowed after search command</div>
<div class="old-help-para">    [num]	[num] lines downwards, in column 1
    +[num]	[num] lines downwards, in column 1
    -[num]	[num] lines upwards, in column 1
    e[+num]	[num] characters to the right of the end of the match
    e[-num]	[num] characters to the left of the end of the match
    s[+num]	[num] characters to the right of the start of the match
    s[-num]	[num] characters to the left of the start of the match
    b[+num]	[num] identical to s[+num] above (mnemonic: begin)
    b[-num]	[num] identical to s[-num] above (mnemonic: begin)
    ;{search-command}	execute <code>{search-command}</code> next</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_ma"></a><span class="help-tag">Q_ma</span>  		Marks and motions</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/motion#m">m</a>        m{a-zA-Z}	mark current position with mark <code>{a-zA-Z}</code>
<a href="/neovim-docs-web/en/motion#%60a">`a</a>{a-z}	go to mark {a-z} within current file
<a href="/neovim-docs-web/en/motion#%60A">`A</a>{A-Z}	go to mark {A-Z} in any file
<a href="/neovim-docs-web/en/motion#%600">`0</a>{0-9}	go to the position where Vim was previously exited
<a href="/neovim-docs-web/en/motion#%60%60">``</a>       ``		go to the position before the last jump
<a href="/neovim-docs-web/en/motion#%60quote">`quote</a>"		go to the position when last editing this file
<a href="/neovim-docs-web/en/motion#%60%5B">`[</a>[		go to the start of the previously operated or put text
<a href="/neovim-docs-web/en/motion#%60%5D">`]</a>]		go to the end of the previously operated or put text
<a href="/neovim-docs-web/en/motion#%60%3C">`&lt;</a>&lt;		go to the start of the (previous) Visual area
<a href="/neovim-docs-web/en/motion#%60%3E">`&gt;</a>&gt;		go to the end of the (previous) Visual area
<a href="/neovim-docs-web/en/motion#%60.">`.</a>.		go to the position of the last change in this file
|'|        '{a-zA-Z0-9[]'"&lt;&gt;.}
			same as, but on the first non-blank in the line
<a href="/neovim-docs-web/en/motion#%3Amarks">:marks</a>  :marks	print the active marks
<a href="/neovim-docs-web/en/motion#CTRL-O">CTRL-O</a>  N  <code>CTRL-O</code>	go to Nth older position in jump list
<a href="/neovim-docs-web/en/motion#CTRL-I">CTRL-I</a>  N  <code>CTRL-I</code>	go to Nth newer position in jump list
<a href="/neovim-docs-web/en/motion#%3Aju">:ju</a>     :ju[mps]	print the jump list</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_vm"></a><span class="help-tag">Q_vm</span>  		Various motions</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/motion#%25">%</a>  	   %		find the next brace, bracket, comment, or "#if"/
			   "#else"/"#endif" in this line and go to its match
<a href="/neovim-docs-web/en/motion#H">H</a>  	N  H		go to the Nth line in the window, on the first
			   non-blank
<a href="/neovim-docs-web/en/motion#M">M</a>  	   M		go to the middle line in the window, on the first
			   non-blank
<a href="/neovim-docs-web/en/motion#L">L</a>  	N  L		go to the Nth line from the bottom, on the first
			   non-blank</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/motion#go">go</a>  	N  go			go to Nth byte in the buffer
<a href="/neovim-docs-web/en/motion#%3Ago">:go</a>  	:[range]go[to] [off]	go to [off] byte in the buffer</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_ta"></a><span class="help-tag">Q_ta</span>  		Using tags</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/tagsrch#%3Ata">:ta</a>      :ta[g][!] <code>{tag}</code>	jump to tag <code>{tag}</code>
<a href="/neovim-docs-web/en/tagsrch#%3Ata">:ta</a>      :[count]ta[g][!]	jump to [count]'th newer tag in tag list
<a href="/neovim-docs-web/en/tagsrch#CTRL-%5D">CTRL-]</a>      <code>CTRL-]</code>		jump to the tag under cursor, unless changes
				   have been made
<a href="/neovim-docs-web/en/tagsrch#%3Ats">:ts</a>      :ts[elect][!] [tag]	list matching tags and select one to jump to
<a href="/neovim-docs-web/en/tagsrch#%3Atjump">:tjump</a>   :tj[ump][!] [tag]	jump to tag [tag] or select from list when
				   there are multiple matches
<a href="/neovim-docs-web/en/tagsrch#%3Altag">:ltag</a>    :lt[ag][!] [tag]	jump to tag [tag] and add matching tags to the
				   location list</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/tagsrch#%3Atags">:tags</a>    :tags		print tag list
<a href="/neovim-docs-web/en/tagsrch#CTRL-T">CTRL-T</a>   N  <code>CTRL-T</code>		jump back from Nth older tag in tag list
<a href="/neovim-docs-web/en/tagsrch#%3Apo">:po</a>      :[count]po[p][!]	jump back from [count]'th older tag in tag list
<a href="/neovim-docs-web/en/tagsrch#%3Atnext">:tnext</a>   :[count]tn[ext][!]	jump to [count]'th next matching tag
<a href="/neovim-docs-web/en/tagsrch#%3Atp">:tp</a>      :[count]tp[revious][!] jump to [count]'th previous matching tag
<a href="/neovim-docs-web/en/tagsrch#%3Atr">:tr</a>      :[count]tr[ewind][!]	jump to [count]'th matching tag
<a href="/neovim-docs-web/en/tagsrch#%3Atl">:tl</a>      :tl[ast][!]		jump to last matching tag</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/windows#%3Aptag">:ptag</a>    :pt[ag] <code>{tag}</code>	open a preview window to show tag <code>{tag}</code>
<a href="/neovim-docs-web/en/windows#CTRL-W_%7D">CTRL-W_}</a>    <code>CTRL-W</code> }		like <code>CTRL-]</code> but show tag in preview window
<a href="/neovim-docs-web/en/tagsrch#%3Apts">:pts</a>     :pts[elect]		like ":tselect" but show tag in preview window
<a href="/neovim-docs-web/en/tagsrch#%3Aptjump">:ptjump</a>  :ptj[ump]		like ":tjump" but show tag in preview window
<a href="/neovim-docs-web/en/windows#%3Apclose">:pclose</a>  :pc[lose]		close tag preview window
<a href="/neovim-docs-web/en/windows#CTRL-W_z">CTRL-W_z</a>    <code>CTRL-W</code> z		close tag preview window</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_sc"></a><span class="help-tag">Q_sc</span>  		Scrolling</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/scroll#CTRL-E">CTRL-E</a>  	N  <code>CTRL-E</code>	window N lines downwards (default: 1)
<a href="/neovim-docs-web/en/scroll#CTRL-D">CTRL-D</a>  	N  <code>CTRL-D</code>	window N lines Downwards (default: 1/2 window)
<a href="/neovim-docs-web/en/scroll#CTRL-F">CTRL-F</a>  	N  <code>CTRL-F</code>	window N pages Forwards (downwards)
<a href="/neovim-docs-web/en/scroll#CTRL-Y">CTRL-Y</a>  	N  <code>CTRL-Y</code>	window N lines upwards (default: 1)
<a href="/neovim-docs-web/en/scroll#CTRL-U">CTRL-U</a>  	N  <code>CTRL-U</code>	window N lines Upwards (default: 1/2 window)
<a href="/neovim-docs-web/en/scroll#CTRL-B">CTRL-B</a>  	N  <code>CTRL-B</code>	window N pages Backwards (upwards)
<a href="/neovim-docs-web/en/scroll#z%3CCR%3E">z&lt;CR&gt;</a>  		   z&lt;CR&gt; or zt	redraw, current line at top of window
<a href="/neovim-docs-web/en/scroll#z.">z.</a>  		   z.	 or zz	redraw, current line at center of window
<a href="/neovim-docs-web/en/scroll#z-">z-</a>  		   z-	 or zb	redraw, current line at bottom of window</div>
<div class="old-help-para">These only work when <a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> is off:
<a href="/neovim-docs-web/en/scroll#zh">zh</a>  		N  zh		scroll screen N characters to the right
<a href="/neovim-docs-web/en/scroll#zl">zl</a>  		N  zl		scroll screen N characters to the left
<a href="/neovim-docs-web/en/scroll#zH">zH</a>  		N  zH		scroll screen half a screenwidth to the right
<a href="/neovim-docs-web/en/scroll#zL">zL</a>  		N  zL		scroll screen half a screenwidth to the left</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_in"></a><span class="help-tag">Q_in</span>  		Inserting text</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/insert#a">a</a>  	N  a	append text after the cursor (N times)
<a href="/neovim-docs-web/en/insert#A">A</a>  	N  A	append text at the end of the line (N times)
<a href="/neovim-docs-web/en/insert#i">i</a>  	N  i	insert text before the cursor (N times) (also: <code>&lt;Insert&gt;</code>)
<a href="/neovim-docs-web/en/insert#I">I</a>  	N  I	insert text before the first non-blank in the line (N times)
<a href="/neovim-docs-web/en/insert#gI">gI</a>  	N  gI	insert text in column 1 (N times)
<a href="/neovim-docs-web/en/insert#o">o</a>  	N  o	open a new line below the current line, append text (N times)
<a href="/neovim-docs-web/en/insert#O">O</a>  	N  O	open a new line above the current line, append text (N times)
<a href="/neovim-docs-web/en/insert#%3Astartinsert">:startinsert</a>  :star[tinsert][!]  start Insert mode, append when [!] used
<a href="/neovim-docs-web/en/insert#%3Astartreplace">:startreplace</a> :startr[eplace][!]  start Replace mode, at EOL when [!] used</div>
<div class="old-help-para">in Visual block mode:
<a href="/neovim-docs-web/en/visual#v_b_I">v_b_I</a>  	   I	insert the same text in front of all the selected lines
<a href="/neovim-docs-web/en/visual#v_b_A">v_b_A</a>  	   A	append the same text after all the selected lines</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_ai"></a><span class="help-tag">Q_ai</span>  		Insert mode keys</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/vimindex#insert-index">insert-index</a>  	alphabetical index of Insert mode commands</div>
<div class="old-help-para">leaving Insert mode:
<a href="/neovim-docs-web/en/insert#i_%3CEsc%3E">i_&lt;Esc&gt;</a>  	<code>&lt;Esc&gt;</code>		  end Insert mode, back to Normal mode
<a href="/neovim-docs-web/en/insert#i_CTRL-C">i_CTRL-C</a>  	<code>CTRL-C</code>		  like <code>&lt;Esc&gt;</code>, but do not use an abbreviation
<a href="/neovim-docs-web/en/insert#i_CTRL-O">i_CTRL-O</a>  	<code>CTRL-O</code> <code>{command}</code>  execute <code>{command}</code> and return to Insert mode</div>
<div class="old-help-para">moving around:
<a href="/neovim-docs-web/en/insert#i_%3CUp%3E">i_&lt;Up&gt;</a>  	cursor keys	  move cursor left/right/up/down
<a href="/neovim-docs-web/en/insert#i_%3CS-Left%3E">i_&lt;S-Left&gt;</a>  	shift-left/right  one word left/right
<a href="/neovim-docs-web/en/insert#i_%3CS-Up%3E">i_&lt;S-Up&gt;</a>  	shift-up/down	  one screenful backward/forward
<a href="/neovim-docs-web/en/insert#i_%3CEnd%3E">i_&lt;End&gt;</a>  	<code>&lt;End&gt;</code>		  cursor after last character in the line
<a href="/neovim-docs-web/en/insert#i_%3CHome%3E">i_&lt;Home&gt;</a>  	<code>&lt;Home&gt;</code>		  cursor to first character in the line</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_ss"></a><span class="help-tag">Q_ss</span>  		Special keys in Insert mode</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/insert#i_CTRL-V">i_CTRL-V</a>  	<code>CTRL-V</code> <code>{char}</code>..	  insert character literally, or enter decimal
				     byte value
<a href="/neovim-docs-web/en/insert#i_%3CNL%3E">i_&lt;NL&gt;</a>  	<code>&lt;NL&gt;</code> or <code>&lt;CR&gt;</code> or <code>CTRL-M</code> or <code>CTRL-J</code>
				  begin new line
<a href="/neovim-docs-web/en/insert#i_CTRL-E">i_CTRL-E</a>  	<code>CTRL-E</code>		  insert the character from below the cursor
<a href="/neovim-docs-web/en/insert#i_CTRL-Y">i_CTRL-Y</a>  	<code>CTRL-Y</code>		  insert the character from above the cursor</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/insert#i_CTRL-A">i_CTRL-A</a>  	<code>CTRL-A</code>		  insert previously inserted text
<a href="/neovim-docs-web/en/insert#i_CTRL-%40">i_CTRL-@</a>  	<code>CTRL-@</code>		  insert previously inserted text and stop
				     Insert mode
<a href="/neovim-docs-web/en/insert#i_CTRL-R">i_CTRL-R</a>  	<code>CTRL-R</code> <code>{register}</code> insert the contents of a register</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/insert#i_CTRL-N">i_CTRL-N</a>  	<code>CTRL-N</code>		  insert next match of identifier before the
				     cursor
<a href="/neovim-docs-web/en/insert#i_CTRL-P">i_CTRL-P</a>  	<code>CTRL-P</code>		  insert previous match of identifier before
				     the cursor
<a href="/neovim-docs-web/en/insert#i_CTRL-X">i_CTRL-X</a>  	<code>CTRL-X</code> ...	  complete the word before the cursor in
				     various ways</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/insert#i_%3CBS%3E">i_&lt;BS&gt;</a>  	<code>&lt;BS&gt;</code> or <code>CTRL-H</code>	  delete the character before the cursor
<a href="/neovim-docs-web/en/insert#i_%3CDel%3E">i_&lt;Del&gt;</a>  	<code>&lt;Del&gt;</code>		  delete the character under the cursor
<a href="/neovim-docs-web/en/insert#i_CTRL-W">i_CTRL-W</a>  	<code>CTRL-W</code>		  delete word before the cursor
<a href="/neovim-docs-web/en/insert#i_CTRL-U">i_CTRL-U</a>  	<code>CTRL-U</code>		  delete all entered characters in the current
				     line
<a href="/neovim-docs-web/en/insert#i_CTRL-T">i_CTRL-T</a>  	<code>CTRL-T</code>		  insert one shiftwidth of indent in front of
				       the current line
<a href="/neovim-docs-web/en/insert#i_CTRL-D">i_CTRL-D</a>  	<code>CTRL-D</code>		  delete one shiftwidth of indent in front of
				     the current line
<a href="/neovim-docs-web/en/insert#i_0_CTRL-D">i_0_CTRL-D</a>  	0 <code>CTRL-D</code>	  delete all indent in the current line
<a href="/neovim-docs-web/en/insert#i_%5E_CTRL-D">i_^_CTRL-D</a>  	^ <code>CTRL-D</code>	  delete all indent in the current line,
				     restore indent in next line</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_di"></a><span class="help-tag">Q_di</span>  		Digraphs</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/digraph#%3Adig">:dig</a>  	   :dig[raphs]		show current list of digraphs
<a href="/neovim-docs-web/en/digraph#%3Adig">:dig</a>  	   :dig[raphs] <code>{char1}</code><code>{char2}</code> <code>{number}</code> ...
				add digraph(s) to the list</div>
<div class="old-help-para">In Insert or Command-line mode:
<a href="/neovim-docs-web/en/insert#i_CTRL-K">i_CTRL-K</a>  	<code>CTRL-K</code> <code>{char1}</code> <code>{char2}</code>
				  enter digraph
<a href="/neovim-docs-web/en/digraph#i_digraph">i_digraph</a>  	<code>{char1}</code> <code>&lt;BS&gt;</code> <code>{char2}</code>
				  enter digraph if <a href="/neovim-docs-web/en/options#'digraph'">'digraph'</a> option set</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_si"></a><span class="help-tag">Q_si</span>  		Special inserts</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/insert#%3Ar">:r</a>  	   :r [file]	   insert the contents of [file] below the cursor
<a href="/neovim-docs-web/en/insert#%3Ar%21">:r!</a>  	   :r! <code>{command}</code>   insert the standard output of <code>{command}</code> below the
			      cursor</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_de"></a><span class="help-tag">Q_de</span>  		Deleting text</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/change#x">x</a>  	N  x		delete N characters under and after the cursor
<a href="/neovim-docs-web/en/change#%3CDel%3E">&lt;Del&gt;</a>  	N  <code>&lt;Del&gt;</code>	delete N characters under and after the cursor
<a href="/neovim-docs-web/en/change#X">X</a>  	N  X		delete N characters before the cursor
<a href="/neovim-docs-web/en/change#d">d</a>  	N  d{motion}	delete the text that is moved over with <code>{motion}</code>
<a href="/neovim-docs-web/en/change#v_d">v_d</a>  	   <code>{visual}</code>d	delete the highlighted text
<a href="/neovim-docs-web/en/change#dd">dd</a>  	N  dd		delete N lines
<a href="/neovim-docs-web/en/change#D">D</a>  	N  D		delete to the end of the line (and N-1 more lines)
<a href="/neovim-docs-web/en/change#J">J</a>  	N  J		join N-1 lines (delete <code>&lt;EOL&gt;</code>s)
<a href="/neovim-docs-web/en/change#v_J">v_J</a>  	   <code>{visual}</code>J	join the highlighted lines
<a href="/neovim-docs-web/en/change#gJ">gJ</a>  	N  gJ		like "J", but without inserting spaces
<a href="/neovim-docs-web/en/change#v_gJ">v_gJ</a>  	   <code>{visual}</code>gJ	like "{visual}J", but without inserting spaces
<a href="/neovim-docs-web/en/change#%3Ad">:d</a>  	:[range]d [x]	delete [range] lines [into register x]</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_cm"></a><span class="help-tag">Q_cm</span>  		Copying and moving text</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/change#quote">quote</a>  	  "{char}	use register <code>{char}</code> for the next delete, yank, or put
<a href="/neovim-docs-web/en/change#%3Areg">:reg</a>  	  :reg		show the contents of all registers
<a href="/neovim-docs-web/en/change#%3Areg">:reg</a>  	  :reg <code>{arg}</code>	show the contents of registers mentioned in <code>{arg}</code>
<a href="/neovim-docs-web/en/change#y">y</a>  	  N  y{motion}	yank the text moved over with <code>{motion}</code> into a register
<a href="/neovim-docs-web/en/change#v_y">v_y</a>  	     <code>{visual}</code>y	yank the highlighted text into a register
<a href="/neovim-docs-web/en/change#yy">yy</a>  	  N  yy		yank N lines into a register
<a href="/neovim-docs-web/en/change#Y">Y</a>  	  N  Y		yank N lines into a register
			Note: Mapped to "y$" by default. <a href="/neovim-docs-web/en/vim_diff#default-mappings">default-mappings</a>
<a href="/neovim-docs-web/en/change#p">p</a>  	  N  p		put a register after the cursor position (N times)
<a href="/neovim-docs-web/en/change#P">P</a>  	  N  P		put a register before the cursor position (N times)
<a href="/neovim-docs-web/en/change#%5Dp">]p</a>  	  N  ]p		like p, but adjust indent to current line
<a href="/neovim-docs-web/en/change#%5Bp">[p</a>  	  N  [p		like P, but adjust indent to current line
<a href="/neovim-docs-web/en/change#gp">gp</a>  	  N  gp		like p, but leave cursor after the new text
<a href="/neovim-docs-web/en/change#gP">gP</a>  	  N  gP		like P, but leave cursor after the new text</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_ch"></a><span class="help-tag">Q_ch</span>  		Changing text</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/change#r">r</a>  	  N  r{char}	replace N characters with <code>{char}</code>
<a href="/neovim-docs-web/en/change#gr">gr</a>  	  N  gr{char}	replace N characters without affecting layout
<a href="/neovim-docs-web/en/change#R">R</a>  	  N  R		enter Replace mode (repeat the entered text N times)
<a href="/neovim-docs-web/en/change#gR">gR</a>  	  N  gR		enter virtual Replace mode: Like Replace mode but
			   without affecting layout
<a href="/neovim-docs-web/en/visual#v_b_r">v_b_r</a>  	     <code>{visual}</code>r{char}
			in Visual block mode: Replace each char of the
			   selected text with <code>{char}</code></div>
<div class="old-help-para">	(change = delete text and enter Insert mode)
<a href="/neovim-docs-web/en/change#c">c</a>  	  N  c{motion}	change the text that is moved over with <code>{motion}</code>
<a href="/neovim-docs-web/en/change#v_c">v_c</a>  	     <code>{visual}</code>c	change the highlighted text
<a href="/neovim-docs-web/en/change#cc">cc</a>  	  N  cc		change N lines
<a href="/neovim-docs-web/en/change#S">S</a>  	  N  S		change N lines
<a href="/neovim-docs-web/en/change#C">C</a>  	  N  C		change to the end of the line (and N-1 more lines)
<a href="/neovim-docs-web/en/change#s">s</a>  	  N  s		change N characters
<a href="/neovim-docs-web/en/visual#v_b_c">v_b_c</a>  	     <code>{visual}</code>c	in Visual block mode: Change each of the selected
			   lines with the entered text
<a href="/neovim-docs-web/en/visual#v_b_C">v_b_C</a>  	     <code>{visual}</code>C	in Visual block mode: Change each of the selected
			   lines until end-of-line with the entered text</div>
<div class="old-help-para">|~|	  N  ~		switch case for N characters and advance cursor
<a href="/neovim-docs-web/en/change#v_~">v_~</a>  	     <code>{visual}</code>~	switch case for highlighted text
<a href="/neovim-docs-web/en/change#v_u">v_u</a>  	     <code>{visual}</code>u	make highlighted text lowercase
<a href="/neovim-docs-web/en/change#v_U">v_U</a>  	     <code>{visual}</code>U	make highlighted text uppercase
<a href="/neovim-docs-web/en/change#g~">g~</a>  	     g~{motion} switch case for the text that is moved over with
			   <code>{motion}</code>
<a href="/neovim-docs-web/en/change#gu">gu</a>  	     gu{motion} make the text that is moved over with <code>{motion}</code>
			   lowercase
<a href="/neovim-docs-web/en/change#gU">gU</a>  	     gU{motion} make the text that is moved over with <code>{motion}</code>
			   uppercase
<a href="/neovim-docs-web/en/change#v_g%3F">v_g?</a>  	     <code>{visual}</code>g? perform rot13 encoding on highlighted text
<a href="/neovim-docs-web/en/change#g%3F">g?</a>  	     g?{motion} perform rot13 encoding on the text that is moved over
			   with <code>{motion}</code></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/change#CTRL-A">CTRL-A</a>  N  <code>CTRL-A</code>	add N to the number at or after the cursor
<a href="/neovim-docs-web/en/change#CTRL-X">CTRL-X</a>  N  <code>CTRL-X</code>	subtract N from the number at or after the cursor</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/change#%3C">&lt;</a>  	  N  &lt;{motion}	move the lines that are moved over with <code>{motion}</code> one
			   shiftwidth left
<a href="/neovim-docs-web/en/change#%3C%3C">&lt;&lt;</a>  	  N  &lt;&lt;		move N lines one shiftwidth left
|&gt;|	  N  &gt;<code>{motion}</code>	move the lines that are moved over with <code>{motion}</code> one
			   shiftwidth right
<a href="/neovim-docs-web/en/change#%3E%3E">&gt;&gt;</a>  	  N  &gt;&gt;		move N lines one shiftwidth right
<a href="/neovim-docs-web/en/change#gq">gq</a>  	  N  gq{motion}	format the lines that are moved over with <code>{motion}</code> to
			   <a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a> length
<a href="/neovim-docs-web/en/change#%3Ace">:ce</a>  	  :[range]ce[nter] [width]
			center the lines in [range]
<a href="/neovim-docs-web/en/change#%3Ale">:le</a>  	  :[range]le[ft] [indent]
			left-align the lines in [range] (with [indent])
<a href="/neovim-docs-web/en/change#%3Ari">:ri</a>  	  :[range]ri[ght] [width]
			right-align the lines in [range]</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_co"></a><span class="help-tag">Q_co</span>  		Complex changes</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/change#%21">!</a>  	   N  !{motion}{command}&lt;CR&gt;
			filter the lines that are moved over through <code>{command}</code>
<a href="/neovim-docs-web/en/change#%21%21">!!</a>  	   N  !!{command}&lt;CR&gt;
			filter N lines through <code>{command}</code>
<a href="/neovim-docs-web/en/change#v_%21">v_!</a>  	      <code>{visual}</code>!{command}&lt;CR&gt;
			filter the highlighted lines through <code>{command}</code>
<a href="/neovim-docs-web/en/change#%3Arange%21">:range!</a>  :[range]! <code>{command}</code><code>&lt;CR&gt;</code>
			filter [range] lines through <code>{command}</code>
<a href="/neovim-docs-web/en/change#%3D">=</a>  	   N  ={motion}
			filter the lines that are moved over through <a href="/neovim-docs-web/en/options#'equalprg'">'equalprg'</a>
<a href="/neovim-docs-web/en/change#%3D%3D">==</a>  	   N  ==	filter N lines through <a href="/neovim-docs-web/en/options#'equalprg'">'equalprg'</a>
<a href="/neovim-docs-web/en/change#v_%3D">v_=</a>  	      <code>{visual}</code>=
			filter the highlighted lines through <a href="/neovim-docs-web/en/options#'equalprg'">'equalprg'</a>
<a href="/neovim-docs-web/en/change#%3As">:s</a>  	   :[range]s[ubstitute]/{pattern}/{string}/[g][c]
			substitute <code>{pattern}</code> by <code>{string}</code> in [range] lines;
			   with [g], replace all occurrences of <code>{pattern}</code>;
			   with [c], confirm each replacement
<a href="/neovim-docs-web/en/change#%3As">:s</a>  	   :[range]s[ubstitute] [g][c]
			repeat previous ":s" with new range and options
<a href="/neovim-docs-web/en/change#%26">&amp;</a>  	      &amp;		Repeat previous ":s" on current line without options
<a href="/neovim-docs-web/en/change#%3Aret">:ret</a>  	   :[range]ret[ab][!] [tabstop]
			set <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> to new value and adjust white space
			   accordingly</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_vi"></a><span class="help-tag">Q_vi</span>  		Visual mode</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/vimindex#visual-index">visual-index</a>  	list of Visual mode commands.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/visual#v">v</a>        v		start highlighting characters  }  move cursor and use
<a href="/neovim-docs-web/en/visual#V">V</a>        V		start highlighting linewise    }  operator to affect
<a href="/neovim-docs-web/en/visual#CTRL-V">CTRL-V</a>   <code>CTRL-V</code>	start highlighting blockwise   }  highlighted text
<a href="/neovim-docs-web/en/visual#v_o">v_o</a>      o		exchange cursor position with start of highlighting
<a href="/neovim-docs-web/en/visual#gv">gv</a>       gv		start highlighting on previous visual area
<a href="/neovim-docs-web/en/visual#v_v">v_v</a>      v		highlight characters or stop highlighting
<a href="/neovim-docs-web/en/visual#v_V">v_V</a>      V		highlight linewise or stop highlighting
<a href="/neovim-docs-web/en/visual#v_CTRL-V">v_CTRL-V</a> <code>CTRL-V</code>	highlight blockwise or stop highlighting</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_to"></a><span class="help-tag">Q_to</span>  		Text objects (only in Visual mode or after an operator)</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/motion#v_aw">v_aw</a>  	   N  aw	Select "a word"
<a href="/neovim-docs-web/en/motion#v_iw">v_iw</a>  	   N  iw	Select "inner word"
<a href="/neovim-docs-web/en/motion#v_aW">v_aW</a>  	   N  aW	Select "a <a href="/neovim-docs-web/en/motion#WORD">WORD</a>"
<a href="/neovim-docs-web/en/motion#v_iW">v_iW</a>  	   N  iW	Select "inner <a href="/neovim-docs-web/en/motion#WORD">WORD</a>"
<a href="/neovim-docs-web/en/motion#v_as">v_as</a>  	   N  as	Select "a sentence"
<a href="/neovim-docs-web/en/motion#v_is">v_is</a>  	   N  is	Select "inner sentence"
<a href="/neovim-docs-web/en/motion#v_ap">v_ap</a>  	   N  ap	Select "a paragraph"
<a href="/neovim-docs-web/en/motion#v_ip">v_ip</a>  	   N  ip	Select "inner paragraph"
<a href="/neovim-docs-web/en/motion#v_ab">v_ab</a>  	   N  ab	Select "a block" (from "[(" to "])")
<a href="/neovim-docs-web/en/motion#v_ib">v_ib</a>  	   N  ib	Select "inner block" (from "[(" to "])")
<a href="/neovim-docs-web/en/motion#v_aB">v_aB</a>  	   N  aB	Select "a Block" (from "[{" to "]}")
<a href="/neovim-docs-web/en/motion#v_iB">v_iB</a>  	   N  iB	Select "inner Block" (from "[{" to "]}")
<a href="/neovim-docs-web/en/motion#v_a%3E">v_a&gt;</a>  	   N  a&gt;	Select "a &lt;&gt; block"
<a href="/neovim-docs-web/en/motion#v_i%3E">v_i&gt;</a>  	   N  i&gt;	Select "inner &lt;&gt; block"
<a href="/neovim-docs-web/en/motion#v_at">v_at</a>  	   N  at	Select "a tag block" (from <code>&lt;aaa&gt;</code> to &lt;/aaa&gt;)
<a href="/neovim-docs-web/en/motion#v_it">v_it</a>  	   N  it	Select "inner tag block" (from <code>&lt;aaa&gt;</code> to &lt;/aaa&gt;)
<a href="/neovim-docs-web/en/motion#v_a'">v_a'</a>  	   N  a'	Select "a single quoted string"
<a href="/neovim-docs-web/en/motion#v_i'">v_i'</a>  	   N  i'	Select "inner single quoted string"
<a href="/neovim-docs-web/en/motion#v_aquote">v_aquote</a> N  a"	Select "a double quoted string"
<a href="/neovim-docs-web/en/motion#v_iquote">v_iquote</a> N  i"	Select "inner double quoted string"
<a href="/neovim-docs-web/en/motion#v_a%60">v_a`</a>  	   N  a`	Select "a backward quoted string"
<a href="/neovim-docs-web/en/motion#v_i%60">v_i`</a>  	   N  i`	Select "inner backward quoted string"</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_re"></a><span class="help-tag">Q_re</span>  		Repeating commands</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/repeat#.">.</a>  	   N  .		repeat last change (with count replaced with N)
<a href="/neovim-docs-web/en/repeat#q">q</a>  	      q{a-z}	record typed characters into register <code>{a-z}</code>
<a href="/neovim-docs-web/en/repeat#q">q</a>  	      q{A-Z}	record typed characters, appended to register <code>{a-z}</code>
<a href="/neovim-docs-web/en/repeat#q">q</a>  	      q		stop recording
<a href="/neovim-docs-web/en/repeat#Q">Q</a>  	      Q		replay last recorded macro
<a href="/neovim-docs-web/en/repeat#%40">@</a>  	   N  @{a-z}	execute the contents of register <code>{a-z}</code> (N times)
<a href="/neovim-docs-web/en/repeat#%40%40">@@</a>  	   N  @@	   repeat previous @{a-z} (N times)
<a href="/neovim-docs-web/en/repeat#%3A%40">:@</a>  	   :@{a-z}	execute the contents of register <code>{a-z}</code> as an Ex
			   command
<a href="/neovim-docs-web/en/repeat#%3A%40%40">:@@</a>  	   :@@		repeat previous :@{a-z}
<a href="/neovim-docs-web/en/repeat#%3Ag">:g</a>  	   :[range]g[lobal]/{pattern}/[cmd]
			execute Ex command [cmd] (default: ":p") on the lines
			   within [range] where <code>{pattern}</code> matches
<a href="/neovim-docs-web/en/repeat#%3Ag">:g</a>  	   :[range]g[lobal]!/{pattern}/[cmd]
			execute Ex command [cmd] (default: ":p") on the lines
			   within [range] where <code>{pattern}</code> does NOT match
<a href="/neovim-docs-web/en/repeat#%3Aso">:so</a>  	   :so[urce] <code>{file}</code>
			read Ex commands from <code>{file}</code>
<a href="/neovim-docs-web/en/repeat#%3Aso">:so</a>  	   :so[urce]! <code>{file}</code>
			read Vim commands from <code>{file}</code>
<a href="/neovim-docs-web/en/various#%3Asl">:sl</a>  	   :sl[eep] [sec]
			don't do anything for [sec] seconds
<a href="/neovim-docs-web/en/various#gs">gs</a>  	   N  gs	goto Sleep for N seconds</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_km"></a><span class="help-tag">Q_km</span>  		Key mapping</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/map#%3Amap">:map</a>       :ma[p] <code>{lhs}</code> <code>{rhs}</code>	  map <code>{lhs}</code> to <code>{rhs}</code> in Normal and Visual mode
<a href="/neovim-docs-web/en/map#%3Amap%21">:map!</a>      :ma[p]! <code>{lhs}</code> <code>{rhs}</code>  map <code>{lhs}</code> to <code>{rhs}</code> in Insert and Command-line
				     mode
<a href="/neovim-docs-web/en/map#%3Anoremap">:noremap</a>   :no[remap][!] <code>{lhs}</code> <code>{rhs}</code>
				  same as ":map", no remapping for this <code>{rhs}</code>
<a href="/neovim-docs-web/en/map#%3Aunmap">:unmap</a>     :unm[ap] <code>{lhs}</code>	  remove the mapping of <code>{lhs}</code> for Normal and
				     Visual mode
<a href="/neovim-docs-web/en/map#%3Aunmap%21">:unmap!</a>    :unm[ap]! <code>{lhs}</code>	  remove the mapping of <code>{lhs}</code> for Insert and
				     Command-line mode
<a href="/neovim-docs-web/en/map#%3Amap_l">:map_l</a>     :ma[p] [lhs]	  list mappings (starting with [lhs]) for
				     Normal and Visual mode
<a href="/neovim-docs-web/en/map#%3Amap_l%21">:map_l!</a>    :ma[p]! [lhs]	  list mappings (starting with [lhs]) for
				     Insert and Command-line mode
<a href="/neovim-docs-web/en/map#%3Acmap">:cmap</a>      :cmap/:cunmap/:cnoremap
				  like ":map!"/":unmap!"/":noremap!" but for
				     Command-line mode only
<a href="/neovim-docs-web/en/map#%3Aimap">:imap</a>      :imap/:iunmap/:inoremap
				  like ":map!"/":unmap!"/":noremap!" but for
				     Insert mode only
<a href="/neovim-docs-web/en/map#%3Anmap">:nmap</a>      :nmap/:nunmap/:nnoremap
				  like ":map"/":unmap"/":noremap" but for
				     Normal mode only
<a href="/neovim-docs-web/en/map#%3Avmap">:vmap</a>      :vmap/:vunmap/:vnoremap
				  like ":map"/":unmap"/":noremap" but for
				     Visual mode only
<a href="/neovim-docs-web/en/map#%3Aomap">:omap</a>      :omap/:ounmap/:onoremap
				  like ":map"/":unmap"/":noremap" but only for
				     when an operator is pending
<a href="/neovim-docs-web/en/map#%3Amapc">:mapc</a>      :mapc[lear]	  remove mappings for Normal and Visual mode
<a href="/neovim-docs-web/en/map#%3Amapc">:mapc</a>      :mapc[lear]!	  remove mappings for Insert and Cmdline mode
<a href="/neovim-docs-web/en/map#%3Aimapc">:imapc</a>     :imapc[lear]	  remove mappings for Insert mode
<a href="/neovim-docs-web/en/map#%3Avmapc">:vmapc</a>     :vmapc[lear]	  remove mappings for Visual mode
<a href="/neovim-docs-web/en/map#%3Aomapc">:omapc</a>     :omapc[lear]	  remove mappings for Operator-pending mode
<a href="/neovim-docs-web/en/map#%3Anmapc">:nmapc</a>     :nmapc[lear]	  remove mappings for Normal mode
<a href="/neovim-docs-web/en/map#%3Acmapc">:cmapc</a>     :cmapc[lear]	  remove mappings for Cmdline mode
<a href="/neovim-docs-web/en/starting#%3Amkexrc">:mkexrc</a>    :mk[exrc][!] [file]  write current mappings, abbreviations, and
				     settings to [file] (default: ".exrc";
				     use ! to overwrite)
<a href="/neovim-docs-web/en/starting#%3Amkvimrc">:mkvimrc</a>   :mkv[imrc][!] [file]
				  same as :mkexrc, but with default ".nvimrc"
<a href="/neovim-docs-web/en/starting#%3Amksession">:mksession</a> :mks[ession][!] [file]
				  like ":mkvimrc", but store current files,
				     windows, etc. too, to be able to continue
				     this session later</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_ab"></a><span class="help-tag">Q_ab</span>  		Abbreviations</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/map#%3Aabbreviate">:abbreviate</a>  	:ab[breviate] <code>{lhs}</code> <code>{rhs}</code>  add abbreviation for <code>{lhs}</code> to <code>{rhs}</code>
<a href="/neovim-docs-web/en/map#%3Aabbreviate">:abbreviate</a>  	:ab[breviate] <code>{lhs}</code>	   show abbr's that start with <code>{lhs}</code>
<a href="/neovim-docs-web/en/map#%3Aabbreviate">:abbreviate</a>  	:ab[breviate]		   show all abbreviations
<a href="/neovim-docs-web/en/map#%3Aunabbreviate">:unabbreviate</a>  	:una[bbreviate] <code>{lhs}</code>	   remove abbreviation for <code>{lhs}</code>
<a href="/neovim-docs-web/en/map#%3Anoreabbrev">:noreabbrev</a>  	:norea[bbrev] [lhs] [rhs]  like ":ab", but don't remap [rhs]
<a href="/neovim-docs-web/en/map#%3Aiabbrev">:iabbrev</a>  	:iab/:iunab/:inoreab	   like ":ab", but only for Insert mode
<a href="/neovim-docs-web/en/map#%3Acabbrev">:cabbrev</a>  	:cab/:cunab/:cnoreab	   like ":ab", but only for
						Command-line mode
<a href="/neovim-docs-web/en/map#%3Aabclear">:abclear</a>  	:abc[lear]		   remove all abbreviations
<a href="/neovim-docs-web/en/map#%3Acabclear">:cabclear</a>  	:cabc[lear]		   remove all abbr's for Cmdline mode
<a href="/neovim-docs-web/en/map#%3Aiabclear">:iabclear</a>  	:iabc[lear]		   remove all abbr's for Insert mode</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_op"></a><span class="help-tag">Q_op</span>  		Options</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/options#%3Aset">:set</a>  		:se[t]			  show all modified options
<a href="/neovim-docs-web/en/options#%3Aset">:set</a>  		:se[t] all		  show all options
<a href="/neovim-docs-web/en/options#%3Aset">:set</a>  		:se[t] <code>{option}</code>		  set boolean option (switch it on),
					  show string or number option
<a href="/neovim-docs-web/en/options#%3Aset">:set</a>  		:se[t] no{option}	  reset boolean option (switch it off)
<a href="/neovim-docs-web/en/options#%3Aset">:set</a>  		:se[t] inv{option}	  invert boolean option
<a href="/neovim-docs-web/en/options#%3Aset">:set</a>  		:se[t] <code>{option}</code>={value}	  set string/number option to <code>{value}</code>
<a href="/neovim-docs-web/en/options#%3Aset">:set</a>  		:se[t] <code>{option}</code>+={value}  append <code>{value}</code> to string option, add
					  <code>{value}</code> to number option
<a href="/neovim-docs-web/en/options#%3Aset">:set</a>  		:se[t] <code>{option}</code>-={value}  remove <code>{value}</code> to string option,
					  subtract <code>{value}</code> from number option
<a href="/neovim-docs-web/en/options#%3Aset">:set</a>  		:se[t] <code>{option}</code>?	  show value of <code>{option}</code>
<a href="/neovim-docs-web/en/options#%3Aset">:set</a>  		:se[t] <code>{option}</code>&amp;	  reset <code>{option}</code> to its default value</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/options#%3Asetlocal">:setlocal</a>  	:setl[ocal]		  like ":set" but set the local value
					  for options that have one
<a href="/neovim-docs-web/en/options#%3Asetglobal">:setglobal</a>  	:setg[lobal]		  like ":set" but set the global value
					  of a local option</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/options#%3Aoptions">:options</a>  	:opt[ions]		  open a new window to view and set
					  options, grouped by functionality,
					  a one line explanation and links to
					  the help</div>
<div class="old-help-para">Short explanation of each option:		<a name="option-list"></a><code class="help-tag-right">option-list</code>
<a href="/neovim-docs-web/en/options#'aleph'">'aleph'</a>		  <a href="/neovim-docs-web/en/options#'al'">'al'</a>	    ASCII code of the letter Aleph (Hebrew)
<a href="/neovim-docs-web/en/options#'allowrevins'">'allowrevins'</a>	  <a href="/neovim-docs-web/en/options#'ari'">'ari'</a>     allow <code>CTRL-_</code> in Insert and Command-line mode
<a href="/neovim-docs-web/en/options#'ambiwidth'">'ambiwidth'</a>	  <a href="/neovim-docs-web/en/options#'ambw'">'ambw'</a>    what to do with Unicode chars of ambiguous width
<a href="/neovim-docs-web/en/options#'autochdir'">'autochdir'</a>	  <a href="/neovim-docs-web/en/options#'acd'">'acd'</a>     change directory to the file in the current window
<a href="/neovim-docs-web/en/options#'arabic'">'arabic'</a>	  <a href="/neovim-docs-web/en/options#'arab'">'arab'</a>    for Arabic as a default second language
<a href="/neovim-docs-web/en/options#'arabicshape'">'arabicshape'</a>	  <a href="/neovim-docs-web/en/options#'arshape'">'arshape'</a> do shaping for Arabic characters
<a href="/neovim-docs-web/en/options#'autoindent'">'autoindent'</a>	  <a href="/neovim-docs-web/en/options#'ai'">'ai'</a>	    take indent for new line from previous line
<a href="/neovim-docs-web/en/options#'autoread'">'autoread'</a>	  <a href="/neovim-docs-web/en/options#'ar'">'ar'</a>	    autom. read file when changed outside of Vim
<a href="/neovim-docs-web/en/options#'autowrite'">'autowrite'</a>	  <a href="/neovim-docs-web/en/options#'aw'">'aw'</a>	    automatically write file if changed
<a href="/neovim-docs-web/en/options#'autowriteall'">'autowriteall'</a>	  <a href="/neovim-docs-web/en/options#'awa'">'awa'</a>     as <a href="/neovim-docs-web/en/options#'autowrite'">'autowrite'</a>, but works with more commands
<a href="/neovim-docs-web/en/options#'background'">'background'</a>	  <a href="/neovim-docs-web/en/options#'bg'">'bg'</a>	    "dark" or "light", used for highlight colors
<a href="/neovim-docs-web/en/options#'backspace'">'backspace'</a>	  <a href="/neovim-docs-web/en/options#'bs'">'bs'</a>	    how backspace works at start of line
<a href="/neovim-docs-web/en/options#'backup'">'backup'</a>	  <a href="/neovim-docs-web/en/options#'bk'">'bk'</a>	    keep backup file after overwriting a file
<a href="/neovim-docs-web/en/options#'backupcopy'">'backupcopy'</a>	  <a href="/neovim-docs-web/en/options#'bkc'">'bkc'</a>     make backup as a copy, don't rename the file
<a href="/neovim-docs-web/en/options#'backupdir'">'backupdir'</a>	  <a href="/neovim-docs-web/en/options#'bdir'">'bdir'</a>    list of directories for the backup file
<a href="/neovim-docs-web/en/options#'backupext'">'backupext'</a>	  <a href="/neovim-docs-web/en/options#'bex'">'bex'</a>     extension used for the backup file
<a href="/neovim-docs-web/en/options#'backupskip'">'backupskip'</a>	  <a href="/neovim-docs-web/en/options#'bsk'">'bsk'</a>     no backup for files that match these patterns
<a href="/neovim-docs-web/en/options#'belloff'">'belloff'</a>	  <a href="/neovim-docs-web/en/options#'bo'">'bo'</a>	    do not ring the bell for these reasons
<a href="/neovim-docs-web/en/options#'binary'">'binary'</a>	  <a href="/neovim-docs-web/en/options#'bin'">'bin'</a>     read/write/edit file in binary mode
<a href="/neovim-docs-web/en/options#'bomb'">'bomb'</a>			    prepend a Byte Order Mark to the file
<a href="/neovim-docs-web/en/options#'breakat'">'breakat'</a>	  <a href="/neovim-docs-web/en/options#'brk'">'brk'</a>     characters that may cause a line break
<a href="/neovim-docs-web/en/options#'breakindent'">'breakindent'</a>	  <a href="/neovim-docs-web/en/options#'bri'">'bri'</a>     wrapped line repeats indent
<a href="/neovim-docs-web/en/options#'breakindentopt'">'breakindentopt'</a>  <a href="/neovim-docs-web/en/options#'briopt'">'briopt'</a>  settings for <a href="/neovim-docs-web/en/options#'breakindent'">'breakindent'</a>
<a href="/neovim-docs-web/en/options#'browsedir'">'browsedir'</a>	  <a href="/neovim-docs-web/en/options#'bsdir'">'bsdir'</a>   which directory to start browsing in
<a href="/neovim-docs-web/en/options#'bufhidden'">'bufhidden'</a>	  <a href="/neovim-docs-web/en/options#'bh'">'bh'</a>	    what to do when buffer is no longer in window
<a href="/neovim-docs-web/en/options#'buflisted'">'buflisted'</a>	  <a href="/neovim-docs-web/en/options#'bl'">'bl'</a>	    whether the buffer shows up in the buffer list
<a href="/neovim-docs-web/en/options#'buftype'">'buftype'</a>	  <a href="/neovim-docs-web/en/options#'bt'">'bt'</a>	    special type of buffer
<a href="/neovim-docs-web/en/options#'casemap'">'casemap'</a>	  <a href="/neovim-docs-web/en/options#'cmp'">'cmp'</a>     specifies how case of letters is changed
<a href="/neovim-docs-web/en/options#'cdhome'">'cdhome'</a>	  <a href="/neovim-docs-web/en/options#'cdh'">'cdh'</a>	    change directory to the home directory by ":cd"
<a href="/neovim-docs-web/en/options#'cdpath'">'cdpath'</a>	  <a href="/neovim-docs-web/en/options#'cd'">'cd'</a>	    list of directories searched with ":cd"
<a href="/neovim-docs-web/en/options#'cedit'">'cedit'</a>			    key used to open the command-line window
<a href="/neovim-docs-web/en/options#'charconvert'">'charconvert'</a>	  <a href="/neovim-docs-web/en/options#'ccv'">'ccv'</a>     expression for character encoding conversion
<a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a>	  <a href="/neovim-docs-web/en/options#'cin'">'cin'</a>     do C program indenting
<a href="/neovim-docs-web/en/options#'cinkeys'">'cinkeys'</a>	  <a href="/neovim-docs-web/en/options#'cink'">'cink'</a>    keys that trigger indent when <a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a> is set
<a href="/neovim-docs-web/en/options#'cinoptions'">'cinoptions'</a>	  <a href="/neovim-docs-web/en/options#'cino'">'cino'</a>    how to do indenting when <a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a> is set
<a href="/neovim-docs-web/en/options#'cinwords'">'cinwords'</a>	  <a href="/neovim-docs-web/en/options#'cinw'">'cinw'</a>    words where <a href="/neovim-docs-web/en/options#'si'">'si'</a> and <a href="/neovim-docs-web/en/options#'cin'">'cin'</a> add an indent
<a href="/neovim-docs-web/en/options#'cinscopedecls'">'cinscopedecls'</a>	  <a href="/neovim-docs-web/en/options#'cinsd'">'cinsd'</a>   words that are recognized by 'cino-g'
<a href="/neovim-docs-web/en/options#'clipboard'">'clipboard'</a>	  <a href="/neovim-docs-web/en/options#'cb'">'cb'</a>	    use the clipboard as the unnamed register
<a href="/neovim-docs-web/en/options#'cmdheight'">'cmdheight'</a>	  <a href="/neovim-docs-web/en/options#'ch'">'ch'</a>	    number of lines to use for the command-line
<a href="/neovim-docs-web/en/options#'cmdwinheight'">'cmdwinheight'</a>	  <a href="/neovim-docs-web/en/options#'cwh'">'cwh'</a>     height of the command-line window
<a href="/neovim-docs-web/en/options#'colorcolumn'">'colorcolumn'</a>	  <a href="/neovim-docs-web/en/options#'cc'">'cc'</a>	    columns to highlight
<a href="/neovim-docs-web/en/options#'columns'">'columns'</a>	  <a href="/neovim-docs-web/en/options#'co'">'co'</a>	    number of columns in the display
<a href="/neovim-docs-web/en/options#'comments'">'comments'</a>	  <a href="/neovim-docs-web/en/options#'com'">'com'</a>     patterns that can start a comment line
<a href="/neovim-docs-web/en/options#'commentstring'">'commentstring'</a>   <a href="/neovim-docs-web/en/options#'cms'">'cms'</a>     template for comments; used for fold marker
<a href="/neovim-docs-web/en/options#'complete'">'complete'</a>	  <a href="/neovim-docs-web/en/options#'cpt'">'cpt'</a>     specify how Insert mode completion works
<a href="/neovim-docs-web/en/options#'completefunc'">'completefunc'</a>	  <a href="/neovim-docs-web/en/options#'cfu'">'cfu'</a>     function to be used for Insert mode completion
<a href="/neovim-docs-web/en/options#'completeopt'">'completeopt'</a>	  <a href="/neovim-docs-web/en/options#'cot'">'cot'</a>     options for Insert mode completion
<a href="/neovim-docs-web/en/options#'completeslash'">'completeslash'</a>	  <a href="/neovim-docs-web/en/options#'csl'">'csl'</a>	    like <a href="/neovim-docs-web/en/options#'shellslash'">'shellslash'</a> for completion
<a href="/neovim-docs-web/en/options#'concealcursor'">'concealcursor'</a>	  <a href="/neovim-docs-web/en/options#'cocu'">'cocu'</a>    whether concealable text is hidden in cursor line
<a href="/neovim-docs-web/en/options#'conceallevel'">'conceallevel'</a>	  <a href="/neovim-docs-web/en/options#'cole'">'cole'</a>    whether concealable text is shown or hidden
<a href="/neovim-docs-web/en/options#'confirm'">'confirm'</a>	  <a href="/neovim-docs-web/en/options#'cf'">'cf'</a>	    ask what to do about unsaved/read-only files
<a href="/neovim-docs-web/en/options#'copyindent'">'copyindent'</a>	  <a href="/neovim-docs-web/en/options#'ci'">'ci'</a>	    make <a href="/neovim-docs-web/en/options#'autoindent'">'autoindent'</a> use existing indent structure
<a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a>	  <a href="/neovim-docs-web/en/options#'cpo'">'cpo'</a>     flags for Vi-compatible behavior
<a href="/neovim-docs-web/en/options#'cursorbind'">'cursorbind'</a>	  <a href="/neovim-docs-web/en/options#'crb'">'crb'</a>     move cursor in window as it moves in other windows
<a href="/neovim-docs-web/en/options#'cursorcolumn'">'cursorcolumn'</a>	  <a href="/neovim-docs-web/en/options#'cuc'">'cuc'</a>	    highlight the screen column of the cursor
<a href="/neovim-docs-web/en/options#'cursorline'">'cursorline'</a>	  <a href="/neovim-docs-web/en/options#'cul'">'cul'</a>	    highlight the screen line of the cursor
<a href="/neovim-docs-web/en/options#'cursorlineopt'">'cursorlineopt'</a>	  <a href="/neovim-docs-web/en/options#'culopt'">'culopt'</a>  settings for <a href="/neovim-docs-web/en/options#'cursorline'">'cursorline'</a>
<a href="/neovim-docs-web/en/options#'debug'">'debug'</a>			    set to "msg" to see all error messages
<a href="/neovim-docs-web/en/options#'define'">'define'</a>	  <a href="/neovim-docs-web/en/options#'def'">'def'</a>     pattern to be used to find a macro definition
<a href="/neovim-docs-web/en/options#'delcombine'">'delcombine'</a>	  <a href="/neovim-docs-web/en/options#'deco'">'deco'</a>    delete combining characters on their own
<a href="/neovim-docs-web/en/options#'dictionary'">'dictionary'</a>	  <a href="/neovim-docs-web/en/options#'dict'">'dict'</a>    list of file names used for keyword completion
<a href="/neovim-docs-web/en/options#'diff'">'diff'</a>			    use diff mode for the current window
<a href="/neovim-docs-web/en/options#'diffexpr'">'diffexpr'</a>	  <a href="/neovim-docs-web/en/options#'dex'">'dex'</a>     expression used to obtain a diff file
<a href="/neovim-docs-web/en/options#'diffopt'">'diffopt'</a>	  <a href="/neovim-docs-web/en/options#'dip'">'dip'</a>     options for using diff mode
<a href="/neovim-docs-web/en/options#'digraph'">'digraph'</a>	  <a href="/neovim-docs-web/en/options#'dg'">'dg'</a>	    enable the entering of digraphs in Insert mode
<a href="/neovim-docs-web/en/options#'directory'">'directory'</a>	  <a href="/neovim-docs-web/en/options#'dir'">'dir'</a>     list of directory names for the swap file
<a href="/neovim-docs-web/en/options#'display'">'display'</a>	  <a href="/neovim-docs-web/en/options#'dy'">'dy'</a>	    list of flags for how to display text
<a href="/neovim-docs-web/en/options#'eadirection'">'eadirection'</a>	  <a href="/neovim-docs-web/en/options#'ead'">'ead'</a>     in which direction <a href="/neovim-docs-web/en/options#'equalalways'">'equalalways'</a> works
<a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a>	  <a href="/neovim-docs-web/en/options#'enc'">'enc'</a>     encoding used internally
<a href="/neovim-docs-web/en/options#'endoffile'">'endoffile'</a>	  <a href="/neovim-docs-web/en/options#'eof'">'eof'</a>     write <code>CTRL-Z</code> at end of the file
<a href="/neovim-docs-web/en/options#'endofline'">'endofline'</a>	  <a href="/neovim-docs-web/en/options#'eol'">'eol'</a>     write <code>&lt;EOL&gt;</code> for last line in file
<a href="/neovim-docs-web/en/options#'equalalways'">'equalalways'</a>	  <a href="/neovim-docs-web/en/options#'ea'">'ea'</a>	    windows are automatically made the same size
<a href="/neovim-docs-web/en/options#'equalprg'">'equalprg'</a>	  <a href="/neovim-docs-web/en/options#'ep'">'ep'</a>	    external program to use for "=" command
<a href="/neovim-docs-web/en/options#'errorbells'">'errorbells'</a>	  <a href="/neovim-docs-web/en/options#'eb'">'eb'</a>	    ring the bell for error messages
<a href="/neovim-docs-web/en/options#'errorfile'">'errorfile'</a>	  <a href="/neovim-docs-web/en/options#'ef'">'ef'</a>	    name of the errorfile for the QuickFix mode
<a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a>	  <a href="/neovim-docs-web/en/options#'efm'">'efm'</a>     description of the lines in the error file
<a href="/neovim-docs-web/en/options#'eventignore'">'eventignore'</a>	  <a href="/neovim-docs-web/en/options#'ei'">'ei'</a>	    autocommand events that are ignored
<a href="/neovim-docs-web/en/options#'expandtab'">'expandtab'</a>	  <a href="/neovim-docs-web/en/options#'et'">'et'</a>	    use spaces when <code>&lt;Tab&gt;</code> is inserted
<a href="/neovim-docs-web/en/options#'exrc'">'exrc'</a>		  <a href="/neovim-docs-web/en/options#'ex'">'ex'</a>	    read .nvimrc and .exrc in the current directory
<a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a>	  <a href="/neovim-docs-web/en/options#'fenc'">'fenc'</a>    file encoding for multibyte text
<a href="/neovim-docs-web/en/options#'fileencodings'">'fileencodings'</a>   <a href="/neovim-docs-web/en/options#'fencs'">'fencs'</a>   automatically detected character encodings
<a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a>	  <a href="/neovim-docs-web/en/options#'ff'">'ff'</a>	    file format used for file I/O
<a href="/neovim-docs-web/en/options#'fileformats'">'fileformats'</a>	  <a href="/neovim-docs-web/en/options#'ffs'">'ffs'</a>     automatically detected values for <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a>
<a href="/neovim-docs-web/en/options#'fileignorecase'">'fileignorecase'</a>  <a href="/neovim-docs-web/en/options#'fic'">'fic'</a>     ignore case when using file names
<a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a>	  <a href="/neovim-docs-web/en/options#'ft'">'ft'</a>	    type of file, used for autocommands
<a href="/neovim-docs-web/en/options#'fillchars'">'fillchars'</a>	  <a href="/neovim-docs-web/en/options#'fcs'">'fcs'</a>     characters to use for displaying special items
<a href="/neovim-docs-web/en/options#'fixendofline'">'fixendofline'</a>	  <a href="/neovim-docs-web/en/options#'fixeol'">'fixeol'</a>  make sure last line in file has <code>&lt;EOL&gt;</code>
<a href="/neovim-docs-web/en/options#'foldclose'">'foldclose'</a>	  <a href="/neovim-docs-web/en/options#'fcl'">'fcl'</a>     close a fold when the cursor leaves it
<a href="/neovim-docs-web/en/options#'foldcolumn'">'foldcolumn'</a>	  <a href="/neovim-docs-web/en/options#'fdc'">'fdc'</a>     width of the column used to indicate folds
<a href="/neovim-docs-web/en/options#'foldenable'">'foldenable'</a>	  <a href="/neovim-docs-web/en/options#'fen'">'fen'</a>     set to display all folds open
<a href="/neovim-docs-web/en/options#'foldexpr'">'foldexpr'</a>	  <a href="/neovim-docs-web/en/options#'fde'">'fde'</a>     expression used when <a href="/neovim-docs-web/en/options#'foldmethod'">'foldmethod'</a> is "expr"
<a href="/neovim-docs-web/en/options#'foldignore'">'foldignore'</a>	  <a href="/neovim-docs-web/en/options#'fdi'">'fdi'</a>     ignore lines when <a href="/neovim-docs-web/en/options#'foldmethod'">'foldmethod'</a> is "indent"
<a href="/neovim-docs-web/en/options#'foldlevel'">'foldlevel'</a>	  <a href="/neovim-docs-web/en/options#'fdl'">'fdl'</a>     close folds with a level higher than this
<a href="/neovim-docs-web/en/options#'foldlevelstart'">'foldlevelstart'</a>  <a href="/neovim-docs-web/en/options#'fdls'">'fdls'</a>    <a href="/neovim-docs-web/en/options#'foldlevel'">'foldlevel'</a> when starting to edit a file
<a href="/neovim-docs-web/en/options#'foldmarker'">'foldmarker'</a>	  <a href="/neovim-docs-web/en/options#'fmr'">'fmr'</a>     markers used when <a href="/neovim-docs-web/en/options#'foldmethod'">'foldmethod'</a> is "marker"
<a href="/neovim-docs-web/en/options#'foldmethod'">'foldmethod'</a>	  <a href="/neovim-docs-web/en/options#'fdm'">'fdm'</a>     folding type
<a href="/neovim-docs-web/en/options#'foldminlines'">'foldminlines'</a>	  <a href="/neovim-docs-web/en/options#'fml'">'fml'</a>     minimum number of lines for a fold to be closed
<a href="/neovim-docs-web/en/options#'foldnestmax'">'foldnestmax'</a>	  <a href="/neovim-docs-web/en/options#'fdn'">'fdn'</a>     maximum fold depth
<a href="/neovim-docs-web/en/options#'foldopen'">'foldopen'</a>	  <a href="/neovim-docs-web/en/options#'fdo'">'fdo'</a>     for which commands a fold will be opened
<a href="/neovim-docs-web/en/options#'foldtext'">'foldtext'</a>	  <a href="/neovim-docs-web/en/options#'fdt'">'fdt'</a>     expression used to display for a closed fold
<a href="/neovim-docs-web/en/options#'formatexpr'">'formatexpr'</a>	  <a href="/neovim-docs-web/en/options#'fex'">'fex'</a>     expression used with "gq" command
<a href="/neovim-docs-web/en/options#'formatlistpat'">'formatlistpat'</a>   <a href="/neovim-docs-web/en/options#'flp'">'flp'</a>     pattern used to recognize a list header
<a href="/neovim-docs-web/en/options#'formatoptions'">'formatoptions'</a>   <a href="/neovim-docs-web/en/options#'fo'">'fo'</a>	    how automatic formatting is to be done
<a href="/neovim-docs-web/en/options#'formatprg'">'formatprg'</a>	  <a href="/neovim-docs-web/en/options#'fp'">'fp'</a>	    name of external program used with "gq" command
<a href="/neovim-docs-web/en/options#'fsync'">'fsync'</a>		  <a href="/neovim-docs-web/en/options#'fs'">'fs'</a>	    whether to invoke fsync() after file write
<a href="/neovim-docs-web/en/options#'gdefault'">'gdefault'</a>	  <a href="/neovim-docs-web/en/options#'gd'">'gd'</a>	    the ":substitute" flag 'g' is default on
<a href="/neovim-docs-web/en/options#'grepformat'">'grepformat'</a>	  <a href="/neovim-docs-web/en/options#'gfm'">'gfm'</a>     format of <a href="/neovim-docs-web/en/options#'grepprg'">'grepprg'</a> output
<a href="/neovim-docs-web/en/options#'grepprg'">'grepprg'</a>	  <a href="/neovim-docs-web/en/options#'gp'">'gp'</a>	    program to use for ":grep"
<a href="/neovim-docs-web/en/options#'guicursor'">'guicursor'</a>	  <a href="/neovim-docs-web/en/options#'gcr'">'gcr'</a>     GUI: settings for cursor shape and blinking
<a href="/neovim-docs-web/en/options#'guifont'">'guifont'</a>	  <a href="/neovim-docs-web/en/options#'gfn'">'gfn'</a>     GUI: Name(s) of font(s) to be used
<a href="/neovim-docs-web/en/options#'guifontwide'">'guifontwide'</a>	  <a href="/neovim-docs-web/en/options#'gfw'">'gfw'</a>     list of font names for double-wide characters
<a href="/neovim-docs-web/en/options#'guioptions'">'guioptions'</a>	  <a href="/neovim-docs-web/en/options#'go'">'go'</a>	    GUI: Which components and options are used
<a href="/neovim-docs-web/en/options#'guitablabel'">'guitablabel'</a>	  <a href="/neovim-docs-web/en/options#'gtl'">'gtl'</a>     GUI: custom label for a tab page
<a href="/neovim-docs-web/en/options#'guitabtooltip'">'guitabtooltip'</a>   <a href="/neovim-docs-web/en/options#'gtt'">'gtt'</a>     GUI: custom tooltip for a tab page
<a href="/neovim-docs-web/en/options#'helpfile'">'helpfile'</a>	  <a href="/neovim-docs-web/en/options#'hf'">'hf'</a>	    full path name of the main help file
<a href="/neovim-docs-web/en/options#'helpheight'">'helpheight'</a>	  <a href="/neovim-docs-web/en/options#'hh'">'hh'</a>	    minimum height of a new help window
<a href="/neovim-docs-web/en/options#'helplang'">'helplang'</a>	  <a href="/neovim-docs-web/en/options#'hlg'">'hlg'</a>     preferred help languages
<a href="/neovim-docs-web/en/options#'hidden'">'hidden'</a>	  <a href="/neovim-docs-web/en/options#'hid'">'hid'</a>     don't unload buffer when it is <a href="/neovim-docs-web/en/editing#abandon">abandon</a>ed
<a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a>	  <a href="/neovim-docs-web/en/options#'hls'">'hls'</a>     highlight matches with last search pattern
<a href="/neovim-docs-web/en/options#'history'">'history'</a>	  <a href="/neovim-docs-web/en/options#'hi'">'hi'</a>	    number of command-lines that are remembered
<a href="/neovim-docs-web/en/options#'hkmap'">'hkmap'</a>		  <a href="/neovim-docs-web/en/options#'hk'">'hk'</a>	    Hebrew keyboard mapping
<a href="/neovim-docs-web/en/options#'hkmapp'">'hkmapp'</a>	  <a href="/neovim-docs-web/en/options#'hkp'">'hkp'</a>     phonetic Hebrew keyboard mapping
<a href="/neovim-docs-web/en/options#'icon'">'icon'</a>			    let Vim set the text of the window icon
<a href="/neovim-docs-web/en/options#'iconstring'">'iconstring'</a>		    string to use for the Vim icon text
<a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a>	  <a href="/neovim-docs-web/en/options#'ic'">'ic'</a>	    ignore case in search patterns
<a href="/neovim-docs-web/en/options#'imcmdline'">'imcmdline'</a>	  <a href="/neovim-docs-web/en/options#'imc'">'imc'</a>     use IM when starting to edit a command line
<a href="/neovim-docs-web/en/options#'imdisable'">'imdisable'</a>	  <a href="/neovim-docs-web/en/options#'imd'">'imd'</a>     do not use the IM in any mode
<a href="/neovim-docs-web/en/options#'iminsert'">'iminsert'</a>	  <a href="/neovim-docs-web/en/options#'imi'">'imi'</a>     use :lmap or IM in Insert mode
<a href="/neovim-docs-web/en/options#'imsearch'">'imsearch'</a>	  <a href="/neovim-docs-web/en/options#'ims'">'ims'</a>     use :lmap or IM when typing a search pattern
<a href="/neovim-docs-web/en/options#'include'">'include'</a>	  <a href="/neovim-docs-web/en/options#'inc'">'inc'</a>     pattern to be used to find an include file
<a href="/neovim-docs-web/en/options#'includeexpr'">'includeexpr'</a>	  <a href="/neovim-docs-web/en/options#'inex'">'inex'</a>    expression used to process an include line
<a href="/neovim-docs-web/en/options#'incsearch'">'incsearch'</a>	  <a href="/neovim-docs-web/en/options#'is'">'is'</a>	    highlight match while typing search pattern
<a href="/neovim-docs-web/en/options#'indentexpr'">'indentexpr'</a>	  <a href="/neovim-docs-web/en/options#'inde'">'inde'</a>    expression used to obtain the indent of a line
<a href="/neovim-docs-web/en/options#'indentkeys'">'indentkeys'</a>	  <a href="/neovim-docs-web/en/options#'indk'">'indk'</a>    keys that trigger indenting with <a href="/neovim-docs-web/en/options#'indentexpr'">'indentexpr'</a>
<a href="/neovim-docs-web/en/options#'infercase'">'infercase'</a>	  <a href="/neovim-docs-web/en/options#'inf'">'inf'</a>     adjust case of match for keyword completion
<a href="/neovim-docs-web/en/options#'isfname'">'isfname'</a>	  <a href="/neovim-docs-web/en/options#'isf'">'isf'</a>     characters included in file names and pathnames
<a href="/neovim-docs-web/en/options#'isident'">'isident'</a>	  <a href="/neovim-docs-web/en/options#'isi'">'isi'</a>     characters included in identifiers
<a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a>	  <a href="/neovim-docs-web/en/options#'isk'">'isk'</a>     characters included in keywords
<a href="/neovim-docs-web/en/options#'isprint'">'isprint'</a>	  <a href="/neovim-docs-web/en/options#'isp'">'isp'</a>     printable characters
<a href="/neovim-docs-web/en/options#'joinspaces'">'joinspaces'</a>	  <a href="/neovim-docs-web/en/options#'js'">'js'</a>	    two spaces after a period with a join command
<a href="/neovim-docs-web/en/options#'jumpoptions'">'jumpoptions'</a>	  <a href="/neovim-docs-web/en/options#'jop'">'jop'</a>     specifies how jumping is done
<a href="/neovim-docs-web/en/options#'keymap'">'keymap'</a>	  <a href="/neovim-docs-web/en/options#'kmp'">'kmp'</a>     name of a keyboard mapping
<a href="/neovim-docs-web/en/options#'keymodel'">'keymodel'</a>	  <a href="/neovim-docs-web/en/options#'km'">'km'</a>	    enable starting/stopping selection with keys
<a href="/neovim-docs-web/en/options#'keywordprg'">'keywordprg'</a>	  <a href="/neovim-docs-web/en/options#'kp'">'kp'</a>	    program to use for the "K" command
<a href="/neovim-docs-web/en/options#'langmap'">'langmap'</a>	  <a href="/neovim-docs-web/en/options#'lmap'">'lmap'</a>    alphabetic characters for other language mode
<a href="/neovim-docs-web/en/options#'langmenu'">'langmenu'</a>	  <a href="/neovim-docs-web/en/options#'lm'">'lm'</a>	    language to be used for the menus
<a href="/neovim-docs-web/en/options#'langremap'">'langremap'</a>	  <a href="/neovim-docs-web/en/options#'lrm'">'lrm'</a>	    do apply <a href="/neovim-docs-web/en/options#'langmap'">'langmap'</a> to mapped characters
<a href="/neovim-docs-web/en/options#'laststatus'">'laststatus'</a>	  <a href="/neovim-docs-web/en/options#'ls'">'ls'</a>	    tells when last window has status lines
<a href="/neovim-docs-web/en/options#'lazyredraw'">'lazyredraw'</a>	  <a href="/neovim-docs-web/en/options#'lz'">'lz'</a>	    don't redraw while executing macros
<a href="/neovim-docs-web/en/options#'linebreak'">'linebreak'</a>	  <a href="/neovim-docs-web/en/options#'lbr'">'lbr'</a>     wrap long lines at a blank
<a href="/neovim-docs-web/en/options#'lines'">'lines'</a>			    number of lines in the display
<a href="/neovim-docs-web/en/options#'linespace'">'linespace'</a>	  <a href="/neovim-docs-web/en/options#'lsp'">'lsp'</a>     number of pixel lines to use between characters
<a href="/neovim-docs-web/en/options#'lisp'">'lisp'</a>			    automatic indenting for Lisp
<a href="/neovim-docs-web/en/options#'lispoptions'">'lispoptions'</a>	  <a href="/neovim-docs-web/en/options#'lop'">'lop'</a>     changes how Lisp indenting is done
<a href="/neovim-docs-web/en/options#'lispwords'">'lispwords'</a>	  <a href="/neovim-docs-web/en/options#'lw'">'lw'</a>	    words that change how lisp indenting works
<a href="/neovim-docs-web/en/options#'list'">'list'</a>			    show <code>&lt;Tab&gt;</code> and <code>&lt;EOL&gt;</code>
<a href="/neovim-docs-web/en/options#'listchars'">'listchars'</a>	  <a href="/neovim-docs-web/en/options#'lcs'">'lcs'</a>     characters for displaying in list mode
<a href="/neovim-docs-web/en/options#'loadplugins'">'loadplugins'</a>	  <a href="/neovim-docs-web/en/options#'lpl'">'lpl'</a>     load plugin scripts when starting up
<a href="/neovim-docs-web/en/options#'magic'">'magic'</a>			    changes special characters in search patterns
<a href="/neovim-docs-web/en/options#'makeef'">'makeef'</a>	  <a href="/neovim-docs-web/en/options#'mef'">'mef'</a>     name of the errorfile for ":make"
<a href="/neovim-docs-web/en/options#'makeencoding'">'makeencoding'</a>	  <a href="/neovim-docs-web/en/options#'menc'">'menc'</a>    encoding of external make/grep commands
<a href="/neovim-docs-web/en/options#'makeprg'">'makeprg'</a>	  <a href="/neovim-docs-web/en/options#'mp'">'mp'</a>	    program to use for the ":make" command
<a href="/neovim-docs-web/en/options#'matchpairs'">'matchpairs'</a>	  <a href="/neovim-docs-web/en/options#'mps'">'mps'</a>     pairs of characters that "%" can match
<a href="/neovim-docs-web/en/options#'matchtime'">'matchtime'</a>	  <a href="/neovim-docs-web/en/options#'mat'">'mat'</a>     tenths of a second to show matching paren
<a href="/neovim-docs-web/en/vim_diff#'maxcombine'">'maxcombine'</a>	  <a href="/neovim-docs-web/en/vim_diff#'mco'">'mco'</a>     maximum nr of combining characters displayed
<a href="/neovim-docs-web/en/options#'maxfuncdepth'">'maxfuncdepth'</a>	  <a href="/neovim-docs-web/en/options#'mfd'">'mfd'</a>     maximum recursive depth for user functions
<a href="/neovim-docs-web/en/options#'maxmapdepth'">'maxmapdepth'</a>	  <a href="/neovim-docs-web/en/options#'mmd'">'mmd'</a>     maximum recursive depth for mapping
<a href="/neovim-docs-web/en/options#'maxmempattern'">'maxmempattern'</a>   <a href="/neovim-docs-web/en/options#'mmp'">'mmp'</a>     maximum memory (in Kbyte) used for pattern search
<a href="/neovim-docs-web/en/options#'menuitems'">'menuitems'</a>	  <a href="/neovim-docs-web/en/options#'mis'">'mis'</a>     maximum number of items in a menu
<a href="/neovim-docs-web/en/options#'mkspellmem'">'mkspellmem'</a>	  <a href="/neovim-docs-web/en/options#'msm'">'msm'</a>     memory used before <a href="/neovim-docs-web/en/spell#%3Amkspell">:mkspell</a> compresses the tree
<a href="/neovim-docs-web/en/options#'modeline'">'modeline'</a>	  <a href="/neovim-docs-web/en/options#'ml'">'ml'</a>	    recognize modelines at start or end of file
<a href="/neovim-docs-web/en/options#'modelineexpr'">'modelineexpr'</a>	  <a href="/neovim-docs-web/en/options#'mle'">'mle'</a>	    allow setting expression options from a modeline
<a href="/neovim-docs-web/en/options#'modelines'">'modelines'</a>	  <a href="/neovim-docs-web/en/options#'mls'">'mls'</a>     number of lines checked for modelines
<a href="/neovim-docs-web/en/options#'modifiable'">'modifiable'</a>	  <a href="/neovim-docs-web/en/options#'ma'">'ma'</a>	    changes to the text are not possible
<a href="/neovim-docs-web/en/options#'modified'">'modified'</a>	  <a href="/neovim-docs-web/en/options#'mod'">'mod'</a>     buffer has been modified
<a href="/neovim-docs-web/en/options#'more'">'more'</a>			    pause listings when the whole screen is filled
<a href="/neovim-docs-web/en/options#'mouse'">'mouse'</a>			    enable the use of mouse clicks
<a href="/neovim-docs-web/en/options#'mousefocus'">'mousefocus'</a>	  <a href="/neovim-docs-web/en/options#'mousef'">'mousef'</a>  keyboard focus follows the mouse
<a href="/neovim-docs-web/en/options#'mousehide'">'mousehide'</a>	  <a href="/neovim-docs-web/en/options#'mh'">'mh'</a>	    hide mouse pointer while typing
<a href="/neovim-docs-web/en/options#'mousemodel'">'mousemodel'</a>	  <a href="/neovim-docs-web/en/options#'mousem'">'mousem'</a>  changes meaning of mouse buttons
<a href="/neovim-docs-web/en/options#'mousescroll'">'mousescroll'</a>		    amount to scroll by when scrolling with a mouse
<a href="/neovim-docs-web/en/options#'mouseshape'">'mouseshape'</a>	  <a href="/neovim-docs-web/en/options#'mouses'">'mouses'</a>  shape of the mouse pointer in different modes
<a href="/neovim-docs-web/en/options#'mousetime'">'mousetime'</a>	  <a href="/neovim-docs-web/en/options#'mouset'">'mouset'</a>  max time between mouse double-click
<a href="/neovim-docs-web/en/options#'nrformats'">'nrformats'</a>	  <a href="/neovim-docs-web/en/options#'nf'">'nf'</a>	    number formats recognized for <code>CTRL-A</code> command
<a href="/neovim-docs-web/en/options#'number'">'number'</a>	  <a href="/neovim-docs-web/en/options#'nu'">'nu'</a>	    print the line number in front of each line
<a href="/neovim-docs-web/en/options#'numberwidth'">'numberwidth'</a>	  <a href="/neovim-docs-web/en/options#'nuw'">'nuw'</a>     number of columns used for the line number
<a href="/neovim-docs-web/en/options#'omnifunc'">'omnifunc'</a>	  <a href="/neovim-docs-web/en/options#'ofu'">'ofu'</a>     function for filetype-specific completion
<a href="/neovim-docs-web/en/options#'opendevice'">'opendevice'</a>	  <a href="/neovim-docs-web/en/options#'odev'">'odev'</a>    allow reading/writing devices on MS-Windows
<a href="/neovim-docs-web/en/options#'operatorfunc'">'operatorfunc'</a>	  <a href="/neovim-docs-web/en/options#'opfunc'">'opfunc'</a>  function to be called for <a href="/neovim-docs-web/en/map#g%40">g@</a> operator
<a href="/neovim-docs-web/en/options#'packpath'">'packpath'</a>	  <a href="/neovim-docs-web/en/options#'pp'">'pp'</a>      list of directories used for packages
<a href="/neovim-docs-web/en/options#'paragraphs'">'paragraphs'</a>	  <a href="/neovim-docs-web/en/options#'para'">'para'</a>    nroff macros that separate paragraphs
<a href="/neovim-docs-web/en/options#'paste'">'paste'</a>			    allow pasting text
<a href="/neovim-docs-web/en/options#'pastetoggle'">'pastetoggle'</a>	  <a href="/neovim-docs-web/en/options#'pt'">'pt'</a>	    key code that causes <a href="/neovim-docs-web/en/options#'paste'">'paste'</a> to toggle
<a href="/neovim-docs-web/en/options#'patchexpr'">'patchexpr'</a>	  <a href="/neovim-docs-web/en/options#'pex'">'pex'</a>     expression used to patch a file
<a href="/neovim-docs-web/en/options#'patchmode'">'patchmode'</a>	  <a href="/neovim-docs-web/en/options#'pm'">'pm'</a>	    keep the oldest version of a file
<a href="/neovim-docs-web/en/options#'path'">'path'</a>		  <a href="/neovim-docs-web/en/options#'pa'">'pa'</a>	    list of directories searched with "gf" et.al.
<a href="/neovim-docs-web/en/options#'preserveindent'">'preserveindent'</a>  <a href="/neovim-docs-web/en/options#'pi'">'pi'</a>	    preserve the indent structure when reindenting
<a href="/neovim-docs-web/en/options#'previewheight'">'previewheight'</a>   <a href="/neovim-docs-web/en/options#'pvh'">'pvh'</a>     height of the preview window
previewpopuppvp     use popup window for preview
<a href="/neovim-docs-web/en/options#'previewwindow'">'previewwindow'</a>   <a href="/neovim-docs-web/en/options#'pvw'">'pvw'</a>     identifies the preview window
<a href="/neovim-docs-web/en/options#'printdevice'">'printdevice'</a>	  <a href="/neovim-docs-web/en/options#'pdev'">'pdev'</a>    name of the printer to be used for :hardcopy
<a href="/neovim-docs-web/en/options#'printencoding'">'printencoding'</a>   <a href="/neovim-docs-web/en/options#'penc'">'penc'</a>    encoding to be used for printing
<a href="/neovim-docs-web/en/options#'printexpr'">'printexpr'</a>	  <a href="/neovim-docs-web/en/options#'pexpr'">'pexpr'</a>   expression used to print PostScript for :hardcopy
<a href="/neovim-docs-web/en/options#'printfont'">'printfont'</a>	  <a href="/neovim-docs-web/en/options#'pfn'">'pfn'</a>     name of the font to be used for :hardcopy
<a href="/neovim-docs-web/en/options#'printheader'">'printheader'</a>	  <a href="/neovim-docs-web/en/options#'pheader'">'pheader'</a> format of the header used for :hardcopy
<a href="/neovim-docs-web/en/options#'printmbcharset'">'printmbcharset'</a>  <a href="/neovim-docs-web/en/options#'pmbcs'">'pmbcs'</a>   CJK character set to be used for :hardcopy
<a href="/neovim-docs-web/en/options#'printmbfont'">'printmbfont'</a>	  <a href="/neovim-docs-web/en/options#'pmbfn'">'pmbfn'</a>   font names to be used for CJK output of :hardcopy
<a href="/neovim-docs-web/en/options#'printoptions'">'printoptions'</a>	  <a href="/neovim-docs-web/en/options#'popt'">'popt'</a>    controls the format of :hardcopy output
<a href="/neovim-docs-web/en/options#'pumheight'">'pumheight'</a>	  <a href="/neovim-docs-web/en/options#'ph'">'ph'</a>	    maximum number of items to show in the popup menu
<a href="/neovim-docs-web/en/options#'pumwidth'">'pumwidth'</a>	  <a href="/neovim-docs-web/en/options#'pw'">'pw'</a>	    minimum width of the popup menu
<a href="/neovim-docs-web/en/options#'pyxversion'">'pyxversion'</a>	  <a href="/neovim-docs-web/en/options#'pyx'">'pyx'</a>	    Python version used for pyx* commands
<a href="/neovim-docs-web/en/options#'quoteescape'">'quoteescape'</a>	  <a href="/neovim-docs-web/en/options#'qe'">'qe'</a>	    escape characters used in a string
<a href="/neovim-docs-web/en/options#'readonly'">'readonly'</a>	  <a href="/neovim-docs-web/en/options#'ro'">'ro'</a>	    disallow writing the buffer
<a href="/neovim-docs-web/en/options#'redrawtime'">'redrawtime'</a>	  <a href="/neovim-docs-web/en/options#'rdt'">'rdt'</a>     timeout for <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a> and <a href="/neovim-docs-web/en/pattern#%3Amatch">:match</a> highlighting
<a href="/neovim-docs-web/en/options#'regexpengine'">'regexpengine'</a>	  <a href="/neovim-docs-web/en/options#'re'">'re'</a>	    default regexp engine to use
<a href="/neovim-docs-web/en/options#'relativenumber'">'relativenumber'</a>  <a href="/neovim-docs-web/en/options#'rnu'">'rnu'</a>	    show relative line number in front of each line
<a href="/neovim-docs-web/en/options#'report'">'report'</a>		    threshold for reporting nr. of lines changed
<a href="/neovim-docs-web/en/options#'revins'">'revins'</a>	  <a href="/neovim-docs-web/en/options#'ri'">'ri'</a>	    inserting characters will work backwards
<a href="/neovim-docs-web/en/options#'rightleft'">'rightleft'</a>	  <a href="/neovim-docs-web/en/options#'rl'">'rl'</a>	    window is right-to-left oriented
<a href="/neovim-docs-web/en/options#'rightleftcmd'">'rightleftcmd'</a>	  <a href="/neovim-docs-web/en/options#'rlc'">'rlc'</a>     commands for which editing works right-to-left
<a href="/neovim-docs-web/en/options#'ruler'">'ruler'</a>		  <a href="/neovim-docs-web/en/options#'ru'">'ru'</a>	    show cursor line and column in the status line
<a href="/neovim-docs-web/en/options#'rulerformat'">'rulerformat'</a>	  <a href="/neovim-docs-web/en/options#'ruf'">'ruf'</a>     custom format for the ruler
<a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>	  <a href="/neovim-docs-web/en/options#'rtp'">'rtp'</a>     list of directories used for runtime files
<a href="/neovim-docs-web/en/options#'scroll'">'scroll'</a>	  <a href="/neovim-docs-web/en/options#'scr'">'scr'</a>     lines to scroll with <code>CTRL-U</code> and <code>CTRL-D</code>
<a href="/neovim-docs-web/en/options#'scrollbind'">'scrollbind'</a>	  <a href="/neovim-docs-web/en/options#'scb'">'scb'</a>     scroll in window as other windows scroll
<a href="/neovim-docs-web/en/options#'scrolljump'">'scrolljump'</a>	  <a href="/neovim-docs-web/en/options#'sj'">'sj'</a>	    minimum number of lines to scroll
<a href="/neovim-docs-web/en/options#'scrolloff'">'scrolloff'</a>	  <a href="/neovim-docs-web/en/options#'so'">'so'</a>	    minimum nr. of lines above and below cursor
<a href="/neovim-docs-web/en/options#'scrollopt'">'scrollopt'</a>	  <a href="/neovim-docs-web/en/options#'sbo'">'sbo'</a>     how <a href="/neovim-docs-web/en/options#'scrollbind'">'scrollbind'</a> should behave
<a href="/neovim-docs-web/en/options#'sections'">'sections'</a>	  <a href="/neovim-docs-web/en/options#'sect'">'sect'</a>    nroff macros that separate sections
<a href="/neovim-docs-web/en/vim_diff#'secure'">'secure'</a>		    secure mode for reading .vimrc in current dir
<a href="/neovim-docs-web/en/options#'selection'">'selection'</a>	  <a href="/neovim-docs-web/en/options#'sel'">'sel'</a>     what type of selection to use
<a href="/neovim-docs-web/en/options#'selectmode'">'selectmode'</a>	  <a href="/neovim-docs-web/en/options#'slm'">'slm'</a>     when to use Select mode instead of Visual mode
<a href="/neovim-docs-web/en/options#'sessionoptions'">'sessionoptions'</a>  <a href="/neovim-docs-web/en/options#'ssop'">'ssop'</a>    options for <a href="/neovim-docs-web/en/starting#%3Amksession">:mksession</a>
<a href="/neovim-docs-web/en/options#'shada'">'shada'</a>		  <a href="/neovim-docs-web/en/options#'sd'">'sd'</a>	    use .shada file upon startup and exiting
<a href="/neovim-docs-web/en/options#'shell'">'shell'</a>		  <a href="/neovim-docs-web/en/options#'sh'">'sh'</a>	    name of shell to use for external commands
<a href="/neovim-docs-web/en/options#'shellcmdflag'">'shellcmdflag'</a>	  <a href="/neovim-docs-web/en/options#'shcf'">'shcf'</a>    flag to shell to execute one command
<a href="/neovim-docs-web/en/options#'shellpipe'">'shellpipe'</a>	  <a href="/neovim-docs-web/en/options#'sp'">'sp'</a>	    string to put output of ":make" in error file
<a href="/neovim-docs-web/en/options#'shellquote'">'shellquote'</a>	  <a href="/neovim-docs-web/en/options#'shq'">'shq'</a>     quote character(s) for around shell command
<a href="/neovim-docs-web/en/options#'shellredir'">'shellredir'</a>	  <a href="/neovim-docs-web/en/options#'srr'">'srr'</a>     string to put output of filter in a temp file
<a href="/neovim-docs-web/en/options#'shellslash'">'shellslash'</a>	  <a href="/neovim-docs-web/en/options#'ssl'">'ssl'</a>     use forward slash for shell file names
<a href="/neovim-docs-web/en/options#'shelltemp'">'shelltemp'</a>	  <a href="/neovim-docs-web/en/options#'stmp'">'stmp'</a>    whether to use a temp file for shell commands
<a href="/neovim-docs-web/en/options#'shellxescape'">'shellxescape'</a>	  <a href="/neovim-docs-web/en/options#'sxe'">'sxe'</a>     characters to escape when <a href="/neovim-docs-web/en/options#'shellxquote'">'shellxquote'</a> is (
<a href="/neovim-docs-web/en/options#'shellxquote'">'shellxquote'</a>	  <a href="/neovim-docs-web/en/options#'sxq'">'sxq'</a>     like <a href="/neovim-docs-web/en/options#'shellquote'">'shellquote'</a>, but include redirection
<a href="/neovim-docs-web/en/options#'shiftround'">'shiftround'</a>	  <a href="/neovim-docs-web/en/options#'sr'">'sr'</a>	    round indent to multiple of shiftwidth
<a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a>	  <a href="/neovim-docs-web/en/options#'sw'">'sw'</a>	    number of spaces to use for (auto)indent step
<a href="/neovim-docs-web/en/options#'shortmess'">'shortmess'</a>	  <a href="/neovim-docs-web/en/options#'shm'">'shm'</a>     list of flags, reduce length of messages
<a href="/neovim-docs-web/en/options#'showbreak'">'showbreak'</a>	  <a href="/neovim-docs-web/en/options#'sbr'">'sbr'</a>     string to use at the start of wrapped lines
<a href="/neovim-docs-web/en/options#'showcmd'">'showcmd'</a>	  <a href="/neovim-docs-web/en/options#'sc'">'sc'</a>	    show (partial) command in status line
<a href="/neovim-docs-web/en/options#'showfulltag'">'showfulltag'</a>	  <a href="/neovim-docs-web/en/options#'sft'">'sft'</a>     show full tag pattern when completing tag
<a href="/neovim-docs-web/en/options#'showmatch'">'showmatch'</a>	  <a href="/neovim-docs-web/en/options#'sm'">'sm'</a>	    briefly jump to matching bracket if insert one
<a href="/neovim-docs-web/en/options#'showmode'">'showmode'</a>	  <a href="/neovim-docs-web/en/options#'smd'">'smd'</a>     message on status line to show current mode
<a href="/neovim-docs-web/en/options#'showtabline'">'showtabline'</a>	  <a href="/neovim-docs-web/en/options#'stal'">'stal'</a>    tells when the tab pages line is displayed
<a href="/neovim-docs-web/en/options#'sidescroll'">'sidescroll'</a>	  <a href="/neovim-docs-web/en/options#'ss'">'ss'</a>	    minimum number of columns to scroll horizontal
<a href="/neovim-docs-web/en/options#'sidescrolloff'">'sidescrolloff'</a>   <a href="/neovim-docs-web/en/options#'siso'">'siso'</a>    min. nr. of columns to left and right of cursor
<a href="/neovim-docs-web/en/options#'signcolumn'">'signcolumn'</a>	  <a href="/neovim-docs-web/en/options#'scl'">'scl'</a>	    when and how to display the sign column
<a href="/neovim-docs-web/en/options#'smartcase'">'smartcase'</a>	  <a href="/neovim-docs-web/en/options#'scs'">'scs'</a>     no ignore case when pattern has uppercase
<a href="/neovim-docs-web/en/options#'smartindent'">'smartindent'</a>	  <a href="/neovim-docs-web/en/options#'si'">'si'</a>	    smart autoindenting for C programs
<a href="/neovim-docs-web/en/options#'smarttab'">'smarttab'</a>	  <a href="/neovim-docs-web/en/options#'sta'">'sta'</a>     use <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> when inserting <code>&lt;Tab&gt;</code>
<a href="/neovim-docs-web/en/options#'softtabstop'">'softtabstop'</a>	  <a href="/neovim-docs-web/en/options#'sts'">'sts'</a>     number of spaces that <code>&lt;Tab&gt;</code> uses while editing
<a href="/neovim-docs-web/en/options#'spell'">'spell'</a>			    enable spell checking
<a href="/neovim-docs-web/en/options#'spellcapcheck'">'spellcapcheck'</a>   <a href="/neovim-docs-web/en/options#'spc'">'spc'</a>     pattern to locate end of a sentence
<a href="/neovim-docs-web/en/options#'spellfile'">'spellfile'</a>	  <a href="/neovim-docs-web/en/options#'spf'">'spf'</a>     files where <a href="/neovim-docs-web/en/spell#zg">zg</a> and <a href="/neovim-docs-web/en/spell#zw">zw</a> store words
<a href="/neovim-docs-web/en/options#'spelllang'">'spelllang'</a>	  <a href="/neovim-docs-web/en/options#'spl'">'spl'</a>     language(s) to do spell checking for
<a href="/neovim-docs-web/en/options#'spelloptions'">'spelloptions'</a>	  <a href="/neovim-docs-web/en/options#'spo'">'spo'</a>     options for spell checking
<a href="/neovim-docs-web/en/options#'spellsuggest'">'spellsuggest'</a>	  <a href="/neovim-docs-web/en/options#'sps'">'sps'</a>     method(s) used to suggest spelling corrections
<a href="/neovim-docs-web/en/options#'splitbelow'">'splitbelow'</a>	  <a href="/neovim-docs-web/en/options#'sb'">'sb'</a>	    new window from split is below the current one
<a href="/neovim-docs-web/en/options#'splitkeep'">'splitkeep'</a>	  <a href="/neovim-docs-web/en/options#'spk'">'spk'</a>     determines scroll behavior for split windows
<a href="/neovim-docs-web/en/options#'splitright'">'splitright'</a>	  <a href="/neovim-docs-web/en/options#'spr'">'spr'</a>     new window is put right of the current one
<a href="/neovim-docs-web/en/options#'startofline'">'startofline'</a>	  <a href="/neovim-docs-web/en/options#'sol'">'sol'</a>     commands move cursor to first non-blank in line
<a href="/neovim-docs-web/en/options#'statusline'">'statusline'</a>	  <a href="/neovim-docs-web/en/options#'stl'">'stl'</a>     custom format for the status line
<a href="/neovim-docs-web/en/options#'suffixes'">'suffixes'</a>	  <a href="/neovim-docs-web/en/options#'su'">'su'</a>	    suffixes that are ignored with multiple match
<a href="/neovim-docs-web/en/options#'suffixesadd'">'suffixesadd'</a>	  <a href="/neovim-docs-web/en/options#'sua'">'sua'</a>     suffixes added when searching for a file
<a href="/neovim-docs-web/en/options#'swapfile'">'swapfile'</a>	  <a href="/neovim-docs-web/en/options#'swf'">'swf'</a>     whether to use a swapfile for a buffer
<a href="/neovim-docs-web/en/options#'switchbuf'">'switchbuf'</a>	  <a href="/neovim-docs-web/en/options#'swb'">'swb'</a>     sets behavior when switching to another buffer
<a href="/neovim-docs-web/en/options#'synmaxcol'">'synmaxcol'</a>	  <a href="/neovim-docs-web/en/options#'smc'">'smc'</a>     maximum column to find syntax items
<a href="/neovim-docs-web/en/options#'syntax'">'syntax'</a>	  <a href="/neovim-docs-web/en/options#'syn'">'syn'</a>     syntax to be loaded for current buffer
<a href="/neovim-docs-web/en/options#'tabline'">'tabline'</a>	  <a href="/neovim-docs-web/en/options#'tal'">'tal'</a>     custom format for the console tab pages line
<a href="/neovim-docs-web/en/options#'tabpagemax'">'tabpagemax'</a>	  <a href="/neovim-docs-web/en/options#'tpm'">'tpm'</a>     maximum number of tab pages for <a href="/neovim-docs-web/en/starting#-p">-p</a> and "tab all"
<a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a>	  <a href="/neovim-docs-web/en/options#'ts'">'ts'</a>	    number of spaces that <code>&lt;Tab&gt;</code> in file uses
<a href="/neovim-docs-web/en/options#'tagbsearch'">'tagbsearch'</a>	  <a href="/neovim-docs-web/en/options#'tbs'">'tbs'</a>     use binary searching in tags files
<a href="/neovim-docs-web/en/options#'tagcase'">'tagcase'</a>	  <a href="/neovim-docs-web/en/options#'tc'">'tc'</a>      how to handle case when searching in tags files
<a href="/neovim-docs-web/en/options#'taglength'">'taglength'</a>	  <a href="/neovim-docs-web/en/options#'tl'">'tl'</a>	    number of significant characters for a tag
<a href="/neovim-docs-web/en/options#'tagrelative'">'tagrelative'</a>	  <a href="/neovim-docs-web/en/options#'tr'">'tr'</a>	    file names in tag file are relative
<a href="/neovim-docs-web/en/options#'tags'">'tags'</a>		  <a href="/neovim-docs-web/en/options#'tag'">'tag'</a>     list of file names used by the tag command
<a href="/neovim-docs-web/en/options#'tagstack'">'tagstack'</a>	  <a href="/neovim-docs-web/en/options#'tgst'">'tgst'</a>    push tags onto the tag stack
<a href="/neovim-docs-web/en/vim_diff#'term'">'term'</a>			    name of the terminal
<a href="/neovim-docs-web/en/options#'termbidi'">'termbidi'</a>	  <a href="/neovim-docs-web/en/options#'tbidi'">'tbidi'</a>   terminal takes care of bi-directionality
<a href="/neovim-docs-web/en/options#'textwidth'">'textwidth'</a>	  <a href="/neovim-docs-web/en/options#'tw'">'tw'</a>	    maximum width of text that is being inserted
<a href="/neovim-docs-web/en/options#'thesaurus'">'thesaurus'</a>	  <a href="/neovim-docs-web/en/options#'tsr'">'tsr'</a>     list of thesaurus files for keyword completion
<a href="/neovim-docs-web/en/options#'thesaurusfunc'">'thesaurusfunc'</a>	  <a href="/neovim-docs-web/en/options#'tsrfu'">'tsrfu'</a>   function to be used for thesaurus completion
<a href="/neovim-docs-web/en/options#'tildeop'">'tildeop'</a>	  <a href="/neovim-docs-web/en/options#'top'">'top'</a>     tilde command "~" behaves like an operator
<a href="/neovim-docs-web/en/options#'timeout'">'timeout'</a>	  <a href="/neovim-docs-web/en/options#'to'">'to'</a>	    time out on mappings and key codes
<a href="/neovim-docs-web/en/options#'timeoutlen'">'timeoutlen'</a>	  <a href="/neovim-docs-web/en/options#'tm'">'tm'</a>	    time out time in milliseconds
<a href="/neovim-docs-web/en/options#'title'">'title'</a>			    let Vim set the title of the window
<a href="/neovim-docs-web/en/options#'titlelen'">'titlelen'</a>		    percentage of <a href="/neovim-docs-web/en/options#'columns'">'columns'</a> used for window title
<a href="/neovim-docs-web/en/options#'titleold'">'titleold'</a>		    old title, restored when exiting
<a href="/neovim-docs-web/en/options#'titlestring'">'titlestring'</a>		    string to use for the Vim window title
<a href="/neovim-docs-web/en/options#'ttimeout'">'ttimeout'</a>		    time out on mappings
<a href="/neovim-docs-web/en/options#'ttimeoutlen'">'ttimeoutlen'</a>	  <a href="/neovim-docs-web/en/options#'ttm'">'ttm'</a>     time out time for key codes in milliseconds
<a href="/neovim-docs-web/en/vim_diff#'ttytype'">'ttytype'</a>	  <a href="/neovim-docs-web/en/vim_diff#'tty'">'tty'</a>     alias for <a href="/neovim-docs-web/en/vim_diff#'term'">'term'</a>
<a href="/neovim-docs-web/en/options#'undodir'">'undodir'</a>	  <a href="/neovim-docs-web/en/options#'udir'">'udir'</a>    where to store undo files
<a href="/neovim-docs-web/en/options#'undofile'">'undofile'</a>	  <a href="/neovim-docs-web/en/options#'udf'">'udf'</a>	    save undo information in a file
<a href="/neovim-docs-web/en/options#'undolevels'">'undolevels'</a>	  <a href="/neovim-docs-web/en/options#'ul'">'ul'</a>	    maximum number of changes that can be undone
<a href="/neovim-docs-web/en/options#'undoreload'">'undoreload'</a>	  <a href="/neovim-docs-web/en/options#'ur'">'ur'</a>	    max nr of lines to save for undo on a buffer reload
<a href="/neovim-docs-web/en/options#'updatecount'">'updatecount'</a>	  <a href="/neovim-docs-web/en/options#'uc'">'uc'</a>	    after this many characters flush swap file
<a href="/neovim-docs-web/en/options#'updatetime'">'updatetime'</a>	  <a href="/neovim-docs-web/en/options#'ut'">'ut'</a>	    after this many milliseconds flush swap file
<a href="/neovim-docs-web/en/options#'varsofttabstop'">'varsofttabstop'</a>  <a href="/neovim-docs-web/en/options#'vsts'">'vsts'</a>    a list of number of spaces when typing <code>&lt;Tab&gt;</code>
<a href="/neovim-docs-web/en/options#'vartabstop'">'vartabstop'</a>	  <a href="/neovim-docs-web/en/options#'vts'">'vts'</a>	    a list of number of spaces for <code>&lt;Tab&gt;</code>s
<a href="/neovim-docs-web/en/options#'verbose'">'verbose'</a>	  <a href="/neovim-docs-web/en/options#'vbs'">'vbs'</a>     give informative messages
<a href="/neovim-docs-web/en/options#'verbosefile'">'verbosefile'</a>	  <a href="/neovim-docs-web/en/options#'vfile'">'vfile'</a>   file to write messages in
<a href="/neovim-docs-web/en/options#'viewdir'">'viewdir'</a>	  <a href="/neovim-docs-web/en/options#'vdir'">'vdir'</a>    directory where to store files with :mkview
<a href="/neovim-docs-web/en/options#'viewoptions'">'viewoptions'</a>	  <a href="/neovim-docs-web/en/options#'vop'">'vop'</a>     specifies what to save for :mkview
<a href="/neovim-docs-web/en/options#'virtualedit'">'virtualedit'</a>	  <a href="/neovim-docs-web/en/options#'ve'">'ve'</a>	    when to use virtual editing
<a href="/neovim-docs-web/en/options#'visualbell'">'visualbell'</a>	  <a href="/neovim-docs-web/en/options#'vb'">'vb'</a>	    use visual bell instead of beeping
<a href="/neovim-docs-web/en/options#'warn'">'warn'</a>			    warn for shell command when buffer was changed
<a href="/neovim-docs-web/en/options#'whichwrap'">'whichwrap'</a>	  <a href="/neovim-docs-web/en/options#'ww'">'ww'</a>	    allow specified keys to cross line boundaries
<a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a>	  <a href="/neovim-docs-web/en/options#'wc'">'wc'</a>	    command-line character for wildcard expansion
<a href="/neovim-docs-web/en/options#'wildcharm'">'wildcharm'</a>	  <a href="/neovim-docs-web/en/options#'wcm'">'wcm'</a>     like <a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a> but also works when mapped
<a href="/neovim-docs-web/en/options#'wildignore'">'wildignore'</a>	  <a href="/neovim-docs-web/en/options#'wig'">'wig'</a>     files matching these patterns are not completed
<a href="/neovim-docs-web/en/options#'wildignorecase'">'wildignorecase'</a>  <a href="/neovim-docs-web/en/options#'wic'">'wic'</a>     ignore case when completing file names
<a href="/neovim-docs-web/en/options#'wildmenu'">'wildmenu'</a>	  <a href="/neovim-docs-web/en/options#'wmnu'">'wmnu'</a>    use menu for command line completion
<a href="/neovim-docs-web/en/options#'wildmode'">'wildmode'</a>	  <a href="/neovim-docs-web/en/options#'wim'">'wim'</a>     mode for <a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a> command-line expansion
<a href="/neovim-docs-web/en/options#'wildoptions'">'wildoptions'</a>	  <a href="/neovim-docs-web/en/options#'wop'">'wop'</a>     specifies how command line completion is done
<a href="/neovim-docs-web/en/options#'winaltkeys'">'winaltkeys'</a>	  <a href="/neovim-docs-web/en/options#'wak'">'wak'</a>     when the windows system handles ALT keys
<a href="/neovim-docs-web/en/options#'window'">'window'</a>	  <a href="/neovim-docs-web/en/options#'wi'">'wi'</a>	    nr of lines to scroll for <code>CTRL-F</code> and <code>CTRL-B</code>
<a href="/neovim-docs-web/en/options#'winheight'">'winheight'</a>	  <a href="/neovim-docs-web/en/options#'wh'">'wh'</a>	    minimum number of lines for the current window
<a href="/neovim-docs-web/en/options#'winhighlight'">'winhighlight'</a>	  <a href="/neovim-docs-web/en/options#'winhl'">'winhl'</a>   window-local highlighting
<a href="/neovim-docs-web/en/options#'winfixheight'">'winfixheight'</a>	  <a href="/neovim-docs-web/en/options#'wfh'">'wfh'</a>     keep window height when opening/closing windows
<a href="/neovim-docs-web/en/options#'winfixwidth'">'winfixwidth'</a>	  <a href="/neovim-docs-web/en/options#'wfw'">'wfw'</a>     keep window width when opening/closing windows
<a href="/neovim-docs-web/en/options#'winminheight'">'winminheight'</a>	  <a href="/neovim-docs-web/en/options#'wmh'">'wmh'</a>     minimum number of lines for any window
<a href="/neovim-docs-web/en/options#'winminwidth'">'winminwidth'</a>	  <a href="/neovim-docs-web/en/options#'wmw'">'wmw'</a>     minimal number of columns for any window
<a href="/neovim-docs-web/en/options#'winwidth'">'winwidth'</a>	  <a href="/neovim-docs-web/en/options#'wiw'">'wiw'</a>     minimal number of columns for current window
<a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a>			    long lines wrap and continue on the next line
<a href="/neovim-docs-web/en/options#'wrapmargin'">'wrapmargin'</a>	  <a href="/neovim-docs-web/en/options#'wm'">'wm'</a>	    chars from the right where wrapping starts
<a href="/neovim-docs-web/en/options#'wrapscan'">'wrapscan'</a>	  <a href="/neovim-docs-web/en/options#'ws'">'ws'</a>	    searches wrap around the end of the file
<a href="/neovim-docs-web/en/options#'write'">'write'</a>			    writing to a file is allowed
<a href="/neovim-docs-web/en/options#'writeany'">'writeany'</a>	  <a href="/neovim-docs-web/en/options#'wa'">'wa'</a>	    write to file with no need for "!" override
<a href="/neovim-docs-web/en/options#'writebackup'">'writebackup'</a>	  <a href="/neovim-docs-web/en/options#'wb'">'wb'</a>	    make a backup before overwriting a file
<a href="/neovim-docs-web/en/options#'writedelay'">'writedelay'</a>	  <a href="/neovim-docs-web/en/options#'wd'">'wd'</a>	    delay this many msec for each char (for debug)</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_ur"></a><span class="help-tag">Q_ur</span>  		Undo/Redo commands</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/undo#u">u</a>       N  u		undo last N changes
<a href="/neovim-docs-web/en/undo#CTRL-R">CTRL-R</a>  N  <code>CTRL-R</code>	redo last N undone changes
<a href="/neovim-docs-web/en/undo#U">U</a>          U		restore last changed line</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_et"></a><span class="help-tag">Q_et</span>  		External commands</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/various#%3A%21">:!</a>  		:!{command}	execute <code>{command}</code> with a shell
<a href="/neovim-docs-web/en/various#K">K</a>  		   K		lookup keyword under the cursor with
				   <a href="/neovim-docs-web/en/options#'keywordprg'">'keywordprg'</a> program (default: "man")</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_qf"></a><span class="help-tag">Q_qf</span>  		Quickfix commands</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/quickfix#%3Acc">:cc</a>  		:cc [nr]	display error [nr] (default is the same again)
<a href="/neovim-docs-web/en/quickfix#%3Acnext">:cnext</a>  	:cn		display the next error
<a href="/neovim-docs-web/en/quickfix#%3Acprevious">:cprevious</a>  	:cp		display the previous error
<a href="/neovim-docs-web/en/quickfix#%3Aclist">:clist</a>  	:cl		list all errors
<a href="/neovim-docs-web/en/quickfix#%3Acfile">:cfile</a>  	:cf		read errors from the file <a href="/neovim-docs-web/en/options#'errorfile'">'errorfile'</a>
<a href="/neovim-docs-web/en/quickfix#%3Acgetbuffer">:cgetbuffer</a>  	:cgetb		like :cbuffer but don't jump to the first error
<a href="/neovim-docs-web/en/quickfix#%3Acgetfile">:cgetfile</a>  	:cg		like :cfile but don't jump to the first error
<a href="/neovim-docs-web/en/quickfix#%3Acgetexpr">:cgetexpr</a>  	:cgete		like :cexpr but don't jump to the first error
<a href="/neovim-docs-web/en/quickfix#%3Acaddfile">:caddfile</a>  	:caddf		add errors from the error file to the current
				   quickfix list
<a href="/neovim-docs-web/en/quickfix#%3Acaddexpr">:caddexpr</a>  	:cad		add errors from an expression to the current
				   quickfix list
<a href="/neovim-docs-web/en/quickfix#%3Acbuffer">:cbuffer</a>  	:cb		read errors from text in a buffer
<a href="/neovim-docs-web/en/quickfix#%3Acexpr">:cexpr</a>  	:cex		read errors from an expression
<a href="/neovim-docs-web/en/quickfix#%3Acquit">:cquit</a>  	:cq		quit without writing and return error code (to
				   the compiler)
<a href="/neovim-docs-web/en/quickfix#%3Amake">:make</a>  		:make [args]	start make, read errors, and jump to first
				   error
<a href="/neovim-docs-web/en/quickfix#%3Agrep">:grep</a>  		:gr[ep] [args]	execute <a href="/neovim-docs-web/en/options#'grepprg'">'grepprg'</a> to find matches and jump to
				   the first one</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_vc"></a><span class="help-tag">Q_vc</span>  		Various commands</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/various#CTRL-L">CTRL-L</a>  	   <code>CTRL-L</code>	clear and redraw the screen
<a href="/neovim-docs-web/en/editing#CTRL-G">CTRL-G</a>  	   <code>CTRL-G</code>	show current file name (with path) and cursor
				   position
<a href="/neovim-docs-web/en/various#ga">ga</a>  		   ga		show ascii value of character under cursor in
				   decimal, hex, and octal
<a href="/neovim-docs-web/en/various#g8">g8</a>  		   g8		for utf-8 encoding: show byte sequence for
				   character under cursor in hex
<a href="/neovim-docs-web/en/editing#g_CTRL-G">g_CTRL-G</a>  	   g <code>CTRL-G</code>	show cursor column, line, and character
				   position
<a href="/neovim-docs-web/en/pattern#CTRL-C">CTRL-C</a>  	   <code>CTRL-C</code>	during searches: Interrupt the search
<a href="/neovim-docs-web/en/change#%3CDel%3E">&lt;Del&gt;</a>  		   <code>&lt;Del&gt;</code>	while entering a count: delete last character
<a href="/neovim-docs-web/en/various#%3Aversion">:version</a>  	:ve[rsion]	show version information
<a href="/neovim-docs-web/en/various#%3Anormal">:normal</a>  	:norm[al][!] <code>{commands}</code>
				execute Normal mode commands
<a href="/neovim-docs-web/en/intro#gQ">gQ</a>  		   gQ		switch to "Ex" mode</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/various#%3Aredir">:redir</a>  	:redir &gt;<code>{file}</code>		redirect messages to <code>{file}</code>
<a href="/neovim-docs-web/en/various#%3Asilent">:silent</a>  	:silent[!] <code>{command}</code>	execute <code>{command}</code> silently
<a href="/neovim-docs-web/en/editing#%3Aconfirm">:confirm</a>  	:confirm <code>{command}</code>	quit, write, etc., asking about
					unsaved changes or read-only files
<a href="/neovim-docs-web/en/editing#%3Abrowse">:browse</a>  	:browse <code>{command}</code>	open/read/write file, using a
					file selection dialog</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_ce"></a><span class="help-tag">Q_ce</span>  		Command-line editing</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/cmdline#c_%3CEsc%3E">c_&lt;Esc&gt;</a>  	<code>&lt;Esc&gt;</code>		   abandon command-line (if <a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a> is
				      <code>&lt;Esc&gt;</code>, type it twice)</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/cmdline#c_CTRL-V">c_CTRL-V</a>  	<code>CTRL-V</code> <code>{char}</code>	   insert <code>{char}</code> literally
<a href="/neovim-docs-web/en/cmdline#c_CTRL-V">c_CTRL-V</a>  	<code>CTRL-V</code> <code>{number}</code>    enter decimal value of character (up to
				      three digits)
<a href="/neovim-docs-web/en/cmdline#c_CTRL-K">c_CTRL-K</a>  	<code>CTRL-K</code> <code>{char1}</code> <code>{char2}</code>
				   enter digraph (See <a href="/neovim-docs-web/en/quickref#Q_di">Q_di</a>)
<a href="/neovim-docs-web/en/cmdline#c_CTRL-R">c_CTRL-R</a>  	<code>CTRL-R</code> <code>{register}</code>  insert the contents of a register</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/cmdline#c_%3CLeft%3E">c_&lt;Left&gt;</a>  	<code>&lt;Left&gt;</code>/&lt;Right&gt;	   cursor left/right
<a href="/neovim-docs-web/en/cmdline#c_%3CS-Left%3E">c_&lt;S-Left&gt;</a>  	<code>&lt;S-Left&gt;</code>/&lt;S-Right&gt; cursor one word left/right
<a href="/neovim-docs-web/en/cmdline#c_CTRL-B">c_CTRL-B</a>  	<code>CTRL-B</code>/CTRL-E	   cursor to beginning/end of command-line</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/cmdline#c_%3CBS%3E">c_&lt;BS&gt;</a>  	<code>&lt;BS&gt;</code>		   delete the character in front of the cursor
<a href="/neovim-docs-web/en/cmdline#c_%3CDel%3E">c_&lt;Del&gt;</a>  	<code>&lt;Del&gt;</code>		   delete the character under the cursor
<a href="/neovim-docs-web/en/cmdline#c_CTRL-W">c_CTRL-W</a>  	<code>CTRL-W</code>		   delete the word in front of the cursor
<a href="/neovim-docs-web/en/cmdline#c_CTRL-U">c_CTRL-U</a>  	<code>CTRL-U</code>		   remove all characters</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/cmdline#c_%3CUp%3E">c_&lt;Up&gt;</a>  	<code>&lt;Up&gt;</code>/&lt;Down&gt;	   recall older/newer command-line that starts
				      with current command
<a href="/neovim-docs-web/en/cmdline#c_%3CS-Up%3E">c_&lt;S-Up&gt;</a>  	<code>&lt;S-Up&gt;</code>/&lt;S-Down&gt;	   recall older/newer command-line from history
<a href="/neovim-docs-web/en/cmdline#c_CTRL-G">c_CTRL-G</a>  	<code>CTRL-G</code>		   next match when <a href="/neovim-docs-web/en/options#'incsearch'">'incsearch'</a> is active
<a href="/neovim-docs-web/en/cmdline#c_CTRL-T">c_CTRL-T</a>  	<code>CTRL-T</code>		   previous match when <a href="/neovim-docs-web/en/options#'incsearch'">'incsearch'</a> is active
<a href="/neovim-docs-web/en/cmdline#%3Ahistory">:history</a>  	:his[tory]	   show older command-lines</div>
<div class="old-help-para">Context-sensitive completion on the command-line:</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/cmdline#c_wildchar">c_wildchar</a>  	<a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a>  (default: <code>&lt;Tab&gt;</code>)
				do completion on the pattern in front of the
				   cursor; if there are multiple matches,
				   beep and show the first one; further
				   <a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a> will show the next ones
<a href="/neovim-docs-web/en/cmdline#c_CTRL-D">c_CTRL-D</a>  	<code>CTRL-D</code>		list all names that match the pattern in
				   front of the cursor
<a href="/neovim-docs-web/en/cmdline#c_CTRL-A">c_CTRL-A</a>  	<code>CTRL-A</code>		insert all names that match pattern in front
				   of cursor
<a href="/neovim-docs-web/en/cmdline#c_CTRL-L">c_CTRL-L</a>  	<code>CTRL-L</code>		insert longest common part of names that
				   match pattern
<a href="/neovim-docs-web/en/cmdline#c_CTRL-N">c_CTRL-N</a>  	<code>CTRL-N</code>		after <a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a> with multiple matches: go
				   to next match
<a href="/neovim-docs-web/en/cmdline#c_CTRL-P">c_CTRL-P</a>  	<code>CTRL-P</code>		after <a href="/neovim-docs-web/en/options#'wildchar'">'wildchar'</a> with multiple matches: go
				   to previous match</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_ra"></a><span class="help-tag">Q_ra</span>  		Ex ranges</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/cmdline#%3Arange">:range</a>  	,		separates two line numbers
<a href="/neovim-docs-web/en/cmdline#%3Arange">:range</a>  	;		idem, set cursor to the first line number
				before interpreting the second one</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/cmdline#%3Arange">:range</a>  	<code>{number}</code>	an absolute line number
<a href="/neovim-docs-web/en/cmdline#%3Arange">:range</a>  	.		the current line
<a href="/neovim-docs-web/en/cmdline#%3Arange">:range</a>  	$		the last line in the file
<a href="/neovim-docs-web/en/cmdline#%3Arange">:range</a>  	%		equal to 1,$ (the entire file)
<a href="/neovim-docs-web/en/cmdline#%3Arange">:range</a>  	*		equal to '&lt;,'&gt; (visual area)
<a href="/neovim-docs-web/en/cmdline#%3Arange">:range</a>  	't		position of mark t
<a href="/neovim-docs-web/en/cmdline#%3Arange">:range</a>  	/{pattern}[/]	the next line where <code>{pattern}</code> matches
<a href="/neovim-docs-web/en/cmdline#%3Arange">:range</a>  	?{pattern}[?]	the previous line where <code>{pattern}</code> matches</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/cmdline#%3Arange">:range</a>  	+[num]		add [num] to the preceding line number
				   (default: 1)
<a href="/neovim-docs-web/en/cmdline#%3Arange">:range</a>  	-[num]		subtract [num] from the preceding line
				   number (default: 1)</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_ex"></a><span class="help-tag">Q_ex</span>  		Special Ex characters</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/cmdline#%3Abar">:bar</a>      |		separates two commands (not for ":global" and ":!")
<a href="/neovim-docs-web/en/cmdline#%3Aquote">:quote</a>    "		begins comment</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/cmdline#%3A_%25">:_%</a>       %		current file name (only where a file name is expected)
<a href="/neovim-docs-web/en/cmdline#%3A_%23">:_#</a>       #[num]	alternate file name [num] (only where a file name is
			   expected)
	Note: The next seven are typed literally; these are not special keys!
<a href="/neovim-docs-web/en/cmdline#%3A%3Cabuf%3E">:&lt;abuf&gt;</a>   <code>&lt;abuf&gt;</code>	buffer number, for use in an autocommand (only where a
			   file name is expected)
<a href="/neovim-docs-web/en/cmdline#%3A%3Cafile%3E">:&lt;afile&gt;</a>  <code>&lt;afile&gt;</code>	file name, for use in an autocommand (only where a
			   file name is expected)
<a href="/neovim-docs-web/en/cmdline#%3A%3Camatch%3E">:&lt;amatch&gt;</a> <code>&lt;amatch&gt;</code>	what matched with the pattern, for use in an
			   autocommand (only where a file name is expected)
<a href="/neovim-docs-web/en/cmdline#%3A%3Ccword%3E">:&lt;cword&gt;</a>  <code>&lt;cword&gt;</code>	word under the cursor (only where a file name is
			   expected)
<a href="/neovim-docs-web/en/cmdline#%3A%3CcWORD%3E">:&lt;cWORD&gt;</a>  <code>&lt;cWORD&gt;</code>	WORD under the cursor (only where a file name is
			   expected) (see <a href="/neovim-docs-web/en/motion#WORD">WORD</a>)
<a href="/neovim-docs-web/en/cmdline#%3A%3Ccfile%3E">:&lt;cfile&gt;</a>  <code>&lt;cfile&gt;</code>	file name under the cursor (only where a file name is
			   expected)
<a href="/neovim-docs-web/en/cmdline#%3A%3Csfile%3E">:&lt;sfile&gt;</a>  <code>&lt;sfile&gt;</code>	file name of a ":source"d file, within that file (only
			   where a file name is expected)</div>
<div class="old-help-para">		After "%", "#", "&lt;cfile&gt;", "&lt;sfile&gt;" or "&lt;afile&gt;"
		<a href="/neovim-docs-web/en/cmdline#%3A%3Ap">::p</a>  	    :p		full path
		<a href="/neovim-docs-web/en/cmdline#%3A%3Ah">::h</a>  	    :h		head (file name removed)
		<a href="/neovim-docs-web/en/cmdline#%3A%3At">::t</a>  	    :t		tail (file name only)
		<a href="/neovim-docs-web/en/cmdline#%3A%3Ar">::r</a>  	    :r		root (extension removed)
		<a href="/neovim-docs-web/en/cmdline#%3A%3Ae">::e</a>  	    :e		extension
		<a href="/neovim-docs-web/en/cmdline#%3A%3As">::s</a>  	    :s/{pat}/{repl}/	substitute <code>{pat}</code> with <code>{repl}</code></div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_st"></a><span class="help-tag">Q_st</span>  		Starting Vim</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/starting#-file">-file</a>  	   vim [options] <code>{file}</code> ..	start editing one or more files
<a href="/neovim-docs-web/en/starting#--">--</a>  	   vim [options] -			read file from stdin
<a href="/neovim-docs-web/en/starting#-tag">-tag</a>  	   vim [options] -t <code>{tag}</code>	edit the file associated with <code>{tag}</code>
<a href="/neovim-docs-web/en/starting#-qf">-qf</a>  	   vim [options] -q [fname]	start editing in QuickFix mode,
					   display the first error</div>
<div class="old-help-para">	Most useful Vim arguments (for full list see <a href="/neovim-docs-web/en/starting#startup-options">startup-options</a>)</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/starting#-%2B">-+</a>  	+[num]		    put the cursor at line [num] (default: last line)
<a href="/neovim-docs-web/en/starting#-%2Bc">-+c</a>  	+{command}	    execute <code>{command}</code> after loading the file
<a href="/neovim-docs-web/en/starting#-%2B%2F">-+/</a>  	+/{pat} <code>{file}</code> ..   put the cursor at the first occurrence of <code>{pat}</code>
<a href="/neovim-docs-web/en/starting#-e">-e</a>  	-e		    Ex mode, start vim in Ex mode
<a href="/neovim-docs-web/en/starting#-R">-R</a>  	-R		    Read-only mode, implies -n
<a href="/neovim-docs-web/en/starting#-m">-m</a>  	-m		    modifications not allowed (resets <a href="/neovim-docs-web/en/options#'write'">'write'</a> option)
<a href="/neovim-docs-web/en/starting#-d">-d</a>  	-d		    <a href="/neovim-docs-web/en/diff#diff-mode">diff-mode</a>
<a href="/neovim-docs-web/en/starting#-b">-b</a>  	-b		    binary mode
<a href="/neovim-docs-web/en/starting#-l">-l</a>  	-l		    lisp mode
<a href="/neovim-docs-web/en/starting#-A">-A</a>  	-A		    Arabic mode (<a href="/neovim-docs-web/en/options#'arabic'">'arabic'</a> is set)
<a href="/neovim-docs-web/en/starting#-H">-H</a>  	-H		    Hebrew mode (<a href="/neovim-docs-web/en/options#'hkmap'">'hkmap'</a> and <a href="/neovim-docs-web/en/options#'rightleft'">'rightleft'</a> are set)
<a href="/neovim-docs-web/en/starting#-V">-V</a>  	-V		    Verbose, give informative messages
<a href="/neovim-docs-web/en/starting#-r">-r</a>  	-r		    give list of swap files
<a href="/neovim-docs-web/en/starting#-r">-r</a>  	-r <code>{file}</code> ..	    recover aborted edit session
<a href="/neovim-docs-web/en/starting#-n">-n</a>  	-n		    do not create a swap file
<a href="/neovim-docs-web/en/starting#-o">-o</a>  	-o [num]	    open [num] windows (default: one for each file)
<a href="/neovim-docs-web/en/starting#-s">-s</a>  	-s <code>{scriptin}</code>	    first read commands from the file <code>{scriptin}</code>
<a href="/neovim-docs-web/en/starting#-w">-w</a>  	-w <code>{scriptout}</code>	    write typed chars to file <code>{scriptout}</code> (append)
<a href="/neovim-docs-web/en/starting#-W">-W</a>  	-W <code>{scriptout}</code>	    write typed chars to file <code>{scriptout}</code> (overwrite)
<a href="/neovim-docs-web/en/starting#-u">-u</a>  	-u <code>{vimrc}</code>	    read inits from <code>{vimrc}</code> instead of other inits
<a href="/neovim-docs-web/en/starting#-i">-i</a>  	-i <code>{shada}</code>	    read info from <code>{shada}</code> instead of other files
<a href="/neovim-docs-web/en/starting#---">---</a>  	--		    end of options, other arguments are file names
<a href="/neovim-docs-web/en/starting#--help">--help</a>    --help	    show list of arguments and exit
<a href="/neovim-docs-web/en/starting#--version">--version</a> --version	    show version info and exit
<a href="/neovim-docs-web/en/starting#--">--</a>  	-			    read file from stdin</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_ed"></a><span class="help-tag">Q_ed</span>  		Editing a file</span></h3></div>
<div class="old-help-para">	   Without !: Fail if changes have been made to the current buffer.
	      With !: Discard any changes to the current buffer.
<a href="/neovim-docs-web/en/editing#%3Aedit_f">:edit_f</a>  :e[dit][!] <code>{file}</code>	edit <code>{file}</code>
<a href="/neovim-docs-web/en/editing#%3Aedit">:edit</a>    :e[dit][!]		reload the current file
<a href="/neovim-docs-web/en/editing#%3Aenew">:enew</a>    :ene[w][!]		edit a new, unnamed buffer
<a href="/neovim-docs-web/en/editing#%3Afind">:find</a>    :fin[d][!] <code>{file}</code>	find <code>{file}</code> in <a href="/neovim-docs-web/en/options#'path'">'path'</a> and edit it</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/editing#CTRL-%5E">CTRL-^</a>   N  <code>CTRL-^</code>		edit alternate file N (equivalent to ":e #N")
<a href="/neovim-docs-web/en/editing#gf">gf</a>          gf  or ]f		edit the file whose name is under the cursor
<a href="/neovim-docs-web/en/editing#%3Apwd">:pwd</a>     :pwd			print the current directory name
<a href="/neovim-docs-web/en/editing#%3Acd">:cd</a>      :cd [path]		change the current directory to [path]
<a href="/neovim-docs-web/en/editing#%3Acd-">:cd-</a>     :cd -			back to previous current directory
<a href="/neovim-docs-web/en/editing#%3Afile">:file</a>    :f[ile]		print the current file name and the cursor
				   position
<a href="/neovim-docs-web/en/editing#%3Afile">:file</a>    :f[ile] <code>{name}</code>	set the current file name to <code>{name}</code>
<a href="/neovim-docs-web/en/windows#%3Afiles">:files</a>   :files		show alternate file names</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_fl"></a><span class="help-tag">Q_fl</span>  		Using the argument list			<a href="/neovim-docs-web/en/editing#argument-list">argument-list</a></span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/editing#%3Aargs">:args</a>  	   :ar[gs]		print the argument list, with the current file
				   in "[]"
<a href="/neovim-docs-web/en/windows#%3Aall">:all</a>  	   :all  or :sall	open a window for every file in the arg list
<a href="/neovim-docs-web/en/editing#%3Awn">:wn</a>  	   :wn[ext][!]		write file and edit next file
<a href="/neovim-docs-web/en/editing#%3Awn">:wn</a>  	   :wn[ext][!] <code>{file}</code>	write to <code>{file}</code> and edit next file, unless
				   <code>{file}</code> exists; With !, overwrite existing
				   file
<a href="/neovim-docs-web/en/editing#%3AwN">:wN</a>  	   :wN[ext][!] [file]	write file and edit previous file</div>
<div class="old-help-para"><div class="help-column_heading">	     in current window    in new window</div><a href="/neovim-docs-web/en/editing#%3Aargument">:argument</a>  :argu[ment] N	  :sar[gument] N	edit file N
<a href="/neovim-docs-web/en/editing#%3Anext">:next</a>      :n[ext]		  :sn[ext]		edit next file
<a href="/neovim-docs-web/en/editing#%3Anext_f">:next_f</a>    :n[ext] <code>{arglist}</code>	  :sn[ext] <code>{arglist}</code>	define new arg list
							   and edit first file
<a href="/neovim-docs-web/en/editing#%3ANext">:Next</a>      :N[ext]		  :sN[ext]		edit previous file
<a href="/neovim-docs-web/en/editing#%3Afirst">:first</a>     :fir[st]		  :sfir[st]		edit first file
<a href="/neovim-docs-web/en/editing#%3Alast">:last</a>      :la[st]		  :sla[st]		edit last file</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_wq"></a><span class="help-tag">Q_wq</span>  		Writing and quitting</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/editing#%3Aw">:w</a>  	  :[range]w[rite][!]		write to the current file
<a href="/neovim-docs-web/en/editing#%3Aw_f">:w_f</a>  	  :[range]w[rite] <code>{file}</code>	write to <code>{file}</code>, unless it already
					   exists
<a href="/neovim-docs-web/en/editing#%3Aw_f">:w_f</a>  	  :[range]w[rite]! <code>{file}</code>	write to <code>{file}</code>.  Overwrite an existing
					   file
<a href="/neovim-docs-web/en/editing#%3Aw_a">:w_a</a>  	  :[range]w[rite][!] &gt;&gt;		append to the current file
<a href="/neovim-docs-web/en/editing#%3Aw_a">:w_a</a>  	  :[range]w[rite][!] &gt;&gt; <code>{file}</code>	append to <code>{file}</code>
<a href="/neovim-docs-web/en/editing#%3Aw_c">:w_c</a>  	  :[range]w[rite] !{cmd}	execute <code>{cmd}</code> with [range] lines as
					   standard input
<a href="/neovim-docs-web/en/editing#%3Aup">:up</a>  	  :[range]up[date][!]		write to current file if modified
<a href="/neovim-docs-web/en/editing#%3Awall">:wall</a>  	  :wa[ll][!]			write all changed buffers</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/editing#%3Aq">:q</a>  	  :q[uit]		quit current buffer, unless changes have been
				   made; Exit Vim when there are no other
				   non-help buffers
<a href="/neovim-docs-web/en/editing#%3Aq">:q</a>  	  :q[uit]!		quit current buffer always, discard any
				   changes.  Exit Vim when there are no other
				   non-help buffers
<a href="/neovim-docs-web/en/editing#%3Aqa">:qa</a>  	  :qa[ll]		exit Vim, unless changes have been made
<a href="/neovim-docs-web/en/editing#%3Aqa">:qa</a>  	  :qa[ll]!		exit Vim always, discard any changes
<a href="/neovim-docs-web/en/quickfix#%3Acq">:cq</a>  	  :cq			quit without writing and return error code</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/editing#%3Awq">:wq</a>  	  :wq[!]		write the current file and exit
<a href="/neovim-docs-web/en/editing#%3Awq">:wq</a>  	  :wq[!] <code>{file}</code>		write to <code>{file}</code> and exit
<a href="/neovim-docs-web/en/editing#%3Axit">:xit</a>  	  :x[it][!] [file]	like ":wq" but write only when changes have
				   been made
<a href="/neovim-docs-web/en/editing#ZZ">ZZ</a>  	     ZZ			same as ":x"
<a href="/neovim-docs-web/en/editing#ZQ">ZQ</a>  	     ZQ			same as ":q!"
<a href="/neovim-docs-web/en/editing#%3Axall">:xall</a>  	  :xa[ll][!]  or :wqall[!]
				write all changed buffers and exit</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/starting#%3Astop">:stop</a>  	  :st[op][!]		suspend Vim or start new shell; if <a href="/neovim-docs-web/en/options#'aw'">'aw'</a> option
				   is set and [!] not given write the buffer
<a href="/neovim-docs-web/en/starting#CTRL-Z">CTRL-Z</a>     <code>CTRL-Z</code>		same as ":stop"</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_ac"></a><span class="help-tag">Q_ac</span>  		Automatic Commands</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/starting#shada-file">shada-file</a>  	read registers, marks, history at startup, save when exiting.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/starting#%3Arshada">:rshada</a>  	:rsh[ada] [file]	read info from ShaDa file [file]
<a href="/neovim-docs-web/en/starting#%3Arshada">:rshada</a>  	:rsh[ada]! [file]	idem, overwrite existing info
<a href="/neovim-docs-web/en/starting#%3Awshada">:wshada</a>  	:wsh[ada] [file]	add info to ShaDa file [file]
<a href="/neovim-docs-web/en/starting#%3Awshada">:wshada</a>  	:wsh[ada]! [file]	write info to ShaDa file [file]</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/options#modeline">modeline</a>  	Automatic option setting when editing a file</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/options#modeline">modeline</a>  	vim:{set-arg}: ..	In the first and last lines of the
					file (see <a href="/neovim-docs-web/en/options#'ml'">'ml'</a> option), <code>{set-arg}</code> is
					given as an argument to ":set"</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/autocmd#autocommand">autocommand</a>  	Automatic execution of commands on certain events.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/autocmd#%3Aautocmd">:autocmd</a>  	:au			  list all autocommands
<a href="/neovim-docs-web/en/autocmd#%3Aautocmd">:autocmd</a>  	:au <code>{event}</code>		  list all autocommands for <code>{event}</code>
<a href="/neovim-docs-web/en/autocmd#%3Aautocmd">:autocmd</a>  	:au <code>{event}</code> <code>{pat}</code>	  list all autocommands for <code>{event}</code>
					  with <code>{pat}</code>
<a href="/neovim-docs-web/en/autocmd#%3Aautocmd">:autocmd</a>  	:au <code>{event}</code> <code>{pat}</code> <code>{cmd}</code>	  enter new autocommands for <code>{event}</code>
					  with <code>{pat}</code>
<a href="/neovim-docs-web/en/autocmd#%3Aautocmd">:autocmd</a>  	:au!			  remove all autocommands
<a href="/neovim-docs-web/en/autocmd#%3Aautocmd">:autocmd</a>  	:au! <code>{event}</code>		  remove all autocommands for <code>{event}</code>
<a href="/neovim-docs-web/en/autocmd#%3Aautocmd">:autocmd</a>  	:au! * <code>{pat}</code>		  remove all autocommands for <code>{pat}</code>
<a href="/neovim-docs-web/en/autocmd#%3Aautocmd">:autocmd</a>  	:au! <code>{event}</code> <code>{pat}</code>	  remove all autocommands for <code>{event}</code>
					  with <code>{pat}</code>
<a href="/neovim-docs-web/en/autocmd#%3Aautocmd">:autocmd</a>  	:au! <code>{event}</code> <code>{pat}</code> <code>{cmd}</code>  remove all autocommands for <code>{event}</code>
					  with <code>{pat}</code> and enter new one</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_wi"></a><span class="help-tag">Q_wi</span>  		Multi-window commands</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/windows#CTRL-W_s">CTRL-W_s</a>  	<code>CTRL-W</code> s  or  :split	split window into two parts
<a href="/neovim-docs-web/en/windows#%3Asplit_f">:split_f</a>  	:split <code>{file}</code>		split window and edit <code>{file}</code> in one of
					   them
<a href="/neovim-docs-web/en/windows#%3Avsplit">:vsplit</a>  	:vsplit <code>{file}</code>		same, but split vertically
<a href="/neovim-docs-web/en/windows#%3Avertical">:vertical</a>  	:vertical <code>{cmd}</code>		make <code>{cmd}</code> split vertically</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/windows#%3Asfind">:sfind</a>  	:sf[ind] <code>{file}</code>		split window, find <code>{file}</code> in <a href="/neovim-docs-web/en/options#'path'">'path'</a>
					   and edit it
<a href="/neovim-docs-web/en/various#%3Aterminal">:terminal</a>  	:terminal <code>{cmd}</code>		open a terminal window
<a href="/neovim-docs-web/en/windows#CTRL-W_%5D">CTRL-W_]</a>  	<code>CTRL-W</code> ]		split window and jump to tag under
					   cursor
<a href="/neovim-docs-web/en/windows#CTRL-W_f">CTRL-W_f</a>  	<code>CTRL-W</code> f		split window and edit file name under
					   the cursor
<a href="/neovim-docs-web/en/windows#CTRL-W_%5E">CTRL-W_^</a>  	<code>CTRL-W</code> ^		split window and edit alternate file
<a href="/neovim-docs-web/en/windows#CTRL-W_n">CTRL-W_n</a>  	<code>CTRL-W</code> n  or  :new	create new empty window
<a href="/neovim-docs-web/en/windows#CTRL-W_q">CTRL-W_q</a>  	<code>CTRL-W</code> q  or  :q[uit]	quit editing and close window
<a href="/neovim-docs-web/en/windows#CTRL-W_c">CTRL-W_c</a>  	<code>CTRL-W</code> c  or  :clo[se]	make buffer hidden and close window
<a href="/neovim-docs-web/en/windows#CTRL-W_o">CTRL-W_o</a>  	<code>CTRL-W</code> o  or  :on[ly]	make current window only one on the
					   screen</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/windows#CTRL-W_j">CTRL-W_j</a>  	<code>CTRL-W</code> j		move cursor to window below
<a href="/neovim-docs-web/en/windows#CTRL-W_k">CTRL-W_k</a>  	<code>CTRL-W</code> k		move cursor to window above
<a href="/neovim-docs-web/en/windows#CTRL-W_CTRL-W">CTRL-W_CTRL-W</a>  	<code>CTRL-W</code> <code>CTRL-W</code>		move cursor to window below (wrap)
<a href="/neovim-docs-web/en/windows#CTRL-W_W">CTRL-W_W</a>  	<code>CTRL-W</code> W		move cursor to window above (wrap)
<a href="/neovim-docs-web/en/windows#CTRL-W_t">CTRL-W_t</a>  	<code>CTRL-W</code> t		move cursor to top window
<a href="/neovim-docs-web/en/windows#CTRL-W_b">CTRL-W_b</a>  	<code>CTRL-W</code> b		move cursor to bottom window
<a href="/neovim-docs-web/en/windows#CTRL-W_p">CTRL-W_p</a>  	<code>CTRL-W</code> p		move cursor to previous active window</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/windows#CTRL-W_r">CTRL-W_r</a>  	<code>CTRL-W</code> r		rotate windows downwards
<a href="/neovim-docs-web/en/windows#CTRL-W_R">CTRL-W_R</a>  	<code>CTRL-W</code> R		rotate windows upwards
<a href="/neovim-docs-web/en/windows#CTRL-W_x">CTRL-W_x</a>  	<code>CTRL-W</code> x		exchange current window with next one</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/windows#CTRL-W_%3D">CTRL-W_=</a>  	<code>CTRL-W</code> =		make all windows equal height &amp; width
<a href="/neovim-docs-web/en/windows#CTRL-W_-">CTRL-W_-</a>  	<code>CTRL-W</code> -			decrease current window height
<a href="/neovim-docs-web/en/windows#CTRL-W_%2B">CTRL-W_+</a>  	<code>CTRL-W</code> +		increase current window height
<a href="/neovim-docs-web/en/windows#CTRL-W__">CTRL-W__</a>  	<code>CTRL-W</code> _		set current window height (default:
					   very high)</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/windows#CTRL-W_%3C">CTRL-W_&lt;</a>  	<code>CTRL-W</code> &lt;		decrease current window width
<a href="/neovim-docs-web/en/windows#CTRL-W_%3E">CTRL-W_&gt;</a>  	<code>CTRL-W</code> &gt;		increase current window width
<a href="/neovim-docs-web/en/windows#CTRL-W_bar">CTRL-W_bar</a>  	<code>CTRL-W</code> |		set current window width (default:
					   widest possible)</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_bu"></a><span class="help-tag">Q_bu</span>  		Buffer list commands</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/windows#%3Abuffers">:buffers</a>  	:buffers  or  :files	list all known buffer and file names</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/windows#%3Aball">:ball</a>  		:ball	  or  :sball	edit all args/buffers
<a href="/neovim-docs-web/en/windows#%3Aunhide">:unhide</a>  	:unhide   or  :sunhide	edit all loaded buffers</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/windows#%3Abadd">:badd</a>  		:badd <code>{fname}</code>		add file name <code>{fname}</code> to the list
<a href="/neovim-docs-web/en/windows#%3Abunload">:bunload</a>  	:bunload[!] [N]		unload buffer [N] from memory
<a href="/neovim-docs-web/en/windows#%3Abdelete">:bdelete</a>  	:bdelete[!] [N]		unload buffer [N] and delete it from
					   the buffer list</div>
<div class="old-help-para"><div class="help-column_heading">		in current window  in new window</div><a href="/neovim-docs-web/en/windows#%3Abuffer">:buffer</a>  	:[N]buffer [N]     :[N]sbuffer [N]     to arg/buf N
<a href="/neovim-docs-web/en/windows#%3Abnext">:bnext</a>  	:[N]bnext [N]      :[N]sbnext [N]      to Nth next arg/buf
<a href="/neovim-docs-web/en/windows#%3AbNext">:bNext</a>  	:[N]bNext [N]      :[N]sbNext [N]      to Nth previous arg/buf
<a href="/neovim-docs-web/en/windows#%3Abprevious">:bprevious</a>  	:[N]bprevious [N]  :[N]sbprevious [N]  to Nth previous arg/buf
<a href="/neovim-docs-web/en/windows#%3Abfirst">:bfirst</a>  	:bfirst	           :sbfirst            to first arg/buf
<a href="/neovim-docs-web/en/windows#%3Ablast">:blast</a>  	:blast	           :sblast             to last arg/buf
<a href="/neovim-docs-web/en/windows#%3Abmodified">:bmodified</a>  	:[N]bmod [N]       :[N]sbmod [N]       to Nth modified buf</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_sy"></a><span class="help-tag">Q_sy</span>  		Syntax Highlighting</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/syntax#%3Asyn-on">:syn-on</a>  	:syntax on		start using syntax highlighting
<a href="/neovim-docs-web/en/syntax#%3Asyn-off">:syn-off</a>  	:syntax off		stop using syntax highlighting</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/syntax#%3Asyn-keyword">:syn-keyword</a>  	:syntax keyword <code>{group-name}</code> <code>{keyword}</code> ..
					add a syntax keyword item
<a href="/neovim-docs-web/en/syntax#%3Asyn-match">:syn-match</a>  	:syntax match <code>{group-name}</code> <code>{pattern}</code> ...
					add syntax match item
<a href="/neovim-docs-web/en/syntax#%3Asyn-region">:syn-region</a>  	:syntax region <code>{group-name}</code> <code>{pattern}</code> ...
					add syntax region item
<a href="/neovim-docs-web/en/syntax#%3Asyn-sync">:syn-sync</a>  	:syntax sync [ccomment | lines <code>{N}</code> | ...]
					tell syntax how to sync
<a href="/neovim-docs-web/en/syntax#%3Asyntax">:syntax</a>  	:syntax [list]		list current syntax items
<a href="/neovim-docs-web/en/syntax#%3Asyn-clear">:syn-clear</a>  	:syntax clear		clear all syntax info</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/syntax#%3Ahighlight">:highlight</a>  	:highlight clear	clear all highlight info
<a href="/neovim-docs-web/en/syntax#%3Ahighlight">:highlight</a>  	:highlight <code>{group-name}</code> <code>{key}</code>={arg} ..
					set highlighting for <code>{group-name}</code></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/filetype#%3Afiletype">:filetype</a>  	:filetype on		switch on file type detection, without
					syntax highlighting
<a href="/neovim-docs-web/en/filetype#%3Afiletype">:filetype</a>  	:filetype plugin indent on
					switch on file type detection, with
					automatic indenting and settings</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_gu"></a><span class="help-tag">Q_gu</span>  		GUI commands</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/gui#%3Amenu">:menu</a>  		:menu			list all menus
<a href="/neovim-docs-web/en/gui#%3Amenu">:menu</a>  		:menu <code>{mpath}</code>		list menus starting with <code>{mpath}</code>
<a href="/neovim-docs-web/en/gui#%3Amenu">:menu</a>  		:menu <code>{mpath}</code> <code>{rhs}</code>	add menu <code>{mpath}</code>, giving <code>{rhs}</code>
<a href="/neovim-docs-web/en/gui#%3Amenu">:menu</a>  		:menu <code>{pri}</code> <code>{mpath}</code> <code>{rhs}</code>
					idem, with priorities <code>{pri}</code>
<a href="/neovim-docs-web/en/gui#%3Amenu">:menu</a>  		:menu ToolBar.{name} <code>{rhs}</code>
					add toolbar item, giving <code>{rhs}</code>
<a href="/neovim-docs-web/en/gui#%3Atmenu">:tmenu</a>  	:tmenu <code>{mpath}</code> <code>{text}</code>	add tooltip to menu <code>{mpath}</code>
<a href="/neovim-docs-web/en/gui#%3Aunmenu">:unmenu</a>  	:unmenu <code>{mpath}</code>		remove menu <code>{mpath}</code></div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_fo"></a><span class="help-tag">Q_fo</span>  		Folding</span></h3></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/options#'foldmethod'">'foldmethod'</a>  	set foldmethod=manual	manual folding
		set foldmethod=indent	folding by indent
		set foldmethod=expr	folding by <a href="/neovim-docs-web/en/options#'foldexpr'">'foldexpr'</a>
		set foldmethod=syntax	folding by syntax regions
		set foldmethod=marker	folding by <a href="/neovim-docs-web/en/options#'foldmarker'">'foldmarker'</a></div>
<div class="old-help-para"><a href="/neovim-docs-web/en/fold#zf">zf</a>  		zf{motion}		operator: Define a fold manually
<a href="/neovim-docs-web/en/fold#%3Afold">:fold</a>  		:{range}fold		define a fold for <code>{range}</code> lines
<a href="/neovim-docs-web/en/fold#zd">zd</a>  		zd			delete one fold under the cursor
<a href="/neovim-docs-web/en/fold#zD">zD</a>  		zD			delete all folds under the cursor</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/fold#zo">zo</a>  		zo			open one fold under the cursor
<a href="/neovim-docs-web/en/fold#zO">zO</a>  		zO			open all folds under the cursor
<a href="/neovim-docs-web/en/fold#zc">zc</a>  		zc			close one fold under the cursor
<a href="/neovim-docs-web/en/fold#zC">zC</a>  		zC			close all folds under the cursor</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/fold#zm">zm</a>  		zm			fold more: decrease <a href="/neovim-docs-web/en/options#'foldlevel'">'foldlevel'</a>
<a href="/neovim-docs-web/en/fold#zM">zM</a>  		zM			close all folds: make <a href="/neovim-docs-web/en/options#'foldlevel'">'foldlevel'</a> zero
<a href="/neovim-docs-web/en/fold#zr">zr</a>  		zr			reduce folding: increase <a href="/neovim-docs-web/en/options#'foldlevel'">'foldlevel'</a>
<a href="/neovim-docs-web/en/fold#zR">zR</a>  		zR			open all folds: make <a href="/neovim-docs-web/en/options#'foldlevel'">'foldlevel'</a> max.</div>
<div class="old-help-para"><a href="/neovim-docs-web/en/fold#zn">zn</a>  		zn			fold none: reset <a href="/neovim-docs-web/en/options#'foldenable'">'foldenable'</a>
<a href="/neovim-docs-web/en/fold#zN">zN</a>  		zN			fold normal set <a href="/neovim-docs-web/en/options#'foldenable'">'foldenable'</a>
<a href="/neovim-docs-web/en/fold#zi">zi</a>  		zi			invert <a href="/neovim-docs-web/en/options#'foldenable'">'foldenable'</a></div>

  
  