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
    ownership: "",
    condition: "",
    year: "",
    lease: "",
    parking: "",
    amenities: "",
    lotSize: "",
    propertySize: "",
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
        <SingleSelection
          direction="top"
          data={selectData.propertySize.slice(1)}
          label="Property Size"
          placeholder="Select Property Size"
          value={form.propertySize}
          onChange={(value) =>
            setForm((prev) => ({ ...prev, propertySize: value }))
          }
        />
        <SingleSelection
          direction="top"
          data={selectData.lotSize.slice(1)}
          label="Lot Size"
          placeholder="Select Lot Size"
          value={form.lotSize}
          onChange={(value) => setForm((prev) => ({ ...prev, lotSize: value }))}
        />
        <SingleSelection
          direction="top"
          data={selectData.ownership.slice(1)}
          label="Ownership"
          placeholder="Select Ownership"
          value={form.ownership}
          onChange={(value) =>
            setForm((prev) => ({ ...prev, ownership: value }))
          }
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
          data={selectData.lease.slice(1)}
          label="Lease Term"
          placeholder="Select Lease Term"
          value={form.lease}
          onChange={(value) => setForm((prev) => ({ ...prev, lease: value }))}
        />
        <SingleSelection
          direction="top"
          data={selectData.parking.slice(1)}
          label="Parking"
          placeholder="Select Parking"
          value={form.parking}
          onChange={(value) => setForm((prev) => ({ ...prev, parking: value }))}
        />
        <SingleSelection
          direction="top"
          data={selectData.amenities.slice(1)}
          label="Amenities"
          placeholder="Select Amenities"
          value={form.amenities}
          onChange={(value) =>
            setForm((prev) => ({ ...prev, amenities: value }))
          }
        />

        <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
      </Styled.FormContainer>
    </>
  );
};
