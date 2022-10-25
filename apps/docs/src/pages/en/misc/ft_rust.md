---
title: Ft Rust
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="Last change: 2017 Nov 02" class="section-title" href="#Last change: 2017 Nov 02">*Ft_Rust.Txt*	for Vim Version 8.1.</a> 

This is documentation for the Rust filetype plugin.


## <a id="rust" class="section-title" href="#rust">Contents</a> 

1. Introduction                                                   [rust-intro](/neovim-docs-web/en/misc/ft_rust#rust-intro)
2. Settings                                                    [rust-settings](/neovim-docs-web/en/misc/ft_rust#rust-settings)
3. Commands                                                    [rust-commands](/neovim-docs-web/en/misc/ft_rust#rust-commands)
4. Mappings                                                    [rust-mappings](/neovim-docs-web/en/misc/ft_rust#rust-mappings)


## <a id="rust-intro" class="section-title" href="#rust-intro">Introduction</a> 

This plugin provides syntax and supporting functionality for the Rust
filetype.


## <a id="rust-settings" class="section-title" href="#rust-settings">Settings</a> 

This plugin has a few variables you can define in your vimrc that change the
behavior of the plugin.

### <a id="g:rustc_path" class="section-title" href="#g:rustc_path">Note:</a>
g:rustc_path~
Set this option to the path to rustc for use in the |:RustRun| and
|:RustExpand| commands. If unset, "rustc" will be located in $PATH:
```	    let g:rustc_path = $HOME .. "/bin/rustc"
```


### <a id="g:rustc_makeprg_no_percent" class="section-title" href="#g:rustc_makeprg_no_percent">Note:</a>
g:rustc_makeprg_no_percent~
Set this option to 1 to have 'makeprg' default to "rustc" instead of
"rustc %":
```	    let g:rustc_makeprg_no_percent = 1
```


### <a id="g:rust_conceal" class="section-title" href="#g:rust_conceal">Note:</a>
g:rust_conceal~
Set this option to turn on the basic [conceal](undefined#conceal) support:
```	    let g:rust_conceal = 1
```


### <a id="g:rust_conceal_mod_path" class="section-title" href="#g:rust_conceal_mod_path">Note:</a>
g:rust_conceal_mod_path~
Set this option to turn on [conceal](undefined#conceal) for the path connecting token
"::":
```	    let g:rust_conceal_mod_path = 1
```


### <a id="g:rust_conceal_pub" class="section-title" href="#g:rust_conceal_pub">Note:</a>
g:rust_conceal_pub~
Set this option to turn on [conceal](undefined#conceal) for the "pub" token:
```	    let g:rust_conceal_pub = 1
```


### <a id="g:rust_recommended_style" class="section-title" href="#g:rust_recommended_style">Note:</a>
g:rust_recommended_style~
Set this option to enable vim indentation and textwidth settings to
conform to style conventions of the rust standard library (i.e. use 4
spaces for indents and sets 'textwidth' to 99). This option is enabled
by default. To disable it:
```	    let g:rust_recommended_style = 0
```


### <a id="g:rust_fold" class="section-title" href="#g:rust_fold">Note:</a>
g:rust_fold~
Set this option to turn on [folding](undefined#folding):
```	    let g:rust_fold = 1
```

Value		Effect ~
0		No folding
1		Braced blocks are folded. All folds are open by
default.
2		Braced blocks are folded. 'foldlevel' is left at the
global value (all folds are closed by default).

### <a id="g:rust_bang_comment_leader" class="section-title" href="#g:rust_bang_comment_leader">Note:</a>
g:rust_bang_comment_leader~
Set this option to 1 to preserve the leader on multi-line doc comments
using the /*! syntax:
```	    let g:rust_bang_comment_leader = 1
```


### <a id="g:ftplugin_rust_source_path" class="section-title" href="#g:ftplugin_rust_source_path">Note:</a>
g:ftplugin_rust_source_path~
Set this option to a path that should be prepended to 'path' for Rust
source files:
```	    let g:ftplugin_rust_source_path = $HOME .. '/dev/rust'
```


### <a id="g:rustfmt_command" class="section-title" href="#g:rustfmt_command">Note:</a>
g:rustfmt_command~
Set this option to the name of the "rustfmt" executable in your $PATH. If
not specified it defaults to "rustfmt" :
```	    let g:rustfmt_command = 'rustfmt'
```

### <a id="g:rustfmt_autosave" class="section-title" href="#g:rustfmt_autosave">Note:</a>
g:rustfmt_autosave~
Set this option to 1 to run |:RustFmt| automatically when saving a
buffer. If not specified it defaults to 0 :
```	    let g:rustfmt_autosave = 0
```

### <a id="g:rustfmt_fail_silently" class="section-title" href="#g:rustfmt_fail_silently">Note:</a>
g:rustfmt_fail_silently~
Set this option to 1 to prevent "rustfmt" from populating the
[location-list](undefined#location-list) with errors. If not specified it defaults to 0:
```	    let g:rustfmt_fail_silently = 0
```

### <a id="g:rustfmt_options" class="section-title" href="#g:rustfmt_options">Note:</a>
g:rustfmt_options~
Set this option to a string of options to pass to "rustfmt". The
write-mode is already set to "overwrite". If not specified it
defaults to '' :
```	    let g:rustfmt_options = ''
```


### <a id="g:rust_playpen_url" class="section-title" href="#g:rust_playpen_url">Note:</a>
g:rust_playpen_url~
Set this option to override the URL for the playpen to use:
```	    let g:rust_playpen_url = 'https://play.rust-lang.org/'
```


### <a id="g:rust_shortener_url" class="section-title" href="#g:rust_shortener_url">Note:</a>
g:rust_shortener_url~
Set this option to override the URL for the URL shortener:
```	    let g:rust_shortener_url = 'https://is.gd/'
```


## <a id="rust-commands" class="section-title" href="#rust-commands">Commands</a> 

:RustRun  [args]                                                    *:RustRun*
:RustRun! [rustc-args] [--] [args]
Compiles and runs the current file. If it has unsaved changes,
it will be saved first using |:update|. If the current file is
an unnamed buffer, it will be written to a temporary file
first. The compiled binary is always placed in a temporary
directory, but is run from the current directory.

The arguments given to |:RustRun| will be passed to the
compiled binary.

If ! is specified, the arguments are passed to rustc instead.
A "--" argument will separate the rustc arguments from the
arguments passed to the binary.

If |g:rustc_path| is defined, it is used as the path to rustc.
Otherwise it is assumed rustc can be found in $PATH.

:RustExpand  [args]                                              *:RustExpand*
:RustExpand! [TYPE] [args]
Expands the current file using --pretty and displays the
results in a new split. If the current file has unsaved
changes, it will be saved first using |:update|. If the
current file is an unnamed buffer, it will be written to a
temporary file first.

The arguments given to |:RustExpand| will be passed to rustc.
This is largely intended for specifying various --cfg
configurations.

If ! is specified, the first argument is the expansion type to
pass to rustc --pretty. Otherwise it will default to
"expanded".

If |g:rustc_path| is defined, it is used as the path to rustc.
Otherwise it is assumed rustc can be found in $PATH.

### <a id=":RustEmitIr" class="section-title" href="#:RustEmitIr">:RustEmitIr [args]</a>
Compiles the current file to LLVM IR and displays the results
in a new split. If the current file has unsaved changes, it
will be saved first using |:update|. If the current file is an
unnamed buffer, it will be written to a temporary file first.

The arguments given to |:RustEmitIr| will be passed to rustc.

If |g:rustc_path| is defined, it is used as the path to rustc.
Otherwise it is assumed rustc can be found in $PATH.

### <a id=":RustEmitAsm" class="section-title" href="#:RustEmitAsm">:RustEmitAsm [args]</a>
Compiles the current file to assembly and displays the results
in a new split. If the current file has unsaved changes, it
will be saved first using |:update|. If the current file is an
unnamed buffer, it will be written to a temporary file first.

The arguments given to |:RustEmitAsm| will be passed to rustc.

If |g:rustc_path| is defined, it is used as the path to rustc.
Otherwise it is assumed rustc can be found in $PATH.

### <a id=":RustPlay" class="section-title" href="#:RustPlay">:RustPlay</a>
This command will only work if you have web-api.vim installed
(available at https://github.com/mattn/webapi-vim).  It sends the
current selection, or if nothing is selected, the entirety of the
current buffer to the Rust playpen, and emits a message with the
shortened URL to the playpen.

|g:rust_playpen_url| is the base URL to the playpen, by default
"https://play.rust-lang.org/".

|g:rust_shortener_url| is the base URL for the shortener, by
default "https://is.gd/"

### <a id=":RustFmt" class="section-title" href="#:RustFmt">:RustFmt</a>
Runs |g:rustfmt_command| on the current buffer. If
|g:rustfmt_options| is set then those will be passed to the
executable.

If |g:rustfmt_fail_silently| is 0 (the default) then it
will populate the [location-list](undefined#location-list) with the errors from
|g:rustfmt_command|. If |g:rustfmt_fail_silently| is set to 1
then it will not populate the [location-list](undefined#location-list).

### <a id=":RustFmtRange" class="section-title" href="#:RustFmtRange">:RustFmtRange</a>
Runs |g:rustfmt_command| with selected range. See
|:RustFmt| for any other information.


## <a id="rust-mappings" class="section-title" href="#rust-mappings">Mappings</a> 

This plugin defines mappings for |[[| and |]]| to support hanging indents.

It also has a few other mappings:

### <a id="rust_<D-r>" class="section-title" href="#rust_<D-r>">Note:</a>
D-r>			Executes |:RustRun| with no arguments.
Note: This binding is only available in MacVim.

### <a id="rust_<D-R>" class="section-title" href="#rust_<D-R>">Note:</a>
D-R>			Populates the command line with |:RustRun|! using the
arguments given to the last invocation, but does not
execute it.
Note: This binding is only available in MacVim.


## <a id="" class="section-title" href="#">Vim Tw 78 Sw 4 Ts 8 Noet Ft Help Norl</a> 



