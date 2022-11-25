import type { FunctionalComponent } from "preact";
import { useState, useEffect, useRef } from "preact/hooks";
import type { MarkdownHeading } from "astro";
import "./TableOfContents.css";

type ItemOffsets = {
  id: string;
  topOffset: number;
  depth: number;
  parentId: string;
  text: string;
};

const TableOfContents: FunctionalComponent<{ headings: MarkdownHeading[] }> = ({
  headings = [],
}) => {
  const [itemOffsets, setItemOffsets] = useState<ItemOffsets[]>([]);
  const childToParentIdMap = useRef<Record<string, string>>({});
  // FIXME: Not sure what this state is doing. It was never set to anything truthy.
  const [activeId, setActiveId] = useState<string>("");
  const [activeSectionId, setActiveSectionId] = useState<string>("");
  useEffect(() => {
    const getItemOffsets = () => {
      const titles = document.querySelectorAll("#article :is(h1, h2, h3)");
      console.log({ titles });
      const mappedTitles = Array.from(titles)
        .map((title) => {
          let depth = 2;

          if (title.tagName === "H3") {
            depth = 3;
          }

          const id = title.querySelector("a")?.getAttribute("name") || "";

          let text =
            Array.from(title.childNodes)
              .filter((node) => {
                return node.nodeType === 3; // text node type?
              })
              .map((node) => node.textContent || "")
              .join(" ")
              .split("\t")[0] || "";

          console.log(text);

          return {
            id,
            topOffset: title.getBoundingClientRect().top + window.scrollY,
            depth,
            text,
          };
        })
        .sort((offsetA, offsetB) => {
          return offsetA.topOffset - offsetB.topOffset;
        });

      let parentId = "";
      const newChildToParentIdMap: Record<string, string> = {};
      setItemOffsets(
        mappedTitles.map((itemOffset) => {
          if (itemOffset.depth === 2 && itemOffset.id) {
            parentId = itemOffset.id;
          }

          newChildToParentIdMap[itemOffset.id] = parentId;

          return {
            ...itemOffset,
            parentId,
          };
        })
      );

      childToParentIdMap.current = newChildToParentIdMap;
    };

    getItemOffsets();
    window.addEventListener("resize", getItemOffsets);

    return () => {
      window.removeEventListener("resize", getItemOffsets);
    };
  }, [headings]);

  useEffect(() => {
    function getActiveIds() {
      let newActiveId = itemOffsets[0]?.id || "";
      let newActiveSectionId = itemOffsets[0]?.id || "";
      itemOffsets.some((itemOffset) => {
        newActiveId = itemOffset.id;

        if (itemOffset.depth === 2 && itemOffset.id) {
          newActiveSectionId = itemOffset.id;
        }

        return window.scrollY < itemOffset.topOffset;
      });

      setActiveId(newActiveId);
      setActiveSectionId(newActiveSectionId);
    }

    getActiveIds();
    window.addEventListener("scroll", getActiveIds, { passive: true });

    return () => {
      window.removeEventListener("scroll", getActiveIds);
    };
  }, [itemOffsets]);

  console.log("HMMMMM", itemOffsets);

  return (
    <>
      <h2 className="heading">On this page</h2>
      <ul>
        {itemOffsets
          .filter(
            ({ depth, id, text }) =>
              depth > 1 && depth < 4 && !!id && text !== "Note:"
          )
          .map((heading) => (
            <>
              <li
                className={`heading-link depth-${heading.depth} ${
                  activeId === heading.id ? "active" : ""
                } ${
                  activeSectionId === childToParentIdMap.current[heading.id] &&
                  heading.id !== activeSectionId
                    ? "has-active-parent"
                    : ""
                } ${
                  heading.id === activeSectionId ? "active-parent" : ""
                }`.trim()}
                data-parent={childToParentIdMap.current[heading.id]}
                data-id={heading.id}
              >
                <a href={`#${heading.id}`}>{heading.text}</a>
              </li>
            </>
          ))}
      </ul>
    </>
  );
};

export default TableOfContents;
