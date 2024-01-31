import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const ArtDrawing: React.FC = () => {
  return (
    <AppLayout name="art_drawing">
      <ArtCollectibleSection page="/art/drawings-for-sale" sub="Art" />
    </AppLayout>
  );
};

export default ArtDrawing;
