import React, { useState } from "react";
import * as Styled from "../details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "../DataList/data-diy";
import { toast } from "react-toastify";

type Props = {
  onSave: (data: any) => void;
};

export const DiyDetail: React.FC<Props> = ({ onSave }) => {
  const [form, setForm] = useState({
    itemCondition: "",
    itemAge: "",
    sellerType: "",
  });

  const handleSave = () => {
    if (!form.itemCondition) {
      toast.error("Select condition");
    } else if (!form.itemAge) {
      toast.error("Select item age");
    } else if (!form.sellerType) {
      toast.error("Select seller type");
    } else {
      onSave(form);
    }
  };
  return (
    <Styled.FormContainer>
      <SingleSelection
        direction="top"
        data={selectData.condition}
        label="Condition"
        placeholder="Select Condition"
        value={form.itemCondition}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, itemCondition: value }))
        }
      />
      <SingleSelection
        direction="top"
        data={selectData.itemAge}
        label="Item Age"
        placeholder="Select Item Age"
        value={form.itemAge}
        onChange={(value) => setForm((prev) => ({ ...prev, itemAge: value }))}
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
      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
