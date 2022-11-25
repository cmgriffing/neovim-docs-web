---
title:  Pi_tutor
layout: ../../layouts/MainLayout.astro
---

  <a name="pi_tutor.txt"></a><a name="vim-tutor-mode"></a><h1> Pi_tutor</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/pi_tutor.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">vim-tutor-mode provides a system to follow and create interactive tutorials
for vim and third party plugins. It replaces the venerable <code>vimtutor</code> system.</div>
<div class="old-help-para"><h2 class="help-heading">1. Usage<span class="help-heading-tags">                                                      <a name="vim-tutor-usage"></a><span class="help-tag">vim-tutor-usage</span></span></h2></div>
<div class="old-help-para">vim-tutor-mode tutorials are hypertext documents, they have rich text and
contain links. To stand out from the rest of the text, links are underlined.
You can follow them by placing the cursor over them and pressing <code>&lt;Enter&gt;</code>, or
by double-clicking them.</div>
<div class="old-help-para">1.1 Commands
<h3 class="help-heading"><span class="help-heading-tags">								      <a name="%3ATutor"></a><span class="help-tag">:Tutor</span></span></h3>:Tutor <code>{tutorial}</code>	Opens a tutorial. Command-line completion for
			<code>{tutorial}</code> is provided, the candidates are a list of
			'.tutor' files found in the 'tutor/'  folder in
			the <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>. Tutorials prefixed with 'vim-' will
			always be shown first.</div>
<div class="old-help-para">			If no <code>{tutorial}</code> is provided, the command starts the
			'vim-01-beginner' tutorial, which is equivalent to
			Vim's <code>vimtutor</code>.</div>
<div class="old-help-para"><h2 class="help-heading">2. Creating tutorials<span class="help-heading-tags">                                        <a name="vim-tutor-create"></a><span class="help-tag">vim-tutor-create</span></span></h2></div>
<div class="old-help-para">Writing vim-tutor-mode tutorials is easy. For an overview of the format used,
please consult the 'tutor.tutor' file:<pre>:Tutor tutor</pre></div>
<div class="old-help-para">New tutorials must be placed in the 'tutor/' folder in the <a href="/neovim-docs-web/en/options#'runtimepath'">'runtimepath'</a>
to be detected by the :Tutor command.</div>
<div class="old-help-para">It is recommended to use a less formal style when writing tutorials than in
regular documentation (unless the content requires it).</div>
<div class="old-help-para"><a name="_-3.-contributing"></a><h2 class="help-heading">3. Contributing</h2></div>
<div class="old-help-para">Development of the plugin is done over at github [1].  Feel free to report
issues and make suggestions.</div>
<div class="old-help-para">[1]: <a href="https://github.com/fmoralesc/vim-tutor-mode">https://github.com/fmoralesc/vim-tutor-mode</a></div>
<div class="old-help-para">" vim: set ft=help :</div>

  
  