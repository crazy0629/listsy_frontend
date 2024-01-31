import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectiblePhilatelic: React.FC = () => {
  return (
    <AppLayout name="collectible_philatelic">
      <ArtCollectibleSection
        page="/collectibles/philatelic-items-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectiblePhilatelic;
