import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleAutomobilia: React.FC = () => {
  return (
    <AppLayout name="collectible_automobilia">
      <ArtCollectibleSection
        page="/collectibles/automobilia-petroliana-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleAutomobilia;
