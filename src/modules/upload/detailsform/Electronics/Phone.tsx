import React, { useState } from "react";
import * as Styled from "../details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "../data-electronics";
import { toast } from "react-toastify";

type Props = {
  onSave: (data: any) => void;
};

export const Phone: React.FC<Props> = ({ onSave }) => {
  const [form, setForm] = useState({
    type: "",
    cellPhone: {
      itemCondition: "",
      networkProvider: "",
      brand: "",
      operatingSystem: "",
      screenSizeRange: "",
      memoryCapacity: "",
      cameraResolution: "",
      batteryCapacity: "",
      colour: "",
      warrantyInformation: "",
    },
    cellPhoneAccessories: {
      accessoryType: "",
      itemCondition: "",
      warrantyInformation: "",
    },
    landLine: {
      landLineType: "",
      itemCondition: "",
      brand: "",
      warrantyInformation: "",
    },
    walkieTalkies: {
      walkieTalkiesType: "",
      itemCondition: "",
      brand: "",
      warrantyInformation: "",
    },
  });

  const handleSave = () => {
    if (!form.type) {
      toast.error("Enter phone type");
    } else if (form.type == "Cell Phones") {
      if (!form.cellPhone.batteryCapacity) {
        toast.error("Enter battery capacity");
      } else if (!form.cellPhone.brand) {
        toast.error("Enter brand");
      } else if (!form.cellPhone.cameraResolution) {
        toast.error("Enter camera resolution");
      } else if (!form.cellPhone.colour) {
        toast.error("Enter colour");
      } else if (!form.cellPhone.itemCondition) {
        toast.error("Enter item condition");
      } else if (!form.cellPhone.memoryCapacity) {
        toast.error("Enter memory capacity");
      } else if (!form.cellPhone.networkProvider) {
        toast.error("Enter network provider");
      } else if (!form.cellPhone.operatingSystem) {
        toast.error("Enter operating system");
      } else if (!form.cellPhone.screenSizeRange) {
        toast.error("Enter screen size range");
      } else if (!form.cellPhone.warrantyInformation) {
        toast.error("Enter warranty information");
      } else {
        onSave({ type: form.type, ...form.cellPhone });
      }
    } else if (form.type == "Cell Phone Accessories") {
      if (!form.cellPhoneAccessories.itemCondition) {
        toast.error("Enter condition");
      } else if (!form.cellPhoneAccessories.accessoryType) {
        toast.error("Enter accessory type");
      } else if (!form.cellPhoneAccessories.warrantyInformation) {
        toast.error("Enter warranty information");
      } else {
        onSave({ type: form.type, ...form.cellPhoneAccessories });
      }
    } else if (form.type == "Landlines") {
      if (!form.landLine.itemCondition) {
        toast.error("Enter condition");
      } else if (!form.landLine.brand) {
        toast.error("Enter brand");
      } else if (!form.landLine.landLineType) {
        toast.error("Enter landLine type");
      } else if (!form.landLine.warrantyInformation) {
        toast.error("Enter warranty information");
      } else {
        onSave({ type: form.type, ...form.landLine });
      }
    } else if (form.type == "Walkie Talkies") {
      if (!form.walkieTalkies.itemCondition) {
        toast.error("Enter condition");
      } else if (!form.walkieTalkies.brand) {
        toast.error("Enter brand");
      } else if (!form.walkieTalkies.walkieTalkiesType) {
        toast.error("Enter walkie talkies type");
      } else if (!form.walkieTalkies.warrantyInformation) {
        toast.error("Enter warranty information");
      } else {
        onSave({ type: form.type, ...form.walkieTalkies });
      }
    }
  };

  return (
    <Styled.FormContainer>
      <SingleSelection
        data={selectData.forSale.Phone.Type}
        label="Phone Type"
        placeholder="Select Phone Type"
        value={form.type}
        onChange={(value) => setForm((prev) => ({ ...prev, type: value }))}
      />

      {form.type == "Cell Phones" && (
        <>
          <SingleSelection
            data={selectData.forSale.Phone.CellPhones.Condition}
            label="Condition"
            placeholder="Select Condition"
            value={form.cellPhone.itemCondition}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                cellPhone: { ...prev.cellPhone, itemCondition: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.forSale.Phone.CellPhones.NetworkProvider}
            label="Network Provider"
            placeholder="Select Network Provider"
            value={form.cellPhone.networkProvider}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                cellPhone: { ...prev.cellPhone, networkProvider: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.forSale.Phone.CellPhones.Brand}
            label="Brand"
            placeholder="Select Brand"
            value={form.cellPhone.brand}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                cellPhone: { ...prev.cellPhone, brand: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.forSale.Phone.CellPhones.OperatingSystem}
            label="Operating System"
            placeholder="Select Operating System"
            value={form.cellPhone.operatingSystem}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                cellPhone: { ...prev.cellPhone, operatingSystem: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.forSale.Phone.CellPhones.ScreenSizeRange}
            label="Screen Size Range"
            placeholder="Select Screen Size Range"
            value={form.cellPhone.screenSizeRange}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                cellPhone: { ...prev.cellPhone, screenSizeRange: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.forSale.Phone.CellPhones.MemoryCapacity}
            label="Memory Capacity"
            placeholder="Select Memory Capacity"
            value={form.cellPhone.memoryCapacity}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                cellPhone: { ...prev.cellPhone, memoryCapacity: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.forSale.Phone.CellPhones.CameraResolution}
            label="Camera Resolution"
            placeholder="Select Camera Resolution"
            value={form.cellPhone.cameraResolution}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                cellPhone: { ...prev.cellPhone, cameraResolution: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.forSale.Phone.CellPhones.BatteryCapacity}
            label="Battery Capacity"
            placeholder="Select Battery Capacity"
            value={form.cellPhone.batteryCapacity}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                cellPhone: { ...prev.cellPhone, batteryCapacity: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.forSale.Phone.CellPhones.Colour}
            label="Colour"
            placeholder="Select Colour"
            value={form.cellPhone.colour}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                cellPhone: { ...prev.cellPhone, colour: value },
              }))
            }
          />
          <SingleSelection
            data={selectData.forSale.Phone.CellPhones.WarrantyInformation}
            label="Warranty Information"
            placeholder="Select Warranty Information"
            value={form.cellPhone.warrantyInformation}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                cellPhone: { ...prev.cellPhone, warrantyInformation: value },
              }))
            }
          />
        </>
      )}
      {form.type == "Cell Phone Accessories" && (
        <>
          <SingleSelection
            data={selectData.forSale.Phone.CellPhoneAccessories.AccessoryType}
            label="Mobile Accessory Type"
            placeholder="Select Mobile Accessory Type"
            value={form.cellPhoneAccessories.accessoryType}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                cellPhoneAccessories: {
                  ...prev.cellPhoneAccessories,
                  accessoryType: value,
                },
              }))
            }
          />
          <SingleSelection
            data={selectData.forSale.Phone.CellPhoneAccessories.Condition}
            label="Condition"
            placeholder="Select Condition"
            value={form.cellPhoneAccessories.itemCondition}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                cellPhoneAccessories: {
                  ...prev.cellPhoneAccessories,
                  itemCondition: value,
                },
              }))
            }
          />
          <SingleSelection
            data={
              selectData.forSale.Phone.CellPhoneAccessories.WarrantyInformation
            }
            label="Warranty Information"
            placeholder="Select Warranty Information"
            value={form.cellPhoneAccessories.warrantyInformation}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                cellPhoneAccessories: {
                  ...prev.cellPhoneAccessories,
                  warrantyInformation: value,
                },
              }))
            }
          />
        </>
      )}
      {form.type == "Landlines" && (
        <>
          <SingleSelection
            data={selectData.forSale.Phone.LandLine.LandLineType}
            label="LandLine Type"
            placeholder="Select LandLine Type"
            value={form.landLine.landLineType}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                landLine: {
                  ...prev.landLine,
                  landLineType: value,
                },
              }))
            }
          />
          <SingleSelection
            data={selectData.forSale.Phone.LandLine.Condition}
            label="Condition"
            placeholder="Select Condition"
            value={form.landLine.itemCondition}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                landLine: {
                  ...prev.landLine,
                  itemCondition: value,
                },
              }))
            }
          />
          <SingleSelection
            data={selectData.forSale.Phone.LandLine.Brand}
            label="Brand"
            placeholder="Select Brand"
            value={form.landLine.brand}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                landLine: {
                  ...prev.landLine,
                  brand: value,
                },
              }))
            }
          />
          <SingleSelection
            data={selectData.forSale.Phone.LandLine.WarrantyInformation}
            label="Warranty Information"
            placeholder="Select Warranty Information"
            value={form.landLine.warrantyInformation}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                landLine: {
                  ...prev.landLine,
                  warrantyInformation: value,
                },
              }))
            }
          />
        </>
      )}
      {form.type == "Walkie Talkies" && (
        <>
          <SingleSelection
            data={selectData.forSale.Phone.WalkieTalkies.LandLineType}
            label="Walkie Talkie Type"
            placeholder="Select Walkie Talkie Type"
            value={form.walkieTalkies.walkieTalkiesType}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                walkieTalkies: {
                  ...prev.walkieTalkies,
                  walkieTalkiesType: value,
                },
              }))
            }
          />
          <SingleSelection
            data={selectData.forSale.Phone.WalkieTalkies.Condition}
            label="Condition"
            placeholder="Select Condition"
            value={form.walkieTalkies.itemCondition}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                walkieTalkies: {
                  ...prev.walkieTalkies,
                  itemCondition: value,
                },
              }))
            }
          />
          <SingleSelection
            data={selectData.forSale.Phone.WalkieTalkies.Brand}
            label="Brand"
            placeholder="Select Brand"
            value={form.walkieTalkies.brand}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                walkieTalkies: {
                  ...prev.walkieTalkies,
                  brand: value,
                },
              }))
            }
          />
          <SingleSelection
            data={selectData.forSale.Phone.WalkieTalkies.WarrantyInformation}
            label="Warranty Information"
            placeholder="Select Warranty Information"
            value={form.walkieTalkies.warrantyInformation}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                walkieTalkies: {
                  ...prev.walkieTalkies,
                  warrantyInformation: value,
                },
              }))
            }
          />
        </>
      )}
      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
