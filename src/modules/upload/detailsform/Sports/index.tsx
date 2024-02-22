import React, { useState } from "react";
import * as Styled from "../details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "../DataList/data-sports";
import { toast } from "react-toastify";

type Props = {
  onSave: (data: any) => void;
  itemCategory: string;
};

export const SportsDetail: React.FC<Props> = ({ onSave, itemCategory }) => {
  const [form, setForm] = useState({
    itemSubCategory: "",
    itemCondition: "",
    gender: "",
    brand: "",
    sellerType: "",
  });

  const handleSave = () => {
    if (!form.itemSubCategory) {
      toast.error("Select subcategory");
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
        data={selectData.brand.slice(1)}
        label="Brand/Manufacturer"
        placeholder="Select Brand/Manufacturer"
        value={form.brand}
        onChange={(value) => setForm((prev) => ({ ...prev, brand: value }))}
      />
      <SingleSelection
        direction="top"
        data={selectData.gender.slice(1)}
        label="Gender/Age Group"
        placeholder="Select Gender/Age Group"
        value={form.gender}
        onChange={(value) => setForm((prev) => ({ ...prev, gender: value }))}
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
