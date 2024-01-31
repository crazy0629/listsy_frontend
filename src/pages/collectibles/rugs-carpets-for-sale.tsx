import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleRugs: React.FC = () => {
  return (
    <AppLayout name="collectible_rugs">
      <ArtCollectibleSection
        page="/collectibles/rugs-carpets-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleRugs;
