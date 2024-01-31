import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleNautical: React.FC = () => {
  return (
    <AppLayout name="collectible_nautical">
      <ArtCollectibleSection
        page="/collectibles/nautical-antiques-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleNautical;
