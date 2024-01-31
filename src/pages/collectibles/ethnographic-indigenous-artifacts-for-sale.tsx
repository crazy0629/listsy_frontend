import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleEthnographic: React.FC = () => {
  return (
    <AppLayout name="collectible_ethnographic">
      <ArtCollectibleSection
        page="/collectibles/ethnographic-indigenous-artifacts-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleEthnographic;
