import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const ArtMixedMedia: React.FC = () => {
  return (
    <AppLayout name="art_mixed_media">
      <ArtCollectibleSection page="/art/mixed-media-for-sale" sub="Art" />
    </AppLayout>
  );
};

export default ArtMixedMedia;
