import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleRailroadiana: React.FC = () => {
  return (
    <AppLayout name="collectible_railroadiana">
      <ArtCollectibleSection
        page="/collectibles/railroadiana-trains-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleRailroadiana;
