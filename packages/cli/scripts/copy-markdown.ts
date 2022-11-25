import fs from "fs-extra";
import path from "path";
import glob from "glob";
import Case from "case";
import { JSDOM } from "jsdom";

const helpFilePaths = glob.sync(
  path.resolve(__dirname, "../../../../neovim/docs/user/*.html")
);

const helpFileNameMap: Record<string, string> = {
  "vim-differences": "vim_diff",
  "vi-differences": "vi_diff",
  "user-manual": "usr_toc",
  tutor: "usr_01",
  copying: "uganda",
  iccf: "uganda",
  sponsor: "intro",
  www: "intro",
  bugs: "intro",
  index: "vimindex",
  "edit-files": "editing",
  scrolling: "scroll",
  "undo-redo": "undo",
  "visual-mode": "visual",
  "crash-recovery": "recover",
  "pattern-searches": "pattern",
  "key-mapping": "map",
  tags: "tagsrch",
  folding: "fold",
  terminal: "nvim_terminal_emulator",
  "job-control": "job_control",
  vimscript: "eval",
  "vimscript-functions": "builtin",
  "remote-plugin": "remote_plugin",
  "diagnostic-api": "diagnostic",
  tui: "term",
  signs: "sign",
  dev: "develop",
  "dev-style": "dev_style",
  help: "index",
};

helpFilePaths.forEach((helpFilePath) => {
  copyHtmlFile(helpFilePath);
});

// extract page nesting from help.txt
const helpSections = getSections();

console.log(JSON.stringify({ helpSections }, null, 2));

const sidebarLinks: Record<string, SectionItem[]> = {};

helpSections.forEach(({ title, items }) => {
  sidebarLinks[title] = items;
});

fs.outputFileSync(
  path.resolve(process.cwd(), `../../apps/docs/src/config.json`),
  JSON.stringify(
    {
      sidebarLinks,
    },
    null,
    2
  )
);

function preprocessHtmlFile(fileContents: string): string {
  const dom = new JSDOM(fileContents);

  const { document } = dom.window as any;

  const content = document.querySelector(".help-body .col-wide");

  const title = content.querySelector("h1")?.textContent || "";

  return `---
title: ${title}
layout: ../../layouts/MainLayout.astro
---
${content?.innerHTML}
  `;
}

function copyHtmlFile(inputFilePath: string, outputFileName?: string) {
  if (!outputFileName) {
    outputFileName = path.parse(inputFilePath).name;
  }

  const fileContents = fs.readFileSync(inputFilePath, { encoding: "utf8" });

  // scrub contents
  const scrubbedFileContents = preprocessHtmlFile(fileContents);

  const outputFilePath = path.resolve(
    __dirname,
    `../../../apps/docs/src/pages/en/${outputFileName}.md`
  );

  fs.outputFileSync(outputFilePath, scrubbedFileContents);
}

interface Section {
  title: string;
  items: SectionItem[];
}

interface SectionItem {
  text: string;
  link: string;
}

function getSections(): Section[] {
  const helpContents = fs.readFileSync(
    path.resolve(__dirname, "../../../../neovim/runtime/doc/help.txt"),
    { encoding: "utf8" }
  );

  console.log({ helpContents });

  const sections: Section[] = [];

  let currentSectionStartLine = 0;
  let currentSectionTitle = "";
  let currentSectionItems: SectionItem[] = [];

  helpContents.split("\n").forEach((line, lineIndex) => {
    if (line.match(new RegExp("-{4,}", "gm"))) {
      if (currentSectionStartLine) {
        sections.push({
          title: currentSectionTitle,
          items: currentSectionItems,
        });
      }

      currentSectionStartLine = lineIndex;
      currentSectionTitle = "";
      currentSectionItems = [];
    }

    if (!currentSectionStartLine) {
      return;
    }

    console.log({ currentSectionStartLine, currentSectionTitle });

    if (lineIndex === currentSectionStartLine + 1) {
      console.log({ line });
      currentSectionTitle = Case.capital(
        line.match(new RegExp("^(.*)\t", "gm"))?.[0].trim() || ""
      );

      if (!currentSectionTitle) {
        currentSectionTitle = Case.capital(
          line.match(new RegExp("^(.*)$", "gm"))?.[0].trim() || ""
        );
      }
    } else {
      const linkTitle =
        line.match(new RegExp("^\\|([^\\|]*)\\|", "gm"))?.[0] || "";
      if (linkTitle) {
        let scrubbedTitle = linkTitle
          .replace(new RegExp("\\|", "gm"), "")
          .replace(".txt", "");

        if (scrubbedTitle !== "matchit") {
          currentSectionItems.push({
            text: scrubbedTitle,
            link: `${helpFileNameMap[scrubbedTitle] || scrubbedTitle}`,
          });
        }
      }
    }
  });

  return sections;
}
