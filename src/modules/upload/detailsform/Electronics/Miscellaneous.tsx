import React, { useState } from "react";
import * as Styled from "../details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "../data";
import { toast } from "react-toastify";

type Props = {
  onSave: (data: any) => void;
};

export const Miscellaneous: React.FC<Props> = ({ onSave }) => {
  const [form, setForm] = useState({
    itemCondition: "",
    type: "",
    warrantyInformation: "",
  });

  const handleSave = () => {
    if (!form.itemCondition) {
      toast.error("Enter item condition");
    } else if (!form.type) {
      toast.error("Enter type");
    } else if (!form.warrantyInformation) {
      toast.error("Enter Warranty Information");
    } else {
      onSave(form);
    }
  };

  return (
    <Styled.FormContainer>
      <SingleSelection
        data={selectData.forSale.Miscellaneous.Condition}
        label="Item Condition"
        placeholder="Select Item Condition"
        value={form.itemCondition}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, itemCondition: value }))
        }
      />
      <SingleSelection
        data={selectData.forSale.Miscellaneous.Type}
        label="Type"
        placeholder="Select Type"
        value={form.type}
        onChange={(value) => setForm((prev) => ({ ...prev, type: value }))}
      />
      <SingleSelection
        data={selectData.forSale.Miscellaneous.WarrantyInformation}
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
