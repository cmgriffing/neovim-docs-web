---
title:  Mlang
layout: ../../layouts/MainLayout.astro
---

  <a name="mlang.txt"></a><a name="multilang"></a><h1> Mlang</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/mlang.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Multi-language features <a name="multi-lang"></a><code class="help-tag">multi-lang</code></div>
<div class="old-help-para">This is about using messages and menus in various languages.  For editing
multibyte text see <a href="/neovim-docs-web/en/mbyte#multibyte">multibyte</a>.</div>
<div class="old-help-para">The basics are explained in the user manual: <a href="/neovim-docs-web/en/usr_45#usr_45.txt">usr_45.txt</a>.</div>
<div class="old-help-para"><h2 class="help-heading">1. Messages<span class="help-heading-tags">						<a name="multilang-messages"></a><span class="help-tag">multilang-messages</span></span></h2></div>
<div class="old-help-para">Vim picks up the locale from the environment.  In most cases this means Vim
will use the language that you prefer, unless it's not available.</div>
<div class="old-help-para">To see a list of supported locale names on your system, look in one of these
directories (for Unix):
<div class="help-column_heading">	/usr/lib/locale</div><div class="help-column_heading">	/usr/share/locale</div>Unfortunately, upper/lowercase differences matter.  Also watch out for the
use of "-" and "_".</div>
<div class="old-help-para">					    <a name="%3Alan"></a><code class="help-tag-right">:lan</code> <a name="%3Alang"></a><code class="help-tag">:lang</code> <a name="%3Alanguage"></a><code class="help-tag">:language</code> <a name="E197"></a><code class="help-tag">E197</code>
:lan[guage]
:lan[guage] mes[sages]
:lan[guage] cty[pe]
:lan[guage] tim[e]
:lan[guage] col[late]
			Print the current language (aka locale).
			With the "messages" argument the language used for
			messages is printed.  Technical: LC_MESSAGES.
			With the "ctype" argument the language used for
			character encoding is printed.  Technical: LC_CTYPE.
			With the "time" argument the language used for
			strftime() is printed.  Technical: LC_TIME.
			With the "collate" argument the language used for
			collation order is printed.  Technical: LC_COLLATE.
			Without argument all parts of the locale are printed
			(this is system dependent).
			The current language can also be obtained with the
			<a href="/neovim-docs-web/en/eval#v%3Alang">v:lang</a>, <a href="/neovim-docs-web/en/eval#v%3Actype">v:ctype</a>, <a href="/neovim-docs-web/en/eval#v%3Acollate">v:collate</a> and <a href="/neovim-docs-web/en/eval#v%3Alc_time">v:lc_time</a>
			variables.</div>
<div class="old-help-para">:lan[guage] <code>{name}</code>
:lan[guage] mes[sages] <code>{name}</code>
:lan[guage] cty[pe] <code>{name}</code>
:lan[guage] tim[e] <code>{name}</code>
:lan[guage] col[late] <code>{name}</code>
			Set the current language (aka locale) to <code>{name}</code>.
			The locale <code>{name}</code> must be a valid locale on your
			system.  Some systems accept aliases like "en" or
			"en_US", but some only accept the full specification
			like "en_US.ISO_8859-1".  On Unix systems you can use
			this command to see what locales are supported:<pre>:!locale -a</pre></div>
<div class="old-help-para">			With the "messages" argument the language used for
			messages is set.  This can be different when you want,
			for example, English messages while editing Japanese
			text.  This sets $LC_MESSAGES.
			With the "ctype" argument the language used for
			character encoding is set.  This affects the libraries
			that Vim was linked with.  It's unusual to set this to
			a different value from <a href="/neovim-docs-web/en/options#'encoding'">'encoding'</a> or "C".  This sets
			$LC_CTYPE.
			With the "time" argument the language used for time
			and date messages is set.  This affects strftime().
			This sets $LC_TIME.
			With the "collate" argument the language used for the
			collation order is set.  This affects sorting of
			characters. This sets $LC_COLLATE.
			Without an argument all are set, and additionally
			$LANG is set.
			The LC_NUMERIC value will always be set to "C" so
			that floating point numbers use '.' as the decimal
			point.  This will make a difference for items that
			depend on the language (some messages, time and date
			format).
			Not fully supported on all systems.
			If this fails there will be an error message.  If it
			succeeds there is no message.  Example:<pre>:language
Current language: C
:language de_DE.ISO_8859-1
:language mes
Current messages language: de_DE.ISO_8859-1
:lang mes en</pre></div>
<div class="old-help-para">Message files (vim.mo) have to be placed in "$VIMRUNTIME/lang/xx/LC_MESSAGES",
where "xx" is the abbreviation of the language (mostly two letters). If you
write your own translations you need to generate the .po file and convert it
to a .mo file.</div>
<div class="old-help-para">To overrule the automatic choice of the language, set the $LANG variable to
the language of your choice.  use "en" to disable translations.<pre>:let $LANG = 'ja'</pre>
(text for Windows by Muraoka Taro)</div>
<div class="old-help-para"><h2 class="help-heading">2. Menus<span class="help-heading-tags">						<a name="multilang-menus"></a><span class="help-tag">multilang-menus</span></span></h2></div>
<div class="old-help-para">See <a href="/neovim-docs-web/en/usr_45#45.2">45.2</a> for the basics, esp. using <a href="/neovim-docs-web/en/options#'langmenu'">'langmenu'</a>.</div>
<div class="old-help-para">Note that if changes have been made to the menus after the translation was
done, some of the menus may be shown in English.  Please try contacting the
maintainer of the translation and ask him to update it.  You can find the
name and e-mail address of the translator in
"$VIMRUNTIME/lang/menu_&lt;lang&gt;.vim".</div>
<div class="old-help-para">To set the font to use for the menus, use the <a href="/neovim-docs-web/en/syntax#%3Ahighlight">:highlight</a> command.  Example:<pre>:highlight Menu font=k12,r12</pre>
<a name="_alias-locale-names"></a><h3 class="help-heading">ALIAS LOCALE NAMES</h3></div>
<div class="old-help-para">Unfortunately, the locale names are different on various systems, even though
they are for the same language and encoding.  If you do not get the menu
translations you expected, check the output of this command:<pre>echo v:lang</pre>
Now check the "$VIMRUNTIME/lang" directory for menu translation files that use
a similar language.  A difference in a "-" being a "_" already causes a file
not to be found!  Another common difference to watch out for is "iso8859-1"
versus "iso_8859-1".  Fortunately Vim makes all names lowercase, thus you
don't have to worry about case differences.  Spaces are changed to
underscores, to avoid having to escape them.</div>
<div class="old-help-para">If you find a menu translation file for your language with a different name,
create a file in your own runtime directory to load that one.  The name of
that file could be:<pre>~/.config/nvim/lang/menu_&lt;v:lang&gt;.vim</pre>
Check the <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a> option for directories which are searched.  In that
file put a command to load the menu file with the other name:<pre>runtime lang/menu_&lt;other_lang&gt;.vim</pre>
<a name="_translating-menus"></a><h3 class="help-heading">TRANSLATING MENUS</h3></div>
<div class="old-help-para">If you want to do your own translations, you can use the <a href="/neovim-docs-web/en/mlang#%3Amenutrans">:menutrans</a> command,
explained below.  It is recommended to put the translations for one language
in a Vim script.  For a language that has no translation yet, please consider
becoming the maintainer and make your translations available to all Vim users.
Send an e-mail to the Vim maintainer &lt;maintainer@vim.org&gt;.</div>
<div class="old-help-para">					<a name="%3Amenut"></a><code class="help-tag-right">:menut</code> <a name="%3Amenutrans"></a><code class="help-tag">:menutrans</code> <a name="%3Amenutranslate"></a><code class="help-tag">:menutranslate</code>
:menut[ranslate] clear
			Clear all menu translations.</div>
<div class="old-help-para">:menut[ranslate] <code>{english}</code> <code>{mylang}</code>
			Translate menu name <code>{english}</code> to <code>{mylang}</code>.  All
			special characters like "&amp;" and "&lt;Tab&gt;" need to be
			included.  Spaces and dots need to be escaped with a
			backslash, just like in other <a href="/neovim-docs-web/en/gui#%3Amenu">:menu</a> commands.
			Case in <code>{english}</code> is ignored.</div>
<div class="old-help-para">See the $VIMRUNTIME/lang directory for examples.</div>
<div class="old-help-para">To try out your translations you first have to remove all menus.  This is how
you can do it without restarting Vim:<pre>:source $VIMRUNTIME/delmenu.vim
:source &lt;your-new-menu-file&gt;
:source $VIMRUNTIME/menu.vim</pre>
Each part of a menu path is translated separately.  The result is that when
"Help" is translated to "Hilfe" and "Overview" to "Überblick" then
"Help.Overview" will be translated to "Hilfe.Überblick".</div>
<div class="old-help-para"><h2 class="help-heading">3. Scripts<span class="help-heading-tags">						<a name="multilang-scripts"></a><span class="help-tag">multilang-scripts</span></span></h2></div>
<div class="old-help-para">In Vim scripts you can use the <a href="/neovim-docs-web/en/eval#v%3Alang">v:lang</a> variable to get the current language
(locale).  The default value is "C" or comes from the $LANG environment
variable.</div>
<div class="old-help-para">The following example shows how this variable is used in a simple way, to make
a message adapt to language preferences of the user,<pre>:if v:lang =~ "de_DE"
:  echo "Guten Morgen"
:else
:  echo "Good morning"
:endif</pre></div>

  
  