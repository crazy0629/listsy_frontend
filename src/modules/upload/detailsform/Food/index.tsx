import React, { useState } from "react";
import * as Styled from "../details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "../DataList/data-food";
import { toast } from "react-toastify";

type Props = {
  onSave: (data: any) => void;
};

export const FoodDetail: React.FC<Props> = ({ onSave }) => {
  const [form, setForm] = useState({
    mealType: "",
    dietaryPreferences: "",
    deliveryOptions: "",
  });

  const handleSave = () => {
    if (!form.mealType) {
      toast.error("Select meal type");
    } else {
      onSave(form);
    }
  };
  return (
    <Styled.FormContainer>
      <SingleSelection
        direction="top"
        data={selectData.mealType}
        label="Meal Type*"
        placeholder="Select Meal Type"
        value={form.mealType}
        onChange={(value) => setForm((prev) => ({ ...prev, mealType: value }))}
      />
      <SingleSelection
        direction="top"
        data={selectData.dietaryPreferences.slice(1)}
        label="Dietary Preferences"
        placeholder="Select Dietary Preferences"
        value={form.dietaryPreferences}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, dietaryPreferences: value }))
        }
      />
      <SingleSelection
        direction="top"
        data={selectData.deliveryOptions.slice(1)}
        label="Delivery Options"
        placeholder="Select Dietary Options"
        value={form.deliveryOptions}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, deliveryOptions: value }))
        }
      />
      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
