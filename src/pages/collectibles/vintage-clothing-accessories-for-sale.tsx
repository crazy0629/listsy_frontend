import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleVintageClothing: React.FC = () => {
  return (
    <AppLayout name="collectible_vintage_clothing">
      <ArtCollectibleSection
        page="/collectibles/vintage-clothing-accessories-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleVintageClothing;
