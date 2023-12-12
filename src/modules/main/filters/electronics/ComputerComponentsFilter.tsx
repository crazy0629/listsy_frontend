import { MultiSelection, SingleSelection } from "@/components";
import React, { useState } from "react";
import { FilterWrapper } from "../../main.styles";
import { selectData } from "@/modules/upload/detailsform/data";

export const ComputerComponentFilter: React.FC = () => {
  const [filter, setFilter] = useState({
    SearchWithIn: "",
    priceRange: [] as string[],
    itemCondition: [] as string[],
    brand: [] as string[],
    warrantyInformation: [] as string[],
    sellerRating: [] as string[],
  });

  return (
    <FilterWrapper>
      <SingleSelection
        data={selectData.forSale.ComputerComponents.SearchWithIn}
        placeholder="Select Search Range"
        value={filter.SearchWithIn}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, SearchWithin: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.ComputerComponents.PriceRange}
        placeholder="Select Price Range"
        value={filter.priceRange}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, priceRange: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.ComputerComponents.Condition}
        placeholder="Select Item Condition"
        value={filter.itemCondition}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, itemCondition: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.ComputerComponents.Brand}
        placeholder="Select Brand"
        value={filter.brand}
        onChange={(value) => setFilter((prev) => ({ ...prev, brand: value }))}
      />
      <MultiSelection
        data={selectData.forSale.ComputerComponents.WarrantyInformation}
        placeholder="Select Warranty Information"
        value={filter.warrantyInformation}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, warrantyInformation: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.ComputerComponents.SellerRating}
        placeholder="Select Sellor Rating"
        value={filter.sellerRating}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, sellerRating: value }))
        }
      />
    </FilterWrapper>
  );
};
