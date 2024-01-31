import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleScientific: React.FC = () => {
  return (
    <AppLayout name="collectible_scientific">
      <ArtCollectibleSection
        page="/collectibles/scientific-medical-antiques-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleScientific;
