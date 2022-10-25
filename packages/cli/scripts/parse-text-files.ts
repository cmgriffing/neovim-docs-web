import fs from "fs-extra";
import path from "path";
import { parseTextContents } from "../src/utils/parse-text-contents";
import { renderSectionMarkdown } from "../src/utils/render-section-markdown";
import glob from "glob";
import Case from "case";
import { formatMarkdown } from "../src/utils/format-markdown";

interface SidebarLink {
  text: string;
  link: string;
}

// this gets mutated by outputMarkdownFiles, but I'm not sure I like that
// maybe take in a state object and return a cloned modified version of it?
const sidebarLinks: Record<string, SidebarLink[]> = {};

const allDocs = glob.sync(
  path.resolve(process.cwd(), "../../../neovim/runtime/doc/*.txt")
);

const piDocs = allDocs.filter((docPath) => {
  const { name } = path.parse(docPath);
  return name.indexOf("pi_") === 0;
});

const userDocs = allDocs.filter((docPath) => {
  const { name } = path.parse(docPath);
  return name.indexOf("usr_") === 0;
});

const remainingDocs = allDocs.filter((docPath) => {
  const { name } = path.parse(docPath);
  return name.indexOf("pi_") === -1 && name.indexOf("usr_") === -1;
});

const coreVimDocs: string[] = [];
const neovimDocs: string[] = [];
const genericDocs: string[] = [];

remainingDocs.forEach((filePath) => {
  const fileContents = fs.readFileSync(filePath, { encoding: "utf8" });

  const isNeovimDoc = fileContents.indexOf("NVIM REFERENCE MANUAL") > -1;
  if (isNeovimDoc) {
    neovimDocs.push(filePath);
  }

  const isVimDoc = fileContents.indexOf("VIM REFERENCE MANUAL") > -1;
  if (!isNeovimDoc && isVimDoc) {
    coreVimDocs.push(filePath);
  }

  if (!isVimDoc && !isNeovimDoc) {
    genericDocs.push(filePath);
  }
});

const anchorMap: Record<string, string> = {};

outputMarkdownFiles(piDocs, "Standard Plugins", anchorMap, "pi");
outputMarkdownFiles(userDocs, "User Reference", anchorMap, "usr");
outputMarkdownFiles(neovimDocs, "Neovim Reference", anchorMap, "neovim");
outputMarkdownFiles(coreVimDocs, "Vim Reference", anchorMap, "vim");
outputMarkdownFiles(genericDocs, "Misc", anchorMap, "misc", true);

// write to config.json
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

console.log({ anchorMap });

glob
  .sync(path.resolve(process.cwd(), `../../apps/docs/src/pages/**/*.md`))
  .forEach((markdownFile) => {
    // const { name } = path.parse(markdownFile);

    const markdownContent = fs.readFileSync(markdownFile, { encoding: "utf8" });

    const newContent = formatMarkdown(markdownContent, anchorMap);

    fs.outputFileSync(markdownFile, newContent);
  });

function outputMarkdownFiles(
  files: string[],
  configKey: string,
  anchorMap: Record<string, string>,
  outputSubdirectory: string = "",
  shouldTrimStart = false
) {
  files.forEach((filePath) => {
    const { name } = path.parse(filePath);

    let subdirectoryString = "";
    if (outputSubdirectory) {
      subdirectoryString = `${outputSubdirectory}/`;
    }

    anchorMap[
      `${name}.txt`
    ] = `/neovim-docs-web/en/${subdirectoryString}${name}`;

    const content = fs.readFileSync(filePath, { encoding: "utf8" });

    const { page, anchors } = parseTextContents(name, content, shouldTrimStart);

    if (name === "treesitter") {
      console.log({ anchors });
    }

    anchors.forEach((anchor) => {
      if (anchor) {
        anchorMap[anchor] = `/neovim-docs-web/en/${subdirectoryString}${name}`;
      }
    });

    const renderedContent = renderSectionMarkdown(page);

    fs.outputFileSync(
      path.resolve(
        process.cwd(),
        `../../apps/docs/src/pages/en/${subdirectoryString}${name}.md`
      ),
      renderedContent
    );

    if (!sidebarLinks[configKey]) {
      sidebarLinks[configKey] = [] as SidebarLink[];
    }

    sidebarLinks[configKey].push({
      text: Case.title(name),
      link: `en/${subdirectoryString}${name}`,
    });
  });
}

// console.log(JSON.stringify(parsedContent, null, 2));
