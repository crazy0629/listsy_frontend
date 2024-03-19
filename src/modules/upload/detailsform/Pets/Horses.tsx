import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Styled from "../details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "../DataList/data-pets";

type Props = {
  onSave: (data: any) => void;
  subCategory: string;
};

export const HorsesDetails: React.FC<Props> = ({ subCategory, onSave }) => {
  const [form, setForm] = useState({
    breed: "",
    age: "",
    gender: "",
    trainingLevel: "",
    vaccinations: "",
    health: "",
    hoofCare: "",
    insurance: "",
  });
  useEffect(() => {
    setForm({
      breed: "",
      age: "",
      gender: "",
      trainingLevel: "",
      vaccinations: "",
      health: "",
      hoofCare: "",
      insurance: "",
    });
  }, [subCategory]);

  const handleSave = () => {
    if (!form.age) {
      toast.error("Select Age");
    } else if (!form.gender) {
      toast.error("Select Gender");
    } else if (!form.trainingLevel) {
      toast.error("Select Training Level");
    } else if (!form.vaccinations) {
      toast.error("Select Vaccinations");
    } else if (!form.health) {
      toast.error("Select Health Certification");
    } else if (!form.hoofCare) {
      toast.error("Select Hoof Care");
    } else if (!form.insurance) {
      toast.error("Select Insurance");
    } else {
      onSave(form);
    }
  };

  return (
    <Styled.FormContainer>
      <SingleSelection
        direction="top"
        data={selectData.filters.horses.age}
        label="Age*"
        placeholder="Select Age"
        value={form.age}
        onChange={(value) => setForm((prev) => ({ ...prev, age: value }))}
      />
      <SingleSelection
        direction="top"
        data={selectData.filters.horses.gender}
        label="Gender*"
        placeholder="Select Gender"
        value={form.gender}
        onChange={(value) => setForm((prev) => ({ ...prev, gender: value }))}
      />
      <SingleSelection
        direction="top"
        data={selectData.filters.horses.trainingLevel}
        label="Training Level*"
        placeholder="Select Training Level"
        value={form.trainingLevel}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, trainingLevel: value }))
        }
      />
      <SingleSelection
        direction="top"
        data={selectData.filters.horses.vaccinations}
        label="Vaccinations*"
        placeholder="Select Vaccination"
        value={form.vaccinations}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, vaccinations: value }))
        }
      />
      <SingleSelection
        direction="top"
        data={selectData.filters.horses.health}
        label="Health Certification*"
        placeholder="Select Health Certification"
        value={form.health}
        onChange={(value) => setForm((prev) => ({ ...prev, health: value }))}
      />
      <SingleSelection
        direction="top"
        data={selectData.filters.horses.hoofCare}
        label="Hoof Care*"
        placeholder="Select Hoof Care"
        value={form.hoofCare}
        onChange={(value) => setForm((prev) => ({ ...prev, hoofCare: value }))}
      />
      <SingleSelection
        direction="top"
        data={selectData.filters.horses.insurance}
        label="Insurance*"
        placeholder="Select Insurance"
        value={form.insurance}
        onChange={(value) => setForm((prev) => ({ ...prev, insurance: value }))}
      />
      <SingleSelection
        direction="top"
        data={selectData.filters.horses.breed}
        label="Breed"
        placeholder="Select Breed"
        value={form.gender}
        onChange={(value) => setForm((prev) => ({ ...prev, breed: value }))}
      />
      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
