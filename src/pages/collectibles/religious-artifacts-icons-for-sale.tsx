import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleReligious: React.FC = () => {
  return (
    <AppLayout name="collectible_religious">
      <ArtCollectibleSection
        page="/collectibles/religious-artifacts-icons-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleReligious;
