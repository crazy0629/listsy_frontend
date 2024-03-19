import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Styled from "../details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "../DataList/data-pets";

type Props = {
  onSave: (data: any) => void;
  subCategory: string;
};

export const BirdsDetails: React.FC<Props> = ({ subCategory, onSave }) => {
  const [form, setForm] = useState({
    breed: "",
    age: "",
    gender: "",
  });
  useEffect(() => {
    setForm({
      breed: "",
      age: "",
      gender: "",
    });
  }, [subCategory]);

  const handleSave = () => {
    if (!form.age) {
      toast.error("Select Age");
    } else if (!form.gender) {
      toast.error("Select Gender");
    } else {
      onSave(form);
    }
  };

  return (
    <Styled.FormContainer>
      <SingleSelection
        direction="top"
        data={selectData.filters.birds.age}
        label="Age*"
        placeholder="Select Age"
        value={form.age}
        onChange={(value) => setForm((prev) => ({ ...prev, age: value }))}
      />
      <SingleSelection
        direction="top"
        data={selectData.filters.birds.gender}
        label="Gender*"
        placeholder="Select Gender"
        value={form.gender}
        onChange={(value) => setForm((prev) => ({ ...prev, gender: value }))}
      />
      <SingleSelection
        direction="top"
        data={selectData.filters.birds.breed}
        label="Breed"
        placeholder="Select Breed"
        value={form.breed}
        onChange={(value) => setForm((prev) => ({ ...prev, breed: value }))}
      />
      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
