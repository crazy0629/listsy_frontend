import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleMilitaria: React.FC = () => {
  return (
    <AppLayout name="collectible_militaria">
      <ArtCollectibleSection
        page="/collectibles/militaria-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleMilitaria;
