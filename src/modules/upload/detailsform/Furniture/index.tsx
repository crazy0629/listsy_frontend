import React, { useState } from "react";
import * as Styled from "../details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "../DataList/data-furniture";
import { toast } from "react-toastify";

type Props = {
  onSave: (data: any) => void;
  itemCategory: string;
};

export const FurnitureDetail: React.FC<Props> = ({ onSave, itemCategory }) => {
  const [form, setForm] = useState({
    itemSubCategory: "",
    itemCondition: "",
    sellerType: "",
  });

  const handleSave = () => {
    if (!form.itemSubCategory) {
      toast.error("Select subcategory");
    } else if (!form.itemCondition) {
      toast.error("Select condition");
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
        data={selectData.type[itemCategory]}
        label="Subcategory"
        placeholder="Select Subcategory"
        value={form.itemSubCategory}
        onChange={(value) => {
          setForm((prev) => ({
            ...prev,
            itemSubCategory: value,
          }));
        }}
      />
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
