import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleNumismatic: React.FC = () => {
  return (
    <AppLayout name="collectible_numismatic">
      <ArtCollectibleSection
        page="/collectibles/numismatic-items-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleNumismatic;
