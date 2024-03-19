import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import * as Styled from "../details.styles";
import { MultiSelection } from "@/components";
import { selectData } from "../DataList/data-pets";

type Props = {
  onSave: (data: any) => void;
  subCategory: string;
};

export const SuppliesDetails: React.FC<Props> = ({ subCategory, onSave }) => {
  const [form, setForm] = useState({
    type: [] as string[],
  });
  useEffect(() => {
    setForm({
      type: [],
    });
  }, [subCategory]);

  const handleSave = () => {
    if (!form.type) {
      toast.error("Select Age");
    } else {
      onSave(form);
    }
  };

  return (
    <Styled.FormContainer>
      <MultiSelection
        direction="top"
        data={selectData.filters.supplies.type}
        label="Pet Type*"
        placeholder="Select Pet Type"
        value={form.type}
        onChange={(value) => setForm((prev) => ({ ...prev, type: value }))}
      />

      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
