import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleSports: React.FC = () => {
  return (
    <AppLayout name="collectible_sports">
      <ArtCollectibleSection
        page="/collectibles/sports-memorabilia-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleSports;
