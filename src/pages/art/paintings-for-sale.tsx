import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const ArtPainting: React.FC = () => {
  return (
    <AppLayout name="art_painting">
      <ArtCollectibleSection page="/art/paintings-for-sale" sub="Art" />
    </AppLayout>
  );
};

export default ArtPainting;
