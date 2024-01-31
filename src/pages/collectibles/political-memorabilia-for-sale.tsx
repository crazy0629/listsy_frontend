import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectiblePolitical: React.FC = () => {
  return (
    <AppLayout name="collectible_political">
      <ArtCollectibleSection
        page="/collectibles/political-memorabilia-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectiblePolitical;
