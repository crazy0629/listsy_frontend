import React, { useState } from "react";
import * as Styled from "../details.styles";
import { MultiSelection, SingleSelection } from "@/components";
import { selectData } from "../DataList/data-toy";
import { toast } from "react-toastify";

type Props = {
  onSave: (data: any) => void;
};

export const ToyDetail: React.FC<Props> = ({ onSave }) => {
  const [form, setForm] = useState({
    ageGroup: [] as string[],
    brand: "",
    gender: "",
    education: "",
    sellerType: "",
  });

  const handleSave = () => {
    if (!form.ageGroup.length) {
      toast.error("Select Age Group");
    } else {
      onSave(form);
    }
  };

  return (
    <Styled.FormContainer>
      <MultiSelection
        data={selectData.itemAge}
        placeholder="Select Age Group"
        value={form.ageGroup}
        onChange={(value) => setForm((prev) => ({ ...prev, ageGroup: value }))}
      />
      <SingleSelection
        direction="top"
        data={selectData.itemBrand}
        label="Brand"
        placeholder="Select Brand"
        value={form.brand}
        onChange={(value) => setForm((prev) => ({ ...prev, brand: value }))}
      />
      <SingleSelection
        direction="top"
        data={selectData.itemGender}
        label="Gender Preference"
        placeholder="Select Gender Preference"
        value={form.gender}
        onChange={(value) => setForm((prev) => ({ ...prev, gender: value }))}
      />
      <SingleSelection
        direction="top"
        data={selectData.itemEducation}
        label="Educational Value"
        placeholder="Select Educational Value"
        value={form.education}
        onChange={(value) => setForm((prev) => ({ ...prev, education: value }))}
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
