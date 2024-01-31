import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleHistorical: React.FC = () => {
  return (
    <AppLayout name="collectible_historical">
      <ArtCollectibleSection
        page="/collectibles/historical-memorabilia-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleHistorical;
