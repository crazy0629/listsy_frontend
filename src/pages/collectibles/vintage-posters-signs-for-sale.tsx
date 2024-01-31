import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleVintagePosters: React.FC = () => {
  return (
    <AppLayout name="collectible_vintage_posters">
      <ArtCollectibleSection
        page="/collectibles/vintage-posters-signs-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleVintagePosters;
