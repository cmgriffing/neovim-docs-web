import fs from "fs-extra";
import path from "path";
import { parseTextContents } from "../src/utils/parse-text-contents";
import { renderSectionMarkdown } from "../src/utils/render-section-markdown";
import glob from "glob";

glob
  .sync(path.resolve(process.cwd(), "../../../neovim/runtime/doc/*.txt"))
  .forEach((filePath) => {
    const { name } = path.parse(filePath);

    if (name.indexOf("usr_") > -1) {
      return;
    }

    const content = fs.readFileSync(filePath, { encoding: "utf8" });

    const parsedContent = parseTextContents(content);

    const renderedContent = renderSectionMarkdown(parsedContent);

    fs.outputFileSync(
      path.resolve(process.cwd(), `../../apps/docs/src/pages/en/${name}.md`),
      renderedContent
    );
  });

// console.log(JSON.stringify(parsedContent, null, 2));
