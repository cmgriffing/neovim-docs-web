---
title:  Remote
layout: ../../layouts/MainLayout.astro
---

  <a name="remote.txt"></a><a name="client-server"></a><h1> Remote</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/remote.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Vim client-server communication</div>
<div class="old-help-para"><h2 class="help-heading">1. Common functionality<span class="help-heading-tags">					<a name="clientserver"></a><span class="help-tag">clientserver</span></span></h2></div>
<div class="old-help-para">Nvim's <a href="api.html#RPC">RPC</a> functionality allows clients to programmatically control Nvim. Nvim
itself takes command-line arguments that cause it to become a client to another
Nvim running as a server. These arguments match those provided by Vim's
clientserver option.</div>
<div class="old-help-para">The following command line arguments are available:</div>
<div class="old-help-para"><div class="help-column_heading">    argument			meaning</div></div>
<div class="old-help-para">   --remote [+{cmd}] <code>{file}</code> ...					<a name="--remote"></a><code class="help-tag-right">--remote</code>
				Open the file list in a remote Vim.  When
				there is no Vim server, execute locally.
				Vim allows one init command: +{cmd}.
				This must be an Ex command that can be
				followed by "|". It's not yet supported by
				Nvim.
				The rest of the command line is taken as the
				file list.  Thus any non-file arguments must
				come before this.
				You cannot edit stdin this way <a href="starting.html#--">--</a>.
				The remote Vim is raised.  If you don't want
				this use<pre>nvim --remote-send "&lt;C-\&gt;&lt;C-N&gt;:n filename&lt;CR&gt;"</pre></div>
<div class="old-help-para">   --remote-silent [+{cmd}] <code>{file}</code> ...			<a name="--remote-silent"></a><code class="help-tag-right">--remote-silent</code>
				As above, but don't complain if there is no
				server and the file is edited locally.
							<a name="--remote-tab"></a><code class="help-tag-right">--remote-tab</code>
   --remote-tab			Like --remote but open each file in a new
				tabpage.
							<a name="--remote-tab-silent"></a><code class="help-tag-right">--remote-tab-silent</code>
   --remote-tab-silent		Like --remote-silent but open each file in a
				new tabpage.
								<a name="--remote-send"></a><code class="help-tag-right">--remote-send</code>
   --remote-send <code>{keys}</code>		Send <code>{keys}</code> to server and exit.  The <code>{keys}</code>
   				are not mapped.  Special key names are
				recognized, e.g., "&lt;CR&gt;" results in a CR
				character.
								<a name="--remote-expr"></a><code class="help-tag-right">--remote-expr</code>
   --remote-expr <code>{expr}</code>		Evaluate <code>{expr}</code> in server and print the result
				on stdout.
								<a name="--server"></a><code class="help-tag-right">--server</code>
   --server <code>{addr}</code>		Connect to the named pipe or socket at the
				given address for executing remote commands.
				See <a href="starting.html#--listen">--listen</a> for specifying an address when
				starting a server.</div>
<div class="old-help-para"><div class="help-column_heading">Examples</div></div>
<div class="old-help-para">Start an Nvim server listening on a named pipe at '~/.cache/nvim/server.pipe':<pre>nvim --listen ~/.cache/nvim/server.pipe</pre>
Edit "file.txt" in an Nvim server listening at '~/.cache/nvim/server.pipe':<pre>nvim --server ~/.cache/nvim/server.pipe --remote file.txt</pre>
This doesn't work, all arguments after --remote will be used as file names:<pre>nvim --remote --server ~/.cache/nvim/server.pipe file.txt</pre>
Tell the remote server to write all files and exit:<pre>nvim --server ~/.cache/nvim/server.pipe --remote-send '&lt;C-\&gt;&lt;C-N&gt;:wqa&lt;CR&gt;'</pre>
<a name="_remote-editing"></a><h3 class="help-heading">REMOTE EDITING</h3></div>
<div class="old-help-para">The --remote argument will cause a <a href="windows.html#%3Adrop">:drop</a> command to be constructed from the
rest of the command line and sent as described above.
Note that the --remote and --remote-wait arguments will consume the rest of
the command line.  I.e. all remaining arguments will be regarded as filenames.
You can not put options there!</div>
<div class="old-help-para"><h2 class="help-heading">2. Missing functionality<span class="help-heading-tags">			<a name="E5600"></a><span class="help-tag">E5600</span> <a name="clientserver-missing"></a><span class="help-tag">clientserver-missing</span></span></h2></div>
<div class="old-help-para">Vim supports additional functionality in clientserver that's not yet
implemented in Nvim. In particular, none of the "wait" variants are supported
yet. The following command line arguments are not yet available:</div>
<div class="old-help-para"><div class="help-column_heading">    argument			meaning</div></div>
<div class="old-help-para">   --remote-wait [+{cmd}] <code>{file}</code> ...				<a name="--remote-wait"></a><code class="help-tag-right">--remote-wait</code>
				Not yet supported by Nvim.
				As --remote, but wait for files to complete
				(unload) in remote Vim.
   --remote-wait-silent [+{cmd}] <code>{file}</code> ...		<a name="--remote-wait-silent"></a><code class="help-tag-right">--remote-wait-silent</code>
				Not yet supported by Nvim.
				As --remote-wait, but don't complain if there
				is no server.
							<a name="--remote-tab-wait"></a><code class="help-tag-right">--remote-tab-wait</code>
   --remote-tab-wait		Not yet supported by Nvim.
				Like --remote-wait but open each file in a new
				tabpage.
						<a name="--remote-tab-wait-silent"></a><code class="help-tag-right">--remote-tab-wait-silent</code>
   --remote-tab-wait-silent	Not yet supported by Nvim.
				Like --remote-wait-silent but open each file
				in a new tabpage.
							    <a name="--servername"></a><code class="help-tag-right">--servername</code>
   --servername <code>{name}</code>          Not yet supported by Nvim.
				Become the server <code>{name}</code>.  When used together
                                with one of the --remote commands: connect to
                                server <code>{name}</code> instead of the default (see
                                below).  The name used will be uppercase.</div>
<div class="old-help-para">								<a name="--serverlist"></a><code class="help-tag-right">--serverlist</code>
   --serverlist			Not yet supported by Nvim.
				Output a list of server names.</div>
<div class="old-help-para"><h3 class="help-heading">SERVER NAME<span class="help-heading-tags">						<a name="client-server-name"></a><span class="help-tag">client-server-name</span></span></h3></div>
<div class="old-help-para">By default Vim will try to register the name under which it was invoked (gvim,
egvim ...).  This can be overridden with the --servername argument.  Nvim
either listens on a named pipe or a socket and does not yet support this
--servername functionality.</div>

  
  