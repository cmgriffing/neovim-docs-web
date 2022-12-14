---
title:  Builtin
layout: ../../layouts/MainLayout.astro
---

  <a name="builtin.txt"></a><a name="vimscript-functions"></a><h1> Builtin</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/builtin.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Builtin functions <a name="builtin-functions"></a><code class="help-tag">builtin-functions</code></div>
<div class="old-help-para">For functions grouped by what they are used for see <a href="/neovim-docs-web/en/usr_41#function-list">function-list</a>.</div>
<div class="old-help-para"><h2 class="help-heading">1. Overview<span class="help-heading-tags">					<a name="builtin-function-list"></a><span class="help-tag">builtin-function-list</span></span></h2></div>
<div class="old-help-para">Use <code>CTRL-]</code> on the function name to jump to the full explanation.</div>
<div class="old-help-para"><div class="help-column_heading">USAGE				RESULT	DESCRIPTION</div></div>
<div class="old-help-para">abs(<code>{expr}</code>)			Float or Number  absolute value of <code>{expr}</code>
acos(<code>{expr}</code>)			Float	arc cosine of <code>{expr}</code>
add(<code>{object}</code>, <code>{item}</code>)		List/Blob   append <code>{item}</code> to <code>{object}</code>
and(<code>{expr}</code>, <code>{expr}</code>)		Number	bitwise AND
api_info()			Dict	api metadata
append(<code>{lnum}</code>, <code>{text}</code>)		Number	append <code>{text}</code> below line <code>{lnum}</code>
appendbufline(<code>{expr}</code>, <code>{lnum}</code>, <code>{text}</code>)
				Number	append <code>{text}</code> below line <code>{lnum}</code>
					in buffer <code>{expr}</code>
argc([{winid}])			Number	number of files in the argument list
argidx()			Number	current index in the argument list
arglistid([{winnr} [, <code>{tabnr}</code>]]) Number	argument list id
argv(<code>{nr}</code> [, <code>{winid}</code>])		String	<code>{nr}</code> entry of the argument list
argv([-1, <code>{winid}</code>])		List	the argument list
asin(<code>{expr}</code>)			Float	arc sine of <code>{expr}</code>
assert_beeps(<code>{cmd}</code>)		Number	assert <code>{cmd}</code> causes a beep
assert_equal(<code>{exp}</code>, <code>{act}</code> [, <code>{msg}</code>])
				Number	assert <code>{exp}</code> is equal to <code>{act}</code>
assert_equalfile(<code>{fname-one}</code>, <code>{fname-two}</code> [, <code>{msg}</code>])
				Number	assert file contents are equal
assert_exception(<code>{error}</code> [, <code>{msg}</code>])
				Number	assert <code>{error}</code> is in v:exception
assert_fails(<code>{cmd}</code> [, <code>{error}</code>])	Number	assert <code>{cmd}</code> fails
assert_false(<code>{actual}</code> [, <code>{msg}</code>])
				Number	assert <code>{actual}</code> is false
assert_inrange(<code>{lower}</code>, <code>{upper}</code>, <code>{actual}</code> [, <code>{msg}</code>])
				Number	assert <code>{actual}</code> is inside the range
assert_match(<code>{pat}</code>, <code>{text}</code> [, <code>{msg}</code>])
				Number	assert <code>{pat}</code> matches <code>{text}</code>
assert_nobeep(<code>{cmd}</code>)		Number	assert <code>{cmd}</code> does not cause a beep
assert_notequal(<code>{exp}</code>, <code>{act}</code> [, <code>{msg}</code>])
				Number	assert <code>{exp}</code> is not equal <code>{act}</code>
assert_notmatch(<code>{pat}</code>, <code>{text}</code> [, <code>{msg}</code>])
				Number	assert <code>{pat}</code> not matches <code>{text}</code>
assert_report(<code>{msg}</code>)		Number	report a test failure
assert_true(<code>{actual}</code> [, <code>{msg}</code>])	Number	assert <code>{actual}</code> is true
atan(<code>{expr}</code>)			Float	arc tangent of <code>{expr}</code>
atan2(<code>{expr1}</code>, <code>{expr2}</code>)		Float	arc tangent of <code>{expr1}</code> / <code>{expr2}</code>
browse(<code>{save}</code>, <code>{title}</code>, <code>{initdir}</code>, <code>{default}</code>)
				String	put up a file requester
browsedir(<code>{title}</code>, <code>{initdir}</code>)	String	put up a directory requester
bufadd(<code>{name}</code>)			Number	add a buffer to the buffer list
bufexists(<code>{expr}</code>)		Number	<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> if buffer <code>{expr}</code> exists
buflisted(<code>{expr}</code>)		Number	<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> if buffer <code>{expr}</code> is listed
bufload(<code>{expr}</code>)			Number	load buffer <code>{expr}</code> if not loaded yet
bufloaded(<code>{expr}</code>)		Number	<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> if buffer <code>{expr}</code> is loaded
bufname([{expr}])		String	Name of the buffer <code>{expr}</code>
bufnr([{expr} [, <code>{create}</code>]])	Number	Number of the buffer <code>{expr}</code>
bufwinid(<code>{expr}</code>)		Number	<a href="/neovim-docs-web/en/windows#window-ID">window-ID</a> of buffer <code>{expr}</code>
bufwinnr(<code>{expr}</code>)		Number	window number of buffer <code>{expr}</code>
byte2line(<code>{byte}</code>)		Number	line number at byte count <code>{byte}</code>
byteidx(<code>{expr}</code>, <code>{nr}</code>)		Number	byte index of <code>{nr}</code>'<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+builtin.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/builtin.html%0D%0DContext%3A%0D%0D%60%60%60%0Dbufwinid(%7Bexpr%7D)%09%09Number%09%7Cwindow-ID%7C%20of%20buffer%20%7Bexpr%7D%0Abufwinnr(%7Bexpr%7D)%09%09Number%09window%20number%20of%20buffer%20%7Bexpr%7D%0Abyte2line(%7Bbyte%7D)%09%09Number%09line%20number%20at%20byte%20count%20%7Bbyte%7D%0Abyteidx(%7Bexpr%7D%2C%20%7Bnr%7D)%09%09Number%09byte%20index%20of%20%7Bnr%7D'th%20char%20in%20%7Bexpr%7D%0Abyteidxcomp(%7Bexpr%7D%2C%20%7Bnr%7D)%09Number%09byte%20index%20of%20%7Bnr%7D'th%20char%20in%20%7Bexpr%7D%0Acall(%7Bfunc%7D%2C%20%7Barglist%7D%20%5B%2C%20%7Bdict%7D%5D)%0A%09%09%09%09any%09call%20%7Bfunc%7D%20with%20arguments%20%7Barglist%7D%0D%60%60%60">th</a> char in <code>{expr}</code>
byteidxcomp(<code>{expr}</code>, <code>{nr}</code>)	Number	byte index of <code>{nr}</code>'<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+builtin.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/builtin.html%0D%0DContext%3A%0D%0D%60%60%60%0Dbufwinnr(%7Bexpr%7D)%09%09Number%09window%20number%20of%20buffer%20%7Bexpr%7D%0Abyte2line(%7Bbyte%7D)%09%09Number%09line%20number%20at%20byte%20count%20%7Bbyte%7D%0Abyteidx(%7Bexpr%7D%2C%20%7Bnr%7D)%09%09Number%09byte%20index%20of%20%7Bnr%7D'th%20char%20in%20%7Bexpr%7D%0Abyteidxcomp(%7Bexpr%7D%2C%20%7Bnr%7D)%09Number%09byte%20index%20of%20%7Bnr%7D'th%20char%20in%20%7Bexpr%7D%0Acall(%7Bfunc%7D%2C%20%7Barglist%7D%20%5B%2C%20%7Bdict%7D%5D)%0A%09%09%09%09any%09call%20%7Bfunc%7D%20with%20arguments%20%7Barglist%7D%0Aceil(%7Bexpr%7D)%09%09%09Float%09round%20%7Bexpr%7D%20up%0D%60%60%60">th</a> char in <code>{expr}</code>
call(<code>{func}</code>, <code>{arglist}</code> [, <code>{dict}</code>])
				any	call <code>{func}</code> with arguments <code>{arglist}</code>
ceil(<code>{expr}</code>)			Float	round <code>{expr}</code> up
changenr()			Number	current change number
chanclose(<code>{id}</code> [, <code>{stream}</code>])	Number	Closes a channel or one of its streams
chansend(<code>{id}</code>, <code>{data}</code>)		Number	Writes <code>{data}</code> to channel
char2nr(<code>{expr}</code> [, <code>{utf8}</code>])	Number	ASCII/UTF-8 value of first char in <code>{expr}</code>
charclass(<code>{string}</code>)		Number	character class of <code>{string}</code>
charcol(<code>{expr}</code> [, <code>{winid}</code>])	Number	column number of cursor or mark
charidx(<code>{string}</code>, <code>{idx}</code> [, <code>{countcc}</code>])
				Number	char index of byte <code>{idx}</code> in <code>{string}</code>
chdir(<code>{dir}</code>)			String	change current working directory
cindent(<code>{lnum}</code>)			Number	C indent for line <code>{lnum}</code>
clearmatches([{win}])		none	clear all matches
col(<code>{expr}</code> [, <code>{winid}</code>])		Number	column byte index of cursor or mark
complete(<code>{startcol}</code>, <code>{matches}</code>) none	set Insert mode completion
complete_add(<code>{expr}</code>)		Number	add completion match
complete_check()		Number	check for key typed during completion
complete_info([{what}])		Dict	get current completion information
confirm(<code>{msg}</code> [, <code>{choices}</code> [, <code>{default}</code> [, <code>{type}</code>]]])
				Number	number of choice picked by user
copy(<code>{expr}</code>)			any	make a shallow copy of <code>{expr}</code>
cos(<code>{expr}</code>)			Float	cosine of <code>{expr}</code>
cosh(<code>{expr}</code>)			Float	hyperbolic cosine of <code>{expr}</code>
count(<code>{comp}</code>, <code>{expr}</code> [, <code>{ic}</code> [, <code>{start}</code>]])
				Number	count how many <code>{expr}</code> are in <code>{comp}</code>
ctxget([{index}])		Dict	return the <a href="/neovim-docs-web/en/repeat#context">context</a> dict at <code>{index}</code>
ctxpop()			none	pop and restore <a href="/neovim-docs-web/en/repeat#context">context</a> from the
					<a href="/neovim-docs-web/en/repeat#context-stack">context-stack</a>
ctxpush([{types}])		none	push the current <a href="/neovim-docs-web/en/repeat#context">context</a> to the
					<a href="/neovim-docs-web/en/repeat#context-stack">context-stack</a>
ctxset(<code>{context}</code> [, <code>{index}</code>])	none	set <a href="/neovim-docs-web/en/repeat#context">context</a> at <code>{index}</code>
ctxsize()			Number	return <a href="/neovim-docs-web/en/repeat#context-stack">context-stack</a> size
cursor(<code>{lnum}</code>, <code>{col}</code> [, <code>{off}</code>])
				Number	move cursor to <code>{lnum}</code>, <code>{col}</code>, <code>{off}</code>
cursor(<code>{list}</code>)			Number	move cursor to position in <code>{list}</code>
debugbreak(<code>{pid}</code>)		Number	interrupt process being debugged
deepcopy(<code>{expr}</code> [, <code>{noref}</code>])	any	make a full copy of <code>{expr}</code>
delete(<code>{fname}</code> [, <code>{flags}</code>])	Number	delete the file or directory <code>{fname}</code>
deletebufline(<code>{buf}</code>, <code>{first}</code> [, <code>{last}</code>])
				Number	delete lines from buffer <code>{buf}</code>
dictwatcheradd(<code>{dict}</code>, <code>{pattern}</code>, <code>{callback}</code>)
				Start watching a dictionary
dictwatcherdel(<code>{dict}</code>, <code>{pattern}</code>, <code>{callback}</code>)
				Stop watching a dictionary
did_filetype()			Number	<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> if FileType autocommand event used
diff_filler(<code>{lnum}</code>)		Number	diff filler lines about <code>{lnum}</code>
diff_hlID(<code>{lnum}</code>, <code>{col}</code>)	Number	diff highlighting at <code>{lnum}</code>/{col}
digraph_get(<code>{chars}</code>)		String	get the <a href="/neovim-docs-web/en/digraph#digraph">digraph</a> of <code>{chars}</code>
digraph_getlist([{listall}])	List	get all <a href="/neovim-docs-web/en/digraph#digraph">digraph</a>s
digraph_set(<code>{chars}</code>, <code>{digraph}</code>)	Boolean	register <a href="/neovim-docs-web/en/digraph#digraph">digraph</a>
digraph_setlist(<code>{digraphlist}</code>)	Boolean	register multiple <a href="/neovim-docs-web/en/digraph#digraph">digraph</a>s
empty(<code>{expr}</code>)			Number	<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> if <code>{expr}</code> is empty
environ()			Dict	return environment variables
escape(<code>{string}</code>, <code>{chars}</code>)	String	escape <code>{chars}</code> in <code>{string}</code> with '\'
eval(<code>{string}</code>)			any	evaluate <code>{string}</code> into its value
eventhandler()			Number	<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> if inside an event handler
executable(<code>{expr}</code>)		Number	1 if executable <code>{expr}</code> exists
execute(<code>{command}</code>)		String	execute and capture output of <code>{command}</code>
exepath(<code>{expr}</code>)			String	full path of the command <code>{expr}</code>
exists(<code>{expr}</code>)			Number	<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> if <code>{expr}</code> exists
exp(<code>{expr}</code>)			Float	exponential of <code>{expr}</code>
expand(<code>{expr}</code> [, <code>{nosuf}</code> [, <code>{list}</code>]])
				any	expand special keywords in <code>{expr}</code>
expandcmd(<code>{string}</code> [, <code>{options}</code>])
				String	expand <code>{string}</code> like with <code>:edit</code>
extend(<code>{expr1}</code>, <code>{expr2}</code> [, <code>{expr3}</code>])
				List/Dict insert items of <code>{expr2}</code> into <code>{expr1}</code>
feedkeys(<code>{string}</code> [, <code>{mode}</code>])	Number	add key sequence to typeahead buffer
filereadable(<code>{file}</code>)		Number	<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> if <code>{file}</code> is a readable file
filewritable(<code>{file}</code>)		Number	<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> if <code>{file}</code> is a writable file
filter(<code>{expr1}</code>, <code>{expr2}</code>)	List/Dict  remove items from <code>{expr1}</code> where
					<code>{expr2}</code> is 0
finddir(<code>{name}</code> [, <code>{path}</code> [, <code>{count}</code>]])
				String	find directory <code>{name}</code> in <code>{path}</code>
findfile(<code>{name}</code> [, <code>{path}</code> [, <code>{count}</code>]])
				String	find file <code>{name}</code> in <code>{path}</code>
flatten(<code>{list}</code> [, <code>{maxdepth}</code>])	List	flatten <code>{list}</code> up to <code>{maxdepth}</code> levels
float2nr(<code>{expr}</code>)		Number	convert Float <code>{expr}</code> to a Number
floor(<code>{expr}</code>)			Float	round <code>{expr}</code> down
fmod(<code>{expr1}</code>, <code>{expr2}</code>)		Float	remainder of <code>{expr1}</code> / <code>{expr2}</code>
fnameescape(<code>{fname}</code>)		String	escape special characters in <code>{fname}</code>
fnamemodify(<code>{fname}</code>, <code>{mods}</code>)	String	modify file name
foldclosed(<code>{lnum}</code>)		Number	first line of fold at <code>{lnum}</code> if closed
foldclosedend(<code>{lnum}</code>)		Number	last line of fold at <code>{lnum}</code> if closed
foldlevel(<code>{lnum}</code>)		Number	fold level at <code>{lnum}</code>
foldtext()			String	line displayed for closed fold
foldtextresult(<code>{lnum}</code>)		String	text for closed fold at <code>{lnum}</code>
fullcommand(<code>{name}</code>)		String	get full command from <code>{name}</code>
funcref(<code>{name}</code> [, <code>{arglist}</code>] [, <code>{dict}</code>])
				Funcref	reference to function <code>{name}</code>
function(<code>{name}</code> [, <code>{arglist}</code>] [, <code>{dict}</code>])
				Funcref	named reference to function <code>{name}</code>
garbagecollect([{atexit}])	none	free memory, breaking cyclic references
get(<code>{list}</code>, <code>{idx}</code> [, <code>{def}</code>])	any	get item <code>{idx}</code> from <code>{list}</code> or <code>{def}</code>
get(<code>{dict}</code>, <code>{key}</code> [, <code>{def}</code>])	any	get item <code>{key}</code> from <code>{dict}</code> or <code>{def}</code>
get(<code>{func}</code>, <code>{what}</code>)		any	get property of funcref/partial <code>{func}</code>
getbufinfo([{buf}])		List	information about buffers
getbufline(<code>{buf}</code>, <code>{lnum}</code> [, <code>{end}</code>])
				List	lines <code>{lnum}</code> to <code>{end}</code> of buffer <code>{buf}</code>
getbufvar(<code>{buf}</code>, <code>{varname}</code> [, <code>{def}</code>])
				any	variable <code>{varname}</code> in buffer <code>{buf}</code>
getchangelist([{buf}])		List	list of change list items
getchar([expr])			Number or String
					get one character from the user
getcharmod()			Number	modifiers for the last typed character
getcharpos(<code>{expr}</code>)		List	position of cursor, mark, etc.
getcharsearch()			Dict	last character search
getcharstr([expr])		String	get one character from the user
getcmdcompltype()		String	return the type of the current
					command-line completion
getcmdline()			String	return the current command-line
getcmdpos()			Number	return cursor position in command-line
getcmdscreenpos()		Number	return cursor screen position in
					command-line
getcmdtype()			String	return current command-line type
getcmdwintype()			String	return current command-line window type
getcompletion(<code>{pat}</code>, <code>{type}</code> [, <code>{filtered}</code>])
				List	list of cmdline completion matches
getcurpos([{winnr}])		List	position of the cursor
getcursorcharpos([{winnr}])	List	character position of the cursor
getcwd([{winnr} [, <code>{tabnr}</code>]])	String	get the current working directory
getenv(<code>{name}</code>)			String	return environment variable
getfontname([{name}])		String	name of font being used
getfperm(<code>{fname}</code>)		String	file permissions of file <code>{fname}</code>
getfsize(<code>{fname}</code>)		Number	size in bytes of file <code>{fname}</code>
getftime(<code>{fname}</code>)		Number	last modification time of file
getftype(<code>{fname}</code>)		String	description of type of file <code>{fname}</code>
getjumplist([{winnr} [, <code>{tabnr}</code>]])
				List	list of jump list items
getline(<code>{lnum}</code>)			String	line <code>{lnum}</code> of current buffer
getline(<code>{lnum}</code>, <code>{end}</code>)		List	lines <code>{lnum}</code> to <code>{end}</code> of current buffer
getloclist(<code>{nr}</code>)		List	list of location list items
getloclist(<code>{nr}</code>, <code>{what}</code>)	Dict	get specific location list properties
getmarklist([{buf}])		List	list of global/local marks
getmatches([{win}])		List	list of current matches
getmousepos()			Dict	last known mouse position
getpid()			Number	process ID of Vim
getpos(<code>{expr}</code>)			List	position of cursor, mark, etc.
getqflist()			List	list of quickfix items
getqflist(<code>{what}</code>)		Dict	get specific quickfix list properties
getreg([{regname} [, 1 [, <code>{list}</code>]]])
				String or List   contents of a register
getreginfo([{regname}])		Dict	information about a register
getregtype([{regname}])		String	type of a register
gettabinfo([{expr}])		List	list of tab pages
gettabvar(<code>{nr}</code>, <code>{varname}</code> [, <code>{def}</code>])
				any	variable <code>{varname}</code> in tab <code>{nr}</code> or <code>{def}</code>
gettabwinvar(<code>{tabnr}</code>, <code>{winnr}</code>, <code>{name}</code> [, <code>{def}</code>])
				any	<code>{name}</code> in <code>{winnr}</code> in tab page <code>{tabnr}</code>
gettagstack([{nr}])		Dict	get the tag stack of window <code>{nr}</code>
gettext(<code>{text}</code>)			String	lookup translation of <code>{text}</code>
getwininfo([{winid}])		List	list of info about each window
getwinpos([{timeout}])		List	X and Y coord in pixels of the Vim window
getwinposx()			Number	X coord in pixels of Vim window
getwinposy()			Number	Y coord in pixels of Vim window
getwinvar(<code>{nr}</code>, <code>{varname}</code> [, <code>{def}</code>])
				any	variable <code>{varname}</code> in window <code>{nr}</code>
glob(<code>{expr}</code> [, <code>{nosuf}</code> [, <code>{list}</code> [, <code>{alllinks}</code>]]])
				any	expand file wildcards in <code>{expr}</code>
glob2regpat(<code>{expr}</code>)		String	convert a glob pat into a search pat
globpath(<code>{path}</code>, <code>{expr}</code> [, <code>{nosuf}</code> [, <code>{list}</code> [, <code>{alllinks}</code>]]])
				String	do glob(<code>{expr}</code>) for all dirs in <code>{path}</code>
has(<code>{feature}</code>)			Number	<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> if feature <code>{feature}</code> supported
has_key(<code>{dict}</code>, <code>{key}</code>)		Number	<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> if <code>{dict}</code> has entry <code>{key}</code>
haslocaldir([{winnr} [, <code>{tabnr}</code>]])
				Number	<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> if the window executed <a href="/neovim-docs-web/en/editing#%3Alcd">:lcd</a> or
					the tab executed <a href="/neovim-docs-web/en/editing#%3Atcd">:tcd</a>
hasmapto(<code>{what}</code> [, <code>{mode}</code> [, <code>{abbr}</code>]])
				Number	<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> if mapping to <code>{what}</code> exists
histadd(<code>{history}</code>, <code>{item}</code>)	Number	add an item to a history
histdel(<code>{history}</code> [, <code>{item}</code>])	Number	remove an item from a history
histget(<code>{history}</code> [, <code>{index}</code>])	String	get the item <code>{index}</code> from a history
histnr(<code>{history}</code>)		Number	highest index of a history
hlID(<code>{name}</code>)			Number	syntax ID of highlight group <code>{name}</code>
hlexists(<code>{name}</code>)		Number	<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> if highlight group <code>{name}</code> exists
hostname()			String	name of the machine Vim is running on
iconv(<code>{expr}</code>, <code>{from}</code>, <code>{to}</code>)	String	convert encoding of <code>{expr}</code>
indent(<code>{lnum}</code>)			Number	indent of line <code>{lnum}</code>
index(<code>{object}</code>, <code>{expr}</code> [, <code>{start}</code> [, <code>{ic}</code>]])
				Number	index in <code>{object}</code> where <code>{expr}</code> appears
input(<code>{prompt}</code> [, <code>{text}</code> [, <code>{completion}</code>]])
				String	get input from the user
inputlist(<code>{textlist}</code>)		Number	let the user pick from a choice list
inputrestore()			Number	restore typeahead
inputsave()			Number	save and clear typeahead
inputsecret(<code>{prompt}</code> [, <code>{text}</code>])
				String	like input() but hiding the text
insert(<code>{object}</code>, <code>{item}</code> [, <code>{idx}</code>])
				List	insert <code>{item}</code> in <code>{object}</code> [before <code>{idx}</code>]
interrupt()			none	interrupt script execution
invert(<code>{expr}</code>)			Number	bitwise invert
isdirectory(<code>{directory}</code>)	Number	<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> if <code>{directory}</code> is a directory
isinf(<code>{expr}</code>)			Number	determine if <code>{expr}</code> is infinity value
					(positive or negative)
islocked(<code>{expr}</code>)		Number	<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> if <code>{expr}</code> is locked
isnan(<code>{expr}</code>)			Number	<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> if <code>{expr}</code> is NaN
id(<code>{expr}</code>)			String	identifier of the container
items(<code>{dict}</code>)			List	key-value pairs in <code>{dict}</code>
jobpid(<code>{id}</code>)			Number	Returns pid of a job.
jobresize(<code>{id}</code>, <code>{width}</code>, <code>{height}</code>)
				Number	Resize pseudo terminal window of a job
jobstart(<code>{cmd}</code> [, <code>{opts}</code>])	Number	Spawns <code>{cmd}</code> as a job
jobstop(<code>{id}</code>)			Number	Stops a job
jobwait(<code>{ids}</code> [, <code>{timeout}</code>])	Number	Wait for a set of jobs
join(<code>{list}</code> [, <code>{sep}</code>])		String	join <code>{list}</code> items into one String
json_decode(<code>{expr}</code>)		any	Convert <code>{expr}</code> from JSON
json_encode(<code>{expr}</code>)		String	Convert <code>{expr}</code> to JSON
keys(<code>{dict}</code>)			List	keys in <code>{dict}</code>
keytrans(<code>{string}</code>)		String	translate internal keycodes to a form
					that can be used by <a href="/neovim-docs-web/en/map#%3Amap">:map</a>
len(<code>{expr}</code>)			Number	the length of <code>{expr}</code>
libcall(<code>{lib}</code>, <code>{func}</code>, <code>{arg}</code>)	String	call <code>{func}</code> in library <code>{lib}</code> with <code>{arg}</code>
libcallnr(<code>{lib}</code>, <code>{func}</code>, <code>{arg}</code>)	Number	idem, but return a Number
line(<code>{expr}</code> [, <code>{winid}</code>])	Number	line nr of cursor, last line or mark
line2byte(<code>{lnum}</code>)		Number	byte count of line <code>{lnum}</code>
lispindent(<code>{lnum}</code>)		Number	Lisp indent for line <code>{lnum}</code>
list2str(<code>{list}</code> [, <code>{utf8}</code>])	String	turn numbers in <code>{list}</code> into a String
localtime()			Number	current time
log(<code>{expr}</code>)			Float	natural logarithm (base e) of <code>{expr}</code>
log10(<code>{expr}</code>)			Float	logarithm of Float <code>{expr}</code> to base 10
luaeval(<code>{expr}</code> [, <code>{expr}</code>])	any	evaluate <a href="/neovim-docs-web/en/lua#Lua">Lua</a> expression
map(<code>{expr1}</code>, <code>{expr2}</code>)		List/Dict  change each item in <code>{expr1}</code> to <code>{expr}</code>
maparg(<code>{name}</code> [, <code>{mode}</code> [, <code>{abbr}</code> [, <code>{dict}</code>]]])
				String or Dict
					rhs of mapping <code>{name}</code> in mode <code>{mode}</code>
mapcheck(<code>{name}</code> [, <code>{mode}</code> [, <code>{abbr}</code>]])
				String	check for mappings matching <code>{name}</code>
mapset(<code>{mode}</code>, <code>{abbr}</code>, <code>{dict}</code>)
				none	restore mapping from <a href="/neovim-docs-web/en/builtin#maparg()">maparg()</a> result
match(<code>{expr}</code>, <code>{pat}</code> [, <code>{start}</code> [, <code>{count}</code>]])
				Number	position where <code>{pat}</code> matches in <code>{expr}</code>
matchadd(<code>{group}</code>, <code>{pattern}</code> [, <code>{priority}</code> [, <code>{id}</code> [, <code>{dict}</code>]]])
				Number	highlight <code>{pattern}</code> with <code>{group}</code>
matchaddpos(<code>{group}</code>, <code>{pos}</code> [, <code>{priority}</code> [, <code>{id}</code> [, <code>{dict}</code>]]])
				Number	highlight positions with <code>{group}</code>
matcharg(<code>{nr}</code>)			List	arguments of <a href="/neovim-docs-web/en/pattern#%3Amatch">:match</a>
matchdelete(<code>{id}</code> [, <code>{win}</code>])	Number	delete match identified by <code>{id}</code>
matchend(<code>{expr}</code>, <code>{pat}</code> [, <code>{start}</code> [, <code>{count}</code>]])
				Number	position where <code>{pat}</code> ends in <code>{expr}</code>
matchfuzzy(<code>{list}</code>, <code>{str}</code> [, <code>{dict}</code>])
				List	fuzzy match <code>{str}</code> in <code>{list}</code>
matchfuzzypos(<code>{list}</code>, <code>{str}</code> [, <code>{dict}</code>])
				List	fuzzy match <code>{str}</code> in <code>{list}</code>
matchlist(<code>{expr}</code>, <code>{pat}</code> [, <code>{start}</code> [, <code>{count}</code>]])
				List	match and submatches of <code>{pat}</code> in <code>{expr}</code>
matchstr(<code>{expr}</code>, <code>{pat}</code> [, <code>{start}</code> [, <code>{count}</code>]])
				String	<code>{count}</code>'<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+builtin.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/builtin.html%0D%0DContext%3A%0D%0D%60%60%60%0Dmatchlist(%7Bexpr%7D%2C%20%7Bpat%7D%20%5B%2C%20%7Bstart%7D%20%5B%2C%20%7Bcount%7D%5D%5D)%0A%09%09%09%09List%09match%20and%20submatches%20of%20%7Bpat%7D%20in%20%7Bexpr%7D%0Amatchstr(%7Bexpr%7D%2C%20%7Bpat%7D%20%5B%2C%20%7Bstart%7D%20%5B%2C%20%7Bcount%7D%5D%5D)%0A%09%09%09%09String%09%7Bcount%7D'th%20match%20of%20%7Bpat%7D%20in%20%7Bexpr%7D%0Amatchstrpos(%7Bexpr%7D%2C%20%7Bpat%7D%20%5B%2C%20%7Bstart%7D%20%5B%2C%20%7Bcount%7D%5D%5D)%0A%09%09%09%09List%09%7Bcount%7D'th%20match%20of%20%7Bpat%7D%20in%20%7Bexpr%7D%0Amax(%7Bexpr%7D)%09%09%09Number%09maximum%20value%20of%20items%20in%20%7Bexpr%7D%0D%60%60%60">th</a> match of <code>{pat}</code> in <code>{expr}</code>
matchstrpos(<code>{expr}</code>, <code>{pat}</code> [, <code>{start}</code> [, <code>{count}</code>]])
				List	<code>{count}</code>'<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+builtin.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/builtin.html%0D%0DContext%3A%0D%0D%60%60%60%0Dmatchstr(%7Bexpr%7D%2C%20%7Bpat%7D%20%5B%2C%20%7Bstart%7D%20%5B%2C%20%7Bcount%7D%5D%5D)%0A%09%09%09%09String%09%7Bcount%7D'th%20match%20of%20%7Bpat%7D%20in%20%7Bexpr%7D%0Amatchstrpos(%7Bexpr%7D%2C%20%7Bpat%7D%20%5B%2C%20%7Bstart%7D%20%5B%2C%20%7Bcount%7D%5D%5D)%0A%09%09%09%09List%09%7Bcount%7D'th%20match%20of%20%7Bpat%7D%20in%20%7Bexpr%7D%0Amax(%7Bexpr%7D)%09%09%09Number%09maximum%20value%20of%20items%20in%20%7Bexpr%7D%0Amenu_get(%7Bpath%7D%20%5B%2C%20%7Bmodes%7D%5D)%09List%09description%20of%20%7Cmenus%7C%20matched%20by%20%7Bpath%7D%0Amenu_info(%7Bname%7D%20%5B%2C%20%7Bmode%7D%5D)%09Dict%09get%20menu%20item%20information%0D%60%60%60">th</a> match of <code>{pat}</code> in <code>{expr}</code>
max(<code>{expr}</code>)			Number	maximum value of items in <code>{expr}</code>
menu_get(<code>{path}</code> [, <code>{modes}</code>])	List	description of <a href="/neovim-docs-web/en/gui#menus">menus</a> matched by <code>{path}</code>
menu_info(<code>{name}</code> [, <code>{mode}</code>])	Dict	get menu item information
min(<code>{expr}</code>)			Number	minimum value of items in <code>{expr}</code>
mkdir(<code>{name}</code> [, <code>{path}</code> [, <code>{prot}</code>]])
				Number	create directory <code>{name}</code>
mode([expr])			String	current editing mode
msgpackdump(<code>{list}</code> [, <code>{type}</code>])	List/Blob  dump objects to msgpack
msgpackparse(<code>{data}</code>)		List	parse msgpack to a list of objects
nextnonblank(<code>{lnum}</code>)		Number	line nr of non-blank line &gt;= <code>{lnum}</code>
nr2char(<code>{expr}</code> [, <code>{utf8}</code>])	String	single char with ASCII/UTF-8 value <code>{expr}</code>
nvim_...({args}...)		any	call nvim <a href="/neovim-docs-web/en/api#api">api</a> functions
or(<code>{expr}</code>, <code>{expr}</code>)		Number	bitwise OR
pathshorten(<code>{expr}</code> [, <code>{len}</code>])	String	shorten directory names in a path
perleval(<code>{expr}</code>)		any	evaluate <a href="/neovim-docs-web/en/if_perl#perl">perl</a> expression
pow(<code>{x}</code>, <code>{y}</code>)			Float	<code>{x}</code> to the power of <code>{y}</code>
prevnonblank(<code>{lnum}</code>)		Number	line nr of non-blank line &lt;= <code>{lnum}</code>
printf(<code>{fmt}</code>, <code>{expr1}</code>...)	String	format text
prompt_getprompt(<code>{buf}</code>)		String	get prompt text
prompt_setcallback(<code>{buf}</code>, <code>{expr}</code>) none	set prompt callback function
prompt_setinterrupt(<code>{buf}</code>, <code>{text}</code>) none	set prompt interrupt function
prompt_setprompt(<code>{buf}</code>, <code>{text}</code>) none	set prompt text
pum_getpos()			Dict	position and size of pum if visible
pumvisible()			Number	whether popup menu is visible
py3eval(<code>{expr}</code>)			any	evaluate <a href="/neovim-docs-web/en/if_pyth#python3">python3</a> expression
pyeval(<code>{expr}</code>)			any	evaluate <a href="/neovim-docs-web/en/if_pyth#Python">Python</a> expression
pyxeval(<code>{expr}</code>)			any	evaluate <a href="/neovim-docs-web/en/if_pyth#python_x">python_x</a> expression
rand([{expr}])			Number	get pseudo-random number
range(<code>{expr}</code> [, <code>{max}</code> [, <code>{stride}</code>]])
				List	items from <code>{expr}</code> to <code>{max}</code>
readblob(<code>{fname}</code>)		Blob	read a <a href="/neovim-docs-web/en/eval#Blob">Blob</a> from <code>{fname}</code>
readdir(<code>{dir}</code> [, <code>{expr}</code>])	List	file names in <code>{dir}</code> selected by <code>{expr}</code>
readfile(<code>{fname}</code> [, <code>{type}</code> [, <code>{max}</code>]])
				List	get list of lines from file <code>{fname}</code>
reduce(<code>{object}</code>, <code>{func}</code> [, <code>{initial}</code>])
				any	reduce <code>{object}</code> using <code>{func}</code>
reg_executing()			String	get the executing register name
reg_recorded()			String	get the last recorded register name
reg_recording()			String	get the recording register name
reltime([{start} [, <code>{end}</code>]])	List	get time value
reltimefloat(<code>{time}</code>)		Float	turn the time value into a Float
reltimestr(<code>{time}</code>)		String	turn time value into a String
remove(<code>{list}</code>, <code>{idx}</code> [, <code>{end}</code>])	any/List
					remove items <code>{idx}</code>-{end} from <code>{list}</code>
remove(<code>{blob}</code>, <code>{idx}</code> [, <code>{end}</code>])	Number/Blob
					remove bytes <code>{idx}</code>-{end} from <code>{blob}</code>
remove(<code>{dict}</code>, <code>{key}</code>)		any	remove entry <code>{key}</code> from <code>{dict}</code>
rename(<code>{from}</code>, <code>{to}</code>)		Number	rename (move) file from <code>{from}</code> to <code>{to}</code>
repeat(<code>{expr}</code>, <code>{count}</code>)		String	repeat <code>{expr}</code> <code>{count}</code> times
resolve(<code>{filename}</code>)		String	get filename a shortcut points to
reverse(<code>{list}</code>)			List	reverse <code>{list}</code> in-place
round(<code>{expr}</code>)			Float	round off <code>{expr}</code>
rubyeval(<code>{expr}</code>)		any	evaluate <a href="/neovim-docs-web/en/if_ruby#Ruby">Ruby</a> expression
rpcnotify(<code>{channel}</code>, <code>{event}</code> [, <code>{args}</code>...])
				Sends an <a href="/neovim-docs-web/en/api#RPC">RPC</a> notification to <code>{channel}</code>
rpcrequest(<code>{channel}</code>, <code>{method}</code> [, <code>{args}</code>...])
				Sends an <a href="/neovim-docs-web/en/api#RPC">RPC</a> request to <code>{channel}</code>
screenattr(<code>{row}</code>, <code>{col}</code>)	Number	attribute at screen position
screenchar(<code>{row}</code>, <code>{col}</code>)	Number	character at screen position
screenchars(<code>{row}</code>, <code>{col}</code>)	List	List of characters at screen position
screencol()			Number	current cursor column
screenpos(<code>{winid}</code>, <code>{lnum}</code>, <code>{col}</code>) Dict	screen row and col of a text character
screenrow()			Number	current cursor row
screenstring(<code>{row}</code>, <code>{col}</code>)	String	characters at screen position
search(<code>{pattern}</code> [, <code>{flags}</code> [, <code>{stopline}</code> [, <code>{timeout}</code> [, <code>{skip}</code>]]]])
				Number	search for <code>{pattern}</code>
searchcount([{options}])	Dict	Get or update the last search count
searchdecl(<code>{name}</code> [, <code>{global}</code> [, <code>{thisblock}</code>]])
				Number	search for variable declaration
searchpair(<code>{start}</code>, <code>{middle}</code>, <code>{end}</code> [, <code>{flags}</code> [, <code>{skip}</code> [...]]])
				Number	search for other end of start/end pair
searchpairpos(<code>{start}</code>, <code>{middle}</code>, <code>{end}</code> [, <code>{flags}</code> [, <code>{skip}</code> [...]]])
				List	search for other end of start/end pair
searchpos(<code>{pattern}</code> [, <code>{flags}</code> [, <code>{stopline}</code> [, <code>{timeout}</code> [, <code>{skip}</code>]]]])
				List	search for <code>{pattern}</code>
serverlist()			String	get a list of available servers
setbufline(<code>{expr}</code>, <code>{lnum}</code>, <code>{text}</code>)
				Number	set line <code>{lnum}</code> to <code>{text}</code> in buffer
					<code>{expr}</code>
setbufvar(<code>{buf}</code>, <code>{varname}</code>, <code>{val}</code>)	set <code>{varname}</code> in buffer <code>{buf}</code> to <code>{val}</code>
setcellwidths(<code>{list}</code>)		none	set character cell width overrides
setcharpos(<code>{expr}</code>, <code>{list}</code>)	Number	set the <code>{expr}</code> position to <code>{list}</code>
setcharsearch(<code>{dict}</code>)		Dict	set character search from <code>{dict}</code>
setcmdline(<code>{str}</code> [, <code>{pos}</code>])	Number	set command-line
setcmdpos(<code>{pos}</code>)		Number	set cursor position in command-line
setcursorcharpos(<code>{list}</code>)	Number	move cursor to position in <code>{list}</code>
setenv(<code>{name}</code>, <code>{val}</code>)		none	set environment variable
setfperm(<code>{fname}</code>, <code>{mode}</code>	Number	set <code>{fname}</code> file permissions to <code>{mode}</code>
setline(<code>{lnum}</code>, <code>{line}</code>)		Number	set line <code>{lnum}</code> to <code>{line}</code>
setloclist(<code>{nr}</code>, <code>{list}</code> [, <code>{action}</code>])
				Number	modify location list using <code>{list}</code>
setloclist(<code>{nr}</code>, <code>{list}</code>, <code>{action}</code>, <code>{what}</code>)
				Number	modify specific location list props
setmatches(<code>{list}</code> [, <code>{win}</code>])	Number	restore a list of matches
setpos(<code>{expr}</code>, <code>{list}</code>)		Number	set the <code>{expr}</code> position to <code>{list}</code>
setqflist(<code>{list}</code> [, <code>{action}</code>])	Number	modify quickfix list using <code>{list}</code>
setqflist(<code>{list}</code>, <code>{action}</code>, <code>{what}</code>)
				Number	modify specific quickfix list props
setreg(<code>{n}</code>, <code>{v}</code> [, <code>{opt}</code>])	Number	set register to value and type
settabvar(<code>{nr}</code>, <code>{varname}</code>, <code>{val}</code>)	set <code>{varname}</code> in tab page <code>{nr}</code> to <code>{val}</code>
settabwinvar(<code>{tabnr}</code>, <code>{winnr}</code>, <code>{varname}</code>, <code>{val}</code>)    set <code>{varname}</code> in window
					<code>{winnr}</code> in tab page <code>{tabnr}</code> to <code>{val}</code>
settagstack(<code>{nr}</code>, <code>{dict}</code> [, <code>{action}</code>])
				Number	modify tag stack using <code>{dict}</code>
setwinvar(<code>{nr}</code>, <code>{varname}</code>, <code>{val}</code>)	set <code>{varname}</code> in window <code>{nr}</code> to <code>{val}</code>
sha256(<code>{string}</code>)		String	SHA256 checksum of <code>{string}</code>
shellescape(<code>{string}</code> [, <code>{special}</code>])
				String	escape <code>{string}</code> for use as shell
					command argument
shiftwidth([{col}])		Number	effective value of <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a>
sign_define(<code>{name}</code> [, <code>{dict}</code>])	Number	define or update a sign
sign_define(<code>{list}</code>)		List	define or update a list of signs
sign_getdefined([{name}])	List	get a list of defined signs
sign_getplaced([{buf} [, <code>{dict}</code>]])
				List	get a list of placed signs
sign_jump(<code>{id}</code>, <code>{group}</code>, <code>{buf}</code>)
				Number	jump to a sign
sign_place(<code>{id}</code>, <code>{group}</code>, <code>{name}</code>, <code>{buf}</code> [, <code>{dict}</code>])
				Number	place a sign
sign_placelist(<code>{list}</code>)		List	place a list of signs
sign_undefine([{name}])		Number	undefine a sign
sign_undefine(<code>{list}</code>)		List	undefine a list of signs
sign_unplace(<code>{group}</code> [, <code>{dict}</code>])
				Number	unplace a sign
sign_unplacelist(<code>{list}</code>)	List	unplace a list of signs
simplify(<code>{filename}</code>)		String	simplify filename as much as possible
sin(<code>{expr}</code>)			Float	sine of <code>{expr}</code>
sinh(<code>{expr}</code>)			Float	hyperbolic sine of <code>{expr}</code>
sockconnect(<code>{mode}</code>, <code>{address}</code> [, <code>{opts}</code>])
				Number	Connects to socket
sort(<code>{list}</code> [, <code>{func}</code> [, <code>{dict}</code>]])
				List	sort <code>{list}</code>, using <code>{func}</code> to compare
soundfold(<code>{word}</code>)		String	sound-fold <code>{word}</code>
spellbadword()			String	badly spelled word at cursor
spellsuggest(<code>{word}</code> [, <code>{max}</code> [, <code>{capital}</code>]])
				List	spelling suggestions
split(<code>{expr}</code> [, <code>{pat}</code> [, <code>{keepempty}</code>]])
				List	make <a href="/neovim-docs-web/en/eval#List">List</a> from <code>{pat}</code> separated <code>{expr}</code>
sqrt(<code>{expr}</code>)			Float	square root of <code>{expr}</code>
srand([{expr}])			List	get seed for <a href="/neovim-docs-web/en/builtin#rand()">rand()</a>
stdioopen(<code>{dict}</code>)		Number	open stdio in a headless instance.
stdpath(<code>{what}</code>)			String/List  returns the standard path(s) for <code>{what}</code>
str2float(<code>{expr}</code> [, <code>{quoted}</code>])	Float	convert String to Float
str2list(<code>{expr}</code> [, <code>{utf8}</code>])	List	convert each character of <code>{expr}</code> to
					ASCII/UTF-8 value
str2nr(<code>{expr}</code> [, <code>{base}</code> [, <code>{quoted}</code>]])
				Number	convert String to Number
strcharlen(<code>{expr}</code>)		Number	character length of the String <code>{expr}</code>
strcharpart(<code>{str}</code>, <code>{start}</code> [, <code>{len}</code>])
				String	<code>{len}</code> characters of <code>{str}</code> at
					character <code>{start}</code>
strchars(<code>{expr}</code> [, <code>{skipcc}</code>])	Number	character count of the String <code>{expr}</code>
strdisplaywidth(<code>{expr}</code> [, <code>{col}</code>]) Number display length of the String <code>{expr}</code>
strftime(<code>{format}</code> [, <code>{time}</code>])	String	format time with a specified format
strgetchar(<code>{str}</code>, <code>{index}</code>)	Number	get char <code>{index}</code> from <code>{str}</code>
stridx(<code>{haystack}</code>, <code>{needle}</code> [, <code>{start}</code>])
				Number	index of <code>{needle}</code> in <code>{haystack}</code>
string(<code>{expr}</code>)			String	String representation of <code>{expr}</code> value
strlen(<code>{expr}</code>)			Number	length of the String <code>{expr}</code>
strpart(<code>{str}</code>, <code>{start}</code> [, <code>{len}</code> [, <code>{chars}</code>]])
				String	<code>{len}</code> bytes/chars of <code>{str}</code> at
					byte <code>{start}</code>
strptime(<code>{format}</code>, <code>{timestring}</code>)
				Number	Convert <code>{timestring}</code> to unix timestamp
strridx(<code>{haystack}</code>, <code>{needle}</code> [, <code>{start}</code>])
				Number	last index of <code>{needle}</code> in <code>{haystack}</code>
strtrans(<code>{expr}</code>)		String	translate string to make it printable
strwidth(<code>{expr}</code>)		Number	display cell length of the String <code>{expr}</code>
submatch(<code>{nr}</code> [, <code>{list}</code>])	String or List
					specific match in ":s" or substitute()
substitute(<code>{expr}</code>, <code>{pat}</code>, <code>{sub}</code>, <code>{flags}</code>)
				String	all <code>{pat}</code> in <code>{expr}</code> replaced with <code>{sub}</code>
swapinfo(<code>{fname}</code>)		Dict	information about swap file <code>{fname}</code>
swapname(<code>{buf}</code>)			String	swap file of buffer <code>{buf}</code>
synID(<code>{lnum}</code>, <code>{col}</code>, <code>{trans}</code>)	Number	syntax ID at <code>{lnum}</code> and <code>{col}</code>
synIDattr(<code>{synID}</code>, <code>{what}</code> [, <code>{mode}</code>])
				String	attribute <code>{what}</code> of syntax ID <code>{synID}</code>
synIDtrans(<code>{synID}</code>)		Number	translated syntax ID of <code>{synID}</code>
synconcealed(<code>{lnum}</code>, <code>{col}</code>)	List	info about concealing
synstack(<code>{lnum}</code>, <code>{col}</code>)	List	stack of syntax IDs at <code>{lnum}</code> and <code>{col}</code>
system(<code>{cmd}</code> [, <code>{input}</code>])	String	output of shell command/filter <code>{cmd}</code>
systemlist(<code>{cmd}</code> [, <code>{input}</code>])	List	output of shell command/filter <code>{cmd}</code>
tabpagebuflist([{arg}])		List	list of buffer numbers in tab page
tabpagenr([{arg}])		Number	number of current or last tab page
tabpagewinnr(<code>{tabarg}</code> [, <code>{arg}</code>])
				Number	number of current window in tab page
tagfiles()			List	tags files used
taglist(<code>{expr}</code> [, <code>{filename}</code>])	List	list of tags matching <code>{expr}</code>
tan(<code>{expr}</code>)			Float	tangent of <code>{expr}</code>
tanh(<code>{expr}</code>)			Float	hyperbolic tangent of <code>{expr}</code>
tempname()			String	name for a temporary file
test_garbagecollect_now()	none	free memory right now for testing
timer_info([{id}])		List	information about timers
timer_pause(<code>{id}</code>, <code>{pause}</code>)	none	pause or unpause a timer
timer_start(<code>{time}</code>, <code>{callback}</code> [, <code>{options}</code>])
				Number	create a timer
timer_stop(<code>{timer}</code>)		none	stop a timer
timer_stopall()			none	stop all timers
tolower(<code>{expr}</code>)			String	the String <code>{expr}</code> switched to lowercase
toupper(<code>{expr}</code>)			String	the String <code>{expr}</code> switched to uppercase
tr(<code>{src}</code>, <code>{fromstr}</code>, <code>{tostr}</code>)	String	translate chars of <code>{src}</code> in <code>{fromstr}</code>
					to chars in <code>{tostr}</code>
trim(<code>{text}</code> [, <code>{mask}</code> [, <code>{dir}</code>]])
				String	trim characters in <code>{mask}</code> from <code>{text}</code>
trunc(<code>{expr}</code>)			Float	truncate Float <code>{expr}</code>
type(<code>{name}</code>)			Number	type of variable <code>{name}</code>
undofile(<code>{name}</code>)		String	undo file name for <code>{name}</code>
undotree()			List	undo file tree
uniq(<code>{list}</code> [, <code>{func}</code> [, <code>{dict}</code>]])
				List	remove adjacent duplicates from a list
values(<code>{dict}</code>)			List	values in <code>{dict}</code>
virtcol(<code>{expr}</code>)			Number	screen column of cursor or mark
virtcol2col(<code>{winid}</code>, <code>{lnum}</code>, <code>{col}</code>)
				Number  byte index of a character on screen
visualmode([expr])		String	last visual mode used
wait(<code>{timeout}</code>, <code>{condition}</code> [, <code>{interval}</code>])
				Number	Wait until <code>{condition}</code> is satisfied
wildmenumode()			Number	whether <a href="/neovim-docs-web/en/options#'wildmenu'">'wildmenu'</a> mode is active
win_execute(<code>{id}</code>, <code>{command}</code> [, <code>{silent}</code>])
				String	execute <code>{command}</code> in window <code>{id}</code>
win_findbuf(<code>{bufnr}</code>)		List	find windows containing <code>{bufnr}</code>
win_getid([{win} [, <code>{tab}</code>]])	Number	get <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a> for <code>{win}</code> in <code>{tab}</code>
win_gettype([{nr}])		String	type of window <code>{nr}</code>
win_gotoid(<code>{expr}</code>)		Number	go to <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a> <code>{expr}</code>
win_id2tabwin(<code>{expr}</code>)		List	get tab and window nr from <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>
win_id2win(<code>{expr}</code>)		Number	get window nr from <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>
win_move_separator(<code>{nr}</code>)	Number	move window vertical separator
win_move_statusline(<code>{nr}</code>)	Number	move window status line
win_screenpos(<code>{nr}</code>)		List	get screen position of window <code>{nr}</code>
win_splitmove(<code>{nr}</code>, <code>{target}</code> [, <code>{options}</code>])
				Number	move window <code>{nr}</code> to split of <code>{target}</code>
winbufnr(<code>{nr}</code>)			Number	buffer number of window <code>{nr}</code>
wincol()			Number	window column of the cursor
windowsversion()		String	MS-Windows OS version
winheight(<code>{nr}</code>)			Number	height of window <code>{nr}</code>
winlayout([{tabnr}])		List	layout of windows in tab <code>{tabnr}</code>
winline()			Number	window line of the cursor
winnr([{expr}])			Number	number of current window
winrestcmd()			String	returns command to restore window sizes
winrestview(<code>{dict}</code>)		none	restore view of current window
winsaveview()			Dict	save view of current window
winwidth(<code>{nr}</code>)			Number	width of window <code>{nr}</code>
wordcount()			Dict	get byte/char/word statistics
writefile(<code>{object}</code>, <code>{fname}</code> [, <code>{flags}</code>])
				Number	write <a href="/neovim-docs-web/en/eval#Blob">Blob</a> or <a href="/neovim-docs-web/en/eval#List">List</a> of lines to file
xor(<code>{expr}</code>, <code>{expr}</code>)		Number	bitwise XOR</div>
<div class="old-help-para"><h2 class="help-heading">2. Details<span class="help-heading-tags">					<a name="builtin-function-details"></a><span class="help-tag">builtin-function-details</span></span></h2></div>
<div class="old-help-para">Not all functions are here, some have been moved to a help file covering the
specific functionality.</div>
<div class="old-help-para">abs(<code>{expr}</code>)							<a name="abs()"></a><code class="help-tag-right">abs()</code>
		Return the absolute value of <code>{expr}</code>.  When <code>{expr}</code> evaluates to
		a <a href="/neovim-docs-web/en/eval#Float">Float</a> abs() returns a <a href="/neovim-docs-web/en/eval#Float">Float</a>.  When <code>{expr}</code> can be
		converted to a <a href="/neovim-docs-web/en/eval#Number">Number</a> abs() returns a <a href="/neovim-docs-web/en/eval#Number">Number</a>.  Otherwise
		abs() gives an error message and returns -1.
		Examples:<pre>echo abs(1.456)</pre></div>
<div class="old-help-para">			1.456<pre>echo abs(-5.456)</pre></div>
<div class="old-help-para">			5.456<pre>echo abs(-4)</pre></div>
<div class="old-help-para">			4</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>Compute()-&gt;abs()</pre>
acos(<code>{expr}</code>)							<a name="acos()"></a><code class="help-tag-right">acos()</code>
		Return the arc cosine of <code>{expr}</code> measured in radians, as a
		<a href="/neovim-docs-web/en/eval#Float">Float</a> in the range of [0, pi].
		<code>{expr}</code> must evaluate to a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a> in the range
		[-1, 1].
		Returns NaN if <code>{expr}</code> is outside the range [-1, 1].  Returns
		0.0 if <code>{expr}</code> is not a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Examples:<pre>:echo acos(0)</pre></div>
<div class="old-help-para">			1.570796<pre>:echo acos(-0.5)</pre></div>
<div class="old-help-para">			2.094395</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>Compute()-&gt;acos()</pre>
add(<code>{object}</code>, <code>{expr}</code>)					<a name="add()"></a><code class="help-tag-right">add()</code>
		Append the item <code>{expr}</code> to <a href="/neovim-docs-web/en/eval#List">List</a> or <a href="/neovim-docs-web/en/eval#Blob">Blob</a> <code>{object}</code>.  Returns
		the resulting <a href="/neovim-docs-web/en/eval#List">List</a> or <a href="/neovim-docs-web/en/eval#Blob">Blob</a>.  Examples:<pre>:let alist = add([1, 2, 3], item)
:call add(mylist, "woodstock")</pre></div>
<div class="old-help-para">		Note that when <code>{expr}</code> is a <a href="/neovim-docs-web/en/eval#List">List</a> it is appended as a single
		item.  Use <a href="/neovim-docs-web/en/builtin#extend()">extend()</a> to concatenate <a href="/neovim-docs-web/en/eval#Lists">Lists</a>.
		When <code>{object}</code> is a <a href="/neovim-docs-web/en/eval#Blob">Blob</a> then <code>{expr}</code> must be a number.
		Use <a href="/neovim-docs-web/en/builtin#insert()">insert()</a> to add an item at another position.
		Returns 1 if <code>{object}</code> is not a <a href="/neovim-docs-web/en/eval#List">List</a> or a <a href="/neovim-docs-web/en/eval#Blob">Blob</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>mylist-&gt;add(val1)-&gt;add(val2)</pre>
and(<code>{expr}</code>, <code>{expr}</code>)					<a name="and()"></a><code class="help-tag-right">and()</code>
		Bitwise AND on the two arguments.  The arguments are converted
		to a number.  A List, Dict or Float argument causes an error.
		Example:<pre>:let flag = and(bits, 0x80)</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>:let flag = bits-&gt;and(0x80)</pre>
api_info()						<a name="api_info()"></a><code class="help-tag-right">api_info()</code>
		Returns Dictionary of <a href="/neovim-docs-web/en/api#api-metadata">api-metadata</a>.</div>
<div class="old-help-para">		View it in a nice human-readable format:<pre>:lua print(vim.inspect(vim.fn.api_info()))</pre>
append(<code>{lnum}</code>, <code>{text}</code>)					<a name="append()"></a><code class="help-tag-right">append()</code>
		When <code>{text}</code> is a <a href="/neovim-docs-web/en/eval#List">List</a>: Append each item of the <a href="/neovim-docs-web/en/eval#List">List</a> as a
		text line below line <code>{lnum}</code> in the current buffer.
		Otherwise append <code>{text}</code> as one text line below line <code>{lnum}</code> in
		the current buffer.
		<code>{lnum}</code> can be zero to insert a line before the first one.
		<code>{lnum}</code> is used like with <a href="/neovim-docs-web/en/builtin#getline()">getline()</a>.
		Returns 1 for failure (<code>{lnum}</code> out of range or out of memory),
		0 for success.  Example:<pre>:let failed = append(line('$'), "# THE END")
:let failed = append(0, ["Chapter 1", "the beginning"])</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a> after a List:<pre>mylist-&gt;append(lnum)</pre>
appendbufline(<code>{buf}</code>, <code>{lnum}</code>, <code>{text}</code>)			<a name="appendbufline()"></a><code class="help-tag-right">appendbufline()</code>
		Like <a href="/neovim-docs-web/en/builtin#append()">append()</a> but append the text in buffer <code>{expr}</code>.</div>
<div class="old-help-para">		This function works only for loaded buffers. First call
		<a href="/neovim-docs-web/en/builtin#bufload()">bufload()</a> if needed.</div>
<div class="old-help-para">		For the use of <code>{buf}</code>, see <a href="/neovim-docs-web/en/builtin#bufname()">bufname()</a>.</div>
<div class="old-help-para">		<code>{lnum}</code> is the line number to append below.  Note that using
		<a href="/neovim-docs-web/en/builtin#line()">line()</a> would use the current buffer, not the one appending
		to.  Use "$" to append at the end of the buffer.  Other string
		values are not supported.</div>
<div class="old-help-para">		On success 0 is returned, on failure 1 is returned.</div>
<div class="old-help-para">		If <code>{buf}</code> is not a valid buffer or <code>{lnum}</code> is not valid, an
		error message is given. Example:<pre>:let failed = appendbufline(13, 0, "# THE START")</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a> after a List:<pre>mylist-&gt;appendbufline(buf, lnum)</pre>
argc([{winid}])					<a name="argc()"></a><code class="help-tag-right">argc()</code>
		The result is the number of files in the argument list.  See
		<a href="/neovim-docs-web/en/editing#arglist">arglist</a>.
		If <code>{winid}</code> is not supplied, the argument list of the current
		window is used.
		If <code>{winid}</code> is -1, the global argument list is used.
		Otherwise <code>{winid}</code> specifies the window of which the argument
		list is used: either the window number or the window ID.
		Returns -1 if the <code>{winid}</code> argument is invalid.</div>
<div class="old-help-para">							<a name="argidx()"></a><code class="help-tag-right">argidx()</code>
argidx()	The result is the current index in the argument list.  0 is
		the first file.  argc() - 1 is the last one.  See <a href="/neovim-docs-web/en/editing#arglist">arglist</a>.</div>
<div class="old-help-para">							<a name="arglistid()"></a><code class="help-tag-right">arglistid()</code>
arglistid([{winnr} [, <code>{tabnr}</code>]])
		Return the argument list ID.  This is a number which
		identifies the argument list being used.  Zero is used for the
		global argument list.  See <a href="/neovim-docs-web/en/editing#arglist">arglist</a>.
		Returns -1 if the arguments are invalid.</div>
<div class="old-help-para">		Without arguments use the current window.
		With <code>{winnr}</code> only use this window in the current tab page.
		With <code>{winnr}</code> and <code>{tabnr}</code> use the window in the specified tab
		page.
		<code>{winnr}</code> can be the window number or the <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>.</div>
<div class="old-help-para">							<a name="argv()"></a><code class="help-tag-right">argv()</code>
argv([{nr} [, <code>{winid}</code>]])
		The result is the <code>{nr}</code>th file in the argument list.  See
		<a href="/neovim-docs-web/en/editing#arglist">arglist</a>.  "argv(0)" is the first one.  Example:<pre>:let i = 0
:while i &lt; argc()
:  let f = escape(fnameescape(argv(i)), '.')
:  exe 'amenu Arg.' .. f .. ' :e ' .. f .. '&lt;CR&gt;'
:  let i = i + 1
:endwhile</pre></div>
<div class="old-help-para">		Without the <code>{nr}</code> argument, or when <code>{nr}</code> is -1, a <a href="/neovim-docs-web/en/eval#List">List</a> with
		the whole <a href="/neovim-docs-web/en/editing#arglist">arglist</a> is returned.</div>
<div class="old-help-para">		The <code>{winid}</code> argument specifies the window ID, see <a href="/neovim-docs-web/en/builtin#argc()">argc()</a>.
		For the Vim command line arguments see <a href="/neovim-docs-web/en/eval#v%3Aargv">v:argv</a>.</div>
<div class="old-help-para">		Returns an empty string if <code>{nr}</code>th argument is not present in
		the argument list.  Returns an empty List if the <code>{winid}</code>
		argument is invalid.</div>
<div class="old-help-para">asin(<code>{expr}</code>)						<a name="asin()"></a><code class="help-tag-right">asin()</code>
		Return the arc sine of <code>{expr}</code> measured in radians, as a <a href="/neovim-docs-web/en/eval#Float">Float</a>
		in the range of [-pi/2, pi/2].
		<code>{expr}</code> must evaluate to a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a> in the range
		[-1, 1].
		Returns NaN if <code>{expr}</code> is outside the range [-1, 1].  Returns
		0.0 if <code>{expr}</code> is not a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Examples:<pre>:echo asin(0.8)</pre></div>
<div class="old-help-para">			0.927295<pre>:echo asin(-0.5)</pre></div>
<div class="old-help-para">			-0.523599</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>Compute()-&gt;asin()</pre>
assert_ functions are documented here: <a href="/neovim-docs-web/en/testing#assert-functions-details">assert-functions-details</a></div>
<div class="old-help-para">atan(<code>{expr}</code>)						<a name="atan()"></a><code class="help-tag-right">atan()</code>
		Return the principal value of the arc tangent of <code>{expr}</code>, in
		the range [-pi/2, +pi/2] radians, as a <a href="/neovim-docs-web/en/eval#Float">Float</a>.
		<code>{expr}</code> must evaluate to a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Returns 0.0 if <code>{expr}</code> is not a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Examples:<pre>:echo atan(100)</pre></div>
<div class="old-help-para">			1.560797<pre>:echo atan(-4.01)</pre></div>
<div class="old-help-para">			-1.326405</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>Compute()-&gt;atan()</pre>
atan2(<code>{expr1}</code>, <code>{expr2}</code>)					<a name="atan2()"></a><code class="help-tag-right">atan2()</code>
		Return the arc tangent of <code>{expr1}</code> / <code>{expr2}</code>, measured in
		radians, as a <a href="/neovim-docs-web/en/eval#Float">Float</a> in the range [-pi, pi].
		<code>{expr1}</code> and <code>{expr2}</code> must evaluate to a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Returns 0.0 if <code>{expr1}</code> or <code>{expr2}</code> is not a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a
		<a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Examples:<pre>:echo atan2(-1, 1)</pre></div>
<div class="old-help-para">			-0.785398<pre>:echo atan2(1, -1)</pre></div>
<div class="old-help-para">			2.356194</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>Compute()-&gt;atan2(1)

                                *browse()*</pre>
browse(<code>{save}</code>, <code>{title}</code>, <code>{initdir}</code>, <code>{default}</code>)
		Put up a file requester.  This only works when "has("browse")"
		returns <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> (only in some GUI versions).
		The input fields are:
		    <code>{save}</code>	when <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a>, select file to write
		    <code>{title}</code>	title for the requester
		    <code>{initdir}</code>	directory to start browsing in
		    <code>{default}</code>	default file name
		An empty string is returned when the "Cancel" button is hit,
		something went wrong, or browsing is not possible.</div>
<div class="old-help-para">							<a name="browsedir()"></a><code class="help-tag-right">browsedir()</code>
browsedir(<code>{title}</code>, <code>{initdir}</code>)
		Put up a directory requester.  This only works when
		"has("browse")" returns <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> (only in some GUI versions).
		On systems where a directory browser is not supported a file
		browser is used.  In that case: select a file in the directory
		to be used.
		The input fields are:
		    <code>{title}</code>	title for the requester
		    <code>{initdir}</code>	directory to start browsing in
		When the "Cancel" button is hit, something went wrong, or
		browsing is not possible, an empty string is returned.</div>
<div class="old-help-para">bufadd(<code>{name}</code>)						<a name="bufadd()"></a><code class="help-tag-right">bufadd()</code>
		Add a buffer to the buffer list with name <code>{name}</code> (must be a
		String).
		If a buffer for file <code>{name}</code> already exists, return that buffer
		number.  Otherwise return the buffer number of the newly
		created buffer.  When <code>{name}</code> is an empty string then a new
		buffer is always created.
		The buffer will not have <a href="/neovim-docs-web/en/options#'buflisted'">'buflisted'</a> set and not be loaded
		yet.  To add some text to the buffer use this:<pre>let bufnr = bufadd('someName')
call bufload(bufnr)
call setbufline(bufnr, 1, ['some', 'text'])</pre></div>
<div class="old-help-para">		Returns 0 on error.
		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>let bufnr = 'somename'-&gt;bufadd()</pre>
bufexists(<code>{buf}</code>)					<a name="bufexists()"></a><code class="help-tag-right">bufexists()</code>
		The result is a Number, which is <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> if a buffer called
		<code>{buf}</code> exists.
		If the <code>{buf}</code> argument is a number, buffer numbers are used.
		Number zero is the alternate buffer for the current window.</div>
<div class="old-help-para">		If the <code>{buf}</code> argument is a string it must match a buffer name
		exactly.  The name can be:
<div class="help-li" style=""> Relative to the current directory.
</div><div class="help-li" style=""> A full path.
</div><div class="help-li" style=""> The name of a buffer with <a href="/neovim-docs-web/en/options#'buftype'">'buftype'</a> set to "nofile".
</div><div class="help-li" style=""> A URL name.
		Unlisted buffers will be found.
		Note that help files are listed by their short name in the
		output of <a href="/neovim-docs-web/en/windows#%3Abuffers">:buffers</a>, but bufexists() requires using their
		long name to be able to find them.
		bufexists() may report a buffer exists, but to use the name
		with a <a href="/neovim-docs-web/en/windows#%3Abuffer">:buffer</a> command you may need to use <a href="/neovim-docs-web/en/builtin#expand()">expand()</a>.  Esp
		for MS-Windows 8.3 names in the form "c:\DOCUME~1"
		Use "bufexists(0)" to test for the existence of an alternate
		file name.
</div></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>let exists = 'somename'-&gt;bufexists()</pre>
buflisted(<code>{buf}</code>)					<a name="buflisted()"></a><code class="help-tag-right">buflisted()</code>
		The result is a Number, which is <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> if a buffer called
		<code>{buf}</code> exists and is listed (has the <a href="/neovim-docs-web/en/options#'buflisted'">'buflisted'</a> option set).
		The <code>{buf}</code> argument is used like with <a href="/neovim-docs-web/en/builtin#bufexists()">bufexists()</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>let listed = 'somename'-&gt;buflisted()</pre>
bufload(<code>{buf}</code>)						<a name="bufload()"></a><code class="help-tag-right">bufload()</code>
		Ensure the buffer <code>{buf}</code> is loaded.  When the buffer name
		refers to an existing file then the file is read.  Otherwise
		the buffer will be empty.  If the buffer was already loaded
		then there is no change.  If the buffer is not related to a
		file the no file is read (e.g., when <a href="/neovim-docs-web/en/options#'buftype'">'buftype'</a> is "nofile").
		If there is an existing swap file for the file of the buffer,
		there will be no dialog, the buffer will be loaded anyway.
		The <code>{buf}</code> argument is used like with <a href="/neovim-docs-web/en/builtin#bufexists()">bufexists()</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>eval 'somename'-&gt;bufload()</pre>
bufloaded(<code>{buf}</code>)					<a name="bufloaded()"></a><code class="help-tag-right">bufloaded()</code>
		The result is a Number, which is <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> if a buffer called
		<code>{buf}</code> exists and is loaded (shown in a window or hidden).
		The <code>{buf}</code> argument is used like with <a href="/neovim-docs-web/en/builtin#bufexists()">bufexists()</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>let loaded = 'somename'-&gt;bufloaded()</pre>
bufname([{buf}])						<a name="bufname()"></a><code class="help-tag-right">bufname()</code>
		The result is the name of a buffer.  Mostly as it is displayed
		by the <code>:ls</code> command, but not using special names such as
		"[No Name]".
		If <code>{buf}</code> is omitted the current buffer is used.
		If <code>{buf}</code> is a Number, that buffer number's name is given.
		Number zero is the alternate buffer for the current window.
		If <code>{buf}</code> is a String, it is used as a <a href="/neovim-docs-web/en/autocmd#file-pattern">file-pattern</a> to match
		with the buffer names.  This is always done like <a href="/neovim-docs-web/en/options#'magic'">'magic'</a> is
		set and <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> is empty.  When there is more than one
		match an empty string is returned.
		"" or "%" can be used for the current buffer, "#" for the
		alternate buffer.
		A full match is preferred, otherwise a match at the start, end
		or middle of the buffer name is accepted.  If you only want a
		full match then put "^" at the start and "$" at the end of the
		pattern.
		Listed buffers are found first.  If there is a single match
		with a listed buffer, that one is returned.  Next unlisted
		buffers are searched for.
		If the <code>{buf}</code> is a String, but you want to use it as a buffer
		number, force it to be a Number by adding zero to it:<pre>:echo bufname("3" + 0)</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>echo bufnr-&gt;bufname()</pre></div>
<div class="old-help-para">		If the buffer doesn't exist, or doesn't have a name, an empty
		string is returned.<pre>bufname("#")                alternate buffer name
bufname(3)                name of buffer 3
bufname("%")                name of current buffer
bufname("file2")        name of buffer where "file2" matches.</pre></div>
<div class="old-help-para">							<a name="bufnr()"></a><code class="help-tag-right">bufnr()</code>
bufnr([{buf} [, <code>{create}</code>]])
		The result is the number of a buffer, as it is displayed by
		the <code>:ls</code> command.  For the use of <code>{buf}</code>, see <a href="/neovim-docs-web/en/builtin#bufname()">bufname()</a>
		above.
		If the buffer doesn't exist, -1 is returned.  Or, if the
		<code>{create}</code> argument is present and TRUE, a new, unlisted,
		buffer is created and its number is returned.
		bufnr("$") is the last buffer:<pre>:let last_buffer = bufnr("$")</pre></div>
<div class="old-help-para">		The result is a Number, which is the highest buffer number
		of existing buffers.  Note that not all buffers with a smaller
		number necessarily exist, because ":bwipeout" may have removed
		them.  Use bufexists() to test for the existence of a buffer.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>echo bufref-&gt;bufnr()</pre>
bufwinid(<code>{buf}</code>)						<a name="bufwinid()"></a><code class="help-tag-right">bufwinid()</code>
		The result is a Number, which is the <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a> of the first
		window associated with buffer <code>{buf}</code>.  For the use of <code>{buf}</code>,
		see <a href="/neovim-docs-web/en/builtin#bufname()">bufname()</a> above.  If buffer <code>{buf}</code> doesn't exist or
		there is no such window, -1 is returned.  Example:<pre>echo "A window containing buffer 1 is " .. (bufwinid(1))</pre></div>
<div class="old-help-para">		Only deals with the current tab page.  See <a href="/neovim-docs-web/en/builtin#win_findbuf()">win_findbuf()</a> for
		finding more.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>FindBuffer()-&gt;bufwinid()</pre>
bufwinnr(<code>{buf}</code>)						<a name="bufwinnr()"></a><code class="help-tag-right">bufwinnr()</code>
		Like <a href="/neovim-docs-web/en/builtin#bufwinid()">bufwinid()</a> but return the window number instead of the
		<a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>.
		If buffer <code>{buf}</code> doesn't exist or there is no such window, -1
		is returned.  Example:<pre>echo "A window containing buffer 1 is " .. (bufwinnr(1))</pre></div>
<div class="old-help-para">		The number can be used with <a href="/neovim-docs-web/en/windows#CTRL-W_w">CTRL-W_w</a> and ":wincmd w"
		<a href="/neovim-docs-web/en/windows#%3Awincmd">:wincmd</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>FindBuffer()-&gt;bufwinnr()</pre>
byte2line(<code>{byte}</code>)					<a name="byte2line()"></a><code class="help-tag-right">byte2line()</code>
		Return the line number that contains the character at byte
		count <code>{byte}</code> in the current buffer.  This includes the
		end-of-line character, depending on the <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> option
		for the current buffer.  The first character has byte count
		one.
		Also see <a href="/neovim-docs-web/en/builtin#line2byte()">line2byte()</a>, <a href="/neovim-docs-web/en/motion#go">go</a> and <a href="/neovim-docs-web/en/motion#%3Agoto">:goto</a>.</div>
<div class="old-help-para">		Returns -1 if the <code>{byte}</code> value is invalid.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetOffset()-&gt;byte2line()</pre>
byteidx(<code>{expr}</code>, <code>{nr}</code>)					<a name="byteidx()"></a><code class="help-tag-right">byteidx()</code>
		Return byte index of the <code>{nr}</code>'<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+builtin.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/builtin.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%09%09GetOffset()-%3Ebyte2line()%0A%0Abyteidx(%7Bexpr%7D%2C%20%7Bnr%7D)%09%09%09%09%09%2Abyteidx()%2A%0A%09%09Return%20byte%20index%20of%20the%20%7Bnr%7D'th%20character%20in%20the%20String%0A%09%09%7Bexpr%7D.%20%20Use%20zero%20for%20the%20first%20character%2C%20it%20then%20returns%0A%09%09zero.%0A%09%09If%20there%20are%20no%20multibyte%20characters%20the%20returned%20value%20is%0D%60%60%60">th</a> character in the String
		<code>{expr}</code>.  Use zero for the first character, it then returns
		zero.
		If there are no multibyte characters the returned value is
		equal to <code>{nr}</code>.
		Composing characters are not counted separately, their byte
		length is added to the preceding base character.  See
		<a href="/neovim-docs-web/en/builtin#byteidxcomp()">byteidxcomp()</a> below for counting composing characters
		separately.
		Example :<pre>echo matchstr(str, ".", byteidx(str, 3))</pre></div>
<div class="old-help-para">		will display the fourth character.  Another way to do the
		same:<pre>let s = strpart(str, byteidx(str, 3))
echo strpart(s, 0, byteidx(s, 1))</pre></div>
<div class="old-help-para">		Also see <a href="/neovim-docs-web/en/builtin#strgetchar()">strgetchar()</a> and <a href="/neovim-docs-web/en/builtin#strcharpart()">strcharpart()</a>.</div>
<div class="old-help-para">		If there are less than <code>{nr}</code> characters -1 is returned.
		If there are exactly <code>{nr}</code> characters the length of the string
		in bytes is returned.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetName()-&gt;byteidx(idx)</pre>
byteidxcomp(<code>{expr}</code>, <code>{nr}</code>)					<a name="byteidxcomp()"></a><code class="help-tag-right">byteidxcomp()</code>
		Like byteidx(), except that a composing character is counted
		as a separate character.  Example:<pre>let s = 'e' .. nr2char(0x301)
echo byteidx(s, 1)
echo byteidxcomp(s, 1)
echo byteidxcomp(s, 2)</pre></div>
<div class="old-help-para">		The first and third echo result in 3 ('e' plus composing
		character is 3 bytes), the second echo results in 1 ('e' is
		one byte).</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetName()-&gt;byteidxcomp(idx)</pre>
call(<code>{func}</code>, <code>{arglist}</code> [, <code>{dict}</code>])			<a name="call()"></a><code class="help-tag-right">call()</code> <a name="E699"></a><code class="help-tag">E699</code>
		Call function <code>{func}</code> with the items in <a href="/neovim-docs-web/en/eval#List">List</a> <code>{arglist}</code> as
		arguments.
		<code>{func}</code> can either be a <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a> or the name of a function.
		a:firstline and a:lastline are set to the cursor line.
		Returns the return value of the called function.
		<code>{dict}</code> is for functions with the "dict" attribute.  It will be
		used to set the local variable "self". <a href="/neovim-docs-web/en/eval#Dictionary-function">Dictionary-function</a></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetFunc()-&gt;call([arg, arg], dict)</pre>
ceil(<code>{expr}</code>)							<a name="ceil()"></a><code class="help-tag-right">ceil()</code>
		Return the smallest integral value greater than or equal to
		<code>{expr}</code> as a <a href="/neovim-docs-web/en/eval#Float">Float</a> (round up).
		<code>{expr}</code> must evaluate to a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Examples:<pre>echo ceil(1.456)</pre></div>
<div class="old-help-para">			2.0<pre>echo ceil(-5.456)</pre></div>
<div class="old-help-para">			-5.0<pre>echo ceil(4.0)</pre></div>
<div class="old-help-para">			4.0</div>
<div class="old-help-para">		Returns 0.0 if <code>{expr}</code> is not a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>Compute()-&gt;ceil()</pre>
changenr()						<a name="changenr()"></a><code class="help-tag-right">changenr()</code>
		Return the number of the most recent change.  This is the same
		number as what is displayed with <a href="/neovim-docs-web/en/undo#%3Aundolist">:undolist</a> and can be used
		with the <a href="/neovim-docs-web/en/undo#%3Aundo">:undo</a> command.
		When a change was made it is the number of that change.  After
		redo it is the number of the redone change.  After undo it is
		one less than the number of the undone change.
		Returns 0 if the undo list is empty.</div>
<div class="old-help-para">chanclose(<code>{id}</code> [, <code>{stream}</code>])				<a name="chanclose()"></a><code class="help-tag-right">chanclose()</code>
		Close a channel or a specific stream associated with it.
		For a job, <code>{stream}</code> can be one of "stdin", "stdout",
		"stderr" or "rpc" (closes stdin/stdout for a job started
		with <code>"rpc":v:true</code>) If <code>{stream}</code> is omitted, all streams
		are closed. If the channel is a pty, this will then close the
		pty master, sending SIGHUP to the job process.
		For a socket, there is only one stream, and <code>{stream}</code> should be
		omitted.</div>
<div class="old-help-para">chansend(<code>{id}</code>, <code>{data}</code>)					<a name="chansend()"></a><code class="help-tag-right">chansend()</code>
		Send data to channel <code>{id}</code>. For a job, it writes it to the
		stdin of the process. For the stdio channel <a href="/neovim-docs-web/en/channel#channel-stdio">channel-stdio</a>,
		it writes to Nvim's stdout.  Returns the number of bytes
		written if the write succeeded, 0 otherwise.
		See <a href="/neovim-docs-web/en/channel#channel-bytes">channel-bytes</a> for more information.</div>
<div class="old-help-para">		<code>{data}</code> may be a string, string convertible, <a href="/neovim-docs-web/en/eval#Blob">Blob</a>, or a list.
		If <code>{data}</code> is a list, the items will be joined by newlines; any
		newlines in an item will be sent as NUL. To send a final
		newline, include a final empty string. Example:<pre>:call chansend(id, ["abc", "123\n456", ""])</pre></div>
<div class="old-help-para"> 		will send "abc&lt;NL&gt;123&lt;NUL&gt;456&lt;NL&gt;".</div>
<div class="old-help-para">		chansend() writes raw data, not RPC messages.  If the channel
		was created with <code>"rpc":v:true</code> then the channel expects RPC
		messages, use <a href="/neovim-docs-web/en/builtin#rpcnotify()">rpcnotify()</a> and <a href="/neovim-docs-web/en/builtin#rpcrequest()">rpcrequest()</a> instead.</div>
<div class="old-help-para">char2nr(<code>{string}</code> [, <code>{utf8}</code>])					<a name="char2nr()"></a><code class="help-tag-right">char2nr()</code>
		Return Number value of the first char in <code>{string}</code>.
		Examples:<pre>char2nr(" ")                returns 32
char2nr("ABC")                returns 65
char2nr("??")                returns 225
char2nr("??"[0])                returns 195
char2nr("\&lt;M-x&gt;")        returns 128</pre></div>
<div class="old-help-para">		Non-ASCII characters are always treated as UTF-8 characters.
		<code>{utf8}</code> is ignored, it exists only for backwards-compatibility.
		A combining character is a separate character.
		<a href="/neovim-docs-web/en/builtin#nr2char()">nr2char()</a> does the opposite.</div>
<div class="old-help-para">		Returns 0 if <code>{string}</code> is not a <a href="/neovim-docs-web/en/eval#String">String</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetChar()-&gt;char2nr()</pre>
charclass(<code>{string}</code>)					<a name="charclass()"></a><code class="help-tag-right">charclass()</code>
		Return the character class of the first character in <code>{string}</code>.
		The character class is one of:
			0	blank
			1	punctuation
			2	word character
			3	emoji
			other	specific Unicode class
		The class is used in patterns and word motions.
		Returns 0 if <code>{string}</code> is not a <a href="/neovim-docs-web/en/eval#String">String</a>.</div>
<div class="old-help-para">charcol(<code>{expr}</code> [, <code>{winid}</code>])				<a name="charcol()"></a><code class="help-tag-right">charcol()</code>
		Same as <a href="/neovim-docs-web/en/builtin#col()">col()</a> but returns the character index of the column
		position given with <code>{expr}</code> instead of the byte position.</div>
<div class="old-help-para">		Example:
		With the cursor on '???' in line 5 with text "????????????":<pre>charcol('.')                returns 3
col('.')                returns 7</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetPos()-&gt;col()</pre></div>
<div class="old-help-para">							<a name="charidx()"></a><code class="help-tag-right">charidx()</code>
charidx(<code>{string}</code>, <code>{idx}</code> [, <code>{countcc}</code>])
		Return the character index of the byte at <code>{idx}</code> in <code>{string}</code>.
		The index of the first character is zero.
		If there are no multibyte characters the returned value is
		equal to <code>{idx}</code>.
		When <code>{countcc}</code> is omitted or <a href="/neovim-docs-web/en/eval#FALSE">FALSE</a>, then composing characters
		are not counted separately, their byte length is
		added to the preceding base character.
		When <code>{countcc}</code> is <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a>, then composing characters are
		counted as separate characters.
		Returns -1 if the arguments are invalid or if <code>{idx}</code> is greater
		than the index of the last byte in <code>{string}</code>.  An error is
		given if the first argument is not a string, the second
		argument is not a number or when the third argument is present
		and is not zero or one.
		See <a href="/neovim-docs-web/en/builtin#byteidx()">byteidx()</a> and <a href="/neovim-docs-web/en/builtin#byteidxcomp()">byteidxcomp()</a> for getting the byte index
		from the character index.
		Examples:<pre>echo charidx('a??b??c??', 3)                returns 1
echo charidx('a??b??c??', 6, 1)        returns 4
echo charidx('a??b??c??', 16)                returns -1</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetName()-&gt;charidx(idx)</pre>
chdir(<code>{dir}</code>)						<a name="chdir()"></a><code class="help-tag-right">chdir()</code>
		Change the current working directory to <code>{dir}</code>.  The scope of
		the directory change depends on the directory of the current
		window:
<div class="help-li" style=""> If the current window has a window-local directory
			  (<a href="/neovim-docs-web/en/editing#%3Alcd">:lcd</a>), then changes the window local directory.
</div><div class="help-li" style=""> Otherwise, if the current tabpage has a local
			  directory (<a href="/neovim-docs-web/en/editing#%3Atcd">:tcd</a>) then changes the tabpage local
			  directory.
</div><div class="help-li" style=""> Otherwise, changes the global directory.
		<code>{dir}</code> must be a String.
		If successful, returns the previous working directory.  Pass
		this to another chdir() to restore the directory.
		On failure, returns an empty string.
</div></div>
<div class="old-help-para">		Example:<pre>let save_dir = chdir(newdir)
if save_dir != ""
   " ... do some work
   call chdir(save_dir)
endif</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetDir()-&gt;chdir()</pre></div>
<div class="old-help-para">cindent(<code>{lnum}</code>)						<a name="cindent()"></a><code class="help-tag-right">cindent()</code>
		Get the amount of indent for line <code>{lnum}</code> according the C
		indenting rules, as with <a href="/neovim-docs-web/en/options#'cindent'">'cindent'</a>.
		The indent is counted in spaces, the value of <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> is
		relevant.  <code>{lnum}</code> is used just like in <a href="/neovim-docs-web/en/builtin#getline()">getline()</a>.
		When <code>{lnum}</code> is invalid -1 is returned.
		See <a href="/neovim-docs-web/en/indent#C-indenting">C-indenting</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetLnum()-&gt;cindent()</pre>
clearmatches([{win}])					<a name="clearmatches()"></a><code class="help-tag-right">clearmatches()</code>
		Clears all matches previously defined for the current window
		by <a href="/neovim-docs-web/en/builtin#matchadd()">matchadd()</a> and the <a href="/neovim-docs-web/en/pattern#%3Amatch">:match</a> commands.
		If <code>{win}</code> is specified, use the window with this number or
		window ID instead of the current window.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetWin()-&gt;clearmatches()</pre></div>
<div class="old-help-para">col(<code>{expr}</code> [, <code>{winid}</code>)					<a name="col()"></a><code class="help-tag-right">col()</code>
		The result is a Number, which is the byte index of the column
		position given with <code>{expr}</code>.  The accepted positions are:
		    .	    the cursor position
		    $	    the end of the cursor line (the result is the
			    number of bytes in the cursor line plus one)
		    'x	    position of mark x (if the mark is not set, 0 is
			    returned)
		    v       In Visual mode: the start of the Visual area (the
			    cursor is the end).  When not in Visual mode
			    returns the cursor position.  Differs from <a href="/neovim-docs-web/en/motion#'%3C">'&lt;</a> in
			    that it's updated right away.
		Additionally <code>{expr}</code> can be [lnum, col]: a <a href="/neovim-docs-web/en/eval#List">List</a> with the line
		and column number. Most useful when the column is "$", to get
		the last column of a specific line.  When "lnum" or "col" is
		out of range then col() returns zero.
		With the optional <code>{winid}</code> argument the values are obtained for
		that window instead of the current window.
		To get the line number use <a href="/neovim-docs-web/en/builtin#line()">line()</a>.  To get both use
		<a href="/neovim-docs-web/en/builtin#getpos()">getpos()</a>.
		For the screen column position use <a href="/neovim-docs-web/en/builtin#virtcol()">virtcol()</a>.  For the
		character position use <a href="/neovim-docs-web/en/builtin#charcol()">charcol()</a>.
		Note that only marks in the current file can be used.
		Examples:<pre>col(".")                column of cursor
col("$")                length of cursor line plus one
col("'t")                column of mark t
col("'" .. markname)        column of mark markname</pre></div>
<div class="old-help-para">		The first column is 1.  Returns 0 if <code>{expr}</code> is invalid or when
		the window with ID <code>{winid}</code> is not found.
		For an uppercase mark the column may actually be in another
		buffer.
		For the cursor position, when <a href="/neovim-docs-web/en/options#'virtualedit'">'virtualedit'</a> is active, the
		column is one higher if the cursor is after the end of the
		line.  Also, when using a <code>&lt;Cmd&gt;</code> mapping the cursor isn't
		moved, this can be used to obtain the column in Insert mode:<pre>:imap &lt;F2&gt; &lt;Cmd&gt;echo col(".").."\n"&lt;CR&gt;</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetPos()-&gt;col()</pre></div>
<div class="old-help-para">complete(<code>{startcol}</code>, <code>{matches}</code>)			<a name="complete()"></a><code class="help-tag-right">complete()</code> <a name="E785"></a><code class="help-tag">E785</code>
		Set the matches for Insert mode completion.
		Can only be used in Insert mode.  You need to use a mapping
		with <code>CTRL-R</code> = (see <a href="/neovim-docs-web/en/insert#i_CTRL-R">i_CTRL-R</a>).  It does not work after <code>CTRL-O</code>
		or with an expression mapping.
		<code>{startcol}</code> is the byte offset in the line where the completed
		text start.  The text up to the cursor is the original text
		that will be replaced by the matches.  Use col('.') for an
		empty string.  "col('.') - 1" will replace one character by a
		match.
		<code>{matches}</code> must be a <a href="/neovim-docs-web/en/eval#List">List</a>.  Each <a href="/neovim-docs-web/en/eval#List">List</a> item is one match.
		See <a href="/neovim-docs-web/en/insert#complete-items">complete-items</a> for the kind of items that are possible.
		"longest" in <a href="/neovim-docs-web/en/options#'completeopt'">'completeopt'</a> is ignored.
		Note that the after calling this function you need to avoid
		inserting anything that would cause completion to stop.
		The match can be selected with <code>CTRL-N</code> and <code>CTRL-P</code> as usual with
		Insert mode completion.  The popup menu will appear if
		specified, see <a href="/neovim-docs-web/en/insert#ins-completion-menu">ins-completion-menu</a>.
		Example:<pre>inoremap &lt;F5&gt; &lt;C-R&gt;=ListMonths()&lt;CR&gt;

func! ListMonths()
  call complete(col('.'), ['January', 'February', 'March',
        \ 'April', 'May', 'June', 'July', 'August', 'September',
        \ 'October', 'November', 'December'])
  return ''
endfunc</pre></div>
<div class="old-help-para">		This isn't very useful, but it shows how it works.  Note that
		an empty string is returned to avoid a zero being inserted.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>, the base is passed as the
		second argument:<pre>GetMatches()-&gt;complete(col('.'))</pre>
complete_add(<code>{expr}</code>)				<a name="complete_add()"></a><code class="help-tag-right">complete_add()</code>
		Add <code>{expr}</code> to the list of matches.  Only to be used by the
		function specified with the <a href="/neovim-docs-web/en/options#'completefunc'">'completefunc'</a> option.
		Returns 0 for failure (empty string or out of memory),
		1 when the match was added, 2 when the match was already in
		the list.
		See <a href="/neovim-docs-web/en/insert#complete-functions">complete-functions</a> for an explanation of <code>{expr}</code>.  It is
		the same as one item in the list that <a href="/neovim-docs-web/en/options#'omnifunc'">'omnifunc'</a> would return.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetMoreMatches()-&gt;complete_add()</pre>
complete_check()				<a name="complete_check()"></a><code class="help-tag-right">complete_check()</code>
		Check for a key typed while looking for completion matches.
		This is to be used when looking for matches takes some time.
		Returns <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> when searching for matches is to be aborted,
		zero otherwise.
		Only to be used by the function specified with the
		<a href="/neovim-docs-web/en/options#'completefunc'">'completefunc'</a> option.</div>
<div class="old-help-para">complete_info([{what}])				<a name="complete_info()"></a><code class="help-tag-right">complete_info()</code>
		Returns a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> with information about Insert mode
		completion.  See <a href="/neovim-docs-web/en/insert#ins-completion">ins-completion</a>.
		The items are:
		   mode		Current completion mode name string.
				See <a href="/neovim-docs-web/en/builtin#complete_info_mode">complete_info_mode</a> for the values.
		   pum_visible	<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> if popup menu is visible.
				See <a href="/neovim-docs-web/en/builtin#pumvisible()">pumvisible()</a>.
		   items	List of completion matches.  Each item is a
				dictionary containing the entries "word",
				"abbr", "menu", "kind", "info" and "user_data".
				See <a href="/neovim-docs-web/en/insert#complete-items">complete-items</a>.
		   selected	Selected item index.  First index is zero.
				Index is -1 if no item is selected (showing
				typed text only, or the last completion after
				no item is selected when using the <code>&lt;Up&gt;</code> or
				<code>&lt;Down&gt;</code> keys)
		   inserted	Inserted string. [NOT IMPLEMENTED YET]</div>
<div class="old-help-para">							<a name="complete_info_mode"></a><code class="help-tag-right">complete_info_mode</code>
		mode values are:
		   ""		     Not in completion mode
		   "keyword"	     Keyword completion <a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-N">i_CTRL-X_CTRL-N</a>
		   "ctrl_x"	     Just pressed <code>CTRL-X</code> <a href="/neovim-docs-web/en/insert#i_CTRL-X">i_CTRL-X</a>
		   "scroll"	     Scrolling with <a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-E">i_CTRL-X_CTRL-E</a> or
				     <a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-Y">i_CTRL-X_CTRL-Y</a>
		   "whole_line"	     Whole lines <a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-L">i_CTRL-X_CTRL-L</a>
		   "files"	     File names <a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-F">i_CTRL-X_CTRL-F</a>
		   "tags"	     Tags <a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-%5D">i_CTRL-X_CTRL-]</a>
		   "path_defines"    Definition completion <a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-D">i_CTRL-X_CTRL-D</a>
		   "path_patterns"   Include completion <a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-I">i_CTRL-X_CTRL-I</a>
		   "dictionary"	     Dictionary <a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-K">i_CTRL-X_CTRL-K</a>
		   "thesaurus"	     Thesaurus <a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-T">i_CTRL-X_CTRL-T</a>
		   "cmdline"	     Vim Command line <a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-V">i_CTRL-X_CTRL-V</a>
		   "function"	     User defined completion <a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-U">i_CTRL-X_CTRL-U</a>
		   "omni"	     Omni completion <a href="/neovim-docs-web/en/insert#i_CTRL-X_CTRL-O">i_CTRL-X_CTRL-O</a>
		   "spell"	     Spelling suggestions <a href="/neovim-docs-web/en/insert#i_CTRL-X_s">i_CTRL-X_s</a>
		   "eval"	     <a href="/neovim-docs-web/en/builtin#complete()">complete()</a> completion
		   "unknown"	     Other internal modes</div>
<div class="old-help-para">		If the optional <code>{what}</code> list argument is supplied, then only
		the items listed in <code>{what}</code> are returned.  Unsupported items in
		<code>{what}</code> are silently ignored.</div>
<div class="old-help-para">		To get the position and size of the popup menu, see
		<a href="/neovim-docs-web/en/builtin#pum_getpos()">pum_getpos()</a>. It's also available in <a href="/neovim-docs-web/en/eval#v%3Aevent">v:event</a> during the
		<a href="/neovim-docs-web/en/autocmd#CompleteChanged">CompleteChanged</a> event.</div>
<div class="old-help-para">		Returns an empty <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> on error.</div>
<div class="old-help-para">		Examples:<pre>" Get all items
call complete_info()
" Get only 'mode'
call complete_info(['mode'])
" Get only 'mode' and 'pum_visible'
call complete_info(['mode', 'pum_visible'])</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetItems()-&gt;complete_info()</pre></div>
<div class="old-help-para">						<a name="confirm()"></a><code class="help-tag-right">confirm()</code>
confirm(<code>{msg}</code> [, <code>{choices}</code> [, <code>{default}</code> [, <code>{type}</code>]]])
		confirm() offers the user a dialog, from which a choice can be
		made.  It returns the number of the choice.  For the first
		choice this is 1.</div>
<div class="old-help-para">		<code>{msg}</code> is displayed in a dialog with <code>{choices}</code> as the
		alternatives.  When <code>{choices}</code> is missing or empty, "&amp;OK" is
		used (and translated).
		<code>{msg}</code> is a String, use '\n' to include a newline.  Only on
		some systems the string is wrapped when it doesn't fit.</div>
<div class="old-help-para">		<code>{choices}</code> is a String, with the individual choices separated
		by '\n', e.g.<pre>confirm("Save changes?", "&amp;Yes\n&amp;No\n&amp;Cancel")</pre></div>
<div class="old-help-para">		The letter after the '&amp;' is the shortcut key for that choice.
		Thus you can type 'c' to select "Cancel".  The shortcut does
		not need to be the first letter:<pre>confirm("file has been modified", "&amp;Save\nSave &amp;All")</pre></div>
<div class="old-help-para">		For the console, the first letter of each choice is used as
		the default shortcut key.  Case is ignored.</div>
<div class="old-help-para">		The optional <code>{type}</code> String argument gives the type of dialog.
		It can be one of these values: "Error", "Question", "Info",
		"Warning" or "Generic".  Only the first character is relevant.
		When <code>{type}</code> is omitted, "Generic" is used.</div>
<div class="old-help-para">		The optional <code>{type}</code> argument gives the type of dialog.  This
		is only used for the icon of the Win32 GUI.  It can be one of
		these values: "Error", "Question", "Info", "Warning" or
		"Generic".  Only the first character is relevant.
		When <code>{type}</code> is omitted, "Generic" is used.</div>
<div class="old-help-para">		If the user aborts the dialog by pressing <code>&lt;Esc&gt;</code>, <code>CTRL-C</code>,
		or another valid interrupt key, confirm() returns 0.</div>
<div class="old-help-para">		An example:<pre>let choice = confirm("What do you want?",
                     \ "&amp;Apples\n&amp;Oranges\n&amp;Bananas", 2)
if choice == 0
     echo "make up your mind!"
elseif choice == 3
     echo "tasteful"
else
     echo "I prefer bananas myself."
endif</pre></div>
<div class="old-help-para">		In a GUI dialog, buttons are used.  The layout of the buttons
		depends on the 'v' flag in <a href="/neovim-docs-web/en/options#'guioptions'">'guioptions'</a>.  If it is included,
		the buttons are always put vertically.  Otherwise,  confirm()
		tries to put the buttons in one horizontal line.  If they
		don't fit, a vertical layout is used anyway.  For some systems
		the horizontal layout is always used.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>in:<pre>BuildMessage()-&gt;confirm("&amp;Yes\n&amp;No")</pre></div>
<div class="old-help-para">							<a name="copy()"></a><code class="help-tag-right">copy()</code>
copy(<code>{expr}</code>)	Make a copy of <code>{expr}</code>.  For Numbers and Strings this isn't
		different from using <code>{expr}</code> directly.
		When <code>{expr}</code> is a <a href="/neovim-docs-web/en/eval#List">List</a> a shallow copy is created.  This means
		that the original <a href="/neovim-docs-web/en/eval#List">List</a> can be changed without changing the
		copy, and vice versa.  But the items are identical, thus
		changing an item changes the contents of both <a href="/neovim-docs-web/en/eval#Lists">Lists</a>.
		A <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> is copied in a similar way as a <a href="/neovim-docs-web/en/eval#List">List</a>.
		Also see <a href="/neovim-docs-web/en/builtin#deepcopy()">deepcopy()</a>.
		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>mylist-&gt;copy()</pre>
cos(<code>{expr}</code>)						<a name="cos()"></a><code class="help-tag-right">cos()</code>
		Return the cosine of <code>{expr}</code>, measured in radians, as a <a href="/neovim-docs-web/en/eval#Float">Float</a>.
		<code>{expr}</code> must evaluate to a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Returns 0.0 if <code>{expr}</code> is not a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Examples:<pre>:echo cos(100)</pre></div>
<div class="old-help-para">			0.862319<pre>:echo cos(-4.01)</pre></div>
<div class="old-help-para">			-0.646043</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>Compute()-&gt;cos()</pre>
cosh(<code>{expr}</code>)						<a name="cosh()"></a><code class="help-tag-right">cosh()</code>
		Return the hyperbolic cosine of <code>{expr}</code> as a <a href="/neovim-docs-web/en/eval#Float">Float</a> in the range
		[1, inf].
		<code>{expr}</code> must evaluate to a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Returns 0.0 if <code>{expr}</code> is not a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Examples:<pre>:echo cosh(0.5)</pre></div>
<div class="old-help-para">			1.127626<pre>:echo cosh(-0.5)</pre></div>
<div class="old-help-para">			-1.127626</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>Compute()-&gt;cosh()</pre>
count(<code>{comp}</code>, <code>{expr}</code> [, <code>{ic}</code> [, <code>{start}</code>]])			<a name="count()"></a><code class="help-tag-right">count()</code>
		Return the number of times an item with value <code>{expr}</code> appears
		in <a href="/neovim-docs-web/en/eval#String">String</a>, <a href="/neovim-docs-web/en/eval#List">List</a> or <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> <code>{comp}</code>.</div>
<div class="old-help-para">		If <code>{start}</code> is given then start with the item with this index.
		<code>{start}</code> can only be used with a <a href="/neovim-docs-web/en/eval#List">List</a>.</div>
<div class="old-help-para">		When <code>{ic}</code> is given and it's <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> then case is ignored.</div>
<div class="old-help-para">		When <code>{comp}</code> is a string then the number of not overlapping
		occurrences of <code>{expr}</code> is returned. Zero is returned when
		<code>{expr}</code> is an empty string.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>mylist-&gt;count(val)</pre></div>
<div class="old-help-para">ctxget([{index}])					<a name="ctxget()"></a><code class="help-tag-right">ctxget()</code>
		Returns a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> representing the <a href="/neovim-docs-web/en/repeat#context">context</a> at <code>{index}</code>
		from the top of the <a href="/neovim-docs-web/en/repeat#context-stack">context-stack</a> (see <a href="/neovim-docs-web/en/repeat#context-dict">context-dict</a>).
		If <code>{index}</code> is not given, it is assumed to be 0 (i.e.: top).</div>
<div class="old-help-para">ctxpop()						<a name="ctxpop()"></a><code class="help-tag-right">ctxpop()</code>
		Pops and restores the <a href="/neovim-docs-web/en/repeat#context">context</a> at the top of the
		<a href="/neovim-docs-web/en/repeat#context-stack">context-stack</a>.</div>
<div class="old-help-para">ctxpush([{types}])					<a name="ctxpush()"></a><code class="help-tag-right">ctxpush()</code>
		Pushes the current editor state (<a href="/neovim-docs-web/en/repeat#context">context</a>) on the
		<a href="/neovim-docs-web/en/repeat#context-stack">context-stack</a>.
		If <code>{types}</code> is given and is a <a href="/neovim-docs-web/en/eval#List">List</a> of <a href="/neovim-docs-web/en/eval#String">String</a>s, it specifies
		which <a href="/neovim-docs-web/en/repeat#context-types">context-types</a> to include in the pushed context.
		Otherwise, all context types are included.</div>
<div class="old-help-para">ctxset(<code>{context}</code> [, <code>{index}</code>])				<a name="ctxset()"></a><code class="help-tag-right">ctxset()</code>
		Sets the <a href="/neovim-docs-web/en/repeat#context">context</a> at <code>{index}</code> from the top of the
		<a href="/neovim-docs-web/en/repeat#context-stack">context-stack</a> to that represented by <code>{context}</code>.
		<code>{context}</code> is a Dictionary with context data (<a href="/neovim-docs-web/en/repeat#context-dict">context-dict</a>).
		If <code>{index}</code> is not given, it is assumed to be 0 (i.e.: top).</div>
<div class="old-help-para">ctxsize()						<a name="ctxsize()"></a><code class="help-tag-right">ctxsize()</code>
		Returns the size of the <a href="/neovim-docs-web/en/repeat#context-stack">context-stack</a>.</div>
<div class="old-help-para">cursor(<code>{lnum}</code>, <code>{col}</code> [, <code>{off}</code>])				<a name="cursor()"></a><code class="help-tag-right">cursor()</code>
cursor(<code>{list}</code>)
		Positions the cursor at the column (byte count) <code>{col}</code> in the
		line <code>{lnum}</code>.  The first column is one.</div>
<div class="old-help-para">		When there is one argument <code>{list}</code> this is used as a <a href="/neovim-docs-web/en/eval#List">List</a>
		with two, three or four item:
			[{lnum}, <code>{col}</code>]
			[{lnum}, <code>{col}</code>, <code>{off}</code>]
			[{lnum}, <code>{col}</code>, <code>{off}</code>, <code>{curswant}</code>]
		This is like the return value of <a href="/neovim-docs-web/en/builtin#getpos()">getpos()</a> or <a href="/neovim-docs-web/en/builtin#getcurpos()">getcurpos()</a>,
		but without the first item.</div>
<div class="old-help-para">		To position the cursor using the character count, use
		<a href="/neovim-docs-web/en/builtin#setcursorcharpos()">setcursorcharpos()</a>.</div>
<div class="old-help-para">		Does not change the jumplist.
		<code>{lnum}</code> is used like with <a href="/neovim-docs-web/en/builtin#getline()">getline()</a>, except that if <code>{lnum}</code> is
		zero, the cursor will stay in the current line.
		If <code>{lnum}</code> is greater than the number of lines in the buffer,
		the cursor will be positioned at the last line in the buffer.
		If <code>{col}</code> is greater than the number of bytes in the line,
		the cursor will be positioned at the last character in the
		line.
		If <code>{col}</code> is zero, the cursor will stay in the current column.
		If <code>{curswant}</code> is given it is used to set the preferred column
		for vertical movement.  Otherwise <code>{col}</code> is used.</div>
<div class="old-help-para">		When <a href="/neovim-docs-web/en/options#'virtualedit'">'virtualedit'</a> is used <code>{off}</code> specifies the offset in
		screen columns from the start of the character.  E.g., a
		position within a <code>&lt;Tab&gt;</code> or after the last character.
		Returns 0 when the position could be set, -1 otherwise.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetCursorPos()-&gt;cursor()</pre>
debugbreak(<code>{pid}</code>)					<a name="debugbreak()"></a><code class="help-tag-right">debugbreak()</code>
		Specifically used to interrupt a program being debugged.  It
		will cause process <code>{pid}</code> to get a SIGTRAP.  Behavior for other
		processes is undefined. See <a href="/neovim-docs-web/en/nvim_terminal_emulator#terminal-debug">terminal-debug</a>.
		<code>{Sends a SIGINT to a process <a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+builtin.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/builtin.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%09Specifically%20used%20to%20interrupt%20a%20program%20being%20debugged.%20%20It%0A%09%09will%20cause%20process%20%7Bpid%7D%20to%20get%20a%20SIGTRAP.%20%20Behavior%20for%20other%0A%09%09processes%20is%20undefined.%20See%20%7Cterminal-debug%7C.%0A%09%09%7BSends%20a%20SIGINT%20to%20a%20process%20%7Bpid%7D%20other%20than%20MS-Windows%7D%0A%0A%09%09Returns%20%7CTRUE%7C%20if%20successfully%20interrupted%20the%20program.%0A%09%09Otherwise%20returns%20%7CFALSE%7C.%0D%60%60%60">{pid</a>}</code> other than MS-Windows}</div>
<div class="old-help-para">		Returns <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> if successfully interrupted the program.
		Otherwise returns <a href="/neovim-docs-web/en/eval#FALSE">FALSE</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetPid()-&gt;debugbreak()</pre>
deepcopy(<code>{expr}</code> [, <code>{noref}</code>])				<a name="deepcopy()"></a><code class="help-tag-right">deepcopy()</code> <a name="E698"></a><code class="help-tag">E698</code>
		Make a copy of <code>{expr}</code>.  For Numbers and Strings this isn't
		different from using <code>{expr}</code> directly.
		When <code>{expr}</code> is a <a href="/neovim-docs-web/en/eval#List">List</a> a full copy is created.  This means
		that the original <a href="/neovim-docs-web/en/eval#List">List</a> can be changed without changing the
		copy, and vice versa.  When an item is a <a href="/neovim-docs-web/en/eval#List">List</a>, a copy for it
		is made, recursively.  Thus changing an item in the copy does
		not change the contents of the original <a href="/neovim-docs-web/en/eval#List">List</a>.</div>
<div class="old-help-para">		When <code>{noref}</code> is omitted or zero a contained <a href="/neovim-docs-web/en/eval#List">List</a> or
		<a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> is only copied once.  All references point to
		this single copy.  With <code>{noref}</code> set to 1 every occurrence of a
		<a href="/neovim-docs-web/en/eval#List">List</a> or <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> results in a new copy.  This also means
		that a cyclic reference causes deepcopy() to fail.
								<a name="E724"></a><code class="help-tag-right">E724</code>
		Nesting is possible up to 100 levels.  When there is an item
		that refers back to a higher level making a deep copy with
		<code>{noref}</code> set to 1 will fail.
		Also see <a href="/neovim-docs-web/en/builtin#copy()">copy()</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetObject()-&gt;deepcopy()</pre>
delete(<code>{fname}</code> [, <code>{flags}</code>])				<a name="delete()"></a><code class="help-tag-right">delete()</code>
		Without <code>{flags}</code> or with <code>{flags}</code> empty: Deletes the file by the
		name <code>{fname}</code>.</div>
<div class="old-help-para">		This also works when <code>{fname}</code> is a symbolic link.  The symbolic
		link itself is deleted, not what it points to.</div>
<div class="old-help-para">		When <code>{flags}</code> is "d": Deletes the directory by the name
		<code>{fname}</code>.  This fails when directory <code>{fname}</code> is not empty.</div>
<div class="old-help-para">		When <code>{flags}</code> is "rf": Deletes the directory by the name
		<code>{fname}</code> and everything in it, recursively.  BE CAREFUL!
		Note: on MS-Windows it is not possible to delete a directory
		that is being used.</div>
<div class="old-help-para">		The result is a Number, which is 0/false if the delete
		operation was successful and -1/true when the deletion failed
		or partly failed.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetName()-&gt;delete()</pre>
deletebufline(<code>{buf}</code>, <code>{first}</code> [, <code>{last}</code>])		<a name="deletebufline()"></a><code class="help-tag-right">deletebufline()</code>
		Delete lines <code>{first}</code> to <code>{last}</code> (inclusive) from buffer <code>{buf}</code>.
		If <code>{last}</code> is omitted then delete line <code>{first}</code> only.
		On success 0 is returned, on failure 1 is returned.</div>
<div class="old-help-para">		This function works only for loaded buffers. First call
		<a href="/neovim-docs-web/en/builtin#bufload()">bufload()</a> if needed.</div>
<div class="old-help-para">		For the use of <code>{buf}</code>, see <a href="/neovim-docs-web/en/builtin#bufname()">bufname()</a> above.</div>
<div class="old-help-para">		<code>{first}</code> and <code>{last}</code> are used like with <a href="/neovim-docs-web/en/builtin#getline()">getline()</a>. Note that
		when using <a href="/neovim-docs-web/en/builtin#line()">line()</a> this refers to the current buffer. Use "$"
		to refer to the last line in buffer <code>{buf}</code>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetBuffer()-&gt;deletebufline(1)</pre></div>
<div class="old-help-para">dictwatcheradd(<code>{dict}</code>, <code>{pattern}</code>, <code>{callback}</code>)		      <a name="dictwatcheradd()"></a><code class="help-tag-right">dictwatcheradd()</code>
		Adds a watcher to a dictionary. A dictionary watcher is
		identified by three components:</div>
<div class="old-help-para"><div class="help-li" style=""> A dictionary(<code>{dict}</code>);
</div><div class="help-li" style=""> A key pattern(<code>{pattern}</code>).
</div><div class="help-li" style=""> A function(<code>{callback}</code>).
</div></div>
<div class="old-help-para">		After this is called, every change on <code>{dict}</code> and on keys
		matching <code>{pattern}</code> will result in <code>{callback}</code> being invoked.</div>
<div class="old-help-para">		For example, to watch all global variables:<pre>silent! call dictwatcherdel(g:, '*', 'OnDictChanged')
function! OnDictChanged(d,k,z)
  echomsg string(a:k) string(a:z)
endfunction
call dictwatcheradd(g:, '*', 'OnDictChanged')</pre></div>
<div class="old-help-para">		For now <code>{pattern}</code> only accepts very simple patterns that can
		contain a '' at the end of the string, in which case it will
		match every key that begins with the substring before the ''.<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+builtin.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/builtin.html%0D%0DContext%3A%0D%0D%60%60%60%0D%3C%0A%09%09For%20now%20%7Bpattern%7D%20only%20accepts%20very%20simple%20patterns%20that%20can%0A%09%09contain%20a%20'%2A'%20at%20the%20end%20of%20the%20string%2C%20in%20which%20case%20it%20will%0A%09%09match%20every%20key%20that%20begins%20with%20the%20substring%20before%20the%20'%2A'.%0A%09%09That%20means%20if%20'%2A'%20is%20not%20the%20last%20character%20of%20%7Bpattern%7D%2C%20only%0A%09%09keys%20that%20are%20exactly%20equal%20as%20%7Bpattern%7D%20will%20be%20matched.%0A%0A%09%09The%20%7Bcallback%7D%20receives%20three%20arguments%3A%0D%60%60%60">That means if '</a>' is not the last character of <code>{pattern}</code>, only
		keys that are exactly equal as <code>{pattern}</code> will be matched.</div>
<div class="old-help-para">		The <code>{callback}</code> receives three arguments:</div>
<div class="old-help-para"><div class="help-li" style=""> The dictionary being watched.
</div><div class="help-li" style=""> The key which changed.
</div><div class="help-li" style=""> A dictionary containing the new and old values for the key.
</div></div>
<div class="old-help-para">		The type of change can be determined by examining the keys
		present on the third argument:</div>
<div class="old-help-para"><div class="help-li" style=""> If contains both <code>old</code> and <code>new</code>, the key was updated.
</div><div class="help-li" style=""> If it contains only <code>new</code>, the key was added.
</div><div class="help-li" style=""> If it contains only <code>old</code>, the key was deleted.
</div></div>
<div class="old-help-para">		This function can be used by plugins to implement options with
		validation and parsing logic.</div>
<div class="old-help-para">dictwatcherdel(<code>{dict}</code>, <code>{pattern}</code>, <code>{callback}</code>)		      <a name="dictwatcherdel()"></a><code class="help-tag-right">dictwatcherdel()</code>
		Removes a watcher added  with <a href="/neovim-docs-web/en/builtin#dictwatcheradd()">dictwatcheradd()</a>. All three
		arguments must match the ones passed to <a href="/neovim-docs-web/en/builtin#dictwatcheradd()">dictwatcheradd()</a> in
		order for the watcher to be successfully deleted.</div>
<div class="old-help-para">							<a name="did_filetype()"></a><code class="help-tag-right">did_filetype()</code>
did_filetype()	Returns <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> when autocommands are being executed and the
		FileType event has been triggered at least once.  Can be used
		to avoid triggering the FileType event again in the scripts
		that detect the file type. <a href="/neovim-docs-web/en/autocmd#FileType">FileType</a>
		Returns <a href="/neovim-docs-web/en/eval#FALSE">FALSE</a> when <code>:setf FALLBACK</code> was used.
		When editing another file, the counter is reset, thus this
		really checks if the FileType event has been triggered for the
		current buffer.  This allows an autocommand that starts
		editing another buffer to set <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a> and load a syntax
		file.</div>
<div class="old-help-para">diff_filler(<code>{lnum}</code>)					<a name="diff_filler()"></a><code class="help-tag-right">diff_filler()</code>
		Returns the number of filler lines above line <code>{lnum}</code>.
		These are the lines that were inserted at this point in
		another diff'ed window.  These filler lines are shown in the
		display but don't exist in the buffer.
		<code>{lnum}</code> is used like with <a href="/neovim-docs-web/en/builtin#getline()">getline()</a>.  Thus "." is the current
		line, "'m" mark m, etc.
		Returns 0 if the current window is not in diff mode.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetLnum()-&gt;diff_filler()</pre>
diff_hlID(<code>{lnum}</code>, <code>{col}</code>)				<a name="diff_hlID()"></a><code class="help-tag-right">diff_hlID()</code>
		Returns the highlight ID for diff mode at line <code>{lnum}</code> column
		<code>{col}</code> (byte index).  When the current line does not have a
		diff change zero is returned.
		<code>{lnum}</code> is used like with <a href="/neovim-docs-web/en/builtin#getline()">getline()</a>.  Thus "." is the current
		line, "'m" mark m, etc.
		<code>{col}</code> is 1 for the leftmost column, <code>{lnum}</code> is 1 for the first
		line.
		The highlight ID can be used with <a href="/neovim-docs-web/en/builtin#synIDattr()">synIDattr()</a> to obtain
		syntax information about the highlighting.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetLnum()-&gt;diff_hlID(col)</pre></div>
<div class="old-help-para">digraph_get(<code>{chars}</code>)					<a name="digraph_get()"></a><code class="help-tag-right">digraph_get()</code> <a name="E1214"></a><code class="help-tag">E1214</code>
		Return the digraph of <code>{chars}</code>.  This should be a string with
		exactly two characters.  If <code>{chars}</code> are not just two
		characters, or the digraph of <code>{chars}</code> does not exist, an error
		is given and an empty string is returned.</div>
<div class="old-help-para">		Also see <a href="/neovim-docs-web/en/builtin#digraph_getlist()">digraph_getlist()</a>.</div>
<div class="old-help-para">		Examples:<pre>" Get a built-in digraph
:echo digraph_get('00')                " Returns '???'

" Get a user-defined digraph
:call digraph_set('aa', '???')
:echo digraph_get('aa')                " Returns '???'</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetChars()-&gt;digraph_get()</pre></div>
<div class="old-help-para">digraph_getlist([{listall}])				<a name="digraph_getlist()"></a><code class="help-tag-right">digraph_getlist()</code>
		Return a list of digraphs.  If the <code>{listall}</code> argument is given
		and it is TRUE, return all digraphs, including the default
		digraphs.  Otherwise, return only user-defined digraphs.</div>
<div class="old-help-para">		Also see <a href="/neovim-docs-web/en/builtin#digraph_get()">digraph_get()</a>.</div>
<div class="old-help-para">		Examples:<pre>" Get user-defined digraphs
:echo digraph_getlist()

" Get all the digraphs, including default digraphs
:echo digraph_getlist(1)</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetNumber()-&gt;digraph_getlist()</pre></div>
<div class="old-help-para">digraph_set(<code>{chars}</code>, <code>{digraph}</code>)				<a name="digraph_set()"></a><code class="help-tag-right">digraph_set()</code>
		Add digraph <code>{chars}</code> to the list.  <code>{chars}</code> must be a string
		with two characters.  <code>{digraph}</code> is a string with one UTF-8
		encoded character.  <a name="E1215"></a><code class="help-tag">E1215</code>
		Be careful, composing characters are NOT ignored.  This
		function is similar to <a href="/neovim-docs-web/en/digraph#%3Adigraphs">:digraphs</a> command, but useful to add
		digraphs start with a white space.</div>
<div class="old-help-para">		The function result is v:true if <a href="/neovim-docs-web/en/digraph#digraph">digraph</a> is registered.  If
		this fails an error message is given and v:false is returned.</div>
<div class="old-help-para">		If you want to define multiple digraphs at once, you can use
		<a href="/neovim-docs-web/en/builtin#digraph_setlist()">digraph_setlist()</a>.</div>
<div class="old-help-para">		Example:<pre>call digraph_set('  ', '???')</pre></div>
<div class="old-help-para">		Can be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetString()-&gt;digraph_set('???')</pre></div>
<div class="old-help-para">digraph_setlist(<code>{digraphlist}</code>)				<a name="digraph_setlist()"></a><code class="help-tag-right">digraph_setlist()</code>
		Similar to <a href="/neovim-docs-web/en/builtin#digraph_set()">digraph_set()</a> but this function can add multiple
		digraphs at once.  <code>{digraphlist}</code> is a list composed of lists,
		where each list contains two strings with <code>{chars}</code> and
		<code>{digraph}</code> as in <a href="/neovim-docs-web/en/builtin#digraph_set()">digraph_set()</a>. <a name="E1216"></a><code class="help-tag">E1216</code>
		Example:<pre>call digraph_setlist([['aa', '???'], ['ii', '???']])</pre></div>
<div class="old-help-para">		It is similar to the following:<pre>for [chars, digraph] in [['aa', '???'], ['ii', '???']]
      call digraph_set(chars, digraph)
endfor</pre></div>
<div class="old-help-para">		Except that the function returns after the first error,
		following digraphs will not be added.</div>
<div class="old-help-para">		Can be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetList()-&gt;digraph_setlist()</pre></div>
<div class="old-help-para">empty(<code>{expr}</code>)						<a name="empty()"></a><code class="help-tag-right">empty()</code>
		Return the Number 1 if <code>{expr}</code> is empty, zero otherwise.
<div class="help-li" style=""> A <a href="/neovim-docs-web/en/eval#List">List</a> or <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> is empty when it does not have any
		  items.
</div><div class="help-li" style=""> A <a href="/neovim-docs-web/en/eval#String">String</a> is empty when its length is zero.
</div><div class="help-li" style=""> A <a href="/neovim-docs-web/en/eval#Number">Number</a> and <a href="/neovim-docs-web/en/eval#Float">Float</a> are empty when their value is zero.
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/eval#v%3Afalse">v:false</a> and <a href="/neovim-docs-web/en/eval#v%3Anull">v:null</a> are empty, <a href="/neovim-docs-web/en/eval#v%3Atrue">v:true</a> is not.
</div><div class="help-li" style=""> A <a href="/neovim-docs-web/en/eval#Blob">Blob</a> is empty when its length is zero.
</div></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>mylist-&gt;empty()</pre>
environ()						<a name="environ()"></a><code class="help-tag-right">environ()</code>
		Return all of environment variables as dictionary. You can
		check if an environment variable exists like this:<pre>:echo has_key(environ(), 'HOME')</pre></div>
<div class="old-help-para">		Note that the variable name may be CamelCase; to ignore case
		use this:<pre>:echo index(keys(environ()), 'HOME', 0, 1) != -1</pre>
escape(<code>{string}</code>, <code>{chars}</code>)				<a name="escape()"></a><code class="help-tag-right">escape()</code>
		Escape the characters in <code>{chars}</code> that occur in <code>{string}</code> with a
		backslash.  Example:<pre>:echo escape('c:\program files\vim', ' \')</pre></div>
<div class="old-help-para">		results in:<pre>c:\\program\ files\\vim</pre></div>
<div class="old-help-para">		Also see <a href="/neovim-docs-web/en/builtin#shellescape()">shellescape()</a> and <a href="/neovim-docs-web/en/builtin#fnameescape()">fnameescape()</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetText()-&gt;escape(' \')</pre></div>
<div class="old-help-para">							<a name="eval()"></a><code class="help-tag-right">eval()</code>
eval(<code>{string}</code>)	Evaluate <code>{string}</code> and return the result.  Especially useful to
		turn the result of <a href="/neovim-docs-web/en/builtin#string()">string()</a> back into the original value.
		This works for Numbers, Floats, Strings, Blobs and composites
		of them.  Also works for <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a>s that refer to existing
		functions.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>argv-&gt;join()-&gt;eval()</pre>
eventhandler()						<a name="eventhandler()"></a><code class="help-tag-right">eventhandler()</code>
		Returns 1 when inside an event handler.  That is that Vim got
		interrupted while waiting for the user to type a character,
		e.g., when dropping a file on Vim.  This means interactive
		commands cannot be used.  Otherwise zero is returned.</div>
<div class="old-help-para">executable(<code>{expr}</code>)					<a name="executable()"></a><code class="help-tag-right">executable()</code>
		This function checks if an executable with the name <code>{expr}</code>
		exists.  <code>{expr}</code> must be the name of the program without any
		arguments.
		executable() uses the value of $PATH and/or the normal
		searchpath for programs.		<a name="PATHEXT"></a><code class="help-tag-right">PATHEXT</code>
		On MS-Windows the ".exe", ".bat", etc. can optionally be
		included.  Then the extensions in $PATHEXT are tried.  Thus if
		"foo.exe" does not exist, "foo.exe.bat" can be found.  If
		$PATHEXT is not set then ".exe;.com;.bat;.cmd" is used.  A dot
		by itself can be used in $PATHEXT to try using the name
		without an extension.  When <a href="/neovim-docs-web/en/options#'shell'">'shell'</a> looks like a Unix shell,
		then the name is also tried without adding an extension.
		On MS-Windows it only checks if the file exists and is not a
		directory, not if it's really executable.
		On Windows an executable in the same directory as Vim is
		always found (it is added to $PATH at <a href="/neovim-docs-web/en/starting#startup">startup</a>).
		The result is a Number:
			1	exists
			0	does not exist
			-1	not implemented on this system
		<a href="/neovim-docs-web/en/builtin#exepath()">exepath()</a> can be used to get the full path of an executable.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetCommand()-&gt;executable()</pre>
execute(<code>{command}</code> [, <code>{silent}</code>])				<a name="execute()"></a><code class="help-tag-right">execute()</code>
		Execute <code>{command}</code> and capture its output.
		If <code>{command}</code> is a <a href="/neovim-docs-web/en/eval#String">String</a>, returns <code>{command}</code> output.
		If <code>{command}</code> is a <a href="/neovim-docs-web/en/eval#List">List</a>, returns concatenated outputs.
		Examples:<pre>echo execute('echon "foo"')</pre></div>
<div class="old-help-para">			foo<pre>echo execute(['echon "foo"', 'echon "bar"'])</pre></div>
<div class="old-help-para">			foobar</div>
<div class="old-help-para">		The optional <code>{silent}</code> argument can have these values:
			""		no <code>:silent</code> used
			"silent"	<code>:silent</code> used
			"silent!"	<code>:silent!</code> used
		The default is "silent".  Note that with "silent!", unlike
		<code>:redir</code>, error messages are dropped.</div>
<div class="old-help-para">		To get a list of lines use <a href="/neovim-docs-web/en/builtin#split()">split()</a> on the result:<pre>execute('args')-&gt;split("\n")</pre></div>
<div class="old-help-para">		This function is not available in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>.
		Note: If nested, an outer execute() will not observe output of
		the inner calls.
		Note: Text attributes (highlights) are not captured.
		To execute a command in another window than the current one
		use <code>win_execute()</code>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetCommand()-&gt;execute()</pre>
exepath(<code>{expr}</code>)						<a name="exepath()"></a><code class="help-tag-right">exepath()</code>
		Returns the full path of <code>{expr}</code> if it is an executable and
		given as a (partial or full) path or is found in $PATH.
		Returns empty string otherwise.
		If <code>{expr}</code> starts with "./" the <a href="/neovim-docs-web/en/editing#current-directory">current-directory</a> is used.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetCommand()-&gt;exepath()</pre></div>
<div class="old-help-para">							<a name="exists()"></a><code class="help-tag-right">exists()</code>
exists(<code>{expr}</code>)	The result is a Number, which is <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> if <code>{expr}</code> is
		defined, zero otherwise.</div>
<div class="old-help-para">		For checking for a supported feature use <a href="/neovim-docs-web/en/builtin#has()">has()</a>.
		For checking if a file exists use <a href="/neovim-docs-web/en/builtin#filereadable()">filereadable()</a>.</div>
<div class="old-help-para">		The <code>{expr}</code> argument is a string, which contains one of these:
			varname		internal variable (see
			dict.key	<a href="/neovim-docs-web/en/eval#internal-variables">internal-variables</a>).  Also works
			list[i]		for <a href="/neovim-docs-web/en/eval#curly-braces-names">curly-braces-names</a>, <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a>
					entries, <a href="/neovim-docs-web/en/eval#List">List</a> items, etc.
					Beware that evaluating an index may
					cause an error message for an invalid
					expression.  E.g.:<pre>:let l = [1, 2, 3]
:echo exists("l[5]")</pre></div>
<div class="old-help-para">					   0<pre>:echo exists("l[xx]")</pre></div>
<div class="old-help-para">					   E121: Undefined variable: xx
					   0
			&amp;option-name	Vim option (only checks if it exists,
					not if it really works)
			+option-name	Vim option that works.
			$ENVNAME	environment variable (could also be
					done by comparing with an empty
					string)
funcname	built-in function (see <a href="/neovim-docs-web/en/eval#functions">functions</a>)
					or user defined function (see
					<a href="/neovim-docs-web/en/eval#user-function">user-function</a>). Also works for a
					variable that is a Funcref.
			:cmdname	Ex command: built-in command, user
					command or command modifier <a href="/neovim-docs-web/en/map#%3Acommand">:command</a>.
					Returns:
					1  for match with start of a command
					2  full match with a command
					3  matches several user commands
					To check for a supported command
					always check the return value to be 2.
			:2match		The <a href="/neovim-docs-web/en/pattern#%3A2match">:2match</a> command.
			:3match		The <a href="/neovim-docs-web/en/pattern#%3A3match">:3match</a> command (but you
					probably should not use it, it is
					reserved for internal usage)
			#event		autocommand defined for this event
			#event#pattern	autocommand defined for this event and
					pattern (the pattern is taken
					literally and compared to the
					autocommand patterns character by
					character)
			#group		autocommand group exists
			#group#event	autocommand defined for this group and
					event.
			#group#event#pattern
					autocommand defined for this group,
					event and pattern.
			##event		autocommand for this event is
					supported.</div>
<div class="old-help-para">		Examples:<pre>exists("&amp;mouse")
exists("$HOSTNAME")
exists("*strftime")
exists("*s:MyFunc")
exists("*MyFunc")
exists("bufcount")
exists(":Make")
exists("#CursorHold")
exists("#BufReadPre#*.gz")
exists("#filetypeindent")
exists("#filetypeindent#FileType")
exists("#filetypeindent#FileType#*")
exists("##ColorScheme")</pre></div>
<div class="old-help-para">		There must be no space between the symbol (&amp;/$/*/#) and the
		name.
		There must be no extra characters after the name, although in
		a few cases this is ignored.  That may become stricter in the
		future, thus don't count on it!
		Working example:<pre>exists(":make")</pre></div>
<div class="old-help-para">		NOT working example:<pre>exists(":make install")</pre></div>
<div class="old-help-para">		Note that the argument must be a string, not the name of the
		variable itself.  For example:<pre>exists(bufcount)</pre></div>
<div class="old-help-para">		This doesn't check for existence of the "bufcount" variable,
		but gets the value of "bufcount", and checks if that exists.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>Varname()-&gt;exists()</pre>
exp(<code>{expr}</code>)						<a name="exp()"></a><code class="help-tag-right">exp()</code>
		Return the exponential of <code>{expr}</code> as a <a href="/neovim-docs-web/en/eval#Float">Float</a> in the range
		[0, inf].
		<code>{expr}</code> must evaluate to a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Returns 0.0 if <code>{expr}</code> is not a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Examples:<pre>:echo exp(2)</pre></div>
<div class="old-help-para">			7.389056<pre>:echo exp(-1)</pre></div>
<div class="old-help-para">			0.367879</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>Compute()-&gt;exp()</pre>
expand(<code>{string}</code> [, <code>{nosuf}</code> [, <code>{list}</code>]])				<a name="expand()"></a><code class="help-tag-right">expand()</code>
		Expand wildcards and the following special keywords in
		<code>{string}</code>.  <a href="/neovim-docs-web/en/options#'wildignorecase'">'wildignorecase'</a> applies.</div>
<div class="old-help-para">		If <code>{list}</code> is given and it is <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a>, a List will be returned.
		Otherwise the result is a String and when there are several
		matches, they are separated by <code>&lt;NL&gt;</code> characters.</div>
<div class="old-help-para">		If the expansion fails, the result is an empty string.  A name
		for a non-existing file is not included, unless <code>{string}</code> does
		not start with '%', '#' or '&lt;', see below.</div>
<div class="old-help-para">		When <code>{string}</code> starts with '%', '#' or '&lt;', the expansion is
		done like for the <a href="/neovim-docs-web/en/cmdline#cmdline-special">cmdline-special</a> variables with their
		associated modifiers.  Here is a short overview:</div>
<div class="old-help-para">			%		current file name
			#		alternate file name
			#n		alternate file name n
			<code>&lt;cfile&gt;</code>		file name under the cursor
			<code>&lt;afile&gt;</code>		autocmd file name
			<code>&lt;abuf&gt;</code>		autocmd buffer number (as a String!)
			<code>&lt;amatch&gt;</code>	autocmd matched name
			<code>&lt;cexpr&gt;</code>		C expression under the cursor
			<code>&lt;sfile&gt;</code>		sourced script file or function name
			<code>&lt;slnum&gt;</code>		sourced script line number or function
					line number
			<code>&lt;sflnum&gt;</code>	script file line number, also when in
					a function
			<code>&lt;SID&gt;</code>		"&lt;SNR&gt;123_"  where "123" is the
					current script ID  <a href="/neovim-docs-web/en/map#%3CSID%3E">&lt;SID&gt;</a>
			<code>&lt;script&gt;</code>	sourced script file, or script file
					where the current function was defined
			<code>&lt;stack&gt;</code>		call stack
			<code>&lt;cword&gt;</code>		word under the cursor
			<code>&lt;cWORD&gt;</code>		WORD under the cursor
			<code>&lt;client&gt;</code>	the <code>{clientid}</code> of the last received
					message
		Modifiers:
			:p		expand to full path
			:h		head (last path component removed)
			:t		tail (last path component only)
			:r		root (one extension removed)
			:e		extension only</div>
<div class="old-help-para">		Example:<pre>:let &amp;tags = expand("%:p:h") .. "/tags"</pre></div>
<div class="old-help-para">		Note that when expanding a string that starts with '%', '#' or
		'&lt;', any following text is ignored.  This does NOT work:<pre>:let doesntwork = expand("%:h.bak")</pre></div>
<div class="old-help-para">		Use this:<pre>:let doeswork = expand("%:h") .. ".bak"</pre></div>
<div class="old-help-para">		Also note that expanding "&lt;cfile&gt;" and others only returns the
		referenced file name without further expansion.  If "&lt;cfile&gt;"
		is "~/.cshrc", you need to do another expand() to have the
		"~/" expanded into the path of the home directory:<pre>:echo expand(expand("&lt;cfile&gt;"))</pre></div>
<div class="old-help-para">		There cannot be white space between the variables and the
		following modifier.  The <a href="/neovim-docs-web/en/builtin#fnamemodify()">fnamemodify()</a> function can be used
		to modify normal file names.</div>
<div class="old-help-para">		When using '%' or '#', and the current or alternate file name
		is not defined, an empty string is used.  Using "%:p" in a
		buffer with no name, results in the current directory, with a
		'/' added.
		When <a href="/neovim-docs-web/en/options#'verbose'">'verbose'</a> is set then expanding '%', '#' and &lt;&gt; items
		will result in an error message if the argument cannot be
		expanded.</div>
<div class="old-help-para">		When <code>{string}</code> does not start with '%', '#' or '&lt;', it is
		expanded like a file name is expanded on the command line.
		<a href="/neovim-docs-web/en/options#'suffixes'">'suffixes'</a> and <a href="/neovim-docs-web/en/options#'wildignore'">'wildignore'</a> are used, unless the optional
		<code>{nosuf}</code> argument is given and it is <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a>.
		Names for non-existing files are included.  The "**" item can
		be used to search in a directory tree.  For example, to find
		all "README" files in the current directory and below:<pre>:echo expand("**/README")</pre></div>
<div class="old-help-para">		expand() can also be used to expand variables and environment
		variables that are only known in a shell.  But this can be
		slow, because a shell may be used to do the expansion.  See
		<a href="/neovim-docs-web/en/eval#expr-env-expand">expr-env-expand</a>.
		The expanded variable is still handled like a list of file
		names.  When an environment variable cannot be expanded, it is
		left unchanged.  Thus ":echo expand('$FOOBAR')" results in
		"$FOOBAR".</div>
<div class="old-help-para">		See <a href="/neovim-docs-web/en/builtin#glob()">glob()</a> for finding existing files.  See <a href="/neovim-docs-web/en/builtin#system()">system()</a> for
		getting the raw output of an external command.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>Getpattern()-&gt;expand()</pre>
expandcmd(<code>{string}</code> [, <code>{options}</code>])			<a name="expandcmd()"></a><code class="help-tag-right">expandcmd()</code>
		Expand special items in String <code>{string}</code> like what is done for
		an Ex command such as <code>:edit</code>.  This expands special keywords,
		like with <a href="/neovim-docs-web/en/builtin#expand()">expand()</a>, and environment variables, anywhere in
		<code>{string}</code>.  "~user" and "~/path" are only expanded at the
		start.</div>
<div class="old-help-para">		The following items are supported in the <code>{options}</code> Dict
		argument:
		    errmsg	If set to TRUE, error messages are displayed
				if an error is encountered during expansion.
				By default, error messages are not displayed.</div>
<div class="old-help-para">		Returns the expanded string.  If an error is encountered
		during expansion, the unmodified <code>{string}</code> is returned.</div>
<div class="old-help-para">		Example:<pre>:echo expandcmd('make %&lt;.o')
make /path/runtime/doc/builtin.o
:echo expandcmd('make %&lt;.o', {'errmsg': v:true})</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetCommand()-&gt;expandcmd()</pre></div>
<div class="old-help-para">extend(<code>{expr1}</code>, <code>{expr2}</code> [, <code>{expr3}</code>])			<a name="extend()"></a><code class="help-tag-right">extend()</code>
		<code>{expr1}</code> and <code>{expr2}</code> must be both <a href="/neovim-docs-web/en/eval#Lists">Lists</a> or both
		<a href="/neovim-docs-web/en/eval#Dictionaries">Dictionaries</a>.</div>
<div class="old-help-para">		If they are <a href="/neovim-docs-web/en/eval#Lists">Lists</a>: Append <code>{expr2}</code> to <code>{expr1}</code>.
		If <code>{expr3}</code> is given insert the items of <code>{expr2}</code> before the
		item with index <code>{expr3}</code> in <code>{expr1}</code>.  When <code>{expr3}</code> is zero
		insert before the first item.  When <code>{expr3}</code> is equal to
		len(<code>{expr1}</code>) then <code>{expr2}</code> is appended.
		Examples:<pre>:echo sort(extend(mylist, [7, 5]))
:call extend(mylist, [2, 3], 1)</pre></div>
<div class="old-help-para">		When <code>{expr1}</code> is the same List as <code>{expr2}</code> then the number of
		items copied is equal to the original length of the List.
		E.g., when <code>{expr3}</code> is 1 you get N new copies of the first item
		(where N is the original length of the List).
		Use <a href="/neovim-docs-web/en/builtin#add()">add()</a> to concatenate one item to a list.  To concatenate
		two lists into a new list use the + operator:<pre>:let newlist = [1, 2, 3] + [4, 5]</pre></div>
<div class="old-help-para">		If they are <a href="/neovim-docs-web/en/eval#Dictionaries">Dictionaries</a>:
		Add all entries from <code>{expr2}</code> to <code>{expr1}</code>.
		If a key exists in both <code>{expr1}</code> and <code>{expr2}</code> then <code>{expr3}</code> is
		used to decide what to do:
		<code>{expr3}</code> = "keep": keep the value of <code>{expr1}</code>
		<code>{expr3}</code> = "force": use the value of <code>{expr2}</code>
		<code>{expr3}</code> = "error": give an error message		<a name="E737"></a><code class="help-tag-right">E737</code>
		When <code>{expr3}</code> is omitted then "force" is assumed.</div>
<div class="old-help-para">		<code>{expr1}</code> is changed when <code>{expr2}</code> is not empty.  If necessary
		make a copy of <code>{expr1}</code> first.
		<code>{expr2}</code> remains unchanged.
		When <code>{expr1}</code> is locked and <code>{expr2}</code> is not empty the operation
		fails.
		Returns <code>{expr1}</code>.  Returns 0 on error.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>mylist-&gt;extend(otherlist)</pre>
feedkeys(<code>{string}</code> [, <code>{mode}</code>])				<a name="feedkeys()"></a><code class="help-tag-right">feedkeys()</code>
		Characters in <code>{string}</code> are queued for processing as if they
		come from a mapping or were typed by the user.</div>
<div class="old-help-para">		By default the string is added to the end of the typeahead
		buffer, thus if a mapping is still being executed the
		characters come after them.  Use the 'i' flag to insert before
		other characters, they will be executed next, before any
		characters from a mapping.</div>
<div class="old-help-para">		The function does not wait for processing of keys contained in
		<code>{string}</code>.</div>
<div class="old-help-para">		To include special keys into <code>{string}</code>, use double-quotes
		and "\..." notation <a href="/neovim-docs-web/en/eval#expr-quote">expr-quote</a>. For example,
		feedkeys("\&lt;CR&gt;") simulates pressing of the <code>&lt;Enter&gt;</code> key. But
		feedkeys('\<code>&lt;CR&gt;</code>') pushes 5 characters.
		The <a href="/neovim-docs-web/en/intro#%3CIgnore%3E">&lt;Ignore&gt;</a> keycode may be used to exit the
		wait-for-character without doing anything.</div>
<div class="old-help-para">		<code>{mode}</code> is a String, which can contain these character flags:
		'm'	Remap keys. This is default.  If <code>{mode}</code> is absent,
			keys are remapped.
		'n'	Do not remap keys.
		't'	Handle keys as if typed; otherwise they are handled as
			if coming from a mapping.  This matters for undo,
			opening folds, etc.
		'i'	Insert the string instead of appending (see above).
		'x'	Execute commands until typeahead is empty.  This is
			similar to using ":normal!".  You can call feedkeys()
			several times without 'x' and then one time with 'x'
			(possibly with an empty <code>{string}</code>) to execute all the
			typeahead.  Note that when Vim ends in Insert mode it
			will behave as if <code>&lt;Esc&gt;</code> is typed, to avoid getting
			stuck, waiting for a character to be typed before the
			script continues.
			Note that if you manage to call feedkeys() while
			executing commands, thus calling it recursively, then
			all typeahead will be consumed by the last call.
		'!'	When used with 'x' will not end Insert mode. Can be
			used in a test when a timer is set to exit Insert mode
			a little later.  Useful for testing CursorHoldI.</div>
<div class="old-help-para">		Return value is always 0.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetInput()-&gt;feedkeys()</pre>
filereadable(<code>{file}</code>)					<a name="filereadable()"></a><code class="help-tag-right">filereadable()</code>
		The result is a Number, which is <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> when a file with the
		name <code>{file}</code> exists, and can be read.  If <code>{file}</code> doesn't exist,
		or is a directory, the result is <a href="/neovim-docs-web/en/eval#FALSE">FALSE</a>.  <code>{file}</code> is any
		expression, which is used as a String.
		If you don't care about the file being readable you can use
		<a href="/neovim-docs-web/en/builtin#glob()">glob()</a>.
		<code>{file}</code> is used as-is, you may want to expand wildcards first:<pre>echo filereadable('~/.vimrc')
0
echo filereadable(expand('~/.vimrc'))
1</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetName()-&gt;filereadable()</pre>
filewritable(<code>{file}</code>)					<a name="filewritable()"></a><code class="help-tag-right">filewritable()</code>
		The result is a Number, which is 1 when a file with the
		name <code>{file}</code> exists, and can be written.  If <code>{file}</code> doesn't
		exist, or is not writable, the result is 0.  If <code>{file}</code> is a
		directory, and we can write to it, the result is 2.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetName()-&gt;filewritable()</pre>
filter(<code>{expr1}</code>, <code>{expr2}</code>)					<a name="filter()"></a><code class="help-tag-right">filter()</code>
		<code>{expr1}</code> must be a <a href="/neovim-docs-web/en/eval#List">List</a>, <a href="/neovim-docs-web/en/eval#Blob">Blob</a>, or a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a>.
		For each item in <code>{expr1}</code> evaluate <code>{expr2}</code> and when the result
		is zero remove the item from the <a href="/neovim-docs-web/en/eval#List">List</a> or <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a>. For a
		<a href="/neovim-docs-web/en/eval#Blob">Blob</a> each byte is removed.</div>
<div class="old-help-para">		<code>{expr2}</code> must be a <a href="/neovim-docs-web/en/eval#string">string</a> or <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a>.</div>
<div class="old-help-para">		If <code>{expr2}</code> is a <a href="/neovim-docs-web/en/eval#string">string</a>, inside <code>{expr2}</code> <a href="/neovim-docs-web/en/eval#v%3Aval">v:val</a> has the value
		of the current item.  For a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> <a href="/neovim-docs-web/en/eval#v%3Akey">v:key</a> has the key
		of the current item and for a <a href="/neovim-docs-web/en/eval#List">List</a> <a href="/neovim-docs-web/en/eval#v%3Akey">v:key</a> has the index of
		the current item.  For a <a href="/neovim-docs-web/en/eval#Blob">Blob</a> <a href="/neovim-docs-web/en/eval#v%3Akey">v:key</a> has the index of the
		current byte.</div>
<div class="old-help-para">		Examples:<pre>call filter(mylist, 'v:val !~ "OLD"')</pre></div>
<div class="old-help-para">		Removes the items where "OLD" appears.<pre>call filter(mydict, 'v:key &gt;= 8')</pre></div>
<div class="old-help-para">		Removes the items with a key below 8.<pre>call filter(var, 0)</pre></div>
<div class="old-help-para">		Removes all the items, thus clears the <a href="/neovim-docs-web/en/eval#List">List</a> or <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a>.</div>
<div class="old-help-para">		Note that <code>{expr2}</code> is the result of expression and is then
		used as an expression again.  Often it is good to use a
		<a href="/neovim-docs-web/en/eval#literal-string">literal-string</a> to avoid having to double backslashes.</div>
<div class="old-help-para">		If <code>{expr2}</code> is a <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a> it must take two arguments:
			1. the key or the index of the current item.
			2. the value of the current item.
		The function must return <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> if the item should be kept.
		Example that keeps the odd items of a list:<pre>func Odd(idx, val)
  return a:idx % 2 == 1
endfunc
call filter(mylist, function('Odd'))</pre></div>
<div class="old-help-para">		It is shorter when using a <a href="/neovim-docs-web/en/eval#lambda">lambda</a>:<pre>call filter(myList, {idx, val -&gt; idx * val &lt;= 42})</pre></div>
<div class="old-help-para">		If you do not use "val" you can leave it out:<pre>call filter(myList, {idx -&gt; idx % 2 == 1})</pre></div>
<div class="old-help-para">		The operation is done in-place.  If you want a <a href="/neovim-docs-web/en/eval#List">List</a> or
		<a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> to remain unmodified make a copy first:<pre>:let l = filter(copy(mylist), 'v:val =~ "KEEP"')</pre></div>
<div class="old-help-para">		Returns <code>{expr1}</code>, the <a href="/neovim-docs-web/en/eval#List">List</a>, <a href="/neovim-docs-web/en/eval#Blob">Blob</a> or <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> that was
		filtered.  When an error is encountered while evaluating
		<code>{expr2}</code> no further items in <code>{expr1}</code> are processed.  When
		<code>{expr2}</code> is a Funcref errors inside a function are ignored,
		unless it was defined with the "abort" flag.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>mylist-&gt;filter(expr2)</pre>
finddir(<code>{name}</code> [, <code>{path}</code> [, <code>{count}</code>]])				<a name="finddir()"></a><code class="help-tag-right">finddir()</code>
		Find directory <code>{name}</code> in <code>{path}</code>.  Supports both downwards and
		upwards recursive directory searches.  See <a href="/neovim-docs-web/en/editing#file-searching">file-searching</a>
		for the syntax of <code>{path}</code>.</div>
<div class="old-help-para">		Returns the path of the first found match.  When the found
		directory is below the current directory a relative path is
		returned.  Otherwise a full path is returned.
		If <code>{path}</code> is omitted or empty then <a href="/neovim-docs-web/en/options#'path'">'path'</a> is used.</div>
<div class="old-help-para">		If the optional <code>{count}</code> is given, find <code>{count}</code>'s occurrence of
		<code>{name}</code> in <code>{path}</code> instead of the first one.
		When <code>{count}</code> is negative return all the matches in a <a href="/neovim-docs-web/en/eval#List">List</a>.</div>
<div class="old-help-para">		Returns an empty string if the directory is not found.</div>
<div class="old-help-para">		This is quite similar to the ex-command <code>:find</code>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetName()-&gt;finddir()</pre>
findfile(<code>{name}</code> [, <code>{path}</code> [, <code>{count}</code>]])				<a name="findfile()"></a><code class="help-tag-right">findfile()</code>
		Just like <a href="/neovim-docs-web/en/builtin#finddir()">finddir()</a>, but find a file instead of a directory.
		Uses <a href="/neovim-docs-web/en/options#'suffixesadd'">'suffixesadd'</a>.
		Example:<pre>:echo findfile("tags.vim", ".;")</pre></div>
<div class="old-help-para">		Searches from the directory of the current file upwards until
		it finds the file "tags.vim".</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetName()-&gt;findfile()</pre>
flatten(<code>{list}</code> [, <code>{maxdepth}</code>])					<a name="flatten()"></a><code class="help-tag-right">flatten()</code>
		Flatten <code>{list}</code> up to <code>{maxdepth}</code> levels.  Without <code>{maxdepth}</code>
		the result is a <a href="/neovim-docs-web/en/eval#List">List</a> without nesting, as if <code>{maxdepth}</code> is
		a very large number.
		The <code>{list}</code> is changed in place, make a copy first if you do
		not want that.
								<a name="E900"></a><code class="help-tag-right">E900</code>
		<code>{maxdepth}</code> means how deep in nested lists changes are made.
		<code>{list}</code> is not modified when <code>{maxdepth}</code> is 0.
		<code>{maxdepth}</code> must be positive number.</div>
<div class="old-help-para">		If there is an error the number zero is returned.</div>
<div class="old-help-para">		Example:<pre>:echo flatten([1, [2, [3, 4]], 5])</pre></div>
<div class="old-help-para">			[1, 2, 3, 4, 5]<pre>:echo flatten([1, [2, [3, 4]], 5], 1)</pre></div>
<div class="old-help-para">			[1, 2, [3, 4], 5]</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>mylist-&gt;flatten()</pre></div>
<div class="old-help-para">float2nr(<code>{expr}</code>)					<a name="float2nr()"></a><code class="help-tag-right">float2nr()</code>
		Convert <code>{expr}</code> to a Number by omitting the part after the
		decimal point.
		<code>{expr}</code> must evaluate to a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Returns 0 if <code>{expr}</code> is not a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		When the value of <code>{expr}</code> is out of range for a <a href="/neovim-docs-web/en/eval#Number">Number</a> the
		result is truncated to 0x7fffffff or -0x7fffffff (or when
		64-bit Number support is enabled, 0x7fffffffffffffff or
		-0x7fffffffffffffff).  NaN results in -0x80000000 (or when
		64-bit Number support is enabled, -0x8000000000000000).
		Examples:<pre>echo float2nr(3.95)</pre></div>
<div class="old-help-para">			3<pre>echo float2nr(-23.45)</pre></div>
<div class="old-help-para">			-23<pre>echo float2nr(1.0e100)</pre></div>
<div class="old-help-para">			2147483647  (or 9223372036854775807)<pre>echo float2nr(-1.0e150)</pre></div>
<div class="old-help-para">			-2147483647 (or -9223372036854775807)<pre>echo float2nr(1.0e-100)</pre></div>
<div class="old-help-para">			0</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>Compute()-&gt;float2nr()</pre>
floor(<code>{expr}</code>)							<a name="floor()"></a><code class="help-tag-right">floor()</code>
		Return the largest integral value less than or equal to
		<code>{expr}</code> as a <a href="/neovim-docs-web/en/eval#Float">Float</a> (round down).
		<code>{expr}</code> must evaluate to a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Returns 0.0 if <code>{expr}</code> is not a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Examples:<pre>echo floor(1.856)</pre></div>
<div class="old-help-para">			1.0<pre>echo floor(-5.456)</pre></div>
<div class="old-help-para">			-6.0<pre>echo floor(4.0)</pre></div>
<div class="old-help-para">			4.0</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>Compute()-&gt;floor()</pre>
fmod(<code>{expr1}</code>, <code>{expr2}</code>)					<a name="fmod()"></a><code class="help-tag-right">fmod()</code>
		Return the remainder of <code>{expr1}</code> / <code>{expr2}</code>, even if the
		division is not representable.  Returns <code>{expr1}</code> - i * <code>{expr2}</code>
		for some integer i such that if <code>{expr2}</code> is non-zero, the
		result has the same sign as <code>{expr1}</code> and magnitude less than
		the magnitude of <code>{expr2}</code>.  If <code>{expr2}</code> is zero, the value
		returned is zero.  The value returned is a <a href="/neovim-docs-web/en/eval#Float">Float</a>.
		<code>{expr1}</code> and <code>{expr2}</code> must evaluate to a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Returns 0.0 if <code>{expr1}</code> or <code>{expr2}</code> is not a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a
		<a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Examples:<pre>:echo fmod(12.33, 1.22)</pre></div>
<div class="old-help-para">			0.13<pre>:echo fmod(-12.33, 1.22)</pre></div>
<div class="old-help-para">			-0.13</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>Compute()-&gt;fmod(1.22)</pre>
fnameescape(<code>{string}</code>)					<a name="fnameescape()"></a><code class="help-tag-right">fnameescape()</code>
		Escape <code>{string}</code> for use as file name command argument.  All
		characters that have a special meaning, such as '%' and '|'
		are escaped with a backslash.
		For most systems the characters escaped are
		" \t\n*?[{`$\\%#'\"|!&lt;".  For systems where a backslash
		appears in a filename, it depends on the value of <a href="/neovim-docs-web/en/options#'isfname'">'isfname'</a>.
		A leading '+' and '&gt;' is also escaped (special after <a href="/neovim-docs-web/en/editing#%3Aedit">:edit</a>
		and <a href="/neovim-docs-web/en/editing#%3Awrite">:write</a>).  And a "-" by itself (special after <a href="/neovim-docs-web/en/editing#%3Acd">:cd</a>).
		Returns an empty string on error.
		Example:<pre>:let fname = '+some str%nge|name'
:exe "edit " .. fnameescape(fname)</pre></div>
<div class="old-help-para">		results in executing:<pre>edit \+some\ str\%nge\|name</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetName()-&gt;fnameescape()</pre>
fnamemodify(<code>{fname}</code>, <code>{mods}</code>)				<a name="fnamemodify()"></a><code class="help-tag-right">fnamemodify()</code>
		Modify file name <code>{fname}</code> according to <code>{mods}</code>.  <code>{mods}</code> is a
		string of characters like it is used for file names on the
		command line.  See <a href="/neovim-docs-web/en/cmdline#filename-modifiers">filename-modifiers</a>.
		Example:<pre>:echo fnamemodify("main.c", ":p:h")</pre></div>
<div class="old-help-para">		results in:<pre>/home/user/vim/vim/src</pre></div>
<div class="old-help-para">		If <code>{mods}</code> is empty or an unsupported modifier is used then
		<code>{fname}</code> is returned.
		When <code>{fname}</code> is empty then with <code>{mods}</code> ":h" returns ".", so
		that <code>:cd</code> can be used with it.  This is different from
		expand('%:h') without a buffer name, which returns an empty
		string.
		Note: Environment variables don't work in <code>{fname}</code>, use
		<a href="/neovim-docs-web/en/builtin#expand()">expand()</a> first then.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetName()-&gt;fnamemodify(':p:h')</pre>
foldclosed(<code>{lnum}</code>)					<a name="foldclosed()"></a><code class="help-tag-right">foldclosed()</code>
		The result is a Number.  If the line <code>{lnum}</code> is in a closed
		fold, the result is the number of the first line in that fold.
		If the line <code>{lnum}</code> is not in a closed fold, -1 is returned.
		<code>{lnum}</code> is used like with <a href="/neovim-docs-web/en/builtin#getline()">getline()</a>.  Thus "." is the current
		line, "'m" mark m, etc.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetLnum()-&gt;foldclosed()</pre>
foldclosedend(<code>{lnum}</code>)					<a name="foldclosedend()"></a><code class="help-tag-right">foldclosedend()</code>
		The result is a Number.  If the line <code>{lnum}</code> is in a closed
		fold, the result is the number of the last line in that fold.
		If the line <code>{lnum}</code> is not in a closed fold, -1 is returned.
		<code>{lnum}</code> is used like with <a href="/neovim-docs-web/en/builtin#getline()">getline()</a>.  Thus "." is the current
		line, "'m" mark m, etc.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetLnum()-&gt;foldclosedend()</pre>
foldlevel(<code>{lnum}</code>)					<a name="foldlevel()"></a><code class="help-tag-right">foldlevel()</code>
		The result is a Number, which is the foldlevel of line <code>{lnum}</code>
		in the current buffer.  For nested folds the deepest level is
		returned.  If there is no fold at line <code>{lnum}</code>, zero is
		returned.  It doesn't matter if the folds are open or closed.
		When used while updating folds (from <a href="/neovim-docs-web/en/options#'foldexpr'">'foldexpr'</a>) -1 is
		returned for lines where folds are still to be updated and the
		foldlevel is unknown.  As a special case the level of the
		previous line is usually available.
		<code>{lnum}</code> is used like with <a href="/neovim-docs-web/en/builtin#getline()">getline()</a>.  Thus "." is the current
		line, "'m" mark m, etc.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetLnum()-&gt;foldlevel()</pre></div>
<div class="old-help-para">							<a name="foldtext()"></a><code class="help-tag-right">foldtext()</code>
foldtext()	Returns a String, to be displayed for a closed fold.  This is
		the default function used for the <a href="/neovim-docs-web/en/options#'foldtext'">'foldtext'</a> option and should
		only be called from evaluating <a href="/neovim-docs-web/en/options#'foldtext'">'foldtext'</a>.  It uses the
		<a href="/neovim-docs-web/en/eval#v%3Afoldstart">v:foldstart</a>, <a href="/neovim-docs-web/en/eval#v%3Afoldend">v:foldend</a> and <a href="/neovim-docs-web/en/eval#v%3Afolddashes">v:folddashes</a> variables.
		The returned string looks like this:<pre>+-- 45 lines: abcdef</pre></div>
<div class="old-help-para">		The number of leading dashes depends on the foldlevel.  The
		"45" is the number of lines in the fold.  "abcdef" is the text
		in the first non-blank line of the fold.  Leading white space,
		"//" or "/*" and the text from the <a href="/neovim-docs-web/en/options#'foldmarker'">'foldmarker'</a> and
		<a href="/neovim-docs-web/en/options#'commentstring'">'commentstring'</a> options is removed.
		When used to draw the actual foldtext, the rest of the line
		will be filled with the fold char from the <a href="/neovim-docs-web/en/options#'fillchars'">'fillchars'</a>
		setting.
		Returns an empty string when there is no fold.</div>
<div class="old-help-para">foldtextresult(<code>{lnum}</code>)					<a name="foldtextresult()"></a><code class="help-tag-right">foldtextresult()</code>
		Returns the text that is displayed for the closed fold at line
		<code>{lnum}</code>.  Evaluates <a href="/neovim-docs-web/en/options#'foldtext'">'foldtext'</a> in the appropriate context.
		When there is no closed fold at <code>{lnum}</code> an empty string is
		returned.
		<code>{lnum}</code> is used like with <a href="/neovim-docs-web/en/builtin#getline()">getline()</a>.  Thus "." is the current
		line, "'m" mark m, etc.
		Useful when exporting folded text, e.g., to HTML.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetLnum()-&gt;foldtextresult()</pre></div>
<div class="old-help-para">fullcommand(<code>{name}</code>)						<a name="fullcommand()"></a><code class="help-tag-right">fullcommand()</code>
		Get the full command name from a short abbreviated command
		name; see <a href="/neovim-docs-web/en/usr_20#20.2">20.2</a> for details on command abbreviations.</div>
<div class="old-help-para">		The string argument <code>{name}</code> may start with a <code>:</code> and can
		include a [range], these are skipped and not returned.
		Returns an empty string if a command doesn't exist or if it's
		ambiguous (for user-defined commands).</div>
<div class="old-help-para">		For example <code>fullcommand('s')</code>, <code>fullcommand('sub')</code>,
		<code>fullcommand(':%substitute')</code> all return "substitute".</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetName()-&gt;fullcommand()</pre></div>
<div class="old-help-para">						<a name="funcref()"></a><code class="help-tag-right">funcref()</code>
funcref(<code>{name}</code> [, <code>{arglist}</code>] [, <code>{dict}</code>])
		Just like <a href="/neovim-docs-web/en/builtin#function()">function()</a>, but the returned Funcref will lookup
		the function by reference, not by name.  This matters when the
		function <code>{name}</code> is redefined later.</div>
<div class="old-help-para">		Unlike <a href="/neovim-docs-web/en/builtin#function()">function()</a>, <code>{name}</code> must be an existing user function.
		It only works for an autoloaded function if it has already
		been loaded (to avoid mistakenly loading the autoload script
		when only intending to use the function name, use <a href="/neovim-docs-web/en/builtin#function()">function()</a>
		instead). <code>{name}</code> cannot be a builtin function.
		Returns 0 on error.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetFuncname()-&gt;funcref([arg])</pre></div>
<div class="old-help-para">				<a name="function()"></a><code class="help-tag-right">function()</code> <a name="partial"></a><code class="help-tag">partial</code> <a name="E700"></a><code class="help-tag">E700</code> <a name="E922"></a><code class="help-tag">E922</code> <a name="E923"></a><code class="help-tag">E923</code>
function(<code>{name}</code> [, <code>{arglist}</code>] [, <code>{dict}</code>])
		Return a <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a> variable that refers to function <code>{name}</code>.
		<code>{name}</code> can be the name of a user defined function or an
		internal function.</div>
<div class="old-help-para">		<code>{name}</code> can also be a Funcref or a partial. When it is a
		partial the dict stored in it will be used and the <code>{dict}</code>
		argument is not allowed. E.g.:<pre>let FuncWithArg = function(dict.Func, [arg])
let Broken = function(dict.Func, [arg], dict)</pre></div>
<div class="old-help-para">		When using the Funcref the function will be found by <code>{name}</code>,
		also when it was redefined later. Use <a href="/neovim-docs-web/en/builtin#funcref()">funcref()</a> to keep the
		same function.</div>
<div class="old-help-para">		When <code>{arglist}</code> or <code>{dict}</code> is present this creates a partial.
		That means the argument list and/or the dictionary is stored in
		the Funcref and will be used when the Funcref is called.</div>
<div class="old-help-para">		The arguments are passed to the function in front of other
		arguments, but after any argument from <a href="/neovim-docs-web/en/eval#method">method</a>.  Example:<pre>func Callback(arg1, arg2, name)
"...
let Partial = function('Callback', ['one', 'two'])
"...
call Partial('name')</pre></div>
<div class="old-help-para">		Invokes the function as with:<pre>call Callback('one', 'two', 'name')</pre></div>
<div class="old-help-para">		With a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>func Callback(one, two, three)
"...
let Partial = function('Callback', ['two'])
"...
eval 'one'-&gt;Partial('three')</pre></div>
<div class="old-help-para">		Invokes the function as with:<pre>call Callback('one', 'two', 'three')</pre></div>
<div class="old-help-para">		The function() call can be nested to add more arguments to the
		Funcref.  The extra arguments are appended to the list of
		arguments.  Example:<pre>func Callback(arg1, arg2, name)
"...
let Func = function('Callback', ['one'])
let Func2 = function(Func, ['two'])
"...
call Func2('name')</pre></div>
<div class="old-help-para">		Invokes the function as with:<pre>call Callback('one', 'two', 'name')</pre></div>
<div class="old-help-para">		The Dictionary is only useful when calling a "dict" function.
		In that case the <code>{dict}</code> is passed in as "self". Example:<pre>function Callback() dict
   echo "called for " .. self.name
endfunction
"...
let context = {"name": "example"}
let Func = function('Callback', context)
"...
call Func()        " will echo: called for example</pre></div>
<div class="old-help-para">		The use of function() is not needed when there are no extra
		arguments, these two are equivalent, if Callback() is defined
		as context.Callback():<pre>let Func = function('Callback', context)
let Func = context.Callback</pre></div>
<div class="old-help-para">		The argument list and the Dictionary can be combined:<pre>function Callback(arg1, count) dict
"...
let context = {"name": "example"}
let Func = function('Callback', ['one'], context)
"...
call Func(500)</pre></div>
<div class="old-help-para">		Invokes the function as with:<pre>call context.Callback('one', 500)</pre></div>
<div class="old-help-para">		Returns 0 on error.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetFuncname()-&gt;function([arg])</pre>
garbagecollect([{atexit}])				<a name="garbagecollect()"></a><code class="help-tag-right">garbagecollect()</code>
		Cleanup unused <a href="/neovim-docs-web/en/eval#Lists">Lists</a> and <a href="/neovim-docs-web/en/eval#Dictionaries">Dictionaries</a> that have circular
		references.</div>
<div class="old-help-para">		There is hardly ever a need to invoke this function, as it is
		automatically done when Vim runs out of memory or is waiting
		for the user to press a key after <a href="/neovim-docs-web/en/options#'updatetime'">'updatetime'</a>.  Items without
		circular references are always freed when they become unused.
		This is useful if you have deleted a very big <a href="/neovim-docs-web/en/eval#List">List</a> and/or
		<a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> with circular references in a script that runs
		for a long time.</div>
<div class="old-help-para">		When the optional <code>{atexit}</code> argument is one, garbage
		collection will also be done when exiting Vim, if it wasn't
		done before.  This is useful when checking for memory leaks.</div>
<div class="old-help-para">		The garbage collection is not done immediately but only when
		it's safe to perform.  This is when waiting for the user to
		type a character.</div>
<div class="old-help-para">get(<code>{list}</code>, <code>{idx}</code> [, <code>{default}</code>])			<a name="get()"></a><code class="help-tag-right">get()</code>
		Get item <code>{idx}</code> from <a href="/neovim-docs-web/en/eval#List">List</a> <code>{list}</code>.  When this item is not
		available return <code>{default}</code>.  Return zero when <code>{default}</code> is
		omitted.
		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>mylist-&gt;get(idx)</pre>
get(<code>{blob}</code>, <code>{idx}</code> [, <code>{default}</code>])
		Get byte <code>{idx}</code> from <a href="/neovim-docs-web/en/eval#Blob">Blob</a> <code>{blob}</code>.  When this byte is not
		available return <code>{default}</code>.  Return -1 when <code>{default}</code> is
		omitted.
get(<code>{dict}</code>, <code>{key}</code> [, <code>{default}</code>])
		Get item with key <code>{key}</code> from <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> <code>{dict}</code>.  When this
		item is not available return <code>{default}</code>.  Return zero when
		<code>{default}</code> is omitted.  Useful example:<pre>let val = get(g:, 'var_name', 'default')</pre></div>
<div class="old-help-para">		This gets the value of g:var_name if it exists, and uses
		"default" when it does not exist.
get(<code>{func}</code>, <code>{what}</code>)
		Get item <code>{what}</code> from Funcref <code>{func}</code>.  Possible values for
		<code>{what}</code> are:
			"name"	The function name
			"func"	The function
			"dict"	The dictionary
			"args"	The list with arguments
		Returns zero on error.</div>
<div class="old-help-para">							<a name="getbufinfo()"></a><code class="help-tag-right">getbufinfo()</code>
getbufinfo([{buf}])
getbufinfo([{dict}])
		Get information about buffers as a List of Dictionaries.</div>
<div class="old-help-para">		Without an argument information about all the buffers is
		returned.</div>
<div class="old-help-para">		When the argument is a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> only the buffers matching
		the specified criteria are returned.  The following keys can
		be specified in <code>{dict}</code>:
			buflisted	include only listed buffers.
			bufloaded	include only loaded buffers.
			bufmodified	include only modified buffers.</div>
<div class="old-help-para">		Otherwise, <code>{buf}</code> specifies a particular buffer to return
		information for.  For the use of <code>{buf}</code>, see <a href="/neovim-docs-web/en/builtin#bufname()">bufname()</a>
		above.  If the buffer is found the returned List has one item.
		Otherwise the result is an empty list.</div>
<div class="old-help-para">		Each returned List item is a dictionary with the following
		entries:
			bufnr		Buffer number.
			changed		TRUE if the buffer is modified.
			changedtick	Number of changes made to the buffer.
			hidden		TRUE if the buffer is hidden.
			lastused	Timestamp in seconds, like
					<a href="/neovim-docs-web/en/builtin#localtime()">localtime()</a>, when the buffer was
					last used.
			listed		TRUE if the buffer is listed.
			lnum		Line number used for the buffer when
					opened in the current window.
					Only valid if the buffer has been
					displayed in the window in the past.
					If you want the line number of the
					last known cursor position in a given
					window, use <a href="/neovim-docs-web/en/builtin#line()">line()</a>:<pre>:echo line('.', {winid})</pre></div>
<div class="old-help-para">			linecount	Number of lines in the buffer (only
					valid when loaded)
			loaded		TRUE if the buffer is loaded.
			name		Full path to the file in the buffer.
			signs		List of signs placed in the buffer.
					Each list item is a dictionary with
					the following fields:
					    id	  sign identifier
					    lnum  line number
					    name  sign name
			variables	A reference to the dictionary with
					buffer-local variables.
			windows		List of <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>s that display this
					buffer</div>
<div class="old-help-para">		Examples:<pre>for buf in getbufinfo()
    echo buf.name
endfor
for buf in getbufinfo({'buflisted':1})
    if buf.changed
        ....
    endif
endfor</pre></div>
<div class="old-help-para">		To get buffer-local options use:<pre>getbufvar({bufnr}, '&amp;option_name')</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetBufnr()-&gt;getbufinfo()</pre></div>
<div class="old-help-para">							<a name="getbufline()"></a><code class="help-tag-right">getbufline()</code>
getbufline(<code>{buf}</code>, <code>{lnum}</code> [, <code>{end}</code>])
		Return a <a href="/neovim-docs-web/en/eval#List">List</a> with the lines starting from <code>{lnum}</code> to <code>{end}</code>
		(inclusive) in the buffer <code>{buf}</code>.  If <code>{end}</code> is omitted, a
		<a href="/neovim-docs-web/en/eval#List">List</a> with only the line <code>{lnum}</code> is returned.</div>
<div class="old-help-para">		For the use of <code>{buf}</code>, see <a href="/neovim-docs-web/en/builtin#bufname()">bufname()</a> above.</div>
<div class="old-help-para">		For <code>{lnum}</code> and <code>{end}</code> "$" can be used for the last line of the
		buffer.  Otherwise a number must be used.</div>
<div class="old-help-para">		When <code>{lnum}</code> is smaller than 1 or bigger than the number of
		lines in the buffer, an empty <a href="/neovim-docs-web/en/eval#List">List</a> is returned.</div>
<div class="old-help-para">		When <code>{end}</code> is greater than the number of lines in the buffer,
		it is treated as <code>{end}</code> is set to the number of lines in the
		buffer.  When <code>{end}</code> is before <code>{lnum}</code> an empty <a href="/neovim-docs-web/en/eval#List">List</a> is
		returned.</div>
<div class="old-help-para">		This function works only for loaded buffers.  For unloaded and
		non-existing buffers, an empty <a href="/neovim-docs-web/en/eval#List">List</a> is returned.</div>
<div class="old-help-para">		Example:<pre>:let lines = getbufline(bufnr("myfile"), 1, "$")</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetBufnr()-&gt;getbufline(lnum)</pre>
getbufvar(<code>{buf}</code>, <code>{varname}</code> [, <code>{def}</code>])				<a name="getbufvar()"></a><code class="help-tag-right">getbufvar()</code>
		The result is the value of option or local buffer variable
		<code>{varname}</code> in buffer <code>{buf}</code>.  Note that the name without "b:"
		must be used.
		The <code>{varname}</code> argument is a string.
		When <code>{varname}</code> is empty returns a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> with all the
		buffer-local variables.
		When <code>{varname}</code> is equal to "&amp;" returns a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> with all
		the buffer-local options.
		Otherwise, when <code>{varname}</code> starts with "&amp;" returns the value of
		a buffer-local option.
		This also works for a global or buffer-local option, but it
		doesn't work for a global variable, window-local variable or
		window-local option.
		For the use of <code>{buf}</code>, see <a href="/neovim-docs-web/en/builtin#bufname()">bufname()</a> above.
		When the buffer or variable doesn't exist <code>{def}</code> or an empty
		string is returned, there is no error message.
		Examples:<pre>:let bufmodified = getbufvar(1, "&amp;mod")
:echo "todo myvar = " .. getbufvar("todo", "myvar")</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetBufnr()-&gt;getbufvar(varname)</pre></div>
<div class="old-help-para">getchangelist([{buf}])					<a name="getchangelist()"></a><code class="help-tag-right">getchangelist()</code>
		Returns the <a href="/neovim-docs-web/en/motion#changelist">changelist</a> for the buffer <code>{buf}</code>. For the use
		of <code>{buf}</code>, see <a href="/neovim-docs-web/en/builtin#bufname()">bufname()</a> above. If buffer <code>{buf}</code> doesn't
		exist, an empty list is returned.</div>
<div class="old-help-para">		The returned list contains two entries: a list with the change
		locations and the current position in the list.  Each
		entry in the change list is a dictionary with the following
		entries:
			col		column number
			coladd		column offset for <a href="/neovim-docs-web/en/options#'virtualedit'">'virtualedit'</a>
			lnum		line number
		If buffer <code>{buf}</code> is the current buffer, then the current
		position refers to the position in the list. For other
		buffers, it is set to the length of the list.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetBufnr()-&gt;getchangelist()</pre>
getchar([expr])						<a name="getchar()"></a><code class="help-tag-right">getchar()</code>
		Get a single character from the user or input stream.
		If [expr] is omitted, wait until a character is available.
		If [expr] is 0, only get a character when one is available.
			Return zero otherwise.
		If [expr] is 1, only check if a character is available, it is
			not consumed.  Return zero if no character available.
		If you prefer always getting a string use <a href="/neovim-docs-web/en/builtin#getcharstr()">getcharstr()</a>.</div>
<div class="old-help-para">		Without [expr] and when [expr] is 0 a whole character or
		special key is returned.  If it is a single character, the
		result is a Number.  Use <a href="/neovim-docs-web/en/builtin#nr2char()">nr2char()</a> to convert it to a String.
		Otherwise a String is returned with the encoded character.
		For a special key it's a String with a sequence of bytes
		starting with 0x80 (decimal: 128).  This is the same value as
		the String "\&lt;Key&gt;", e.g., "\&lt;Left&gt;".  The returned value is
		also a String when a modifier (shift, control, alt) was used
		that is not included in the character.</div>
<div class="old-help-para">		When [expr] is 0 and Esc is typed, there will be a short delay
		while Vim waits to see if this is the start of an escape
		sequence.</div>
<div class="old-help-para">		When [expr] is 1 only the first byte is returned.  For a
		one-byte character it is the character itself as a number.
		Use nr2char() to convert it to a String.</div>
<div class="old-help-para">		Use getcharmod() to obtain any additional modifiers.</div>
<div class="old-help-para">		When the user clicks a mouse button, the mouse event will be
		returned.  The position can then be found in <a href="/neovim-docs-web/en/eval#v%3Amouse_col">v:mouse_col</a>,
		<a href="/neovim-docs-web/en/eval#v%3Amouse_lnum">v:mouse_lnum</a>, <a href="/neovim-docs-web/en/eval#v%3Amouse_winid">v:mouse_winid</a> and <a href="/neovim-docs-web/en/eval#v%3Amouse_win">v:mouse_win</a>.
		<a href="/neovim-docs-web/en/builtin#getmousepos()">getmousepos()</a> can also be used.  Mouse move events will be
		ignored.
		This example positions the mouse as it would normally happen:<pre>let c = getchar()
if c == "\&lt;LeftMouse&gt;" &amp;&amp; v:mouse_win &gt; 0
  exe v:mouse_win .. "wincmd w"
  exe v:mouse_lnum
  exe "normal " .. v:mouse_col .. "|"
endif</pre></div>
<div class="old-help-para">		There is no prompt, you will somehow have to make clear to the
		user that a character has to be typed.  The screen is not
		redrawn, e.g. when resizing the window.</div>
<div class="old-help-para">		There is no mapping for the character.
		Key codes are replaced, thus when the user presses the <code>&lt;Del&gt;</code>
		key you get the code for the <code>&lt;Del&gt;</code> key, not the raw character
		sequence.  Examples:<pre>getchar() == "\&lt;Del&gt;"
getchar() == "\&lt;S-Left&gt;"</pre></div>
<div class="old-help-para">		This example redefines "f" to ignore case:<pre>:nmap f :call FindChar()&lt;CR&gt;
:function FindChar()
:  let c = nr2char(getchar())
:  while col('.') &lt; col('$') - 1
:    normal l
:    if getline('.')[col('.') - 1] ==? c
:      break
:    endif
:  endwhile
:endfunction</pre></div>
<div class="old-help-para">getcharmod()						<a name="getcharmod()"></a><code class="help-tag-right">getcharmod()</code>
		The result is a Number which is the state of the modifiers for
		the last obtained character with getchar() or in another way.
		These values are added together:
			2	shift
			4	control
			8	alt (meta)
			16	meta (when it's different from ALT)
			32	mouse double click
			64	mouse triple click
			96	mouse quadruple click (== 32 + 64)
			128	command (Macintosh only)
		Only the modifiers that have not been included in the
		character itself are obtained.  Thus Shift-a results in "A"
		without a modifier.  Returns 0 if no modifiers are used.</div>
<div class="old-help-para">							<a name="getcharpos()"></a><code class="help-tag-right">getcharpos()</code>
getcharpos(<code>{expr}</code>)
		Get the position for String <code>{expr}</code>. Same as <a href="/neovim-docs-web/en/builtin#getpos()">getpos()</a> but the
		column number in the returned List is a character index
		instead of a byte index.</div>
<div class="old-help-para">		Example:
		With the cursor on '???' in line 5 with text "????????????":<pre>getcharpos('.')                returns [0, 5, 3, 0]
getpos('.')                returns [0, 5, 7, 0]</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetMark()-&gt;getcharpos()</pre>
getcharsearch()						<a name="getcharsearch()"></a><code class="help-tag-right">getcharsearch()</code>
		Return the current character search information as a <code>{dict}</code>
		with the following entries:</div>
<div class="old-help-para">		    char	character previously used for a character
				search (<a href="/neovim-docs-web/en/motion#t">t</a>, <a href="/neovim-docs-web/en/motion#f">f</a>, <a href="/neovim-docs-web/en/motion#T">T</a>, or <a href="/neovim-docs-web/en/motion#F">F</a>); empty string
				if no character search has been performed
		    forward	direction of character search; 1 for forward,
				0 for backward
		    until	type of character search; 1 for a <a href="/neovim-docs-web/en/motion#t">t</a> or <a href="/neovim-docs-web/en/motion#T">T</a>
				character search, 0 for an <a href="/neovim-docs-web/en/motion#f">f</a> or <a href="/neovim-docs-web/en/motion#F">F</a>
				character search</div>
<div class="old-help-para">		This can be useful to always have <a href="/neovim-docs-web/en/motion#%3B">;</a> and <a href="/neovim-docs-web/en/motion#%2C">,</a> search
		forward/backward regardless of the direction of the previous
		character search:<pre>:nnoremap &lt;expr&gt; ; getcharsearch().forward ? ';' : ','
:nnoremap &lt;expr&gt; , getcharsearch().forward ? ',' : ';'</pre></div>
<div class="old-help-para">		Also see <a href="/neovim-docs-web/en/builtin#setcharsearch()">setcharsearch()</a>.</div>
<div class="old-help-para">getcharstr([expr])					<a name="getcharstr()"></a><code class="help-tag-right">getcharstr()</code>
		Get a single character from the user or input stream as a
		string.
		If [expr] is omitted, wait until a character is available.
		If [expr] is 0 or false, only get a character when one is
			available.  Return an empty string otherwise.
		If [expr] is 1 or true, only check if a character is
			available, it is not consumed.  Return an empty string
			if no character is available.
		Otherwise this works like <a href="/neovim-docs-web/en/builtin#getchar()">getchar()</a>, except that a number
		result is converted to a string.</div>
<div class="old-help-para">getcmdcompltype()					<a name="getcmdcompltype()"></a><code class="help-tag-right">getcmdcompltype()</code>
		Return the type of the current command-line completion.
		Only works when the command line is being edited, thus
		requires use of <a href="/neovim-docs-web/en/cmdline#c_CTRL-%5C_e">c_CTRL-\_e</a> or <a href="/neovim-docs-web/en/cmdline#c_CTRL-R_%3D">c_CTRL-R_=</a>.
		See <a href="/neovim-docs-web/en/map#%3Acommand-completion">:command-completion</a> for the return string.
		Also see <a href="/neovim-docs-web/en/builtin#getcmdtype()">getcmdtype()</a>, <a href="/neovim-docs-web/en/builtin#setcmdpos()">setcmdpos()</a>, <a href="/neovim-docs-web/en/builtin#getcmdline()">getcmdline()</a> and
		<a href="/neovim-docs-web/en/builtin#setcmdline()">setcmdline()</a>.
		Returns an empty string when completion is not defined.</div>
<div class="old-help-para">getcmdline()						<a name="getcmdline()"></a><code class="help-tag-right">getcmdline()</code>
		Return the current command-line.  Only works when the command
		line is being edited, thus requires use of <a href="/neovim-docs-web/en/cmdline#c_CTRL-%5C_e">c_CTRL-\_e</a> or
		<a href="/neovim-docs-web/en/cmdline#c_CTRL-R_%3D">c_CTRL-R_=</a>.
		Example:<pre>:cmap &lt;F7&gt; &lt;C-\&gt;eescape(getcmdline(), ' \')&lt;CR&gt;</pre></div>
<div class="old-help-para">		Also see <a href="/neovim-docs-web/en/builtin#getcmdtype()">getcmdtype()</a>, <a href="/neovim-docs-web/en/builtin#getcmdpos()">getcmdpos()</a>, <a href="/neovim-docs-web/en/builtin#setcmdpos()">setcmdpos()</a> and
		<a href="/neovim-docs-web/en/builtin#setcmdline()">setcmdline()</a>.
		Returns an empty string when entering a password or using
		<a href="/neovim-docs-web/en/builtin#inputsecret()">inputsecret()</a>.</div>
<div class="old-help-para">getcmdpos()						<a name="getcmdpos()"></a><code class="help-tag-right">getcmdpos()</code>
		Return the position of the cursor in the command line as a
		byte count.  The first column is 1.
		Only works when editing the command line, thus requires use of
		<a href="/neovim-docs-web/en/cmdline#c_CTRL-%5C_e">c_CTRL-\_e</a> or <a href="/neovim-docs-web/en/cmdline#c_CTRL-R_%3D">c_CTRL-R_=</a> or an expression mapping.
		Returns 0 otherwise.
		Also see <a href="/neovim-docs-web/en/builtin#getcmdtype()">getcmdtype()</a>, <a href="/neovim-docs-web/en/builtin#setcmdpos()">setcmdpos()</a>, <a href="/neovim-docs-web/en/builtin#getcmdline()">getcmdline()</a> and
		<a href="/neovim-docs-web/en/builtin#setcmdline()">setcmdline()</a>.</div>
<div class="old-help-para">getcmdscreenpos()					<a name="getcmdscreenpos()"></a><code class="help-tag-right">getcmdscreenpos()</code>
		Return the screen position of the cursor in the command line
		as a byte count.  The first column is 1.
		Instead of <a href="/neovim-docs-web/en/builtin#getcmdpos()">getcmdpos()</a>, it adds the prompt position.
		Only works when editing the command line, thus requires use of
		<a href="/neovim-docs-web/en/cmdline#c_CTRL-%5C_e">c_CTRL-\_e</a> or <a href="/neovim-docs-web/en/cmdline#c_CTRL-R_%3D">c_CTRL-R_=</a> or an expression mapping.
		Returns 0 otherwise.
		Also see <a href="/neovim-docs-web/en/builtin#getcmdpos()">getcmdpos()</a>, <a href="/neovim-docs-web/en/builtin#setcmdpos()">setcmdpos()</a>, <a href="/neovim-docs-web/en/builtin#getcmdline()">getcmdline()</a> and
		<a href="/neovim-docs-web/en/builtin#setcmdline()">setcmdline()</a>.</div>
<div class="old-help-para">getcmdtype()						<a name="getcmdtype()"></a><code class="help-tag-right">getcmdtype()</code>
		Return the current command-line type. Possible return values
		are:
		    :	normal Ex command
		    &gt;	debug mode command <a href="/neovim-docs-web/en/repeat#debug-mode">debug-mode</a>
		    /	forward search command
		    ?	backward search command
		    @	<a href="/neovim-docs-web/en/builtin#input()">input()</a> command
		    -		<a href="/neovim-docs-web/en/insert#%3Ainsert">:insert</a> or <a href="/neovim-docs-web/en/insert#%3Aappend">:append</a> command
		    =	<a href="/neovim-docs-web/en/insert#i_CTRL-R_%3D">i_CTRL-R_=</a>
		Only works when editing the command line, thus requires use of
		<a href="/neovim-docs-web/en/cmdline#c_CTRL-%5C_e">c_CTRL-\_e</a> or <a href="/neovim-docs-web/en/cmdline#c_CTRL-R_%3D">c_CTRL-R_=</a> or an expression mapping.
		Returns an empty string otherwise.
		Also see <a href="/neovim-docs-web/en/builtin#getcmdpos()">getcmdpos()</a>, <a href="/neovim-docs-web/en/builtin#setcmdpos()">setcmdpos()</a> and <a href="/neovim-docs-web/en/builtin#getcmdline()">getcmdline()</a>.</div>
<div class="old-help-para">getcmdwintype()						<a name="getcmdwintype()"></a><code class="help-tag-right">getcmdwintype()</code>
		Return the current <a href="/neovim-docs-web/en/cmdline#command-line-window">command-line-window</a> type. Possible return
		values are the same as <a href="/neovim-docs-web/en/builtin#getcmdtype()">getcmdtype()</a>. Returns an empty string
		when not in the command-line window.</div>
<div class="old-help-para">getcompletion(<code>{pat}</code>, <code>{type}</code> [, <code>{filtered}</code>])		<a name="getcompletion()"></a><code class="help-tag-right">getcompletion()</code>
		Return a list of command-line completion matches. The String
		<code>{type}</code> argument specifies what for.  The following completion
		types are supported:</div>
<div class="old-help-para">		arglist		file names in argument list
		augroup		autocmd groups
		buffer		buffer names
		behave		:behave suboptions
		cmdline		<a href="/neovim-docs-web/en/cmdline#cmdline-completion">cmdline-completion</a> result
		color		color schemes
		command		Ex command
		compiler	compilers
		diff_buffer     <a href="/neovim-docs-web/en/diff#%3Adiffget">:diffget</a> and <a href="/neovim-docs-web/en/diff#%3Adiffput">:diffput</a> completion
		dir		directory names
		environment	environment variable names
		event		autocommand events
		expression	Vim expression
		file		file and directory names
		file_in_path	file and directory names in <a href="/neovim-docs-web/en/options#'path'">'path'</a>
		filetype	filetype names <a href="/neovim-docs-web/en/options#'filetype'">'filetype'</a>
		function	function name
		help		help subjects
		highlight	highlight groups
		history		:history suboptions
		locale		locale names (as output of locale -a)
		mapclear	buffer argument
		mapping		mapping name
		menu		menus
		messages	<a href="/neovim-docs-web/en/message#%3Amessages">:messages</a> suboptions
		option		options
		packadd		optional package <a href="/neovim-docs-web/en/repeat#pack-add">pack-add</a> names
		shellcmd	Shell command
		sign		<a href="/neovim-docs-web/en/sign#%3Asign">:sign</a> suboptions
		syntax		syntax file names <a href="/neovim-docs-web/en/options#'syntax'">'syntax'</a>
		syntime		<a href="/neovim-docs-web/en/syntax#%3Asyntime">:syntime</a> suboptions
		tag		tags
		tag_listfiles	tags, file names
		user		user names
		var		user variables</div>
<div class="old-help-para">		If <code>{pat}</code> is an empty string, then all the matches are
		returned.  Otherwise only items matching <code>{pat}</code> are returned.
		See <a href="/neovim-docs-web/en/editing#wildcards">wildcards</a> for the use of special characters in <code>{pat}</code>.</div>
<div class="old-help-para">		If the optional <code>{filtered}</code> flag is set to 1, then <a href="/neovim-docs-web/en/options#'wildignore'">'wildignore'</a>
		is applied to filter the results.  Otherwise all the matches
		are returned. The <a href="/neovim-docs-web/en/options#'wildignorecase'">'wildignorecase'</a> option always applies.</div>
<div class="old-help-para">		If <code>{type}</code> is "cmdline", then the <a href="/neovim-docs-web/en/cmdline#cmdline-completion">cmdline-completion</a> result is
		returned.  For example, to complete the possible values after
		a ":call" command:<pre>echo getcompletion('call ', 'cmdline')</pre></div>
<div class="old-help-para">		If there are no matches, an empty list is returned.  An
		invalid value for <code>{type}</code> produces an error.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetPattern()-&gt;getcompletion('color')</pre></div>
<div class="old-help-para">							<a name="getcurpos()"></a><code class="help-tag-right">getcurpos()</code>
getcurpos([{winid}])
		Get the position of the cursor.  This is like getpos('.'), but
		includes an extra "curswant" in the list:
<div class="help-column_heading">		    [0, lnum, col, off, curswant]</div>		The "curswant" number is the preferred column when moving the
		cursor vertically.  Also see <a href="/neovim-docs-web/en/builtin#getcursorcharpos()">getcursorcharpos()</a> and
		<a href="/neovim-docs-web/en/builtin#getpos()">getpos()</a>.
		The first "bufnum" item is always zero. The byte position of
		the cursor is returned in "col". To get the character
		position, use <a href="/neovim-docs-web/en/builtin#getcursorcharpos()">getcursorcharpos()</a>.</div>
<div class="old-help-para">		The optional <code>{winid}</code> argument can specify the window.  It can
		be the window number or the <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>.  The last known
		cursor position is returned, this may be invalid for the
		current value of the buffer if it is not the current window.
		If <code>{winid}</code> is invalid a list with zeroes is returned.</div>
<div class="old-help-para">		This can be used to save and restore the cursor position:<pre>let save_cursor = getcurpos()
MoveTheCursorAround
call setpos('.', save_cursor)</pre></div>
<div class="old-help-para">		Note that this only works within the window.  See
		<a href="/neovim-docs-web/en/builtin#winrestview()">winrestview()</a> for restoring more state.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetWinid()-&gt;getcurpos()</pre></div>
<div class="old-help-para">							<a name="getcursorcharpos()"></a><code class="help-tag-right">getcursorcharpos()</code>
getcursorcharpos([{winid}])
		Same as <a href="/neovim-docs-web/en/builtin#getcurpos()">getcurpos()</a> but the column number in the returned
		List is a character index instead of a byte index.</div>
<div class="old-help-para">		Example:
		With the cursor on '???' in line 3 with text "????????????":<pre>getcursorcharpos()        returns [0, 3, 2, 0, 3]
getcurpos()                returns [0, 3, 4, 0, 3]</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetWinid()-&gt;getcursorcharpos()</pre>
getcwd([{winnr} [, <code>{tabnr}</code>]])				<a name="getcwd()"></a><code class="help-tag-right">getcwd()</code>
		With no arguments, returns the name of the effective
		<a href="/neovim-docs-web/en/editing#current-directory">current-directory</a>. With <code>{winnr}</code> or <code>{tabnr}</code> the working
		directory of that scope is returned, and <a href="/neovim-docs-web/en/options#'autochdir'">'autochdir'</a> is
		ignored.
		Tabs and windows are identified by their respective numbers,
		0 means current tab or window. Missing tab number implies 0.
		Thus the following are equivalent:<pre>getcwd(0)
getcwd(0, 0)</pre></div>
<div class="old-help-para">		If <code>{winnr}</code> is -1 it is ignored, only the tab is resolved.
		<code>{winnr}</code> can be the window number or the <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>.
		If both <code>{winnr}</code> and <code>{tabnr}</code> are -1 the global working
		directory is returned.
		Throw error if the arguments are invalid. <a href="/neovim-docs-web/en/vim_diff#E5000">E5000</a> <a href="/neovim-docs-web/en/vim_diff#E5001">E5001</a> <a href="/neovim-docs-web/en/vim_diff#E5002">E5002</a></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetWinnr()-&gt;getcwd()</pre>
getenv(<code>{name}</code>)						<a name="getenv()"></a><code class="help-tag-right">getenv()</code>
		Return the value of environment variable <code>{name}</code>.  The <code>{name}</code>
		argument is a string, without a leading '$'.  Example:<pre>myHome = getenv('HOME')</pre></div>
<div class="old-help-para">		When the variable does not exist <a href="/neovim-docs-web/en/eval#v%3Anull">v:null</a> is returned.  That
		is different from a variable set to an empty string.
		See also <a href="/neovim-docs-web/en/eval#expr-env">expr-env</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetVarname()-&gt;getenv()</pre>
getfontname([{name}])					<a name="getfontname()"></a><code class="help-tag-right">getfontname()</code>
		Without an argument returns the name of the normal font being
		used.  Like what is used for the Normal highlight group
		<a href="/neovim-docs-web/en/syntax#hl-Normal">hl-Normal</a>.
		With an argument a check is done whether String <code>{name}</code> is a
		valid font name.  If not then an empty string is returned.
		Otherwise the actual font name is returned, or <code>{name}</code> if the
		GUI does not support obtaining the real name.
		Only works when the GUI is running, thus not in your vimrc or
		gvimrc file.  Use the <a href="/neovim-docs-web/en/deprecated#GUIEnter">GUIEnter</a> autocommand to use this
		function just after the GUI has started.</div>
<div class="old-help-para">getfperm(<code>{fname}</code>)					<a name="getfperm()"></a><code class="help-tag-right">getfperm()</code>
		The result is a String, which is the read, write, and execute
		permissions of the given file <code>{fname}</code>.
		If <code>{fname}</code> does not exist or its directory cannot be read, an
		empty string is returned.
		The result is of the form "rwxrwxrwx", where each group of
		"rwx" flags represent, in turn, the permissions of the owner
		of the file, the group the file belongs to, and other users.
		If a user does not have a given permission the flag for this
		is replaced with the string "-".  Examples:<pre>:echo getfperm("/etc/passwd")
:echo getfperm(expand("~/.config/nvim/init.vim"))</pre></div>
<div class="old-help-para">		This will hopefully (from a security point of view) display
		the string "rw-r--r--" or even "rw-------".</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetFilename()-&gt;getfperm()</pre></div>
<div class="old-help-para">		For setting permissions use <a href="/neovim-docs-web/en/builtin#setfperm()">setfperm()</a>.</div>
<div class="old-help-para">getfsize(<code>{fname}</code>)					<a name="getfsize()"></a><code class="help-tag-right">getfsize()</code>
		The result is a Number, which is the size in bytes of the
		given file <code>{fname}</code>.
		If <code>{fname}</code> is a directory, 0 is returned.
		If the file <code>{fname}</code> can't be found, -1 is returned.
		If the size of <code>{fname}</code> is too big to fit in a Number then -2
		is returned.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetFilename()-&gt;getfsize()</pre>
getftime(<code>{fname}</code>)					<a name="getftime()"></a><code class="help-tag-right">getftime()</code>
		The result is a Number, which is the last modification time of
		the given file <code>{fname}</code>.  The value is measured as seconds
		since 1st Jan 1970, and may be passed to strftime().  See also
		<a href="/neovim-docs-web/en/builtin#localtime()">localtime()</a> and <a href="/neovim-docs-web/en/builtin#strftime()">strftime()</a>.
		If the file <code>{fname}</code> can't be found -1 is returned.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetFilename()-&gt;getftime()</pre>
getftype(<code>{fname}</code>)					<a name="getftype()"></a><code class="help-tag-right">getftype()</code>
		The result is a String, which is a description of the kind of
		file of the given file <code>{fname}</code>.
		If <code>{fname}</code> does not exist an empty string is returned.
		Here is a table over different kinds of files and their
		results:
			Normal file		"file"
			Directory		"dir"
			Symbolic link		"link"
			Block device		"bdev"
			Character device	"cdev"
			Socket			"socket"
			FIFO			"fifo"
			All other		"other"
		Example:<pre>getftype("/home")</pre></div>
<div class="old-help-para">		Note that a type such as "link" will only be returned on
		systems that support it.  On some systems only "dir" and
		"file" are returned.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetFilename()-&gt;getftype()</pre>
getjumplist([{winnr} [, <code>{tabnr}</code>]])			<a name="getjumplist()"></a><code class="help-tag-right">getjumplist()</code>
		Returns the <a href="/neovim-docs-web/en/motion#jumplist">jumplist</a> for the specified window.</div>
<div class="old-help-para">		Without arguments use the current window.
		With <code>{winnr}</code> only use this window in the current tab page.
		<code>{winnr}</code> can also be a <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>.
		With <code>{winnr}</code> and <code>{tabnr}</code> use the window in the specified tab
		page.  If <code>{winnr}</code> or <code>{tabnr}</code> is invalid, an empty list is
		returned.</div>
<div class="old-help-para">		The returned list contains two entries: a list with the jump
		locations and the last used jump position number in the list.
		Each entry in the jump location list is a dictionary with
		the following entries:
			bufnr		buffer number
			col		column number
			coladd		column offset for <a href="/neovim-docs-web/en/options#'virtualedit'">'virtualedit'</a>
			filename	filename if available
			lnum		line number</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetWinnr()-&gt;getjumplist()</pre></div>
<div class="old-help-para">							<a name="getline()"></a><code class="help-tag-right">getline()</code>
getline(<code>{lnum}</code> [, <code>{end}</code>])
		Without <code>{end}</code> the result is a String, which is line <code>{lnum}</code>
		from the current buffer.  Example:<pre>getline(1)</pre></div>
<div class="old-help-para">		When <code>{lnum}</code> is a String that doesn't start with a
		digit, <a href="/neovim-docs-web/en/builtin#line()">line()</a> is called to translate the String into a Number.
		To get the line under the cursor:<pre>getline(".")</pre></div>
<div class="old-help-para">		When <code>{lnum}</code> is a number smaller than 1 or bigger than the
		number of lines in the buffer, an empty string is returned.</div>
<div class="old-help-para">		When <code>{end}</code> is given the result is a <a href="/neovim-docs-web/en/eval#List">List</a> where each item is
		a line from the current buffer in the range <code>{lnum}</code> to <code>{end}</code>,
		including line <code>{end}</code>.
		<code>{end}</code> is used in the same way as <code>{lnum}</code>.
		Non-existing lines are silently omitted.
		When <code>{end}</code> is before <code>{lnum}</code> an empty <a href="/neovim-docs-web/en/eval#List">List</a> is returned.
		Example:<pre>:let start = line('.')
:let end = search("^$") - 1
:let lines = getline(start, end)</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>ComputeLnum()-&gt;getline()</pre></div>
<div class="old-help-para">		To get lines from another buffer see <a href="/neovim-docs-web/en/builtin#getbufline()">getbufline()</a></div>
<div class="old-help-para">getloclist(<code>{nr}</code> [, <code>{what}</code>])				<a name="getloclist()"></a><code class="help-tag-right">getloclist()</code>
		Returns a <a href="/neovim-docs-web/en/eval#List">List</a> with all the entries in the location list for
		window <code>{nr}</code>.  <code>{nr}</code> can be the window number or the <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>.
		When <code>{nr}</code> is zero the current window is used.</div>
<div class="old-help-para">		For a location list window, the displayed location list is
		returned.  For an invalid window number <code>{nr}</code>, an empty list is
		returned. Otherwise, same as <a href="/neovim-docs-web/en/builtin#getqflist()">getqflist()</a>.</div>
<div class="old-help-para">		If the optional <code>{what}</code> dictionary argument is supplied, then
		returns the items listed in <code>{what}</code> as a dictionary. Refer to
		<a href="/neovim-docs-web/en/builtin#getqflist()">getqflist()</a> for the supported items in <code>{what}</code>.</div>
<div class="old-help-para">		In addition to the items supported by <a href="/neovim-docs-web/en/builtin#getqflist()">getqflist()</a> in <code>{what}</code>,
		the following item is supported by <a href="/neovim-docs-web/en/builtin#getloclist()">getloclist()</a>:</div>
<div class="old-help-para">			filewinid	id of the window used to display files
					from the location list. This field is
					applicable only when called from a
					location list window. See
					<a href="/neovim-docs-web/en/quickfix#location-list-file-window">location-list-file-window</a> for more
					details.</div>
<div class="old-help-para">		Returns a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> with default values if there is no
		location list for the window <code>{nr}</code>.
		Returns an empty Dictionary if window <code>{nr}</code> does not exist.</div>
<div class="old-help-para">		Examples (See also <a href="/neovim-docs-web/en/quickfix#getqflist-examples">getqflist-examples</a>):<pre>:echo getloclist(3, {'all': 0})
:echo getloclist(5, {'filewinid': 0})</pre>
getmarklist([{buf}])					<a name="getmarklist()"></a><code class="help-tag-right">getmarklist()</code>
		Without the <code>{buf}</code> argument returns a <a href="/neovim-docs-web/en/eval#List">List</a> with information
		about all the global marks. <a href="/neovim-docs-web/en/motion#mark">mark</a></div>
<div class="old-help-para">		If the optional <code>{buf}</code> argument is specified, returns the
		local marks defined in buffer <code>{buf}</code>.  For the use of <code>{buf}</code>,
		see <a href="/neovim-docs-web/en/builtin#bufname()">bufname()</a>.  If <code>{buf}</code> is invalid, an empty list is
		returned.</div>
<div class="old-help-para">		Each item in the returned List is a <a href="/neovim-docs-web/en/eval#Dict">Dict</a> with the following:
		    mark   name of the mark prefixed by "'"
		    pos	   a <a href="/neovim-docs-web/en/eval#List">List</a> with the position of the mark:
				[bufnum, lnum, col, off]
			   Refer to <a href="/neovim-docs-web/en/builtin#getpos()">getpos()</a> for more information.
		    file   file name</div>
<div class="old-help-para">		Refer to <a href="/neovim-docs-web/en/builtin#getpos()">getpos()</a> for getting information about a specific
		mark.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetBufnr()-&gt;getmarklist()</pre>
getmatches([{win}])					<a name="getmatches()"></a><code class="help-tag-right">getmatches()</code>
		Returns a <a href="/neovim-docs-web/en/eval#List">List</a> with all matches previously defined for the
		current window by <a href="/neovim-docs-web/en/builtin#matchadd()">matchadd()</a> and the <a href="/neovim-docs-web/en/pattern#%3Amatch">:match</a> commands.
		<a href="/neovim-docs-web/en/builtin#getmatches()">getmatches()</a> is useful in combination with <a href="/neovim-docs-web/en/builtin#setmatches()">setmatches()</a>,
		as <a href="/neovim-docs-web/en/builtin#setmatches()">setmatches()</a> can restore a list of matches saved by
		<a href="/neovim-docs-web/en/builtin#getmatches()">getmatches()</a>.
		If <code>{win}</code> is specified, use the window with this number or
		window ID instead of the current window.  If <code>{win}</code> is invalid,
		an empty list is returned.
		Example:<pre>:echo getmatches()</pre></div>
<div class="old-help-para">			[{"group": "MyGroup1", "pattern": "TODO",
			"priority": 10, "id": 1}, <code>{"group": "MyGroup2",}</code>
			"pattern": "FIXME", "priority": 10, "id": 2}]<pre>:let m = getmatches()
:call clearmatches()
:echo getmatches()</pre></div>
<div class="old-help-para">			[]<pre>:call setmatches(m)
:echo getmatches()</pre></div>
<div class="old-help-para">			[{"group": "MyGroup1", "pattern": "TODO",
			"priority": 10, "id": 1}, <code>{"group": "MyGroup2",}</code>
			"pattern": "FIXME", "priority": 10, "id": 2}]<pre>:unlet m</pre></div>
<div class="old-help-para">getmousepos()						<a name="getmousepos()"></a><code class="help-tag-right">getmousepos()</code>
		Returns a Dictionary with the last known position of the
		mouse.  This can be used in a mapping for a mouse click.  The
		items are:
			screenrow	screen row
			screencol	screen column
			winid		Window ID of the click
			winrow		row inside "winid"
			wincol		column inside "winid"
			line		text line inside "winid"
			column		text column inside "winid"
		All numbers are 1-based.</div>
<div class="old-help-para">		If not over a window, e.g. when in the command line, then only
		"screenrow" and "screencol" are valid, the others are zero.</div>
<div class="old-help-para">		When on the status line below a window or the vertical
		separator right of a window, the "line" and "column" values
		are zero.</div>
<div class="old-help-para">		When the position is after the text then "column" is the
		length of the text in bytes plus one.</div>
<div class="old-help-para">		If the mouse is over a focusable floating window then that
		window is used.</div>
<div class="old-help-para">		When using <a href="/neovim-docs-web/en/builtin#getchar()">getchar()</a> the Vim variables <a href="/neovim-docs-web/en/eval#v%3Amouse_lnum">v:mouse_lnum</a>,
		<a href="/neovim-docs-web/en/eval#v%3Amouse_col">v:mouse_col</a> and <a href="/neovim-docs-web/en/eval#v%3Amouse_winid">v:mouse_winid</a> also provide these values.</div>
<div class="old-help-para">							<a name="getpid()"></a><code class="help-tag-right">getpid()</code>
getpid()	Return a Number which is the process ID of the Vim process.
		This is a unique number, until Vim exits.</div>
<div class="old-help-para">							<a name="getpos()"></a><code class="help-tag-right">getpos()</code>
getpos(<code>{expr}</code>)	Get the position for String <code>{expr}</code>.  For possible values of
		<code>{expr}</code> see <a href="/neovim-docs-web/en/builtin#line()">line()</a>.  For getting the cursor position see
		<a href="/neovim-docs-web/en/builtin#getcurpos()">getcurpos()</a>.
		The result is a <a href="/neovim-docs-web/en/eval#List">List</a> with four numbers:
		    [bufnum, lnum, col, off]
		"bufnum" is zero, unless a mark like '0 or 'A is used, then it
		is the buffer number of the mark.
		"lnum" and "col" are the position in the buffer.  The first
		column is 1.
		The "off" number is zero, unless <a href="/neovim-docs-web/en/options#'virtualedit'">'virtualedit'</a> is used.  Then
		it is the offset in screen columns from the start of the
		character.  E.g., a position within a <code>&lt;Tab&gt;</code> or after the last
		character.
		Note that for '&lt; and '&gt; Visual mode matters: when it is "V"
		(visual line mode) the column of '&lt; is zero and the column of
		'&gt; is a large number.
		The column number in the returned List is the byte position
		within the line. To get the character position in the line,
		use <a href="/neovim-docs-web/en/builtin#getcharpos()">getcharpos()</a>.
		The column number can be very large, e.g. 2147483647, in which
		case it means "after the end of the line".
		If <code>{expr}</code> is invalid, returns a list with all zeros.
		This can be used to save and restore the position of a mark:<pre>let save_a_mark = getpos("'a")
...
call setpos("'a", save_a_mark)</pre></div>
<div class="old-help-para">		Also see <a href="/neovim-docs-web/en/builtin#getcharpos()">getcharpos()</a>, <a href="/neovim-docs-web/en/builtin#getcurpos()">getcurpos()</a> and <a href="/neovim-docs-web/en/builtin#setpos()">setpos()</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetMark()-&gt;getpos()</pre>
getqflist([{what}])					<a name="getqflist()"></a><code class="help-tag-right">getqflist()</code>
		Returns a <a href="/neovim-docs-web/en/eval#List">List</a> with all the current quickfix errors.  Each
		list item is a dictionary with these entries:
			bufnr	number of buffer that has the file name, use
				bufname() to get the name
			module	module name
			lnum	line number in the buffer (first line is 1)
			end_lnum
				end of line number if the item is multiline
			col	column number (first column is 1)
			end_col	end of column number if the item has range
			vcol	<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a>: "col" is visual column
				<a href="/neovim-docs-web/en/eval#FALSE">FALSE</a>: "col" is byte index
			nr	error number
			pattern	search pattern used to locate the error
			text	description of the error
			type	type of the error, 'E', '1', etc.
			valid	<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a>: recognized error message</div>
<div class="old-help-para">		When there is no error list or it's empty, an empty list is
		returned. Quickfix list entries with a non-existing buffer
		number are returned with "bufnr" set to zero (Note: some
		functions accept buffer number zero for the alternate buffer,
		you may need to explicitly check for zero).</div>
<div class="old-help-para">		Useful application: Find pattern matches in multiple files and
		do something with them:<pre>:vimgrep /theword/jg *.c
:for d in getqflist()
:   echo bufname(d.bufnr) ':' d.lnum '=' d.text
:endfor</pre></div>
<div class="old-help-para">		If the optional <code>{what}</code> dictionary argument is supplied, then
		returns only the items listed in <code>{what}</code> as a dictionary. The
		following string items are supported in <code>{what}</code>:
			changedtick	get the total number of changes made
					to the list <a href="/neovim-docs-web/en/quickfix#quickfix-changedtick">quickfix-changedtick</a>
			context	get the <a href="/neovim-docs-web/en/quickfix#quickfix-context">quickfix-context</a>
			efm	errorformat to use when parsing "lines". If
				not present, then the <a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a> option
				value is used.
			id	get information for the quickfix list with
				<a href="/neovim-docs-web/en/quickfix#quickfix-ID">quickfix-ID</a>; zero means the id for the
				current list or the list specified by "nr"
			idx	get information for the quickfix entry at this
				index in the list specified by "id" or "nr".
				If set to zero, then uses the current entry.
				See <a href="/neovim-docs-web/en/quickfix#quickfix-index">quickfix-index</a>
			items	quickfix list entries
			lines	parse a list of lines using <a href="/neovim-docs-web/en/options#'efm'">'efm'</a> and return
				the resulting entries.  Only a <a href="/neovim-docs-web/en/eval#List">List</a> type is
				accepted.  The current quickfix list is not
				modified. See <a href="/neovim-docs-web/en/quickfix#quickfix-parse">quickfix-parse</a>.
			nr	get information for this quickfix list; zero
				means the current quickfix list and "$" means
				the last quickfix list
			qfbufnr number of the buffer displayed in the quickfix
				window. Returns 0 if the quickfix buffer is
				not present. See <a href="/neovim-docs-web/en/quickfix#quickfix-buffer">quickfix-buffer</a>.
			size	number of entries in the quickfix list
			title	get the list title <a href="/neovim-docs-web/en/quickfix#quickfix-title">quickfix-title</a>
			winid	get the quickfix <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>
			all	all of the above quickfix properties
		Non-string items in <code>{what}</code> are ignored. To get the value of a
		particular item, set it to zero.
		If "nr" is not present then the current quickfix list is used.
		If both "nr" and a non-zero "id" are specified, then the list
		specified by "id" is used.
		To get the number of lists in the quickfix stack, set "nr" to
		"$" in <code>{what}</code>. The "nr" value in the returned dictionary
		contains the quickfix stack size.
		When "lines" is specified, all the other items except "efm"
		are ignored.  The returned dictionary contains the entry
		"items" with the list of entries.</div>
<div class="old-help-para">		The returned dictionary contains the following entries:
			changedtick	total number of changes made to the
					list <a href="/neovim-docs-web/en/quickfix#quickfix-changedtick">quickfix-changedtick</a>
			context	quickfix list context. See <a href="/neovim-docs-web/en/quickfix#quickfix-context">quickfix-context</a>
				If not present, set to "".
			id	quickfix list ID <a href="/neovim-docs-web/en/quickfix#quickfix-ID">quickfix-ID</a>. If not
				present, set to 0.
			idx	index of the quickfix entry in the list. If not
				present, set to 0.
			items	quickfix list entries. If not present, set to
				an empty list.
			nr	quickfix list number. If not present, set to 0
			qfbufnr	number of the buffer displayed in the quickfix
				window. If not present, set to 0.
			size	number of entries in the quickfix list. If not
				present, set to 0.
			title	quickfix list title text. If not present, set
				to "".
			winid	quickfix <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>. If not present, set to 0</div>
<div class="old-help-para">		Examples (See also <a href="/neovim-docs-web/en/quickfix#getqflist-examples">getqflist-examples</a>):<pre>:echo getqflist({'all': 1})
:echo getqflist({'nr': 2, 'title': 1})
:echo getqflist({'lines' : ["F1:10:L10"]})</pre></div>
<div class="old-help-para">getreg([{regname} [, 1 [, <code>{list}</code>]]])			<a name="getreg()"></a><code class="help-tag-right">getreg()</code>
		The result is a String, which is the contents of register
		<code>{regname}</code>.  Example:<pre>:let cliptext = getreg('*')</pre></div>
<div class="old-help-para">		When register <code>{regname}</code> was not set the result is an empty
		string.
		The <code>{regname}</code> argument must be a string.</div>
<div class="old-help-para">		getreg('=') returns the last evaluated value of the expression
		register.  (For use in maps.)
		getreg('=', 1) returns the expression itself, so that it can
		be restored with <a href="/neovim-docs-web/en/builtin#setreg()">setreg()</a>.  For other registers the extra
		argument is ignored, thus you can always give it.</div>
<div class="old-help-para">		If <code>{list}</code> is present and <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a>, the result type is changed
		to <a href="/neovim-docs-web/en/eval#List">List</a>. Each list item is one text line. Use it if you care
		about zero bytes possibly present inside register: without
		third argument both NLs and zero bytes are represented as NLs
		(see <a href="/neovim-docs-web/en/pattern#NL-used-for-Nul">NL-used-for-Nul</a>).
		When the register was not set an empty list is returned.</div>
<div class="old-help-para">		If <code>{regname}</code> is not specified, <a href="/neovim-docs-web/en/eval#v%3Aregister">v:register</a> is used.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetRegname()-&gt;getreg()</pre>
getreginfo([{regname}])					<a name="getreginfo()"></a><code class="help-tag-right">getreginfo()</code>
		Returns detailed information about register <code>{regname}</code> as a
		Dictionary with the following entries:
			regcontents	List of lines contained in register
					<code>{regname}</code>, like
					getreg(<code>{regname}</code>, 1, 1).
			regtype		the type of register <code>{regname}</code>, as in
					<a href="/neovim-docs-web/en/builtin#getregtype()">getregtype()</a>.
			isunnamed	Boolean flag, v:true if this register
					is currently pointed to by the unnamed
					register.
			points_to	for the unnamed register, gives the
					single letter name of the register
					currently pointed to (see <a href="/neovim-docs-web/en/change#quotequote">quotequote</a>).
					For example, after deleting a line
					with <code>dd</code>, this field will be "1",
					which is the register that got the
					deleted text.</div>
<div class="old-help-para">		The <code>{regname}</code> argument is a string.  If <code>{regname}</code> is invalid
		or not set, an empty Dictionary will be returned.
		If <code>{regname}</code> is not specified, <a href="/neovim-docs-web/en/eval#v%3Aregister">v:register</a> is used.
		The returned Dictionary can be passed to <a href="/neovim-docs-web/en/builtin#setreg()">setreg()</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetRegname()-&gt;getreginfo()</pre>
getregtype([{regname}])					<a name="getregtype()"></a><code class="help-tag-right">getregtype()</code>
		The result is a String, which is type of register <code>{regname}</code>.
		The value will be one of:
		    "v"			for <a href="/neovim-docs-web/en/motion#charwise">charwise</a> text
		    "V"			for <a href="/neovim-docs-web/en/motion#linewise">linewise</a> text
		    "&lt;CTRL-V&gt;{width}"	for <a href="/neovim-docs-web/en/visual#blockwise-visual">blockwise-visual</a> text
		    ""			for an empty or unknown register
		<code>&lt;CTRL-V&gt;</code> is one character with value 0x16.
		The <code>{regname}</code> argument is a string.  If <code>{regname}</code> is not
		specified, <a href="/neovim-docs-web/en/eval#v%3Aregister">v:register</a> is used.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetRegname()-&gt;getregtype()</pre>
gettabinfo([{tabnr}])					<a name="gettabinfo()"></a><code class="help-tag-right">gettabinfo()</code>
		If <code>{tabnr}</code> is not specified, then information about all the
		tab pages is returned as a <a href="/neovim-docs-web/en/eval#List">List</a>. Each List item is a
		<a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a>.  Otherwise, <code>{tabnr}</code> specifies the tab page
		number and information about that one is returned.  If the tab
		page does not exist an empty List is returned.</div>
<div class="old-help-para">		Each List item is a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> with the following entries:
			tabnr		tab page number.
			variables	a reference to the dictionary with
					tabpage-local variables
			windows		List of <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>s in the tab page.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetTabnr()-&gt;gettabinfo()</pre>
gettabvar(<code>{tabnr}</code>, <code>{varname}</code> [, <code>{def}</code>])				<a name="gettabvar()"></a><code class="help-tag-right">gettabvar()</code>
		Get the value of a tab-local variable <code>{varname}</code> in tab page
		<code>{tabnr}</code>. <a href="/neovim-docs-web/en/eval#t%3Avar">t:var</a>
		Tabs are numbered starting with one.
		The <code>{varname}</code> argument is a string.  When <code>{varname}</code> is empty a
		dictionary with all tab-local variables is returned.
		Note that the name without "t:" must be used.
		When the tab or variable doesn't exist <code>{def}</code> or an empty
		string is returned, there is no error message.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetTabnr()-&gt;gettabvar(varname)</pre>
gettabwinvar(<code>{tabnr}</code>, <code>{winnr}</code>, <code>{varname}</code> [, <code>{def}</code>])		<a name="gettabwinvar()"></a><code class="help-tag-right">gettabwinvar()</code>
		Get the value of window-local variable <code>{varname}</code> in window
		<code>{winnr}</code> in tab page <code>{tabnr}</code>.
		The <code>{varname}</code> argument is a string.  When <code>{varname}</code> is empty a
		dictionary with all window-local variables is returned.
		When <code>{varname}</code> is equal to "&amp;" get the values of all
		window-local options in a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a>.
		Otherwise, when <code>{varname}</code> starts with "&amp;" get the value of a
		window-local option.
		Note that <code>{varname}</code> must be the name without "w:".
		Tabs are numbered starting with one.  For the current tabpage
		use <a href="/neovim-docs-web/en/builtin#getwinvar()">getwinvar()</a>.
		<code>{winnr}</code> can be the window number or the <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>.
		When <code>{winnr}</code> is zero the current window is used.
		This also works for a global option, buffer-local option and
		window-local option, but it doesn't work for a global variable
		or buffer-local variable.
		When the tab, window or variable doesn't exist <code>{def}</code> or an
		empty string is returned, there is no error message.
		Examples:<pre>:let list_is_on = gettabwinvar(1, 2, '&amp;list')
:echo "myvar = " .. gettabwinvar(3, 1, 'myvar')</pre></div>
<div class="old-help-para">		To obtain all window-local variables use:<pre>gettabwinvar({tabnr}, {winnr}, '&amp;')</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetTabnr()-&gt;gettabwinvar(winnr, varname)</pre>
gettagstack([{winnr}])					<a name="gettagstack()"></a><code class="help-tag-right">gettagstack()</code>
		The result is a Dict, which is the tag stack of window <code>{winnr}</code>.
		<code>{winnr}</code> can be the window number or the <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>.
		When <code>{winnr}</code> is not specified, the current window is used.
		When window <code>{winnr}</code> doesn't exist, an empty Dict is returned.</div>
<div class="old-help-para">		The returned dictionary contains the following entries:
			curidx		Current index in the stack. When at
					top of the stack, set to (length + 1).
					Index of bottom of the stack is 1.
			items		List of items in the stack. Each item
					is a dictionary containing the
					entries described below.
			length		Number of entries in the stack.</div>
<div class="old-help-para">		Each item in the stack is a dictionary with the following
		entries:
			bufnr		buffer number of the current jump
			from		cursor position before the tag jump.
					See <a href="/neovim-docs-web/en/builtin#getpos()">getpos()</a> for the format of the
					returned list.
			matchnr		current matching tag number. Used when
					multiple matching tags are found for a
					name.
			tagname		name of the tag</div>
<div class="old-help-para">		See <a href="/neovim-docs-web/en/tagsrch#tagstack">tagstack</a> for more information about the tag stack.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetWinnr()-&gt;gettagstack()</pre>
gettext(<code>{text}</code>)						<a name="gettext()"></a><code class="help-tag-right">gettext()</code>
		Translate String <code>{text}</code> if possible.
		This is mainly for use in the distributed Vim scripts.  When
		generating message translations the <code>{text}</code> is extracted by
		xgettext, the translator can add the translated message in the
		.po file and Vim will lookup the translation when gettext() is
		called.
		For <code>{text}</code> double quoted strings are preferred, because
		xgettext does not understand escaping in single quoted
		strings.</div>
<div class="old-help-para">getwininfo([{winid}])					<a name="getwininfo()"></a><code class="help-tag-right">getwininfo()</code>
		Returns information about windows as a <a href="/neovim-docs-web/en/eval#List">List</a> with Dictionaries.</div>
<div class="old-help-para">		If <code>{winid}</code> is given Information about the window with that ID
		is returned, as a <a href="/neovim-docs-web/en/eval#List">List</a> with one item.  If the window does not
		exist the result is an empty list.</div>
<div class="old-help-para">		Without <code>{winid}</code> information about all the windows in all the
		tab pages is returned.</div>
<div class="old-help-para">		Each List item is a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> with the following entries:
			botline		last complete displayed buffer line
			bufnr		number of buffer in the window
			height		window height (excluding winbar)
			loclist		1 if showing a location list
			quickfix	1 if quickfix or location list window
			terminal	1 if a terminal window
			tabnr		tab page number
			topline		first displayed buffer line
			variables	a reference to the dictionary with
					window-local variables
			width		window width
			winbar		1 if the window has a toolbar, 0
					otherwise
			wincol		leftmost screen column of the window;
					"col" from <a href="/neovim-docs-web/en/builtin#win_screenpos()">win_screenpos()</a>
			textoff		number of columns occupied by any
					<a href="/neovim-docs-web/en/options#'foldcolumn'">'foldcolumn'</a>, <a href="/neovim-docs-web/en/options#'signcolumn'">'signcolumn'</a> and line
					number in front of the text
			winid		<a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>
			winnr		window number
			winrow		topmost screen line of the window;
					"row" from <a href="/neovim-docs-web/en/builtin#win_screenpos()">win_screenpos()</a></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetWinnr()-&gt;getwininfo()</pre>
getwinpos([{timeout}])					<a name="getwinpos()"></a><code class="help-tag-right">getwinpos()</code>
		The result is a <a href="/neovim-docs-web/en/eval#List">List</a> with two numbers, the result of
		<a href="/neovim-docs-web/en/builtin#getwinposx()">getwinposx()</a> and <a href="/neovim-docs-web/en/builtin#getwinposy()">getwinposy()</a> combined:
			[x-pos, y-pos]
		<code>{timeout}</code> can be used to specify how long to wait in msec for
		a response from the terminal.  When omitted 100 msec is used.</div>
<div class="old-help-para">		Use a longer time for a remote terminal.
		When using a value less than 10 and no response is received
		within that time, a previously reported position is returned,
		if available.  This can be used to poll for the position and
		do some work in the meantime:<pre>while 1
  let res = getwinpos(1)
  if res[0] &gt;= 0
    break
  endif
  " Do some work here
endwhile</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetTimeout()-&gt;getwinpos()</pre></div>
<div class="old-help-para">							<a name="getwinposx()"></a><code class="help-tag-right">getwinposx()</code>
getwinposx()	The result is a Number, which is the X coordinate in pixels of
		the left hand side of the GUI Vim window.  The result will be
		-1 if the information is not available.
		The value can be used with <code>:winpos</code>.</div>
<div class="old-help-para">							<a name="getwinposy()"></a><code class="help-tag-right">getwinposy()</code>
getwinposy()	The result is a Number, which is the Y coordinate in pixels of
		the top of the GUI Vim window.  The result will be -1 if the
		information is not available.
		The value can be used with <code>:winpos</code>.</div>
<div class="old-help-para">getwinvar(<code>{winnr}</code>, <code>{varname}</code> [, <code>{def}</code>])				<a name="getwinvar()"></a><code class="help-tag-right">getwinvar()</code>
		Like <a href="/neovim-docs-web/en/builtin#gettabwinvar()">gettabwinvar()</a> for the current tabpage.
		Examples:<pre>:let list_is_on = getwinvar(2, '&amp;list')
:echo "myvar = " .. getwinvar(1, 'myvar')</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetWinnr()-&gt;getwinvar(varname)</pre></div>
<div class="old-help-para">glob(<code>{expr}</code> [, <code>{nosuf}</code> [, <code>{list}</code> [, <code>{alllinks}</code>]]])		<a name="glob()"></a><code class="help-tag-right">glob()</code>
		Expand the file wildcards in <code>{expr}</code>.  See <a href="/neovim-docs-web/en/editing#wildcards">wildcards</a> for the
		use of special characters.</div>
<div class="old-help-para">		Unless the optional <code>{nosuf}</code> argument is given and is <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a>,
		the <a href="/neovim-docs-web/en/options#'suffixes'">'suffixes'</a> and <a href="/neovim-docs-web/en/options#'wildignore'">'wildignore'</a> options apply: Names matching
		one of the patterns in <a href="/neovim-docs-web/en/options#'wildignore'">'wildignore'</a> will be skipped and
		<a href="/neovim-docs-web/en/options#'suffixes'">'suffixes'</a> affect the ordering of matches.
		<a href="/neovim-docs-web/en/options#'wildignorecase'">'wildignorecase'</a> always applies.</div>
<div class="old-help-para">		When <code>{list}</code> is present and it is <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> the result is a <a href="/neovim-docs-web/en/eval#List">List</a>
		with all matching files. The advantage of using a List is,
		you also get filenames containing newlines correctly.
		Otherwise the result is a String and when there are several
		matches, they are separated by <code>&lt;NL&gt;</code> characters.</div>
<div class="old-help-para">		If the expansion fails, the result is an empty String or List.</div>
<div class="old-help-para">		You can also use <a href="/neovim-docs-web/en/builtin#readdir()">readdir()</a> if you need to do complicated
		things, such as limiting the number of matches.</div>
<div class="old-help-para">		A name for a non-existing file is not included.  A symbolic
		link is only included if it points to an existing file.
		However, when the <code>{alllinks}</code> argument is present and it is
		<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> then all symbolic links are included.</div>
<div class="old-help-para">		For most systems backticks can be used to get files names from
		any external command.  Example:<pre>:let tagfiles = glob("`find . -name tags -print`")
:let &amp;tags = substitute(tagfiles, "\n", ",", "g")</pre></div>
<div class="old-help-para">		The result of the program inside the backticks should be one
		item per line.  Spaces inside an item are allowed.</div>
<div class="old-help-para">		See <a href="/neovim-docs-web/en/builtin#expand()">expand()</a> for expanding special Vim variables.  See
		<a href="/neovim-docs-web/en/builtin#system()">system()</a> for getting the raw output of an external command.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetExpr()-&gt;glob()</pre>
glob2regpat(<code>{string}</code>)					 <a name="glob2regpat()"></a><code class="help-tag-right">glob2regpat()</code>
		Convert a file pattern, as used by glob(), into a search
		pattern.  The result can be used to match with a string that
		is a file name.  E.g.<pre>if filename =~ glob2regpat('Make*.mak')</pre></div>
<div class="old-help-para">		This is equivalent to:<pre>if filename =~ '^Make.*\.mak$'</pre></div>
<div class="old-help-para">		When <code>{string}</code> is an empty string the result is "^$", match an
		empty string.
		Note that the result depends on the system.  On MS-Windows
		a backslash usually means a path separator.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetExpr()-&gt;glob2regpat()</pre></div>
<div class="old-help-para">								<a name="globpath()"></a><code class="help-tag-right">globpath()</code>
globpath(<code>{path}</code>, <code>{expr}</code> [, <code>{nosuf}</code> [, <code>{list}</code> [, <code>{allinks}</code>]]])
		Perform glob() for String <code>{expr}</code> on all directories in <code>{path}</code>
		and concatenate the results.  Example:<pre>:echo globpath(&amp;rtp, "syntax/c.vim")</pre></div>
<div class="old-help-para">		<code>{path}</code> is a comma-separated list of directory names.  Each
		directory name is prepended to <code>{expr}</code> and expanded like with
		<a href="/neovim-docs-web/en/builtin#glob()">glob()</a>.  A path separator is inserted when needed.
		To add a comma inside a directory name escape it with a
		backslash.  Note that on MS-Windows a directory may have a
		trailing backslash, remove it if you put a comma after it.
		If the expansion fails for one of the directories, there is no
		error message.</div>
<div class="old-help-para">		Unless the optional <code>{nosuf}</code> argument is given and is <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a>,
		the <a href="/neovim-docs-web/en/options#'suffixes'">'suffixes'</a> and <a href="/neovim-docs-web/en/options#'wildignore'">'wildignore'</a> options apply: Names matching
		one of the patterns in <a href="/neovim-docs-web/en/options#'wildignore'">'wildignore'</a> will be skipped and
		<a href="/neovim-docs-web/en/options#'suffixes'">'suffixes'</a> affect the ordering of matches.</div>
<div class="old-help-para">		When <code>{list}</code> is present and it is <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> the result is a <a href="/neovim-docs-web/en/eval#List">List</a>
		with all matching files. The advantage of using a List is, you
		also get filenames containing newlines correctly. Otherwise
		the result is a String and when there are several matches,
		they are separated by <code>&lt;NL&gt;</code> characters.  Example:<pre>:echo globpath(&amp;rtp, "syntax/c.vim", 0, 1)</pre></div>
<div class="old-help-para">		<code>{allinks}</code> is used as with <a href="/neovim-docs-web/en/builtin#glob()">glob()</a>.</div>
<div class="old-help-para">		The "**" item can be used to search in a directory tree.
		For example, to find all "README.txt" files in the directories
		in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a> and below:<pre>:echo globpath(&amp;rtp, "**/README.txt")</pre></div>
<div class="old-help-para">		Upwards search and limiting the depth of "**" is not
		supported, thus using <a href="/neovim-docs-web/en/options#'path'">'path'</a> will not always work properly.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>, the base is passed as the
		second argument:<pre>GetExpr()-&gt;globpath(&amp;rtp)</pre></div>
<div class="old-help-para">							<a name="has()"></a><code class="help-tag-right">has()</code>
has(<code>{feature}</code>)	Returns 1 if <code>{feature}</code> is supported, 0 otherwise.  The
		<code>{feature}</code> argument is a feature name like "nvim-0.2.1" or
		"win32", see below.  See also <a href="/neovim-docs-web/en/builtin#exists()">exists()</a>.</div>
<div class="old-help-para">		To get the system name use <a href="/neovim-docs-web/en/lua#vim.loop">vim.loop</a>.os_uname() in Lua:<pre>:lua print(vim.loop.os_uname().sysname)</pre></div>
<div class="old-help-para">		If the code has a syntax error then Vimscript may skip the
		rest of the line.  Put <a href="/neovim-docs-web/en/eval#%3Aif">:if</a> and <a href="/neovim-docs-web/en/eval#%3Aendif">:endif</a> on separate lines to
		avoid the syntax error:<pre>if has('feature')
  let x = this-&gt;breaks-&gt;without-&gt;the-&gt;feature
endif</pre></div>
<div class="old-help-para">		Vim's compile-time feature-names (prefixed with "+") are not
		recognized because Nvim is always compiled with all possible
		features. <a href="/neovim-docs-web/en/vim_diff#feature-compile">feature-compile</a></div>
<div class="old-help-para">		Feature names can be:
		1.  Nvim version. For example the "nvim-0.2.1" feature means
		    that Nvim is version 0.2.1 or later:<pre>:if has("nvim-0.2.1")</pre></div>
<div class="old-help-para">		2.  Runtime condition or other pseudo-feature. For example the
		    "win32" feature checks if the current system is Windows:<pre>:if has("win32")</pre></div>
<div class="old-help-para">							<a name="feature-list"></a><code class="help-tag-right">feature-list</code>
		    List of supported pseudo-feature names:
			acl		<a href="/neovim-docs-web/en/editing#ACL">ACL</a> support.
			bsd		BSD system (not macOS, use "mac" for that).
			clipboard	<a href="/neovim-docs-web/en/provider#clipboard">clipboard</a> provider is available.
			fname_case	Case in file names matters (for Darwin and MS-Windows
					this is not present).
			iconv		Can use <a href="/neovim-docs-web/en/builtin#iconv()">iconv()</a> for conversion.
			linux		Linux system.
			mac		MacOS system.
			nvim		This is Nvim.
			python3		Legacy Vim <a href="/neovim-docs-web/en/if_pyth#python3">python3</a> interface. <a href="/neovim-docs-web/en/if_pyth#has-python">has-python</a>
			pythonx		Legacy Vim <a href="/neovim-docs-web/en/if_pyth#python_x">python_x</a> interface. <a href="/neovim-docs-web/en/if_pyth#has-pythonx">has-pythonx</a>
			sun		SunOS system.
			ttyin		input is a terminal (tty).
			ttyout		output is a terminal (tty).
			unix		Unix system.
			<a name="vim_starting"></a><code class="help-tag-right">vim_starting</code>  	True during <a href="/neovim-docs-web/en/starting#startup">startup</a>.
			win32		Windows system (32 or 64 bit).
			win64		Windows system (64 bit).
			wsl		WSL (Windows Subsystem for Linux) system.</div>
<div class="old-help-para">							<a name="has-patch"></a><code class="help-tag-right">has-patch</code>
		3.  Vim patch. For example the "patch123" feature means that
		    Vim patch 123 at the current <a href="/neovim-docs-web/en/eval#v%3Aversion">v:version</a> was included:<pre>:if v:version &gt; 602 || v:version == 602 &amp;&amp; has("patch148")</pre></div>
<div class="old-help-para">		4.  Vim version. For example the "patch-7.4.237" feature means
		    that Nvim is Vim-compatible to version 7.4.237 or later.<pre>:if has("patch-7.4.237")</pre>
has_key(<code>{dict}</code>, <code>{key}</code>)					<a name="has_key()"></a><code class="help-tag-right">has_key()</code>
		The result is a Number, which is TRUE if <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> <code>{dict}</code>
		has an entry with key <code>{key}</code>.  FALSE otherwise. The <code>{key}</code>
		argument is a string.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>mydict-&gt;has_key(key)</pre>
haslocaldir([{winnr} [, <code>{tabnr}</code>]])			<a name="haslocaldir()"></a><code class="help-tag-right">haslocaldir()</code>
		The result is a Number, which is 1 when the window has set a
		local path via <a href="/neovim-docs-web/en/editing#%3Alcd">:lcd</a> or when <code>{winnr}</code> is -1 and the tabpage
		has set a local path via <a href="/neovim-docs-web/en/editing#%3Atcd">:tcd</a>, otherwise 0.</div>
<div class="old-help-para">		Tabs and windows are identified by their respective numbers,
		0 means current tab or window. Missing argument implies 0.
		Thus the following are equivalent:<pre>haslocaldir()
haslocaldir(0)
haslocaldir(0, 0)</pre></div>
<div class="old-help-para">		With <code>{winnr}</code> use that window in the current tabpage.
		With <code>{winnr}</code> and <code>{tabnr}</code> use the window in that tabpage.
		<code>{winnr}</code> can be the window number or the <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>.
		If <code>{winnr}</code> is -1 it is ignored, only the tab is resolved.
		Throw error if the arguments are invalid. <a href="/neovim-docs-web/en/vim_diff#E5000">E5000</a> <a href="/neovim-docs-web/en/vim_diff#E5001">E5001</a> <a href="/neovim-docs-web/en/vim_diff#E5002">E5002</a></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetWinnr()-&gt;haslocaldir()</pre>
hasmapto(<code>{what}</code> [, <code>{mode}</code> [, <code>{abbr}</code>]])			<a name="hasmapto()"></a><code class="help-tag-right">hasmapto()</code>
		The result is a Number, which is TRUE if there is a mapping
		that contains <code>{what}</code> in somewhere in the rhs (what it is
		mapped to) and this mapping exists in one of the modes
		indicated by <code>{mode}</code>.
		The arguments <code>{what}</code> and <code>{mode}</code> are strings.
		When <code>{abbr}</code> is there and it is <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> use abbreviations
		instead of mappings.  Don't forget to specify Insert and/or
		Command-line mode.
		Both the global mappings and the mappings local to the current
		buffer are checked for a match.
		If no matching mapping is found FALSE is returned.
		The following characters are recognized in <code>{mode}</code>:
			n	Normal mode
			v	Visual and Select mode
			x	Visual mode
			s	Select mode
			o	Operator-pending mode
			i	Insert mode
			l	Language-Argument ("r", "f", "t", etc.)
			c	Command-line mode
		When <code>{mode}</code> is omitted, "nvo" is used.</div>
<div class="old-help-para">		This function is useful to check if a mapping already exists
		to a function in a Vim script.  Example:<pre>:if !hasmapto('\ABCdoit')
:   map &lt;Leader&gt;d \ABCdoit
:endif</pre></div>
<div class="old-help-para">		This installs the mapping to "\ABCdoit" only if there isn't
		already a mapping to "\ABCdoit".</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetRHS()-&gt;hasmapto()</pre>
histadd(<code>{history}</code>, <code>{item}</code>)				<a name="histadd()"></a><code class="help-tag-right">histadd()</code>
		Add the String <code>{item}</code> to the history <code>{history}</code> which can be
		one of:					<a name="hist-names"></a><code class="help-tag-right">hist-names</code>
			"cmd"	 or ":"	  command line history
			"search" or "/"   search pattern history
			"expr"	 or "="   typed expression history
			"input"  or "@"	  input line history
			"debug"  or "&gt;"   debug command history
			empty		  the current or last used history
		The <code>{history}</code> string does not need to be the whole name, one
		character is sufficient.
		If <code>{item}</code> does already exist in the history, it will be
		shifted to become the newest entry.
		The result is a Number: TRUE if the operation was successful,
		otherwise FALSE is returned.</div>
<div class="old-help-para">		Example:<pre>:call histadd("input", strftime("%Y %b %d"))
:let date=input("Enter date: ")</pre></div>
<div class="old-help-para">		This function is not available in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>, the base is passed as the
		second argument:<pre>GetHistory()-&gt;histadd('search')</pre>
histdel(<code>{history}</code> [, <code>{item}</code>])				<a name="histdel()"></a><code class="help-tag-right">histdel()</code>
		Clear <code>{history}</code>, i.e. delete all its entries.  See <a href="/neovim-docs-web/en/builtin#hist-names">hist-names</a>
		for the possible values of <code>{history}</code>.</div>
<div class="old-help-para">		If the parameter <code>{item}</code> evaluates to a String, it is used as a
		regular expression.  All entries matching that expression will
		be removed from the history (if there are any).
		Upper/lowercase must match, unless "\c" is used <a href="/neovim-docs-web/en/pattern#%2F%5Cc">/\c</a>.
		If <code>{item}</code> evaluates to a Number, it will be interpreted as
		an index, see <a href="/neovim-docs-web/en/cmdline#%3Ahistory-indexing">:history-indexing</a>.  The respective entry will
		be removed if it exists.</div>
<div class="old-help-para">		The result is TRUE for a successful operation, otherwise FALSE
		is returned.</div>
<div class="old-help-para">		Examples:
		Clear expression register history:<pre>:call histdel("expr")</pre></div>
<div class="old-help-para">		Remove all entries starting with "*" from the search history:<pre>:call histdel("/", '^\*')</pre></div>
<div class="old-help-para">		The following three are equivalent:<pre>:call histdel("search", histnr("search"))
:call histdel("search", -1)
:call histdel("search", '^' .. histget("search", -1) .. '$')</pre></div>
<div class="old-help-para">		To delete the last search pattern and use the last-but-one for
		the "n" command and <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a>:<pre>:call histdel("search", -1)
:let @/ = histget("search", -1)</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetHistory()-&gt;histdel()</pre>
histget(<code>{history}</code> [, <code>{index}</code>])				<a name="histget()"></a><code class="help-tag-right">histget()</code>
		The result is a String, the entry with Number <code>{index}</code> from
		<code>{history}</code>.  See <a href="/neovim-docs-web/en/builtin#hist-names">hist-names</a> for the possible values of
		<code>{history}</code>, and <a href="/neovim-docs-web/en/cmdline#%3Ahistory-indexing">:history-indexing</a> for <code>{index}</code>.  If there is
		no such entry, an empty String is returned.  When <code>{index}</code> is
		omitted, the most recent item from the history is used.</div>
<div class="old-help-para">		Examples:
		Redo the second last search from history.<pre>:execute '/' .. histget("search", -2)</pre></div>
<div class="old-help-para">		Define an Ex command ":H <code>{num}</code>" that supports re-execution of
		the <code>{num}</code>th entry from the output of <a href="/neovim-docs-web/en/cmdline#%3Ahistory">:history</a>.<pre>:command -nargs=1 H execute histget("cmd", 0+&lt;args&gt;)</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetHistory()-&gt;histget()</pre>
histnr(<code>{history}</code>)					<a name="histnr()"></a><code class="help-tag-right">histnr()</code>
		The result is the Number of the current entry in <code>{history}</code>.
		See <a href="/neovim-docs-web/en/builtin#hist-names">hist-names</a> for the possible values of <code>{history}</code>.
		If an error occurred, -1 is returned.</div>
<div class="old-help-para">		Example:<pre>:let inp_index = histnr("expr")</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetHistory()-&gt;histnr()</pre></div>
<div class="old-help-para">hlexists(<code>{name}</code>)					<a name="hlexists()"></a><code class="help-tag-right">hlexists()</code>
		The result is a Number, which is TRUE if a highlight group
		called <code>{name}</code> exists.  This is when the group has been
		defined in some way.  Not necessarily when highlighting has
		been defined for it, it may also have been used for a syntax
		item.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetName()-&gt;hlexists()</pre></div>
<div class="old-help-para">							<a name="hlID()"></a><code class="help-tag-right">hlID()</code>
hlID(<code>{name}</code>)	The result is a Number, which is the ID of the highlight group
		with name <code>{name}</code>.  When the highlight group doesn't exist,
		zero is returned.
		This can be used to retrieve information about the highlight
		group.  For example, to get the background color of the
		"Comment" group:<pre>:echo synIDattr(synIDtrans(hlID("Comment")), "bg")</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetName()-&gt;hlID()</pre>
hostname()						<a name="hostname()"></a><code class="help-tag-right">hostname()</code>
		The result is a String, which is the name of the machine on
		which Vim is currently running.  Machine names greater than
		256 characters long are truncated.</div>
<div class="old-help-para">iconv(<code>{string}</code>, <code>{from}</code>, <code>{to}</code>)				<a name="iconv()"></a><code class="help-tag-right">iconv()</code>
		The result is a String, which is the text <code>{string}</code> converted
		from encoding <code>{from}</code> to encoding <code>{to}</code>.
		When the conversion completely fails an empty string is
		returned.  When some characters could not be converted they
		are replaced with "?".
		The encoding names are whatever the iconv() library function
		can accept, see ":!man 3 iconv".
		Note that Vim uses UTF-8 for all Unicode encodings, conversion
		from/to UCS-2 is automatically changed to use UTF-8.  You
		cannot use UCS-2 in a string anyway, because of the NUL bytes.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetText()-&gt;iconv('latin1', 'utf-8')</pre></div>
<div class="old-help-para">							<a name="indent()"></a><code class="help-tag-right">indent()</code>
indent(<code>{lnum}</code>)	The result is a Number, which is indent of line <code>{lnum}</code> in the
		current buffer.  The indent is counted in spaces, the value
		of <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> is relevant.  <code>{lnum}</code> is used just like in
		<a href="/neovim-docs-web/en/builtin#getline()">getline()</a>.
		When <code>{lnum}</code> is invalid -1 is returned.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetLnum()-&gt;indent()</pre>
index(<code>{object}</code>, <code>{expr}</code> [, <code>{start}</code> [, <code>{ic}</code>]])			<a name="index()"></a><code class="help-tag-right">index()</code>
		If <code>{object}</code> is a <a href="/neovim-docs-web/en/eval#List">List</a> return the lowest index where the item
		has a value equal to <code>{expr}</code>.  There is no automatic
		conversion, so the String "4" is different from the Number 4.
		And the Number 4 is different from the Float 4.0.  The value
		of <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> is not used here, case always matters.</div>
<div class="old-help-para">		If <code>{object}</code> is a <a href="/neovim-docs-web/en/eval#Blob">Blob</a> return the lowest index where the byte
		value is equal to <code>{expr}</code>.</div>
<div class="old-help-para">		If <code>{start}</code> is given then start looking at the item with index
		<code>{start}</code> (may be negative for an item relative to the end).
		When <code>{ic}</code> is given and it is <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a>, ignore case.  Otherwise
		case must match.
		-1 is returned when <code>{expr}</code> is not found in <code>{object}</code>.
		Example:<pre>:let idx = index(words, "the")
:if index(numbers, 123) &gt;= 0</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetObject()-&gt;index(what)</pre>
input(<code>{prompt}</code> [, <code>{text}</code> [, <code>{completion}</code>]])		<a name="input()"></a><code class="help-tag-right">input()</code>
input(<code>{opts}</code>)
		The result is a String, which is whatever the user typed on
		the command-line.  The <code>{prompt}</code> argument is either a prompt
		string, or a blank string (for no prompt).  A '\n' can be used
		in the prompt to start a new line.</div>
<div class="old-help-para">		In the second form it accepts a single dictionary with the
		following keys, any of which may be omitted:</div>
<div class="old-help-para"><div class="help-column_heading">		Key           Default  Description</div>		prompt        ""       Same as <code>{prompt}</code> in the first form.
		default       ""       Same as <code>{text}</code> in the first form.
		completion    nothing  Same as <code>{completion}</code> in the first form.
		cancelreturn  ""       The value returned when the dialog is
		                       cancelled.
		highlight     nothing  Highlight handler: <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a>.</div>
<div class="old-help-para">		The highlighting set with <a href="/neovim-docs-web/en/eval#%3Aechohl">:echohl</a> is used for the prompt.
		The input is entered just like a command-line, with the same
		editing commands and mappings.  There is a separate history
		for lines typed for input().
		Example:<pre>:if input("Coffee or beer? ") == "beer"
:  echo "Cheers!"
:endif</pre></div>
<div class="old-help-para">		If the optional <code>{text}</code> argument is present and not empty, this
		is used for the default reply, as if the user typed this.
		Example:<pre>:let color = input("Color? ", "white")</pre></div>
<div class="old-help-para">		The optional <code>{completion}</code> argument specifies the type of
		completion supported for the input.  Without it completion is
		not performed.  The supported completion types are the same as
		that can be supplied to a user-defined command using the
		"-complete=" argument.  Refer to <a href="/neovim-docs-web/en/map#%3Acommand-completion">:command-completion</a> for
		more information.  Example:<pre>let fname = input("File: ", "", "file")</pre></div>
<div class="old-help-para">					<a name="input()-highlight"></a><code class="help-tag-right">input()-highlight</code> <a name="E5400"></a><code class="help-tag">E5400</code> <a name="E5402"></a><code class="help-tag">E5402</code>
		The optional <code>highlight</code> key allows specifying function which
		will be used for highlighting user input.  This function
		receives user input as its only argument and must return
		a list of 3-tuples [hl_start_col, hl_end_col + 1, hl_group]
		where
			hl_start_col is the first highlighted column,
			hl_end_col is the last highlighted column (+ 1!),
			hl_group is <a href="/neovim-docs-web/en/syntax#%3Ahi">:hi</a> group used for highlighting.
					      <a name="E5403"></a><code class="help-tag-right">E5403</code> <a name="E5404"></a><code class="help-tag">E5404</code> <a name="E5405"></a><code class="help-tag">E5405</code> <a name="E5406"></a><code class="help-tag">E5406</code>
		Both hl_start_col and hl_end_col + 1 must point to the start
		of the multibyte character (highlighting must not break
		multibyte characters), hl_end_col + 1 may be equal to the
		input length.  Start column must be in range [0, len(input)),
		end column must be in range (hl_start_col, len(input)],
		sections must be ordered so that next hl_start_col is greater
		then or equal to previous hl_end_col.</div>
<div class="old-help-para">		Example (try some input with parentheses):<pre>highlight RBP1 guibg=Red ctermbg=red
highlight RBP2 guibg=Yellow ctermbg=yellow
highlight RBP3 guibg=Green ctermbg=green
highlight RBP4 guibg=Blue ctermbg=blue
let g:rainbow_levels = 4
function! RainbowParens(cmdline)
  let ret = []
  let i = 0
  let lvl = 0
  while i &lt; len(a:cmdline)
    if a:cmdline[i] is# '('
      call add(ret, [i, i + 1, 'RBP' .. ((lvl % g:rainbow_levels) + 1)])
      let lvl += 1
    elseif a:cmdline[i] is# ')'
      let lvl -= 1
      call add(ret, [i, i + 1, 'RBP' .. ((lvl % g:rainbow_levels) + 1)])
    endif
    let i += 1
  endwhile
  return ret
endfunction
call input({'prompt':'&gt;','highlight':'RainbowParens'})</pre></div>
<div class="old-help-para">		Highlight function is called at least once for each new
		displayed input string, before command-line is redrawn.  It is
		expected that function is pure for the duration of one input()
		call, i.e. it produces the same output for the same input, so
		output may be memoized.  Function is run like under <a href="/neovim-docs-web/en/various#%3Asilent">:silent</a>
		modifier. If the function causes any errors, it will be
		skipped for the duration of the current input() call.</div>
<div class="old-help-para">		Highlighting is disabled if command-line contains arabic
		characters.</div>
<div class="old-help-para">		NOTE: This function must not be used in a startup file, for
		the versions that only run in GUI mode (e.g., the Win32 GUI).
		Note: When input() is called from within a mapping it will
		consume remaining characters from that mapping, because a
		mapping is handled like the characters were typed.
		Use <a href="/neovim-docs-web/en/builtin#inputsave()">inputsave()</a> before input() and <a href="/neovim-docs-web/en/builtin#inputrestore()">inputrestore()</a>
		after input() to avoid that.  Another solution is to avoid
		that further characters follow in the mapping, e.g., by using
		<a href="/neovim-docs-web/en/eval#%3Aexecute">:execute</a> or <a href="/neovim-docs-web/en/various#%3Anormal">:normal</a>.</div>
<div class="old-help-para">		Example with a mapping:<pre>:nmap \x :call GetFoo()&lt;CR&gt;:exe "/" .. Foo&lt;CR&gt;
:function GetFoo()
:  call inputsave()
:  let g:Foo = input("enter search pattern: ")
:  call inputrestore()
:endfunction</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetPrompt()-&gt;input()</pre>
inputlist(<code>{textlist}</code>)					<a name="inputlist()"></a><code class="help-tag-right">inputlist()</code>
		<code>{textlist}</code> must be a <a href="/neovim-docs-web/en/eval#List">List</a> of strings.  This <a href="/neovim-docs-web/en/eval#List">List</a> is
		displayed, one string per line.  The user will be prompted to
		enter a number, which is returned.
		The user can also select an item by clicking on it with the
		mouse, if the mouse is enabled in the command line (<a href="/neovim-docs-web/en/options#'mouse'">'mouse'</a> is
		"a" or includes "c").  For the first string 0 is returned.
		When clicking above the first item a negative number is
		returned.  When clicking on the prompt one more than the
		length of <code>{textlist}</code> is returned.
		Make sure <code>{textlist}</code> has less than <a href="/neovim-docs-web/en/options#'lines'">'lines'</a> entries, otherwise
		it won't work.  It's a good idea to put the entry number at
		the start of the string.  And put a prompt in the first item.
		Example:<pre>let color = inputlist(['Select color:', '1. red',
        \ '2. green', '3. blue'])</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetChoices()-&gt;inputlist()</pre>
inputrestore()						<a name="inputrestore()"></a><code class="help-tag-right">inputrestore()</code>
		Restore typeahead that was saved with a previous <a href="/neovim-docs-web/en/builtin#inputsave()">inputsave()</a>.
		Should be called the same number of times inputsave() is
		called.  Calling it more often is harmless though.
		Returns TRUE when there is nothing to restore, FALSE otherwise.</div>
<div class="old-help-para">inputsave()						<a name="inputsave()"></a><code class="help-tag-right">inputsave()</code>
		Preserve typeahead (also from mappings) and clear it, so that
		a following prompt gets input from the user.  Should be
		followed by a matching inputrestore() after the prompt.  Can
		be used several times, in which case there must be just as
		many inputrestore() calls.
		Returns TRUE when out of memory, FALSE otherwise.</div>
<div class="old-help-para">inputsecret(<code>{prompt}</code> [, <code>{text}</code>])			<a name="inputsecret()"></a><code class="help-tag-right">inputsecret()</code>
		This function acts much like the <a href="/neovim-docs-web/en/builtin#input()">input()</a> function with but
		two exceptions:
		a) the user's response will be displayed as a sequence of
		asterisks ("*") thereby keeping the entry secret, and
		b) the user's response will not be recorded on the input
		<a href="/neovim-docs-web/en/cmdline#history">history</a> stack.
		The result is a String, which is whatever the user actually
		typed on the command-line in response to the issued prompt.
		NOTE: Command-line completion is not supported.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetPrompt()-&gt;inputsecret()</pre>
insert(<code>{object}</code>, <code>{item}</code> [, <code>{idx}</code>])			<a name="insert()"></a><code class="help-tag-right">insert()</code>
		When <code>{object}</code> is a <a href="/neovim-docs-web/en/eval#List">List</a> or a <a href="/neovim-docs-web/en/eval#Blob">Blob</a> insert <code>{item}</code> at the start
		of it.</div>
<div class="old-help-para">		If <code>{idx}</code> is specified insert <code>{item}</code> before the item with index
		<code>{idx}</code>.  If <code>{idx}</code> is zero it goes before the first item, just
		like omitting <code>{idx}</code>.  A negative <code>{idx}</code> is also possible, see
		<a href="/neovim-docs-web/en/eval#list-index">list-index</a>.  -1 inserts just before the last item.</div>
<div class="old-help-para">		Returns the resulting <a href="/neovim-docs-web/en/eval#List">List</a> or <a href="/neovim-docs-web/en/eval#Blob">Blob</a>.  Examples:<pre>:let mylist = insert([2, 3, 5], 1)
:call insert(mylist, 4, -1)
:call insert(mylist, 6, len(mylist))</pre></div>
<div class="old-help-para">		The last example can be done simpler with <a href="/neovim-docs-web/en/builtin#add()">add()</a>.
		Note that when <code>{item}</code> is a <a href="/neovim-docs-web/en/eval#List">List</a> it is inserted as a single
		item.  Use <a href="/neovim-docs-web/en/builtin#extend()">extend()</a> to concatenate <a href="/neovim-docs-web/en/eval#Lists">Lists</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>mylist-&gt;insert(item)</pre>
interrupt()						<a name="interrupt()"></a><code class="help-tag-right">interrupt()</code>
		Interrupt script execution.  It works more or less like the
		user typing <code>CTRL-C</code>, most commands won't execute and control
		returns to the user.  This is useful to abort execution
		from lower down, e.g. in an autocommand.  Example:<pre>:function s:check_typoname(file)
:   if fnamemodify(a:file, ':t') == '['
:       echomsg 'Maybe typo'
:       call interrupt()
:   endif
:endfunction
:au BufWritePre * call s:check_typoname(expand('&lt;amatch&gt;'))</pre>
invert(<code>{expr}</code>)						<a name="invert()"></a><code class="help-tag-right">invert()</code>
		Bitwise invert.  The argument is converted to a number.  A
		List, Dict or Float argument causes an error.  Example:<pre>:let bits = invert(bits)</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>:let bits = bits-&gt;invert()</pre>
isdirectory(<code>{directory}</code>)				<a name="isdirectory()"></a><code class="help-tag-right">isdirectory()</code>
		The result is a Number, which is <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> when a directory
		with the name <code>{directory}</code> exists.  If <code>{directory}</code> doesn't
		exist, or isn't a directory, the result is <a href="/neovim-docs-web/en/eval#FALSE">FALSE</a>.  <code>{directory}</code>
		is any expression, which is used as a String.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetName()-&gt;isdirectory()</pre>
isinf(<code>{expr}</code>)						<a name="isinf()"></a><code class="help-tag-right">isinf()</code>
		Return 1 if <code>{expr}</code> is a positive infinity, or -1 a negative
		infinity, otherwise 0.<pre>:echo isinf(1.0 / 0.0)</pre></div>
<div class="old-help-para">			1<pre>:echo isinf(-1.0 / 0.0)</pre></div>
<div class="old-help-para">			-1</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>Compute()-&gt;isinf()</pre>
islocked(<code>{expr}</code>)					<a name="islocked()"></a><code class="help-tag-right">islocked()</code> <a name="E786"></a><code class="help-tag">E786</code>
		The result is a Number, which is <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> when <code>{expr}</code> is the
		name of a locked variable.
		The string argument <code>{expr}</code> must be the name of a variable,
		<a href="/neovim-docs-web/en/eval#List">List</a> item or <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> entry, not the variable itself!
		Example:<pre>:let alist = [0, ['a', 'b'], 2, 3]
:lockvar 1 alist
:echo islocked('alist')                " 1
:echo islocked('alist[1]')        " 0</pre></div>
<div class="old-help-para">		When <code>{expr}</code> is a variable that does not exist you get an error
		message.  Use <a href="/neovim-docs-web/en/builtin#exists()">exists()</a> to check for existence.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetName()-&gt;islocked()</pre>
id(<code>{expr}</code>)						<a name="id()"></a><code class="help-tag-right">id()</code>
		Returns a <a href="/neovim-docs-web/en/eval#String">String</a> which is a unique identifier of the
		container type (<a href="/neovim-docs-web/en/eval#List">List</a>, <a href="/neovim-docs-web/en/eval#Dict">Dict</a>, <a href="/neovim-docs-web/en/eval#Blob">Blob</a> and <a href="/neovim-docs-web/en/eval#Partial">Partial</a>). It is
		guaranteed that for the mentioned types <code>id(v1) ==# id(v2)</code>
		returns true iff <code>type(v1) == type(v2) &amp;&amp; v1 is v2</code>.
		Note thatv:_null_string,v:_null_list,v:_null_dict and
v:_null_blob have the same <code>id()</code> with different types
		because they are internally represented as NULL pointers.
		<code>id()</code> returns a hexadecimal representanion of the pointers to
		the containers (i.e. like <code>0x994a40</code>), same asprintf("%p",
		<code>{expr}</code>)`, but it is advised against counting on the exact
		format of the return value.</div>
<div class="old-help-para">		It is not guaranteed that <code>id(no_longer_existing_container)</code>
		will not be equal to some other <code>id()</code>: new containers may
		reuse identifiers of the garbage-collected ones.</div>
<div class="old-help-para">items(<code>{dict}</code>)						<a name="items()"></a><code class="help-tag-right">items()</code>
		Return a <a href="/neovim-docs-web/en/eval#List">List</a> with all the key-value pairs of <code>{dict}</code>.  Each
		<a href="/neovim-docs-web/en/eval#List">List</a> item is a list with two items: the key of a <code>{dict}</code>
		entry and the value of this entry.  The <a href="/neovim-docs-web/en/eval#List">List</a> is in arbitrary
		order.  Also see <a href="/neovim-docs-web/en/builtin#keys()">keys()</a> and <a href="/neovim-docs-web/en/builtin#values()">values()</a>.
		Example:<pre>for [key, value] in items(mydict)
   echo key .. ': ' .. value
endfor</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>mydict-&gt;items()</pre>
isnan(<code>{expr}</code>)						<a name="isnan()"></a><code class="help-tag-right">isnan()</code>
		Return <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> if <code>{expr}</code> is a float with value NaN.<pre>echo isnan(0.0 / 0.0)</pre></div>
<div class="old-help-para">			1</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>Compute()-&gt;isnan()</pre>
jobpid(<code>{job}</code>)						<a name="jobpid()"></a><code class="help-tag-right">jobpid()</code>
		Return the PID (process id) of <a href="/neovim-docs-web/en/job_control#job-id">job-id</a> <code>{job}</code>.</div>
<div class="old-help-para">jobresize(<code>{job}</code>, <code>{width}</code>, <code>{height}</code>)			<a name="jobresize()"></a><code class="help-tag-right">jobresize()</code>
		Resize the pseudo terminal window of <a href="/neovim-docs-web/en/job_control#job-id">job-id</a> <code>{job}</code> to <code>{width}</code>
		columns and <code>{height}</code> rows.
		Fails if the job was not started with <code>"pty":v:true</code>.</div>
<div class="old-help-para">jobstart(<code>{cmd}</code> [, <code>{opts}</code>])				<a name="jobstart()"></a><code class="help-tag-right">jobstart()</code>
		Spawns <code>{cmd}</code> as a job.
		If <code>{cmd}</code> is a List it runs directly (no <a href="/neovim-docs-web/en/options#'shell'">'shell'</a>).
		If <code>{cmd}</code> is a String it runs in the <a href="/neovim-docs-web/en/options#'shell'">'shell'</a>, like this:<pre>:call jobstart(split(&amp;shell) + split(&amp;shellcmdflag) + ['{cmd}'])</pre></div>
<div class="old-help-para">		(See <a href="/neovim-docs-web/en/options#shell-unquoting">shell-unquoting</a> for details.)</div>
<div class="old-help-para">		Example:<pre>:call jobstart('nvim -h', {'on_stdout':{j,d,e-&gt;append(line('.'),d)}})</pre></div>
<div class="old-help-para">		Returns <a href="/neovim-docs-web/en/job_control#job-id">job-id</a> on success, 0 on invalid arguments (or job
		table is full), -1 if <code>{cmd}</code>[0] or <a href="/neovim-docs-web/en/options#'shell'">'shell'</a> is not executable.
		The returned job-id is a valid <a href="/neovim-docs-web/en/channel#channel-id">channel-id</a> representing the
		job's stdio streams. Use <a href="/neovim-docs-web/en/builtin#chansend()">chansend()</a> (or <a href="/neovim-docs-web/en/builtin#rpcnotify()">rpcnotify()</a> and
		<a href="/neovim-docs-web/en/builtin#rpcrequest()">rpcrequest()</a> if "rpc" was enabled) to send data to stdin and
		<a href="/neovim-docs-web/en/builtin#chanclose()">chanclose()</a> to close the streams without stopping the job.</div>
<div class="old-help-para">		See <a href="/neovim-docs-web/en/job_control#job-control">job-control</a> and <a href="/neovim-docs-web/en/api#RPC">RPC</a>.</div>
<div class="old-help-para">		NOTE: on Windows if <code>{cmd}</code> is a List:
<div class="help-li" style=""> cmd[0] must be an executable (not a "built-in"). If it is
		    in $PATH it can be called by name, without an extension:<pre>:call jobstart(['ping', 'neovim.io'])</pre>
</div></div>
<div class="old-help-para">		    If it is a full or partial path, extension is required:<pre>:call jobstart(['System32\ping.exe', 'neovim.io'])</pre>
<div class="help-li" style=""> <code>{cmd}</code> is collapsed to a string of quoted args as expected
		    by CommandLineToArgvW <a href="https://msdn.microsoft.com/bb776391">https://msdn.microsoft.com/bb776391</a>
		    unless cmd[0] is some form of "cmd.exe".
</div></div>
<div class="old-help-para">							<a name="jobstart-env"></a><code class="help-tag-right">jobstart-env</code>
		The job environment is initialized as follows:
		  $NVIM                is set to <a href="/neovim-docs-web/en/eval#v%3Aservername">v:servername</a> of the parent Nvim
		  $NVIM_LISTEN_ADDRESS is unset
		  $NVIM_LOG_FILE       is unset
		  $VIM                 is unset
		  $VIMRUNTIME          is unset
		You can set these with the <code>env</code> option.</div>
<div class="old-help-para">							<a name="jobstart-options"></a><code class="help-tag-right">jobstart-options</code>
		<code>{opts}</code> is a dictionary with these keys:
		  clear_env:  (boolean) <code>env</code> defines the job environment
			      exactly, instead of merging current environment.
		  cwd:	      (string, default=|current-directory|) Working
			      directory of the job.
		  detach:     (boolean) Detach the job process: it will not be
			      killed when Nvim exits. If the process exits
			      before Nvim, <code>on_exit</code> will be invoked.
		  env:	      (dict) Map of environment variable name:value
			      pairs extending (or replace with "clear_env")
			      the current environment. <a href="/neovim-docs-web/en/builtin#jobstart-env">jobstart-env</a>
		  height:     (number) Height of the <code>pty</code> terminal.
		  <a href="/neovim-docs-web/en/job_control#on_exit">on_exit</a>:    (function) Callback invoked when the job exits.
		  <a href="/neovim-docs-web/en/channel#on_stdout">on_stdout</a>:  (function) Callback invoked when the job emits
			      stdout data.
		  <a href="/neovim-docs-web/en/channel#on_stderr">on_stderr</a>:  (function) Callback invoked when the job emits
			      stderr data.
		  overlapped: (boolean) Set FILE_FLAG_OVERLAPPED for the
			      standard input/output passed to the child process.
			      Normally you do not need to set this.
			      (Only available on MS-Windows, On other
			      platforms, this option is silently ignored.)
		  pty:	      (boolean) Connect the job to a new pseudo
			      terminal, and its streams to the master file
			      descriptor. <code>on_stdout</code> receives all output,
			      <code>on_stderr</code> is ignored. <a href="/neovim-docs-web/en/nvim_terminal_emulator#terminal-start">terminal-start</a>
		  rpc:	      (boolean) Use <a href="/neovim-docs-web/en/api#msgpack-rpc">msgpack-rpc</a> to communicate with
			      the job over stdio. Then <code>on_stdout</code> is ignored,
			      but <code>on_stderr</code> can still be used.
		  stderr_buffered: (boolean) Collect data until EOF (stream closed)
			      before invoking <code>on_stderr</code>. <a href="/neovim-docs-web/en/channel#channel-buffered">channel-buffered</a>
		  stdout_buffered: (boolean) Collect data until EOF (stream
			      closed) before invoking <code>on_stdout</code>. <a href="/neovim-docs-web/en/channel#channel-buffered">channel-buffered</a>
		  stdin:      (string) Either "pipe" (default) to connect the
			      job's stdin to a channel or "null" to disconnect
			      stdin.
		  width:      (number) Width of the <code>pty</code> terminal.</div>
<div class="old-help-para">		<code>{opts}</code> is passed as <a href="/neovim-docs-web/en/eval#self">self</a> dictionary to the callback; the
		caller may set other keys to pass application-specific data.</div>
<div class="old-help-para">		Returns:
<div class="help-li" style=""> <a href="/neovim-docs-web/en/channel#channel-id">channel-id</a> on success
</div><div class="help-li" style=""> 0 on invalid arguments
</div><div class="help-li" style=""> -1 if <code>{cmd}</code>[0] is not executable.
		See also <a href="/neovim-docs-web/en/job_control#job-control">job-control</a>, <a href="/neovim-docs-web/en/channel#channel">channel</a>, <a href="/neovim-docs-web/en/api#msgpack-rpc">msgpack-rpc</a>.
</div></div>
<div class="old-help-para">jobstop(<code>{id}</code>)						<a name="jobstop()"></a><code class="help-tag-right">jobstop()</code>
		Stop <a href="/neovim-docs-web/en/job_control#job-id">job-id</a> <code>{id}</code> by sending SIGTERM to the job process. If
		the process does not terminate after a timeout then SIGKILL
		will be sent. When the job terminates its <a href="/neovim-docs-web/en/job_control#on_exit">on_exit</a> handler
		(if any) will be invoked.
		See <a href="/neovim-docs-web/en/job_control#job-control">job-control</a>.</div>
<div class="old-help-para">		Returns 1 for valid job id, 0 for invalid id, including jobs have
		exited or stopped.</div>
<div class="old-help-para">jobwait(<code>{jobs}</code> [, <code>{timeout}</code>])				<a name="jobwait()"></a><code class="help-tag-right">jobwait()</code>
		Waits for jobs and their <a href="/neovim-docs-web/en/job_control#on_exit">on_exit</a> handlers to complete.</div>
<div class="old-help-para">		<code>{jobs}</code> is a List of <a href="/neovim-docs-web/en/job_control#job-id">job-id</a>s to wait for.
		<code>{timeout}</code> is the maximum waiting time in milliseconds. If
		omitted or -1, wait forever.</div>
<div class="old-help-para">		Timeout of 0 can be used to check the status of a job:<pre>let running = jobwait([{job-id}], 0)[0] == -1</pre></div>
<div class="old-help-para">		During jobwait() callbacks for jobs not in the <code>{jobs}</code> list may
		be invoked. The screen will not redraw unless <a href="/neovim-docs-web/en/various#%3Aredraw">:redraw</a> is
		invoked by a callback.</div>
<div class="old-help-para">		Returns a list of len(<code>{jobs}</code>) integers, where each integer is
		the status of the corresponding job:
			Exit-code, if the job exited
			-1 if the timeout was exceeded
			-2 if the job was interrupted (by <a href="/neovim-docs-web/en/pattern#CTRL-C">CTRL-C</a>)
			-3 if the job-id is invalid</div>
<div class="old-help-para">join(<code>{list}</code> [, <code>{sep}</code>])					<a name="join()"></a><code class="help-tag-right">join()</code>
		Join the items in <code>{list}</code> together into one String.
		When <code>{sep}</code> is specified it is put in between the items.  If
		<code>{sep}</code> is omitted a single space is used.
		Note that <code>{sep}</code> is not added at the end.  You might want to
		add it there too:<pre>let lines = join(mylist, "\n") .. "\n"</pre></div>
<div class="old-help-para">		String items are used as-is.  <a href="/neovim-docs-web/en/eval#Lists">Lists</a> and <a href="/neovim-docs-web/en/eval#Dictionaries">Dictionaries</a> are
		converted into a string like with <a href="/neovim-docs-web/en/builtin#string()">string()</a>.
		The opposite function is <a href="/neovim-docs-web/en/builtin#split()">split()</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>mylist-&gt;join()</pre>
json_decode(<code>{expr}</code>)					<a name="json_decode()"></a><code class="help-tag-right">json_decode()</code>
		Convert <code>{expr}</code> from JSON object.  Accepts <a href="/neovim-docs-web/en/builtin#readfile()">readfile()</a>-style
		list as the input, as well as regular string.  May output any
		Vim value. In the following cases it will output
		<a href="/neovim-docs-web/en/builtin#msgpack-special-dict">msgpack-special-dict</a>:
		1. Dictionary contains duplicate key.
		2. Dictionary contains empty key.
		3. String contains NUL byte.  Two special dictionaries: for
		   dictionary and for string will be emitted in case string
		   with NUL byte was a dictionary key.</div>
<div class="old-help-para">		Note: function treats its input as UTF-8 always.  The JSON
		standard allows only a few encodings, of which UTF-8 is
		recommended and the only one required to be supported.
		Non-UTF-8 characters are an error.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>ReadObject()-&gt;json_decode()</pre>
json_encode(<code>{expr}</code>)					<a name="json_encode()"></a><code class="help-tag-right">json_encode()</code>
		Convert <code>{expr}</code> into a JSON string.  Accepts
		<a href="/neovim-docs-web/en/builtin#msgpack-special-dict">msgpack-special-dict</a> as the input.  Will not convert
		<a href="/neovim-docs-web/en/eval#Funcref">Funcref</a>s, mappings with non-string keys (can be created as
		<a href="/neovim-docs-web/en/builtin#msgpack-special-dict">msgpack-special-dict</a>), values with self-referencing
		containers, strings which contain non-UTF-8 characters,
		pseudo-UTF-8 strings which contain codepoints reserved for
		surrogate pairs (such strings are not valid UTF-8 strings).
		Non-printable characters are converted into "\u1234" escapes
		or special escapes like "\t", other are dumped as-is.
		<a href="/neovim-docs-web/en/eval#Blob">Blob</a>s are converted to arrays of the individual bytes.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetObject()-&gt;json_encode()</pre>
keys(<code>{dict}</code>)						<a name="keys()"></a><code class="help-tag-right">keys()</code>
		Return a <a href="/neovim-docs-web/en/eval#List">List</a> with all the keys of <code>{dict}</code>.  The <a href="/neovim-docs-web/en/eval#List">List</a> is in
		arbitrary order.  Also see <a href="/neovim-docs-web/en/builtin#items()">items()</a> and <a href="/neovim-docs-web/en/builtin#values()">values()</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>mydict-&gt;keys()</pre>
keytrans(<code>{string}</code>)					<a name="keytrans()"></a><code class="help-tag-right">keytrans()</code>
		Turn the internal byte representation of keys into a form that
		can be used for <a href="/neovim-docs-web/en/map#%3Amap">:map</a>.  E.g.<pre>:let xx = "\&lt;C-Home&gt;"
:echo keytrans(xx)</pre></div>
<div class="old-help-para">			<code>&lt;C-Home&gt;</code></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>"\&lt;C-Home&gt;"-&gt;keytrans()</pre></div>
<div class="old-help-para">							<a name="len()"></a><code class="help-tag-right">len()</code> <a name="E701"></a><code class="help-tag">E701</code>
len(<code>{expr}</code>)	The result is a Number, which is the length of the argument.
		When <code>{expr}</code> is a String or a Number the length in bytes is
		used, as with <a href="/neovim-docs-web/en/builtin#strlen()">strlen()</a>.
		When <code>{expr}</code> is a <a href="/neovim-docs-web/en/eval#List">List</a> the number of items in the <a href="/neovim-docs-web/en/eval#List">List</a> is
		returned.
		When <code>{expr}</code> is a <a href="/neovim-docs-web/en/eval#Blob">Blob</a> the number of bytes is returned.
		When <code>{expr}</code> is a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> the number of entries in the
		<a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> is returned.
		Otherwise an error is given and returns zero.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>mylist-&gt;len()</pre></div>
<div class="old-help-para">						<a name="libcall()"></a><code class="help-tag-right">libcall()</code> <a name="E364"></a><code class="help-tag">E364</code> <a name="E368"></a><code class="help-tag">E368</code>
libcall(<code>{libname}</code>, <code>{funcname}</code>, <code>{argument}</code>)
		Call function <code>{funcname}</code> in the run-time library <code>{libname}</code>
		with single argument <code>{argument}</code>.
		This is useful to call functions in a library that you
		especially made to be used with Vim.  Since only one argument
		is possible, calling standard library functions is rather
		limited.
		The result is the String returned by the function.  If the
		function returns NULL, this will appear as an empty string ""
		to Vim.
		If the function returns a number, use libcallnr()!
		If <code>{argument}</code> is a number, it is passed to the function as an
		int; if <code>{argument}</code> is a string, it is passed as a
		null-terminated string.</div>
<div class="old-help-para">		libcall() allows you to write your own 'plug-in' extensions to
		Vim without having to recompile the program.  It is NOT a
		means to call system functions!  If you try to do so Vim will
		very probably crash.</div>
<div class="old-help-para">		For Win32, the functions you write must be placed in a DLL
		and use the normal C calling convention (NOT Pascal which is
		used in Windows System DLLs).  The function must take exactly
		one parameter, either a character pointer or a long integer,
		and must return a character pointer or NULL.  The character
		pointer returned must point to memory that will remain valid
		after the function has returned (e.g. in static data in the
		DLL).  If it points to allocated memory, that memory will
		leak away.  Using a static buffer in the function should work,
		it's then freed when the DLL is unloaded.</div>
<div class="old-help-para">		WARNING: If the function returns a non-valid pointer, Vim may
		crash!	This also happens if the function returns a number,
		because Vim thinks it's a pointer.
		For Win32 systems, <code>{libname}</code> should be the filename of the DLL
		without the ".DLL" suffix.  A full path is only required if
		the DLL is not in the usual places.
		For Unix: When compiling your own plugins, remember that the
		object code must be compiled as position-independent ('PIC').
		Examples:<pre>:echo libcall("libc.so", "getenv", "HOME")</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>, the base is passed as the
		third argument:<pre>GetValue()-&gt;libcall("libc.so", "getenv")</pre></div>
<div class="old-help-para">							<a name="libcallnr()"></a><code class="help-tag-right">libcallnr()</code>
libcallnr(<code>{libname}</code>, <code>{funcname}</code>, <code>{argument}</code>)
		Just like <a href="/neovim-docs-web/en/builtin#libcall()">libcall()</a>, but used for a function that returns an
		int instead of a string.
		Examples:<pre>:echo libcallnr("/usr/lib/libc.so", "getpid", "")
:call libcallnr("libc.so", "printf", "Hello World!\n")
:call libcallnr("libc.so", "sleep", 10)</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>, the base is passed as the
		third argument:<pre>GetValue()-&gt;libcallnr("libc.so", "printf")</pre></div>
<div class="old-help-para">line(<code>{expr}</code> [, <code>{winid}</code>])				<a name="line()"></a><code class="help-tag-right">line()</code>
		The result is a Number, which is the line number of the file
		position given with <code>{expr}</code>.  The <code>{expr}</code> argument is a string.
		The accepted positions are:
		    .	    the cursor position
		    $	    the last line in the current buffer
		    'x	    position of mark x (if the mark is not set, 0 is
			    returned)
		    w0	    first line visible in current window (one if the
			    display isn't updated, e.g. in silent Ex mode)
		    w$	    last line visible in current window (this is one
			    less than "w0" if no lines are visible)
		    v	    In Visual mode: the start of the Visual area (the
			    cursor is the end).  When not in Visual mode
			    returns the cursor position.  Differs from <a href="/neovim-docs-web/en/motion#'%3C">'&lt;</a> in
			    that it's updated right away.
		Note that a mark in another file can be used.  The line number
		then applies to another buffer.
		To get the column number use <a href="/neovim-docs-web/en/builtin#col()">col()</a>.  To get both use
		<a href="/neovim-docs-web/en/builtin#getpos()">getpos()</a>.
		With the optional <code>{winid}</code> argument the values are obtained for
		that window instead of the current window.
		Returns 0 for invalid values of <code>{expr}</code> and <code>{winid}</code>.
		Examples:<pre>line(".")                line number of the cursor
line(".", winid)        idem, in window "winid"
line("'t")                line number of mark t
line("'" .. marker)        line number of mark marker</pre></div>
<div class="old-help-para">		To jump to the last known position when opening a file see
		<a href="/neovim-docs-web/en/usr_05#last-position-jump">last-position-jump</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetValue()-&gt;line()</pre>
line2byte(<code>{lnum}</code>)					<a name="line2byte()"></a><code class="help-tag-right">line2byte()</code>
		Return the byte count from the start of the buffer for line
		<code>{lnum}</code>.  This includes the end-of-line character, depending on
		the <a href="/neovim-docs-web/en/options#'fileformat'">'fileformat'</a> option for the current buffer.  The first
		line returns 1. UTF-8 encoding is used, <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> is
		ignored.  This can also be used to get the byte count for the
		line just below the last line:<pre>line2byte(line("$") + 1)</pre></div>
<div class="old-help-para">		This is the buffer size plus one.  If <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> is empty
		it is the file size plus one.  <code>{lnum}</code> is used like with
		<a href="/neovim-docs-web/en/builtin#getline()">getline()</a>.  When <code>{lnum}</code> is invalid -1 is returned.
		Also see <a href="/neovim-docs-web/en/builtin#byte2line()">byte2line()</a>, <a href="/neovim-docs-web/en/motion#go">go</a> and <a href="/neovim-docs-web/en/motion#%3Agoto">:goto</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetLnum()-&gt;line2byte()</pre>
lispindent(<code>{lnum}</code>)					<a name="lispindent()"></a><code class="help-tag-right">lispindent()</code>
		Get the amount of indent for line <code>{lnum}</code> according the lisp
		indenting rules, as with <a href="/neovim-docs-web/en/options#'lisp'">'lisp'</a>.
		The indent is counted in spaces, the value of <a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> is
		relevant.  <code>{lnum}</code> is used just like in <a href="/neovim-docs-web/en/builtin#getline()">getline()</a>.
		When <code>{lnum}</code> is invalid, -1 is returned.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetLnum()-&gt;lispindent()</pre>
list2str(<code>{list}</code> [, <code>{utf8}</code>])				<a name="list2str()"></a><code class="help-tag-right">list2str()</code>
		Convert each number in <code>{list}</code> to a character string can
		concatenate them all.  Examples:<pre>list2str([32])                returns " "
list2str([65, 66, 67])        returns "ABC"</pre></div>
<div class="old-help-para">		The same can be done (slowly) with:<pre>join(map(list, {nr, val -&gt; nr2char(val)}), '')</pre></div>
<div class="old-help-para">		<a href="/neovim-docs-web/en/builtin#str2list()">str2list()</a> does the opposite.</div>
<div class="old-help-para">		UTF-8 encoding is always used, <code>{utf8}</code> option has no effect,
		and exists only for backwards-compatibility.
		With UTF-8 composing characters work as expected:<pre>list2str([97, 769])        returns "a??"</pre></div>
<div class="old-help-para">		Returns an empty string on error.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetList()-&gt;list2str()</pre>
localtime()						<a name="localtime()"></a><code class="help-tag-right">localtime()</code>
		Return the current time, measured as seconds since 1st Jan
		1970.  See also <a href="/neovim-docs-web/en/builtin#strftime()">strftime()</a>, <a href="/neovim-docs-web/en/builtin#strptime()">strptime()</a> and <a href="/neovim-docs-web/en/builtin#getftime()">getftime()</a>.</div>
<div class="old-help-para">log(<code>{expr}</code>)						<a name="log()"></a><code class="help-tag-right">log()</code>
		Return the natural logarithm (base e) of <code>{expr}</code> as a <a href="/neovim-docs-web/en/eval#Float">Float</a>.
		<code>{expr}</code> must evaluate to a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a> in the range
		(0, inf].
		Returns 0.0 if <code>{expr}</code> is not a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Examples:<pre>:echo log(10)</pre></div>
<div class="old-help-para">			2.302585<pre>:echo log(exp(5))</pre></div>
<div class="old-help-para">			5.0</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>Compute()-&gt;log()</pre>
log10(<code>{expr}</code>)						<a name="log10()"></a><code class="help-tag-right">log10()</code>
		Return the logarithm of Float <code>{expr}</code> to base 10 as a <a href="/neovim-docs-web/en/eval#Float">Float</a>.
		<code>{expr}</code> must evaluate to a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Returns 0.0 if <code>{expr}</code> is not a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Examples:<pre>:echo log10(1000)</pre></div>
<div class="old-help-para">			3.0<pre>:echo log10(0.01)</pre></div>
<div class="old-help-para">			-2.0</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>Compute()-&gt;log10()</pre>
luaeval(<code>{expr}</code> [, <code>{expr}</code>])
		Evaluate Lua expression <code>{expr}</code> and return its result converted
		to Vim data structures. See <a href="/neovim-docs-web/en/lua#lua-eval">lua-eval</a> for more details.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetExpr()-&gt;luaeval()</pre>
map(<code>{expr1}</code>, <code>{expr2}</code>)					<a name="map()"></a><code class="help-tag-right">map()</code>
		<code>{expr1}</code> must be a <a href="/neovim-docs-web/en/eval#List">List</a>, <a href="/neovim-docs-web/en/eval#Blob">Blob</a> or <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a>.
		Replace each item in <code>{expr1}</code> with the result of evaluating
		<code>{expr2}</code>.  For a <a href="/neovim-docs-web/en/eval#Blob">Blob</a> each byte is replaced.</div>
<div class="old-help-para">		<code>{expr2}</code> must be a <a href="/neovim-docs-web/en/eval#string">string</a> or <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a>.</div>
<div class="old-help-para">		If <code>{expr2}</code> is a <a href="/neovim-docs-web/en/eval#string">string</a>, inside <code>{expr2}</code> <a href="/neovim-docs-web/en/eval#v%3Aval">v:val</a> has the value
		of the current item.  For a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> <a href="/neovim-docs-web/en/eval#v%3Akey">v:key</a> has the key
		of the current item and for a <a href="/neovim-docs-web/en/eval#List">List</a> <a href="/neovim-docs-web/en/eval#v%3Akey">v:key</a> has the index of
		the current item.  For a <a href="/neovim-docs-web/en/eval#Blob">Blob</a> <a href="/neovim-docs-web/en/eval#v%3Akey">v:key</a> has the index of the
		current byte.
		Example:<pre>:call map(mylist, '"&gt; " .. v:val .. " &lt;"')</pre></div>
<div class="old-help-para">		This puts "&gt; " before and " &lt;" after each item in "mylist".</div>
<div class="old-help-para">		Note that <code>{expr2}</code> is the result of an expression and is then
		used as an expression again.  Often it is good to use a
		<a href="/neovim-docs-web/en/eval#literal-string">literal-string</a> to avoid having to double backslashes.  You
		still have to double ' quotes</div>
<div class="old-help-para">		If <code>{expr2}</code> is a <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a> it is called with two arguments:
			1. The key or the index of the current item.
			2. the value of the current item.
		The function must return the new value of the item. Example
		that changes each value by "key-value":<pre>func KeyValue(key, val)
  return a:key .. '-' .. a:val
endfunc
call map(myDict, function('KeyValue'))</pre></div>
<div class="old-help-para">		It is shorter when using a <a href="/neovim-docs-web/en/eval#lambda">lambda</a>:<pre>call map(myDict, {key, val -&gt; key .. '-' .. val})</pre></div>
<div class="old-help-para">		If you do not use "val" you can leave it out:<pre>call map(myDict, {key -&gt; 'item: ' .. key})</pre></div>
<div class="old-help-para">		If you do not use "key" you can use a short name:<pre>call map(myDict, {_, val -&gt; 'item: ' .. val})</pre></div>
<div class="old-help-para">		The operation is done in-place.  If you want a <a href="/neovim-docs-web/en/eval#List">List</a> or
		<a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> to remain unmodified make a copy first:<pre>:let tlist = map(copy(mylist), ' v:val .. "\t"')</pre></div>
<div class="old-help-para">		Returns <code>{expr1}</code>, the <a href="/neovim-docs-web/en/eval#List">List</a>, <a href="/neovim-docs-web/en/eval#Blob">Blob</a> or <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> that was
		filtered.  When an error is encountered while evaluating
		<code>{expr2}</code> no further items in <code>{expr1}</code> are processed.  When
		<code>{expr2}</code> is a Funcref errors inside a function are ignored,
		unless it was defined with the "abort" flag.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>mylist-&gt;map(expr2)</pre>
maparg(<code>{name}</code> [, <code>{mode}</code> [, <code>{abbr}</code> [, <code>{dict}</code>]]])			<a name="maparg()"></a><code class="help-tag-right">maparg()</code>
		When <code>{dict}</code> is omitted or zero: Return the rhs of mapping
		<code>{name}</code> in mode <code>{mode}</code>.  The returned String has special
		characters translated like in the output of the ":map" command
		listing.</div>
<div class="old-help-para">		When there is no mapping for <code>{name}</code>, an empty String is
		returned if <code>{dict}</code> is FALSE, otherwise returns an empty Dict.
		When the mapping for <code>{name}</code> is empty, then "&lt;Nop&gt;" is
		returned.</div>
<div class="old-help-para">		The <code>{name}</code> can have special key names, like in the ":map"
		command.</div>
<div class="old-help-para">		<code>{mode}</code> can be one of these strings:
			"n"	Normal
			"v"	Visual (including Select)
			"o"	Operator-pending
			"i"	Insert
			"c"	Cmd-line
			"s"	Select
			"x"	Visual
			"l"	langmap <a href="/neovim-docs-web/en/map#language-mapping">language-mapping</a>
			"t"	Terminal
			""	Normal, Visual and Operator-pending
		When <code>{mode}</code> is omitted, the modes for "" are used.</div>
<div class="old-help-para">		When <code>{abbr}</code> is there and it is <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> use abbreviations
		instead of mappings.</div>
<div class="old-help-para">		When <code>{dict}</code> is there and it is <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> return a dictionary
		containing all the information of the mapping with the
		following items:
		  "lhs"	     The <code>{lhs}</code> of the mapping as it would be typed
		  "lhsraw"   The <code>{lhs}</code> of the mapping as raw bytes
		  "lhsrawalt" The <code>{lhs}</code> of the mapping as raw bytes, alternate
		  	      form, only present when it differs from "lhsraw"
		  "rhs"	     The <code>{rhs}</code> of the mapping as typed.
		  "silent"   1 for a <a href="/neovim-docs-web/en/map#%3Amap-silent">:map-silent</a> mapping, else 0.
		  "noremap"  1 if the <code>{rhs}</code> of the mapping is not remappable.
		  "script"   1 if mapping was defined with <code>&lt;script&gt;</code>.
		  "expr"     1 for an expression mapping (<a href="/neovim-docs-web/en/map#%3Amap-%3Cexpr%3E">:map-&lt;expr&gt;</a>).
		  "buffer"   1 for a buffer local mapping (<a href="/neovim-docs-web/en/map#%3Amap-local">:map-local</a>).
		  "mode"     Modes for which the mapping is defined. In
			     addition to the modes mentioned above, these
			     characters will be used:
			     " "     Normal, Visual and Operator-pending
			     "!"     Insert and Commandline mode
				     (<a href="/neovim-docs-web/en/map#mapmode-ic">mapmode-ic</a>)
		  "sid"	     The script local ID, used for <code>&lt;sid&gt;</code> mappings
			     (<a href="/neovim-docs-web/en/map#%3CSID%3E">&lt;SID&gt;</a>).
		  "lnum"     The line number in "sid", zero if unknown.
		  "nowait"   Do not wait for other, longer mappings.
			     (<a href="/neovim-docs-web/en/map#%3Amap-%3Cnowait%3E">:map-&lt;nowait&gt;</a>).</div>
<div class="old-help-para">		The dictionary can be used to restore a mapping with
		<a href="/neovim-docs-web/en/builtin#mapset()">mapset()</a>.</div>
<div class="old-help-para">		The mappings local to the current buffer are checked first,
		then the global mappings.
		This function can be used to map a key even when it's already
		mapped, and have it do the original mapping too.  Sketch:<pre>exe 'nnoremap &lt;Tab&gt; ==' .. maparg('&lt;Tab&gt;', 'n')</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetKey()-&gt;maparg('n')</pre>
mapcheck(<code>{name}</code> [, <code>{mode}</code> [, <code>{abbr}</code>]])			<a name="mapcheck()"></a><code class="help-tag-right">mapcheck()</code>
		Check if there is a mapping that matches with <code>{name}</code> in mode
		<code>{mode}</code>.  See <a href="/neovim-docs-web/en/builtin#maparg()">maparg()</a> for <code>{mode}</code> and special names in
		<code>{name}</code>.
		When <code>{abbr}</code> is there and it is non-zero use abbreviations
		instead of mappings.
		A match happens with a mapping that starts with <code>{name}</code> and
		with a mapping which is equal to the start of <code>{name}</code>.</div>
<div class="old-help-para"><div class="help-column_heading">			matches mapping "a"	"ab"	"abc"</div>		   mapcheck("a")	yes	yes	 yes
		   mapcheck("abc")	yes	yes	 yes
		   mapcheck("ax")	yes	no	 no
		   mapcheck("b")	no	no	 no</div>
<div class="old-help-para">		The difference with maparg() is that mapcheck() finds a
		mapping that matches with <code>{name}</code>, while maparg() only finds a
		mapping for <code>{name}</code> exactly.
		When there is no mapping that starts with <code>{name}</code>, an empty
		String is returned.  If there is one, the RHS of that mapping
		is returned.  If there are several mappings that start with
		<code>{name}</code>, the RHS of one of them is returned.  This will be
		"&lt;Nop&gt;" if the RHS is empty.
		The mappings local to the current buffer are checked first,
		then the global mappings.
		This function can be used to check if a mapping can be added
		without being ambiguous.  Example:<pre>:if mapcheck("_vv") == ""
:   map _vv :set guifont=7x13&lt;CR&gt;
:endif</pre></div>
<div class="old-help-para">		This avoids adding the "_vv" mapping when there already is a
		mapping for "_v" or for "_vvv".</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetKey()-&gt;mapcheck('n')</pre>
mapset(<code>{mode}</code>, <code>{abbr}</code>, <code>{dict}</code>)				<a name="mapset()"></a><code class="help-tag-right">mapset()</code>
		Restore a mapping from a dictionary returned by <a href="/neovim-docs-web/en/builtin#maparg()">maparg()</a>.
		<code>{mode}</code> and <code>{abbr}</code> should be the same as for the call to
		<a href="/neovim-docs-web/en/builtin#maparg()">maparg()</a>. <a name="E460"></a><code class="help-tag">E460</code>
		<code>{mode}</code> is used to define the mode in which the mapping is set,
		not the "mode" entry in <code>{dict}</code>.
		Example for saving and restoring a mapping:<pre>let save_map = maparg('K', 'n', 0, 1)
nnoremap K somethingelse
...
call mapset('n', 0, save_map)</pre></div>
<div class="old-help-para">		Note that if you are going to replace a map in several modes,
		e.g. with <code>:map!</code>, you need to save the mapping for all of
		them, since they can differ.</div>
<div class="old-help-para">match(<code>{expr}</code>, <code>{pat}</code> [, <code>{start}</code> [, <code>{count}</code>]])			<a name="match()"></a><code class="help-tag-right">match()</code>
		When <code>{expr}</code> is a <a href="/neovim-docs-web/en/eval#List">List</a> then this returns the index of the
		first item where <code>{pat}</code> matches.  Each item is used as a
		String, <a href="/neovim-docs-web/en/eval#Lists">Lists</a> and <a href="/neovim-docs-web/en/eval#Dictionaries">Dictionaries</a> are used as echoed.</div>
<div class="old-help-para">		Otherwise, <code>{expr}</code> is used as a String.  The result is a
		Number, which gives the index (byte offset) in <code>{expr}</code> where
		<code>{pat}</code> matches.</div>
<div class="old-help-para">		A match at the first character or <a href="/neovim-docs-web/en/eval#List">List</a> item returns zero.
		If there is no match -1 is returned.</div>
<div class="old-help-para">		For getting submatches see <a href="/neovim-docs-web/en/builtin#matchlist()">matchlist()</a>.
		Example:<pre>:echo match("testing", "ing")        " results in 4
:echo match([1, 'x'], '\a')        " results in 1</pre></div>
<div class="old-help-para">		See <a href="/neovim-docs-web/en/builtin#string-match">string-match</a> for how <code>{pat}</code> is used.
								<a name="strpbrk()"></a><code class="help-tag-right">strpbrk()</code>
		Vim doesn't have a strpbrk() function.  But you can do:<pre>:let sepidx = match(line, '[.,;: \t]')</pre></div>
<div class="old-help-para">								<a name="strcasestr()"></a><code class="help-tag-right">strcasestr()</code>
		Vim doesn't have a strcasestr() function.  But you can add
		"\c" to the pattern to ignore case:<pre>:let idx = match(haystack, '\cneedle')</pre></div>
<div class="old-help-para">		If <code>{start}</code> is given, the search starts from byte index
		<code>{start}</code> in a String or item <code>{start}</code> in a <a href="/neovim-docs-web/en/eval#List">List</a>.
		The result, however, is still the index counted from the
		first character/item.  Example:<pre>:echo match("testing", "ing", 2)</pre></div>
<div class="old-help-para">		result is again "4".<pre>:echo match("testing", "ing", 4)</pre></div>
<div class="old-help-para">		result is again "4".<pre>:echo match("testing", "t", 2)</pre></div>
<div class="old-help-para">		result is "3".
		For a String, if <code>{start}</code> &gt; 0 then it is like the string starts
		<code>{start}</code> bytes later, thus "^" will match at <code>{start}</code>.  Except
		when <code>{count}</code> is given, then it's like matches before the
		<code>{start}</code> byte are ignored (this is a bit complicated to keep it
		backwards compatible).
		For a String, if <code>{start}</code> &lt; 0, it will be set to 0.  For a list
		the index is counted from the end.
		If <code>{start}</code> is out of range (<code>{start}</code> &gt; strlen(<code>{expr}</code>) for a
		String or <code>{start}</code> &gt; len(<code>{expr}</code>) for a <a href="/neovim-docs-web/en/eval#List">List</a>) -1 is returned.</div>
<div class="old-help-para">		When <code>{count}</code> is given use the <code>{count}</code>'<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+builtin.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/builtin.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%09If%20%7Bstart%7D%20is%20out%20of%20range%20(%7Bstart%7D%20%3E%20strlen(%7Bexpr%7D)%20for%20a%0A%09%09String%20or%20%7Bstart%7D%20%3E%20len(%7Bexpr%7D)%20for%20a%20%7CList%7C)%20-1%20is%20returned.%0A%0A%09%09When%20%7Bcount%7D%20is%20given%20use%20the%20%7Bcount%7D'th%20match.%20%20When%20a%20match%0A%09%09is%20found%20in%20a%20String%20the%20search%20for%20the%20next%20one%20starts%20one%0A%09%09character%20further.%20%20Thus%20this%20example%20results%20in%201%3A%20%3E%0A%09%09%09echo%20match(%22testing%22%2C%20%22..%22%2C%200%2C%202)%0D%60%60%60">th</a> match.  When a match
		is found in a String the search for the next one starts one
		character further.  Thus this example results in 1:<pre>echo match("testing", "..", 0, 2)</pre></div>
<div class="old-help-para">		In a <a href="/neovim-docs-web/en/eval#List">List</a> the search continues in the next item.
		Note that when <code>{count}</code> is added the way <code>{start}</code> works changes,
		see above.</div>
<div class="old-help-para">		See <a href="/neovim-docs-web/en/pattern#pattern">pattern</a> for the patterns that are accepted.
		The <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> option is used to set the ignore-caseness of
		the pattern.  <a href="/neovim-docs-web/en/options#'smartcase'">'smartcase'</a> is NOT used.  The matching is always
		done like <a href="/neovim-docs-web/en/options#'magic'">'magic'</a> is set and <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> is empty.
		Note that a match at the start is preferred, thus when the
		pattern is using "*" (any number of matches) it tends to find
		zero matches at the start instead of a number of matches
		further down in the text.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetText()-&gt;match('word')
GetList()-&gt;match('word')</pre></div>
<div class="old-help-para">			<a name="matchadd()"></a><code class="help-tag-right">matchadd()</code> <a name="E798"></a><code class="help-tag">E798</code> <a name="E799"></a><code class="help-tag">E799</code> <a name="E801"></a><code class="help-tag">E801</code> <a name="E957"></a><code class="help-tag">E957</code>
matchadd(<code>{group}</code>, <code>{pattern}</code> [, <code>{priority}</code> [, <code>{id}</code> [, <code>{dict}</code>]]])
		Defines a pattern to be highlighted in the current window (a
		"match").  It will be highlighted with <code>{group}</code>.  Returns an
		identification number (ID), which can be used to delete the
		match using <a href="/neovim-docs-web/en/builtin#matchdelete()">matchdelete()</a>.  The ID is bound to the window.
		Matching is case sensitive and magic, unless case sensitivity
		or magicness are explicitly overridden in <code>{pattern}</code>.  The
		<a href="/neovim-docs-web/en/options#'magic'">'magic'</a>, <a href="/neovim-docs-web/en/options#'smartcase'">'smartcase'</a> and <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> options are not used.
		The "Conceal" value is special, it causes the match to be
		concealed.</div>
<div class="old-help-para">		The optional <code>{priority}</code> argument assigns a priority to the
		match.  A match with a high priority will have its
		highlighting overrule that of a match with a lower priority.
		A priority is specified as an integer (negative numbers are no
		exception).  If the <code>{priority}</code> argument is not specified, the
		default priority is 10.  The priority of <a href="/neovim-docs-web/en/options#'hlsearch'">'hlsearch'</a> is zero,
		hence all matches with a priority greater than zero will
		overrule it.  Syntax highlighting (see <a href="/neovim-docs-web/en/options#'syntax'">'syntax'</a>) is a separate
		mechanism, and regardless of the chosen priority a match will
		always overrule syntax highlighting.</div>
<div class="old-help-para">		The optional <code>{id}</code> argument allows the request for a specific
		match ID.  If a specified ID is already taken, an error
		message will appear and the match will not be added.  An ID
		is specified as a positive integer (zero excluded).  IDs 1, 2
		and 3 are reserved for <a href="/neovim-docs-web/en/pattern#%3Amatch">:match</a>, <a href="/neovim-docs-web/en/pattern#%3A2match">:2match</a> and <a href="/neovim-docs-web/en/pattern#%3A3match">:3match</a>,
		respectively.  3 is reserved for use by the <a href="/neovim-docs-web/en/pi_paren#matchparen">matchparen</a>
		plugin.
		If the <code>{id}</code> argument is not specified or -1, <a href="/neovim-docs-web/en/builtin#matchadd()">matchadd()</a>
		automatically chooses a free ID, which is at least 1000.</div>
<div class="old-help-para">		The optional <code>{dict}</code> argument allows for further custom
		values. Currently this is used to specify a match specific
		conceal character that will be shown for <a href="/neovim-docs-web/en/syntax#hl-Conceal">hl-Conceal</a>
		highlighted matches. The dict can have the following members:</div>
<div class="old-help-para">			conceal	    Special character to show instead of the
				    match (only for <a href="/neovim-docs-web/en/syntax#hl-Conceal">hl-Conceal</a> highlighted
				    matches, see <a href="/neovim-docs-web/en/syntax#%3Asyn-cchar">:syn-cchar</a>)
			window	    Instead of the current window use the
				    window with this number or window ID.</div>
<div class="old-help-para">		The number of matches is not limited, as it is the case with
		the <a href="/neovim-docs-web/en/pattern#%3Amatch">:match</a> commands.</div>
<div class="old-help-para">		Returns -1 on error.</div>
<div class="old-help-para">		Example:<pre>:highlight MyGroup ctermbg=green guibg=green
:let m = matchadd("MyGroup", "TODO")</pre></div>
<div class="old-help-para">		Deletion of the pattern:<pre>:call matchdelete(m)</pre></div>
<div class="old-help-para">		A list of matches defined by <a href="/neovim-docs-web/en/builtin#matchadd()">matchadd()</a> and <a href="/neovim-docs-web/en/pattern#%3Amatch">:match</a> are
		available from <a href="/neovim-docs-web/en/builtin#getmatches()">getmatches()</a>.  All matches can be deleted in
		one operation by <a href="/neovim-docs-web/en/builtin#clearmatches()">clearmatches()</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetGroup()-&gt;matchadd('TODO')</pre></div>
<div class="old-help-para">							<a name="matchaddpos()"></a><code class="help-tag-right">matchaddpos()</code>
matchaddpos(<code>{group}</code>, <code>{pos}</code> [, <code>{priority}</code> [, <code>{id}</code> [, <code>{dict}</code>]]])
		Same as <a href="/neovim-docs-web/en/builtin#matchadd()">matchadd()</a>, but requires a list of positions <code>{pos}</code>
		instead of a pattern. This command is faster than <a href="/neovim-docs-web/en/builtin#matchadd()">matchadd()</a>
		because it does not require to handle regular expressions and
		sets buffer line boundaries to redraw screen. It is supposed
		to be used when fast match additions and deletions are
		required, for example to highlight matching parentheses.
							<a name="E5030"></a><code class="help-tag-right">E5030</code> <a name="E5031"></a><code class="help-tag">E5031</code>
		<code>{pos}</code> is a list of positions.  Each position can be one of
		these:
<div class="help-li" style=""> A number.  This whole line will be highlighted.  The first
		  line has number 1.
</div><div class="help-li" style=""> A list with one number, e.g., [23]. The whole line with this
		  number will be highlighted.
</div><div class="help-li" style=""> A list with two numbers, e.g., [23, 11]. The first number is
		  the line number, the second one is the column number (first
		  column is 1, the value must correspond to the byte index as
		  <a href="/neovim-docs-web/en/builtin#col()">col()</a> would return).  The character at this position will
		  be highlighted.
</div><div class="help-li" style=""> A list with three numbers, e.g., [23, 11, 3]. As above, but
		  the third number gives the length of the highlight in bytes.
</div></div>
<div class="old-help-para">		Entries with zero and negative line numbers are silently
		ignored, as well as entries with negative column numbers and
		lengths.</div>
<div class="old-help-para">		Returns -1 on error.</div>
<div class="old-help-para">		Example:<pre>:highlight MyGroup ctermbg=green guibg=green
:let m = matchaddpos("MyGroup", [[23, 24], 34])</pre></div>
<div class="old-help-para">		Deletion of the pattern:<pre>:call matchdelete(m)</pre></div>
<div class="old-help-para">		Matches added by <a href="/neovim-docs-web/en/builtin#matchaddpos()">matchaddpos()</a> are returned by
		<a href="/neovim-docs-web/en/builtin#getmatches()">getmatches()</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetGroup()-&gt;matchaddpos([23, 11])</pre>
matcharg(<code>{nr}</code>)							<a name="matcharg()"></a><code class="help-tag-right">matcharg()</code>
		Selects the <code>{nr}</code> match item, as set with a <a href="/neovim-docs-web/en/pattern#%3Amatch">:match</a>,
		<a href="/neovim-docs-web/en/pattern#%3A2match">:2match</a> or <a href="/neovim-docs-web/en/pattern#%3A3match">:3match</a> command.
		Return a <a href="/neovim-docs-web/en/eval#List">List</a> with two elements:
			The name of the highlight group used
			The pattern used.
		When <code>{nr}</code> is not 1, 2 or 3 returns an empty <a href="/neovim-docs-web/en/eval#List">List</a>.
		When there is no match item set returns ['', ''].
		This is useful to save and restore a <a href="/neovim-docs-web/en/pattern#%3Amatch">:match</a>.
		Highlighting matches using the <a href="/neovim-docs-web/en/pattern#%3Amatch">:match</a> commands are limited
		to three matches. <a href="/neovim-docs-web/en/builtin#matchadd()">matchadd()</a> does not have this limitation.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetMatch()-&gt;matcharg()</pre>
matchdelete(<code>{id}</code> [, <code>{win}</code>])		       <a name="matchdelete()"></a><code class="help-tag-right">matchdelete()</code> <a name="E802"></a><code class="help-tag">E802</code> <a name="E803"></a><code class="help-tag">E803</code>
		Deletes a match with ID <code>{id}</code> previously defined by <a href="/neovim-docs-web/en/builtin#matchadd()">matchadd()</a>
		or one of the <a href="/neovim-docs-web/en/pattern#%3Amatch">:match</a> commands.  Returns 0 if successful,
		otherwise -1.  See example for <a href="/neovim-docs-web/en/builtin#matchadd()">matchadd()</a>.  All matches can
		be deleted in one operation by <a href="/neovim-docs-web/en/builtin#clearmatches()">clearmatches()</a>.
		If <code>{win}</code> is specified, use the window with this number or
		window ID instead of the current window.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetMatch()-&gt;matchdelete()</pre>
matchend(<code>{expr}</code>, <code>{pat}</code> [, <code>{start}</code> [, <code>{count}</code>]])			<a name="matchend()"></a><code class="help-tag-right">matchend()</code>
		Same as <a href="/neovim-docs-web/en/builtin#match()">match()</a>, but return the index of first character
		after the match.  Example:<pre>:echo matchend("testing", "ing")</pre></div>
<div class="old-help-para">		results in "7".
							<a name="strspn()"></a><code class="help-tag-right">strspn()</code> <a name="strcspn()"></a><code class="help-tag">strcspn()</code>
		Vim doesn't have a strspn() or strcspn() function, but you can
		do it with matchend():<pre>:let span = matchend(line, '[a-zA-Z]')
:let span = matchend(line, '[^a-zA-Z]')</pre></div>
<div class="old-help-para">		Except that -1 is returned when there are no matches.</div>
<div class="old-help-para">		The <code>{start}</code>, if given, has the same meaning as for <a href="/neovim-docs-web/en/builtin#match()">match()</a>.<pre>:echo matchend("testing", "ing", 2)</pre></div>
<div class="old-help-para">		results in "7".<pre>:echo matchend("testing", "ing", 5)</pre></div>
<div class="old-help-para">		result is "-1".
		When <code>{expr}</code> is a <a href="/neovim-docs-web/en/eval#List">List</a> the result is equal to <a href="/neovim-docs-web/en/builtin#match()">match()</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetText()-&gt;matchend('word')</pre>
matchfuzzy(<code>{list}</code>, <code>{str}</code> [, <code>{dict}</code>])			<a name="matchfuzzy()"></a><code class="help-tag-right">matchfuzzy()</code>
		If <code>{list}</code> is a list of strings, then returns a <a href="/neovim-docs-web/en/eval#List">List</a> with all
		the strings in <code>{list}</code> that fuzzy match <code>{str}</code>. The strings in
		the returned list are sorted based on the matching score.</div>
<div class="old-help-para">		The optional <code>{dict}</code> argument always supports the following
		items:
		    matchseq	When this item is present return only matches
				that contain the characters in <code>{str}</code> in the
				given sequence.
		    limit	Maximum number of matches in <code>{list}</code> to be
				returned.  Zero means no limit.</div>
<div class="old-help-para">		If <code>{list}</code> is a list of dictionaries, then the optional <code>{dict}</code>
		argument supports the following additional items:
		    key		Key of the item which is fuzzy matched against
				<code>{str}</code>. The value of this item should be a
				string.
		    text_cb	<a href="/neovim-docs-web/en/eval#Funcref">Funcref</a> that will be called for every item
				in <code>{list}</code> to get the text for fuzzy matching.
				This should accept a dictionary item as the
				argument and return the text for that item to
				use for fuzzy matching.</div>
<div class="old-help-para">		<code>{str}</code> is treated as a literal string and regular expression
		matching is NOT supported.  The maximum supported <code>{str}</code> length
		is 256.</div>
<div class="old-help-para">		When <code>{str}</code> has multiple words each separated by white space,
		then the list of strings that have all the words is returned.</div>
<div class="old-help-para">		If there are no matching strings or there is an error, then an
		empty list is returned. If length of <code>{str}</code> is greater than
		256, then returns an empty list.</div>
<div class="old-help-para">		When <code>{limit}</code> is given, matchfuzzy() will find up to this
		number of matches in <code>{list}</code> and return them in sorted order.</div>
<div class="old-help-para">		Refer to <a href="/neovim-docs-web/en/pattern#fuzzy-matching">fuzzy-matching</a> for more information about fuzzy
		matching strings.</div>
<div class="old-help-para">		Example:<pre>:echo matchfuzzy(["clay", "crow"], "cay")</pre></div>
<div class="old-help-para">		results in ["clay"].<pre>:echo getbufinfo()-&gt;map({_, v -&gt; v.name})-&gt;matchfuzzy("ndl")</pre></div>
<div class="old-help-para">		results in a list of buffer names fuzzy matching "ndl".<pre>:echo getbufinfo()-&gt;matchfuzzy("ndl", {'key' : 'name'})</pre></div>
<div class="old-help-para">		results in a list of buffer information dicts with buffer
		names fuzzy matching "ndl".<pre>:echo getbufinfo()-&gt;matchfuzzy("spl",
                             \ {'text_cb' : {v -&gt; v.name}})</pre></div>
<div class="old-help-para">		results in a list of buffer information dicts with buffer
		names fuzzy matching "spl".<pre>:echo v:oldfiles-&gt;matchfuzzy("test")</pre></div>
<div class="old-help-para">		results in a list of file names fuzzy matching "test".<pre>:let l = readfile("buffer.c")-&gt;matchfuzzy("str")</pre></div>
<div class="old-help-para">		results in a list of lines in "buffer.c" fuzzy matching "str".<pre>:echo ['one two', 'two one']-&gt;matchfuzzy('two one')</pre></div>
<div class="old-help-para">		results in ['two one', '<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+builtin.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/builtin.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%09%20%20%20%3Alet%20l%20%3D%20readfile(%22buffer.c%22)-%3Ematchfuzzy(%22str%22)%0A%3C%09%09results%20in%20a%20list%20of%20lines%20in%20%22buffer.c%22%20fuzzy%20matching%20%22str%22.%20%3E%0A%09%09%20%20%20%3Aecho%20%5B'one%20two'%2C%20'two%20one'%5D-%3Ematchfuzzy('two%20one')%0A%3C%09%09results%20in%20%5B'two%20one'%2C%20'one%20two'%5D.%20%3E%0A%09%09%20%20%20%3Aecho%20%5B'one%20two'%2C%20'two%20one'%5D-%3Ematchfuzzy('two%20one'%2C%0A%09%09%09%09%09%09%5C%20%7B'matchseq'%3A%201%7D)%0A%3C%09%09results%20in%20%5B'two%20one'%5D.%0D%60%60%60">one</a> two'].<pre>:echo ['one two', 'two one']-&gt;matchfuzzy('two one',
                             \ {'matchseq': 1})</pre></div>
<div class="old-help-para">		results in ['two one'].</div>
<div class="old-help-para">matchfuzzypos(<code>{list}</code>, <code>{str}</code> [, <code>{dict}</code>])			<a name="matchfuzzypos()"></a><code class="help-tag-right">matchfuzzypos()</code>
		Same as <a href="/neovim-docs-web/en/builtin#matchfuzzy()">matchfuzzy()</a>, but returns the list of matched
		strings, the list of character positions where characters
		in <code>{str}</code> matches and a list of matching scores.  You can
		use <a href="/neovim-docs-web/en/builtin#byteidx()">byteidx()</a> to convert a character position to a byte
		position.</div>
<div class="old-help-para">		If <code>{str}</code> matches multiple times in a string, then only the
		positions for the best match is returned.</div>
<div class="old-help-para">		If there are no matching strings or there is an error, then a
		list with three empty list items is returned.</div>
<div class="old-help-para">		Example:<pre>:echo matchfuzzypos(['testing'], 'tsg')</pre></div>
<div class="old-help-para">		results in [["testing"], [[0, 2, 6]], [99]]<pre>:echo matchfuzzypos(['clay', 'lacy'], 'la')</pre></div>
<div class="old-help-para">		results in [["lacy", "clay"], [[0, 1], [1, 2]], [153, 133]]<pre>:echo [{'text': 'hello', 'id' : 10}]
        \ -&gt;matchfuzzypos('ll', {'key' : 'text'})</pre></div>
<div class="old-help-para">		results in [[{"id": 10, "text": "hello"}], [[2, 3]], [127]]</div>
<div class="old-help-para">matchlist(<code>{expr}</code>, <code>{pat}</code> [, <code>{start}</code> [, <code>{count}</code>]])		<a name="matchlist()"></a><code class="help-tag-right">matchlist()</code>
		Same as <a href="/neovim-docs-web/en/builtin#match()">match()</a>, but return a <a href="/neovim-docs-web/en/eval#List">List</a>.  The first item in the
		list is the matched string, same as what matchstr() would
		return.  Following items are submatches, like "\1", "\2", etc.
		in <a href="/neovim-docs-web/en/change#%3Asubstitute">:substitute</a>.  When an optional submatch didn't match an
		empty string is used.  Example:<pre>echo matchlist('acd', '\(a\)\?\(b\)\?\(c\)\?\(.*\)')</pre></div>
<div class="old-help-para">		Results in: ['acd', 'a', '', 'c', 'd', '', '', '', '', '']
		When there is no match an empty list is returned.</div>
<div class="old-help-para">		You can pass in a List, but that is not very useful.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetText()-&gt;matchlist('word')</pre>
matchstr(<code>{expr}</code>, <code>{pat}</code> [, <code>{start}</code> [, <code>{count}</code>]])			<a name="matchstr()"></a><code class="help-tag-right">matchstr()</code>
		Same as <a href="/neovim-docs-web/en/builtin#match()">match()</a>, but return the matched string.  Example:<pre>:echo matchstr("testing", "ing")</pre></div>
<div class="old-help-para">		results in "ing".
		When there is no match "" is returned.
		The <code>{start}</code>, if given, has the same meaning as for <a href="/neovim-docs-web/en/builtin#match()">match()</a>.<pre>:echo matchstr("testing", "ing", 2)</pre></div>
<div class="old-help-para">		results in "ing".<pre>:echo matchstr("testing", "ing", 5)</pre></div>
<div class="old-help-para">		result is "".
		When <code>{expr}</code> is a <a href="/neovim-docs-web/en/eval#List">List</a> then the matching item is returned.
		The type isn't changed, it's not necessarily a String.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetText()-&gt;matchstr('word')</pre>
matchstrpos(<code>{expr}</code>, <code>{pat}</code> [, <code>{start}</code> [, <code>{count}</code>]])		<a name="matchstrpos()"></a><code class="help-tag-right">matchstrpos()</code>
		Same as <a href="/neovim-docs-web/en/builtin#matchstr()">matchstr()</a>, but return the matched string, the start
		position and the end position of the match.  Example:<pre>:echo matchstrpos("testing", "ing")</pre></div>
<div class="old-help-para">		results in ["ing", 4, 7].
		When there is no match ["", -1, -1] is returned.
		The <code>{start}</code>, if given, has the same meaning as for <a href="/neovim-docs-web/en/builtin#match()">match()</a>.<pre>:echo matchstrpos("testing", "ing", 2)</pre></div>
<div class="old-help-para">		results in ["ing", 4, 7].<pre>:echo matchstrpos("testing", "ing", 5)</pre></div>
<div class="old-help-para">		result is ["", -1, -1].
		When <code>{expr}</code> is a <a href="/neovim-docs-web/en/eval#List">List</a> then the matching item, the index
		of first item where <code>{pat}</code> matches, the start position and the
		end position of the match are returned.<pre>:echo matchstrpos([1, '__x'], '\a')</pre></div>
<div class="old-help-para">		result is ["x", 1, 2, 3].
		The type isn't changed, it's not necessarily a String.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetText()-&gt;matchstrpos('word')</pre></div>
<div class="old-help-para">							<a name="max()"></a><code class="help-tag-right">max()</code>
max(<code>{expr}</code>)	Return the maximum value of all items in <code>{expr}</code>. Example:<pre>echo max([apples, pears, oranges])</pre></div>
<div class="old-help-para">		<code>{expr}</code> can be a <a href="/neovim-docs-web/en/eval#List">List</a> or a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a>.  For a Dictionary,
		it returns the maximum of all values in the Dictionary.
		If <code>{expr}</code> is neither a List nor a Dictionary, or one of the
		items in <code>{expr}</code> cannot be used as a Number this results in
                an error.  An empty <a href="/neovim-docs-web/en/eval#List">List</a> or <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> results in zero.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>mylist-&gt;max()</pre>
menu_get(<code>{path}</code> [, <code>{modes}</code>])				<a name="menu_get()"></a><code class="help-tag-right">menu_get()</code>
		Returns a <a href="/neovim-docs-web/en/eval#List">List</a> of <a href="/neovim-docs-web/en/eval#Dictionaries">Dictionaries</a> describing <a href="/neovim-docs-web/en/gui#menus">menus</a> (defined
		by <a href="/neovim-docs-web/en/gui#%3Amenu">:menu</a>, <a href="/neovim-docs-web/en/gui#%3Aamenu">:amenu</a>, ???), including <a href="/neovim-docs-web/en/gui#hidden-menus">hidden-menus</a>.</div>
<div class="old-help-para">		<code>{path}</code> matches a menu by name, or all menus if <code>{path}</code> is an
		empty string.  Example:<pre>:echo menu_get('File','')
:echo menu_get('')</pre></div>
<div class="old-help-para">		<code>{modes}</code> is a string of zero or more modes (see <a href="/neovim-docs-web/en/builtin#maparg()">maparg()</a> or
		<a href="/neovim-docs-web/en/gui#creating-menus">creating-menus</a> for the list of modes). "a" means "all".</div>
<div class="old-help-para">		Example:<pre>nnoremenu &amp;Test.Test inormal
inoremenu Test.Test insert
vnoremenu Test.Test x
echo menu_get("")</pre></div>
<div class="old-help-para">		returns something like this:<pre>[ {
  "hidden": 0,
  "name": "Test",
  "priority": 500,
  "shortcut": 84,
  "submenus": [ {
    "hidden": 0,
    "mappings": {
      i": {
        "enabled": 1,
        "noremap": 1,
        "rhs": "insert",
        "sid": 1,
        "silent": 0
      },
      n": { ... },
      s": { ... },
      v": { ... }
    },
    "name": "Test",
    "priority": 500,
    "shortcut": 0
  } ]
} ]</pre></div>
<div class="old-help-para">menu_info(<code>{name}</code> [, <code>{mode}</code>])				<a name="menu_info()"></a><code class="help-tag-right">menu_info()</code>
		Return information about the specified menu <code>{name}</code> in
		mode <code>{mode}</code>. The menu name should be specified without the
		shortcut character ('&amp;'). If <code>{name}</code> is "", then the top-level
		menu names are returned.</div>
<div class="old-help-para">		<code>{mode}</code> can be one of these strings:
			"n"	Normal
			"v"	Visual (including Select)
			"o"	Operator-pending
			"i"	Insert
			"c"	Cmd-line
			"s"	Select
			"x"	Visual
			"t"	Terminal-Job
			""	Normal, Visual and Operator-pending
			"!"	Insert and Cmd-line
		When <code>{mode}</code> is omitted, the modes for "" are used.</div>
<div class="old-help-para">		Returns a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> containing the following items:
		  accel		menu item accelerator text <a href="/neovim-docs-web/en/gui#menu-text">menu-text</a>
		  display	display name (name without '&amp;')
		  enabled	v:true if this menu item is enabled
				Refer to <a href="/neovim-docs-web/en/gui#%3Amenu-enable">:menu-enable</a>
		  icon		name of the icon file (for toolbar)
				<a href="/neovim-docs-web/en/gui#toolbar-icon">toolbar-icon</a>
		  iconidx	index of a built-in icon
		  modes		modes for which the menu is defined. In
				addition to the modes mentioned above, these
				characters will be used:
				" "	Normal, Visual and Operator-pending
		  name		menu item name.
		  noremenu	v:true if the <code>{rhs}</code> of the menu item is not
				remappable else v:false.
		  priority	menu order priority <a href="/neovim-docs-web/en/gui#menu-priority">menu-priority</a>
		  rhs		right-hand-side of the menu item. The returned
				string has special characters translated like
				in the output of the ":menu" command listing.
				When the <code>{rhs}</code> of a menu item is empty, then
				"&lt;Nop&gt;" is returned.
		  script	v:true if script-local remapping of <code>{rhs}</code> is
				allowed else v:false.  See <a href="/neovim-docs-web/en/gui#%3Amenu-script">:menu-script</a>.
		  shortcut	shortcut key (character after '&amp;' in
				the menu name) <a href="/neovim-docs-web/en/gui#menu-shortcut">menu-shortcut</a>
		  silent	v:true if the menu item is created
				with <code>&lt;silent&gt;</code> argument <a href="/neovim-docs-web/en/gui#%3Amenu-silent">:menu-silent</a>
		  submenus	<a href="/neovim-docs-web/en/eval#List">List</a> containing the names of
				all the submenus.  Present only if the menu
				item has submenus.</div>
<div class="old-help-para">		Returns an empty dictionary if the menu item is not found.</div>
<div class="old-help-para">		Examples:<pre>:echo menu_info('Edit.Cut')
:echo menu_info('File.Save', 'n')

" Display the entire menu hierarchy in a buffer
func ShowMenu(name, pfx)
  let m = menu_info(a:name)
  call append(line('$'), a:pfx .. m.display)
  for child in m-&gt;get('submenus', [])
    call ShowMenu(a:name .. '.' .. escape(child, '.'),
                                \ a:pfx .. '    ')
  endfor
endfunc
new
for topmenu in menu_info('').submenus
  call ShowMenu(topmenu, '')
endfor</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetMenuName()-&gt;menu_info('v')</pre></div>
<div class="old-help-para">							<a name="min()"></a><code class="help-tag-right">min()</code>
min(<code>{expr}</code>)	Return the minimum value of all items in <code>{expr}</code>. Example:<pre>echo min([apples, pears, oranges])</pre></div>
<div class="old-help-para">		<code>{expr}</code> can be a <a href="/neovim-docs-web/en/eval#List">List</a> or a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a>.  For a Dictionary,
		it returns the minimum of all values in the Dictionary.
		If <code>{expr}</code> is neither a List nor a Dictionary, or one of the
		items in <code>{expr}</code> cannot be used as a Number this results in
		an error.  An empty <a href="/neovim-docs-web/en/eval#List">List</a> or <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> results in zero.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>mylist-&gt;min()</pre></div>
<div class="old-help-para">							<a name="mkdir()"></a><code class="help-tag-right">mkdir()</code> <a name="E739"></a><code class="help-tag">E739</code>
mkdir(<code>{name}</code> [, <code>{path}</code> [, <code>{prot}</code>]])
		Create directory <code>{name}</code>.</div>
<div class="old-help-para">		If <code>{path}</code> is "p" then intermediate directories are created as
		necessary.  Otherwise it must be "".</div>
<div class="old-help-para">		If <code>{prot}</code> is given it is used to set the protection bits of
		the new directory.  The default is 0o755 (rwxr-xr-x: r/w for
		the user, readable for others).  Use 0o700 to make it
		unreadable for others.</div>
<div class="old-help-para">		<code>{prot}</code> is applied for all parts of <code>{name}</code>.  Thus if you create
		/tmp/foo/bar then /tmp/foo will be created with 0o700. Example:<pre>:call mkdir($HOME .. "/tmp/foo/bar", "p", 0o700)</pre></div>
<div class="old-help-para">		This function is not available in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>.</div>
<div class="old-help-para">		If you try to create an existing directory with <code>{path}</code> set to
		"p" mkdir() will silently exit.</div>
<div class="old-help-para">		The function result is a Number, which is TRUE if the call was
		successful or FALSE if the directory creation failed or partly
		failed.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetName()-&gt;mkdir()</pre></div>
<div class="old-help-para">							<a name="mode()"></a><code class="help-tag-right">mode()</code>
mode([expr])	Return a string that indicates the current mode.
		If [expr] is supplied and it evaluates to a non-zero Number or
		a non-empty String (<a href="/neovim-docs-web/en/eval#non-zero-arg">non-zero-arg</a>), then the full mode is
		returned, otherwise only the first letter is returned.</div>
<div class="old-help-para">		   n	    Normal
		   no	    Operator-pending
		   nov	    Operator-pending (forced charwise <a href="/neovim-docs-web/en/motion#o_v">o_v</a>)
		   noV	    Operator-pending (forced linewise <a href="/neovim-docs-web/en/motion#o_V">o_V</a>)
		   noCTRL-V Operator-pending (forced blockwise <a href="/neovim-docs-web/en/motion#o_CTRL-V">o_CTRL-V</a>)
				<code>CTRL-V</code> is one character
		   niI	    Normal using <a href="/neovim-docs-web/en/insert#i_CTRL-O">i_CTRL-O</a> in <a href="/neovim-docs-web/en/insert#Insert-mode">Insert-mode</a>
		   niR	    Normal using <a href="/neovim-docs-web/en/insert#i_CTRL-O">i_CTRL-O</a> in <a href="/neovim-docs-web/en/insert#Replace-mode">Replace-mode</a>
		   niV	    Normal using <a href="/neovim-docs-web/en/insert#i_CTRL-O">i_CTRL-O</a> in <a href="/neovim-docs-web/en/insert#Virtual-Replace-mode">Virtual-Replace-mode</a>
		   nt	    Normal in <a href="/neovim-docs-web/en/nvim_terminal_emulator#terminal-emulator">terminal-emulator</a> (insert goes to
				Terminal mode)
		   ntT	    Normal using <a href="/neovim-docs-web/en/nvim_terminal_emulator#t_CTRL-%5C_CTRL-O">t_CTRL-\_CTRL-O</a> in <a href="/neovim-docs-web/en/intro#Terminal-mode">Terminal-mode</a>
		   v	    Visual by character
		   vs	    Visual by character using <a href="/neovim-docs-web/en/visual#v_CTRL-O">v_CTRL-O</a> in Select mode
		   V	    Visual by line
		   Vs	    Visual by line using <a href="/neovim-docs-web/en/visual#v_CTRL-O">v_CTRL-O</a> in Select mode
		   <code>CTRL-V</code>   Visual blockwise
		   <code>CTRL-V</code>s  Visual blockwise using <a href="/neovim-docs-web/en/visual#v_CTRL-O">v_CTRL-O</a> in Select mode
		   s	    Select by character
		   S	    Select by line
		   <code>CTRL-S</code>   Select blockwise
		   i	    Insert
		   ic	    Insert mode completion <a href="/neovim-docs-web/en/insert#compl-generic">compl-generic</a>
		   ix	    Insert mode <a href="/neovim-docs-web/en/insert#i_CTRL-X">i_CTRL-X</a> completion
		   R	    Replace <a href="/neovim-docs-web/en/change#R">R</a>
		   Rc	    Replace mode completion <a href="/neovim-docs-web/en/insert#compl-generic">compl-generic</a>
		   Rx	    Replace mode <a href="/neovim-docs-web/en/insert#i_CTRL-X">i_CTRL-X</a> completion
		   Rv	    Virtual Replace <a href="/neovim-docs-web/en/change#gR">gR</a>
		   Rvc	    Virtual Replace mode completion <a href="/neovim-docs-web/en/insert#compl-generic">compl-generic</a>
		   Rvx	    Virtual Replace mode <a href="/neovim-docs-web/en/insert#i_CTRL-X">i_CTRL-X</a> completion
		   c	    Command-line editing
		   cv	    Vim Ex mode <a href="/neovim-docs-web/en/intro#gQ">gQ</a>
		   r	    Hit-enter prompt
		   rm	    The -- more -- prompt
		   r?	    A <a href="/neovim-docs-web/en/editing#%3Aconfirm">:confirm</a> query of some sort
		   !	    Shell or external command is executing
		   t	    Terminal mode: keys go to the job</div>
<div class="old-help-para">		This is useful in the <a href="/neovim-docs-web/en/options#'statusline'">'statusline'</a> option or RPC calls. In
		most other places it always returns "c" or "n".
		Note that in the future more modes and more specific modes may
		be added. It's better not to compare the whole string but only
		the leading character(s).
		Also see <a href="/neovim-docs-web/en/builtin#visualmode()">visualmode()</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>DoFull()-&gt;mode()</pre>
msgpackdump(<code>{list}</code> [, <code>{type}</code>])				<a name="msgpackdump()"></a><code class="help-tag-right">msgpackdump()</code>
		Convert a list of VimL objects to msgpack. Returned value is a
		<a href="/neovim-docs-web/en/builtin#readfile()">readfile()</a>-style list. When <code>{type}</code> contains "B", a <a href="/neovim-docs-web/en/eval#Blob">Blob</a> is
		returned instead. Example:<pre>call writefile(msgpackdump([{}]), 'fname.mpack', 'b')</pre></div>
<div class="old-help-para">		or, using a <a href="/neovim-docs-web/en/eval#Blob">Blob</a>:<pre>call writefile(msgpackdump([{}], 'B'), 'fname.mpack')</pre></div>
<div class="old-help-para">		This will write the single 0x80 byte to a <code>fname.mpack</code> file
		(dictionary with zero items is represented by 0x80 byte in
		messagepack).</div>
<div class="old-help-para">		Limitations:				<a name="E5004"></a><code class="help-tag-right">E5004</code> <a name="E5005"></a><code class="help-tag">E5005</code>
		1. <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a>s cannot be dumped.
		2. Containers that reference themselves cannot be dumped.
		3. Dictionary keys are always dumped as STR strings.
		4. Other strings and <a href="/neovim-docs-web/en/eval#Blob">Blob</a>s are always dumped as BIN strings.
		5. Points 3. and 4. do not apply to <a href="/neovim-docs-web/en/builtin#msgpack-special-dict">msgpack-special-dict</a>s.</div>
<div class="old-help-para">msgpackparse(<code>{data}</code>)					<a name="msgpackparse()"></a><code class="help-tag-right">msgpackparse()</code>
		Convert a <a href="/neovim-docs-web/en/builtin#readfile()">readfile()</a>-style list or a <a href="/neovim-docs-web/en/eval#Blob">Blob</a> to a list of
		VimL objects.
		Example:<pre>let fname = expand('~/.config/nvim/shada/main.shada')
let mpack = readfile(fname, 'b')
let shada_objects = msgpackparse(mpack)</pre></div>
<div class="old-help-para">		This will read ~/.config/nvim/shada/main.shada file to
		<code>shada_objects</code> list.</div>
<div class="old-help-para">		Limitations:
		1. Mapping ordering is not preserved unless messagepack
		   mapping is dumped using generic mapping
		   (<a href="/neovim-docs-web/en/builtin#msgpack-special-map">msgpack-special-map</a>).
		2. Since the parser aims to preserve all data untouched
		   (except for 1.) some strings are parsed to
		   <a href="/neovim-docs-web/en/builtin#msgpack-special-dict">msgpack-special-dict</a> format which is not convenient to
		   use.
							<a name="msgpack-special-dict"></a><code class="help-tag-right">msgpack-special-dict</code>
		Some messagepack strings may be parsed to special
		dictionaries. Special dictionaries are dictionaries which</div>
<div class="old-help-para">		1. Contain exactly two keys: <code>_TYPE</code> and <code>_VAL</code>.
		2. <code>_TYPE</code> key is one of the types found in <a href="/neovim-docs-web/en/eval#v%3Amsgpack_types">v:msgpack_types</a>
		   variable.
		3. Value for <code>_VAL</code> has the following format (Key column
		   contains name of the key from <a href="/neovim-docs-web/en/eval#v%3Amsgpack_types">v:msgpack_types</a>):</div>
<div class="old-help-para"><div class="help-column_heading">		Key	Value</div>		nil	Zero, ignored when dumping.  Not returned by
			<a href="/neovim-docs-web/en/builtin#msgpackparse()">msgpackparse()</a> since <a href="/neovim-docs-web/en/eval#v%3Anull">v:null</a> was introduced.
		boolean	One or zero.  When dumping it is only checked that
			value is a <a href="/neovim-docs-web/en/eval#Number">Number</a>.  Not returned by <a href="/neovim-docs-web/en/builtin#msgpackparse()">msgpackparse()</a>
			since <a href="/neovim-docs-web/en/eval#v%3Atrue">v:true</a> and <a href="/neovim-docs-web/en/eval#v%3Afalse">v:false</a> were introduced.
		integer	<a href="/neovim-docs-web/en/eval#List">List</a> with four numbers: sign (-1 or 1), highest two
			bits, number with bits from 62nd to 31st, lowest 31
			bits. I.e. to get actual number one will need to use
			code like<pre>_VAL[0] * ((_VAL[1] &lt;&lt; 62)
           &amp; (_VAL[2] &lt;&lt; 31)
           &amp; _VAL[3])</pre></div>
<div class="old-help-para">			Special dictionary with this type will appear in
			<a href="/neovim-docs-web/en/builtin#msgpackparse()">msgpackparse()</a> output under one of the following
			circumstances:
			1. <a href="/neovim-docs-web/en/eval#Number">Number</a> is 32-bit and value is either above
			   INT32_MAX or below INT32_MIN.
			2. <a href="/neovim-docs-web/en/eval#Number">Number</a> is 64-bit and value is above INT64_MAX. It
			   cannot possibly be below INT64_MIN because msgpack
			   C parser does not support such values.
		float	<a href="/neovim-docs-web/en/eval#Float">Float</a>. This value cannot possibly appear in
			<a href="/neovim-docs-web/en/builtin#msgpackparse()">msgpackparse()</a> output.
		string	<a href="/neovim-docs-web/en/builtin#readfile()">readfile()</a>-style list of strings. This value will
			appear in <a href="/neovim-docs-web/en/builtin#msgpackparse()">msgpackparse()</a> output if string contains
			zero byte or if string is a mapping key and mapping is
			being represented as special dictionary for other
			reasons.
		binary	<a href="/neovim-docs-web/en/eval#String">String</a>, or <a href="/neovim-docs-web/en/eval#Blob">Blob</a> if binary string contains zero
			byte. This value cannot appear in <a href="/neovim-docs-web/en/builtin#msgpackparse()">msgpackparse()</a>
			output since blobs were introduced.
		array	<a href="/neovim-docs-web/en/eval#List">List</a>. This value cannot appear in <a href="/neovim-docs-web/en/builtin#msgpackparse()">msgpackparse()</a>
			output.
							<a name="msgpack-special-map"></a><code class="help-tag-right">msgpack-special-map</code>
		map	<a href="/neovim-docs-web/en/eval#List">List</a> of <a href="/neovim-docs-web/en/eval#List">List</a>s with two items (key and value) each.
			This value will appear in <a href="/neovim-docs-web/en/builtin#msgpackparse()">msgpackparse()</a> output if
			parsed mapping contains one of the following keys:
			1. Any key that is not a string (including keys which
			   are binary strings).
			2. String with NUL byte inside.
			3. Duplicate key.
			4. Empty key.
		ext	<a href="/neovim-docs-web/en/eval#List">List</a> with two values: first is a signed integer
			representing extension type. Second is
			<a href="/neovim-docs-web/en/builtin#readfile()">readfile()</a>-style list of strings.</div>
<div class="old-help-para">nextnonblank(<code>{lnum}</code>)					<a name="nextnonblank()"></a><code class="help-tag-right">nextnonblank()</code>
		Return the line number of the first line at or below <code>{lnum}</code>
		that is not blank.  Example:<pre>if getline(nextnonblank(1)) =~ "Java"</pre></div>
<div class="old-help-para">		When <code>{lnum}</code> is invalid or there is no non-blank line at or
		below it, zero is returned.
		<code>{lnum}</code> is used like with <a href="/neovim-docs-web/en/builtin#getline()">getline()</a>.
		See also <a href="/neovim-docs-web/en/builtin#prevnonblank()">prevnonblank()</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetLnum()-&gt;nextnonblank()</pre>
nr2char(<code>{expr}</code> [, <code>{utf8}</code>])				<a name="nr2char()"></a><code class="help-tag-right">nr2char()</code>
		Return a string with a single character, which has the number
		value <code>{expr}</code>.  Examples:<pre>nr2char(64)                returns "@"
nr2char(32)                returns " "</pre></div>
<div class="old-help-para">		Example for "utf-8":<pre>nr2char(300)                returns I with bow character</pre></div>
<div class="old-help-para">		UTF-8 encoding is always used, <code>{utf8}</code> option has no effect,
		and exists only for backwards-compatibility.
		Note that a NUL character in the file is specified with
		nr2char(10), because NULs are represented with newline
		characters.  nr2char(0) is a real NUL and terminates the
		string, thus results in an empty string.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetNumber()-&gt;nr2char()</pre>
nvim_...({...})					<a name="E5555"></a><code class="help-tag-right">E5555</code> <a name="nvim_...()"></a><code class="help-tag">nvim_...()</code> <a name="eval-api"></a><code class="help-tag">eval-api</code>
		Call nvim <a href="/neovim-docs-web/en/api#api">api</a> functions. The type checking of arguments will
		be stricter than for most other builtins. For instance,
		if Integer is expected, a <a href="/neovim-docs-web/en/eval#Number">Number</a> must be passed in, a
		<a href="/neovim-docs-web/en/eval#String">String</a> will not be autoconverted.
		Buffer numbers, as returned by <a href="/neovim-docs-web/en/builtin#bufnr()">bufnr()</a> could be used as
		first argument to nvim_buf_... functions.  All functions
		expecting an object (buffer, window or tabpage) can
		also take the numerical value 0 to indicate the current
		(focused) object.</div>
<div class="old-help-para">or(<code>{expr}</code>, <code>{expr}</code>)					<a name="or()"></a><code class="help-tag-right">or()</code>
		Bitwise OR on the two arguments.  The arguments are converted
		to a number.  A List, Dict or Float argument causes an error.
		Also see <code>and()</code> and <code>xor()</code>.
		Example:<pre>:let bits = or(bits, 0x80)</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>:let bits = bits-&gt;or(0x80)</pre></div>
<div class="old-help-para">		Rationale: The reason this is a function and not using the "|"
		character like many languages, is that Vi has always used "|"
		to separate commands.  In many places it would not be clear if
		"|" is an operator or a command separator.</div>
<div class="old-help-para">pathshorten(<code>{path}</code> [, <code>{len}</code>])				<a name="pathshorten()"></a><code class="help-tag-right">pathshorten()</code>
		Shorten directory names in the path <code>{path}</code> and return the
		result.  The tail, the file name, is kept as-is.  The other
		components in the path are reduced to <code>{len}</code> letters in length.
		If <code>{len}</code> is omitted or smaller than 1 then 1 is used (single
		letters).  Leading '~' and '.' characters are kept.  Examples:<pre>:echo pathshorten('~/.config/nvim/autoload/file1.vim')</pre></div>
<div class="old-help-para"><div class="help-column_heading">			~/.c/n/a/file1.vim</div><pre>:echo pathshorten('~/.config/nvim/autoload/file2.vim', 2)</pre></div>
<div class="old-help-para"><div class="help-column_heading">			~/.co/nv/au/file2.vim</div>		It doesn't matter if the path exists or not.
		Returns an empty string on error.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetDirectories()-&gt;pathshorten()</pre>
perleval(<code>{expr}</code>)					<a name="perleval()"></a><code class="help-tag-right">perleval()</code>
		Evaluate <a href="/neovim-docs-web/en/if_perl#perl">perl</a> expression <code>{expr}</code> and return its result
		converted to Vim data structures.
		Numbers and strings are returned as they are (strings are
		copied though).
		Lists are represented as Vim <a href="/neovim-docs-web/en/eval#List">List</a> type.
		Dictionaries are represented as Vim <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> type,
		non-string keys result in error.</div>
<div class="old-help-para">		Note: If you want an array or hash, <code>{expr}</code> must return a
		reference to it.
		Example:<pre>:echo perleval('[1 .. 4]')</pre></div>
<div class="old-help-para">			[1, 2, 3, 4]</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetExpr()-&gt;perleval()</pre>
pow(<code>{x}</code>, <code>{y}</code>)						<a name="pow()"></a><code class="help-tag-right">pow()</code>
		Return the power of <code>{x}</code> to the exponent <code>{y}</code> as a <a href="/neovim-docs-web/en/eval#Float">Float</a>.
		<code>{x}</code> and <code>{y}</code> must evaluate to a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Returns 0.0 if <code>{x}</code> or <code>{y}</code> is not a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Examples:<pre>:echo pow(3, 3)</pre></div>
<div class="old-help-para">			27.0<pre>:echo pow(2, 16)</pre></div>
<div class="old-help-para">			65536.0<pre>:echo pow(32, 0.20)</pre></div>
<div class="old-help-para">			2.0</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>Compute()-&gt;pow(3)</pre>
prevnonblank(<code>{lnum}</code>)					<a name="prevnonblank()"></a><code class="help-tag-right">prevnonblank()</code>
		Return the line number of the first line at or above <code>{lnum}</code>
		that is not blank.  Example:<pre>let ind = indent(prevnonblank(v:lnum - 1))</pre></div>
<div class="old-help-para">		When <code>{lnum}</code> is invalid or there is no non-blank line at or
		above it, zero is returned.
		<code>{lnum}</code> is used like with <a href="/neovim-docs-web/en/builtin#getline()">getline()</a>.
		Also see <a href="/neovim-docs-web/en/builtin#nextnonblank()">nextnonblank()</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetLnum()-&gt;prevnonblank()</pre>
printf(<code>{fmt}</code>, <code>{expr1}</code> ...)				<a name="printf()"></a><code class="help-tag-right">printf()</code>
		Return a String with <code>{fmt}</code>, where "%" items are replaced by
		the formatted form of their respective arguments.  Example:<pre>printf("%4d: E%d %.30s", lnum, errno, msg)</pre></div>
<div class="old-help-para">		May result in:
<div class="help-column_heading">			"  99: E42 asdfasdfasdfasdfasdfasdfasdfas"</div></div>
<div class="old-help-para">		When used as a <a href="/neovim-docs-web/en/eval#method">method</a> the base is passed as the second
		argument:<pre>Compute()-&gt;printf("result: %d")</pre></div>
<div class="old-help-para">		You can use <code>call()</code> to pass the items as a list.</div>
<div class="old-help-para">		Often used items are:
		  %s	string
		  %6S	string right-aligned in 6 display cells
		  %6s	string right-aligned in 6 bytes
		  %.9s	string truncated to 9 bytes
		  %c	single byte
		  %d	decimal number
		  %5d	decimal number padded with spaces to 5 characters
		  %b	binary number
		  %08b	binary number padded with zeros to at least 8 characters
		  %B	binary number using upper case letters
		  %x	hex number
		  %04x	hex number padded with zeros to at least 4 characters
		  %X	hex number using upper case letters
		  %o	octal number
		  %f	floating point number as 12.23, inf, -inf or nan
		  %F	floating point number as 12.23, INF, -INF or NAN
		  %e	floating point number as 1.23e3, inf, -inf or nan
		  %E	floating point number as 1.23E3, INF, -INF or NAN
		  %g	floating point number, as %f or %e depending on value
		  %G	floating point number, as %F or %E depending on value
		  %%	the % character itself
		  %p	representation of the pointer to the container</div>
<div class="old-help-para">		Conversion specifications start with '%' and end with the
		conversion type.  All other characters are copied unchanged to
		the result.</div>
<div class="old-help-para">		The "%" starts a conversion specification.  The following
		arguments appear in sequence:</div>
<div class="old-help-para">			%  [flags]  [field-width]  [.precision]  type</div>
<div class="old-help-para">		flags
			Zero or more of the following flags:</div>
<div class="old-help-para">		    #	      The value should be converted to an "alternate
			      form".  For c, d, and s conversions, this option
			      has no effect.  For o conversions, the precision
			      of the number is increased to force the first
			      character of the output string to a zero (except
			      if a zero value is printed with an explicit
			      precision of zero).
			      For x and X conversions, a non-zero result has
			      the string "0x" (or "0X" for X conversions)
			      prepended to it.</div>
<div class="old-help-para">		    0 (zero)  Zero padding.  For all conversions the converted
			      value is padded on the left with zeros rather
			      than blanks.  If a precision is given with a
			      numeric conversion (d, o, x, and X), the 0 flag
			      is ignored.</div>
<div class="old-help-para">		    -		      A negative field width flag; the converted value
			      is to be left adjusted on the field boundary.
			      The converted value is padded on the right with
			      blanks, rather than on the left with blanks or
			      zeros.  A - overrides a 0 if both are given.</div>
<div class="old-help-para">		    ' ' (space)  A blank should be left before a positive
			      number produced by a signed conversion (d).</div>
<div class="old-help-para">		    +	      A sign must always be placed before a number
			      produced by a signed conversion.  A + overrides
			      a space if both are used.</div>
<div class="old-help-para">		field-width
			An optional decimal digit string specifying a minimum
			field width.  If the converted value has fewer bytes
			than the field width, it will be padded with spaces on
			the left (or right, if the left-adjustment flag has
			been given) to fill out the field width.  For the S
			conversion the count is in cells.</div>
<div class="old-help-para">		.precision
			An optional precision, in the form of a period '.'
			followed by an optional digit string.  If the digit
			string is omitted, the precision is taken as zero.
			This gives the minimum number of digits to appear for
			d, o, x, and X conversions, the maximum number of
			bytes to be printed from a string for s conversions,
			or the maximum number of cells to be printed from a
			string for S conversions.
			For floating point it is the number of digits after
			the decimal point.</div>
<div class="old-help-para">		type
			A character that specifies the type of conversion to
			be applied, see below.</div>
<div class="old-help-para">		A field width or precision, or both, may be indicated by an
		asterisk '' instead of a digit string.  In this case, a
		Number argument supplies the field width or precision.  A
		negative field width is treated as a left adjustment flag
		followed by a positive field width; a negative precision is
		treated as though it were missing.  Example:<pre>:echo printf("%d: %.*s", nr, width, line)</pre></div>
<div class="old-help-para">		This limits the length of the text used from "line" to
		"width" bytes.</div>
<div class="old-help-para">		The conversion specifiers and their meanings are:</div>
<div class="old-help-para">				<a name="printf-d"></a><code class="help-tag-right">printf-d</code> <a name="printf-b"></a><code class="help-tag">printf-b</code> <a name="printf-B"></a><code class="help-tag">printf-B</code> <a name="printf-o"></a><code class="help-tag">printf-o</code> <a name="printf-x"></a><code class="help-tag">printf-x</code> <a name="printf-X"></a><code class="help-tag">printf-X</code>
		dbBoxX	The Number argument is converted to signed decimal (d),
			unsigned binary (b and B), unsigned octal (o), or
			unsigned hexadecimal (x and X) notation.  The letters
			"abcdef" are used for x conversions; the letters
			"ABCDEF" are used for X conversions.  The precision, if
			any, gives the minimum number of digits that must
			appear; if the converted value requires fewer digits, it
			is padded on the left with zeros.  In no case does a
			non-existent or small field width cause truncation of a
			numeric field; if the result of a conversion is wider
			than the field width, the field is expanded to contain
			the conversion result.
			The 'h' modifier indicates the argument is 16 bits.
			The 'l' modifier indicates the argument is 32 bits.
			The 'L' modifier indicates the argument is 64 bits.
			Generally, these modifiers are not useful. They are
			ignored when type is known from the argument.</div>
<div class="old-help-para">		i	alias for d
		D	alias for ld
		U	alias for lu
		O	alias for lo</div>
<div class="old-help-para">							<a name="printf-c"></a><code class="help-tag-right">printf-c</code>
		c	The Number argument is converted to a byte, and the
			resulting character is written.</div>
<div class="old-help-para">							<a name="printf-s"></a><code class="help-tag-right">printf-s</code>
		s	The text of the String argument is used.  If a
			precision is specified, no more bytes than the number
			specified are used.
			If the argument is not a String type, it is
			automatically converted to text with the same format
			as ":echo".
							<a name="printf-S"></a><code class="help-tag-right">printf-S</code>
		S	The text of the String argument is used.  If a
			precision is specified, no more display cells than the
			number specified are used.</div>
<div class="old-help-para">							<a name="printf-f"></a><code class="help-tag-right">printf-f</code> <a name="E807"></a><code class="help-tag">E807</code>
		f F	The Float argument is converted into a string of the
			form 123.456.  The precision specifies the number of
			digits after the decimal point.  When the precision is
			zero the decimal point is omitted.  When the precision
			is not specified 6 is used.  A really big number
			(out of range or dividing by zero) results in "inf"
			 or "-inf" with %f (INF or -INF with %F).
			 "0.0 / 0.0" results in "nan" with %f (NAN with %F).
			Example:<pre>echo printf("%.2f", 12.115)</pre></div>
<div class="old-help-para">				12.12
			Note that roundoff depends on the system libraries.
			Use <a href="/neovim-docs-web/en/builtin#round()">round()</a> when in doubt.</div>
<div class="old-help-para">							<a name="printf-e"></a><code class="help-tag-right">printf-e</code> <a name="printf-E"></a><code class="help-tag">printf-E</code>
		e E	The Float argument is converted into a string of the
			form 1.234e+03 or 1.234E+03 when using 'E'.  The
			precision specifies the number of digits after the
			decimal point, like with 'f'.</div>
<div class="old-help-para">							<a name="printf-g"></a><code class="help-tag-right">printf-g</code> <a name="printf-G"></a><code class="help-tag">printf-G</code>
		g G	The Float argument is converted like with 'f' if the
			value is between 0.001 (inclusive) and 10000000.0
			(exclusive).  Otherwise 'e' is used for 'g' and 'E'
			for 'G'.  When no precision is specified superfluous
			zeroes and '+' signs are removed, except for the zero
			immediately after the decimal point.  Thus 10000000.0
			results in 1.0e7.</div>
<div class="old-help-para">							<a name="printf-%25"></a><code class="help-tag-right">printf-%</code>
		%	A '%' is written.  No argument is converted.  The
			complete conversion specification is "%%".</div>
<div class="old-help-para">		When a Number argument is expected a String argument is also
		accepted and automatically converted.
		When a Float or String argument is expected a Number argument
		is also accepted and automatically converted.
		Any other argument type results in an error message.</div>
<div class="old-help-para">							<a name="E766"></a><code class="help-tag-right">E766</code> <a name="E767"></a><code class="help-tag">E767</code>
		The number of <code>{exprN}</code> arguments must exactly match the number
		of "%" items.  If there are not sufficient or too many
		arguments an error is given.  Up to 18 arguments can be used.</div>
<div class="old-help-para">prompt_getprompt(<code>{buf}</code>)					<a name="prompt_getprompt()"></a><code class="help-tag-right">prompt_getprompt()</code>
		Returns the effective prompt text for buffer <code>{buf}</code>.  <code>{buf}</code> can
		be a buffer name or number.  See <a href="/neovim-docs-web/en/channel#prompt-buffer">prompt-buffer</a>.</div>
<div class="old-help-para">		If the buffer doesn't exist or isn't a prompt buffer, an empty
		string is returned.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetBuffer()-&gt;prompt_getprompt()</pre>
prompt_setcallback(<code>{buf}</code>, <code>{expr}</code>)			<a name="prompt_setcallback()"></a><code class="help-tag-right">prompt_setcallback()</code>
		Set prompt callback for buffer <code>{buf}</code> to <code>{expr}</code>.  When <code>{expr}</code>
		is an empty string the callback is removed.  This has only
		effect if <code>{buf}</code> has <a href="/neovim-docs-web/en/options#'buftype'">'buftype'</a> set to "prompt".</div>
<div class="old-help-para">		The callback is invoked when pressing Enter.  The current
		buffer will always be the prompt buffer.  A new line for a
		prompt is added before invoking the callback, thus the prompt
		for which the callback was invoked will be in the last but one
		line.
		If the callback wants to add text to the buffer, it must
		insert it above the last line, since that is where the current
		prompt is.  This can also be done asynchronously.
		The callback is invoked with one argument, which is the text
		that was entered at the prompt.  This can be an empty string
		if the user only typed Enter.
		Example:<pre>call prompt_setcallback(bufnr(''), function('s:TextEntered'))
func s:TextEntered(text)
  if a:text == 'exit' || a:text == 'quit'
    stopinsert
    close
  else
    call append(line('$') - 1, 'Entered: "' .. a:text .. '"')
    " Reset 'modified' to allow the buffer to be closed.
    set nomodified
  endif
endfunc</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetBuffer()-&gt;prompt_setcallback(callback)</pre>
prompt_setinterrupt(<code>{buf}</code>, <code>{expr}</code>)			<a name="prompt_setinterrupt()"></a><code class="help-tag-right">prompt_setinterrupt()</code>
		Set a callback for buffer <code>{buf}</code> to <code>{expr}</code>.  When <code>{expr}</code> is an
		empty string the callback is removed.  This has only effect if
		<code>{buf}</code> has <a href="/neovim-docs-web/en/options#'buftype'">'buftype'</a> set to "prompt".</div>
<div class="old-help-para">		This callback will be invoked when pressing <code>CTRL-C</code> in Insert
		mode.  Without setting a callback Vim will exit Insert mode,
		as in any buffer.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetBuffer()-&gt;prompt_setinterrupt(callback)</pre>
prompt_setprompt(<code>{buf}</code>, <code>{text}</code>)				<a name="prompt_setprompt()"></a><code class="help-tag-right">prompt_setprompt()</code>
		Set prompt for buffer <code>{buf}</code> to <code>{text}</code>.  You most likely want
		<code>{text}</code> to end in a space.
		The result is only visible if <code>{buf}</code> has <a href="/neovim-docs-web/en/options#'buftype'">'buftype'</a> set to
		"prompt".  Example:<pre>call prompt_setprompt(bufnr(''), 'command: ')</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetBuffer()-&gt;prompt_setprompt('command: ')</pre>
pum_getpos()						<a name="pum_getpos()"></a><code class="help-tag-right">pum_getpos()</code>
		If the popup menu (see <a href="/neovim-docs-web/en/insert#ins-completion-menu">ins-completion-menu</a>) is not visible,
		returns an empty <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a>, otherwise, returns a
		<a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> with the following keys:
			height		nr of items visible
			width		screen cells
			row		top screen row (0 first row)
			col		leftmost screen column (0 first col)
			size		total nr of items
			scrollbar	<a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> if scrollbar is visible</div>
<div class="old-help-para">		The values are the same as in <a href="/neovim-docs-web/en/eval#v%3Aevent">v:event</a> during <a href="/neovim-docs-web/en/autocmd#CompleteChanged">CompleteChanged</a>.</div>
<div class="old-help-para">pumvisible()						<a name="pumvisible()"></a><code class="help-tag-right">pumvisible()</code>
		Returns non-zero when the popup menu is visible, zero
		otherwise.  See <a href="/neovim-docs-web/en/insert#ins-completion-menu">ins-completion-menu</a>.
		This can be used to avoid some things that would remove the
		popup menu.</div>
<div class="old-help-para">py3eval(<code>{expr}</code>)						<a name="py3eval()"></a><code class="help-tag-right">py3eval()</code>
		Evaluate Python expression <code>{expr}</code> and return its result
		converted to Vim data structures.
		Numbers and strings are returned as they are (strings are
		copied though, Unicode strings are additionally converted to
		UTF-8).
		Lists are represented as Vim <a href="/neovim-docs-web/en/eval#List">List</a> type.
		Dictionaries are represented as Vim <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> type with
		keys converted to strings.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetExpr()-&gt;py3eval()</pre></div>
<div class="old-help-para">							<a name="E858"></a><code class="help-tag-right">E858</code> <a name="E859"></a><code class="help-tag">E859</code>
pyeval(<code>{expr}</code>)						<a name="pyeval()"></a><code class="help-tag-right">pyeval()</code>
		Evaluate Python expression <code>{expr}</code> and return its result
		converted to Vim data structures.
		Numbers and strings are returned as they are (strings are
		copied though).
		Lists are represented as Vim <a href="/neovim-docs-web/en/eval#List">List</a> type.
		Dictionaries are represented as Vim <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> type,
		non-string keys result in error.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetExpr()-&gt;pyeval()</pre>
pyxeval(<code>{expr}</code>)						<a name="pyxeval()"></a><code class="help-tag-right">pyxeval()</code>
		Evaluate Python expression <code>{expr}</code> and return its result
		converted to Vim data structures.
		Uses Python 2 or 3, see <a href="/neovim-docs-web/en/if_pyth#python_x">python_x</a> and <a href="/neovim-docs-web/en/options#'pyxversion'">'pyxversion'</a>.
		See also: <a href="/neovim-docs-web/en/builtin#pyeval()">pyeval()</a>, <a href="/neovim-docs-web/en/builtin#py3eval()">py3eval()</a></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetExpr()-&gt;pyxeval()</pre></div>
<div class="old-help-para">							<a name="E726"></a><code class="help-tag-right">E726</code> <a name="E727"></a><code class="help-tag">E727</code>
range(<code>{expr}</code> [, <code>{max}</code> [, <code>{stride}</code>]])				<a name="range()"></a><code class="help-tag-right">range()</code>
		Returns a <a href="/neovim-docs-web/en/eval#List">List</a> with Numbers:
<div class="help-li" style=""> If only <code>{expr}</code> is specified: [0, 1, ..., <code>{expr}</code> - 1]
</div><div class="help-li" style=""> If <code>{max}</code> is specified: [{expr}, <code>{expr}</code> + 1, ..., <code>{max}</code>]
</div><div class="help-li" style=""> If <code>{stride}</code> is specified: [{expr}, <code>{expr}</code> + <code>{stride}</code>, ...,
		  <code>{max}</code>] (increasing <code>{expr}</code> with <code>{stride}</code> each time, not
		  producing a value past <code>{max}</code>).
		When the maximum is one before the start the result is an
		empty list.  When the maximum is more than one before the
		start this is an error.
		Examples:<pre>range(4)                " [0, 1, 2, 3]
range(2, 4)                " [2, 3, 4]
range(2, 9, 3)                " [2, 5, 8]
range(2, -2, -1)        " [2, 1, 0, -1, -2]
range(0)                " []
range(2, 0)                " error!</pre>
</div></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetExpr()-&gt;range()</pre></div>
<div class="old-help-para">rand([{expr}])						<a name="rand()"></a><code class="help-tag-right">rand()</code>
		Return a pseudo-random Number generated with an xoshiro128**
		algorithm using seed <code>{expr}</code>.  The returned number is 32 bits,
		also on 64 bits systems, for consistency.
		<code>{expr}</code> can be initialized by <a href="/neovim-docs-web/en/builtin#srand()">srand()</a> and will be updated by
		rand().  If <code>{expr}</code> is omitted, an internal seed value is used
		and updated.
		Returns -1 if <code>{expr}</code> is invalid.</div>
<div class="old-help-para">		Examples:<pre>:echo rand()
:let seed = srand()
:echo rand(seed)
:echo rand(seed) % 16  " random number 0 - 15</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>seed-&gt;rand()</pre></div>
<div class="old-help-para">readblob(<code>{fname}</code>)					<a name="readblob()"></a><code class="help-tag-right">readblob()</code>
		Read file <code>{fname}</code> in binary mode and return a <a href="/neovim-docs-web/en/eval#Blob">Blob</a>.
		When the file can't be opened an error message is given and
		the result is an empty <a href="/neovim-docs-web/en/eval#Blob">Blob</a>.
		Also see <a href="/neovim-docs-web/en/builtin#readfile()">readfile()</a> and <a href="/neovim-docs-web/en/builtin#writefile()">writefile()</a>.</div>
<div class="old-help-para">							<a name="readdir()"></a><code class="help-tag-right">readdir()</code>
readdir(<code>{directory}</code> [, <code>{expr}</code>])
		Return a list with file and directory names in <code>{directory}</code>.
		You can also use <a href="/neovim-docs-web/en/builtin#glob()">glob()</a> if you don't need to do complicated
		things, such as limiting the number of matches.</div>
<div class="old-help-para">		When <code>{expr}</code> is omitted all entries are included.
		When <code>{expr}</code> is given, it is evaluated to check what to do:
			If <code>{expr}</code> results in -1 then no further entries will
			be handled.
			If <code>{expr}</code> results in 0 then this entry will not be
			added to the list.
			If <code>{expr}</code> results in 1 then this entry will be added
			to the list.
		Each time <code>{expr}</code> is evaluated <a href="/neovim-docs-web/en/eval#v%3Aval">v:val</a> is set to the entry name.
		When <code>{expr}</code> is a function the name is passed as the argument.
		For example, to get a list of files ending in ".txt":<pre>readdir(dirname, {n -&gt; n =~ '.txt$'})</pre></div>
<div class="old-help-para">		To skip hidden and backup files:<pre>readdir(dirname, {n -&gt; n !~ '^\.\|\~$'})</pre></div>
<div class="old-help-para">		If you want to get a directory tree:<pre>function! s:tree(dir)
    return {a:dir : map(readdir(a:dir),
    \ {_, x -&gt; isdirectory(x) ?
    \          {x : s:tree(a:dir .. '/' .. x)} : x})}
endfunction
echo s:tree(".")</pre></div>
<div class="old-help-para">		Returns an empty List on error.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetDirName()-&gt;readdir()</pre></div>
<div class="old-help-para">							<a name="readfile()"></a><code class="help-tag-right">readfile()</code>
readfile(<code>{fname}</code> [, <code>{type}</code> [, <code>{max}</code>]])
		Read file <code>{fname}</code> and return a <a href="/neovim-docs-web/en/eval#List">List</a>, each line of the file
		as an item.  Lines are broken at NL characters.  Macintosh
		files separated with CR will result in a single long line
		(unless a NL appears somewhere).
		All NUL characters are replaced with a NL character.
		When <code>{type}</code> contains "b" binary mode is used:
<div class="help-li" style=""> When the last line ends in a NL an extra empty list item is
		  added.
</div><div class="help-li" style=""> No CR characters are removed.
		Otherwise:
</div><div class="help-li" style=""> CR characters that appear before a NL are removed.
</div><div class="help-li" style=""> Whether the last line ends in a NL or not does not matter.
</div><div class="help-li" style=""> Any UTF-8 byte order mark is removed from the text.
		When <code>{max}</code> is given this specifies the maximum number of lines
		to be read.  Useful if you only want to check the first ten
		lines of a file:<pre>:for line in readfile(fname, '', 10)
:  if line =~ 'Date' | echo line | endif
:endfor</pre>
</div></div>
<div class="old-help-para">		When <code>{max}</code> is negative -{max} lines from the end of the file
		are returned, or as many as there are.
		When <code>{max}</code> is zero the result is an empty list.
		Note that without <code>{max}</code> the whole file is read into memory.
		Also note that there is no recognition of encoding.  Read a
		file into a buffer if you need to.
		Deprecated (use <a href="/neovim-docs-web/en/builtin#readblob()">readblob()</a> instead): When <code>{type}</code> contains
		"B" a <a href="/neovim-docs-web/en/eval#Blob">Blob</a> is returned with the binary data of the file
		unmodified.
		When the file can't be opened an error message is given and
		the result is an empty list.
		Also see <a href="/neovim-docs-web/en/builtin#writefile()">writefile()</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetFileName()-&gt;readfile()</pre>
reduce(<code>{object}</code>, <code>{func}</code> [, <code>{initial}</code>])			<a name="reduce()"></a><code class="help-tag-right">reduce()</code> <a name="E998"></a><code class="help-tag">E998</code>
		<code>{func}</code> is called for every item in <code>{object}</code>, which can be a
		<a href="/neovim-docs-web/en/eval#List">List</a> or a <a href="/neovim-docs-web/en/eval#Blob">Blob</a>.  <code>{func}</code> is called with two arguments: the
		result so far and current item.  After processing all items
		the result is returned.</div>
<div class="old-help-para">		<code>{initial}</code> is the initial result.  When omitted, the first item
		in <code>{object}</code> is used and <code>{func}</code> is first called for the second
		item.  If <code>{initial}</code> is not given and <code>{object}</code> is empty no
		result can be computed, an E998 error is given.</div>
<div class="old-help-para">		Examples:<pre>echo reduce([1, 3, 5], { acc, val -&gt; acc + val })
echo reduce(['x', 'y'], { acc, val -&gt; acc .. val }, 'a')
echo reduce(0z1122, { acc, val -&gt; 2 * acc + val })</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>echo mylist-&gt;reduce({ acc, val -&gt; acc + val }, 0)</pre>
reg_executing()						<a name="reg_executing()"></a><code class="help-tag-right">reg_executing()</code>
		Returns the single letter name of the register being executed.
		Returns an empty string when no register is being executed.
		See <a href="/neovim-docs-web/en/repeat#%40">@</a>.</div>
<div class="old-help-para">reg_recorded()						<a name="reg_recorded()"></a><code class="help-tag-right">reg_recorded()</code>
		Returns the single letter name of the last recorded register.
		Returns an empty string when nothing was recorded yet.
		See <a href="/neovim-docs-web/en/repeat#q">q</a> and <a href="/neovim-docs-web/en/repeat#Q">Q</a>.</div>
<div class="old-help-para">reg_recording()						<a name="reg_recording()"></a><code class="help-tag-right">reg_recording()</code>
		Returns the single letter name of the register being recorded.
		Returns an empty string when not recording.  See <a href="/neovim-docs-web/en/repeat#q">q</a>.</div>
<div class="old-help-para">reltime()
reltime(<code>{start}</code>)
reltime(<code>{start}</code>, <code>{end}</code>)					<a name="reltime()"></a><code class="help-tag-right">reltime()</code>
		Return an item that represents a time value.  The item is a
		list with items that depend on the system.
		The item can be passed to <a href="/neovim-docs-web/en/builtin#reltimestr()">reltimestr()</a> to convert it to a
		string or <a href="/neovim-docs-web/en/builtin#reltimefloat()">reltimefloat()</a> to convert to a Float.</div>
<div class="old-help-para">		Without an argument it returns the current "relative time", an
		implementation-defined value meaningful only when used as an
		argument to <a href="/neovim-docs-web/en/builtin#reltime()">reltime()</a>, <a href="/neovim-docs-web/en/builtin#reltimestr()">reltimestr()</a> and <a href="/neovim-docs-web/en/builtin#reltimefloat()">reltimefloat()</a>.</div>
<div class="old-help-para">		With one argument it returns the time passed since the time
		specified in the argument.
		With two arguments it returns the time passed between <code>{start}</code>
		and <code>{end}</code>.</div>
<div class="old-help-para">		The <code>{start}</code> and <code>{end}</code> arguments must be values returned by
		reltime().  Returns zero on error.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetStart()-&gt;reltime()</pre></div>
<div class="old-help-para">		Note: <a href="/neovim-docs-web/en/builtin#localtime()">localtime()</a> returns the current (non-relative) time.</div>
<div class="old-help-para">reltimefloat(<code>{time}</code>)				<a name="reltimefloat()"></a><code class="help-tag-right">reltimefloat()</code>
		Return a Float that represents the time value of <code>{time}</code>.
		Unit of time is seconds.
		Example:
			let start = reltime()
			call MyFunction()
			let seconds = reltimefloat(reltime(start))
		See the note of reltimestr() about overhead.
		Also see <a href="/neovim-docs-web/en/repeat#profiling">profiling</a>.
		If there is an error an empty string is returned</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>reltime(start)-&gt;reltimefloat()</pre>
reltimestr(<code>{time}</code>)				<a name="reltimestr()"></a><code class="help-tag-right">reltimestr()</code>
		Return a String that represents the time value of <code>{time}</code>.
		This is the number of seconds, a dot and the number of
		microseconds.  Example:<pre>let start = reltime()
call MyFunction()
echo reltimestr(reltime(start))</pre></div>
<div class="old-help-para">		Note that overhead for the commands will be added to the time.
		Leading spaces are used to make the string align nicely.  You
		can use split() to remove it.<pre>echo split(reltimestr(reltime(start)))[0]</pre></div>
<div class="old-help-para">		Also see <a href="/neovim-docs-web/en/repeat#profiling">profiling</a>.
		If there is an error an empty string is returned</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>reltime(start)-&gt;reltimestr()</pre></div>
<div class="old-help-para">remove(<code>{list}</code>, <code>{idx}</code>)
remove(<code>{list}</code>, <code>{idx}</code>, <code>{end}</code>)				<a name="remove()"></a><code class="help-tag-right">remove()</code>
		Without <code>{end}</code>: Remove the item at <code>{idx}</code> from <a href="/neovim-docs-web/en/eval#List">List</a> <code>{list}</code> and
		return the item.
		With <code>{end}</code>: Remove items from <code>{idx}</code> to <code>{end}</code> (inclusive) and
		return a <a href="/neovim-docs-web/en/eval#List">List</a> with these items.  When <code>{idx}</code> points to the same
		item as <code>{end}</code> a list with one item is returned.  When <code>{end}</code>
		points to an item before <code>{idx}</code> this is an error.
		See <a href="/neovim-docs-web/en/eval#list-index">list-index</a> for possible values of <code>{idx}</code> and <code>{end}</code>.
		Returns zero on error.
		Example:<pre>:echo "last item: " .. remove(mylist, -1)
:call remove(mylist, 0, 9)</pre></div>
<div class="old-help-para">		Use <a href="/neovim-docs-web/en/builtin#delete()">delete()</a> to remove a file.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>mylist-&gt;remove(idx)</pre>
remove(<code>{blob}</code>, <code>{idx}</code>)
remove(<code>{blob}</code>, <code>{idx}</code>, <code>{end}</code>)
		Without <code>{end}</code>: Remove the byte at <code>{idx}</code> from <a href="/neovim-docs-web/en/eval#Blob">Blob</a> <code>{blob}</code> and
		return the byte.
		With <code>{end}</code>: Remove bytes from <code>{idx}</code> to <code>{end}</code> (inclusive) and
		return a <a href="/neovim-docs-web/en/eval#Blob">Blob</a> with these bytes.  When <code>{idx}</code> points to the same
		byte as <code>{end}</code> a <a href="/neovim-docs-web/en/eval#Blob">Blob</a> with one byte is returned.  When <code>{end}</code>
		points to a byte before <code>{idx}</code> this is an error.
		Returns zero on error.
		Example:<pre>:echo "last byte: " .. remove(myblob, -1)
:call remove(mylist, 0, 9)</pre>
remove(<code>{dict}</code>, <code>{key}</code>)
		Remove the entry from <code>{dict}</code> with key <code>{key}</code> and return it.
		Example:<pre>:echo "removed " .. remove(dict, "one")</pre></div>
<div class="old-help-para">		If there is no <code>{key}</code> in <code>{dict}</code> this is an error.
		Returns zero on error.</div>
<div class="old-help-para">rename(<code>{from}</code>, <code>{to}</code>)					<a name="rename()"></a><code class="help-tag-right">rename()</code>
		Rename the file by the name <code>{from}</code> to the name <code>{to}</code>.  This
		should also work to move files across file systems.  The
		result is a Number, which is 0 if the file was renamed
		successfully, and non-zero when the renaming failed.
		NOTE: If <code>{to}</code> exists it is overwritten without warning.
		This function is not available in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetOldName()-&gt;rename(newname)</pre>
repeat(<code>{expr}</code>, <code>{count}</code>)					<a name="repeat()"></a><code class="help-tag-right">repeat()</code>
		Repeat <code>{expr}</code> <code>{count}</code> times and return the concatenated
		result.  Example:<pre>:let separator = repeat('-', 80)</pre></div>
<div class="old-help-para">		When <code>{count}</code> is zero or negative the result is empty.
		When <code>{expr}</code> is a <a href="/neovim-docs-web/en/eval#List">List</a> the result is <code>{expr}</code> concatenated
		<code>{count}</code> times.  Example:<pre>:let longlist = repeat(['a', 'b'], 3)</pre></div>
<div class="old-help-para">		Results in ['a', 'b', 'a', 'b', 'a', 'b'].</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>mylist-&gt;repeat(count)</pre>
resolve(<code>{filename}</code>)					<a name="resolve()"></a><code class="help-tag-right">resolve()</code> <a name="E655"></a><code class="help-tag">E655</code>
		On MS-Windows, when <code>{filename}</code> is a shortcut (a .lnk file),
		returns the path the shortcut points to in a simplified form.
		On Unix, repeat resolving symbolic links in all path
		components of <code>{filename}</code> and return the simplified result.
		To cope with link cycles, resolving of symbolic links is
		stopped after 100 iterations.
		On other systems, return the simplified <code>{filename}</code>.
		The simplification step is done as by <a href="/neovim-docs-web/en/builtin#simplify()">simplify()</a>.
		resolve() keeps a leading path component specifying the
		current directory (provided the result is still a relative
		path name) and also keeps a trailing path separator.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetName()-&gt;resolve()</pre></div>
<div class="old-help-para">							<a name="reverse()"></a><code class="help-tag-right">reverse()</code>
reverse(<code>{object}</code>)
		Reverse the order of items in <code>{object}</code> in-place.
		<code>{object}</code> can be a <a href="/neovim-docs-web/en/eval#List">List</a> or a <a href="/neovim-docs-web/en/eval#Blob">Blob</a>.
		Returns <code>{object}</code>.
		Returns zero if <code>{object}</code> is not a List or a Blob.
		If you want an object to remain unmodified make a copy first:<pre>:let revlist = reverse(copy(mylist))</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>mylist-&gt;reverse()</pre>
round(<code>{expr}</code>)							<a name="round()"></a><code class="help-tag-right">round()</code>
		Round off <code>{expr}</code> to the nearest integral value and return it
		as a <a href="/neovim-docs-web/en/eval#Float">Float</a>.  If <code>{expr}</code> lies halfway between two integral
		values, then use the larger one (away from zero).
		<code>{expr}</code> must evaluate to a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Returns 0.0 if <code>{expr}</code> is not a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Examples:<pre>echo round(0.456)</pre></div>
<div class="old-help-para">			0.0<pre>echo round(4.5)</pre></div>
<div class="old-help-para">			5.0<pre>echo round(-4.5)</pre></div>
<div class="old-help-para">			-5.0</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>Compute()-&gt;round()</pre>
rpcnotify(<code>{channel}</code>, <code>{event}</code> [, <code>{args}</code>...])			<a name="rpcnotify()"></a><code class="help-tag-right">rpcnotify()</code>
		Sends <code>{event}</code> to <code>{channel}</code> via <a href="/neovim-docs-web/en/api#RPC">RPC</a> and returns immediately.
		If <code>{channel}</code> is 0, the event is broadcast to all channels.
		Example:<pre>:au VimLeave call rpcnotify(0, "leaving")</pre>
rpcrequest(<code>{channel}</code>, <code>{method}</code> [, <code>{args}</code>...])			<a name="rpcrequest()"></a><code class="help-tag-right">rpcrequest()</code>
		Sends a request to <code>{channel}</code> to invoke <code>{method}</code> via
		<a href="/neovim-docs-web/en/api#RPC">RPC</a> and blocks until a response is received.
		Example:<pre>:let result = rpcrequest(rpc_chan, "func", 1, 2, 3)</pre>
rpcstart(<code>{prog}</code> [, <code>{argv}</code>])					<a name="rpcstart()"></a><code class="help-tag-right">rpcstart()</code>
		Deprecated. Replace<pre>:let id = rpcstart('prog', ['arg1', 'arg2'])</pre></div>
<div class="old-help-para">		with<pre>:let id = jobstart(['prog', 'arg1', 'arg2'], {'rpc': v:true})</pre>
rubyeval(<code>{expr}</code>)					<a name="rubyeval()"></a><code class="help-tag-right">rubyeval()</code>
		Evaluate Ruby expression <code>{expr}</code> and return its result
		converted to Vim data structures.
		Numbers, floats and strings are returned as they are (strings
		are copied though).
		Arrays are represented as Vim <a href="/neovim-docs-web/en/eval#List">List</a> type.
		Hashes are represented as Vim <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> type.
		Other objects are represented as strings resulted from their
		"Object#to_s" method.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetRubyExpr()-&gt;rubyeval()</pre>
screenattr(<code>{row}</code>, <code>{col}</code>)					<a name="screenattr()"></a><code class="help-tag-right">screenattr()</code>
		Like <a href="/neovim-docs-web/en/builtin#screenchar()">screenchar()</a>, but return the attribute.  This is a rather
		arbitrary number that can only be used to compare to the
		attribute at other positions.
		Returns -1 when row or col is out of range.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetRow()-&gt;screenattr(col)</pre>
screenchar(<code>{row}</code>, <code>{col}</code>)					<a name="screenchar()"></a><code class="help-tag-right">screenchar()</code>
		The result is a Number, which is the character at position
		[row, col] on the screen.  This works for every possible
		screen position, also status lines, window separators and the
		command line.  The top left position is row one, column one
		The character excludes composing characters.  For double-byte
		encodings it may only be the first byte.
		This is mainly to be used for testing.
		Returns -1 when row or col is out of range.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetRow()-&gt;screenchar(col)</pre>
screenchars(<code>{row}</code>, <code>{col}</code>)					<a name="screenchars()"></a><code class="help-tag-right">screenchars()</code>
		The result is a List of Numbers.  The first number is the same
		as what <a href="/neovim-docs-web/en/builtin#screenchar()">screenchar()</a> returns.  Further numbers are
		composing characters on top of the base character.
		This is mainly to be used for testing.
		Returns an empty List when row or col is out of range.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetRow()-&gt;screenchars(col)</pre>
screencol()							<a name="screencol()"></a><code class="help-tag-right">screencol()</code>
		The result is a Number, which is the current screen column of
		the cursor. The leftmost column has number 1.
		This function is mainly used for testing.</div>
<div class="old-help-para">		Note: Always returns the current screen column, thus if used
		in a command (e.g. ":echo screencol()") it will return the
		column inside the command line, which is 1 when the command is
		executed. To get the cursor position in the file use one of
		the following mappings:<pre>nnoremap &lt;expr&gt; GG ":echom " .. screencol() .. "\n"
nnoremap &lt;silent&gt; GG :echom screencol()&lt;CR&gt;
noremap GG &lt;Cmd&gt;echom screencol()&lt;Cr&gt;</pre></div>
<div class="old-help-para">screenpos(<code>{winid}</code>, <code>{lnum}</code>, <code>{col}</code>)				<a name="screenpos()"></a><code class="help-tag-right">screenpos()</code>
		The result is a Dict with the screen position of the text
		character in window <code>{winid}</code> at buffer line <code>{lnum}</code> and column
		<code>{col}</code>.  <code>{col}</code> is a one-based byte index.
		The Dict has these members:
			row	screen row
			col	first screen column
			endcol	last screen column
			curscol	cursor screen column
		If the specified position is not visible, all values are zero.
		The "endcol" value differs from "col" when the character
		occupies more than one screen cell.  E.g. for a Tab "col" can
		be 1 and "endcol" can be 8.
		The "curscol" value is where the cursor would be placed.  For
		a Tab it would be the same as "endcol", while for a double
		width character it would be the same as "col".
		The <a href="/neovim-docs-web/en/syntax#conceal">conceal</a> feature is ignored here, the column numbers are
		as if <a href="/neovim-docs-web/en/options#'conceallevel'">'conceallevel'</a> is zero.  You can set the cursor to the
		right position and use <a href="/neovim-docs-web/en/builtin#screencol()">screencol()</a> to get the value with
		<a href="/neovim-docs-web/en/syntax#conceal">conceal</a> taken into account.
		Returns an empty Dict if <code>{winid}</code> is invalid.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetWinid()-&gt;screenpos(lnum, col)</pre>
screenrow()							<a name="screenrow()"></a><code class="help-tag-right">screenrow()</code>
		The result is a Number, which is the current screen row of the
		cursor.  The top line has number one.
		This function is mainly used for testing.
		Alternatively you can use <a href="/neovim-docs-web/en/builtin#winline()">winline()</a>.</div>
<div class="old-help-para">		Note: Same restrictions as with <a href="/neovim-docs-web/en/builtin#screencol()">screencol()</a>.</div>
<div class="old-help-para">screenstring(<code>{row}</code>, <code>{col}</code>)					<a name="screenstring()"></a><code class="help-tag-right">screenstring()</code>
		The result is a String that contains the base character and
		any composing characters at position [row, col] on the screen.
		This is like <a href="/neovim-docs-web/en/builtin#screenchars()">screenchars()</a> but returning a String with the
		characters.
		This is mainly to be used for testing.
		Returns an empty String when row or col is out of range.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetRow()-&gt;screenstring(col)</pre></div>
<div class="old-help-para">								<a name="search()"></a><code class="help-tag-right">search()</code>
search(<code>{pattern}</code> [, <code>{flags}</code> [, <code>{stopline}</code> [, <code>{timeout}</code> [, <code>{skip}</code>]]]])
		Search for regexp pattern <code>{pattern}</code>.  The search starts at the
		cursor position (you can use <a href="/neovim-docs-web/en/builtin#cursor()">cursor()</a> to set it).</div>
<div class="old-help-para">		When a match has been found its line number is returned.
		If there is no match a 0 is returned and the cursor doesn't
		move.  No error message is given.</div>
<div class="old-help-para">		<code>{flags}</code> is a String, which can contain these character flags:
		'b'	search Backward instead of forward
		'c'	accept a match at the Cursor position
		'e'	move to the End of the match
		'n'	do Not move the cursor
		'p'	return number of matching sub-Pattern (see below)
		's'	Set the ' mark at the previous location of the cursor
		'w'	Wrap around the end of the file
		'W'	don't Wrap around the end of the file
		'z'	start searching at the cursor column instead of Zero
		If neither 'w' or 'W' is given, the <a href="/neovim-docs-web/en/options#'wrapscan'">'wrapscan'</a> option applies.</div>
<div class="old-help-para">		If the 's' flag is supplied, the ' mark is set, only if the
		cursor is moved. The 's' flag cannot be combined with the 'n'
		flag.</div>
<div class="old-help-para">		<a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a>, <a href="/neovim-docs-web/en/options#'smartcase'">'smartcase'</a> and <a href="/neovim-docs-web/en/options#'magic'">'magic'</a> are used.</div>
<div class="old-help-para">		When the 'z' flag is not given, forward searching always
		starts in column zero and then matches before the cursor are
		skipped.  When the 'c' flag is present in <a href="/neovim-docs-web/en/options#'cpo'">'cpo'</a> the next
		search starts after the match.  Without the 'c' flag the next
		search starts one column after the start of the match.  This
		matters for overlapping matches.  See <a href="/neovim-docs-web/en/options#cpo-c">cpo-c</a>.  You can also
		insert "\ze" to change where the match ends, see  <a href="/neovim-docs-web/en/pattern#%2F%5Cze">/\ze</a>.</div>
<div class="old-help-para">		When searching backwards and the 'z' flag is given then the
		search starts in column zero, thus no match in the current
		line will be found (unless wrapping around the end of the
		file).</div>
<div class="old-help-para">		When the <code>{stopline}</code> argument is given then the search stops
		after searching this line.  This is useful to restrict the
		search to a range of lines.  Examples:<pre>let match = search('(', 'b', line("w0"))
let end = search('END', '', line("w$"))</pre></div>
<div class="old-help-para">		When <code>{stopline}</code> is used and it is not zero this also implies
		that the search does not wrap around the end of the file.
		A zero value is equal to not giving the argument.</div>
<div class="old-help-para">		When the <code>{timeout}</code> argument is given the search stops when
		more than this many milliseconds have passed.  Thus when
		<code>{timeout}</code> is 500 the search stops after half a second.
		The value must not be negative.  A zero value is like not
		giving the argument.</div>
<div class="old-help-para">		If the <code>{skip}</code> expression is given it is evaluated with the
		cursor positioned on the start of a match.  If it evaluates to
		non-zero this match is skipped.  This can be used, for
		example, to skip a match in a comment or a string.
		<code>{skip}</code> can be a string, which is evaluated as an expression, a
		function reference or a lambda.
		When <code>{skip}</code> is omitted or empty, every match is accepted.
		When evaluating <code>{skip}</code> causes an error the search is aborted
		and -1 returned.
							<a name="search()-sub-match"></a><code class="help-tag-right">search()-sub-match</code>
		With the 'p' flag the returned value is one more than the
		first sub-match in \(\).  One if none of them matched but the
		whole pattern did match.
		To get the column number too use <a href="/neovim-docs-web/en/builtin#searchpos()">searchpos()</a>.</div>
<div class="old-help-para">		The cursor will be positioned at the match, unless the 'n'
		flag is used.</div>
<div class="old-help-para">		Example (goes over all files in the argument list):<pre>:let n = 1
:while n &lt;= argc()            " loop over all files in arglist
:  exe "argument " .. n
:  " start at the last char in the file and wrap for the
:  " first search to find match at start of file
:  normal G$
:  let flags = "w"
:  while search("foo", flags) &gt; 0
:         s/foo/bar/g
:         let flags = "W"
:  endwhile
:  update                    " write the file if modified
:  let n = n + 1
:endwhile</pre></div>
<div class="old-help-para">		Example for using some flags:<pre>:echo search('\&lt;if\|\(else\)\|\(endif\)', 'ncpe')</pre></div>
<div class="old-help-para">		This will search for the keywords "if", "else", and "endif"
		under or after the cursor.  Because of the 'p' flag, it
		returns 1, 2, or 3 depending on which keyword is found, or 0
		if the search fails.  With the cursor on the first word of the
		line:
<div class="help-column_heading">		    if (foo == 0) | let foo = foo + 1 | endif</div>		the function returns 1.  Without the 'c' flag, the function
		finds the "endif" and returns 3.  The same thing happens
		without the 'e' flag if the cursor is on the "f" of "if".
		The 'n' flag tells the function not to move the cursor.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetPattern()-&gt;search()</pre>
searchcount([{options}])					<a name="searchcount()"></a><code class="help-tag-right">searchcount()</code>
		Get or update the last search count, like what is displayed
		without the "S" flag in <a href="/neovim-docs-web/en/options#'shortmess'">'shortmess'</a>.  This works even if
		<a href="/neovim-docs-web/en/options#'shortmess'">'shortmess'</a> does contain the "S" flag.</div>
<div class="old-help-para">		This returns a Dictionary. The dictionary is empty if the
		previous pattern was not set and "pattern" was not specified.</div>
<div class="old-help-para"><div class="help-column_heading">		  key		type		meaning</div>		  current	<a href="/neovim-docs-web/en/eval#Number">Number</a>  	current position of match;
						0 if the cursor position is
						before the first match
		  exact_match	<a href="/neovim-docs-web/en/eval#Boolean">Boolean</a>  	1 if "current" is matched on
						"pos", otherwise 0
		  total		<a href="/neovim-docs-web/en/eval#Number">Number</a>  	total count of matches found
		  incomplete	<a href="/neovim-docs-web/en/eval#Number">Number</a>  	0: search was fully completed
						1: recomputing was timed out
						2: max count exceeded</div>
<div class="old-help-para">		For <code>{options}</code> see further down.</div>
<div class="old-help-para">		To get the last search count when <a href="/neovim-docs-web/en/pattern#n">n</a> or <a href="/neovim-docs-web/en/pattern#N">N</a> was pressed, call
		this function with <code>recompute: 0</code> . This sometimes returns
		wrong information because <a href="/neovim-docs-web/en/pattern#n">n</a> and <a href="/neovim-docs-web/en/pattern#N">N</a>'s maximum count is 99.
		If it exceeded 99 the result must be max count + 1 (100). If
		you want to get correct information, specify <code>recompute: 1</code>:<pre>" result == maxcount + 1 (100) when many matches
let result = searchcount(#{recompute: 0})

" Below returns correct result (recompute defaults
" to 1)
let result = searchcount()</pre></div>
<div class="old-help-para">		The function is useful to add the count to <a href="/neovim-docs-web/en/options#'statusline'">'statusline'</a>:<pre>function! LastSearchCount() abort
  let result = searchcount(#{recompute: 0})
  if empty(result)
    return ''
  endif
  if result.incomplete ==# 1     " timed out
    return printf(' /%s [?/??]', @/)
  elseif result.incomplete ==# 2 " max count exceeded
    if result.total &gt; result.maxcount &amp;&amp;
    \  result.current &gt; result.maxcount
      return printf(' /%s [&gt;%d/&gt;%d]', @/,
      \             result.current, result.total)
    elseif result.total &gt; result.maxcount
      return printf(' /%s [%d/&gt;%d]', @/,
      \             result.current, result.total)
    endif
  endif
  return printf(' /%s [%d/%d]', @/,
  \             result.current, result.total)
endfunction
let &amp;statusline ..= '%{LastSearchCount()}'

" Or if you want to show the count only when
" 'hlsearch' was on
" let &amp;statusline ..=
" \   '%{v:hlsearch ? LastSearchCount() : ""}'</pre></div>
<div class="old-help-para">		You can also update the search count, which can be useful in a
		<a href="/neovim-docs-web/en/autocmd#CursorMoved">CursorMoved</a> or <a href="/neovim-docs-web/en/autocmd#CursorMovedI">CursorMovedI</a> autocommand:<pre>autocmd CursorMoved,CursorMovedI *
  \ let s:searchcount_timer = timer_start(
  \   200, function('s:update_searchcount'))
function! s:update_searchcount(timer) abort
  if a:timer ==# s:searchcount_timer
    call searchcount(#{
    \ recompute: 1, maxcount: 0, timeout: 100})
    redrawstatus
  endif
endfunction</pre></div>
<div class="old-help-para">		This can also be used to count matched texts with specified
		pattern in the current buffer using "pattern":<pre>" Count '\&lt;foo\&gt;' in this buffer
" (Note that it also updates search count)
let result = searchcount(#{pattern: '\&lt;foo\&gt;'})

" To restore old search count by old pattern,
" search again
call searchcount()</pre></div>
<div class="old-help-para">		<code>{options}</code> must be a Dictionary. It can contain:
<div class="help-column_heading">		  key		type		meaning</div>		  recompute	<a href="/neovim-docs-web/en/eval#Boolean">Boolean</a>  	if <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a>, recompute the count
						like <a href="/neovim-docs-web/en/pattern#n">n</a> or <a href="/neovim-docs-web/en/pattern#N">N</a> was executed.
						otherwise returns the last
						computed result (when <a href="/neovim-docs-web/en/pattern#n">n</a> or
						<a href="/neovim-docs-web/en/pattern#N">N</a> was used when "S" is not
						in <a href="/neovim-docs-web/en/options#'shortmess'">'shortmess'</a>, or this
						function was called).
						(default: <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a>)
		  pattern	<a href="/neovim-docs-web/en/eval#String">String</a>  	recompute if this was given
						and different with <a href="/neovim-docs-web/en/change#%40%2F">@/</a>.
						this works as same as the
						below command is executed
						before calling this function<pre>let @/ = pattern</pre></div>
<div class="old-help-para">						(default: <a href="/neovim-docs-web/en/change#%40%2F">@/</a>)
		  timeout	<a href="/neovim-docs-web/en/eval#Number">Number</a>  	0 or negative number is no
						timeout. timeout milliseconds
						for recomputing the result
						(default: 0)
		  maxcount	<a href="/neovim-docs-web/en/eval#Number">Number</a>  	0 or negative number is no
						limit. max count of matched
						text while recomputing the
						result.  if search exceeded
						total count, "total" value
						becomes <code>maxcount + 1</code>
						(default: 0)
		  pos		<a href="/neovim-docs-web/en/eval#List">List</a>  		<code>[lnum, col, off]</code> value
						when recomputing the result.
						this changes "current" result
						value. see <a href="/neovim-docs-web/en/builtin#cursor()">cursor()</a>, |<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+builtin.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/builtin.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%09%20%20pos%09%09%7CList%7C%09%09%60%5Blnum%2C%20col%2C%20off%5D%60%20value%0A%09%09%09%09%09%09when%20recomputing%20the%20result.%0A%09%09%09%09%09%09this%20changes%20%22current%22%20result%0A%09%09%09%09%09%09value.%20see%20%7Ccursor()%7C%2C%20%7Cgetpos()%0A%09%09%09%09%09%09(default%3A%20cursor's%20position)%0A%0A%09%09Can%20also%20be%20used%20as%20a%20%7Cmethod%7C%3A%20%3E%0D%60%60%60">getpos()</a>
						(default: cursor's position)</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetSearchOpts()-&gt;searchcount()</pre></div>
<div class="old-help-para">searchdecl(<code>{name}</code> [, <code>{global}</code> [, <code>{thisblock}</code>]])			<a name="searchdecl()"></a><code class="help-tag-right">searchdecl()</code>
		Search for the declaration of <code>{name}</code>.</div>
<div class="old-help-para">		With a non-zero <code>{global}</code> argument it works like <a href="/neovim-docs-web/en/pattern#gD">gD</a>, find
		first match in the file.  Otherwise it works like <a href="/neovim-docs-web/en/pattern#gd">gd</a>, find
		first match in the function.</div>
<div class="old-help-para">		With a non-zero <code>{thisblock}</code> argument matches in a {} block
		that ends before the cursor position are ignored.  Avoids
		finding variable declarations only valid in another scope.</div>
<div class="old-help-para">		Moves the cursor to the found match.
		Returns zero for success, non-zero for failure.
		Example:<pre>if searchdecl('myvar') == 0
   echo getline('.')
endif</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetName()-&gt;searchdecl()</pre></div>
<div class="old-help-para">							<a name="searchpair()"></a><code class="help-tag-right">searchpair()</code>
searchpair(<code>{start}</code>, <code>{middle}</code>, <code>{end}</code> [, <code>{flags}</code> [, <code>{skip}</code>
				[, <code>{stopline}</code> [, <code>{timeout}</code>]]]])
		Search for the match of a nested start-end pair.  This can be
		used to find the "endif" that matches an "if", while other
		if/endif pairs in between are ignored.
		The search starts at the cursor.  The default is to search
		forward, include 'b' in <code>{flags}</code> to search backward.
		If a match is found, the cursor is positioned at it and the
		line number is returned.  If no match is found 0 or -1 is
		returned and the cursor doesn't move.  No error message is
		given.</div>
<div class="old-help-para">		<code>{start}</code>, <code>{middle}</code> and <code>{end}</code> are patterns, see <a href="/neovim-docs-web/en/pattern#pattern">pattern</a>.  They
		must not contain \( \) pairs.  Use of \%( \) is allowed.  When
		<code>{middle}</code> is not empty, it is found when searching from either
		direction, but only when not in a nested start-end pair.  A
		typical use is:<pre>searchpair('\&lt;if\&gt;', '\&lt;else\&gt;', '\&lt;endif\&gt;')</pre></div>
<div class="old-help-para">		By leaving <code>{middle}</code> empty the "else" is skipped.</div>
<div class="old-help-para">		<code>{flags}</code> 'b', 'c', 'n', 's', 'w' and 'W' are used like with
		<a href="/neovim-docs-web/en/builtin#search()">search()</a>.  Additionally:
		'r'	Repeat until no more matches found; will find the
			outer pair.  Implies the 'W' flag.
		'm'	Return number of matches instead of line number with
			the match; will be &gt; 1 when 'r' is used.
		Note: it's nearly always a good idea to use the 'W' flag, to
		avoid wrapping around the end of the file.</div>
<div class="old-help-para">		When a match for <code>{start}</code>, <code>{middle}</code> or <code>{end}</code> is found, the
		<code>{skip}</code> expression is evaluated with the cursor positioned on
		the start of the match.  It should return non-zero if this
		match is to be skipped.  E.g., because it is inside a comment
		or a string.
		When <code>{skip}</code> is omitted or empty, every match is accepted.
		When evaluating <code>{skip}</code> causes an error the search is aborted
		and -1 returned.
		<code>{skip}</code> can be a string, a lambda, a funcref or a partial.
		Anything else makes the function fail.</div>
<div class="old-help-para">		For <code>{stopline}</code> and <code>{timeout}</code> see <a href="/neovim-docs-web/en/builtin#search()">search()</a>.</div>
<div class="old-help-para">		The value of <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> is used.  <a href="/neovim-docs-web/en/options#'magic'">'magic'</a> is ignored, the
		patterns are used like it's on.</div>
<div class="old-help-para">		The search starts exactly at the cursor.  A match with
		<code>{start}</code>, <code>{middle}</code> or <code>{end}</code> at the next character, in the
		direction of searching, is the first one found.  Example:<pre>if 1
  if 2
  endif 2
endif 1</pre></div>
<div class="old-help-para">		When starting at the "if 2", with the cursor on the "i", and
		searching forwards, the "endif 2" is found.  When starting on
		the character just before the "if 2", the "endif 1" will be
		found.  That's because the "if 2" will be found first, and
		then this is considered to be a nested if/endif from "if 2" to
		"endif 2".
		When searching backwards and <code>{end}</code> is more than one character,
		it may be useful to put "\zs" at the end of the pattern, so
		that when the cursor is inside a match with the end it finds
		the matching start.</div>
<div class="old-help-para">		Example, to find the "endif" command in a Vim script:<pre>:echo searchpair('\&lt;if\&gt;', '\&lt;el\%[seif]\&gt;', '\&lt;en\%[dif]\&gt;', 'W',
                \ 'getline(".") =~ "^\\s*\""')</pre></div>
<div class="old-help-para">		The cursor must be at or after the "if" for which a match is
		to be found.  Note that single-quote strings are used to avoid
		having to double the backslashes.  The skip expression only
		catches comments at the start of a line, not after a command.
		Also, a word "en" or "if" halfway through a line is considered
		a match.
		Another example, to search for the matching "{" of a "}":<pre>:echo searchpair('{', '', '}', 'bW')</pre></div>
<div class="old-help-para">		This works when the cursor is at or before the "}" for which a
		match is to be found.  To reject matches that syntax
		highlighting recognized as strings:<pre>:echo searchpair('{', '', '}', 'bW',
     \ 'synIDattr(synID(line("."), col("."), 0), "name") =~? "string"')</pre></div>
<div class="old-help-para">							<a name="searchpairpos()"></a><code class="help-tag-right">searchpairpos()</code>
searchpairpos(<code>{start}</code>, <code>{middle}</code>, <code>{end}</code> [, <code>{flags}</code> [, <code>{skip}</code>
				[, <code>{stopline}</code> [, <code>{timeout}</code>]]]])
		Same as <a href="/neovim-docs-web/en/builtin#searchpair()">searchpair()</a>, but returns a <a href="/neovim-docs-web/en/eval#List">List</a> with the line and
		column position of the match. The first element of the <a href="/neovim-docs-web/en/eval#List">List</a>
		is the line number and the second element is the byte index of
		the column position of the match.  If no match is found,
		returns [0, 0].<pre>:let [lnum,col] = searchpairpos('{', '', '}', 'n')</pre></div>
<div class="old-help-para">		See <a href="/neovim-docs-web/en/tips#match-parens">match-parens</a> for a bigger and more useful example.</div>
<div class="old-help-para">							<a name="searchpos()"></a><code class="help-tag-right">searchpos()</code>
searchpos(<code>{pattern}</code> [, <code>{flags}</code> [, <code>{stopline}</code> [, <code>{timeout}</code> [, <code>{skip}</code>]]]])
		Same as <a href="/neovim-docs-web/en/builtin#search()">search()</a>, but returns a <a href="/neovim-docs-web/en/eval#List">List</a> with the line and
		column position of the match. The first element of the <a href="/neovim-docs-web/en/eval#List">List</a>
		is the line number and the second element is the byte index of
		the column position of the match. If no match is found,
		returns [0, 0].
		Example:<pre>:let [lnum, col] = searchpos('mypattern', 'n')</pre></div>
<div class="old-help-para">		When the 'p' flag is given then there is an extra item with
		the sub-pattern match number <a href="/neovim-docs-web/en/builtin#search()-sub-match">search()-sub-match</a>.  Example:<pre>:let [lnum, col, submatch] = searchpos('\(\l\)\|\(\u\)', 'np')</pre></div>
<div class="old-help-para">		In this example "submatch" is 2 when a lowercase letter is
		found <a href="/neovim-docs-web/en/pattern#%2F%5Cl">/\l</a>, 3 when an uppercase letter is found <a href="/neovim-docs-web/en/pattern#%2F%5Cu">/\u</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetPattern()-&gt;searchpos()</pre>
serverlist()						<a name="serverlist()"></a><code class="help-tag-right">serverlist()</code>
		Returns a list of server addresses, or empty if all servers
		were stopped. <a href="/neovim-docs-web/en/builtin#serverstart()">serverstart()</a> <a href="/neovim-docs-web/en/builtin#serverstop()">serverstop()</a>
		Example:<pre>:echo serverlist()</pre>
serverstart([{address}])				<a name="serverstart()"></a><code class="help-tag-right">serverstart()</code>
		Opens a socket or named pipe at <code>{address}</code> and listens for
		<a href="/neovim-docs-web/en/api#RPC">RPC</a> messages. Clients can send <a href="/neovim-docs-web/en/api#API">API</a> commands to the
		returned address to control Nvim.</div>
<div class="old-help-para">		Returns the address string (which may differ from the
		<code>{address}</code> argument, see below).</div>
<div class="old-help-para"><div class="help-li" style=""> If <code>{address}</code> has a colon (":") it is a TCP/IPv4/IPv6 address
		  where the last ":" separates host and port (empty or zero
		  assigns a random port).
</div><div class="help-li" style=""> Else <code>{address}</code> is the path to a named pipe (except on Windows).
</div><div class="help-li" style="margin-left: 3rem;"> If <code>{address}</code> has no slashes ("/") it is treated as the
		    "name" part of a generated path in this format:<pre>stdpath("run").."/{name}.{pid}.{counter}"</pre>
</div><div class="help-li" style=""> If <code>{address}</code> is omitted the name is "nvim".
<pre>:echo serverstart()
=&gt; /tmp/nvim.bram/oknANW/nvim.15430.5</pre></div></div>
<div class="old-help-para">		Example bash command to list all Nvim servers:<pre>ls ${XDG_RUNTIME_DIR:-${TMPDIR}nvim.${USER}}/*/nvim.*.0</pre></div>
<div class="old-help-para">		Example named pipe:<pre>if has('win32')
  echo serverstart('\\.\pipe\nvim-pipe-1234')
else
  echo serverstart('nvim.sock')
endif</pre></div>
<div class="old-help-para">		Example TCP/IP address:<pre>echo serverstart('::1:12345')</pre>
serverstop(<code>{address}</code>)					<a name="serverstop()"></a><code class="help-tag-right">serverstop()</code>
		Closes the pipe or socket at <code>{address}</code>.
		Returns TRUE if <code>{address}</code> is valid, else FALSE.
		If <a href="/neovim-docs-web/en/eval#v%3Aservername">v:servername</a> is stopped it is set to the next available
		address in <a href="/neovim-docs-web/en/builtin#serverlist()">serverlist()</a>.</div>
<div class="old-help-para">setbufline(<code>{buf}</code>, <code>{lnum}</code>, <code>{text}</code>)			<a name="setbufline()"></a><code class="help-tag-right">setbufline()</code>
		Set line <code>{lnum}</code> to <code>{text}</code> in buffer <code>{buf}</code>.  This works like
		<a href="/neovim-docs-web/en/builtin#setline()">setline()</a> for the specified buffer.</div>
<div class="old-help-para">		This function works only for loaded buffers. First call
		<a href="/neovim-docs-web/en/builtin#bufload()">bufload()</a> if needed.</div>
<div class="old-help-para">		To insert lines use <a href="/neovim-docs-web/en/builtin#appendbufline()">appendbufline()</a>.</div>
<div class="old-help-para">		<code>{text}</code> can be a string to set one line, or a list of strings
		to set multiple lines.  If the list extends below the last
		line then those lines are added.</div>
<div class="old-help-para">		For the use of <code>{buf}</code>, see <a href="/neovim-docs-web/en/builtin#bufname()">bufname()</a> above.</div>
<div class="old-help-para">		<code>{lnum}</code> is used like with <a href="/neovim-docs-web/en/builtin#setline()">setline()</a>.
		Use "$" to refer to the last line in buffer <code>{buf}</code>.
		When <code>{lnum}</code> is just below the last line the <code>{text}</code> will be
		added below the last line.
		On success 0 is returned, on failure 1 is returned.</div>
<div class="old-help-para">		If <code>{buf}</code> is not a valid buffer or <code>{lnum}</code> is not valid, an
		error message is given.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>, the base is passed as the
		third argument:<pre>GetText()-&gt;setbufline(buf, lnum)</pre>
setbufvar(<code>{buf}</code>, <code>{varname}</code>, <code>{val}</code>)			<a name="setbufvar()"></a><code class="help-tag-right">setbufvar()</code>
		Set option or local variable <code>{varname}</code> in buffer <code>{buf}</code> to
		<code>{val}</code>.
		This also works for a global or local window option, but it
		doesn't work for a global or local window variable.
		For a local window option the global value is unchanged.
		For the use of <code>{buf}</code>, see <a href="/neovim-docs-web/en/builtin#bufname()">bufname()</a> above.
		The <code>{varname}</code> argument is a string.
		Note that the variable name without "b:" must be used.
		Examples:<pre>:call setbufvar(1, "&amp;mod", 1)
:call setbufvar("todo", "myvar", "foobar")</pre></div>
<div class="old-help-para">		This function is not available in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>, the base is passed as the
		third argument:<pre>GetValue()-&gt;setbufvar(buf, varname)</pre>
setcellwidths(<code>{list}</code>)					<a name="setcellwidths()"></a><code class="help-tag-right">setcellwidths()</code>
		Specify overrides for cell widths of character ranges.  This
		tells Vim how wide characters are, counted in screen cells.
		This overrides <a href="/neovim-docs-web/en/options#'ambiwidth'">'ambiwidth'</a>.  Example:<pre>setcellwidths([[0xad, 0xad, 1],
             \ [0x2194, 0x2199, 2]])</pre></div>
<div class="old-help-para">				<a name="E1109"></a><code class="help-tag-right">E1109</code> <a name="E1110"></a><code class="help-tag">E1110</code> <a name="E1111"></a><code class="help-tag">E1111</code> <a name="E1112"></a><code class="help-tag">E1112</code> <a name="E1113"></a><code class="help-tag">E1113</code> <a name="E1114"></a><code class="help-tag">E1114</code>
		The <code>{list}</code> argument is a list of lists with each three
		numbers. These three numbers are [low, high, width].  "low"
		and "high" can be the same, in which case this refers to one
		character. Otherwise it is the range of characters from "low"
		to "high" (inclusive).  "width" is either 1 or 2, indicating
		the character width in screen cells.
		An error is given if the argument is invalid, also when a
		range overlaps with another.
		Only characters with value 0x100 and higher can be used.</div>
<div class="old-help-para">		If the new value causes <a href="/neovim-docs-web/en/options#'fillchars'">'fillchars'</a> or <a href="/neovim-docs-web/en/options#'listchars'">'listchars'</a> to become
		invalid it is rejected and an error is given.</div>
<div class="old-help-para">		To clear the overrides pass an empty list:<pre>setcellwidths([]);</pre></div>
<div class="old-help-para">		You can use the script $VIMRUNTIME/tools/emoji_list.vim to see
		the effect for known emoji characters.</div>
<div class="old-help-para">setcharpos(<code>{expr}</code>, <code>{list}</code>)				<a name="setcharpos()"></a><code class="help-tag-right">setcharpos()</code>
		Same as <a href="/neovim-docs-web/en/builtin#setpos()">setpos()</a> but uses the specified column number as the
		character index instead of the byte index in the line.</div>
<div class="old-help-para">		Example:
		With the text "????????????" in line 8:<pre>call setcharpos('.', [0, 8, 4, 0])</pre></div>
<div class="old-help-para">		positions the cursor on the fourth character '???'.<pre>call setpos('.', [0, 8, 4, 0])</pre></div>
<div class="old-help-para">		positions the cursor on the second character '???'.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetPosition()-&gt;setcharpos('.')</pre>
setcharsearch(<code>{dict}</code>)					<a name="setcharsearch()"></a><code class="help-tag-right">setcharsearch()</code>
		Set the current character search information to <code>{dict}</code>,
		which contains one or more of the following entries:</div>
<div class="old-help-para">		    char	character which will be used for a subsequent
				<a href="/neovim-docs-web/en/motion#%2C">,</a> or <a href="/neovim-docs-web/en/motion#%3B">;</a> command; an empty string clears the
				character search
		    forward	direction of character search; 1 for forward,
				0 for backward
		    until	type of character search; 1 for a <a href="/neovim-docs-web/en/motion#t">t</a> or <a href="/neovim-docs-web/en/motion#T">T</a>
				character search, 0 for an <a href="/neovim-docs-web/en/motion#f">f</a> or <a href="/neovim-docs-web/en/motion#F">F</a>
				character search</div>
<div class="old-help-para">		This can be useful to save/restore a user's character search
		from a script:<pre>:let prevsearch = getcharsearch()
:" Perform a command which clobbers user's search
:call setcharsearch(prevsearch)</pre></div>
<div class="old-help-para">		Also see <a href="/neovim-docs-web/en/builtin#getcharsearch()">getcharsearch()</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>SavedSearch()-&gt;setcharsearch()</pre>
setcmdline(<code>{str}</code> [, <code>{pos}</code>])					<a name="setcmdline()"></a><code class="help-tag-right">setcmdline()</code>
		Set the command line to <code>{str}</code> and set the cursor position to
		<code>{pos}</code>.
		If <code>{pos}</code> is omitted, the cursor is positioned after the text.
		Returns 0 when successful, 1 when not editing the command
		line.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetText()-&gt;setcmdline()</pre>
setcmdpos(<code>{pos}</code>)					<a name="setcmdpos()"></a><code class="help-tag-right">setcmdpos()</code>
		Set the cursor position in the command line to byte position
		<code>{pos}</code>.  The first position is 1.
		Use <a href="/neovim-docs-web/en/builtin#getcmdpos()">getcmdpos()</a> to obtain the current position.
		Only works while editing the command line, thus you must use
		<a href="/neovim-docs-web/en/cmdline#c_CTRL-%5C_e">c_CTRL-\_e</a>, <a href="/neovim-docs-web/en/cmdline#c_CTRL-R_%3D">c_CTRL-R_=</a> or <a href="/neovim-docs-web/en/cmdline#c_CTRL-R_CTRL-R">c_CTRL-R_CTRL-R</a> with '='.  For
		<a href="/neovim-docs-web/en/cmdline#c_CTRL-%5C_e">c_CTRL-\_e</a> and <a href="/neovim-docs-web/en/cmdline#c_CTRL-R_CTRL-R">c_CTRL-R_CTRL-R</a> with '=' the position is
		set after the command line is set to the expression.  For
		<a href="/neovim-docs-web/en/cmdline#c_CTRL-R_%3D">c_CTRL-R_=</a> it is set after evaluating the expression but
		before inserting the resulting text.
		When the number is too big the cursor is put at the end of the
		line.  A number smaller than one has undefined results.
		Returns 0 when successful, 1 when not editing the command
		line.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetPos()-&gt;setcmdpos()</pre>
setcursorcharpos(<code>{lnum}</code>, <code>{col}</code> [, <code>{off}</code>])		<a name="setcursorcharpos()"></a><code class="help-tag-right">setcursorcharpos()</code>
setcursorcharpos(<code>{list}</code>)
		Same as <a href="/neovim-docs-web/en/builtin#cursor()">cursor()</a> but uses the specified column number as the
		character index instead of the byte index in the line.</div>
<div class="old-help-para">		Example:
		With the text "????????????" in line 4:<pre>call setcursorcharpos(4, 3)</pre></div>
<div class="old-help-para">		positions the cursor on the third character '???'.<pre>call cursor(4, 3)</pre></div>
<div class="old-help-para">		positions the cursor on the first character '???'.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetCursorPos()-&gt;setcursorcharpos()</pre>
setenv(<code>{name}</code>, <code>{val}</code>)						<a name="setenv()"></a><code class="help-tag-right">setenv()</code>
		Set environment variable <code>{name}</code> to <code>{val}</code>.  Example:<pre>call setenv('HOME', '/home/myhome')</pre></div>
<div class="old-help-para">		When <code>{val}</code> is <a href="/neovim-docs-web/en/eval#v%3Anull">v:null</a> the environment variable is deleted.
		See also <a href="/neovim-docs-web/en/eval#expr-env">expr-env</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>, the base is passed as the
		second argument:<pre>GetPath()-&gt;setenv('PATH')</pre>
setfperm(<code>{fname}</code>, <code>{mode}</code>)				<a name="setfperm()"></a><code class="help-tag-right">setfperm()</code> <a name="chmod"></a><code class="help-tag">chmod</code>
		Set the file permissions for <code>{fname}</code> to <code>{mode}</code>.
		<code>{mode}</code> must be a string with 9 characters.  It is of the form
		"rwxrwxrwx", where each group of "rwx" flags represent, in
		turn, the permissions of the owner of the file, the group the
		file belongs to, and other users.  A '-' character means the
		permission is off, any other character means on.  Multi-byte
		characters are not supported.</div>
<div class="old-help-para">		For example "rw-r-----" means read-write for the user,
		readable by the group, not accessible by others.  "xx-x-----"
		would do the same thing.</div>
<div class="old-help-para">		Returns non-zero for success, zero for failure.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetFilename()-&gt;setfperm(mode)</pre></div>
<div class="old-help-para">		To read permissions see <a href="/neovim-docs-web/en/builtin#getfperm()">getfperm()</a>.</div>
<div class="old-help-para">setline(<code>{lnum}</code>, <code>{text}</code>)					<a name="setline()"></a><code class="help-tag-right">setline()</code>
		Set line <code>{lnum}</code> of the current buffer to <code>{text}</code>.  To insert
		lines use <a href="/neovim-docs-web/en/builtin#append()">append()</a>. To set lines in another buffer use
		<a href="/neovim-docs-web/en/builtin#setbufline()">setbufline()</a>.</div>
<div class="old-help-para">		<code>{lnum}</code> is used like with <a href="/neovim-docs-web/en/builtin#getline()">getline()</a>.
		When <code>{lnum}</code> is just below the last line the <code>{text}</code> will be
		added below the last line.</div>
<div class="old-help-para">		If this succeeds, FALSE is returned.  If this fails (most likely
		because <code>{lnum}</code> is invalid) TRUE is returned.</div>
<div class="old-help-para">		Example:<pre>:call setline(5, strftime("%c"))</pre></div>
<div class="old-help-para">		When <code>{text}</code> is a <a href="/neovim-docs-web/en/eval#List">List</a> then line <code>{lnum}</code> and following lines
		will be set to the items in the list.  Example:<pre>:call setline(5, ['aaa', 'bbb', 'ccc'])</pre></div>
<div class="old-help-para">		This is equivalent to:<pre>:for [n, l] in [[5, 'aaa'], [6, 'bbb'], [7, 'ccc']]
:  call setline(n, l)
:endfor</pre></div>
<div class="old-help-para">		Note: The '[ and '] marks are not set.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>, the base is passed as the
		second argument:<pre>GetText()-&gt;setline(lnum)</pre>
setloclist(<code>{nr}</code>, <code>{list}</code> [, <code>{action}</code> [, <code>{what}</code>]])		<a name="setloclist()"></a><code class="help-tag-right">setloclist()</code>
		Create or replace or add to the location list for window <code>{nr}</code>.
		<code>{nr}</code> can be the window number or the <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>.
		When <code>{nr}</code> is zero the current window is used.</div>
<div class="old-help-para">		For a location list window, the displayed location list is
		modified.  For an invalid window number <code>{nr}</code>, -1 is returned.
		Otherwise, same as <a href="/neovim-docs-web/en/builtin#setqflist()">setqflist()</a>.
		Also see <a href="/neovim-docs-web/en/quickfix#location-list">location-list</a>.</div>
<div class="old-help-para">		For <code>{action}</code> see <a href="/neovim-docs-web/en/builtin#setqflist-action">setqflist-action</a>.</div>
<div class="old-help-para">		If the optional <code>{what}</code> dictionary argument is supplied, then
		only the items listed in <code>{what}</code> are set. Refer to <a href="/neovim-docs-web/en/builtin#setqflist()">setqflist()</a>
		for the list of supported keys in <code>{what}</code>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>, the base is passed as the
		second argument:<pre>GetLoclist()-&gt;setloclist(winnr)</pre>
setmatches(<code>{list}</code> [, <code>{win}</code>])				<a name="setmatches()"></a><code class="help-tag-right">setmatches()</code>
		Restores a list of matches saved by <a href="/neovim-docs-web/en/builtin#getmatches()">getmatches()</a> for the
		current window.  Returns 0 if successful, otherwise -1.  All
		current matches are cleared before the list is restored.  See
		example for <a href="/neovim-docs-web/en/builtin#getmatches()">getmatches()</a>.
		If <code>{win}</code> is specified, use the window with this number or
		window ID instead of the current window.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetMatches()-&gt;setmatches()</pre></div>
<div class="old-help-para">							<a name="setpos()"></a><code class="help-tag-right">setpos()</code>
setpos(<code>{expr}</code>, <code>{list}</code>)
		Set the position for String <code>{expr}</code>.  Possible values:
			.	the cursor
			'x	mark x</div>
<div class="old-help-para">		<code>{list}</code> must be a <a href="/neovim-docs-web/en/eval#List">List</a> with four or five numbers:
		    [bufnum, lnum, col, off]
		    [bufnum, lnum, col, off, curswant]</div>
<div class="old-help-para">		"bufnum" is the buffer number.	Zero can be used for the
		current buffer.  When setting an uppercase mark "bufnum" is
		used for the mark position.  For other marks it specifies the
		buffer to set the mark in.  You can use the <a href="/neovim-docs-web/en/builtin#bufnr()">bufnr()</a> function
		to turn a file name into a buffer number.
		For setting the cursor and the ' mark "bufnum" is ignored,
		since these are associated with a window, not a buffer.
		Does not change the jumplist.</div>
<div class="old-help-para">		"lnum" and "col" are the position in the buffer.  The first
		column is 1.  Use a zero "lnum" to delete a mark.  If "col" is
		smaller than 1 then 1 is used. To use the character count
		instead of the byte count, use <a href="/neovim-docs-web/en/builtin#setcharpos()">setcharpos()</a>.</div>
<div class="old-help-para">		The "off" number is only used when <a href="/neovim-docs-web/en/options#'virtualedit'">'virtualedit'</a> is set. Then
		it is the offset in screen columns from the start of the
		character.  E.g., a position within a <code>&lt;Tab&gt;</code> or after the last
		character.</div>
<div class="old-help-para">		The "curswant" number is only used when setting the cursor
		position.  It sets the preferred column for when moving the
		cursor vertically.  When the "curswant" number is missing the
		preferred column is not set.  When it is present and setting a
		mark position it is not used.</div>
<div class="old-help-para">		Note that for '&lt; and '&gt; changing the line number may result in
		the marks to be effectively be swapped, so that '&lt; is always
		before '&gt;.</div>
<div class="old-help-para">		Returns 0 when the position could be set, -1 otherwise.
		An error message is given if <code>{expr}</code> is invalid.</div>
<div class="old-help-para">		Also see <a href="/neovim-docs-web/en/builtin#setcharpos()">setcharpos()</a>, <a href="/neovim-docs-web/en/builtin#getpos()">getpos()</a> and <a href="/neovim-docs-web/en/builtin#getcurpos()">getcurpos()</a>.</div>
<div class="old-help-para">		This does not restore the preferred column for moving
		vertically; if you set the cursor position with this, <a href="/neovim-docs-web/en/motion#j">j</a> and
		<a href="/neovim-docs-web/en/motion#k">k</a> motions will jump to previous columns!  Use <a href="/neovim-docs-web/en/builtin#cursor()">cursor()</a> to
		also set the preferred column.  Also see the "curswant" key in
		<a href="/neovim-docs-web/en/builtin#winrestview()">winrestview()</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetPosition()-&gt;setpos('.')</pre>
setqflist(<code>{list}</code> [, <code>{action}</code> [, <code>{what}</code>]])		<a name="setqflist()"></a><code class="help-tag-right">setqflist()</code>
		Create or replace or add to the quickfix list.</div>
<div class="old-help-para">		If the optional <code>{what}</code> dictionary argument is supplied, then
		only the items listed in <code>{what}</code> are set. The first <code>{list}</code>
		argument is ignored.  See below for the supported items in
		<code>{what}</code>.
							<a name="setqflist-what"></a><code class="help-tag-right">setqflist-what</code>
		When <code>{what}</code> is not present, the items in <code>{list}</code> are used.  Each
		item must be a dictionary.  Non-dictionary items in <code>{list}</code> are
		ignored.  Each dictionary item can contain the following
		entries:</div>
<div class="old-help-para">		    bufnr	buffer number; must be the number of a valid
				buffer
		    filename	name of a file; only used when "bufnr" is not
				present or it is invalid.
		    module	name of a module; if given it will be used in
				quickfix error window instead of the filename.
		    lnum	line number in the file
		    end_lnum	end of lines, if the item spans multiple lines
		    pattern	search pattern used to locate the error
		    col		column number
		    vcol	when non-zero: "col" is visual column
				when zero: "col" is byte index
		    end_col	end column, if the item spans multiple columns
		    nr		error number
		    text	description of the error
		    type	single-character error type, 'E', 'W', etc.
		    valid	recognized error message</div>
<div class="old-help-para">		The "col", "vcol", "nr", "type" and "text" entries are
		optional.  Either "lnum" or "pattern" entry can be used to
		locate a matching error line.
		If the "filename" and "bufnr" entries are not present or
		neither the "lnum" or "pattern" entries are present, then the
		item will not be handled as an error line.
		If both "pattern" and "lnum" are present then "pattern" will
		be used.
		If the "valid" entry is not supplied, then the valid flag is
		set when "bufnr" is a valid buffer or "filename" exists.
		If you supply an empty <code>{list}</code>, the quickfix list will be
		cleared.
		Note that the list is not exactly the same as what
		<a href="/neovim-docs-web/en/builtin#getqflist()">getqflist()</a> returns.</div>
<div class="old-help-para">		<code>{action}</code> values:		<a name="setqflist-action"></a><code class="help-tag-right">setqflist-action</code> <a name="E927"></a><code class="help-tag">E927</code>
		'a'	The items from <code>{list}</code> are added to the existing
			quickfix list. If there is no existing list, then a
			new list is created.</div>
<div class="old-help-para">		'r'	The items from the current quickfix list are replaced
			with the items from <code>{list}</code>.  This can also be used to
			clear the list:<pre>:call setqflist([], 'r')</pre></div>
<div class="old-help-para">		'f'	All the quickfix lists in the quickfix stack are
			freed.</div>
<div class="old-help-para">		If <code>{action}</code> is not present or is set to ' ', then a new list
		is created. The new quickfix list is added after the current
		quickfix list in the stack and all the following lists are
		freed. To add a new quickfix list at the end of the stack,
		set "nr" in <code>{what}</code> to "$".</div>
<div class="old-help-para">		The following items can be specified in dictionary <code>{what}</code>:
		    context	quickfix list context. See <a href="/neovim-docs-web/en/quickfix#quickfix-context">quickfix-context</a>
		    efm		errorformat to use when parsing text from
				"lines". If this is not present, then the
				<a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a> option value is used.
				See <a href="/neovim-docs-web/en/quickfix#quickfix-parse">quickfix-parse</a>
		    id		quickfix list identifier <a href="/neovim-docs-web/en/quickfix#quickfix-ID">quickfix-ID</a>
		    idx		index of the current entry in the quickfix
				list specified by "id" or "nr". If set to '$',
				then the last entry in the list is set as the
				current entry.  See <a href="/neovim-docs-web/en/quickfix#quickfix-index">quickfix-index</a>
		    items	list of quickfix entries. Same as the <code>{list}</code>
				argument.
		    lines	use <a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a> to parse a list of lines and
				add the resulting entries to the quickfix list
				<code>{nr}</code> or <code>{id}</code>.  Only a <a href="/neovim-docs-web/en/eval#List">List</a> value is supported.
				See <a href="/neovim-docs-web/en/quickfix#quickfix-parse">quickfix-parse</a>
		    nr		list number in the quickfix stack; zero
				means the current quickfix list and "$" means
				the last quickfix list.
		    quickfixtextfunc
				function to get the text to display in the
				quickfix window.  The value can be the name of
				a function or a funcref or a lambda.  Refer to
				<a href="/neovim-docs-web/en/quickfix#quickfix-window-function">quickfix-window-function</a> for an explanation
				of how to write the function and an example.
		    title	quickfix list title text. See <a href="/neovim-docs-web/en/quickfix#quickfix-title">quickfix-title</a>
		Unsupported keys in <code>{what}</code> are ignored.
		If the "nr" item is not present, then the current quickfix list
		is modified. When creating a new quickfix list, "nr" can be
		set to a value one greater than the quickfix stack size.
		When modifying a quickfix list, to guarantee that the correct
		list is modified, "id" should be used instead of "nr" to
		specify the list.</div>
<div class="old-help-para">		Examples (See also <a href="/neovim-docs-web/en/quickfix#setqflist-examples">setqflist-examples</a>):<pre>:call setqflist([], 'r', {'title': 'My search'})
:call setqflist([], 'r', {'nr': 2, 'title': 'Errors'})
:call setqflist([], 'a', {'id':qfid, 'lines':["F1:10:L10"]})</pre></div>
<div class="old-help-para">		Returns zero for success, -1 for failure.</div>
<div class="old-help-para">		This function can be used to create a quickfix list
		independent of the <a href="/neovim-docs-web/en/options#'errorformat'">'errorformat'</a> setting.  Use a command like
		<code>:cc 1</code> to jump to the first position.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>, the base is passed as the
		second argument:<pre>GetErrorlist()-&gt;setqflist()</pre></div>
<div class="old-help-para">							<a name="setreg()"></a><code class="help-tag-right">setreg()</code>
setreg(<code>{regname}</code>, <code>{value}</code> [, <code>{options}</code>])
		Set the register <code>{regname}</code> to <code>{value}</code>.
		If <code>{regname}</code> is "" or "@", the unnamed register '"' is used.
		The <code>{regname}</code> argument is a string.</div>
<div class="old-help-para">		<code>{value}</code> may be any value returned by <a href="/neovim-docs-web/en/builtin#getreg()">getreg()</a> or
		<a href="/neovim-docs-web/en/builtin#getreginfo()">getreginfo()</a>, including a <a href="/neovim-docs-web/en/eval#List">List</a> or <a href="/neovim-docs-web/en/eval#Dict">Dict</a>.
		If <code>{options}</code> contains "a" or <code>{regname}</code> is upper case,
		then the value is appended.</div>
<div class="old-help-para">		<code>{options}</code> can also contain a register type specification:
		    "c" or "v"	      <a href="/neovim-docs-web/en/motion#charwise">charwise</a> mode
		    "l" or "V"	      <a href="/neovim-docs-web/en/motion#linewise">linewise</a> mode
		    "b" or "&lt;CTRL-V&gt;" <a href="/neovim-docs-web/en/visual#blockwise-visual">blockwise-visual</a> mode
		If a number immediately follows "b" or "&lt;CTRL-V&gt;" then this is
		used as the width of the selection - if it is not specified
		then the width of the block is set to the number of characters
		in the longest line (counting a <code>&lt;Tab&gt;</code> as 1 character).
		If <code>{options}</code> contains "u" or '"', then the unnamed register is
		set to point to register <code>{regname}</code>.</div>
<div class="old-help-para">		If <code>{options}</code> contains no register settings, then the default
		is to use character mode unless <code>{value}</code> ends in a <code>&lt;NL&gt;</code> for
		string <code>{value}</code> and linewise mode for list <code>{value}</code>. Blockwise
		mode is never selected automatically.
		Returns zero for success, non-zero for failure.</div>
<div class="old-help-para">							<a name="E883"></a><code class="help-tag-right">E883</code>
		Note: you may not use <a href="/neovim-docs-web/en/eval#List">List</a> containing more than one item to
		      set search and expression registers. Lists containing no
		      items act like empty strings.</div>
<div class="old-help-para">		Examples:<pre>:call setreg(v:register, @*)
:call setreg('*', @%, 'ac')
:call setreg('a', "1\n2\n3", 'b5')
:call setreg('"', { 'points_to': 'a'})</pre></div>
<div class="old-help-para">		This example shows using the functions to save and restore a
		register:<pre>:let var_a = getreginfo()
:call setreg('a', var_a)</pre></div>
<div class="old-help-para">		or:<pre>:let var_a = getreg('a', 1, 1)
:let var_amode = getregtype('a')
    ....
:call setreg('a', var_a, var_amode)</pre></div>
<div class="old-help-para">		Note: you may not reliably restore register value
		without using the third argument to <a href="/neovim-docs-web/en/builtin#getreg()">getreg()</a> as without it
		newlines are represented as newlines AND Nul bytes are
		represented as newlines as well, see <a href="/neovim-docs-web/en/pattern#NL-used-for-Nul">NL-used-for-Nul</a>.</div>
<div class="old-help-para">		You can also change the type of a register by appending
		nothing:<pre>:call setreg('a', '', 'al')</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>, the base is passed as the
		second argument:<pre>GetText()-&gt;setreg('a')</pre>
settabvar(<code>{tabnr}</code>, <code>{varname}</code>, <code>{val}</code>)			<a name="settabvar()"></a><code class="help-tag-right">settabvar()</code>
		Set tab-local variable <code>{varname}</code> to <code>{val}</code> in tab page <code>{tabnr}</code>.
		<a href="/neovim-docs-web/en/eval#t%3Avar">t:var</a>
		The <code>{varname}</code> argument is a string.
		Note that the variable name without "t:" must be used.
		Tabs are numbered starting with one.
		This function is not available in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>, the base is passed as the
		third argument:<pre>GetValue()-&gt;settabvar(tab, name)</pre>
settabwinvar(<code>{tabnr}</code>, <code>{winnr}</code>, <code>{varname}</code>, <code>{val}</code>)	<a name="settabwinvar()"></a><code class="help-tag">settabwinvar()</code>
		Set option or local variable <code>{varname}</code> in window <code>{winnr}</code> to
		<code>{val}</code>.
		Tabs are numbered starting with one.  For the current tabpage
		use <a href="/neovim-docs-web/en/builtin#setwinvar()">setwinvar()</a>.
		<code>{winnr}</code> can be the window number or the <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>.
		When <code>{winnr}</code> is zero the current window is used.
		This also works for a global or local buffer option, but it
		doesn't work for a global or local buffer variable.
		For a local buffer option the global value is unchanged.
		Note that the variable name without "w:" must be used.
		Examples:<pre>:call settabwinvar(1, 1, "&amp;list", 0)
:call settabwinvar(3, 2, "myvar", "foobar")</pre></div>
<div class="old-help-para">		This function is not available in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>, the base is passed as the
		fourth argument:<pre>GetValue()-&gt;settabwinvar(tab, winnr, name)</pre>
settagstack(<code>{nr}</code>, <code>{dict}</code> [, <code>{action}</code>])			<a name="settagstack()"></a><code class="help-tag-right">settagstack()</code>
		Modify the tag stack of the window <code>{nr}</code> using <code>{dict}</code>.
		<code>{nr}</code> can be the window number or the <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>.</div>
<div class="old-help-para">		For a list of supported items in <code>{dict}</code>, refer to
		<a href="/neovim-docs-web/en/builtin#gettagstack()">gettagstack()</a>. "curidx" takes effect before changing the tag
		stack.
							<a name="E962"></a><code class="help-tag-right">E962</code>
		How the tag stack is modified depends on the <code>{action}</code>
		argument:
<div class="help-li" style=""> If <code>{action}</code> is not present or is set to 'r', then the tag
		  stack is replaced.
</div><div class="help-li" style=""> If <code>{action}</code> is set to 'a', then new entries from <code>{dict}</code> are
		  pushed (added) onto the tag stack.
</div><div class="help-li" style=""> If <code>{action}</code> is set to 't', then all the entries from the
		  current entry in the tag stack or "curidx" in <code>{dict}</code> are
		  removed and then new entries are pushed to the stack.
</div></div>
<div class="old-help-para">		The current index is set to one after the length of the tag
		stack after the modification.</div>
<div class="old-help-para">		Returns zero for success, -1 for failure.</div>
<div class="old-help-para">		Examples (for more examples see <a href="/neovim-docs-web/en/tagsrch#tagstack-examples">tagstack-examples</a>):
		    Empty the tag stack of window 3:<pre>call settagstack(3, {'items' : []})</pre></div>
<div class="old-help-para">		    Save and restore the tag stack:<pre>let stack = gettagstack(1003)
" do something else
call settagstack(1003, stack)
unlet stack</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>, the base is passed as the
		second argument:<pre>GetStack()-&gt;settagstack(winnr)</pre>
setwinvar(<code>{nr}</code>, <code>{varname}</code>, <code>{val}</code>)			<a name="setwinvar()"></a><code class="help-tag-right">setwinvar()</code>
		Like <a href="/neovim-docs-web/en/builtin#settabwinvar()">settabwinvar()</a> for the current tab page.
		Examples:<pre>:call setwinvar(1, "&amp;list", 0)
:call setwinvar(2, "myvar", "foobar")</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>, the base is passed as the
		third argument:<pre>GetValue()-&gt;setwinvar(winnr, name)</pre>
sha256(<code>{string}</code>)						<a name="sha256()"></a><code class="help-tag-right">sha256()</code>
		Returns a String with 64 hex characters, which is the SHA256
		checksum of <code>{string}</code>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetText()-&gt;sha256()</pre>
shellescape(<code>{string}</code> [, <code>{special}</code>])			<a name="shellescape()"></a><code class="help-tag-right">shellescape()</code>
		Escape <code>{string}</code> for use as a shell command argument.</div>
<div class="old-help-para">		On Windows when <a href="/neovim-docs-web/en/options#'shellslash'">'shellslash'</a> is not set, encloses <code>{string}</code> in
		double-quotes and doubles all double-quotes within <code>{string}</code>.
		Otherwise encloses <code>{string}</code> in single-quotes and replaces all
		"'" with "'\''".</div>
<div class="old-help-para">		If <code>{special}</code> is a <a href="/neovim-docs-web/en/eval#non-zero-arg">non-zero-arg</a>:
<div class="help-li" style=""> Special items such as "!", "%", "#" and "&lt;cword&gt;" will be
		  preceded by a backslash. The backslash will be removed again
		  by the <a href="/neovim-docs-web/en/various#%3A%21">:!</a> command.
</div><div class="help-li" style=""> The <code>&lt;NL&gt;</code> character is escaped.
</div></div>
<div class="old-help-para">		If <a href="/neovim-docs-web/en/options#'shell'">'shell'</a> contains "csh" in the tail:
<div class="help-li" style=""> The "!" character will be escaped. This is because csh and
		  tcsh use "!" for history replacement even in single-quotes.
</div><div class="help-li" style=""> The <code>&lt;NL&gt;</code> character is escaped (twice if <code>{special}</code> is
		  a <a href="/neovim-docs-web/en/eval#non-zero-arg">non-zero-arg</a>).
</div></div>
<div class="old-help-para">		If <a href="/neovim-docs-web/en/options#'shell'">'shell'</a> contains "fish" in the tail, the "\" character will
		be escaped because in fish it is used as an escape character
		inside single quotes.</div>
<div class="old-help-para">		Example of use with a <a href="/neovim-docs-web/en/various#%3A%21">:!</a> command:<pre>:exe '!dir ' .. shellescape(expand('&lt;cfile&gt;'), 1)</pre></div>
<div class="old-help-para">		This results in a directory listing for the file under the
		cursor.  Example of use with <a href="/neovim-docs-web/en/builtin#system()">system()</a>:<pre>:call system("chmod +w -- " .. shellescape(expand("%")))</pre></div>
<div class="old-help-para">		See also <a href="/neovim-docs-web/en/cmdline#%3A%3AS">::S</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetCommand()-&gt;shellescape()</pre>
shiftwidth([{col}])						<a name="shiftwidth()"></a><code class="help-tag-right">shiftwidth()</code>
		Returns the effective value of <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a>. This is the
		<a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> value unless it is zero, in which case it is the
		<a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> value.  To be backwards compatible in indent
		plugins, use this:<pre>if exists('*shiftwidth')
  func s:sw()
    return shiftwidth()
  endfunc
else
  func s:sw()
    return &amp;sw
  endfunc
endif</pre></div>
<div class="old-help-para">		And then use s:sw() instead of &amp;sw.</div>
<div class="old-help-para">		When there is one argument <code>{col}</code> this is used as column number
		for which to return the <a href="/neovim-docs-web/en/options#'shiftwidth'">'shiftwidth'</a> value. This matters for the
		<a href="/neovim-docs-web/en/options#'vartabstop'">'vartabstop'</a> feature. If no <code>{col}</code> argument is given, column 1
		will be assumed.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetColumn()-&gt;shiftwidth()</pre>
sign_ functions are documented here: <a href="/neovim-docs-web/en/sign#sign-functions-details">sign-functions-details</a></div>
<div class="old-help-para">simplify(<code>{filename}</code>)					<a name="simplify()"></a><code class="help-tag-right">simplify()</code>
		Simplify the file name as much as possible without changing
		the meaning.  Shortcuts (on MS-Windows) or symbolic links (on
		Unix) are not resolved.  If the first path component in
		<code>{filename}</code> designates the current directory, this will be
		valid for the result as well.  A trailing path separator is
		not removed either. On Unix "//path" is unchanged, but
		"///path" is simplified to "/path" (this follows the Posix
		standard).
		Example:<pre>simplify("./dir/.././/file/") == "./file/"</pre></div>
<div class="old-help-para">		Note: The combination "dir/.." is only removed if "dir" is
		a searchable directory or does not exist.  On Unix, it is also
		removed when "dir" is a symbolic link within the same
		directory.  In order to resolve all the involved symbolic
		links before simplifying the path name, use <a href="/neovim-docs-web/en/builtin#resolve()">resolve()</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetName()-&gt;simplify()</pre>
sin(<code>{expr}</code>)						<a name="sin()"></a><code class="help-tag-right">sin()</code>
		Return the sine of <code>{expr}</code>, measured in radians, as a <a href="/neovim-docs-web/en/eval#Float">Float</a>.
		<code>{expr}</code> must evaluate to a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Returns 0.0 if <code>{expr}</code> is not a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Examples:<pre>:echo sin(100)</pre></div>
<div class="old-help-para">			-0.506366<pre>:echo sin(-4.01)</pre></div>
<div class="old-help-para">			0.763301</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>Compute()-&gt;sin()</pre>
sinh(<code>{expr}</code>)						<a name="sinh()"></a><code class="help-tag-right">sinh()</code>
		Return the hyperbolic sine of <code>{expr}</code> as a <a href="/neovim-docs-web/en/eval#Float">Float</a> in the range
		[-inf, inf].
		<code>{expr}</code> must evaluate to a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Returns 0.0 if <code>{expr}</code> is not a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Examples:<pre>:echo sinh(0.5)</pre></div>
<div class="old-help-para">			0.521095<pre>:echo sinh(-0.9)</pre></div>
<div class="old-help-para">			-1.026517</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>Compute()-&gt;sinh()</pre>
sockconnect(<code>{mode}</code>, <code>{address}</code> [, <code>{opts}</code>])		 <a name="sockconnect()"></a><code class="help-tag-right">sockconnect()</code>
		Connect a socket to an address. If <code>{mode}</code> is "pipe" then
		<code>{address}</code> should be the path of a named pipe. If <code>{mode}</code> is
		"tcp" then <code>{address}</code> should be of the form "host:port" where
		the host should be an ip adderess or host name, and port the
		port number.</div>
<div class="old-help-para">		Returns a <a href="/neovim-docs-web/en/channel#channel">channel</a> ID. Close the socket with <a href="/neovim-docs-web/en/builtin#chanclose()">chanclose()</a>.
		Use <a href="/neovim-docs-web/en/builtin#chansend()">chansend()</a> to send data over a bytes socket, and
		<a href="/neovim-docs-web/en/builtin#rpcrequest()">rpcrequest()</a> and <a href="/neovim-docs-web/en/builtin#rpcnotify()">rpcnotify()</a> to communicate with a RPC
		socket.</div>
<div class="old-help-para">		<code>{opts}</code> is an optional dictionary with these keys:
		  <a href="/neovim-docs-web/en/channel#on_data">on_data</a> : callback invoked when data was read from socket
		  data_buffered : read socket data in <a href="/neovim-docs-web/en/channel#channel-buffered">channel-buffered</a> mode.
		  rpc     : If set, <a href="/neovim-docs-web/en/api#msgpack-rpc">msgpack-rpc</a> will be used to communicate
			    over the socket.
		Returns:
<div class="help-li" style=""> The channel ID on success (greater than zero)
</div><div class="help-li" style=""> 0 on invalid arguments or connection failure.
</div></div>
<div class="old-help-para">sort(<code>{list}</code> [, <code>{func}</code> [, <code>{dict}</code>]])			<a name="sort()"></a><code class="help-tag-right">sort()</code> <a name="E702"></a><code class="help-tag">E702</code>
		Sort the items in <code>{list}</code> in-place.  Returns <code>{list}</code>.</div>
<div class="old-help-para">		If you want a list to remain unmodified make a copy first:<pre>:let sortedlist = sort(copy(mylist))</pre></div>
<div class="old-help-para">		When <code>{func}</code> is omitted, is empty or zero, then sort() uses the
		string representation of each item to sort on.  Numbers sort
		after Strings, <a href="/neovim-docs-web/en/eval#Lists">Lists</a> after Numbers.  For sorting text in the
		current buffer use <a href="/neovim-docs-web/en/change#%3Asort">:sort</a>.</div>
<div class="old-help-para">		When <code>{func}</code> is given and it is '1' or 'i' then case is
		ignored.</div>
<div class="old-help-para">		When <code>{func}</code> is given and it is 'l' then the current collation
		locale is used for ordering. Implementation details: strcoll()
		is used to compare strings. See <a href="/neovim-docs-web/en/mlang#%3Alanguage">:language</a> check or set the
		collation locale. <a href="/neovim-docs-web/en/eval#v%3Acollate">v:collate</a> can also be used to check the
		current locale. Sorting using the locale typically ignores
		case. Example:<pre>" ?? is sorted similarly to o with English locale.
:language collate en_US.UTF8
:echo sort(['n', 'o', 'O', '??', 'p', 'z'], 'l')</pre></div>
<div class="old-help-para"><div class="help-column_heading">			['n', 'o', 'O', '??', 'p', 'z']</div><pre>" ?? is sorted after z with Swedish locale.
:language collate sv_SE.UTF8
:echo sort(['n', 'o', 'O', '??', 'p', 'z'], 'l')</pre></div>
<div class="old-help-para"><div class="help-column_heading">			['n', 'o', 'O', 'p', 'z', '??']</div>		This does not work properly on Mac.</div>
<div class="old-help-para">		When <code>{func}</code> is given and it is 'n' then all items will be
		sorted numerical (Implementation detail: this uses the
		strtod() function to parse numbers, Strings, Lists, Dicts and
		Funcrefs will be considered as being 0).</div>
<div class="old-help-para">		When <code>{func}</code> is given and it is 'N' then all items will be
		sorted numerical. This is like 'n' but a string containing
		digits will be used as the number they represent.</div>
<div class="old-help-para">		When <code>{func}</code> is given and it is 'f' then all items will be
		sorted numerical. All values must be a Number or a Float.</div>
<div class="old-help-para">		When <code>{func}</code> is a <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a> or a function name, this function
		is called to compare items.  The function is invoked with two
		items as argument and must return zero if they are equal, 1 or
		bigger if the first one sorts after the second one, -1 or
		smaller if the first one sorts before the second one.</div>
<div class="old-help-para">		<code>{dict}</code> is for functions with the "dict" attribute.  It will be
		used to set the local variable "self". <a href="/neovim-docs-web/en/eval#Dictionary-function">Dictionary-function</a></div>
<div class="old-help-para">		The sort is stable, items which compare equal (as number or as
		string) will keep their relative position. E.g., when sorting
		on numbers, text strings will sort next to each other, in the
		same order as they were originally.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>mylist-&gt;sort()</pre></div>
<div class="old-help-para">		Also see <a href="/neovim-docs-web/en/builtin#uniq()">uniq()</a>.</div>
<div class="old-help-para">		Example:<pre>func MyCompare(i1, i2)
   return a:i1 == a:i2 ? 0 : a:i1 &gt; a:i2 ? 1 : -1
endfunc
eval mylist-&gt;sort("MyCompare")</pre></div>
<div class="old-help-para">		A shorter compare version for this specific simple case, which
		ignores overflow:<pre>func MyCompare(i1, i2)
   return a:i1 - a:i2
endfunc</pre></div>
<div class="old-help-para">		For a simple expression you can use a lambda:<pre>eval mylist-&gt;sort({i1, i2 -&gt; i1 - i2})</pre></div>
<div class="old-help-para">							<a name="soundfold()"></a><code class="help-tag-right">soundfold()</code>
soundfold(<code>{word}</code>)
		Return the sound-folded equivalent of <code>{word}</code>.  Uses the first
		language in <a href="/neovim-docs-web/en/options#'spelllang'">'spelllang'</a> for the current window that supports
		soundfolding.  <a href="/neovim-docs-web/en/options#'spell'">'spell'</a> must be set.  When no sound folding is
		possible the <code>{word}</code> is returned unmodified.
		This can be used for making spelling suggestions.  Note that
		the method can be quite slow.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetWord()-&gt;soundfold()</pre></div>
<div class="old-help-para">							<a name="spellbadword()"></a><code class="help-tag-right">spellbadword()</code>
spellbadword([{sentence}])
		Without argument: The result is the badly spelled word under
		or after the cursor.  The cursor is moved to the start of the
		bad word.  When no bad word is found in the cursor line the
		result is an empty string and the cursor doesn't move.</div>
<div class="old-help-para">		With argument: The result is the first word in <code>{sentence}</code> that
		is badly spelled.  If there are no spelling mistakes the
		result is an empty string.</div>
<div class="old-help-para">		The return value is a list with two items:
<div class="help-li" style=""> The badly spelled word or an empty string.
</div><div class="help-li" style=""> The type of the spelling error:
			"bad"		spelling mistake
			"rare"		rare word
			"local"		word only valid in another region
			"caps"		word should start with Capital
		Example:<pre>echo spellbadword("the quik brown fox")</pre>
</div></div>
<div class="old-help-para"><div class="help-column_heading">			['quik',bad]</div></div>
<div class="old-help-para">		The spelling information for the current window and the value
		of <a href="/neovim-docs-web/en/options#'spelllang'">'spelllang'</a> are used.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetText()-&gt;spellbadword()</pre></div>
<div class="old-help-para">							<a name="spellsuggest()"></a><code class="help-tag-right">spellsuggest()</code>
spellsuggest(<code>{word}</code> [, <code>{max}</code> [, <code>{capital}</code>]])
		Return a <a href="/neovim-docs-web/en/eval#List">List</a> with spelling suggestions to replace <code>{word}</code>.
		When <code>{max}</code> is given up to this number of suggestions are
		returned.  Otherwise up to 25 suggestions are returned.</div>
<div class="old-help-para">		When the <code>{capital}</code> argument is given and it's non-zero only
		suggestions with a leading capital will be given.  Use this
		after a match with <a href="/neovim-docs-web/en/options#'spellcapcheck'">'spellcapcheck'</a>.</div>
<div class="old-help-para">		<code>{word}</code> can be a badly spelled word followed by other text.
		This allows for joining two words that were split.  The
		suggestions also include the following text, thus you can
		replace a line.</div>
<div class="old-help-para">		<code>{word}</code> may also be a good word.  Similar words will then be
		returned.  <code>{word}</code> itself is not included in the suggestions,
		although it may appear capitalized.</div>
<div class="old-help-para">		The spelling information for the current window is used.  The
		values of <a href="/neovim-docs-web/en/options#'spelllang'">'spelllang'</a> and <a href="/neovim-docs-web/en/options#'spellsuggest'">'spellsuggest'</a> are used.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetWord()-&gt;spellsuggest()</pre>
split(<code>{string}</code> [, <code>{pattern}</code> [, <code>{keepempty}</code>]])			<a name="split()"></a><code class="help-tag-right">split()</code>
		Make a <a href="/neovim-docs-web/en/eval#List">List</a> out of <code>{string}</code>.  When <code>{pattern}</code> is omitted or
		empty each white-separated sequence of characters becomes an
		item.
		Otherwise the string is split where <code>{pattern}</code> matches,
		removing the matched characters. <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> is not used
		here, add \c to ignore case. <a href="/neovim-docs-web/en/pattern#%2F%5Cc">/\c</a>
		When the first or last item is empty it is omitted, unless the
		<code>{keepempty}</code> argument is given and it's non-zero.
		Other empty items are kept when <code>{pattern}</code> matches at least one
		character or when <code>{keepempty}</code> is non-zero.
		Example:<pre>:let words = split(getline('.'), '\W\+')</pre></div>
<div class="old-help-para">		To split a string in individual characters:<pre>:for c in split(mystring, '\zs')</pre></div>
<div class="old-help-para">		If you want to keep the separator you can also use '\zs' at
		the end of the pattern:<pre>:echo split('abc:def:ghi', ':\zs')</pre></div>
<div class="old-help-para"><div class="help-column_heading">			['abc:', 'def:',ghi]</div>		Splitting a table where the first element can be empty:<pre>:let items = split(line, ':', 1)</pre></div>
<div class="old-help-para">		The opposite function is <a href="/neovim-docs-web/en/builtin#join()">join()</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetString()-&gt;split()</pre>
sqrt(<code>{expr}</code>)						<a name="sqrt()"></a><code class="help-tag-right">sqrt()</code>
		Return the non-negative square root of Float <code>{expr}</code> as a
		<a href="/neovim-docs-web/en/eval#Float">Float</a>.
		<code>{expr}</code> must evaluate to a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.  When <code>{expr}</code>
		is negative the result is NaN (Not a Number).  Returns 0.0 if
		<code>{expr}</code> is not a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Examples:<pre>:echo sqrt(100)</pre></div>
<div class="old-help-para">			10.0<pre>:echo sqrt(-4.01)</pre></div>
<div class="old-help-para">			str2float("nan")
		NaN may be different, it depends on system libraries.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>Compute()-&gt;sqrt()</pre>
srand([{expr}])						<a name="srand()"></a><code class="help-tag-right">srand()</code>
		Initialize seed used by <a href="/neovim-docs-web/en/builtin#rand()">rand()</a>:
<div class="help-li" style=""> If <code>{expr}</code> is not given, seed values are initialized by
		  reading from /dev/urandom, if possible, or using time(NULL)
		  a.k.a. epoch time otherwise; this only has second accuracy.
</div><div class="help-li" style=""> If <code>{expr}</code> is given it must be a Number.  It is used to
		  initialize the seed values.  This is useful for testing or
		  when a predictable sequence is intended.
</div></div>
<div class="old-help-para">		Examples:<pre>:let seed = srand()
:let seed = srand(userinput)
:echo rand(seed)</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>userinput-&gt;srand()</pre>
stdioopen(<code>{opts}</code>)			 <a name="stdioopen()"></a><code class="help-tag-right">stdioopen()</code>
		With <a href="/neovim-docs-web/en/starting#--headless">--headless</a> this opens stdin and stdout as a <a href="/neovim-docs-web/en/channel#channel">channel</a>.
		May be called only once. See <a href="/neovim-docs-web/en/channel#channel-stdio">channel-stdio</a>. stderr is not
		handled by this function, see <a href="/neovim-docs-web/en/eval#v%3Astderr">v:stderr</a>.</div>
<div class="old-help-para">		Close the stdio handles with <a href="/neovim-docs-web/en/builtin#chanclose()">chanclose()</a>. Use <a href="/neovim-docs-web/en/builtin#chansend()">chansend()</a>
		to send data to stdout, and <a href="/neovim-docs-web/en/builtin#rpcrequest()">rpcrequest()</a> and <a href="/neovim-docs-web/en/builtin#rpcnotify()">rpcnotify()</a>
		to communicate over RPC.</div>
<div class="old-help-para">		<code>{opts}</code> is a dictionary with these keys:
		  <a href="/neovim-docs-web/en/channel#on_stdin">on_stdin</a> : callback invoked when stdin is written to.
		  on_print : callback invoked when Nvim needs to print a
			     message, with the message (whose type is string)
			     as sole argument.
		  stdin_buffered : read stdin in <a href="/neovim-docs-web/en/channel#channel-buffered">channel-buffered</a> mode.
		  rpc      : If set, <a href="/neovim-docs-web/en/api#msgpack-rpc">msgpack-rpc</a> will be used to communicate
			     over stdio
		Returns:
<div class="help-li" style=""> <a href="/neovim-docs-web/en/channel#channel-id">channel-id</a> on success (value is always 1)
</div><div class="help-li" style=""> 0 on invalid arguments
</div></div>
<div class="old-help-para">stdpath(<code>{what}</code>)					<a name="stdpath()"></a><code class="help-tag-right">stdpath()</code> <a name="E6100"></a><code class="help-tag">E6100</code>
		Returns <a href="/neovim-docs-web/en/starting#standard-path">standard-path</a> locations of various default files and
		directories.</div>
<div class="old-help-para"><div class="help-column_heading">		<code>{what}</code>       Type    Description</div>		cache        String  Cache directory: arbitrary temporary
		                     storage for plugins, etc.
		config       String  User configuration directory. <a href="/neovim-docs-web/en/starting#init.vim">init.vim</a>
		                     is stored here.
		config_dirs  List    Other configuration directories.
		data         String  User data directory.
		data_dirs    List    Other data directories.
		log          String  Logs directory (for use by plugins too).
		run          String  Run directory: temporary, local storage
				     for sockets, named pipes, etc.
		state        String  Session state directory: storage for file
				     drafts, swap, undo, <a href="/neovim-docs-web/en/starting#shada">shada</a>.</div>
<div class="old-help-para">		Example:<pre>:echo stdpath("config")</pre>
str2float(<code>{string}</code> [, <code>{quoted}</code>])				<a name="str2float()"></a><code class="help-tag-right">str2float()</code>
		Convert String <code>{string}</code> to a Float.  This mostly works the
		same as when using a floating point number in an expression,
		see <a href="/neovim-docs-web/en/eval#floating-point-format">floating-point-format</a>.  But it's a bit more permissive.
		E.g., "1e40" is accepted, while in an expression you need to
		write "1.0e40".  The hexadecimal form "0x123" is also
		accepted, but not others, like binary or octal.
		When <code>{quoted}</code> is present and non-zero then embedded single
		quotes before the dot are ignored, thus "1'000.0" is a
		thousand.
		Text after the number is silently ignored.
		The decimal point is always '.', no matter what the locale is
		set to.  A comma ends the number: "12,345.67" is converted to
		12.0.  You can strip out thousands separators with
		<a href="/neovim-docs-web/en/builtin#substitute()">substitute()</a>:<pre>let f = str2float(substitute(text, ',', '', 'g'))</pre></div>
<div class="old-help-para">		Returns 0.0 if the conversion fails.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>let f = text-&gt;substitute(',', '', 'g')-&gt;str2float()</pre>
str2list(<code>{string}</code> [, <code>{utf8}</code>])				<a name="str2list()"></a><code class="help-tag-right">str2list()</code>
		Return a list containing the number values which represent
		each character in String <code>{string}</code>.  Examples:<pre>str2list(" ")                returns [32]
str2list("ABC")                returns [65, 66, 67]</pre></div>
<div class="old-help-para">		<a href="/neovim-docs-web/en/builtin#list2str()">list2str()</a> does the opposite.</div>
<div class="old-help-para">		UTF-8 encoding is always used, <code>{utf8}</code> option has no effect,
		and exists only for backwards-compatibility.
		With UTF-8 composing characters are handled properly:<pre>str2list("a??")                returns [97, 769]</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetString()-&gt;str2list()</pre>
str2nr(<code>{string}</code> [, <code>{base}</code>])			<a name="str2nr()"></a><code class="help-tag-right">str2nr()</code>
		Convert string <code>{string}</code> to a number.
		<code>{base}</code> is the conversion base, it can be 2, 8, 10 or 16.
		When <code>{quoted}</code> is present and non-zero then embedded single
		quotes are ignored, thus "1'000'000" is a million.</div>
<div class="old-help-para">		When <code>{base}</code> is omitted base 10 is used.  This also means that
		a leading zero doesn't cause octal conversion to be used, as
		with the default String to Number conversion.  Example:<pre>let nr = str2nr('0123')</pre></div>
<div class="old-help-para">		When <code>{base}</code> is 16 a leading "0x" or "0X" is ignored.  With a
		different base the result will be zero. Similarly, when
		<code>{base}</code> is 8 a leading "0", "0o" or "0O" is ignored, and when
		<code>{base}</code> is 2 a leading "0b" or "0B" is ignored.
		Text after the number is silently ignored.</div>
<div class="old-help-para">		Returns 0 if <code>{string}</code> is empty or on error.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetText()-&gt;str2nr()</pre>
strcharlen(<code>{string}</code>)					<a name="strcharlen()"></a><code class="help-tag-right">strcharlen()</code>
		The result is a Number, which is the number of characters
		in String <code>{string}</code>.  Composing characters are ignored.
		<a href="/neovim-docs-web/en/builtin#strchars()">strchars()</a> can count the number of characters, counting
		composing characters separately.</div>
<div class="old-help-para">		Returns 0 if <code>{string}</code> is empty or on error.</div>
<div class="old-help-para">		Also see <a href="/neovim-docs-web/en/builtin#strlen()">strlen()</a>, <a href="/neovim-docs-web/en/builtin#strdisplaywidth()">strdisplaywidth()</a> and <a href="/neovim-docs-web/en/builtin#strwidth()">strwidth()</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetText()-&gt;strcharlen()</pre>
strcharpart(<code>{src}</code>, <code>{start}</code> [, <code>{len}</code>])			<a name="strcharpart()"></a><code class="help-tag-right">strcharpart()</code>
		Like <a href="/neovim-docs-web/en/builtin#strpart()">strpart()</a> but using character index and length instead
		of byte index and length.  Composing characters are counted
		separately.
		When a character index is used where a character does not
		exist it is assumed to be one character.  For example:<pre>strcharpart('abc', -1, 2)</pre></div>
<div class="old-help-para">		results in 'a'.</div>
<div class="old-help-para">		Returns an empty string on error.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetText()-&gt;strcharpart(5)</pre>
strchars(<code>{string}</code> [, <code>{skipcc}</code>])					<a name="strchars()"></a><code class="help-tag-right">strchars()</code>
		The result is a Number, which is the number of characters
		in String <code>{string}</code>.
		When <code>{skipcc}</code> is omitted or zero, composing characters are
		counted separately.
		When <code>{skipcc}</code> set to 1, Composing characters are ignored.
		<a href="/neovim-docs-web/en/builtin#strcharlen()">strcharlen()</a> always does this.</div>
<div class="old-help-para">		Returns zero on error.</div>
<div class="old-help-para">		Also see <a href="/neovim-docs-web/en/builtin#strlen()">strlen()</a>, <a href="/neovim-docs-web/en/builtin#strdisplaywidth()">strdisplaywidth()</a> and <a href="/neovim-docs-web/en/builtin#strwidth()">strwidth()</a>.</div>
<div class="old-help-para">		<code>{skipcc}</code> is only available after 7.4.755.  For backward
		compatibility, you can define a wrapper function:<pre>if has("patch-7.4.755")
  function s:strchars(str, skipcc)
    return strchars(a:str, a:skipcc)
  endfunction
else
  function s:strchars(str, skipcc)
    if a:skipcc
      return strlen(substitute(a:str, ".", "x", "g"))
    else
      return strchars(a:str)
    endif
  endfunction
endif</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetText()-&gt;strchars()</pre>
strdisplaywidth(<code>{string}</code> [, <code>{col}</code>])			<a name="strdisplaywidth()"></a><code class="help-tag-right">strdisplaywidth()</code>
		The result is a Number, which is the number of display cells
		String <code>{string}</code> occupies on the screen when it starts at <code>{col}</code>
		(first column is zero).  When <code>{col}</code> is omitted zero is used.
		Otherwise it is the screen column where to start.  This
		matters for Tab characters.
		The option settings of the current window are used.  This
		matters for anything that's displayed differently, such as
		<a href="/neovim-docs-web/en/options#'tabstop'">'tabstop'</a> and <a href="/neovim-docs-web/en/options#'display'">'display'</a>.
		When <code>{string}</code> contains characters with East Asian Width Class
		Ambiguous, this function's return value depends on <a href="/neovim-docs-web/en/options#'ambiwidth'">'ambiwidth'</a>.
		Returns zero on error.
		Also see <a href="/neovim-docs-web/en/builtin#strlen()">strlen()</a>, <a href="/neovim-docs-web/en/builtin#strwidth()">strwidth()</a> and <a href="/neovim-docs-web/en/builtin#strchars()">strchars()</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetText()-&gt;strdisplaywidth()</pre>
strftime(<code>{format}</code> [, <code>{time}</code>])				<a name="strftime()"></a><code class="help-tag-right">strftime()</code>
		The result is a String, which is a formatted date and time, as
		specified by the <code>{format}</code> string.  The given <code>{time}</code> is used,
		or the current time if no time is given.  The accepted
		<code>{format}</code> depends on your system, thus this is not portable!
		See the manual page of the C function strftime() for the
		format.  The maximum length of the result is 80 characters.
		See also <a href="/neovim-docs-web/en/builtin#localtime()">localtime()</a>, <a href="/neovim-docs-web/en/builtin#getftime()">getftime()</a> and <a href="/neovim-docs-web/en/builtin#strptime()">strptime()</a>.
		The language can be changed with the <a href="/neovim-docs-web/en/mlang#%3Alanguage">:language</a> command.
		Examples:<pre>:echo strftime("%c")                   Sun Apr 27 11:49:23 1997
:echo strftime("%Y %b %d %X")           1997 Apr 27 11:53:25
:echo strftime("%y%m%d %T")           970427 11:53:55
:echo strftime("%H:%M")           11:55
:echo strftime("%c", getftime("file.c"))
                                 Show mod time of file.c.</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetFormat()-&gt;strftime()</pre>
strgetchar(<code>{str}</code>, <code>{index}</code>)				<a name="strgetchar()"></a><code class="help-tag-right">strgetchar()</code>
		Get a Number corresponding to the character at <code>{index}</code> in
		<code>{str}</code>.  This uses a zero-based character index, not a byte
		index.  Composing characters are considered separate
		characters here.  Use <a href="/neovim-docs-web/en/builtin#nr2char()">nr2char()</a> to convert the Number to a
		String.
		Returns -1 if <code>{index}</code> is invalid.
		Also see <a href="/neovim-docs-web/en/builtin#strcharpart()">strcharpart()</a> and <a href="/neovim-docs-web/en/builtin#strchars()">strchars()</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetText()-&gt;strgetchar(5)</pre>
stridx(<code>{haystack}</code>, <code>{needle}</code> [, <code>{start}</code>])		<a name="stridx()"></a><code class="help-tag-right">stridx()</code>
		The result is a Number, which gives the byte index in
		<code>{haystack}</code> of the first occurrence of the String <code>{needle}</code>.
		If <code>{start}</code> is specified, the search starts at index <code>{start}</code>.
		This can be used to find a second match:<pre>:let colon1 = stridx(line, ":")
:let colon2 = stridx(line, ":", colon1 + 1)</pre></div>
<div class="old-help-para">		The search is done case-sensitive.
		For pattern searches use <a href="/neovim-docs-web/en/builtin#match()">match()</a>.
		-1 is returned if the <code>{needle}</code> does not occur in <code>{haystack}</code>.
		See also <a href="/neovim-docs-web/en/builtin#strridx()">strridx()</a>.
		Examples:<pre>:echo stridx("An Example", "Example")             3
:echo stridx("Starting point", "Start")    0
:echo stridx("Starting point", "start")   -1</pre></div>
<div class="old-help-para">						<a name="strstr()"></a><code class="help-tag-right">strstr()</code> <a name="strchr()"></a><code class="help-tag">strchr()</code>
		stridx() works similar to the C function strstr().  When used
		with a single character it works similar to strchr().</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetHaystack()-&gt;stridx(needle)

                                *string()*</pre>
string(<code>{expr}</code>)	Return <code>{expr}</code> converted to a String.  If <code>{expr}</code> is a Number,
		Float, String, Blob or a composition of them, then the result
		can be parsed back with <a href="/neovim-docs-web/en/builtin#eval()">eval()</a>.
<div class="help-column_heading">			<code>{expr}</code> type	result</div>			Stringstring
			Number		123
			Float		123.123456 or 1.123456e8 or
					<code>str2float('inf')</code>
			Funcref		<code>function('name')</code>
			Blob		0z00112233.44556677.8899
			List		[item, item]
			Dictionary	<code>{key: value, key: value}</code>
		Note that in String values the ' character is doubled.
		Also see <a href="/neovim-docs-web/en/builtin#strtrans()">strtrans()</a>.
		Note 2: Output format is mostly compatible with YAML, except
		for infinite and NaN floating-point values representations
		which use <a href="/neovim-docs-web/en/builtin#str2float()">str2float()</a>.  Strings are also dumped literally,
		only single quote is escaped, which does not allow using YAML
		for parsing back binary strings.  <a href="/neovim-docs-web/en/builtin#eval()">eval()</a> should always work for
		strings and floats though and this is the only official
		method, use <a href="/neovim-docs-web/en/builtin#msgpackdump()">msgpackdump()</a> or <a href="/neovim-docs-web/en/builtin#json_encode()">json_encode()</a> if you need to
		share data with other application.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>mylist-&gt;string()</pre>
strlen(<code>{string}</code>)						<a name="strlen()"></a><code class="help-tag-right">strlen()</code>
		The result is a Number, which is the length of the String
		<code>{string}</code> in bytes.
		If the argument is a Number it is first converted to a String.
		For other types an error is given and zero is returned.
		If you want to count the number of multibyte characters use
		<a href="/neovim-docs-web/en/builtin#strchars()">strchars()</a>.
		Also see <a href="/neovim-docs-web/en/builtin#len()">len()</a>, <a href="/neovim-docs-web/en/builtin#strdisplaywidth()">strdisplaywidth()</a> and <a href="/neovim-docs-web/en/builtin#strwidth()">strwidth()</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetString()-&gt;strlen()</pre>
strpart(<code>{src}</code>, <code>{start}</code> [, <code>{len}</code> [, <code>{chars}</code>]])			<a name="strpart()"></a><code class="help-tag-right">strpart()</code>
		The result is a String, which is part of <code>{src}</code>, starting from
		byte <code>{start}</code>, with the byte length <code>{len}</code>.
		When <code>{chars}</code> is present and TRUE then <code>{len}</code> is the number of
		characters positions (composing characters are not counted
		separately, thus "1" means one base character and any
		following composing characters).
		To count <code>{start}</code> as characters instead of bytes use
		<a href="/neovim-docs-web/en/builtin#strcharpart()">strcharpart()</a>.</div>
<div class="old-help-para">		When bytes are selected which do not exist, this doesn't
		result in an error, the bytes are simply omitted.
		If <code>{len}</code> is missing, the copy continues from <code>{start}</code> till the
		end of the <code>{src}</code>.<pre>strpart("abcdefg", 3, 2)    == "de"
strpart("abcdefg", -2, 4)   == "ab"
strpart("abcdefg", 5, 4)    == "fg"
strpart("abcdefg", 3)            == "defg"</pre></div>
<div class="old-help-para">		Note: To get the first character, <code>{start}</code> must be 0.  For
		example, to get the character under the cursor:<pre>strpart(getline("."), col(".") - 1, 1, v:true)</pre></div>
<div class="old-help-para">		Returns an empty string on error.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetText()-&gt;strpart(5)</pre>
strptime(<code>{format}</code>, <code>{timestring}</code>)				<a name="strptime()"></a><code class="help-tag-right">strptime()</code>
		The result is a Number, which is a unix timestamp representing
		the date and time in <code>{timestring}</code>, which is expected to match
		the format specified in <code>{format}</code>.</div>
<div class="old-help-para">		The accepted <code>{format}</code> depends on your system, thus this is not
		portable!  See the manual page of the C function strptime()
		for the format.  Especially avoid "%c".  The value of $TZ also
		matters.</div>
<div class="old-help-para">		If the <code>{timestring}</code> cannot be parsed with <code>{format}</code> zero is
		returned.  If you do not know the format of <code>{timestring}</code> you
		can try different <code>{format}</code> values until you get a non-zero
		result.</div>
<div class="old-help-para">		See also <a href="/neovim-docs-web/en/builtin#strftime()">strftime()</a>.
		Examples:<pre>:echo strptime("%Y %b %d %X", "1997 Apr 27 11:49:23")</pre></div>
<div class="old-help-para">		  862156163<pre>:echo strftime("%c", strptime("%y%m%d %T", "970427 11:53:55"))</pre></div>
<div class="old-help-para">		  Sun Apr 27 11:53:55 1997<pre>:echo strftime("%c", strptime("%Y%m%d%H%M%S", "19970427115355") + 3600)</pre></div>
<div class="old-help-para">		  Sun Apr 27 12:53:55 1997</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetFormat()-&gt;strptime(timestring)</pre></div>
<div class="old-help-para">strridx(<code>{haystack}</code>, <code>{needle}</code> [, <code>{start}</code>])			<a name="strridx()"></a><code class="help-tag-right">strridx()</code>
		The result is a Number, which gives the byte index in
		<code>{haystack}</code> of the last occurrence of the String <code>{needle}</code>.
		When <code>{start}</code> is specified, matches beyond this index are
		ignored.  This can be used to find a match before a previous
		match:<pre>:let lastcomma = strridx(line, ",")
:let comma2 = strridx(line, ",", lastcomma - 1)</pre></div>
<div class="old-help-para">		The search is done case-sensitive.
		For pattern searches use <a href="/neovim-docs-web/en/builtin#match()">match()</a>.
		-1 is returned if the <code>{needle}</code> does not occur in <code>{haystack}</code>.
		If the <code>{needle}</code> is empty the length of <code>{haystack}</code> is returned.
		See also <a href="/neovim-docs-web/en/builtin#stridx()">stridx()</a>.  Examples:<pre>:echo strridx("an angry armadillo", "an")             3</pre></div>
<div class="old-help-para">							<a name="strrchr()"></a><code class="help-tag-right">strrchr()</code>
		When used with a single character it works similar to the C
		function strrchr().</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetHaystack()-&gt;strridx(needle)</pre>
strtrans(<code>{string}</code>)					<a name="strtrans()"></a><code class="help-tag-right">strtrans()</code>
		The result is a String, which is <code>{string}</code> with all unprintable
		characters translated into printable characters <a href="/neovim-docs-web/en/options#'isprint'">'isprint'</a>.
		Like they are shown in a window.  Example:<pre>echo strtrans(@a)</pre></div>
<div class="old-help-para">		This displays a newline in register a as "^@" instead of
		starting a new line.</div>
<div class="old-help-para">		Returns an empty string on error.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetString()-&gt;strtrans()</pre>
strwidth(<code>{string}</code>)					<a name="strwidth()"></a><code class="help-tag-right">strwidth()</code>
		The result is a Number, which is the number of display cells
		String <code>{string}</code> occupies.  A Tab character is counted as one
		cell, alternatively use <a href="/neovim-docs-web/en/builtin#strdisplaywidth()">strdisplaywidth()</a>.
		When <code>{string}</code> contains characters with East Asian Width Class
		Ambiguous, this function's return value depends on <a href="/neovim-docs-web/en/options#'ambiwidth'">'ambiwidth'</a>.
		Returns zero on error.
		Also see <a href="/neovim-docs-web/en/builtin#strlen()">strlen()</a>, <a href="/neovim-docs-web/en/builtin#strdisplaywidth()">strdisplaywidth()</a> and <a href="/neovim-docs-web/en/builtin#strchars()">strchars()</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetString()-&gt;strwidth()</pre>
submatch(<code>{nr}</code> [, <code>{list}</code>])			<a name="submatch()"></a><code class="help-tag-right">submatch()</code> <a name="E935"></a><code class="help-tag">E935</code>
		Only for an expression in a <a href="/neovim-docs-web/en/change#%3Asubstitute">:substitute</a> command or
		substitute() function.
		Returns the <code>{nr}</code>'<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+builtin.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/builtin.html%0D%0DContext%3A%0D%0D%60%60%60%0Dsubmatch(%7Bnr%7D%20%5B%2C%20%7Blist%7D%5D)%09%09%09%2Asubmatch()%2A%20%2AE935%2A%0A%09%09Only%20for%20an%20expression%20in%20a%20%7C%3Asubstitute%7C%20command%20or%0A%09%09substitute()%20function.%0A%09%09Returns%20the%20%7Bnr%7D'th%20submatch%20of%20the%20matched%20text.%20%20When%20%7Bnr%7D%0A%09%09is%200%20the%20whole%20matched%20text%20is%20returned.%0A%09%09Note%20that%20a%20NL%20in%20the%20string%20can%20stand%20for%20a%20line%20break%20of%20a%0A%09%09multi-line%20match%20or%20a%20NUL%20character%20in%20the%20text.%0D%60%60%60">th</a> submatch of the matched text.  When <code>{nr}</code>
		is 0 the whole matched text is returned.
		Note that a NL in the string can stand for a line break of a
		multi-line match or a NUL character in the text.
		Also see <a href="/neovim-docs-web/en/change#sub-replace-expression">sub-replace-expression</a>.</div>
<div class="old-help-para">		If <code>{list}</code> is present and non-zero then submatch() returns
		a list of strings, similar to <a href="/neovim-docs-web/en/builtin#getline()">getline()</a> with two arguments.
		NL characters in the text represent NUL characters in the
		text.
		Only returns more than one item for <a href="/neovim-docs-web/en/change#%3Asubstitute">:substitute</a>, inside
		<a href="/neovim-docs-web/en/builtin#substitute()">substitute()</a> this list will always contain one or zero
		items, since there are no real line breaks.</div>
<div class="old-help-para">		When substitute() is used recursively only the submatches in
		the current (deepest) call can be obtained.</div>
<div class="old-help-para">		Returns an empty string or list on error.</div>
<div class="old-help-para">		Examples:<pre>:s/\d\+/\=submatch(0) + 1/
:echo substitute(text, '\d\+', '\=submatch(0) + 1', '')</pre></div>
<div class="old-help-para">		This finds the first number in the line and adds one to it.
		A line break is included as a newline character.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetNr()-&gt;submatch()</pre>
substitute(<code>{string}</code>, <code>{pat}</code>, <code>{sub}</code>, <code>{flags}</code>)		<a name="substitute()"></a><code class="help-tag-right">substitute()</code>
		The result is a String, which is a copy of <code>{string}</code>, in which
		the first match of <code>{pat}</code> is replaced with <code>{sub}</code>.
		When <code>{flags}</code> is "g", all matches of <code>{pat}</code> in <code>{string}</code> are
		replaced.  Otherwise <code>{flags}</code> should be "".</div>
<div class="old-help-para">		This works like the ":substitute" command (without any flags).
		But the matching with <code>{pat}</code> is always done like the <a href="/neovim-docs-web/en/options#'magic'">'magic'</a>
		option is set and <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> is empty (to make scripts
		portable).  <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a> is still relevant, use <a href="/neovim-docs-web/en/pattern#%2F%5Cc">/\c</a> or <a href="/neovim-docs-web/en/pattern#%2F%5CC">/\C</a>
		if you want to ignore or match case and ignore <a href="/neovim-docs-web/en/options#'ignorecase'">'ignorecase'</a>.
		<a href="/neovim-docs-web/en/options#'smartcase'">'smartcase'</a> is not used.  See <a href="/neovim-docs-web/en/builtin#string-match">string-match</a> for how <code>{pat}</code> is
		used.</div>
<div class="old-help-para">		A "~" in <code>{sub}</code> is not replaced with the previous <code>{sub}</code>.
		Note that some codes in <code>{sub}</code> have a special meaning
		<a href="/neovim-docs-web/en/change#sub-replace-special">sub-replace-special</a>.  For example, to replace something with
		"\n" (two characters), use "\\\\n" or '\\n'.</div>
<div class="old-help-para">		When <code>{pat}</code> does not match in <code>{string}</code>, <code>{string}</code> is returned
		unmodified.</div>
<div class="old-help-para">		Example:<pre>:let &amp;path = substitute(&amp;path, ",\\=[^,]*$", "", "")</pre></div>
<div class="old-help-para">		This removes the last component of the <a href="/neovim-docs-web/en/options#'path'">'path'</a> option.<pre>:echo substitute("testing", ".*", "\\U\\0", "")</pre></div>
<div class="old-help-para">		results in "TESTING".</div>
<div class="old-help-para">		When <code>{sub}</code> starts with "\=", the remainder is interpreted as
		an expression. See <a href="/neovim-docs-web/en/change#sub-replace-expression">sub-replace-expression</a>.  Example:<pre>:echo substitute(s, '%\(\x\x\)',
   \ '\=nr2char("0x" .. submatch(1))', 'g')</pre></div>
<div class="old-help-para">		When <code>{sub}</code> is a Funcref that function is called, with one
		optional argument.  Example:<pre>:echo substitute(s, '%\(\x\x\)', SubNr, 'g')</pre></div>
<div class="old-help-para">		The optional argument is a list which contains the whole
		matched string and up to nine submatches, like what
		<a href="/neovim-docs-web/en/builtin#submatch()">submatch()</a> returns.  Example:<pre>:echo substitute(s, '%\(\x\x\)', {m -&gt; '0x' .. m[1]}, 'g')</pre></div>
<div class="old-help-para">		Returns an empty string on error.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetString()-&gt;substitute(pat, sub, flags)</pre>
swapinfo(<code>{fname}</code>)					<a name="swapinfo()"></a><code class="help-tag-right">swapinfo()</code>
		The result is a dictionary, which holds information about the
		swapfile <code>{fname}</code>. The available fields are:
			version Vim version
			user	user name
			host	host name
			fname	original file name
			pid	PID of the Vim process that created the swap
				file
			mtime	last modification time in seconds
			inode	Optional: INODE number of the file
			dirty	1 if file was modified, 0 if not
		In case of failure an "error" item is added with the reason:
			Cannot open file: file not found or in accessible
			Cannot read file: cannot read first block
			Not a swap file: does not contain correct block ID
			Magic number mismatch: Info in first block is invalid</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetFilename()-&gt;swapinfo()</pre>
swapname(<code>{buf}</code>)						<a name="swapname()"></a><code class="help-tag-right">swapname()</code>
		The result is the swap file path of the buffer <code>{buf}</code>.
		For the use of <code>{buf}</code>, see <a href="/neovim-docs-web/en/builtin#bufname()">bufname()</a> above.
		If buffer <code>{buf}</code> is the current buffer, the result is equal to
		<a href="/neovim-docs-web/en/recover#%3Aswapname">:swapname</a> (unless there is no swap file).
		If buffer <code>{buf}</code> has no swap file, returns an empty string.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetBufname()-&gt;swapname()</pre>
synID(<code>{lnum}</code>, <code>{col}</code>, <code>{trans}</code>)				<a name="synID()"></a><code class="help-tag-right">synID()</code>
		The result is a Number, which is the syntax ID at the position
		<code>{lnum}</code> and <code>{col}</code> in the current window.
		The syntax ID can be used with <a href="/neovim-docs-web/en/builtin#synIDattr()">synIDattr()</a> and
		<a href="/neovim-docs-web/en/builtin#synIDtrans()">synIDtrans()</a> to obtain syntax information about text.</div>
<div class="old-help-para">		<code>{col}</code> is 1 for the leftmost column, <code>{lnum}</code> is 1 for the first
		line.  <a href="/neovim-docs-web/en/options#'synmaxcol'">'synmaxcol'</a> applies, in a longer line zero is returned.
		Note that when the position is after the last character,
		that's where the cursor can be in Insert mode, synID() returns
		zero.  <code>{lnum}</code> is used like with <a href="/neovim-docs-web/en/builtin#getline()">getline()</a>.</div>
<div class="old-help-para">		When <code>{trans}</code> is <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a>, transparent items are reduced to the
		item that they reveal.  This is useful when wanting to know
		the effective color.  When <code>{trans}</code> is <a href="/neovim-docs-web/en/eval#FALSE">FALSE</a>, the transparent
		item is returned.  This is useful when wanting to know which
		syntax item is effective (e.g. inside parens).
		Warning: This function can be very slow.  Best speed is
		obtained by going through the file in forward direction.</div>
<div class="old-help-para">		Returns zero on error.</div>
<div class="old-help-para">		Example (echoes the name of the syntax item under the cursor):<pre>:echo synIDattr(synID(line("."), col("."), 1), "name")</pre></div>
<div class="old-help-para">synIDattr(<code>{synID}</code>, <code>{what}</code> [, <code>{mode}</code>])			<a name="synIDattr()"></a><code class="help-tag-right">synIDattr()</code>
		The result is a String, which is the <code>{what}</code> attribute of
		syntax ID <code>{synID}</code>.  This can be used to obtain information
		about a syntax item.
		<code>{mode}</code> can be "gui" or "cterm", to get the attributes
		for that mode.  When <code>{mode}</code> is omitted, or an invalid value is
		used, the attributes for the currently active highlighting are
		used (GUI or cterm).
		Use synIDtrans() to follow linked highlight groups.
		<code>{what}</code>		result
		"name"		the name of the syntax item
		"fg"		foreground color (GUI: color name used to set
				the color, cterm: color number as a string,
				term: empty string)
		"bg"		background color (as with "fg")
		"font"		font name (only available in the GUI)
				<a href="/neovim-docs-web/en/syntax#highlight-font">highlight-font</a>
		"sp"		special color (as with "fg") <a href="/neovim-docs-web/en/syntax#guisp">guisp</a>
		"fg#"		like "fg", but for the GUI and the GUI is
				running the name in "#RRGGBB" form
		"bg#"		like "fg#" for "bg"
		"sp#"		like "fg#" for "sp"
		"bold"		"1" if bold
		"italic"	"1" if italic
		"reverse"	"1" if reverse
		"inverse"	"1" if inverse (= reverse)
		"standout"	"1" if standout
		"underline"	"1" if underlined
		"undercurl"	"1" if undercurled
		"underdouble"	"1" if double underlined
		"underdotted"	"1" if dotted underlined
		"underdashed"	"1" if dashed underlined
		"strikethrough"	"1" if struckthrough
		"nocombine"	"1" if nocombine</div>
<div class="old-help-para">		Returns an empty string on error.</div>
<div class="old-help-para">		Example (echoes the color of the syntax item under the
		cursor):<pre>:echo synIDattr(synIDtrans(synID(line("."), col("."), 1)), "fg")</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>:echo synID(line("."), col("."), 1)-&gt;synIDtrans()-&gt;synIDattr("fg")</pre>
synIDtrans(<code>{synID}</code>)					<a name="synIDtrans()"></a><code class="help-tag-right">synIDtrans()</code>
		The result is a Number, which is the translated syntax ID of
		<code>{synID}</code>.  This is the syntax group ID of what is being used to
		highlight the character.  Highlight links given with
		":highlight link" are followed.</div>
<div class="old-help-para">		Returns zero on error.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>:echo synID(line("."), col("."), 1)-&gt;synIDtrans()-&gt;synIDattr("fg")</pre>
synconcealed(<code>{lnum}</code>, <code>{col}</code>)				<a name="synconcealed()"></a><code class="help-tag-right">synconcealed()</code>
		The result is a <a href="/neovim-docs-web/en/eval#List">List</a> with currently three items:
		1. The first item in the list is 0 if the character at the
		   position <code>{lnum}</code> and <code>{col}</code> is not part of a concealable
		   region, 1 if it is.  <code>{lnum}</code> is used like with <a href="/neovim-docs-web/en/builtin#getline()">getline()</a>.
		2. The second item in the list is a string. If the first item
		   is 1, the second item contains the text which will be
		   displayed in place of the concealed text, depending on the
		   current setting of <a href="/neovim-docs-web/en/options#'conceallevel'">'conceallevel'</a> and <a href="/neovim-docs-web/en/options#'listchars'">'listchars'</a>.
		3. The third and final item in the list is a number
		   representing the specific syntax region matched in the
		   line. When the character is not concealed the value is
		   zero. This allows detection of the beginning of a new
		   concealable region if there are two consecutive regions
		   with the same replacement character.  For an example, if
		   the text is "123456" and both "23" and "45" are concealed
		   and replaced by the character "X", then:
<div class="help-column_heading">			call			returns</div>			synconcealed(lnum, 1)   [0, '', 0]
			synconcealed(lnum, 2)   [1, 'X', 1]
			synconcealed(lnum, 3)   [1, 'X', 1]
			synconcealed(lnum, 4)   [1, 'X', 2]
			synconcealed(lnum, 5)   [1, 'X', 2]
			synconcealed(lnum, 6)   [0, '', 0]</div>
<div class="old-help-para">synstack(<code>{lnum}</code>, <code>{col}</code>)					<a name="synstack()"></a><code class="help-tag-right">synstack()</code>
		Return a <a href="/neovim-docs-web/en/eval#List">List</a>, which is the stack of syntax items at the
		position <code>{lnum}</code> and <code>{col}</code> in the current window.  <code>{lnum}</code> is
		used like with <a href="/neovim-docs-web/en/builtin#getline()">getline()</a>.  Each item in the List is an ID
		like what <a href="/neovim-docs-web/en/builtin#synID()">synID()</a> returns.
		The first item in the List is the outer region, following are
		items contained in that one.  The last one is what <a href="/neovim-docs-web/en/builtin#synID()">synID()</a>
		returns, unless not the whole item is highlighted or it is a
		transparent item.
		This function is useful for debugging a syntax file.
		Example that shows the syntax stack under the cursor:<pre>for id in synstack(line("."), col("."))
   echo synIDattr(id, "name")
endfor</pre></div>
<div class="old-help-para">		When the position specified with <code>{lnum}</code> and <code>{col}</code> is invalid
		an empty list is returned.  The position just after the last
		character in a line and the first column in an empty line are
		valid positions.</div>
<div class="old-help-para">system(<code>{cmd}</code> [, <code>{input}</code>])				<a name="system()"></a><code class="help-tag-right">system()</code> <a name="E677"></a><code class="help-tag">E677</code>
		Gets the output of <code>{cmd}</code> as a <a href="/neovim-docs-web/en/eval#string">string</a> (<a href="/neovim-docs-web/en/builtin#systemlist()">systemlist()</a> returns
		a <a href="/neovim-docs-web/en/eval#List">List</a>) and sets <a href="/neovim-docs-web/en/eval#v%3Ashell_error">v:shell_error</a> to the error code.
		<code>{cmd}</code> is treated as in <a href="/neovim-docs-web/en/builtin#jobstart()">jobstart()</a>:
		If <code>{cmd}</code> is a List it runs directly (no <a href="/neovim-docs-web/en/options#'shell'">'shell'</a>).
		If <code>{cmd}</code> is a String it runs in the <a href="/neovim-docs-web/en/options#'shell'">'shell'</a>, like this:<pre>:call jobstart(split(&amp;shell) + split(&amp;shellcmdflag) + ['{cmd}'])</pre></div>
<div class="old-help-para">		Not to be used for interactive commands.</div>
<div class="old-help-para">		Result is a String, filtered to avoid platform-specific quirks:
<div class="help-li" style=""> <code>&lt;CR&gt;</code><code>&lt;NL&gt;</code> is replaced with <code>&lt;NL&gt;</code>
</div><div class="help-li" style=""> NUL characters are replaced with SOH (0x01)
</div></div>
<div class="old-help-para">		Example:<pre>:echo system(['ls', expand('%:h')])</pre></div>
<div class="old-help-para">		If <code>{input}</code> is a string it is written to a pipe and passed as
		stdin to the command.  The string is written as-is, line
		separators are not changed.
		If <code>{input}</code> is a <a href="/neovim-docs-web/en/eval#List">List</a> it is written to the pipe as
		<a href="/neovim-docs-web/en/builtin#writefile()">writefile()</a> does with <code>{binary}</code> set to "b" (i.e. with
		a newline between each list item, and newlines inside list
		items converted to NULs).
		When <code>{input}</code> is given and is a valid buffer id, the content of
		the buffer is written to the file line by line, each line
		terminated by NL (and NUL where the text has NL).
								<a name="E5677"></a><code class="help-tag-right">E5677</code>
		Note: system() cannot write to or read from backgrounded ("&amp;")
		shell commands, e.g.:<pre>:echo system("cat - &amp;", "foo")</pre></div>
<div class="old-help-para">		which is equivalent to:<pre>$ echo foo | bash -c 'cat - &amp;'</pre></div>
<div class="old-help-para">		The pipes are disconnected (unless overridden by shell
		redirection syntax) before input can reach it. Use
		<a href="/neovim-docs-web/en/builtin#jobstart()">jobstart()</a> instead.</div>
<div class="old-help-para">		Note: Use <a href="/neovim-docs-web/en/builtin#shellescape()">shellescape()</a> or <a href="/neovim-docs-web/en/cmdline#%3A%3AS">::S</a> with <a href="/neovim-docs-web/en/builtin#expand()">expand()</a> or
		<a href="/neovim-docs-web/en/builtin#fnamemodify()">fnamemodify()</a> to escape special characters in a command
		argument. <a href="/neovim-docs-web/en/options#'shellquote'">'shellquote'</a> and <a href="/neovim-docs-web/en/options#'shellxquote'">'shellxquote'</a> must be properly
		configured. Example:<pre>:echo system('ls '..shellescape(expand('%:h')))
:echo system('ls '..expand('%:h:S'))</pre></div>
<div class="old-help-para">		Unlike ":!cmd" there is no automatic check for changed files.
		Use <a href="/neovim-docs-web/en/editing#%3Achecktime">:checktime</a> to force a check.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>:echo GetCmd()-&gt;system()</pre>
systemlist(<code>{cmd}</code> [, <code>{input}</code> [, <code>{keepempty}</code>]])		<a name="systemlist()"></a><code class="help-tag-right">systemlist()</code>
		Same as <a href="/neovim-docs-web/en/builtin#system()">system()</a>, but returns a <a href="/neovim-docs-web/en/eval#List">List</a> with lines (parts of
		output separated by NL) with NULs transformed into NLs. Output
		is the same as <a href="/neovim-docs-web/en/builtin#readfile()">readfile()</a> will output with <code>{binary}</code> argument
		set to "b", except that a final newline is not preserved,
		unless <code>{keepempty}</code> is non-zero.
		Note that on MS-Windows you may get trailing CR characters.</div>
<div class="old-help-para">		To see the difference between "echo hello" and "echo -n hello"
		use <a href="/neovim-docs-web/en/builtin#system()">system()</a> and <a href="/neovim-docs-web/en/builtin#split()">split()</a>:<pre>echo split(system('echo hello'), '\n', 1)</pre></div>
<div class="old-help-para">		Returns an empty string on error.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>:echo GetCmd()-&gt;systemlist()</pre>
tabpagebuflist([{arg}])					<a name="tabpagebuflist()"></a><code class="help-tag-right">tabpagebuflist()</code>
		The result is a <a href="/neovim-docs-web/en/eval#List">List</a>, where each item is the number of the
		buffer associated with each window in the current tab page.
		<code>{arg}</code> specifies the number of the tab page to be used. When
		omitted the current tab page is used.
		When <code>{arg}</code> is invalid the number zero is returned.
		To get a list of all buffers in all tabs use this:<pre>let buflist = []
for i in range(tabpagenr('$'))
   call extend(buflist, tabpagebuflist(i + 1))
endfor</pre></div>
<div class="old-help-para">		Note that a buffer may appear in more than one window.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetTabpage()-&gt;tabpagebuflist()</pre>
tabpagenr([{arg}])					<a name="tabpagenr()"></a><code class="help-tag-right">tabpagenr()</code>
		The result is a Number, which is the number of the current
		tab page.  The first tab page has number 1.</div>
<div class="old-help-para">		The optional argument <code>{arg}</code> supports the following values:
			$	the number of the last tab page (the tab page
				count).
			#	the number of the last accessed tab page
				(where <a href="/neovim-docs-web/en/tabpage#g%3CTab%3E">g&lt;Tab&gt;</a> goes to).  If there is no
				previous tab page, 0 is returned.
		The number can be used with the <a href="/neovim-docs-web/en/tabpage#%3Atab">:tab</a> command.</div>
<div class="old-help-para">		Returns zero on error.</div>
<div class="old-help-para">tabpagewinnr(<code>{tabarg}</code> [, <code>{arg}</code>])			<a name="tabpagewinnr()"></a><code class="help-tag-right">tabpagewinnr()</code>
		Like <a href="/neovim-docs-web/en/builtin#winnr()">winnr()</a> but for tab page <code>{tabarg}</code>.
		<code>{tabarg}</code> specifies the number of tab page to be used.
		<code>{arg}</code> is used like with <a href="/neovim-docs-web/en/builtin#winnr()">winnr()</a>:
<div class="help-li" style=""> When omitted the current window number is returned.  This is
		  the window which will be used when going to this tab page.
</div><div class="help-li" style=""> When "$" the number of windows is returned.
</div><div class="help-li" style=""> When "#" the previous window nr is returned.
		Useful examples:<pre>tabpagewinnr(1)            " current window of tab page 1
tabpagewinnr(4, '$')    " number of windows in tab page 4</pre>
</div></div>
<div class="old-help-para">		When <code>{tabarg}</code> is invalid zero is returned.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetTabpage()-&gt;tabpagewinnr()</pre></div>
<div class="old-help-para">							<a name="tagfiles()"></a><code class="help-tag-right">tagfiles()</code>
tagfiles()	Returns a <a href="/neovim-docs-web/en/eval#List">List</a> with the file names used to search for tags
		for the current buffer.  This is the <a href="/neovim-docs-web/en/options#'tags'">'tags'</a> option expanded.</div>
<div class="old-help-para">taglist(<code>{expr}</code> [, <code>{filename}</code>])				<a name="taglist()"></a><code class="help-tag-right">taglist()</code>
		Returns a <a href="/neovim-docs-web/en/eval#List">List</a> of tags matching the regular expression <code>{expr}</code>.</div>
<div class="old-help-para">		If <code>{filename}</code> is passed it is used to prioritize the results
		in the same way that <a href="/neovim-docs-web/en/tagsrch#%3Atselect">:tselect</a> does. See <a href="/neovim-docs-web/en/tagsrch#tag-priority">tag-priority</a>.
		<code>{filename}</code> should be the full path of the file.</div>
<div class="old-help-para">		Each list item is a dictionary with at least the following
		entries:
			name		Name of the tag.
			filename	Name of the file where the tag is
					defined.  It is either relative to the
					current directory or a full path.
			cmd		Ex command used to locate the tag in
					the file.
			kind		Type of the tag.  The value for this
					entry depends on the language specific
					kind values.  Only available when
					using a tags file generated by
					Universal/Exuberant ctags or hdrtag.
			static		A file specific tag.  Refer to
					<a href="/neovim-docs-web/en/tagsrch#static-tag">static-tag</a> for more information.
		More entries may be present, depending on the content of the
		tags file: access, implementation, inherits and signature.
		Refer to the ctags documentation for information about these
		fields.  For C code the fields "struct", "class" and "enum"
		may appear, they give the name of the entity the tag is
		contained in.</div>
<div class="old-help-para">		The ex-command "cmd" can be either an ex search pattern, a
		line number or a line number followed by a byte number.</div>
<div class="old-help-para">		If there are no matching tags, then an empty list is returned.</div>
<div class="old-help-para">		To get an exact tag match, the anchors '^' and '$' should be
		used in <code>{expr}</code>.  This also make the function work faster.
		Refer to <a href="/neovim-docs-web/en/tagsrch#tag-regexp">tag-regexp</a> for more information about the tag
		search regular expression pattern.</div>
<div class="old-help-para">		Refer to <a href="/neovim-docs-web/en/options#'tags'">'tags'</a> for information about how the tags file is
		located by Vim. Refer to <a href="/neovim-docs-web/en/tagsrch#tags-file-format">tags-file-format</a> for the format of
		the tags file generated by the different ctags tools.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetTagpattern()-&gt;taglist()</pre>
tempname()					<a name="tempname()"></a><code class="help-tag-right">tempname()</code> <a name="temp-file-name"></a><code class="help-tag">temp-file-name</code>
		The result is a String, which is the name of a file that
		doesn't exist.  It can be used for a temporary file.  Example:<pre>:let tmpfile = tempname()
:exe "redir &gt; " .. tmpfile</pre></div>
<div class="old-help-para">		For Unix, the file will be in a private directory <a href="/neovim-docs-web/en/change#tempfile">tempfile</a>.
		For MS-Windows forward slashes are used when the <a href="/neovim-docs-web/en/options#'shellslash'">'shellslash'</a>
		option is set or when <a href="/neovim-docs-web/en/options#'shellcmdflag'">'shellcmdflag'</a> starts with '-'.</div>
<div class="old-help-para">termopen(<code>{cmd}</code> [, <code>{opts}</code>])			<a name="termopen()"></a><code class="help-tag-right">termopen()</code>
		Spawns <code>{cmd}</code> in a new pseudo-terminal session connected
		to the current (unmodified) buffer. Parameters and behavior
		are the same as <a href="/neovim-docs-web/en/builtin#jobstart()">jobstart()</a> except "pty", "width", "height",
		and "TERM" are ignored: "height" and "width" are taken from
		the current window.
		Returns the same values as <a href="/neovim-docs-web/en/builtin#jobstart()">jobstart()</a>.</div>
<div class="old-help-para">		Terminal environment is initialized as in ||jobstart-env|,
		except $TERM is set to "xterm-256color". Full behavior is
		described in <a href="/neovim-docs-web/en/nvim_terminal_emulator#terminal">terminal</a>.</div>
<div class="old-help-para">tan(<code>{expr}</code>)						<a name="tan()"></a><code class="help-tag-right">tan()</code>
		Return the tangent of <code>{expr}</code>, measured in radians, as a <a href="/neovim-docs-web/en/eval#Float">Float</a>
		in the range [-inf, inf].
		<code>{expr}</code> must evaluate to a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Returns 0.0 if <code>{expr}</code> is not a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Examples:<pre>:echo tan(10)</pre></div>
<div class="old-help-para">			0.648361<pre>:echo tan(-4.01)</pre></div>
<div class="old-help-para">			-1.181502</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>Compute()-&gt;tan()</pre>
tanh(<code>{expr}</code>)						<a name="tanh()"></a><code class="help-tag-right">tanh()</code>
		Return the hyperbolic tangent of <code>{expr}</code> as a <a href="/neovim-docs-web/en/eval#Float">Float</a> in the
		range [-1, 1].
		<code>{expr}</code> must evaluate to a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Returns 0.0 if <code>{expr}</code> is not a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Examples:<pre>:echo tanh(0.5)</pre></div>
<div class="old-help-para">			0.462117<pre>:echo tanh(-1)</pre></div>
<div class="old-help-para">			-0.761594</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>Compute()-&gt;tanh()</pre></div>
<div class="old-help-para">							<a name="timer_info()"></a><code class="help-tag-right">timer_info()</code>
timer_info([{id}])
		Return a list with information about timers.
		When <code>{id}</code> is given only information about this timer is
		returned.  When timer <code>{id}</code> does not exist an empty list is
		returned.
		When <code>{id}</code> is omitted information about all timers is returned.</div>
<div class="old-help-para">		For each timer the information is stored in a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> with
		these items:
		    "id"	    the timer ID
		    "time"	    time the timer was started with
		    "repeat"	    number of times the timer will still fire;
				    -1 means forever
		    "callback"	    the callback</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetTimer()-&gt;timer_info()</pre></div>
<div class="old-help-para">timer_pause(<code>{timer}</code>, <code>{paused}</code>)				<a name="timer_pause()"></a><code class="help-tag-right">timer_pause()</code>
		Pause or unpause a timer.  A paused timer does not invoke its
		callback when its time expires.  Unpausing a timer may cause
		the callback to be invoked almost immediately if enough time
		has passed.</div>
<div class="old-help-para">		Pausing a timer is useful to avoid the callback to be called
		for a short time.</div>
<div class="old-help-para">		If <code>{paused}</code> evaluates to a non-zero Number or a non-empty
		String, then the timer is paused, otherwise it is unpaused.
		See <a href="/neovim-docs-web/en/eval#non-zero-arg">non-zero-arg</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetTimer()-&gt;timer_pause(1)</pre></div>
<div class="old-help-para">						<a name="timer_start()"></a><code class="help-tag-right">timer_start()</code> <a name="timer"></a><code class="help-tag">timer</code> <a name="timers"></a><code class="help-tag">timers</code>
timer_start(<code>{time}</code>, <code>{callback}</code> [, <code>{options}</code>])
		Create a timer and return the timer ID.</div>
<div class="old-help-para">		<code>{time}</code> is the waiting time in milliseconds. This is the
		minimum time before invoking the callback.  When the system is
		busy or Vim is not waiting for input the time will be longer.</div>
<div class="old-help-para">		<code>{callback}</code> is the function to call.  It can be the name of a
		function or a <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a>.  It is called with one argument, which
		is the timer ID.  The callback is only invoked when Vim is
		waiting for input.</div>
<div class="old-help-para">		<code>{options}</code> is a dictionary.  Supported entries:
		   "repeat"	Number of times to repeat the callback.
				-1 means forever.  Default is 1.
				If the timer causes an error three times in a
				row the repeat is cancelled.</div>
<div class="old-help-para">		Returns -1 on error.</div>
<div class="old-help-para">		Example:<pre>func MyHandler(timer)
  echo 'Handler called'
endfunc
let timer = timer_start(500, 'MyHandler',
        \ {'repeat': 3})</pre></div>
<div class="old-help-para">		This invokes MyHandler() three times at 500 msec intervals.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetMsec()-&gt;timer_start(callback)</pre></div>
<div class="old-help-para">		Not available in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>.</div>
<div class="old-help-para">timer_stop(<code>{timer}</code>)					<a name="timer_stop()"></a><code class="help-tag-right">timer_stop()</code>
		Stop a timer.  The timer callback will no longer be invoked.
		<code>{timer}</code> is an ID returned by timer_start(), thus it must be a
		Number.  If <code>{timer}</code> does not exist there is no error.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetTimer()-&gt;timer_stop()</pre></div>
<div class="old-help-para">timer_stopall()						<a name="timer_stopall()"></a><code class="help-tag-right">timer_stopall()</code>
		Stop all timers.  The timer callbacks will no longer be
		invoked.  Useful if some timers is misbehaving.  If there are
		no timers there is no error.</div>
<div class="old-help-para">tolower(<code>{expr}</code>)						<a name="tolower()"></a><code class="help-tag-right">tolower()</code>
		The result is a copy of the String given, with all uppercase
		characters turned into lowercase (just like applying <a href="/neovim-docs-web/en/change#gu">gu</a> to
		the string).  Returns an empty string on error.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetText()-&gt;tolower()</pre>
toupper(<code>{expr}</code>)						<a name="toupper()"></a><code class="help-tag-right">toupper()</code>
		The result is a copy of the String given, with all lowercase
		characters turned into uppercase (just like applying <a href="/neovim-docs-web/en/change#gU">gU</a> to
		the string).  Returns an empty string on error.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetText()-&gt;toupper()</pre>
tr(<code>{src}</code>, <code>{fromstr}</code>, <code>{tostr}</code>)				<a name="tr()"></a><code class="help-tag-right">tr()</code>
		The result is a copy of the <code>{src}</code> string with all characters
		which appear in <code>{fromstr}</code> replaced by the character in that
		position in the <code>{tostr}</code> string.  Thus the first character in
		<code>{fromstr}</code> is translated into the first character in <code>{tostr}</code>
		and so on.  Exactly like the unix "tr" command.
		This code also deals with multibyte characters properly.</div>
<div class="old-help-para">		Returns an empty string on error.</div>
<div class="old-help-para">		Examples:<pre>echo tr("hello there", "ht", "HT")</pre></div>
<div class="old-help-para">		returns "Hello THere"<pre>echo tr("&lt;blob&gt;", "&lt;&gt;", "{}")</pre></div>
<div class="old-help-para">		returns "{blob}"</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetText()-&gt;tr(from, to)</pre>
trim(<code>{text}</code> [, <code>{mask}</code> [, <code>{dir}</code>]])				<a name="trim()"></a><code class="help-tag-right">trim()</code>
		Return <code>{text}</code> as a String where any character in <code>{mask}</code> is
		removed from the beginning and/or end of <code>{text}</code>.
		If <code>{mask}</code> is not given, <code>{mask}</code> is all characters up to 0x20,
		which includes Tab, space, NL and CR, plus the non-breaking
		space character 0xa0.
		The optional <code>{dir}</code> argument specifies where to remove the
		characters:
			0	remove from the beginning and end of <code>{text}</code>
			1	remove only at the beginning of <code>{text}</code>
			2	remove only at the end of <code>{text}</code>
		When omitted both ends are trimmed.
		This function deals with multibyte characters properly.
		Returns an empty string on error.</div>
<div class="old-help-para">		Examples:<pre>echo trim("   some text ")</pre></div>
<div class="old-help-para">		returns "some text"<pre>echo trim("  \r\t\t\r RESERVE \t\n\x0B\xA0") .. "_TAIL"</pre></div>
<div class="old-help-para">		returns "RESERVE_TAIL"<pre>echo trim("rm&lt;Xrm&lt;&gt;X&gt;rrm", "rm&lt;&gt;")</pre></div>
<div class="old-help-para">		returns "Xrm&lt;&gt;X" (characters in the middle are not removed)<pre>echo trim("  vim  ", " ", 2)</pre></div>
<div class="old-help-para">		returns "  vim"</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetText()-&gt;trim()</pre>
trunc(<code>{expr}</code>)							<a name="trunc()"></a><code class="help-tag-right">trunc()</code>
		Return the largest integral value with magnitude less than or
		equal to <code>{expr}</code> as a <a href="/neovim-docs-web/en/eval#Float">Float</a> (truncate towards zero).
		<code>{expr}</code> must evaluate to a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Returns 0.0 if <code>{expr}</code> is not a <a href="/neovim-docs-web/en/eval#Float">Float</a> or a <a href="/neovim-docs-web/en/eval#Number">Number</a>.
		Examples:<pre>echo trunc(1.456)</pre></div>
<div class="old-help-para">			1.0<pre>echo trunc(-5.456)</pre></div>
<div class="old-help-para">			-5.0<pre>echo trunc(4.0)</pre></div>
<div class="old-help-para">			4.0</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>Compute()-&gt;trunc()</pre>
type(<code>{expr}</code>)							<a name="type()"></a><code class="help-tag-right">type()</code>
		The result is a Number representing the type of <code>{expr}</code>.
		Instead of using the number directly, it is better to use the
		v:t_ variable that has the value:
		        Number:     0 (<a href="/neovim-docs-web/en/eval#v%3At_number">v:t_number</a>)
			String:     1 (<a href="/neovim-docs-web/en/eval#v%3At_string">v:t_string</a>)
			Funcref:    2 (<a href="/neovim-docs-web/en/eval#v%3At_func">v:t_func</a>)
			List:       3 (<a href="/neovim-docs-web/en/eval#v%3At_list">v:t_list</a>)
			Dictionary: 4 (<a href="/neovim-docs-web/en/eval#v%3At_dict">v:t_dict</a>)
			Float:      5 (<a href="/neovim-docs-web/en/eval#v%3At_float">v:t_float</a>)
			Boolean:    6 (<a href="/neovim-docs-web/en/eval#v%3Atrue">v:true</a> and <a href="/neovim-docs-web/en/eval#v%3Afalse">v:false</a>)
			Null:       7 (<a href="/neovim-docs-web/en/eval#v%3Anull">v:null</a>)
			Blob:      10 (<a href="/neovim-docs-web/en/eval#v%3At_blob">v:t_blob</a>)
		For backward compatibility, this method can be used:<pre>:if type(myvar) == type(0)
:if type(myvar) == type("")
:if type(myvar) == type(function("tr"))
:if type(myvar) == type([])
:if type(myvar) == type({})
:if type(myvar) == type(0.0)
:if type(myvar) == type(v:true)</pre></div>
<div class="old-help-para">		In place of checking for <a href="/neovim-docs-web/en/eval#v%3Anull">v:null</a> type it is better to check
		for <a href="/neovim-docs-web/en/eval#v%3Anull">v:null</a> directly as it is the only value of this type:<pre>:if myvar is v:null</pre></div>
<div class="old-help-para">               To check if the v:t_ variables exist use this:<pre>:if exists('v:t_number')</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>mylist-&gt;type()</pre>
undofile(<code>{name}</code>)					<a name="undofile()"></a><code class="help-tag-right">undofile()</code>
		Return the name of the undo file that would be used for a file
		with name <code>{name}</code> when writing.  This uses the <a href="/neovim-docs-web/en/options#'undodir'">'undodir'</a>
		option, finding directories that exist.  It does not check if
		the undo file exists.
		<code>{name}</code> is always expanded to the full path, since that is what
		is used internally.
		If <code>{name}</code> is empty undofile() returns an empty string, since a
		buffer without a file name will not write an undo file.
		Useful in combination with <a href="/neovim-docs-web/en/undo#%3Awundo">:wundo</a> and <a href="/neovim-docs-web/en/undo#%3Arundo">:rundo</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetFilename()-&gt;undofile()</pre>
undotree()						<a name="undotree()"></a><code class="help-tag-right">undotree()</code>
		Return the current state of the undo tree in a dictionary with
		the following items:
		  "seq_last"	The highest undo sequence number used.
		  "seq_cur"	The sequence number of the current position in
				the undo tree.  This differs from "seq_last"
				when some changes were undone.
		  "time_cur"	Time last used for <a href="/neovim-docs-web/en/undo#%3Aearlier">:earlier</a> and related
				commands.  Use <a href="/neovim-docs-web/en/builtin#strftime()">strftime()</a> to convert to
				something readable.
		  "save_last"	Number of the last file write.  Zero when no
				write yet.
		  "save_cur"	Number of the current position in the undo
				tree.
		  "synced"	Non-zero when the last undo block was synced.
				This happens when waiting from input from the
				user.  See <a href="/neovim-docs-web/en/undo#undo-blocks">undo-blocks</a>.
		  "entries"	A list of dictionaries with information about
				undo blocks.</div>
<div class="old-help-para">		The first item in the "entries" list is the oldest undo item.
		Each List item is a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> with these items:
		  "seq"		Undo sequence number.  Same as what appears in
				<a href="/neovim-docs-web/en/undo#%3Aundolist">:undolist</a>.
		  "time"	Timestamp when the change happened.  Use
				<a href="/neovim-docs-web/en/builtin#strftime()">strftime()</a> to convert to something readable.
		  "newhead"	Only appears in the item that is the last one
				that was added.  This marks the last change
				and where further changes will be added.
		  "curhead"	Only appears in the item that is the last one
				that was undone.  This marks the current
				position in the undo tree, the block that will
				be used by a redo command.  When nothing was
				undone after the last change this item will
				not appear anywhere.
		  "save"	Only appears on the last block before a file
				write.  The number is the write count.  The
				first write has number 1, the last one the
				"save_last" mentioned above.
		  "alt"		Alternate entry.  This is again a List of undo
				blocks.  Each item may again have an "alt"
				item.</div>
<div class="old-help-para">uniq(<code>{list}</code> [, <code>{func}</code> [, <code>{dict}</code>]])			<a name="uniq()"></a><code class="help-tag-right">uniq()</code> <a name="E882"></a><code class="help-tag">E882</code>
		Remove second and succeeding copies of repeated adjacent
		<code>{list}</code> items in-place.  Returns <code>{list}</code>.  If you want a list
		to remain unmodified make a copy first:<pre>:let newlist = uniq(copy(mylist))</pre></div>
<div class="old-help-para">		The default compare function uses the string representation of
		each item.  For the use of <code>{func}</code> and <code>{dict}</code> see <a href="/neovim-docs-web/en/builtin#sort()">sort()</a>.</div>
<div class="old-help-para">		Returns zero if <code>{list}</code> is not a <a href="/neovim-docs-web/en/eval#List">List</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>mylist-&gt;uniq()</pre>
values(<code>{dict}</code>)						<a name="values()"></a><code class="help-tag-right">values()</code>
		Return a <a href="/neovim-docs-web/en/eval#List">List</a> with all the values of <code>{dict}</code>.  The <a href="/neovim-docs-web/en/eval#List">List</a> is
		in arbitrary order.  Also see <a href="/neovim-docs-web/en/builtin#items()">items()</a> and <a href="/neovim-docs-web/en/builtin#keys()">keys()</a>.
		Returns zero if <code>{dict}</code> is not a <a href="/neovim-docs-web/en/eval#Dict">Dict</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>mydict-&gt;values()</pre>
virtcol(<code>{expr}</code>)						<a name="virtcol()"></a><code class="help-tag-right">virtcol()</code>
		The result is a Number, which is the screen column of the file
		position given with <code>{expr}</code>.  That is, the last screen position
		occupied by the character at that position, when the screen
		would be of unlimited width.  When there is a <code>&lt;Tab&gt;</code> at the
		position, the returned Number will be the column at the end of
		the <code>&lt;Tab&gt;</code>.  For example, for a <code>&lt;Tab&gt;</code> in column 1, with <a href="/neovim-docs-web/en/options#'ts'">'ts'</a>
		set to 8, it returns 8. <a href="/neovim-docs-web/en/syntax#conceal">conceal</a> is ignored.
		For the byte position use <a href="/neovim-docs-web/en/builtin#col()">col()</a>.
		For the use of <code>{expr}</code> see <a href="/neovim-docs-web/en/builtin#col()">col()</a>.
		When <a href="/neovim-docs-web/en/options#'virtualedit'">'virtualedit'</a> is used <code>{expr}</code> can be [lnum, col, off], where
		"off" is the offset in screen columns from the start of the
		character.  E.g., a position within a <code>&lt;Tab&gt;</code> or after the last
		character.  When "off" is omitted zero is used.
		When Virtual editing is active in the current mode, a position
		beyond the end of the line can be returned. <a href="/neovim-docs-web/en/options#'virtualedit'">'virtualedit'</a>
		The accepted positions are:
		    .	    the cursor position
		    $	    the end of the cursor line (the result is the
			    number of displayed characters in the cursor line
			    plus one)
		    'x	    position of mark x (if the mark is not set, 0 is
			    returned)
		    v       In Visual mode: the start of the Visual area (the
			    cursor is the end).  When not in Visual mode
			    returns the cursor position.  Differs from <a href="/neovim-docs-web/en/motion#'%3C">'&lt;</a> in
			    that it's updated right away.
		Note that only marks in the current file can be used.
		Examples:<pre>virtcol(".")           with text "foo^Lbar", with cursor on the "^L", returns 5
virtcol("$")           with text "foo^Lbar", returns 9
virtcol("'t")    with text "          there", with 't at 'h', returns 6</pre></div>
<div class="old-help-para">		The first column is 1.  0 is returned for an error.
		A more advanced example that echoes the maximum length of
		all lines:<pre>echo max(map(range(1, line('$')), "virtcol([v:val, '$'])"))</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetPos()-&gt;virtcol()</pre>
virtcol2col(<code>{winid}</code>, <code>{lnum}</code>, <code>{col}</code>)			<a name="virtcol2col()"></a><code class="help-tag-right">virtcol2col()</code>
		The result is a Number, which is the byte index of the
		character in window <code>{winid}</code> at buffer line <code>{lnum}</code> and virtual
		column <code>{col}</code>.</div>
<div class="old-help-para">		If <code>{col}</code> is greater than the last virtual column in line
		<code>{lnum}</code>, then the byte index of the character at the last
		virtual column is returned.</div>
<div class="old-help-para">		The <code>{winid}</code> argument can be the window number or the
		<a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>. If this is zero, then the current window is used.</div>
<div class="old-help-para">		Returns -1 if the window <code>{winid}</code> doesn't exist or the buffer
		line <code>{lnum}</code> or virtual column <code>{col}</code> is invalid.</div>
<div class="old-help-para">		See also <a href="/neovim-docs-web/en/builtin#screenpos()">screenpos()</a>, <a href="/neovim-docs-web/en/builtin#virtcol()">virtcol()</a> and <a href="/neovim-docs-web/en/builtin#col()">col()</a>.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetWinid()-&gt;virtcol2col(lnum, col)</pre>
visualmode([{expr}])						<a name="visualmode()"></a><code class="help-tag-right">visualmode()</code>
		The result is a String, which describes the last Visual mode
		used in the current buffer.  Initially it returns an empty
		string, but once Visual mode has been used, it returns "v",
		"V", or "&lt;CTRL-V&gt;" (a single <code>CTRL-V</code> character) for
		character-wise, line-wise, or block-wise Visual mode
		respectively.
		Example:<pre>:exe "normal " .. visualmode()</pre></div>
<div class="old-help-para">		This enters the same Visual mode as before.  It is also useful
		in scripts if you wish to act differently depending on the
		Visual mode that was used.
		If Visual mode is active, use <a href="/neovim-docs-web/en/builtin#mode()">mode()</a> to get the Visual mode
		(e.g., in a <a href="/neovim-docs-web/en/map#%3Avmap">:vmap</a>).
		If <code>{expr}</code> is supplied and it evaluates to a non-zero Number or
		a non-empty String, then the Visual mode will be cleared and
		the old value is returned.  See <a href="/neovim-docs-web/en/eval#non-zero-arg">non-zero-arg</a>.</div>
<div class="old-help-para">wait(<code>{timeout}</code>, <code>{condition}</code> [, <code>{interval}</code>])			<a name="wait()"></a><code class="help-tag-right">wait()</code>
		Waits until <code>{condition}</code> evaluates to <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a>, where <code>{condition}</code>
		is a <a href="/neovim-docs-web/en/eval#Funcref">Funcref</a> or <a href="/neovim-docs-web/en/eval#string">string</a> containing an expression.</div>
<div class="old-help-para">		<code>{timeout}</code> is the maximum waiting time in milliseconds, -1
		means forever.</div>
<div class="old-help-para">		Condition is evaluated on user events, internal events, and
		every <code>{interval}</code> milliseconds (default: 200).</div>
<div class="old-help-para">		Returns a status integer:
			0 if the condition was satisfied before timeout
			-1 if the timeout was exceeded
			-2 if the function was interrupted (by <a href="/neovim-docs-web/en/pattern#CTRL-C">CTRL-C</a>)
			-3 if an error occurred</div>
<div class="old-help-para">wildmenumode()					<a name="wildmenumode()"></a><code class="help-tag-right">wildmenumode()</code>
		Returns <a href="/neovim-docs-web/en/eval#TRUE">TRUE</a> when the wildmenu is active and <a href="/neovim-docs-web/en/eval#FALSE">FALSE</a>
		otherwise.  See <a href="/neovim-docs-web/en/options#'wildmenu'">'wildmenu'</a> and <a href="/neovim-docs-web/en/options#'wildmode'">'wildmode'</a>.
		This can be used in mappings to handle the <a href="/neovim-docs-web/en/options#'wildcharm'">'wildcharm'</a> option
		gracefully. (Makes only sense with <a href="/neovim-docs-web/en/map#mapmode-c">mapmode-c</a> mappings).</div>
<div class="old-help-para">		For example to make <code>&lt;c-j&gt;</code> work like <code>&lt;down&gt;</code> in wildmode, use:<pre>:cnoremap &lt;expr&gt; &lt;C-j&gt; wildmenumode() ? "\&lt;Down&gt;\&lt;Tab&gt;" : "\&lt;c-j&gt;"</pre></div>
<div class="old-help-para">		(Note, this needs the <a href="/neovim-docs-web/en/options#'wildcharm'">'wildcharm'</a> option set appropriately).</div>
<div class="old-help-para">win_execute(<code>{id}</code>, <code>{command}</code> [, <code>{silent}</code>])		<a name="win_execute()"></a><code class="help-tag-right">win_execute()</code>
		Like <code>execute()</code> but in the context of window <code>{id}</code>.
		The window will temporarily be made the current window,
		without triggering autocommands or changing directory.  When
		executing <code>{command}</code> autocommands will be triggered, this may
		have unexpected side effects.  Use <a href="/neovim-docs-web/en/autocmd#%3Anoautocmd">:noautocmd</a> if needed.
		Example:<pre>call win_execute(winid, 'syntax enable')</pre></div>
<div class="old-help-para">		Doing the same with <code>setwinvar()</code> would not trigger
		autocommands and not actually show syntax highlighting.</div>
<div class="old-help-para">		When window <code>{id}</code> does not exist then no error is given and
		an empty string is returned.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>, the base is passed as the
		second argument:<pre>GetCommand()-&gt;win_execute(winid)</pre>
win_findbuf(<code>{bufnr}</code>)					<a name="win_findbuf()"></a><code class="help-tag-right">win_findbuf()</code>
		Returns a <a href="/neovim-docs-web/en/eval#List">List</a> with <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>s for windows that contain
		buffer <code>{bufnr}</code>.  When there is none the list is empty.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetBufnr()-&gt;win_findbuf()</pre>
win_getid([{win} [, <code>{tab}</code>]])				<a name="win_getid()"></a><code class="help-tag-right">win_getid()</code>
		Get the <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a> for the specified window.
		When <code>{win}</code> is missing use the current window.
		With <code>{win}</code> this is the window number.  The top window has
		number 1.
		Without <code>{tab}</code> use the current tab, otherwise the tab with
		number <code>{tab}</code>.  The first tab has number one.
		Return zero if the window cannot be found.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetWinnr()-&gt;win_getid()</pre>
win_gettype([{nr}])					<a name="win_gettype()"></a><code class="help-tag-right">win_gettype()</code>
		Return the type of the window:
			"autocmd"	autocommand window. Temporary window
					used to execute autocommands.
			"command"	command-line window <a href="/neovim-docs-web/en/cmdline#cmdwin">cmdwin</a>
			(empty)		normal window
			"loclist"	<a href="/neovim-docs-web/en/quickfix#location-list-window">location-list-window</a>
			"popup"		floating window <a href="/neovim-docs-web/en/api#api-floatwin">api-floatwin</a>
			"preview"	preview window <a href="/neovim-docs-web/en/windows#preview-window">preview-window</a>
			"quickfix"	<a href="/neovim-docs-web/en/quickfix#quickfix-window">quickfix-window</a>
			"unknown"	window <code>{nr}</code> not found</div>
<div class="old-help-para">		When <code>{nr}</code> is omitted return the type of the current window.
		When <code>{nr}</code> is given return the type of this window by number or
		<a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>.</div>
<div class="old-help-para">		Also see the <a href="/neovim-docs-web/en/options#'buftype'">'buftype'</a> option.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetWinid()-&gt;win_gettype()</pre></div>
<div class="old-help-para">win_gotoid(<code>{expr}</code>)					<a name="win_gotoid()"></a><code class="help-tag-right">win_gotoid()</code>
		Go to window with ID <code>{expr}</code>.  This may also change the current
		tabpage.
		Return TRUE if successful, FALSE if the window cannot be found.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetWinid()-&gt;win_gotoid()</pre>
win_id2tabwin(<code>{expr}</code>)					<a name="win_id2tabwin()"></a><code class="help-tag-right">win_id2tabwin()</code>
		Return a list with the tab number and window number of window
		with ID <code>{expr}</code>: [tabnr, winnr].
		Return [0, 0] if the window cannot be found.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetWinid()-&gt;win_id2tabwin()</pre>
win_id2win(<code>{expr}</code>)					<a name="win_id2win()"></a><code class="help-tag-right">win_id2win()</code>
		Return the window number of window with ID <code>{expr}</code>.
		Return 0 if the window cannot be found in the current tabpage.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetWinid()-&gt;win_id2win()</pre>
win_move_separator(<code>{nr}</code>, <code>{offset}</code>)			<a name="win_move_separator()"></a><code class="help-tag-right">win_move_separator()</code>
		Move window <code>{nr}</code>'s vertical separator (i.e., the right border)
		by <code>{offset}</code> columns, as if being dragged by the mouse. <code>{nr}</code>
		can be a window number or <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>. A positive <code>{offset}</code>
		moves right and a negative <code>{offset}</code> moves left. Moving a
		window's vertical separator will change the width of the
		window and the width of other windows adjacent to the vertical
		separator. The magnitude of movement may be smaller than
		specified (e.g., as a consequence of maintaining
		<a href="/neovim-docs-web/en/options#'winminwidth'">'winminwidth'</a>). Returns TRUE if the window can be found and
		FALSE otherwise.
		This will fail for the rightmost window and a full-width
		window, since it has no separator on the right.
		Only works for the current tab page. <a name="E1308"></a><code class="help-tag">E1308</code></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetWinnr()-&gt;win_move_separator(offset)</pre>
win_move_statusline(<code>{nr}</code>, <code>{offset}</code>)			<a name="win_move_statusline()"></a><code class="help-tag-right">win_move_statusline()</code>
		Move window <code>{nr}</code>'s status line (i.e., the bottom border) by
		<code>{offset}</code> rows, as if being dragged by the mouse. <code>{nr}</code> can be a
		window number or <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>. A positive <code>{offset}</code> moves down
		and a negative <code>{offset}</code> moves up. Moving a window's status
		line will change the height of the window and the height of
		other windows adjacent to the status line. The magnitude of
		movement may be smaller than specified (e.g., as a consequence
		of maintaining <a href="/neovim-docs-web/en/options#'winminheight'">'winminheight'</a>). Returns TRUE if the window can
		be found and FALSE otherwise.
		Only works for the current tab page.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetWinnr()-&gt;win_move_statusline(offset)</pre>
win_screenpos(<code>{nr}</code>)					<a name="win_screenpos()"></a><code class="help-tag-right">win_screenpos()</code>
		Return the screen position of window <code>{nr}</code> as a list with two
		numbers: [row, col].  The first window always has position
		[1, 1], unless there is a tabline, then it is [2, 1].
		<code>{nr}</code> can be the window number or the <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>.  Use zero
		for the current window.
		Returns [0, 0] if the window cannot be found in the current
		tabpage.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetWinid()-&gt;win_screenpos()</pre></div>
<div class="old-help-para">win_splitmove(<code>{nr}</code>, <code>{target}</code> [, <code>{options}</code>])		<a name="win_splitmove()"></a><code class="help-tag-right">win_splitmove()</code>
		Move the window <code>{nr}</code> to a new split of the window <code>{target}</code>.
		This is similar to moving to <code>{target}</code>, creating a new window
		using <a href="/neovim-docs-web/en/windows#%3Asplit">:split</a> but having the same contents as window <code>{nr}</code>, and
		then closing <code>{nr}</code>.</div>
<div class="old-help-para">		Both <code>{nr}</code> and <code>{target}</code> can be window numbers or <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>s.
		Both must be in the current tab page.</div>
<div class="old-help-para">		Returns zero for success, non-zero for failure.</div>
<div class="old-help-para">		<code>{options}</code> is a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> with the following optional entries:
		  "vertical"	When TRUE, the split is created vertically,
				like with <a href="/neovim-docs-web/en/windows#%3Avsplit">:vsplit</a>.
		  "rightbelow"	When TRUE, the split is made below or to the
				right (if vertical).  When FALSE, it is done
				above or to the left (if vertical).  When not
				present, the values of <a href="/neovim-docs-web/en/options#'splitbelow'">'splitbelow'</a> and
				<a href="/neovim-docs-web/en/options#'splitright'">'splitright'</a> are used.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetWinid()-&gt;win_splitmove(target)</pre></div>
<div class="old-help-para">							<a name="winbufnr()"></a><code class="help-tag-right">winbufnr()</code>
winbufnr(<code>{nr}</code>)	The result is a Number, which is the number of the buffer
		associated with window <code>{nr}</code>.  <code>{nr}</code> can be the window number or
		the <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>.
		When <code>{nr}</code> is zero, the number of the buffer in the current
		window is returned.
		When window <code>{nr}</code> doesn't exist, -1 is returned.
		Example:<pre>:echo "The file in the current window is " .. bufname(winbufnr(0))</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>FindWindow()-&gt;winbufnr()-&gt;bufname()</pre></div>
<div class="old-help-para">							<a name="wincol()"></a><code class="help-tag-right">wincol()</code>
wincol()	The result is a Number, which is the virtual column of the
		cursor in the window.  This is counting screen cells from the
		left side of the window.  The leftmost column is one.</div>
<div class="old-help-para">							<a name="windowsversion()"></a><code class="help-tag-right">windowsversion()</code>
windowsversion()
		The result is a String.  For MS-Windows it indicates the OS
		version.  E.g, Windows 10 is "10.0", Windows 8 is "6.2",
		Windows XP is "5.1".  For non-MS-Windows systems the result is
		an empty string.</div>
<div class="old-help-para">winheight(<code>{nr}</code>)						<a name="winheight()"></a><code class="help-tag-right">winheight()</code>
		The result is a Number, which is the height of window <code>{nr}</code>.
		<code>{nr}</code> can be the window number or the <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>.
		When <code>{nr}</code> is zero, the height of the current window is
		returned.  When window <code>{nr}</code> doesn't exist, -1 is returned.
		An existing window always has a height of zero or more.
		This excludes any window toolbar line.
		Examples:<pre>:echo "The current window has " .. winheight(0) .. " lines."</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetWinid()-&gt;winheight()</pre></div>
<div class="old-help-para">winlayout([{tabnr}])					<a name="winlayout()"></a><code class="help-tag-right">winlayout()</code>
		The result is a nested List containing the layout of windows
		in a tabpage.</div>
<div class="old-help-para">		Without <code>{tabnr}</code> use the current tabpage, otherwise the tabpage
		with number <code>{tabnr}</code>. If the tabpage <code>{tabnr}</code> is not found,
		returns an empty list.</div>
<div class="old-help-para">		For a leaf window, it returns:
			["leaf", <code>{winid}</code>]
		For horizontally split windows, which form a column, it
		returns:
			["col", [{nested list of windows}]]
		For vertically split windows, which form a row, it returns:
			["row", [{nested list of windows}]]</div>
<div class="old-help-para">		Example:<pre>" Only one window in the tab page
:echo winlayout()
['leaf', 1000]
" Two horizontally split windows
:echo winlayout()
['col', [['leaf', 1000], ['leaf', 1001]]]
" The second tab page, with three horizontally split
" windows, with two vertically split windows in the
" middle window
:echo winlayout(2)
['col', [['leaf', 1002], ['row', [['leaf', 1003],
                    ['leaf', 1001]]], ['leaf', 1000]]]</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetTabnr()-&gt;winlayout()</pre></div>
<div class="old-help-para">							<a name="winline()"></a><code class="help-tag-right">winline()</code>
winline()	The result is a Number, which is the screen line of the cursor
		in the window.  This is counting screen lines from the top of
		the window.  The first line is one.
		If the cursor was moved the view on the file will be updated
		first, this may cause a scroll.</div>
<div class="old-help-para">							<a name="winnr()"></a><code class="help-tag-right">winnr()</code>
winnr([{arg}])	The result is a Number, which is the number of the current
		window.  The top window has number 1.
		Returns zero for a popup window.</div>
<div class="old-help-para">		The optional argument <code>{arg}</code> supports the following values:
			$	the number of the last window (the window
				count).
			#	the number of the last accessed window (where
				<a href="/neovim-docs-web/en/windows#CTRL-W_p">CTRL-W_p</a> goes to).  If there is no previous
				window or it is in another tab page 0 is
				returned.
			<code>{N}</code>j	the number of the Nth window below the
				current window (where <a href="/neovim-docs-web/en/windows#CTRL-W_j">CTRL-W_j</a> goes to).
			<code>{N}</code>k	the number of the Nth window above the current
				window (where <a href="/neovim-docs-web/en/windows#CTRL-W_k">CTRL-W_k</a> goes to).
			<code>{N}</code>h	the number of the Nth window left of the
				current window (where <a href="/neovim-docs-web/en/windows#CTRL-W_h">CTRL-W_h</a> goes to).
			<code>{N}</code>l	the number of the Nth window right of the
				current window (where <a href="/neovim-docs-web/en/windows#CTRL-W_l">CTRL-W_l</a> goes to).
		The number can be used with <a href="/neovim-docs-web/en/windows#CTRL-W_w">CTRL-W_w</a> and ":wincmd w"
		<a href="/neovim-docs-web/en/windows#%3Awincmd">:wincmd</a>.
		When <code>{arg}</code> is invalid an error is given and zero is returned.
		Also see <a href="/neovim-docs-web/en/builtin#tabpagewinnr()">tabpagewinnr()</a> and <a href="/neovim-docs-web/en/builtin#win_getid()">win_getid()</a>.
		Examples:<pre>let window_count = winnr('$')
let prev_window = winnr('#')
let wnum = winnr('3k')</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetWinval()-&gt;winnr()</pre></div>
<div class="old-help-para">							<a name="winrestcmd()"></a><code class="help-tag-right">winrestcmd()</code>
winrestcmd()	Returns a sequence of <a href="/neovim-docs-web/en/windows#%3Aresize">:resize</a> commands that should restore
		the current window sizes.  Only works properly when no windows
		are opened or closed and the current window and tab page is
		unchanged.
		Example:<pre>:let cmd = winrestcmd()
:call MessWithWindowSizes()
:exe cmd</pre></div>
<div class="old-help-para">							<a name="winrestview()"></a><code class="help-tag-right">winrestview()</code>
winrestview(<code>{dict}</code>)
		Uses the <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> returned by <a href="/neovim-docs-web/en/builtin#winsaveview()">winsaveview()</a> to restore
		the view of the current window.
		Note: The <code>{dict}</code> does not have to contain all values, that are
		returned by <a href="/neovim-docs-web/en/builtin#winsaveview()">winsaveview()</a>. If values are missing, those
		settings won't be restored. So you can use:<pre>:call winrestview({'curswant': 4})</pre></div>
<div class="old-help-para">		This will only set the curswant value (the column the cursor
		wants to move on vertical movements) of the cursor to column 5
		(yes, that is 5), while all other settings will remain the
		same. This is useful, if you set the cursor position manually.</div>
<div class="old-help-para">		If you have changed the values the result is unpredictable.
		If the window size changed the result won't be the same.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetView()-&gt;winrestview()</pre></div>
<div class="old-help-para">							<a name="winsaveview()"></a><code class="help-tag-right">winsaveview()</code>
winsaveview()	Returns a <a href="/neovim-docs-web/en/eval#Dictionary">Dictionary</a> that contains information to restore
		the view of the current window.  Use <a href="/neovim-docs-web/en/builtin#winrestview()">winrestview()</a> to
		restore the view.
		This is useful if you have a mapping that jumps around in the
		buffer and you want to go back to the original view.
		This does not save fold information.  Use the <a href="/neovim-docs-web/en/options#'foldenable'">'foldenable'</a>
		option to temporarily switch off folding, so that folds are
		not opened when moving around. This may have side effects.
		The return value includes:
			lnum		cursor line number
			col		cursor column (Note: the first column
					zero, as opposed to what getpos()
					returns)
			coladd		cursor column offset for <a href="/neovim-docs-web/en/options#'virtualedit'">'virtualedit'</a>
			curswant	column for vertical movement
			topline		first line in the window
			topfill		filler lines, only in diff mode
			leftcol		first column displayed; only used when
					<a href="/neovim-docs-web/en/options#'wrap'">'wrap'</a> is off
			skipcol		columns skipped
		Note that no option values are saved.</div>
<div class="old-help-para">winwidth(<code>{nr}</code>)						<a name="winwidth()"></a><code class="help-tag-right">winwidth()</code>
		The result is a Number, which is the width of window <code>{nr}</code>.
		<code>{nr}</code> can be the window number or the <a href="/neovim-docs-web/en/windows#window-ID">window-ID</a>.
		When <code>{nr}</code> is zero, the width of the current window is
		returned.  When window <code>{nr}</code> doesn't exist, -1 is returned.
		An existing window always has a width of zero or more.
		Examples:<pre>:echo "The current window has " .. winwidth(0) .. " columns."
:if winwidth(0) &lt;= 50
:  50 wincmd |
:endif</pre></div>
<div class="old-help-para">		For getting the terminal or screen size, see the <a href="/neovim-docs-web/en/options#'columns'">'columns'</a>
		option.</div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetWinid()-&gt;winwidth()</pre>
wordcount()						<a name="wordcount()"></a><code class="help-tag-right">wordcount()</code>
		The result is a dictionary of byte/chars/word statistics for
		the current buffer.  This is the same info as provided by
		<a href="/neovim-docs-web/en/editing#g_CTRL-G">g_CTRL-G</a>
		The return value includes:
			bytes		Number of bytes in the buffer
			chars		Number of chars in the buffer
			words		Number of words in the buffer
			cursor_bytes    Number of bytes before cursor position
					(not in Visual mode)
			cursor_chars    Number of chars before cursor position
					(not in Visual mode)
			cursor_words    Number of words before cursor position
					(not in Visual mode)
			visual_bytes    Number of bytes visually selected
					(only in Visual mode)
			visual_chars    Number of chars visually selected
					(only in Visual mode)
			visual_words    Number of words visually selected
					(only in Visual mode)</div>
<div class="old-help-para">							<a name="writefile()"></a><code class="help-tag-right">writefile()</code>
writefile(<code>{object}</code>, <code>{fname}</code> [, <code>{flags}</code>])
		When <code>{object}</code> is a <a href="/neovim-docs-web/en/eval#List">List</a> write it to file <code>{fname}</code>.  Each list
		item is separated with a NL.  Each list item must be a String
		or Number.
		When <code>{flags}</code> contains "b" then binary mode is used: There will
		not be a NL after the last list item.  An empty item at the
		end does cause the last line in the file to end in a NL.</div>
<div class="old-help-para">		When <code>{object}</code> is a <a href="/neovim-docs-web/en/eval#Blob">Blob</a> write the bytes to file <code>{fname}</code>
		unmodified.</div>
<div class="old-help-para">		When <code>{flags}</code> contains "a" then append mode is used, lines are
		appended to the file:<pre>:call writefile(["foo"], "event.log", "a")
:call writefile(["bar"], "event.log", "a")</pre></div>
<div class="old-help-para">		When <code>{flags}</code> contains "S" fsync() call is not used, with "s"
		it is used, <a href="/neovim-docs-web/en/options#'fsync'">'fsync'</a> option applies by default. No fsync()
		means that writefile() will finish faster, but writes may be
		left in OS buffers and not yet written to disk. Such changes
		will disappear if system crashes before OS does writing.</div>
<div class="old-help-para">		All NL characters are replaced with a NUL character.
		Inserting CR characters needs to be done before passing <code>{list}</code>
		to writefile().
		An existing file is overwritten, if possible.
		When the write fails -1 is returned, otherwise 0.  There is an
		error message if the file can't be created or when writing
		fails.
		Also see <a href="/neovim-docs-web/en/builtin#readfile()">readfile()</a>.
		To copy a file byte for byte:<pre>:let fl = readfile("foo", "b")
:call writefile(fl, "foocopy", "b")</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>GetText()-&gt;writefile("thefile")</pre>
xor(<code>{expr}</code>, <code>{expr}</code>)					<a name="xor()"></a><code class="help-tag-right">xor()</code>
		Bitwise XOR on the two arguments.  The arguments are converted
		to a number.  A List, Dict or Float argument causes an error.
		Also see <code>and()</code> and <code>or()</code>.
		Example:<pre>:let bits = xor(bits, 0x80)</pre></div>
<div class="old-help-para">		Can also be used as a <a href="/neovim-docs-web/en/eval#method">method</a>:<pre>:let bits = bits-&gt;xor(0x80)</pre></div>
<div class="old-help-para"><h2 class="help-heading">3. Matching a pattern in a String<span class="help-heading-tags">			<a name="string-match"></a><span class="help-tag">string-match</span></span></h2></div>
<div class="old-help-para">This is common between several functions. A regexp pattern as explained at
<a href="/neovim-docs-web/en/pattern#pattern">pattern</a> is normally used to find a match in the buffer lines.  When a
pattern is used to find a match in a String, almost everything works in the
same way.  The difference is that a String is handled like it is one line.
When it contains a "\n" character, this is not seen as a line break for the
pattern.  It can be matched with a "\n" in the pattern, or with ".".  Example:
<pre>:let a = "aaaa\nxxxx"
:echo matchstr(a, "..\n..")
aa
xx
:echo matchstr(a, "a.x")
a
x</pre>
Don't forget that "^" will only match at the first character of the String and
"$" at the last character of the string.  They don't match after or before a
"\n".</div>

  
  