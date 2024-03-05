import React, { useState, useEffect, useRef } from "react";
import * as Styled from "./singleSelection.styles";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type Props = {
  label?: string;
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
        {data?.map((item, key) => (
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
