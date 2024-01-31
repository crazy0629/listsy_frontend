import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleVintageToys: React.FC = () => {
  return (
    <AppLayout name="collectible_vintage_toys">
      <ArtCollectibleSection
        page="/collectibles/vintage-toys-games-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleVintageToys;
