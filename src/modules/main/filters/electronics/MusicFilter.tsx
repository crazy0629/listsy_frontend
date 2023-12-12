import { MultiSelection, SingleSelection } from "@/components";
import React, { useState } from "react";
import { FilterWrapper } from "../../main.styles";
import { selectData } from "@/modules/upload/detailsform/data";

export const MusicFilter: React.FC = () => {
  const [filter, setFilter] = useState({
    SearchWithin: "",
    priceRange: [] as string[],
    itemCondition: [] as string[],
    brand: [] as string[],
    connectivity: [] as string[],
    supportedStandards: [] as string[],
    warrantyInformation: [] as string[],
    sellerRating: [] as string[],
  });

  return (
    <FilterWrapper>
      <SingleSelection
        data={selectData.forSale.Music.SearchWithin}
        placeholder="Select Search Range"
        value={filter.SearchWithin}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, SearchWithin: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Music.PriceRange}
        placeholder="Select Price Range"
        value={filter.priceRange}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, priceRange: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Music.Condition}
        placeholder="Select Item Condition"
        value={filter.itemCondition}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, itemCondition: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Music.Brands}
        placeholder="Select Brand"
        value={filter.brand}
        onChange={(value) => setFilter((prev) => ({ ...prev, brand: value }))}
      />
      <MultiSelection
        data={selectData.forSale.Music.Connectivity}
        placeholder="Select Connectivity"
        value={filter.connectivity}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, connectivity: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Music.SupportedStandards}
        placeholder="Select Supported Standards"
        value={filter.supportedStandards}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, supportedStandards: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Music.WarrantyInformation}
        placeholder="Select Warranty Information"
        value={filter.warrantyInformation}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, warrantyInformation: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Music.SellerRating}
        placeholder="Select Sellor Rating"
        value={filter.sellerRating}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, sellerRating: value }))
        }
      />
    </FilterWrapper>
  );
};
