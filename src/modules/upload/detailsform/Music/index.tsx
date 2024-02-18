import React, { useState } from "react";
import * as Styled from "../details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "../DataList/data-musical";
import { toast } from "react-toastify";
import { musicalFilter } from "@/modules/main/fiterData";

type Props = {
  onSave: (data: any) => void;
  itemCategory: string;
};

export const MusicDetail: React.FC<Props> = ({ onSave, itemCategory }) => {
  const [form, setForm] = useState({
    itemSubCategory: "",
    itemCondition: "",
    age: "",
    brand: "",
    sellerType: "",
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
        data={musicalFilter
          .filter((item) => item.label == itemCategory)[0]
          .sub.map((item) => item.label)}
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
        data={selectData.age.slice(1)}
        label="Seller Age of Instrument"
        placeholder="Select Age of Instrument"
        value={form.age}
        onChange={(value) => setForm((prev) => ({ ...prev, age: value }))}
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
        data={selectData.sellerType.slice(1)}
        label="Seller Type"
        placeholder="Seller Type"
        value={form.sellerType}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, sellerType: value }))
        }
      />
      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
