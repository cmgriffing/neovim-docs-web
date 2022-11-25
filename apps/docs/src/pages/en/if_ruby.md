---
title:  If_ruby
layout: ../../layouts/MainLayout.astro
---

  <a name="if_ruby.txt"></a><a name="if_ruby"></a><h1> If_ruby</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/if_ruby.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">The Ruby Interface to Vim <a name="ruby"></a><code class="help-tag">ruby</code> <a name="Ruby"></a><code class="help-tag">Ruby</code></div>
<div class="old-help-para">			<a name="E266"></a><code class="help-tag-right">E266</code> <a name="E267"></a><code class="help-tag">E267</code> <a name="E268"></a><code class="help-tag">E268</code> <a name="E269"></a><code class="help-tag">E269</code> <a name="E270"></a><code class="help-tag">E270</code> <a name="E271"></a><code class="help-tag">E271</code> <a name="E272"></a><code class="help-tag">E272</code> <a name="E273"></a><code class="help-tag">E273</code></div>
<div class="old-help-para">The home page for ruby is <a href="https://www.ruby-lang.org/">https://www.ruby-lang.org/</a>.  You can find links for
downloading Ruby there.</div>
<div class="old-help-para"><h2 class="help-heading">1. Commands<span class="help-heading-tags">						<a name="ruby-commands"></a><span class="help-tag">ruby-commands</span></span></h2></div>
<div class="old-help-para">							<a name="%3Aruby"></a><code class="help-tag-right">:ruby</code> <a name="%3Arub"></a><code class="help-tag">:rub</code>
:rub[y] <code>{cmd}</code>		Execute Ruby command <code>{cmd}</code>.  A command to try it out:<pre>:ruby print "Hello"</pre>
:rub[y] &lt;&lt; [endmarker]
<code>{script}</code>
<code>{endmarker}</code>
			Execute Ruby script <code>{script}</code>.
			The <code>{endmarker}</code> after <code>{script}</code> must NOT be preceded by
			any white space.</div>
<div class="old-help-para">			If [endmarker] is omitted, it defaults to a dot '.'
			like for the <a href="/neovim-docs-web/en/insert#%3Aappend">:append</a> and <a href="/neovim-docs-web/en/insert#%3Ainsert">:insert</a> commands.</div>
<div class="old-help-para">			This form of the <a href="/neovim-docs-web/en/if_ruby#%3Aruby">:ruby</a> command is mainly useful for
			including ruby code in vim scripts.</div>
<div class="old-help-para">Example Vim script:<pre>function! RedGem()
ruby &lt;&lt; EOF
class Garnet
        def initialize(s)
                @buffer = VIM::Buffer.current
                vimputs(s)
        end
        def vimputs(s)
                @buffer.append(@buffer.count,s)
        end
end
gem = Garnet.new("pretty")
EOF
endfunction</pre></div>
<div class="old-help-para">To see what version of Ruby you have:<pre>:ruby print RUBY_VERSION</pre></div>
<div class="old-help-para">						<a name="%3Arubydo"></a><code class="help-tag-right">:rubydo</code> <a name="%3Arubyd"></a><code class="help-tag">:rubyd</code> <a name="E265"></a><code class="help-tag">E265</code>
:[range]rubyd[o] <code>{cmd}</code>	Evaluate Ruby command <code>{cmd}</code> for each line in the
			[range], with $_ being set to the text of each line in
			turn, without a trailing <code>&lt;EOL&gt;</code>.  Setting $_ will change
			the text, but note that it is not possible to add or
			delete lines using this command.
			The default for [range] is the whole file: "1,$".</div>
<div class="old-help-para">							<a name="%3Arubyfile"></a><code class="help-tag-right">:rubyfile</code> <a name="%3Arubyf"></a><code class="help-tag">:rubyf</code>
:rubyf[ile] <code>{file}</code>	Execute the Ruby script in <code>{file}</code>.  This is the same as
			<code>:ruby load 'file'</code>, but allows file name completion.</div>
<div class="old-help-para">Executing Ruby commands is not possible in the <a href="/neovim-docs-web/en/eval#sandbox">sandbox</a>.</div>
<div class="old-help-para"><h2 class="help-heading">2. The VIM module<span class="help-heading-tags">					<a name="ruby-vim"></a><span class="help-tag">ruby-vim</span></span></h2></div>
<div class="old-help-para">Ruby code gets all of its access to vim via the "VIM" module.</div>
<div class="old-help-para">Overview<pre>print "Hello"                              # displays a message
VIM.command(cmd)                      # execute an Ex command
num = VIM::Window.count                      # gets the number of windows
w = VIM::Window[n]                      # gets window "n"
cw = VIM::Window.current              # gets the current window
num = VIM::Buffer.count                      # gets the number of buffers
b = VIM::Buffer[n]                      # gets buffer "n"
cb = VIM::Buffer.current              # gets the current buffer
w.height = lines                      # sets the window height
w.cursor = [row, col]                      # sets the window cursor position
pos = w.cursor                              # gets an array [row, col]
name = b.name                              # gets the buffer file name
line = b[n]                              # gets a line from the buffer
num = b.count                              # gets the number of lines
b[n] = str                              # sets a line in the buffer
b.delete(n)                              # deletes a line
b.append(n, str)                      # appends a line after n
line = VIM::Buffer.current.line       # gets the current line
num = VIM::Buffer.current.line_number # gets the current line number
VIM::Buffer.current.line = "test"     # sets the current line number</pre></div>
<div class="old-help-para">Module Functions:</div>
<div class="old-help-para">							<a name="ruby-message"></a><code class="help-tag-right">ruby-message</code>
VIM::message({msg})
	Displays the message <code>{msg}</code>.</div>
<div class="old-help-para">							<a name="ruby-set_option"></a><code class="help-tag-right">ruby-set_option</code>
VIM::set_option({arg})
	Sets a vim option.  <code>{arg}</code> can be any argument that the ":set" command
	accepts.  Note that this means that no spaces are allowed in the
	argument!  See <a href="/neovim-docs-web/en/options#%3Aset">:set</a>.</div>
<div class="old-help-para">							<a name="ruby-command"></a><code class="help-tag-right">ruby-command</code>
VIM::command({cmd})
	Executes Ex command <code>{cmd}</code>.</div>
<div class="old-help-para">							<a name="ruby-evaluate"></a><code class="help-tag-right">ruby-evaluate</code>
VIM::evaluate({expr})
	Evaluates <code>{expr}</code> using the vim internal expression evaluator (see
	<a href="/neovim-docs-web/en/eval#expression">expression</a>).  Returns the expression result as a string.
	A <a href="/neovim-docs-web/en/eval#List">List</a> is turned into a string by joining the items and inserting
	line breaks.</div>
<div class="old-help-para"><h2 class="help-heading">3. VIM::Buffer objects<span class="help-heading-tags">					<a name="ruby-buffer"></a><span class="help-tag">ruby-buffer</span></span></h2></div>
<div class="old-help-para">VIM::Buffer objects represent vim buffers.</div>
<div class="old-help-para">Class Methods:</div>
<div class="old-help-para">current		Returns the current buffer object.
count		Returns the number of buffers.
self[{n}]	Returns the buffer object for the number <code>{n}</code>.  The first number
		is 0.</div>
<div class="old-help-para">Methods:</div>
<div class="old-help-para">name		Returns the full name of the buffer.
number		Returns the number of the buffer.
count		Returns the number of lines.
length		Returns the number of lines.
self[{n}]	Returns a line from the buffer. <code>{n}</code> is the line number.
self[{n}] = <code>{str}</code>
		Sets a line in the buffer. <code>{n}</code> is the line number.
delete(<code>{n}</code>)	Deletes a line from the buffer. <code>{n}</code> is the line number.
append(<code>{n}</code>, <code>{str}</code>)
		Appends a line after the line <code>{n}</code>.
line		Returns the current line of the buffer if the buffer is
		active.
line = <code>{str}</code>    Sets the current line of the buffer if the buffer is active.
line_number     Returns the number of the current line if the buffer is
		active.</div>
<div class="old-help-para"><h2 class="help-heading">4. VIM::Window objects<span class="help-heading-tags">					<a name="ruby-window"></a><span class="help-tag">ruby-window</span></span></h2></div>
<div class="old-help-para">VIM::Window objects represent vim windows.</div>
<div class="old-help-para">Class Methods:</div>
<div class="old-help-para">current		Returns the current window object.
count		Returns the number of windows.
self[{n}]	Returns the window object for the number <code>{n}</code>.  The first number
		is 0.</div>
<div class="old-help-para">Methods:</div>
<div class="old-help-para">buffer		Returns the buffer displayed in the window.
height		Returns the height of the window.
height = <code>{n}</code>	Sets the window height to <code>{n}</code>.
width		Returns the width of the window.
width = <code>{n}</code>	Sets the window width to <code>{n}</code>.
cursor		Returns a [row, col] array for the cursor position.
		First line number is 1 and first column number is 0.
cursor = [{row}, <code>{col}</code>]
		Sets the cursor position to <code>{row}</code> and <code>{col}</code>.</div>
<div class="old-help-para"><h2 class="help-heading">5. Global variables<span class="help-heading-tags">					<a name="ruby-globals"></a><span class="help-tag">ruby-globals</span></span></h2></div>
<div class="old-help-para">There are two global variables.</div>
<div class="old-help-para">$curwin		The current window object.
$curbuf		The current buffer object.</div>
<div class="old-help-para"><h2 class="help-heading">6. rubyeval() Vim function<span class="help-heading-tags">				<a name="ruby-rubyeval"></a><span class="help-tag">ruby-rubyeval</span></span></h2></div>
<div class="old-help-para">To facilitate bi-directional interface, you can use <a href="/neovim-docs-web/en/builtin#rubyeval()">rubyeval()</a> function to
evaluate Ruby expressions and pass their values to Vim script.</div>
<div class="old-help-para">The Ruby value "true", "false" and "nil" are converted to v:true, v:false and
v:null, respectively.</div>

  
  