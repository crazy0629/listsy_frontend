import React, { useEffect, useState } from "react";
import * as Styled from "./details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "./DataList/data-pets";
import { toast } from "react-toastify";
import { DogsDetails } from "./Pets/Dogs";
import { CatsDetails } from "./Pets/Cats";
import { BirdsDetails } from "./Pets/Birds";
import { FishDetails } from "./Pets/Fish";
import { ReptileDetails } from "./Pets/Reptile";
import { RabbitsDetails } from "./Pets/Rabbits";
import { RodentsDetails } from "./Pets/Rodents";
import { LivestockDetails } from "./Pets/Livestock";
import { HorsesDetails } from "./Pets/Horses";
import { AmphibianDetails } from "./Pets/Amphibian";
import { SuppliesDetails } from "./Pets/Supplies";

type Props = {
  onSave: (data: any) => void;
  onCategoryChange: (value: boolean) => void;
};

export const PetForm: React.FC<Props> = ({ onSave, onCategoryChange }) => {
  const [form, setForm] = useState({
    title: "",
    subTitle: "",
    description: "",
    itemCategory: "",
    subCategory: "",
    itemDetailInfo: null,
  });

  const subFormSave = (details: any) => {
    if (!form.title) {
      toast.error("Enter title!");
    } else if (!form.description) {
      toast.error("Enter the description!");
    } else if (!form.itemCategory) {
      toast.error("Select the Item Category!");
    } else if (!form.subCategory) {
      toast.error("Select the Subcategory!");
    } else {
      if (form.itemDetailInfo == details) onSave(form);
      else
        setForm((prev) => ({
          ...prev,
          itemDetailInfo: { ...details, subcategory: prev.subCategory },
        }));
    }
  };

  useEffect(() => {
    if (form.itemDetailInfo == null) return;
    onSave(form);
  }, [form.itemDetailInfo]);

  return (
    <Styled.FormContainer>
      <Styled.TextAreaFormItem height={80}>
        <p>{"Title*"}</p>
        <textarea
          placeholder="Tell viewer about your video title."
          onChange={(e) =>
            e.target.value.length <= 100 &&
            setForm((prev) => ({ ...prev, title: e.target.value }))
          }
          value={form.title}
        ></textarea>
        <span>{form.title.length} / 100</span>
      </Styled.TextAreaFormItem>
      <Styled.TextAreaFormItem height={80}>
        <p>{"Subtitle"}</p>
        <textarea
          placeholder="Tell viewer about your video Subtitle."
          onChange={(e) =>
            e.target.value.length <= 100 &&
            setForm((prev) => ({ ...prev, subTitle: e.target.value }))
          }
          value={form.subTitle}
        ></textarea>
        <span>{form.subTitle.length} / 100</span>
      </Styled.TextAreaFormItem>
      <Styled.TextAreaFormItem height={120}>
        <p>{"Description*"}</p>
        <textarea
          placeholder="Tell viewer about your video."
          onChange={(e) =>
            e.target.value.length <= 100 &&
            setForm((prev) => ({ ...prev, description: e.target.value }))
          }
          value={form.description}
        ></textarea>
        <span>{form.description.length} / 5000</span>
      </Styled.TextAreaFormItem>
      <SingleSelection
        direction="top"
        data={selectData.category.slice(1)}
        label="Item Category*"
        placeholder="Select Item Category"
        value={form.itemCategory}
        onChange={(value) => {
          setForm((prev) => ({
            ...prev,
            itemCategory: value,
            subCategory: "",
            itemDetailInfo: null,
          }));
          onCategoryChange(value === "Pets for adoption");
        }}
      />
      <SingleSelection
        direction="top"
        data={selectData.subCategory[form.itemCategory]}
        label="Item Subcategory*"
        placeholder="Select Item Subcategory"
        value={form.subCategory}
        onChange={(value) => {
          setForm((prev) => ({
            ...prev,
            subCategory: value,
            itemDetailInfo: null,
          }));
        }}
      />
      {form.subCategory === "Dogs" && (
        <DogsDetails onSave={subFormSave} subCategory={form.subCategory} />
      )}
      {form.subCategory === "Cats" && (
        <CatsDetails onSave={subFormSave} subCategory={form.subCategory} />
      )}
      {form.subCategory === "Birds" && (
        <BirdsDetails onSave={subFormSave} subCategory={form.subCategory} />
      )}
      {form.subCategory === "Fish" && (
        <FishDetails onSave={subFormSave} subCategory={form.subCategory} />
      )}
      {form.subCategory === "Reptiles" && (
        <ReptileDetails onSave={subFormSave} subCategory={form.subCategory} />
      )}
      {form.subCategory === "Rabbits" && (
        <RabbitsDetails onSave={subFormSave} subCategory={form.subCategory} />
      )}
      {form.subCategory === "Rodents" && (
        <RodentsDetails onSave={subFormSave} subCategory={form.subCategory} />
      )}
      {form.subCategory === "Livestock" && (
        <LivestockDetails onSave={subFormSave} subCategory={form.subCategory} />
      )}
      {form.subCategory === "Horses" && (
        <HorsesDetails onSave={subFormSave} subCategory={form.subCategory} />
      )}
      {form.subCategory === "Amphibian" && (
        <AmphibianDetails onSave={subFormSave} subCategory={form.subCategory} />
      )}
      {form.itemCategory === "Pet Supplies" && (
        <SuppliesDetails onSave={subFormSave} subCategory={form.subCategory} />
      )}
    </Styled.FormContainer>
  );
};
