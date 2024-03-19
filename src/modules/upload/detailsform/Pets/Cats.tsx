import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Styled from "../details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "../DataList/data-pets";

type Props = {
  onSave: (data: any) => void;
  subCategory: string;
};

export const CatsDetails: React.FC<Props> = ({ subCategory, onSave }) => {
  const [form, setForm] = useState({
    breed: "",
    age: "",
    gender: "",
    vaccinations: "",
  });
  useEffect(() => {
    setForm({
      breed: "",
      age: "",
      gender: "",
      vaccinations: "",
    });
  }, [subCategory]);

  const handleSave = () => {
    if (!form.age) {
      toast.error("Select Age");
    } else if (!form.gender) {
      toast.error("Select Gender");
    } else if (!form.vaccinations) {
      toast.error("Select Vaccinations");
    } else {
      onSave(form);
    }
  };

  return (
    <Styled.FormContainer>
      <SingleSelection
        direction="top"
        data={selectData.filters.cats.age}
        label="Age*"
        placeholder="Select Age"
        value={form.age}
        onChange={(value) => setForm((prev) => ({ ...prev, age: value }))}
      />
      <SingleSelection
        direction="top"
        data={selectData.filters.cats.gender}
        label="Gender*"
        placeholder="Select Gender"
        value={form.gender}
        onChange={(value) => setForm((prev) => ({ ...prev, gender: value }))}
      />
      <SingleSelection
        direction="top"
        data={selectData.filters.cats.vaccinations}
        label="Vaccinations*"
        placeholder="Select Vaccination"
        value={form.vaccinations}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, vaccinations: value }))
        }
      />
      <SingleSelection
        direction="top"
        data={selectData.filters.cats.breed}
        label="Breed"
        placeholder="Select Breed"
        value={form.breed}
        onChange={(value) => setForm((prev) => ({ ...prev, breed: value }))}
      />
      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
