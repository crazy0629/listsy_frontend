import React, { useState } from "react";
import * as Styled from "../details.styles";
import { MultiSelection, SingleSelection } from "@/components";
import { selectData } from "../data";
import { toast } from "react-toastify";

type Props = {
  onSave: (data: any) => void;
};

export const Laptops: React.FC<Props> = ({ onSave }) => {
  const [form, setForm] = useState({
    itemCondition: "",
    type: "",
    brand: "",
    ramSize: "",
    processor: "",
    screenSize: "",
    storageCapacity: "",
    operatingSystem: "",
    colour: "",
    warrantyInformation: "",
    batteryLife: "",
  });

  const handleSave = () => {
    if (!form.itemCondition) {
      toast.error("Enter itemCondition");
    } else {
      onSave(form);
    }
  };

  return (
    <Styled.FormContainer>
      <SingleSelection
        data={selectData.forSale.Laptops.Condition}
        label="Item Condition"
        placeholder="Select Item Condition"
        value={form.itemCondition}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, itemCondition: value }))
        }
      />
      <SingleSelection
        data={selectData.forSale.Laptops.Type}
        label="Type"
        placeholder="Select Type"
        value={form.type}
        onChange={(value) => setForm((prev) => ({ ...prev, type: value }))}
      />
      <SingleSelection
        data={selectData.forSale.Laptops.Brand}
        label="Brand"
        placeholder="Select Brand"
        value={form.brand}
        onChange={(value) => setForm((prev) => ({ ...prev, brand: value }))}
      />
      <SingleSelection
        data={selectData.forSale.Laptops.ramSize}
        label="RamSize"
        placeholder="Select RamSize"
        value={form.ramSize}
        onChange={(value) => setForm((prev) => ({ ...prev, ramSize: value }))}
      />
      <SingleSelection
        data={selectData.forSale.Laptops.processor}
        label="Processor"
        placeholder="Select Processor"
        value={form.processor}
        onChange={(value) => setForm((prev) => ({ ...prev, processor: value }))}
      />
      <SingleSelection
        data={selectData.forSale.Laptops.ScreenSize}
        label="Screen Size"
        placeholder="Select Screen Size"
        value={form.screenSize}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, screenSize: value }))
        }
      />
      <SingleSelection
        data={selectData.forSale.Laptops.StorageCapacity}
        label="Storage Capacity"
        placeholder="Select Storage Capacity"
        value={form.storageCapacity}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, storageCapacity: value }))
        }
      />
      <SingleSelection
        data={selectData.forSale.Laptops.OperatingSystem}
        label="Operating System"
        placeholder="Select Operating System"
        value={form.operatingSystem}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, operatingSystem: value }))
        }
      />
      <SingleSelection
        data={selectData.forSale.Laptops.Colour}
        label="Colour"
        placeholder="Select Colour"
        value={form.colour}
        onChange={(value) => setForm((prev) => ({ ...prev, colour: value }))}
      />
      <SingleSelection
        data={selectData.forSale.Laptops.WarrantyInformation}
        label="Warranty Information"
        placeholder="Select Warranty Information"
        value={form.warrantyInformation}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, warrantyInformation: value }))
        }
      />
      <SingleSelection
        data={selectData.forSale.Laptops.BatteryLife}
        label="Battery Life"
        placeholder="Select Battery Life"
        value={form.batteryLife}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, batteryLife: value }))
        }
      />
      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
