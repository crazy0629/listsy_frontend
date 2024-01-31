import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectiblePhotographic: React.FC = () => {
  return (
    <AppLayout name="collectible_photographic">
      <ArtCollectibleSection
        page="/collectibles/photographic-equipment-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectiblePhotographic;
