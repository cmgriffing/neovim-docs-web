import fs from "fs-extra";
import path from "path";
import { parseTextContents } from "../src/utils/parse-text-contents";
import { renderSectionMarkdown } from "../src/utils/render-section-markdown";

const treesitterContent = fs.readFileSync(
  path.resolve(process.cwd(), "../../../neovim/runtime/doc/treesitter.txt"),
  { encoding: "utf8" }
);

const parsedContent = parseTextContents(treesitterContent);

const renderedContent = renderSectionMarkdown(parsedContent);

fs.outputFileSync(
  path.resolve(process.cwd(), "../../apps/docs/src/pages/en/treesitter.md"),
  renderedContent
);

// console.log(JSON.stringify(parsedContent, null, 2));
