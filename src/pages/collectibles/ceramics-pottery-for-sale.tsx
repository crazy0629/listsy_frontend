import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleCeramics: React.FC = () => {
  return (
    <AppLayout name="collectible_ceramics">
      <ArtCollectibleSection
        page="/collectibles/ceramics-pottery-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleCeramics;
