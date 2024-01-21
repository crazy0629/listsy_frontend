import React, { useState } from "react";
import * as Styled from "../details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "../data-electronics";
import { toast } from "react-toastify";

type Props = {
  onSave: (data: any) => void;
};

export const Music: React.FC<Props> = ({ onSave }) => {
  const [form, setForm] = useState({
    itemCondition: "",
    brand: "",
    connectivity: "",
    supportedStandards: "",
    warrantyInformation: "",
  });

  const handleSave = () => {
    if (!form.itemCondition) {
      toast.error("Enter item condition");
    } else if (!form.brand) {
      toast.error("Enter brand");
    } else if (!form.connectivity) {
      toast.error("Enter connectivity");
    } else if (!form.supportedStandards) {
      toast.error("Enter supported standards");
    } else if (!form.warrantyInformation) {
      toast.error("Enter Warranty Information");
    } else {
      onSave(form);
    }
  };

  return (
    <Styled.FormContainer>
      <SingleSelection
        data={selectData.forSale.Music.Condition}
        label="Item Condition"
        placeholder="Select Item Condition"
        value={form.itemCondition}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, itemCondition: value }))
        }
      />
      <SingleSelection
        data={selectData.forSale.Music.Brands}
        label="Brand"
        placeholder="Select Brand"
        value={form.brand}
        onChange={(value) => setForm((prev) => ({ ...prev, brand: value }))}
      />
      <SingleSelection
        data={selectData.forSale.Music.Connectivity}
        label="Connectivity"
        placeholder="Select Connectivity"
        value={form.connectivity}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, connectivity: value }))
        }
      />
      <SingleSelection
        data={selectData.forSale.Music.SupportedStandards}
        label="Supported Standards"
        placeholder="Select Supported Standards"
        value={form.supportedStandards}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, supportedStandards: value }))
        }
      />
      <SingleSelection
        data={selectData.forSale.Music.WarrantyInformation}
        label="Warranty Information"
        placeholder="Select Warranty Information"
        value={form.warrantyInformation}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, warrantyInformation: value }))
        }
      />
      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
