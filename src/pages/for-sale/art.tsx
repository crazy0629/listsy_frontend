import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const ArtForSale: React.FC = () => {
  return (
    <AppLayout name="art_collectibles_art">
      <ArtCollectibleSection page="/for-sale/art" />
    </AppLayout>
  );
};

export default ArtForSale;
