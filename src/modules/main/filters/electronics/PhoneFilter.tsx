import { MultiSelection, SingleSelection } from "@/components";
import React, { useState } from "react";
import { FilterWrapper } from "../../main.styles";
import { selectData } from "@/modules/upload/detailsform/data";

export const PhoneFilter: React.FC = () => {
  const [filter, setFilter] = useState({
    SearchWithIn: "",
    type: "",
    cellPhone: {
      priceRange: [] as string[],
      condition: [] as string[],
      networkProvider: [] as string[],
      brand: [] as string[],
      operatingSystem: [] as string[],
      screenSizeRange: [] as string[],
      memoryCapacity: [] as string[],
      cameraResolution: [] as string[],
      batteryCapacity: [] as string[],
      colour: [] as string[],
      warrantyInformation: [] as string[],
      sellerRating: [] as string[],
    },
    cellPhoneAccessories: {
      priceRange: [] as string[],
      accessoryType: [] as string[],
      condition: [] as string[],
      warrantyInformation: [] as string[],
      sellerRating: [] as string[],
    },
    landLine: {
      priceRange: [] as string[],
      landLineType: [] as string[],
      condition: [] as string[],
      brand: [] as string[],
      warrantyInformation: [] as string[],
      sellerRating: [] as string[],
    },
    walkieTalkies: {
      priceRange: [] as string[],
      walkieTalkiesType: [] as string[],
      condition: [] as string[],
      brand: [] as string[],
      warrantyInformation: [] as string[],
      sellerRating: [] as string[],
    },
  });

  return (
    <FilterWrapper>
      <SingleSelection
        data={selectData.forSale.Phone.SearchWithin}
        placeholder="Select Search Range"
        value={filter.SearchWithIn}
        onChange={(value) =>
          setFilter((prev) => ({ ...prev, SearchWithIn: value }))
        }
      />
      <SingleSelection
        data={selectData.forSale.Phone.Type}
        placeholder="Select Type"
        value={filter.type}
        onChange={(value) => setFilter((prev) => ({ ...prev, type: value }))}
      />
      {filter.type == "Cell Phones" && (
        <>
          <MultiSelection
            data={selectData.forSale.Phone.CellPhones.PriceRange}
            placeholder="Select Price Range"
            value={filter.cellPhone.priceRange}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                cellPhone: { ...prev.cellPhone, priceRange: value },
              }))
            }
          />
          <MultiSelection
            data={selectData.forSale.Phone.CellPhones.Condition}
            placeholder="Select Item Condition"
            value={filter.cellPhone.condition}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                cellPhone: { ...prev.cellPhone, condition: value },
              }))
            }
          />
          <MultiSelection
            data={selectData.forSale.Phone.CellPhones.NetworkProvider}
            placeholder="Select Network Provider"
            value={filter.cellPhone.networkProvider}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                cellPhone: { ...prev.cellPhone, networkProvider: value },
              }))
            }
          />
          <MultiSelection
            data={selectData.forSale.Phone.CellPhones.Brand}
            placeholder="Select Brand"
            value={filter.cellPhone.brand}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                cellPhone: { ...prev.cellPhone, brand: value },
              }))
            }
          />
          <MultiSelection
            data={selectData.forSale.Phone.CellPhones.OperatingSystem}
            placeholder="Select Operating System"
            value={filter.cellPhone.operatingSystem}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                cellPhone: { ...prev.cellPhone, operatingSystem: value },
              }))
            }
          />
          <MultiSelection
            data={selectData.forSale.Phone.CellPhones.ScreenSizeRange}
            placeholder="Select ScreenSize Range"
            value={filter.cellPhone.screenSizeRange}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                cellPhone: { ...prev.cellPhone, screenSizeRange: value },
              }))
            }
          />
          <MultiSelection
            data={selectData.forSale.Phone.CellPhones.MemoryCapacity}
            placeholder="Select Memory Capacity"
            value={filter.cellPhone.memoryCapacity}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                cellPhone: { ...prev.cellPhone, memoryCapacity: value },
              }))
            }
          />
          <MultiSelection
            data={selectData.forSale.Phone.CellPhones.CameraResolution}
            placeholder="Select Camera Resolution"
            value={filter.cellPhone.cameraResolution}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                cellPhone: { ...prev.cellPhone, cameraResolution: value },
              }))
            }
          />
          <MultiSelection
            data={selectData.forSale.Phone.CellPhones.BatteryCapacity}
            placeholder="Select Battery Capacity"
            value={filter.cellPhone.batteryCapacity}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                cellPhone: { ...prev.cellPhone, batteryCapacity: value },
              }))
            }
          />
          <MultiSelection
            data={selectData.forSale.Phone.CellPhones.Colour}
            placeholder="Select Colour"
            value={filter.cellPhone.colour}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                cellPhone: { ...prev.cellPhone, colour: value },
              }))
            }
          />
          <MultiSelection
            data={selectData.forSale.Phone.CellPhones.WarrantyInformation}
            placeholder="Select Warranty Information"
            value={filter.cellPhone.warrantyInformation}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                cellPhone: { ...prev.cellPhone, warrantyInformation: value },
              }))
            }
          />
          <MultiSelection
            data={selectData.forSale.Phone.CellPhones.SellerRating}
            placeholder="Select Seller Rating"
            value={filter.cellPhone.sellerRating}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                cellPhone: { ...prev.cellPhone, sellerRating: value },
              }))
            }
          />
        </>
      )}
      {filter.type == "Cell Phone Accessories" && (
        <>
          <MultiSelection
            data={selectData.forSale.Phone.CellPhoneAccessories.PriceRange}
            placeholder="Select Price Range"
            value={filter.cellPhoneAccessories.priceRange}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                cellPhoneAccessories: {
                  ...prev.cellPhoneAccessories,
                  priceRange: value,
                },
              }))
            }
          />
          <MultiSelection
            data={selectData.forSale.Phone.CellPhoneAccessories.AccessoryType}
            placeholder="Select Accessory Type"
            value={filter.cellPhoneAccessories.accessoryType}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                cellPhoneAccessories: {
                  ...prev.cellPhoneAccessories,
                  accessoryType: value,
                },
              }))
            }
          />
          <MultiSelection
            data={selectData.forSale.Phone.CellPhoneAccessories.Condition}
            placeholder="Select Item Condition"
            value={filter.cellPhoneAccessories.condition}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                cellPhoneAccessories: {
                  ...prev.cellPhoneAccessories,
                  condition: value,
                },
              }))
            }
          />
          <MultiSelection
            data={
              selectData.forSale.Phone.CellPhoneAccessories.WarrantyInformation
            }
            placeholder="Select Warranty Information"
            value={filter.cellPhoneAccessories.warrantyInformation}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                cellPhoneAccessories: {
                  ...prev.cellPhoneAccessories,
                  warrantyInformation: value,
                },
              }))
            }
          />
          <MultiSelection
            data={selectData.forSale.Phone.CellPhoneAccessories.SellerRating}
            placeholder="Select Seller Rating"
            value={filter.cellPhoneAccessories.sellerRating}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                cellPhoneAccessories: {
                  ...prev.cellPhoneAccessories,
                  sellerRating: value,
                },
              }))
            }
          />
        </>
      )}
      {filter.type == "Landlines" && (
        <>
          <MultiSelection
            data={selectData.forSale.Phone.LandLine.PriceRange}
            placeholder="Select Price Range"
            value={filter.landLine.priceRange}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                landLine: {
                  ...prev.landLine,
                  priceRange: value,
                },
              }))
            }
          />
          <MultiSelection
            data={selectData.forSale.Phone.LandLine.LandLineType}
            placeholder="Select LandLine Type"
            value={filter.landLine.landLineType}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                landLine: {
                  ...prev.landLine,
                  landLineType: value,
                },
              }))
            }
          />
          <MultiSelection
            data={selectData.forSale.Phone.LandLine.Condition}
            placeholder="Select Item Condition"
            value={filter.landLine.condition}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                landLine: {
                  ...prev.landLine,
                  condition: value,
                },
              }))
            }
          />
          <MultiSelection
            data={selectData.forSale.Phone.LandLine.Brand}
            placeholder="Select Brand"
            value={filter.landLine.brand}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                landLine: {
                  ...prev.landLine,
                  brand: value,
                },
              }))
            }
          />
          <MultiSelection
            data={selectData.forSale.Phone.LandLine.WarrantyInformation}
            placeholder="Select Warranty Information"
            value={filter.landLine.warrantyInformation}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                landLine: {
                  ...prev.landLine,
                  warrantyInformation: value,
                },
              }))
            }
          />
          <MultiSelection
            data={selectData.forSale.Phone.LandLine.SellerRating}
            placeholder="Select Seller Rating"
            value={filter.landLine.sellerRating}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                landLine: {
                  ...prev.landLine,
                  sellerRating: value,
                },
              }))
            }
          />
        </>
      )}
      {filter.type == "Walkie Talkies" && (
        <>
          <MultiSelection
            data={selectData.forSale.Phone.WalkieTalkies.PriceRange}
            placeholder="Select Price Range"
            value={filter.walkieTalkies.priceRange}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                walkieTalkies: {
                  ...prev.walkieTalkies,
                  priceRange: value,
                },
              }))
            }
          />
          <MultiSelection
            data={selectData.forSale.Phone.WalkieTalkies.LandLineType}
            placeholder="Select walkieTalkies Type"
            value={filter.walkieTalkies.walkieTalkiesType}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                walkieTalkies: {
                  ...prev.walkieTalkies,
                  landLineType: value,
                },
              }))
            }
          />
          <MultiSelection
            data={selectData.forSale.Phone.WalkieTalkies.Condition}
            placeholder="Select Item Condition"
            value={filter.walkieTalkies.condition}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                walkieTalkies: {
                  ...prev.walkieTalkies,
                  condition: value,
                },
              }))
            }
          />
          <MultiSelection
            data={selectData.forSale.Phone.WalkieTalkies.Brand}
            placeholder="Select Brand"
            value={filter.walkieTalkies.brand}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                walkieTalkies: {
                  ...prev.walkieTalkies,
                  brand: value,
                },
              }))
            }
          />
          <MultiSelection
            data={selectData.forSale.Phone.WalkieTalkies.WarrantyInformation}
            placeholder="Select Warranty Information"
            value={filter.walkieTalkies.warrantyInformation}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                walkieTalkies: {
                  ...prev.walkieTalkies,
                  warrantyInformation: value,
                },
              }))
            }
          />
          <MultiSelection
            data={selectData.forSale.Phone.WalkieTalkies.SellerRating}
            placeholder="Select Seller Rating"
            value={filter.walkieTalkies.sellerRating}
            onChange={(value) =>
              setFilter((prev) => ({
                ...prev,
                walkieTalkies: {
                  ...prev.walkieTalkies,
                  sellerRating: value,
                },
              }))
            }
          />
        </>
      )}
    </FilterWrapper>
  );
};
