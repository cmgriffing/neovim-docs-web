import fs from "fs-extra";
import path from "path";
import { parseTextContents } from "../src/utils/parse-text-contents";
import { renderSectionMarkdown } from "../src/utils/render-section-markdown";
import glob from "glob";
import Case from "case";

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

  const isVimDoc = fileContents.indexOf(" VIM REFERENCE MANUAL ") > -1;
  if (isVimDoc) {
    coreVimDocs.push(filePath);
  }

  const isNeovimDoc = fileContents.indexOf(" NVIM REFERENCE MANUAL ") > -1;
  if (isVimDoc) {
    neovimDocs.push(filePath);
  }

  if (!isVimDoc && !isNeovimDoc) {
    genericDocs.push(filePath);
  }
});

outputMarkdownFiles(piDocs, "Standard Plugins", "pi");
outputMarkdownFiles(userDocs, "User Reference", "usr");
outputMarkdownFiles(neovimDocs, "Neovim Reference", "neovim");
outputMarkdownFiles(coreVimDocs, "Vim Reference", "vim");
outputMarkdownFiles(genericDocs, "Misc", "misc");

function outputMarkdownFiles(
  files: string[],
  configKey: string,
  outputSubdirectory: string = ""
) {
  files.forEach((filePath) => {
    const { name } = path.parse(filePath);

    const content = fs.readFileSync(filePath, { encoding: "utf8" });

    const parsedContent = parseTextContents(content);

    const renderedContent = renderSectionMarkdown(parsedContent);

    let subdirectoryString = "";
    if (outputSubdirectory) {
      subdirectoryString = `${outputSubdirectory}/`;
    }

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
      link: `/en/${subdirectoryString}`,
    });
  });
}

// console.log(JSON.stringify(parsedContent, null, 2));
