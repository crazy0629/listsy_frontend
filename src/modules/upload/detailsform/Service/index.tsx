import React, { useEffect, useState } from "react";
import * as Styled from "../details.styles";
import { MultiSelection, SingleSelection } from "@/components";
import { selectData } from "../DataList/data-service";
import { toast } from "react-toastify";

type Props = {
  onSave: (data: any) => void;
  itemCategory: string;
};

export const ServiceDetail: React.FC<Props> = ({ onSave, itemCategory }) => {
  const [form, setForm] = useState({
    itemSubCategory: "",
    serviceDate: [] as object[],
    providerType: "",
    licenses: [] as string[],
    cancellationPolocy: "",
  });

  useEffect(() => {
    setForm({
      itemSubCategory: "",
      serviceDate: [],
      providerType: "",
      licenses: [],
      cancellationPolocy: "",
    });
  }, [itemCategory]);

  const handleSave = () => {
    if (!form.itemSubCategory) {
      toast.error("Select subcategory");
    }
    // else if (!form.serviceDate.length) {
    //   toast.error("Select Service Date/Availability!");
    // }
    else if (!form.providerType) {
      toast.error("Select Provider Type!");
    } else {
      onSave(form);
    }
  };
  return (
    <Styled.FormContainer>
      <SingleSelection
        direction="top"
        data={selectData.type[itemCategory]}
        label="Service SubCategory*"
        placeholder="Select Service SubCategory"
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
        data={selectData.providerType}
        label="Provider Type*"
        placeholder="Select Provider Type"
        value={form.providerType}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, providerType: value }))
        }
      />

      <MultiSelection
        direction="top"
        data={selectData.licenses}
        label="Licenses/Certifications"
        placeholder="Select Licenses/Certifications"
        value={form.licenses}
        onChange={(value) => setForm((prev) => ({ ...prev, licenses: value }))}
      />

      <SingleSelection
        direction="top"
        data={selectData.cancellationPolicy.slice(1)}
        label="Cancellation Policy"
        placeholder="Select Cancellation Policy"
        value={form.cancellationPolocy}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, cancellationPolocy: value }))
        }
      />

      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
