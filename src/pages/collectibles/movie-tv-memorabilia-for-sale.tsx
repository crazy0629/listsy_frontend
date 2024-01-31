import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleMovie: React.FC = () => {
  return (
    <AppLayout name="collectible_movie">
      <ArtCollectibleSection
        page="/collectibles/movie-tv-memorabilia-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleMovie;
