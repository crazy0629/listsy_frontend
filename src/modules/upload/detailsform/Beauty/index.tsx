import React, { useState } from "react";
import * as Styled from "../details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "../DataList/data-beauty";
import { toast } from "react-toastify";

type Props = {
  onSave: (data: any) => void;
};

export const BeautyDetail: React.FC<Props> = ({ onSave }) => {
  const [form, setForm] = useState({
    brand: "",
    itemCondition: "",
    gender: "",
    skinHairType: "",
    ingredients: "",
    sizeVolume: "",
    certifications: "",
  });

  const handleSave = () => {
    if (!form.brand) {
      toast.error("Select brand");
    } else if (!form.itemCondition) {
      toast.error("Select condition");
    } else {
      onSave(form);
    }
  };
  return (
    <Styled.FormContainer>
      <SingleSelection
        direction="top"
        data={selectData.brand}
        label="Brand"
        placeholder="Select Brand"
        value={form.brand}
        onChange={(value) => setForm((prev) => ({ ...prev, brand: value }))}
      />
      <SingleSelection
        direction="top"
        data={selectData.condition}
        label="Item Condition"
        placeholder="Select Item Condition"
        value={form.itemCondition}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, itemCondition: value }))
        }
      />
      <SingleSelection
        direction="top"
        data={selectData.gender.slice(1)}
        label="Gender/Sex"
        placeholder="Select Gender/Sex"
        value={form.gender}
        onChange={(value) => setForm((prev) => ({ ...prev, gender: value }))}
      />
      <SingleSelection
        direction="top"
        data={selectData.skin.slice(1)}
        label="Skin/Hair Type"
        placeholder="Select Skin/Hair Type"
        value={form.skinHairType}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, skinHairType: value }))
        }
      />
      <SingleSelection
        direction="top"
        data={selectData.ingredients.slice(1)}
        label="Ingredients"
        placeholder="Select Ingredients"
        value={form.ingredients}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, ingredients: value }))
        }
      />
      <SingleSelection
        direction="top"
        data={selectData.size.slice(1)}
        label="Size/Volume"
        placeholder="Select Size/Volume"
        value={form.sizeVolume}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, sizeVolume: value }))
        }
      />
      <SingleSelection
        direction="top"
        data={selectData.certifications.slice(1)}
        label="Certifications"
        placeholder="Select Certifications"
        value={form.certifications}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, certifications: value }))
        }
      />
      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
