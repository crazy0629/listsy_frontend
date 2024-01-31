import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleAntiqueFurniture: React.FC = () => {
  return (
    <AppLayout name="collectible_antique_furniture">
      <ArtCollectibleSection
        page="/collectibles/antique-furniture-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleAntiqueFurniture;
