import { MultiSelection, SingleSelection } from "@/components";
import React, { useState } from "react";
import { FilterWrapper } from "../../main.styles";
import { selectData } from "@/modules/upload/detailsform/data";

export const SecurityFilter: React.FC = () => {
  const [filter, setFilter] = useState({
    SearchWithIn: "",
    priceRange: [] as string[],
    itemCondition: [] as string[],
    type: [] as string[],
    warrantyInformation: [] as string[],
    sellerRating: [] as string[],
  });

  return (
    <FilterWrapper>
      <SingleSelection
        data={selectData.forSale.Security.SearchWithIn}
        placeholder="Select Search Range"
        value={filter.SearchWithIn}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, SearchWithin: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Security.PriceRange}
        placeholder="Select Price Range"
        value={filter.priceRange}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, priceRange: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Security.Condition}
        placeholder="Select Item Condition"
        value={filter.itemCondition}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, itemCondition: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Security.Type}
        placeholder="Select Type"
        value={filter.type}
        onChange={(value) => setFilter((prev) => ({ ...prev, type: value }))}
      />
      <MultiSelection
        data={selectData.forSale.Security.WarrantyInformation}
        placeholder="Select Warranty Information"
        value={filter.warrantyInformation}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, warrantyInformation: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Security.SellerRating}
        placeholder="Select Sellor Rating"
        value={filter.sellerRating}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, sellerRating: value }))
        }
      />
    </FilterWrapper>
  );
};
