import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleWatches: React.FC = () => {
  return (
    <AppLayout name="collectible_watches">
      <ArtCollectibleSection
        page="/collectibles/watches-clocks-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleWatches;
