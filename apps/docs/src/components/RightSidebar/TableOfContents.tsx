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
  const itemOffsets = useRef<ItemOffsets[]>([]);
  const childToParentIdMap = useRef<Record<string, string>>({});
  // FIXME: Not sure what this state is doing. It was never set to anything truthy.
  const [activeId, setActiveId] = useState<string>("");
  const [activeSectionId, setActiveSectionId] = useState<string>("");
  useEffect(() => {
    const getItemOffsets = () => {
      const titles = document.querySelectorAll("#article :is(h1, h2, h3)");
      const mappedTitles = Array.from(titles)
        .map((title) => {
          let depth = 2;

          if (title.tagName === "H3") {
            depth = 3;
          }

          return {
            id: title.id,
            topOffset: title.getBoundingClientRect().top + window.scrollY,
            depth,
            text:
              title.children[0]?.children[0]?.innerHTML ??
              title.children[0]?.innerHTML ??
              title.innerHTML,
          };
        })
        .sort((offsetA, offsetB) => {
          return offsetA.topOffset - offsetB.topOffset;
        });

      let parentId = "";
      const newChildToParentIdMap: Record<string, string> = {};
      itemOffsets.current = mappedTitles.map((itemOffset) => {
        if (itemOffset.depth === 2 && itemOffset.id) {
          parentId = itemOffset.id;
        }

        newChildToParentIdMap[itemOffset.id] = parentId;

        return {
          ...itemOffset,
          parentId,
        };
      });

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
      let newActiveId = itemOffsets.current[0]?.id || "";
      let newActiveSectionId = itemOffsets.current[0]?.id || "";
      itemOffsets.current.some((itemOffset) => {
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
  }, [itemOffsets.current]);

  console.log({ childToParentIdMap });

  return (
    <>
      <h2 className="heading">On this page</h2>
      <ul>
        <li
          className={`heading-link depth-2 ${
            activeId === "overview" ? "active" : ""
          }`.trim()}
        >
          <a href="#overview">Overview</a>
        </li>
        {itemOffsets.current
          .filter(
            ({ depth, id, text }) =>
              depth > 1 && depth < 4 && !!id && text !== "Note:"
          )
          .map((heading) => (
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
          ))}
      </ul>
    </>
  );
};

export default TableOfContents;
