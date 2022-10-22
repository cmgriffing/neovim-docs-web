import { HelpPage } from "../types";
import mustache from "mustache";
import fs from "fs";
import path from "path";
import Case from "case";

const helpPageTemplate = fs.readFileSync(
  path.resolve(__dirname, "render-section-markdown/help-page.mustache"),
  { encoding: "utf8" }
);

export function renderSectionMarkdown({
  title,
  slug,
  sections,
}: HelpPage): string {
  return mustache.render(helpPageTemplate, {
    title: Case.title(title),
    slug,
    sections,
  });
}
