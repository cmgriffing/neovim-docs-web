import { HelpPage, HelpSection } from "./../types";
import Case from "case";
const SECTION_SPLITTER = "---SECTION_SPLITTER---";
const TITLE_SPLITTER = "---TITLE_SPLITTER---";
const DETAIL_SPLITTER = "---DETAIL_SPLITTER---";

export function parseTextContents(
  pageTitle: string,
  textContent: string,
  shouldTrimStart = false
): {
  page: HelpPage;
  anchors: string[];
} {
  const anchors: string[] = [];

  // convert split sections to explicit string from regex
  let scrubbedContent = textContent.replace(
    new RegExp("^[=,-]+$", "gm"),
    SECTION_SPLITTER
  );

  // scrubbedContent = scrubContent(scrubbedContent);

  // split sections
  const rawSections = scrubbedContent
    .split(SECTION_SPLITTER)
    .map((section) => scrubContent(section.trim()));

  const sections: HelpSection[] = rawSections.map((section, index) => {
    const lines: string[] = section.split("\n");

    const firstLine = lines[0];
    let otherLines = lines.slice(1);

    const scrubbedFirstLine = firstLine.replace(
      new RegExp("\\s{2,}", "gm"),
      TITLE_SPLITTER
    );

    const [title, rawAnchor] = scrubbedFirstLine.split(TITLE_SPLITTER);

    const anchor = rawAnchor?.replace(new RegExp("\\*", "gm"), "");

    const firstOtherLine = otherLines[0];
    let [extraAnchor] =
      firstOtherLine?.match(new RegExp("^\\s+(\\*\\S+\\*)", "gm")) || [];

    if (extraAnchor) {
      extraAnchor = extraAnchor.trim().replace(new RegExp("\\*", "gm"), "");
      otherLines = otherLines.slice(1);
    }

    otherLines = otherLines.map((otherLine) => {
      const scrubbedLine = otherLine.replace(
        new RegExp("\\s{2,}", "gm"),
        DETAIL_SPLITTER
      );

      let [detail, rawDetailAnchor] = scrubbedLine.split(DETAIL_SPLITTER);

      if (!rawDetailAnchor || rawDetailAnchor.indexOf("*") === -1) {
        if (scrubbedLine.indexOf("lua-treesitter-not-predicate") > -1) {
          console.log("Bailing out", { scrubbedLine });
        }
        if (shouldTrimStart) {
          return otherLine.trimStart();
        } else {
          return otherLine; // trimStart();
        }
      }

      // otherLine = otherLine.trimStart();

      rawDetailAnchor = rawDetailAnchor
        .trimStart()
        .replace(new RegExp("\\*", "gm"), "");

      if (!detail) {
        detail = "Note:";
      }

      if (Case.of(detail) === "upper") {
        detail = Case.title(detail);
      }

      let headerLevel = 3;

      if (otherLine.charAt(0) === "`") {
        headerLevel = 4;
      }

      let headerHashes = Array.from({ length: headerLevel })
        .map(() => "#")
        .join("");

      //TODO:  HANDLE NOTES

      return `${headerHashes} <a id="${rawDetailAnchor}" class="section-title" href="#${rawDetailAnchor}">${detail}</a>`;
    });

    // console.log({ pageTitle });

    // if (pageTitle) {
    //   console.log();
    // }

    anchors.push(anchor);

    if (extraAnchor) {
      anchors.push(extraAnchor);
    }

    return {
      title: Case.title(title),
      anchor,
      extraAnchor,
      content: otherLines.join("\n").trim(),
    };
  });

  return {
    page: {
      title: Case.title(pageTitle),
      slug: Case.kebab(pageTitle),
      sections,
    },
    anchors,
  };
}

function scrubContent(content: string) {
  let newContent = content;

  // code blocks
  // newContent = newContent.replace(new RegExp("\\s+>$", "gm"), "\n```");
  // newContent = newContent.replace(new RegExp("^<", "gm"), "\n```\n");

  newContent = newContent.replace(
    new RegExp("\\s+?>\\n([.\\S\\s]+?)\\s*?<$", "gm"),
    "\n```$1\n```\n"
  );

  newContent = newContent.replace(new RegExp("\\s+?>$", "gm"), "");
  newContent = newContent.replace(new RegExp("^<", "gm"), "");

  return newContent;
}
