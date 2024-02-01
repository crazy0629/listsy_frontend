import React, { useState } from "react";
import * as Styled from "../details.styles";
import { MultiSelection, SingleSelection } from "@/components";
import { selectData } from "../DataList/data-electronics";
import { toast } from "react-toastify";

type Props = {
  onSave: (data: any) => void;
};

export const TheaterSystems: React.FC<Props> = ({ onSave }) => {
  const [form, setForm] = useState({
    itemCondition: "",
    type: "",
    brand: "",
    features: [] as string[],
    warrantyInformation: "",
  });

  const handleSave = () => {
    if (!form.itemCondition) {
      toast.error("Enter item condition");
    } else if (!form.type) {
      toast.error("Enter type");
    } else if (!form.brand) {
      toast.error("Enter brand");
    } else if (!form.warrantyInformation) {
      toast.error("Enter Warranty Information");
    } else {
      onSave(form);
    }
  };

  return (
    <Styled.FormContainer>
      <SingleSelection
        data={selectData.forSale.TheaterSystems.Condition}
        label="Item Condition"
        placeholder="Select Item Condition"
        value={form.itemCondition}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, itemCondition: value }))
        }
      />
      <SingleSelection
        data={selectData.forSale.TheaterSystems.Type}
        label="Type"
        placeholder="Select Type"
        value={form.type}
        onChange={(value) => setForm((prev) => ({ ...prev, type: value }))}
      />
      <SingleSelection
        data={selectData.forSale.TheaterSystems.Brand}
        label="Brand"
        placeholder="Select Brand"
        value={form.brand}
        onChange={(value) => setForm((prev) => ({ ...prev, brand: value }))}
      />
      <MultiSelection
        data={selectData.forSale.TheaterSystems.Features}
        label="Features"
        placeholder="Select Features"
        value={form.features}
        onChange={(value) => setForm((prev) => ({ ...prev, features: value }))}
      />
      <SingleSelection
        data={selectData.forSale.TheaterSystems.WarrantyInformation}
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
