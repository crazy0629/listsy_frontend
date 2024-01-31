import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleMusic: React.FC = () => {
  return (
    <AppLayout name="collectible_music">
      <ArtCollectibleSection
        page="/collectibles/music-memorabilia-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleMusic;
