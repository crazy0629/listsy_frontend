import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectiblesForSale: React.FC = () => {
  return (
    <AppLayout name="art_collectibles_collectibles">
      <ArtCollectibleSection page="/for-sale/collectibles" />
    </AppLayout>
  );
};

export default CollectiblesForSale;
