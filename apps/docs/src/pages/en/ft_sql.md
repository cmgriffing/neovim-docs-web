---
title:  Ft_sql
layout: ../../layouts/MainLayout.astro
---

  <a name="ft_sql.txt"></a><a name="sql-navigation"></a><h1> Ft_sql</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/ft_sql.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">by David Fishburn</div>
<div class="old-help-para">This is a filetype plugin to work with SQL files.</div>
<div class="old-help-para">The Structured Query Language (SQL) is a standard which specifies statements
that allow a user to interact with a relational database.  Vim includes
features for navigation, indentation and syntax highlighting.</div>
<div class="old-help-para">1. Navigation					<a href="ft_sql.html#sql-navigation">sql-navigation</a>
    1.1 Matchit					<a href="ft_sql.html#sql-matchit">sql-matchit</a>
    1.2 Text Object Motions			<a href="ft_sql.html#sql-object-motions">sql-object-motions</a>
    1.3 Predefined Object Motions		<a href="ft_sql.html#sql-predefined-objects">sql-predefined-objects</a>
    1.4 Macros					<a href="ft_sql.html#sql-macros">sql-macros</a>
2. SQL Dialects					<a href="ft_sql.html#sql-dialects">sql-dialects</a>
    2.1 SQLSetType				<a href="ft_sql.html#SQLSetType">SQLSetType</a>
    2.2 SQLGetType				<a href="ft_sql.html#SQLGetType">SQLGetType</a>
    2.3 SQL Dialect Default			<a href="ft_sql.html#sql-type-default">sql-type-default</a>
3. Adding new SQL Dialects			<a href="ft_sql.html#sql-adding-dialects">sql-adding-dialects</a>
4. OMNI SQL Completion				<a href="ft_sql.html#sql-completion">sql-completion</a>
    4.1 Static mode				<a href="ft_sql.html#sql-completion-static">sql-completion-static</a>
    4.2 Dynamic mode				<a href="ft_sql.html#sql-completion-dynamic">sql-completion-dynamic</a>
    4.3 Tutorial				<a href="ft_sql.html#sql-completion-tutorial">sql-completion-tutorial</a>
	4.3.1 Complete Tables			<a href="ft_sql.html#sql-completion-tables">sql-completion-tables</a>
	4.3.2 Complete Columns			<a href="ft_sql.html#sql-completion-columns">sql-completion-columns</a>
	4.3.3 Complete Procedures		<a href="ft_sql.html#sql-completion-procedures">sql-completion-procedures</a>
	4.3.4 Complete Views			<a href="ft_sql.html#sql-completion-views">sql-completion-views</a>
    4.4 Completion Customization		<a href="ft_sql.html#sql-completion-customization">sql-completion-customization</a>
    4.5 SQL Maps				<a href="ft_sql.html#sql-completion-maps">sql-completion-maps</a>
    4.6 Using with other filetypes		<a href="ft_sql.html#sql-completion-filetypes">sql-completion-filetypes</a></div>
<div class="old-help-para"><h2 class="help-heading">1. Navigation</h2></div>
<div class="old-help-para">The SQL ftplugin provides a number of options to assist with file
navigation.</div>
<div class="old-help-para">1.1 Matchit					<a name="sql-matchit"></a><code class="help-tag-right">sql-matchit</code>
-----------
The matchit plugin (<a href="https://www.vim.org/scripts/script.php?script_id=39">https://www.vim.org/scripts/script.php?script_id=39</a>)
provides many additional features and can be customized for different
languages.  The matchit plugin is configured by defining a local
buffer variable, b:match_words.  Pressing the % key while on various
keywords will move the cursor to its match.  For example, if the cursor
is on an "if", pressing % will cycle between the "else", "elseif" and
"end if" keywords.</div>
<div class="old-help-para">The following keywords are supported:<pre>if
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

create[ or replace] procedure|function|event
returns</pre>
1.2 Text Object Motions				<a name="sql-object-motions"></a><code class="help-tag-right">sql-object-motions</code>
<a name="_-vim-has-a-number-of-predefined-keys-for-working-with-text-|object-motions|."></a><h3 class="help-heading">Vim has a number of predefined keys for working with text <a href="motion.html#object-motions">object-motions</a>.</h3>This filetype plugin attempts to translate these keys to maps which make sense
for the SQL language.</div>
<div class="old-help-para">The following <a href="intro.html#Normal">Normal</a> mode and <a href="visual.html#Visual">Visual</a> mode maps exist (when you edit a SQL
file):<pre>]]                    move forward to the next 'begin'
[[                    move backwards to the previous 'begin'
][                    move forward to the next 'end'
[]                    move backwards to the previous 'end'</pre>
1.3 Predefined Object Motions			<a name="sql-predefined-objects"></a><code class="help-tag-right">sql-predefined-objects</code>
<a name="_-most-relational-databases-support-various-standard-features,-tables,-indices,"></a><h3 class="help-heading">Most relational databases support various standard features, tables, indices,</h3>triggers and stored procedures.  Each vendor also has a variety of proprietary
objects.  The next set of maps have been created to help move between these
objects.  Depends on which database vendor you are using, the list of objects
must be configurable.  The filetype plugin attempts to define many of the
standard objects, plus many additional ones.  In order to make this as
flexible as possible, you can override the list of objects from within your
<a href="starting.html#vimrc">vimrc</a> with the following:<pre>let g:ftplugin_sql_objects = 'function,procedure,event,table,trigger' ..
            \ ',schema,service,publication,database,datatype,domain' ..
            \ ',index,subscription,synchronization,view,variable'</pre>
The following <a href="intro.html#Normal">Normal</a> mode and <a href="visual.html#Visual">Visual</a> mode maps have been created which use
the above list:<pre>]}                    move forward to the next 'create &lt;object name&gt;'
[{                    move backward to the previous 'create &lt;object name&gt;'</pre>
Repeatedly pressing ]} will cycle through each of these create statements:<pre>create table t1 (
    ...
);

create procedure p1
begin
    ...
end;

create index i1 on t1 (c1);</pre>
The default setting for g:ftplugin_sql_objects is:<pre>let g:ftplugin_sql_objects = 'function,procedure,event,' ..
            \ '\\(existing\\\\|global\\s\\+temporary\\s\\+\\)\\\{,1}' ..
            \ 'table,trigger' ..
            \ ',schema,service,publication,database,datatype,domain' ..
            \ ',index,subscription,synchronization,view,variable'</pre>
The above will also handle these cases:<pre>create table t1 (
    ...
);
create existing table t2 (
    ...
);
create global temporary table t3 (
    ...
);</pre>
By default, the ftplugin only searches for CREATE statements.  You can also
override this via your <a href="starting.html#init.vim">init.vim</a> with the following:<pre>let g:ftplugin_sql_statements = 'create,alter'</pre>
The filetype plugin defines three types of comments:<pre>1.  --
2.  //
3.  /*
     *
     */</pre>
The following <a href="intro.html#Normal">Normal</a> mode and <a href="visual.html#Visual">Visual</a> mode maps have been created to work
with comments:<pre>]"                    move forward to the beginning of a comment
["                    move forward to the end of a comment</pre>
1.4 Macros					   <a name="sql-macros"></a><code class="help-tag-right">sql-macros</code>
----------
Vim's feature to find macro definitions, <a href="options.html#'define'">'define'</a>, is supported using this
regular expression:<pre>\c\&lt;\(VARIABLE\|DECLARE\|IN\|OUT\|INOUT\)\&gt;</pre>
This addresses the following code:<pre>CREATE VARIABLE myVar1 INTEGER;

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
END;</pre>
Place your cursor on "myVar1" on this line:<pre>WHERE c4 = myVar1;
            ^</pre>
Press any of the following keys:<pre>[d
[D
[CTRL-D</pre>
<h2 class="help-heading">2. SQL Dialects<span class="help-heading-tags">					<a name="sql-dialects"></a><span class="help-tag">sql-dialects</span> <a name="sql-types"></a><span class="help-tag">sql-types</span></span></h2>						<a name="sybase"></a><code class="help-tag-right">sybase</code> <a name="TSQL"></a><code class="help-tag">TSQL</code> <a name="Transact-SQL"></a><code class="help-tag">Transact-SQL</code>
						<a name="sqlanywhere"></a><code class="help-tag-right">sqlanywhere</code>
						<a name="oracle"></a><code class="help-tag-right">oracle</code> <a name="plsql"></a><code class="help-tag">plsql</code> <a name="sqlj"></a><code class="help-tag">sqlj</code>
						<a name="sqlserver"></a><code class="help-tag-right">sqlserver</code>
						<a name="mysql"></a><code class="help-tag-right">mysql</code> <a name="postgresql"></a><code class="help-tag">postgresql</code> <a name="psql"></a><code class="help-tag">psql</code>
						<a name="informix"></a><code class="help-tag-right">informix</code></div>
<div class="old-help-para">All relational databases support SQL.  There is a portion of SQL that is
portable across vendors (ex. CREATE TABLE, CREATE INDEX), but there is a
great deal of vendor specific extensions to SQL.  Oracle supports the
"CREATE OR REPLACE" syntax, column defaults specified in the CREATE TABLE
statement and the procedural language (for stored procedures and triggers).</div>
<div class="old-help-para">The default Vim distribution ships with syntax highlighting based on Oracle's
PL/SQL.  The default SQL indent script works for Oracle and SQL Anywhere.
The default filetype plugin works for all vendors and should remain vendor
neutral, but extendable.</div>
<div class="old-help-para">Vim currently has support for a variety of different vendors, currently this
is via syntax scripts. Unfortunately, to flip between different syntax rules
you must either create:
    1.  New filetypes
    2.  Custom autocmds
    3.  Manual steps / commands</div>
<div class="old-help-para">The majority of people work with only one vendor's database product, it would
be nice to specify a default in your <a href="starting.html#init.vim">init.vim</a>.</div>
<div class="old-help-para">2.1 SQLSetType					<a name="sqlsettype"></a><code class="help-tag-right">sqlsettype</code> <a name="SQLSetType"></a><code class="help-tag">SQLSetType</code>
<a name="_-for-the-people-that-work-with-many-different-databases,-it-is-nice-to-be"></a><h3 class="help-heading">For the people that work with many different databases, it is nice to be</h3>able to flip between the various vendors rules (indent, syntax) on a per
buffer basis, at any time.  The ftplugin/sql.vim file defines this function:<pre>SQLSetType</pre>
Executing this function without any parameters will set the indent and syntax
scripts back to their defaults, see <a href="ft_sql.html#sql-type-default">sql-type-default</a>.  You can use the <code>&lt;Tab&gt;</code>
key to complete the optional parameter.</div>
<div class="old-help-para">After typing the function name and a space, you can use the completion to
supply a parameter.  The function takes the name of the Vim script you want to
source.  Using the <a href="cmdline.html#cmdline-completion">cmdline-completion</a> feature, the SQLSetType function will
search the <a href="options.html#'runtimepath'">'runtimepath'</a> for all Vim scripts with a name containing "sql".
This takes the guess work out of the spelling of the names.  The following are
examples:<pre>:SQLSetType
:SQLSetType sqloracle
:SQLSetType sqlanywhere
:SQLSetType sqlinformix
:SQLSetType mysql</pre>
The easiest approach is to the use <code>&lt;Tab&gt;</code> character which will first complete
the command name (SQLSetType), after a space and another <code>&lt;Tab&gt;</code>, display a list
of available Vim script names:<pre>:SQL&lt;Tab&gt;&lt;space&gt;&lt;Tab&gt;</pre>
2.2 SQLGetType					<a name="sqlgettype"></a><code class="help-tag-right">sqlgettype</code> <a name="SQLGetType"></a><code class="help-tag">SQLGetType</code>
<a name="_-at-anytime-you-can-determine-which-sql-dialect-you-are-using-by-calling-the"></a><h3 class="help-heading">At anytime you can determine which SQL dialect you are using by calling the</h3>SQLGetType command.  The ftplugin/sql.vim file defines this function:<pre>SQLGetType</pre>
This will echo:<pre>Current SQL dialect in use:sqlanywhere</pre>
2.3 SQL Dialect Default				<a name="sql-type-default"></a><code class="help-tag-right">sql-type-default</code>
<a name="_-as-mentioned-earlier,-the-default-syntax-rules-for-vim-is-based-on-oracle"></a><h3 class="help-heading">As mentioned earlier, the default syntax rules for Vim is based on Oracle</h3>(PL/SQL).  You can override this default by placing one of the following in
your <a href="starting.html#init.vim">init.vim</a>:<pre>let g:sql_type_default = 'sqlanywhere'
let g:sql_type_default = 'sqlinformix'
let g:sql_type_default = 'mysql'</pre>
If you added the following to your <a href="starting.html#init.vim">init.vim</a>:<pre>let g:sql_type_default = 'sqlinformix'</pre>
The next time edit a SQL file the following scripts will be automatically
loaded by Vim:<pre>ftplugin/sql.vim
syntax/sqlinformix.vim
indent/sql.vim</pre>
Notice indent/sqlinformix.sql was not loaded.  There is no indent file
for Informix, Vim loads the default files if the specified files does not
exist.</div>
<div class="old-help-para"><h2 class="help-heading">3. Adding new SQL Dialects<span class="help-heading-tags">			<a name="sql-adding-dialects"></a><span class="help-tag">sql-adding-dialects</span></span></h2></div>
<div class="old-help-para">If you begin working with a SQL dialect which does not have any customizations
available with the default Vim distribution you can check <a href="https://www.vim.org">https://www.vim.org</a>
to see if any customization currently exist.  If not, you can begin by cloning
an existing script.  Read <a href="filetype.html#filetype-plugins">filetype-plugins</a> for more details.</div>
<div class="old-help-para">To help identify these scripts, try to create the files with a "sql" prefix.
If you decide you wish to create customizations for the SQLite database, you
can create any of the following:<pre>Unix
    ~/.config/nvim/syntax/sqlite.vim
    ~/.config/nvim/indent/sqlite.vim</pre>
No changes are necessary to the SQLSetType function.  It will automatically
pick up the new SQL files and load them when you issue the SQLSetType command.</div>
<div class="old-help-para"><h2 class="help-heading">4. OMNI SQL Completion<span class="help-heading-tags">				<a name="sql-completion"></a><span class="help-tag">sql-completion</span></span></h2>						<a name="omni-sql-completion"></a><code class="help-tag-right">omni-sql-completion</code></div>
<div class="old-help-para">Vim 7 includes a code completion interface and functions which allows plugin
developers to build in code completion for any language.  Vim 7 includes
code completion for the SQL language.</div>
<div class="old-help-para">There are two modes to the SQL completion plugin, static and dynamic.  The
static mode populates the popups with the data generated from current syntax
highlight rules.  The dynamic mode populates the popups with data retrieved
directly from a database.  This includes, table lists, column lists,
procedures names and more.</div>
<div class="old-help-para">4.1 Static Mode					<a name="sql-completion-static"></a><code class="help-tag-right">sql-completion-static</code>
<a name="_-the-static-popups-created-contain-items-defined-by-the-active-syntax-rules"></a><h3 class="help-heading">The static popups created contain items defined by the active syntax rules</h3>while editing a file with a filetype of SQL.  The plugin defines (by default)
various maps to help the user refine the list of items to be displayed.
The defaults static maps are:<pre>imap &lt;buffer&gt; &lt;C-C&gt;a &lt;C-\&gt;&lt;C-O&gt;:call sqlcomplete#Map('syntax')&lt;CR&gt;&lt;C-X&gt;&lt;C-O&gt;
imap &lt;buffer&gt; &lt;C-C&gt;k &lt;C-\&gt;&lt;C-O&gt;:call sqlcomplete#Map('sqlKeyword')&lt;CR&gt;&lt;C-X&gt;&lt;C-O&gt;
imap &lt;buffer&gt; &lt;C-C&gt;f &lt;C-\&gt;&lt;C-O&gt;:call sqlcomplete#Map('sqlFunction')&lt;CR&gt;&lt;C-X&gt;&lt;C-O&gt;
imap &lt;buffer&gt; &lt;C-C&gt;o &lt;C-\&gt;&lt;C-O&gt;:call sqlcomplete#Map('sqlOption')&lt;CR&gt;&lt;C-X&gt;&lt;C-O&gt;
imap &lt;buffer&gt; &lt;C-C&gt;T &lt;C-\&gt;&lt;C-O&gt;:call sqlcomplete#Map('sqlType')&lt;CR&gt;&lt;C-X&gt;&lt;C-O&gt;
imap &lt;buffer&gt; &lt;C-C&gt;s &lt;C-\&gt;&lt;C-O&gt;:call sqlcomplete#Map('sqlStatement')&lt;CR&gt;&lt;C-X&gt;&lt;C-O&gt;</pre>
The use of "&lt;C-C&gt;" can be user chosen by using the following in your <a href="starting.html#init.vim">init.vim</a>
as it may not work properly on all platforms:<pre>let g:ftplugin_sql_omni_key = '&lt;C-C&gt;'</pre>
The static maps (which are based on the syntax highlight groups) follow this
format:<pre>imap &lt;buffer&gt; &lt;C-C&gt;k &lt;C-\&gt;&lt;C-O&gt;:call sqlcomplete#Map('sqlKeyword')&lt;CR&gt;&lt;C-X&gt;&lt;C-O&gt;
imap &lt;buffer&gt; &lt;C-C&gt;k &lt;C-\&gt;&lt;C-O&gt;:call sqlcomplete#Map('sqlKeyword\w*')&lt;CR&gt;&lt;C-X&gt;&lt;C-O&gt;</pre>
This command breaks down as:<pre>imap                   - Create an insert map
&lt;buffer&gt;                   - Only for this buffer
&lt;C-C&gt;k                   - Your choice of key map
&lt;C-\&gt;&lt;C-O&gt;                   - Execute one command, return to Insert mode
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
'sqlKeyword'           - Display the items for the sqlKeyword highlight
                         group
'sqlKeyword\w*'           - A second option available with Vim 7.4 which
                         uses a regular expression to determine which
                         syntax groups to use
)&lt;CR&gt;                   - Execute the :let command
&lt;C-X&gt;&lt;C-O&gt;                   - Trigger the standard omni completion key stroke.
                         Passing in 'sqlKeyword' instructs the SQL
                         completion plugin to populate the popup with
                         items from the sqlKeyword highlight group.  The
                         plugin will also cache this result until Vim is
                         restarted.  The syntax list is retrieved using
                         the syntaxcomplete plugin.</pre>
Using the <a href="options.html#'syntax'">'syntax'</a> keyword is a special case.  This instructs the
syntaxcomplete plugin to retrieve all syntax items.  So this will effectively
work for any of Vim's SQL syntax files.  At the time of writing this includes
10 different syntax files for the different dialects of SQL (see section 3
above, <a href="ft_sql.html#sql-dialects">sql-dialects</a>).</div>
<div class="old-help-para">Here are some examples of the entries which are pulled from the syntax files:<pre>All
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
    - Integer, Char, Varchar, Date, DateTime, Timestamp, ...</pre>
4.2 Dynamic Mode				<a name="sql-completion-dynamic"></a><code class="help-tag-right">sql-completion-dynamic</code>
<a name="_-dynamic-mode-populates-the-popups-with-data-directly-from-a-database.-in"></a><h3 class="help-heading">Dynamic mode populates the popups with data directly from a database.  In</h3>order for the dynamic feature to be enabled you must have the dbext.vim
plugin installed, (<a href="https://vim.sourceforge.net/script.php?script_id=356">https://vim.sourceforge.net/script.php?script_id=356</a>).</div>
<div class="old-help-para">Dynamic mode is used by several features of the SQL completion plugin.
After installing the dbext plugin see the dbext-tutorial for additional
configuration and usage.  The dbext plugin allows the SQL completion plugin
to display a list of tables, procedures, views and columns.<pre>Table List
    - All tables for all schema owners
Procedure List
    - All stored procedures for all schema owners
View List
    - All stored procedures for all schema owners
Column List
    - For the selected table, the columns that are part of the table</pre>
To enable the popup, while in INSERT mode, use the following key combinations
for each group (where <code>&lt;C-C&gt;</code> means hold the CTRL key down while pressing
the space bar):
     Table List		   - <code>&lt;C-C&gt;</code>t
<div class="help-li" style=""> <code>&lt;C-X&gt;</code><code>&lt;C-O&gt;</code> (the default map assumes tables)
     Stored Procedure List - <code>&lt;C-C&gt;</code>p
     View List		   - <code>&lt;C-C&gt;</code>v
     Column List	   - <code>&lt;C-C&gt;</code>c
</div></div>
<div class="old-help-para">     Drilling In / Out     - When viewing a popup window displaying the list
			     of tables, you can press <code>&lt;Right&gt;</code>, this will
			     replace the table currently highlighted with
			     the column list for that table.
<div class="help-li" style=""> When viewing a popup window displaying the list
			     of columns, you can press <code>&lt;Left&gt;</code>, this will
			     replace the column list with the list of tables.
</div><div class="help-li" style=""> This allows you to quickly drill down into a
			     table to view its columns and back again.
</div><div class="help-li" style=""> <code>&lt;Right&gt;</code> and <code>&lt;Left&gt;</code> can also be chosen via
			     your <a href="starting.html#init.vim">init.vim</a><pre>let g:ftplugin_sql_omni_key_right = '&lt;Right&gt;'
let g:ftplugin_sql_omni_key_left  = '&lt;Left&gt;'</pre>
The SQL completion plugin caches various lists that are displayed in
the popup window.  This makes the re-displaying of these lists very
fast.  If new tables or columns are added to the database it may become
necessary to clear the plugins cache.  The default map for this is:<pre>imap &lt;buffer&gt; &lt;C-C&gt;R &lt;C-\&gt;&lt;C-O&gt;:call sqlcomplete#Map('ResetCache')&lt;CR&gt;&lt;C-X&gt;&lt;C-O&gt;</pre>
4.3 SQL Tutorial				<a name="sql-completion-tutorial"></a><code class="help-tag-right">sql-completion-tutorial</code>
----------------
</div></div>
<div class="old-help-para">This tutorial is designed to take you through the common features of the SQL
completion plugin so that:<pre>a) You gain familiarity with the plugin
b) You are introduced to some of the more common features
c) Show how to customize it to your preferences
d) Demonstrate "Best of Use" of the plugin (easiest way to configure).</pre>
First, create a new buffer:<pre>:e tutorial.sql</pre>
Static features
<a name="_-to-take-you-through-the-various-lists,-simply-enter-insert-mode,-hit:"></a><h3 class="help-heading">To take you through the various lists, simply enter insert mode, hit:</h3>    <code>&lt;C-C&gt;</code>s   (show SQL statements)
At this point, you can page down through the list until you find "select".
If you are familiar with the item you are looking for, for example you know
the statement begins with the letter "s".  You can type ahead (without the
quotes) "se" then press:
    <code>&lt;C-Space&gt;</code>t
Assuming "select" is highlighted in the popup list press <code>&lt;Enter&gt;</code> to choose
the entry.  Now type:
<div class="help-li" style=""> fr&lt;C-C&gt;a (show all syntax items)
choose "from" from the popup list.
</div></div>
<div class="old-help-para">When writing stored procedures using the "type" list is useful.  It contains
a list of all the database supported types.  This may or may not be true
depending on the syntax file you are using.  The SQL Anywhere syntax file
(sqlanywhere.vim) has support for this:<pre>BEGIN
   DECLARE customer_id &lt;C-C&gt;T &lt;-- Choose a type from the list</pre>
Dynamic features
<a name="_-to-take-advantage-of-the-dynamic-features-you-must-first-install-the"></a><h3 class="help-heading">To take advantage of the dynamic features you must first install the</h3>dbext.vim plugin (<a href="https://vim.sourceforge.net/script.php?script_id=356">https://vim.sourceforge.net/script.php?script_id=356</a>).  It
also comes with a tutorial.  From the SQL completion plugin's perspective,
the main feature dbext provides is a connection to a database.  dbext
connection profiles are the most efficient mechanism to define connection
information.  Once connections have been setup, the SQL completion plugin
uses the features of dbext in the background to populate the popups.</div>
<div class="old-help-para">What follows assumes dbext.vim has been correctly configured, a simple test
is to run the command, :DBListTable.  If a list of tables is shown, you know
dbext.vim is working as expected.  If not, please consult the dbext.txt
documentation.</div>
<div class="old-help-para">Assuming you have followed the dbext-tutorial you can press <code>&lt;C-C&gt;</code>t to
display a list of tables.  There is a delay while dbext is creating the table
list.  After the list is displayed press <code>&lt;C-W&gt;</code>.  This will remove both the
popup window and the table name already chosen when the list became active.</div>
<div class="old-help-para"> 4.3.1 Table Completion:			<a name="sql-completion-tables"></a><code class="help-tag-right">sql-completion-tables</code></div>
<div class="old-help-para">Press <code>&lt;C-C&gt;</code>t to display a list of tables from within the database you
have connected via the dbext plugin.
NOTE: All of the SQL completion popups support typing a prefix before pressing
the key map.  This will limit the contents of the popup window to just items
beginning with those characters.</div>
<div class="old-help-para"> 4.3.2 Column Completion:			<a name="sql-completion-columns"></a><code class="help-tag-right">sql-completion-columns</code></div>
<div class="old-help-para">The SQL completion plugin can also display a list of columns for particular
tables.  The column completion is triggered via <code>&lt;C-C&gt;</code>c.</div>
<div class="old-help-para">NOTE: The following example uses <code>&lt;Right&gt;</code> to trigger a column list while
      the popup window is active.</div>
<div class="old-help-para">Example of using column completion:
<div class="help-li" style=""> Press <code>&lt;C-C&gt;</code>t again to display the list of tables.
</div><div class="help-li" style=""> When the list is displayed in the completion window, press <code>&lt;Right&gt;</code>,
       this will replace the list of tables, with a list of columns for the
       table highlighted (after the same short delay).
</div><div class="help-li" style=""> If you press <code>&lt;Left&gt;</code>, this will again replace the column list with the
       list of tables.  This allows you to drill into tables and column lists
       very quickly.
</div><div class="help-li" style=""> Press <code>&lt;Right&gt;</code> again while the same table is highlighted.  You will
       notice there is no delay since the column list has been cached.  If you
       change the schema of a cached table you can press <code>&lt;C-C&gt;</code>R, which
       clears the SQL completion cache.
</div><div class="help-li" style=""> NOTE: <code>&lt;Right&gt;</code> and <code>&lt;Left&gt;</code> have been designed to work while the
       completion window is active.  If the completion popup window is
       not active, a normal <code>&lt;Right&gt;</code> or <code>&lt;Left&gt;</code> will be executed.
</div></div>
<div class="old-help-para">Let's look at how we can build a SQL statement dynamically.  A select statement
requires a list of columns.  There are two ways to build a column list using
the SQL completion plugin.<pre>One column at a time:</pre></div>
<div class="old-help-para">       1. After typing SELECT press <code>&lt;C-C&gt;</code>t to display a list of tables.
	2. Choose a table from the list.
	3. Press <code>&lt;Right&gt;</code> to display a list of columns.
	4. Choose the column from the list and press enter.
	5. Enter a "," and press <code>&lt;C-C&gt;</code>c.  Generating a column list
	   generally requires having the cursor on a table name.  The plugin
	   uses this name to determine what table to retrieve the column list.
	   In this step, since we are pressing <code>&lt;C-C&gt;</code>c without the cursor
	   on a table name the column list displayed will be for the previous
	   table.  Choose a different column and move on.
	6. Repeat step 5 as often as necessary.<pre>All columns for a table:</pre></div>
<div class="old-help-para">	1. After typing SELECT press <code>&lt;C-C&gt;</code>t to display a list of tables.
	2. Highlight the table you need the column list for.
	3. Press <code>&lt;Enter&gt;</code> to choose the table from the list.
	4. Press <code>&lt;C-C&gt;</code>l to request a comma-separated list of all columns
	   for this table.
	5. Based on the table name chosen in step 3, the plugin attempts to
	   decide on a reasonable table alias.	You are then prompted to
	   either accept of change the alias.  Press OK.
	6. The table name is replaced with the column list of the table is
	   replaced with the comma separate list of columns with the alias
	   prepended to each of the columns.
	7. Step 3 and 4 can be replaced by pressing <code>&lt;C-C&gt;</code>L, which has
	   a <code>&lt;C-Y&gt;</code> embedded in the map to choose the currently highlighted
	   table in the list.</div>
<div class="old-help-para">There is a special provision when writing select statements.  Consider the
following statement:<pre>select *
  from customer c,
       contact cn,
       department as dp,
       employee e,
       site_options so
 where c.</pre>
In INSERT mode after typing the final "c." which is an alias for the
"customer" table, you can press either <code>&lt;C-C&gt;</code>c or <code>&lt;C-X&gt;</code><code>&lt;C-O&gt;</code>.  This will
popup a list of columns for the customer table.  It does this by looking back
to the beginning of the select statement and finding a list of the tables
specified in the FROM clause.  In this case it notes that in the string
"customer c", "c" is an alias for the customer table.  The optional "AS"
keyword is also supported, "customer AS c".</div>
<div class="old-help-para"> 4.3.3 Procedure Completion:			<a name="sql-completion-procedures"></a><code class="help-tag-right">sql-completion-procedures</code></div>
<div class="old-help-para">Similar to the table list, <code>&lt;C-C&gt;</code>p, will display a list of stored
procedures stored within the database.</div>
<div class="old-help-para"> 4.3.4 View Completion:				<a name="sql-completion-views"></a><code class="help-tag-right">sql-completion-views</code></div>
<div class="old-help-para">Similar to the table list, <code>&lt;C-C&gt;</code>v, will display a list of views in the
database.</div>
<div class="old-help-para">4.4 Completion Customization			<a name="sql-completion-customization"></a><code class="help-tag-right">sql-completion-customization</code>
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+ft_sql.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/ft_sql.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%0A4.4%20Completion%20Customization%09%09%09%2Asql-completion-customization%2A%0A----------------------------%0A%0AThe%20SQL%20completion%20plugin%20can%20be%20customized%20through%20various%20options%20set%20in%0Ayour%20%7Cinit.vim%7C%3A%20%3E%0A%20%20%20%20omni_sql_no_default_maps%0D%60%60%60">----------------------------</a></div>
<div class="old-help-para">The SQL completion plugin can be customized through various options set in
your <a href="starting.html#init.vim">init.vim</a>:<pre>omni_sql_no_default_maps</pre>
<div class="help-li" style=""> Default: This variable is not defined
</div><div class="help-li" style=""> If this variable is defined, no maps are created for OMNI
	  completion.  See <a href="ft_sql.html#sql-completion-maps">sql-completion-maps</a> for further discussion.
&gt;
    omni_sql_use_tbl_alias
</div><div class="help-li" style=""> Default: a
</div><div class="help-li" style="margin-left: 3rem;"> This setting is only used when generating a comma-separated
	  column list.	By default the map is <code>&lt;C-C&gt;</code>l.  When generating
	  a column list, an alias can be prepended to the beginning of each
	  column, for example:	e.emp_id, e.emp_name.  This option has three
	  settings:<pre>n - do not use an alias
d - use the default (calculated) alias
a - ask to confirm the alias name</pre>
</div></div>
<div class="old-help-para">	  An alias is determined following a few rules:
	       1.  If the table name has an '_', then use it as a separator:<pre>MY_TABLE_NAME --&gt; MTN
my_table_name --&gt; mtn
My_table_NAME --&gt; MtN</pre></div>
<div class="old-help-para">	       2.  If the table name does NOT contain an '_', but DOES use
		   mixed case then the case is used as a separator:<pre>MyTableName --&gt; MTN</pre></div>
<div class="old-help-para">	       3.  If the table name does NOT contain an '_', and does NOT
		   use mixed case then the first letter of the table is used:<pre>               mytablename --&gt; m
               MYTABLENAME --&gt; M

omni_sql_ignorecase</pre>
<div class="help-li" style=""> Default: Current setting for <a href="options.html#'ignorecase'">'ignorecase'</a>
</div><div class="help-li" style="margin-left: 3rem;"> Valid settings are 0 or 1.
</div><div class="help-li" style=""> When entering a few letters before initiating completion, the list
	  will be filtered to display only the entries which begin with the
	  list of characters.  When this option is set to 0, the list will be
	  filtered using case sensitivity.<pre>omni_sql_include_owner</pre>
</div><div class="help-li" style=""> Default: 0, unless dbext.vim 3.00 has been installed
</div><div class="help-li" style="margin-left: 3rem;"> Valid settings are 0 or 1.
</div><div class="help-li" style=""> When completing tables, procedure or views and using dbext.vim 3.00
	  or higher the list of objects will also include the owner name.
	  When completing these objects and omni_sql_include_owner is enabled
	  the owner name will be replaced.<pre>omni_sql_precache_syntax_groups</pre>
</div><div class="help-li" style=""> Default:
	  ['syntax','sqlKeyword','sqlFunction','sqlOption','sqlType','sqlStatement']
</div><div class="help-li" style=""> sqlcomplete can be used in conjunction with other completion
	  plugins.  This is outlined at <a href="ft_sql.html#sql-completion-filetypes">sql-completion-filetypes</a>.  When the
	  filetype is changed temporarily to SQL, the sqlcompletion plugin
	  will cache the syntax groups listed in the List specified in this
	  option.
&gt;
</div></div>
<div class="old-help-para">4.5 SQL Maps					<a name="sql-completion-maps"></a><code class="help-tag-right">sql-completion-maps</code>
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+ft_sql.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/ft_sql.html%0D%0DContext%3A%0D%0D%60%60%60%0D%3E%0A%0A4.5%20SQL%20Maps%09%09%09%09%09%2Asql-completion-maps%2A%0A------------%0A%0AThe%20default%20SQL%20maps%20have%20been%20described%20in%20other%20sections%20of%20this%20document%20in%0Agreater%20detail.%20%20Here%20is%20a%20list%20of%20the%20maps%20with%20a%20brief%20description%20of%20each.%0A%0D%60%60%60">------------</a></div>
<div class="old-help-para">The default SQL maps have been described in other sections of this document in
greater detail.  Here is a list of the maps with a brief description of each.</div>
<div class="old-help-para">Static Maps
-----------
These are maps which use populate the completion list using Vim's syntax
highlighting rules.<pre>&lt;C-C&gt;a</pre>
<div class="help-li" style=""> Displays all SQL syntax items.
<pre>&lt;C-C&gt;k</pre></div><div class="help-li" style=""> Displays all SQL syntax items defined as 'sqlKeyword'.
<pre>&lt;C-C&gt;f</pre></div><div class="help-li" style=""> Displays all SQL syntax items defined as 'sqlFunction.
<pre>&lt;C-C&gt;o</pre></div><div class="help-li" style=""> Displays all SQL syntax items defined as 'sqlOption'.
<pre>&lt;C-C&gt;T</pre></div><div class="help-li" style=""> Displays all SQL syntax items defined as 'sqlType'.
<pre>&lt;C-C&gt;s</pre></div><div class="help-li" style=""> Displays all SQL syntax items defined as 'sqlStatement'.
<pre></pre>Dynamic Maps
------------
These are maps which use populate the completion list using the dbext.vim
plugin.<pre>&lt;C-C&gt;t</pre>
</div><div class="help-li" style=""> Displays a list of tables.
<pre>&lt;C-C&gt;p</pre></div><div class="help-li" style=""> Displays a list of procedures.
<pre>&lt;C-C&gt;v</pre></div><div class="help-li" style=""> Displays a list of views.
<pre>&lt;C-C&gt;c</pre></div><div class="help-li" style=""> Displays a list of columns for a specific table.
<pre>&lt;C-C&gt;l</pre></div><div class="help-li" style=""> Displays a comma-separated list of columns for a specific table.
<pre>&lt;C-C&gt;L</pre></div><div class="help-li" style=""> Displays a comma-separated list of columns for a specific table.
	  This should only be used when the completion window is active.<pre>&lt;Right&gt;</pre>
</div><div class="help-li" style=""> Displays a list of columns for the table currently highlighted in
	  the completion window.  <code>&lt;Right&gt;</code> is not recognized on most Unix
	  systems, so this maps is only created on the Windows platform.
	  If you would like the same feature on Unix, choose a different key
	  and make the same map in your vimrc.<pre>&lt;Left&gt;</pre>
</div><div class="help-li" style=""> Displays the list of tables.
	  <code>&lt;Left&gt;</code> is not recognized on most Unix systems, so this maps is
	  only created on the Windows platform.  If you would like the same
	  feature on Unix, choose a different key and make the same map in
	  your vimrc.<pre>&lt;C-C&gt;R</pre>
</div><div class="help-li" style=""> This maps removes all cached items and forces the SQL completion
	  to regenerate the list of items.
</div></div>
<div class="old-help-para">Customizing Maps
<a name="_-you-can-create-as-many-additional-key-maps-as-you-like.-generally,-the-maps"></a><h3 class="help-heading">You can create as many additional key maps as you like.  Generally, the maps</h3>will be specifying different syntax highlight groups.</div>
<div class="old-help-para">If you do not wish the default maps created or the key choices do not work on
your platform (often a case onnix) you define the following variable in
your <a href="starting.html#init.vim">init.vim</a>:<pre>let g:omni_sql_no_default_maps = 1</pre>
Do not edit ftplugin/sql.vim directly!  If you change this file your changes
will be over written on future updates.  Vim has a special directory structure
which allows you to make customizations without changing the files that are
included with the Vim distribution.  If you wish to customize the maps
create an after/ftplugin/sql.vim (see <a href="options.html#after-directory">after-directory</a>) and place the same
maps from the ftplugin/sql.vim in it using your own key strokes.  <code>&lt;C-C&gt;</code> was
chosen since it will work on both Windows andnix platforms.  On the windows
platform you can also use <code>&lt;C-Space&gt;</code> or ALT keys.</div>
<div class="old-help-para">4.6 Using with other filetypes			<a name="sql-completion-filetypes"></a><code class="help-tag-right">sql-completion-filetypes</code>
<a class="parse-error" target="_blank" title="Report bug... (parse error)" href="https://github.com/neovim/tree-sitter-vimdoc/issues/new?labels=bug&amp;title=parse+error%3A+ft_sql.txt+&amp;body=Found+%60tree-sitter-vimdoc%60+parse+error+at%3A+https://neovim.io/doc/user/ft_sql.html%0D%0DContext%3A%0D%0D%60%60%60%0D%0A%0A4.6%20Using%20with%20other%20filetypes%09%09%09%2Asql-completion-filetypes%2A%0A------------------------------%0A%0AMany%20times%20SQL%20can%20be%20used%20with%20different%20filetypes.%20%20For%20example%20Perl%2C%20Java%2C%0APHP%2C%20Javascript%20can%20all%20interact%20with%20a%20database.%20%20Often%20you%20need%20both%20the%20SQL%0Acompletion%20and%20the%20completion%20capabilities%20for%20the%20current%20language%20you%20are%0D%60%60%60">------------------------------</a></div>
<div class="old-help-para">Many times SQL can be used with different filetypes.  For example Perl, Java,
PHP, Javascript can all interact with a database.  Often you need both the SQL
completion and the completion capabilities for the current language you are
editing.</div>
<div class="old-help-para">This can be enabled easily with the following steps (assuming a Perl file):<pre>1.  :e test.pl
2.  :set filetype=sql
3.  :set ft=perl</pre>
Step 1
------
Begins by editing a Perl file.  Vim automatically sets the filetype to
"perl".  By default, Vim runs the appropriate filetype file
ftplugin/perl.vim.  If you are using the syntax completion plugin by following
the directions at <a href="insert.html#ft-syntax-omni">ft-syntax-omni</a> then the <a href="options.html#'omnifunc'">'omnifunc'</a> option has been set to
"syntax#Complete".  Pressing <code>&lt;C-X&gt;</code><code>&lt;C-O&gt;</code> will display the omni popup containing
the syntax items for Perl.</div>
<div class="old-help-para">Step 2
------
Manually setting the filetype to "sql" will also fire the appropriate filetype
files ftplugin/sql.vim.  This file will define a number of buffer specific
maps for SQL completion, see <a href="ft_sql.html#sql-completion-maps">sql-completion-maps</a>.  Now these maps have
been created and the SQL completion plugin has been initialized.  All SQL
syntax items have been cached in preparation.  The SQL filetype script detects
we are attempting to use two different completion plugins.  Since the SQL maps
begin with <code>&lt;C-C&gt;</code>, the maps will toggle the <a href="options.html#'omnifunc'">'omnifunc'</a> when in use.  So you
can use <code>&lt;C-X&gt;</code><code>&lt;C-O&gt;</code> to continue using the completion for Perl (using the syntax
completion plugin) and <code>&lt;C-C&gt;</code> to use the SQL completion features.</div>
<div class="old-help-para">Step 3
------
Setting the filetype back to Perl sets all the usual "perl" related items back
as they were.</div>

  
  