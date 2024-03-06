import React, { useEffect, useState } from "react";
import * as Styled from "../details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "../DataList/data-art";
import { toast } from "react-toastify";
import { InputComponent } from "@/components/InputComponent";

type Props = {
  onSave: (data: any) => void;
  itemCategory: string;
};

export const ArtDetail: React.FC<Props> = ({ onSave, itemCategory }) => {
  const [form, setForm] = useState({
    itemSubCategory: "",
    itemCondition: "",
    authenticity: "",
    artist: "",
    age: "",
  });

  useEffect(() => {
    setForm({
      itemSubCategory: "",
      itemCondition: "",
      authenticity: "",
      artist: "",
      age: "",
    });
  }, [itemCategory]);

  const handleSave = () => {
    if (!form.itemSubCategory) {
      toast.error("Select subcategory");
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
        data={selectData.type[itemCategory]}
        label="Subcategory"
        placeholder="Select Subcategory"
        value={form.itemSubCategory}
        onChange={(value) => {
          setForm((prev) => ({
            ...prev,
            itemSubCategory: value,
          }));
        }}
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
        data={selectData.authenticity.slice(1)}
        label="Authenticity"
        placeholder="Select Authenticity"
        value={form.authenticity}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, authenticity: value }))
        }
      />

      <InputComponent
        value={form.artist}
        placeholder="Type artist or manufacturer name here"
        label="Artist/Manufacturer "
        onChange={(e) =>
          setForm((prev) => ({ ...prev, artist: e.target.value }))
        }
      />

      <SingleSelection
        direction="top"
        data={selectData.age.slice(1)}
        label="Age/Era"
        placeholder="Select Age/Era"
        value={form.age}
        onChange={(value) => setForm((prev) => ({ ...prev, age: value }))}
      />

      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
