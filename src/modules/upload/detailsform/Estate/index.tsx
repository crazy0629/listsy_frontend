import React, { useEffect, useState } from "react";
import * as Styled from "../details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "../DataList/data-estate";
import { toast } from "react-toastify";

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
  });
  const [sizeModal, setSizeModal] = useState(false);

  useEffect(() => {
    setForm((prev) => ({ ...prev, subcategory: "", size: "" }));
  }, [category]);

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
        <SingleSelection
          direction="top"
          data={selectData.tenure}
          label="Tenure"
          placeholder="Select Tenure"
          value={form.tenure}
          onChange={(value) => setForm((prev) => ({ ...prev, tenure: value }))}
        />
        <SingleSelection
          direction="top"
          data={selectData.year}
          label="Year Built"
          placeholder="Select Year Built"
          value={form.year}
          onChange={(value) => setForm((prev) => ({ ...prev, year: value }))}
        />
        <SingleSelection
          direction="top"
          data={selectData.nearest}
          label="Nearest Top Attractions"
          placeholder="Select Nearest Top Attractions"
          value={form.nearest}
          onChange={(value) => setForm((prev) => ({ ...prev, nearest: value }))}
        />
        <SingleSelection
          direction="top"
          data={selectData.facilities}
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
