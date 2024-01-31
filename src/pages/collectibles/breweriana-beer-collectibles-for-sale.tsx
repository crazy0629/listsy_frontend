import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleBreweriana: React.FC = () => {
  return (
    <AppLayout name="collectible_breweriana">
      <ArtCollectibleSection
        page="/collectibles/breweriana-beer-collectibles-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleBreweriana;
