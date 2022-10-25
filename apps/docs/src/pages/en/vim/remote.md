---
title: Remote
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="Nvim" class="section-title" href="#Nvim"> Remote Txt</a> 

VIM REFERENCE MANUAL    by Bram Moolenaar


### <a id="client-server" class="section-title" href="#client-server">Vim client-server communication</a>

                                      Type [gO](#gO) to see the table of contents.


## <a id="clientserver" class="section-title" href="#clientserver">1. Common Functionality</a> 

Nvim's [RPC](#RPC) functionality allows clients to programmatically control Nvim. Nvim
itself takes command-line arguments that cause it to become a client to another
Nvim running as a server. These arguments match those provided by Vim's
clientserver option.

The following command line arguments are available:

    argument			meaning	~

   --remote [+{cmd}] {file} ...					*--remote*
				Open the file list in a remote Vim.  When
				there is no Vim server, execute locally.
				Vim allows one init command: +{cmd}.
				This must be an Ex command that can be
				followed by "|". It's not yet supported by
				Nvim.
				The rest of the command line is taken as the
				file list.  Thus any non-file arguments must
				come before this.
				You cannot edit stdin this way [--](#--).
				The remote Vim is raised.  If you don't want
				this use 
```				 nvim --remote-send "<C-\><C-N>:n filename<CR>"
```

   --remote-silent [+{cmd}] {file} ...			*--remote-silent*
				As above, but don't complain if there is no
				server and the file is edited locally.
### <a id="--remote-tab" class="section-title" href="#--remote-tab">Note:</a>
   --remote-tab			Like --remote but open each file in a new
				tabpage.
### <a id="--remote-tab-silent" class="section-title" href="#--remote-tab-silent">Note:</a>
   --remote-tab-silent		Like --remote-silent but open each file in a
				new tabpage.
### <a id="--remote-send" class="section-title" href="#--remote-send">Note:</a>
   --remote-send {keys}		Send {keys} to server and exit.  The {keys}
   				are not mapped.  Special key names are
				recognized, e.g., "<CR>" results in a CR
				character.
### <a id="--remote-expr" class="section-title" href="#--remote-expr">Note:</a>
   --remote-expr {expr}		Evaluate {expr} in server and print the result
				on stdout.
### <a id="--server" class="section-title" href="#--server">Note:</a>
   --server {addr}		Connect to the named pipe or socket at the
				given address for executing remote commands.
				See [--listen](#--listen) for specifying an address when
				starting a server.

Examples ~

Start an Nvim server listening on a named pipe at '~/.cache/nvim/server.pipe':
    nvim --listen ~/.cache/nvim/server.pipe

Edit "file.txt" in an Nvim server listening at '~/.cache/nvim/server.pipe':
    nvim --server ~/.cache/nvim/server.pipe --remote file.txt

This doesn't work, all arguments after --remote will be used as file names:
    nvim --remote --server ~/.cache/nvim/server.pipe file.txt

Tell the remote server to write all files and exit:
    nvim --server ~/.cache/nvim/server.pipe --remote-send '<C-\><C-N>:wqa<CR>'


REMOTE EDITING

The --remote argument will cause a [:drop](#:drop) command to be constructed from the
rest of the command line and sent as described above.
Note that the --remote and --remote-wait arguments will consume the rest of
the command line.  I.e. all remaining arguments will be regarded as filenames.
You can not put options there!


## <a id="E5600 clientserver-missing" class="section-title" href="#E5600 clientserver-missing">2. Missing Functionality</a> 

Vim supports additional functionality in clientserver that's not yet
implemented in Nvim. In particular, none of the "wait" variants are supported
yet. The following command line arguments are not yet available:

    argument			meaning	~

   --remote-wait [+{cmd}] {file} ...				*--remote-wait*
				Not yet supported by Nvim.
				As --remote, but wait for files to complete
				(unload) in remote Vim.
   --remote-wait-silent [+{cmd}] {file} ...		*--remote-wait-silent*
				Not yet supported by Nvim.
				As --remote-wait, but don't complain if there
				is no server.
### <a id="--remote-tab-wait" class="section-title" href="#--remote-tab-wait">Note:</a>
   --remote-tab-wait		Not yet supported by Nvim.
				Like --remote-wait but open each file in a new
				tabpage.
### <a id="--remote-tab-wait-silent" class="section-title" href="#--remote-tab-wait-silent">Note:</a>
   --remote-tab-wait-silent	Not yet supported by Nvim.
				Like --remote-wait-silent but open each file
				in a new tabpage.
### <a id="--servername" class="section-title" href="#--servername">Note:</a>
   --servername {name}          Not yet supported by Nvim.
				Become the server {name}.  When used together
                                with one of the --remote commands: connect to
                                server {name} instead of the default (see
                                below).  The name used will be uppercase.

### <a id="--serverlist" class="section-title" href="#--serverlist">Note:</a>
   --serverlist			Not yet supported by Nvim.
				Output a list of server names.




### <a id="client-server-name" class="section-title" href="#client-server-name">Server Name</a>

By default Vim will try to register the name under which it was invoked (gvim,
egvim ...).  This can be overridden with the --servername argument.  Nvim
either listens on a named pipe or a socket and does not yet support this
--servername functionality.

 vim:tw=78:sw=4:ts=8:noet:ft=help:norl:

