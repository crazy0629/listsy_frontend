import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleArchitectural: React.FC = () => {
  return (
    <AppLayout name="collectible_architectural_garden">
      <ArtCollectibleSection
        page="/collectibles/architectural-garden-antiques-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleArchitectural;
