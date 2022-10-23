---
title: Tree Sitter
description: Some page
layout: ../../layouts/MainLayout.astro
---


## <a id="Nvim" class="section-title" href="#Nvim"> Map Txt</a> 

VIM REFERENCE MANUAL    by Bram Moolenaar


Key mapping, abbreviations and user-defined commands.

This subject is introduced in sections [05.3|, |24.7| and |40.1](#05.3|, |24.7| and |40.1) of the user
manual.

Type [gO](#gO) to see the table of contents.


## <a id="key-mapping mapping macro" class="section-title" href="#key-mapping mapping macro">1. Key Mapping</a> 

Key mapping is used to change the meaning of typed keys.  The most common use
is to define a sequence of commands for a function key.  Example:
```

:map <F2> a<C-R>=strftime("%c")<CR><Esc>

This appends the current date and time after the cursor (in <> notation [<>](#<>)).


### <a id=":map-commands" class="section-title" href="#:map-commands">1.1 Map Commands</a>

There are commands to enter new mappings, remove mappings and list mappings.
See [map-overview](#map-overview) for the various forms of "map" and their relationships with
modes.

{lhs}	means left-hand-side	*{lhs}*
{rhs}	means right-hand-side	*{rhs}*

:map	{lhs} {rhs}		[mapmode-nvo](#mapmode-nvo)		*:map*
:nm[ap]	{lhs} {rhs}		[mapmode-n](#mapmode-n)		*:nm* *:nmap*
:vm[ap]	{lhs} {rhs}		[mapmode-v](#mapmode-v)		*:vm* *:vmap*
:xm[ap]	{lhs} {rhs}		[mapmode-x](#mapmode-x)		*:xm* *:xmap*
:smap	{lhs} {rhs}		[mapmode-s](#mapmode-s)		    *:smap*
:om[ap]	{lhs} {rhs}		[mapmode-o](#mapmode-o)		*:om* *:omap*
:map!	{lhs} {rhs}		[mapmode-ic](#mapmode-ic)		*:map!*
:im[ap]	{lhs} {rhs}		[mapmode-i](#mapmode-i)		*:im* *:imap*
:lm[ap]	{lhs} {rhs}		[mapmode-l](#mapmode-l)		*:lm* *:lma* *:lmap*
:cm[ap]	{lhs} {rhs}		[mapmode-c](#mapmode-c)		*:cm* *:cmap*
:tma[p]	{lhs} {rhs}		[mapmode-t](#mapmode-t)		*:tma* *:tmap*
Map the key sequence {lhs} to {rhs} for the modes
where the map command applies.  The result, including
{rhs}, is then further scanned for mappings.  This
allows for nested and recursive use of mappings.
Note: Trailing spaces are included in the {rhs},
because space is a valid Normal mode command.
See [map-trailing-white](#map-trailing-white).

### <a id=":nore :norem" class="section-title" href="#:nore :norem">Note:</a>
:no[remap]  {lhs} {rhs}		[mapmode-nvo](#mapmode-nvo)	*:no*  *:noremap* *:nor*
### <a id="[mapmode-n|	:nn" class="section-title" href="#|mapmode-n](#mapmode-n|	:nn" class="section-title" href="#|mapmode-n)	:nn">:nn[oremap] {lhs} {rhs}</a>
### <a id="[mapmode-v|	:vn" class="section-title" href="#|mapmode-v](#mapmode-v|	:vn" class="section-title" href="#|mapmode-v)	:vn">:vn[oremap] {lhs} {rhs}</a>
### <a id="[mapmode-x|	:xn" class="section-title" href="#|mapmode-x](#mapmode-x|	:xn" class="section-title" href="#|mapmode-x)	:xn">:xn[oremap] {lhs} {rhs}</a>
### <a id="[mapmode-s|	:snor :snore :snoremap" class="section-title" href="#|mapmode-s](#mapmode-s|	:snor :snore :snoremap" class="section-title" href="#|mapmode-s)	:snor :snore :snoremap">:snor[emap] {lhs} {rhs}</a>
### <a id="[mapmode-o|	:ono :onoremap" class="section-title" href="#|mapmode-o](#mapmode-o|	:ono :onoremap" class="section-title" href="#|mapmode-o)	:ono :onoremap">:ono[remap] {lhs} {rhs}</a>
### <a id="[mapmode-ic|	:no! :noremap!" class="section-title" href="#|mapmode-ic](#mapmode-ic|	:no! :noremap!" class="section-title" href="#|mapmode-ic)	:no! :noremap!">:no[remap]! {lhs} {rhs}</a>
### <a id="[mapmode-i|	:ino :inor :inoremap" class="section-title" href="#|mapmode-i](#mapmode-i|	:ino :inor :inoremap" class="section-title" href="#|mapmode-i)	:ino :inor :inoremap">:ino[remap] {lhs} {rhs}</a>
### <a id="[mapmode-l|	:ln" class="section-title" href="#|mapmode-l](#mapmode-l|	:ln" class="section-title" href="#|mapmode-l)	:ln">:ln[oremap] {lhs} {rhs}</a>
### <a id="[mapmode-c|	:cno :cnor :cnoremap" class="section-title" href="#|mapmode-c](#mapmode-c|	:cno :cnor :cnoremap" class="section-title" href="#|mapmode-c)	:cno :cnor :cnoremap">:cno[remap] {lhs} {rhs}</a>
### <a id="[mapmode-t|	:tno :tnoremap" class="section-title" href="#|mapmode-t](#mapmode-t|	:tno :tnoremap" class="section-title" href="#|mapmode-t)	:tno :tnoremap">:tno[remap] {lhs} {rhs}</a>
Map the key sequence {lhs} to {rhs} for the modes
where the map command applies.  Disallow mapping of
{rhs}, to avoid nested and recursive mappings.  Often
used to redefine a command.
Note: When <Plug> appears in the {rhs} this part is
always applied even if remapping is disallowed.


:unm[ap]  {lhs}			[mapmode-nvo](#mapmode-nvo)		*:unm*  *:unmap*
:nun[map] {lhs}			[mapmode-n](#mapmode-n)		*:nun*  *:nunmap*
:vu[nmap] {lhs}			[mapmode-v](#mapmode-v)		*:vu*   *:vunmap*
:xu[nmap] {lhs}			[mapmode-x](#mapmode-x)		*:xu*   *:xunmap*
:sunm[ap] {lhs}			[mapmode-s](#mapmode-s)		*:sunm* *:sunmap*
:ou[nmap] {lhs}			[mapmode-o](#mapmode-o)		*:ou*   *:ounmap*
:unm[ap]! {lhs}			[mapmode-ic](#mapmode-ic)		*:unm!* *:unmap!*
:iu[nmap] {lhs}			[mapmode-i](#mapmode-i)		*:iu*   *:iunmap*
:lu[nmap] {lhs}			[mapmode-l](#mapmode-l)		*:lu*   *:lunmap*
:cu[nmap] {lhs}			[mapmode-c](#mapmode-c)		*:cu*   *:cun* *:cunmap*
:tunma[p] {lhs}			[mapmode-t](#mapmode-t)		*:tunma* *:tunmap*
Remove the mapping of {lhs} for the modes where the
map command applies.  The mapping may remain defined
for other modes where it applies.
It also works when {lhs} matches the {rhs} of a
mapping. This is for when an abbreviation applied.
Note: Trailing spaces are included in the {lhs}.
See [map-trailing-white](#map-trailing-white).

:mapc[lear]			[mapmode-nvo](#mapmode-nvo)		*:mapc*   *:mapclear*
:nmapc[lear]			[mapmode-n](#mapmode-n)		*:nmapc*  *:nmapclear*
:vmapc[lear]			[mapmode-v](#mapmode-v)		*:vmapc*  *:vmapclear*
:xmapc[lear]			[mapmode-x](#mapmode-x)		*:xmapc*  *:xmapclear*
:smapc[lear]			[mapmode-s](#mapmode-s)		*:smapc*  *:smapclear*
:omapc[lear]			[mapmode-o](#mapmode-o)		*:omapc*  *:omapclear*
:mapc[lear]!			[mapmode-ic](#mapmode-ic)		*:mapc!*  *:mapclear!*
:imapc[lear]			[mapmode-i](#mapmode-i)		*:imapc*  *:imapclear*
:lmapc[lear]			[mapmode-l](#mapmode-l)		*:lmapc*  *:lmapclear*
:cmapc[lear]			[mapmode-c](#mapmode-c)		*:cmapc*  *:cmapclear*
:tmapc[lear]			[mapmode-t](#mapmode-t)		*:tmapc*  *:tmapclear*
Remove ALL mappings for the modes where the map
command applies.
Use the <buffer> argument to remove buffer-local
mappings [:map-<buffer>](#:map-<buffer>)
Warning: This also removes the [default-mappings](#default-mappings).

:map				[mapmode-nvo](#mapmode-nvo)
:nm[ap]				[mapmode-n](#mapmode-n)
:vm[ap]				[mapmode-v](#mapmode-v)
:xm[ap]				[mapmode-x](#mapmode-x)
:sm[ap]				[mapmode-s](#mapmode-s)
:om[ap]				[mapmode-o](#mapmode-o)
:map!				[mapmode-ic](#mapmode-ic)
:im[ap]				[mapmode-i](#mapmode-i)
:lm[ap]				[mapmode-l](#mapmode-l)
:cm[ap]				[mapmode-c](#mapmode-c)
:tma[p]				[mapmode-t](#mapmode-t)
List all key mappings for the modes where the map
command applies.  Note that ":map" and ":map!" are
used most often, because they include the other modes.

:map    {lhs}			[mapmode-nvo](#mapmode-nvo)		*:map_l*
:nm[ap] {lhs}			[mapmode-n](#mapmode-n)		*:nmap_l*
:vm[ap] {lhs}			[mapmode-v](#mapmode-v)		*:vmap_l*
:xm[ap] {lhs}			[mapmode-x](#mapmode-x)		*:xmap_l*
:sm[ap] {lhs}			[mapmode-s](#mapmode-s)		*:smap_l*
:om[ap] {lhs}			[mapmode-o](#mapmode-o)		*:omap_l*
:map!   {lhs}			[mapmode-ic](#mapmode-ic)		*:map_l!*
:im[ap] {lhs}			[mapmode-i](#mapmode-i)		*:imap_l*
:lm[ap] {lhs}			[mapmode-l](#mapmode-l)		*:lmap_l*
:cm[ap] {lhs}			[mapmode-c](#mapmode-c)		*:cmap_l*
:tma[p] {lhs}			[mapmode-t](#mapmode-t)		*:tmap_l*
List the key mappings for the key sequences starting
with {lhs} in the modes where the map command applies.

These commands are used to map a key or key sequence to a string of
characters.  You can use this to put command sequences under function keys,
translate one key into another, etc.  See [:mkexrc](#:mkexrc) for how to save and
restore the current mappings.

### <a id="map-ambiguous" class="section-title" href="#map-ambiguous">Note:</a>
When two mappings start with the same sequence of characters, they are
ambiguous.  Example:
```
:imap aa foo
:imap aaa bar
When Vim has read "aa", it will need to get another character to be able to
decide if "aa" or "aaa" should be mapped.  This means that after typing "aa"
that mapping won't get expanded yet, Vim is waiting for another character.
If you type a space, then "foo" will get inserted, plus the space.  If you
type "a", then "bar" will get inserted.

Trailing white space ~
### <a id="map-trailing-white" class="section-title" href="#map-trailing-white">Note:</a>
This unmap command does NOT work:
```
:map @@ foo
:unmap @@ | print

Because it tries to unmap "@@ ", including the white space before the command
separator "|".  Other examples with trailing white space:
```
unmap @@ 
unmap @@     " comment

An error will be issued, which is very hard to identify, because the ending
whitespace character in `unmap @@ ` is not visible.

A generic solution is to put the command separator "|" right after the mapped
keys.  After that white space and a comment may follow:
```
unmap @@|    " comment


### <a id=":map-arguments" class="section-title" href="#:map-arguments">1.2 Special Arguments</a>

"<buffer>", "<nowait>", "<silent>", "<script>", "<expr>" and
"<unique>" can be used in any order.  They must appear right after the
command, before any other arguments.

### <a id=":map-local :map-<buffer> :map-buffer" class="section-title" href="#:map-local :map-<buffer> :map-buffer">Note:</a>
### <a id="E224 E225" class="section-title" href="#E224 E225">Note:</a>
If the first argument to one of these commands is "<buffer>" the mapping will
be effective in the current buffer only.  Example:
```
:map <buffer>  ,w  /[.,;]<CR>
Then you can map ",w" to something else in another buffer:
```
:map <buffer>  ,w  /[#&!]<CR>
The local buffer mappings are used before the global ones.  See <nowait> below
to make a short local mapping not taking effect when a longer global one
exists.
The "<buffer>" argument can also be used to clear mappings:
```
:unmap <buffer> ,w
:mapclear <buffer>
Local mappings are also cleared when a buffer is deleted, but not when it is
unloaded.  Just like local option values.
Also see [map-precedence](#map-precedence).

### <a id=":map-<nowait> :map-nowait" class="section-title" href="#:map-<nowait> :map-nowait">Note:</a>
When defining a buffer-local mapping for "," there may be a global mapping
that starts with ",".  Then you need to type another character for Vim to know
whether to use the "," mapping or the longer one.  To avoid this add the

```
nowait> argument.  Then the mapping will be used when it matches, Vim does
not wait for more characters to be typed.  However, if the characters were
already typed they are used.
Note that this works when the <nowait> mapping fully matches and is found
before any partial matches.  This works when:
- There is only one matching buffer-local mapping, since these are always
found before global mappings.
- There is another buffer-local mapping that partly matches, but it is
defined earlier (last defined mapping is found first).

### <a id=":map-<silent> :map-silent" class="section-title" href="#:map-<silent> :map-silent">Note:</a>
To define a mapping which will not be echoed on the command line, add
"<silent>" as the first argument.  Example:
```
:map <silent> ,h /Header<CR>
The search string will not be echoed when using this mapping.  Messages from
the executed command are still given though.  To shut them up too, add a
":silent" in the executed command:
```
:map <silent> ,h :exe ":silent normal /Header\r"<CR>
Prompts will still be given, e.g., for inputdialog().
Using "<silent>" for an abbreviation is possible, but will cause redrawing of
the command line to fail.

### <a id=":map-<script> :map-script" class="section-title" href="#:map-<script> :map-script">Note:</a>
If the first argument to one of these commands is "<script>" and it is used to
define a new mapping or abbreviation, the mapping will only remap characters
in the {rhs} using mappings that were defined local to a script, starting with
"<SID>".  This can be used to avoid that mappings from outside a script
interfere (e.g., when CTRL-V is remapped in mswin.vim), but do use other
mappings defined in the script.
Note: ":map <script>" and ":noremap <script>" do the same thing.  The
"<script>" overrules the command name.  Using ":noremap <script>" is
preferred, because it's clearer that remapping is (mostly) disabled.

### <a id=":map-<unique> :map-unique E226 E227" class="section-title" href="#:map-<unique> :map-unique E226 E227">Note:</a>
If the first argument to one of these commands is "<unique>" and it is used to
define a new mapping or abbreviation, the command will fail if the mapping or
abbreviation already exists.  Example:
```
:map <unique> ,w  /[#&!]<CR>
When defining a local mapping, there will also be a check if a global map
already exists which is equal.
Example of what will fail:
```
:map ,w  /[#&!]<CR>
:map <buffer> <unique> ,w  /[.,;]<CR>
If you want to map a key and then have it do what it was originally mapped to,
have a look at [maparg()](#maparg()).

### <a id=":map-<expr> :map-expression" class="section-title" href="#:map-<expr> :map-expression">Note:</a>
If the first argument to one of these commands is "<expr>" and it is used to
define a new mapping or abbreviation, the argument is an expression.  The
expression is evaluated to obtain the {rhs} that is used.  Example:
```
:inoremap <expr> . <SID>InsertDot()
The result of the s:InsertDot() function will be inserted.  It could check the
text before the cursor and start omni completion when some condition is met.
Using a script-local function is preferred, to avoid polluting the global
namespace.  Use <SID> in the RHS so that the script that the mapping was
defined in can be found.

For abbreviations [v:char](#v:char) is set to the character that was typed to trigger
the abbreviation.  You can use this to decide how to expand the {lhs}.  You
should not either insert or change the v:char.

In case you want the mapping to not do anything, you can have the expression
evaluate to an empty string.  If something changed that requires Vim to
go through the main loop (e.g. to update the display), return "\<Ignore>".
This is similar to "nothing" but makes Vim return from the loop that waits for
input.

Keep in mind that the expression may be evaluated when looking for
typeahead, before the previous command has been executed.  For example:
```
func StoreColumn()
let g:column = col('.')
return 'x'
endfunc
nnoremap <expr> x StoreColumn()
nmap ! f!x
You will notice that g:column has the value from before executing "f!",
because "x" is evaluated before "f!" is executed.
This can be solved by inserting <Ignore> before the character that is
expression-mapped:
```
nmap ! f!<Ignore>x

Be very careful about side effects!  The expression is evaluated while
obtaining characters, you may very well make the command dysfunctional.
Therefore the following is blocked for <expr> mappings:
- Changing the buffer text [textlock](#textlock).
- Editing another buffer.
- The [:normal](#:normal) command.
- Moving the cursor is allowed, but it is restored afterwards.
- If the cmdline is changed, the old text and cursor position are restored.
If you want the mapping to do any of these let the returned characters do
that. (Or use a [<Cmd>](#<Cmd>) mapping instead.)

You can use getchar(), it consumes typeahead if there is any. E.g., if you
have these mappings:
```
inoremap <expr> <C-L> nr2char(getchar())
inoremap <expr> <C-L>x "foo"
If you now type CTRL-L nothing happens yet, Vim needs the next character to
decide what mapping to use.  If you type 'x' the second mapping is used and
"foo" is inserted.  If you type any other key the first mapping is used,
getchar() gets the typed key and returns it.

Here is an example that inserts a list number that increases:
```
let counter = 0
inoremap <expr> <C-L> ListItem()
inoremap <expr> <C-R> ListReset()

func ListItem()
let g:counter += 1
return g:counter .. '. '
endfunc

func ListReset()
let g:counter = 0
return ''
endfunc

CTRL-L inserts the next number, CTRL-R resets the count.  CTRL-R returns an
empty string, so that nothing is inserted.

Note that using 0x80 as a single byte before other text does not work, it will
be seen as a special key.

### <a id="<Cmd> :map-cmd" class="section-title" href="#<Cmd> :map-cmd">Note:</a>
The <Cmd> pseudokey begins a "command mapping", which executes the command
directly (without changing modes).  Where you might use ":...<CR>" in the
{rhs} of a mapping, you can instead use "<Cmd>...<CR>".
Example:
```
noremap x <Cmd>echo mode(1)<cr>

```

This is more flexible than `:<C-U>` in visual and operator-pending mode, or
`<C-O>:` in insert-mode, because the commands are executed directly in the
current mode (instead of always going to normal-mode).  Visual-mode is
preserved, so tricks with [gv](#gv) are not needed.  Commands can be invoked
directly in cmdline-mode (which would otherwise require timer hacks).

Unlike <expr> mappings, there are no special restrictions on the <Cmd>
command: it is executed as if an (unrestricted) [autocommand](#autocommand) was invoked
or an async event event was processed.

Note:
- Because <Cmd> avoids mode-changes (unlike ":") it does not trigger
[CmdlineEnter| and |CmdlineLeave](#CmdlineEnter| and |CmdlineLeave) events. This helps performance.
- For the same reason, [keycodes](#keycodes) like <C-R><C-W> are interpreted as plain,
unmapped keys.
- The command is not echo'ed, no need for <silent>.
- The {rhs} is not subject to abbreviations nor to other mappings, even if the
mapping is recursive.
- In Visual mode  you can use `line('v')` and `col('v')` to get one end of the
Visual area, the cursor is at the other end.

### <a id="E5520" class="section-title" href="#E5520">Note:</a>

```
Cmd> commands must terminate, that is, they must be followed by <CR> in the
{rhs} of the mapping definition.  [Command-line](#Command-line) mode is never entered.


### <a id=":map-modes" class="section-title" href="#:map-modes">1.3 Mapping and Modes</a>
### <a id="mapmode-nvo mapmode-n mapmode-v mapmode-o mapmode-t" class="section-title" href="#mapmode-nvo mapmode-n mapmode-v mapmode-o mapmode-t">Note:</a>

There are seven sets of mappings
- For Normal mode: When typing commands.
- For Visual mode: When typing commands while the Visual area is highlighted.
- For Select mode: like Visual mode but typing text replaces the selection.
- For Operator-pending mode: When an operator is pending (after "d", "y", "c",
etc.).  See below: [omap-info](#omap-info).
- For Insert mode.  These are also used in Replace mode.
- For Command-line mode: When entering a ":" or "/" command.
- For Terminal mode: When typing in a [:terminal](#:terminal) buffer.

Special case: While typing a count for a command in Normal mode, mapping zero
is disabled.  This makes it possible to map zero without making it impossible
to type a count with a zero.

### <a id="map-overview map-modes" class="section-title" href="#map-overview map-modes">Note:</a>
Overview of which map command works in which mode.  More details below.
COMMANDS                    MODES ~
:map   :noremap  :unmap     Normal, Visual, Select, Operator-pending
:nmap  :nnoremap :nunmap    Normal
:vmap  :vnoremap :vunmap    Visual and Select
:smap  :snoremap :sunmap    Select
:xmap  :xnoremap :xunmap    Visual
:omap  :onoremap :ounmap    Operator-pending
:map!  :noremap! :unmap!    Insert and Command-line
:imap  :inoremap :iunmap    Insert
:lmap  :lnoremap :lunmap    Insert, Command-line, Lang-Arg
:cmap  :cnoremap :cunmap    Command-line
:tmap  :tnoremap :tunmap    Terminal

Same information in a table:
### <a id="map-table" class="section-title" href="#map-table">Note:</a>
Mode  [ Norm | Ins | Cmd | Vis | Sel | Opr | Term | Lang ](# Norm | Ins | Cmd | Vis | Sel | Opr | Term | Lang ) ~
Command        +------+-----+-----+-----+-----+-----+------+------+ ~
[nore]map      [ yes  |  -  |  -  | yes | yes | yes |  -   |  -   ](# yes  |  -  |  -  | yes | yes | yes |  -   |  -   )
n[nore]map     [ yes  |  -  |  -  |  -  |  -  |  -  |  -   |  -   ](# yes  |  -  |  -  |  -  |  -  |  -  |  -   |  -   )
[nore]map!     [  -   | yes | yes |  -  |  -  |  -  |  -   |  -   ](#  -   | yes | yes |  -  |  -  |  -  |  -   |  -   )
i[nore]map     [  -   | yes |  -  |  -  |  -  |  -  |  -   |  -   ](#  -   | yes |  -  |  -  |  -  |  -  |  -   |  -   )
c[nore]map     [  -   |  -  | yes |  -  |  -  |  -  |  -   |  -   ](#  -   |  -  | yes |  -  |  -  |  -  |  -   |  -   )
v[nore]map     [  -   |  -  |  -  | yes | yes |  -  |  -   |  -   ](#  -   |  -  |  -  | yes | yes |  -  |  -   |  -   )
x[nore]map     [  -   |  -  |  -  | yes |  -  |  -  |  -   |  -   ](#  -   |  -  |  -  | yes |  -  |  -  |  -   |  -   )
s[nore]map     [  -   |  -  |  -  |  -  | yes |  -  |  -   |  -   ](#  -   |  -  |  -  |  -  | yes |  -  |  -   |  -   )
o[nore]map     [  -   |  -  |  -  |  -  |  -  | yes |  -   |  -   ](#  -   |  -  |  -  |  -  |  -  | yes |  -   |  -   )
t[nore]map     [  -   |  -  |  -  |  -  |  -  |  -  | yes  |  -   ](#  -   |  -  |  -  |  -  |  -  |  -  | yes  |  -   )
l[nore]map     [  -   | yes | yes |  -  |  -  |  -  |  -   | yes  ](#  -   | yes | yes |  -  |  -  |  -  |  -   | yes  )


COMMANDS				      MODES ~
Normal  Visual+Select  Operator-pending ~
:map   :noremap   :unmap   :mapclear	 yes	    yes		   yes
:nmap  :nnoremap  :nunmap  :nmapclear	 yes	     -		    -
:vmap  :vnoremap  :vunmap  :vmapclear	  -	    yes		    -
:omap  :onoremap  :ounmap  :omapclear	  -	     -		   yes

:nunmap can also be used outside of a monastery.
### <a id="mapmode-x mapmode-s" class="section-title" href="#mapmode-x mapmode-s">Note:</a>
Some commands work both in Visual and Select mode, some in only one.  Note
that quite often "Visual" is mentioned where both Visual and Select mode
apply. [Select-mode-mapping](#Select-mode-mapping)
NOTE: Mapping a printable character in Select mode may confuse the user.  It's
better to explicitly use :xmap and :smap for printable characters.  Or use
:sunmap after defining the mapping.

COMMANDS				      MODES ~
Visual    Select ~
:vmap  :vnoremap  :vunmap  :vmapclear	    yes      yes
:xmap  :xnoremap  :xunmap  :xmapclear	    yes       -
:smap  :snoremap  :sunmap  :smapclear	    -	     yes

### <a id="mapmode-ic mapmode-i mapmode-c mapmode-l" class="section-title" href="#mapmode-ic mapmode-i mapmode-c mapmode-l">Note:</a>
Some commands work both in Insert mode and Command-line mode, some not:

COMMANDS				      MODES ~
Insert  Command-line	Lang-Arg ~
:map!  :noremap!  :unmap!  :mapclear!	    yes	       yes	   -
:imap  :inoremap  :iunmap  :imapclear	    yes		-	   -
:cmap  :cnoremap  :cunmap  :cmapclear	     -	       yes	   -
:lmap  :lnoremap  :lunmap  :lmapclear	    yes*       yes*	  yes*

* If 'iminsert' is 1, see [language-mapping](#language-mapping) below.

The original Vi did not have separate mappings for
Normal/Visual/Operator-pending mode and for Insert/Command-line mode.
Therefore the ":map" and ":map!" commands enter and display mappings for
several modes.  In Vim you can use the ":nmap", ":vmap", ":omap", ":cmap" and
":imap" commands to enter mappings for each mode separately.

### <a id="omap-info" class="section-title" href="#omap-info">Note:</a>
Operator-pending mappings can be used to define a movement command that can be
used with any operator.  Simple example:
```
:omap { w
makes "y{" work like "yw" and "d{" like "dw".

To ignore the starting cursor position and select different text, you can have
the omap start Visual mode to select the text to be operated upon.  Example
that operates on a function name in the current line:
```
onoremap <silent> F :<C-U>normal! 0f(hviw<CR>
The CTRL-U (<C-U>) is used to remove the range that Vim may insert.  The
Normal mode commands find the first '(' character and select the first word
before it.  That usually is the function name.

To enter a mapping for Normal and Visual mode, but not Operator-pending mode,
first define it for all three modes, then unmap it for
Operator-pending mode:
```
:map    xx something-difficult
:ounmap xx

Likewise for a mapping for Visual and Operator-pending mode or Normal and
Operator-pending mode.

### <a id="language-mapping" class="section-title" href="#language-mapping">Note:</a>
":lmap" defines a mapping that applies to:
- Insert mode
- Command-line mode
- when entering a search pattern
- the argument of the commands that accept a text character, such as "r" and
"f"
- for the input() line
Generally: Whenever a character is to be typed that is part of the text in the
buffer, not a Vim command character.  "Lang-Arg" isn't really another mode,
it's just used here for this situation.
The simplest way to load a set of related language mappings is by using the
'keymap' option.  See [45.5](#45.5).
In Insert mode and in Command-line mode the mappings can be disabled with
the CTRL-^ command [i_CTRL-^| |c_CTRL-^](#i_CTRL-^| |c_CTRL-^). These commands change the value of
the 'iminsert' option.  When starting to enter a normal command line (not a
search pattern) the mappings are disabled until a CTRL-^ is typed.  The state
last used is remembered for Insert mode and Search patterns separately.  The
state for Insert mode is also used when typing a character as an argument to
command like "f" or "t".
Language mappings will never be applied to already mapped characters.  They
are only used for typed characters.  This assumes that the language mapping
was already done when typing the mapping. Correspondingly, language mappings
are applied when recording macros, rather than when applying them.


### <a id="map-listing" class="section-title" href="#map-listing">1.4 Listing Mappings</a>

When listing mappings the characters in the first two columns are:

CHAR	MODE	~

```
Space>	Normal, Visual, Select and Operator-pending
n	Normal
v	Visual and Select
s	Select
x	Visual
o	Operator-pending
!	Insert and Command-line
i	Insert
l	":lmap" mappings for Insert, Command-line and Lang-Arg
c	Command-line
t	Terminal-Job

Just before the {rhs} a special character can appear:
*	indicates that it is not remappable
&	indicates that only script-local mappings are remappable
@	indicates a buffer-local mapping

Everything from the first non-blank after {lhs} up to the end of the line
(or '|') is considered to be part of {rhs}.  This allows the {rhs} to end
with a space.

Note: When using mappings for Visual mode, you can use the "'<" mark, which
is the start of the last selected Visual area in the current buffer ['<](#'<).

The [:filter](#:filter) command can be used to select what mappings to list.  The
pattern is matched against the {lhs} and {rhs} in the raw form.  If a
description was added using [nvim_set_keymap()| or |nvim_buf_set_keymap()](#nvim_set_keymap()| or |nvim_buf_set_keymap())
then the pattern is also matched against it.

### <a id=":map-verbose" class="section-title" href="#:map-verbose">Note:</a>
When 'verbose' is non-zero, listing a key map will also display where it was
last defined.  Example:
```

:verbose map <C-W>*
### <a id="<C-W>" class="section-title" href="#<C-W>">	n</a>
Last set from ~/.config/nvim/init.vim

See [:verbose-cmd](#:verbose-cmd) for more information.


### <a id=":map-special-keys" class="section-title" href="#:map-special-keys">1.5 Mapping Special Keys</a>

There are two ways to map a special key:
1. The Vi-compatible method: Map the key code.  Often this is a sequence that
starts with <Esc>.  To enter a mapping like this you type ":map " and then
you have to type CTRL-V before hitting the function key.  Note that when
the key code for the key is in the [terminfo](#terminfo) entry, it will automatically
be translated into the internal code and become the second way of mapping.
2. The second method is to use the internal code for the function key.  To
enter such a mapping type CTRL-K and then hit the function key, or use
the form "#1", "#2", .. "#9", "#0", "<Up>", "<S-Down>", "<S-F7>", etc.
(see table of keys [key-notation](#key-notation), all keys from <Up> can be used).  The
first ten function keys can be defined in two ways: Just the number, like
"#2", and with "<F>", like "<F2>".  Both stand for function key 2.  "#0"
refers to function key 10.

DETAIL: Vim first checks if a sequence from the keyboard is mapped.  If it
isn't the terminal key codes are tried.  If a terminal code is found it is
replaced with the internal code.  Then the check for a mapping is done again
(so you can map an internal code to something else).  What is written into the
script file depends on what is recognized. If the terminal key code was
recognized as a mapping the key code itself is written to the script file.  If
it was recognized as a terminal code the internal code is written to the
script file.


### <a id=":map-special-chars" class="section-title" href="#:map-special-chars">1.6 Special Characters</a>
### <a id="map_backslash map-backslash" class="section-title" href="#map_backslash map-backslash">Note:</a>
Note that only CTRL-V is mentioned here as a special character for mappings
and abbreviations.  When 'cpoptions' does not contain 'B', a backslash can
also be used like CTRL-V.  The <> notation can be fully used then [<>](#<>).  But
you cannot use "<C-V>" like CTRL-V to escape the special meaning of what
follows.

To map a backslash, or use a backslash literally in the {rhs}, the special
sequence "<Bslash>" can be used.  This avoids the need to double backslashes
when using nested mappings.

### <a id="map_CTRL-C map-CTRL-C" class="section-title" href="#map_CTRL-C map-CTRL-C">Note:</a>
Using CTRL-C in the {lhs} is possible, but it will only work when Vim is
waiting for a key, not when Vim is busy with something.  When Vim is busy
CTRL-C interrupts/breaks the command.
When using the GUI version on MS-Windows CTRL-C can be mapped to allow a Copy
command to the clipboard.  Use CTRL-Break to interrupt Vim.

### <a id="map_space_in_lhs map-space_in_lhs" class="section-title" href="#map_space_in_lhs map-space_in_lhs">Note:</a>
To include a space in {lhs} precede it with a CTRL-V (type two CTRL-Vs for
each space).
### <a id="map_space_in_rhs map-space_in_rhs" class="section-title" href="#map_space_in_rhs map-space_in_rhs">Note:</a>
If you want a {rhs} that starts with a space, use "<Space>".  To be fully Vi
compatible (but unreadable) don't use the [<>](#<>) notation, precede {rhs} with a
single CTRL-V (you have to type CTRL-V two times).
### <a id="map_empty_rhs map-empty-rhs" class="section-title" href="#map_empty_rhs map-empty-rhs">Note:</a>
You can create an empty {rhs} by typing nothing after a single CTRL-V (you
have to type CTRL-V two times).  Unfortunately, you cannot do this in a vimrc
file.
[<Nop>](#<Nop>)
An easier way to get a mapping that doesn't produce anything, is to use
"<Nop>" for the {rhs}.  For example, to disable function key 8:
```
:map  <F8>  <Nop>
:map! <F8>  <Nop>

```

### <a id="map-multibyte" class="section-title" href="#map-multibyte">Note:</a>
It is possible to map multibyte characters, but only the whole character.  You
cannot map the first byte only.  This was done to prevent problems in this
scenario:
```
:set encoding=latin1
:imap <M-C> foo
:set encoding=utf-8
The mapping for <M-C> is defined with the latin1 encoding, resulting in a 0xc3
byte.  If you type the character á (0xe1 <M-a>) in UTF-8 encoding this is the
two bytes 0xc3 0xa1.  You don't want the 0xc3 byte to be mapped then or
otherwise it would be impossible to type the á character.

### <a id="<Leader> mapleader" class="section-title" href="#<Leader> mapleader">Note:</a>
To define a mapping which uses the "g:mapleader" variable, the special string
"<Leader>" can be used.  It is replaced with the string value of
"g:mapleader".  If "g:mapleader" is not set or empty, a backslash is used
instead.  Example:
```
map <Leader>A  oanother line<Esc>
Works like:
```
map \A  oanother line<Esc>
But after:
let mapleader = ","
It works like:
```
map ,A  oanother line<Esc>

Note that the value of "g:mapleader" is used at the moment the mapping is
defined.  Changing "g:mapleader" after that has no effect for already defined
mappings.

### <a id="<LocalLeader> maplocalleader" class="section-title" href="#<LocalLeader> maplocalleader">Note:</a>

```
LocalLeader> is just like <Leader>, except that it uses "maplocalleader"
instead of "mapleader".  <LocalLeader> is to be used for mappings which are
local to a buffer.  Example:
```
:map <buffer> <LocalLeader>A  oanother line<Esc>

```

In a global plugin <Leader> should be used and in a filetype plugin

```
LocalLeader>.  "mapleader" and "maplocalleader" can be equal.  Although, if
you make them different, there is a smaller chance of mappings from global
plugins to clash with mappings for filetype plugins.  For example, you could
keep "mapleader" at the default backslash, and set "maplocalleader" to an
underscore.

### <a id="map-<SID>" class="section-title" href="#map-<SID>">Note:</a>
In a script the special key name "<SID>" can be used to define a mapping
that's local to the script.  See [<SID>](#<SID>) for details.

### <a id="<Plug>" class="section-title" href="#<Plug>">Note:</a>
The special key name "<Plug>" can be used for an internal mapping, which is
not to be matched with any key sequence.  This is useful in plugins
[using-<Plug>](#using-<Plug>).

### <a id="<Char> <Char->" class="section-title" href="#<Char> <Char->">Note:</a>
To map a character by its decimal, octal or hexadecimal number the <Char>
construct can be used:

```
Char-123>	character 123

```
Char-033>	character 27

```
Char-0x7f>	character 127

```
S-Char-114>    character 114 ('r') shifted ('R')
This is useful to specify a (multibyte) character in a 'keymap' file.
Upper and lowercase differences are ignored.

### <a id="map-comments" class="section-title" href="#map-comments">Note:</a>
It is not possible to put a comment after these commands, because the '"'
character is considered to be part of the {lhs} or {rhs}. However, one can
use |", since this starts a new, empty command with a comment.

### <a id="map_bar map-bar" class="section-title" href="#map_bar map-bar">Note:</a>
Since the '|' character is used to separate a map command from the next
command, you will have to do something special to include  a '|' in {rhs}.
There are three methods:
use	     works when			   example	~

```
Bar>     always			   :map _l :!ls <Bar> more^M
\[	     'b' is not in 'cpoptions'	   :map _l :!ls \](#	     'b' is not in 'cpoptions'	   :map _l :!ls \) more^M
^V[	     always			   :map _l :!ls ^V](#	     always			   :map _l :!ls ^V) more^M

(here ^V stands for CTRL-V; to get one CTRL-V you have to type it twice; you
cannot use the <> notation "<C-V>" here).

All three work when you use the default setting for 'cpoptions'.

When 'b' is present in 'cpoptions', "\|" will be recognized as a mapping
ending in a '\' and then another command.  This is Vi compatible, but
illogical when compared to other commands.

### <a id="map_return map-return" class="section-title" href="#map_return map-return">Note:</a>
When you have a mapping that contains an Ex command, you need to put a line
terminator after it to have it executed.  The use of <CR> is recommended for
this (see [<>](#<>)).  Example:
```
:map  _ls  :!ls -l %:S<CR>:echo "the end"<CR>

To avoid mapping of the characters you type in insert or Command-line mode,
type a CTRL-V first.  The mapping in Insert mode is disabled if the 'paste'
option is on.
### <a id="map-error" class="section-title" href="#map-error">Note:</a>
Note that when an error is encountered (that causes an error message or beep)
the rest of the mapping is not executed.  This is Vi-compatible.

Note that the second character (argument) of the commands @zZtTfF[]rm'`"v
and CTRL-X is not mapped.  This was done to be able to use all the named
registers and marks, even when the command with the same name has been
mapped.


### <a id="map-which-keys" class="section-title" href="#map-which-keys">1.7 What Keys to Map</a>

If you are going to map something, you will need to choose which key(s) to use
for the {lhs}.  You will have to avoid keys that are used for Vim commands,
otherwise you would not be able to use those commands anymore.  Here are a few
suggestions:
- Function keys <F2>, <F3>, etc..  Also the shifted function keys <S-F1>,

```
S-F2>, etc.  Note that <F1> is already used for the help command.
- Meta-keys (with the ALT key pressed).  Depending on your keyboard accented
characters may be used as well. [:map-alt-keys](#:map-alt-keys)
- Use the '_' or ',' character and then any other character.  The "_" and ","
commands do exist in Vim (see [_| and |,](#_| and |,)), but you probably never use them.
- Use a key that is a synonym for another command.  For example: CTRL-P and
CTRL-N.  Use an extra character to allow more mappings.
- The key defined by <Leader> and one or more other keys.  This is especially
useful in scripts. [mapleader](#mapleader)

See the file "index" for keys that are not used and thus can be mapped without
losing any builtin function.  You can also use ":help {key}^D" to find out if
a key is used for some command.  ({key} is the specific key you want to find
out about, ^D is CTRL-D).


### <a id="map-examples" class="section-title" href="#map-examples">1.8 Examples</a>

A few examples (as you type them: for "<CR>" you type four characters).
```

:map <F3>  o#include
:map <M-g> /foo<CR>cwbar<Esc>
:map _x    d/END/e<CR>
:map! qq   quadrillion questions


Multiplying a count

When you type a count before triggering a mapping, it's like the count was
typed before the {lhs}.  For example, with this mapping:
```
:map <F4>  3w
Typing 2<F4> will result in "23w". Thus not moving 2 * 3 words but 23 words.
If you want to multiply counts use the expression register:
```
:map <F4>  @='3w'<CR>
The part between quotes is the expression being executed. [@=](#@=)


### <a id="map-typing" class="section-title" href="#map-typing">1.9 Using Mappings</a>

Vim will compare what you type with the start of a mapped sequence.  If there
is an incomplete match, it will get more characters until there either is a
complete match or until there is no match at all.  Example: If you map! "qq",
the first 'q' will not appear on the screen until you type another
character.  This is because Vim cannot know if the next character will be a
'q' or not.  If the 'timeout' option is on (which is the default) Vim will
only wait for one second (or as long as specified with the 'timeoutlen'
option).  After that it assumes that the 'q' is to be interpreted as such.  If
you type slowly, or your system is slow, reset the 'timeout' option.  Then you
might want to set the 'ttimeout' option.

### <a id="map-precedence" class="section-title" href="#map-precedence">Note:</a>
Buffer-local mappings (defined using [:map-<buffer>](#:map-<buffer>)) take precedence over
global mappings.  When a buffer-local mapping is the same as a global mapping,
Vim will use the buffer-local mapping.  In addition, Vim will use a complete
mapping immediately if it was defined with <nowait>, even if a longer mapping
has the same prefix.  For example, given the following two mappings:
```
:map <buffer> <nowait> \a   :echo "Local \a"<CR>
:map                   \abc :echo "Global \abc"<CR>
When typing \a the buffer-local mapping will be used immediately.  Vim will
not wait for more characters to see if the user might be typing \abc.

### <a id="map-keys-fails" class="section-title" href="#map-keys-fails">Note:</a>
There are situations where key codes might not be recognized:
- Vim can only read part of the key code.  Mostly this is only the first
character.  This happens on some Unix versions in an xterm.
- The key code is after character(s) that are mapped.  E.g., "<F1><F1>" or
"g<F1>".

The result is that the key code is not recognized in this situation, and the
mapping fails.  There are two actions needed to avoid this problem:

- Remove the 'K' flag from 'cpoptions'.  This will make Vim wait for the rest
of the characters of the function key.
- When using <F1> to <F4> the actual key code generated may correspond to

```
xF1> to <xF4>.  There are mappings from <xF1> to <F1>, <xF2> to <F2>, etc.,
but these are not recognized after another half a mapping.  Make sure the
key codes for <F1> to <F4> are correct:
```
:set <F1>=<type CTRL-V><type F1>

```
 Type the <F1> as four characters.  The part after the "=" must be done with
the actual keys, not the literal text.
Another solution is to use the actual key code in the mapping for the second
special key:
```
:map <F1><Esc>OP :echo "yes"<CR>
Don't type a real <Esc>, Vim will recognize the key code and replace it with

```
F1> anyway.

### <a id="recursive_mapping" class="section-title" href="#recursive_mapping">Note:</a>
If you include the {lhs} in the {rhs} you have a recursive mapping.  When
{lhs} is typed, it will be replaced with {rhs}.  When the {lhs} which is
included in {rhs} is encountered it will be replaced with {rhs}, and so on.
This makes it possible to repeat a command an infinite number of times.  The
only problem is that the only way to stop this is by causing an error.  The
macros to solve a maze uses this, look there for an example.  There is one
exception: If the {rhs} starts with {lhs}, the first character is not mapped
again (this is Vi compatible).
For example:
```
:map ab abcd
will execute the "a" command and insert "bcd" in the text.  The "ab" in the
{rhs} will not be mapped again.

If you want to exchange the meaning of two keys you should use the :noremap
command.  For example:
```
:noremap k j
:noremap j k
This will exchange the cursor up and down commands.

With the normal :map command mapping takes place until the text is found not
to be a part of a {lhs}.  For example, if you use:
```
:map x y
:map y x
Vim will replace x with y, and then y with x, etc.  When this has happened
'maxmapdepth' times (default 1000), Vim will give the error message
"recursive mapping".

### <a id=":map-undo" class="section-title" href="#:map-undo">Note:</a>
If you include an undo command inside a mapped sequence, this will bring the
text back in the state before executing the macro.  This is compatible with
the original Vi, as long as there is only one undo command in the mapped
sequence (having two undo commands in a mapped sequence did not make sense
in the original Vi, you would get back the text before the first undo).


### <a id=":map-alt-keys" class="section-title" href="#:map-alt-keys">1.10 Mapping Alt-Keys</a>

In the GUI Nvim handles the [ALT](#ALT) key itself, thus mapping keys with ALT
should always work.  But in a terminal Nvim gets a sequence of bytes and has
to figure out whether ALT was pressed.  Terminals may use ESC to indicate that
ALT was pressed.  If ESC is followed by a {key} within 'ttimeoutlen'
milliseconds, the ESC is interpreted as:

```
ALT-{key}>
otherwise it is interpreted as two key presses:

```
ESC> {key}

### <a id=":map-operator" class="section-title" href="#:map-operator">1.11 Mapping an Operator</a>

An operator is used before a {motion} command.  To define your own operator
you must create a mapping that first sets the 'operatorfunc' option and then
invoke the [g@](#g@) operator.  After the user types the {motion} command the
specified function will be called.

### <a id="g@ E774 E775" class="section-title" href="#g@ E774 E775">Note:</a>
g@{motion}		Call the function set by the 'operatorfunc' option.
The '[ mark is positioned at the start of the text
moved over by {motion}, the '] mark on the last
character of the text.
The function is called with one String argument:
"line"	{motion} was [linewise](#linewise)
"char"	{motion} was [charwise](#charwise)
"block"	{motion} was [blockwise-visual](#blockwise-visual)
The type can be forced, see [forced-motion](#forced-motion).

Here is an example that counts the number of spaces with <F4>:
```

nnoremap <expr> <F4> CountSpaces()
xnoremap <expr> <F4> CountSpaces()
" doubling <F4> works on a line
nnoremap <expr> <F4><F4> CountSpaces() .. '_'

function CountSpaces(type = '') abort
if a:type == ''
set opfunc=CountSpaces
return 'g@'
endif

let sel_save = &selection
let reg_save = getreginfo('"')
let cb_save = &clipboard
let visual_marks_save = [getpos("'<"), getpos("'>")]

try
set clipboard= selection=inclusive
let commands = #{line: "'[V']y", char: "`[v`]y", block: "`[\<c-v>`]y"}
silent exe 'noautocmd keepjumps normal! ' .. get(commands, a:type, '')
echom count(getreg('"'), ' ')
finally
call setreg('"', reg_save)
call setpos("'<", visual_marks_save[0])
call setpos("'>", visual_marks_save[1])
let &clipboard = cb_save
let &selection = sel_save
endtry
endfunction

An <expr> mapping is used to be able to fetch any prefixed count and register.
This also avoids using a command line, which would trigger CmdlineEnter and
CmdlineLeave autocommands.

Note that the 'selection' option is temporarily set to "inclusive" to be able
to yank exactly the right text by using Visual mode from the '[ to the ']
mark.

Also note that the 'clipboard' option is temporarily emptied to avoid
clobbering the `"*` or `"+` registers, if its value contains the item `unnamed`
or `unnamedplus`.

The `mode()` function will return the state as it will be after applying the
operator.

Here is an example for using a lambda function to create a normal-mode
operator to add quotes around text in the current line:
```

nnoremap <F4> <Cmd>let &opfunc='{t ->
\ getline(".")
\ ->split("\\zs")
\ ->insert("\"", col("'']"))
\ ->insert("\"", col("''[") - 1)
\ ->join("")
\ ->setline(".")}'<CR>g@


## <a id="abbreviations Abbreviations" class="section-title" href="#abbreviations Abbreviations">2. Abbreviations</a> 

Abbreviations are used in Insert mode, Replace mode and Command-line mode.
If you enter a word that is an abbreviation, it is replaced with the word it
stands for.  This can be used to save typing for often used long words.  And
you can use it to automatically correct obvious spelling errors.
Examples:

:iab ms Microsoft
:iab tihs this

There are three types of abbreviations:

full-id	  The "full-id" type consists entirely of keyword characters (letters
and characters from 'iskeyword' option).  This is the most common
abbreviation.

Examples: "foo", "g3", "-1"

end-id	  The "end-id" type ends in a keyword character, but all the other
characters are not keyword characters.

Examples: "#i", "..f", "$/7"

non-id	  The "non-id" type ends in a non-keyword character, the other
characters may be of any type, excluding space and tab.

Examples: "def#", "4/7$"

Examples of strings that cannot be abbreviations: "a.b", "#def", "a b", "_$r"

An abbreviation is only recognized when you type a non-keyword character.
This can also be the <Esc> that ends insert mode or the <CR> that ends a
command.  The non-keyword character which ends the abbreviation is inserted
after the expanded abbreviation.  An exception to this is the character <C-]>,
which is used to expand an abbreviation without inserting any extra
characters.

Example:
```
:ab hh	hello

```
	    "hh<Space>" is expanded to "hello<Space>"
"hh<C-]>" is expanded to "hello"

The characters before the cursor must match the abbreviation.  Each type has
an additional rule:

full-id	  In front of the match is a non-keyword character, or this is where
the line or insertion starts.  Exception: When the abbreviation is
only one character, it is not recognized if there is a non-keyword
character in front of it, other than a space or a tab. However, for
the command line "'<,'>" (or any other marks) is ignored, as if the
command line starts after it.

end-id	  In front of the match is a keyword character, or a space or a tab,
or this is where the line or insertion starts.

non-id	  In front of the match is a space, tab or the start of the line or
the insertion.

Examples: ({CURSOR} is where you type a non-keyword character)
```
:ab foo   four old otters

```
		" foo{CURSOR}"	  is expanded to " four old otters"
" foobar{CURSOR}" is not expanded
"barfoo{CURSOR}"  is not expanded
```
:ab #i #include

```
		"#i{CURSOR}"	  is expanded to "#include"
">#i{CURSOR}"	  is not expanded
```
:ab ;; <endofline>

```
		"test;;"	  is not expanded
"test ;;"	  is expanded to "test <endofline>"

To avoid the abbreviation in Insert mode: Type CTRL-V before the character
that would trigger the abbreviation.  E.g. CTRL-V <Space>.  Or type part of
the abbreviation, exit insert mode with <Esc>, re-enter insert mode with "a"
and type the rest.

To avoid the abbreviation in Command-line mode: Type CTRL-V twice somewhere in
the abbreviation to avoid it to be replaced.  A CTRL-V in front of a normal
character is mostly ignored otherwise.

It is possible to move the cursor after an abbreviation:
```
:iab if if ()<Left>

You can even do more complicated things.  For example, to consume the space
typed after an abbreviation:
```
func Eatchar(pat)
let c = nr2char(getchar(0))
return (c =~ a:pat) ? '' : c
endfunc
iabbr <silent> if if ()<Left><C-R>=Eatchar('\s')<CR>

There are no default abbreviations.

Abbreviations are never recursive.  You can use ":ab f f-o-o" without any
problem.  But abbreviations can be mapped.  {some versions of Vi support
recursive abbreviations, for no apparent reason}

Abbreviations are disabled if the 'paste' option is on.

### <a id=":abbreviate-local :abbreviate-<buffer>" class="section-title" href="#:abbreviate-local :abbreviate-<buffer>">Note:</a>
Just like mappings, abbreviations can be local to a buffer.  This is mostly
used in a [filetype-plugin](#filetype-plugin) file.  Example for a C plugin file:
```
:abb <buffer> FF  for (i = 0; i < ; ++i)

```

### <a id=":ab :abbreviate" class="section-title" href="#:ab :abbreviate">Note:</a>
:ab[breviate]		list all abbreviations.  The character in the first
column indicates the mode where the abbreviation is
used: 'i' for insert mode, 'c' for Command-line
mode, '!' for both.  These are the same as for
mappings, see [map-listing](#map-listing).

### <a id=":abbreviate-verbose" class="section-title" href="#:abbreviate-verbose">Note:</a>
When 'verbose' is non-zero, listing an abbreviation will also display where it
was last defined.  Example:
```

:verbose abbreviate
!  teh		 the
Last set from /home/abcd/vim/abbr.vim

See [:verbose-cmd](#:verbose-cmd) for more information.

:ab[breviate] {lhs}	list the abbreviations that start with {lhs}
You may need to insert a CTRL-V (type it twice) to
avoid that a typed {lhs} is expanded, since
command-line abbreviations apply here.

:ab[breviate] [<expr>] [<buffer>] {lhs} {rhs}
add abbreviation for {lhs} to {rhs}.  If {lhs} already
existed it is replaced with the new {rhs}.  {rhs} may
contain spaces.
See [:map-<expr>](#:map-<expr>) for the optional <expr> argument.
See [:map-<buffer>](#:map-<buffer>) for the optional <buffer> argument.

### <a id=":una :unabbreviate" class="section-title" href="#:una :unabbreviate">Note:</a>
:una[bbreviate] [<buffer>] {lhs}
Remove abbreviation for {lhs} from the list.  If none
is found, remove abbreviations in which {lhs} matches
with the {rhs}.  This is done so that you can even
remove abbreviations after expansion.  To avoid
expansion insert a CTRL-V (type it twice).

### <a id=":norea :noreabbrev" class="section-title" href="#:norea :noreabbrev">Note:</a>
:norea[bbrev] [<expr>] [<buffer>] [lhs] [rhs]
same as ":ab", but no remapping for this {rhs}

### <a id=":ca :cab :cabbrev" class="section-title" href="#:ca :cab :cabbrev">Note:</a>
:ca[bbrev] [<expr>] [<buffer>] [lhs] [rhs]
same as ":ab", but for Command-line mode only.

### <a id=":cuna :cunabbrev" class="section-title" href="#:cuna :cunabbrev">Note:</a>
:cuna[bbrev] [<buffer>] {lhs}
Same as ":una", but for Command-line mode only.

### <a id=":cnorea :cnoreabbrev" class="section-title" href="#:cnorea :cnoreabbrev">Note:</a>
:cnorea[bbrev] [<expr>] [<buffer>] [lhs] [rhs]
same as ":ab", but for Command-line mode only and no
remapping for this {rhs}

### <a id=":ia :iabbrev" class="section-title" href="#:ia :iabbrev">Note:</a>
:ia[bbrev] [<expr>] [<buffer>] [lhs] [rhs]
same as ":ab", but for Insert mode only.

### <a id=":iuna :iunabbrev" class="section-title" href="#:iuna :iunabbrev">Note:</a>
:iuna[bbrev] [<buffer>] {lhs}
Same as ":una", but for insert mode only.

### <a id=":inorea :inoreabbrev" class="section-title" href="#:inorea :inoreabbrev">Note:</a>
:inorea[bbrev] [<expr>] [<buffer>] [lhs] [rhs]
same as ":ab", but for Insert mode only and no
remapping for this {rhs}

### <a id=":abc :abclear" class="section-title" href="#:abc :abclear">Note:</a>
:abc[lear] [<buffer>]	Remove all abbreviations.

### <a id=":iabc :iabclear" class="section-title" href="#:iabc :iabclear">Note:</a>
:iabc[lear] [<buffer>]	Remove all abbreviations for Insert mode.

### <a id=":cabc :cabclear" class="section-title" href="#:cabc :cabclear">Note:</a>
:cabc[lear] [<buffer>]	Remove all abbreviations for Command-line mode.

### <a id="using_CTRL-V" class="section-title" href="#using_CTRL-V">Note:</a>
It is possible to use special characters in the rhs of an abbreviation.
CTRL-V has to be used to avoid the special meaning of most non printable
characters.  How many CTRL-Vs need to be typed depends on how you enter the
abbreviation.  This also applies to mappings.  Let's use an example here.

Suppose you want to abbreviate "esc" to enter an <Esc> character.  When you
type the ":ab" command in Vim, you have to enter this: (here ^V is a CTRL-V
and ^[ is <Esc>)

You type:   ab esc ^V^V^V^V^V^[

All keyboard input is subjected to ^V quote interpretation, so
the first, third, and fifth ^V  characters simply allow the second,
and fourth ^Vs, and the ^[, to be entered into the command-line.

You see:    ab esc ^V^V^[

The command-line contains two actual ^Vs before the ^[.  This is
how it should appear in your vimrc file, if you choose to go that
route.  The first ^V is there to quote the second ^V; the :ab
command uses ^V as its own quote character, so you can include quoted
whitespace or the | character in the abbreviation.  The :ab command
doesn't do anything special with the ^[ character, so it doesn't need
to be quoted.  (Although quoting isn't harmful; that's why typing 7
[but not 8!] ^Vs works.)

Stored as:  esc     ^V^[

After parsing, the abbreviation's short form ("esc") and long form
(the two characters "^V^[") are stored in the abbreviation table.
If you give the :ab command with no arguments, this is how the
abbreviation will be displayed.

Later, when the abbreviation is expanded because the user typed in
the word "esc", the long form is subjected to the same type of
^V interpretation as keyboard input.  So the ^V protects the ^[
character from being interpreted as the "exit Insert mode" character.
Instead, the ^[ is inserted into the text.

Expands to: ^[

[example given by Steve Kirkendall]


## <a id="script-local" class="section-title" href="#script-local">3. Local Mappings and Functions</a> 

When using several Vim script files, there is the danger that mappings and
functions used in one script use the same name as in other scripts.  To avoid
this, they can be made local to the script.

### <a id="<SID> <SNR> E81" class="section-title" href="#<SID> <SNR> E81">Note:</a>
The string "<SID>" can be used in a mapping or menu.
When executing the map command, Vim will replace "<SID>" with the special
key code <SNR>, followed by a number that's unique for the script, and an
underscore.  Example:
```
:map <SID>Add
could define a mapping "<SNR>23_Add".

When defining a function in a script, "s:" can be prepended to the name to
make it local to the script.  But when a mapping is executed from outside of
the script, it doesn't know in which script the function was defined.  To
avoid this problem, use "<SID>" instead of "s:".  The same translation is done
as for mappings.  This makes it possible to define a call to the function in
a mapping.

When a local function is executed, it runs in the context of the script it was
defined in.  This means that new functions and mappings it defines can also
use "s:" or "<SID>" and it will use the same unique number as when the
function itself was defined.  Also, the "s:var" local script variables can be
used.

When executing an autocommand or a user command, it will run in the context of
the script it was defined in.  This makes it possible that the command calls a
local function or uses a local mapping.

In case the value is used in a context where <SID> cannot be correctly
expanded, use the expand() function:
```
let &includexpr = expand('<SID>') .. 'My_includeexpr()'

Otherwise, using "<SID>" outside of a script context is an error.

If you need to get the script number to use in a complicated script, you can
use this function:
```
func s:ScriptNumber()
return matchstr(expand('<SID>'), '<SNR>\zs\d\+\ze_')
endfunc

The "<SNR>" will be shown when listing functions and mappings.  This is useful
to find out what they are defined to.

The [:scriptnames](#:scriptnames) command can be used to see which scripts have been sourced
and what their <SNR> number is.


## <a id="user-commands" class="section-title" href="#user-commands">4. User-Defined Commands</a> 

It is possible to define your own Ex commands.  A user-defined command can act
just like a built-in command (it can have a range or arguments, arguments can
be completed as filenames or buffer names, etc), except that when the command
is executed, it is transformed into a normal Ex command and then executed.

For starters: See section [40.2](#40.2) in the user manual.

### <a id="E183 E841 user-cmd-ambiguous" class="section-title" href="#E183 E841 user-cmd-ambiguous">Note:</a>
All user defined commands must start with an uppercase letter, to avoid
confusion with builtin commands.  Exceptions are these builtin commands:
:Next
They cannot be used for a user defined command.

The other characters of the user command can be uppercase letters, lowercase
letters or digits.  When using digits, note that other commands that take a
numeric argument may become ambiguous.  For example, the command ":Cc2" could
be the user command ":Cc2" without an argument, or the command ":Cc" with
argument "2".  It is advised to put a space between the command name and the
argument to avoid these problems.

When using a user-defined command, the command can be abbreviated.  However, if
an abbreviation is not unique, an error will be issued.  Furthermore, a
built-in command will always take precedence.

Example:
```
:command Rename ...
:command Renumber ...
:Rena				" Means "Rename"
:Renu				" Means "Renumber"
:Ren				" Error - ambiguous
:command Paste ...

It is recommended that full names for user-defined commands are used in
scripts.

### <a id=":com :command" class="section-title" href="#:com :command">:com[mand]</a>
List all user-defined commands.  When listing commands,
the characters in the first columns are:
!	Command has the -bang attribute
"	Command has the -register attribute
|   Command has the -bar attribute
b	Command is local to current buffer
(see below for details on attributes)
The list can be filtered on command name with
[:filter](#:filter), e.g., to list all commands with "Pyth" in
the name:
```
filter Pyth command

:com[mand] {cmd}	List the user-defined commands that start with {cmd}

### <a id=":command-verbose" class="section-title" href="#:command-verbose">Note:</a>
When 'verbose' is non-zero, listing a command will also display where it was
last defined and any completion argument. Example:
```

:verbose command TOhtml

```
	Name	    Args Range Complete  Definition ~
TOhtml	    0	 %		 :call Convert2HTML(<line1>, <line2>) ~
Last set from /usr/share/vim/vim-7.0/plugin/tohtml.vim ~

See [:verbose-cmd](#:verbose-cmd) for more information.

### <a id="E174 E182" class="section-title" href="#E174 E182">Note:</a>
:com[mand][!] [{attr}...] {cmd} {repl}
Define a user command.  The name of the command is
{cmd} and its replacement text is {repl}.  The
command's attributes (see below) are {attr}.  If the
command already exists, an error is reported, unless a
! is specified, in which case the command is
redefined.  There is one exception: When sourcing a
script again, a command that was previously defined in
that script will be silently replaced.


### <a id=":delc :delcommand E184" class="section-title" href="#:delc :delcommand E184">:delc[ommand] {cmd}</a>
Delete the user-defined command {cmd}.

### <a id="E1237" class="section-title" href="#E1237">:delc[ommand] -buffer {cmd}</a>
Delete the user-defined command {cmd} that was defined
for the current buffer.

### <a id=":comc :comclear" class="section-title" href="#:comc :comclear">:comc[lear]</a>
Delete all user-defined commands.


Command attributes ~
### <a id="command-attributes" class="section-title" href="#command-attributes">Note:</a>
User-defined commands are treated by Nvim just like any other Ex commands.  They
can have arguments, or have a range specified.  Arguments are subject to
completion as filenames, buffers, etc.  Exactly how this works depends upon the
command's attributes, which are specified when the command is defined.

There are a number of attributes, split into four categories: argument
handling, completion behavior, range handling, and special cases.  The
attributes are described below, by category.


Argument handling ~
### <a id="E175 E176 :command-nargs" class="section-title" href="#E175 E176 :command-nargs">Note:</a>
By default, a user defined command will take no arguments (and an error is
reported if any are supplied).  However, it is possible to specify that the
command can take arguments, using the -nargs attribute.  Valid cases are:

-nargs=0    No arguments are allowed (the default)
-nargs=1    Exactly one argument is required, it includes spaces
-nargs=*    Any number of arguments are allowed (0, 1, or many),
separated by white space
-nargs=?    0 or 1 arguments are allowed
-nargs=+    Arguments must be supplied, but any number are allowed

Arguments are considered to be separated by (unescaped) spaces or tabs in this
context, except when there is one argument, then the white space is part of
the argument.

Note that arguments are used as text, not as expressions.  Specifically,
"s:var" will use the script-local variable in the script where the command was
defined, not where it is invoked!  Example:
script1.vim:
```
:let s:error = "None"
:command -nargs=1 Error echoerr <args>

```
   script2.vim:
```
:source script1.vim
:let s:error = "Wrong!"
:Error s:error
Executing script2.vim will result in "None" being echoed.  Not what you
intended!  Calling a function may be an alternative.

Completion behavior ~
### <a id=":command-completion E179 E180 E181" class="section-title" href="#:command-completion E179 E180 E181">Note:</a>
### <a id=":command-complete" class="section-title" href="#:command-complete">Note:</a>
By default, the arguments of user defined commands do not undergo completion.
However, by specifying one or the other of the following attributes, argument
completion can be enabled:

-complete=arglist	file names in argument list
-complete=augroup	autocmd groups
-complete=buffer	buffer names
-complete=behave	:behave suboptions
-complete=color		color schemes
-complete=command	Ex command (and arguments)
-complete=compiler	compilers
-complete=dir		directory names
-complete=environment	environment variable names
-complete=event		autocommand events
-complete=expression	Vim expression
-complete=file		file and directory names
-complete=file_in_path	file and directory names in ['path'](#'path')
-complete=filetype	filetype names ['filetype'](#'filetype')
-complete=function	function name
-complete=help		help subjects
-complete=highlight	highlight groups
-complete=history	:history suboptions
-complete=locale	locale names (as output of locale -a)
-complete=lua		Lua expression
-complete=mapclear	buffer argument
-complete=mapping	mapping name
-complete=menu		menus
-complete=messages	[:messages](#:messages) suboptions
-complete=option	options
-complete=packadd	optional package [pack-add](#pack-add) names
-complete=shellcmd	Shell command
-complete=sign		[:sign](#:sign) suboptions
-complete=syntax	syntax file names ['syntax'](#'syntax')
-complete=syntime	[:syntime](#:syntime) suboptions
-complete=tag		tags
-complete=tag_listfiles	tags, file names are shown when CTRL-D is hit
-complete=user		user names
-complete=var		user variables
-complete=custom,{func} custom completion, defined via {func}
-complete=customlist,{func} custom completion, defined via {func}

If you specify completion while there is nothing to complete (-nargs=0, the
default) then you get error *E1208* .
Note: That some completion methods might expand environment variables.


Custom completion ~
### <a id=":command-completion-custom" class="section-title" href="#:command-completion-custom">Note:</a>
### <a id=":command-completion-customlist E467 E468" class="section-title" href="#:command-completion-customlist E467 E468">Note:</a>
It is possible to define customized completion schemes via the "custom,{func}"
or the "customlist,{func}" completion argument.  The {func} part should be a
function with the following signature:
```

:function {func}(ArgLead, CmdLine, CursorPos)

The function need not use all these arguments. The function should provide the
completion candidates as the return value.

For the "custom" argument, the function should return the completion
candidates one per line in a newline separated string.

For the "customlist" argument, the function should return the completion
candidates as a Vim List.  Non-string items in the list are ignored.

The function arguments are:
ArgLead		the leading portion of the argument currently being
completed on
CmdLine		the entire command line
CursorPos	the cursor position in it (byte index)
The function may use these for determining context.  For the "custom"
argument, it is not necessary to filter candidates against the (implicit
pattern in) ArgLead.  Vim will filter the candidates with its regexp engine
after function return, and this is probably more efficient in most cases. For
the "customlist" argument, Vim will not filter the returned completion
candidates and the user supplied function should filter the candidates.

The following example lists user names to a Finger command
```
:com -complete=custom,ListUsers -nargs=1 Finger !finger <args>
:fun ListUsers(A,L,P)
:    return system("cut -d: -f1 /etc/passwd")
:endfun

The following example completes filenames from the directories specified in
the 'path' option:
```
:com -nargs=1 -bang -complete=customlist,EditFileComplete
\ EditFile edit<bang> <args>
:fun EditFileComplete(A,L,P)
:    return split(globpath(&path, a:A), "\n")
:endfun

```

This example does not work for file names with spaces!


Range handling ~
### <a id="E177 E178 :command-range :command-count" class="section-title" href="#E177 E178 :command-range :command-count">Note:</a>
By default, user-defined commands do not accept a line number range.  However,
it is possible to specify that the command does take a range (the -range
attribute), or that it takes an arbitrary count value, either in the line
number position (-range=N, like the [:split](#:split) command) or as a "count"
argument (-count=N, like the [:Next](#:Next) command).  The count will then be
available in the argument with [<count>](#<count>).

Possible attributes are:

-range	    Range allowed, default is current line
-range=%    Range allowed, default is whole file (1,$)
-range=N    A count (default N) which is specified in the line
number position (like [:split](#:split)); allows for zero line
number.
-count=N    A count (default N) which is specified either in the line
number position, or as an initial argument (like [:Next](#:Next)).
Specifying -count (without a default) acts like -count=0

Note that -range=N and -count=N are mutually exclusive - only one should be
specified.

### <a id=":command-addr" class="section-title" href="#:command-addr">Note:</a>
It is possible that the special characters in the range like `.`, `$` or `%`
which by default correspond to the current line, last line and the whole
buffer, relate to arguments, (loaded) buffers, windows or tab pages.

Possible values are (second column is the short name used in listing):
-addr=lines		  line	Range of lines (this is the default)
-addr=arguments	  arg	Range for arguments
-addr=buffers	  buf	Range for buffers (also not loaded buffers)
-addr=loaded_buffers  load	Range for loaded buffers
-addr=windows	  win	Range for windows
-addr=tabs		  tab	Range for tab pages
-addr=quickfix	  qf	Range for quickfix entries
-addr=other		  ?	other kind of range


Incremental preview ~
### <a id=":command-preview {nvim-api}" class="section-title" href="#:command-preview {nvim-api}">Note:</a>
Commands can show an 'inccommand' (as-you-type) preview by defining a preview
handler (only from Lua, see [nvim_create_user_command()](#nvim_create_user_command())).

Before the preview callback is executed, Nvim will temporarily disable
'cursorline' and 'cursorcolumn' to avoid highlighting issues.

The preview callback must be a Lua function with this signature:
```

function cmdpreview(opts, ns, buf)

```

where "opts" has the same form as that given to [nvim_create_user_command()](#nvim_create_user_command())
callbacks, "ns" is the preview namespace id for highlights, and "buf" is the
buffer that your preview routine will directly modify to show the previewed
results (for "inccommand=split", or nil for  "inccommand=nosplit").

Your command preview routine must implement this protocol:

1. Modify the target buffers as required for the preview (see
[nvim_buf_set_text()| and |nvim_buf_set_lines()](#nvim_buf_set_text()| and |nvim_buf_set_lines())).
2. If preview buffer is provided, add necessary text to the preview buffer.
3. Add required highlights to the target buffers. If preview buffer is
provided, add required highlights to the preview buffer as well. All
highlights must be added to the preview namespace which is provided as an
argument to the preview callback (see [nvim_buf_add_highlight()](#nvim_buf_add_highlight()) and
[nvim_buf_set_extmark()](#nvim_buf_set_extmark()) for help on how to add highlights to a namespace).
4. Return an integer (0, 1, 2) which controls how Nvim behaves as follows:
0: No preview is shown.
1: Preview is shown without preview window (even with "inccommand=split").
2: Preview is shown and preview window is opened (if "inccommand=split").
For "inccommand=nosplit" this is the same as 1.

After preview ends, Nvim discards all changes to all buffers made during the
preview and clears all highlights in the preview namespace.

Here's an example of a command to trim trailing whitespace from lines that
supports incremental command preview:
```
-- If invoked as a preview callback, performs 'inccommand' preview by
-- highlighting trailing whitespace in the current buffer.
local function trim_space_preview(opts, preview_ns, preview_buf)
local line1 = opts.line1
local line2 = opts.line2
local buf = vim.api.nvim_get_current_buf()
local lines = vim.api.nvim_buf_get_lines(buf, line1 - 1, line2, false)
local preview_buf_line = 0

for i, line in ipairs(lines) do
local start_idx, end_idx = string.find(line, '%s+$')

if start_idx then
-- Highlight the match
vim.api.nvim_buf_add_highlight(
buf,
preview_ns,
'Substitute',
line1 + i - 2,
start_idx - 1,
end_idx
)

-- Add lines and set highlights in the preview buffer
-- if inccommand=split
if preview_buf then
local prefix = string.format('[%d](#%d) ', line1 + i - 1)

vim.api.nvim_buf_set_lines(
preview_buf,
preview_buf_line,
preview_buf_line,
false,
{ prefix .. line }
)
vim.api.nvim_buf_add_highlight(
preview_buf,
preview_ns,
'Substitute',
preview_buf_line,
#prefix + start_idx - 1,
#prefix + end_idx
)
preview_buf_line = preview_buf_line + 1
end
end
end

-- Return the value of the preview type
return 2
end

-- Trims all trailing whitespace in the current buffer.
local function trim_space(opts)
local line1 = opts.line1
local line2 = opts.line2
local buf = vim.api.nvim_get_current_buf()
local lines = vim.api.nvim_buf_get_lines(buf, line1 - 1, line2, false)

local new_lines = {}
for i, line in ipairs(lines) do
new_lines[i] = string.gsub(line, '%s+$', '')
end
vim.api.nvim_buf_set_lines(buf, line1 - 1, line2, false, new_lines)
end

-- Create the user command
vim.api.nvim_create_user_command(
'TrimTrailingWhitespace',
trim_space,
{ nargs = '?', range = '%', addr = 'lines', preview = trim_space_preview }
)

```



Special cases ~
### <a id=":command-bang :command-bar" class="section-title" href="#:command-bang :command-bar">Note:</a>
### <a id=":command-register :command-buffer" class="section-title" href="#:command-register :command-buffer">Note:</a>
### <a id=":command-keepscript" class="section-title" href="#:command-keepscript">Note:</a>
There are some special cases as well:

-bang	    The command can take a ! modifier (like :q or :w)
-bar	    The command can be followed by a "|" and another command.
A "|" inside the command argument is not allowed then.
Also checks for a " to start a comment.
-register   The first argument to the command can be an optional
register name (like :del, :put, :yank).
-buffer	    The command will only be available in the current buffer.
-keepscript Do not use the location of where the user command was
defined for verbose messages, use the location of where
the user command was invoked.

In the cases of the -count and -register attributes, if the optional argument
is supplied, it is removed from the argument list and is available to the
replacement text separately.
Note that these arguments can be abbreviated, but that is a deprecated
feature.  Use the full name for new scripts.


Replacement text ~

The replacement text {repl} for a user defined command is scanned for special
escape sequences, using <...> notation.  Escape sequences are replaced with
values from the entered command line, and all other text is copied unchanged.
The resulting string is executed as an Ex command.  To avoid the replacement
use <lt> in place of the initial <.  Thus to include "<bang>" literally use
"<lt>bang>".

The valid escape sequences are

### <a id="<line1>" class="section-title" href="#<line1>">Note:</a>

```
line1>	The starting line of the command range.
### <a id="<line2>" class="section-title" href="#<line2>">Note:</a>

```
line2>	The final line of the command range.
### <a id="<range>" class="section-title" href="#<range>">Note:</a>

```
range> The number of items in the command range: 0, 1 or 2
### <a id="<count>" class="section-title" href="#<count>">Note:</a>

```
count>	Any count supplied (as described for the '-range'
and '-count' attributes).
### <a id="<bang>" class="section-title" href="#<bang>">Note:</a>

```
bang>	(See the '-bang' attribute) Expands to a ! if the
command was executed with a ! modifier, otherwise
expands to nothing.
### <a id="<mods> <q-mods> :command-modifiers" class="section-title" href="#<mods> <q-mods> :command-modifiers">Note:</a>

```
mods>  The command modifiers, if specified. Otherwise, expands to
nothing. Supported modifiers are [:aboveleft|, |:belowright](#:aboveleft|, |:belowright),
[:botright|, |:browse|, |:confirm|, |:hide|, |:horizontal](#:botright|, |:browse|, |:confirm|, |:hide|, |:horizontal),
[:keepalt|, |:keepjumps|, |:keepmarks|, |:keeppatterns](#:keepalt|, |:keepjumps|, |:keepmarks|, |:keeppatterns),
[:leftabove|, |:lockmarks|, |:noautocmd|, |:noswapfile](#:leftabove|, |:lockmarks|, |:noautocmd|, |:noswapfile)
[:rightbelow|, |:sandbox|, |:silent|, |:tab|, |:topleft](#:rightbelow|, |:sandbox|, |:silent|, |:tab|, |:topleft),
[:unsilent|, |:verbose|, and |:vertical](#:unsilent|, |:verbose|, and |:vertical).
Note that [:filter](#:filter) is not supported.
Examples:
```
command! -nargs=+ -complete=file MyEdit
\ for f in expand(<q-args>, 0, 1) |
\ exe '<mods> split ' .. f |
\ endfor

function! SpecialEdit(files, mods)
for f in expand(a:files, 0, 1)
exe a:mods .. ' split ' .. f
endfor
endfunction
command! -nargs=+ -complete=file Sedit
\ call SpecialEdit(<q-args>, <q-mods>)

```

### <a id="<reg> <register>" class="section-title" href="#<reg> <register>">Note:</a>

```
reg>	(See the '-register' attribute) The optional register,
if specified.  Otherwise, expands to nothing.  <register>
is a synonym for this.
### <a id="<args>" class="section-title" href="#<args>">Note:</a>

```
args>	The command arguments, exactly as supplied (but as
noted above, any count or register can consume some
of the arguments, which are then not part of <args>).

```
lt>	A single '<' (Less-Than) character.  This is needed if you
want to get a literal copy of one of these escape sequences
into the expansion - for example, to get <bang>, use

```
lt>bang>.

### <a id="<q-args>" class="section-title" href="#<q-args>">Note:</a>
If the first two characters of an escape sequence are "q-" (for example,

```
q-args>) then the value is quoted in such a way as to make it a valid value
for use in an expression.  This uses the argument as one single value.
When there is no argument <q-args> is an empty string.  See the
[q-args-example](#q-args-example) below.
### <a id="<f-args>" class="section-title" href="#<f-args>">Note:</a>
To allow commands to pass their arguments on to a user-defined function, there
is a special form <f-args> ("function args").  This splits the command
arguments at spaces and tabs, quotes each argument individually, and the

```
f-args> sequence is replaced by the comma-separated list of quoted arguments.
See the Mycmd example below.  If no arguments are given <f-args> is removed.
To embed whitespace into an argument of <f-args>, prepend a backslash.

```
f-args> replaces every pair of backslashes (\\) with one backslash.  A
backslash followed by a character other than white space or a backslash
remains unmodified.  Also see [f-args-example](#f-args-example) below.  Overview:

command		   <f-args> ~
XX ab		   "ab"
XX a\b		   'a\b'
XX a\ b		   'a b'
XX a\  b	   'a ', 'b'
XX a\\b		   'a\b'
XX a\\ b	   'a\', 'b'
XX a\\\b	   'a\\b'
XX a\\\ b	   'a\ b'
XX a\\\\b	   'a\\b'
XX a\\\\ b	   'a\\', 'b'


Examples for user commands:
```

" Delete everything after here to the end
:com Ddel +,$d

" Rename the current buffer
:com -nargs=1 -bang -complete=file Ren f <args>|w<bang>

" Replace a range with the contents of a file
" (Enter this all as one line)
:com -range -nargs=1 -complete=file
Replace <line1>-pu_[<line1>,<line2>d|r <args>](#<line1>,<line2>d|r <args>)<line1>d

" Count the number of lines in the range
:com! -range -nargs=0 Lines  echo <line2> - <line1> + 1 "lines"

### <a id="f-args-example" class="section-title" href="#f-args-example"><</a>
Call a user function (example of <f-args>)
```
### <a id=":com -nargs= Mycmd call Myfunc(<f-args>)" class="section-title" href="#:com -nargs= Mycmd call Myfunc(<f-args>)">Note:</a>

When executed as:
```
:Mycmd arg1 arg2
This will invoke:
```
:call Myfunc("arg1","arg2")

### <a id="q-args-example " class="section-title" href="#q-args-example "><</a>
A more substantial example:
```
:function Allargs(command)
:   let i = 0
:   while i < argc()
:	  if filereadable(argv(i))
:	     execute "e " .. argv(i)
:	     execute a:command
:      endif
:      let i = i + 1
:   endwhile
:endfunction
:command -nargs=+ -complete=command Allargs call Allargs(<q-args>)

The command Allargs takes any Vim command(s) as argument and executes it on all
files in the argument list.  Usage example (note use of the "e" flag to ignore
errors and the "update" command to write modified buffers):
```
:Allargs %s/foo/bar/ge|update
This will invoke:
```
:call Allargs("%s/foo/bar/ge|update")

```

When defining a user command in a script, it will be able to call functions
local to the script and use mappings local to the script.  When the user
invokes the user command, it will run in the context of the script it was
defined in.  This matters if [<SID>](#<SID>) is used in a command.

vim:tw=78:ts=8:noet:ft=help:norl:
