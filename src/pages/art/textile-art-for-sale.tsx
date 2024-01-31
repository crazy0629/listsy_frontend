import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const ArtTextile: React.FC = () => {
  return (
    <AppLayout name="art_textile">
      <ArtCollectibleSection page="/art/textile-art-for-sale" sub="Art" />
    </AppLayout>
  );
};

export default ArtTextile;
