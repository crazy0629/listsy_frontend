import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const ArtPrints: React.FC = () => {
  return (
    <AppLayout name="art_prints">
      <ArtCollectibleSection page="/art/prints-for-sale" sub="Art" />
    </AppLayout>
  );
};

export default ArtPrints;
