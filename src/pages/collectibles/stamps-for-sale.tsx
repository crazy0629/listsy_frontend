import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleStamps: React.FC = () => {
  return (
    <AppLayout name="collectible_stamps">
      <ArtCollectibleSection
        page="/collectibles/stamps-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleStamps;
