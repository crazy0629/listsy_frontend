import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleDecorative: React.FC = () => {
  return (
    <AppLayout name="collectible_decorative">
      <ArtCollectibleSection
        page="/collectibles/decorative-arts-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleDecorative;
