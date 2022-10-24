---
title: Tree Sitter
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="" class="section-title" href="#">*Pi_Tutor.Txt* Interactive Tutorials.</a> 

*vim-tutor-mode*

vim-tutor-mode provides a system to follow and create interactive tutorials
for vim and third party plugins. It replaces the venerable `vimtutor` system.


## <a id="vim-tutor-usage" class="section-title" href="#vim-tutor-usage">1. Usage</a> 

vim-tutor-mode tutorials are hypertext documents, they have rich text and
contain links. To stand out from the rest of the text, links are underlined.
You can follow them by placing the cursor over them and pressing <Enter>, or
by double-clicking them.

1.1 Commands
------------
### <a id=":Tutor" class="section-title" href="#:Tutor">Note:</a>
:Tutor {tutorial}	Opens a tutorial. Command-line completion for
{tutorial} is provided, the candidates are a list of
'.tutor' files found in the 'tutor/'  folder in
the 'runtimepath'. Tutorials prefixed with 'vim-' will
always be shown first.

If no {tutorial} is provided, the command starts the
'vim-01-beginner' tutorial, which is equivalent to
Vim's `vimtutor`.


## <a id="vim-tutor-create" class="section-title" href="#vim-tutor-create">2. Creating Tutorials</a> 

Writing vim-tutor-mode tutorials is easy. For an overview of the format used,
please consult the 'tutor.tutor' file:
```

:Tutor tutor

```

New tutorials must be placed in the 'tutor/' folder in the 'runtimepath'
to be detected by the :Tutor command.

It is recommended to use a less formal style when writing tutorials than in
regular documentation (unless the content requires it).


## <a id="" class="section-title" href="#">3. Contributing</a> 

Development of the plugin is done over at github [1].  Feel free to report
issues and make suggestions.

[1]: https://github.com/fmoralesc/vim-tutor-mode

" vim: set ft=help :

