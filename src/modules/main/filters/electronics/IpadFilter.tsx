import { MultiSelection, SingleSelection } from "@/components";
import React, { useState } from "react";
import { FilterWrapper } from "../../main.styles";
import { selectData } from "@/modules/upload/detailsform/data";

export const IpadFilter: React.FC = () => {
  const [filter, setFilter] = useState({
    SearchWithin: "",
    priceRange: [] as string[],
    itemCondition: [] as string[],
    type: [] as string[],
    brand: [] as string[],
    screenSize: [] as string[],
    storage: [] as string[],
    memory: [] as string[],
    batteryLife: [] as string[],
    colour: [] as string[],
    warrantyInformation: [] as string[],
    sellerRating: [] as string[],
  });

  return (
    <FilterWrapper>
      <SingleSelection
        data={selectData.forSale.Ipad.SearchWithin}
        placeholder="Select Search Range"
        value={filter.SearchWithin}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, SearchWithin: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Ipad.PriceRange}
        placeholder="Select Price Range"
        value={filter.priceRange}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, priceRange: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Ipad.Condition}
        placeholder="Select Item Condition"
        value={filter.itemCondition}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, itemCondition: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Ipad.Type}
        placeholder="Select Type"
        value={filter.type}
        onChange={(value) => setFilter((prev) => ({ ...prev, type: value }))}
      />
      <MultiSelection
        data={selectData.forSale.Ipad.Brand}
        placeholder="Select Brand"
        value={filter.brand}
        onChange={(value) => setFilter((prev) => ({ ...prev, brand: value }))}
      />
      <MultiSelection
        data={selectData.forSale.Ipad.ScreenSize}
        placeholder="Select Screen Size"
        value={filter.screenSize}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, screenSize: value }))
        }
      />

      <MultiSelection
        data={selectData.forSale.Ipad.Storage}
        placeholder="Select Storage"
        value={filter.storage}
        onChange={(value) => setFilter((prev) => ({ ...prev, storage: value }))}
      />
      <MultiSelection
        data={selectData.forSale.Ipad.Memory}
        placeholder="Select Memory"
        value={filter.memory}
        onChange={(value) => setFilter((prev) => ({ ...prev, memory: value }))}
      />
      <MultiSelection
        data={selectData.forSale.Ipad.BatteryLife}
        placeholder="Select Battery Life"
        value={filter.batteryLife}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, batteryLife: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Ipad.Colour}
        placeholder="Select Colour"
        value={filter.colour}
        onChange={(value) => setFilter((prev) => ({ ...prev, colour: value }))}
      />
      <MultiSelection
        data={selectData.forSale.Ipad.WarrantyInformation}
        placeholder="Select Warranty Information"
        value={filter.warrantyInformation}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, warrantyInformation: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Ipad.SellerRating}
        placeholder="Select Sellor Rating"
        value={filter.sellerRating}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, sellerRating: value }))
        }
      />
    </FilterWrapper>
  );
};
