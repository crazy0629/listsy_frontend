import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleComic: React.FC = () => {
  return (
    <AppLayout name="collectible_comic">
      <ArtCollectibleSection
        page="/collectibles/comic-books-graphic-novels-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleComic;
