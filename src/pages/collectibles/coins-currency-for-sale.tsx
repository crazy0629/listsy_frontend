import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleCoins: React.FC = () => {
  return (
    <AppLayout name="collectible_coins">
      <ArtCollectibleSection
        page="/collectibles/coins-currency-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleCoins;
