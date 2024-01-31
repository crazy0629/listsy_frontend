import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleTrading: React.FC = () => {
  return (
    <AppLayout name="collectible_trading">
      <ArtCollectibleSection
        page="/collectibles/trading-cards-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleTrading;
