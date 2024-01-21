import React, { useState } from "react";
import * as Styled from "../details.styles";
import { MultiSelection, SingleSelection } from "@/components";
import { selectData } from "../data-pets";
import { toast } from "react-toastify";

type Props = {
  onSave: (data: any) => void;
};

export const PetsSupplies: React.FC<Props> = ({ onSave }) => {
  const [form, setForm] = useState({
    supplyType: "",
    petType: [] as string[],
  });

  const handleSave = () => {
    if (!form.supplyType) {
      toast.error("Select pets supply");
    } else if (!form.petType) {
      toast.error("Select pet type");
    } else {
      onSave(form);
    }
  };

  return (
    <Styled.FormContainer>
      <SingleSelection
        data={selectData.pet.PetsSupplies.Type}
        label="Pets Supply"
        placeholder="Select Pets Supply"
        value={form.supplyType}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, supplyType: value }))
        }
      />
      <MultiSelection
        data={selectData.pet.PetsSupplies.PetType}
        label="Pets Type"
        placeholder="Select Pets Type"
        value={form.petType}
        onChange={(value) => setForm((prev) => ({ ...prev, petType: value }))}
      />
      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
