import React, { useState } from "react";
import * as Styled from "../details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "../data-electronics";
import { toast } from "react-toastify";

type Props = {
  onSave: (data: any) => void;
};

export const Television: React.FC<Props> = ({ onSave }) => {
  const [form, setForm] = useState({
    itemCondition: "",
    screenSize: "",
    resolution: "",
    brand: "",
    smartTV: "",
    colour: "",
    warrantyInformation: "",
  });

  const handleSave = () => {
    if (!form.itemCondition) {
      toast.error("Enter item condition");
    } else if (!form.screenSize) {
      toast.error("Enter screen size");
    } else if (!form.resolution) {
      toast.error("Enter resolution");
    } else if (!form.brand) {
      toast.error("Enter brand");
    } else if (!form.smartTV) {
      toast.error("Enter if this is smart TV or not");
    } else if (!form.colour) {
      toast.error("Enter colour");
    } else if (!form.warrantyInformation) {
      toast.error("Enter Warranty Information");
    } else {
      onSave(form);
    }
  };

  return (
    <Styled.FormContainer>
      <SingleSelection
        data={selectData.forSale.Televisions.Condition}
        label="Item Condition"
        placeholder="Select Item Condition"
        value={form.itemCondition}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, itemCondition: value }))
        }
      />
      <SingleSelection
        data={selectData.forSale.Televisions.ScreenSize}
        label="Screen Size"
        placeholder="Select Screen Size"
        value={form.screenSize}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, screenSize: value }))
        }
      />
      <SingleSelection
        data={selectData.forSale.Televisions.Resolution}
        label="Resolution"
        placeholder="Select Resolution"
        value={form.resolution}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, resolution: value }))
        }
      />
      <SingleSelection
        data={selectData.forSale.Televisions.Brand}
        label="Brand"
        placeholder="Select Brand"
        value={form.brand}
        onChange={(value) => setForm((prev) => ({ ...prev, brand: value }))}
      />
      <SingleSelection
        data={selectData.forSale.Televisions.SmartTV}
        label="Smart TV"
        placeholder="Select Smart TV"
        value={form.smartTV}
        onChange={(value) => setForm((prev) => ({ ...prev, smartTV: value }))}
      />
      <SingleSelection
        data={selectData.forSale.Televisions.Colour}
        label="Colour"
        placeholder="Select Colour"
        value={form.colour}
        onChange={(value) => setForm((prev) => ({ ...prev, colour: value }))}
      />
      <SingleSelection
        data={selectData.forSale.Televisions.WarrantyInformation}
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
