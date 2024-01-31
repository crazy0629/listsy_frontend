import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const ArtPhotography: React.FC = () => {
  return (
    <AppLayout name="art_photography">
      <ArtCollectibleSection page="/art/photography-for-sale" sub="Art" />
    </AppLayout>
  );
};

export default ArtPhotography;
