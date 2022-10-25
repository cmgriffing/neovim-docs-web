export function formatMarkdown(
  textContent: string,
  anchorMap: Record<string, string>
): string {
  // console.log({ anchorMap });

  let newContent = textContent;

  const matches = newContent.match(
    new RegExp("\\|+([a-zA-Z0-9\\-]+)\\|+?", "gm")
  );

  matches?.forEach((match) => {
    if (!match.trim()) {
      return;
    }

    let scrubbedMatch = match.replace(new RegExp("\\|", "gm"), "");

    if (scrubbedMatch.indexOf(".txt") > -1) {
      scrubbedMatch = scrubbedMatch.replace(".txt", "");
      newContent = newContent.replace(
        new RegExp(`\\|(${match})\\|`, "gm"),
        `[${scrubbedMatch}](${anchorMap[scrubbedMatch]})`
      );
    } else {
      newContent = newContent.replace(
        new RegExp(`\\|(${match})\\|`, "gm"),
        `[$1](${anchorMap[scrubbedMatch]}#$1)`
      );
    }
  });

  return newContent;
}
