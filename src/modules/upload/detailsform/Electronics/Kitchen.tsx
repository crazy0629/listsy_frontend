import React, { useState } from "react";
import * as Styled from "../details.styles";
import { MultiSelection, SingleSelection } from "@/components";
import { selectData } from "../data";
import { toast } from "react-toastify";

type Props = {
  onSave: (data: any) => void;
};

export const Kitchen: React.FC<Props> = ({ onSave }) => {
  const [form, setForm] = useState({
    itemCondition: "",
    type: "",
    brand: "",
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
        data={selectData.forSale.Kitchen.Condition}
        label="Item Condition"
        placeholder="Select Item Condition"
        value={form.itemCondition}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, itemCondition: value }))
        }
      />
      <SingleSelection
        data={selectData.forSale.Kitchen.Type}
        label="Type"
        placeholder="Select Type"
        value={form.type}
        onChange={(value) => setForm((prev) => ({ ...prev, type: value }))}
      />
      <SingleSelection
        data={selectData.forSale.Kitchen.Brand}
        label="Brand"
        placeholder="Select Brand"
        value={form.brand}
        onChange={(value) => setForm((prev) => ({ ...prev, brand: value }))}
      />
      <SingleSelection
        data={selectData.forSale.Kitchen.WarrantyInformation}
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