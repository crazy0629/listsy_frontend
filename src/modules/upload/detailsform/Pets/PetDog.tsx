import React, { useState } from "react";
import * as Styled from "../details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "../data-pets";
import { toast } from "react-toastify";

type Props = {
  onSave: (data: any) => void;
};

export const PetDog: React.FC<Props> = ({ onSave }) => {
  const [form, setForm] = useState({
    breed: "",
    age: "",
    gender: "",
    vaccinations: "",
  });

  const handleSave = () => {
    if (!form.breed) {
      toast.error("Select breed");
    } else if (!form.age) {
      toast.error("Select age");
    } else if (!form.gender) {
      toast.error("Select gender");
    } else if (!form.vaccinations) {
      toast.error("Select vaccinations");
    } else {
      onSave(form);
    }
  };

  return (
    <Styled.FormContainer>
      <SingleSelection
        data={selectData.pet.Petsforsale.Dogs.Breed}
        label="Breed"
        placeholder="Select Breed"
        value={form.breed}
        onChange={(value) => setForm((prev) => ({ ...prev, breed: value }))}
      />
      <SingleSelection
        data={selectData.pet.Petsforsale.Dogs.Age}
        label="Age"
        placeholder="Select Age"
        value={form.age}
        onChange={(value) => setForm((prev) => ({ ...prev, age: value }))}
      />
      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
