import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Styled from "../details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "../DataList/data-pets";

type Props = {
  onSave: (data: any) => void;
  subCategory: string;
};

export const ReptileDetails: React.FC<Props> = ({ subCategory, onSave }) => {
  const [form, setForm] = useState({
    species: "",
    age: "",
    gender: "",
    size: "",
  });
  useEffect(() => {
    setForm({
      species: "",
      age: "",
      gender: "",
      size: "",
    });
  }, [subCategory]);

  const handleSave = () => {
    if (!form.age) {
      toast.error("Select Age");
    } else if (!form.gender) {
      toast.error("Select Gender");
    } else if (!form.size) {
      toast.error("Select Size");
    } else {
      onSave(form);
    }
  };

  return (
    <Styled.FormContainer>
      <SingleSelection
        direction="top"
        data={selectData.filters.reptiles.age}
        label="Age*"
        placeholder="Select Age"
        value={form.age}
        onChange={(value) => setForm((prev) => ({ ...prev, age: value }))}
      />
      <SingleSelection
        direction="top"
        data={selectData.filters.reptiles.gender}
        label="Gender*"
        placeholder="Select Gender"
        value={form.gender}
        onChange={(value) => setForm((prev) => ({ ...prev, gender: value }))}
      />
      <SingleSelection
        direction="top"
        data={selectData.filters.reptiles.size}
        label="Size*"
        placeholder="Select Size"
        value={form.size}
        onChange={(value) => setForm((prev) => ({ ...prev, size: value }))}
      />
      <SingleSelection
        direction="top"
        data={selectData.filters.reptiles.species.slice(1)}
        label="Species"
        placeholder="Select Species"
        value={form.species}
        onChange={(value) => setForm((prev) => ({ ...prev, species: value }))}
      />
      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
