import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleAntiqueToys: React.FC = () => {
  return (
    <AppLayout name="collectible_antique_toys">
      <ArtCollectibleSection
        page="/collectibles/antique-toys-dolls-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleAntiqueToys;
