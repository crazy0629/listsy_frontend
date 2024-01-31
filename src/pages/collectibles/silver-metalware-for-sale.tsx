import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleSilver: React.FC = () => {
  return (
    <AppLayout name="collectible_silver">
      <ArtCollectibleSection
        page="/collectibles/silver-metalware-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleSilver;
