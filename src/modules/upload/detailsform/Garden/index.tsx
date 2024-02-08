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
    itemCondition: "",
    sellerType: "",
    brand: "",
  });

  const handleSave = () => {
    if (!form.itemCondition) {
      toast.error("Select condition");
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
        value={form.itemCondition}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, itemCondition: value }))
        }
      />
      <SingleSelection
        direction="top"
        data={selectData.sellerType.slice(1)}
        label="Seller Type"
        placeholder="Select Seller Type"
        value={form.sellerType}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, sellerType: value }))
        }
      />
      <SingleSelection
        direction="top"
        data={selectData.brand.slice(1)}
        label="Brand/Manufacturer"
        placeholder="Select Brand/Manufacturer"
        value={form.brand}
        onChange={(value) => setForm((prev) => ({ ...prev, brand: value }))}
      />
      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
