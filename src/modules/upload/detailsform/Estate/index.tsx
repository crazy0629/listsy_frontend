import React, { useEffect, useState } from "react";
import * as Styled from "../details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "../DataList/data-estate";
import { toast } from "react-toastify";
import { InputComponent } from "@/components/InputComponent";

type Props = {
  onSave: (data: any) => void;
  category: string;
};

export const EstateDetail: React.FC<Props> = ({ onSave, category }) => {
  const [form, setForm] = useState({
    type: "",
    bedrooms: "",
    bathrooms: "",
    tenure: "",
    condition: "",
    year: "",
    energy: "",
    nearest: "",
    facilities: "",
    built: "",
    plot: "",
  });

  const handleSave = () => {
    if (!form.type) {
      toast.error("Select Property type");
    } else if (!form.bedrooms) {
      toast.error("Select Bedrooms");
    } else if (!form.bathrooms) {
      toast.error("Select Bathrooms");
    } else {
      onSave(form);
    }
  };
  return (
    <>
      <Styled.FormContainer>
        <SingleSelection
          direction="top"
          data={selectData.type}
          label="Property Type*"
          placeholder="Select Property Type"
          value={form.type}
          onChange={(value) => setForm((prev) => ({ ...prev, type: value }))}
        />

        <SingleSelection
          direction="top"
          data={selectData.bedrooms}
          label="Bedrooms*"
          placeholder="Select Bedrooms"
          value={form.bedrooms}
          onChange={(value) =>
            setForm((prev) => ({ ...prev, bedrooms: value }))
          }
        />
        <SingleSelection
          direction="top"
          data={selectData.bathrooms}
          label="Bathrooms*"
          placeholder="Select Bathrooms"
          value={form.bathrooms}
          onChange={(value) =>
            setForm((prev) => ({ ...prev, bathrooms: value }))
          }
        />
        <InputComponent
          value={form.built}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, built: e.target.value }))
          }
          placeholder="Built Surface"
          label="Built Surface"
        />
        <InputComponent
          value={form.plot}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, plot: e.target.value }))
          }
          placeholder="Plot Surface"
          label="Plot Surface"
        />
        <SingleSelection
          direction="top"
          data={selectData.tenure.slice(1)}
          label="Tenure"
          placeholder="Select Tenure"
          value={form.tenure}
          onChange={(value) => setForm((prev) => ({ ...prev, tenure: value }))}
        />
        <SingleSelection
          direction="top"
          data={selectData.condition.slice(1)}
          label="Property Contidion"
          placeholder="Select Property Condition"
          value={form.condition}
          onChange={(value) =>
            setForm((prev) => ({ ...prev, condition: value }))
          }
        />
        <SingleSelection
          direction="top"
          data={selectData.year.slice(1)}
          label="Year Built"
          placeholder="Select Year Built"
          value={form.year}
          onChange={(value) => setForm((prev) => ({ ...prev, year: value }))}
        />
        <SingleSelection
          direction="top"
          data={selectData.energy.slice(1)}
          label="Energy Efficiency Rating"
          placeholder="Select Energy Efficiency Rating"
          value={form.energy}
          onChange={(value) => setForm((prev) => ({ ...prev, energy: value }))}
        />
        <SingleSelection
          direction="top"
          data={selectData.nearest.slice(1)}
          label="Nearest Top Attractions"
          placeholder="Select Nearest Top Attractions"
          value={form.nearest}
          onChange={(value) => setForm((prev) => ({ ...prev, nearest: value }))}
        />
        <SingleSelection
          direction="top"
          data={selectData.facilities.slice(1)}
          label="Facilities"
          placeholder="Select Facilities"
          value={form.facilities}
          onChange={(value) =>
            setForm((prev) => ({ ...prev, facilities: value }))
          }
        />

        <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
      </Styled.FormContainer>
    </>
  );
};
