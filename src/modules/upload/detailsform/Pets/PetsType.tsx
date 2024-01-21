import React, { useState } from "react";
import * as Styled from "../details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "../data-pets";
import { toast } from "react-toastify";
import { PetDog } from "./petDog";

type Props = {
  onSave: (data: any) => void;
};

export const PetsType: React.FC<Props> = ({ onSave }) => {
  const [form, setForm] = useState({
    petsType: "",
  });

  const handleSave = () => {
    if (!form.petsType) {
      toast.error("Select pet type");
    } else {
      onSave(form);
    }
  };

  return (
    <Styled.FormContainer>
      <SingleSelection
        data={selectData.pet.Petsforsale.Type}
        label="Pet Type"
        placeholder="Select Pet Type"
        value={form.petsType}
        onChange={(value) => setForm((prev) => ({ ...prev, petsType: value }))}
      />
      {form.petsType == "Dogs" && <PetDog onSave={handleSave} />}
      {/* <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton> */}
    </Styled.FormContainer>
  );
};
