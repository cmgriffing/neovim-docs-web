---
title:  Pi_spec
layout: ../../layouts/MainLayout.astro
---

  <a name="pi_spec.txt"></a><a name="spec-how-to-use-it"></a><h1> Pi_spec</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/pi_spec.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para"><div class="help-column_heading">by Gustavo Niemeyer</div></div>
<div class="old-help-para">This is a filetype plugin to work with rpm spec files.</div>
<div class="old-help-para">Currently, this Vim plugin allows you to easily update the %changelog
section in RPM spec files.  It will even create a section for you if it
doesn't exist yet.  If you've already inserted an entry today, it will
give you the opportunity to just add a new item in today's entry.  If you
don't provide a format string (<a href="/neovim-docs-web/en/pi_spec#spec_chglog_format">spec_chglog_format</a>), it'll ask you an
email address and build a format string by itself.</div>
<div class="old-help-para">1. How to use it	<a href="/neovim-docs-web/en/pi_spec#spec-how-to-use-it">spec-how-to-use-it</a>
2. Customizing		<a href="/neovim-docs-web/en/pi_spec#spec-customizing">spec-customizing</a></div>
<div class="old-help-para"><h2 class="help-heading">1. How to use it</h2></div>
<div class="old-help-para">The spec_chglog plugin provides a map like the following:</div>
<div class="old-help-para">	:map <code>&lt;buffer&gt;</code> <code>&lt;LocalLeader&gt;</code>c <code>&lt;Plug&gt;</code>SpecChangelog</div>
<div class="old-help-para">It means that you may run the plugin inside a spec file by pressing
your maplocalleader key (default is '\') plus 'c'.  If you do not have
<a href="/neovim-docs-web/en/pi_spec#spec_chglog_format">spec_chglog_format</a> set, the plugin will ask you for an email address
to use in this edit session.</div>
<div class="old-help-para">Every time you run the plugin, it will check to see if the last entry in the
changelog has been written today and by you.  If the entry matches, it will
just insert a new changelog item, otherwise it will create a new changelog
entry.  If you are running with <a href="/neovim-docs-web/en/pi_spec#spec_chglog_release_info">spec_chglog_release_info</a> enabled, it will
also check if the name, version and release matches.  The plugin is smart
enough to ask you if it should update the package release, if you have not
done so.</div>
<div class="old-help-para">Setting a map					<a name="spec-setting-a-map"></a><code class="help-tag-right">spec-setting-a-map</code>
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+pi_spec.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/pi_spec.html%0D%0DContext%3A%0D%0D%60%60%60%0Ddone%20so.%0A%0ASetting%20a%20map%09%09%09%09%09%2Aspec-setting-a-map%2A%0A-------------%0A%0AAs%20you%20should%20know%2C%20you%20can%20easily%20set%20a%20map%20to%20access%20any%20Vim%20command%20(or%0Aanything%2C%20for%20that%20matter).%20%20If%20you%20don't%20like%20the%20default%20map%20of%0A%3CLocalLeader%3Ec%2C%20you%20may%20just%20set%20up%20your%20own%20key.%20%20The%20following%20line%0D%60%60%60">-------------</a></div>
<div class="old-help-para">As you should know, you can easily set a map to access any Vim command (or
anything, for that matter).  If you don't like the default map of
<code>&lt;LocalLeader&gt;</code>c, you may just set up your own key.  The following line
shows you how you could do this in your vimrc file, mapping the plugin to
the <code>&lt;F5&gt;</code> key:</div>
<div class="old-help-para">	au FileType spec map <code>&lt;buffer&gt;</code> <code>&lt;F5&gt;</code> <code>&lt;Plug&gt;</code>SpecChangelog</div>
<div class="old-help-para">Note: the plugin will respect your desire to change the default mapping
      and won't set it.</div>
<div class="old-help-para">This command will add a map only in the spec file buffers.</div>
<div class="old-help-para"><h2 class="help-heading">2. Customizing<span class="help-heading-tags">					<a name="spec-customizing"></a><span class="help-tag">spec-customizing</span></span></h2></div>
<div class="old-help-para">The format string				<a name="spec_chglog_format"></a><code class="help-tag-right">spec_chglog_format</code>
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+pi_spec.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/pi_spec.html%0D%0DContext%3A%0D%0D%60%60%60%0D2.%20Customizing%09%09%09%09%09%2Aspec-customizing%2A%0A%0AThe%20format%20string%09%09%09%09%2Aspec_chglog_format%2A%0A-----------------%0A%0AYou%20can%20easily%20customize%20how%20your%20spec%20file%20entry%20will%20look%20like.%20%20To%20do%0Athis%20just%20set%20the%20variable%20%22spec_chglog_format%22%20in%20your%20vimrc%20file%20like%0Athis%3A%20%3E%0D%60%60%60">-----------------</a></div>
<div class="old-help-para">You can easily customize how your spec file entry will look like.  To do
this just set the variable "spec_chglog_format" in your vimrc file like
this:<pre>let spec_chglog_format = "%a %b %d %Y My Name &lt;my@email.com&gt;"</pre>
Note that "%a %b %d %Y" is the most used time format.  If you don't provide
a format string, when you run the SpecChangelog command for the first
time, it will ask you an email address and build the <a href="/neovim-docs-web/en/pi_spec#spec_chglog_format">spec_chglog_format</a>
variable for you.  This way, you will only need to provide your email
address once.</div>
<div class="old-help-para">To discover which format options you can use, take a look at the strftime()
function man page.</div>
<div class="old-help-para">Where to insert new items			<a name="spec_chglog_prepend"></a><code class="help-tag-right">spec_chglog_prepend</code>
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+pi_spec.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/pi_spec.html%0D%0DContext%3A%0D%0D%60%60%60%0Dfunction%20man%20page.%0A%0AWhere%20to%20insert%20new%20items%09%09%09%2Aspec_chglog_prepend%2A%0A-------------------------%0A%0AThe%20plugin%20will%20usually%20insert%20new%20%25changelog%20entry%20items%20(note%20that%20it's%0Anot%20the%20entry%20itself)%20after%20the%20existing%20ones.%20%20If%20you%20set%20the%0Aspec_chglog_prepend%20variable%20%3E%0D%60%60%60">-------------------------</a></div>
<div class="old-help-para">The plugin will usually insert new %changelog entry items (note that it's
not the entry itself) after the existing ones.  If you set the
spec_chglog_prepend variable<pre>let spec_chglog_prepend = 1</pre>
it will insert new items before the existing ones.</div>
<div class="old-help-para">Inserting release info				<a name="spec_chglog_release_info"></a><code class="help-tag-right">spec_chglog_release_info</code>
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+pi_spec.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/pi_spec.html%0D%0DContext%3A%0D%0D%60%60%60%0Dit%20will%20insert%20new%20items%20before%20the%20existing%20ones.%0A%0AInserting%20release%20info%09%09%09%09%2Aspec_chglog_release_info%2A%0A----------------------%0A%0AIf%20you%20want%2C%20the%20plugin%20may%20automatically%20insert%20release%20information%0Aon%20each%20changelog%20entry.%20%20One%20advantage%20of%20turning%20this%20feature%20on%20is%0Athat%20it%20may%20control%20if%20the%20release%20has%20been%20updated%20after%20the%20last%0D%60%60%60">----------------------</a></div>
<div class="old-help-para">If you want, the plugin may automatically insert release information
on each changelog entry.  One advantage of turning this feature on is
that it may control if the release has been updated after the last
change in the package or not.  If you have not updated the package
version or release, it will ask you if it should update the package
release for you.  To turn this feature on, just insert the following
code in your vimrc:<pre>let spec_chglog_release_info = 1</pre>
Then, the first item in your changelog entry will be something like:<pre>+ name-1.0-1cl</pre>
If you don't like the release updating feature and don't want to answer
"No" each time it detects an old release, you may disable it with<pre>let spec_chglog_never_increase_release = 1</pre>
Good luck!!</div>

  
  