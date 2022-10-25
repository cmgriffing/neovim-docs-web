---
title: Spell
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="Nvim" class="section-title" href="#Nvim"> Spell Txt</a> 

VIM REFERENCE MANUAL	  by Bram Moolenaar


### <a id="spell" class="section-title" href="#spell">Spell checking</a>

Type [[gO](/undefined#gO)](/undefined) to see the table of contents.


## <a id="spell-quickstart E756" class="section-title" href="#spell-quickstart E756">1. Quick Start</a> 

This command switches on spell checking:

:setlocal spell spelllang=en_us

This switches on the 'spell' option and specifies to check for US English.

The words that are not recognized are highlighted with one of these:
SpellBad	word not recognized			[[hl-SpellBad](/undefined#hl-SpellBad)](/undefined)
SpellCap	word not capitalised			[[hl-SpellCap](/undefined#hl-SpellCap)](/undefined)
SpellRare	rare word				[[hl-SpellRare](/undefined#hl-SpellRare)](/undefined)
SpellLocal	wrong spelling for selected region	[[[hl-SpellLocal](/undefined#hl-SpellLocal)](/undefined)](/undefined)

Vim only checks words for spelling, there is no grammar check.

If the 'mousemodel' option is set to "popup" and the cursor is on a badly
spelled word or it is "popup_setpos" and the mouse pointer is on a badly
spelled word, then the popup menu will contain a submenu to replace the bad
word.  Note: this slows down the appearance of the popup menu.

To search for the next misspelled word:

### <a id="]s" class="section-title" href="#]s">Note:</a>
]s			Move to next misspelled word after the cursor.
A count before the command can be used to repeat.
'wrapscan' applies.

### <a id="[s" class="section-title" href="#[s">Note:</a>
[s			Like "]s" but search backwards, find the misspelled
word before the cursor.  Doesn't recognize words
split over two lines, thus may stop at words that are
not highlighted as bad.  Does not stop at word with
missing capital at the start of a line.

### <a id="]S" class="section-title" href="#]S">Note:</a>
]S			Like "]s" but only stop at bad words, not at rare
words or words for another region.

### <a id="[S" class="section-title" href="#[S">Note:</a>
[S			Like "]S" but search backwards.


To add words to your own word list:

### <a id="zg" class="section-title" href="#zg">Note:</a>
zg			Add word under the cursor as a good word to the first
name in 'spellfile'.  A count may precede the command
to indicate the entry in 'spellfile' to be used.  A
count of two uses the second entry.

In Visual mode the selected characters are added as a
word (including white space!).
When the cursor is on text that is marked as badly
spelled then the marked text is used.
Otherwise the word under the cursor, separated by
non-word characters, is used.

If the word is explicitly marked as bad word in
another spell file the result is unpredictable.

### <a id="zG" class="section-title" href="#zG">Note:</a>
zG			Like "zg" but add the word to the internal word list
[[[internal-wordlist](/undefined#internal-wordlist)](/undefined)](/undefined).

### <a id="zw" class="section-title" href="#zw">Note:</a>
zw			Like "zg" but mark the word as a wrong (bad) word.
If the word already appears in 'spellfile' it is
turned into a comment line.  See [[spellfile-cleanup](/undefined#spellfile-cleanup)](/undefined)
for getting rid of those.

### <a id="zW" class="section-title" href="#zW">Note:</a>
zW			Like "zw" but add the word to the internal word list
[[[internal-wordlist](/undefined#internal-wordlist)](/undefined)](/undefined).

### <a id="zug zuw" class="section-title" href="#zug zuw">zuw</a>
zug			Undo [[[[[[zw](/undefined#zw)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined) and [[[[[[[zg](/undefined#zg)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined), remove the word from the entry in
'spellfile'.  Count used as with [[[[[[[zg](/undefined#zg)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined).

### <a id="zuG zuW" class="section-title" href="#zuG zuW">zuW</a>
zuG			Undo [[[[zW](/undefined#zW)](/undefined)](/undefined)](/undefined) and [[[zG](/undefined#zG)](/undefined)](/undefined), remove the word from the internal
word list.  Count used as with [[[[[[[zg](/undefined#zg)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined).

### <a id=":spe :spellgood E1280" class="section-title" href="#:spe :spellgood E1280">Note:</a>
:[count]spe[llgood] {word}
Add {word} as a good word to 'spellfile', like with
[[[[[[[zg](/undefined#zg)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined).  Without count the first name is used, with a
count of two the second entry, etc.

:spe[llgood]! {word}	Add {word} as a good word to the internal word list,
like with [[[zG](/undefined#zG)](/undefined)](/undefined).

### <a id=":spellw :spellwrong" class="section-title" href="#:spellw :spellwrong">Note:</a>
:[count]spellw[rong] {word}
Add {word} as a wrong (bad) word to 'spellfile', as
with [[[[[[zw](/undefined#zw)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined).  Without count the first name is used, with
a count of two the second entry, etc.

:spellw[rong]! {word}	Add {word} as a wrong (bad) word to the internal word
list, like with [[[[zW](/undefined#zW)](/undefined)](/undefined)](/undefined).

### <a id=":spellra :spellrare" class="section-title" href="#:spellra :spellrare">Note:</a>
:[count]spellr[are] {word}
Add {word} as a rare word to 'spellfile', similar to
[[[[[[zw](/undefined#zw)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined).  Without count the first name is used, with
a count of two the second entry, etc.

There are no normal mode commands to mark words as
rare as this is a fairly uncommon command and all
intuitive commands for this are already taken. If you
want you can add mappings with e.g.:
nnoremap z?  :exe ':spellrare  ' .. expand('<cWORD>')<CR>
nnoremap z/  :exe ':spellrare! ' .. expand('<cWORD>')<CR>
|:spellundo|, [[[zuw](/undefined#zuw)](/undefined)](/undefined), or [[[zuW](/undefined#zuW)](/undefined)](/undefined) can be used to undo this.

:spellr[rare]! {word}	Add {word} as a rare word to the internal word
list, similar to [[[[zW](/undefined#zW)](/undefined)](/undefined)](/undefined).

### <a id=":spellu :spellundo" class="section-title" href="#:spellu :spellundo">:[count]spellu[ndo] {word}</a>
Like [[[zuw](/undefined#zuw)](/undefined)](/undefined).  [count] used as with |:spellgood|.

:spellu[ndo]! {word}	Like [[[zuW](/undefined#zuW)](/undefined)](/undefined).  [count] used as with |:spellgood|.


After adding a word to 'spellfile' with the above commands its associated
".spl" file will automatically be updated and reloaded.  If you change
'spellfile' manually you need to use the |:mkspell| command.  This sequence of
commands mostly works well:
:edit <file in 'spellfile'>
(make changes to the spell file)
:mkspell! %

More details about the 'spellfile' format below [[[[spell-wordlist-format](/undefined#spell-wordlist-format)](/undefined)](/undefined)](/undefined).

### <a id="internal-wordlist" class="section-title" href="#internal-wordlist">Note:</a>
The internal word list is used for all buffers where 'spell' is set.  It is
not stored, it is lost when you exit Vim.  It is also cleared when 'encoding'
is set.


Finding suggestions for bad words:
### <a id="z=" class="section-title" href="#z=">Note:</a>
z=			For the word under/after the cursor suggest correctly
spelled words.  This also works to find alternatives
for a word that is not highlighted as a bad word,
e.g., when the word after it is bad.
In Visual mode the highlighted text is taken as the
word to be replaced.
The results are sorted on similarity to the word being
replaced.
This may take a long time.  Hit CTRL-C when you get
bored.

If the command is used without a count the
alternatives are listed and you can enter the number
of your choice or press <Enter> if you don't want to
replace.  You can also use the mouse to click on your
choice (only works if the mouse can be used in Normal
mode and when there are no line wraps).  Click on the
first line (the header) to cancel.

The suggestions listed normally replace a highlighted
bad word.  Sometimes they include other text, in that
case the replaced text is also listed after a "<".

If a count is used that suggestion is used, without
prompting.  For example, "1z=" always takes the first
suggestion.

If 'verbose' is non-zero a score will be displayed
with the suggestions to indicate the likeliness to the
badly spelled word (the higher the score the more
different).
When a word was replaced the redo command "." will
repeat the word replacement.  This works like "ciw",
the good word and <Esc>.  This does NOT work for Thai
and other languages without spaces between words.

### <a id=":spellr :spellrepall E752 E753" class="section-title" href="#:spellr :spellrepall E752 E753">Note:</a>
:spellr[epall]		Repeat the replacement done by |z=| for all matches
with the replaced word in the current window.

In Insert mode, when the cursor is after a badly spelled word, you can use
CTRL-X s to find suggestions.  This works like Insert mode completion.  Use
CTRL-N to use the next suggestion, CTRL-P to go back. |i_CTRL-X_s|

The 'spellsuggest' option influences how the list of suggestions is generated
and sorted.  See |'spellsuggest'|.

The 'spellcapcheck' option is used to check the first word of a sentence
starts with a capital.  This doesn't work for the first word in the file.
When there is a line break right after a sentence the highlighting of the next
line may be postponed.  Use [[[CTRL-L](/undefined#CTRL-L)](/undefined)](/undefined) when needed.  Also see [[set-spc-auto](/undefined#set-spc-auto)](/undefined) for
how it can be set automatically when 'spelllang' is set.

The 'spelloptions' option has a few more flags that influence the way spell
checking works.

Vim counts the number of times a good word is encountered.  This is used to
sort the suggestions: words that have been seen before get a small bonus,
words that have been seen often get a bigger bonus.  The COMMON item in the
affix file can be used to define common words, so that this mechanism also
works in a new or short file [[spell-COMMON](/undefined#spell-COMMON)](/undefined).


## <a id="spell-remarks" class="section-title" href="#spell-remarks">2. Remarks on Spell Checking</a> 

PERFORMANCE

Vim does on-the-fly spell checking.  To make this work fast the word list is
loaded in memory.  Thus this uses a lot of memory (1 Mbyte or more).  There
might also be a noticeable delay when the word list is loaded, which happens
when 'spell' is set and when 'spelllang' is set while 'spell' was already set.
To minimize the delay each word list is only loaded once, it is not deleted
when 'spelllang' is made empty or 'spell' is reset.  When 'encoding' is set
all the word lists are reloaded, thus you may notice a delay then too.


REGIONS

A word may be spelled differently in various regions.  For example, English
comes in (at least) these variants:

en		all regions
en_au		Australia
en_ca		Canada
en_gb		Great Britain
en_nz		New Zealand
en_us		USA

Words that are not used in one region but are used in another region are
highlighted with SpellLocal [[[hl-SpellLocal](/undefined#hl-SpellLocal)](/undefined)](/undefined).

Always use lowercase letters for the language and region names.

When adding a word with [[[[[[[zg](/undefined#zg)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined) or another command it's always added for all
regions.  You can change that by manually editing the 'spellfile'.  See
[[[[spell-wordlist-format](/undefined#spell-wordlist-format)](/undefined)](/undefined)](/undefined).  Note that the regions as specified in the files in
'spellfile' are only used when all entries in 'spelllang' specify the same
region (not counting files specified by their .spl name).

### <a id="spell-german" class="section-title" href="#spell-german">Note:</a>
Specific exception: For German these special regions are used:
de		all German words accepted
de_de		old and new spelling
de_19		old spelling
de_20		new spelling
de_at		Austria
de_ch		Switzerland

### <a id="spell-russian" class="section-title" href="#spell-russian">Note:</a>
Specific exception: For Russian these special regions are used:
ru		all Russian words accepted
ru_ru		"IE" letter spelling
ru_yo		"YO" letter spelling

### <a id="spell-yiddish" class="section-title" href="#spell-yiddish">Note:</a>
Yiddish requires using "utf-8" encoding, because of the special characters
used.  If you are using latin1 Vim will use transliterated (romanized) Yiddish
instead.  If you want to use transliterated Yiddish with utf-8 use "yi-tr".
In a table:
'encoding'	'spelllang'
utf-8		yi		Yiddish
latin1		yi		transliterated Yiddish
utf-8		yi-tr		transliterated Yiddish

### <a id="spell-cjk" class="section-title" href="#spell-cjk">Note:</a>
Chinese, Japanese and other East Asian characters are normally marked as
errors, because spell checking of these characters is not supported. If
'spelllang' includes "cjk", these characters are not marked as errors.  This
is useful when editing text with spell checking while some Asian words are
present.


### <a id="spell-load" class="section-title" href="#spell-load">Spell Files</a>

Vim searches for spell files in the "spell" subdirectory of the directories in
'runtimepath'.  The name is: LL.EEE.spl, where:
LL	the language name
EEE	the value of 'encoding'

The value for "LL" comes from 'spelllang', but excludes the region name.
Examples:
'spelllang'	LL ~
en_us		en
en-rare		en-rare
medical_ca	medical

Only the first file is loaded, the one that is first in 'runtimepath'.  If
this succeeds then additionally files with the name LL.EEE.add.spl are loaded.
All the ones that are found are used.

If no spell file is found the [[[SpellFileMissing](/undefined#SpellFileMissing)](/undefined)](/undefined) autocommand event is
triggered.  This may trigger the |spellfile.vim| plugin to offer you
downloading the spell file.

Additionally, the files related to the names in 'spellfile' are loaded.  These
are the files that [[[[[[[zg](/undefined#zg)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined) and [[[[[[zw](/undefined#zw)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined) add good and wrong words to.

Exceptions:
- Vim uses "latin1" when 'encoding' is "iso-8859-15".  The euro sign doesn't
matter for spelling.
- When no spell file for 'encoding' is found "ascii" is tried.  This only
works for languages where nearly all words are ASCII, such as English.  It
helps when 'encoding' is not "latin1", such as iso-8859-2, and English text
is being edited.  For the ".add" files the same name as the found main
spell file is used.

For example, with these values:
'runtimepath' is "~/.config/nvim,/usr/share/nvim/runtime/,~/.config/nvim/after"
'encoding'    is "iso-8859-2"
'spelllang'   is "pl"

Vim will look for:
1. ~/.config/nvim/spell/pl.iso-8859-2.spl
2. /usr/share/nvim/runtime/spell/pl.iso-8859-2.spl
3. ~/.config/nvim/spell/pl.iso-8859-2.add.spl
4. /usr/share/nvim/runtime/spell/pl.iso-8859-2.add.spl
5. ~/.config/nvim/after/spell/pl.iso-8859-2.add.spl

This assumes 1. is not found and 2. is found.

If 'encoding' is "latin1" Vim will look for:
1. ~/.config/nvim/spell/pl.latin1.spl
2. /usr/share/nvim/runtime/spell/pl.latin1.spl
3. ~/.config/nvim/after/spell/pl.latin1.spl
4. ~/.config/nvim/spell/pl.ascii.spl
5. /usr/share/nvim/runtime/spell/pl.ascii.spl
6. ~/.config/nvim/after/spell/pl.ascii.spl

This assumes none of them are found (Polish doesn't make sense when leaving
out the non-ASCII characters).

A spell file might not be available in the current 'encoding'.  See
[[spell-mkspell](/undefined#spell-mkspell)](/undefined) about how to create a spell file.  Converting a spell file
with "iconv" will NOT work!

### <a id="spell-sug-file E781" class="section-title" href="#spell-sug-file E781">Note:</a>
If there is a file with exactly the same name as the ".spl" file but ending in
".sug", that file will be used for giving better suggestions.  It isn't loaded
before suggestions are made to reduce memory use.

### <a id="E758 E759 E778 E779 E780 E782" class="section-title" href="#E758 E759 E778 E779 E780 E782">Note:</a>
When loading a spell file Vim checks that it is properly formatted.  If you
get an error the file may be truncated, modified or intended for another Vim
version.


### <a id="spellfile-cleanup" class="section-title" href="#spellfile-cleanup">Spellfile Cleanup</a>

The [[[[[[zw](/undefined#zw)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined) command turns existing entries in 'spellfile' into comment lines.
This avoids having to write a new file every time, but results in the file
only getting longer, never shorter.  To clean up the comment lines in all
".add" spell files do this:
:runtime spell/cleanadd.vim

This deletes all comment lines, except the ones that start with "##".  Use
"##" lines to add comments that you want to keep.

You can invoke this script as often as you like.  A variable is provided to
skip updating files that have been changed recently.  Set it to the number of
seconds that has passed since a file was changed before it will be cleaned.
For example, to clean only files that were not changed in the last hour:
### <a id="let g:spell_clean_limit = 60  60" class="section-title" href="#let g:spell_clean_limit = 60  60">Note:</a>
The default is one second.


WORDS

Vim uses a fixed method to recognize a word.  This is independent of
'iskeyword', so that it also works in help files and for languages that
include characters like '-' in 'iskeyword'.  The word characters do depend on
'encoding'.

The table with word characters is stored in the main .spl file.  Therefore it
matters what the current locale is when generating it!  A .add.spl file does
not contain a word table though.

For a word that starts with a digit the digit is ignored, unless the word as a
whole is recognized.  Thus if "3D" is a word and "D" is not then "3D" is
recognized as a word, but if "3D" is not a word then only the "D" is marked as
bad.  Hex numbers in the form 0x12ab and 0X12AB are recognized.


WORD COMBINATIONS

It is possible to spell-check words that include a space.  This is used to
recognize words that are invalid when used by themselves, e.g. for "et al.".
It can also be used to recognize "the the" and highlight it.

The number of spaces is irrelevant.  In most cases a line break may also
appear.  However, this makes it difficult to find out where to start checking
for spelling mistakes.  When you make a change to one line and only that line
is redrawn Vim won't look in the previous line, thus when "et" is at the end
of the previous line "al." will be flagged as an error.  And when you type
"the<CR>the" the highlighting doesn't appear until the first line is redrawn.
Use [[[CTRL-L](/undefined#CTRL-L)](/undefined)](/undefined) to redraw right away.  "[s" will also stop at a word combination
with a line break.

When encountering a line break Vim skips characters such as '*', '>' and '"',
so that comments in C, shell and Vim code can be spell checked.


### <a id="spell-syntax" class="section-title" href="#spell-syntax">Syntax Highlighting</a>

Files that use syntax highlighting can specify where spell checking should be
done:

1.  everywhere			   default
2.  in specific items		   use "contains=@Spell"
3.  everywhere but specific items  use "contains=@NoSpell"

For the second method adding the @NoSpell cluster will disable spell checking
again.  This can be used, for example, to add @Spell to the comments of a
program, and add @NoSpell for items that shouldn't be checked.
Also see |:syn-spell| for text that is not in a syntax item.


VIM SCRIPTS

If you want to write a Vim script that does something with spelling, you may
find these functions useful:

spellbadword()	find badly spelled word at the cursor
spellsuggest()	get list of spelling suggestions
soundfold()		get the sound-a-like version of a word


### <a id="set-spc-auto" class="section-title" href="#set-spc-auto">SETTING 'spellcapcheck' AUTOMATICALLY</a>

After the 'spelllang' option has been set successfully, Vim will source the
files "spell/LANG.vim" in 'runtimepath'.  "LANG" is the value of 'spelllang'
up to the first comma, dot or underscore.  This can be used to set options
specifically for the language, especially 'spellcapcheck'.

The distribution includes a few of these files.  Use this command to see what
they do:
:next $VIMRUNTIME/spell/*.vim

Note that the default scripts don't set 'spellcapcheck' if it was changed from
the default value.  This assumes the user prefers another value then.


### <a id="spell-double-scoring" class="section-title" href="#spell-double-scoring">Double Scoring</a>

The 'spellsuggest' option can be used to select "double" scoring.  This
mechanism is based on the principle that there are two kinds of spelling
mistakes:

1. You know how to spell the word, but mistype something.  This results in a
small editing distance (character swapped/omitted/inserted) and possibly a
word that sounds completely different.

2. You don't know how to spell the word and type something that sounds right.
The edit distance can be big but the word is similar after sound-folding.

Since scores for these two mistakes will be very different we use a list
for each and mix them.

The sound-folding is slow and people that know the language won't make the
second kind of mistakes.  Therefore 'spellsuggest' can be set to select the
preferred method for scoring the suggestions.


## <a id="spell-mkspell" class="section-title" href="#spell-mkspell">3. Generating a Spell File</a> 

Vim uses a binary file format for spelling.  This greatly speeds up loading
the word list and keeps it small.
### <a id=".aff .dic Myspell" class="section-title" href="#.aff .dic Myspell">Note:</a>
You can create a Vim spell file from the .aff and .dic files that Myspell
uses.  Myspell is used by OpenOffice.org and Mozilla. The OpenOffice .oxt
files are zip files which contain the .aff and .dic files. You should be able
to find them here:
https://extensions.services.openoffice.org/dictionary
The older, OpenOffice 2 files may be used if this doesn't work:
http://wiki.services.openoffice.org/wiki/Dictionaries
You can also use a plain word list.  The results are the same, the choice
depends on what word lists you can find.

If you install Aap (from www.a-a-p.org) you can use the recipes in the
runtime/spell/??/ directories.  Aap will take care of downloading the files,
apply patches needed for Vim and build the .spl file.

Make sure your current locale is set properly, otherwise Vim doesn't know what
characters are upper/lower case letters.  If the locale isn't available (e.g.,
when using an MS-Windows codepage on Unix) add tables to the .aff file
[[spell-affix-chars](/undefined#spell-affix-chars)](/undefined).  If the .aff file doesn't define a table then the word
table of the currently active spelling is used.  If spelling is not active
then Vim will try to guess.

### <a id=":mksp :mkspell" class="section-title" href="#:mksp :mkspell">Note:</a>
:mksp[ell][!] [-ascii] {outname} {inname} ...
Generate a Vim spell file from word lists.  Example:
:mkspell /tmp/nl nl_NL.words
### <a id="E751" class="section-title" href="#E751">Note:</a>
When {outname} ends in ".spl" it is used as the output
file name.  Otherwise it should be a language name,
such as "en", without the region name.  The file
written will be "{outname}.{encoding}.spl", where
{encoding} is the value of the 'encoding' option.

When the output file already exists [!] must be used
to overwrite it.

When the [-ascii] argument is present, words with
non-ascii characters are skipped.  The resulting file
ends in "ascii.spl".

The input can be the Myspell format files {inname}.aff
and {inname}.dic.  If {inname}.aff does not exist then
{inname} is used as the file name of a plain word
list.

Multiple {inname} arguments can be given to combine
regions into one Vim spell file.  Example:
:mkspell ~/.config/nvim/spell/en /tmp/en_US /tmp/en_CA /tmp/en_AU
This combines the English word lists for US, CA and AU
into one en.spl file.
### <a id="Up to eight regions can be combined. E754 E755" class="section-title" href="#Up to eight regions can be combined. E754 E755">Note:</a>
The REP and SAL items of the first .aff file where
they appear are used. [[spell-REP](/undefined#spell-REP)](/undefined) [[spell-SAL](/undefined#spell-SAL)](/undefined)
### <a id="E845" class="section-title" href="#E845">Note:</a>
This command uses a lot of memory, required to find
the optimal word tree (Polish, Italian and Hungarian
require several hundred Mbyte).  The final result will
be much smaller, because compression is used.  To
avoid running out of memory compression will be done
now and then.  This can be tuned with the 'mkspellmem'
option.

After the spell file was written and it was being used
in a buffer it will be reloaded automatically.

:mksp[ell] [-ascii] {name}.{enc}.add
Like ":mkspell" above, using {name}.{enc}.add as the
input file and producing an output file in the same
directory that has ".spl" appended.

:mksp[ell] [-ascii] {name}
Like ":mkspell" above, using {name} as the input file
and producing an output file in the same directory
that has ".{enc}.spl" appended.

Vim will report the number of duplicate words.  This might be a mistake in the
list of words.  But sometimes it is used to have different prefixes and
suffixes for the same basic word to avoid them combining (e.g. Czech uses
this).  If you want Vim to report all duplicate words set the 'verbose'
option.

Since you might want to change a Myspell word list for use with Vim the
following procedure is recommended:

1. Obtain the xx_YY.aff and xx_YY.dic files from Myspell.
2. Make a copy of these files to xx_YY.orig.aff and xx_YY.orig.dic.
3. Change the xx_YY.aff and xx_YY.dic files to remove bad words, add missing
words, define word characters with FOL/LOW/UPP, etc.  The distributed
### <a id="".diff" files can be used." class="section-title" href="#".diff" files can be used.">Note:</a>
4. Start Vim with the right locale and use |:mkspell| to generate the Vim
spell file.
5. Try out the spell file with ":set spell spelllang=xx" if you wrote it in
a spell directory in 'runtimepath', or ":set spelllang=xx.enc.spl" if you
wrote it somewhere else.

When the Myspell files are updated you can merge the differences:
1. Obtain the new Myspell files as xx_YY.new.aff and xx_UU.new.dic.
2. Use [[diff-mode](/undefined#diff-mode)](/undefined) to see what changed:
nvim -d xx_YY.orig.dic xx_YY.new.dic
3. Take over the changes you like in xx_YY.dic.
You may also need to change xx_YY.aff.
4. Rename xx_YY.new.dic to xx_YY.orig.dic and xx_YY.new.aff to xx_YY.orig.aff.


### <a id="E770 E771 E772" class="section-title" href="#E770 E771 E772">Spell File Versions</a>

Spell checking is a relatively new feature in Vim, thus it's possible that the
.spl file format will be changed to support more languages.  Vim will check
the validity of the spell file and report anything wrong.

E771: Old spell file, needs to be updated ~
This spell file is older than your Vim.  You need to update the .spl file.

E772: Spell file is for newer version of Vim ~
This means the spell file was made for a later version of Vim.  You need to
update Vim.

E770: Unsupported section in spell file ~
This means the spell file was made for a later version of Vim and contains a
section that is required for the spell file to work.  In this case it's
probably a good idea to upgrade your Vim.


SPELL FILE DUMP

If for some reason you want to check what words are supported by the currently
used spelling files, use this command:

### <a id=":spelldump :spelld" class="section-title" href="#:spelldump :spelld">Note:</a>
:spelld[ump]		Open a new window and fill it with all currently valid
words.  Compound words are not included.
Note: For some languages the result may be enormous,
causing Vim to run out of memory.

:spelld[ump]!		Like ":spelldump" and include the word count.  This is
the number of times the word was found while
updating the screen.  Words that are in COMMON items
get a starting count of 10.

The format of the word list is used [[[[spell-wordlist-format](/undefined#spell-wordlist-format)](/undefined)](/undefined)](/undefined).  You should be
able to read it with ":mkspell" to generate one .spl file that includes all
the words.

When all entries to 'spelllang' use the same regions or no regions at all then
the region information is included in the dumped words.  Otherwise only words
for the current region are included and no "/regions" line is generated.

Comment lines with the name of the .spl file are used as a header above the
words that were generated from that .spl file.


### <a id="spell-SpellFileMissing spellfile.vim" class="section-title" href="#spell-SpellFileMissing spellfile.vim">Spell File Missing</a>

If the spell file for the language you are using is not available, you will
get an error message.  But if the "spellfile.vim" plugin is active it will
offer you to download the spell file.  Just follow the instructions, it will
ask you where to write the file (there must be a writable directory in
'runtimepath' for this).

The plugin has a default place where to look for spell files, on the Vim ftp
server.  The protocol used is SSL (https://) for security.  If you want to use
another location or another protocol, set the g:spellfile_URL variable to the
directory that holds the spell files.  You can use http:// or ftp://, but you
are taking a security risk then.  The [[netrw](/undefined#netrw)](/undefined) plugin is used for getting the
file, look there for the specific syntax of the URL.  Example:
let g:spellfile_URL = 'https://ftp.nluug.nl/vim/runtime/spell'
You may need to escape special characters.

The plugin will only ask about downloading a language once.  If you want to
try again anyway restart Vim, or set g:spellfile_URL to another value (e.g.,
prepend a space).

To avoid using the "spellfile.vim" plugin do this in your vimrc file:

let loaded_spellfile_plugin = 1

Instead of using the plugin you can define a [[[SpellFileMissing](/undefined#SpellFileMissing)](/undefined)](/undefined) autocommand to
handle the missing file yourself.  You can use it like this:

:au SpellFileMissing * call Download_spell_file(expand('<amatch>'))

Thus the <amatch> item contains the name of the language.  Another important
value is 'encoding', since every encoding has its own spell file.  With two
exceptions:
- For ISO-8859-15 (latin9) the name "latin1" is used (the encodings only
differ in characters not used in dictionary words).
- The name "ascii" may also be used for some languages where the words use
only ASCII letters for most of the words.

The default "spellfile.vim" plugin uses this autocommand, if you define your
autocommand afterwards you may want to use ":au! SpellFileMissing" to overrule
it.  If you define your autocommand before the plugin is loaded it will notice
this and not do anything.
### <a id="E797" class="section-title" href="#E797">Note:</a>
Note that the SpellFileMissing autocommand must not change or destroy the
buffer the user was editing.


## <a id="spell-file-format" class="section-title" href="#spell-file-format">4. Spell File Format</a> 

This is the format of the files that are used by the person who creates and
maintains a word list.

Note that we avoid the word "dictionary" here.  That is because the goal of
spell checking differs from writing a dictionary (as in the book).  For
spelling we need a list of words that are OK, thus should not be highlighted.
Person and company names will not appear in a dictionary, but do appear in a
word list.  And some old words are rarely used while they are common
misspellings.  These do appear in a dictionary but not in a word list.

There are two formats: A straight list of words and a list using affix
compression.  The files with affix compression are used by Myspell (Mozilla
and OpenOffice.org).  This requires two files, one with .aff and one with .dic
extension.


### <a id="spell-wordlist-format" class="section-title" href="#spell-wordlist-format">Format of Straight Word List</a>

The words must appear one per line.  That is all that is required.

Additionally the following items are recognized:

- Empty and blank lines are ignored.

# comment ~
- Lines starting with a # are ignored (comment lines).

/encoding=utf-8 ~
- A line starting with "/encoding=", before any word, specifies the encoding
of the file.  After the second '=' comes an encoding name.  This tells Vim
to setup conversion from the specified encoding to 'encoding'.  Thus you can
use one word list for several target encodings.

/regions=usca ~
- A line starting with "/regions=" specifies the region names that are
supported.  Each region name must be two ASCII letters.  The first one is
region 1.  Thus "/regions=usca" has region 1 "us" and region 2 "ca".
In an addition word list the region names should be equal to the main word
list!

- Other lines starting with '/' are reserved for future use.  The ones that
are not recognized are ignored.  You do get a warning message, so that you
know something won't work.

- A "/" may follow the word with the following items:
=		Case must match exactly.
?		Rare word.
!		Bad (wrong) word.
1 to 9	A region in which the word is valid.  If no regions are
specified the word is valid in all regions.

Example:

# This is an example word list		comment
/encoding=latin1			encoding of the file
/regions=uscagb				regions "us", "ca" and "gb"
example					word for all regions
blah/12					word for regions "us" and "ca"
vim/!					bad word
Campbell/?3				rare word in region 3 "gb"
's mornings/=				keep-case word

Note that when "/=" is used the same word with all upper-case letters is not
accepted.  This is different from a word with mixed case that is automatically
marked as keep-case, those words may appear in all upper-case letters.


### <a id="aff-dic-format" class="section-title" href="#aff-dic-format">Format With .Aff and .Dic Files</a>

There are two files: the basic word list and an affix file.  The affix file
specifies settings for the language and can contain affixes.  The affixes are
used to modify the basic words to get the full word list.  This significantly
reduces the number of words, especially for a language like Polish.  This is
called affix compression.

The basic word list and the affix file are combined with the ":mkspell"
command and results in a binary spell file.  All the preprocessing has been
done, thus this file loads fast.  The binary spell file format is described in
the source code (src/spell.c).  But only developers need to know about it.

The preprocessing also allows us to take the Myspell language files and modify
them before the Vim word list is made.  The tools for this can be found in the
"src/spell" directory.

The format for the affix and word list files is based on what Myspell uses
(the spell checker of Mozilla and OpenOffice.org).  A description can be found
here:
https://lingucomponent.openoffice.org/affix.readme ~
Note that affixes are case sensitive, this isn't obvious from the description.

Vim supports quite a few extras.  They are described below [[spell-affix-vim](/undefined#spell-affix-vim)](/undefined).
Attempts have been made to keep this compatible with other spell checkers, so
that the same files can often be used.  One other project that offers more
than Myspell is Hunspell ( https://hunspell.github.io ).


### <a id="spell-dic-format" class="section-title" href="#spell-dic-format">Word List Format</a>

A short example, with line numbers:

1	1234 ~
2	aan ~
3	Als ~
4	Etten-Leur ~
5	et al. ~
6	's-Gravenhage ~
7	's-Gravenhaags ~
8	# word that differs between regions ~
9	kado/1 ~
10	cadeau/2 ~
11	TCP,IP ~
12	/the S affix may add a 's' ~
13	bedel/S ~

The first line contains the number of words.  Vim ignores it, but you do get
### <a id="E760" class="section-title" href="#E760">an error message if it's not there.</a>

What follows is one word per line.  White space at the end of the line is
ignored, all other white space matters.  The encoding is specified in the
affix file [[spell-SET](/undefined#spell-SET)](/undefined).

Comment lines start with '#' or '/'.  See the example lines 8 and 12.  Note
that putting a comment after a word is NOT allowed:

someword   # comment that causes an error! ~

After the word there is an optional slash and flags.  Most of these flags are
letters that indicate the affixes that can be used with this word.  These are
specified with SFX and PFX lines in the .aff file, see [[spell-SFX](/undefined#spell-SFX)](/undefined) and
[[spell-PFX](/undefined#spell-PFX)](/undefined).  Vim allows using other flag types with the FLAG item in the
affix file [[[spell-FLAG](/undefined#spell-FLAG)](/undefined)](/undefined).

When the word only has lower-case letters it will also match with the word
starting with an upper-case letter.

When the word includes an upper-case letter, this means the upper-case letter
is required at this position.  The same word with a lower-case letter at this
position will not match. When some of the other letters are upper-case it will
not match either.

The word with all upper-case characters will always be OK,

word list	matches			does not match ~
als		als Als ALS		ALs AlS aLs aLS
Als		Als  ALS		als ALs AlS aLs aLS
ALS		ALS			als Als ALs AlS aLs aLS
AlS		AlS ALS			als Als ALs aLs aLS

The KEEPCASE affix ID can be used to specifically match a word with identical
case only, see below [[spell-KEEPCASE](/undefined#spell-KEEPCASE)](/undefined).

Note: in line 5 to 7 non-word characters are used.  You can include any
character in a word.  When checking the text a word still only matches when it
appears with a non-word character before and after it.  For Myspell a word
starting with a non-word character probably won't work.

In line 12 the word "TCP/IP" is defined.  Since the slash has a special
meaning the comma is used instead.  This is defined with the SLASH item in the
affix file, see [[spell-SLASH](/undefined#spell-SLASH)](/undefined).  Note that without this SLASH item the word
will be "TCP,IP".


### <a id="spell-aff-format spell-affix-vim" class="section-title" href="#spell-aff-format spell-affix-vim">Affix File Format</a>

### <a id="spell-affix-comment" class="section-title" href="#spell-affix-comment">Note:</a>
Comment lines in the .aff file start with a '#':

# comment line ~

Items with a fixed number of arguments can be followed by a comment.  But only
if none of the arguments can contain white space.  The comment must start with
a "#" character.  Example:

KEEPCASE =  # fix case for words with this flag ~


### <a id="spell-SET" class="section-title" href="#spell-SET">ENCODING</a>

The affix file can be in any encoding that is supported by "iconv".  However,
in some cases the current locale should also be set properly at the time
|:mkspell| is invoked.  Adding FOL/LOW/UPP lines removes this requirement
[[spell-FOL](/undefined#spell-FOL)](/undefined).

The encoding should be specified before anything where the encoding matters.
The encoding applies both to the affix file and the dictionary file.  It is
done with a SET line:

SET utf-8 ~

The encoding can be different from the value of the 'encoding' option at the
time ":mkspell" is used.  Vim will then convert everything to 'encoding' and
generate a spell file for 'encoding'.  If some of the used characters to not
fit in 'encoding' you will get an error message.
### <a id="spell-affix-mbyte" class="section-title" href="#spell-affix-mbyte">Note:</a>
When using a multibyte encoding it's possible to use more different affix
flags.  But Myspell doesn't support that, thus you may not want to use it
anyway.  For compatibility use an 8-bit encoding.


INFORMATION

These entries in the affix file can be used to add information to the spell
file.  There are no restrictions on the format, but they should be in the
right encoding.

### <a id="spell-NAME spell-VERSION spell-HOME" class="section-title" href="#spell-NAME spell-VERSION spell-HOME">Note:</a>
### <a id="spell-AUTHOR spell-EMAIL spell-COPYRIGHT" class="section-title" href="#spell-AUTHOR spell-EMAIL spell-COPYRIGHT">Note:</a>
NAME		Name of the language
VERSION		1.0.1  with fixes
HOME		https://www.example.com
AUTHOR		John Doe
EMAIL		john AT Doe DOT net
COPYRIGHT	LGPL

These fields are put in the .spl file as-is.  The |:spellinfo| command can be
used to view the info.

### <a id=":spellinfo :spelli" class="section-title" href="#:spellinfo :spelli">Note:</a>
:spelli[nfo]		Display the information for the spell file(s) used for
the current buffer.


CHARACTER TABLES
### <a id="spell-affix-chars" class="section-title" href="#spell-affix-chars">Note:</a>
When using an 8-bit encoding the affix file should define what characters are
word characters.  This is because the system where ":mkspell" is used may not
support a locale with this encoding and isalpha() won't work.  For example
when using "cp1250" on Unix.
### <a id="E761 E762 spell-FOL" class="section-title" href="#E761 E762 spell-FOL">Note:</a>
### <a id="spell-LOW spell-UPP" class="section-title" href="#spell-LOW spell-UPP">Note:</a>
Three lines in the affix file are needed.  Simplistic example:

FOL  áëñ ~
LOW  áëñ ~
UPP  ÁËÑ ~

All three lines must have exactly the same number of characters.

The "FOL" line specifies the case-folded characters.  These are used to
compare words while ignoring case.  For most encodings this is identical to
the lower case line.

The "LOW" line specifies the characters in lower-case.  Mostly it's equal to
the "FOL" line.

The "UPP" line specifies the characters with upper-case.  That is, a character
is upper-case where it's different from the character at the same position in
"FOL".

An exception is made for the German sharp s ß.  The upper-case version is
"SS".  In the FOL/LOW/UPP lines it should be included, so that it's recognized
as a word character, but use the ß character in all three.

ASCII characters should be omitted, Vim always handles these in the same way.
When the encoding is UTF-8 no word characters need to be specified.

### <a id="E763" class="section-title" href="#E763">Note:</a>
Vim allows you to use spell checking for several languages in the same file.
You can list them in the 'spelllang' option.  As a consequence all spell files
for the same encoding must use the same word characters, otherwise they can't
be combined without errors.

If you get an E763 warning that the word tables differ you need to update your
".spl" spell files.  If you downloaded the files, get the latest version of
all spell files you use.  If you are only using one, e.g., German, then also
download the recent English spell files.  Otherwise generate the .spl file
again with |:mkspell|.  If you still get errors check the FOL, LOW and UPP
lines in the used .aff files.

The XX.ascii.spl spell file generated with the "-ascii" argument will not
contain the table with characters, so that it can be combine with spell files
for any encoding.  The .add.spl files also do not contain the table.


MID-WORD CHARACTERS
### <a id="spell-midword" class="section-title" href="#spell-midword">Note:</a>
Some characters are only to be considered word characters if they are used in
between two ordinary word characters.  An example is the single quote: It is
often used to put text in quotes, thus it can't be recognized as a word
character, but when it appears in between word characters it must be part of
the word.  This is needed to detect a spelling error such as they'are.  That
should be they're, but since "they" and "are" are words themselves that would
go unnoticed.

These characters are defined with MIDWORD in the .aff file.  Example:

MIDWORD	'- ~


### <a id="spell-FLAG" class="section-title" href="#spell-FLAG">Flag Types</a>

Flags are used to specify the affixes that can be used with a word and for
other properties of the word.  Normally single-character flags are used.  This
limits the number of possible flags, especially for 8-bit encodings.  The FLAG
item can be used if more affixes are to be used.  Possible values:

FLAG long	use two-character flags
FLAG num	use numbers, from 1 up to 65000
FLAG caplong	use one-character flags without A-Z and two-character
flags that start with A-Z

With "FLAG num" the numbers in a list of affixes need to be separated with a
comma: "234,2143,1435".  This method is inefficient, but useful if the file is
generated with a program.

When using "caplong" the two-character flags all start with a capital: "Aa",
"B1", "BB", etc.  This is useful to use one-character flags for the most
common items and two-character flags for uncommon items.

Note: When using utf-8 only characters up to 65000 may be used for flags.

Note: even when using "num" or "long" the number of flags available to
compounding and prefixes is limited to about 250.


AFFIXES
### <a id="spell-PFX spell-SFX" class="section-title" href="#spell-PFX spell-SFX">Note:</a>
The usual PFX (prefix) and SFX (suffix) lines are supported (see the Myspell
documentation or the Aspell manual:
http://aspell.net/man-html/Affix-Compression.html).

Summary:
SFX L Y 2 ~
SFX L 0 re [^x] ~
SFX L 0 ro x ~

The first line is a header and has four fields:
SFX {flag} {combine} {count}

{flag}		The name used for the suffix.  Mostly it's a single letter,
but other characters can be used, see [[[spell-FLAG](/undefined#spell-FLAG)](/undefined)](/undefined).

{combine}	Can be 'Y' or 'N'.  When 'Y' then the word plus suffix can
also have a prefix.  When 'N' then a prefix is not allowed.

{count}		The number of lines following.  If this is wrong you will get
an error message.

For PFX the fields are exactly the same.

The basic format for the following lines is:
SFX {flag} {strip} {add} {condition} {extra}

{flag}		Must be the same as the {flag} used in the first line.

{strip}		Characters removed from the basic word.  There is no check if
the characters are actually there, only the length is used (in
bytes).  This better match the {condition}, otherwise strange
things may happen.  If the {strip} length is equal to or
longer than the basic word the suffix won't be used.
When {strip} is 0 (zero) then nothing is stripped.

{add}		Characters added to the basic word, after removing {strip}.
Optionally there is a '/' followed by flags.  The flags apply
to the word plus affix.  See [[[spell-affix-flags](/undefined#spell-affix-flags)](/undefined)](/undefined)

{condition}	A simplistic pattern.  Only when this matches with a basic
word will the suffix be used for that word.  This is normally
for using one suffix letter with different {add} and {strip}
fields for words with different endings.
When {condition} is a . (dot) there is no condition.
The pattern may contain:
- Literal characters.
- A set of characters in []. [abc] matches a, b and c.
A dash is allowed for a range [a-c], but this is
Vim-specific.
- A set of characters that starts with a ^, meaning the
complement of the specified characters. [^abc] matches any
character but a, b and c.

{extra}		Optional extra text:
# comment		Comment is ignored
-			Hunspell uses this, ignored

For PFX the fields are the same, but the {strip}, {add} and {condition} apply
to the start of the word.

Note: Myspell ignores any extra text after the relevant info.  Vim requires
this text to start with a "#" so that mistakes don't go unnoticed.  Example:

SFX F 0 in   [^i]n      # Spion > Spionin  ~
SFX F 0 nen  in		# Bauerin > Bauerinnen ~

However, to avoid lots of errors in affix files written for Myspell, you can
add the IGNOREEXTRA flag.

Apparently Myspell allows an affix name to appear more than once.  Since this
might also be a mistake, Vim checks for an extra "S".  The affix files for
Myspell that use this feature apparently have this flag.  Example:

SFX a Y 1 S ~
SFX a 0 an . ~

SFX a Y 2 S ~
SFX a 0 en . ~
SFX a 0 on . ~


### <a id="spell-affix-flags" class="section-title" href="#spell-affix-flags">Affix Flags</a>

This is a feature that comes from Hunspell: The affix may specify flags.  This
works similar to flags specified on a basic word.  The flags apply to the
basic word plus the affix (but there are restrictions).  Example:

SFX S Y 1 ~
SFX S 0 s . ~

SFX A Y 1 ~
SFX A 0 able/S . ~

When the dictionary file contains "drink/AS" then these words are possible:

drink
drinks		uses S suffix
drinkable	uses A suffix
drinkables	uses A suffix and then S suffix

Generally the flags of the suffix are added to the flags of the basic word,
both are used for the word plus suffix.  But the flags of the basic word are
only used once for affixes, except that both one prefix and one suffix can be
used when both support combining.

Specifically, the affix flags can be used for:
- Suffixes on suffixes, as in the example above.  This works once, thus you
can have two suffixes on a word (plus one prefix).
- Making the word with the affix rare, by using the [[spell-RARE](/undefined#spell-RARE)](/undefined) flag.
- Exclude the word with the affix from compounding, by using the
[[[spell-COMPOUNDFORBIDFLAG](/undefined#spell-COMPOUNDFORBIDFLAG)](/undefined)](/undefined) flag.
- Allow the word with the affix to be part of a compound word on the side of
the affix with the [[[spell-COMPOUNDPERMITFLAG](/undefined#spell-COMPOUNDPERMITFLAG)](/undefined)](/undefined).
- Use the NEEDCOMPOUND flag: word plus affix can only be used as part of a
compound word. [[spell-NEEDCOMPOUND](/undefined#spell-NEEDCOMPOUND)](/undefined)
- Compound flags: word plus affix can be part of a compound word at the end,
middle, start, etc.  The flags are combined with the flags of the basic
word.  [[spell-compound](/undefined#spell-compound)](/undefined)
- NEEDAFFIX: another affix is needed to make a valid word.
- CIRCUMFIX, as explained just below.


### <a id="spell-IGNOREEXTRA" class="section-title" href="#spell-IGNOREEXTRA">IGNOREEXTRA</a>

Normally Vim gives an error for an extra field that does not start with '#'.
This avoids errors going unnoticed.  However, some files created for Myspell
or Hunspell may contain many entries with an extra field.  Use the IGNOREEXTRA
flag to avoid lots of errors.


### <a id="spell-CIRCUMFIX" class="section-title" href="#spell-CIRCUMFIX">CIRCUMFIX</a>

The CIRCUMFIX flag means a prefix and suffix must be added at the same time.
If a prefix has the CIRCUMFIX flag then only suffixes with the CIRCUMFIX flag
can be added, and the other way around.
An alternative is to only specify the suffix, and give that suffix two flags:
the required prefix and the NEEDAFFIX flag.  [[[spell-NEEDAFFIX](/undefined#spell-NEEDAFFIX)](/undefined)](/undefined)


### <a id="spell-PFXPOSTPONE" class="section-title" href="#spell-PFXPOSTPONE">PFXPOSTPONE</a>

When an affix file has very many prefixes that apply to many words it's not
possible to build the whole word list in memory.  This applies to Hebrew (a
list with all words is over a Gbyte).  In that case applying prefixes must be
postponed.  This makes spell checking slower.  It is indicated by this keyword
in the .aff file:

PFXPOSTPONE ~

Only prefixes without a chop string and without flags can be postponed.
Prefixes with a chop string or with flags will still be included in the word
list.  An exception if the chop string is one character and equal to the last
character of the added string, but in lower case.  Thus when the chop string
is used to allow the following word to start with an upper case letter.


### <a id="spell-SLASH" class="section-title" href="#spell-SLASH">Words With a Slash</a>

The slash is used in the .dic file to separate the basic word from the affix
letters and other flags.  Unfortunately, this means you cannot use a slash in
a word.  Thus "TCP/IP" is not a word but "TCP" with the flags "IP".  To include
a slash in the word put a backslash before it: "TCP\/IP".  In the rare case
you want to use a backslash inside a word you need to use two backslashes.
Any other use of the backslash is reserved for future expansion.


### <a id="spell-KEEPCASE" class="section-title" href="#spell-KEEPCASE">Keep-Case Words</a>

In the affix file a KEEPCASE line can be used to define the affix name used
for keep-case words.  Example:

KEEPCASE = ~

This flag is not supported by Myspell.  It has the meaning that case matters.
This can be used if the word does not have the first letter in upper case at
the start of a sentence.  Example:

word list	    matches		    does not match ~
's morgens/=    's morgens		    'S morgens 's Morgens 'S MORGENS
's Morgens	    's Morgens 'S MORGENS   'S morgens 's morgens

The flag can also be used to avoid that the word matches when it is in all
upper-case letters.


### <a id="spell-RARE" class="section-title" href="#spell-RARE">Rare Words</a>

In the affix file a RARE line can be used to define the affix name used for
rare words.  Example:

RARE ? ~

Rare words are highlighted differently from bad words.  This is to be used for
words that are correct for the language, but are hardly ever used and could be
a typing mistake anyway.

This flag can also be used on an affix, so that a basic word is not rare but
the basic word plus affix is rare [[[spell-affix-flags](/undefined#spell-affix-flags)](/undefined)](/undefined).  However, if the word
also appears as a good word in another way (e.g., in another region) it won't
be marked as rare.


### <a id="spell-BAD" class="section-title" href="#spell-BAD">Bad Words</a>

In the affix file a BAD line can be used to define the affix name used for
bad words.  Example:

BAD ! ~

This can be used to exclude words that would otherwise be good.  For example
"the the" in the .dic file:

the the/! ~

Once a word has been marked as bad it won't be undone by encountering the same
word as good.

The flag also applies to the word with affixes, thus this can be used to mark
a whole bunch of related words as bad.

### <a id="spell-FORBIDDENWORD" class="section-title" href="#spell-FORBIDDENWORD">Note:</a>
FORBIDDENWORD can be used just like BAD.  For compatibility with Hunspell.

### <a id="spell-NEEDAFFIX" class="section-title" href="#spell-NEEDAFFIX">Note:</a>
The NEEDAFFIX flag is used to require that a word is used with an affix.  The
word itself is not a good word (unless there is an empty affix).  Example:

NEEDAFFIX + ~


### <a id="spell-compound" class="section-title" href="#spell-compound">Compound Words</a>

A compound word is a longer word made by concatenating words that appear in
the .dic file.  To specify which words may be concatenated a character is
used.  This character is put in the list of affixes after the word.  We will
call this character a flag here.  Obviously these flags must be different from
any affix IDs used.

### <a id="spell-COMPOUNDFLAG" class="section-title" href="#spell-COMPOUNDFLAG">Note:</a>
The Myspell compatible method uses one flag, specified with COMPOUNDFLAG.  All
words with this flag combine in any order.  This means there is no control
over which word comes first.  Example:
COMPOUNDFLAG c ~

### <a id="spell-COMPOUNDRULE" class="section-title" href="#spell-COMPOUNDRULE">Note:</a>
A more advanced method to specify how compound words can be formed uses
multiple items with multiple flags.  This is not compatible with Myspell 3.0.
Let's start with an example:
COMPOUNDRULE c+ ~
COMPOUNDRULE se ~

The first line defines that words with the "c" flag can be concatenated in any
order.  The second line defines compound words that are made of one word with
the "s" flag and one word with the "e" flag.  With this dictionary:
bork/c ~
onion/s ~
soup/e ~

You can make these words:
bork
borkbork
borkborkbork
(etc.)
onion
soup
onionsoup

The COMPOUNDRULE item may appear multiple times.  The argument is made out of
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
COMPOUNDRULE xy?z	    xz xyz

COMPOUNDRULE [abc]z    az bz cz
COMPOUNDRULE [abc]+z   az aaz abaz bz baz bcbz cz caz cbaz etc.
COMPOUNDRULE a[xyz]+   ax axx axyz ay ayx ayzz az azy azxy etc.
### <a id="COMPOUNDRULE sme" class="section-title" href="#COMPOUNDRULE sme">Note:</a>
### <a id="COMPOUNDRULE s[xyz]e" class="section-title" href="#COMPOUNDRULE s[xyz]e">Note:</a>

A specific example: Allow a compound to be made of two words and a dash:
In the .aff file:
COMPOUNDRULE sde ~
NEEDAFFIX x ~
COMPOUNDWORDMAX 3 ~
COMPOUNDMIN 1 ~
In the .dic file:
start/s ~
end/e ~
-/xd ~

This allows for the word "start-end", but not "startend".

An additional implied rule is that, without further flags, a word with a
prefix cannot be compounded after another word, and a word with a suffix
cannot be compounded with a following word.  Thus the affix cannot appear
on the inside of a compound word.  This can be changed with the
[[[spell-COMPOUNDPERMITFLAG](/undefined#spell-COMPOUNDPERMITFLAG)](/undefined)](/undefined).

### <a id="spell-NEEDCOMPOUND" class="section-title" href="#spell-NEEDCOMPOUND">Note:</a>
The NEEDCOMPOUND flag is used to require that a word is used as part of a
compound word.  The word itself is not a good word.  Example:

NEEDCOMPOUND & ~

### <a id="spell-ONLYINCOMPOUND" class="section-title" href="#spell-ONLYINCOMPOUND">Note:</a>
The ONLYINCOMPOUND does exactly the same as NEEDCOMPOUND.  Supported for
compatibility with Hunspell.

### <a id="spell-COMPOUNDMIN" class="section-title" href="#spell-COMPOUNDMIN">Note:</a>
The minimal character length of a word used for compounding is specified with
COMPOUNDMIN.  Example:
COMPOUNDMIN 5 ~

When omitted there is no minimal length.  Obviously you could just leave out
the compound flag from short words instead, this feature is present for
compatibility with Myspell.

### <a id="spell-COMPOUNDWORDMAX" class="section-title" href="#spell-COMPOUNDWORDMAX">Note:</a>
The maximum number of words that can be concatenated into a compound word is
specified with COMPOUNDWORDMAX.  Example:
COMPOUNDWORDMAX 3 ~

When omitted there is no maximum.  It applies to all compound words.

To set a limit for words with specific flags make sure the items in
COMPOUNDRULE where they appear don't allow too many words.

### <a id="spell-COMPOUNDSYLMAX" class="section-title" href="#spell-COMPOUNDSYLMAX">Note:</a>
The maximum number of syllables that a compound word may contain is specified
with COMPOUNDSYLMAX.  Example:
COMPOUNDSYLMAX 6 ~

This has no effect if there is no SYLLABLE item.  Without COMPOUNDSYLMAX there
is no limit on the number of syllables.

If both COMPOUNDWORDMAX and COMPOUNDSYLMAX are defined, a compound word is
accepted if it fits one of the criteria, thus is either made from up to
COMPOUNDWORDMAX words or contains up to COMPOUNDSYLMAX syllables.

### <a id="spell-COMPOUNDFORBIDFLAG" class="section-title" href="#spell-COMPOUNDFORBIDFLAG">Note:</a>
The COMPOUNDFORBIDFLAG specifies a flag that can be used on an affix.  It
means that the word plus affix cannot be used in a compound word.  Example:
affix file:
COMPOUNDFLAG c ~
COMPOUNDFORBIDFLAG x ~
SFX a Y 2 ~
SFX a 0 s   . ~
SFX a 0 ize/x . ~
dictionary:
word/c ~
util/ac ~

This allows for "wordutil" and "wordutils" but not "wordutilize".
Note: this doesn't work for postponed prefixes yet.

### <a id="spell-COMPOUNDPERMITFLAG" class="section-title" href="#spell-COMPOUNDPERMITFLAG">Note:</a>
The COMPOUNDPERMITFLAG specifies a flag that can be used on an affix.  It
means that the word plus affix can also be used in a compound word in a way
where the affix ends up halfway through the word.  Without this flag that is
not allowed.
Note: this doesn't work for postponed prefixes yet.

### <a id="spell-COMPOUNDROOT" class="section-title" href="#spell-COMPOUNDROOT">Note:</a>
The COMPOUNDROOT flag is used for words in the dictionary that are already a
compound.  This means it counts for two words when checking the compounding
rules.  Can also be used for an affix to count the affix as a compounding
word.

### <a id="spell-CHECKCOMPOUNDPATTERN" class="section-title" href="#spell-CHECKCOMPOUNDPATTERN">Note:</a>
CHECKCOMPOUNDPATTERN is used to define patterns that, when matching at the
position where two words are compounded together forbids the compound.
For example:
CHECKCOMPOUNDPATTERN o e ~

This forbids compounding if the first word ends in "o" and the second word
starts with "e".

The arguments must be plain text, no patterns are actually supported, despite
the item name.  Case is always ignored.

The Hunspell feature to use three arguments and flags is not supported.

### <a id="spell-NOCOMPOUNDSUGS" class="section-title" href="#spell-NOCOMPOUNDSUGS">Note:</a>
This item indicates that using compounding to make suggestions is not a good
idea.  Use this when compounding is used with very short or one-character
words.  E.g. to make numbers out of digits.  Without this flag creating
suggestions would spend most time trying all kind of weird compound words.

NOCOMPOUNDSUGS ~

### <a id="spell-SYLLABLE" class="section-title" href="#spell-SYLLABLE">Note:</a>
The SYLLABLE item defines characters or character sequences that are used to
count the number of syllables in a word.  Example:
SYLLABLE aáeéiíoóöõuúüûy/aa/au/ea/ee/ei/ie/oa/oe/oo/ou/uu/ui ~

Before the first slash is the set of characters that are counted for one
syllable, also when repeated and mixed, until the next character that is not
in this set.  After the slash come sequences of characters that are counted
for one syllable.  These are preferred over using characters from the set.
With the example "ideeen" has three syllables, counted by "i", "ee" and "e".

Only case-folded letters need to be included.

Another way to restrict compounding was mentioned above: Adding the
[[[spell-COMPOUNDFORBIDFLAG](/undefined#spell-COMPOUNDFORBIDFLAG)](/undefined)](/undefined) flag to an affix causes all words that are made
with that affix to not be used for compounding.


### <a id="spell-NOBREAK" class="section-title" href="#spell-NOBREAK">Unlimited Compounding</a>

For some languages, such as Thai, there is no space in between words.  This
looks like all words are compounded.  To specify this use the NOBREAK item in
the affix file, without arguments:
NOBREAK ~

Vim will try to figure out where one word ends and a next starts.  When there
are spelling mistakes this may not be quite right.


### <a id="spell-COMMON" class="section-title" href="#spell-COMMON">Note:</a>
Common words can be specified with the COMMON item.  This will give better
suggestions when editing a short file.  Example:

COMMON  the of to and a in is it you that he she was for on are ~

The words must be separated by white space, up to 25 per line.
When multiple regions are specified in a ":mkspell" command the common words
for all regions are combined and used for all regions.

### <a id="spell-NOSPLITSUGS" class="section-title" href="#spell-NOSPLITSUGS">Note:</a>
This item indicates that splitting a word to make suggestions is not a good
idea.  Split-word suggestions will appear only when there are few similar
words.

NOSPLITSUGS ~

### <a id="spell-NOSUGGEST" class="section-title" href="#spell-NOSUGGEST">Note:</a>
The flag specified with NOSUGGEST can be used for words that will not be
suggested.  Can be used for obscene words.

NOSUGGEST % ~


### <a id="spell-REP" class="section-title" href="#spell-REP">REPLACEMENTS</a>

In the affix file REP items can be used to define common mistakes.  This is
used to make spelling suggestions.  The items define the "from" text and the
"to" replacement.  Example:

REP 4 ~
REP f ph ~
REP ph f ~
REP k ch ~
REP ch k ~

The first line specifies the number of REP lines following.  Vim ignores the
number, but it must be there (for compatibility with Myspell).

Don't include simple one-character replacements or swaps.  Vim will try these
anyway.  You can include whole words if you want to, but you might want to use
the "file:" item in 'spellsuggest' instead.

You can include a space by using an underscore:

REP the_the the ~


### <a id="spell-MAP E783" class="section-title" href="#spell-MAP E783">Similar Characters</a>

In the affix file MAP items can be used to define letters that are very much
alike.  This is mostly used for a letter with different accents.  This is used
to prefer suggestions with these letters substituted.  Example:

MAP 2 ~
MAP eéëêè ~
MAP uüùúû ~

The first line specifies the number of MAP lines following.  Vim ignores the
number, but the line must be there.

Each letter must appear in only one of the MAP items.  It's a bit more
efficient if the first letter is ASCII or at least one without accents.


### <a id="spell-NOSUGFILE" class="section-title" href="#spell-NOSUGFILE">.Sug File</a>

When soundfolding is specified in the affix file then ":mkspell" will normally
produce a .sug file next to the .spl file.  This file is used to find
suggestions by their sound-a-like form quickly.  At the cost of a lot of
memory (the amount depends on the number of words, |:mkspell| will display an
estimate when it's done).

To avoid producing a .sug file use this item in the affix file:

NOSUGFILE ~

Users can simply omit the .sug file if they don't want to use it.


### <a id="spell-SAL" class="section-title" href="#spell-SAL">SOUND-A-LIKE</a>

In the affix file SAL items can be used to define the sounds-a-like mechanism
to be used.  The main items define the "from" text and the "to" replacement.
Simplistic example:

SAL CIA			 X ~
SAL CH			 X ~
SAL C			 K ~
SAL K			 K ~

There are a few rules and this can become quite complicated.  An explanation
how it works can be found in the Aspell manual:
http://aspell.net/man-html/Phonetic-Code.html.

There are a few special items:

SAL followup		true ~
SAL collapse_result	true ~
SAL remove_accents	true ~

"1" has the same meaning as "true".  Any other value means "false".


### <a id="spell-SOFOFROM spell-SOFOTO" class="section-title" href="#spell-SOFOFROM spell-SOFOTO">Simple Soundfolding</a>

The SAL mechanism is complex and slow.  A simpler mechanism is mapping all
characters to another character, mapping similar sounding characters to the
same character.  At the same time this does case folding.  You can not have
both SAL items and simple soundfolding.

There are two items required: one to specify the characters that are mapped
and one that specifies the characters they are mapped to.  They must have
exactly the same number of characters.  Example:

SOFOFROM abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ~
SOFOTO   ebctefghejklnnepkrstevvkesebctefghejklnnepkrstevvkes ~

In the example all vowels are mapped to the same character 'e'.  Another
method would be to leave out all vowels.  Some characters that sound nearly
the same and are often mixed up, such as 'm' and 'n', are mapped to the same
character.  Don't do this too much, all words will start looking alike.

Characters that do not appear in SOFOFROM will be left out, except that all
white space is replaced by one space.  Sequences of the same character in
SOFOFROM are replaced by one.

You can use the |soundfold()| function to try out the results.  Or set the
'verbose' option to see the score in the output of the |z=| command.


### <a id="spell-affix-not-supported" class="section-title" href="#spell-affix-not-supported">Unsupported Items</a>

These items appear in the affix file of other spell checkers.  In Vim they are
ignored, not supported or defined in another way.

ACCENT		(Hunspell)				*spell-ACCENT*
Use MAP instead. [[spell-MAP](/undefined#spell-MAP)](/undefined)

BREAK		(Hunspell)				*spell-BREAK*
Define break points.  Unclear how it works exactly.
Not supported.

CHECKCOMPOUNDCASE  (Hunspell)			*spell-CHECKCOMPOUNDCASE*
Disallow uppercase letters at compound word boundaries.
Not supported.

CHECKCOMPOUNDDUP  (Hunspell)			*spell-CHECKCOMPOUNDDUP*
Disallow using the same word twice in a compound.  Not
supported.

CHECKCOMPOUNDREP  (Hunspell)			*spell-CHECKCOMPOUNDREP*
Something about using REP items and compound words.  Not
supported.

CHECKCOMPOUNDTRIPLE  (Hunspell)			*spell-CHECKCOMPOUNDTRIPLE*
Forbid three identical characters when compounding.  Not
supported.

CHECKSHARPS  (Hunspell)				*spell-CHECKSHARPS*
SS letter pair in uppercased (German) words may be upper case
sharp s (ß). Not supported.

COMPLEXPREFIXES  (Hunspell)				*spell-COMPLEXPREFIXES*
Enables using two prefixes.  Not supported.

### <a id="spell-COMPOUND" class="section-title" href="#spell-COMPOUND">COMPOUND	(Hunspell)</a>
This is one line with the count of COMPOUND items, followed by
that many COMPOUND lines with a pattern.
Remove the first line with the count and rename the other
items to COMPOUNDRULE [[[[[[spell-COMPOUNDRULE](/undefined#spell-COMPOUNDRULE)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)

### <a id="spell-COMPOUNDFIRST" class="section-title" href="#spell-COMPOUNDFIRST">COMPOUNDFIRST	(Hunspell)</a>
Use COMPOUNDRULE instead. [[[[[[spell-COMPOUNDRULE](/undefined#spell-COMPOUNDRULE)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)

### <a id="spell-COMPOUNDBEGIN" class="section-title" href="#spell-COMPOUNDBEGIN">COMPOUNDBEGIN	(Hunspell)</a>
Words signed with COMPOUNDBEGIN may be first elements in
compound words.
Use COMPOUNDRULE instead. [[[[[[spell-COMPOUNDRULE](/undefined#spell-COMPOUNDRULE)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)

### <a id="spell-COMPOUNDLAST" class="section-title" href="#spell-COMPOUNDLAST">COMPOUNDLAST	(Hunspell)</a>
Words signed with COMPOUNDLAST may be last elements in
compound words.
Use COMPOUNDRULE instead. [[[[[[spell-COMPOUNDRULE](/undefined#spell-COMPOUNDRULE)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)

### <a id="spell-COMPOUNDEND" class="section-title" href="#spell-COMPOUNDEND">COMPOUNDEND	(Hunspell)</a>
Probably the same as COMPOUNDLAST

### <a id="spell-COMPOUNDMIDDLE" class="section-title" href="#spell-COMPOUNDMIDDLE">COMPOUNDMIDDLE	(Hunspell)</a>
Words signed with COMPOUNDMIDDLE may be middle elements in
compound words.
Use COMPOUNDRULE instead. [[[[[[spell-COMPOUNDRULE](/undefined#spell-COMPOUNDRULE)](/undefined)](/undefined)](/undefined)](/undefined)](/undefined)

### <a id="spell-COMPOUNDRULES" class="section-title" href="#spell-COMPOUNDRULES">COMPOUNDRULES	(Hunspell)</a>
Number of COMPOUNDRULE lines following.  Ignored, but the
argument must be a number.

COMPOUNDSYLLABLE  (Hunspell)			*spell-COMPOUNDSYLLABLE*
Use SYLLABLE and COMPOUNDSYLMAX instead. [[spell-SYLLABLE](/undefined#spell-SYLLABLE)](/undefined)
[[spell-COMPOUNDSYLMAX](/undefined#spell-COMPOUNDSYLMAX)](/undefined)

KEY		(Hunspell)				*spell-KEY*
Define characters that are close together on the keyboard.
Used to give better suggestions.  Not supported.

LANG		(Hunspell)				*spell-LANG*
This specifies language-specific behavior.  This actually
moves part of the language knowledge into the program,
therefore Vim does not support it.  Each language property
must be specified separately.

### <a id="spell-LEMMA_PRESENT" class="section-title" href="#spell-LEMMA_PRESENT">LEMMA_PRESENT	(Hunspell)</a>
Only needed for morphological analysis.

### <a id="spell-MAXNGRAMSUGS" class="section-title" href="#spell-MAXNGRAMSUGS">MAXNGRAMSUGS	(Hunspell)</a>
Set number of n-gram suggestions.  Not supported.

### <a id="spell-PSEUDOROOT" class="section-title" href="#spell-PSEUDOROOT">PSEUDOROOT	(Hunspell)</a>
Use NEEDAFFIX instead. [[[spell-NEEDAFFIX](/undefined#spell-NEEDAFFIX)](/undefined)](/undefined)

### <a id="spell-SUGSWITHDOTS" class="section-title" href="#spell-SUGSWITHDOTS">SUGSWITHDOTS	(Hunspell)</a>
Adds dots to suggestions.  Vim doesn't need this.

### <a id="spell-SYLLABLENUM" class="section-title" href="#spell-SYLLABLENUM">SYLLABLENUM	(Hunspell)</a>
Not supported.

TRY		(Myspell, Hunspell, others)		*spell-TRY*
Vim does not use the TRY item, it is ignored.  For making
suggestions the actual characters in the words are used, that
is much more efficient.

### <a id="spell-WORDCHARS" class="section-title" href="#spell-WORDCHARS">WORDCHARS	(Hunspell)</a>
Used to recognize words.  Vim doesn't need it, because there
is no need to separate words before checking them (using a
trie instead of a hashtable).


## <a id="develop-spell" class="section-title" href="#develop-spell">5. Spell Checker Design</a> 

When spell checking was going to be added to Vim a survey was done over the
available spell checking libraries and programs.  Unfortunately, the result
was that none of them provided sufficient capabilities to be used as the spell
checking engine in Vim, for various reasons:

- Missing support for multi-byte encodings.  At least UTF-8 must be supported,
so that more than one language can be used in the same file.
Doing on-the-fly conversion is not always possible (would require iconv
support).
- For the programs and libraries: Using them as-is would require installing
them separately from Vim.  That's mostly not impossible, but a drawback.
- Performance: A few tests showed that it's possible to check spelling on the
fly (while redrawing), just like syntax highlighting.  But the mechanisms
used by other code are much slower.  Myspell uses a hashtable, for example.
The affix compression that most spell checkers use makes it slower too.
- For using an external program like aspell a communication mechanism would
have to be setup.  That's complicated to do in a portable way (Unix-only
would be relatively simple, but that's not good enough).  And performance
will become a problem (lots of process switching involved).
- Missing support for words with non-word characters, such as "Etten-Leur" and
"et al.", would require marking the pieces of them OK, lowering the
reliability.
- Missing support for regions or dialects.  Makes it difficult to accept
all English words and highlight non-Canadian words differently.
- Missing support for rare words.  Many words are correct but hardly ever used
and could be a misspelled often-used word.
- For making suggestions the speed is less important and requiring to install
another program or library would be acceptable.  But the word lists probably
differ, the suggestions may be wrong words.


### <a id="develop-spell-suggestions" class="section-title" href="#develop-spell-suggestions">Spelling suggestions</a>

For making suggestions there are two basic mechanisms:
1. Try changing the bad word a little bit and check for a match with a good
word.  Or go through the list of good words, change them a little bit and
check for a match with the bad word.  The changes are deleting a character,
inserting a character, swapping two characters, etc.
2. Perform soundfolding on both the bad word and the good words and then find
matches, possibly with a few changes like with the first mechanism.

The first is good for finding typing mistakes.  After experimenting with
hashtables and looking at solutions from other spell checkers the conclusion
was that a trie (a kind of tree structure) is ideal for this.  Both for
reducing memory use and being able to try sensible changes.  For example, when
inserting a character only characters that lead to good words need to be
tried.  Other mechanisms (with hashtables) need to try all possible letters at
every position in the word.  Also, a hashtable has the requirement that word
boundaries are identified separately, while a trie does not require this.
That makes the mechanism a lot simpler.

Soundfolding is useful when someone knows how the words sounds but doesn't
know how it is spelled.  For example, the word "dictionary" might be written
as "daktonerie".  The number of changes that the first method would need to
try is very big, it's hard to find the good word that way.  After soundfolding
the words become "tktnr" and "tkxnry", these differ by only two letters.

To find words by their soundfolded equivalent (soundalike word) we need a list
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
the bad word is quite different from the good word.

The choice made is to use the second mechanism and use a separate file.  This
way a user with sufficient memory can get very good suggestions while a user
who is short of memory or just wants the spell checking and no suggestions
doesn't use so much memory.


Word frequency

For sorting suggestions it helps to know which words are common.  In theory we
could store a word frequency with the word in the dictionary.  However, this
requires storing a count per word.  That degrades word tree compression a lot.
And maintaining the word frequency for all languages will be a heavy task.
Also, it would be nice to prefer words that are already in the text.  This way
the words that appear in the specific text are preferred for suggestions.

What has been implemented is to count words that have been seen during
displaying.  A hashtable is used to quickly find the word count.  The count is
initialized from words listed in COMMON items in the affix file, so that it
also works when starting a new file.

This isn't ideal, because the longer Vim is running the higher the counts
become.  But in practice it is a noticeable improvement over not using the word
count.

vim:tw=78:sw=4:ts=8:noet:ft=help:norl:

