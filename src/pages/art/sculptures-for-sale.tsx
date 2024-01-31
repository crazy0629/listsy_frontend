import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const ArtSculptures: React.FC = () => {
  return (
    <AppLayout name="art_sculptures">
      <ArtCollectibleSection page="/art/sculptures-for-sale" sub="Art" />
    </AppLayout>
  );
};

export default ArtSculptures;
