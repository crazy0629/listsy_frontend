import React, { useState } from "react";
import * as Styled from "../details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "../DataList/data-garden";
import { toast } from "react-toastify";

type Props = {
  onSave: (data: any) => void;
};

export const GardenDetail: React.FC<Props> = ({ onSave }) => {
  const [form, setForm] = useState({
    condition: "",
    sellerType: "",
    brand: "",
  });

  const handleSave = () => {
    if (!form.condition) {
      toast.error("Select condition");
    } else if (!form.sellerType) {
      toast.error("Select seller type");
    } else if (!form.brand) {
      toast.error("Select brand/manufacturer");
    } else {
      onSave(form);
    }
  };
  return (
    <Styled.FormContainer>
      <SingleSelection
        direction="top"
        data={selectData.condition}
        label="Item Condition"
        placeholder="Select Item Condition"
        value={form.condition}
        onChange={(value) => setForm((prev) => ({ ...prev, condition: value }))}
      />
      <SingleSelection
        direction="top"
        data={selectData.sellerType}
        label="Seller Type"
        placeholder="Select Seller Type"
        value={form.sellerType}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, sellerType: value }))
        }
      />
      <SingleSelection
        direction="top"
        data={selectData.brand}
        label="Brand/Manufacturer"
        placeholder="Select Brand/Manufacturer"
        value={form.brand}
        onChange={(value) => setForm((prev) => ({ ...prev, brand: value }))}
      />
      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
