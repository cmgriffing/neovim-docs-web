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
<div class="help-column_heading"> tag	  subject			 tag	  subject</div><a href="index.html#Q_ct">Q_ct</a>  	list of help files		<a href="quickref.html#Q_re">Q_re</a>  	Repeating commands
<a href="quickref.html#Q_lr">Q_lr</a>  	motion: Left-right		<a href="quickref.html#Q_km">Q_km</a>  	Key mapping
<a href="quickref.html#Q_ud">Q_ud</a>  	motion: Up-down			<a href="quickref.html#Q_ab">Q_ab</a>  	Abbreviations
<a href="quickref.html#Q_tm">Q_tm</a>  	motion: Text object		<a href="quickref.html#Q_op">Q_op</a>  	Options
<a href="quickref.html#Q_pa">Q_pa</a>  	motion: Pattern searches	<a href="quickref.html#Q_ur">Q_ur</a>  	Undo/Redo commands
<a href="quickref.html#Q_ma">Q_ma</a>  	motion: Marks			<a href="quickref.html#Q_et">Q_et</a>  	External commands
<a href="quickref.html#Q_vm">Q_vm</a>  	motion: Various			<a href="quickref.html#Q_qf">Q_qf</a>  	Quickfix commands
<a href="quickref.html#Q_ta">Q_ta</a>  	motion: Using tags		<a href="quickref.html#Q_vc">Q_vc</a>  	Various commands
<a href="quickref.html#Q_sc">Q_sc</a>  	Scrolling			<a href="quickref.html#Q_ce">Q_ce</a>  	Ex: Command-line editing
<a href="quickref.html#Q_in">Q_in</a>  	insert: Inserting text		<a href="quickref.html#Q_ra">Q_ra</a>  	Ex: Ranges
<a href="quickref.html#Q_ai">Q_ai</a>  	insert: Keys			<a href="quickref.html#Q_ex">Q_ex</a>  	Ex: Special characters
<a href="quickref.html#Q_ss">Q_ss</a>  	insert: Special keys		<a href="quickref.html#Q_st">Q_st</a>  	Starting Vim
<a href="quickref.html#Q_di">Q_di</a>  	insert: Digraphs		<a href="quickref.html#Q_ed">Q_ed</a>  	Editing a file
<a href="quickref.html#Q_si">Q_si</a>  	insert: Special inserts		<a href="quickref.html#Q_fl">Q_fl</a>  	Using the argument list
<a href="quickref.html#Q_de">Q_de</a>  	change: Deleting text		<a href="quickref.html#Q_wq">Q_wq</a>  	Writing and quitting
<a href="quickref.html#Q_cm">Q_cm</a>  	change: Copying and moving	<a href="quickref.html#Q_ac">Q_ac</a>  	Automatic commands
<a href="quickref.html#Q_ch">Q_ch</a>  	change: Changing text		<a href="quickref.html#Q_wi">Q_wi</a>  	Multi-window commands
<a href="quickref.html#Q_co">Q_co</a>  	change: Complex			<a href="quickref.html#Q_bu">Q_bu</a>  	Buffer list commands
<a href="quickref.html#Q_vi">Q_vi</a>  	Visual mode			<a href="quickref.html#Q_sy">Q_sy</a>  	Syntax highlighting
<a href="quickref.html#Q_to">Q_to</a>  	Text objects			<a href="quickref.html#Q_gu">Q_gu</a>  	GUI commands
					<a href="quickref.html#Q_fo">Q_fo</a>  	Folding</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_lr"></a><span class="help-tag">Q_lr</span>  		Left-right motions</span></h3></div>
<div class="old-help-para">N is used to indicate an optional count that can be given before the command.</div>
<div class="old-help-para"><a href="motion.html#h">h</a>  	N  h		left (also: <code>CTRL-H</code>, <code>&lt;BS&gt;</code>, or <code>&lt;Left&gt;</code> key)
<a href="motion.html#l">l</a>  	N  l		right (also: <code>&lt;Space&gt;</code> or <code>&lt;Right&gt;</code> key)
<a href="motion.html#0">0</a>  	   0		to first character in the line (also: <code>&lt;Home&gt;</code> key)
<a href="motion.html#%5E">^</a>  	   ^		to first non-blank character in the line
<a href="motion.html#%24">$</a>  	N  $		to the next EOL (end of line) position
			   (also: <code>&lt;End&gt;</code> key)
<a href="motion.html#g0">g0</a>  	   g0		to first character in screen line (differs from "0"
			   when lines wrap)
<a href="motion.html#g%5E">g^</a>  	   g^		to first non-blank character in screen line (differs
			   from "^" when lines wrap)
<a href="motion.html#g%24">g$</a>  	N  g$		to last character in screen line (differs from "$"
			   when lines wrap)
<a href="motion.html#gm">gm</a>  	   gm		to middle of the screen line
<a href="motion.html#gM">gM</a>  	   gM		to middle of the line
<a href="motion.html#bar">bar</a>  	N  |		to column N (default: 1)
<a href="motion.html#f">f</a>  	N  f{char}	to the Nth occurrence of <code>{char}</code> to the right
<a href="motion.html#F">F</a>  	N  F{char}	to the Nth occurrence of <code>{char}</code> to the left
<a href="motion.html#t">t</a>  	N  t{char}	till before the Nth occurrence of <code>{char}</code> to the right
<a href="motion.html#T">T</a>  	N  T{char}	till before the Nth occurrence of <code>{char}</code> to the left
<a href="motion.html#%3B">;</a>  	N  ;		repeat the last "f", "F", "t", or "T" N times
<a href="motion.html#%2C">,</a>  	N  ,		repeat the last "f", "F", "t", or "T" N times in
			   opposite direction</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_ud"></a><span class="help-tag">Q_ud</span>  		Up-down motions</span></h3></div>
<div class="old-help-para"><a href="motion.html#k">k</a>  	N  k		up N lines (also: <code>CTRL-P</code> and <code>&lt;Up&gt;</code>)
<a href="motion.html#j">j</a>  	N  j		down N lines (also: <code>CTRL-J</code>, <code>CTRL-N</code>, <code>&lt;NL&gt;</code>, and <code>&lt;Down&gt;</code>)
<a href="motion.html#-">-</a>  	N  -			up N lines, on the first non-blank character
<a href="motion.html#%2B">+</a>  	N  +		down N lines, on the first non-blank character (also:
			   <code>CTRL-M</code> and <code>&lt;CR&gt;</code>)
<a href="motion.html#_">_</a>  	N  _		down N-1 lines, on the first non-blank character
<a href="motion.html#G">G</a>  	N  G		goto line N (default: last line), on the first
			   non-blank character
<a href="motion.html#gg">gg</a>  	N  gg		goto line N (default: first line), on the first
			   non-blank character
<a href="motion.html#N%25">N%</a>  	N  %		goto line N percentage down in the file; N must be
			   given, otherwise it is the <a href="motion.html#%25">%</a> command
<a href="motion.html#gk">gk</a>  	N  gk		up N screen lines (differs from "k" when line wraps)
<a href="motion.html#gj">gj</a>  	N  gj		down N screen lines (differs from "j" when line wraps)</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_tm"></a><span class="help-tag">Q_tm</span>  		Text object motions</span></h3></div>
<div class="old-help-para"><a href="motion.html#w">w</a>  	N  w		N words forward
<a href="motion.html#W">W</a>  	N  W		N blank-separated <a href="motion.html#WORD">WORD</a>s forward
<a href="motion.html#e">e</a>  	N  e		forward to the end of the Nth word
<a href="motion.html#E">E</a>  	N  E		forward to the end of the Nth blank-separated <a href="motion.html#WORD">WORD</a>
<a href="motion.html#b">b</a>  	N  b		N words backward
<a href="motion.html#B">B</a>  	N  B		N blank-separated <a href="motion.html#WORD">WORD</a>s backward
<a href="motion.html#ge">ge</a>  	N  ge		backward to the end of the Nth word
<a href="motion.html#gE">gE</a>  	N  gE		backward to the end of the Nth blank-separated <a href="motion.html#WORD">WORD</a></div>
<div class="old-help-para"><a href="motion.html#)">)</a>  	N  )		N sentences forward
<a href="motion.html#(">(</a>  	N  (		N sentences backward
<a href="motion.html#%7D">}</a>  	N  }		N paragraphs forward
<a href="motion.html#%7B">{</a>  	N  {		N paragraphs backward
<a href="motion.html#%5D%5D">]]</a>  	N  ]]		N sections forward, at start of section
<a href="motion.html#%5B%5B">[[</a>  	N  [[		N sections backward, at start of section
<a href="motion.html#%5D%5B">][</a>  	N  ][		N sections forward, at end of section
<a href="motion.html#%5B%5D">[]</a>  	N  []		N sections backward, at end of section
<a href="motion.html#%5B(">[(</a>  	N  [(		N times back to unclosed '('
<a href="motion.html#%5B%7B">[{</a>  	N  [{		N times back to unclosed '{'
<a href="motion.html#%5Bm">[m</a>  	N  [m		N times back to start of method (for Java)
<a href="motion.html#%5BM">[M</a>  	N  [M		N times back to end of method (for Java)
<a href="motion.html#%5D)">])</a>  	N  ])		N times forward to unclosed ')'
<a href="motion.html#%5D%7D">]}</a>  	N  ]}		N times forward to unclosed '}'
<a href="motion.html#%5Dm">]m</a>  	N  ]m		N times forward to start of method (for Java)
<a href="motion.html#%5DM">]M</a>  	N  ]M		N times forward to end of method (for Java)
<a href="motion.html#%5B%23">[#</a>  	N  [#		N times back to unclosed "#if" or "#else"
<a href="motion.html#%5D%23">]#</a>  	N  ]#		N times forward to unclosed "#else" or "#endif"
<a href="motion.html#%5Bstar">[star</a>  	N  [*		N times back to start of comment "/*"
<a href="motion.html#%5Dstar">]star</a>  	N  ]*		N times forward to end of comment "*/"</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_pa"></a><span class="help-tag">Q_pa</span>  		Pattern searches</span></h3></div>
<div class="old-help-para"><a href="pattern.html#%2F">/</a>  	N  /{pattern}[/[offset]]&lt;CR&gt;
			search forward for the Nth occurrence of <code>{pattern}</code>
<a href="pattern.html#%3F">?</a>  	N  ?{pattern}[?[offset]]&lt;CR&gt;
			search backward for the Nth occurrence of <code>{pattern}</code>
<a href="pattern.html#%2F%3CCR%3E">/&lt;CR&gt;</a>  	N  /&lt;CR&gt;	repeat last search, in the forward direction
<a href="pattern.html#%3F%3CCR%3E">?&lt;CR&gt;</a>  	N  ?&lt;CR&gt;	repeat last search, in the backward direction
<a href="pattern.html#n">n</a>  	N  n		repeat last search
<a href="pattern.html#N">N</a>  	N  N		repeat last search, in opposite direction
<a href="pattern.html#star">star</a>  	N  *		search forward for the identifier under the cursor
<a href="pattern.html#%23">#</a>  	N  #		search backward for the identifier under the cursor
<a href="pattern.html#gstar">gstar</a>  	N  g*		like "*", but also find partial matches
<a href="pattern.html#g%23">g#</a>  	N  g#		like "#", but also find partial matches
<a href="pattern.html#gd">gd</a>  	   gd		goto local declaration of identifier under the cursor
<a href="pattern.html#gD">gD</a>  	   gD		goto global declaration of identifier under the cursor</div>
<div class="old-help-para"><a href="pattern.html#pattern">pattern</a>  		Special characters in search patterns</div>
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
<div class="old-help-para"><a href="pattern.html#search-offset">search-offset</a>  		Offsets allowed after search command</div>
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
<div class="old-help-para"><a href="motion.html#m">m</a>        m{a-zA-Z}	mark current position with mark <code>{a-zA-Z}</code>
<a href="motion.html#%60a">`a</a>{a-z}	go to mark {a-z} within current file
<a href="motion.html#%60A">`A</a>{A-Z}	go to mark {A-Z} in any file
<a href="motion.html#%600">`0</a>{0-9}	go to the position where Vim was previously exited
<a href="motion.html#%60%60">``</a>       ``		go to the position before the last jump
<a href="motion.html#%60quote">`quote</a>"		go to the position when last editing this file
<a href="motion.html#%60%5B">`[</a>[		go to the start of the previously operated or put text
<a href="motion.html#%60%5D">`]</a>]		go to the end of the previously operated or put text
<a href="motion.html#%60%3C">`&lt;</a>&lt;		go to the start of the (previous) Visual area
<a href="motion.html#%60%3E">`&gt;</a>&gt;		go to the end of the (previous) Visual area
<a href="motion.html#%60.">`.</a>.		go to the position of the last change in this file
|'|        '{a-zA-Z0-9[]'"&lt;&gt;.}
			same as, but on the first non-blank in the line
<a href="motion.html#%3Amarks">:marks</a>  :marks	print the active marks
<a href="motion.html#CTRL-O">CTRL-O</a>  N  <code>CTRL-O</code>	go to Nth older position in jump list
<a href="motion.html#CTRL-I">CTRL-I</a>  N  <code>CTRL-I</code>	go to Nth newer position in jump list
<a href="motion.html#%3Aju">:ju</a>     :ju[mps]	print the jump list</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_vm"></a><span class="help-tag">Q_vm</span>  		Various motions</span></h3></div>
<div class="old-help-para"><a href="motion.html#%25">%</a>  	   %		find the next brace, bracket, comment, or "#if"/
			   "#else"/"#endif" in this line and go to its match
<a href="motion.html#H">H</a>  	N  H		go to the Nth line in the window, on the first
			   non-blank
<a href="motion.html#M">M</a>  	   M		go to the middle line in the window, on the first
			   non-blank
<a href="motion.html#L">L</a>  	N  L		go to the Nth line from the bottom, on the first
			   non-blank</div>
<div class="old-help-para"><a href="motion.html#go">go</a>  	N  go			go to Nth byte in the buffer
<a href="motion.html#%3Ago">:go</a>  	:[range]go[to] [off]	go to [off] byte in the buffer</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_ta"></a><span class="help-tag">Q_ta</span>  		Using tags</span></h3></div>
<div class="old-help-para"><a href="tagsrch.html#%3Ata">:ta</a>      :ta[g][!] <code>{tag}</code>	jump to tag <code>{tag}</code>
<a href="tagsrch.html#%3Ata">:ta</a>      :[count]ta[g][!]	jump to [count]'th newer tag in tag list
<a href="tagsrch.html#CTRL-%5D">CTRL-]</a>      <code>CTRL-]</code>		jump to the tag under cursor, unless changes
				   have been made
<a href="tagsrch.html#%3Ats">:ts</a>      :ts[elect][!] [tag]	list matching tags and select one to jump to
<a href="tagsrch.html#%3Atjump">:tjump</a>   :tj[ump][!] [tag]	jump to tag [tag] or select from list when
				   there are multiple matches
<a href="tagsrch.html#%3Altag">:ltag</a>    :lt[ag][!] [tag]	jump to tag [tag] and add matching tags to the
				   location list</div>
<div class="old-help-para"><a href="tagsrch.html#%3Atags">:tags</a>    :tags		print tag list
<a href="tagsrch.html#CTRL-T">CTRL-T</a>   N  <code>CTRL-T</code>		jump back from Nth older tag in tag list
<a href="tagsrch.html#%3Apo">:po</a>      :[count]po[p][!]	jump back from [count]'th older tag in tag list
<a href="tagsrch.html#%3Atnext">:tnext</a>   :[count]tn[ext][!]	jump to [count]'th next matching tag
<a href="tagsrch.html#%3Atp">:tp</a>      :[count]tp[revious][!] jump to [count]'th previous matching tag
<a href="tagsrch.html#%3Atr">:tr</a>      :[count]tr[ewind][!]	jump to [count]'th matching tag
<a href="tagsrch.html#%3Atl">:tl</a>      :tl[ast][!]		jump to last matching tag</div>
<div class="old-help-para"><a href="windows.html#%3Aptag">:ptag</a>    :pt[ag] <code>{tag}</code>	open a preview window to show tag <code>{tag}</code>
<a href="windows.html#CTRL-W_%7D">CTRL-W_}</a>    <code>CTRL-W</code> }		like <code>CTRL-]</code> but show tag in preview window
<a href="tagsrch.html#%3Apts">:pts</a>     :pts[elect]		like ":tselect" but show tag in preview window
<a href="tagsrch.html#%3Aptjump">:ptjump</a>  :ptj[ump]		like ":tjump" but show tag in preview window
<a href="windows.html#%3Apclose">:pclose</a>  :pc[lose]		close tag preview window
<a href="windows.html#CTRL-W_z">CTRL-W_z</a>    <code>CTRL-W</code> z		close tag preview window</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_sc"></a><span class="help-tag">Q_sc</span>  		Scrolling</span></h3></div>
<div class="old-help-para"><a href="scroll.html#CTRL-E">CTRL-E</a>  	N  <code>CTRL-E</code>	window N lines downwards (default: 1)
<a href="scroll.html#CTRL-D">CTRL-D</a>  	N  <code>CTRL-D</code>	window N lines Downwards (default: 1/2 window)
<a href="scroll.html#CTRL-F">CTRL-F</a>  	N  <code>CTRL-F</code>	window N pages Forwards (downwards)
<a href="scroll.html#CTRL-Y">CTRL-Y</a>  	N  <code>CTRL-Y</code>	window N lines upwards (default: 1)
<a href="scroll.html#CTRL-U">CTRL-U</a>  	N  <code>CTRL-U</code>	window N lines Upwards (default: 1/2 window)
<a href="scroll.html#CTRL-B">CTRL-B</a>  	N  <code>CTRL-B</code>	window N pages Backwards (upwards)
<a href="scroll.html#z%3CCR%3E">z&lt;CR&gt;</a>  		   z&lt;CR&gt; or zt	redraw, current line at top of window
<a href="scroll.html#z.">z.</a>  		   z.	 or zz	redraw, current line at center of window
<a href="scroll.html#z-">z-</a>  		   z-	 or zb	redraw, current line at bottom of window</div>
<div class="old-help-para">These only work when <a href="options.html#'wrap'">'wrap'</a> is off:
<a href="scroll.html#zh">zh</a>  		N  zh		scroll screen N characters to the right
<a href="scroll.html#zl">zl</a>  		N  zl		scroll screen N characters to the left
<a href="scroll.html#zH">zH</a>  		N  zH		scroll screen half a screenwidth to the right
<a href="scroll.html#zL">zL</a>  		N  zL		scroll screen half a screenwidth to the left</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_in"></a><span class="help-tag">Q_in</span>  		Inserting text</span></h3></div>
<div class="old-help-para"><a href="insert.html#a">a</a>  	N  a	append text after the cursor (N times)
<a href="insert.html#A">A</a>  	N  A	append text at the end of the line (N times)
<a href="insert.html#i">i</a>  	N  i	insert text before the cursor (N times) (also: <code>&lt;Insert&gt;</code>)
<a href="insert.html#I">I</a>  	N  I	insert text before the first non-blank in the line (N times)
<a href="insert.html#gI">gI</a>  	N  gI	insert text in column 1 (N times)
<a href="insert.html#o">o</a>  	N  o	open a new line below the current line, append text (N times)
<a href="insert.html#O">O</a>  	N  O	open a new line above the current line, append text (N times)
<a href="insert.html#%3Astartinsert">:startinsert</a>  :star[tinsert][!]  start Insert mode, append when [!] used
<a href="insert.html#%3Astartreplace">:startreplace</a> :startr[eplace][!]  start Replace mode, at EOL when [!] used</div>
<div class="old-help-para">in Visual block mode:
<a href="visual.html#v_b_I">v_b_I</a>  	   I	insert the same text in front of all the selected lines
<a href="visual.html#v_b_A">v_b_A</a>  	   A	append the same text after all the selected lines</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_ai"></a><span class="help-tag">Q_ai</span>  		Insert mode keys</span></h3></div>
<div class="old-help-para"><a href="vimindex.html#insert-index">insert-index</a>  	alphabetical index of Insert mode commands</div>
<div class="old-help-para">leaving Insert mode:
<a href="insert.html#i_%3CEsc%3E">i_&lt;Esc&gt;</a>  	<code>&lt;Esc&gt;</code>		  end Insert mode, back to Normal mode
<a href="insert.html#i_CTRL-C">i_CTRL-C</a>  	<code>CTRL-C</code>		  like <code>&lt;Esc&gt;</code>, but do not use an abbreviation
<a href="insert.html#i_CTRL-O">i_CTRL-O</a>  	<code>CTRL-O</code> <code>{command}</code>  execute <code>{command}</code> and return to Insert mode</div>
<div class="old-help-para">moving around:
<a href="insert.html#i_%3CUp%3E">i_&lt;Up&gt;</a>  	cursor keys	  move cursor left/right/up/down
<a href="insert.html#i_%3CS-Left%3E">i_&lt;S-Left&gt;</a>  	shift-left/right  one word left/right
<a href="insert.html#i_%3CS-Up%3E">i_&lt;S-Up&gt;</a>  	shift-up/down	  one screenful backward/forward
<a href="insert.html#i_%3CEnd%3E">i_&lt;End&gt;</a>  	<code>&lt;End&gt;</code>		  cursor after last character in the line
<a href="insert.html#i_%3CHome%3E">i_&lt;Home&gt;</a>  	<code>&lt;Home&gt;</code>		  cursor to first character in the line</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_ss"></a><span class="help-tag">Q_ss</span>  		Special keys in Insert mode</span></h3></div>
<div class="old-help-para"><a href="insert.html#i_CTRL-V">i_CTRL-V</a>  	<code>CTRL-V</code> <code>{char}</code>..	  insert character literally, or enter decimal
				     byte value
<a href="insert.html#i_%3CNL%3E">i_&lt;NL&gt;</a>  	<code>&lt;NL&gt;</code> or <code>&lt;CR&gt;</code> or <code>CTRL-M</code> or <code>CTRL-J</code>
				  begin new line
<a href="insert.html#i_CTRL-E">i_CTRL-E</a>  	<code>CTRL-E</code>		  insert the character from below the cursor
<a href="insert.html#i_CTRL-Y">i_CTRL-Y</a>  	<code>CTRL-Y</code>		  insert the character from above the cursor</div>
<div class="old-help-para"><a href="insert.html#i_CTRL-A">i_CTRL-A</a>  	<code>CTRL-A</code>		  insert previously inserted text
<a href="insert.html#i_CTRL-%40">i_CTRL-@</a>  	<code>CTRL-@</code>		  insert previously inserted text and stop
				     Insert mode
<a href="insert.html#i_CTRL-R">i_CTRL-R</a>  	<code>CTRL-R</code> <code>{register}</code> insert the contents of a register</div>
<div class="old-help-para"><a href="insert.html#i_CTRL-N">i_CTRL-N</a>  	<code>CTRL-N</code>		  insert next match of identifier before the
				     cursor
<a href="insert.html#i_CTRL-P">i_CTRL-P</a>  	<code>CTRL-P</code>		  insert previous match of identifier before
				     the cursor
<a href="insert.html#i_CTRL-X">i_CTRL-X</a>  	<code>CTRL-X</code> ...	  complete the word before the cursor in
				     various ways</div>
<div class="old-help-para"><a href="insert.html#i_%3CBS%3E">i_&lt;BS&gt;</a>  	<code>&lt;BS&gt;</code> or <code>CTRL-H</code>	  delete the character before the cursor
<a href="insert.html#i_%3CDel%3E">i_&lt;Del&gt;</a>  	<code>&lt;Del&gt;</code>		  delete the character under the cursor
<a href="insert.html#i_CTRL-W">i_CTRL-W</a>  	<code>CTRL-W</code>		  delete word before the cursor
<a href="insert.html#i_CTRL-U">i_CTRL-U</a>  	<code>CTRL-U</code>		  delete all entered characters in the current
				     line
<a href="insert.html#i_CTRL-T">i_CTRL-T</a>  	<code>CTRL-T</code>		  insert one shiftwidth of indent in front of
				       the current line
<a href="insert.html#i_CTRL-D">i_CTRL-D</a>  	<code>CTRL-D</code>		  delete one shiftwidth of indent in front of
				     the current line
<a href="insert.html#i_0_CTRL-D">i_0_CTRL-D</a>  	0 <code>CTRL-D</code>	  delete all indent in the current line
<a href="insert.html#i_%5E_CTRL-D">i_^_CTRL-D</a>  	^ <code>CTRL-D</code>	  delete all indent in the current line,
				     restore indent in next line</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_di"></a><span class="help-tag">Q_di</span>  		Digraphs</span></h3></div>
<div class="old-help-para"><a href="digraph.html#%3Adig">:dig</a>  	   :dig[raphs]		show current list of digraphs
<a href="digraph.html#%3Adig">:dig</a>  	   :dig[raphs] <code>{char1}</code><code>{char2}</code> <code>{number}</code> ...
				add digraph(s) to the list</div>
<div class="old-help-para">In Insert or Command-line mode:
<a href="insert.html#i_CTRL-K">i_CTRL-K</a>  	<code>CTRL-K</code> <code>{char1}</code> <code>{char2}</code>
				  enter digraph
<a href="digraph.html#i_digraph">i_digraph</a>  	<code>{char1}</code> <code>&lt;BS&gt;</code> <code>{char2}</code>
				  enter digraph if <a href="options.html#'digraph'">'digraph'</a> option set</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_si"></a><span class="help-tag">Q_si</span>  		Special inserts</span></h3></div>
<div class="old-help-para"><a href="insert.html#%3Ar">:r</a>  	   :r [file]	   insert the contents of [file] below the cursor
<a href="insert.html#%3Ar%21">:r!</a>  	   :r! <code>{command}</code>   insert the standard output of <code>{command}</code> below the
			      cursor</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_de"></a><span class="help-tag">Q_de</span>  		Deleting text</span></h3></div>
<div class="old-help-para"><a href="change.html#x">x</a>  	N  x		delete N characters under and after the cursor
<a href="change.html#%3CDel%3E">&lt;Del&gt;</a>  	N  <code>&lt;Del&gt;</code>	delete N characters under and after the cursor
<a href="change.html#X">X</a>  	N  X		delete N characters before the cursor
<a href="change.html#d">d</a>  	N  d{motion}	delete the text that is moved over with <code>{motion}</code>
<a href="change.html#v_d">v_d</a>  	   <code>{visual}</code>d	delete the highlighted text
<a href="change.html#dd">dd</a>  	N  dd		delete N lines
<a href="change.html#D">D</a>  	N  D		delete to the end of the line (and N-1 more lines)
<a href="change.html#J">J</a>  	N  J		join N-1 lines (delete <code>&lt;EOL&gt;</code>s)
<a href="change.html#v_J">v_J</a>  	   <code>{visual}</code>J	join the highlighted lines
<a href="change.html#gJ">gJ</a>  	N  gJ		like "J", but without inserting spaces
<a href="change.html#v_gJ">v_gJ</a>  	   <code>{visual}</code>gJ	like "{visual}J", but without inserting spaces
<a href="change.html#%3Ad">:d</a>  	:[range]d [x]	delete [range] lines [into register x]</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_cm"></a><span class="help-tag">Q_cm</span>  		Copying and moving text</span></h3></div>
<div class="old-help-para"><a href="change.html#quote">quote</a>  	  "{char}	use register <code>{char}</code> for the next delete, yank, or put
<a href="change.html#%3Areg">:reg</a>  	  :reg		show the contents of all registers
<a href="change.html#%3Areg">:reg</a>  	  :reg <code>{arg}</code>	show the contents of registers mentioned in <code>{arg}</code>
<a href="change.html#y">y</a>  	  N  y{motion}	yank the text moved over with <code>{motion}</code> into a register
<a href="change.html#v_y">v_y</a>  	     <code>{visual}</code>y	yank the highlighted text into a register
<a href="change.html#yy">yy</a>  	  N  yy		yank N lines into a register
<a href="change.html#Y">Y</a>  	  N  Y		yank N lines into a register
			Note: Mapped to "y$" by default. <a href="vim_diff.html#default-mappings">default-mappings</a>
<a href="change.html#p">p</a>  	  N  p		put a register after the cursor position (N times)
<a href="change.html#P">P</a>  	  N  P		put a register before the cursor position (N times)
<a href="change.html#%5Dp">]p</a>  	  N  ]p		like p, but adjust indent to current line
<a href="change.html#%5Bp">[p</a>  	  N  [p		like P, but adjust indent to current line
<a href="change.html#gp">gp</a>  	  N  gp		like p, but leave cursor after the new text
<a href="change.html#gP">gP</a>  	  N  gP		like P, but leave cursor after the new text</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_ch"></a><span class="help-tag">Q_ch</span>  		Changing text</span></h3></div>
<div class="old-help-para"><a href="change.html#r">r</a>  	  N  r{char}	replace N characters with <code>{char}</code>
<a href="change.html#gr">gr</a>  	  N  gr{char}	replace N characters without affecting layout
<a href="change.html#R">R</a>  	  N  R		enter Replace mode (repeat the entered text N times)
<a href="change.html#gR">gR</a>  	  N  gR		enter virtual Replace mode: Like Replace mode but
			   without affecting layout
<a href="visual.html#v_b_r">v_b_r</a>  	     <code>{visual}</code>r{char}
			in Visual block mode: Replace each char of the
			   selected text with <code>{char}</code></div>
<div class="old-help-para">	(change = delete text and enter Insert mode)
<a href="change.html#c">c</a>  	  N  c{motion}	change the text that is moved over with <code>{motion}</code>
<a href="change.html#v_c">v_c</a>  	     <code>{visual}</code>c	change the highlighted text
<a href="change.html#cc">cc</a>  	  N  cc		change N lines
<a href="change.html#S">S</a>  	  N  S		change N lines
<a href="change.html#C">C</a>  	  N  C		change to the end of the line (and N-1 more lines)
<a href="change.html#s">s</a>  	  N  s		change N characters
<a href="visual.html#v_b_c">v_b_c</a>  	     <code>{visual}</code>c	in Visual block mode: Change each of the selected
			   lines with the entered text
<a href="visual.html#v_b_C">v_b_C</a>  	     <code>{visual}</code>C	in Visual block mode: Change each of the selected
			   lines until end-of-line with the entered text</div>
<div class="old-help-para">|~|	  N  ~		switch case for N characters and advance cursor
<a href="change.html#v_~">v_~</a>  	     <code>{visual}</code>~	switch case for highlighted text
<a href="change.html#v_u">v_u</a>  	     <code>{visual}</code>u	make highlighted text lowercase
<a href="change.html#v_U">v_U</a>  	     <code>{visual}</code>U	make highlighted text uppercase
<a href="change.html#g~">g~</a>  	     g~{motion} switch case for the text that is moved over with
			   <code>{motion}</code>
<a href="change.html#gu">gu</a>  	     gu{motion} make the text that is moved over with <code>{motion}</code>
			   lowercase
<a href="change.html#gU">gU</a>  	     gU{motion} make the text that is moved over with <code>{motion}</code>
			   uppercase
<a href="change.html#v_g%3F">v_g?</a>  	     <code>{visual}</code>g? perform rot13 encoding on highlighted text
<a href="change.html#g%3F">g?</a>  	     g?{motion} perform rot13 encoding on the text that is moved over
			   with <code>{motion}</code></div>
<div class="old-help-para"><a href="change.html#CTRL-A">CTRL-A</a>  N  <code>CTRL-A</code>	add N to the number at or after the cursor
<a href="change.html#CTRL-X">CTRL-X</a>  N  <code>CTRL-X</code>	subtract N from the number at or after the cursor</div>
<div class="old-help-para"><a href="change.html#%3C">&lt;</a>  	  N  &lt;{motion}	move the lines that are moved over with <code>{motion}</code> one
			   shiftwidth left
<a href="change.html#%3C%3C">&lt;&lt;</a>  	  N  &lt;&lt;		move N lines one shiftwidth left
|&gt;|	  N  &gt;<code>{motion}</code>	move the lines that are moved over with <code>{motion}</code> one
			   shiftwidth right
<a href="change.html#%3E%3E">&gt;&gt;</a>  	  N  &gt;&gt;		move N lines one shiftwidth right
<a href="change.html#gq">gq</a>  	  N  gq{motion}	format the lines that are moved over with <code>{motion}</code> to
			   <a href="options.html#'textwidth'">'textwidth'</a> length
<a href="change.html#%3Ace">:ce</a>  	  :[range]ce[nter] [width]
			center the lines in [range]
<a href="change.html#%3Ale">:le</a>  	  :[range]le[ft] [indent]
			left-align the lines in [range] (with [indent])
<a href="change.html#%3Ari">:ri</a>  	  :[range]ri[ght] [width]
			right-align the lines in [range]</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_co"></a><span class="help-tag">Q_co</span>  		Complex changes</span></h3></div>
<div class="old-help-para"><a href="change.html#%21">!</a>  	   N  !{motion}{command}&lt;CR&gt;
			filter the lines that are moved over through <code>{command}</code>
<a href="change.html#%21%21">!!</a>  	   N  !!{command}&lt;CR&gt;
			filter N lines through <code>{command}</code>
<a href="change.html#v_%21">v_!</a>  	      <code>{visual}</code>!{command}&lt;CR&gt;
			filter the highlighted lines through <code>{command}</code>
<a href="change.html#%3Arange%21">:range!</a>  :[range]! <code>{command}</code><code>&lt;CR&gt;</code>
			filter [range] lines through <code>{command}</code>
<a href="change.html#%3D">=</a>  	   N  ={motion}
			filter the lines that are moved over through <a href="options.html#'equalprg'">'equalprg'</a>
<a href="change.html#%3D%3D">==</a>  	   N  ==	filter N lines through <a href="options.html#'equalprg'">'equalprg'</a>
<a href="change.html#v_%3D">v_=</a>  	      <code>{visual}</code>=
			filter the highlighted lines through <a href="options.html#'equalprg'">'equalprg'</a>
<a href="change.html#%3As">:s</a>  	   :[range]s[ubstitute]/{pattern}/{string}/[g][c]
			substitute <code>{pattern}</code> by <code>{string}</code> in [range] lines;
			   with [g], replace all occurrences of <code>{pattern}</code>;
			   with [c], confirm each replacement
<a href="change.html#%3As">:s</a>  	   :[range]s[ubstitute] [g][c]
			repeat previous ":s" with new range and options
<a href="change.html#%26">&amp;</a>  	      &amp;		Repeat previous ":s" on current line without options
<a href="change.html#%3Aret">:ret</a>  	   :[range]ret[ab][!] [tabstop]
			set <a href="options.html#'tabstop'">'tabstop'</a> to new value and adjust white space
			   accordingly</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_vi"></a><span class="help-tag">Q_vi</span>  		Visual mode</span></h3></div>
<div class="old-help-para"><a href="vimindex.html#visual-index">visual-index</a>  	list of Visual mode commands.</div>
<div class="old-help-para"><a href="visual.html#v">v</a>        v		start highlighting characters  }  move cursor and use
<a href="visual.html#V">V</a>        V		start highlighting linewise    }  operator to affect
<a href="visual.html#CTRL-V">CTRL-V</a>   <code>CTRL-V</code>	start highlighting blockwise   }  highlighted text
<a href="visual.html#v_o">v_o</a>      o		exchange cursor position with start of highlighting
<a href="visual.html#gv">gv</a>       gv		start highlighting on previous visual area
<a href="visual.html#v_v">v_v</a>      v		highlight characters or stop highlighting
<a href="visual.html#v_V">v_V</a>      V		highlight linewise or stop highlighting
<a href="visual.html#v_CTRL-V">v_CTRL-V</a> <code>CTRL-V</code>	highlight blockwise or stop highlighting</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_to"></a><span class="help-tag">Q_to</span>  		Text objects (only in Visual mode or after an operator)</span></h3></div>
<div class="old-help-para"><a href="motion.html#v_aw">v_aw</a>  	   N  aw	Select "a word"
<a href="motion.html#v_iw">v_iw</a>  	   N  iw	Select "inner word"
<a href="motion.html#v_aW">v_aW</a>  	   N  aW	Select "a <a href="motion.html#WORD">WORD</a>"
<a href="motion.html#v_iW">v_iW</a>  	   N  iW	Select "inner <a href="motion.html#WORD">WORD</a>"
<a href="motion.html#v_as">v_as</a>  	   N  as	Select "a sentence"
<a href="motion.html#v_is">v_is</a>  	   N  is	Select "inner sentence"
<a href="motion.html#v_ap">v_ap</a>  	   N  ap	Select "a paragraph"
<a href="motion.html#v_ip">v_ip</a>  	   N  ip	Select "inner paragraph"
<a href="motion.html#v_ab">v_ab</a>  	   N  ab	Select "a block" (from "[(" to "])")
<a href="motion.html#v_ib">v_ib</a>  	   N  ib	Select "inner block" (from "[(" to "])")
<a href="motion.html#v_aB">v_aB</a>  	   N  aB	Select "a Block" (from "[{" to "]}")
<a href="motion.html#v_iB">v_iB</a>  	   N  iB	Select "inner Block" (from "[{" to "]}")
<a href="motion.html#v_a%3E">v_a&gt;</a>  	   N  a&gt;	Select "a &lt;&gt; block"
<a href="motion.html#v_i%3E">v_i&gt;</a>  	   N  i&gt;	Select "inner &lt;&gt; block"
<a href="motion.html#v_at">v_at</a>  	   N  at	Select "a tag block" (from <code>&lt;aaa&gt;</code> to &lt;/aaa&gt;)
<a href="motion.html#v_it">v_it</a>  	   N  it	Select "inner tag block" (from <code>&lt;aaa&gt;</code> to &lt;/aaa&gt;)
<a href="motion.html#v_a'">v_a'</a>  	   N  a'	Select "a single quoted string"
<a href="motion.html#v_i'">v_i'</a>  	   N  i'	Select "inner single quoted string"
<a href="motion.html#v_aquote">v_aquote</a> N  a"	Select "a double quoted string"
<a href="motion.html#v_iquote">v_iquote</a> N  i"	Select "inner double quoted string"
<a href="motion.html#v_a%60">v_a`</a>  	   N  a`	Select "a backward quoted string"
<a href="motion.html#v_i%60">v_i`</a>  	   N  i`	Select "inner backward quoted string"</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_re"></a><span class="help-tag">Q_re</span>  		Repeating commands</span></h3></div>
<div class="old-help-para"><a href="repeat.html#.">.</a>  	   N  .		repeat last change (with count replaced with N)
<a href="repeat.html#q">q</a>  	      q{a-z}	record typed characters into register <code>{a-z}</code>
<a href="repeat.html#q">q</a>  	      q{A-Z}	record typed characters, appended to register <code>{a-z}</code>
<a href="repeat.html#q">q</a>  	      q		stop recording
<a href="repeat.html#Q">Q</a>  	      Q		replay last recorded macro
<a href="repeat.html#%40">@</a>  	   N  @{a-z}	execute the contents of register <code>{a-z}</code> (N times)
<a href="repeat.html#%40%40">@@</a>  	   N  @@	   repeat previous @{a-z} (N times)
<a href="repeat.html#%3A%40">:@</a>  	   :@{a-z}	execute the contents of register <code>{a-z}</code> as an Ex
			   command
<a href="repeat.html#%3A%40%40">:@@</a>  	   :@@		repeat previous :@{a-z}
<a href="repeat.html#%3Ag">:g</a>  	   :[range]g[lobal]/{pattern}/[cmd]
			execute Ex command [cmd] (default: ":p") on the lines
			   within [range] where <code>{pattern}</code> matches
<a href="repeat.html#%3Ag">:g</a>  	   :[range]g[lobal]!/{pattern}/[cmd]
			execute Ex command [cmd] (default: ":p") on the lines
			   within [range] where <code>{pattern}</code> does NOT match
<a href="repeat.html#%3Aso">:so</a>  	   :so[urce] <code>{file}</code>
			read Ex commands from <code>{file}</code>
<a href="repeat.html#%3Aso">:so</a>  	   :so[urce]! <code>{file}</code>
			read Vim commands from <code>{file}</code>
<a href="various.html#%3Asl">:sl</a>  	   :sl[eep] [sec]
			don't do anything for [sec] seconds
<a href="various.html#gs">gs</a>  	   N  gs	goto Sleep for N seconds</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_km"></a><span class="help-tag">Q_km</span>  		Key mapping</span></h3></div>
<div class="old-help-para"><a href="map.html#%3Amap">:map</a>       :ma[p] <code>{lhs}</code> <code>{rhs}</code>	  map <code>{lhs}</code> to <code>{rhs}</code> in Normal and Visual mode
<a href="map.html#%3Amap%21">:map!</a>      :ma[p]! <code>{lhs}</code> <code>{rhs}</code>  map <code>{lhs}</code> to <code>{rhs}</code> in Insert and Command-line
				     mode
<a href="map.html#%3Anoremap">:noremap</a>   :no[remap][!] <code>{lhs}</code> <code>{rhs}</code>
				  same as ":map", no remapping for this <code>{rhs}</code>
<a href="map.html#%3Aunmap">:unmap</a>     :unm[ap] <code>{lhs}</code>	  remove the mapping of <code>{lhs}</code> for Normal and
				     Visual mode
<a href="map.html#%3Aunmap%21">:unmap!</a>    :unm[ap]! <code>{lhs}</code>	  remove the mapping of <code>{lhs}</code> for Insert and
				     Command-line mode
<a href="map.html#%3Amap_l">:map_l</a>     :ma[p] [lhs]	  list mappings (starting with [lhs]) for
				     Normal and Visual mode
<a href="map.html#%3Amap_l%21">:map_l!</a>    :ma[p]! [lhs]	  list mappings (starting with [lhs]) for
				     Insert and Command-line mode
<a href="map.html#%3Acmap">:cmap</a>      :cmap/:cunmap/:cnoremap
				  like ":map!"/":unmap!"/":noremap!" but for
				     Command-line mode only
<a href="map.html#%3Aimap">:imap</a>      :imap/:iunmap/:inoremap
				  like ":map!"/":unmap!"/":noremap!" but for
				     Insert mode only
<a href="map.html#%3Anmap">:nmap</a>      :nmap/:nunmap/:nnoremap
				  like ":map"/":unmap"/":noremap" but for
				     Normal mode only
<a href="map.html#%3Avmap">:vmap</a>      :vmap/:vunmap/:vnoremap
				  like ":map"/":unmap"/":noremap" but for
				     Visual mode only
<a href="map.html#%3Aomap">:omap</a>      :omap/:ounmap/:onoremap
				  like ":map"/":unmap"/":noremap" but only for
				     when an operator is pending
<a href="map.html#%3Amapc">:mapc</a>      :mapc[lear]	  remove mappings for Normal and Visual mode
<a href="map.html#%3Amapc">:mapc</a>      :mapc[lear]!	  remove mappings for Insert and Cmdline mode
<a href="map.html#%3Aimapc">:imapc</a>     :imapc[lear]	  remove mappings for Insert mode
<a href="map.html#%3Avmapc">:vmapc</a>     :vmapc[lear]	  remove mappings for Visual mode
<a href="map.html#%3Aomapc">:omapc</a>     :omapc[lear]	  remove mappings for Operator-pending mode
<a href="map.html#%3Anmapc">:nmapc</a>     :nmapc[lear]	  remove mappings for Normal mode
<a href="map.html#%3Acmapc">:cmapc</a>     :cmapc[lear]	  remove mappings for Cmdline mode
<a href="starting.html#%3Amkexrc">:mkexrc</a>    :mk[exrc][!] [file]  write current mappings, abbreviations, and
				     settings to [file] (default: ".exrc";
				     use ! to overwrite)
<a href="starting.html#%3Amkvimrc">:mkvimrc</a>   :mkv[imrc][!] [file]
				  same as :mkexrc, but with default ".nvimrc"
<a href="starting.html#%3Amksession">:mksession</a> :mks[ession][!] [file]
				  like ":mkvimrc", but store current files,
				     windows, etc. too, to be able to continue
				     this session later</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_ab"></a><span class="help-tag">Q_ab</span>  		Abbreviations</span></h3></div>
<div class="old-help-para"><a href="map.html#%3Aabbreviate">:abbreviate</a>  	:ab[breviate] <code>{lhs}</code> <code>{rhs}</code>  add abbreviation for <code>{lhs}</code> to <code>{rhs}</code>
<a href="map.html#%3Aabbreviate">:abbreviate</a>  	:ab[breviate] <code>{lhs}</code>	   show abbr's that start with <code>{lhs}</code>
<a href="map.html#%3Aabbreviate">:abbreviate</a>  	:ab[breviate]		   show all abbreviations
<a href="map.html#%3Aunabbreviate">:unabbreviate</a>  	:una[bbreviate] <code>{lhs}</code>	   remove abbreviation for <code>{lhs}</code>
<a href="map.html#%3Anoreabbrev">:noreabbrev</a>  	:norea[bbrev] [lhs] [rhs]  like ":ab", but don't remap [rhs]
<a href="map.html#%3Aiabbrev">:iabbrev</a>  	:iab/:iunab/:inoreab	   like ":ab", but only for Insert mode
<a href="map.html#%3Acabbrev">:cabbrev</a>  	:cab/:cunab/:cnoreab	   like ":ab", but only for
						Command-line mode
<a href="map.html#%3Aabclear">:abclear</a>  	:abc[lear]		   remove all abbreviations
<a href="map.html#%3Acabclear">:cabclear</a>  	:cabc[lear]		   remove all abbr's for Cmdline mode
<a href="map.html#%3Aiabclear">:iabclear</a>  	:iabc[lear]		   remove all abbr's for Insert mode</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_op"></a><span class="help-tag">Q_op</span>  		Options</span></h3></div>
<div class="old-help-para"><a href="options.html#%3Aset">:set</a>  		:se[t]			  show all modified options
<a href="options.html#%3Aset">:set</a>  		:se[t] all		  show all options
<a href="options.html#%3Aset">:set</a>  		:se[t] <code>{option}</code>		  set boolean option (switch it on),
					  show string or number option
<a href="options.html#%3Aset">:set</a>  		:se[t] no{option}	  reset boolean option (switch it off)
<a href="options.html#%3Aset">:set</a>  		:se[t] inv{option}	  invert boolean option
<a href="options.html#%3Aset">:set</a>  		:se[t] <code>{option}</code>={value}	  set string/number option to <code>{value}</code>
<a href="options.html#%3Aset">:set</a>  		:se[t] <code>{option}</code>+={value}  append <code>{value}</code> to string option, add
					  <code>{value}</code> to number option
<a href="options.html#%3Aset">:set</a>  		:se[t] <code>{option}</code>-={value}  remove <code>{value}</code> to string option,
					  subtract <code>{value}</code> from number option
<a href="options.html#%3Aset">:set</a>  		:se[t] <code>{option}</code>?	  show value of <code>{option}</code>
<a href="options.html#%3Aset">:set</a>  		:se[t] <code>{option}</code>&amp;	  reset <code>{option}</code> to its default value</div>
<div class="old-help-para"><a href="options.html#%3Asetlocal">:setlocal</a>  	:setl[ocal]		  like ":set" but set the local value
					  for options that have one
<a href="options.html#%3Asetglobal">:setglobal</a>  	:setg[lobal]		  like ":set" but set the global value
					  of a local option</div>
<div class="old-help-para"><a href="options.html#%3Aoptions">:options</a>  	:opt[ions]		  open a new window to view and set
					  options, grouped by functionality,
					  a one line explanation and links to
					  the help</div>
<div class="old-help-para">Short explanation of each option:		<a name="option-list"></a><code class="help-tag-right">option-list</code>
<a href="options.html#'aleph'">'aleph'</a>		  <a href="options.html#'al'">'al'</a>	    ASCII code of the letter Aleph (Hebrew)
<a href="options.html#'allowrevins'">'allowrevins'</a>	  <a href="options.html#'ari'">'ari'</a>     allow <code>CTRL-_</code> in Insert and Command-line mode
<a href="options.html#'ambiwidth'">'ambiwidth'</a>	  <a href="options.html#'ambw'">'ambw'</a>    what to do with Unicode chars of ambiguous width
<a href="options.html#'autochdir'">'autochdir'</a>	  <a href="options.html#'acd'">'acd'</a>     change directory to the file in the current window
<a href="options.html#'arabic'">'arabic'</a>	  <a href="options.html#'arab'">'arab'</a>    for Arabic as a default second language
<a href="options.html#'arabicshape'">'arabicshape'</a>	  <a href="options.html#'arshape'">'arshape'</a> do shaping for Arabic characters
<a href="options.html#'autoindent'">'autoindent'</a>	  <a href="options.html#'ai'">'ai'</a>	    take indent for new line from previous line
<a href="options.html#'autoread'">'autoread'</a>	  <a href="options.html#'ar'">'ar'</a>	    autom. read file when changed outside of Vim
<a href="options.html#'autowrite'">'autowrite'</a>	  <a href="options.html#'aw'">'aw'</a>	    automatically write file if changed
<a href="options.html#'autowriteall'">'autowriteall'</a>	  <a href="options.html#'awa'">'awa'</a>     as <a href="options.html#'autowrite'">'autowrite'</a>, but works with more commands
<a href="options.html#'background'">'background'</a>	  <a href="options.html#'bg'">'bg'</a>	    "dark" or "light", used for highlight colors
<a href="options.html#'backspace'">'backspace'</a>	  <a href="options.html#'bs'">'bs'</a>	    how backspace works at start of line
<a href="options.html#'backup'">'backup'</a>	  <a href="options.html#'bk'">'bk'</a>	    keep backup file after overwriting a file
<a href="options.html#'backupcopy'">'backupcopy'</a>	  <a href="options.html#'bkc'">'bkc'</a>     make backup as a copy, don't rename the file
<a href="options.html#'backupdir'">'backupdir'</a>	  <a href="options.html#'bdir'">'bdir'</a>    list of directories for the backup file
<a href="options.html#'backupext'">'backupext'</a>	  <a href="options.html#'bex'">'bex'</a>     extension used for the backup file
<a href="options.html#'backupskip'">'backupskip'</a>	  <a href="options.html#'bsk'">'bsk'</a>     no backup for files that match these patterns
<a href="options.html#'belloff'">'belloff'</a>	  <a href="options.html#'bo'">'bo'</a>	    do not ring the bell for these reasons
<a href="options.html#'binary'">'binary'</a>	  <a href="options.html#'bin'">'bin'</a>     read/write/edit file in binary mode
<a href="options.html#'bomb'">'bomb'</a>			    prepend a Byte Order Mark to the file
<a href="options.html#'breakat'">'breakat'</a>	  <a href="options.html#'brk'">'brk'</a>     characters that may cause a line break
<a href="options.html#'breakindent'">'breakindent'</a>	  <a href="options.html#'bri'">'bri'</a>     wrapped line repeats indent
<a href="options.html#'breakindentopt'">'breakindentopt'</a>  <a href="options.html#'briopt'">'briopt'</a>  settings for <a href="options.html#'breakindent'">'breakindent'</a>
<a href="options.html#'browsedir'">'browsedir'</a>	  <a href="options.html#'bsdir'">'bsdir'</a>   which directory to start browsing in
<a href="options.html#'bufhidden'">'bufhidden'</a>	  <a href="options.html#'bh'">'bh'</a>	    what to do when buffer is no longer in window
<a href="options.html#'buflisted'">'buflisted'</a>	  <a href="options.html#'bl'">'bl'</a>	    whether the buffer shows up in the buffer list
<a href="options.html#'buftype'">'buftype'</a>	  <a href="options.html#'bt'">'bt'</a>	    special type of buffer
<a href="options.html#'casemap'">'casemap'</a>	  <a href="options.html#'cmp'">'cmp'</a>     specifies how case of letters is changed
<a href="options.html#'cdhome'">'cdhome'</a>	  <a href="options.html#'cdh'">'cdh'</a>	    change directory to the home directory by ":cd"
<a href="options.html#'cdpath'">'cdpath'</a>	  <a href="options.html#'cd'">'cd'</a>	    list of directories searched with ":cd"
<a href="options.html#'cedit'">'cedit'</a>			    key used to open the command-line window
<a href="options.html#'charconvert'">'charconvert'</a>	  <a href="options.html#'ccv'">'ccv'</a>     expression for character encoding conversion
<a href="options.html#'cindent'">'cindent'</a>	  <a href="options.html#'cin'">'cin'</a>     do C program indenting
<a href="options.html#'cinkeys'">'cinkeys'</a>	  <a href="options.html#'cink'">'cink'</a>    keys that trigger indent when <a href="options.html#'cindent'">'cindent'</a> is set
<a href="options.html#'cinoptions'">'cinoptions'</a>	  <a href="options.html#'cino'">'cino'</a>    how to do indenting when <a href="options.html#'cindent'">'cindent'</a> is set
<a href="options.html#'cinwords'">'cinwords'</a>	  <a href="options.html#'cinw'">'cinw'</a>    words where <a href="options.html#'si'">'si'</a> and <a href="options.html#'cin'">'cin'</a> add an indent
<a href="options.html#'cinscopedecls'">'cinscopedecls'</a>	  <a href="options.html#'cinsd'">'cinsd'</a>   words that are recognized by 'cino-g'
<a href="options.html#'clipboard'">'clipboard'</a>	  <a href="options.html#'cb'">'cb'</a>	    use the clipboard as the unnamed register
<a href="options.html#'cmdheight'">'cmdheight'</a>	  <a href="options.html#'ch'">'ch'</a>	    number of lines to use for the command-line
<a href="options.html#'cmdwinheight'">'cmdwinheight'</a>	  <a href="options.html#'cwh'">'cwh'</a>     height of the command-line window
<a href="options.html#'colorcolumn'">'colorcolumn'</a>	  <a href="options.html#'cc'">'cc'</a>	    columns to highlight
<a href="options.html#'columns'">'columns'</a>	  <a href="options.html#'co'">'co'</a>	    number of columns in the display
<a href="options.html#'comments'">'comments'</a>	  <a href="options.html#'com'">'com'</a>     patterns that can start a comment line
<a href="options.html#'commentstring'">'commentstring'</a>   <a href="options.html#'cms'">'cms'</a>     template for comments; used for fold marker
<a href="options.html#'complete'">'complete'</a>	  <a href="options.html#'cpt'">'cpt'</a>     specify how Insert mode completion works
<a href="options.html#'completefunc'">'completefunc'</a>	  <a href="options.html#'cfu'">'cfu'</a>     function to be used for Insert mode completion
<a href="options.html#'completeopt'">'completeopt'</a>	  <a href="options.html#'cot'">'cot'</a>     options for Insert mode completion
<a href="options.html#'completeslash'">'completeslash'</a>	  <a href="options.html#'csl'">'csl'</a>	    like <a href="options.html#'shellslash'">'shellslash'</a> for completion
<a href="options.html#'concealcursor'">'concealcursor'</a>	  <a href="options.html#'cocu'">'cocu'</a>    whether concealable text is hidden in cursor line
<a href="options.html#'conceallevel'">'conceallevel'</a>	  <a href="options.html#'cole'">'cole'</a>    whether concealable text is shown or hidden
<a href="options.html#'confirm'">'confirm'</a>	  <a href="options.html#'cf'">'cf'</a>	    ask what to do about unsaved/read-only files
<a href="options.html#'copyindent'">'copyindent'</a>	  <a href="options.html#'ci'">'ci'</a>	    make <a href="options.html#'autoindent'">'autoindent'</a> use existing indent structure
<a href="options.html#'cpoptions'">'cpoptions'</a>	  <a href="options.html#'cpo'">'cpo'</a>     flags for Vi-compatible behavior
<a href="options.html#'cursorbind'">'cursorbind'</a>	  <a href="options.html#'crb'">'crb'</a>     move cursor in window as it moves in other windows
<a href="options.html#'cursorcolumn'">'cursorcolumn'</a>	  <a href="options.html#'cuc'">'cuc'</a>	    highlight the screen column of the cursor
<a href="options.html#'cursorline'">'cursorline'</a>	  <a href="options.html#'cul'">'cul'</a>	    highlight the screen line of the cursor
<a href="options.html#'cursorlineopt'">'cursorlineopt'</a>	  <a href="options.html#'culopt'">'culopt'</a>  settings for <a href="options.html#'cursorline'">'cursorline'</a>
<a href="options.html#'debug'">'debug'</a>			    set to "msg" to see all error messages
<a href="options.html#'define'">'define'</a>	  <a href="options.html#'def'">'def'</a>     pattern to be used to find a macro definition
<a href="options.html#'delcombine'">'delcombine'</a>	  <a href="options.html#'deco'">'deco'</a>    delete combining characters on their own
<a href="options.html#'dictionary'">'dictionary'</a>	  <a href="options.html#'dict'">'dict'</a>    list of file names used for keyword completion
<a href="options.html#'diff'">'diff'</a>			    use diff mode for the current window
<a href="options.html#'diffexpr'">'diffexpr'</a>	  <a href="options.html#'dex'">'dex'</a>     expression used to obtain a diff file
<a href="options.html#'diffopt'">'diffopt'</a>	  <a href="options.html#'dip'">'dip'</a>     options for using diff mode
<a href="options.html#'digraph'">'digraph'</a>	  <a href="options.html#'dg'">'dg'</a>	    enable the entering of digraphs in Insert mode
<a href="options.html#'directory'">'directory'</a>	  <a href="options.html#'dir'">'dir'</a>     list of directory names for the swap file
<a href="options.html#'display'">'display'</a>	  <a href="options.html#'dy'">'dy'</a>	    list of flags for how to display text
<a href="options.html#'eadirection'">'eadirection'</a>	  <a href="options.html#'ead'">'ead'</a>     in which direction <a href="options.html#'equalalways'">'equalalways'</a> works
<a href="options.html#'encoding'">'encoding'</a>	  <a href="options.html#'enc'">'enc'</a>     encoding used internally
<a href="options.html#'endoffile'">'endoffile'</a>	  <a href="options.html#'eof'">'eof'</a>     write <code>CTRL-Z</code> at end of the file
<a href="options.html#'endofline'">'endofline'</a>	  <a href="options.html#'eol'">'eol'</a>     write <code>&lt;EOL&gt;</code> for last line in file
<a href="options.html#'equalalways'">'equalalways'</a>	  <a href="options.html#'ea'">'ea'</a>	    windows are automatically made the same size
<a href="options.html#'equalprg'">'equalprg'</a>	  <a href="options.html#'ep'">'ep'</a>	    external program to use for "=" command
<a href="options.html#'errorbells'">'errorbells'</a>	  <a href="options.html#'eb'">'eb'</a>	    ring the bell for error messages
<a href="options.html#'errorfile'">'errorfile'</a>	  <a href="options.html#'ef'">'ef'</a>	    name of the errorfile for the QuickFix mode
<a href="options.html#'errorformat'">'errorformat'</a>	  <a href="options.html#'efm'">'efm'</a>     description of the lines in the error file
<a href="options.html#'eventignore'">'eventignore'</a>	  <a href="options.html#'ei'">'ei'</a>	    autocommand events that are ignored
<a href="options.html#'expandtab'">'expandtab'</a>	  <a href="options.html#'et'">'et'</a>	    use spaces when <code>&lt;Tab&gt;</code> is inserted
<a href="options.html#'exrc'">'exrc'</a>		  <a href="options.html#'ex'">'ex'</a>	    read .nvimrc and .exrc in the current directory
<a href="options.html#'fileencoding'">'fileencoding'</a>	  <a href="options.html#'fenc'">'fenc'</a>    file encoding for multibyte text
<a href="options.html#'fileencodings'">'fileencodings'</a>   <a href="options.html#'fencs'">'fencs'</a>   automatically detected character encodings
<a href="options.html#'fileformat'">'fileformat'</a>	  <a href="options.html#'ff'">'ff'</a>	    file format used for file I/O
<a href="options.html#'fileformats'">'fileformats'</a>	  <a href="options.html#'ffs'">'ffs'</a>     automatically detected values for <a href="options.html#'fileformat'">'fileformat'</a>
<a href="options.html#'fileignorecase'">'fileignorecase'</a>  <a href="options.html#'fic'">'fic'</a>     ignore case when using file names
<a href="options.html#'filetype'">'filetype'</a>	  <a href="options.html#'ft'">'ft'</a>	    type of file, used for autocommands
<a href="options.html#'fillchars'">'fillchars'</a>	  <a href="options.html#'fcs'">'fcs'</a>     characters to use for displaying special items
<a href="options.html#'fixendofline'">'fixendofline'</a>	  <a href="options.html#'fixeol'">'fixeol'</a>  make sure last line in file has <code>&lt;EOL&gt;</code>
<a href="options.html#'foldclose'">'foldclose'</a>	  <a href="options.html#'fcl'">'fcl'</a>     close a fold when the cursor leaves it
<a href="options.html#'foldcolumn'">'foldcolumn'</a>	  <a href="options.html#'fdc'">'fdc'</a>     width of the column used to indicate folds
<a href="options.html#'foldenable'">'foldenable'</a>	  <a href="options.html#'fen'">'fen'</a>     set to display all folds open
<a href="options.html#'foldexpr'">'foldexpr'</a>	  <a href="options.html#'fde'">'fde'</a>     expression used when <a href="options.html#'foldmethod'">'foldmethod'</a> is "expr"
<a href="options.html#'foldignore'">'foldignore'</a>	  <a href="options.html#'fdi'">'fdi'</a>     ignore lines when <a href="options.html#'foldmethod'">'foldmethod'</a> is "indent"
<a href="options.html#'foldlevel'">'foldlevel'</a>	  <a href="options.html#'fdl'">'fdl'</a>     close folds with a level higher than this
<a href="options.html#'foldlevelstart'">'foldlevelstart'</a>  <a href="options.html#'fdls'">'fdls'</a>    <a href="options.html#'foldlevel'">'foldlevel'</a> when starting to edit a file
<a href="options.html#'foldmarker'">'foldmarker'</a>	  <a href="options.html#'fmr'">'fmr'</a>     markers used when <a href="options.html#'foldmethod'">'foldmethod'</a> is "marker"
<a href="options.html#'foldmethod'">'foldmethod'</a>	  <a href="options.html#'fdm'">'fdm'</a>     folding type
<a href="options.html#'foldminlines'">'foldminlines'</a>	  <a href="options.html#'fml'">'fml'</a>     minimum number of lines for a fold to be closed
<a href="options.html#'foldnestmax'">'foldnestmax'</a>	  <a href="options.html#'fdn'">'fdn'</a>     maximum fold depth
<a href="options.html#'foldopen'">'foldopen'</a>	  <a href="options.html#'fdo'">'fdo'</a>     for which commands a fold will be opened
<a href="options.html#'foldtext'">'foldtext'</a>	  <a href="options.html#'fdt'">'fdt'</a>     expression used to display for a closed fold
<a href="options.html#'formatexpr'">'formatexpr'</a>	  <a href="options.html#'fex'">'fex'</a>     expression used with "gq" command
<a href="options.html#'formatlistpat'">'formatlistpat'</a>   <a href="options.html#'flp'">'flp'</a>     pattern used to recognize a list header
<a href="options.html#'formatoptions'">'formatoptions'</a>   <a href="options.html#'fo'">'fo'</a>	    how automatic formatting is to be done
<a href="options.html#'formatprg'">'formatprg'</a>	  <a href="options.html#'fp'">'fp'</a>	    name of external program used with "gq" command
<a href="options.html#'fsync'">'fsync'</a>		  <a href="options.html#'fs'">'fs'</a>	    whether to invoke fsync() after file write
<a href="options.html#'gdefault'">'gdefault'</a>	  <a href="options.html#'gd'">'gd'</a>	    the ":substitute" flag 'g' is default on
<a href="options.html#'grepformat'">'grepformat'</a>	  <a href="options.html#'gfm'">'gfm'</a>     format of <a href="options.html#'grepprg'">'grepprg'</a> output
<a href="options.html#'grepprg'">'grepprg'</a>	  <a href="options.html#'gp'">'gp'</a>	    program to use for ":grep"
<a href="options.html#'guicursor'">'guicursor'</a>	  <a href="options.html#'gcr'">'gcr'</a>     GUI: settings for cursor shape and blinking
<a href="options.html#'guifont'">'guifont'</a>	  <a href="options.html#'gfn'">'gfn'</a>     GUI: Name(s) of font(s) to be used
<a href="options.html#'guifontwide'">'guifontwide'</a>	  <a href="options.html#'gfw'">'gfw'</a>     list of font names for double-wide characters
<a href="options.html#'guioptions'">'guioptions'</a>	  <a href="options.html#'go'">'go'</a>	    GUI: Which components and options are used
<a href="options.html#'guitablabel'">'guitablabel'</a>	  <a href="options.html#'gtl'">'gtl'</a>     GUI: custom label for a tab page
<a href="options.html#'guitabtooltip'">'guitabtooltip'</a>   <a href="options.html#'gtt'">'gtt'</a>     GUI: custom tooltip for a tab page
<a href="options.html#'helpfile'">'helpfile'</a>	  <a href="options.html#'hf'">'hf'</a>	    full path name of the main help file
<a href="options.html#'helpheight'">'helpheight'</a>	  <a href="options.html#'hh'">'hh'</a>	    minimum height of a new help window
<a href="options.html#'helplang'">'helplang'</a>	  <a href="options.html#'hlg'">'hlg'</a>     preferred help languages
<a href="options.html#'hidden'">'hidden'</a>	  <a href="options.html#'hid'">'hid'</a>     don't unload buffer when it is <a href="editing.html#abandon">abandon</a>ed
<a href="options.html#'hlsearch'">'hlsearch'</a>	  <a href="options.html#'hls'">'hls'</a>     highlight matches with last search pattern
<a href="options.html#'history'">'history'</a>	  <a href="options.html#'hi'">'hi'</a>	    number of command-lines that are remembered
<a href="options.html#'hkmap'">'hkmap'</a>		  <a href="options.html#'hk'">'hk'</a>	    Hebrew keyboard mapping
<a href="options.html#'hkmapp'">'hkmapp'</a>	  <a href="options.html#'hkp'">'hkp'</a>     phonetic Hebrew keyboard mapping
<a href="options.html#'icon'">'icon'</a>			    let Vim set the text of the window icon
<a href="options.html#'iconstring'">'iconstring'</a>		    string to use for the Vim icon text
<a href="options.html#'ignorecase'">'ignorecase'</a>	  <a href="options.html#'ic'">'ic'</a>	    ignore case in search patterns
<a href="options.html#'imcmdline'">'imcmdline'</a>	  <a href="options.html#'imc'">'imc'</a>     use IM when starting to edit a command line
<a href="options.html#'imdisable'">'imdisable'</a>	  <a href="options.html#'imd'">'imd'</a>     do not use the IM in any mode
<a href="options.html#'iminsert'">'iminsert'</a>	  <a href="options.html#'imi'">'imi'</a>     use :lmap or IM in Insert mode
<a href="options.html#'imsearch'">'imsearch'</a>	  <a href="options.html#'ims'">'ims'</a>     use :lmap or IM when typing a search pattern
<a href="options.html#'include'">'include'</a>	  <a href="options.html#'inc'">'inc'</a>     pattern to be used to find an include file
<a href="options.html#'includeexpr'">'includeexpr'</a>	  <a href="options.html#'inex'">'inex'</a>    expression used to process an include line
<a href="options.html#'incsearch'">'incsearch'</a>	  <a href="options.html#'is'">'is'</a>	    highlight match while typing search pattern
<a href="options.html#'indentexpr'">'indentexpr'</a>	  <a href="options.html#'inde'">'inde'</a>    expression used to obtain the indent of a line
<a href="options.html#'indentkeys'">'indentkeys'</a>	  <a href="options.html#'indk'">'indk'</a>    keys that trigger indenting with <a href="options.html#'indentexpr'">'indentexpr'</a>
<a href="options.html#'infercase'">'infercase'</a>	  <a href="options.html#'inf'">'inf'</a>     adjust case of match for keyword completion
<a href="options.html#'isfname'">'isfname'</a>	  <a href="options.html#'isf'">'isf'</a>     characters included in file names and pathnames
<a href="options.html#'isident'">'isident'</a>	  <a href="options.html#'isi'">'isi'</a>     characters included in identifiers
<a href="options.html#'iskeyword'">'iskeyword'</a>	  <a href="options.html#'isk'">'isk'</a>     characters included in keywords
<a href="options.html#'isprint'">'isprint'</a>	  <a href="options.html#'isp'">'isp'</a>     printable characters
<a href="options.html#'joinspaces'">'joinspaces'</a>	  <a href="options.html#'js'">'js'</a>	    two spaces after a period with a join command
<a href="options.html#'jumpoptions'">'jumpoptions'</a>	  <a href="options.html#'jop'">'jop'</a>     specifies how jumping is done
<a href="options.html#'keymap'">'keymap'</a>	  <a href="options.html#'kmp'">'kmp'</a>     name of a keyboard mapping
<a href="options.html#'keymodel'">'keymodel'</a>	  <a href="options.html#'km'">'km'</a>	    enable starting/stopping selection with keys
<a href="options.html#'keywordprg'">'keywordprg'</a>	  <a href="options.html#'kp'">'kp'</a>	    program to use for the "K" command
<a href="options.html#'langmap'">'langmap'</a>	  <a href="options.html#'lmap'">'lmap'</a>    alphabetic characters for other language mode
<a href="options.html#'langmenu'">'langmenu'</a>	  <a href="options.html#'lm'">'lm'</a>	    language to be used for the menus
<a href="options.html#'langremap'">'langremap'</a>	  <a href="options.html#'lrm'">'lrm'</a>	    do apply <a href="options.html#'langmap'">'langmap'</a> to mapped characters
<a href="options.html#'laststatus'">'laststatus'</a>	  <a href="options.html#'ls'">'ls'</a>	    tells when last window has status lines
<a href="options.html#'lazyredraw'">'lazyredraw'</a>	  <a href="options.html#'lz'">'lz'</a>	    don't redraw while executing macros
<a href="options.html#'linebreak'">'linebreak'</a>	  <a href="options.html#'lbr'">'lbr'</a>     wrap long lines at a blank
<a href="options.html#'lines'">'lines'</a>			    number of lines in the display
<a href="options.html#'linespace'">'linespace'</a>	  <a href="options.html#'lsp'">'lsp'</a>     number of pixel lines to use between characters
<a href="options.html#'lisp'">'lisp'</a>			    automatic indenting for Lisp
<a href="options.html#'lispoptions'">'lispoptions'</a>	  <a href="options.html#'lop'">'lop'</a>     changes how Lisp indenting is done
<a href="options.html#'lispwords'">'lispwords'</a>	  <a href="options.html#'lw'">'lw'</a>	    words that change how lisp indenting works
<a href="options.html#'list'">'list'</a>			    show <code>&lt;Tab&gt;</code> and <code>&lt;EOL&gt;</code>
<a href="options.html#'listchars'">'listchars'</a>	  <a href="options.html#'lcs'">'lcs'</a>     characters for displaying in list mode
<a href="options.html#'loadplugins'">'loadplugins'</a>	  <a href="options.html#'lpl'">'lpl'</a>     load plugin scripts when starting up
<a href="options.html#'magic'">'magic'</a>			    changes special characters in search patterns
<a href="options.html#'makeef'">'makeef'</a>	  <a href="options.html#'mef'">'mef'</a>     name of the errorfile for ":make"
<a href="options.html#'makeencoding'">'makeencoding'</a>	  <a href="options.html#'menc'">'menc'</a>    encoding of external make/grep commands
<a href="options.html#'makeprg'">'makeprg'</a>	  <a href="options.html#'mp'">'mp'</a>	    program to use for the ":make" command
<a href="options.html#'matchpairs'">'matchpairs'</a>	  <a href="options.html#'mps'">'mps'</a>     pairs of characters that "%" can match
<a href="options.html#'matchtime'">'matchtime'</a>	  <a href="options.html#'mat'">'mat'</a>     tenths of a second to show matching paren
<a href="vim_diff.html#'maxcombine'">'maxcombine'</a>	  <a href="vim_diff.html#'mco'">'mco'</a>     maximum nr of combining characters displayed
<a href="options.html#'maxfuncdepth'">'maxfuncdepth'</a>	  <a href="options.html#'mfd'">'mfd'</a>     maximum recursive depth for user functions
<a href="options.html#'maxmapdepth'">'maxmapdepth'</a>	  <a href="options.html#'mmd'">'mmd'</a>     maximum recursive depth for mapping
<a href="options.html#'maxmempattern'">'maxmempattern'</a>   <a href="options.html#'mmp'">'mmp'</a>     maximum memory (in Kbyte) used for pattern search
<a href="options.html#'menuitems'">'menuitems'</a>	  <a href="options.html#'mis'">'mis'</a>     maximum number of items in a menu
<a href="options.html#'mkspellmem'">'mkspellmem'</a>	  <a href="options.html#'msm'">'msm'</a>     memory used before <a href="spell.html#%3Amkspell">:mkspell</a> compresses the tree
<a href="options.html#'modeline'">'modeline'</a>	  <a href="options.html#'ml'">'ml'</a>	    recognize modelines at start or end of file
<a href="options.html#'modelineexpr'">'modelineexpr'</a>	  <a href="options.html#'mle'">'mle'</a>	    allow setting expression options from a modeline
<a href="options.html#'modelines'">'modelines'</a>	  <a href="options.html#'mls'">'mls'</a>     number of lines checked for modelines
<a href="options.html#'modifiable'">'modifiable'</a>	  <a href="options.html#'ma'">'ma'</a>	    changes to the text are not possible
<a href="options.html#'modified'">'modified'</a>	  <a href="options.html#'mod'">'mod'</a>     buffer has been modified
<a href="options.html#'more'">'more'</a>			    pause listings when the whole screen is filled
<a href="options.html#'mouse'">'mouse'</a>			    enable the use of mouse clicks
<a href="options.html#'mousefocus'">'mousefocus'</a>	  <a href="options.html#'mousef'">'mousef'</a>  keyboard focus follows the mouse
<a href="options.html#'mousehide'">'mousehide'</a>	  <a href="options.html#'mh'">'mh'</a>	    hide mouse pointer while typing
<a href="options.html#'mousemodel'">'mousemodel'</a>	  <a href="options.html#'mousem'">'mousem'</a>  changes meaning of mouse buttons
<a href="options.html#'mousescroll'">'mousescroll'</a>		    amount to scroll by when scrolling with a mouse
<a href="options.html#'mouseshape'">'mouseshape'</a>	  <a href="options.html#'mouses'">'mouses'</a>  shape of the mouse pointer in different modes
<a href="options.html#'mousetime'">'mousetime'</a>	  <a href="options.html#'mouset'">'mouset'</a>  max time between mouse double-click
<a href="options.html#'nrformats'">'nrformats'</a>	  <a href="options.html#'nf'">'nf'</a>	    number formats recognized for <code>CTRL-A</code> command
<a href="options.html#'number'">'number'</a>	  <a href="options.html#'nu'">'nu'</a>	    print the line number in front of each line
<a href="options.html#'numberwidth'">'numberwidth'</a>	  <a href="options.html#'nuw'">'nuw'</a>     number of columns used for the line number
<a href="options.html#'omnifunc'">'omnifunc'</a>	  <a href="options.html#'ofu'">'ofu'</a>     function for filetype-specific completion
<a href="options.html#'opendevice'">'opendevice'</a>	  <a href="options.html#'odev'">'odev'</a>    allow reading/writing devices on MS-Windows
<a href="options.html#'operatorfunc'">'operatorfunc'</a>	  <a href="options.html#'opfunc'">'opfunc'</a>  function to be called for <a href="map.html#g%40">g@</a> operator
<a href="options.html#'packpath'">'packpath'</a>	  <a href="options.html#'pp'">'pp'</a>      list of directories used for packages
<a href="options.html#'paragraphs'">'paragraphs'</a>	  <a href="options.html#'para'">'para'</a>    nroff macros that separate paragraphs
<a href="options.html#'paste'">'paste'</a>			    allow pasting text
<a href="options.html#'pastetoggle'">'pastetoggle'</a>	  <a href="options.html#'pt'">'pt'</a>	    key code that causes <a href="options.html#'paste'">'paste'</a> to toggle
<a href="options.html#'patchexpr'">'patchexpr'</a>	  <a href="options.html#'pex'">'pex'</a>     expression used to patch a file
<a href="options.html#'patchmode'">'patchmode'</a>	  <a href="options.html#'pm'">'pm'</a>	    keep the oldest version of a file
<a href="options.html#'path'">'path'</a>		  <a href="options.html#'pa'">'pa'</a>	    list of directories searched with "gf" et.al.
<a href="options.html#'preserveindent'">'preserveindent'</a>  <a href="options.html#'pi'">'pi'</a>	    preserve the indent structure when reindenting
<a href="options.html#'previewheight'">'previewheight'</a>   <a href="options.html#'pvh'">'pvh'</a>     height of the preview window
previewpopuppvp     use popup window for preview
<a href="options.html#'previewwindow'">'previewwindow'</a>   <a href="options.html#'pvw'">'pvw'</a>     identifies the preview window
<a href="options.html#'printdevice'">'printdevice'</a>	  <a href="options.html#'pdev'">'pdev'</a>    name of the printer to be used for :hardcopy
<a href="options.html#'printencoding'">'printencoding'</a>   <a href="options.html#'penc'">'penc'</a>    encoding to be used for printing
<a href="options.html#'printexpr'">'printexpr'</a>	  <a href="options.html#'pexpr'">'pexpr'</a>   expression used to print PostScript for :hardcopy
<a href="options.html#'printfont'">'printfont'</a>	  <a href="options.html#'pfn'">'pfn'</a>     name of the font to be used for :hardcopy
<a href="options.html#'printheader'">'printheader'</a>	  <a href="options.html#'pheader'">'pheader'</a> format of the header used for :hardcopy
<a href="options.html#'printmbcharset'">'printmbcharset'</a>  <a href="options.html#'pmbcs'">'pmbcs'</a>   CJK character set to be used for :hardcopy
<a href="options.html#'printmbfont'">'printmbfont'</a>	  <a href="options.html#'pmbfn'">'pmbfn'</a>   font names to be used for CJK output of :hardcopy
<a href="options.html#'printoptions'">'printoptions'</a>	  <a href="options.html#'popt'">'popt'</a>    controls the format of :hardcopy output
<a href="options.html#'pumheight'">'pumheight'</a>	  <a href="options.html#'ph'">'ph'</a>	    maximum number of items to show in the popup menu
<a href="options.html#'pumwidth'">'pumwidth'</a>	  <a href="options.html#'pw'">'pw'</a>	    minimum width of the popup menu
<a href="options.html#'pyxversion'">'pyxversion'</a>	  <a href="options.html#'pyx'">'pyx'</a>	    Python version used for pyx* commands
<a href="options.html#'quoteescape'">'quoteescape'</a>	  <a href="options.html#'qe'">'qe'</a>	    escape characters used in a string
<a href="options.html#'readonly'">'readonly'</a>	  <a href="options.html#'ro'">'ro'</a>	    disallow writing the buffer
<a href="options.html#'redrawtime'">'redrawtime'</a>	  <a href="options.html#'rdt'">'rdt'</a>     timeout for <a href="options.html#'hlsearch'">'hlsearch'</a> and <a href="pattern.html#%3Amatch">:match</a> highlighting
<a href="options.html#'regexpengine'">'regexpengine'</a>	  <a href="options.html#'re'">'re'</a>	    default regexp engine to use
<a href="options.html#'relativenumber'">'relativenumber'</a>  <a href="options.html#'rnu'">'rnu'</a>	    show relative line number in front of each line
<a href="options.html#'report'">'report'</a>		    threshold for reporting nr. of lines changed
<a href="options.html#'revins'">'revins'</a>	  <a href="options.html#'ri'">'ri'</a>	    inserting characters will work backwards
<a href="options.html#'rightleft'">'rightleft'</a>	  <a href="options.html#'rl'">'rl'</a>	    window is right-to-left oriented
<a href="options.html#'rightleftcmd'">'rightleftcmd'</a>	  <a href="options.html#'rlc'">'rlc'</a>     commands for which editing works right-to-left
<a href="options.html#'ruler'">'ruler'</a>		  <a href="options.html#'ru'">'ru'</a>	    show cursor line and column in the status line
<a href="options.html#'rulerformat'">'rulerformat'</a>	  <a href="options.html#'ruf'">'ruf'</a>     custom format for the ruler
<a href="options.html#'runtimepath'">'runtimepath'</a>	  <a href="options.html#'rtp'">'rtp'</a>     list of directories used for runtime files
<a href="options.html#'scroll'">'scroll'</a>	  <a href="options.html#'scr'">'scr'</a>     lines to scroll with <code>CTRL-U</code> and <code>CTRL-D</code>
<a href="options.html#'scrollbind'">'scrollbind'</a>	  <a href="options.html#'scb'">'scb'</a>     scroll in window as other windows scroll
<a href="options.html#'scrolljump'">'scrolljump'</a>	  <a href="options.html#'sj'">'sj'</a>	    minimum number of lines to scroll
<a href="options.html#'scrolloff'">'scrolloff'</a>	  <a href="options.html#'so'">'so'</a>	    minimum nr. of lines above and below cursor
<a href="options.html#'scrollopt'">'scrollopt'</a>	  <a href="options.html#'sbo'">'sbo'</a>     how <a href="options.html#'scrollbind'">'scrollbind'</a> should behave
<a href="options.html#'sections'">'sections'</a>	  <a href="options.html#'sect'">'sect'</a>    nroff macros that separate sections
<a href="vim_diff.html#'secure'">'secure'</a>		    secure mode for reading .vimrc in current dir
<a href="options.html#'selection'">'selection'</a>	  <a href="options.html#'sel'">'sel'</a>     what type of selection to use
<a href="options.html#'selectmode'">'selectmode'</a>	  <a href="options.html#'slm'">'slm'</a>     when to use Select mode instead of Visual mode
<a href="options.html#'sessionoptions'">'sessionoptions'</a>  <a href="options.html#'ssop'">'ssop'</a>    options for <a href="starting.html#%3Amksession">:mksession</a>
<a href="options.html#'shada'">'shada'</a>		  <a href="options.html#'sd'">'sd'</a>	    use .shada file upon startup and exiting
<a href="options.html#'shell'">'shell'</a>		  <a href="options.html#'sh'">'sh'</a>	    name of shell to use for external commands
<a href="options.html#'shellcmdflag'">'shellcmdflag'</a>	  <a href="options.html#'shcf'">'shcf'</a>    flag to shell to execute one command
<a href="options.html#'shellpipe'">'shellpipe'</a>	  <a href="options.html#'sp'">'sp'</a>	    string to put output of ":make" in error file
<a href="options.html#'shellquote'">'shellquote'</a>	  <a href="options.html#'shq'">'shq'</a>     quote character(s) for around shell command
<a href="options.html#'shellredir'">'shellredir'</a>	  <a href="options.html#'srr'">'srr'</a>     string to put output of filter in a temp file
<a href="options.html#'shellslash'">'shellslash'</a>	  <a href="options.html#'ssl'">'ssl'</a>     use forward slash for shell file names
<a href="options.html#'shelltemp'">'shelltemp'</a>	  <a href="options.html#'stmp'">'stmp'</a>    whether to use a temp file for shell commands
<a href="options.html#'shellxescape'">'shellxescape'</a>	  <a href="options.html#'sxe'">'sxe'</a>     characters to escape when <a href="options.html#'shellxquote'">'shellxquote'</a> is (
<a href="options.html#'shellxquote'">'shellxquote'</a>	  <a href="options.html#'sxq'">'sxq'</a>     like <a href="options.html#'shellquote'">'shellquote'</a>, but include redirection
<a href="options.html#'shiftround'">'shiftround'</a>	  <a href="options.html#'sr'">'sr'</a>	    round indent to multiple of shiftwidth
<a href="options.html#'shiftwidth'">'shiftwidth'</a>	  <a href="options.html#'sw'">'sw'</a>	    number of spaces to use for (auto)indent step
<a href="options.html#'shortmess'">'shortmess'</a>	  <a href="options.html#'shm'">'shm'</a>     list of flags, reduce length of messages
<a href="options.html#'showbreak'">'showbreak'</a>	  <a href="options.html#'sbr'">'sbr'</a>     string to use at the start of wrapped lines
<a href="options.html#'showcmd'">'showcmd'</a>	  <a href="options.html#'sc'">'sc'</a>	    show (partial) command in status line
<a href="options.html#'showfulltag'">'showfulltag'</a>	  <a href="options.html#'sft'">'sft'</a>     show full tag pattern when completing tag
<a href="options.html#'showmatch'">'showmatch'</a>	  <a href="options.html#'sm'">'sm'</a>	    briefly jump to matching bracket if insert one
<a href="options.html#'showmode'">'showmode'</a>	  <a href="options.html#'smd'">'smd'</a>     message on status line to show current mode
<a href="options.html#'showtabline'">'showtabline'</a>	  <a href="options.html#'stal'">'stal'</a>    tells when the tab pages line is displayed
<a href="options.html#'sidescroll'">'sidescroll'</a>	  <a href="options.html#'ss'">'ss'</a>	    minimum number of columns to scroll horizontal
<a href="options.html#'sidescrolloff'">'sidescrolloff'</a>   <a href="options.html#'siso'">'siso'</a>    min. nr. of columns to left and right of cursor
<a href="options.html#'signcolumn'">'signcolumn'</a>	  <a href="options.html#'scl'">'scl'</a>	    when and how to display the sign column
<a href="options.html#'smartcase'">'smartcase'</a>	  <a href="options.html#'scs'">'scs'</a>     no ignore case when pattern has uppercase
<a href="options.html#'smartindent'">'smartindent'</a>	  <a href="options.html#'si'">'si'</a>	    smart autoindenting for C programs
<a href="options.html#'smarttab'">'smarttab'</a>	  <a href="options.html#'sta'">'sta'</a>     use <a href="options.html#'shiftwidth'">'shiftwidth'</a> when inserting <code>&lt;Tab&gt;</code>
<a href="options.html#'softtabstop'">'softtabstop'</a>	  <a href="options.html#'sts'">'sts'</a>     number of spaces that <code>&lt;Tab&gt;</code> uses while editing
<a href="options.html#'spell'">'spell'</a>			    enable spell checking
<a href="options.html#'spellcapcheck'">'spellcapcheck'</a>   <a href="options.html#'spc'">'spc'</a>     pattern to locate end of a sentence
<a href="options.html#'spellfile'">'spellfile'</a>	  <a href="options.html#'spf'">'spf'</a>     files where <a href="spell.html#zg">zg</a> and <a href="spell.html#zw">zw</a> store words
<a href="options.html#'spelllang'">'spelllang'</a>	  <a href="options.html#'spl'">'spl'</a>     language(s) to do spell checking for
<a href="options.html#'spelloptions'">'spelloptions'</a>	  <a href="options.html#'spo'">'spo'</a>     options for spell checking
<a href="options.html#'spellsuggest'">'spellsuggest'</a>	  <a href="options.html#'sps'">'sps'</a>     method(s) used to suggest spelling corrections
<a href="options.html#'splitbelow'">'splitbelow'</a>	  <a href="options.html#'sb'">'sb'</a>	    new window from split is below the current one
<a href="options.html#'splitkeep'">'splitkeep'</a>	  <a href="options.html#'spk'">'spk'</a>     determines scroll behavior for split windows
<a href="options.html#'splitright'">'splitright'</a>	  <a href="options.html#'spr'">'spr'</a>     new window is put right of the current one
<a href="options.html#'startofline'">'startofline'</a>	  <a href="options.html#'sol'">'sol'</a>     commands move cursor to first non-blank in line
<a href="options.html#'statusline'">'statusline'</a>	  <a href="options.html#'stl'">'stl'</a>     custom format for the status line
<a href="options.html#'suffixes'">'suffixes'</a>	  <a href="options.html#'su'">'su'</a>	    suffixes that are ignored with multiple match
<a href="options.html#'suffixesadd'">'suffixesadd'</a>	  <a href="options.html#'sua'">'sua'</a>     suffixes added when searching for a file
<a href="options.html#'swapfile'">'swapfile'</a>	  <a href="options.html#'swf'">'swf'</a>     whether to use a swapfile for a buffer
<a href="options.html#'switchbuf'">'switchbuf'</a>	  <a href="options.html#'swb'">'swb'</a>     sets behavior when switching to another buffer
<a href="options.html#'synmaxcol'">'synmaxcol'</a>	  <a href="options.html#'smc'">'smc'</a>     maximum column to find syntax items
<a href="options.html#'syntax'">'syntax'</a>	  <a href="options.html#'syn'">'syn'</a>     syntax to be loaded for current buffer
<a href="options.html#'tabline'">'tabline'</a>	  <a href="options.html#'tal'">'tal'</a>     custom format for the console tab pages line
<a href="options.html#'tabpagemax'">'tabpagemax'</a>	  <a href="options.html#'tpm'">'tpm'</a>     maximum number of tab pages for <a href="starting.html#-p">-p</a> and "tab all"
<a href="options.html#'tabstop'">'tabstop'</a>	  <a href="options.html#'ts'">'ts'</a>	    number of spaces that <code>&lt;Tab&gt;</code> in file uses
<a href="options.html#'tagbsearch'">'tagbsearch'</a>	  <a href="options.html#'tbs'">'tbs'</a>     use binary searching in tags files
<a href="options.html#'tagcase'">'tagcase'</a>	  <a href="options.html#'tc'">'tc'</a>      how to handle case when searching in tags files
<a href="options.html#'taglength'">'taglength'</a>	  <a href="options.html#'tl'">'tl'</a>	    number of significant characters for a tag
<a href="options.html#'tagrelative'">'tagrelative'</a>	  <a href="options.html#'tr'">'tr'</a>	    file names in tag file are relative
<a href="options.html#'tags'">'tags'</a>		  <a href="options.html#'tag'">'tag'</a>     list of file names used by the tag command
<a href="options.html#'tagstack'">'tagstack'</a>	  <a href="options.html#'tgst'">'tgst'</a>    push tags onto the tag stack
<a href="vim_diff.html#'term'">'term'</a>			    name of the terminal
<a href="options.html#'termbidi'">'termbidi'</a>	  <a href="options.html#'tbidi'">'tbidi'</a>   terminal takes care of bi-directionality
<a href="options.html#'textwidth'">'textwidth'</a>	  <a href="options.html#'tw'">'tw'</a>	    maximum width of text that is being inserted
<a href="options.html#'thesaurus'">'thesaurus'</a>	  <a href="options.html#'tsr'">'tsr'</a>     list of thesaurus files for keyword completion
<a href="options.html#'thesaurusfunc'">'thesaurusfunc'</a>	  <a href="options.html#'tsrfu'">'tsrfu'</a>   function to be used for thesaurus completion
<a href="options.html#'tildeop'">'tildeop'</a>	  <a href="options.html#'top'">'top'</a>     tilde command "~" behaves like an operator
<a href="options.html#'timeout'">'timeout'</a>	  <a href="options.html#'to'">'to'</a>	    time out on mappings and key codes
<a href="options.html#'timeoutlen'">'timeoutlen'</a>	  <a href="options.html#'tm'">'tm'</a>	    time out time in milliseconds
<a href="options.html#'title'">'title'</a>			    let Vim set the title of the window
<a href="options.html#'titlelen'">'titlelen'</a>		    percentage of <a href="options.html#'columns'">'columns'</a> used for window title
<a href="options.html#'titleold'">'titleold'</a>		    old title, restored when exiting
<a href="options.html#'titlestring'">'titlestring'</a>		    string to use for the Vim window title
<a href="options.html#'ttimeout'">'ttimeout'</a>		    time out on mappings
<a href="options.html#'ttimeoutlen'">'ttimeoutlen'</a>	  <a href="options.html#'ttm'">'ttm'</a>     time out time for key codes in milliseconds
<a href="vim_diff.html#'ttytype'">'ttytype'</a>	  <a href="vim_diff.html#'tty'">'tty'</a>     alias for <a href="vim_diff.html#'term'">'term'</a>
<a href="options.html#'undodir'">'undodir'</a>	  <a href="options.html#'udir'">'udir'</a>    where to store undo files
<a href="options.html#'undofile'">'undofile'</a>	  <a href="options.html#'udf'">'udf'</a>	    save undo information in a file
<a href="options.html#'undolevels'">'undolevels'</a>	  <a href="options.html#'ul'">'ul'</a>	    maximum number of changes that can be undone
<a href="options.html#'undoreload'">'undoreload'</a>	  <a href="options.html#'ur'">'ur'</a>	    max nr of lines to save for undo on a buffer reload
<a href="options.html#'updatecount'">'updatecount'</a>	  <a href="options.html#'uc'">'uc'</a>	    after this many characters flush swap file
<a href="options.html#'updatetime'">'updatetime'</a>	  <a href="options.html#'ut'">'ut'</a>	    after this many milliseconds flush swap file
<a href="options.html#'varsofttabstop'">'varsofttabstop'</a>  <a href="options.html#'vsts'">'vsts'</a>    a list of number of spaces when typing <code>&lt;Tab&gt;</code>
<a href="options.html#'vartabstop'">'vartabstop'</a>	  <a href="options.html#'vts'">'vts'</a>	    a list of number of spaces for <code>&lt;Tab&gt;</code>s
<a href="options.html#'verbose'">'verbose'</a>	  <a href="options.html#'vbs'">'vbs'</a>     give informative messages
<a href="options.html#'verbosefile'">'verbosefile'</a>	  <a href="options.html#'vfile'">'vfile'</a>   file to write messages in
<a href="options.html#'viewdir'">'viewdir'</a>	  <a href="options.html#'vdir'">'vdir'</a>    directory where to store files with :mkview
<a href="options.html#'viewoptions'">'viewoptions'</a>	  <a href="options.html#'vop'">'vop'</a>     specifies what to save for :mkview
<a href="options.html#'virtualedit'">'virtualedit'</a>	  <a href="options.html#'ve'">'ve'</a>	    when to use virtual editing
<a href="options.html#'visualbell'">'visualbell'</a>	  <a href="options.html#'vb'">'vb'</a>	    use visual bell instead of beeping
<a href="options.html#'warn'">'warn'</a>			    warn for shell command when buffer was changed
<a href="options.html#'whichwrap'">'whichwrap'</a>	  <a href="options.html#'ww'">'ww'</a>	    allow specified keys to cross line boundaries
<a href="options.html#'wildchar'">'wildchar'</a>	  <a href="options.html#'wc'">'wc'</a>	    command-line character for wildcard expansion
<a href="options.html#'wildcharm'">'wildcharm'</a>	  <a href="options.html#'wcm'">'wcm'</a>     like <a href="options.html#'wildchar'">'wildchar'</a> but also works when mapped
<a href="options.html#'wildignore'">'wildignore'</a>	  <a href="options.html#'wig'">'wig'</a>     files matching these patterns are not completed
<a href="options.html#'wildignorecase'">'wildignorecase'</a>  <a href="options.html#'wic'">'wic'</a>     ignore case when completing file names
<a href="options.html#'wildmenu'">'wildmenu'</a>	  <a href="options.html#'wmnu'">'wmnu'</a>    use menu for command line completion
<a href="options.html#'wildmode'">'wildmode'</a>	  <a href="options.html#'wim'">'wim'</a>     mode for <a href="options.html#'wildchar'">'wildchar'</a> command-line expansion
<a href="options.html#'wildoptions'">'wildoptions'</a>	  <a href="options.html#'wop'">'wop'</a>     specifies how command line completion is done
<a href="options.html#'winaltkeys'">'winaltkeys'</a>	  <a href="options.html#'wak'">'wak'</a>     when the windows system handles ALT keys
<a href="options.html#'window'">'window'</a>	  <a href="options.html#'wi'">'wi'</a>	    nr of lines to scroll for <code>CTRL-F</code> and <code>CTRL-B</code>
<a href="options.html#'winheight'">'winheight'</a>	  <a href="options.html#'wh'">'wh'</a>	    minimum number of lines for the current window
<a href="options.html#'winhighlight'">'winhighlight'</a>	  <a href="options.html#'winhl'">'winhl'</a>   window-local highlighting
<a href="options.html#'winfixheight'">'winfixheight'</a>	  <a href="options.html#'wfh'">'wfh'</a>     keep window height when opening/closing windows
<a href="options.html#'winfixwidth'">'winfixwidth'</a>	  <a href="options.html#'wfw'">'wfw'</a>     keep window width when opening/closing windows
<a href="options.html#'winminheight'">'winminheight'</a>	  <a href="options.html#'wmh'">'wmh'</a>     minimum number of lines for any window
<a href="options.html#'winminwidth'">'winminwidth'</a>	  <a href="options.html#'wmw'">'wmw'</a>     minimal number of columns for any window
<a href="options.html#'winwidth'">'winwidth'</a>	  <a href="options.html#'wiw'">'wiw'</a>     minimal number of columns for current window
<a href="options.html#'wrap'">'wrap'</a>			    long lines wrap and continue on the next line
<a href="options.html#'wrapmargin'">'wrapmargin'</a>	  <a href="options.html#'wm'">'wm'</a>	    chars from the right where wrapping starts
<a href="options.html#'wrapscan'">'wrapscan'</a>	  <a href="options.html#'ws'">'ws'</a>	    searches wrap around the end of the file
<a href="options.html#'write'">'write'</a>			    writing to a file is allowed
<a href="options.html#'writeany'">'writeany'</a>	  <a href="options.html#'wa'">'wa'</a>	    write to file with no need for "!" override
<a href="options.html#'writebackup'">'writebackup'</a>	  <a href="options.html#'wb'">'wb'</a>	    make a backup before overwriting a file
<a href="options.html#'writedelay'">'writedelay'</a>	  <a href="options.html#'wd'">'wd'</a>	    delay this many msec for each char (for debug)</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_ur"></a><span class="help-tag">Q_ur</span>  		Undo/Redo commands</span></h3></div>
<div class="old-help-para"><a href="undo.html#u">u</a>       N  u		undo last N changes
<a href="undo.html#CTRL-R">CTRL-R</a>  N  <code>CTRL-R</code>	redo last N undone changes
<a href="undo.html#U">U</a>          U		restore last changed line</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_et"></a><span class="help-tag">Q_et</span>  		External commands</span></h3></div>
<div class="old-help-para"><a href="various.html#%3A%21">:!</a>  		:!{command}	execute <code>{command}</code> with a shell
<a href="various.html#K">K</a>  		   K		lookup keyword under the cursor with
				   <a href="options.html#'keywordprg'">'keywordprg'</a> program (default: "man")</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_qf"></a><span class="help-tag">Q_qf</span>  		Quickfix commands</span></h3></div>
<div class="old-help-para"><a href="quickfix.html#%3Acc">:cc</a>  		:cc [nr]	display error [nr] (default is the same again)
<a href="quickfix.html#%3Acnext">:cnext</a>  	:cn		display the next error
<a href="quickfix.html#%3Acprevious">:cprevious</a>  	:cp		display the previous error
<a href="quickfix.html#%3Aclist">:clist</a>  	:cl		list all errors
<a href="quickfix.html#%3Acfile">:cfile</a>  	:cf		read errors from the file <a href="options.html#'errorfile'">'errorfile'</a>
<a href="quickfix.html#%3Acgetbuffer">:cgetbuffer</a>  	:cgetb		like :cbuffer but don't jump to the first error
<a href="quickfix.html#%3Acgetfile">:cgetfile</a>  	:cg		like :cfile but don't jump to the first error
<a href="quickfix.html#%3Acgetexpr">:cgetexpr</a>  	:cgete		like :cexpr but don't jump to the first error
<a href="quickfix.html#%3Acaddfile">:caddfile</a>  	:caddf		add errors from the error file to the current
				   quickfix list
<a href="quickfix.html#%3Acaddexpr">:caddexpr</a>  	:cad		add errors from an expression to the current
				   quickfix list
<a href="quickfix.html#%3Acbuffer">:cbuffer</a>  	:cb		read errors from text in a buffer
<a href="quickfix.html#%3Acexpr">:cexpr</a>  	:cex		read errors from an expression
<a href="quickfix.html#%3Acquit">:cquit</a>  	:cq		quit without writing and return error code (to
				   the compiler)
<a href="quickfix.html#%3Amake">:make</a>  		:make [args]	start make, read errors, and jump to first
				   error
<a href="quickfix.html#%3Agrep">:grep</a>  		:gr[ep] [args]	execute <a href="options.html#'grepprg'">'grepprg'</a> to find matches and jump to
				   the first one</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_vc"></a><span class="help-tag">Q_vc</span>  		Various commands</span></h3></div>
<div class="old-help-para"><a href="various.html#CTRL-L">CTRL-L</a>  	   <code>CTRL-L</code>	clear and redraw the screen
<a href="editing.html#CTRL-G">CTRL-G</a>  	   <code>CTRL-G</code>	show current file name (with path) and cursor
				   position
<a href="various.html#ga">ga</a>  		   ga		show ascii value of character under cursor in
				   decimal, hex, and octal
<a href="various.html#g8">g8</a>  		   g8		for utf-8 encoding: show byte sequence for
				   character under cursor in hex
<a href="editing.html#g_CTRL-G">g_CTRL-G</a>  	   g <code>CTRL-G</code>	show cursor column, line, and character
				   position
<a href="pattern.html#CTRL-C">CTRL-C</a>  	   <code>CTRL-C</code>	during searches: Interrupt the search
<a href="change.html#%3CDel%3E">&lt;Del&gt;</a>  		   <code>&lt;Del&gt;</code>	while entering a count: delete last character
<a href="various.html#%3Aversion">:version</a>  	:ve[rsion]	show version information
<a href="various.html#%3Anormal">:normal</a>  	:norm[al][!] <code>{commands}</code>
				execute Normal mode commands
<a href="intro.html#gQ">gQ</a>  		   gQ		switch to "Ex" mode</div>
<div class="old-help-para"><a href="various.html#%3Aredir">:redir</a>  	:redir &gt;<code>{file}</code>		redirect messages to <code>{file}</code>
<a href="various.html#%3Asilent">:silent</a>  	:silent[!] <code>{command}</code>	execute <code>{command}</code> silently
<a href="editing.html#%3Aconfirm">:confirm</a>  	:confirm <code>{command}</code>	quit, write, etc., asking about
					unsaved changes or read-only files
<a href="editing.html#%3Abrowse">:browse</a>  	:browse <code>{command}</code>	open/read/write file, using a
					file selection dialog</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_ce"></a><span class="help-tag">Q_ce</span>  		Command-line editing</span></h3></div>
<div class="old-help-para"><a href="cmdline.html#c_%3CEsc%3E">c_&lt;Esc&gt;</a>  	<code>&lt;Esc&gt;</code>		   abandon command-line (if <a href="options.html#'wildchar'">'wildchar'</a> is
				      <code>&lt;Esc&gt;</code>, type it twice)</div>
<div class="old-help-para"><a href="cmdline.html#c_CTRL-V">c_CTRL-V</a>  	<code>CTRL-V</code> <code>{char}</code>	   insert <code>{char}</code> literally
<a href="cmdline.html#c_CTRL-V">c_CTRL-V</a>  	<code>CTRL-V</code> <code>{number}</code>    enter decimal value of character (up to
				      three digits)
<a href="cmdline.html#c_CTRL-K">c_CTRL-K</a>  	<code>CTRL-K</code> <code>{char1}</code> <code>{char2}</code>
				   enter digraph (See <a href="quickref.html#Q_di">Q_di</a>)
<a href="cmdline.html#c_CTRL-R">c_CTRL-R</a>  	<code>CTRL-R</code> <code>{register}</code>  insert the contents of a register</div>
<div class="old-help-para"><a href="cmdline.html#c_%3CLeft%3E">c_&lt;Left&gt;</a>  	<code>&lt;Left&gt;</code>/&lt;Right&gt;	   cursor left/right
<a href="cmdline.html#c_%3CS-Left%3E">c_&lt;S-Left&gt;</a>  	<code>&lt;S-Left&gt;</code>/&lt;S-Right&gt; cursor one word left/right
<a href="cmdline.html#c_CTRL-B">c_CTRL-B</a>  	<code>CTRL-B</code>/CTRL-E	   cursor to beginning/end of command-line</div>
<div class="old-help-para"><a href="cmdline.html#c_%3CBS%3E">c_&lt;BS&gt;</a>  	<code>&lt;BS&gt;</code>		   delete the character in front of the cursor
<a href="cmdline.html#c_%3CDel%3E">c_&lt;Del&gt;</a>  	<code>&lt;Del&gt;</code>		   delete the character under the cursor
<a href="cmdline.html#c_CTRL-W">c_CTRL-W</a>  	<code>CTRL-W</code>		   delete the word in front of the cursor
<a href="cmdline.html#c_CTRL-U">c_CTRL-U</a>  	<code>CTRL-U</code>		   remove all characters</div>
<div class="old-help-para"><a href="cmdline.html#c_%3CUp%3E">c_&lt;Up&gt;</a>  	<code>&lt;Up&gt;</code>/&lt;Down&gt;	   recall older/newer command-line that starts
				      with current command
<a href="cmdline.html#c_%3CS-Up%3E">c_&lt;S-Up&gt;</a>  	<code>&lt;S-Up&gt;</code>/&lt;S-Down&gt;	   recall older/newer command-line from history
<a href="cmdline.html#c_CTRL-G">c_CTRL-G</a>  	<code>CTRL-G</code>		   next match when <a href="options.html#'incsearch'">'incsearch'</a> is active
<a href="cmdline.html#c_CTRL-T">c_CTRL-T</a>  	<code>CTRL-T</code>		   previous match when <a href="options.html#'incsearch'">'incsearch'</a> is active
<a href="cmdline.html#%3Ahistory">:history</a>  	:his[tory]	   show older command-lines</div>
<div class="old-help-para">Context-sensitive completion on the command-line:</div>
<div class="old-help-para"><a href="cmdline.html#c_wildchar">c_wildchar</a>  	<a href="options.html#'wildchar'">'wildchar'</a>  (default: <code>&lt;Tab&gt;</code>)
				do completion on the pattern in front of the
				   cursor; if there are multiple matches,
				   beep and show the first one; further
				   <a href="options.html#'wildchar'">'wildchar'</a> will show the next ones
<a href="cmdline.html#c_CTRL-D">c_CTRL-D</a>  	<code>CTRL-D</code>		list all names that match the pattern in
				   front of the cursor
<a href="cmdline.html#c_CTRL-A">c_CTRL-A</a>  	<code>CTRL-A</code>		insert all names that match pattern in front
				   of cursor
<a href="cmdline.html#c_CTRL-L">c_CTRL-L</a>  	<code>CTRL-L</code>		insert longest common part of names that
				   match pattern
<a href="cmdline.html#c_CTRL-N">c_CTRL-N</a>  	<code>CTRL-N</code>		after <a href="options.html#'wildchar'">'wildchar'</a> with multiple matches: go
				   to next match
<a href="cmdline.html#c_CTRL-P">c_CTRL-P</a>  	<code>CTRL-P</code>		after <a href="options.html#'wildchar'">'wildchar'</a> with multiple matches: go
				   to previous match</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_ra"></a><span class="help-tag">Q_ra</span>  		Ex ranges</span></h3></div>
<div class="old-help-para"><a href="cmdline.html#%3Arange">:range</a>  	,		separates two line numbers
<a href="cmdline.html#%3Arange">:range</a>  	;		idem, set cursor to the first line number
				before interpreting the second one</div>
<div class="old-help-para"><a href="cmdline.html#%3Arange">:range</a>  	<code>{number}</code>	an absolute line number
<a href="cmdline.html#%3Arange">:range</a>  	.		the current line
<a href="cmdline.html#%3Arange">:range</a>  	$		the last line in the file
<a href="cmdline.html#%3Arange">:range</a>  	%		equal to 1,$ (the entire file)
<a href="cmdline.html#%3Arange">:range</a>  	*		equal to '&lt;,'&gt; (visual area)
<a href="cmdline.html#%3Arange">:range</a>  	't		position of mark t
<a href="cmdline.html#%3Arange">:range</a>  	/{pattern}[/]	the next line where <code>{pattern}</code> matches
<a href="cmdline.html#%3Arange">:range</a>  	?{pattern}[?]	the previous line where <code>{pattern}</code> matches</div>
<div class="old-help-para"><a href="cmdline.html#%3Arange">:range</a>  	+[num]		add [num] to the preceding line number
				   (default: 1)
<a href="cmdline.html#%3Arange">:range</a>  	-[num]		subtract [num] from the preceding line
				   number (default: 1)</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_ex"></a><span class="help-tag">Q_ex</span>  		Special Ex characters</span></h3></div>
<div class="old-help-para"><a href="cmdline.html#%3Abar">:bar</a>      |		separates two commands (not for ":global" and ":!")
<a href="cmdline.html#%3Aquote">:quote</a>    "		begins comment</div>
<div class="old-help-para"><a href="cmdline.html#%3A_%25">:_%</a>       %		current file name (only where a file name is expected)
<a href="cmdline.html#%3A_%23">:_#</a>       #[num]	alternate file name [num] (only where a file name is
			   expected)
	Note: The next seven are typed literally; these are not special keys!
<a href="cmdline.html#%3A%3Cabuf%3E">:&lt;abuf&gt;</a>   <code>&lt;abuf&gt;</code>	buffer number, for use in an autocommand (only where a
			   file name is expected)
<a href="cmdline.html#%3A%3Cafile%3E">:&lt;afile&gt;</a>  <code>&lt;afile&gt;</code>	file name, for use in an autocommand (only where a
			   file name is expected)
<a href="cmdline.html#%3A%3Camatch%3E">:&lt;amatch&gt;</a> <code>&lt;amatch&gt;</code>	what matched with the pattern, for use in an
			   autocommand (only where a file name is expected)
<a href="cmdline.html#%3A%3Ccword%3E">:&lt;cword&gt;</a>  <code>&lt;cword&gt;</code>	word under the cursor (only where a file name is
			   expected)
<a href="cmdline.html#%3A%3CcWORD%3E">:&lt;cWORD&gt;</a>  <code>&lt;cWORD&gt;</code>	WORD under the cursor (only where a file name is
			   expected) (see <a href="motion.html#WORD">WORD</a>)
<a href="cmdline.html#%3A%3Ccfile%3E">:&lt;cfile&gt;</a>  <code>&lt;cfile&gt;</code>	file name under the cursor (only where a file name is
			   expected)
<a href="cmdline.html#%3A%3Csfile%3E">:&lt;sfile&gt;</a>  <code>&lt;sfile&gt;</code>	file name of a ":source"d file, within that file (only
			   where a file name is expected)</div>
<div class="old-help-para">		After "%", "#", "&lt;cfile&gt;", "&lt;sfile&gt;" or "&lt;afile&gt;"
		<a href="cmdline.html#%3A%3Ap">::p</a>  	    :p		full path
		<a href="cmdline.html#%3A%3Ah">::h</a>  	    :h		head (file name removed)
		<a href="cmdline.html#%3A%3At">::t</a>  	    :t		tail (file name only)
		<a href="cmdline.html#%3A%3Ar">::r</a>  	    :r		root (extension removed)
		<a href="cmdline.html#%3A%3Ae">::e</a>  	    :e		extension
		<a href="cmdline.html#%3A%3As">::s</a>  	    :s/{pat}/{repl}/	substitute <code>{pat}</code> with <code>{repl}</code></div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_st"></a><span class="help-tag">Q_st</span>  		Starting Vim</span></h3></div>
<div class="old-help-para"><a href="starting.html#-file">-file</a>  	   vim [options] <code>{file}</code> ..	start editing one or more files
<a href="starting.html#--">--</a>  	   vim [options] -			read file from stdin
<a href="starting.html#-tag">-tag</a>  	   vim [options] -t <code>{tag}</code>	edit the file associated with <code>{tag}</code>
<a href="starting.html#-qf">-qf</a>  	   vim [options] -q [fname]	start editing in QuickFix mode,
					   display the first error</div>
<div class="old-help-para">	Most useful Vim arguments (for full list see <a href="starting.html#startup-options">startup-options</a>)</div>
<div class="old-help-para"><a href="starting.html#-%2B">-+</a>  	+[num]		    put the cursor at line [num] (default: last line)
<a href="starting.html#-%2Bc">-+c</a>  	+{command}	    execute <code>{command}</code> after loading the file
<a href="starting.html#-%2B%2F">-+/</a>  	+/{pat} <code>{file}</code> ..   put the cursor at the first occurrence of <code>{pat}</code>
<a href="starting.html#-e">-e</a>  	-e		    Ex mode, start vim in Ex mode
<a href="starting.html#-R">-R</a>  	-R		    Read-only mode, implies -n
<a href="starting.html#-m">-m</a>  	-m		    modifications not allowed (resets <a href="options.html#'write'">'write'</a> option)
<a href="starting.html#-d">-d</a>  	-d		    <a href="diff.html#diff-mode">diff-mode</a>
<a href="starting.html#-b">-b</a>  	-b		    binary mode
<a href="starting.html#-l">-l</a>  	-l		    lisp mode
<a href="starting.html#-A">-A</a>  	-A		    Arabic mode (<a href="options.html#'arabic'">'arabic'</a> is set)
<a href="starting.html#-H">-H</a>  	-H		    Hebrew mode (<a href="options.html#'hkmap'">'hkmap'</a> and <a href="options.html#'rightleft'">'rightleft'</a> are set)
<a href="starting.html#-V">-V</a>  	-V		    Verbose, give informative messages
<a href="starting.html#-r">-r</a>  	-r		    give list of swap files
<a href="starting.html#-r">-r</a>  	-r <code>{file}</code> ..	    recover aborted edit session
<a href="starting.html#-n">-n</a>  	-n		    do not create a swap file
<a href="starting.html#-o">-o</a>  	-o [num]	    open [num] windows (default: one for each file)
<a href="starting.html#-s">-s</a>  	-s <code>{scriptin}</code>	    first read commands from the file <code>{scriptin}</code>
<a href="starting.html#-w">-w</a>  	-w <code>{scriptout}</code>	    write typed chars to file <code>{scriptout}</code> (append)
<a href="starting.html#-W">-W</a>  	-W <code>{scriptout}</code>	    write typed chars to file <code>{scriptout}</code> (overwrite)
<a href="starting.html#-u">-u</a>  	-u <code>{vimrc}</code>	    read inits from <code>{vimrc}</code> instead of other inits
<a href="starting.html#-i">-i</a>  	-i <code>{shada}</code>	    read info from <code>{shada}</code> instead of other files
<a href="starting.html#---">---</a>  	--		    end of options, other arguments are file names
<a href="starting.html#--help">--help</a>    --help	    show list of arguments and exit
<a href="starting.html#--version">--version</a> --version	    show version info and exit
<a href="starting.html#--">--</a>  	-			    read file from stdin</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_ed"></a><span class="help-tag">Q_ed</span>  		Editing a file</span></h3></div>
<div class="old-help-para">	   Without !: Fail if changes have been made to the current buffer.
	      With !: Discard any changes to the current buffer.
<a href="editing.html#%3Aedit_f">:edit_f</a>  :e[dit][!] <code>{file}</code>	edit <code>{file}</code>
<a href="editing.html#%3Aedit">:edit</a>    :e[dit][!]		reload the current file
<a href="editing.html#%3Aenew">:enew</a>    :ene[w][!]		edit a new, unnamed buffer
<a href="editing.html#%3Afind">:find</a>    :fin[d][!] <code>{file}</code>	find <code>{file}</code> in <a href="options.html#'path'">'path'</a> and edit it</div>
<div class="old-help-para"><a href="editing.html#CTRL-%5E">CTRL-^</a>   N  <code>CTRL-^</code>		edit alternate file N (equivalent to ":e #N")
<a href="editing.html#gf">gf</a>          gf  or ]f		edit the file whose name is under the cursor
<a href="editing.html#%3Apwd">:pwd</a>     :pwd			print the current directory name
<a href="editing.html#%3Acd">:cd</a>      :cd [path]		change the current directory to [path]
<a href="editing.html#%3Acd-">:cd-</a>     :cd -			back to previous current directory
<a href="editing.html#%3Afile">:file</a>    :f[ile]		print the current file name and the cursor
				   position
<a href="editing.html#%3Afile">:file</a>    :f[ile] <code>{name}</code>	set the current file name to <code>{name}</code>
<a href="windows.html#%3Afiles">:files</a>   :files		show alternate file names</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_fl"></a><span class="help-tag">Q_fl</span>  		Using the argument list			<a href="editing.html#argument-list">argument-list</a></span></h3></div>
<div class="old-help-para"><a href="editing.html#%3Aargs">:args</a>  	   :ar[gs]		print the argument list, with the current file
				   in "[]"
<a href="windows.html#%3Aall">:all</a>  	   :all  or :sall	open a window for every file in the arg list
<a href="editing.html#%3Awn">:wn</a>  	   :wn[ext][!]		write file and edit next file
<a href="editing.html#%3Awn">:wn</a>  	   :wn[ext][!] <code>{file}</code>	write to <code>{file}</code> and edit next file, unless
				   <code>{file}</code> exists; With !, overwrite existing
				   file
<a href="editing.html#%3AwN">:wN</a>  	   :wN[ext][!] [file]	write file and edit previous file</div>
<div class="old-help-para"><div class="help-column_heading">	     in current window    in new window</div><a href="editing.html#%3Aargument">:argument</a>  :argu[ment] N	  :sar[gument] N	edit file N
<a href="editing.html#%3Anext">:next</a>      :n[ext]		  :sn[ext]		edit next file
<a href="editing.html#%3Anext_f">:next_f</a>    :n[ext] <code>{arglist}</code>	  :sn[ext] <code>{arglist}</code>	define new arg list
							   and edit first file
<a href="editing.html#%3ANext">:Next</a>      :N[ext]		  :sN[ext]		edit previous file
<a href="editing.html#%3Afirst">:first</a>     :fir[st]		  :sfir[st]		edit first file
<a href="editing.html#%3Alast">:last</a>      :la[st]		  :sla[st]		edit last file</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_wq"></a><span class="help-tag">Q_wq</span>  		Writing and quitting</span></h3></div>
<div class="old-help-para"><a href="editing.html#%3Aw">:w</a>  	  :[range]w[rite][!]		write to the current file
<a href="editing.html#%3Aw_f">:w_f</a>  	  :[range]w[rite] <code>{file}</code>	write to <code>{file}</code>, unless it already
					   exists
<a href="editing.html#%3Aw_f">:w_f</a>  	  :[range]w[rite]! <code>{file}</code>	write to <code>{file}</code>.  Overwrite an existing
					   file
<a href="editing.html#%3Aw_a">:w_a</a>  	  :[range]w[rite][!] &gt;&gt;		append to the current file
<a href="editing.html#%3Aw_a">:w_a</a>  	  :[range]w[rite][!] &gt;&gt; <code>{file}</code>	append to <code>{file}</code>
<a href="editing.html#%3Aw_c">:w_c</a>  	  :[range]w[rite] !{cmd}	execute <code>{cmd}</code> with [range] lines as
					   standard input
<a href="editing.html#%3Aup">:up</a>  	  :[range]up[date][!]		write to current file if modified
<a href="editing.html#%3Awall">:wall</a>  	  :wa[ll][!]			write all changed buffers</div>
<div class="old-help-para"><a href="editing.html#%3Aq">:q</a>  	  :q[uit]		quit current buffer, unless changes have been
				   made; Exit Vim when there are no other
				   non-help buffers
<a href="editing.html#%3Aq">:q</a>  	  :q[uit]!		quit current buffer always, discard any
				   changes.  Exit Vim when there are no other
				   non-help buffers
<a href="editing.html#%3Aqa">:qa</a>  	  :qa[ll]		exit Vim, unless changes have been made
<a href="editing.html#%3Aqa">:qa</a>  	  :qa[ll]!		exit Vim always, discard any changes
<a href="quickfix.html#%3Acq">:cq</a>  	  :cq			quit without writing and return error code</div>
<div class="old-help-para"><a href="editing.html#%3Awq">:wq</a>  	  :wq[!]		write the current file and exit
<a href="editing.html#%3Awq">:wq</a>  	  :wq[!] <code>{file}</code>		write to <code>{file}</code> and exit
<a href="editing.html#%3Axit">:xit</a>  	  :x[it][!] [file]	like ":wq" but write only when changes have
				   been made
<a href="editing.html#ZZ">ZZ</a>  	     ZZ			same as ":x"
<a href="editing.html#ZQ">ZQ</a>  	     ZQ			same as ":q!"
<a href="editing.html#%3Axall">:xall</a>  	  :xa[ll][!]  or :wqall[!]
				write all changed buffers and exit</div>
<div class="old-help-para"><a href="starting.html#%3Astop">:stop</a>  	  :st[op][!]		suspend Vim or start new shell; if <a href="options.html#'aw'">'aw'</a> option
				   is set and [!] not given write the buffer
<a href="starting.html#CTRL-Z">CTRL-Z</a>     <code>CTRL-Z</code>		same as ":stop"</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_ac"></a><span class="help-tag">Q_ac</span>  		Automatic Commands</span></h3></div>
<div class="old-help-para"><a href="starting.html#shada-file">shada-file</a>  	read registers, marks, history at startup, save when exiting.</div>
<div class="old-help-para"><a href="starting.html#%3Arshada">:rshada</a>  	:rsh[ada] [file]	read info from ShaDa file [file]
<a href="starting.html#%3Arshada">:rshada</a>  	:rsh[ada]! [file]	idem, overwrite existing info
<a href="starting.html#%3Awshada">:wshada</a>  	:wsh[ada] [file]	add info to ShaDa file [file]
<a href="starting.html#%3Awshada">:wshada</a>  	:wsh[ada]! [file]	write info to ShaDa file [file]</div>
<div class="old-help-para"><a href="options.html#modeline">modeline</a>  	Automatic option setting when editing a file</div>
<div class="old-help-para"><a href="options.html#modeline">modeline</a>  	vim:{set-arg}: ..	In the first and last lines of the
					file (see <a href="options.html#'ml'">'ml'</a> option), <code>{set-arg}</code> is
					given as an argument to ":set"</div>
<div class="old-help-para"><a href="autocmd.html#autocommand">autocommand</a>  	Automatic execution of commands on certain events.</div>
<div class="old-help-para"><a href="autocmd.html#%3Aautocmd">:autocmd</a>  	:au			  list all autocommands
<a href="autocmd.html#%3Aautocmd">:autocmd</a>  	:au <code>{event}</code>		  list all autocommands for <code>{event}</code>
<a href="autocmd.html#%3Aautocmd">:autocmd</a>  	:au <code>{event}</code> <code>{pat}</code>	  list all autocommands for <code>{event}</code>
					  with <code>{pat}</code>
<a href="autocmd.html#%3Aautocmd">:autocmd</a>  	:au <code>{event}</code> <code>{pat}</code> <code>{cmd}</code>	  enter new autocommands for <code>{event}</code>
					  with <code>{pat}</code>
<a href="autocmd.html#%3Aautocmd">:autocmd</a>  	:au!			  remove all autocommands
<a href="autocmd.html#%3Aautocmd">:autocmd</a>  	:au! <code>{event}</code>		  remove all autocommands for <code>{event}</code>
<a href="autocmd.html#%3Aautocmd">:autocmd</a>  	:au! * <code>{pat}</code>		  remove all autocommands for <code>{pat}</code>
<a href="autocmd.html#%3Aautocmd">:autocmd</a>  	:au! <code>{event}</code> <code>{pat}</code>	  remove all autocommands for <code>{event}</code>
					  with <code>{pat}</code>
<a href="autocmd.html#%3Aautocmd">:autocmd</a>  	:au! <code>{event}</code> <code>{pat}</code> <code>{cmd}</code>  remove all autocommands for <code>{event}</code>
					  with <code>{pat}</code> and enter new one</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_wi"></a><span class="help-tag">Q_wi</span>  		Multi-window commands</span></h3></div>
<div class="old-help-para"><a href="windows.html#CTRL-W_s">CTRL-W_s</a>  	<code>CTRL-W</code> s  or  :split	split window into two parts
<a href="windows.html#%3Asplit_f">:split_f</a>  	:split <code>{file}</code>		split window and edit <code>{file}</code> in one of
					   them
<a href="windows.html#%3Avsplit">:vsplit</a>  	:vsplit <code>{file}</code>		same, but split vertically
<a href="windows.html#%3Avertical">:vertical</a>  	:vertical <code>{cmd}</code>		make <code>{cmd}</code> split vertically</div>
<div class="old-help-para"><a href="windows.html#%3Asfind">:sfind</a>  	:sf[ind] <code>{file}</code>		split window, find <code>{file}</code> in <a href="options.html#'path'">'path'</a>
					   and edit it
<a href="various.html#%3Aterminal">:terminal</a>  	:terminal <code>{cmd}</code>		open a terminal window
<a href="windows.html#CTRL-W_%5D">CTRL-W_]</a>  	<code>CTRL-W</code> ]		split window and jump to tag under
					   cursor
<a href="windows.html#CTRL-W_f">CTRL-W_f</a>  	<code>CTRL-W</code> f		split window and edit file name under
					   the cursor
<a href="windows.html#CTRL-W_%5E">CTRL-W_^</a>  	<code>CTRL-W</code> ^		split window and edit alternate file
<a href="windows.html#CTRL-W_n">CTRL-W_n</a>  	<code>CTRL-W</code> n  or  :new	create new empty window
<a href="windows.html#CTRL-W_q">CTRL-W_q</a>  	<code>CTRL-W</code> q  or  :q[uit]	quit editing and close window
<a href="windows.html#CTRL-W_c">CTRL-W_c</a>  	<code>CTRL-W</code> c  or  :clo[se]	make buffer hidden and close window
<a href="windows.html#CTRL-W_o">CTRL-W_o</a>  	<code>CTRL-W</code> o  or  :on[ly]	make current window only one on the
					   screen</div>
<div class="old-help-para"><a href="windows.html#CTRL-W_j">CTRL-W_j</a>  	<code>CTRL-W</code> j		move cursor to window below
<a href="windows.html#CTRL-W_k">CTRL-W_k</a>  	<code>CTRL-W</code> k		move cursor to window above
<a href="windows.html#CTRL-W_CTRL-W">CTRL-W_CTRL-W</a>  	<code>CTRL-W</code> <code>CTRL-W</code>		move cursor to window below (wrap)
<a href="windows.html#CTRL-W_W">CTRL-W_W</a>  	<code>CTRL-W</code> W		move cursor to window above (wrap)
<a href="windows.html#CTRL-W_t">CTRL-W_t</a>  	<code>CTRL-W</code> t		move cursor to top window
<a href="windows.html#CTRL-W_b">CTRL-W_b</a>  	<code>CTRL-W</code> b		move cursor to bottom window
<a href="windows.html#CTRL-W_p">CTRL-W_p</a>  	<code>CTRL-W</code> p		move cursor to previous active window</div>
<div class="old-help-para"><a href="windows.html#CTRL-W_r">CTRL-W_r</a>  	<code>CTRL-W</code> r		rotate windows downwards
<a href="windows.html#CTRL-W_R">CTRL-W_R</a>  	<code>CTRL-W</code> R		rotate windows upwards
<a href="windows.html#CTRL-W_x">CTRL-W_x</a>  	<code>CTRL-W</code> x		exchange current window with next one</div>
<div class="old-help-para"><a href="windows.html#CTRL-W_%3D">CTRL-W_=</a>  	<code>CTRL-W</code> =		make all windows equal height &amp; width
<a href="windows.html#CTRL-W_-">CTRL-W_-</a>  	<code>CTRL-W</code> -			decrease current window height
<a href="windows.html#CTRL-W_%2B">CTRL-W_+</a>  	<code>CTRL-W</code> +		increase current window height
<a href="windows.html#CTRL-W__">CTRL-W__</a>  	<code>CTRL-W</code> _		set current window height (default:
					   very high)</div>
<div class="old-help-para"><a href="windows.html#CTRL-W_%3C">CTRL-W_&lt;</a>  	<code>CTRL-W</code> &lt;		decrease current window width
<a href="windows.html#CTRL-W_%3E">CTRL-W_&gt;</a>  	<code>CTRL-W</code> &gt;		increase current window width
<a href="windows.html#CTRL-W_bar">CTRL-W_bar</a>  	<code>CTRL-W</code> |		set current window width (default:
					   widest possible)</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_bu"></a><span class="help-tag">Q_bu</span>  		Buffer list commands</span></h3></div>
<div class="old-help-para"><a href="windows.html#%3Abuffers">:buffers</a>  	:buffers  or  :files	list all known buffer and file names</div>
<div class="old-help-para"><a href="windows.html#%3Aball">:ball</a>  		:ball	  or  :sball	edit all args/buffers
<a href="windows.html#%3Aunhide">:unhide</a>  	:unhide   or  :sunhide	edit all loaded buffers</div>
<div class="old-help-para"><a href="windows.html#%3Abadd">:badd</a>  		:badd <code>{fname}</code>		add file name <code>{fname}</code> to the list
<a href="windows.html#%3Abunload">:bunload</a>  	:bunload[!] [N]		unload buffer [N] from memory
<a href="windows.html#%3Abdelete">:bdelete</a>  	:bdelete[!] [N]		unload buffer [N] and delete it from
					   the buffer list</div>
<div class="old-help-para"><div class="help-column_heading">		in current window  in new window</div><a href="windows.html#%3Abuffer">:buffer</a>  	:[N]buffer [N]     :[N]sbuffer [N]     to arg/buf N
<a href="windows.html#%3Abnext">:bnext</a>  	:[N]bnext [N]      :[N]sbnext [N]      to Nth next arg/buf
<a href="windows.html#%3AbNext">:bNext</a>  	:[N]bNext [N]      :[N]sbNext [N]      to Nth previous arg/buf
<a href="windows.html#%3Abprevious">:bprevious</a>  	:[N]bprevious [N]  :[N]sbprevious [N]  to Nth previous arg/buf
<a href="windows.html#%3Abfirst">:bfirst</a>  	:bfirst	           :sbfirst            to first arg/buf
<a href="windows.html#%3Ablast">:blast</a>  	:blast	           :sblast             to last arg/buf
<a href="windows.html#%3Abmodified">:bmodified</a>  	:[N]bmod [N]       :[N]sbmod [N]       to Nth modified buf</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_sy"></a><span class="help-tag">Q_sy</span>  		Syntax Highlighting</span></h3></div>
<div class="old-help-para"><a href="syntax.html#%3Asyn-on">:syn-on</a>  	:syntax on		start using syntax highlighting
<a href="syntax.html#%3Asyn-off">:syn-off</a>  	:syntax off		stop using syntax highlighting</div>
<div class="old-help-para"><a href="syntax.html#%3Asyn-keyword">:syn-keyword</a>  	:syntax keyword <code>{group-name}</code> <code>{keyword}</code> ..
					add a syntax keyword item
<a href="syntax.html#%3Asyn-match">:syn-match</a>  	:syntax match <code>{group-name}</code> <code>{pattern}</code> ...
					add syntax match item
<a href="syntax.html#%3Asyn-region">:syn-region</a>  	:syntax region <code>{group-name}</code> <code>{pattern}</code> ...
					add syntax region item
<a href="syntax.html#%3Asyn-sync">:syn-sync</a>  	:syntax sync [ccomment | lines <code>{N}</code> | ...]
					tell syntax how to sync
<a href="syntax.html#%3Asyntax">:syntax</a>  	:syntax [list]		list current syntax items
<a href="syntax.html#%3Asyn-clear">:syn-clear</a>  	:syntax clear		clear all syntax info</div>
<div class="old-help-para"><a href="syntax.html#%3Ahighlight">:highlight</a>  	:highlight clear	clear all highlight info
<a href="syntax.html#%3Ahighlight">:highlight</a>  	:highlight <code>{group-name}</code> <code>{key}</code>={arg} ..
					set highlighting for <code>{group-name}</code></div>
<div class="old-help-para"><a href="filetype.html#%3Afiletype">:filetype</a>  	:filetype on		switch on file type detection, without
					syntax highlighting
<a href="filetype.html#%3Afiletype">:filetype</a>  	:filetype plugin indent on
					switch on file type detection, with
					automatic indenting and settings</div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_gu"></a><span class="help-tag">Q_gu</span>  		GUI commands</span></h3></div>
<div class="old-help-para"><a href="gui.html#%3Amenu">:menu</a>  		:menu			list all menus
<a href="gui.html#%3Amenu">:menu</a>  		:menu <code>{mpath}</code>		list menus starting with <code>{mpath}</code>
<a href="gui.html#%3Amenu">:menu</a>  		:menu <code>{mpath}</code> <code>{rhs}</code>	add menu <code>{mpath}</code>, giving <code>{rhs}</code>
<a href="gui.html#%3Amenu">:menu</a>  		:menu <code>{pri}</code> <code>{mpath}</code> <code>{rhs}</code>
					idem, with priorities <code>{pri}</code>
<a href="gui.html#%3Amenu">:menu</a>  		:menu ToolBar.{name} <code>{rhs}</code>
					add toolbar item, giving <code>{rhs}</code>
<a href="gui.html#%3Atmenu">:tmenu</a>  	:tmenu <code>{mpath}</code> <code>{text}</code>	add tooltip to menu <code>{mpath}</code>
<a href="gui.html#%3Aunmenu">:unmenu</a>  	:unmenu <code>{mpath}</code>		remove menu <code>{mpath}</code></div>
<div class="old-help-para"><h3 class="help-heading"><span class="help-heading-tags"><a name="Q_fo"></a><span class="help-tag">Q_fo</span>  		Folding</span></h3></div>
<div class="old-help-para"><a href="options.html#'foldmethod'">'foldmethod'</a>  	set foldmethod=manual	manual folding
		set foldmethod=indent	folding by indent
		set foldmethod=expr	folding by <a href="options.html#'foldexpr'">'foldexpr'</a>
		set foldmethod=syntax	folding by syntax regions
		set foldmethod=marker	folding by <a href="options.html#'foldmarker'">'foldmarker'</a></div>
<div class="old-help-para"><a href="fold.html#zf">zf</a>  		zf{motion}		operator: Define a fold manually
<a href="fold.html#%3Afold">:fold</a>  		:{range}fold		define a fold for <code>{range}</code> lines
<a href="fold.html#zd">zd</a>  		zd			delete one fold under the cursor
<a href="fold.html#zD">zD</a>  		zD			delete all folds under the cursor</div>
<div class="old-help-para"><a href="fold.html#zo">zo</a>  		zo			open one fold under the cursor
<a href="fold.html#zO">zO</a>  		zO			open all folds under the cursor
<a href="fold.html#zc">zc</a>  		zc			close one fold under the cursor
<a href="fold.html#zC">zC</a>  		zC			close all folds under the cursor</div>
<div class="old-help-para"><a href="fold.html#zm">zm</a>  		zm			fold more: decrease <a href="options.html#'foldlevel'">'foldlevel'</a>
<a href="fold.html#zM">zM</a>  		zM			close all folds: make <a href="options.html#'foldlevel'">'foldlevel'</a> zero
<a href="fold.html#zr">zr</a>  		zr			reduce folding: increase <a href="options.html#'foldlevel'">'foldlevel'</a>
<a href="fold.html#zR">zR</a>  		zR			open all folds: make <a href="options.html#'foldlevel'">'foldlevel'</a> max.</div>
<div class="old-help-para"><a href="fold.html#zn">zn</a>  		zn			fold none: reset <a href="options.html#'foldenable'">'foldenable'</a>
<a href="fold.html#zN">zN</a>  		zN			fold normal set <a href="options.html#'foldenable'">'foldenable'</a>
<a href="fold.html#zi">zi</a>  		zi			invert <a href="options.html#'foldenable'">'foldenable'</a></div>

  
  