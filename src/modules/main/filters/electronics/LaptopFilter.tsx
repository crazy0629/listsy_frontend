import { MultiSelection, SingleSelection } from "@/components";
import React, { useState } from "react";
import { FilterWrapper } from "../../main.styles";
import { selectData } from "@/modules/upload/detailsform/data";

export const LapTopFilter: React.FC = () => {
  const [filter, setFilter] = useState({
    SearchWithin: "",
    priceRange: [] as string[],
    itemCondition: [] as string[],
    type: [] as string[],
    brand: [] as string[],
    ramSize: [] as string[],
    processor: [] as string[],
    screenSize: [] as string[],
    storageCapacity: [] as string[],
    operatingSystem: [] as string[],
    colour: [] as string[],
    warrantyInformation: [] as string[],
    sellerRating: [] as string[],
    batteryLife: [] as string[],
  });

  return (
    <FilterWrapper>
      <SingleSelection
        data={selectData.forSale.Laptops.SearchWithin}
        placeholder="Select Search Range"
        value={filter.SearchWithin}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, SearchWithin: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Laptops.PriceRange}
        placeholder="Select Price Range"
        value={filter.priceRange}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, priceRange: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Laptops.Condition}
        placeholder="Select Item Condition"
        value={filter.itemCondition}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, itemCondition: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Laptops.Type}
        placeholder="Select Item Type"
        value={filter.type}
        onChange={(value) => setFilter((prev) => ({ ...prev, type: value }))}
      />
      <MultiSelection
        data={selectData.forSale.Laptops.Brand}
        placeholder="Select Brand"
        value={filter.brand}
        onChange={(value) => setFilter((prev) => ({ ...prev, brand: value }))}
      />
      <MultiSelection
        data={selectData.forSale.Laptops.ramSize}
        placeholder="Select Ram Size"
        value={filter.ramSize}
        onChange={(value) => setFilter((prev) => ({ ...prev, ramSize: value }))}
      />
      <MultiSelection
        data={selectData.forSale.Laptops.processor}
        placeholder="Select Processor"
        value={filter.processor}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, processor: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Laptops.ScreenSize}
        placeholder="Select Screen Size"
        value={filter.screenSize}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, screenSize: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Laptops.StorageCapacity}
        placeholder="Select Storage Capacity"
        value={filter.storageCapacity}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, storageCapacity: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Laptops.OperatingSystem}
        placeholder="Select Operating System"
        value={filter.operatingSystem}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, operatingSystem: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Laptops.Colour}
        placeholder="Select Colour"
        value={filter.colour}
        onChange={(value) => setFilter((prev) => ({ ...prev, colour: value }))}
      />
      <MultiSelection
        data={selectData.forSale.Laptops.WarrantyInformation}
        placeholder="Select Warranty Information"
        value={filter.warrantyInformation}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, warrantyInformation: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Laptops.SellerRating}
        placeholder="Select Seller Rating"
        value={filter.sellerRating}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, sellerRating: value }))
        }
      />
      <MultiSelection
        data={selectData.forSale.Laptops.BatteryLife}
        placeholder="Select Battery Life"
        value={filter.batteryLife}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, batteryLife: value }))
        }
      />
    </FilterWrapper>
  );
};
