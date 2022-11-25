---
title:  Debug
layout: ../../layouts/MainLayout.astro
---

  <a name="debug.txt"></a><a name="debug-vim"></a><h1> Debug</h1>
  <p>
    <i>
    Nvim <code>:help</code> pages, <a href="https://github.com/neovim/neovim/blob/master/scripts/gen_help_html.lua">generated</a>
    from <a href="https://github.com/neovim/neovim/blob/master/runtime/doc/debug.txt">source</a>
    using the <a href="https://github.com/neovim/tree-sitter-vimdoc">tree-sitter-vimdoc</a> parser.
    </i>
  </p>
  <hr>
  <div class="old-help-para">Debugging Vim</div>
<div class="old-help-para">This is for debugging Vim itself, when it doesn't work properly.
For debugging Vim scripts, functions, etc. see <a href="/neovim-docs-web/en/repeat#debug-scripts">debug-scripts</a></div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>1. Location of a crash, using gcc and gdb		<a name="debug-gcc"></a><code class="help-tag-right">debug-gcc</code> <a name="gdb"></a><code class="help-tag">gdb</code></div>
<div class="old-help-para">When Vim crashes in one of the test files, and you are using gcc for
compilation, here is what you can do to find out exactly where Vim crashes.
This also applies when using the MingW tools.</div>
<div class="old-help-para">1. Compile Vim with the "-g" option (there is a line in the src/Makefile for
   this, which you can uncomment).  Also make sure "strip" is disabled (do not
   install it, or use the line "STRIP = /bin/true").</div>
<div class="old-help-para">2. Execute these commands (replace "11" with the test that fails):<pre>cd testdir
gdb ../vim
run -u unix.vim -U NONE -s dotest.in test11.in</pre>
3. Check where Vim crashes, gdb should give a message for this.</div>
<div class="old-help-para">4. Get a stack trace from gdb with this command:<pre>where</pre></div>
<div class="old-help-para">  You can check out different places in the stack trace with:<pre>frame 3</pre></div>
<div class="old-help-para">  Replace "3" with one of the numbers in the stack trace.</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>2. Locating memory leaks			<a name="debug-leaks"></a><code class="help-tag-right">debug-leaks</code> <a name="valgrind"></a><code class="help-tag">valgrind</code></div>
<div class="old-help-para">If you suspect Vim is leaking memory and you are using Linux, the valgrind
tool is very useful to pinpoint memory leaks.</div>
<div class="old-help-para">First of all, build Vim with EXITFREE defined.  Search for this in MAKEFILE
and uncomment the line.</div>
<div class="old-help-para">Use this command to start Vim:
<pre>valgrind --log-file=valgrind.log --leak-check=full ./vim</pre>
Note: Vim will run much slower.  If your vimrc is big or you have several
plugins you need to be patient for startup, or run with the "-u NONE"
argument.</div>
<div class="old-help-para">There are often a few leaks from libraries, such as getpwuid() and
XtVaAppCreateShell().  Those are unavoidable.  The number of bytes should be
very small a Kbyte or less.</div>
<div class="old-help-para"><a name="_-"></a><h2 class="help-heading"></h2>3. Windows Bug Reporting				<a name="debug-win32"></a><code class="help-tag-right">debug-win32</code></div>
<div class="old-help-para">If the Windows version of Vim crashes in a reproducible manner, you can take
some steps to provide a useful bug report.</div>
<div class="old-help-para"><div class="help-column_heading">3.1 GENERIC</div></div>
<div class="old-help-para">You must obtain the debugger symbols (PDB) file for your executable: gvim.pdb
for gvim.exe, or vim.pdb for vim.exe. The PDB should be available from the
same place that you obtained the executable. Be sure to use the PDB that
matches the EXE (same date).</div>
<div class="old-help-para">If you built the executable yourself with the Microsoft Visual C++ compiler,
then the PDB was built with the EXE.</div>
<div class="old-help-para">If you have Visual Studio, use that instead of the VC Toolkit and WinDbg.</div>
<div class="old-help-para">For other compilers, you should always use the corresponding debugger: gdb
(see above <a href="/neovim-docs-web/en/debug#debug-gcc">debug-gcc</a>) for the Cygwin and MinGW compilers.</div>
<div class="old-help-para">								<a name="debug-vs2005"></a><code class="help-tag-right">debug-vs2005</code>
<div class="help-column_heading">3.2 Debugging Vim crashes with Visual Studio 2005/Visual C++ 2005 Express</div></div>
<div class="old-help-para">First launch vim.exe or gvim.exe and then launch Visual Studio.  (If you don't
have Visual Studio, follow the instructions at <a href="/neovim-docs-web/en/debug#get-ms-debuggers">get-ms-debuggers</a> to obtain a
free copy of Visual C++ 2005 Express Edition.)</div>
<div class="old-help-para">On the Tools menu, click Attach to Process.  Choose the Vim process.</div>
<div class="old-help-para">In Vim, reproduce the crash.  A dialog will appear in Visual Studio, telling
you about the unhandled exception in the Vim process.  Click Break to break
into the process.</div>
<div class="old-help-para">Visual Studio will pop up another dialog, telling you that no symbols are
loaded and that the source code cannot be displayed.  Click OK.</div>
<div class="old-help-para">Several windows will open.  Right-click in the Call Stack window.  Choose Load
Symbols.  The Find Symbols dialog will open, looking for (g)vim.pdb.  Navigate
to the directory where you have the PDB file and click Open.</div>
<div class="old-help-para">At this point, you should have a full call stack with vim function names and
line numbers.  Double-click one of the lines and the Find Source dialog will
appear.  Navigate to the directory where the Vim source is (if you have it.)</div>
<div class="old-help-para">If you don't know how to debug this any further, follow the instructions
at ":help bug-report".  Paste the call stack into the bug report.</div>
<div class="old-help-para">If you have a non-free version of Visual Studio, you can save a minidump via
the Debug menu and send it with the bug report.  A minidump is a small file
(&lt;100KB), which contains information about the state of your process.
Visual C++ 2005 Express Edition cannot save minidumps and it cannot be
installed as a just-in-time debugger. Use WinDbg, <a href="/neovim-docs-web/en/debug#debug-windbg">debug-windbg</a>, if you
need to save minidumps or you want a just-in-time (postmortem) debugger.</div>
<div class="old-help-para">								<a name="debug-windbg"></a><code class="help-tag-right">debug-windbg</code>
<div class="help-column_heading">3.3 Debugging Vim crashes with WinDbg</div></div>
<div class="old-help-para">See <a href="/neovim-docs-web/en/debug#get-ms-debuggers">get-ms-debuggers</a> to obtain a copy of WinDbg.</div>
<div class="old-help-para">As with the Visual Studio IDE, you can attach WinDbg to a running Vim process.
You can also have your system automatically invoke WinDbg as a postmortem
debugger. To set WinDbg as your postmortem debugger, run "windbg -I".</div>
<div class="old-help-para">To attach WinDbg to a running Vim process, launch WinDbg. On the File menu,
choose Attach to a Process. Select the Vim process and click OK.</div>
<div class="old-help-para">At this point, choose Symbol File Path on the File menu, and add the folder
containing your Vim PDB to the sympath. If you have Vim source available,
use Source File Path on the File menu. You can now open source files in WinDbg
and set breakpoints, if you like. Reproduce your crash. WinDbg should open the
source file at the point of the crash. Using the View menu, you can examine
the call stack, local variables, watch windows, and so on.</div>
<div class="old-help-para">If WinDbg is your postmortem debugger, you do not need to attach WinDbg to
your Vim process. Simply reproduce the crash and WinDbg will launch
automatically. As above, set the Symbol File Path and the Source File Path.</div>
<div class="old-help-para">To save a minidump, type the following at the WinDbg command line:<pre>.dump vim.dmp</pre></div>
<div class="old-help-para">							<a name="debug-minidump"></a><code class="help-tag-right">debug-minidump</code>
<div class="help-column_heading">3.4 Opening a Minidump</div></div>
<div class="old-help-para">If you have a minidump file, you can open it in Visual Studio or in WinDbg.</div>
<div class="old-help-para">In Visual Studio 2005: on the File menu, choose Open, then Project/Solution.
Navigate to the .dmp file and open it. Now press F5 to invoke the debugger.
Follow the instructions in <a href="/neovim-docs-web/en/debug#debug-vs2005">debug-vs2005</a> to set the Symbol File Path.</div>
<div class="old-help-para">In WinDbg: choose Open Crash Dump on the File menu. Follow the instructions in
<a href="/neovim-docs-web/en/debug#debug-windbg">debug-windbg</a> to set the Symbol File Path.</div>
<div class="old-help-para">							<a name="get-ms-debuggers"></a><code class="help-tag-right">get-ms-debuggers</code>
<div class="help-column_heading">3.5 Obtaining Microsoft Debugging Tools</div></div>
<div class="old-help-para">Visual Studio 2017 Community Edition can be downloaded for free from:
    <a href="https://visualstudio.microsoft.com/downloads/">https://visualstudio.microsoft.com/downloads/</a></div>

  
  