import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const ArtCollectibles: React.FC = () => {
  return (
    <AppLayout name="art_collectibles_all">
      <ArtCollectibleSection
        page="/art-collectibles/all-items-for-sale"
        sub="All"
      />
    </AppLayout>
  );
};

export default ArtCollectibles;
