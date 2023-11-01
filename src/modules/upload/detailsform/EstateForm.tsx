import React, { useState } from "react";
import * as Styled from "./details.styles";
import { MultiSelection, SingleSelection } from "@/components";
import { selectData } from "./data";
import { toast } from "react-toastify";

type Props = {
  onSave: (data: any) => void;
};

export const EstateForm: React.FC<Props> = ({ onSave }) => {
  const [form, setForm] = useState({
    title: "",
    subTitle: "",
    description: "",
    listingType: "",
    propertyType: "",
    bedroomCount: "",
    bathroomCount: "",
    tenure: "",
    propertyCondition: "",
    postCode: "",
    yearBuilt: "",
    builtSurface: "",
    builtSurfaceUnit: "sqft",
    plotSurface: "",
    plotSurfaceUnit: "sqft",
    keyFeatures: [] as string[],
    nearestAttraction: [] as string[],
    facilities: [] as string[],
  });

  const handleSave = () => {
    if (!form.title) {
      toast.error("Enter the title!");
    } else if (!form.subTitle) {
      toast.error("Enter the subtitle!");
    } else if (!form.description) {
      toast.error("Enter the subtitle!");
    } else if (!form.listingType) {
      toast.error("Select the Listing Type!");
    } else if (!form.propertyType) {
      toast.error("Select the Property Type!");
    } else if (!form.bedroomCount) {
      toast.error("Select Bedrooms!");
    } else if (!form.bathroomCount) {
      toast.error("Select Bathrooms!");
    } else if (!form.tenure) {
      toast.error("Select Tenure!");
    } else if (!form.propertyCondition) {
      toast.error("Select the Property Condition!");
    } else if (!form.postCode) {
      toast.error("Enter the Post Code / Zip Code!");
    } else if (!form.yearBuilt) {
      toast.error("Enter the Year Built");
    } else if (!form.builtSurface) {
      toast.error("Enter the Built Surface");
    } else if (!form.plotSurface) {
      toast.error("Enter the Plot Surface");
    } else if (form.keyFeatures.length === 0) {
      toast.error("Select Key Features");
    } else if (form.nearestAttraction.length === 0) {
      toast.error("Select Nearest Top Attractions");
    } else if (form.facilities.length === 0) {
      toast.error("Select Facilities");
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
        data={selectData.estate.listing}
        label="Listing Type"
        placeholder="Select Listing Type"
        value={form.listingType}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, listingType: value }))
        }
      />
      <SingleSelection
        data={selectData.estate.property}
        label="Property Type"
        placeholder="Select Property Type"
        value={form.propertyType}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, propertyType: value }))
        }
      />
      <SingleSelection
        data={selectData.estate.bedrooms}
        label="Bedrooms"
        placeholder="Select Bedrooms"
        value={form.bedroomCount}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, bedroomCount: value }))
        }
      />
      <SingleSelection
        data={selectData.estate.bathrooms}
        label="Bathrooms"
        placeholder="Select Bathrooms"
        value={form.bathroomCount}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, bathroomCount: value }))
        }
      />
      <SingleSelection
        data={selectData.estate.tenure}
        label="Tenure"
        placeholder="Select Tenure"
        value={form.tenure}
        onChange={(value) => setForm((prev) => ({ ...prev, tenure: value }))}
      />
      <SingleSelection
        data={selectData.estate.propertyCondition}
        label="Property Condition"
        placeholder="Select Property Condition"
        value={form.propertyCondition}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, propertyCondition: value }))
        }
      />

      <Styled.InputFormItem>
        <input
          type="text"
          placeholder="Post Code / Zip Code"
          onChange={(e) =>
            setForm((prev) => ({ ...prev, postCode: e.target.value }))
          }
          value={form.postCode}
        />
      </Styled.InputFormItem>
      <Styled.InputFormItem>
        <input
          type="number"
          placeholder="Year Built"
          onChange={(e) =>
            setForm((prev) => ({ ...prev, yearBuilt: e.target.value }))
          }
          value={form.yearBuilt}
        />
      </Styled.InputFormItem>
      <Styled.InputFormItem>
        <input
          type="number"
          placeholder="Built Surface"
          onChange={(e) =>
            setForm((prev) => ({ ...prev, builtSurface: e.target.value }))
          }
          value={form.builtSurface}
        />
        <Styled.InputSelectWrapper>
          <select
            value={form.builtSurfaceUnit}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, builtSurfaceUnit: e.target.value }))
            }
          >
            <option value="sqft">sqft</option>
            <option value="meter">meter</option>
          </select>
        </Styled.InputSelectWrapper>
      </Styled.InputFormItem>
      <Styled.InputFormItem>
        <input
          type="number"
          placeholder="Plot Surface"
          onChange={(e) =>
            setForm((prev) => ({ ...prev, plotSurface: e.target.value }))
          }
          value={form.plotSurface}
        />
        <Styled.InputSelectWrapper>
          <select
            value={form.plotSurfaceUnit}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, plotSurfaceUnit: e.target.value }))
            }
          >
            <option value="sqft">sqft</option>
            <option value="meter">meter</option>
          </select>
        </Styled.InputSelectWrapper>
      </Styled.InputFormItem>
      <MultiSelection
        data={selectData.estate.key}
        label="Key Features"
        placeholder="Select Key Features"
        value={form.keyFeatures}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, keyFeatures: value }))
        }
        direction="top"
      />
      <MultiSelection
        data={selectData.estate.nearest}
        label="Nearest Top Attractions"
        placeholder="Select Nearest Top Attractions"
        value={form.nearestAttraction}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, nearestAttraction: value }))
        }
        direction="top"
      />
      <MultiSelection
        data={selectData.estate.facilities}
        label="Facilities"
        placeholder="Select Facilities"
        value={form.facilities}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, facilities: value }))
        }
        direction="top"
      />

      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
