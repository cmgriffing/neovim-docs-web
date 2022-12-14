---
title:  Spell
layout: ../../layouts/MainLayout.astro
---

  <a name="spell.txt"></a><a name="spell"></a><h1> Spell</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/spell.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Spell checking</div>
<div class="old-help-para"><h2 class="help-heading">1. Quick start<span class="help-heading-tags">					<a name="spell-quickstart"></a><span class="help-tag">spell-quickstart</span> <a name="E756"></a><span class="help-tag">E756</span></span></h2></div>
<div class="old-help-para">This command switches on spell checking:<pre>:setlocal spell spelllang=en_us</pre>
This switches on the <a href="/neovim-docs-web/en/options#'spell'">'spell'</a> option and specifies to check for US English.</div>
<div class="old-help-para">The words that are not recognized are highlighted with one of these:
	SpellBad	word not recognized			<a href="/neovim-docs-web/en/syntax#hl-SpellBad">hl-SpellBad</a>
	SpellCap	word not capitalised			<a href="/neovim-docs-web/en/syntax#hl-SpellCap">hl-SpellCap</a>
	SpellRare	rare word				<a href="/neovim-docs-web/en/syntax#hl-SpellRare">hl-SpellRare</a>
	SpellLocal	wrong spelling for selected region	<a href="/neovim-docs-web/en/syntax#hl-SpellLocal">hl-SpellLocal</a></div>
<div class="old-help-para">Vim only checks words for spelling, there is no grammar check.</div>
<div class="old-help-para">If the <a href="/neovim-docs-web/en/options#'mousemodel'">'mousemodel'</a> option is set to "popup" and the cursor is on a badly
spelled word or it is "popup_setpos" and the mouse pointer is on a badly
spelled word, then the popup menu will contain a submenu to replace the bad
word.  Note: this slows down the appearance of the popup menu.</div>
<div class="old-help-para">To search for the next misspelled word:</div>
<div class="old-help-para">							<a name="%5Ds"></a><code class="help-tag-right">]s</code>
]s			Move to next misspelled word after the cursor.
			A count before the command can be used to repeat.
			<a href="/neovim-docs-web/en/options#'wrapscan'">'wrapscan'</a> applies.</div>
<div class="old-help-para">							<a name="%5Bs"></a><code class="help-tag-right">[s</code>
[s			Like "]s" but search backwards, find the misspelled
			word before the cursor.  Doesn't recognize words
			split over two lines, thus may stop at words that are
			not highlighted as bad.  Does not stop at word with
			missing capital at the start of a line.</div>
<div class="old-help-para">							<a name="%5DS"></a><code class="help-tag-right">]S</code>
]S			Like "]s" but only stop at bad words, not at rare
			words or words for another region.</div>
<div class="old-help-para">							<a name="%5BS"></a><code class="help-tag-right">[S</code>
[S			Like "]S" but search backwards.</div>
<div class="old-help-para">To add words to your own word list:</div>
<div class="old-help-para">							<a name="zg"></a><code class="help-tag-right">zg</code>
zg			Add word under the cursor as a good word to the first
			name in <a href="/neovim-docs-web/en/options#'spellfile'">'spellfile'</a>.  A count may precede the command
			to indicate the entry in <a href="/neovim-docs-web/en/options#'spellfile'">'spellfile'</a> to be used.  A
			count of two uses the second entry.</div>
<div class="old-help-para">			In Visual mode the selected characters are added as a
			word (including white space!).
			When the cursor is on text that is marked as badly
			spelled then the marked text is used.
			Otherwise the word under the cursor, separated by
			non-word characters, is used.</div>
<div class="old-help-para">			If the word is explicitly marked as bad word in
			another spell file the result is unpredictable.</div>
<div class="old-help-para">							<a name="zG"></a><code class="help-tag-right">zG</code>
zG			Like "zg" but add the word to the internal word list
			<a href="/neovim-docs-web/en/spell#internal-wordlist">internal-wordlist</a>.</div>
<div class="old-help-para">							<a name="zw"></a><code class="help-tag-right">zw</code>
zw			Like "zg" but mark the word as a wrong (bad) word.
			If the word already appears in <a href="/neovim-docs-web/en/options#'spellfile'">'spellfile'</a> it is
			turned into a comment line.  See <a href="/neovim-docs-web/en/spell#spellfile-cleanup">spellfile-cleanup</a>
			for getting rid of those.</div>
<div class="old-help-para">							<a name="zW"></a><code class="help-tag-right">zW</code>
zW			Like "zw" but add the word to the internal word list
			<a href="/neovim-docs-web/en/spell#internal-wordlist">internal-wordlist</a>.</div>
<div class="old-help-para">zuw							<a name="zug"></a><code class="help-tag-right">zug</code> <a name="zuw"></a><code class="help-tag">zuw</code>
zug			Undo <a href="/neovim-docs-web/en/spell#zw">zw</a> and <a href="/neovim-docs-web/en/spell#zg">zg</a>, remove the word from the entry in
			<a href="/neovim-docs-web/en/options#'spellfile'">'spellfile'</a>.  Count used as with <a href="/neovim-docs-web/en/spell#zg">zg</a>.</div>
<div class="old-help-para">zuW							<a name="zuG"></a><code class="help-tag-right">zuG</code> <a name="zuW"></a><code class="help-tag">zuW</code>
zuG			Undo <a href="/neovim-docs-web/en/spell#zW">zW</a> and <a href="/neovim-docs-web/en/spell#zG">zG</a>, remove the word from the internal
			word list.  Count used as with <a href="/neovim-docs-web/en/spell#zg">zg</a>.</div>
<div class="old-help-para">						<a name="%3Aspe"></a><code class="help-tag-right">:spe</code> <a name="%3Aspellgood"></a><code class="help-tag">:spellgood</code> <a name="E1280"></a><code class="help-tag">E1280</code>
:[count]spe[llgood] <code>{word}</code>
			Add <code>{word}</code> as a good word to <a href="/neovim-docs-web/en/options#'spellfile'">'spellfile'</a>, like with
			<a href="/neovim-docs-web/en/spell#zg">zg</a>.  Without count the first name is used, with a
			count of two the second entry, etc.</div>
<div class="old-help-para">:spe[llgood]! <code>{word}</code>	Add <code>{word}</code> as a good word to the internal word list,
			like with <a href="/neovim-docs-web/en/spell#zG">zG</a>.</div>
<div class="old-help-para">							<a name="%3Aspellw"></a><code class="help-tag-right">:spellw</code> <a name="%3Aspellwrong"></a><code class="help-tag">:spellwrong</code>
:[count]spellw[rong] <code>{word}</code>
			Add <code>{word}</code> as a wrong (bad) word to <a href="/neovim-docs-web/en/options#'spellfile'">'spellfile'</a>, as
			with <a href="/neovim-docs-web/en/spell#zw">zw</a>.  Without count the first name is used, with
			a count of two the second entry, etc.</div>
<div class="old-help-para">:spellw[rong]! <code>{word}</code>	Add <code>{word}</code> as a wrong (bad) word to the internal word
			list, like with <a href="/neovim-docs-web/en/spell#zW">zW</a>.</div>
<div class="old-help-para">							<a name="%3Aspellra"></a><code class="help-tag-right">:spellra</code> <a name="%3Aspellrare"></a><code class="help-tag">:spellrare</code>
:[count]spellr[are] <code>{word}</code>
			Add <code>{word}</code> as a rare word to <a href="/neovim-docs-web/en/options#'spellfile'">'spellfile'</a>, similar to
			<a href="/neovim-docs-web/en/spell#zw">zw</a>.  Without count the first name is used, with
			a count of two the second entry, etc.</div>
<div class="old-help-para">			There are no normal mode commands to mark words as
			rare as this is a fairly uncommon command and all
			intuitive commands for this are already taken. If you
			want you can add mappings with e.g.:<pre>nnoremap z?  :exe ':spellrare  ' .. expand('&lt;cWORD&gt;')&lt;CR&gt;
nnoremap z/  :exe ':spellrare! ' .. expand('&lt;cWORD&gt;')&lt;CR&gt;</pre></div>
<div class="old-help-para">			<a href="/neovim-docs-web/en/spell#%3Aspellundo">:spellundo</a>, <a href="/neovim-docs-web/en/spell#zuw">zuw</a>, or <a href="/neovim-docs-web/en/spell#zuW">zuW</a> can be used to undo this.</div>
<div class="old-help-para">:spellr[rare]! <code>{word}</code>	Add <code>{word}</code> as a rare word to the internal word
			list, similar to <a href="/neovim-docs-web/en/spell#zW">zW</a>.</div>
<div class="old-help-para">:[count]spellu[ndo] <code>{word}</code>				<a name="%3Aspellu"></a><code class="help-tag-right">:spellu</code> <a name="%3Aspellundo"></a><code class="help-tag">:spellundo</code>
			Like <a href="/neovim-docs-web/en/spell#zuw">zuw</a>.  [count] used as with <a href="/neovim-docs-web/en/spell#%3Aspellgood">:spellgood</a>.</div>
<div class="old-help-para">:spellu[ndo]! <code>{word}</code>	Like <a href="/neovim-docs-web/en/spell#zuW">zuW</a>.  [count] used as with <a href="/neovim-docs-web/en/spell#%3Aspellgood">:spellgood</a>.</div>
<div class="old-help-para">After adding a word to <a href="/neovim-docs-web/en/options#'spellfile'">'spellfile'</a> with the above commands its associated
".spl" file will automatically be updated and reloaded.  If you change
<a href="/neovim-docs-web/en/options#'spellfile'">'spellfile'</a> manually you need to use the <a href="/neovim-docs-web/en/spell#%3Amkspell">:mkspell</a> command.  This sequence of
commands mostly works well:<pre>:edit &lt;file in 'spellfile'&gt;</pre></div>
<div class="old-help-para">	(make changes to the spell file)<pre>:mkspell! %</pre>
More details about the <a href="/neovim-docs-web/en/options#'spellfile'">'spellfile'</a> format below <a href="/neovim-docs-web/en/spell#spell-wordlist-format">spell-wordlist-format</a>.</div>
<div class="old-help-para">							<a name="internal-wordlist"></a><code class="help-tag-right">internal-wordlist</code>
The internal word list is used for all buffers where <a href="/neovim-docs-web/en/options#'spell'">'spell'</a> is set.  It is
not stored, it is lost when you exit Vim.  It is also cleared when <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a>
is set.</div>
<div class="old-help-para">Finding suggestions for bad words:
							<a name="z%3D"></a><code class="help-tag-right">z=</code>
z=			For the word under/after the cursor suggest correctly
			spelled words.  This also works to find alternatives
			for a word that is not highlighted as a bad word,
			e.g., when the word after it is bad.
			In Visual mode the highlighted text is taken as the
			word to be replaced.
			The results are sorted on similarity to the word being
			replaced.
			This may take a long time.  Hit <code>CTRL-C</code> when you get
			bored.</div>
<div class="old-help-para">			If the command is used without a count the
			alternatives are listed and you can enter the number
			of your choice or press <code>&lt;Enter&gt;</code> if you don't want to
			replace.  You can also use the mouse to click on your
			choice (only works if the mouse can be used in Normal
			mode and when there are no line wraps).  Click on the
			first line (the header) to cancel.</div>
<div class="old-help-para">			The suggestions listed normally replace a highlighted
			bad word.  Sometimes they include other text, in that
			case the replaced text is also listed after a "&lt;".</div>
<div class="old-help-para">			If a count is used that suggestion is used, without
			prompting.  For example, "1z=" always takes the first
			suggestion.</div>
<div class="old-help-para">			If <a href="/neovim-docs-web/en/options#'verbose'">'verbose'</a> is non-zero a score will be displayed
			with the suggestions to indicate the likeliness to the
			badly spelled word (the higher the score the more
			different).
			When a word was replaced the redo command "." will
			repeat the word replacement.  This works like "ciw",
			the good word and <code>&lt;Esc&gt;</code>.  This does NOT work for Thai
			and other languages without spaces between words.</div>
<div class="old-help-para">					<a name="%3Aspellr"></a><code class="help-tag-right">:spellr</code> <a name="%3Aspellrepall"></a><code class="help-tag">:spellrepall</code> <a name="E752"></a><code class="help-tag">E752</code> <a name="E753"></a><code class="help-tag">E753</code>
:spellr[epall]		Repeat the replacement done by <a href="/neovim-docs-web/en/spell#z%3D">z=</a> for all matches
			with the replaced word in the current window.</div>
<div class="old-help-para">In Insert mode, when the cursor is after a badly spelled word, you can use
CTRL-X s to find suggestions.  This works like Insert mode completion.  Use
CTRL-N to use the next suggestion, <code>CTRL-P</code> to go back. <a href="/neovim-docs-web/en/insert#i_CTRL-X_s">i_CTRL-X_s</a></div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'spellsuggest'">'spellsuggest'</a> option influences how the list of suggestions is generated
and sorted.  See <a href="/neovim-docs-web/en/options#'spellsuggest'">'spellsuggest'</a>.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'spellcapcheck'">'spellcapcheck'</a> option is used to check the first word of a sentence
starts with a capital.  This doesn't work for the first word in the file.
When there is a line break right after a sentence the highlighting of the next
line may be postponed.  Use <a href="/neovim-docs-web/en/various#CTRL-L">CTRL-L</a> when needed.  Also see <a href="/neovim-docs-web/en/spell#set-spc-auto">set-spc-auto</a> for
how it can be set automatically when <a href="/neovim-docs-web/en/options#'spelllang'">'spelllang'</a> is set.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'spelloptions'">'spelloptions'</a> option has a few more flags that influence the way spell
checking works.</div>
<div class="old-help-para">Vim counts the number of times a good word is encountered.  This is used to
sort the suggestions: words that have been seen before get a small bonus,
words that have been seen often get a bigger bonus.  The COMMON item in the
affix file can be used to define common words, so that this mechanism also
works in a new or short file <a href="/neovim-docs-web/en/spell#spell-COMMON">spell-COMMON</a>.</div>
<div class="old-help-para"><h2 class="help-heading">2. Remarks on spell checking<span class="help-heading-tags">				<a name="spell-remarks"></a><span class="help-tag">spell-remarks</span></span></h2></div>
<div class="old-help-para"><a name="_performance"></a><h3 class="help-heading">PERFORMANCE</h3></div>
<div class="old-help-para">Vim does on-the-fly spell checking.  To make this work fast the word list is
loaded in memory.  Thus this uses a lot of memory (1 Mbyte or more).  There
might also be a noticeable delay when the word list is loaded, which happens
when <a href="/neovim-docs-web/en/options#'spell'">'spell'</a> is set and when <a href="/neovim-docs-web/en/options#'spelllang'">'spelllang'</a> is set while <a href="/neovim-docs-web/en/options#'spell'">'spell'</a> was already set.
To minimize the delay each word list is only loaded once, it is not deleted
when <a href="/neovim-docs-web/en/options#'spelllang'">'spelllang'</a> is made empty or <a href="/neovim-docs-web/en/options#'spell'">'spell'</a> is reset.  When <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> is set
all the word lists are reloaded, thus you may notice a delay then too.</div>
<div class="old-help-para"><a name="_regions"></a><h3 class="help-heading">REGIONS</h3></div>
<div class="old-help-para">A word may be spelled differently in various regions.  For example, English
comes in (at least) these variants:</div>
<div class="old-help-para">	en		all regions
	en_au		Australia
	en_ca		Canada
	en_gb		Great Britain
	en_nz		New Zealand
	en_us		USA</div>
<div class="old-help-para">Words that are not used in one region but are used in another region are
highlighted with SpellLocal <a href="/neovim-docs-web/en/syntax#hl-SpellLocal">hl-SpellLocal</a>.</div>
<div class="old-help-para">Always use lowercase letters for the language and region names.</div>
<div class="old-help-para">When adding a word with <a href="/neovim-docs-web/en/spell#zg">zg</a> or another command it's always added for all
regions.  You can change that by manually editing the <a href="/neovim-docs-web/en/options#'spellfile'">'spellfile'</a>.  See
<a href="/neovim-docs-web/en/spell#spell-wordlist-format">spell-wordlist-format</a>.  Note that the regions as specified in the files in
<a href="/neovim-docs-web/en/options#'spellfile'">'spellfile'</a> are only used when all entries in <a href="/neovim-docs-web/en/options#'spelllang'">'spelllang'</a> specify the same
region (not counting files specified by their .spl name).</div>
<div class="old-help-para">							<a name="spell-german"></a><code class="help-tag-right">spell-german</code>
Specific exception: For German these special regions are used:
	de		all German words accepted
	de_de		old and new spelling
	de_19		old spelling
	de_20		new spelling
	de_at		Austria
	de_ch		Switzerland</div>
<div class="old-help-para">							<a name="spell-russian"></a><code class="help-tag-right">spell-russian</code>
Specific exception: For Russian these special regions are used:
	ru		all Russian words accepted
	ru_ru		"IE" letter spelling
	ru_yo		"YO" letter spelling</div>
<div class="old-help-para">							<a name="spell-yiddish"></a><code class="help-tag-right">spell-yiddish</code>
Yiddish requires using "utf-8" encoding, because of the special characters
used.  If you are using latin1 Vim will use transliterated (romanized) Yiddish
instead.  If you want to use transliterated Yiddish with utf-8 use "yi-tr".
In a table:
	<a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a>	<a href="/neovim-docs-web/en/options#'spelllang'">'spelllang'</a>
	utf-8		yi		Yiddish
	latin1		yi		transliterated Yiddish
	utf-8		yi-tr		transliterated Yiddish</div>
<div class="old-help-para">							<a name="spell-cjk"></a><code class="help-tag-right">spell-cjk</code>
Chinese, Japanese and other East Asian characters are normally marked as
errors, because spell checking of these characters is not supported. If
<a href="/neovim-docs-web/en/options#'spelllang'">'spelllang'</a> includes "cjk", these characters are not marked as errors.  This
is useful when editing text with spell checking while some Asian words are
present.</div>
<div class="old-help-para"><h3 class="help-heading">SPELL FILES<span class="help-heading-tags">						<a name="spell-load"></a><span class="help-tag">spell-load</span></span></h3></div>
<div class="old-help-para">Vim searches for spell files in the "spell" subdirectory of the directories in
<a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.  The name is: LL.EEE.spl, where:
	LL	the language name
	EEE	the value of <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a></div>
<div class="old-help-para">The value for "LL" comes from <a href="/neovim-docs-web/en/options#'spelllang'">'spelllang'</a>, but excludes the region name.
Examples:
<div class="help-column_heading">	<a href="/neovim-docs-web/en/options#'spelllang'">'spelllang'</a>	LL</div>	en_us		en
	en-rare		en-rare
	medical_ca	medical</div>
<div class="old-help-para">Only the first file is loaded, the one that is first in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.  If
this succeeds then additionally files with the name LL.EEE.add.spl are loaded.
All the ones that are found are used.</div>
<div class="old-help-para">If no spell file is found the <a href="/neovim-docs-web/en/autocmd#SpellFileMissing">SpellFileMissing</a> autocommand event is
triggered.  This may trigger the <a href="/neovim-docs-web/en/spell#spellfile.vim">spellfile.vim</a> plugin to offer you
downloading the spell file.</div>
<div class="old-help-para">Additionally, the files related to the names in <a href="/neovim-docs-web/en/options#'spellfile'">'spellfile'</a> are loaded.  These
are the files that <a href="/neovim-docs-web/en/spell#zg">zg</a> and <a href="/neovim-docs-web/en/spell#zw">zw</a> add good and wrong words to.</div>
<div class="old-help-para">Exceptions:
<div class="help-li" style=""> Vim uses "latin1" when <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> is "iso-8859-15".  The euro sign doesn't
  matter for spelling.
</div><div class="help-li" style=""> When no spell file for <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> is found "ascii" is tried.  This only
  works for languages where nearly all words are ASCII, such as English.  It
  helps when <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> is not "latin1", such as iso-8859-2, and English text
  is being edited.  For the ".add" files the same name as the found main
  spell file is used.
</div></div>
<div class="old-help-para">For example, with these values:
	<a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a> is "~/.config/nvim,/usr/share/nvim/runtime/,~/.config/nvim/after"
	<a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a>    is "iso-8859-2"
	<a href="/neovim-docs-web/en/options#'spelllang'">'spelllang'</a>   is "pl"</div>
<div class="old-help-para">Vim will look for:
1. ~/.config/nvim/spell/pl.iso-8859-2.spl
2. /usr/share/nvim/runtime/spell/pl.iso-8859-2.spl
3. ~/.config/nvim/spell/pl.iso-8859-2.add.spl
4. /usr/share/nvim/runtime/spell/pl.iso-8859-2.add.spl
5. ~/.config/nvim/after/spell/pl.iso-8859-2.add.spl</div>
<div class="old-help-para">This assumes 1. is not found and 2. is found.</div>
<div class="old-help-para">If <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> is "latin1" Vim will look for:
1. ~/.config/nvim/spell/pl.latin1.spl
2. /usr/share/nvim/runtime/spell/pl.latin1.spl
3. ~/.config/nvim/after/spell/pl.latin1.spl
4. ~/.config/nvim/spell/pl.ascii.spl
5. /usr/share/nvim/runtime/spell/pl.ascii.spl
6. ~/.config/nvim/after/spell/pl.ascii.spl</div>
<div class="old-help-para">This assumes none of them are found (Polish doesn't make sense when leaving
out the non-ASCII characters).</div>
<div class="old-help-para">A spell file might not be available in the current <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a>.  See
<a href="/neovim-docs-web/en/spell#spell-mkspell">spell-mkspell</a> about how to create a spell file.  Converting a spell file
with "iconv" will NOT work!</div>
<div class="old-help-para">						    <a name="spell-sug-file"></a><code class="help-tag-right">spell-sug-file</code> <a name="E781"></a><code class="help-tag">E781</code>
If there is a file with exactly the same name as the ".spl" file but ending in
".sug", that file will be used for giving better suggestions.  It isn't loaded
before suggestions are made to reduce memory use.</div>
<div class="old-help-para">				    <a name="E758"></a><code class="help-tag-right">E758</code> <a name="E759"></a><code class="help-tag">E759</code> <a name="E778"></a><code class="help-tag">E778</code> <a name="E779"></a><code class="help-tag">E779</code> <a name="E780"></a><code class="help-tag">E780</code> <a name="E782"></a><code class="help-tag">E782</code>
When loading a spell file Vim checks that it is properly formatted.  If you
get an error the file may be truncated, modified or intended for another Vim
version.</div>
<div class="old-help-para"><h3 class="help-heading">SPELLFILE CLEANUP<span class="help-heading-tags">					<a name="spellfile-cleanup"></a><span class="help-tag">spellfile-cleanup</span></span></h3></div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/spell#zw">zw</a> command turns existing entries in <a href="/neovim-docs-web/en/options#'spellfile'">'spellfile'</a> into comment lines.
This avoids having to write a new file every time, but results in the file
only getting longer, never shorter.  To clean up the comment lines in all
".add" spell files do this:<pre>:runtime spell/cleanadd.vim</pre>
This deletes all comment lines, except the ones that start with "##".  Use
"##" lines to add comments that you want to keep.</div>
<div class="old-help-para">You can invoke this script as often as you like.  A variable is provided to
skip updating files that have been changed recently.  Set it to the number of
seconds that has passed since a file was changed before it will be cleaned.
For example, to clean only files that were not changed in the last hour:<pre>let g:spell_clean_limit = 60 * 60</pre>
The default is one second.</div>
<div class="old-help-para"><a name="_words"></a><h3 class="help-heading">WORDS</h3></div>
<div class="old-help-para">Vim uses a fixed method to recognize a word.  This is independent of
<a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a>, so that it also works in help files and for languages that
include characters like '-' in <a href="/neovim-docs-web/en/options#'iskeyword'">'iskeyword'</a>.  The word characters do depend on
<a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a>.</div>
<div class="old-help-para">The table with word characters is stored in the main .spl file.  Therefore it
matters what the current locale is when generating it!  A .add.spl file does
not contain a word table though.</div>
<div class="old-help-para">For a word that starts with a digit the digit is ignored, unless the word as a
whole is recognized.  Thus if "3D" is a word and "D" is not then "3D" is
recognized as a word, but if "3D" is not a word then only the "D" is marked as
bad.  Hex numbers in the form 0x12ab and 0X12AB are recognized.</div>
<div class="old-help-para"><a name="_word-combinations"></a><h3 class="help-heading">WORD COMBINATIONS</h3></div>
<div class="old-help-para">It is possible to spell-check words that include a space.  This is used to
recognize words that are invalid when used by themselves, e.g. for "et al.".
It can also be used to recognize "the the" and highlight it.</div>
<div class="old-help-para">The number of spaces is irrelevant.  In most cases a line break may also
appear.  However, this makes it difficult to find out where to start checking
for spelling mistakes.  When you make a change to one line and only that line
is redrawn Vim won't look in the previous line, thus when "et" is at the end
of the previous line "al." will be flagged as an error.  And when you type
"the&lt;CR&gt;the" the highlighting doesn't appear until the first line is redrawn.
Use <a href="/neovim-docs-web/en/various#CTRL-L">CTRL-L</a> to redraw right away.  "[s" will also stop at a word combination
with a line break.</div>
<div class="old-help-para">When encountering a line break Vim skips characters such as '', '&gt;' and '"',
so that comments in C, shell and Vim code can be spell checked.</div>
<div class="old-help-para"><h3 class="help-heading">SYNTAX HIGHLIGHTING<span class="help-heading-tags">					<a name="spell-syntax"></a><span class="help-tag">spell-syntax</span></span></h3></div>
<div class="old-help-para">Files that use syntax highlighting can specify where spell checking should be
done:</div>
<div class="old-help-para">1.  everywhere			   default
2.  in specific items		   use "contains=@Spell"
3.  everywhere but specific items  use "contains=@NoSpell"</div>
<div class="old-help-para">For the second method adding the @NoSpell cluster will disable spell checking
again.  This can be used, for example, to add @Spell to the comments of a
program, and add @NoSpell for items that shouldn't be checked.
Also see <a href="/neovim-docs-web/en/syntax#%3Asyn-spell">:syn-spell</a> for text that is not in a syntax item.</div>
<div class="old-help-para"><a name="_vim-scripts"></a><h3 class="help-heading">VIM SCRIPTS</h3></div>
<div class="old-help-para">If you want to write a Vim script that does something with spelling, you may
find these functions useful:</div>
<div class="old-help-para">    spellbadword()	find badly spelled word at the cursor
    spellsuggest()	get list of spelling suggestions
    soundfold()		get the sound-a-like version of a word</div>
<div class="old-help-para">SETTING <a href="/neovim-docs-web/en/options#'spellcapcheck'">'spellcapcheck'</a> AUTOMATICALLY			<a name="set-spc-auto"></a><code class="help-tag-right">set-spc-auto</code></div>
<div class="old-help-para">After the <a href="/neovim-docs-web/en/options#'spelllang'">'spelllang'</a> option has been set successfully, Vim will source the
files "spell/LANG.vim" in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>.  "LANG" is the value of <a href="/neovim-docs-web/en/options#'spelllang'">'spelllang'</a>
up to the first comma, dot or underscore.  This can be used to set options
specifically for the language, especially <a href="/neovim-docs-web/en/options#'spellcapcheck'">'spellcapcheck'</a>.</div>
<div class="old-help-para">The distribution includes a few of these files.  Use this command to see what
they do:<pre>:next $VIMRUNTIME/spell/*.vim</pre>
Note that the default scripts don't set <a href="/neovim-docs-web/en/options#'spellcapcheck'">'spellcapcheck'</a> if it was changed from
the default value.  This assumes the user prefers another value then.</div>
<div class="old-help-para"><h3 class="help-heading">DOUBLE SCORING<span class="help-heading-tags">						<a name="spell-double-scoring"></a><span class="help-tag">spell-double-scoring</span></span></h3></div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/options#'spellsuggest'">'spellsuggest'</a> option can be used to select "double" scoring.  This
mechanism is based on the principle that there are two kinds of spelling
mistakes:</div>
<div class="old-help-para">1. You know how to spell the word, but mistype something.  This results in a
   small editing distance (character swapped/omitted/inserted) and possibly a
   word that sounds completely different.</div>
<div class="old-help-para">2. You don't know how to spell the word and type something that sounds right.
   The edit distance can be big but the word is similar after sound-folding.</div>
<div class="old-help-para">Since scores for these two mistakes will be very different we use a list
for each and mix them.</div>
<div class="old-help-para">The sound-folding is slow and people that know the language won't make the
second kind of mistakes.  Therefore <a href="/neovim-docs-web/en/options#'spellsuggest'">'spellsuggest'</a> can be set to select the
preferred method for scoring the suggestions.</div>
<div class="old-help-para"><h2 class="help-heading">3. Generating a spell file<span class="help-heading-tags">				<a name="spell-mkspell"></a><span class="help-tag">spell-mkspell</span></span></h2></div>
<div class="old-help-para">Vim uses a binary file format for spelling.  This greatly speeds up loading
the word list and keeps it small.
						    <a name=".aff"></a><code class="help-tag-right">.aff</code> <a name=".dic"></a><code class="help-tag">.dic</code> <a name="Myspell"></a><code class="help-tag">Myspell</code>
You can create a Vim spell file from the .aff and .dic files that Myspell
uses.  Myspell is used by OpenOffice.org and Mozilla. The OpenOffice .oxt
files are zip files which contain the .aff and .dic files. You should be able
to find them here:
	<a href="https://extensions.services.openoffice.org/dictionary">https://extensions.services.openoffice.org/dictionary</a>
The older, OpenOffice 2 files may be used if this doesn't work:
	<a href="http://wiki.services.openoffice.org/wiki/Dictionaries">http://wiki.services.openoffice.org/wiki/Dictionaries</a>
You can also use a plain word list.  The results are the same, the choice
depends on what word lists you can find.</div>
<div class="old-help-para">If you install Aap (from www.a-a-p.org) you can use the recipes in the
runtime/spell/??/ directories.  Aap will take care of downloading the files,
apply patches needed for Vim and build the .spl file.</div>
<div class="old-help-para">Make sure your current locale is set properly, otherwise Vim doesn't know what
characters are upper/lower case letters.  If the locale isn't available (e.g.,
when using an MS-Windows codepage on Unix) add tables to the .aff file
<a href="/neovim-docs-web/en/spell#spell-affix-chars">spell-affix-chars</a>.  If the .aff file doesn't define a table then the word
table of the currently active spelling is used.  If spelling is not active
then Vim will try to guess.</div>
<div class="old-help-para">							<a name="%3Amksp"></a><code class="help-tag-right">:mksp</code> <a name="%3Amkspell"></a><code class="help-tag">:mkspell</code>
:mksp[ell][!] [-ascii] <code>{outname}</code> <code>{inname}</code> ...
			Generate a Vim spell file from word lists.  Example:<pre>:mkspell /tmp/nl nl_NL.words</pre></div>
<div class="old-help-para">								<a name="E751"></a><code class="help-tag-right">E751</code>
			When <code>{outname}</code> ends in ".spl" it is used as the output
			file name.  Otherwise it should be a language name,
			such as "en", without the region name.  The file
			written will be "{outname}.{encoding}.spl", where
			<code>{encoding}</code> is the value of the <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> option.</div>
<div class="old-help-para">			When the output file already exists [!] must be used
			to overwrite it.</div>
<div class="old-help-para">			When the [-ascii] argument is present, words with
			non-ascii characters are skipped.  The resulting file
			ends in "ascii.spl".</div>
<div class="old-help-para">			The input can be the Myspell format files <code>{inname}</code>.aff
			and <code>{inname}</code>.dic.  If <code>{inname}</code>.aff does not exist then
			<code>{inname}</code> is used as the file name of a plain word
			list.</div>
<div class="old-help-para">			Multiple <code>{inname}</code> arguments can be given to combine
			regions into one Vim spell file.  Example:<pre>:mkspell ~/.config/nvim/spell/en /tmp/en_US /tmp/en_CA /tmp/en_AU</pre></div>
<div class="old-help-para">			This combines the English word lists for US, CA and AU
			into one en.spl file.
			Up to eight regions can be combined. <a name="E754"></a><code class="help-tag">E754</code> <a name="E755"></a><code class="help-tag">E755</code>
			The REP and SAL items of the first .aff file where
			they appear are used. <a href="/neovim-docs-web/en/spell#spell-REP">spell-REP</a> <a href="/neovim-docs-web/en/spell#spell-SAL">spell-SAL</a>
								<a name="E845"></a><code class="help-tag-right">E845</code>
			This command uses a lot of memory, required to find
			the optimal word tree (Polish, Italian and Hungarian
			require several hundred Mbyte).  The final result will
			be much smaller, because compression is used.  To
			avoid running out of memory compression will be done
			now and then.  This can be tuned with the <a href="/neovim-docs-web/en/options#'mkspellmem'">'mkspellmem'</a>
			option.</div>
<div class="old-help-para">			After the spell file was written and it was being used
			in a buffer it will be reloaded automatically.</div>
<div class="old-help-para">:mksp[ell] [-ascii] <code>{name}</code>.{enc}.add
			Like ":mkspell" above, using <code>{name}</code>.{enc}.add as the
			input file and producing an output file in the same
			directory that has ".spl" appended.</div>
<div class="old-help-para">:mksp[ell] [-ascii] <code>{name}</code>
			Like ":mkspell" above, using <code>{name}</code> as the input file
			and producing an output file in the same directory
			that has ".{enc}.spl" appended.</div>
<div class="old-help-para">Vim will report the number of duplicate words.  This might be a mistake in the
list of words.  But sometimes it is used to have different prefixes and
suffixes for the same basic word to avoid them combining (e.g. Czech uses
this).  If you want Vim to report all duplicate words set the <a href="/neovim-docs-web/en/options#'verbose'">'verbose'</a>
option.</div>
<div class="old-help-para">Since you might want to change a Myspell word list for use with Vim the
following procedure is recommended:</div>
<div class="old-help-para">1. Obtain the xx_YY.aff and xx_YY.dic files from Myspell.
2. Make a copy of these files to xx_YY.orig.aff and xx_YY.orig.dic.
3. Change the xx_YY.aff and xx_YY.dic files to remove bad words, add missing
   words, define word characters with FOL/LOW/UPP, etc.  The distributed
   "*.diff" files can be used.
4. Start Vim with the right locale and use <a href="/neovim-docs-web/en/spell#%3Amkspell">:mkspell</a> to generate the Vim
   spell file.
5. Try out the spell file with ":set spell spelllang=xx" if you wrote it in
   a spell directory in <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>, or ":set spelllang=xx.enc.spl" if you
   wrote it somewhere else.</div>
<div class="old-help-para">When the Myspell files are updated you can merge the differences:
1. Obtain the new Myspell files as xx_YY.new.aff and xx_UU.new.dic.
2. Use <a href="/neovim-docs-web/en/diff#diff-mode">diff-mode</a> to see what changed:<pre>nvim -d xx_YY.orig.dic xx_YY.new.dic</pre>
3. Take over the changes you like in xx_YY.dic.
   You may also need to change xx_YY.aff.
4. Rename xx_YY.new.dic to xx_YY.orig.dic and xx_YY.new.aff to xx_YY.orig.aff.</div>
<div class="old-help-para"><h3 class="help-heading">SPELL FILE VERSIONS<span class="help-heading-tags">					<a name="E770"></a><span class="help-tag">E770</span> <a name="E771"></a><span class="help-tag">E771</span> <a name="E772"></a><span class="help-tag">E772</span></span></h3></div>
<div class="old-help-para">Spell checking is a relatively new feature in Vim, thus it's possible that the
.spl file format will be changed to support more languages.  Vim will check
the validity of the spell file and report anything wrong.</div>
<div class="old-help-para"><div class="help-column_heading">	E771: Old spell file, needs to be updated</div>This spell file is older than your Vim.  You need to update the .spl file.</div>
<div class="old-help-para"><div class="help-column_heading">	E772: Spell file is for newer version of Vim</div>This means the spell file was made for a later version of Vim.  You need to
update Vim.</div>
<div class="old-help-para"><div class="help-column_heading">	E770: Unsupported section in spell file</div>This means the spell file was made for a later version of Vim and contains a
section that is required for the spell file to work.  In this case it's
probably a good idea to upgrade your Vim.</div>
<div class="old-help-para"><a name="_spell-file-dump"></a><h3 class="help-heading">SPELL FILE DUMP</h3></div>
<div class="old-help-para">If for some reason you want to check what words are supported by the currently
used spelling files, use this command:</div>
<div class="old-help-para">							<a name="%3Aspelldump"></a><code class="help-tag-right">:spelldump</code> <a name="%3Aspelld"></a><code class="help-tag">:spelld</code>
:spelld[ump]		Open a new window and fill it with all currently valid
			words.  Compound words are not included.
			Note: For some languages the result may be enormous,
			causing Vim to run out of memory.</div>
<div class="old-help-para">:spelld[ump]!		Like ":spelldump" and include the word count.  This is
			the number of times the word was found while
			updating the screen.  Words that are in COMMON items
			get a starting count of 10.</div>
<div class="old-help-para">The format of the word list is used <a href="/neovim-docs-web/en/spell#spell-wordlist-format">spell-wordlist-format</a>.  You should be
able to read it with ":mkspell" to generate one .spl file that includes all
the words.</div>
<div class="old-help-para">When all entries to <a href="/neovim-docs-web/en/options#'spelllang'">'spelllang'</a> use the same regions or no regions at all then
the region information is included in the dumped words.  Otherwise only words
for the current region are included and no "/regions" line is generated.</div>
<div class="old-help-para">Comment lines with the name of the .spl file are used as a header above the
words that were generated from that .spl file.</div>
<div class="old-help-para"><h3 class="help-heading">SPELL FILE MISSING<span class="help-heading-tags">		<a name="spell-SpellFileMissing"></a><span class="help-tag">spell-SpellFileMissing</span> <a name="spellfile.vim"></a><span class="help-tag">spellfile.vim</span></span></h3></div>
<div class="old-help-para">If the spell file for the language you are using is not available, you will
get an error message.  But if the "spellfile.vim" plugin is active it will
offer you to download the spell file.  Just follow the instructions, it will
ask you where to write the file (there must be a writable directory in
<a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a> for this).</div>
<div class="old-help-para">The plugin has a default place where to look for spell files, on the Vim ftp
server.  The protocol used is SSL (<a href="https://">https://</a>) for security.  If you want to use
another location or another protocol, set the g:spellfile_URL variable to the
directory that holds the spell files.  You can use <a href="http://">http://</a> or ftp://, but you
are taking a security risk then.  The <a href="/neovim-docs-web/en/pi_netrw#netrw">netrw</a> plugin is used for getting the
file, look there for the specific syntax of the URL.  Example:<pre>let g:spellfile_URL = 'https://ftp.nluug.nl/vim/runtime/spell'</pre>
You may need to escape special characters.</div>
<div class="old-help-para">The plugin will only ask about downloading a language once.  If you want to
try again anyway restart Vim, or set g:spellfile_URL to another value (e.g.,
prepend a space).</div>
<div class="old-help-para">To avoid using the "spellfile.vim" plugin do this in your vimrc file:<pre>let loaded_spellfile_plugin = 1</pre>
Instead of using the plugin you can define a <a href="/neovim-docs-web/en/autocmd#SpellFileMissing">SpellFileMissing</a> autocommand to
handle the missing file yourself.  You can use it like this:<pre>:au SpellFileMissing * call Download_spell_file(expand('&lt;amatch&gt;'))</pre>
Thus the <code>&lt;amatch&gt;</code> item contains the name of the language.  Another important
value is <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a>, since every encoding has its own spell file.  With two
exceptions:
<div class="help-li" style=""> For ISO-8859-15 (latin9) the name "latin1" is used (the encodings only
  differ in characters not used in dictionary words).
</div><div class="help-li" style=""> The name "ascii" may also be used for some languages where the words use
  only ASCII letters for most of the words.
</div></div>
<div class="old-help-para">The default "spellfile.vim" plugin uses this autocommand, if you define your
autocommand afterwards you may want to use ":au! SpellFileMissing" to overrule
it.  If you define your autocommand before the plugin is loaded it will notice
this and not do anything.
							<a name="E797"></a><code class="help-tag-right">E797</code>
Note that the SpellFileMissing autocommand must not change or destroy the
buffer the user was editing.</div>
<div class="old-help-para"><h2 class="help-heading">4. Spell file format<span class="help-heading-tags">					<a name="spell-file-format"></a><span class="help-tag">spell-file-format</span></span></h2></div>
<div class="old-help-para">This is the format of the files that are used by the person who creates and
maintains a word list.</div>
<div class="old-help-para">Note that we avoid the word "dictionary" here.  That is because the goal of
spell checking differs from writing a dictionary (as in the book).  For
spelling we need a list of words that are OK, thus should not be highlighted.
Person and company names will not appear in a dictionary, but do appear in a
word list.  And some old words are rarely used while they are common
misspellings.  These do appear in a dictionary but not in a word list.</div>
<div class="old-help-para">There are two formats: A straight list of words and a list using affix
compression.  The files with affix compression are used by Myspell (Mozilla
and OpenOffice.org).  This requires two files, one with .aff and one with .dic
extension.</div>
<div class="old-help-para"><h3 class="help-heading">FORMAT OF STRAIGHT WORD LIST<span class="help-heading-tags">				<a name="spell-wordlist-format"></a><span class="help-tag">spell-wordlist-format</span></span></h3></div>
<div class="old-help-para">The words must appear one per line.  That is all that is required.</div>
<div class="old-help-para">Additionally the following items are recognized:</div>
<div class="old-help-para"><div class="help-li" style=""> Empty and blank lines are ignored.
</div></div>
<div class="old-help-para"><div class="help-column_heading">	# comment</div><div class="help-li" style=""> Lines starting with a # are ignored (comment lines).
</div></div>
<div class="old-help-para"><div class="help-column_heading">	/encoding=utf-8</div><div class="help-li" style=""> A line starting with "/encoding=", before any word, specifies the encoding
  of the file.  After the second '=' comes an encoding name.  This tells Vim
  to setup conversion from the specified encoding to <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a>.  Thus you can
  use one word list for several target encodings.
</div></div>
<div class="old-help-para"><div class="help-column_heading">	/regions=usca</div><div class="help-li" style=""> A line starting with "/regions=" specifies the region names that are
  supported.  Each region name must be two ASCII letters.  The first one is
  region 1.  Thus "/regions=usca" has region 1 "us" and region 2 "ca".
  In an addition word list the region names should be equal to the main word
  list!
</div></div>
<div class="old-help-para"><div class="help-li" style=""> Other lines starting with '/' are reserved for future use.  The ones that
  are not recognized are ignored.  You do get a warning message, so that you
  know something won't work.
</div></div>
<div class="old-help-para"><div class="help-li" style=""> A "/" may follow the word with the following items:
    =		Case must match exactly.
    ?		Rare word.
    !		Bad (wrong) word.
    1 to 9	A region in which the word is valid.  If no regions are
		specified the word is valid in all regions.
</div></div>
<div class="old-help-para">Example:</div>
<div class="old-help-para">	# This is an example word list		comment
	/encoding=latin1			encoding of the file
	/regions=uscagb				regions "us", "ca" and "gb"
	example					word for all regions
	blah/12					word for regions "us" and "ca"
	vim/!					bad word
	Campbell/?3				rare word in region 3 "gb"
	's mornings/=				keep-case word</div>
<div class="old-help-para">Note that when "/=" is used the same word with all upper-case letters is not
accepted.  This is different from a word with mixed case that is automatically
marked as keep-case, those words may appear in all upper-case letters.</div>
<div class="old-help-para"><h3 class="help-heading">FORMAT WITH .AFF AND .DIC FILES<span class="help-heading-tags">				<a name="aff-dic-format"></a><span class="help-tag">aff-dic-format</span></span></h3></div>
<div class="old-help-para">There are two files: the basic word list and an affix file.  The affix file
specifies settings for the language and can contain affixes.  The affixes are
used to modify the basic words to get the full word list.  This significantly
reduces the number of words, especially for a language like Polish.  This is
called affix compression.</div>
<div class="old-help-para">The basic word list and the affix file are combined with the ":mkspell"
command and results in a binary spell file.  All the preprocessing has been
done, thus this file loads fast.  The binary spell file format is described in
the source code (src/spell.c).  But only developers need to know about it.</div>
<div class="old-help-para">The preprocessing also allows us to take the Myspell language files and modify
them before the Vim word list is made.  The tools for this can be found in the
"src/spell" directory.</div>
<div class="old-help-para">The format for the affix and word list files is based on what Myspell uses
(the spell checker of Mozilla and OpenOffice.org).  A description can be found
here:
<div class="help-column_heading">	<a href="https://lingucomponent.openoffice.org/affix.readme">https://lingucomponent.openoffice.org/affix.readme</a></div>Note that affixes are case sensitive, this isn't obvious from the description.</div>
<div class="old-help-para">Vim supports quite a few extras.  They are described below <a href="/neovim-docs-web/en/spell#spell-affix-vim">spell-affix-vim</a>.
Attempts have been made to keep this compatible with other spell checkers, so
that the same files can often be used.  One other project that offers more
than Myspell is Hunspell ( <a href="https://hunspell.github.io">https://hunspell.github.io</a> ).</div>
<div class="old-help-para"><h3 class="help-heading">WORD LIST FORMAT<span class="help-heading-tags">				<a name="spell-dic-format"></a><span class="help-tag">spell-dic-format</span></span></h3></div>
<div class="old-help-para">A short example, with line numbers:</div>
<div class="old-help-para"><div class="help-column_heading">	1	1234</div><div class="help-column_heading">	2	aan</div><div class="help-column_heading">	3	Als</div><div class="help-column_heading">	4	Etten-Leur</div><div class="help-column_heading">	5	et al.</div><div class="help-column_heading">	6	's-Gravenhage</div><div class="help-column_heading">	7	's-Gravenhaags</div><div class="help-column_heading">	8	# word that differs between regions</div><div class="help-column_heading">	9	kado/1</div><div class="help-column_heading">	10	cadeau/2</div><div class="help-column_heading">	11	TCP,IP</div><div class="help-column_heading">	12	/the S affix may add a 's'</div><div class="help-column_heading">	13	bedel/S</div></div>
<div class="old-help-para">The first line contains the number of words.  Vim ignores it, but you do get
an error message if it's not there.  <a name="E760"></a><code class="help-tag">E760</code></div>
<div class="old-help-para">What follows is one word per line.  White space at the end of the line is
ignored, all other white space matters.  The encoding is specified in the
affix file <a href="/neovim-docs-web/en/spell#spell-SET">spell-SET</a>.</div>
<div class="old-help-para">Comment lines start with '#' or '/'.  See the example lines 8 and 12.  Note
that putting a comment after a word is NOT allowed:</div>
<div class="old-help-para"><div class="help-column_heading">		someword   # comment that causes an error!</div></div>
<div class="old-help-para">After the word there is an optional slash and flags.  Most of these flags are
letters that indicate the affixes that can be used with this word.  These are
specified with SFX and PFX lines in the .aff file, see <a href="/neovim-docs-web/en/spell#spell-SFX">spell-SFX</a> and
<a href="/neovim-docs-web/en/spell#spell-PFX">spell-PFX</a>.  Vim allows using other flag types with the FLAG item in the
affix file <a href="/neovim-docs-web/en/spell#spell-FLAG">spell-FLAG</a>.</div>
<div class="old-help-para">When the word only has lower-case letters it will also match with the word
starting with an upper-case letter.</div>
<div class="old-help-para">When the word includes an upper-case letter, this means the upper-case letter
is required at this position.  The same word with a lower-case letter at this
position will not match. When some of the other letters are upper-case it will
not match either.</div>
<div class="old-help-para">The word with all upper-case characters will always be OK,</div>
<div class="old-help-para"><div class="help-column_heading">	word list	matches			does not match</div>	als		als Als ALS		ALs AlS aLs aLS
	Als		Als  ALS		als ALs AlS aLs aLS
	ALS		ALS			als Als ALs AlS aLs aLS
	AlS		AlS ALS			als Als ALs aLs aLS</div>
<div class="old-help-para">The KEEPCASE affix ID can be used to specifically match a word with identical
case only, see below <a href="/neovim-docs-web/en/spell#spell-KEEPCASE">spell-KEEPCASE</a>.</div>
<div class="old-help-para">Note: in line 5 to 7 non-word characters are used.  You can include any
character in a word.  When checking the text a word still only matches when it
appears with a non-word character before and after it.  For Myspell a word
starting with a non-word character probably won't work.</div>
<div class="old-help-para">In line 12 the word "TCP/IP" is defined.  Since the slash has a special
meaning the comma is used instead.  This is defined with the SLASH item in the
affix file, see <a href="/neovim-docs-web/en/spell#spell-SLASH">spell-SLASH</a>.  Note that without this SLASH item the word
will be "TCP,IP".</div>
<div class="old-help-para"><h3 class="help-heading">AFFIX FILE FORMAT<span class="help-heading-tags">			<a name="spell-aff-format"></a><span class="help-tag">spell-aff-format</span> <a name="spell-affix-vim"></a><span class="help-tag">spell-affix-vim</span></span></h3></div>
<div class="old-help-para">							<a name="spell-affix-comment"></a><code class="help-tag-right">spell-affix-comment</code>
Comment lines in the .aff file start with a '#':</div>
<div class="old-help-para"><div class="help-column_heading">	# comment line</div></div>
<div class="old-help-para">Items with a fixed number of arguments can be followed by a comment.  But only
if none of the arguments can contain white space.  The comment must start with
a "#" character.  Example:</div>
<div class="old-help-para"><div class="help-column_heading">	KEEPCASE =  # fix case for words with this flag</div></div>
<div class="old-help-para"><h3 class="help-heading">ENCODING<span class="help-heading-tags">							<a name="spell-SET"></a><span class="help-tag">spell-SET</span></span></h3></div>
<div class="old-help-para">The affix file can be in any encoding that is supported by "iconv".  However,
in some cases the current locale should also be set properly at the time
<a href="/neovim-docs-web/en/spell#%3Amkspell">:mkspell</a> is invoked.  Adding FOL/LOW/UPP lines removes this requirement
<a href="/neovim-docs-web/en/spell#spell-FOL">spell-FOL</a>.</div>
<div class="old-help-para">The encoding should be specified before anything where the encoding matters.
The encoding applies both to the affix file and the dictionary file.  It is
done with a SET line:</div>
<div class="old-help-para"><div class="help-column_heading">	SET utf-8</div></div>
<div class="old-help-para">The encoding can be different from the value of the <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> option at the
time ":mkspell" is used.  Vim will then convert everything to <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> and
generate a spell file for <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a>.  If some of the used characters to not
fit in <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> you will get an error message.
							<a name="spell-affix-mbyte"></a><code class="help-tag-right">spell-affix-mbyte</code>
When using a multibyte encoding it's possible to use more different affix
flags.  But Myspell doesn't support that, thus you may not want to use it
anyway.  For compatibility use an 8-bit encoding.</div>
<div class="old-help-para"><a name="_information"></a><h3 class="help-heading">INFORMATION</h3></div>
<div class="old-help-para">These entries in the affix file can be used to add information to the spell
file.  There are no restrictions on the format, but they should be in the
right encoding.</div>
<div class="old-help-para">				<a name="spell-NAME"></a><code class="help-tag-right">spell-NAME</code> <a name="spell-VERSION"></a><code class="help-tag">spell-VERSION</code> <a name="spell-HOME"></a><code class="help-tag">spell-HOME</code>
				<a name="spell-AUTHOR"></a><code class="help-tag-right">spell-AUTHOR</code> <a name="spell-EMAIL"></a><code class="help-tag">spell-EMAIL</code> <a name="spell-COPYRIGHT"></a><code class="help-tag">spell-COPYRIGHT</code>
	NAME		Name of the language
	VERSION		1.0.1  with fixes
	HOME		<a href="https://www.example.com">https://www.example.com</a>
	AUTHOR		John Doe
	EMAIL		john AT Doe DOT net
	COPYRIGHT	LGPL</div>
<div class="old-help-para">These fields are put in the .spl file as-is.  The <a href="/neovim-docs-web/en/spell#%3Aspellinfo">:spellinfo</a> command can be
used to view the info.</div>
<div class="old-help-para">							<a name="%3Aspellinfo"></a><code class="help-tag-right">:spellinfo</code> <a name="%3Aspelli"></a><code class="help-tag">:spelli</code>
:spelli[nfo]		Display the information for the spell file(s) used for
			the current buffer.</div>
<div class="old-help-para"><a name="_character-tables"></a><h3 class="help-heading">CHARACTER TABLES</h3>							<a name="spell-affix-chars"></a><code class="help-tag-right">spell-affix-chars</code>
When using an 8-bit encoding the affix file should define what characters are
word characters.  This is because the system where ":mkspell" is used may not
support a locale with this encoding and isalpha() won't work.  For example
when using "cp1250" on Unix.
						<a name="E761"></a><code class="help-tag-right">E761</code> <a name="E762"></a><code class="help-tag">E762</code> <a name="spell-FOL"></a><code class="help-tag">spell-FOL</code>
						<a name="spell-LOW"></a><code class="help-tag-right">spell-LOW</code> <a name="spell-UPP"></a><code class="help-tag">spell-UPP</code>
Three lines in the affix file are needed.  Simplistic example:</div>
<div class="old-help-para"><div class="help-column_heading">	FOL  ??????</div><div class="help-column_heading">	LOW  ??????</div><div class="help-column_heading">	UPP  ??????</div></div>
<div class="old-help-para">All three lines must have exactly the same number of characters.</div>
<div class="old-help-para">The "FOL" line specifies the case-folded characters.  These are used to
compare words while ignoring case.  For most encodings this is identical to
the lower case line.</div>
<div class="old-help-para">The "LOW" line specifies the characters in lower-case.  Mostly it's equal to
the "FOL" line.</div>
<div class="old-help-para">The "UPP" line specifies the characters with upper-case.  That is, a character
is upper-case where it's different from the character at the same position in
"FOL".</div>
<div class="old-help-para">An exception is made for the German sharp s ??.  The upper-case version is
"SS".  In the FOL/LOW/UPP lines it should be included, so that it's recognized
as a word character, but use the ?? character in all three.</div>
<div class="old-help-para">ASCII characters should be omitted, Vim always handles these in the same way.
When the encoding is UTF-8 no word characters need to be specified.</div>
<div class="old-help-para">							<a name="E763"></a><code class="help-tag-right">E763</code>
Vim allows you to use spell checking for several languages in the same file.
You can list them in the <a href="/neovim-docs-web/en/options#'spelllang'">'spelllang'</a> option.  As a consequence all spell files
for the same encoding must use the same word characters, otherwise they can't
be combined without errors.</div>
<div class="old-help-para">If you get an E763 warning that the word tables differ you need to update your
".spl" spell files.  If you downloaded the files, get the latest version of
all spell files you use.  If you are only using one, e.g., German, then also
download the recent English spell files.  Otherwise generate the .spl file
again with <a href="/neovim-docs-web/en/spell#%3Amkspell">:mkspell</a>.  If you still get errors check the FOL, LOW and UPP
lines in the used .aff files.</div>
<div class="old-help-para">The XX.ascii.spl spell file generated with the "-ascii" argument will not
contain the table with characters, so that it can be combine with spell files
for any encoding.  The .add.spl files also do not contain the table.</div>
<div class="old-help-para"><a name="_mid-word-characters"></a><h3 class="help-heading">MID-WORD CHARACTERS</h3>							<a name="spell-midword"></a><code class="help-tag-right">spell-midword</code>
Some characters are only to be considered word characters if they are used in
between two ordinary word characters.  An example is the single quote: It is
often used to put text in quotes, thus it can't be recognized as a word
character, but when it appears in between word characters it must be part of
the word.  This is needed to detect a spelling error such as they'are.  That
should be they're, but since "they" and "are" are words themselves that would
go unnoticed.</div>
<div class="old-help-para">These characters are defined with MIDWORD in the .aff file.  Example:</div>
<div class="old-help-para"><div class="help-column_heading">	MIDWORD	'-</div></div>
<div class="old-help-para"><h3 class="help-heading">FLAG TYPES<span class="help-heading-tags">						<a name="spell-FLAG"></a><span class="help-tag">spell-FLAG</span></span></h3></div>
<div class="old-help-para">Flags are used to specify the affixes that can be used with a word and for
other properties of the word.  Normally single-character flags are used.  This
limits the number of possible flags, especially for 8-bit encodings.  The FLAG
item can be used if more affixes are to be used.  Possible values:</div>
<div class="old-help-para">	FLAG long	use two-character flags
	FLAG num	use numbers, from 1 up to 65000
	FLAG caplong	use one-character flags without A-Z and two-character
			flags that start with A-Z</div>
<div class="old-help-para">With "FLAG num" the numbers in a list of affixes need to be separated with a
comma: "234,2143,1435".  This method is inefficient, but useful if the file is
generated with a program.</div>
<div class="old-help-para">When using "caplong" the two-character flags all start with a capital: "Aa",
"B1", "BB", etc.  This is useful to use one-character flags for the most
common items and two-character flags for uncommon items.</div>
<div class="old-help-para">Note: When using utf-8 only characters up to 65000 may be used for flags.</div>
<div class="old-help-para">Note: even when using "num" or "long" the number of flags available to
compounding and prefixes is limited to about 250.</div>
<div class="old-help-para"><h3 class="help-heading">AFFIXES<span class="help-heading-tags">						<a name="spell-PFX"></a><span class="help-tag">spell-PFX</span> <a name="spell-SFX"></a><span class="help-tag">spell-SFX</span></span></h3></div>
<div class="old-help-para">The usual PFX (prefix) and SFX (suffix) lines are supported (see the Myspell
documentation or the Aspell manual:
<a href="http://aspell.net/man-html/Affix-Compression.html">http://aspell.net/man-html/Affix-Compression.html</a>).</div>
<div class="old-help-para">Summary:
<div class="help-column_heading">	SFX L Y 2</div><div class="help-column_heading">	SFX L 0 re [^x]</div><div class="help-column_heading">	SFX L 0 ro x</div></div>
<div class="old-help-para">The first line is a header and has four fields:
	SFX <code>{flag}</code> <code>{combine}</code> <code>{count}</code></div>
<div class="old-help-para"><code>{flag}</code>		The name used for the suffix.  Mostly it's a single letter,
		but other characters can be used, see <a href="/neovim-docs-web/en/spell#spell-FLAG">spell-FLAG</a>.</div>
<div class="old-help-para"><code>{combine}</code>	Can be 'Y' or 'N'.  When 'Y' then the word plus suffix can
		also have a prefix.  When 'N' then a prefix is not allowed.</div>
<div class="old-help-para"><code>{count}</code>		The number of lines following.  If this is wrong you will get
		an error message.</div>
<div class="old-help-para">For PFX the fields are exactly the same.</div>
<div class="old-help-para">The basic format for the following lines is:
	SFX <code>{flag}</code> <code>{strip}</code> <code>{add}</code> <code>{condition}</code> <code>{extra}</code></div>
<div class="old-help-para"><code>{flag}</code>		Must be the same as the <code>{flag}</code> used in the first line.</div>
<div class="old-help-para"><code>{strip}</code>		Characters removed from the basic word.  There is no check if
		the characters are actually there, only the length is used (in
		bytes).  This better match the <code>{condition}</code>, otherwise strange
		things may happen.  If the <code>{strip}</code> length is equal to or
		longer than the basic word the suffix won't be used.
		When <code>{strip}</code> is 0 (zero) then nothing is stripped.</div>
<div class="old-help-para"><code>{add}</code>		Characters added to the basic word, after removing <code>{strip}</code>.
		Optionally there is a '/' followed by flags.  The flags apply
		to the word plus affix.  See <a href="/neovim-docs-web/en/spell#spell-affix-flags">spell-affix-flags</a></div>
<div class="old-help-para"><code>{condition}</code>	A simplistic pattern.  Only when this matches with a basic
		word will the suffix be used for that word.  This is normally
		for using one suffix letter with different <code>{add}</code> and <code>{strip}</code>
		fields for words with different endings.
		When <code>{condition}</code> is a . (dot) there is no condition.
		The pattern may contain:
<div class="help-li" style=""> Literal characters.
</div><div class="help-li" style=""> A set of characters in []. [abc] matches a, b and c.
		  A dash is allowed for a range [a-c], but this is
		  Vim-specific.
</div><div class="help-li" style=""> A set of characters that starts with a ^, meaning the
		  complement of the specified characters. [^abc] matches any
		  character but a, b and c.
</div></div>
<div class="old-help-para"><code>{extra}</code>		Optional extra text:
		    # comment		Comment is ignored
		    -				Hunspell uses this, ignored</div>
<div class="old-help-para">For PFX the fields are the same, but the <code>{strip}</code>, <code>{add}</code> and <code>{condition}</code> apply
to the start of the word.</div>
<div class="old-help-para">Note: Myspell ignores any extra text after the relevant info.  Vim requires
this text to start with a "#" so that mistakes don't go unnoticed.  Example:</div>
<div class="old-help-para"><div class="help-column_heading">	SFX F 0 in   [^i]n      # Spion &gt; Spionin</div><div class="help-column_heading">	SFX F 0 nen  in		# Bauerin &gt; Bauerinnen</div></div>
<div class="old-help-para">However, to avoid lots of errors in affix files written for Myspell, you can
add the IGNOREEXTRA flag.</div>
<div class="old-help-para">Apparently Myspell allows an affix name to appear more than once.  Since this
might also be a mistake, Vim checks for an extra "S".  The affix files for
Myspell that use this feature apparently have this flag.  Example:</div>
<div class="old-help-para"><div class="help-column_heading">	SFX a Y 1 S</div><div class="help-column_heading">	SFX a 0 an .</div></div>
<div class="old-help-para"><div class="help-column_heading">	SFX a Y 2 S</div><div class="help-column_heading">	SFX a 0 en .</div><div class="help-column_heading">	SFX a 0 on .</div></div>
<div class="old-help-para"><h3 class="help-heading">AFFIX FLAGS<span class="help-heading-tags">						<a name="spell-affix-flags"></a><span class="help-tag">spell-affix-flags</span></span></h3></div>
<div class="old-help-para">This is a feature that comes from Hunspell: The affix may specify flags.  This
works similar to flags specified on a basic word.  The flags apply to the
basic word plus the affix (but there are restrictions).  Example:</div>
<div class="old-help-para"><div class="help-column_heading">	SFX S Y 1</div><div class="help-column_heading">	SFX S 0 s .</div></div>
<div class="old-help-para"><div class="help-column_heading">	SFX A Y 1</div><div class="help-column_heading">	SFX A 0 able/S .</div></div>
<div class="old-help-para">When the dictionary file contains "drink/AS" then these words are possible:</div>
<div class="old-help-para">	drink
	drinks		uses S suffix
	drinkable	uses A suffix
	drinkables	uses A suffix and then S suffix</div>
<div class="old-help-para">Generally the flags of the suffix are added to the flags of the basic word,
both are used for the word plus suffix.  But the flags of the basic word are
only used once for affixes, except that both one prefix and one suffix can be
used when both support combining.</div>
<div class="old-help-para">Specifically, the affix flags can be used for:
<div class="help-li" style=""> Suffixes on suffixes, as in the example above.  This works once, thus you
  can have two suffixes on a word (plus one prefix).
</div><div class="help-li" style=""> Making the word with the affix rare, by using the <a href="/neovim-docs-web/en/spell#spell-RARE">spell-RARE</a> flag.
</div><div class="help-li" style=""> Exclude the word with the affix from compounding, by using the
  <a href="/neovim-docs-web/en/spell#spell-COMPOUNDFORBIDFLAG">spell-COMPOUNDFORBIDFLAG</a> flag.
</div><div class="help-li" style=""> Allow the word with the affix to be part of a compound word on the side of
  the affix with the <a href="/neovim-docs-web/en/spell#spell-COMPOUNDPERMITFLAG">spell-COMPOUNDPERMITFLAG</a>.
</div><div class="help-li" style=""> Use the NEEDCOMPOUND flag: word plus affix can only be used as part of a
  compound word. <a href="/neovim-docs-web/en/spell#spell-NEEDCOMPOUND">spell-NEEDCOMPOUND</a>
</div><div class="help-li" style=""> Compound flags: word plus affix can be part of a compound word at the end,
  middle, start, etc.  The flags are combined with the flags of the basic
  word.  <a href="/neovim-docs-web/en/spell#spell-compound">spell-compound</a>
</div><div class="help-li" style=""> NEEDAFFIX: another affix is needed to make a valid word.
</div><div class="help-li" style=""> CIRCUMFIX, as explained just below.
</div></div>
<div class="old-help-para"><h3 class="help-heading">IGNOREEXTRA<span class="help-heading-tags">						<a name="spell-IGNOREEXTRA"></a><span class="help-tag">spell-IGNOREEXTRA</span></span></h3></div>
<div class="old-help-para">Normally Vim gives an error for an extra field that does not start with '#'.
This avoids errors going unnoticed.  However, some files created for Myspell
or Hunspell may contain many entries with an extra field.  Use the IGNOREEXTRA
flag to avoid lots of errors.</div>
<div class="old-help-para"><h3 class="help-heading">CIRCUMFIX<span class="help-heading-tags">						<a name="spell-CIRCUMFIX"></a><span class="help-tag">spell-CIRCUMFIX</span></span></h3></div>
<div class="old-help-para">The CIRCUMFIX flag means a prefix and suffix must be added at the same time.
If a prefix has the CIRCUMFIX flag then only suffixes with the CIRCUMFIX flag
can be added, and the other way around.
An alternative is to only specify the suffix, and give that suffix two flags:
the required prefix and the NEEDAFFIX flag.  <a href="/neovim-docs-web/en/spell#spell-NEEDAFFIX">spell-NEEDAFFIX</a></div>
<div class="old-help-para"><h3 class="help-heading">PFXPOSTPONE<span class="help-heading-tags">						<a name="spell-PFXPOSTPONE"></a><span class="help-tag">spell-PFXPOSTPONE</span></span></h3></div>
<div class="old-help-para">When an affix file has very many prefixes that apply to many words it's not
possible to build the whole word list in memory.  This applies to Hebrew (a
list with all words is over a Gbyte).  In that case applying prefixes must be
postponed.  This makes spell checking slower.  It is indicated by this keyword
in the .aff file:</div>
<div class="old-help-para"><div class="help-column_heading">	PFXPOSTPONE</div></div>
<div class="old-help-para">Only prefixes without a chop string and without flags can be postponed.
Prefixes with a chop string or with flags will still be included in the word
list.  An exception if the chop string is one character and equal to the last
character of the added string, but in lower case.  Thus when the chop string
is used to allow the following word to start with an upper case letter.</div>
<div class="old-help-para">WORDS WITH A SLASH					<a name="spell-SLASH"></a><code class="help-tag-right">spell-SLASH</code></div>
<div class="old-help-para">The slash is used in the .dic file to separate the basic word from the affix
letters and other flags.  Unfortunately, this means you cannot use a slash in
a word.  Thus "TCP/IP" is not a word but "TCP" with the flags "IP".  To include
a slash in the word put a backslash before it: "TCP\/IP".  In the rare case
you want to use a backslash inside a word you need to use two backslashes.
Any other use of the backslash is reserved for future expansion.</div>
<div class="old-help-para"><h3 class="help-heading">KEEP-CASE WORDS<span class="help-heading-tags">						<a name="spell-KEEPCASE"></a><span class="help-tag">spell-KEEPCASE</span></span></h3></div>
<div class="old-help-para">In the affix file a KEEPCASE line can be used to define the affix name used
for keep-case words.  Example:</div>
<div class="old-help-para"><div class="help-column_heading">	KEEPCASE =</div></div>
<div class="old-help-para">This flag is not supported by Myspell.  It has the meaning that case matters.
This can be used if the word does not have the first letter in upper case at
the start of a sentence.  Example:</div>
<div class="old-help-para"><div class="help-column_heading">    word list	    matches		    does not match</div>    's morgens/=    's morgens		    'S morgens 's Morgens 'S MORGENS
    's Morgens	    's Morgens 'S MORGENS   'S morgens 's morgens</div>
<div class="old-help-para">The flag can also be used to avoid that the word matches when it is in all
upper-case letters.</div>
<div class="old-help-para"><h3 class="help-heading">RARE WORDS<span class="help-heading-tags">						<a name="spell-RARE"></a><span class="help-tag">spell-RARE</span></span></h3></div>
<div class="old-help-para">In the affix file a RARE line can be used to define the affix name used for
rare words.  Example:</div>
<div class="old-help-para"><div class="help-column_heading">	RARE ?</div></div>
<div class="old-help-para">Rare words are highlighted differently from bad words.  This is to be used for
words that are correct for the language, but are hardly ever used and could be
a typing mistake anyway.</div>
<div class="old-help-para">This flag can also be used on an affix, so that a basic word is not rare but
the basic word plus affix is rare <a href="/neovim-docs-web/en/spell#spell-affix-flags">spell-affix-flags</a>.  However, if the word
also appears as a good word in another way (e.g., in another region) it won't
be marked as rare.</div>
<div class="old-help-para"><h3 class="help-heading">BAD WORDS<span class="help-heading-tags">						<a name="spell-BAD"></a><span class="help-tag">spell-BAD</span></span></h3></div>
<div class="old-help-para">In the affix file a BAD line can be used to define the affix name used for
bad words.  Example:</div>
<div class="old-help-para"><div class="help-column_heading">	BAD !</div></div>
<div class="old-help-para">This can be used to exclude words that would otherwise be good.  For example
"the the" in the .dic file:</div>
<div class="old-help-para"><div class="help-column_heading">	the the/!</div></div>
<div class="old-help-para">Once a word has been marked as bad it won't be undone by encountering the same
word as good.</div>
<div class="old-help-para">The flag also applies to the word with affixes, thus this can be used to mark
a whole bunch of related words as bad.</div>
<div class="old-help-para">							<a name="spell-FORBIDDENWORD"></a><code class="help-tag-right">spell-FORBIDDENWORD</code>
FORBIDDENWORD can be used just like BAD.  For compatibility with Hunspell.</div>
<div class="old-help-para">							<a name="spell-NEEDAFFIX"></a><code class="help-tag-right">spell-NEEDAFFIX</code>
The NEEDAFFIX flag is used to require that a word is used with an affix.  The
word itself is not a good word (unless there is an empty affix).  Example:</div>
<div class="old-help-para"><div class="help-column_heading">	NEEDAFFIX +</div></div>
<div class="old-help-para"><h3 class="help-heading">COMPOUND WORDS<span class="help-heading-tags">						<a name="spell-compound"></a><span class="help-tag">spell-compound</span></span></h3></div>
<div class="old-help-para">A compound word is a longer word made by concatenating words that appear in
the .dic file.  To specify which words may be concatenated a character is
used.  This character is put in the list of affixes after the word.  We will
call this character a flag here.  Obviously these flags must be different from
any affix IDs used.</div>
<div class="old-help-para">							<a name="spell-COMPOUNDFLAG"></a><code class="help-tag-right">spell-COMPOUNDFLAG</code>
The Myspell compatible method uses one flag, specified with COMPOUNDFLAG.  All
words with this flag combine in any order.  This means there is no control
over which word comes first.  Example:
<div class="help-column_heading">	COMPOUNDFLAG c</div></div>
<div class="old-help-para">							<a name="spell-COMPOUNDRULE"></a><code class="help-tag-right">spell-COMPOUNDRULE</code>
A more advanced method to specify how compound words can be formed uses
multiple items with multiple flags.  This is not compatible with Myspell 3.0.
Let's start with an example:
<div class="help-column_heading">	COMPOUNDRULE c+</div><div class="help-column_heading">	COMPOUNDRULE se</div></div>
<div class="old-help-para">The first line defines that words with the "c" flag can be concatenated in any
order.  The second line defines compound words that are made of one word with
the "s" flag and one word with the "e" flag.  With this dictionary:
<div class="help-column_heading">	bork/c</div><div class="help-column_heading">	onion/s</div><div class="help-column_heading">	soup/e</div></div>
<div class="old-help-para">You can make these words:
	bork
	borkbork
	borkborkbork
	(etc.)
	onion
	soup
	onionsoup</div>
<div class="old-help-para">The COMPOUNDRULE item may appear multiple times.  The argument is made out of
one or more groups, where each group can be:
	one flag			e.g., c
	alternate flags inside []	e.g., [abc]
Optionally this may be followed by:
	*	the group appears zero or more times, e.g., sm*e
	+	the group appears one or more times, e.g., c+
	?	the group appears zero times or once, e.g., x?

This is similar to the regexp pattern syntax (but not the same!).  A few
examples with the sequence of word flags they require:
    COMPOUNDRULE x+	    x xx xxx etc.
    COMPOUNDRULE yz	    yz
    COMPOUNDRULE x+z	    xz xxz xxxz etc.
    COMPOUNDRULE yx+	    yx yxx yxxx etc.
    COMPOUNDRULE xy?z	    xz xyz</div>
<div class="old-help-para">    COMPOUNDRULE [abc]z    az bz cz
    COMPOUNDRULE [abc]+z   az aaz abaz bz baz bcbz cz caz cbaz etc.
    COMPOUNDRULE a[xyz]+   ax axx axyz ay ayx ayzz az azy azxy etc.
    COMPOUNDRULE sm*e	    se sme smme smmme etc.
    COMPOUNDRULE s[xyz]*e  se sxe sxye sxyxe sye syze sze szye szyxe  etc.</div>
<div class="old-help-para">A specific example: Allow a compound to be made of two words and a dash:
	In the .aff file:
<div class="help-column_heading">	    COMPOUNDRULE sde</div><div class="help-column_heading">	    NEEDAFFIX x</div><div class="help-column_heading">	    COMPOUNDWORDMAX 3</div><div class="help-column_heading">	    COMPOUNDMIN 1</div>	In the .dic file:
<div class="help-column_heading">	    start/s</div><div class="help-column_heading">	    end/e</div><div class="help-column_heading">	    -/xd</div></div>
<div class="old-help-para">This allows for the word "start-end", but not "startend".</div>
<div class="old-help-para">An additional implied rule is that, without further flags, a word with a
prefix cannot be compounded after another word, and a word with a suffix
cannot be compounded with a following word.  Thus the affix cannot appear
on the inside of a compound word.  This can be changed with the
<a href="/neovim-docs-web/en/spell#spell-COMPOUNDPERMITFLAG">spell-COMPOUNDPERMITFLAG</a>.</div>
<div class="old-help-para">							<a name="spell-NEEDCOMPOUND"></a><code class="help-tag-right">spell-NEEDCOMPOUND</code>
The NEEDCOMPOUND flag is used to require that a word is used as part of a
compound word.  The word itself is not a good word.  Example:</div>
<div class="old-help-para"><div class="help-column_heading">	NEEDCOMPOUND &amp;</div></div>
<div class="old-help-para">							<a name="spell-ONLYINCOMPOUND"></a><code class="help-tag-right">spell-ONLYINCOMPOUND</code>
The ONLYINCOMPOUND does exactly the same as NEEDCOMPOUND.  Supported for
compatibility with Hunspell.</div>
<div class="old-help-para">							<a name="spell-COMPOUNDMIN"></a><code class="help-tag-right">spell-COMPOUNDMIN</code>
The minimal character length of a word used for compounding is specified with
COMPOUNDMIN.  Example:
<div class="help-column_heading">	COMPOUNDMIN 5</div></div>
<div class="old-help-para">When omitted there is no minimal length.  Obviously you could just leave out
the compound flag from short words instead, this feature is present for
compatibility with Myspell.</div>
<div class="old-help-para">							<a name="spell-COMPOUNDWORDMAX"></a><code class="help-tag-right">spell-COMPOUNDWORDMAX</code>
The maximum number of words that can be concatenated into a compound word is
specified with COMPOUNDWORDMAX.  Example:
<div class="help-column_heading">	COMPOUNDWORDMAX 3</div></div>
<div class="old-help-para">When omitted there is no maximum.  It applies to all compound words.</div>
<div class="old-help-para">To set a limit for words with specific flags make sure the items in
COMPOUNDRULE where they appear don't allow too many words.</div>
<div class="old-help-para">							<a name="spell-COMPOUNDSYLMAX"></a><code class="help-tag-right">spell-COMPOUNDSYLMAX</code>
The maximum number of syllables that a compound word may contain is specified
with COMPOUNDSYLMAX.  Example:
<div class="help-column_heading">	COMPOUNDSYLMAX 6</div></div>
<div class="old-help-para">This has no effect if there is no SYLLABLE item.  Without COMPOUNDSYLMAX there
is no limit on the number of syllables.</div>
<div class="old-help-para">If both COMPOUNDWORDMAX and COMPOUNDSYLMAX are defined, a compound word is
accepted if it fits one of the criteria, thus is either made from up to
COMPOUNDWORDMAX words or contains up to COMPOUNDSYLMAX syllables.</div>
<div class="old-help-para">						    <a name="spell-COMPOUNDFORBIDFLAG"></a><code class="help-tag-right">spell-COMPOUNDFORBIDFLAG</code>
The COMPOUNDFORBIDFLAG specifies a flag that can be used on an affix.  It
means that the word plus affix cannot be used in a compound word.  Example:
	affix file:
<div class="help-column_heading">		COMPOUNDFLAG c</div><div class="help-column_heading">		COMPOUNDFORBIDFLAG x</div><div class="help-column_heading">		SFX a Y 2</div><div class="help-column_heading">		SFX a 0 s   .</div><div class="help-column_heading">		SFX a 0 ize/x .</div>	dictionary:
<div class="help-column_heading">		word/c</div><div class="help-column_heading">		util/ac</div></div>
<div class="old-help-para">This allows for "wordutil" and "wordutils" but not "wordutilize".
Note: this doesn't work for postponed prefixes yet.</div>
<div class="old-help-para">						    <a name="spell-COMPOUNDPERMITFLAG"></a><code class="help-tag-right">spell-COMPOUNDPERMITFLAG</code>
The COMPOUNDPERMITFLAG specifies a flag that can be used on an affix.  It
means that the word plus affix can also be used in a compound word in a way
where the affix ends up halfway through the word.  Without this flag that is
not allowed.
Note: this doesn't work for postponed prefixes yet.</div>
<div class="old-help-para">						    <a name="spell-COMPOUNDROOT"></a><code class="help-tag-right">spell-COMPOUNDROOT</code>
The COMPOUNDROOT flag is used for words in the dictionary that are already a
compound.  This means it counts for two words when checking the compounding
rules.  Can also be used for an affix to count the affix as a compounding
word.</div>
<div class="old-help-para">						<a name="spell-CHECKCOMPOUNDPATTERN"></a><code class="help-tag-right">spell-CHECKCOMPOUNDPATTERN</code>
CHECKCOMPOUNDPATTERN is used to define patterns that, when matching at the
position where two words are compounded together forbids the compound.
For example:
<div class="help-column_heading">	CHECKCOMPOUNDPATTERN o e</div></div>
<div class="old-help-para">This forbids compounding if the first word ends in "o" and the second word
starts with "e".</div>
<div class="old-help-para">The arguments must be plain text, no patterns are actually supported, despite
the item name.  Case is always ignored.</div>
<div class="old-help-para">The Hunspell feature to use three arguments and flags is not supported.</div>
<div class="old-help-para">							<a name="spell-NOCOMPOUNDSUGS"></a><code class="help-tag-right">spell-NOCOMPOUNDSUGS</code>
This item indicates that using compounding to make suggestions is not a good
idea.  Use this when compounding is used with very short or one-character
words.  E.g. to make numbers out of digits.  Without this flag creating
suggestions would spend most time trying all kind of weird compound words.</div>
<div class="old-help-para"><div class="help-column_heading">	NOCOMPOUNDSUGS</div></div>
<div class="old-help-para">							<a name="spell-SYLLABLE"></a><code class="help-tag-right">spell-SYLLABLE</code>
The SYLLABLE item defines characters or character sequences that are used to
count the number of syllables in a word.  Example:
<div class="help-column_heading">	SYLLABLE a??e??i??o??????u??????y/aa/au/ea/ee/ei/ie/oa/oe/oo/ou/uu/ui</div></div>
<div class="old-help-para">Before the first slash is the set of characters that are counted for one
syllable, also when repeated and mixed, until the next character that is not
in this set.  After the slash come sequences of characters that are counted
for one syllable.  These are preferred over using characters from the set.
With the example "ideeen" has three syllables, counted by "i", "ee" and "e".</div>
<div class="old-help-para">Only case-folded letters need to be included.</div>
<div class="old-help-para">Another way to restrict compounding was mentioned above: Adding the
<a href="/neovim-docs-web/en/spell#spell-COMPOUNDFORBIDFLAG">spell-COMPOUNDFORBIDFLAG</a> flag to an affix causes all words that are made
with that affix to not be used for compounding.</div>
<div class="old-help-para"><h3 class="help-heading">UNLIMITED COMPOUNDING<span class="help-heading-tags">					<a name="spell-NOBREAK"></a><span class="help-tag">spell-NOBREAK</span></span></h3></div>
<div class="old-help-para">For some languages, such as Thai, there is no space in between words.  This
looks like all words are compounded.  To specify this use the NOBREAK item in
the affix file, without arguments:
<div class="help-column_heading">	NOBREAK</div></div>
<div class="old-help-para">Vim will try to figure out where one word ends and a next starts.  When there
are spelling mistakes this may not be quite right.</div>
<div class="old-help-para">							<a name="spell-COMMON"></a><code class="help-tag-right">spell-COMMON</code>
Common words can be specified with the COMMON item.  This will give better
suggestions when editing a short file.  Example:</div>
<div class="old-help-para"><div class="help-column_heading">	COMMON  the of to and a in is it you that he she was for on are</div></div>
<div class="old-help-para">The words must be separated by white space, up to 25 per line.
When multiple regions are specified in a ":mkspell" command the common words
for all regions are combined and used for all regions.</div>
<div class="old-help-para">							<a name="spell-NOSPLITSUGS"></a><code class="help-tag-right">spell-NOSPLITSUGS</code>
This item indicates that splitting a word to make suggestions is not a good
idea.  Split-word suggestions will appear only when there are few similar
words.</div>
<div class="old-help-para"><div class="help-column_heading">	NOSPLITSUGS</div></div>
<div class="old-help-para">							<a name="spell-NOSUGGEST"></a><code class="help-tag-right">spell-NOSUGGEST</code>
The flag specified with NOSUGGEST can be used for words that will not be
suggested.  Can be used for obscene words.</div>
<div class="old-help-para"><div class="help-column_heading">	NOSUGGEST %</div></div>
<div class="old-help-para"><h3 class="help-heading">REPLACEMENTS<span class="help-heading-tags">						<a name="spell-REP"></a><span class="help-tag">spell-REP</span></span></h3></div>
<div class="old-help-para">In the affix file REP items can be used to define common mistakes.  This is
used to make spelling suggestions.  The items define the "from" text and the
"to" replacement.  Example:</div>
<div class="old-help-para"><div class="help-column_heading">	REP 4</div><div class="help-column_heading">	REP f ph</div><div class="help-column_heading">	REP ph f</div><div class="help-column_heading">	REP k ch</div><div class="help-column_heading">	REP ch k</div></div>
<div class="old-help-para">The first line specifies the number of REP lines following.  Vim ignores the
number, but it must be there (for compatibility with Myspell).</div>
<div class="old-help-para">Don't include simple one-character replacements or swaps.  Vim will try these
anyway.  You can include whole words if you want to, but you might want to use
the "file:" item in <a href="/neovim-docs-web/en/options#'spellsuggest'">'spellsuggest'</a> instead.</div>
<div class="old-help-para">You can include a space by using an underscore:</div>
<div class="old-help-para"><div class="help-column_heading">	REP the_the the</div></div>
<div class="old-help-para"><h3 class="help-heading">SIMILAR CHARACTERS<span class="help-heading-tags">					<a name="spell-MAP"></a><span class="help-tag">spell-MAP</span> <a name="E783"></a><span class="help-tag">E783</span></span></h3></div>
<div class="old-help-para">In the affix file MAP items can be used to define letters that are very much
alike.  This is mostly used for a letter with different accents.  This is used
to prefer suggestions with these letters substituted.  Example:</div>
<div class="old-help-para"><div class="help-column_heading">	MAP 2</div><div class="help-column_heading">	MAP e????????</div><div class="help-column_heading">	MAP u????????</div></div>
<div class="old-help-para">The first line specifies the number of MAP lines following.  Vim ignores the
number, but the line must be there.</div>
<div class="old-help-para">Each letter must appear in only one of the MAP items.  It's a bit more
efficient if the first letter is ASCII or at least one without accents.</div>
<div class="old-help-para"><h3 class="help-heading">.SUG FILE<span class="help-heading-tags">						<a name="spell-NOSUGFILE"></a><span class="help-tag">spell-NOSUGFILE</span></span></h3></div>
<div class="old-help-para">When soundfolding is specified in the affix file then ":mkspell" will normally
produce a .sug file next to the .spl file.  This file is used to find
suggestions by their sound-a-like form quickly.  At the cost of a lot of
memory (the amount depends on the number of words, <a href="/neovim-docs-web/en/spell#%3Amkspell">:mkspell</a> will display an
estimate when it's done).</div>
<div class="old-help-para">To avoid producing a .sug file use this item in the affix file:</div>
<div class="old-help-para"><div class="help-column_heading">	NOSUGFILE</div></div>
<div class="old-help-para">Users can simply omit the .sug file if they don't want to use it.</div>
<div class="old-help-para"><h3 class="help-heading">SOUND-A-LIKE<span class="help-heading-tags">						<a name="spell-SAL"></a><span class="help-tag">spell-SAL</span></span></h3></div>
<div class="old-help-para">In the affix file SAL items can be used to define the sounds-a-like mechanism
to be used.  The main items define the "from" text and the "to" replacement.
Simplistic example:</div>
<div class="old-help-para"><div class="help-column_heading">	SAL CIA			 X</div><div class="help-column_heading">	SAL CH			 X</div><div class="help-column_heading">	SAL C			 K</div><div class="help-column_heading">	SAL K			 K</div></div>
<div class="old-help-para">There are a few rules and this can become quite complicated.  An explanation
how it works can be found in the Aspell manual:
<a href="http://aspell.net/man-html/Phonetic-Code.html">http://aspell.net/man-html/Phonetic-Code.html</a>.</div>
<div class="old-help-para">There are a few special items:</div>
<div class="old-help-para"><div class="help-column_heading">	SAL followup		true</div><div class="help-column_heading">	SAL collapse_result	true</div><div class="help-column_heading">	SAL remove_accents	true</div></div>
<div class="old-help-para">"1" has the same meaning as "true".  Any other value means "false".</div>
<div class="old-help-para"><h3 class="help-heading">SIMPLE SOUNDFOLDING<span class="help-heading-tags">				<a name="spell-SOFOFROM"></a><span class="help-tag">spell-SOFOFROM</span> <a name="spell-SOFOTO"></a><span class="help-tag">spell-SOFOTO</span></span></h3></div>
<div class="old-help-para">The SAL mechanism is complex and slow.  A simpler mechanism is mapping all
characters to another character, mapping similar sounding characters to the
same character.  At the same time this does case folding.  You can not have
both SAL items and simple soundfolding.</div>
<div class="old-help-para">There are two items required: one to specify the characters that are mapped
and one that specifies the characters they are mapped to.  They must have
exactly the same number of characters.  Example:</div>
<div class="old-help-para"><div class="help-column_heading">    SOFOFROM abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ</div><div class="help-column_heading">    SOFOTO   ebctefghejklnnepkrstevvkesebctefghejklnnepkrstevvkes</div></div>
<div class="old-help-para">In the example all vowels are mapped to the same character 'e'.  Another
method would be to leave out all vowels.  Some characters that sound nearly
the same and are often mixed up, such as 'm' and 'n', are mapped to the same
character.  Don't do this too much, all words will start looking alike.</div>
<div class="old-help-para">Characters that do not appear in SOFOFROM will be left out, except that all
white space is replaced by one space.  Sequences of the same character in
SOFOFROM are replaced by one.</div>
<div class="old-help-para">You can use the <a href="/neovim-docs-web/en/builtin#soundfold()">soundfold()</a> function to try out the results.  Or set the
<a href="/neovim-docs-web/en/options#'verbose'">'verbose'</a> option to see the score in the output of the <a href="/neovim-docs-web/en/spell#z%3D">z=</a> command.</div>
<div class="old-help-para"><h3 class="help-heading">UNSUPPORTED ITEMS<span class="help-heading-tags">				<a name="spell-affix-not-supported"></a><span class="help-tag">spell-affix-not-supported</span></span></h3></div>
<div class="old-help-para">These items appear in the affix file of other spell checkers.  In Vim they are
ignored, not supported or defined in another way.</div>
<div class="old-help-para">ACCENT		(Hunspell)				<a name="spell-ACCENT"></a><code class="help-tag-right">spell-ACCENT</code>
		Use MAP instead. <a href="/neovim-docs-web/en/spell#spell-MAP">spell-MAP</a></div>
<div class="old-help-para">BREAK		(Hunspell)				<a name="spell-BREAK"></a><code class="help-tag-right">spell-BREAK</code>
		Define break points.  Unclear how it works exactly.
		Not supported.</div>
<div class="old-help-para">CHECKCOMPOUNDCASE  (Hunspell)			<a name="spell-CHECKCOMPOUNDCASE"></a><code class="help-tag-right">spell-CHECKCOMPOUNDCASE</code>
		Disallow uppercase letters at compound word boundaries.
		Not supported.</div>
<div class="old-help-para">CHECKCOMPOUNDDUP  (Hunspell)			<a name="spell-CHECKCOMPOUNDDUP"></a><code class="help-tag-right">spell-CHECKCOMPOUNDDUP</code>
		Disallow using the same word twice in a compound.  Not
		supported.</div>
<div class="old-help-para">CHECKCOMPOUNDREP  (Hunspell)			<a name="spell-CHECKCOMPOUNDREP"></a><code class="help-tag-right">spell-CHECKCOMPOUNDREP</code>
		Something about using REP items and compound words.  Not
		supported.</div>
<div class="old-help-para">CHECKCOMPOUNDTRIPLE  (Hunspell)			<a name="spell-CHECKCOMPOUNDTRIPLE"></a><code class="help-tag-right">spell-CHECKCOMPOUNDTRIPLE</code>
		Forbid three identical characters when compounding.  Not
		supported.</div>
<div class="old-help-para">CHECKSHARPS  (Hunspell)				<a name="spell-CHECKSHARPS"></a><code class="help-tag-right">spell-CHECKSHARPS</code>
		SS letter pair in uppercased (German) words may be upper case
		sharp s (??). Not supported.</div>
<div class="old-help-para">COMPLEXPREFIXES  (Hunspell)				<a name="spell-COMPLEXPREFIXES"></a><code class="help-tag-right">spell-COMPLEXPREFIXES</code>
		Enables using two prefixes.  Not supported.</div>
<div class="old-help-para">COMPOUND	(Hunspell)				<a name="spell-COMPOUND"></a><code class="help-tag-right">spell-COMPOUND</code>
		This is one line with the count of COMPOUND items, followed by
		that many COMPOUND lines with a pattern.
		Remove the first line with the count and rename the other
		items to COMPOUNDRULE <a href="/neovim-docs-web/en/spell#spell-COMPOUNDRULE">spell-COMPOUNDRULE</a></div>
<div class="old-help-para">COMPOUNDFIRST	(Hunspell)				<a name="spell-COMPOUNDFIRST"></a><code class="help-tag-right">spell-COMPOUNDFIRST</code>
		Use COMPOUNDRULE instead. <a href="/neovim-docs-web/en/spell#spell-COMPOUNDRULE">spell-COMPOUNDRULE</a></div>
<div class="old-help-para">COMPOUNDBEGIN	(Hunspell)				<a name="spell-COMPOUNDBEGIN"></a><code class="help-tag-right">spell-COMPOUNDBEGIN</code>
		Words signed with COMPOUNDBEGIN may be first elements in
		compound words.
		Use COMPOUNDRULE instead. <a href="/neovim-docs-web/en/spell#spell-COMPOUNDRULE">spell-COMPOUNDRULE</a></div>
<div class="old-help-para">COMPOUNDLAST	(Hunspell)				<a name="spell-COMPOUNDLAST"></a><code class="help-tag-right">spell-COMPOUNDLAST</code>
		Words signed with COMPOUNDLAST may be last elements in
		compound words.
		Use COMPOUNDRULE instead. <a href="/neovim-docs-web/en/spell#spell-COMPOUNDRULE">spell-COMPOUNDRULE</a></div>
<div class="old-help-para">COMPOUNDEND	(Hunspell)				<a name="spell-COMPOUNDEND"></a><code class="help-tag-right">spell-COMPOUNDEND</code>
		Probably the same as COMPOUNDLAST</div>
<div class="old-help-para">COMPOUNDMIDDLE	(Hunspell)				<a name="spell-COMPOUNDMIDDLE"></a><code class="help-tag-right">spell-COMPOUNDMIDDLE</code>
		Words signed with COMPOUNDMIDDLE may be middle elements in
		compound words.
		Use COMPOUNDRULE instead. <a href="/neovim-docs-web/en/spell#spell-COMPOUNDRULE">spell-COMPOUNDRULE</a></div>
<div class="old-help-para">COMPOUNDRULES	(Hunspell)				<a name="spell-COMPOUNDRULES"></a><code class="help-tag-right">spell-COMPOUNDRULES</code>
		Number of COMPOUNDRULE lines following.  Ignored, but the
		argument must be a number.</div>
<div class="old-help-para">COMPOUNDSYLLABLE  (Hunspell)			<a name="spell-COMPOUNDSYLLABLE"></a><code class="help-tag-right">spell-COMPOUNDSYLLABLE</code>
		Use SYLLABLE and COMPOUNDSYLMAX instead. <a href="/neovim-docs-web/en/spell#spell-SYLLABLE">spell-SYLLABLE</a>
		<a href="/neovim-docs-web/en/spell#spell-COMPOUNDSYLMAX">spell-COMPOUNDSYLMAX</a></div>
<div class="old-help-para">KEY		(Hunspell)				<a name="spell-KEY"></a><code class="help-tag-right">spell-KEY</code>
		Define characters that are close together on the keyboard.
		Used to give better suggestions.  Not supported.</div>
<div class="old-help-para">LANG		(Hunspell)				<a name="spell-LANG"></a><code class="help-tag-right">spell-LANG</code>
		This specifies language-specific behavior.  This actually
		moves part of the language knowledge into the program,
		therefore Vim does not support it.  Each language property
		must be specified separately.</div>
<div class="old-help-para">LEMMA_PRESENT	(Hunspell)				<a name="spell-LEMMA_PRESENT"></a><code class="help-tag-right">spell-LEMMA_PRESENT</code>
		Only needed for morphological analysis.</div>
<div class="old-help-para">MAXNGRAMSUGS	(Hunspell)				<a name="spell-MAXNGRAMSUGS"></a><code class="help-tag-right">spell-MAXNGRAMSUGS</code>
		Set number of n-gram suggestions.  Not supported.</div>
<div class="old-help-para">PSEUDOROOT	(Hunspell)				<a name="spell-PSEUDOROOT"></a><code class="help-tag-right">spell-PSEUDOROOT</code>
		Use NEEDAFFIX instead. <a href="/neovim-docs-web/en/spell#spell-NEEDAFFIX">spell-NEEDAFFIX</a></div>
<div class="old-help-para">SUGSWITHDOTS	(Hunspell)				<a name="spell-SUGSWITHDOTS"></a><code class="help-tag-right">spell-SUGSWITHDOTS</code>
		Adds dots to suggestions.  Vim doesn't need this.</div>
<div class="old-help-para">SYLLABLENUM	(Hunspell)				<a name="spell-SYLLABLENUM"></a><code class="help-tag-right">spell-SYLLABLENUM</code>
		Not supported.</div>
<div class="old-help-para">TRY		(Myspell, Hunspell, others)		<a name="spell-TRY"></a><code class="help-tag-right">spell-TRY</code>
		Vim does not use the TRY item, it is ignored.  For making
		suggestions the actual characters in the words are used, that
		is much more efficient.</div>
<div class="old-help-para">WORDCHARS	(Hunspell)				<a name="spell-WORDCHARS"></a><code class="help-tag-right">spell-WORDCHARS</code>
		Used to recognize words.  Vim doesn't need it, because there
		is no need to separate words before checking them (using a
		trie instead of a hashtable).</div>
<div class="old-help-para"><h2 class="help-heading">5. Spell checker design<span class="help-heading-tags">					<a name="develop-spell"></a><span class="help-tag">develop-spell</span></span></h2></div>
<div class="old-help-para">When spell checking was going to be added to Vim a survey was done over the
available spell checking libraries and programs.  Unfortunately, the result
was that none of them provided sufficient capabilities to be used as the spell
checking engine in Vim, for various reasons:</div>
<div class="old-help-para"><div class="help-li" style=""> Missing support for multi-byte encodings.  At least UTF-8 must be supported,
  so that more than one language can be used in the same file.
  Doing on-the-fly conversion is not always possible (would require iconv
  support).
</div><div class="help-li" style=""> For the programs and libraries: Using them as-is would require installing
  them separately from Vim.  That's mostly not impossible, but a drawback.
</div><div class="help-li" style=""> Performance: A few tests showed that it's possible to check spelling on the
  fly (while redrawing), just like syntax highlighting.  But the mechanisms
  used by other code are much slower.  Myspell uses a hashtable, for example.
  The affix compression that most spell checkers use makes it slower too.
</div><div class="help-li" style=""> For using an external program like aspell a communication mechanism would
  have to be setup.  That's complicated to do in a portable way (Unix-only
  would be relatively simple, but that's not good enough).  And performance
  will become a problem (lots of process switching involved).
</div><div class="help-li" style=""> Missing support for words with non-word characters, such as "Etten-Leur" and
  "et al.", would require marking the pieces of them OK, lowering the
  reliability.
</div><div class="help-li" style=""> Missing support for regions or dialects.  Makes it difficult to accept
  all English words and highlight non-Canadian words differently.
</div><div class="help-li" style=""> Missing support for rare words.  Many words are correct but hardly ever used
  and could be a misspelled often-used word.
</div><div class="help-li" style=""> For making suggestions the speed is less important and requiring to install
  another program or library would be acceptable.  But the word lists probably
  differ, the suggestions may be wrong words.
</div></div>
<div class="old-help-para">Spelling suggestions				<a name="develop-spell-suggestions"></a><code class="help-tag-right">develop-spell-suggestions</code></div>
<div class="old-help-para">For making suggestions there are two basic mechanisms:
1. Try changing the bad word a little bit and check for a match with a good
   word.  Or go through the list of good words, change them a little bit and
   check for a match with the bad word.  The changes are deleting a character,
   inserting a character, swapping two characters, etc.
2. Perform soundfolding on both the bad word and the good words and then find
   matches, possibly with a few changes like with the first mechanism.</div>
<div class="old-help-para">The first is good for finding typing mistakes.  After experimenting with
hashtables and looking at solutions from other spell checkers the conclusion
was that a trie (a kind of tree structure) is ideal for this.  Both for
reducing memory use and being able to try sensible changes.  For example, when
inserting a character only characters that lead to good words need to be
tried.  Other mechanisms (with hashtables) need to try all possible letters at
every position in the word.  Also, a hashtable has the requirement that word
boundaries are identified separately, while a trie does not require this.
That makes the mechanism a lot simpler.</div>
<div class="old-help-para">Soundfolding is useful when someone knows how the words sounds but doesn't
know how it is spelled.  For example, the word "dictionary" might be written
as "daktonerie".  The number of changes that the first method would need to
try is very big, it's hard to find the good word that way.  After soundfolding
the words become "tktnr" and "tkxnry", these differ by only two letters.</div>
<div class="old-help-para">To find words by their soundfolded equivalent (soundalike word) we need a list
of all soundfolded words.  A few experiments have been done to find out what
the best method is.  Alternatives:
1. Do the sound folding on the fly when looking for suggestions.  This means
   walking through the trie of good words, soundfolding each word and
   checking how different it is from the bad word.  This is very efficient for
   memory use, but takes a long time.  On a fast PC it takes a couple of
   seconds for English, which can be acceptable for interactive use.  But for
   some languages it takes more than ten seconds (e.g., German, Catalan),
   which is unacceptable slow.  For batch processing (automatic corrections)
   it's too slow for all languages.
2. Use a trie for the soundfolded words, so that searching can be done just
   like how it works without soundfolding.  This requires remembering a list
   of good words for each soundfolded word.  This makes finding matches very
   fast but requires quite a lot of memory, in the order of 1 to 10 Mbyte.
   For some languages more than the original word list.
3. Like the second alternative, but reduce the amount of memory by using affix
   compression and store only the soundfolded basic word.  This is what Aspell
   does.  Disadvantage is that affixes need to be stripped from the bad word
   before soundfolding it, which means that mistakes at the start and/or end
   of the word will cause the mechanism to fail.  Also, this becomes slow when
   the bad word is quite different from the good word.</div>
<div class="old-help-para">The choice made is to use the second mechanism and use a separate file.  This
way a user with sufficient memory can get very good suggestions while a user
who is short of memory or just wants the spell checking and no suggestions
doesn't use so much memory.</div>
<div class="old-help-para">Word frequency</div>
<div class="old-help-para">For sorting suggestions it helps to know which words are common.  In theory we
could store a word frequency with the word in the dictionary.  However, this
requires storing a count per word.  That degrades word tree compression a lot.
And maintaining the word frequency for all languages will be a heavy task.
Also, it would be nice to prefer words that are already in the text.  This way
the words that appear in the specific text are preferred for suggestions.</div>
<div class="old-help-para">What has been implemented is to count words that have been seen during
displaying.  A hashtable is used to quickly find the word count.  The count is
initialized from words listed in COMMON items in the affix file, so that it
also works when starting a new file.</div>
<div class="old-help-para">This isn't ideal, because the longer Vim is running the higher the counts
become.  But in practice it is a noticeable improvement over not using the word
count.</div>

  
  