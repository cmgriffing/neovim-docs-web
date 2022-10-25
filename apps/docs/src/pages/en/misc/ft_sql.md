---
title: Ft Sql
description: Some page
layout: "@layouts/MainLayout.astro"
---


## <a id="" class="section-title" href="#">*Ft_Sql.Txt*	Nvim</a> 

by David Fishburn

This is a filetype plugin to work with SQL files.

The Structured Query Language (SQL) is a standard which specifies statements
that allow a user to interact with a relational database.  Vim includes
features for navigation, indentation and syntax highlighting.

1. Navigation					[sql-navigation](/neovim-docs-web/en/misc/ft_sql#sql-navigation)
1.1 Matchit					[sql-matchit](undefined#sql-matchit)
1.2 Text Object Motions			[sql-object-motions](undefined#sql-object-motions)
1.3 Predefined Object Motions		[sql-predefined-objects](undefined#sql-predefined-objects)
1.4 Macros					[sql-macros](undefined#sql-macros)
2. SQL Dialects					[sql-dialects](undefined#sql-dialects)
2.1 SQLSetType				[SQLSetType](undefined#SQLSetType)
2.2 SQLGetType				[SQLGetType](undefined#SQLGetType)
2.3 SQL Dialect Default			[sql-type-default](undefined#sql-type-default)
3. Adding new SQL Dialects			[sql-adding-dialects](/neovim-docs-web/en/misc/ft_sql#sql-adding-dialects)
4. OMNI SQL Completion				[sql-completion](/neovim-docs-web/en/misc/ft_sql#sql-completion)
4.1 Static mode				[sql-completion-static](undefined#sql-completion-static)
4.2 Dynamic mode				[sql-completion-dynamic](undefined#sql-completion-dynamic)
4.3 Tutorial				[sql-completion-tutorial](undefined#sql-completion-tutorial)
4.3.1 Complete Tables			[sql-completion-tables](undefined#sql-completion-tables)
4.3.2 Complete Columns			[sql-completion-columns](undefined#sql-completion-columns)
4.3.3 Complete Procedures		[sql-completion-procedures](undefined#sql-completion-procedures)
4.3.4 Complete Views			[sql-completion-views](undefined#sql-completion-views)
4.4 Completion Customization		[sql-completion-customization](undefined#sql-completion-customization)
4.5 SQL Maps				[sql-completion-maps](undefined#sql-completion-maps)
4.6 Using with other filetypes		[sql-completion-filetypes](undefined#sql-completion-filetypes)


## <a id="sql-navigation" class="section-title" href="#sql-navigation">1. Navigation</a> 

The SQL ftplugin provides a number of options to assist with file
navigation.


### <a id="sql-matchit" class="section-title" href="#sql-matchit">1.1 Matchit</a>


## <a id="" class="section-title" href="#">The Matchit Plugin (Https://Www.Vim.Org/Scripts/Script.Php?Script_Id=39)</a> 

provides many additional features and can be customized for different
languages.  The matchit plugin is configured by defining a local
buffer variable, b:match_words.  Pressing the % key while on various
keywords will move the cursor to its match.  For example, if the cursor
is on an "if", pressing % will cycle between the "else", "elseif" and
"end if" keywords.

The following keywords are supported:
if
elseif | elsif
else [if]
end if

[while condition] loop
leave
break
continue
exit
end loop

for
leave
break
continue
exit
end loop

do
statements
doend

case
when
when
default
end case

merge
when not matched
when matched

create[ or replace] procedure[function](undefined#function)event
returns


### <a id="sql-object-motions" class="section-title" href="#sql-object-motions">1.2 Text Object Motions</a>


## <a id="" class="section-title" href="#">Vim Has a Number of Predefined Keys for Working With Text [Object-Motions](undefined#Object-Motions).</a> 

This filetype plugin attempts to translate these keys to maps which make sense
for the SQL language.

The following [Normal](undefined#Normal) mode and [Visual](undefined#Visual) mode maps exist (when you edit a SQL
file):
]]		    move forward to the next 'begin'
[[		    move backwards to the previous 'begin'
][		    move forward to the next 'end'
[]		    move backwards to the previous 'end'


### <a id="sql-predefined-objects" class="section-title" href="#sql-predefined-objects">1.3 Predefined Object Motions</a>


## <a id="" class="section-title" href="#">Most Relational Databases Support Various Standard Features, Tables, Indices,</a> 

triggers and stored procedures.  Each vendor also has a variety of proprietary
objects.  The next set of maps have been created to help move between these
objects.  Depends on which database vendor you are using, the list of objects
must be configurable.  The filetype plugin attempts to define many of the
standard objects, plus many additional ones.  In order to make this as
flexible as possible, you can override the list of objects from within your
[vimrc](undefined#vimrc) with the following:
let g:ftplugin_sql_objects = 'function,procedure,event,table,trigger' ..
\ ',schema,service,publication,database,datatype,domain' ..
\ ',index,subscription,synchronization,view,variable'

The following [Normal](undefined#Normal) mode and [Visual](undefined#Visual) mode maps have been created which use
the above list:
]}		    move forward to the next 'create <object name>'
[{		    move backward to the previous 'create <object name>'

Repeatedly pressing ]} will cycle through each of these create statements:
create table t1 (
...
);

create procedure p1
begin
...
end;

create index i1 on t1 (c1);

The default setting for g:ftplugin_sql_objects is:
let g:ftplugin_sql_objects = 'function,procedure,event,' ..
\ '\\(existing\\\\|global\\s\\+temporary\\s\\+\\)\\\{,1}' ..
\ 'table,trigger' ..
\ ',schema,service,publication,database,datatype,domain' ..
\ ',index,subscription,synchronization,view,variable'

The above will also handle these cases:
create table t1 (
...
);
create existing table t2 (
...
);
create global temporary table t3 (
...
);

By default, the ftplugin only searches for CREATE statements.  You can also
override this via your |init.vim| with the following:
let g:ftplugin_sql_statements = 'create,alter'

The filetype plugin defines three types of comments:
1.  --
2.  //
3.  /*
### <a id="" class="section-title" href="#">Note:</a>
### <a id="/" class="section-title" href="#/">Note:</a>

The following [Normal](undefined#Normal) mode and [Visual](undefined#Visual) mode maps have been created to work
with comments:
]"		    move forward to the beginning of a comment
["		    move forward to the end of a comment



### <a id="sql-macros" class="section-title" href="#sql-macros">1.4 Macros</a>


## <a id="" class="section-title" href="#">Vim's Feature to Find Macro Definitions, |'define'|, Is Supported Using This</a> 

regular expression:
\c\<\(VARIABLE\|DECLARE\|IN\|OUT\|INOUT\)\>

This addresses the following code:
CREATE VARIABLE myVar1 INTEGER;

CREATE PROCEDURE sp_test(
IN myVar2 INTEGER,
OUT myVar3 CHAR(30),
INOUT myVar4 NUMERIC(20,0)
)
BEGIN
DECLARE myVar5 INTEGER;

SELECT c1, c2, c3
INTO myVar2, myVar3, myVar4
FROM T1
WHERE c4 = myVar1;
END;

Place your cursor on "myVar1" on this line:
WHERE c4 = myVar1;
^

Press any of the following keys:
[d
[D
[CTRL-D


## <a id="sql-dialects sql-types" class="section-title" href="#sql-dialects sql-types">2. SQL Dialects</a> <span id="sybase"></span>

### <a id="sqlanywhere" class="section-title" href="#sqlanywhere">Note:</a>
### <a id="oracle plsql sqlj" class="section-title" href="#oracle plsql sqlj">Note:</a>
### <a id="sqlserver" class="section-title" href="#sqlserver">Note:</a>
### <a id="mysql postgresql psql" class="section-title" href="#mysql postgresql psql">Note:</a>
### <a id="informix" class="section-title" href="#informix">Note:</a>

All relational databases support SQL.  There is a portion of SQL that is
portable across vendors (ex. CREATE TABLE, CREATE INDEX), but there is a
great deal of vendor specific extensions to SQL.  Oracle supports the
"CREATE OR REPLACE" syntax, column defaults specified in the CREATE TABLE
statement and the procedural language (for stored procedures and triggers).

The default Vim distribution ships with syntax highlighting based on Oracle's
PL/SQL.  The default SQL indent script works for Oracle and SQL Anywhere.
The default filetype plugin works for all vendors and should remain vendor
neutral, but extendable.

Vim currently has support for a variety of different vendors, currently this
is via syntax scripts. Unfortunately, to flip between different syntax rules
you must either create:
1.  New filetypes
2.  Custom autocmds
3.  Manual steps / commands

The majority of people work with only one vendor's database product, it would
be nice to specify a default in your |init.vim|.


### <a id="sqlsettype SQLSetType" class="section-title" href="#sqlsettype SQLSetType">2.1 SQLSetType</a>


## <a id="" class="section-title" href="#">For the People That Work With Many Different Databases, It Is Nice to Be</a> 

able to flip between the various vendors rules (indent, syntax) on a per
buffer basis, at any time.  The ftplugin/sql.vim file defines this function:
SQLSetType

Executing this function without any parameters will set the indent and syntax
scripts back to their defaults, see [sql-type-default](undefined#sql-type-default).  You can use the <Tab>
key to complete the optional parameter.

After typing the function name and a space, you can use the completion to
supply a parameter.  The function takes the name of the Vim script you want to
source.  Using the [cmdline-completion](/neovim-docs-web/en/vim/cmdline#cmdline-completion) feature, the SQLSetType function will
search the |'runtimepath'| for all Vim scripts with a name containing "sql".
This takes the guess work out of the spelling of the names.  The following are
examples:
:SQLSetType
:SQLSetType sqloracle
:SQLSetType sqlanywhere
:SQLSetType sqlinformix
:SQLSetType mysql

The easiest approach is to the use <Tab> character which will first complete
the command name (SQLSetType), after a space and another <Tab>, display a list
of available Vim script names:
:SQL<Tab><space><Tab>


### <a id="sqlgettype SQLGetType" class="section-title" href="#sqlgettype SQLGetType">2.2 SQLGetType</a>


## <a id="" class="section-title" href="#">At Anytime You Can Determine Which SQL Dialect You Are Using by Calling The</a> 

SQLGetType command.  The ftplugin/sql.vim file defines this function:
SQLGetType

This will echo:
Current SQL dialect in use:sqlanywhere


### <a id="sql-type-default" class="section-title" href="#sql-type-default">2.3 SQL Dialect Default</a>


## <a id="" class="section-title" href="#">As Mentioned Earlier, the Default Syntax Rules for Vim Is Based on Oracle</a> 

(PL/SQL).  You can override this default by placing one of the following in
your |init.vim|:
let g:sql_type_default = 'sqlanywhere'
let g:sql_type_default = 'sqlinformix'
let g:sql_type_default = 'mysql'

If you added the following to your |init.vim|:
let g:sql_type_default = 'sqlinformix'

The next time edit a SQL file the following scripts will be automatically
loaded by Vim:
ftplugin/sql.vim
syntax/sqlinformix.vim
indent/sql.vim
Notice indent/sqlinformix.sql was not loaded.  There is no indent file
for Informix, Vim loads the default files if the specified files does not
exist.


## <a id="sql-adding-dialects" class="section-title" href="#sql-adding-dialects">3. Adding New SQL Dialects</a> 

If you begin working with a SQL dialect which does not have any customizations
available with the default Vim distribution you can check https://www.vim.org
to see if any customization currently exist.  If not, you can begin by cloning
an existing script.  Read [filetype-plugins](/neovim-docs-web/en/vim/filetype#filetype-plugins) for more details.

To help identify these scripts, try to create the files with a "sql" prefix.
If you decide you wish to create customizations for the SQLite database, you
can create any of the following:
Unix
~/.config/nvim/syntax/sqlite.vim
~/.config/nvim/indent/sqlite.vim

No changes are necessary to the SQLSetType function.  It will automatically
pick up the new SQL files and load them when you issue the SQLSetType command.


## <a id="sql-completion" class="section-title" href="#sql-completion">4. OMNI SQL Completion</a> <span id="omni-sql-completion"></span>

Vim 7 includes a code completion interface and functions which allows plugin
developers to build in code completion for any language.  Vim 7 includes
code completion for the SQL language.

There are two modes to the SQL completion plugin, static and dynamic.  The
static mode populates the popups with the data generated from current syntax
highlight rules.  The dynamic mode populates the popups with data retrieved
directly from a database.  This includes, table lists, column lists,
procedures names and more.

### <a id="sql-completion-static" class="section-title" href="#sql-completion-static">4.1 Static Mode</a>


## <a id="" class="section-title" href="#">The Static Popups Created Contain Items Defined by the Active Syntax Rules</a> 

while editing a file with a filetype of SQL.  The plugin defines (by default)
various maps to help the user refine the list of items to be displayed.
The defaults static maps are:
imap <buffer> <C-C>a <C-\><C-O>:call sqlcomplete#Map('syntax')<CR><C-X><C-O>
imap <buffer> <C-C>k <C-\><C-O>:call sqlcomplete#Map('sqlKeyword')<CR><C-X><C-O>
imap <buffer> <C-C>f <C-\><C-O>:call sqlcomplete#Map('sqlFunction')<CR><C-X><C-O>
imap <buffer> <C-C>o <C-\><C-O>:call sqlcomplete#Map('sqlOption')<CR><C-X><C-O>
imap <buffer> <C-C>T <C-\><C-O>:call sqlcomplete#Map('sqlType')<CR><C-X><C-O>
imap <buffer> <C-C>s <C-\><C-O>:call sqlcomplete#Map('sqlStatement')<CR><C-X><C-O>

The use of "<C-C>" can be user chosen by using the following in your |init.vim|
as it may not work properly on all platforms:
let g:ftplugin_sql_omni_key = '<C-C>'
The static maps (which are based on the syntax highlight groups) follow this
format:
imap <buffer> <C-C>k <C-\><C-O>:call sqlcomplete#Map('sqlKeyword')<CR><C-X><C-O>
### <a id="imap <buffer> <C-C>k <C-\><C-O>:call sqlcomplete#Map('sqlKeyword\w')<CR><C-X><C-O>" class="section-title" href="#imap <buffer> <C-C>k <C-\><C-O>:call sqlcomplete#Map('sqlKeyword\w')<CR><C-X><C-O>">Note:</a>

This command breaks down as:
imap		   - Create an insert map
<buffer>		   - Only for this buffer
<C-C>k		   - Your choice of key map
<C-\><C-O>		   - Execute one command, return to Insert mode
:call sqlcomplete#Map( - Allows the SQL completion plugin to perform some
housekeeping functions to allow it to be used in
conjunction with other completion plugins.
Indicate which item you want the SQL completion
plugin to complete.
In this case we are asking the plugin to display
items from the syntax highlight group
'sqlKeyword'.
You can view a list of highlight group names to
choose from by executing the
:syntax list
command while editing a SQL file.
'sqlKeyword'	   - Display the items for the sqlKeyword highlight
group
### <a id="'sqlKeyword\w'" class="section-title" href="#'sqlKeyword\w'">Note:</a>
uses a regular expression to determine which
syntax groups to use
)<CR>		   - Execute the :let command
<C-X><C-O>		   - Trigger the standard omni completion key stroke.
Passing in 'sqlKeyword' instructs the SQL
completion plugin to populate the popup with
items from the sqlKeyword highlight group.  The
plugin will also cache this result until Vim is
restarted.  The syntax list is retrieved using
the syntaxcomplete plugin.

Using the 'syntax' keyword is a special case.  This instructs the
syntaxcomplete plugin to retrieve all syntax items.  So this will effectively
work for any of Vim's SQL syntax files.  At the time of writing this includes
10 different syntax files for the different dialects of SQL (see section 3
above, [sql-dialects](undefined#sql-dialects)).

Here are some examples of the entries which are pulled from the syntax files:
All
- Contains the contents of all syntax highlight groups
Statements
- Select, Insert, Update, Delete, Create, Alter, ...
Functions
- Min, Max, Trim, Round, Date, ...
Keywords
- Index, Database, Having, Group, With
Options
- Isolation_level, On_error, Qualify_owners, Fire_triggers, ...
Types
- Integer, Char, Varchar, Date, DateTime, Timestamp, ...


### <a id="sql-completion-dynamic" class="section-title" href="#sql-completion-dynamic">4.2 Dynamic Mode</a>


## <a id="In" class="section-title" href="#In">Dynamic Mode Populates the Popups With Data Directly From a Database.</a> 

order for the dynamic feature to be enabled you must have the dbext.vim
plugin installed, (https://vim.sourceforge.net/script.php?script_id=356).

Dynamic mode is used by several features of the SQL completion plugin.
After installing the dbext plugin see the dbext-tutorial for additional
configuration and usage.  The dbext plugin allows the SQL completion plugin
to display a list of tables, procedures, views and columns.
Table List
- All tables for all schema owners
Procedure List
- All stored procedures for all schema owners
View List
- All stored procedures for all schema owners
Column List
- For the selected table, the columns that are part of the table

To enable the popup, while in INSERT mode, use the following key combinations
for each group (where <C-C> means hold the CTRL key down while pressing
the space bar):
Table List		   - <C-C>t
- <C-X><C-O> (the default map assumes tables)
Stored Procedure List - <C-C>p
View List		   - <C-C>v
Column List	   - <C-C>c

Drilling In / Out     - When viewing a popup window displaying the list
of tables, you can press <Right>, this will
replace the table currently highlighted with
the column list for that table.
- When viewing a popup window displaying the list
of columns, you can press <Left>, this will
replace the column list with the list of tables.
- This allows you to quickly drill down into a
table to view its columns and back again.
- <Right> and <Left> can also be chosen via
your |init.vim|
let g:ftplugin_sql_omni_key_right = '<Right>'
let g:ftplugin_sql_omni_key_left  = '<Left>'

The SQL completion plugin caches various lists that are displayed in
the popup window.  This makes the re-displaying of these lists very
fast.  If new tables or columns are added to the database it may become
necessary to clear the plugins cache.  The default map for this is:
imap <buffer> <C-C>R <C-\><C-O>:call sqlcomplete#Map('ResetCache')<CR><C-X><C-O>


### <a id="sql-completion-tutorial" class="section-title" href="#sql-completion-tutorial">4.3 SQL Tutorial</a>


## <a id="" class="section-title" href="#">This Tutorial Is Designed to Take You Through the Common Features of the SQL</a> 

completion plugin so that:
a) You gain familiarity with the plugin
b) You are introduced to some of the more common features
c) Show how to customize it to your preferences
d) Demonstrate "Best of Use" of the plugin (easiest way to configure).

First, create a new buffer:
:e tutorial.sql


Static features


## <a id="" class="section-title" href="#">To Take You Through the Various Lists, Simply Enter Insert Mode, Hit:</a> 

<C-C>s   (show SQL statements)
At this point, you can page down through the list until you find "select".
If you are familiar with the item you are looking for, for example you know
the statement begins with the letter "s".  You can type ahead (without the
quotes) "se" then press:
<C-Space>t
Assuming "select" is highlighted in the popup list press <Enter> to choose
the entry.  Now type:
### <a id=" fr<C-C>a (show all syntax items)" class="section-title" href="# fr<C-C>a (show all syntax items)">Note:</a>
choose "from" from the popup list.

When writing stored procedures using the "type" list is useful.  It contains
a list of all the database supported types.  This may or may not be true
depending on the syntax file you are using.  The SQL Anywhere syntax file
(sqlanywhere.vim) has support for this:
BEGIN
DECLARE customer_id <C-C>T <-- Choose a type from the list


Dynamic features


## <a id="" class="section-title" href="#">To Take Advantage of the Dynamic Features You Must First Install The</a> 

dbext.vim plugin (https://vim.sourceforge.net/script.php?script_id=356).  It
also comes with a tutorial.  From the SQL completion plugin's perspective,
the main feature dbext provides is a connection to a database.  dbext
connection profiles are the most efficient mechanism to define connection
information.  Once connections have been setup, the SQL completion plugin
uses the features of dbext in the background to populate the popups.

What follows assumes dbext.vim has been correctly configured, a simple test
is to run the command, :DBListTable.  If a list of tables is shown, you know
dbext.vim is working as expected.  If not, please consult the dbext.txt
documentation.

Assuming you have followed the dbext-tutorial you can press <C-C>t to
display a list of tables.  There is a delay while dbext is creating the table
list.  After the list is displayed press <C-W>.  This will remove both the
popup window and the table name already chosen when the list became active.

### <a id="sql-completion-tables" class="section-title" href="#sql-completion-tables"> 4.3.1 Table Completion:</a>

Press <C-C>t to display a list of tables from within the database you
have connected via the dbext plugin.
NOTE: All of the SQL completion popups support typing a prefix before pressing
the key map.  This will limit the contents of the popup window to just items
beginning with those characters.

### <a id="sql-completion-columns" class="section-title" href="#sql-completion-columns"> 4.3.2 Column Completion:</a>

The SQL completion plugin can also display a list of columns for particular
tables.  The column completion is triggered via <C-C>c.

NOTE: The following example uses <Right> to trigger a column list while
the popup window is active.

Example of using column completion:
- Press <C-C>t again to display the list of tables.
- When the list is displayed in the completion window, press <Right>,
this will replace the list of tables, with a list of columns for the
table highlighted (after the same short delay).
- If you press <Left>, this will again replace the column list with the
list of tables.  This allows you to drill into tables and column lists
very quickly.
- Press <Right> again while the same table is highlighted.  You will
notice there is no delay since the column list has been cached.  If you
change the schema of a cached table you can press <C-C>R, which
clears the SQL completion cache.
- NOTE: <Right> and <Left> have been designed to work while the
completion window is active.  If the completion popup window is
not active, a normal <Right> or <Left> will be executed.

Let's look at how we can build a SQL statement dynamically.  A select statement
requires a list of columns.  There are two ways to build a column list using
the SQL completion plugin.
One column at a time:
1. After typing SELECT press <C-C>t to display a list of tables.
2. Choose a table from the list.
3. Press <Right> to display a list of columns.
4. Choose the column from the list and press enter.
5. Enter a "," and press <C-C>c.  Generating a column list
generally requires having the cursor on a table name.  The plugin
uses this name to determine what table to retrieve the column list.
In this step, since we are pressing <C-C>c without the cursor
on a table name the column list displayed will be for the previous
table.  Choose a different column and move on.
6. Repeat step 5 as often as necessary.
All columns for a table:
1. After typing SELECT press <C-C>t to display a list of tables.
2. Highlight the table you need the column list for.
3. Press <Enter> to choose the table from the list.
4. Press <C-C>l to request a comma-separated list of all columns
for this table.
5. Based on the table name chosen in step 3, the plugin attempts to
decide on a reasonable table alias.	You are then prompted to
either accept of change the alias.  Press OK.
6. The table name is replaced with the column list of the table is
replaced with the comma separate list of columns with the alias
prepended to each of the columns.
7. Step 3 and 4 can be replaced by pressing <C-C>L, which has
a <C-Y> embedded in the map to choose the currently highlighted
table in the list.

There is a special provision when writing select statements.  Consider the
following statement:
### <a id="select " class="section-title" href="#select ">Note:</a>
from customer c,
contact cn,
department as dp,
employee e,
site_options so
where c.

In INSERT mode after typing the final "c." which is an alias for the
"customer" table, you can press either <C-C>c or <C-X><C-O>.  This will
popup a list of columns for the customer table.  It does this by looking back
to the beginning of the select statement and finding a list of the tables
specified in the FROM clause.  In this case it notes that in the string
"customer c", "c" is an alias for the customer table.  The optional "AS"
keyword is also supported, "customer AS c".


### <a id="sql-completion-procedures" class="section-title" href="#sql-completion-procedures"> 4.3.3 Procedure Completion:</a>

Similar to the table list, <C-C>p, will display a list of stored
procedures stored within the database.

### <a id="sql-completion-views" class="section-title" href="#sql-completion-views"> 4.3.4 View Completion:</a>

Similar to the table list, <C-C>v, will display a list of views in the
database.


### <a id="sql-completion-customization" class="section-title" href="#sql-completion-customization">4.4 Completion Customization</a>


## <a id="" class="section-title" href="#">The SQL Completion Plugin Can Be Customized Through Various Options Set In</a> 

your |init.vim|:
```    omni_sql_no_default_maps
- Default: This variable is not defined
- If this variable is defined, no maps are created for OMNI
completion.  See [sql-completion-maps](undefined#sql-completion-maps) for further discussion.
omni_sql_use_tbl_alias
- Default: a
- This setting is only used when generating a comma-separated
column list.	By default the map is <C-C>l.  When generating
a column list, an alias can be prepended to the beginning of each
column, for example:	e.emp_id, e.emp_name.  This option has three
settings:
n - do not use an alias
d - use the default (calculated) alias
a - ask to confirm the alias name
```

An alias is determined following a few rules:
1.  If the table name has an '_', then use it as a separator:
MY_TABLE_NAME --> MTN
my_table_name --> mtn
My_table_NAME --> MtN
2.  If the table name does NOT contain an '_', but DOES use
mixed case then the case is used as a separator:
MyTableName --> MTN
3.  If the table name does NOT contain an '_', and does NOT
use mixed case then the first letter of the table is used:
mytablename --> m
MYTABLENAME --> M

omni_sql_ignorecase
- Default: Current setting for 'ignorecase'
- Valid settings are 0 or 1.
- When entering a few letters before initiating completion, the list
will be filtered to display only the entries which begin with the
list of characters.  When this option is set to 0, the list will be
filtered using case sensitivity.

omni_sql_include_owner
- Default: 0, unless dbext.vim 3.00 has been installed
- Valid settings are 0 or 1.
- When completing tables, procedure or views and using dbext.vim 3.00
or higher the list of objects will also include the owner name.
When completing these objects and omni_sql_include_owner is enabled
the owner name will be replaced.

omni_sql_precache_syntax_groups
- Default:
['syntax','sqlKeyword','sqlFunction','sqlOption','sqlType','sqlStatement']
- sqlcomplete can be used in conjunction with other completion
plugins.  This is outlined at [sql-completion-filetypes](undefined#sql-completion-filetypes).  When the
filetype is changed temporarily to SQL, the sqlcompletion plugin
will cache the syntax groups listed in the List specified in this
option.

### <a id="sql-completion-maps" class="section-title" href="#sql-completion-maps">4.5 SQL Maps</a>


## <a id="" class="section-title" href="#">The Default SQL Maps Have Been Described in Other Sections of This Document In</a> 

greater detail.  Here is a list of the maps with a brief description of each.

Static Maps


## <a id="" class="section-title" href="#">These Are Maps Which Use Populate the Completion List Using Vim's Syntax</a> 

highlighting rules.
<C-C>a
- Displays all SQL syntax items.
<C-C>k
- Displays all SQL syntax items defined as 'sqlKeyword'.
<C-C>f
- Displays all SQL syntax items defined as 'sqlFunction.
<C-C>o
- Displays all SQL syntax items defined as 'sqlOption'.
<C-C>T
- Displays all SQL syntax items defined as 'sqlType'.
<C-C>s
- Displays all SQL syntax items defined as 'sqlStatement'.

Dynamic Maps


## <a id="" class="section-title" href="#">These Are Maps Which Use Populate the Completion List Using the Dbext.Vim</a> 

plugin.
<C-C>t
- Displays a list of tables.
<C-C>p
- Displays a list of procedures.
<C-C>v
- Displays a list of views.
<C-C>c
- Displays a list of columns for a specific table.
<C-C>l
- Displays a comma-separated list of columns for a specific table.
<C-C>L
- Displays a comma-separated list of columns for a specific table.
This should only be used when the completion window is active.
<Right>
- Displays a list of columns for the table currently highlighted in
the completion window.  <Right> is not recognized on most Unix
systems, so this maps is only created on the Windows platform.
If you would like the same feature on Unix, choose a different key
and make the same map in your vimrc.
<Left>
- Displays the list of tables.
<Left> is not recognized on most Unix systems, so this maps is
only created on the Windows platform.  If you would like the same
feature on Unix, choose a different key and make the same map in
your vimrc.
<C-C>R
- This maps removes all cached items and forces the SQL completion
to regenerate the list of items.

Customizing Maps


## <a id="Generally, the maps" class="section-title" href="#Generally, the maps">You Can Create as Many Additional Key Maps as You Like.</a> 

will be specifying different syntax highlight groups.

If you do not wish the default maps created or the key choices do not work on
your platform (often a case on *nix) you define the following variable in
your |init.vim|:
let g:omni_sql_no_default_maps = 1

Do not edit ftplugin/sql.vim directly!  If you change this file your changes
will be over written on future updates.  Vim has a special directory structure
which allows you to make customizations without changing the files that are
included with the Vim distribution.  If you wish to customize the maps
create an after/ftplugin/sql.vim (see [after-directory](undefined#after-directory)) and place the same
maps from the ftplugin/sql.vim in it using your own key strokes.  <C-C> was
chosen since it will work on both Windows and *nix platforms.  On the windows
platform you can also use <C-Space> or ALT keys.


### <a id="sql-completion-filetypes" class="section-title" href="#sql-completion-filetypes">4.6 Using with other filetypes</a>


## <a id="For example Perl, Java," class="section-title" href="#For example Perl, Java,">Many Times SQL Can Be Used With Different Filetypes.</a> 

PHP, Javascript can all interact with a database.  Often you need both the SQL
completion and the completion capabilities for the current language you are
editing.

This can be enabled easily with the following steps (assuming a Perl file):
1.  :e test.pl
2.  :set filetype=sql
3.  :set ft=perl

Step 1


## <a id="Vim automatically sets the filetype to" class="section-title" href="#Vim automatically sets the filetype to">Begins by Editing a Perl File.</a> 

"perl".  By default, Vim runs the appropriate filetype file
ftplugin/perl.vim.  If you are using the syntax completion plugin by following
the directions at [ft-syntax-omni](undefined#ft-syntax-omni) then the |'omnifunc'| option has been set to
"syntax#Complete".  Pressing <C-X><C-O> will display the omni popup containing
the syntax items for Perl.

Step 2


## <a id="" class="section-title" href="#">Manually Setting the Filetype to "Sql" Will Also Fire the Appropriate Filetype</a> 

files ftplugin/sql.vim.  This file will define a number of buffer specific
maps for SQL completion, see [sql-completion-maps](undefined#sql-completion-maps).  Now these maps have
been created and the SQL completion plugin has been initialized.  All SQL
syntax items have been cached in preparation.  The SQL filetype script detects
we are attempting to use two different completion plugins.  Since the SQL maps
begin with <C-C>, the maps will toggle the |'omnifunc'| when in use.  So you
can use <C-X><C-O> to continue using the completion for Perl (using the syntax
completion plugin) and <C-C> to use the SQL completion features.

Step 3


## <a id="" class="section-title" href="#">Setting the Filetype Back to Perl Sets All the Usual "Perl" Related Items Back</a> 

as they were.


vim:tw=78:ts=8:noet:ft=help:norl:

