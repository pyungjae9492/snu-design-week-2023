import * as React from "react";

import { PageBlock } from "notion-types";

import { useNotionContext } from "../context";
import { EmptyIcon } from "../icons/empty-icon";
import { CollectionViewProps } from "../types";
import { cs } from "../utils";
import { WorkCard } from "./work-card";
import { CollectionGroup } from "./collection-group";
import { getCollectionGroups } from "./collection-utils";
import { Property } from "./property";
import { useRouter } from "next/router";

export const CollectionWorksGallery: React.FC<CollectionViewProps> = ({
  collection,
  collectionView,
  collectionData,
  padding,
}) => {
  return (
    <Board
      padding={padding}
      collectionView={collectionView}
      collection={collection}
      collectionData={collectionData}
    />
  );
};

function Board({ collectionView, collectionData, collection, padding }) {
  const { recordMap } = useNotionContext();
  const {
    board_cover = { type: "none" },
    board_cover_size = "medium",
  } = collectionView?.format || {};
  const
    board_cover_aspect = "cover";
  const boardGroups =
    collectionView?.format?.board_columns ||
    collectionView?.format?.board_groups2 ||
    [];

  const boardStyle = React.useMemo(
    () => ({
      paddingLeft: padding,
    }),
    [padding]
  );

  const router = useRouter();

  const groupName = router.query.courseName;

  const groupProperty = boardGroups.find((group) => group.value.value === groupName);
  const boardResults = (collectionData as any).board_columns?.results;

  const CollectionCards = () => {
    if (!boardResults) return null;
    if (!groupProperty?.value?.type) return null;

    const schema = collection.schema[groupProperty.property];
    const group = (collectionData as any)[
      `results:${groupProperty?.value?.type}:${groupProperty?.value?.value || "uncategorized"
      }`
    ];

    if (!group || !schema || groupProperty.hidden) {
      return null;
    }

    return (
      <div className="w-full px-6 md:p-0  grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-7 justify-between">
        {group.blockIds?.map((blockId: string) => {

          const block = recordMap.block[blockId]?.value as PageBlock;

          if (!block) {
            console.log("block is null");
            return null;
          }

          return (
            <WorkCard
              className=" "
              collection={collection}
              block={block}
              cover={board_cover}
              coverSize={board_cover_size}
              coverAspect={board_cover_aspect}
              properties={collectionView.format?.board_properties}
              key={blockId}
              groupName={groupName}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="flex-1 flex w-full">
      <CollectionCards />
    </div>
  );
}
