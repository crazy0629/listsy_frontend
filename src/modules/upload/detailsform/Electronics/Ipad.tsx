import React, { useState } from "react";
import * as Styled from "../details.styles";
import { MultiSelection, SingleSelection } from "@/components";
import { selectData } from "../data";
import { toast } from "react-toastify";

type Props = {
  onSave: (data: any) => void;
};

export const Ipad: React.FC<Props> = ({ onSave }) => {
  const [form, setForm] = useState({
    itemCondition: "",
    type: "",
    brand: "",
    screenSize: "",
    storage: "",
    memory: "",
    batteryLife: "",
    colour: "",
    warrantyInformation: "",
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
        data={selectData.forSale.Ipad.Condition}
        label="Item Condition"
        placeholder="Select Item Condition"
        value={form.itemCondition}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, itemCondition: value }))
        }
      />
      <SingleSelection
        data={selectData.forSale.Ipad.Type}
        label="Type"
        placeholder="Select Type"
        value={form.type}
        onChange={(value) => setForm((prev) => ({ ...prev, type: value }))}
      />
      <SingleSelection
        data={selectData.forSale.Ipad.Brand}
        label="Brand"
        placeholder="Select Brand"
        value={form.brand}
        onChange={(value) => setForm((prev) => ({ ...prev, brand: value }))}
      />
      <SingleSelection
        data={selectData.forSale.Ipad.ScreenSize}
        label="Screen Size"
        placeholder="Select Screen Size"
        value={form.screenSize}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, screenSize: value }))
        }
      />
      <SingleSelection
        data={selectData.forSale.Ipad.Storage}
        label="Storage"
        placeholder="Select Storage"
        value={form.storage}
        onChange={(value) => setForm((prev) => ({ ...prev, storage: value }))}
      />
      <SingleSelection
        data={selectData.forSale.Ipad.Memory}
        label="Memory"
        placeholder="Select Memory"
        value={form.memory}
        onChange={(value) => setForm((prev) => ({ ...prev, memory: value }))}
      />
      <SingleSelection
        data={selectData.forSale.Ipad.BatteryLife}
        label="Battery Life"
        placeholder="Select Battery Life"
        value={form.batteryLife}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, batteryLife: value }))
        }
      />
      <SingleSelection
        data={selectData.forSale.Ipad.Colour}
        label="Colour"
        placeholder="Select Colour"
        value={form.colour}
        onChange={(value) => setForm((prev) => ({ ...prev, colour: value }))}
      />
      <SingleSelection
        data={selectData.forSale.Ipad.WarrantyInformation}
        label="Warranty Information"
        placeholder="Select Warranty Information"
        value={form.warrantyInformation}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, warrantyInformation: value }))
        }
      />
      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
