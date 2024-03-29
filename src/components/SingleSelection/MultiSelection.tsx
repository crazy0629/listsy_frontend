import React, { useState, useEffect, useRef } from "react";
import * as Styled from "./singleSelection.styles";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type Props = {
  label?: string | React.ReactNode;
  placeholder?: string;
  value: string[];
  data: string[];
  direction?: "top" | "bottom";
  countList?: any;
  type?: string;
  onChange?: (value: string[]) => void;
};

export const MultiSelection: React.FC<Props> = ({
  data,
  label,
  placeholder,
  direction = "bottom",
  value,
  type,
  countList,
  onChange = () => {},
}) => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <Styled.SelectFormItem ref={ref}>
      {label && <p>{label}</p>}
      <Styled.Select onClick={() => setIsOpen((prev) => !prev)}>
        <span className={value?.length ? "" : "placeholder"}>
          {value?.length
            ? value?.length + " properties are selected"
            : placeholder}
        </span>
        <MdOutlineKeyboardArrowDown size={20} color="#AFAFAF" />
      </Styled.Select>
      <Styled.SelectOptionWrapper
        className={`${isOpen && "open"} ${
          direction === "top" && "direction-top"
        }`}
      >
        <div className="search-wrapper">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search..."
          />
        </div>
        {data
          .filter((f) => f.toLowerCase().includes(search.toLowerCase()))
          ?.map((item, key) => (
            <p
              key={key}
              onClick={() => {
                onChange(
                  value.filter((f) => f === item).length > 0
                    ? value.filter((f) => f !== item)
                    : [...value, item]
                );
                //   setIsOpen(false);
              }}
            >
              <input
                type="checkbox"
                checked={value.filter((f) => f === item).length > 0}
                onChange={() => {}}
              />
              <span className="checkbox-label">{item}</span>
              {countList && (
                <span>
                  (
                  {
                    countList.filter((element) => {
                      if (type === "itemCondition") {
                        return element.itemCondition === item;
                      } else if (type === "itemResolution") {
                        return element.itemResolution === item;
                      } else if (type == "screenSize") {
                        return element.itemScreenSize === item;
                      } else if (type == "itemBrand") {
                        return element.itemBrand === item;
                      } else if (type == "itemBreed") {
                        return element.itemBreed === item;
                      } else if (type == "itemSmartTV") {
                        return element.itemSmartTV === item;
                      } else if (type == "itemColour") {
                        return element.itemColour === item;
                      } else if (type == "itemWarrantyInformation") {
                        return element.itemWarrantyInformation === item;
                      } else if (type == "itemSellerRating") {
                        return element.itemSellerRating === item;
                      } else if (type == "itemBatteryLife") {
                        return element.itemBatteryLife === item;
                      } else if (type == "itemOperatingSystem") {
                        return element.itemOperatingSystem === item;
                      } else if (type == "itemStorageCapacity") {
                        return element.itemStorageCapacity === item;
                      } else if (type == "itemProcessor") {
                        return element.itemProcessor === item;
                      } else if (type == "itemRamSize") {
                        return element.itemRamSize === item;
                      } else if (type == "itemType") {
                        return element.itemType === item;
                      } else if (type == "itemStorage") {
                        return element.itemStorage === item;
                      } else if (type == "itemMemory") {
                        return element.itemMemory === item;
                      } else if (type == "itemFeatures") {
                        return element.itemFeatures === item;
                      } else if (type == "itemConnectivity") {
                        return element.itemConnectivity === item;
                      } else if (type == "itemSupportedStandards") {
                        return element.itemSupportedStandards === item;
                      } else if (type == "itemMegapixels") {
                        return element.itemMegapixels === item;
                      } else if (type == "itemWalkieTalkiesType") {
                        return element.itemWalkieTalkiesType === item;
                      } else if (type == "itemLandLineType") {
                        return element.itemLandLineType === item;
                      } else if (type == "itemAccessoryType") {
                        return element.itemAccessoryType === item;
                      } else if (type == "itemNetworkProvider") {
                        return element.itemNetworkProvider === item;
                      } else if (type == "itemScreenSizeRange") {
                        return element.itemScreenSizeRange === item;
                      } else if (type == "itemMemoryCapacity") {
                        return element.itemMemoryCapacity === item;
                      } else if (type == "itemCameraResolution") {
                        return element.itemCameraResolution === item;
                      } else if (type == "itemBatteryCapacity") {
                        return element.itemBatteryCapacity === item;
                      } else if (type == "itemMealType") {
                        return element.itemMealType === item;
                      } else if (type == "itemDietaryPreferences") {
                        return element.itemDietaryPreferences === item;
                      } else if (type == "itemDeliveryOptions") {
                        return element.itemDeliveryOptions === item;
                      } else if (type == "itemAge") {
                        return element.itemAge === item;
                      } else if (type == "itemSellerType") {
                        return element.itemSellerType === item;
                      } else if (type == "itemGender") {
                        return element.itemGender === item;
                      } else if (type == "itemSkin") {
                        return element.itemSkin === item;
                      } else if (type == "itemIngredients") {
                        return element.itemIngredients === item;
                      } else if (type == "itemSize") {
                        return element.itemSize === item;
                      } else if (type == "itemCertifications") {
                        return element.itemCertifications === item;
                      } else if (type == "itemAgeGroup") {
                        return element.itemAgeGroup === item;
                      } else if (type == "itemEducation") {
                        return element.itemEducation === item;
                      } else if (type == "itemInstrumentType") {
                        return element.itemInstrumentType === item;
                      } else if (type == "itemEquipmentType") {
                        return element.itemEquipmentType === item;
                      } else if (type == "itemFurnitureType") {
                        return element.itemFurnitureType === item;
                      } else if (type == "itemType") {
                        return element.itemType === item;
                      } else if (type == "itemAuthenticity") {
                        return element.itemAuthenticity === item;
                      } else if (type == "itemServiceType") {
                        return element.itemServiceType === item;
                      } else if (type == "itemProviderType") {
                        return element.itemProviderType === item;
                      } else if (type == "itemCancellationPolicy") {
                        return element.itemCancellationPolicy === item;
                      } else if (type == "itemLicensesGroup") {
                        return element.itemLicensesGroup === item;
                      } else if (type == "itemColor") {
                        return element.itemColor === item;
                      } else if (type == "itemMaterial") {
                        return element.itemMaterial === item;
                      } else if (type == "itemVaccinations") {
                        return element.itemVaccinations === item;
                      } else if (type == "itemTankSize") {
                        return element.itemTankSize === item;
                      } else if (type == "itemCareLevel") {
                        return element.itemCareLevel === item;
                      } else if (type == "itemDiet") {
                        return element.itemDiet === item;
                      } else if (type == "itemSpecies") {
                        return element.itemSpecies === item;
                      } else if (type == "itemTrainingLevel") {
                        return element.itemTrainingLevel === item;
                      } else if (type == "itemHealth") {
                        return element.itemHealth === item;
                      } else if (type == "itemHoofCare") {
                        return element.itemHoofCare === item;
                      } else if (type == "itemInsurance") {
                        return element.itemInsurance === item;
                      } else if (type == "itemPetType") {
                        return element.itemPetType === item;
                      } else if (type == "itemPropertyType") {
                        return element.itemPropertyType === item;
                      } else if (type == "itemBedrooms") {
                        return element.itemBedrooms === item;
                      } else if (type == "itemBathrooms") {
                        return element.itemBathrooms === item;
                      } else if (type == "itemOwnership") {
                        return element.itemOwnership === item;
                      } else if (type == "itemPropertyCondition") {
                        return element.itemPropertyCondition === item;
                      } else if (type == "itemYear") {
                        return element.itemYear === item;
                      } else if (type == "itemLease") {
                        return element.itemLease === item;
                      } else if (type == "itemParking") {
                        return element.itemParking === item;
                      } else if (type == "itemAmenities") {
                        return element.itemAmenities === item;
                      } else if (type == "itemPropertySize") {
                        return element.itemPropertySize === item;
                      } else if (type == "itemLotSize") {
                        return element.itemLotSize === item;
                      }
                      return false;
                    })[0]?.count
                  }
                  )
                </span>
              )}
            </p>
          ))}
      </Styled.SelectOptionWrapper>
    </Styled.SelectFormItem>
  );
};
