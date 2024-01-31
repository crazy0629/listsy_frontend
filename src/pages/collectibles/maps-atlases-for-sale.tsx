import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleMaps: React.FC = () => {
  return (
    <AppLayout name="collectible_maps">
      <ArtCollectibleSection
        page="/collectibles/maps-atlases-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleMaps;
