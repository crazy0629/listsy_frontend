import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleTobacciana: React.FC = () => {
  return (
    <AppLayout name="collectible_tobacciana">
      <ArtCollectibleSection
        page="/collectibles/tobacciana-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleTobacciana;
