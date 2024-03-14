import React, { useState } from "react";
import * as Styled from "../details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "../DataList/data-fashion";
import { toast } from "react-toastify";

type Props = {
  onSave: (data: any) => void;
};

export const FashionDetail: React.FC<Props> = ({ onSave }) => {
  const [form, setForm] = useState({
    gender: "",
    itemCondition: "",
    color: "",
    material: "",
    sellerType: "",
  });

  const handleSave = () => {
    if (!form.gender) {
      toast.error("Select Gender");
    } else if (!form.itemCondition) {
      toast.error("Select condition");
    } else {
      onSave(form);
    }
  };
  return (
    <Styled.FormContainer>
      <SingleSelection
        direction="top"
        data={selectData.gender}
        label="Gender*"
        placeholder="Select Gender"
        value={form.gender}
        onChange={(value) => setForm((prev) => ({ ...prev, gender: value }))}
      />
      <SingleSelection
        direction="top"
        data={selectData.condition}
        label="Condition*"
        placeholder="Select Condition"
        value={form.itemCondition}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, itemCondition: value }))
        }
      />
      <SingleSelection
        direction="top"
        data={selectData.color.slice(1)}
        label="Colour"
        placeholder="Select Colour"
        value={form.color}
        onChange={(value) => setForm((prev) => ({ ...prev, color: value }))}
      />
      <SingleSelection
        direction="top"
        data={selectData.material.slice(1)}
        label="Material/Fabric"
        placeholder="Select Material/Fabric"
        value={form.material}
        onChange={(value) => setForm((prev) => ({ ...prev, material: value }))}
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

      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
