import React, { useEffect, useState } from "react";
import * as Styled from "./details.styles";
import { SingleSelection } from "@/components";
import { toast } from "react-toastify";
import { foodFilter } from "@/modules/main/fiterData";
import { FoodDetail } from "./Food";

type Props = {
  onSave: (data: any) => void;
};

export const FoodForm: React.FC<Props> = ({ onSave }) => {
  const [form, setForm] = useState({
    title: "",
    subTitle: "",
    description: "",
    itemCategory: "",
    itemDetailInfo: null,
  });

  const subFormSave = (details: any) => {
    if (!form.title) {
      toast.error("Enter the title!");
    } else if (!form.subTitle) {
      toast.error("Enter the subtitle!");
    } else if (!form.description) {
      toast.error("Enter the description!");
    } else if (!form.itemCategory) {
      toast.error("Select Cuisine Type!");
    } else {
      if (form.itemDetailInfo == details) onSave(form);
      else setForm((prev) => ({ ...prev, itemDetailInfo: details }));
    }
  };

  useEffect(() => {
    if (form.itemDetailInfo == null) return;
    onSave(form);
  }, [form.itemDetailInfo]);

  return (
    <Styled.FormContainer>
      <Styled.TextAreaFormItem height={80}>
        <p>{"Title (required)"}</p>
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
        <p>{"Subtitle (required)"}</p>
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
        <p>{"Description"}</p>
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
        data={foodFilter.map((item) => item.label).slice(1)}
        label="Cuisine Type"
        placeholder="Select Cuisine Type"
        value={form.itemCategory}
        onChange={(value) => {
          setForm((prev) => ({
            ...prev,
            itemCategory: value,
            itemDetailInfo: null,
          }));
        }}
      />
      <FoodDetail onSave={subFormSave} />
    </Styled.FormContainer>
  );
};