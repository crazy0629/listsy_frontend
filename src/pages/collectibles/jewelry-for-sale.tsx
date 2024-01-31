import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleJewelry: React.FC = () => {
  return (
    <AppLayout name="collectible_jewelry">
      <ArtCollectibleSection page="/art/jewelry-for-sale" sub="Art" />
    </AppLayout>
  );
};

export default CollectibleJewelry;
