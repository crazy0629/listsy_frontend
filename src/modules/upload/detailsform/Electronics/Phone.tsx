import React, { useState } from "react";
import * as Styled from "../details.styles";
import { MultiSelection, SingleSelection } from "@/components";
import { selectData } from "../data";
import { toast } from "react-toastify";

type Props = {
  onSave: (data: any) => void;
};

export const Phone: React.FC<Props> = ({ onSave }) => {
  const [form, setForm] = useState({
    type: "",
    cellPhone: {
      condition: "",
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
      condition: "",
      warrantyInformation: "",
    },
    landLine: {
      landLineType: "",
      condition: "",
      brand: "",
      warrantyInformation: "",
    },
    walkieTalkies: {
      walkieTalkiesType: "",
      condition: "",
      brand: "",
      warrantyInformation: "",
    },
  });

  const handleSave = () => {
    if (!form.type) {
      toast.error("Enter type");
    } else {
      onSave(form);
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
            value={form.cellPhone.condition}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                cellPhone: { ...prev.cellPhone, condition: value },
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
            value={form.cellPhoneAccessories.condition}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                cellPhoneAccessories: {
                  ...prev.cellPhoneAccessories,
                  condition: value,
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
            value={form.landLine.condition}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                landLine: {
                  ...prev.landLine,
                  condition: value,
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
            value={form.walkieTalkies.condition}
            onChange={(value) =>
              setForm((prev) => ({
                ...prev,
                walkieTalkies: {
                  ...prev.walkieTalkies,
                  condition: value,
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
