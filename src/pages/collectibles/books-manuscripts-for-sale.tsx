import React from "react";
import { AppLayout } from "@/layouts";
import { ArtCollectibleSection } from "@/modules/main/ArtCollectibles";

const CollectibleBooks: React.FC = () => {
  return (
    <AppLayout name="collectible_books">
      <ArtCollectibleSection
        page="/collectibles/books-manuscripts-for-sale"
        sub="Collectibles"
      />
    </AppLayout>
  );
};

export default CollectibleBooks;
