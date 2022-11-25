---
title:  Message
layout: ../../layouts/MainLayout.astro
---

  <a name="message.txt"></a><a name=":messages"></a><h1> Message</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/message.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">This file contains an alphabetical list of messages and error messages that
Vim produces.  You can use this if you don't understand what the message
means.  It is not complete though.</div>
<div class="old-help-para"><h2 class="help-heading">1. Old messages <a name="%3Ames"></a><span class="help-tag">:mes</span> <a name="message-history"></a><span class="help-tag">message-history</span></h2></div>
<div class="old-help-para">The ":messages" command can be used to view previously given messages.  This
is especially useful when messages have been overwritten or truncated.  This
depends on the <a href="/neovim-docs-web/en/options#'shortmess'">'shortmess'</a> option.</div>
<div class="old-help-para">	:mes[sages]		Show all messages.</div>
<div class="old-help-para">	:{count}mes[sages]	Show the <code>{count}</code> most recent messages.</div>
<div class="old-help-para">	:mes[sages] clear	Clear all messages.</div>
<div class="old-help-para">	:{count}mes[sages] clear
				Clear messages, keeping only the <code>{count}</code> most
				recent ones.</div>
<div class="old-help-para">The number of remembered messages is fixed at 200.</div>
<div class="old-help-para">								<a name="g%3C"></a><code class="help-tag-right">g&lt;</code>
The "g&lt;" command can be used to see the last page of previous command output.
This is especially useful if you accidentally typed <code>&lt;Space&gt;</code> at the hit-enter
prompt.  You are then back at the hit-enter prompt and can then scroll further
back.
Note: If the output has been stopped with "q" at the more prompt, it will only
be displayed up to this point.
The previous command output is cleared when another command produces output.
The "g&lt;" output is not redirected.</div>
<div class="old-help-para">If you want to find help on a specific (error) message, use the ID at the
start of the message.  For example, to get help on the message:<pre>E72: Close error on swap file</pre>
or (translated):<pre>E72: Errore durante chiusura swap file</pre>
Use:<pre>:help E72</pre>
If you are lazy, it also works without the shift key:<pre>:help e72</pre>
<h2 class="help-heading">2. Error messages<span class="help-heading-tags">				<a name="error-messages"></a><span class="help-tag">error-messages</span> <a name="errors"></a><span class="help-tag">errors</span></span></h2></div>
<div class="old-help-para">When an error message is displayed, but it is removed before you could read
it, you can see it again with:<pre>:echo v:errmsg</pre>
Or view a list of recent messages with:<pre>:messages</pre>
See <code>:messages</code> above.</div>
<div class="old-help-para"><a name="_list-of-messages"></a><h3 class="help-heading">LIST OF MESSAGES</h3>			<a name="E222"></a><code class="help-tag-right">E222</code> <a name="E228"></a><code class="help-tag">E228</code> <a name="E232"></a><code class="help-tag">E232</code> <a name="E293"></a><code class="help-tag">E293</code> <a name="E298"></a><code class="help-tag">E298</code> <a name="E304"></a><code class="help-tag">E304</code> <a name="E317"></a><code class="help-tag">E317</code>
			<a name="E318"></a><code class="help-tag-right">E318</code> <a name="E356"></a><code class="help-tag">E356</code> <a name="E438"></a><code class="help-tag">E438</code> <a name="E439"></a><code class="help-tag">E439</code> <a name="E440"></a><code class="help-tag">E440</code> <a name="E316"></a><code class="help-tag">E316</code> <a name="E320"></a><code class="help-tag">E320</code> <a name="E322"></a><code class="help-tag">E322</code>
			<a name="E323"></a><code class="help-tag-right">E323</code> <a name="E341"></a><code class="help-tag">E341</code> <a name="E473"></a><code class="help-tag">E473</code> <a name="E570"></a><code class="help-tag">E570</code> <a name="E685"></a><code class="help-tag">E685</code> <a name="E292"></a><code class="help-tag">E292</code><pre>Add to read buffer
makemap: Illegal mode
Cannot create BalloonEval with both message and callback
Hangul automata ERROR
block was not locked
Didn't get block nr {N}?
ml_upd_block0(): Didn't get block 0??
pointer block id wrong {N}
Updated too many blocks?
get_varp ERROR
u_undo: line numbers wrong
undo list corrupt
undo line missing
ml_get: cannot find line {N}
cannot find line {N}
line number out of range: {N} past the end
line count wrong in block {N}
Internal error
Internal error: {function}
fatal error in cs_manage_matches
Invalid count for del_bytes(): {N}</pre>
This is an internal error.  If you can reproduce it, please send in a bug
report. <a href="/neovim-docs-web/en/intro#bugs">bugs</a></div>
<div class="old-help-para"><pre>ATTENTION
Found a swap file by the name ...</pre>
See <a href="/neovim-docs-web/en/usr_11#ATTENTION">ATTENTION</a>.</div>
<div class="old-help-para">							<a name="E92"></a><code class="help-tag-right">E92</code><pre>Buffer {N} not found</pre>
The buffer you requested does not exist.  This can also happen when you have
wiped out a buffer which contains a mark or is referenced in another way.
<a href="/neovim-docs-web/en/windows#%3Abwipeout">:bwipeout</a></div>
<div class="old-help-para">							<a name="E95"></a><code class="help-tag-right">E95</code><pre>Buffer with this name already exists</pre>
You cannot have two buffers with exactly the same name.  This includes the
path leading to the file.</div>
<div class="old-help-para">							<a name="E72"></a><code class="help-tag-right">E72</code><pre>Close error on swap file</pre>
The <a href="/neovim-docs-web/en/recover#swap-file">swap-file</a>, that is used to keep a copy of the edited text, could not be
closed properly.  Mostly harmless.</div>
<div class="old-help-para">							<a name="E169"></a><code class="help-tag-right">E169</code><pre>Command too recursive</pre>
This happens when an Ex command executes an Ex command that executes an Ex
command, etc.  The limit is 200 or the value of <a href="/neovim-docs-web/en/options#'maxfuncdepth'">'maxfuncdepth'</a>, whatever is
larger.  When it's more there probably is an endless loop.  Probably a
<a href="/neovim-docs-web/en/eval#%3Aexecute">:execute</a> or <a href="/neovim-docs-web/en/repeat#%3Asource">:source</a> command is involved.</div>
<div class="old-help-para">							<a name="E254"></a><code class="help-tag-right">E254</code><pre>Cannot allocate color {name}</pre>
The color name <code>{name}</code> is unknown.  See <a href="/neovim-docs-web/en/syntax#gui-colors">gui-colors</a> for a list of colors that
are available on most systems.</div>
<div class="old-help-para">							<a name="E458"></a><code class="help-tag-right">E458</code><pre>Cannot allocate colormap entry, some colors may be incorrect</pre>
This means that there are not enough colors available for Vim.  It will still
run, but some of the colors will not appear in the specified color.  Try
stopping other applications that use many colors, or start them after starting
gvim.
Browsers are known to consume a lot of colors.  You can avoid this with
netscape by telling it to use its own colormap:<pre>netscape -install</pre>
Or tell it to limit to a certain number of colors (64 should work well):<pre>netscape -ncols 64</pre>
This can also be done with a line in your Xdefaults file:<pre>Netscape*installColormap: Yes</pre>
or<pre>Netscape*maxImageColors:  64</pre></div>
<div class="old-help-para">							<a name="E79"></a><code class="help-tag-right">E79</code><pre>Cannot expand wildcards</pre>
A filename contains a strange combination of characters, which causes Vim to
attempt expanding wildcards but this fails.  This does NOT mean that no
matching file names could be found, but that the pattern was illegal.</div>
<div class="old-help-para">							<a name="E459"></a><code class="help-tag-right">E459</code><pre>Cannot go back to previous directory</pre>
While expanding a file name, Vim failed to go back to the previously used
directory.  All file names being used may be invalid now!  You need to have
execute permission on the current directory.</div>
<div class="old-help-para">							<a name="E190"></a><code class="help-tag-right">E190</code> <a name="E212"></a><code class="help-tag">E212</code><pre>Cannot open "{filename}" for writing
Can't open file for writing</pre>
For some reason the file you are writing to cannot be created or overwritten.
The reason could be that you do not have permission to write in the directory
or the file name is not valid.</div>
<div class="old-help-para">							<a name="E166"></a><code class="help-tag-right">E166</code><pre>Can't open linked file for writing</pre>
You are trying to write to a file which can't be overwritten, and the file is
a link (either a hard link or a symbolic link).  Writing might still be
possible if the directory that contains the link or the file is writable, but
Vim now doesn't know if you want to delete the link and write the file in its
place, or if you want to delete the file itself and write the new file in its
place.  If you really want to write the file under this name, you have to
manually delete the link or the file, or change the permissions so that Vim
can overwrite.</div>
<div class="old-help-para">							<a name="E46"></a><code class="help-tag-right">E46</code><pre>Cannot change read-only variable "{name}"</pre>
You are trying to assign a value to an argument of a function <a href="/neovim-docs-web/en/userfunc#a%3Avar">a:var</a> or a Vim
internal variable <a href="/neovim-docs-web/en/eval#v%3Avar">v:var</a> which is read-only.</div>
<div class="old-help-para">							<a name="E90"></a><code class="help-tag-right">E90</code><pre>Cannot unload last buffer</pre>
Vim always requires one buffer to be loaded, otherwise there would be nothing
to display in the window.</div>
<div class="old-help-para">							<a name="E40"></a><code class="help-tag-right">E40</code><pre>Can't open errorfile &lt;filename&gt;</pre>
When using the ":make" or ":grep" commands: The file used to save the error
messages or grep output cannot be opened.  This can have several causes:
<div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'shellredir'">'shellredir'</a> has a wrong value.
</div><div class="help-li" style=""> The shell changes directory, causing the error file to be written in another
  directory.  This could be fixed by changing <a href="/neovim-docs-web/en/options#'makeef'">'makeef'</a>, but then the make
  command is still executed in the wrong directory.
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'makeef'">'makeef'</a> has a wrong value.
</div><div class="help-li" style=""> The <a href="/neovim-docs-web/en/options#'grepprg'">'grepprg'</a> or <a href="/neovim-docs-web/en/options#'makeprg'">'makeprg'</a> could not be executed.  This cannot always be
  detected (especially on MS-Windows).  Check your $PATH.
</div></div>
<div class="old-help-para"><pre>Can't open file C:\TEMP\VIoD243.TMP</pre>
On MS-Windows, this message appears when the output of an external command was
to be read, but the command didn't run successfully.  This can be caused by
many things.  Check the <a href="/neovim-docs-web/en/options#'shell'">'shell'</a>, <a href="/neovim-docs-web/en/options#'shellquote'">'shellquote'</a>, <a href="/neovim-docs-web/en/options#'shellxquote'">'shellxquote'</a>, <a href="/neovim-docs-web/en/options#'shellslash'">'shellslash'</a> and
related options.  It might also be that the external command was not found,
there is no different error message for that.</div>
<div class="old-help-para">							<a name="E12"></a><code class="help-tag-right">E12</code><pre>Command not allowed from exrc/vimrc in current dir or tag search</pre>
Some commands are not allowed for security reasons.  These commands mostly
come from a .exrc or .nvimrc file in the current directory, or from a tags
file.  Also see <a href="/neovim-docs-web/en/vim_diff#'secure'">'secure'</a>.</div>
<div class="old-help-para">							<a name="E74"></a><code class="help-tag-right">E74</code><pre>Command too complex</pre>
A mapping resulted in a very long command string.  Could be caused by a
mapping that indirectly calls itself.</div>
<div class="old-help-para"><pre>CONVERSION ERROR</pre>
When writing a file and the text "CONVERSION ERROR" appears, this means that
some bits were lost when converting text from the internally used UTF-8 to the
format of the file.  The file will not be marked unmodified.  If you care
about the loss of information, set the <a href="/neovim-docs-web/en/options#'fileencoding'">'fileencoding'</a> option to another value
that can handle the characters in the buffer and write again.  If you don't
care, you can abandon the buffer or reset the <a href="/neovim-docs-web/en/options#'modified'">'modified'</a> option.
If there is a backup file, when <a href="/neovim-docs-web/en/options#'writebackup'">'writebackup'</a> or <a href="/neovim-docs-web/en/options#'backup'">'backup'</a> is set, it will not
be deleted, so you can move it back into place if you want to discard the
changes.</div>
<div class="old-help-para">							<a name="E302"></a><code class="help-tag-right">E302</code><pre>Could not rename swap file</pre>
When the file name changes, Vim tries to rename the <a href="/neovim-docs-web/en/recover#swap-file">swap-file</a> as well.
This failed and the old swap file is now still used.  Mostly harmless.</div>
<div class="old-help-para">							<a name="E43"></a><code class="help-tag-right">E43</code> <a name="E44"></a><code class="help-tag">E44</code><pre>Damaged match string
Corrupted regexp program</pre>
Something inside Vim went wrong and resulted in a corrupted regexp.  If you
know how to reproduce this problem, please report it. <a href="/neovim-docs-web/en/intro#bugs">bugs</a></div>
<div class="old-help-para">							<a name="E208"></a><code class="help-tag-right">E208</code> <a name="E209"></a><code class="help-tag">E209</code> <a name="E210"></a><code class="help-tag">E210</code><pre>Error writing to "{filename}"
Error closing "{filename}"
Error reading "{filename}"</pre>
This occurs when Vim is trying to rename a file, but a simple change of file
name doesn't work.  Then the file will be copied, but somehow this failed.
The result may be that both the original file and the destination file exist
and the destination file may be incomplete.</div>
<div class="old-help-para"><pre>Vim: Error reading input, exiting...</pre>
This occurs when Vim cannot read typed characters while input is required.
Vim got stuck, the only thing it can do is exit.  This can happen when both
stdin and stderr are redirected and executing a script that doesn't exit Vim.</div>
<div class="old-help-para">							<a name="E47"></a><code class="help-tag-right">E47</code><pre>Error while reading errorfile</pre>
Reading the error file was not possible.  This is NOT caused by an error
message that was not recognized.</div>
<div class="old-help-para">							<a name="E80"></a><code class="help-tag-right">E80</code><pre>Error while writing</pre>
Writing a file was not completed successfully.  The file is probably
incomplete.</div>
<div class="old-help-para">							<a name="E13"></a><code class="help-tag-right">E13</code> <a name="E189"></a><code class="help-tag">E189</code><pre>File exists (add ! to override)
"{filename}" exists (add ! to override)</pre>
You are protected from accidentally overwriting a file.  When you want to
write anyway, use the same command, but add a "!" just after the command.
Example:<pre>:w /tmp/test</pre>
changes to:<pre>:w! /tmp/test</pre></div>
<div class="old-help-para">							<a name="E768"></a><code class="help-tag-right">E768</code><pre>Swap file exists: {filename} (:silent! overrides)</pre>
You are protected from overwriting a file that is being edited by Vim.  This
happens when you use ":w! filename" and a swapfile is found.
<div class="help-li" style=""> If the swapfile was left over from an old crashed edit session you may want
  to delete the swapfile.  Edit <code>{filename}</code> to find out information about the
  swapfile.
</div><div class="help-li" style=""> If you want to write anyway prepend ":silent!" to the command.  For example:
<pre>:silent! w! /tmp/test</pre></div></div>
<div class="old-help-para"> The special command is needed, since you already added the ! for overwriting
  an existing file.</div>
<div class="old-help-para">							<a name="E139"></a><code class="help-tag-right">E139</code><pre>File is loaded in another buffer</pre>
You are trying to write a file under a name which is also used in another
buffer.  This would result in two versions of the same file.</div>
<div class="old-help-para">							<a name="E142"></a><code class="help-tag-right">E142</code><pre>File not written: Writing is disabled by 'write' option</pre>
The <a href="/neovim-docs-web/en/options#'write'">'write'</a> option is off.  This makes all commands that try to write a file
generate this message.  This could be caused by a <a href="/neovim-docs-web/en/starting#-m">-m</a> commandline argument.
You can switch the <a href="/neovim-docs-web/en/options#'write'">'write'</a> option on with ":set write".</div>
<div class="old-help-para">							<a name="E25"></a><code class="help-tag-right">E25</code><pre>Nvim does not have a built-in GUI</pre>
Neovim does not have a built in GUI, so <code>:gvim</code> and <code>:gui</code> don't work.</div>
<div class="old-help-para">							<a name="E49"></a><code class="help-tag-right">E49</code><pre>Invalid scroll size</pre>
This is caused by setting an invalid value for the <a href="/neovim-docs-web/en/options#'scroll'">'scroll'</a>, <a href="/neovim-docs-web/en/options#'scrolljump'">'scrolljump'</a> or
<a href="/neovim-docs-web/en/options#'scrolloff'">'scrolloff'</a> options.</div>
<div class="old-help-para">							<a name="E17"></a><code class="help-tag-right">E17</code><pre>"{filename}" is a directory</pre>
You tried to write a file with the name of a directory.  This is not possible.
You probably need to append a file name.</div>
<div class="old-help-para">							<a name="E19"></a><code class="help-tag-right">E19</code><pre>Mark has invalid line number</pre>
You are using a mark that has a line number that doesn't exist.  This can
happen when you have a mark in another file, and some other program has
deleted lines from it.</div>
<div class="old-help-para">							<a name="E219"></a><code class="help-tag-right">E219</code> <a name="E220"></a><code class="help-tag">E220</code><pre>Missing {.
Missing }.</pre>
Using a {} construct in a file name, but there is a { without a matching } or
the other way around.  It should be used like this: <code>{foo,bar}</code>.  This matches
"foo" and "bar".</div>
<div class="old-help-para">							<a name="E315"></a><code class="help-tag-right">E315</code><pre>ml_get: invalid lnum: {number}</pre>
This is an internal Vim error.  Please try to find out how it can be
reproduced, and submit a <a href="/neovim-docs-web/en/intro#bug-report">bug-report</a>.</div>
<div class="old-help-para">							<a name="E173"></a><code class="help-tag-right">E173</code><pre>{number} more files to edit</pre>
You are trying to exit, while the last item in the argument list has not been
edited.  This protects you from accidentally exiting when you still have more
files to work on.  See <a href="/neovim-docs-web/en/editing#argument-list">argument-list</a>.  If you do want to exit, just do it
again and it will work.</div>
<div class="old-help-para">							<a name="E23"></a><code class="help-tag-right">E23</code> <a name="E194"></a><code class="help-tag">E194</code><pre>No alternate file
No alternate file name to substitute for '#'</pre>
The alternate file is not defined yet.  See <a href="/neovim-docs-web/en/editing#alternate-file">alternate-file</a>.</div>
<div class="old-help-para">							<a name="E32"></a><code class="help-tag-right">E32</code><pre>No file name</pre>
The current buffer has no name.  To write it, use ":w fname".  Or give the
buffer a name with ":file fname".</div>
<div class="old-help-para">							<a name="E141"></a><code class="help-tag-right">E141</code><pre>No file name for buffer {number}</pre>
One of the buffers that was changed does not have a file name.  Therefore it
cannot be written.  You need to give the buffer a file name:<pre>:buffer {number}
:file {filename}</pre></div>
<div class="old-help-para">							<a name="E33"></a><code class="help-tag-right">E33</code><pre>No previous substitute regular expression</pre>
When using the '~' character in a pattern, it is replaced with the previously
used pattern in a ":substitute" command.  This fails when no such command has
been used yet.  See <a href="/neovim-docs-web/en/pattern#%2F~">/~</a>.  This also happens when using ":s/pat/%/", where the
"%" stands for the previous substitute string.</div>
<div class="old-help-para">							<a name="E35"></a><code class="help-tag-right">E35</code><pre>No previous regular expression</pre>
When using an empty search pattern, the previous search pattern is used.  But
that is not possible if there was no previous search.</div>
<div class="old-help-para">							<a name="E24"></a><code class="help-tag-right">E24</code><pre>No such abbreviation</pre>
You have used an ":unabbreviate" command with an argument which is not an
existing abbreviation.  All variations of this command give the same message:
":cunabbrev", ":iunabbrev", etc.  Check for trailing white space.</div>
<div class="old-help-para">							<a name="E31"></a><code class="help-tag-right">E31</code><pre>No such mapping</pre>
You have used an ":unmap" command with an argument which is not an existing
mapping.  All variations of this command give the same message: ":cunmap",
":unmap!", etc.  A few hints:
<div class="help-li" style=""> Check for trailing white space.
</div><div class="help-li" style=""> If the mapping is buffer-local you need to use ":unmap <code>&lt;buffer&gt;</code>".
  <a href="/neovim-docs-web/en/map#%3Amap-%3Cbuffer%3E">:map-&lt;buffer&gt;</a>
</div></div>
<div class="old-help-para">							<a name="E37"></a><code class="help-tag-right">E37</code> <a name="E89"></a><code class="help-tag">E89</code><pre>No write since last change (add ! to override)
No write since last change for buffer {N} (add ! to override)</pre>
You are trying to <a href="/neovim-docs-web/en/editing#abandon">abandon</a> a file that has changes.  Vim protects you from
losing your work.  You can either write the changed file with ":w", or, if you
are sure, <a href="/neovim-docs-web/en/editing#abandon">abandon</a> it anyway, and lose all the changes.  This can be done by
adding a '!' character just after the command you used.  Example:<pre>:e other_file</pre>
changes to:<pre>:e! other_file</pre></div>
<div class="old-help-para">							<a name="E162"></a><code class="help-tag-right">E162</code><pre>No write since last change for buffer "{name}"</pre>
This appears when you try to exit Vim while some buffers are changed.  You
will either have to write the changed buffer (with <a href="/neovim-docs-web/en/editing#%3Aw">:w</a>), or use a command to
abandon the buffer forcefully, e.g., with ":qa!".  Careful, make sure you
don't throw away changes you really want to keep.  You might have forgotten
about a buffer, especially when <a href="/neovim-docs-web/en/options#'hidden'">'hidden'</a> is set.</div>
<div class="old-help-para"><pre>[No write since last change]</pre>
This appears when executing a shell command while at least one buffer was
changed.  To avoid the message reset the <a href="/neovim-docs-web/en/options#'warn'">'warn'</a> option.</div>
<div class="old-help-para">							<a name="E38"></a><code class="help-tag-right">E38</code><pre>Null argument</pre>
Something inside Vim went wrong and resulted in a NULL pointer.  If you know
how to reproduce this problem, please report it. <a href="/neovim-docs-web/en/intro#bugs">bugs</a></div>
<div class="old-help-para">						<a name="E41"></a><code class="help-tag-right">E41</code> <a name="E82"></a><code class="help-tag">E82</code> <a name="E83"></a><code class="help-tag">E83</code> <a name="E342"></a><code class="help-tag">E342</code><pre>Out of memory!
Out of memory!  (allocating {number} bytes)
Cannot allocate any buffer, exiting...
Cannot allocate buffer, using other one...</pre>
Oh, oh.  You must have been doing something complicated, or some other program
is consuming your memory.  Be careful!  Vim is not completely prepared for an
out-of-memory situation.  First make sure that any changes are saved.  Then
try to solve the memory shortage.  To stay on the safe side, exit Vim and
start again.</div>
<div class="old-help-para">Buffers are only partly kept in memory, thus editing a very large file is
unlikely to cause an out-of-memory situation.  Undo information is completely
in memory, you can reduce that with these options:
<div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'undolevels'">'undolevels'</a>  Set to a low value, or to -1 to disable undo completely.  This
  helps for a change that affects all lines.
</div><div class="help-li" style=""> <a href="/neovim-docs-web/en/options#'undoreload'">'undoreload'</a> Set to zero to disable.
</div></div>
<div class="old-help-para">							<a name="E339"></a><code class="help-tag-right">E339</code><pre>Pattern too long</pre>
This happens on systems with 16 bit ints: The compiled regexp pattern is
longer than about 65000 characters.  Try using a shorter pattern.
It also happens when the offset of a rule doesn't fit in the space available.
Try simplifying the pattern.</div>
<div class="old-help-para">							<a name="E45"></a><code class="help-tag-right">E45</code><pre>'readonly' option is set (add ! to override)</pre>
You are trying to write a file that was marked as read-only.  To write the
file anyway, either reset the <a href="/neovim-docs-web/en/options#'readonly'">'readonly'</a> option, or add a '!' character just
after the command you used.  Example:<pre>:w</pre>
changes to:<pre>:w!</pre></div>
<div class="old-help-para">							<a name="E294"></a><code class="help-tag-right">E294</code> <a name="E295"></a><code class="help-tag">E295</code> <a name="E301"></a><code class="help-tag">E301</code><pre>Read error in swap file
Seek error in swap file read
Oops, lost the swap file!!!</pre>
Vim tried to read text from the <a href="/neovim-docs-web/en/recover#swap-file">swap-file</a>, but something went wrong.  The
text in the related buffer may now be corrupted!  Check carefully before you
write a buffer.  You may want to write it in another file and check for
differences.</div>
<div class="old-help-para">							<a name="E192"></a><code class="help-tag-right">E192</code><pre>Recursive use of :normal too deep</pre>
You are using a ":normal" command, whose argument again uses a ":normal"
command in a recursive way.  This is restricted to <a href="/neovim-docs-web/en/options#'maxmapdepth'">'maxmapdepth'</a> levels.  This
example illustrates how to get this message:<pre>:map gq :normal gq&lt;CR&gt;</pre>
If you type "gq", it will execute this mapping, which will call "gq" again.</div>
<div class="old-help-para">							<a name="E22"></a><code class="help-tag-right">E22</code><pre>Scripts nested too deep</pre>
Scripts can be read with the "-s" command-line argument and with the
<code>:source!</code> command.  The script can then again read another script.  This can
continue for about 14 levels.  When more nesting is done, Vim assumes that
there is a recursive loop and stops with this error message.</div>
<div class="old-help-para">							<a name="E300"></a><code class="help-tag-right">E300</code><pre>Swap file already exists (symlink attack?)</pre>
This message appears when Vim is trying to open a swap file and finds it
already exists or finds a symbolic link in its place.  This shouldn't happen,
because Vim already checked that the file doesn't exist.  Either someone else
opened the same file at exactly the same moment (very unlikely) or someone is
attempting a symlink attack (could happen when editing a file in /tmp or when
<a href="/neovim-docs-web/en/options#'directory'">'directory'</a> starts with "/tmp", which is a bad choice).</div>
<div class="old-help-para">							<a name="E432"></a><code class="help-tag-right">E432</code><pre>Tags file not sorted: {file name}</pre>
Vim (and Vi) expect tags files to be sorted in ASCII order.  Binary searching
can then be used, which is a lot faster than a linear search.  If your tags
files are not properly sorted, reset the <a href="/neovim-docs-web/en/options#'tagbsearch'">'tagbsearch'</a> option.
This message is only given when Vim detects a problem when searching for a
tag.  Sometimes this message is not given, even though the tags file is not
properly sorted.</div>
<div class="old-help-para">							<a name="E424"></a><code class="help-tag-right">E424</code><pre>Too many different highlighting attributes in use</pre>
Vim can only handle about 223 different kinds of highlighting.  If you run
into this limit, you have used too many <a href="/neovim-docs-web/en/syntax#%3Ahighlight">:highlight</a> commands with different
arguments.  A ":highlight link" is not counted.</div>
<div class="old-help-para">							<a name="E77"></a><code class="help-tag-right">E77</code><pre>Too many file names</pre>
When expanding file names, more than one match was found.  Only one match is
allowed for the command that was used.</div>
<div class="old-help-para">							<a name="E303"></a><code class="help-tag-right">E303</code><pre>Unable to open swap file for "{filename}", recovery impossible</pre>
Vim was not able to create a swap file.  You can still edit the file, but if
Vim unexpectedly exits the changes will be lost.  And Vim may consume a lot of
memory when editing a big file.  You may want to change the <a href="/neovim-docs-web/en/options#'directory'">'directory'</a> option
to avoid this error.  This error is not given when <a href="/neovim-docs-web/en/options#'directory'">'directory'</a> is empty.  See
<a href="/neovim-docs-web/en/recover#swap-file">swap-file</a>.</div>
<div class="old-help-para">							<a name="E140"></a><code class="help-tag-right">E140</code><pre>Use ! to write partial buffer</pre>
When using a range to write part of a buffer, it is unusual to overwrite the
original file.  It is probably a mistake (e.g., when Visual mode was active
when using ":w"), therefore Vim requires using a !  after the command, e.g.:
":3,10w!".
<pre>Warning: Cannot convert string "&lt;Key&gt;Escape,_Key_Cancel" to type
VirtualBinding</pre>
Messages like this appear when starting up.  This is not a Vim problem, your
X11 configuration is wrong.</div>
<div class="old-help-para">							<a name="W10"></a><code class="help-tag-right">W10</code><pre>Warning: Changing a readonly file</pre>
The file is read-only and you are making a change to it anyway.  You can use
the <a href="/neovim-docs-web/en/autocmd#FileChangedRO">FileChangedRO</a> autocommand event to avoid this message (the autocommand
must reset the <a href="/neovim-docs-web/en/options#'readonly'">'readonly'</a> option).  See <a href="/neovim-docs-web/en/options#'modifiable'">'modifiable'</a> to completely disallow
making changes to a file.
This message is only given for the first change after <a href="/neovim-docs-web/en/options#'readonly'">'readonly'</a> has been set.</div>
<div class="old-help-para">							<a name="W13"></a><code class="help-tag-right">W13</code><pre>Warning: File "{filename}" has been created after editing started</pre>
You are editing a file in Vim when it didn't exist, but it does exist now.
You will have to decide if you want to keep the version in Vim or the newly
created file.  This message is not given when <a href="/neovim-docs-web/en/options#'buftype'">'buftype'</a> is not empty.</div>
<div class="old-help-para">							<a name="W11"></a><code class="help-tag-right">W11</code><pre>Warning: File "{filename}" has changed since editing started</pre>
The file which you have started editing has got another timestamp and the
contents changed (more precisely: When reading the file again with the current
option settings and autocommands you would end up with different text).  This
probably means that some other program changed the file.  You will have to
find out what happened, and decide which version of the file you want to keep.
Set the <a href="/neovim-docs-web/en/options#'autoread'">'autoread'</a> option if you want to do this automatically.
This message is not given when <a href="/neovim-docs-web/en/options#'buftype'">'buftype'</a> is not empty.
Also see the <a href="/neovim-docs-web/en/autocmd#FileChangedShell">FileChangedShell</a> autocommand.</div>
<div class="old-help-para">There is one situation where you get this message even though there is nothing
wrong: If you save a file in Windows on the day the daylight saving time
starts.  It can be fixed in one of these ways:
<div class="help-li" style=""> Add this line in your autoexec.bat:
<pre>SET TZ=-1</pre></div></div>
<div class="old-help-para"> Adjust the "-1" for your time zone.
<div class="help-li" style=""> Disable "automatically adjust clock for daylight saving changes".
</div><div class="help-li" style=""> Just write the file again the next day.  Or set your clock to the next day,
  write the file twice and set the clock back.
</div></div>
<div class="old-help-para">If you get W11 all the time, you may need to disable "Acronis Active
Protection" or register Vim as a trusted service/application.</div>
<div class="old-help-para">							<a name="W12"></a><code class="help-tag-right">W12</code><pre>Warning: File "{filename}" has changed and the buffer was changed in Vim as well</pre>
Like the above, and the buffer for the file was changed in this Vim as well.
You will have to decide if you want to keep the version in this Vim or the one
on disk.  This message is not given when <a href="/neovim-docs-web/en/options#'buftype'">'buftype'</a> is not empty.</div>
<div class="old-help-para">							<a name="W16"></a><code class="help-tag-right">W16</code><pre>Warning: Mode of file "{filename}" has changed since editing started</pre>
When the timestamp for a buffer was changed and the contents are still the
same but the mode (permissions) have changed.  This usually occurs when
checking out a file from a version control system, which causes the read-only
bit to be reset.  It should be safe to reload the file.  Set <a href="/neovim-docs-web/en/options#'autoread'">'autoread'</a> to
automatically reload the file.</div>
<div class="old-help-para">							<a name="E211"></a><code class="help-tag-right">E211</code><pre>File "{filename}" no longer available</pre>
The file which you have started editing has disappeared, or is no longer
accessible.  Make sure you write the buffer somewhere to avoid losing
changes.  This message is not given when <a href="/neovim-docs-web/en/options#'buftype'">'buftype'</a> is not empty.</div>
<div class="old-help-para">							<a name="W14"></a><code class="help-tag-right">W14</code><pre>Warning: List of file names overflow</pre>
You must be using an awful lot of buffers.  It's now possible that two buffers
have the same number, which causes various problems.  You might want to exit
Vim and restart it.</div>
<div class="old-help-para">							<a name="E931"></a><code class="help-tag-right">E931</code><pre>Buffer cannot be registered</pre>
Out of memory or a duplicate buffer number.  May happen after W14.  Looking up
a buffer will not always work, better restart Vim.</div>
<div class="old-help-para">							<a name="E296"></a><code class="help-tag-right">E296</code> <a name="E297"></a><code class="help-tag">E297</code><pre>Seek error in swap file write
Write error in swap file</pre>
This mostly happens when the disk is full.  Vim could not write text into the
<a href="/neovim-docs-web/en/recover#swap-file">swap-file</a>.  It's not directly harmful, but when Vim unexpectedly exits some
text may be lost without recovery being possible.  Vim might run out of memory
when this problem persists.</div>
<div class="old-help-para">							<a name="E10"></a><code class="help-tag-right">E10</code><pre>\\ should be followed by /, ? or &amp;</pre>
A command line started with a backslash or the range of a command contained a
backslash in a wrong place.  This is often caused by command-line continuation
being disabled.  Remove the 'C' flag from the <a href="/neovim-docs-web/en/options#'cpoptions'">'cpoptions'</a> option to enable it.</div>
<div class="old-help-para">							<a name="E471"></a><code class="help-tag-right">E471</code><pre>Argument required</pre>
Ex command was executed without a mandatory argument(s).</div>
<div class="old-help-para">							<a name="E474"></a><code class="help-tag-right">E474</code> <a name="E475"></a><code class="help-tag">E475</code> <a name="E983"></a><code class="help-tag">E983</code><pre>Invalid argument
Invalid argument: {arg}
Duplicate argument: {arg}</pre>
Ex command or function was given an invalid argument. Or <a href="/neovim-docs-web/en/builtin#jobstart()">jobstart()</a> or
<a href="/neovim-docs-web/en/builtin#system()">system()</a> was given a non-executable command.</div>
<div class="old-help-para">							<a name="E488"></a><code class="help-tag-right">E488</code><pre>Trailing characters</pre>
An argument was given to an Ex command that does not permit one.
Or the argument has invalid characters and has not been recognized.</div>
<div class="old-help-para">							<a name="E477"></a><code class="help-tag-right">E477</code> <a name="E478"></a><code class="help-tag">E478</code><pre>No ! allowed
Don't panic!</pre>
You have added a "!" after an Ex command that doesn't permit one.</div>
<div class="old-help-para">							<a name="E481"></a><code class="help-tag-right">E481</code><pre>No range allowed</pre>
A range was specified for an Ex command that doesn't permit one.  See
<a href="/neovim-docs-web/en/cmdline#cmdline-ranges">cmdline-ranges</a>.</div>
<div class="old-help-para">							<a name="E482"></a><code class="help-tag-right">E482</code> <a name="E483"></a><code class="help-tag">E483</code><pre>Can't create file {filename}
Can't get temp file name</pre>
Vim cannot create a temporary file.</div>
<div class="old-help-para">							<a name="E484"></a><code class="help-tag-right">E484</code> <a name="E485"></a><code class="help-tag">E485</code><pre>Can't open file {filename}
Can't read file {filename}</pre>
Vim cannot read a temporary file.  Especially on Windows, this can be caused
by wrong escaping of special characters for cmd.exe; the approach was
changed with patch 7.3.443.  Try using <a href="/neovim-docs-web/en/builtin#shellescape()">shellescape()</a> for all shell arguments
given to <a href="/neovim-docs-web/en/builtin#system()">system()</a>, or explicitly add escaping with ^.  Also see
<a href="/neovim-docs-web/en/options#'shellxquote'">'shellxquote'</a> and <a href="/neovim-docs-web/en/options#'shellxescape'">'shellxescape'</a>.</div>
<div class="old-help-para">							<a name="E464"></a><code class="help-tag-right">E464</code><pre>Ambiguous use of user-defined command</pre>
There are two user-defined commands with a common name prefix, and you used
Command-line completion to execute one of them. <a href="/neovim-docs-web/en/map#user-cmd-ambiguous">user-cmd-ambiguous</a>
Example:<pre>:command MyCommand1 echo "one"
:command MyCommand2 echo "two"
:MyCommand</pre></div>
<div class="old-help-para">							<a name="E492"></a><code class="help-tag-right">E492</code><pre>Not an editor command</pre>
You tried to execute a command that is neither an Ex command nor
a user-defined command.</div>
<div class="old-help-para">							<a name="E905"></a><code class="help-tag-right">E905</code><pre>Cannot set this option after startup</pre>
You tried to set an option after startup that only allows changes during
startup.</div>
<div class="old-help-para">							<a name="E943"></a><code class="help-tag-right">E943</code><pre>Command table needs to be updated, run 'make'</pre>
This can only happen when changing the source code, after adding a command in
src/ex_cmds.lua.  Update the lookup table by re-running the build.<pre></pre>
<h2 class="help-heading">3. Messages<span class="help-heading-tags">						<a name="messages"></a><span class="help-tag">messages</span></span></h2></div>
<div class="old-help-para">This is an (incomplete) overview of various messages that Vim gives:</div>
<div class="old-help-para">			<a name="hit-enter"></a><code class="help-tag-right">hit-enter</code> <a name="press-enter"></a><code class="help-tag">press-enter</code> <a name="hit-return"></a><code class="help-tag">hit-return</code>
			<a name="press-return"></a><code class="help-tag-right">press-return</code> <a name="hit-enter-prompt"></a><code class="help-tag">hit-enter-prompt</code></div>
<div class="old-help-para">  Press ENTER or type command to continue</div>
<div class="old-help-para">This message is given when there is something on the screen for you to read,
and the screen is about to be redrawn:
<div class="help-li" style=""> After executing an external command (e.g., ":!ls" and "=").
</div><div class="help-li" style=""> Something is displayed on the status line that is longer than the width of
  the window, or runs into the <a href="/neovim-docs-web/en/options#'showcmd'">'showcmd'</a> or <a href="/neovim-docs-web/en/options#'ruler'">'ruler'</a> output.
</div></div>
<div class="old-help-para">-&gt; Press <code>&lt;Enter&gt;</code> or <code>&lt;Space&gt;</code> to redraw the screen and continue, without that
   key being used otherwise.
-&gt; Press ':' or any other Normal mode command character to start that command.
   Note that after an external command some special keys, such as the cursor
   keys, may not work normally, because the terminal is still set to a state
   for executing the external command.
-&gt; Press 'k', <code>&lt;Up&gt;</code>, 'u', 'b' or 'g' to scroll back in the messages.  This
   works the same way as at the <a href="/neovim-docs-web/en/message#more-prompt">more-prompt</a>.  Only works when <a href="/neovim-docs-web/en/options#'more'">'more'</a> is on.
-&gt; Pressing 'j', 'f', 'd' or <code>&lt;Down&gt;</code> is ignored when messages scrolled off the
   top of the screen and <a href="/neovim-docs-web/en/options#'more'">'more'</a> is on, to avoid that typing one 'j' or 'f' too
   many causes the messages to disappear.
-&gt; Press <code>&lt;C-Y&gt;</code> to copy (yank) a modeless selection to the clipboard register.
-&gt; Use a menu.  The characters defined for Cmdline-mode are used.
-&gt; When <a href="/neovim-docs-web/en/options#'mouse'">'mouse'</a> contains the 'r' flag, clicking the left mouse button works
   like pressing <code>&lt;Space&gt;</code>.  This makes it impossible to select text though.
-&gt; For the GUI clicking the left mouse button in the last line works like
   pressing <code>&lt;Space&gt;</code>.</div>
<div class="old-help-para">If you accidentally hit <code>&lt;Enter&gt;</code> or <code>&lt;Space&gt;</code> and you want to see the displayed
text then use <a href="/neovim-docs-web/en/message#g%3C">g&lt;</a>.  This only works when <a href="/neovim-docs-web/en/options#'more'">'more'</a> is set.</div>
<div class="old-help-para">To reduce the number of hit-enter prompts:
<div class="help-li" style=""> Set <a href="/neovim-docs-web/en/options#'cmdheight'">'cmdheight'</a> to 2 or higher.
</div><div class="help-li" style=""> Add flags to <a href="/neovim-docs-web/en/options#'shortmess'">'shortmess'</a>.
</div><div class="help-li" style=""> Reset <a href="/neovim-docs-web/en/options#'showcmd'">'showcmd'</a> and/or <a href="/neovim-docs-web/en/options#'ruler'">'ruler'</a>.
</div><div class="help-li" style=""> Make sure <code>:echo</code> text is within <a href="/neovim-docs-web/en/eval#v%3Aechospace">v:echospace</a> screen cells.
</div></div>
<div class="old-help-para">If your script causes the hit-enter prompt and you don't know why, you may
find the <a href="/neovim-docs-web/en/eval#v%3Ascrollstart">v:scrollstart</a> variable useful.</div>
<div class="old-help-para">Also see <a href="/neovim-docs-web/en/options#'mouse'">'mouse'</a>.  The hit-enter message is highlighted with the <a href="/neovim-docs-web/en/syntax#hl-Question">hl-Question</a>
group.</div>
<div class="old-help-para">						<a name="more-prompt"></a><code class="help-tag-right">more-prompt</code> <a name="pager"></a><code class="help-tag">pager</code><pre>-- More --
-- More -- SPACE/d/j: screen/page/line down, b/u/k: up, q: quit</pre>
This message is given when the screen is filled with messages.  It is only
given when the <a href="/neovim-docs-web/en/options#'more'">'more'</a> option is on.  It is highlighted with the <a href="/neovim-docs-web/en/syntax#hl-MoreMsg">hl-MoreMsg</a>
group.</div>
<div class="old-help-para"><div class="help-column_heading">Type					effect</div>     <code>&lt;CR&gt;</code> or <code>&lt;NL&gt;</code> or j or <code>&lt;Down&gt;</code>	one more line
     d					down a page (half a screen)
     <code>&lt;Space&gt;</code> or f or <code>&lt;PageDown&gt;</code>		down a screen
     G					down all the way, until the hit-enter
					prompt</div>
<div class="old-help-para">     <code>&lt;BS&gt;</code> or k or <code>&lt;Up&gt;</code>			one line back
     u					up a page (half a screen)
     b or <code>&lt;PageUp&gt;</code>			back a screen
     g					back to the start</div>
<div class="old-help-para">     q, <code>&lt;Esc&gt;</code> or <code>CTRL-C</code>			stop the listing
     :					stop the listing and enter a
					     command-line
    <code>&lt;C-Y&gt;</code>				yank (copy) a modeless selection to
					the clipboard ("* and "+ registers)
    <code>{menu-entry}</code>			what the menu is defined to in
					Cmdline-mode.
    <code>&lt;LeftMouse&gt;</code> ()			next page</div>
<div class="old-help-para">Any other key causes the meaning of the keys to be displayed.</div>
<div class="old-help-para">()  Clicking the left mouse button only works:
<div class="help-li" style=""> For the GUI: in the last line of the screen.
</div><div class="help-li" style=""> When 'r' is included in <a href="/neovim-docs-web/en/options#'mouse'">'mouse'</a> (but then selecting text won't work).
</div></div>
<div class="old-help-para">Note: The typed key is directly obtained from the terminal, it is not mapped
and typeahead is ignored.</div>
<div class="old-help-para">The <a href="/neovim-docs-web/en/message#g%3C">g&lt;</a> command can be used to see the last page of previous command output.
This is especially useful if you accidentally typed <code>&lt;Space&gt;</code> at the hit-enter
prompt.</div>

  
  