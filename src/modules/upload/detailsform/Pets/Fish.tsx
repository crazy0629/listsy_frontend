import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Styled from "../details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "../DataList/data-pets";

type Props = {
  onSave: (data: any) => void;
  subCategory: string;
};

export const FishDetails: React.FC<Props> = ({ subCategory, onSave }) => {
  const [form, setForm] = useState({
    species: "",
    tankSize: "",
    careLevel: "",
    diet: "",
  });
  useEffect(() => {
    setForm({
      species: "",
      tankSize: "",
      careLevel: "",
      diet: "",
    });
  }, [subCategory]);

  const handleSave = () => {
    if (!form.tankSize) {
      toast.error("Select Tank Size Requirements");
    } else if (!form.careLevel) {
      toast.error("Select Care Level");
    } else if (!form.diet) {
      toast.error("Select Diet");
    } else {
      onSave(form);
    }
  };

  return (
    <Styled.FormContainer>
      <SingleSelection
        direction="top"
        data={selectData.filters.fish.tankSize}
        label="Tank Size Requirements*"
        placeholder="Select Tank Size Requirement"
        value={form.tankSize}
        onChange={(value) => setForm((prev) => ({ ...prev, tankSize: value }))}
      />
      <SingleSelection
        direction="top"
        data={selectData.filters.fish.careLevel}
        label="Care Level*"
        placeholder="Select Care Level"
        value={form.careLevel}
        onChange={(value) => setForm((prev) => ({ ...prev, careLevel: value }))}
      />
      <SingleSelection
        direction="top"
        data={selectData.filters.fish.diet}
        label="Diet*"
        placeholder="Select Diet"
        value={form.diet}
        onChange={(value) => setForm((prev) => ({ ...prev, diet: value }))}
      />
      <SingleSelection
        direction="top"
        data={selectData.filters.fish.species}
        label="Species"
        placeholder="Select Species"
        value={form.species}
        onChange={(value) => setForm((prev) => ({ ...prev, species: value }))}
      />
      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
