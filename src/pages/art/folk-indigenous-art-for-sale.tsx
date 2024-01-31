import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const ArtFolkIndigenous: React.FC = () => {
  return (
    <AppLayout name="art_folk_indigenous">
      <ArtCollectibleSection
        page="/art/folk-indigenous-art-for-sale"
        sub="Art"
      />
    </AppLayout>
  );
};

export default ArtFolkIndigenous;
