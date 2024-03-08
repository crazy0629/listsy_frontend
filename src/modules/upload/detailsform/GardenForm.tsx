import React, { useEffect, useState } from "react";
import * as Styled from "./details.styles";
import { SingleSelection } from "@/components";
import { toast } from "react-toastify";
import { gardenFilter } from "@/modules/main/fiterData";
import { GardenDetail } from "./Garden";

type Props = {
  onSave: (data: any) => void;
};

export const GardenForm: React.FC<Props> = ({ onSave }) => {
  const [form, setForm] = useState({
    title: "",
    subTitle: "",
    description: "",
    itemCategory: "",
    itemDetailInfo: null,
  });

  const subFormSave = (details: any) => {
    if (!form.title) {
      toast.error("Enter title!");
    } else if (!form.description) {
      toast.error("Enter the description!");
    } else if (!form.itemCategory) {
      toast.error("Select type of equipment!");
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
        data={gardenFilter.map((item) => item.label).slice(1)}
        label="Type of Equipment*"
        placeholder="Select Type of Equipment"
        value={form.itemCategory}
        onChange={(value) => {
          setForm((prev) => ({
            ...prev,
            itemCategory: value,
            itemDetailInfo: null,
          }));
        }}
      />
      <GardenDetail onSave={subFormSave} />
    </Styled.FormContainer>
  );
};
