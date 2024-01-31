import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleGlass: React.FC = () => {
  return (
    <AppLayout name="collectible_glass">
      <ArtCollectibleSection
        page="/collectibles/glass-crystal-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleGlass;
