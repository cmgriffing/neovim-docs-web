---
title:  Ft_raku
layout: ../../layouts/MainLayout.astro
---

  <a name="ft_raku.txt"></a><a name="vim-raku"></a><h1> Ft_raku</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/ft_raku.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Vim-raku provides syntax highlighting, indentation, and other support for
editing Raku programs.</div>
<div class="old-help-para">1. Using Unicode in your Raku files	<a href="ft_raku.html#raku-unicode">raku-unicode</a></div>
<div class="old-help-para"><h2 class="help-heading">1. Using Unicode in your Raku files<span class="help-heading-tags">                           <a name="raku-unicode"></a><span class="help-tag">raku-unicode</span></span></h2></div>
<div class="old-help-para">Defining new operators using Unicode symbols is a good way to make your
Raku program easy to read. See:
<a href="https://perl6advent.wordpress.com/2012/12/18/day-18-formulas-resistance-is-futile/">https://perl6advent.wordpress.com/2012/12/18/day-18-formulas-resistance-is-futile/</a></div>
<div class="old-help-para">While Raku does define ASCII alternatives for some common operators (see
<a href="https://docs.raku.org/language/unicode_ascii">https://docs.raku.org/language/unicode_ascii</a>), using the full range of
Unicode operators is highly desirable. Your operating system provides input
facilities, but using the features built in to Vim may be preferable.</div>
<div class="old-help-para">The natural way to produce these symbols in Vim is to use digraph shortcuts
(:help <a href="digraph.html#digraphs-use">digraphs-use</a>). Many of them are defined; type <code>:digraphs</code> to get
the list. A convenient way to read the list of digraphs is to save them in a
file. From the shell:<pre>vim +'redir &gt;/tmp/vim-digraphs-listing.txt' +digraphs +'redir END' +q</pre>
Some of them are available with standard Vim digraphs:
<div class="help-column_heading">	&lt;&lt; «    /0 ∅    !&lt; ≮</div><div class="help-column_heading">	&gt;&gt; »    Ob ∘    !&gt; ≯</div><div class="help-column_heading">	., …    00 ∞    (C ⊂</div><div class="help-column_heading">	(U ∩    -: ÷    )C ⊃</div><div class="help-column_heading">	)U ∪    (_ ⊆    &gt;= ≥</div><div class="help-column_heading">	?= ≅    )_ ⊇    =&lt; ≤</div><div class="help-column_heading">	(- ∈    ?= ≅    != ≠</div><div class="help-column_heading">	-) ∋    ?- ≃</div></div>
<div class="old-help-para">The Greek alphabet is available with '' followed by a similar Latin symbol:
p πt τX ×</div>
<div class="old-help-para">Numbers, subscripts and superscripts are available with 's' and 'S':
<div class="help-column_heading">	0s ₀    0S ⁰</div><div class="help-column_heading">	1s ₁    1S ¹</div><div class="help-column_heading">	2s ₂    9S ⁹</div></div>
<div class="old-help-para">But some don't come defined by default. Those are digraph definitions you can
add in your ~/.vimrc file.<pre>exec 'digraph \\ ' .. char2nr('∖')
exec 'digraph \&lt; ' .. char2nr('≼')
exec 'digraph \&gt; ' .. char2nr('≽')
exec 'digraph (L ' .. char2nr('⊈')
exec 'digraph )L ' .. char2nr('⊉')
exec 'digraph (/ ' .. char2nr('⊄')
exec 'digraph )/ ' .. char2nr('⊅')
exec 'digraph )/ ' .. char2nr('⊅')
exec 'digraph U+ ' .. char2nr('⊎')
exec 'digraph 0- ' .. char2nr('⊖')
" Euler's constant
exec 'digraph ne ' .. char2nr('𝑒')
" Raku's atomic operations marker
exec 'digraph @@ ' .. char2nr('⚛')</pre>
Alternatively, you can write Insert mode abbreviations that convert ASCII-
based operators into their single-character Unicode equivalent.<pre>iabbrev &lt;buffer&gt; !(&lt;) ⊄
iabbrev &lt;buffer&gt; !(&lt;=) ⊈
iabbrev &lt;buffer&gt; !(&gt;) ⊅
iabbrev &lt;buffer&gt; !(&gt;=) ⊉
iabbrev &lt;buffer&gt; !(cont) ∌
iabbrev &lt;buffer&gt; !(elem) ∉
iabbrev &lt;buffer&gt; != ≠
iabbrev &lt;buffer&gt; (&amp;) ∩
iabbrev &lt;buffer&gt; (+) ⊎
iabbrev &lt;buffer&gt; (-) ∖
iabbrev &lt;buffer&gt; (.) ⊍
iabbrev &lt;buffer&gt; (&lt;) ⊂
iabbrev &lt;buffer&gt; (&lt;+) ≼
iabbrev &lt;buffer&gt; (&lt;=) ⊆
iabbrev &lt;buffer&gt; (&gt;) ⊃
iabbrev &lt;buffer&gt; (&gt;+) ≽
iabbrev &lt;buffer&gt; (&gt;=) ⊇
iabbrev &lt;buffer&gt; (\|) ∪
iabbrev &lt;buffer&gt; (^) ⊖
iabbrev &lt;buffer&gt; (atomic) ⚛
iabbrev &lt;buffer&gt; (cont) ∋
iabbrev &lt;buffer&gt; (elem) ∈
iabbrev &lt;buffer&gt; * ×
iabbrev &lt;buffer&gt; **0 ⁰
iabbrev &lt;buffer&gt; **1 ¹
iabbrev &lt;buffer&gt; **2 ²
iabbrev &lt;buffer&gt; **3 ³
iabbrev &lt;buffer&gt; **4 ⁴
iabbrev &lt;buffer&gt; **5 ⁵
iabbrev &lt;buffer&gt; **6 ⁶
iabbrev &lt;buffer&gt; **7 ⁷
iabbrev &lt;buffer&gt; **8 ⁸
iabbrev &lt;buffer&gt; **9 ⁹
iabbrev &lt;buffer&gt; ... …
iabbrev &lt;buffer&gt; / ÷
iabbrev &lt;buffer&gt; &lt;&lt; «
iabbrev &lt;buffer&gt; &lt;&lt;[=]&lt;&lt; «=«
iabbrev &lt;buffer&gt; &lt;&lt;[=]&gt;&gt; «=»
iabbrev &lt;buffer&gt; &lt;= ≤
iabbrev &lt;buffer&gt; =~= ≅
iabbrev &lt;buffer&gt; &gt;= ≥
iabbrev &lt;buffer&gt; &gt;&gt; »
iabbrev &lt;buffer&gt; &gt;&gt;[=]&lt;&lt; »=«
iabbrev &lt;buffer&gt; &gt;&gt;[=]&gt;&gt; »=»
iabbrev &lt;buffer&gt; Inf ∞
iabbrev &lt;buffer&gt; atomic-add-fetch ⚛+=
iabbrev &lt;buffer&gt; atomic-assign ⚛=
iabbrev &lt;buffer&gt; atomic-fetch ⚛
iabbrev &lt;buffer&gt; atomic-dec-fetch --⚛
iabbrev &lt;buffer&gt; atomic-fetch-dec ⚛--
iabbrev &lt;buffer&gt; atomic-fetch-inc ⚛++
iabbrev &lt;buffer&gt; atomic-inc-fetch ++⚛
iabbrev &lt;buffer&gt; atomic-sub-fetch ⚛−=
iabbrev &lt;buffer&gt; e 𝑒
iabbrev &lt;buffer&gt; o ∘
iabbrev &lt;buffer&gt; pi π
iabbrev &lt;buffer&gt; set() ∅
iabbrev &lt;buffer&gt; tau τ</pre></div>

  
  