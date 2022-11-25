---
title:  Map
layout: ../../layouts/MainLayout.astro
---

  <a name="map.txt"></a><a name="key-mapping"></a><h1> Map</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/map.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Key mapping, abbreviations and user-defined commands.</div>
<div class="old-help-para">This subject is introduced in sections <a href="usr_05.html#05.3">05.3</a>, <a href="usr_24.html#24.7">24.7</a> and <a href="usr_40.html#40.1">40.1</a> of the user
manual.</div>
<div class="old-help-para"><h2 class="help-heading">1. Key mapping <a name="mapping"></a><span class="help-tag">mapping</span> <a name="macro"></a><span class="help-tag">macro</span></h2></div>
<div class="old-help-para">Key mapping is used to change the meaning of typed keys.  The most common use
is to define a sequence of commands for a function key.  Example:<pre>:map &lt;F2&gt; a&lt;C-R&gt;=strftime("%c")&lt;CR&gt;&lt;Esc&gt;</pre>
This appends the current date and time after the cursor (in &lt;&gt; notation <a href="intro.html#%3C%3E">&lt;&gt;</a>).</div>
<div class="old-help-para"><h3 class="help-heading">1.1 MAP COMMANDS<span class="help-heading-tags">					<a name="%3Amap-commands"></a><span class="help-tag">:map-commands</span></span></h3></div>
<div class="old-help-para">There are commands to enter new mappings, remove mappings and list mappings.
See <a href="map.html#map-overview">map-overview</a> for the various forms of "map" and their relationships with
modes.</div>
<div class="old-help-para"><code>{lhs}</code>	means left-hand-side	<a name="%7Blhs%7D"></a><code class="help-tag">{lhs}</code>
<code>{rhs}</code>	means right-hand-side	<a name="%7Brhs%7D"></a><code class="help-tag">{rhs}</code></div>
<div class="old-help-para">:map	<code>{lhs}</code> <code>{rhs}</code>		<a href="map.html#mapmode-nvo">mapmode-nvo</a>  		<a name="%3Amap"></a><code class="help-tag-right">:map</code>
:nm[ap]	<code>{lhs}</code> <code>{rhs}</code>		<a href="map.html#mapmode-n">mapmode-n</a>  		<a name="%3Anm"></a><code class="help-tag-right">:nm</code> <a name="%3Anmap"></a><code class="help-tag">:nmap</code>
:vm[ap]	<code>{lhs}</code> <code>{rhs}</code>		<a href="map.html#mapmode-v">mapmode-v</a>  		<a name="%3Avm"></a><code class="help-tag-right">:vm</code> <a name="%3Avmap"></a><code class="help-tag">:vmap</code>
:xm[ap]	<code>{lhs}</code> <code>{rhs}</code>		<a href="map.html#mapmode-x">mapmode-x</a>  		<a name="%3Axm"></a><code class="help-tag-right">:xm</code> <a name="%3Axmap"></a><code class="help-tag">:xmap</code>
:smap	<code>{lhs}</code> <code>{rhs}</code>		<a href="map.html#mapmode-s">mapmode-s</a>  		    <a name="%3Asmap"></a><code class="help-tag-right">:smap</code>
:om[ap]	<code>{lhs}</code> <code>{rhs}</code>		<a href="map.html#mapmode-o">mapmode-o</a>  		<a name="%3Aom"></a><code class="help-tag-right">:om</code> <a name="%3Aomap"></a><code class="help-tag">:omap</code>
:map!	<code>{lhs}</code> <code>{rhs}</code>		<a href="map.html#mapmode-ic">mapmode-ic</a>  		<a name="%3Amap%21"></a><code class="help-tag-right">:map!</code>
:im[ap]	<code>{lhs}</code> <code>{rhs}</code>		<a href="map.html#mapmode-i">mapmode-i</a>  		<a name="%3Aim"></a><code class="help-tag-right">:im</code> <a name="%3Aimap"></a><code class="help-tag">:imap</code>
:lm[ap]	<code>{lhs}</code> <code>{rhs}</code>		<a href="map.html#mapmode-l">mapmode-l</a>  		<a name="%3Alm"></a><code class="help-tag-right">:lm</code> <a name="%3Alma"></a><code class="help-tag">:lma</code> <a name="%3Almap"></a><code class="help-tag">:lmap</code>
:cm[ap]	<code>{lhs}</code> <code>{rhs}</code>		<a href="map.html#mapmode-c">mapmode-c</a>  		<a name="%3Acm"></a><code class="help-tag-right">:cm</code> <a name="%3Acmap"></a><code class="help-tag">:cmap</code>
:tma[p]	<code>{lhs}</code> <code>{rhs}</code>		<a href="map.html#mapmode-t">mapmode-t</a>  		<a name="%3Atma"></a><code class="help-tag-right">:tma</code> <a name="%3Atmap"></a><code class="help-tag">:tmap</code>
			Map the key sequence <code>{lhs}</code> to <code>{rhs}</code> for the modes
			where the map command applies.  The result, including
			<code>{rhs}</code>, is then further scanned for mappings.  This
			allows for nested and recursive use of mappings.
			Note: Trailing spaces are included in the <code>{rhs}</code>,
			because space is a valid Normal mode command.
			See <a href="map.html#map-trailing-white">map-trailing-white</a>.</div>
<div class="old-help-para">						<a name="%3Anore"></a><code class="help-tag-right">:nore</code> <a name="%3Anorem"></a><code class="help-tag">:norem</code>
:no[remap]  <code>{lhs}</code> <code>{rhs}</code>		<a href="map.html#mapmode-nvo">mapmode-nvo</a>  	<a name="%3Ano"></a><code class="help-tag">:no</code>  <a name="%3Anoremap"></a><code class="help-tag">:noremap</code> <a name="%3Anor"></a><code class="help-tag">:nor</code>
:nn[oremap] <code>{lhs}</code> <code>{rhs}</code>		<a href="map.html#mapmode-n">mapmode-n</a>  	<a name="%3Ann"></a><code class="help-tag">:nn</code>  <a name="%3Annoremap"></a><code class="help-tag">:nnoremap</code>
:vn[oremap] <code>{lhs}</code> <code>{rhs}</code>		<a href="map.html#mapmode-v">mapmode-v</a>  	<a name="%3Avn"></a><code class="help-tag">:vn</code>  <a name="%3Avnoremap"></a><code class="help-tag">:vnoremap</code>
:xn[oremap] <code>{lhs}</code> <code>{rhs}</code>		<a href="map.html#mapmode-x">mapmode-x</a>  	<a name="%3Axn"></a><code class="help-tag">:xn</code>  <a name="%3Axnoremap"></a><code class="help-tag">:xnoremap</code>
:snor[emap] <code>{lhs}</code> <code>{rhs}</code>		<a href="map.html#mapmode-s">mapmode-s</a>  	<a name="%3Asnor"></a><code class="help-tag">:snor</code> <a name="%3Asnore"></a><code class="help-tag">:snore</code> <a name="%3Asnoremap"></a><code class="help-tag">:snoremap</code>
:ono[remap] <code>{lhs}</code> <code>{rhs}</code>		<a href="map.html#mapmode-o">mapmode-o</a>  	<a name="%3Aono"></a><code class="help-tag">:ono</code> <a name="%3Aonoremap"></a><code class="help-tag">:onoremap</code>
:no[remap]! <code>{lhs}</code> <code>{rhs}</code>		<a href="map.html#mapmode-ic">mapmode-ic</a>  	<a name="%3Ano%21"></a><code class="help-tag">:no!</code> <a name="%3Anoremap%21"></a><code class="help-tag">:noremap!</code>
:ino[remap] <code>{lhs}</code> <code>{rhs}</code>		<a href="map.html#mapmode-i">mapmode-i</a>  	<a name="%3Aino"></a><code class="help-tag">:ino</code> <a name="%3Ainor"></a><code class="help-tag">:inor</code> <a name="%3Ainoremap"></a><code class="help-tag">:inoremap</code>
:ln[oremap] <code>{lhs}</code> <code>{rhs}</code>		<a href="map.html#mapmode-l">mapmode-l</a>  	<a name="%3Aln"></a><code class="help-tag">:ln</code>  <a name="%3Alnoremap"></a><code class="help-tag">:lnoremap</code>
:cno[remap] <code>{lhs}</code> <code>{rhs}</code>		<a href="map.html#mapmode-c">mapmode-c</a>  	<a name="%3Acno"></a><code class="help-tag">:cno</code> <a name="%3Acnor"></a><code class="help-tag">:cnor</code> <a name="%3Acnoremap"></a><code class="help-tag">:cnoremap</code>
:tno[remap] <code>{lhs}</code> <code>{rhs}</code>		<a href="map.html#mapmode-t">mapmode-t</a>  	<a name="%3Atno"></a><code class="help-tag">:tno</code> <a name="%3Atnoremap"></a><code class="help-tag">:tnoremap</code>
			Map the key sequence <code>{lhs}</code> to <code>{rhs}</code> for the modes
			where the map command applies.  Disallow mapping of
			<code>{rhs}</code>, to avoid nested and recursive mappings.  Often
			used to redefine a command.
			Note: When <code>&lt;Plug&gt;</code> appears in the <code>{rhs}</code> this part is
			always applied even if remapping is disallowed.</div>
<div class="old-help-para">:unm[ap]  <code>{lhs}</code>			<a href="map.html#mapmode-nvo">mapmode-nvo</a>  		<a name="%3Aunm"></a><code class="help-tag-right">:unm</code>  <a name="%3Aunmap"></a><code class="help-tag">:unmap</code>
:nun[map] <code>{lhs}</code>			<a href="map.html#mapmode-n">mapmode-n</a>  		<a name="%3Anun"></a><code class="help-tag-right">:nun</code>  <a name="%3Anunmap"></a><code class="help-tag">:nunmap</code>
:vu[nmap] <code>{lhs}</code>			<a href="map.html#mapmode-v">mapmode-v</a>  		<a name="%3Avu"></a><code class="help-tag-right">:vu</code>   <a name="%3Avunmap"></a><code class="help-tag">:vunmap</code>
:xu[nmap] <code>{lhs}</code>			<a href="map.html#mapmode-x">mapmode-x</a>  		<a name="%3Axu"></a><code class="help-tag-right">:xu</code>   <a name="%3Axunmap"></a><code class="help-tag">:xunmap</code>
:sunm[ap] <code>{lhs}</code>			<a href="map.html#mapmode-s">mapmode-s</a>  		<a name="%3Asunm"></a><code class="help-tag-right">:sunm</code> <a name="%3Asunmap"></a><code class="help-tag">:sunmap</code>
:ou[nmap] <code>{lhs}</code>			<a href="map.html#mapmode-o">mapmode-o</a>  		<a name="%3Aou"></a><code class="help-tag-right">:ou</code>   <a name="%3Aounmap"></a><code class="help-tag">:ounmap</code>
:unm[ap]! <code>{lhs}</code>			<a href="map.html#mapmode-ic">mapmode-ic</a>  		<a name="%3Aunm%21"></a><code class="help-tag-right">:unm!</code> <a name="%3Aunmap%21"></a><code class="help-tag">:unmap!</code>
:iu[nmap] <code>{lhs}</code>			<a href="map.html#mapmode-i">mapmode-i</a>  		<a name="%3Aiu"></a><code class="help-tag-right">:iu</code>   <a name="%3Aiunmap"></a><code class="help-tag">:iunmap</code>
:lu[nmap] <code>{lhs}</code>			<a href="map.html#mapmode-l">mapmode-l</a>  		<a name="%3Alu"></a><code class="help-tag-right">:lu</code>   <a name="%3Alunmap"></a><code class="help-tag">:lunmap</code>
:cu[nmap] <code>{lhs}</code>			<a href="map.html#mapmode-c">mapmode-c</a>  		<a name="%3Acu"></a><code class="help-tag-right">:cu</code>   <a name="%3Acun"></a><code class="help-tag">:cun</code> <a name="%3Acunmap"></a><code class="help-tag">:cunmap</code>
:tunma[p] <code>{lhs}</code>			<a href="map.html#mapmode-t">mapmode-t</a>  		<a name="%3Atunma"></a><code class="help-tag-right">:tunma</code> <a name="%3Atunmap"></a><code class="help-tag">:tunmap</code>
			Remove the mapping of <code>{lhs}</code> for the modes where the
			map command applies.  The mapping may remain defined
			for other modes where it applies.
			It also works when <code>{lhs}</code> matches the <code>{rhs}</code> of a
			mapping. This is for when an abbreviation applied.
			Note: Trailing spaces are included in the <code>{lhs}</code>.
			See <a href="map.html#map-trailing-white">map-trailing-white</a>.</div>
<div class="old-help-para">:mapc[lear]			<a href="map.html#mapmode-nvo">mapmode-nvo</a>  		<a name="%3Amapc"></a><code class="help-tag-right">:mapc</code>   <a name="%3Amapclear"></a><code class="help-tag">:mapclear</code>
:nmapc[lear]			<a href="map.html#mapmode-n">mapmode-n</a>  		<a name="%3Anmapc"></a><code class="help-tag-right">:nmapc</code>  <a name="%3Anmapclear"></a><code class="help-tag">:nmapclear</code>
:vmapc[lear]			<a href="map.html#mapmode-v">mapmode-v</a>  		<a name="%3Avmapc"></a><code class="help-tag-right">:vmapc</code>  <a name="%3Avmapclear"></a><code class="help-tag">:vmapclear</code>
:xmapc[lear]			<a href="map.html#mapmode-x">mapmode-x</a>  		<a name="%3Axmapc"></a><code class="help-tag-right">:xmapc</code>  <a name="%3Axmapclear"></a><code class="help-tag">:xmapclear</code>
:smapc[lear]			<a href="map.html#mapmode-s">mapmode-s</a>  		<a name="%3Asmapc"></a><code class="help-tag-right">:smapc</code>  <a name="%3Asmapclear"></a><code class="help-tag">:smapclear</code>
:omapc[lear]			<a href="map.html#mapmode-o">mapmode-o</a>  		<a name="%3Aomapc"></a><code class="help-tag-right">:omapc</code>  <a name="%3Aomapclear"></a><code class="help-tag">:omapclear</code>
:mapc[lear]!			<a href="map.html#mapmode-ic">mapmode-ic</a>  		<a name="%3Amapc%21"></a><code class="help-tag-right">:mapc!</code>  <a name="%3Amapclear%21"></a><code class="help-tag">:mapclear!</code>
:imapc[lear]			<a href="map.html#mapmode-i">mapmode-i</a>  		<a name="%3Aimapc"></a><code class="help-tag-right">:imapc</code>  <a name="%3Aimapclear"></a><code class="help-tag">:imapclear</code>
:lmapc[lear]			<a href="map.html#mapmode-l">mapmode-l</a>  		<a name="%3Almapc"></a><code class="help-tag-right">:lmapc</code>  <a name="%3Almapclear"></a><code class="help-tag">:lmapclear</code>
:cmapc[lear]			<a href="map.html#mapmode-c">mapmode-c</a>  		<a name="%3Acmapc"></a><code class="help-tag-right">:cmapc</code>  <a name="%3Acmapclear"></a><code class="help-tag">:cmapclear</code>
:tmapc[lear]			<a href="map.html#mapmode-t">mapmode-t</a>  		<a name="%3Atmapc"></a><code class="help-tag-right">:tmapc</code>  <a name="%3Atmapclear"></a><code class="help-tag">:tmapclear</code>
			Remove ALL mappings for the modes where the map
			command applies.
			Use the <code>&lt;buffer&gt;</code> argument to remove buffer-local
			mappings <a href="map.html#%3Amap-%3Cbuffer%3E">:map-&lt;buffer&gt;</a>
			Warning: This also removes the <a href="vim_diff.html#default-mappings">default-mappings</a>.</div>
<div class="old-help-para">:map				<a href="map.html#mapmode-nvo">mapmode-nvo</a>
:nm[ap]				<a href="map.html#mapmode-n">mapmode-n</a>
:vm[ap]				<a href="map.html#mapmode-v">mapmode-v</a>
:xm[ap]				<a href="map.html#mapmode-x">mapmode-x</a>
:sm[ap]				<a href="map.html#mapmode-s">mapmode-s</a>
:om[ap]				<a href="map.html#mapmode-o">mapmode-o</a>
:map!				<a href="map.html#mapmode-ic">mapmode-ic</a>
:im[ap]				<a href="map.html#mapmode-i">mapmode-i</a>
:lm[ap]				<a href="map.html#mapmode-l">mapmode-l</a>
:cm[ap]				<a href="map.html#mapmode-c">mapmode-c</a>
:tma[p]				<a href="map.html#mapmode-t">mapmode-t</a>
			List all key mappings for the modes where the map
			command applies.  Note that ":map" and ":map!" are
			used most often, because they include the other modes.</div>
<div class="old-help-para">:map    <code>{lhs}</code>			<a href="map.html#mapmode-nvo">mapmode-nvo</a>  		<a name="%3Amap_l"></a><code class="help-tag-right">:map_l</code>
:nm[ap] <code>{lhs}</code>			<a href="map.html#mapmode-n">mapmode-n</a>  		<a name="%3Anmap_l"></a><code class="help-tag-right">:nmap_l</code>
:vm[ap] <code>{lhs}</code>			<a href="map.html#mapmode-v">mapmode-v</a>  		<a name="%3Avmap_l"></a><code class="help-tag-right">:vmap_l</code>
:xm[ap] <code>{lhs}</code>			<a href="map.html#mapmode-x">mapmode-x</a>  		<a name="%3Axmap_l"></a><code class="help-tag-right">:xmap_l</code>
:sm[ap] <code>{lhs}</code>			<a href="map.html#mapmode-s">mapmode-s</a>  		<a name="%3Asmap_l"></a><code class="help-tag-right">:smap_l</code>
:om[ap] <code>{lhs}</code>			<a href="map.html#mapmode-o">mapmode-o</a>  		<a name="%3Aomap_l"></a><code class="help-tag-right">:omap_l</code>
:map!   <code>{lhs}</code>			<a href="map.html#mapmode-ic">mapmode-ic</a>  		<a name="%3Amap_l%21"></a><code class="help-tag-right">:map_l!</code>
:im[ap] <code>{lhs}</code>			<a href="map.html#mapmode-i">mapmode-i</a>  		<a name="%3Aimap_l"></a><code class="help-tag-right">:imap_l</code>
:lm[ap] <code>{lhs}</code>			<a href="map.html#mapmode-l">mapmode-l</a>  		<a name="%3Almap_l"></a><code class="help-tag-right">:lmap_l</code>
:cm[ap] <code>{lhs}</code>			<a href="map.html#mapmode-c">mapmode-c</a>  		<a name="%3Acmap_l"></a><code class="help-tag-right">:cmap_l</code>
:tma[p] <code>{lhs}</code>			<a href="map.html#mapmode-t">mapmode-t</a>  		<a name="%3Atmap_l"></a><code class="help-tag-right">:tmap_l</code>
			List the key mappings for the key sequences starting
			with <code>{lhs}</code> in the modes where the map command applies.</div>
<div class="old-help-para">These commands are used to map a key or key sequence to a string of
characters.  You can use this to put command sequences under function keys,
translate one key into another, etc.  See <a href="starting.html#%3Amkexrc">:mkexrc</a> for how to save and
restore the current mappings.</div>
<div class="old-help-para">							<a name="map-ambiguous"></a><code class="help-tag-right">map-ambiguous</code>
When two mappings start with the same sequence of characters, they are
ambiguous.  Example:<pre>:imap aa foo
:imap aaa bar</pre>
When Vim has read "aa", it will need to get another character to be able to
decide if "aa" or "aaa" should be mapped.  This means that after typing "aa"
that mapping won't get expanded yet, Vim is waiting for another character.
If you type a space, then "foo" will get inserted, plus the space.  If you
type "a", then "bar" will get inserted.</div>
<div class="old-help-para"><div class="help-column_heading">Trailing white space</div>							<a name="map-trailing-white"></a><code class="help-tag-right">map-trailing-white</code>
This unmap command does NOT work:<pre>:map @@ foo
:unmap @@ | print</pre>
Because it tries to unmap "@@ ", including the white space before the command
separator "|".  Other examples with trailing white space:<pre>unmap @@ 
unmap @@     " comment</pre>
An error will be issued, which is very hard to identify, because the ending
whitespace character in <code>unmap @@</code> is not visible.</div>
<div class="old-help-para">A generic solution is to put the command separator "|" right after the mapped
keys.  After that white space and a comment may follow:<pre>unmap @@|    " comment</pre>
<h3 class="help-heading">1.2 SPECIAL ARGUMENTS<span class="help-heading-tags">					<a name="%3Amap-arguments"></a><span class="help-tag">:map-arguments</span></span></h3></div>
<div class="old-help-para">"&lt;buffer&gt;", "&lt;nowait&gt;", "&lt;silent&gt;", "&lt;script&gt;", "&lt;expr&gt;" and
"&lt;unique&gt;" can be used in any order.  They must appear right after the
command, before any other arguments.</div>
<div class="old-help-para">					<a name="%3Amap-local"></a><code class="help-tag-right">:map-local</code> <a name="%3Amap-%3Cbuffer%3E"></a><code class="help-tag">:map-&lt;buffer&gt;</code> <a name="%3Amap-buffer"></a><code class="help-tag">:map-buffer</code>
					<a name="E224"></a><code class="help-tag-right">E224</code> <a name="E225"></a><code class="help-tag">E225</code>
If the first argument to one of these commands is "&lt;buffer&gt;" the mapping will
be effective in the current buffer only.  Example:<pre>:map &lt;buffer&gt;  ,w  /[.,;]&lt;CR&gt;</pre>
Then you can map ",w" to something else in another buffer:<pre>:map &lt;buffer&gt;  ,w  /[#&amp;!]&lt;CR&gt;</pre>
The local buffer mappings are used before the global ones.  See <code>&lt;nowait&gt;</code> below
to make a short local mapping not taking effect when a longer global one
exists.
The "&lt;buffer&gt;" argument can also be used to clear mappings:<pre>:unmap &lt;buffer&gt; ,w
:mapclear &lt;buffer&gt;</pre>
Local mappings are also cleared when a buffer is deleted, but not when it is
unloaded.  Just like local option values.
Also see <a href="map.html#map-precedence">map-precedence</a>.</div>
<div class="old-help-para">						<a name="%3Amap-%3Cnowait%3E"></a><code class="help-tag-right">:map-&lt;nowait&gt;</code> <a name="%3Amap-nowait"></a><code class="help-tag">:map-nowait</code>
When defining a buffer-local mapping for "," there may be a global mapping
that starts with ",".  Then you need to type another character for Vim to know
whether to use the "," mapping or the longer one.  To avoid this add the
<code>&lt;nowait&gt;</code> argument.  Then the mapping will be used when it matches, Vim does
not wait for more characters to be typed.  However, if the characters were
already typed they are used.
Note that this works when the <code>&lt;nowait&gt;</code> mapping fully matches and is found
before any partial matches.  This works when:
<div class="help-li" style=""> There is only one matching buffer-local mapping, since these are always
  found before global mappings.
</div><div class="help-li" style=""> There is another buffer-local mapping that partly matches, but it is
  defined earlier (last defined mapping is found first).
</div></div>
<div class="old-help-para">						<a name="%3Amap-%3Csilent%3E"></a><code class="help-tag-right">:map-&lt;silent&gt;</code> <a name="%3Amap-silent"></a><code class="help-tag">:map-silent</code>
To define a mapping which will not be echoed on the command line, add
"&lt;silent&gt;" as the first argument.  Example:<pre>:map &lt;silent&gt; ,h /Header&lt;CR&gt;</pre>
The search string will not be echoed when using this mapping.  Messages from
the executed command are still given though.  To shut them up too, add a
":silent" in the executed command:<pre>:map &lt;silent&gt; ,h :exe ":silent normal /Header\r"&lt;CR&gt;</pre>
Note that the effect of a command might also be silenced, e.g., when the
mapping selects another entry for command line completion it won't be
displayed.
Prompts will still be given, e.g., for inputdialog().
Using "&lt;silent&gt;" for an abbreviation is possible, but will cause redrawing of
the command line to fail.</div>
<div class="old-help-para">						<a name="%3Amap-%3Cscript%3E"></a><code class="help-tag-right">:map-&lt;script&gt;</code> <a name="%3Amap-script"></a><code class="help-tag">:map-script</code>
If the first argument to one of these commands is "&lt;script&gt;" and it is used to
define a new mapping or abbreviation, the mapping will only remap characters
in the <code>{rhs}</code> using mappings that were defined local to a script, starting with
"&lt;SID&gt;".  This can be used to avoid that mappings from outside a script
interfere (e.g., when <code>CTRL-V</code> is remapped in mswin.vim), but do use other
mappings defined in the script.
Note: ":map <code>&lt;script&gt;</code>" and ":noremap <code>&lt;script&gt;</code>" do the same thing.  The
"&lt;script&gt;" overrules the command name.  Using ":noremap <code>&lt;script&gt;</code>" is
preferred, because it's clearer that remapping is (mostly) disabled.</div>
<div class="old-help-para">				<a name="%3Amap-%3Cunique%3E"></a><code class="help-tag-right">:map-&lt;unique&gt;</code> <a name="%3Amap-unique"></a><code class="help-tag">:map-unique</code> <a name="E226"></a><code class="help-tag">E226</code> <a name="E227"></a><code class="help-tag">E227</code>
If the first argument to one of these commands is "&lt;unique&gt;" and it is used to
define a new mapping or abbreviation, the command will fail if the mapping or
abbreviation already exists.  Example:<pre>:map &lt;unique&gt; ,w  /[#&amp;!]&lt;CR&gt;</pre>
When defining a local mapping, there will also be a check if a global map
already exists which is equal.
Example of what will fail:<pre>:map ,w  /[#&amp;!]&lt;CR&gt;
:map &lt;buffer&gt; &lt;unique&gt; ,w  /[.,;]&lt;CR&gt;</pre>
If you want to map a key and then have it do what it was originally mapped to,
have a look at <a href="builtin.html#maparg()">maparg()</a>.</div>
<div class="old-help-para">						<a name="%3Amap-%3Cexpr%3E"></a><code class="help-tag-right">:map-&lt;expr&gt;</code> <a name="%3Amap-expression"></a><code class="help-tag">:map-expression</code>
If the first argument to one of these commands is "&lt;expr&gt;" and it is used to
define a new mapping or abbreviation, the argument is an expression.  The
expression is evaluated to obtain the <code>{rhs}</code> that is used.  Example:<pre>:inoremap &lt;expr&gt; . &lt;SID&gt;InsertDot()</pre>
The result of the s:InsertDot() function will be inserted.  It could check the
text before the cursor and start omni completion when some condition is met.
Using a script-local function is preferred, to avoid polluting the global
namespace.  Use <code>&lt;SID&gt;</code> in the RHS so that the script that the mapping was
defined in can be found.</div>
<div class="old-help-para">For abbreviations <a href="eval.html#v%3Achar">v:char</a> is set to the character that was typed to trigger
the abbreviation.  You can use this to decide how to expand the <code>{lhs}</code>.  You
should not either insert or change the v:char.</div>
<div class="old-help-para">In case you want the mapping to not do anything, you can have the expression
evaluate to an empty string.  If something changed that requires Vim to
go through the main loop (e.g. to update the display), return "\&lt;Ignore&gt;".
This is similar to "nothing" but makes Vim return from the loop that waits for
input.</div>
<div class="old-help-para">Keep in mind that the expression may be evaluated when looking for
typeahead, before the previous command has been executed.  For example:<pre>func StoreColumn()
  let g:column = col('.')
  return 'x'
endfunc
nnoremap &lt;expr&gt; x StoreColumn()
nmap ! f!x</pre>
You will notice that g:column has the value from before executing "f!",
because "x" is evaluated before "f!" is executed.
This can be solved by inserting <code>&lt;Ignore&gt;</code> before the character that is
expression-mapped:<pre>nmap ! f!&lt;Ignore&gt;x</pre>
Be very careful about side effects!  The expression is evaluated while
obtaining characters, you may very well make the command dysfunctional.
Therefore the following is blocked for <code>&lt;expr&gt;</code> mappings:
<div class="help-li" style=""> Changing the buffer text <a href="eval.html#textlock">textlock</a>.
</div><div class="help-li" style=""> Editing another buffer.
</div><div class="help-li" style=""> The <a href="various.html#%3Anormal">:normal</a> command.
</div><div class="help-li" style=""> Moving the cursor is allowed, but it is restored afterwards.
</div><div class="help-li" style=""> If the cmdline is changed, the old text and cursor position are restored.
If you want the mapping to do any of these let the returned characters do
that. (Or use a <a href="map.html#%3CCmd%3E">&lt;Cmd&gt;</a> mapping instead.)
</div></div>
<div class="old-help-para">You can use getchar(), it consumes typeahead if there is any. E.g., if you
have these mappings:<pre>inoremap &lt;expr&gt; &lt;C-L&gt; nr2char(getchar())
inoremap &lt;expr&gt; &lt;C-L&gt;x "foo"</pre>
If you now type <code>CTRL-L</code> nothing happens yet, Vim needs the next character to
decide what mapping to use.  If you type 'x' the second mapping is used and
"foo" is inserted.  If you type any other key the first mapping is used,
getchar() gets the typed key and returns it.</div>
<div class="old-help-para">Here is an example that inserts a list number that increases:<pre>let counter = 0
inoremap &lt;expr&gt; &lt;C-L&gt; ListItem()
inoremap &lt;expr&gt; &lt;C-R&gt; ListReset()

func ListItem()
  let g:counter += 1
  return g:counter .. '. '
endfunc

func ListReset()
  let g:counter = 0
  return ''
endfunc</pre>
CTRL-L inserts the next number, <code>CTRL-R</code> resets the count.  <code>CTRL-R</code> returns an
empty string, so that nothing is inserted.</div>
<div class="old-help-para">Note that using 0x80 as a single byte before other text does not work, it will
be seen as a special key.</div>
<div class="old-help-para">						<a name="%3CCmd%3E"></a><code class="help-tag-right">&lt;Cmd&gt;</code> <a name="%3Amap-cmd"></a><code class="help-tag">:map-cmd</code>
The <code>&lt;Cmd&gt;</code> pseudokey begins a "command mapping", which executes the command
directly (without changing modes).  Where you might use ":...&lt;CR&gt;" in the
<code>{rhs}</code> of a mapping, you can instead use "&lt;Cmd&gt;...&lt;CR&gt;".
Example:<pre>noremap x &lt;Cmd&gt;echo mode(1)&lt;cr&gt;</pre></div>
<div class="old-help-para">This is more flexible than <code>:&lt;C-U&gt;</code> in visual and operator-pending mode, or
<code>&lt;C-O&gt;:</code> in insert-mode, because the commands are executed directly in the
current mode (instead of always going to normal-mode).  Visual-mode is
preserved, so tricks with <a href="visual.html#gv">gv</a> are not needed.  Commands can be invoked
directly in cmdline-mode (which would otherwise require timer hacks).</div>
<div class="old-help-para">Unlike <code>&lt;expr&gt;</code> mappings, there are no special restrictions on the <code>&lt;Cmd&gt;</code>
command: it is executed as if an (unrestricted) <a href="autocmd.html#autocommand">autocommand</a> was invoked
or an async event event was processed.</div>
<div class="old-help-para">Note:
<div class="help-li" style=""> Because <code>&lt;Cmd&gt;</code> avoids mode-changes (unlike ":") it does not trigger
  <a href="autocmd.html#CmdlineEnter">CmdlineEnter</a> and <a href="autocmd.html#CmdlineLeave">CmdlineLeave</a> events. This helps performance.
</div><div class="help-li" style=""> For the same reason, <a href="intro.html#keycodes">keycodes</a> like <code>&lt;C-R&gt;</code><code>&lt;C-W&gt;</code> are interpreted as plain,
  unmapped keys.
</div><div class="help-li" style=""> The command is not echo'ed, no need for <code>&lt;silent&gt;</code>.
</div><div class="help-li" style=""> The <code>{rhs}</code> is not subject to abbreviations nor to other mappings, even if the
  mapping is recursive.
</div><div class="help-li" style=""> In Visual mode  you can use <code>line('v')</code> and <code>col('v')</code> to get one end of the
  Visual area, the cursor is at the other end.
</div></div>
<div class="old-help-para">							<a name="E5520"></a><code class="help-tag-right">E5520</code>
<code>&lt;Cmd&gt;</code> commands must terminate, that is, they must be followed by <code>&lt;CR&gt;</code> in the
<code>{rhs}</code> of the mapping definition.  <a href="cmdline.html#Command-line">Command-line</a> mode is never entered.</div>
<div class="old-help-para"><h3 class="help-heading">1.3 MAPPING AND MODES<span class="help-heading-tags">					<a name="%3Amap-modes"></a><span class="help-tag">:map-modes</span></span></h3>		<a name="mapmode-nvo"></a><code class="help-tag-right">mapmode-nvo</code> <a name="mapmode-n"></a><code class="help-tag">mapmode-n</code> <a name="mapmode-v"></a><code class="help-tag">mapmode-v</code> <a name="mapmode-o"></a><code class="help-tag">mapmode-o</code> <a name="mapmode-t"></a><code class="help-tag">mapmode-t</code></div>
<div class="old-help-para">There are seven sets of mappings
<div class="help-li" style=""> For Normal mode: When typing commands.
</div><div class="help-li" style=""> For Visual mode: When typing commands while the Visual area is highlighted.
</div><div class="help-li" style=""> For Select mode: like Visual mode but typing text replaces the selection.
</div><div class="help-li" style=""> For Operator-pending mode: When an operator is pending (after "d", "y", "c",
  etc.).  See below: <a href="map.html#omap-info">omap-info</a>.
</div><div class="help-li" style=""> For Insert mode.  These are also used in Replace mode.
</div><div class="help-li" style=""> For Command-line mode: When entering a ":" or "/" command.
</div><div class="help-li" style=""> For Terminal mode: When typing in a <a href="various.html#%3Aterminal">:terminal</a> buffer.
</div></div>
<div class="old-help-para">Special case: While typing a count for a command in Normal mode, mapping zero
is disabled.  This makes it possible to map zero without making it impossible
to type a count with a zero.</div>
<div class="old-help-para">						<a name="map-overview"></a><code class="help-tag-right">map-overview</code> <a name="map-modes"></a><code class="help-tag">map-modes</code>
Overview of which map command works in which mode.  More details below.
<div class="help-column_heading">     COMMANDS                    MODES</div>:map   :noremap  :unmap     Normal, Visual, Select, Operator-pending
:nmap  :nnoremap :nunmap    Normal
:vmap  :vnoremap :vunmap    Visual and Select
:smap  :snoremap :sunmap    Select
:xmap  :xnoremap :xunmap    Visual
:omap  :onoremap :ounmap    Operator-pending
:map!  :noremap! :unmap!    Insert and Command-line
:imap  :inoremap :iunmap    Insert
:lmap  :lnoremap :lunmap    Insert, Command-line, Lang-Arg
:cmap  :cnoremap :cunmap    Command-line
:tmap  :tnoremap :tunmap    Terminal</div>
<div class="old-help-para">Same information in a table:
							<a name="map-table"></a><code class="help-tag-right">map-table</code>
<div class="help-column_heading">         Mode  | Norm | Ins | Cmd | Vis | Sel | Opr | Term | Lang |</div><div class="help-column_heading">Command        +------+-----+-----+-----+-----+-----+------+------+</div>[nore]map      | yes  |  -  |  -  | yes | yes | yes |  -   |  -   |
n[nore]map     | yes  |  -  |  -  |  -  |  -  |  -  |  -   |  -   |
[nore]map!     |  -   | yes | yes |  -  |  -  |  -  |  -   |  -   |
i[nore]map     |  -   | yes |  -  |  -  |  -  |  -  |  -   |  -   |
c[nore]map     |  -   |  -  | yes |  -  |  -  |  -  |  -   |  -   |
v[nore]map     |  -   |  -  |  -  | yes | yes |  -  |  -   |  -   |
x[nore]map     |  -   |  -  |  -  | yes |  -  |  -  |  -   |  -   |
s[nore]map     |  -   |  -  |  -  |  -  | yes |  -  |  -   |  -   |
o[nore]map     |  -   |  -  |  -  |  -  |  -  | yes |  -   |  -   |
t[nore]map     |  -   |  -  |  -  |  -  |  -  |  -  | yes  |  -   |
l[nore]map     |  -   | yes | yes |  -  |  -  |  -  |  -   | yes  |</div>
<div class="old-help-para"><div class="help-column_heading">    COMMANDS				      MODES</div><div class="help-column_heading">				       Normal  Visual+Select  Operator-pending</div>:map   :noremap   :unmap   :mapclear	 yes	    yes		   yes
:nmap  :nnoremap  :nunmap  :nmapclear	 yes	     -			    -
:vmap  :vnoremap  :vunmap  :vmapclear	  -		    yes		    -
:omap  :onoremap  :ounmap  :omapclear	  -		     -			   yes</div>
<div class="old-help-para">:nunmap can also be used outside of a monastery.
						<a name="mapmode-x"></a><code class="help-tag-right">mapmode-x</code> <a name="mapmode-s"></a><code class="help-tag">mapmode-s</code>
Some commands work both in Visual and Select mode, some in only one.  Note
that quite often "Visual" is mentioned where both Visual and Select mode
apply. <a href="visual.html#Select-mode-mapping">Select-mode-mapping</a>
NOTE: Mapping a printable character in Select mode may confuse the user.  It's
better to explicitly use :xmap and :smap for printable characters.  Or use
:sunmap after defining the mapping.</div>
<div class="old-help-para"><div class="help-column_heading">    COMMANDS				      MODES</div><div class="help-column_heading">					  Visual    Select</div>:vmap  :vnoremap  :vunmap  :vmapclear	    yes      yes
:xmap  :xnoremap  :xunmap  :xmapclear	    yes       -
:smap  :snoremap  :sunmap  :smapclear	    -		     yes</div>
<div class="old-help-para">			<a name="mapmode-ic"></a><code class="help-tag-right">mapmode-ic</code> <a name="mapmode-i"></a><code class="help-tag">mapmode-i</code> <a name="mapmode-c"></a><code class="help-tag">mapmode-c</code> <a name="mapmode-l"></a><code class="help-tag">mapmode-l</code>
Some commands work both in Insert mode and Command-line mode, some not:</div>
<div class="old-help-para"><div class="help-column_heading">    COMMANDS				      MODES</div><div class="help-column_heading">					  Insert  Command-line	Lang-Arg</div>:map!  :noremap!  :unmap!  :mapclear!	    yes	       yes	   -
:imap  :inoremap  :iunmap  :imapclear	    yes		-		   -
:cmap  :cnoremap  :cunmap  :cmapclear	     -		       yes	   -
:lmap  :lnoremap  :lunmap  :lmapclear	    yes*       yes*	  yes*</div>
<div class="old-help-para"><div class="help-li" style=""> If <a href="options.html#'iminsert'">'iminsert'</a> is 1, see <a href="map.html#language-mapping">language-mapping</a> below.
</div></div>
<div class="old-help-para">The original Vi did not have separate mappings for
Normal/Visual/Operator-pending mode and for Insert/Command-line mode.
Therefore the ":map" and ":map!" commands enter and display mappings for
several modes.  In Vim you can use the ":nmap", ":vmap", ":omap", ":cmap" and
":imap" commands to enter mappings for each mode separately.</div>
<div class="old-help-para">							<a name="omap-info"></a><code class="help-tag-right">omap-info</code>
Operator-pending mappings can be used to define a movement command that can be
used with any operator.  Simple example:<pre>:omap { w</pre>
makes "y{" work like "yw" and "d{" like "dw".</div>
<div class="old-help-para">To ignore the starting cursor position and select different text, you can have
the omap start Visual mode to select the text to be operated upon.  Example
that operates on a function name in the current line:<pre>onoremap &lt;silent&gt; F :&lt;C-U&gt;normal! 0f(hviw&lt;CR&gt;</pre>
The <code>CTRL-U</code> (<code>&lt;C-U&gt;</code>) is used to remove the range that Vim may insert.  The
Normal mode commands find the first '(' character and select the first word
before it.  That usually is the function name.</div>
<div class="old-help-para">To enter a mapping for Normal and Visual mode, but not Operator-pending mode,
first define it for all three modes, then unmap it for
Operator-pending mode:<pre>:map    xx something-difficult
:ounmap xx</pre>
Likewise for a mapping for Visual and Operator-pending mode or Normal and
Operator-pending mode.</div>
<div class="old-help-para">						<a name="language-mapping"></a><code class="help-tag-right">language-mapping</code>
":lmap" defines a mapping that applies to:
<div class="help-li" style=""> Insert mode
</div><div class="help-li" style=""> Command-line mode
</div><div class="help-li" style=""> when entering a search pattern
</div><div class="help-li" style=""> the argument of the commands that accept a text character, such as "r" and
  "f"
</div><div class="help-li" style=""> for the input() line
Generally: Whenever a character is to be typed that is part of the text in the
buffer, not a Vim command character.  "Lang-Arg" isn't really another mode,
it's just used here for this situation.
   The simplest way to load a set of related language mappings is by using the
<a href="options.html#'keymap'">'keymap'</a> option.  See <a href="usr_45.html#45.5">45.5</a>.
   In Insert mode and in Command-line mode the mappings can be disabled with
the <code>CTRL-^</code> command <a href="insert.html#i_CTRL-%5E">i_CTRL-^</a> <a href="cmdline.html#c_CTRL-%5E">c_CTRL-^</a>. These commands change the value of
the <a href="options.html#'iminsert'">'iminsert'</a> option.  When starting to enter a normal command line (not a
search pattern) the mappings are disabled until a <code>CTRL-^</code> is typed.  The state
last used is remembered for Insert mode and Search patterns separately.  The
state for Insert mode is also used when typing a character as an argument to
command like "f" or "t".
   Language mappings will never be applied to already mapped characters.  They
are only used for typed characters.  This assumes that the language mapping
was already done when typing the mapping. Correspondingly, language mappings
are applied when recording macros, rather than when applying them.
</div></div>
<div class="old-help-para"><h3 class="help-heading">1.4 LISTING MAPPINGS<span class="help-heading-tags">					<a name="map-listing"></a><span class="help-tag">map-listing</span></span></h3></div>
<div class="old-help-para">When listing mappings the characters in the first two columns are:</div>
<div class="old-help-para"><div class="help-column_heading">      CHAR	MODE</div>     <code>&lt;Space&gt;</code>	Normal, Visual, Select and Operator-pending
	n	Normal
	v	Visual and Select
	s	Select
	x	Visual
	o	Operator-pending
	!	Insert and Command-line
	i	Insert
	l	":lmap" mappings for Insert, Command-line and Lang-Arg
	c	Command-line
	t	Terminal-Job</div>
<div class="old-help-para">Just before the <code>{rhs}</code> a special character can appear:
	*	indicates that it is not remappable
	&amp;	indicates that only script-local mappings are remappable
	@	indicates a buffer-local mapping

Everything from the first non-blank after <code>{lhs}</code> up to the end of the line
(or '|') is considered to be part of <code>{rhs}</code>.  This allows the <code>{rhs}</code> to end
with a space.</div>
<div class="old-help-para">Note: When using mappings for Visual mode, you can use the "'&lt;" mark, which
is the start of the last selected Visual area in the current buffer <a href="motion.html#'%3C">'&lt;</a>.</div>
<div class="old-help-para">The <a href="various.html#%3Afilter">:filter</a> command can be used to select what mappings to list.  The
pattern is matched against the <code>{lhs}</code> and <code>{rhs}</code> in the raw form.  If a
description was added using <a href="api.html#nvim_set_keymap()">nvim_set_keymap()</a> or <a href="api.html#nvim_buf_set_keymap()">nvim_buf_set_keymap()</a>
then the pattern is also matched against it.</div>
<div class="old-help-para">							<a name="%3Amap-verbose"></a><code class="help-tag-right">:map-verbose</code>
When <a href="options.html#'verbose'">'verbose'</a> is non-zero, listing a key map will also display where it was
last defined.  Example:<pre>:verbose map &lt;C-W&gt;*
n  &lt;C-W&gt;*      * &lt;C-W&gt;&lt;C-S&gt;*
        Last set from ~/.config/nvim/init.vim</pre>
See <a href="various.html#%3Averbose-cmd">:verbose-cmd</a> for more information.</div>
<div class="old-help-para"><h3 class="help-heading">1.5 MAPPING SPECIAL KEYS<span class="help-heading-tags">				<a name="%3Amap-special-keys"></a><span class="help-tag">:map-special-keys</span></span></h3></div>
<div class="old-help-para">There are two ways to map a special key:
1. The Vi-compatible method: Map the key code.  Often this is a sequence that
   starts with <code>&lt;Esc&gt;</code>.  To enter a mapping like this you type ":map " and then
   you have to type <code>CTRL-V</code> before hitting the function key.  Note that when
   the key code for the key is in the <a href="term.html#terminfo">terminfo</a> entry, it will automatically
   be translated into the internal code and become the second way of mapping.
2. The second method is to use the internal code for the function key.  To
   enter such a mapping type <code>CTRL-K</code> and then hit the function key, or use
   the form "#1", "#2", .. "#9", "#0", "&lt;Up&gt;", "&lt;S-Down&gt;", "&lt;S-F7&gt;", etc.
   (see table of keys <a href="intro.html#key-notation">key-notation</a>, all keys from <code>&lt;Up&gt;</code> can be used).  The
   first ten function keys can be defined in two ways: Just the number, like
   "#2", and with "&lt;F&gt;", like "&lt;F2&gt;".  Both stand for function key 2.  "#0"
   refers to function key 10.</div>
<div class="old-help-para">DETAIL: Vim first checks if a sequence from the keyboard is mapped.  If it
isn't the terminal key codes are tried.  If a terminal code is found it is
replaced with the internal code.  Then the check for a mapping is done again
(so you can map an internal code to something else).  What is written into the
script file depends on what is recognized. If the terminal key code was
recognized as a mapping the key code itself is written to the script file.  If
it was recognized as a terminal code the internal code is written to the
script file.</div>
<div class="old-help-para"><h3 class="help-heading">1.6 SPECIAL CHARACTERS<span class="help-heading-tags">					<a name="%3Amap-special-chars"></a><span class="help-tag">:map-special-chars</span></span></h3>						<a name="map_backslash"></a><code class="help-tag-right">map_backslash</code> <a name="map-backslash"></a><code class="help-tag">map-backslash</code>
Note that only <code>CTRL-V</code> is mentioned here as a special character for mappings
and abbreviations.  When <a href="options.html#'cpoptions'">'cpoptions'</a> does not contain 'B', a backslash can
also be used like <code>CTRL-V</code>.  The &lt;&gt; notation can be fully used then <a href="intro.html#%3C%3E">&lt;&gt;</a>.  But
you cannot use "&lt;C-V&gt;" like <code>CTRL-V</code> to escape the special meaning of what
follows.</div>
<div class="old-help-para">To map a backslash, or use a backslash literally in the <code>{rhs}</code>, the special
sequence "&lt;Bslash&gt;" can be used.  This avoids the need to double backslashes
when using nested mappings.</div>
<div class="old-help-para">						<a name="map_CTRL-C"></a><code class="help-tag-right">map_CTRL-C</code> <a name="map-CTRL-C"></a><code class="help-tag">map-CTRL-C</code>
Using <code>CTRL-C</code> in the <code>{lhs}</code> is possible, but it will only work when Vim is
waiting for a key, not when Vim is busy with something.  When Vim is busy
CTRL-C interrupts/breaks the command.
When using the GUI version on MS-Windows <code>CTRL-C</code> can be mapped to allow a Copy
command to the clipboard.  Use <code>CTRL-Break</code> to interrupt Vim.</div>
<div class="old-help-para">					<a name="map_space_in_lhs"></a><code class="help-tag-right">map_space_in_lhs</code> <a name="map-space_in_lhs"></a><code class="help-tag">map-space_in_lhs</code>
To include a space in <code>{lhs}</code> precede it with a <code>CTRL-V</code> (type two <code>CTRL-V</code>s for
each space).
					<a name="map_space_in_rhs"></a><code class="help-tag-right">map_space_in_rhs</code> <a name="map-space_in_rhs"></a><code class="help-tag">map-space_in_rhs</code>
If you want a <code>{rhs}</code> that starts with a space, use "&lt;Space&gt;".  To be fully Vi
compatible (but unreadable) don't use the <a href="intro.html#%3C%3E">&lt;&gt;</a> notation, precede <code>{rhs}</code> with a
single <code>CTRL-V</code> (you have to type <code>CTRL-V</code> two times).
						<a name="map_empty_rhs"></a><code class="help-tag-right">map_empty_rhs</code> <a name="map-empty-rhs"></a><code class="help-tag">map-empty-rhs</code>
You can create an empty <code>{rhs}</code> by typing nothing after a single <code>CTRL-V</code> (you
have to type <code>CTRL-V</code> two times).  Unfortunately, you cannot do this in a vimrc
file.
							<a href="intro.html#%3CNop%3E">&lt;Nop&gt;</a>
An easier way to get a mapping that doesn't produce anything, is to use
"&lt;Nop&gt;" for the <code>{rhs}</code>.  For example, to disable function key 8:<pre>:map  &lt;F8&gt;  &lt;Nop&gt;
:map! &lt;F8&gt;  &lt;Nop&gt;</pre></div>
<div class="old-help-para">							<a name="map-multibyte"></a><code class="help-tag-right">map-multibyte</code>
It is possible to map multibyte characters, but only the whole character.  You
cannot map the first byte only.  This was done to prevent problems in this
scenario:<pre>:set encoding=latin1
:imap &lt;M-C&gt; foo
:set encoding=utf-8</pre>
The mapping for <code>&lt;M-C&gt;</code> is defined with the latin1 encoding, resulting in a 0xc3
byte.  If you type the character á (0xe1 <code>&lt;M-a&gt;</code>) in UTF-8 encoding this is the
two bytes 0xc3 0xa1.  You don't want the 0xc3 byte to be mapped then or
otherwise it would be impossible to type the á character.</div>
<div class="old-help-para">					<a name="%3CLeader%3E"></a><code class="help-tag-right">&lt;Leader&gt;</code> <a name="mapleader"></a><code class="help-tag">mapleader</code>
To define a mapping which uses the "g:mapleader" variable, the special string
"&lt;Leader&gt;" can be used.  It is replaced with the string value of
"g:mapleader".  If "g:mapleader" is not set or empty, a backslash is used
instead.  Example:<pre>map &lt;Leader&gt;A  oanother line&lt;Esc&gt;</pre>
Works like:<pre>map \A  oanother line&lt;Esc&gt;</pre>
But after:
	let mapleader = ","
It works like:<pre>map ,A  oanother line&lt;Esc&gt;</pre>
Note that the value of "g:mapleader" is used at the moment the mapping is
defined.  Changing "g:mapleader" after that has no effect for already defined
mappings.</div>
<div class="old-help-para">					<a name="%3CLocalLeader%3E"></a><code class="help-tag-right">&lt;LocalLeader&gt;</code> <a name="maplocalleader"></a><code class="help-tag">maplocalleader</code>
<code>&lt;LocalLeader&gt;</code> is just like <code>&lt;Leader&gt;</code>, except that it uses "maplocalleader"
instead of "mapleader".  <code>&lt;LocalLeader&gt;</code> is to be used for mappings which are
local to a buffer.  Example:<pre>:map &lt;buffer&gt; &lt;LocalLeader&gt;A  oanother line&lt;Esc&gt;</pre></div>
<div class="old-help-para">In a global plugin <code>&lt;Leader&gt;</code> should be used and in a filetype plugin
<code>&lt;LocalLeader&gt;</code>.  "mapleader" and "maplocalleader" can be equal.  Although, if
you make them different, there is a smaller chance of mappings from global
plugins to clash with mappings for filetype plugins.  For example, you could
keep "mapleader" at the default backslash, and set "maplocalleader" to an
underscore.</div>
<div class="old-help-para">							<a name="map-%3CSID%3E"></a><code class="help-tag-right">map-&lt;SID&gt;</code>
In a script the special key name "&lt;SID&gt;" can be used to define a mapping
that's local to the script.  See <a href="map.html#%3CSID%3E">&lt;SID&gt;</a> for details.</div>
<div class="old-help-para">							<a name="%3CPlug%3E"></a><code class="help-tag-right">&lt;Plug&gt;</code>
The special key name "&lt;Plug&gt;" can be used for an internal mapping, which is
not to be matched with any key sequence.  This is useful in plugins
<a href="usr_41.html#using-%3CPlug%3E">using-&lt;Plug&gt;</a>.</div>
<div class="old-help-para">							<a name="%3CChar%3E"></a><code class="help-tag-right">&lt;Char&gt;</code> <a name="%3CChar-%3E"></a><code class="help-tag">&lt;Char-&gt;</code>
To map a character by its decimal, octal or hexadecimal number the <code>&lt;Char&gt;</code>
construct can be used:
	<code>&lt;Char-123&gt;</code>	character 123
	<code>&lt;Char-033&gt;</code>	character 27
	<code>&lt;Char-0x7f&gt;</code>	character 127
	<code>&lt;S-Char-114&gt;</code>    character 114 ('r') shifted ('R')
This is useful to specify a (multibyte) character in a <a href="options.html#'keymap'">'keymap'</a> file.
Upper and lowercase differences are ignored.</div>
<div class="old-help-para">							<a name="map-comments"></a><code class="help-tag-right">map-comments</code>
It is not possible to put a comment after these commands, because the '"'
character is considered to be part of the <code>{lhs}</code> or <code>{rhs}</code>. However, one can
use |<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+map.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/map.html%0D%0DContext%3A%0D%0D%60%60%60%0D%09%09%09%09%09%09%09%2Amap-comments%2A%0AIt%20is%20not%20possible%20to%20put%20a%20comment%20after%20these%20commands%2C%20because%20the%20'%22'%0Acharacter%20is%20considered%20to%20be%20part%20of%20the%20%7Blhs%7D%20or%20%7Brhs%7D.%20However%2C%20one%20can%0Ause%20%7C%22%2C%20since%20this%20starts%20a%20new%2C%20empty%20command%20with%20a%20comment.%0A%0A%09%09%09%09%09%09%09%2Amap_bar%2A%20%2Amap-bar%2A%0ASince%20the%20'%7C'%20character%20is%20used%20to%20separate%20a%20map%20command%20from%20the%20next%0D%60%60%60">",</a> since this starts a new, empty command with a comment.</div>
<div class="old-help-para">							<a name="map_bar"></a><code class="help-tag-right">map_bar</code> <a name="map-bar"></a><code class="help-tag">map-bar</code>
Since the '|' character is used to separate a map command from the next
command, you will have to do something special to include  a '|' in <code>{rhs}</code>.
There are three methods:
<div class="help-column_heading">   use	     works when			   example</div>   <code>&lt;Bar&gt;</code>     always			   :map _l :!ls <code>&lt;Bar&gt;</code> more^M
   \|	     'b' is not in <a href="options.html#'cpoptions'">'cpoptions'</a>	   :map _l :!ls \| more^M
   ^V|	     always			   :map _l :!ls ^V| more^M</div>
<div class="old-help-para">(here ^V stands for <code>CTRL-V</code>; to get one <code>CTRL-V</code> you have to type it twice; you
cannot use the &lt;&gt; notation "&lt;C-V&gt;" here).</div>
<div class="old-help-para">All three work when you use the default setting for <a href="options.html#'cpoptions'">'cpoptions'</a>.</div>
<div class="old-help-para">When 'b' is present in <a href="options.html#'cpoptions'">'cpoptions'</a>, "\|" will be recognized as a mapping
ending in a '\' and then another command.  This is Vi compatible, but
illogical when compared to other commands.</div>
<div class="old-help-para">						<a name="map_return"></a><code class="help-tag-right">map_return</code> <a name="map-return"></a><code class="help-tag">map-return</code>
When you have a mapping that contains an Ex command, you need to put a line
terminator after it to have it executed.  The use of <code>&lt;CR&gt;</code> is recommended for
this (see <a href="intro.html#%3C%3E">&lt;&gt;</a>).  Example:<pre>:map  _ls  :!ls -l %:S&lt;CR&gt;:echo "the end"&lt;CR&gt;</pre>
To avoid mapping of the characters you type in insert or Command-line mode,
type a <code>CTRL-V</code> first.  The mapping in Insert mode is disabled if the <a href="options.html#'paste'">'paste'</a>
option is on.
							<a name="map-error"></a><code class="help-tag-right">map-error</code>
Note that when an error is encountered (that causes an error message or beep)
the rest of the mapping is not executed.  This is Vi-compatible.</div>
<div class="old-help-para">Note that the second character (argument) of the commands @zZtTfF[]rm'`"v
and <code>CTRL-X</code> is not mapped.  This was done to be able to use all the named
registers and marks, even when the command with the same name has been
mapped.</div>
<div class="old-help-para"><h3 class="help-heading">1.7 WHAT KEYS TO MAP<span class="help-heading-tags">					<a name="map-which-keys"></a><span class="help-tag">map-which-keys</span></span></h3></div>
<div class="old-help-para">If you are going to map something, you will need to choose which key(s) to use
for the <code>{lhs}</code>.  You will have to avoid keys that are used for Vim commands,
otherwise you would not be able to use those commands anymore.  Here are a few
suggestions:
<div class="help-li" style=""> Function keys <code>&lt;F2&gt;</code>, <code>&lt;F3&gt;</code>, etc..  Also the shifted function keys <code>&lt;S-F1&gt;</code>,
  <code>&lt;S-F2&gt;</code>, etc.  Note that <code>&lt;F1&gt;</code> is already used for the help command.
</div><div class="help-li" style=""> Meta-keys (with the ALT key pressed).  Depending on your keyboard accented
  characters may be used as well. <a href="map.html#%3Amap-alt-keys">:map-alt-keys</a>
</div><div class="help-li" style=""> Use the '_' or ',' character and then any other character.  The "_" and ","
  commands do exist in Vim (see <a href="motion.html#_">_</a> and <a href="motion.html#%2C">,</a>), but you probably never use them.
</div><div class="help-li" style=""> Use a key that is a synonym for another command.  For example: <code>CTRL-P</code> and
  <code>CTRL-N</code>.  Use an extra character to allow more mappings.
</div><div class="help-li" style=""> The key defined by <code>&lt;Leader&gt;</code> and one or more other keys.  This is especially
  useful in scripts. <a href="map.html#mapleader">mapleader</a>
</div></div>
<div class="old-help-para">See the file "index" for keys that are not used and thus can be mapped without
losing any builtin function.  You can also use ":help <code>{key}</code>^D" to find out if
a key is used for some command.  (<code>{key}</code> is the specific key you want to find
out about, ^D is <code>CTRL-D</code>).</div>
<div class="old-help-para"><h3 class="help-heading">1.8 EXAMPLES<span class="help-heading-tags">						<a name="map-examples"></a><span class="help-tag">map-examples</span></span></h3></div>
<div class="old-help-para">A few examples (as you type them: for "&lt;CR&gt;" you type four characters).<pre>:map &lt;F3&gt;  o#include
:map &lt;M-g&gt; /foo&lt;CR&gt;cwbar&lt;Esc&gt;
:map _x    d/END/e&lt;CR&gt;
:map! qq   quadrillion questions</pre>
Multiplying a count</div>
<div class="old-help-para">When you type a count before triggering a mapping, it's like the count was
typed before the <code>{lhs}</code>.  For example, with this mapping:<pre>:map &lt;F4&gt;  3w</pre>
Typing 2&lt;F4&gt; will result in "23w". Thus not moving 2 * 3 words but 23 words.
If you want to multiply counts use the expression register:<pre>:map &lt;F4&gt;  @='3w'&lt;CR&gt;</pre>
The part between quotes is the expression being executed. <a href="change.html#%40%3D">@=</a></div>
<div class="old-help-para"><h3 class="help-heading">1.9 USING MAPPINGS<span class="help-heading-tags">					<a name="map-typing"></a><span class="help-tag">map-typing</span></span></h3></div>
<div class="old-help-para">Vim will compare what you type with the start of a mapped sequence.  If there
is an incomplete match, it will get more characters until there either is a
complete match or until there is no match at all.  Example: If you map! "qq",
the first 'q' will not appear on the screen until you type another
character.  This is because Vim cannot know if the next character will be a
'q' or not.  If the <a href="options.html#'timeout'">'timeout'</a> option is on (which is the default) Vim will
only wait for one second (or as long as specified with the <a href="options.html#'timeoutlen'">'timeoutlen'</a>
option).  After that it assumes that the 'q' is to be interpreted as such.  If
you type slowly, or your system is slow, reset the <a href="options.html#'timeout'">'timeout'</a> option.  Then you
might want to set the <a href="options.html#'ttimeout'">'ttimeout'</a> option.</div>
<div class="old-help-para">			      				<a name="map-precedence"></a><code class="help-tag-right">map-precedence</code>
Buffer-local mappings (defined using <a href="map.html#%3Amap-%3Cbuffer%3E">:map-&lt;buffer&gt;</a>) take precedence over
global mappings.  When a buffer-local mapping is the same as a global mapping,
Vim will use the buffer-local mapping.  In addition, Vim will use a complete
mapping immediately if it was defined with <code>&lt;nowait&gt;</code>, even if a longer mapping
has the same prefix.  For example, given the following two mappings:<pre>:map &lt;buffer&gt; &lt;nowait&gt; \a   :echo "Local \a"&lt;CR&gt;
:map                   \abc :echo "Global \abc"&lt;CR&gt;</pre>
When typing \a the buffer-local mapping will be used immediately.  Vim will
not wait for more characters to see if the user might be typing \abc.</div>
<div class="old-help-para">							<a name="map-keys-fails"></a><code class="help-tag-right">map-keys-fails</code>
There are situations where key codes might not be recognized:
<div class="help-li" style=""> Vim can only read part of the key code.  Mostly this is only the first
  character.  This happens on some Unix versions in an xterm.
</div><div class="help-li" style=""> The key code is after character(s) that are mapped.  E.g., "&lt;F1&gt;&lt;F1&gt;" or
  "g&lt;F1&gt;".
</div></div>
<div class="old-help-para">The result is that the key code is not recognized in this situation, and the
mapping fails.  There are two actions needed to avoid this problem:</div>
<div class="old-help-para"><div class="help-li" style=""> Remove the 'K' flag from <a href="options.html#'cpoptions'">'cpoptions'</a>.  This will make Vim wait for the rest
  of the characters of the function key.
</div><div class="help-li" style=""> When using <code>&lt;F1&gt;</code> to <code>&lt;F4&gt;</code> the actual key code generated may correspond to
  <code>&lt;xF1&gt;</code> to <code>&lt;xF4&gt;</code>.  There are mappings from <code>&lt;xF1&gt;</code> to <code>&lt;F1&gt;</code>, <code>&lt;xF2&gt;</code> to <code>&lt;F2&gt;</code>, etc.,
  but these are not recognized after another half a mapping.  Make sure the
  key codes for <code>&lt;F1&gt;</code> to <code>&lt;F4&gt;</code> are correct:<pre>:set &lt;F1&gt;=&lt;type CTRL-V&gt;&lt;type F1&gt;</pre>
</div></div>
<div class="old-help-para"> Type the <code>&lt;F1&gt;</code> as four characters.  The part after the "=" must be done with
  the actual keys, not the literal text.
Another solution is to use the actual key code in the mapping for the second
special key:<pre>:map &lt;F1&gt;&lt;Esc&gt;OP :echo "yes"&lt;CR&gt;</pre>
Don't type a real <code>&lt;Esc&gt;</code>, Vim will recognize the key code and replace it with
<code>&lt;F1&gt;</code> anyway.</div>
<div class="old-help-para">						<a name="recursive_mapping"></a><code class="help-tag-right">recursive_mapping</code>
If you include the <code>{lhs}</code> in the <code>{rhs}</code> you have a recursive mapping.  When
<code>{lhs}</code> is typed, it will be replaced with <code>{rhs}</code>.  When the <code>{lhs}</code> which is
included in <code>{rhs}</code> is encountered it will be replaced with <code>{rhs}</code>, and so on.
This makes it possible to repeat a command an infinite number of times.  The
only problem is that the only way to stop this is by causing an error.  The
macros to solve a maze uses this, look there for an example.  There is one
exception: If the <code>{rhs}</code> starts with <code>{lhs}</code>, the first character is not mapped
again (this is Vi compatible).
For example:<pre>:map ab abcd</pre>
will execute the "a" command and insert "bcd" in the text.  The "ab" in the
<code>{rhs}</code> will not be mapped again.</div>
<div class="old-help-para">If you want to exchange the meaning of two keys you should use the :noremap
command.  For example:<pre>:noremap k j
:noremap j k</pre>
This will exchange the cursor up and down commands.</div>
<div class="old-help-para">With the normal :map command mapping takes place until the text is found not
to be a part of a <code>{lhs}</code>.  For example, if you use:<pre>:map x y
:map y x</pre>
Vim will replace x with y, and then y with x, etc.  When this has happened
<a href="options.html#'maxmapdepth'">'maxmapdepth'</a> times (default 1000), Vim will give the error message
"recursive mapping".</div>
<div class="old-help-para">							<a name="%3Amap-undo"></a><code class="help-tag-right">:map-undo</code>
If you include an undo command inside a mapped sequence, this will bring the
text back in the state before executing the macro.  This is compatible with
the original Vi, as long as there is only one undo command in the mapped
sequence (having two undo commands in a mapped sequence did not make sense
in the original Vi, you would get back the text before the first undo).</div>
<div class="old-help-para"><h3 class="help-heading">1.10 MAPPING ALT-KEYS<span class="help-heading-tags">					<a name="%3Amap-alt-keys"></a><span class="help-tag">:map-alt-keys</span></span></h3></div>
<div class="old-help-para">In the GUI Nvim handles the <a href="intro.html#ALT">ALT</a> key itself, thus mapping keys with ALT
should always work.  But in a terminal Nvim gets a sequence of bytes and has
to figure out whether ALT was pressed.  Terminals may use ESC to indicate that
ALT was pressed.  If ESC is followed by a <code>{key}</code> within <a href="options.html#'ttimeoutlen'">'ttimeoutlen'</a>
milliseconds, the ESC is interpreted as:
        &lt;ALT-{key}&gt;
otherwise it is interpreted as two key presses:
        <code>&lt;ESC&gt;</code> <code>{key}</code></div>
<div class="old-help-para"><h3 class="help-heading">1.11 MAPPING AN OPERATOR<span class="help-heading-tags">				<a name="%3Amap-operator"></a><span class="help-tag">:map-operator</span></span></h3></div>
<div class="old-help-para">An operator is used before a <code>{motion}</code> command.  To define your own operator
you must create a mapping that first sets the <a href="options.html#'operatorfunc'">'operatorfunc'</a> option and then
invoke the <a href="map.html#g%40">g@</a> operator.  After the user types the <code>{motion}</code> command the
specified function will be called.</div>
<div class="old-help-para">							<a name="g%40"></a><code class="help-tag-right">g@</code> <a name="E774"></a><code class="help-tag">E774</code> <a name="E775"></a><code class="help-tag">E775</code>
g@{motion}		Call the function set by the <a href="options.html#'operatorfunc'">'operatorfunc'</a> option.
			The '[ mark is positioned at the start of the text
			moved over by <code>{motion}</code>, the '] mark on the last
			character of the text.
			The function is called with one String argument:
			    "line"	<code>{motion}</code> was <a href="motion.html#linewise">linewise</a>
			    "char"	<code>{motion}</code> was <a href="motion.html#charwise">charwise</a>
			    "block"	<code>{motion}</code> was <a href="visual.html#blockwise-visual">blockwise-visual</a>
			The type can be forced, see <a href="motion.html#forced-motion">forced-motion</a>.</div>
<div class="old-help-para">Here is an example that counts the number of spaces with <code>&lt;F4&gt;</code>:<pre>nnoremap &lt;expr&gt; &lt;F4&gt; CountSpaces()
xnoremap &lt;expr&gt; &lt;F4&gt; CountSpaces()
" doubling &lt;F4&gt; works on a line
nnoremap &lt;expr&gt; &lt;F4&gt;&lt;F4&gt; CountSpaces() .. '_'

function CountSpaces(type = '') abort
  if a:type == ''
    set opfunc=CountSpaces
    return 'g@'
  endif

  let sel_save = &amp;selection
  let reg_save = getreginfo('"')
  let cb_save = &amp;clipboard
  let visual_marks_save = [getpos("'&lt;"), getpos("'&gt;")]

  try
    set clipboard= selection=inclusive
    let commands = #{line: "'[V']y", char: "`[v`]y", block: "`[\&lt;c-v&gt;`]y"}
    silent exe 'noautocmd keepjumps normal! ' .. get(commands, a:type, '')
    echom count(getreg('"'), ' ')
  finally
    call setreg('"', reg_save)
    call setpos("'&lt;", visual_marks_save[0])
    call setpos("'&gt;", visual_marks_save[1])
    let &amp;clipboard = cb_save
    let &amp;selection = sel_save
  endtry
endfunction</pre>
An <code>&lt;expr&gt;</code> mapping is used to be able to fetch any prefixed count and register.
This also avoids using a command line, which would trigger CmdlineEnter and
CmdlineLeave autocommands.</div>
<div class="old-help-para">Note that the <a href="options.html#'selection'">'selection'</a> option is temporarily set to "inclusive" to be able
to yank exactly the right text by using Visual mode from the '[ to the ']
mark.</div>
<div class="old-help-para">Also note that the <a href="options.html#'clipboard'">'clipboard'</a> option is temporarily emptied to avoid
clobbering the <code>"*</code> or <code>"+</code> registers, if its value contains the item <code>unnamed</code>
or <code>unnamedplus</code>.</div>
<div class="old-help-para">The <code>mode()</code> function will return the state as it will be after applying the
operator.</div>
<div class="old-help-para">Here is an example for using a lambda function to create a normal-mode
operator to add quotes around text in the current line:<pre>nnoremap &lt;F4&gt; &lt;Cmd&gt;let &amp;opfunc='{t -&gt;
                        \ getline(".")
                        \ -&gt;split("\\zs")
                        \ -&gt;insert("\"", col("'']"))
                        \ -&gt;insert("\"", col("''[") - 1)
                        \ -&gt;join("")
                        \ -&gt;setline(".")}'&lt;CR&gt;g@</pre>
<h2 class="help-heading">2. Abbreviations<span class="help-heading-tags">			<a name="abbreviations"></a><span class="help-tag">abbreviations</span> <a name="Abbreviations"></a><span class="help-tag">Abbreviations</span></span></h2></div>
<div class="old-help-para">Abbreviations are used in Insert mode, Replace mode and Command-line mode.
If you enter a word that is an abbreviation, it is replaced with the word it
stands for.  This can be used to save typing for often used long words.  And
you can use it to automatically correct obvious spelling errors.
Examples:</div>
<div class="old-help-para">	:iab ms Microsoft
	:iab tihs this</div>
<div class="old-help-para">There are three types of abbreviations:</div>
<div class="old-help-para">full-id	  The "full-id" type consists entirely of keyword characters (letters
	  and characters from <a href="options.html#'iskeyword'">'iskeyword'</a> option).  This is the most common
	  abbreviation.</div>
<div class="old-help-para">	  Examples: "foo", "g3", "-1"</div>
<div class="old-help-para">end-id	  The "end-id" type ends in a keyword character, but all the other
	  characters are not keyword characters.</div>
<div class="old-help-para">	  Examples: "#i", "..f", "$/7"</div>
<div class="old-help-para">non-id	  The "non-id" type ends in a non-keyword character, the other
	  characters may be of any type, excluding space and tab.</div>
<div class="old-help-para">	  Examples: "def#", "4/7$"</div>
<div class="old-help-para">Examples of strings that cannot be abbreviations: "a.b", "#def", "a b", "_$r"</div>
<div class="old-help-para">An abbreviation is only recognized when you type a non-keyword character.
This can also be the <code>&lt;Esc&gt;</code> that ends insert mode or the <code>&lt;CR&gt;</code> that ends a
command.  The non-keyword character which ends the abbreviation is inserted
after the expanded abbreviation.  An exception to this is the character <code>&lt;C-]&gt;</code>,
which is used to expand an abbreviation without inserting any extra
characters.</div>
<div class="old-help-para">Example:<pre>:ab hh        hello</pre></div>
<div class="old-help-para">	    "hh&lt;Space&gt;" is expanded to "hello&lt;Space&gt;"
	    "hh&lt;C-]&gt;" is expanded to "hello"</div>
<div class="old-help-para">The characters before the cursor must match the abbreviation.  Each type has
an additional rule:</div>
<div class="old-help-para">full-id	  In front of the match is a non-keyword character, or this is where
	  the line or insertion starts.  Exception: When the abbreviation is
	  only one character, it is not recognized if there is a non-keyword
	  character in front of it, other than a space or a tab. However, for
	  the command line "'&lt;,'&gt;" (or any other marks) is ignored, as if the
	  command line starts after it.</div>
<div class="old-help-para">end-id	  In front of the match is a keyword character, or a space or a tab,
	  or this is where the line or insertion starts.</div>
<div class="old-help-para">non-id	  In front of the match is a space, tab or the start of the line or
	  the insertion.</div>
<div class="old-help-para">Examples: (<code>{CURSOR}</code> is where you type a non-keyword character)<pre>:ab foo   four old otters</pre></div>
<div class="old-help-para">		" foo{CURSOR}"	  is expanded to " four old otters"
		" foobar{CURSOR}" is not expanded
		"barfoo{CURSOR}"  is not expanded
<pre>:ab #i #include</pre></div>
<div class="old-help-para">		"#i{CURSOR}"	  is expanded to "#include"
		"&gt;#i{CURSOR}"	  is not expanded
<pre>:ab ;; &lt;endofline&gt;</pre></div>
<div class="old-help-para">		"test;;"	  is not expanded
		"test ;;"	  is expanded to "test <code>&lt;endofline&gt;</code>"</div>
<div class="old-help-para">To avoid the abbreviation in Insert mode: Type <code>CTRL-V</code> before the character
that would trigger the abbreviation.  E.g. <code>CTRL-V</code> <code>&lt;Space&gt;</code>.  Or type part of
the abbreviation, exit insert mode with <code>&lt;Esc&gt;</code>, re-enter insert mode with "a"
and type the rest.</div>
<div class="old-help-para">To avoid the abbreviation in Command-line mode: Type <code>CTRL-V</code> twice somewhere in
the abbreviation to avoid it to be replaced.  A <code>CTRL-V</code> in front of a normal
character is mostly ignored otherwise.</div>
<div class="old-help-para">It is possible to move the cursor after an abbreviation:<pre>:iab if if ()&lt;Left&gt;</pre>
You can even do more complicated things.  For example, to consume the space
typed after an abbreviation:<pre>func Eatchar(pat)
   let c = nr2char(getchar(0))
   return (c =~ a:pat) ? '' : c
endfunc
iabbr &lt;silent&gt; if if ()&lt;Left&gt;&lt;C-R&gt;=Eatchar('\s')&lt;CR&gt;</pre>
There are no default abbreviations.</div>
<div class="old-help-para">Abbreviations are never recursive.  You can use ":ab f f-o-o" without any
problem.  But abbreviations can be mapped.  <code>{some versions of Vi support}</code>
recursive abbreviations, for no apparent reason}</div>
<div class="old-help-para">Abbreviations are disabled if the <a href="options.html#'paste'">'paste'</a> option is on.</div>
<div class="old-help-para">				<a name="%3Aabbreviate-local"></a><code class="help-tag-right">:abbreviate-local</code> <a name="%3Aabbreviate-%3Cbuffer%3E"></a><code class="help-tag">:abbreviate-&lt;buffer&gt;</code>
Just like mappings, abbreviations can be local to a buffer.  This is mostly
used in a <a href="usr_43.html#filetype-plugin">filetype-plugin</a> file.  Example for a C plugin file:<pre>:abb &lt;buffer&gt; FF  for (i = 0; i &lt; ; ++i)</pre></div>
<div class="old-help-para">						<a name="%3Aab"></a><code class="help-tag-right">:ab</code> <a name="%3Aabbreviate"></a><code class="help-tag">:abbreviate</code>
:ab[breviate]		list all abbreviations.  The character in the first
			column indicates the mode where the abbreviation is
			used: 'i' for insert mode, 'c' for Command-line
			mode, '!' for both.  These are the same as for
			mappings, see <a href="map.html#map-listing">map-listing</a>.</div>
<div class="old-help-para">						<a name="%3Aabbreviate-verbose"></a><code class="help-tag-right">:abbreviate-verbose</code>
When <a href="options.html#'verbose'">'verbose'</a> is non-zero, listing an abbreviation will also display where it
was last defined.  Example:<pre>:verbose abbreviate
!  teh                 the
        Last set from /home/abcd/vim/abbr.vim</pre>
See <a href="various.html#%3Averbose-cmd">:verbose-cmd</a> for more information.</div>
<div class="old-help-para">:ab[breviate] <code>{lhs}</code>	list the abbreviations that start with <code>{lhs}</code>
			You may need to insert a <code>CTRL-V</code> (type it twice) to
			avoid that a typed <code>{lhs}</code> is expanded, since
			command-line abbreviations apply here.</div>
<div class="old-help-para">:ab[breviate] [&lt;expr&gt;] [&lt;buffer&gt;] <code>{lhs}</code> <code>{rhs}</code>
			add abbreviation for <code>{lhs}</code> to <code>{rhs}</code>.  If <code>{lhs}</code> already
			existed it is replaced with the new <code>{rhs}</code>.  <code>{rhs}</code> may
			contain spaces.
			See <a href="map.html#%3Amap-%3Cexpr%3E">:map-&lt;expr&gt;</a> for the optional <code>&lt;expr&gt;</code> argument.
			See <a href="map.html#%3Amap-%3Cbuffer%3E">:map-&lt;buffer&gt;</a> for the optional <code>&lt;buffer&gt;</code> argument.</div>
<div class="old-help-para">						<a name="%3Auna"></a><code class="help-tag-right">:una</code> <a name="%3Aunabbreviate"></a><code class="help-tag">:unabbreviate</code>
:una[bbreviate] [&lt;buffer&gt;] <code>{lhs}</code>
			Remove abbreviation for <code>{lhs}</code> from the list.  If none
			is found, remove abbreviations in which <code>{lhs}</code> matches
			with the <code>{rhs}</code>.  This is done so that you can even
			remove abbreviations after expansion.  To avoid
			expansion insert a <code>CTRL-V</code> (type it twice).</div>
<div class="old-help-para">						<a name="%3Anorea"></a><code class="help-tag-right">:norea</code> <a name="%3Anoreabbrev"></a><code class="help-tag">:noreabbrev</code>
:norea[bbrev] [&lt;expr&gt;] [&lt;buffer&gt;] [lhs] [rhs]
			same as ":ab", but no remapping for this <code>{rhs}</code></div>
<div class="old-help-para">						<a name="%3Aca"></a><code class="help-tag-right">:ca</code> <a name="%3Acab"></a><code class="help-tag">:cab</code> <a name="%3Acabbrev"></a><code class="help-tag">:cabbrev</code>
:ca[bbrev] [&lt;expr&gt;] [&lt;buffer&gt;] [lhs] [rhs]
			same as ":ab", but for Command-line mode only.</div>
<div class="old-help-para">						<a name="%3Acuna"></a><code class="help-tag-right">:cuna</code> <a name="%3Acunabbrev"></a><code class="help-tag">:cunabbrev</code>
:cuna[bbrev] [&lt;buffer&gt;] <code>{lhs}</code>
			Same as ":una", but for Command-line mode only.</div>
<div class="old-help-para">						<a name="%3Acnorea"></a><code class="help-tag-right">:cnorea</code> <a name="%3Acnoreabbrev"></a><code class="help-tag">:cnoreabbrev</code>
:cnorea[bbrev] [&lt;expr&gt;] [&lt;buffer&gt;] [lhs] [rhs]
			same as ":ab", but for Command-line mode only and no
			remapping for this <code>{rhs}</code></div>
<div class="old-help-para">						<a name="%3Aia"></a><code class="help-tag-right">:ia</code> <a name="%3Aiabbrev"></a><code class="help-tag">:iabbrev</code>
:ia[bbrev] [&lt;expr&gt;] [&lt;buffer&gt;] [lhs] [rhs]
			same as ":ab", but for Insert mode only.</div>
<div class="old-help-para">						<a name="%3Aiuna"></a><code class="help-tag-right">:iuna</code> <a name="%3Aiunabbrev"></a><code class="help-tag">:iunabbrev</code>
:iuna[bbrev] [&lt;buffer&gt;] <code>{lhs}</code>
			Same as ":una", but for insert mode only.</div>
<div class="old-help-para">						<a name="%3Ainorea"></a><code class="help-tag-right">:inorea</code> <a name="%3Ainoreabbrev"></a><code class="help-tag">:inoreabbrev</code>
:inorea[bbrev] [&lt;expr&gt;] [&lt;buffer&gt;] [lhs] [rhs]
			same as ":ab", but for Insert mode only and no
			remapping for this <code>{rhs}</code></div>
<div class="old-help-para">							<a name="%3Aabc"></a><code class="help-tag-right">:abc</code> <a name="%3Aabclear"></a><code class="help-tag">:abclear</code>
:abc[lear] [&lt;buffer&gt;]	Remove all abbreviations.</div>
<div class="old-help-para">							<a name="%3Aiabc"></a><code class="help-tag-right">:iabc</code> <a name="%3Aiabclear"></a><code class="help-tag">:iabclear</code>
:iabc[lear] [&lt;buffer&gt;]	Remove all abbreviations for Insert mode.</div>
<div class="old-help-para">							<a name="%3Acabc"></a><code class="help-tag-right">:cabc</code> <a name="%3Acabclear"></a><code class="help-tag">:cabclear</code>
:cabc[lear] [&lt;buffer&gt;]	Remove all abbreviations for Command-line mode.</div>
<div class="old-help-para">							<a name="using_CTRL-V"></a><code class="help-tag-right">using_CTRL-V</code>
It is possible to use special characters in the rhs of an abbreviation.
CTRL-V has to be used to avoid the special meaning of most non printable
characters.  How many <code>CTRL-V</code>s need to be typed depends on how you enter the
abbreviation.  This also applies to mappings.  Let's use an example here.</div>
<div class="old-help-para">Suppose you want to abbreviate "esc" to enter an <code>&lt;Esc&gt;</code> character.  When you
type the ":ab" command in Vim, you have to enter this: (here ^V is a <code>CTRL-V</code>
and ^[ is <code>&lt;Esc&gt;</code>)</div>
<div class="old-help-para">You type:   ab esc ^V^V^V^V^V^[</div>
<div class="old-help-para">	All keyboard input is subjected to ^V quote interpretation, so
	the first, third, and fifth ^V  characters simply allow the second,
	and fourth ^Vs, and the ^[, to be entered into the command-line.</div>
<div class="old-help-para">You see:    ab esc ^V^V^[</div>
<div class="old-help-para">	The command-line contains two actual ^Vs before the ^[.  This is
	how it should appear in your vimrc file, if you choose to go that
	route.  The first ^V is there to quote the second ^V; the :ab
	command uses ^V as its own quote character, so you can include quoted
	whitespace or the | character in the abbreviation.  The :ab command
	doesn't do anything special with the ^[ character, so it doesn't need
	to be quoted.  (Although quoting isn't harmful; that's why typing 7
	[but not 8!] ^Vs works.)</div>
<div class="old-help-para">Stored as:  esc     ^V^[</div>
<div class="old-help-para">	After parsing, the abbreviation's short form ("esc") and long form
	(the two characters "^V^[") are stored in the abbreviation table.
	If you give the :ab command with no arguments, this is how the
	abbreviation will be displayed.</div>
<div class="old-help-para">	Later, when the abbreviation is expanded because the user typed in
	the word "esc", the long form is subjected to the same type of
	^V interpretation as keyboard input.  So the ^V protects the ^[
	character from being interpreted as the "exit Insert mode" character.
	Instead, the ^[ is inserted into the text.</div>
<div class="old-help-para">Expands to: ^[</div>
<div class="old-help-para">[example given by Steve Kirkendall]</div>
<div class="old-help-para"><h2 class="help-heading">3. Local mappings and functions<span class="help-heading-tags">				<a name="script-local"></a><span class="help-tag">script-local</span></span></h2></div>
<div class="old-help-para">When using several Vim script files, there is the danger that mappings and
functions used in one script use the same name as in other scripts.  To avoid
this, they can be made local to the script.</div>
<div class="old-help-para">						<a name="%3CSID%3E"></a><code class="help-tag-right">&lt;SID&gt;</code> <a name="%3CSNR%3E"></a><code class="help-tag">&lt;SNR&gt;</code> <a name="E81"></a><code class="help-tag">E81</code>
The string "&lt;SID&gt;" can be used in a mapping or menu.
   When executing the map command, Vim will replace "&lt;SID&gt;" with the special
key code <code>&lt;SNR&gt;</code>, followed by a number that's unique for the script, and an
underscore.  Example:<pre>:map &lt;SID&gt;Add</pre>
could define a mapping "&lt;SNR&gt;23_Add".</div>
<div class="old-help-para">When defining a function in a script, "s:" can be prepended to the name to
make it local to the script.  But when a mapping is executed from outside of
the script, it doesn't know in which script the function was defined.  To
avoid this problem, use "&lt;SID&gt;" instead of "s:".  The same translation is done
as for mappings.  This makes it possible to define a call to the function in
a mapping.</div>
<div class="old-help-para">When a local function is executed, it runs in the context of the script it was
defined in.  This means that new functions and mappings it defines can also
use "s:" or "&lt;SID&gt;" and it will use the same unique number as when the
function itself was defined.  Also, the "s:var" local script variables can be
used.</div>
<div class="old-help-para">When executing an autocommand or a user command, it will run in the context of
the script it was defined in.  This makes it possible that the command calls a
local function or uses a local mapping.</div>
<div class="old-help-para">In case the value is used in a context where <code>&lt;SID&gt;</code> cannot be correctly
expanded, use the expand() function:<pre>let &amp;includexpr = expand('&lt;SID&gt;') .. 'My_includeexpr()'</pre>
Otherwise, using "&lt;SID&gt;" outside of a script context is an error.</div>
<div class="old-help-para">If you need to get the script number to use in a complicated script, you can
use this function:<pre>func s:ScriptNumber()
  return matchstr(expand('&lt;SID&gt;'), '&lt;SNR&gt;\zs\d\+\ze_')
endfunc</pre>
The "&lt;SNR&gt;" will be shown when listing functions and mappings.  This is useful
to find out what they are defined to.</div>
<div class="old-help-para">The <a href="repeat.html#%3Ascriptnames">:scriptnames</a> command can be used to see which scripts have been sourced
and what their <code>&lt;SNR&gt;</code> number is.</div>
<div class="old-help-para"><h2 class="help-heading">4. User-defined commands<span class="help-heading-tags">				<a name="user-commands"></a><span class="help-tag">user-commands</span></span></h2></div>
<div class="old-help-para">It is possible to define your own Ex commands.  A user-defined command can act
just like a built-in command (it can have a range or arguments, arguments can
be completed as filenames or buffer names, etc), except that when the command
is executed, it is transformed into a normal Ex command and then executed.</div>
<div class="old-help-para">For starters: See section <a href="usr_40.html#40.2">40.2</a> in the user manual.</div>
<div class="old-help-para">					<a name="E183"></a><code class="help-tag-right">E183</code> <a name="E841"></a><code class="help-tag">E841</code> <a name="user-cmd-ambiguous"></a><code class="help-tag">user-cmd-ambiguous</code>
All user defined commands must start with an uppercase letter, to avoid
confusion with builtin commands.  Exceptions are these builtin commands:
	:Next
They cannot be used for a user defined command.</div>
<div class="old-help-para">The other characters of the user command can be uppercase letters, lowercase
letters or digits.  When using digits, note that other commands that take a
numeric argument may become ambiguous.  For example, the command ":Cc2" could
be the user command ":Cc2" without an argument, or the command ":Cc" with
argument "2".  It is advised to put a space between the command name and the
argument to avoid these problems.</div>
<div class="old-help-para">When using a user-defined command, the command can be abbreviated.  However, if
an abbreviation is not unique, an error will be issued.  Furthermore, a
built-in command will always take precedence.</div>
<div class="old-help-para">Example:<pre>:command Rename ...
:command Renumber ...
:Rena                                " Means "Rename"
:Renu                                " Means "Renumber"
:Ren                                " Error - ambiguous
:command Paste ...</pre>
It is recommended that full names for user-defined commands are used in
scripts.</div>
<div class="old-help-para">:com[mand]						<a name="%3Acom"></a><code class="help-tag-right">:com</code> <a name="%3Acommand"></a><code class="help-tag">:command</code>
			List all user-defined commands.  When listing commands,
			the characters in the first columns are:
			    !	Command has the -bang attribute
			    "	Command has the -register attribute
			    |   Command has the -bar attribute
			    b	Command is local to current buffer
			(see below for details on attributes)
			The list can be filtered on command name with
			<a href="various.html#%3Afilter">:filter</a>, e.g., to list all commands with "Pyth" in
			the name:<pre>filter Pyth command</pre>
:com[mand] <code>{cmd}</code>	List the user-defined commands that start with <code>{cmd}</code></div>
<div class="old-help-para">							<a name="%3Acommand-verbose"></a><code class="help-tag-right">:command-verbose</code>
When <a href="options.html#'verbose'">'verbose'</a> is non-zero, listing a command will also display where it was
last defined and any completion argument. Example:<pre>:verbose command TOhtml</pre></div>
<div class="old-help-para"><div class="help-column_heading">	Name	    Args Range Complete  Definition</div><div class="help-column_heading">	TOhtml	    0	 %		 :call Convert2HTML(<code>&lt;line1&gt;</code>, <code>&lt;line2&gt;</code>)</div><div class="help-column_heading">	    Last set from /usr/share/vim/vim-7.0/plugin/tohtml.vim</div></div>
<div class="old-help-para">See <a href="various.html#%3Averbose-cmd">:verbose-cmd</a> for more information.</div>
<div class="old-help-para">							<a name="E174"></a><code class="help-tag-right">E174</code> <a name="E182"></a><code class="help-tag">E182</code>
:com[mand][!] [{attr}...] <code>{cmd}</code> <code>{repl}</code>
			Define a user command.  The name of the command is
			<code>{cmd}</code> and its replacement text is <code>{repl}</code>.  The
			command's attributes (see below) are <code>{attr}</code>.  If the
			command already exists, an error is reported, unless a
			! is specified, in which case the command is
			redefined.  There is one exception: When sourcing a
			script again, a command that was previously defined in
			that script will be silently replaced.</div>
<div class="old-help-para">:delc[ommand] <code>{cmd}</code>				<a name="%3Adelc"></a><code class="help-tag-right">:delc</code> <a name="%3Adelcommand"></a><code class="help-tag">:delcommand</code> <a name="E184"></a><code class="help-tag">E184</code>
			Delete the user-defined command <code>{cmd}</code>.</div>
<div class="old-help-para">:delc[ommand] -buffer <code>{cmd}</code>					<a name="E1237"></a><code class="help-tag-right">E1237</code>
			Delete the user-defined command <code>{cmd}</code> that was defined
			for the current buffer.</div>
<div class="old-help-para">:comc[lear]						<a name="%3Acomc"></a><code class="help-tag-right">:comc</code> <a name="%3Acomclear"></a><code class="help-tag">:comclear</code>
			Delete all user-defined commands.</div>
<div class="old-help-para"><div class="help-column_heading">Command attributes</div>							<a name="command-attributes"></a><code class="help-tag-right">command-attributes</code>
User-defined commands are treated by Nvim just like any other Ex commands.  They
can have arguments, or have a range specified.  Arguments are subject to
completion as filenames, buffers, etc.  Exactly how this works depends upon the
command's attributes, which are specified when the command is defined.</div>
<div class="old-help-para">There are a number of attributes, split into four categories: argument
handling, completion behavior, range handling, and special cases.  The
attributes are described below, by category.</div>
<div class="old-help-para"><div class="help-column_heading">Argument handling</div>						<a name="E175"></a><code class="help-tag-right">E175</code> <a name="E176"></a><code class="help-tag">E176</code> <a name="%3Acommand-nargs"></a><code class="help-tag">:command-nargs</code>
By default, a user defined command will take no arguments (and an error is
reported if any are supplied).  However, it is possible to specify that the
command can take arguments, using the -nargs attribute.  Valid cases are:</div>
<div class="old-help-para">	-nargs=0    No arguments are allowed (the default)
	-nargs=1    Exactly one argument is required, it includes spaces
	-nargs=*    Any number of arguments are allowed (0, 1, or many),
		    separated by white space
	-nargs=?    0 or 1 arguments are allowed
	-nargs=+    Arguments must be supplied, but any number are allowed</div>
<div class="old-help-para">Arguments are considered to be separated by (unescaped) spaces or tabs in this
context, except when there is one argument, then the white space is part of
the argument.</div>
<div class="old-help-para">Note that arguments are used as text, not as expressions.  Specifically,
"s:var" will use the script-local variable in the script where the command was
defined, not where it is invoked!  Example:
    script1.vim:<pre>:let s:error = "None"
:command -nargs=1 Error echoerr &lt;args&gt;</pre></div>
<div class="old-help-para">   script2.vim:<pre>:source script1.vim
:let s:error = "Wrong!"
:Error s:error</pre>
Executing script2.vim will result in "None" being echoed.  Not what you
intended!  Calling a function may be an alternative.</div>
<div class="old-help-para"><div class="help-column_heading">Completion behavior</div>				<a name="%3Acommand-completion"></a><code class="help-tag-right">:command-completion</code> <a name="E179"></a><code class="help-tag">E179</code> <a name="E180"></a><code class="help-tag">E180</code> <a name="E181"></a><code class="help-tag">E181</code>
				<a name="%3Acommand-complete"></a><code class="help-tag-right">:command-complete</code>
By default, the arguments of user defined commands do not undergo completion.
However, by specifying one or the other of the following attributes, argument
completion can be enabled:</div>
<div class="old-help-para">	-complete=arglist	file names in argument list
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
	-complete=file_in_path	file and directory names in <a href="options.html#'path'">'path'</a>
	-complete=filetype	filetype names <a href="options.html#'filetype'">'filetype'</a>
	-complete=function	function name
	-complete=help		help subjects
	-complete=highlight	highlight groups
	-complete=history	:history suboptions
	-complete=locale	locale names (as output of locale -a)
	-complete=lua		Lua expression
	-complete=mapclear	buffer argument
	-complete=mapping	mapping name
	-complete=menu		menus
	-complete=messages	<a href="message.html#%3Amessages">:messages</a> suboptions
	-complete=option	options
	-complete=packadd	optional package <a href="repeat.html#pack-add">pack-add</a> names
	-complete=shellcmd	Shell command
	-complete=sign		<a href="sign.html#%3Asign">:sign</a> suboptions
	-complete=syntax	syntax file names <a href="options.html#'syntax'">'syntax'</a>
	-complete=syntime	<a href="syntax.html#%3Asyntime">:syntime</a> suboptions
	-complete=tag		tags
	-complete=tag_listfiles	tags, file names are shown when <code>CTRL-D</code> is hit
	-complete=user		user names
	-complete=var		user variables
	-complete=custom,{func} custom completion, defined via <code>{func}</code>
	-complete=customlist,{func} custom completion, defined via <code>{func}</code></div>
<div class="old-help-para">If you specify completion while there is nothing to complete (-nargs=0, the
default) then you get error <a name="E1208"></a><code class="help-tag">E1208</code> .
Note: That some completion methods might expand environment variables.</div>
<div class="old-help-para"><div class="help-column_heading">Custom completion</div>				<a name="%3Acommand-completion-custom"></a><code class="help-tag-right">:command-completion-custom</code>
				<a name="%3Acommand-completion-customlist"></a><code class="help-tag-right">:command-completion-customlist</code> <a name="E467"></a><code class="help-tag">E467</code> <a name="E468"></a><code class="help-tag">E468</code>
It is possible to define customized completion schemes via the "custom,{func}"
or the "customlist,{func}" completion argument.  The <code>{func}</code> part should be a
function with the following signature:<pre>:function {func}(ArgLead, CmdLine, CursorPos)</pre>
The function need not use all these arguments. The function should provide the
completion candidates as the return value.</div>
<div class="old-help-para">For the "custom" argument, the function should return the completion
candidates one per line in a newline separated string.</div>
<div class="old-help-para">For the "customlist" argument, the function should return the completion
candidates as a Vim List.  Non-string items in the list are ignored.</div>
<div class="old-help-para">The function arguments are:
	ArgLead		the leading portion of the argument currently being
			completed on
	CmdLine		the entire command line
	CursorPos	the cursor position in it (byte index)
The function may use these for determining context.  For the "custom"
argument, it is not necessary to filter candidates against the (implicit
pattern in) ArgLead.  Vim will filter the candidates with its regexp engine
after function return, and this is probably more efficient in most cases. For
the "customlist" argument, Vim will not filter the returned completion
candidates and the user supplied function should filter the candidates.</div>
<div class="old-help-para">The following example lists user names to a Finger command<pre>:com -complete=custom,ListUsers -nargs=1 Finger !finger &lt;args&gt;
:fun ListUsers(A,L,P)
:    return system("cut -d: -f1 /etc/passwd")
:endfun</pre>
The following example completes filenames from the directories specified in
the <a href="options.html#'path'">'path'</a> option:<pre>:com -nargs=1 -bang -complete=customlist,EditFileComplete
                    \ EditFile edit&lt;bang&gt; &lt;args&gt;
:fun EditFileComplete(A,L,P)
:    return split(globpath(&amp;path, a:A), "\n")
:endfun</pre></div>
<div class="old-help-para">This example does not work for file names with spaces!</div>
<div class="old-help-para"><div class="help-column_heading">Range handling</div>				<a name="E177"></a><code class="help-tag-right">E177</code> <a name="E178"></a><code class="help-tag">E178</code> <a name="%3Acommand-range"></a><code class="help-tag">:command-range</code> <a name="%3Acommand-count"></a><code class="help-tag">:command-count</code>
By default, user-defined commands do not accept a line number range.  However,
it is possible to specify that the command does take a range (the -range
attribute), or that it takes an arbitrary count value, either in the line
number position (-range=N, like the <a href="windows.html#%3Asplit">:split</a> command) or as a "count"
argument (-count=N, like the <a href="editing.html#%3ANext">:Next</a> command).  The count will then be
available in the argument with <a href="map.html#%3Ccount%3E">&lt;count&gt;</a>.</div>
<div class="old-help-para">Possible attributes are:</div>
<div class="old-help-para">	-range	    Range allowed, default is current line
	-range=%    Range allowed, default is whole file (1,$)
	-range=N    A count (default N) which is specified in the line
		    number position (like <a href="windows.html#%3Asplit">:split</a>); allows for zero line
		    number.
	-count=N    A count (default N) which is specified either in the line
		    number position, or as an initial argument (like <a href="editing.html#%3ANext">:Next</a>).
		    Specifying -count (without a default) acts like -count=0</div>
<div class="old-help-para">Note that -range=N and -count=N are mutually exclusive - only one should be
specified.</div>
<div class="old-help-para">                                                  <a name="%3Acommand-addr"></a><code class="help-tag-right">:command-addr</code>
It is possible that the special characters in the range like <code>.</code>, <code>$</code> or <code>%</code>
which by default correspond to the current line, last line and the whole
buffer, relate to arguments, (loaded) buffers, windows or tab pages.</div>
<div class="old-help-para">Possible values are (second column is the short name used in listing):
    -addr=lines		  line	Range of lines (this is the default)
    -addr=arguments	  arg	Range for arguments
    -addr=buffers	  buf	Range for buffers (also not loaded buffers)
    -addr=loaded_buffers  load	Range for loaded buffers
    -addr=windows	  win	Range for windows
    -addr=tabs		  tab	Range for tab pages
    -addr=quickfix	  qf	Range for quickfix entries
    -addr=other		  ?	other kind of range</div>
<div class="old-help-para"><div class="help-column_heading">Incremental preview</div>                                                  <a name="%3Acommand-preview"></a><code class="help-tag-right">:command-preview</code> <code>{nvim-api}</code>
Commands can show an <a href="options.html#'inccommand'">'inccommand'</a> (as-you-type) preview by defining a preview
handler (only from Lua, see <a href="api.html#nvim_create_user_command()">nvim_create_user_command()</a>).</div>
<div class="old-help-para">Before the preview callback is executed, Nvim will temporarily disable
<a href="options.html#'cursorline'">'cursorline'</a> and <a href="options.html#'cursorcolumn'">'cursorcolumn'</a> to avoid highlighting issues.</div>
<div class="old-help-para">The preview callback must be a Lua function with this signature:<pre>function cmdpreview(opts, ns, buf)</pre></div>
<div class="old-help-para">where "opts" has the same form as that given to <a href="api.html#nvim_create_user_command()">nvim_create_user_command()</a>
callbacks, "ns" is the preview namespace id for highlights, and "buf" is the
buffer that your preview routine will directly modify to show the previewed
results (for "inccommand=split", or nil for  "inccommand=nosplit").</div>
<div class="old-help-para">Your command preview routine must implement this protocol:</div>
<div class="old-help-para">1. Modify the target buffers as required for the preview (see
   <a href="api.html#nvim_buf_set_text()">nvim_buf_set_text()</a> and <a href="api.html#nvim_buf_set_lines()">nvim_buf_set_lines()</a>).
2. If preview buffer is provided, add necessary text to the preview buffer.
3. Add required highlights to the target buffers. If preview buffer is
   provided, add required highlights to the preview buffer as well. All
   highlights must be added to the preview namespace which is provided as an
   argument to the preview callback (see <a href="api.html#nvim_buf_add_highlight()">nvim_buf_add_highlight()</a> and
   <a href="api.html#nvim_buf_set_extmark()">nvim_buf_set_extmark()</a> for help on how to add highlights to a namespace).
4. Return an integer (0, 1, 2) which controls how Nvim behaves as follows:
   0: No preview is shown.
   1: Preview is shown without preview window (even with "inccommand=split").
   2: Preview is shown and preview window is opened (if "inccommand=split").
      For "inccommand=nosplit" this is the same as 1.</div>
<div class="old-help-para">After preview ends, Nvim discards all changes to all buffers made during the
preview and clears all highlights in the preview namespace.</div>
<div class="old-help-para">Here's an example of a command to trim trailing whitespace from lines that
supports incremental command preview:
<pre>-- If invoked as a preview callback, performs 'inccommand' preview by
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
        local prefix = string.format('|%d| ', line1 + i - 1)

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
)</pre></div>
<div class="old-help-para"><div class="help-column_heading">Special cases</div>					<a name="%3Acommand-bang"></a><code class="help-tag-right">:command-bang</code> <a name="%3Acommand-bar"></a><code class="help-tag">:command-bar</code>
					<a name="%3Acommand-register"></a><code class="help-tag-right">:command-register</code> <a name="%3Acommand-buffer"></a><code class="help-tag">:command-buffer</code>
					<a name="%3Acommand-keepscript"></a><code class="help-tag-right">:command-keepscript</code>
There are some special cases as well:</div>
<div class="old-help-para">	-bang	    The command can take a ! modifier (like :q or :w)
	-bar	    The command can be followed by a "|" and another command.
		    A "|" inside the command argument is not allowed then.
		    Also checks for a " to start a comment.
	-register   The first argument to the command can be an optional
		    register name (like :del, :put, :yank).
	-buffer	    The command will only be available in the current buffer.
	-keepscript Do not use the location of where the user command was
		    defined for verbose messages, use the location of where
		    the user command was invoked.</div>
<div class="old-help-para">In the cases of the -count and -register attributes, if the optional argument
is supplied, it is removed from the argument list and is available to the
replacement text separately.
Note that these arguments can be abbreviated, but that is a deprecated
feature.  Use the full name for new scripts.</div>
<div class="old-help-para"><div class="help-column_heading">Replacement text</div></div>
<div class="old-help-para">The replacement text <code>{repl}</code> for a user defined command is scanned for special
escape sequences, using &lt;...&gt; notation.  Escape sequences are replaced with
values from the entered command line, and all other text is copied unchanged.
The resulting string is executed as an Ex command.  To avoid the replacement
use <code>&lt;lt&gt;</code> in place of the initial &lt;.  Thus to include "&lt;bang&gt;" literally use
"&lt;lt&gt;bang&gt;".</div>
<div class="old-help-para">The valid escape sequences are</div>
<div class="old-help-para">						<a name="%3Cline1%3E"></a><code class="help-tag-right">&lt;line1&gt;</code>
	<code>&lt;line1&gt;</code>	The starting line of the command range.
						<a name="%3Cline2%3E"></a><code class="help-tag-right">&lt;line2&gt;</code>
	<code>&lt;line2&gt;</code>	The final line of the command range.
						<a name="%3Crange%3E"></a><code class="help-tag-right">&lt;range&gt;</code>
	<code>&lt;range&gt;</code> The number of items in the command range: 0, 1 or 2
						<a name="%3Ccount%3E"></a><code class="help-tag-right">&lt;count&gt;</code>
	<code>&lt;count&gt;</code>	Any count supplied (as described for the '-range'
		and '-count' attributes).
						<a name="%3Cbang%3E"></a><code class="help-tag-right">&lt;bang&gt;</code>
	<code>&lt;bang&gt;</code>	(See the '-bang' attribute) Expands to a ! if the
		command was executed with a ! modifier, otherwise
		expands to nothing.
					<a name="%3Cmods%3E"></a><code class="help-tag-right">&lt;mods&gt;</code> <a name="%3Cq-mods%3E"></a><code class="help-tag">&lt;q-mods&gt;</code> <a name="%3Acommand-modifiers"></a><code class="help-tag">:command-modifiers</code>
	<code>&lt;mods&gt;</code>  The command modifiers, if specified. Otherwise, expands to
		nothing. Supported modifiers are <a href="windows.html#%3Aaboveleft">:aboveleft</a>, <a href="windows.html#%3Abelowright">:belowright</a>,
		<a href="windows.html#%3Abotright">:botright</a>, <a href="editing.html#%3Abrowse">:browse</a>, <a href="editing.html#%3Aconfirm">:confirm</a>, <a href="windows.html#%3Ahide">:hide</a>, <a href="windows.html#%3Ahorizontal">:horizontal</a>,
		<a href="editing.html#%3Akeepalt">:keepalt</a>, <a href="motion.html#%3Akeepjumps">:keepjumps</a>, <a href="motion.html#%3Akeepmarks">:keepmarks</a>, <a href="cmdline.html#%3Akeeppatterns">:keeppatterns</a>,
		<a href="windows.html#%3Aleftabove">:leftabove</a>, <a href="motion.html#%3Alockmarks">:lockmarks</a>, <a href="autocmd.html#%3Anoautocmd">:noautocmd</a>, <a href="recover.html#%3Anoswapfile">:noswapfile</a>
		<a href="windows.html#%3Arightbelow">:rightbelow</a>, <a href="eval.html#%3Asandbox">:sandbox</a>, <a href="various.html#%3Asilent">:silent</a>, <a href="tabpage.html#%3Atab">:tab</a>, <a href="windows.html#%3Atopleft">:topleft</a>,
		<a href="various.html#%3Aunsilent">:unsilent</a>, <a href="various.html#%3Averbose">:verbose</a>, and <a href="windows.html#%3Avertical">:vertical</a>.
		Note that <a href="various.html#%3Afilter">:filter</a> is not supported.
		Examples:<pre>command! -nargs=+ -complete=file MyEdit
            \ for f in expand(&lt;q-args&gt;, 0, 1) |
            \ exe '&lt;mods&gt; split ' .. f |
            \ endfor

function! SpecialEdit(files, mods)
    for f in expand(a:files, 0, 1)
        exe a:mods .. ' split ' .. f
    endfor
endfunction
command! -nargs=+ -complete=file Sedit
            \ call SpecialEdit(&lt;q-args&gt;, &lt;q-mods&gt;)</pre></div>
<div class="old-help-para">						<a name="%3Creg%3E"></a><code class="help-tag-right">&lt;reg&gt;</code> <a name="%3Cregister%3E"></a><code class="help-tag">&lt;register&gt;</code>
	<code>&lt;reg&gt;</code>	(See the '-register' attribute) The optional register,
		if specified.  Otherwise, expands to nothing.  <code>&lt;register&gt;</code>
		is a synonym for this.
						<a name="%3Cargs%3E"></a><code class="help-tag-right">&lt;args&gt;</code>
	<code>&lt;args&gt;</code>	The command arguments, exactly as supplied (but as
		noted above, any count or register can consume some
		of the arguments, which are then not part of <code>&lt;args&gt;</code>).
	<code>&lt;lt&gt;</code>	A single '&lt;' (Less-Than) character.  This is needed if you
		want to get a literal copy of one of these escape sequences
		into the expansion - for example, to get <code>&lt;bang&gt;</code>, use
		<code>&lt;lt&gt;</code>bang&gt;.</div>
<div class="old-help-para">							<a name="%3Cq-args%3E"></a><code class="help-tag-right">&lt;q-args&gt;</code>
If the first two characters of an escape sequence are "q-" (for example,
<code>&lt;q-args&gt;</code>) then the value is quoted in such a way as to make it a valid value
for use in an expression.  This uses the argument as one single value.
When there is no argument <code>&lt;q-args&gt;</code> is an empty string.  See the
<a href="map.html#q-args-example">q-args-example</a> below.
							<a name="%3Cf-args%3E"></a><code class="help-tag-right">&lt;f-args&gt;</code>
To allow commands to pass their arguments on to a user-defined function, there
is a special form <code>&lt;f-args&gt;</code> ("function args").  This splits the command
arguments at spaces and tabs, quotes each argument individually, and the
<code>&lt;f-args&gt;</code> sequence is replaced by the comma-separated list of quoted arguments.
See the Mycmd example below.  If no arguments are given <code>&lt;f-args&gt;</code> is removed.
   To embed whitespace into an argument of <code>&lt;f-args&gt;</code>, prepend a backslash.
<code>&lt;f-args&gt;</code> replaces every pair of backslashes (\\) with one backslash.  A
backslash followed by a character other than white space or a backslash
remains unmodified.  Also see <a href="map.html#f-args-example">f-args-example</a> below.  Overview:</div>
<div class="old-help-para"><div class="help-column_heading">	command		   <code>&lt;f-args&gt;</code></div>	XX ab		   "ab"
	XX a\b		   'a\b'
	XX a\ b		   'a b'
	XX a\  b	   'a ', 'b'
	XX a\\b		   'a\b'
	XX a\\ b	   'a\', 'b'
	XX a\\\b	   'a\\b'
	XX a\\\ b	   'a\ b'
	XX a\\\\b	   'a\\b'
	XX a\\\\ b	   'a\\', 'b'</div>
<div class="old-help-para">Examples for user commands:<pre>" Delete everything after here to the end
:com Ddel +,$d

" Rename the current buffer
:com -nargs=1 -bang -complete=file Ren f &lt;args&gt;|w&lt;bang&gt;

" Replace a range with the contents of a file
" (Enter this all as one line)
:com -range -nargs=1 -complete=file
      Replace &lt;line1&gt;-pu_|&lt;line1&gt;,&lt;line2&gt;d|r &lt;args&gt;|&lt;line1&gt;d

" Count the number of lines in the range
:com! -range -nargs=0 Lines  echo &lt;line2&gt; - &lt;line1&gt; + 1 "lines"</pre></div>
<div class="old-help-para">						<a name="f-args-example"></a><code class="help-tag-right">f-args-example</code>
Call a user function (example of <code>&lt;f-args&gt;</code>)<pre>:com -nargs=* Mycmd call Myfunc(&lt;f-args&gt;)</pre>
When executed as:<pre>:Mycmd arg1 arg2</pre>
This will invoke:<pre>:call Myfunc("arg1","arg2")</pre></div>
<div class="old-help-para">						<a name="q-args-example"></a><code class="help-tag-right">q-args-example</code>
A more substantial example:<pre>:function Allargs(command)
:   let i = 0
:   while i &lt; argc()
:          if filereadable(argv(i))
:             execute "e " .. argv(i)
:             execute a:command
:      endif
:      let i = i + 1
:   endwhile
:endfunction
:command -nargs=+ -complete=command Allargs call Allargs(&lt;q-args&gt;)</pre>
The command Allargs takes any Vim command(s) as argument and executes it on all
files in the argument list.  Usage example (note use of the "e" flag to ignore
errors and the "update" command to write modified buffers):<pre>:Allargs %s/foo/bar/ge|update</pre>
This will invoke:<pre>:call Allargs("%s/foo/bar/ge|update")</pre></div>
<div class="old-help-para">When defining a user command in a script, it will be able to call functions
local to the script and use mappings local to the script.  When the user
invokes the user command, it will run in the context of the script it was
defined in.  This matters if <a href="map.html#%3CSID%3E">&lt;SID&gt;</a> is used in a command.</div>

  
  