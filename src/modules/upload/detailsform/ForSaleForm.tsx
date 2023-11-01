import React, { useState } from "react";
import * as Styled from "./details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "./data";
import { toast } from "react-toastify";

type Props = {
  onSave: (data: any) => void;
};

export const ForSaleForm: React.FC<Props> = ({ onSave }) => {
  const [form, setForm] = useState({
    title: "",
    subTitle: "",
    description: "",
    itemCategory: "",
    itemCondition: "",
    brandName: "",
    manufacturer: "",
    itemColor: "",
    dimensionW: "",
    dimensionH: "",
    dimensionUnit: "meter",
    itemWeight: "",
    itemUnit: "gram",
  });

  const handleSave = () => {
    if (!form.title) {
      toast.error("Enter the title!");
    } else if (!form.subTitle) {
      toast.error("Enter the subtitle!");
    } else if (!form.description) {
      toast.error("Enter the subtitle!");
    } else if (!form.itemCategory) {
      toast.error("Select the Item Category!");
    } else if (!form.itemCondition) {
      toast.error("Select the Item Condition!");
    } else {
      onSave(form);
    }
  };

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
        data={selectData.forSale.category}
        label="Item Category"
        placeholder="Select Item Condition"
        value={form.itemCategory}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, itemCategory: value }))
        }
      />
      <SingleSelection
        data={selectData.forSale.condition}
        label="Item Condition"
        placeholder="Select Item Condition"
        value={form.itemCondition}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, itemCondition: value }))
        }
      />
      <Styled.InputFormItem>
        <input
          type="text"
          placeholder="Brand Name"
          onChange={(e) =>
            setForm((prev) => ({ ...prev, brandName: e.target.value }))
          }
          value={form.brandName}
        />
      </Styled.InputFormItem>
      <Styled.InputFormItem>
        <input
          type="text"
          placeholder="Manufacturer"
          onChange={(e) =>
            setForm((prev) => ({ ...prev, manufacturer: e.target.value }))
          }
          value={form.manufacturer}
        />
      </Styled.InputFormItem>
      <SingleSelection
        data={selectData.forSale.color}
        label="Colour/Color"
        placeholder="Select Colour/Color"
        direction="top"
        value={form.itemColor}
        onChange={(value) => setForm((prev) => ({ ...prev, itemColor: value }))}
      />
      <Styled.InputFormItem>
        <input
          type="number"
          placeholder="Item Dimensions Width"
          onChange={(e) =>
            setForm((prev) => ({ ...prev, dimensionW: e.target.value }))
          }
          value={form.dimensionW}
        />
        <Styled.InputSelectWrapper>
          <select
            value={form.dimensionUnit}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, dimensionUnit: e.target.value }))
            }
          >
            <option value="meter">Meter</option>
            <option value="km">km</option>
            <option value="cm">cm</option>
            <option value="mm">mm</option>
            <option value="feet">Feet</option>
            <option value="yard">Yard</option>
            <option value="inch">Inch</option>
          </select>
        </Styled.InputSelectWrapper>
      </Styled.InputFormItem>
      <Styled.InputFormItem>
        <input
          type="number"
          placeholder="Item Dimensions Height"
          onChange={(e) =>
            setForm((prev) => ({ ...prev, dimensionH: e.target.value }))
          }
          value={form.dimensionH}
        />
        <Styled.InputSelectWrapper>
          <select
            value={form.dimensionUnit}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, dimensionUnit: e.target.value }))
            }
          >
            <option value="meter">Meter</option>
            <option value="km">km</option>
            <option value="cm">cm</option>
            <option value="mm">mm</option>
            <option value="feet">Feet</option>
            <option value="yard">Yard</option>
            <option value="inch">Inch</option>
          </select>
        </Styled.InputSelectWrapper>
      </Styled.InputFormItem>
      <Styled.InputFormItem>
        <input
          type="number"
          placeholder="Weight"
          onChange={(e) =>
            setForm((prev) => ({ ...prev, itemWeight: e.target.value }))
          }
          value={form.itemWeight}
        />
        <Styled.InputSelectWrapper>
          <select
            value={form.itemUnit}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, itemUnit: e.target.value }))
            }
          >
            <option value="gram">Gram</option>
            <option value="mg">mg</option>
            <option value="kg">kg</option>
            <option value="ounce">Ounce</option>
            <option value="pound">Pound</option>
            <option value="ton">Ton</option>
          </select>
        </Styled.InputSelectWrapper>
      </Styled.InputFormItem>

      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
