import React, { useState } from "react";
import * as Styled from "./details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "./data";
import { toast } from "react-toastify";

type Props = {
  onSave: (data: any) => void;
};

export const TruckForm: React.FC<Props> = ({ onSave }) => {
  const [form, setForm] = useState({
    title: "",
    subTitle: "",
    description: "",
    vehicleType: "",
    saleType: "",
    condition: "",
    vehicleMake: "",
    vehicleModel: "",
    year: "",
    mileage: "",
    mileageUnit: "mile",

    gearBox: "",
    fuelType: "",
    doors: "",
    color: "",
    bodyType: "",
    seat: "",
  });

  const handleSave = () => {
    if (!form.title) {
      toast.error("Enter the title!");
    } else if (!form.subTitle) {
      toast.error("Enter the subtitle!");
    } else if (!form.description) {
      toast.error("Enter the subtitle!");
    } else if (!form.vehicleType) {
      toast.error("Select the Vehicle Type!");
    } else if (!form.saleType) {
      toast.error("Select the Sale Type!");
    } else if (!form.condition) {
      toast.error("Select the Condition!");
    } else if (!form.vehicleMake) {
      toast.error("Select the Make!");
    } else if (!form.vehicleModel) {
      toast.error("Select the Model!");
    } else if (!form.year) {
      toast.error("Select the Year!");
    } else if (!form.mileage) {
      toast.error("Enter the Mileage!");
    } else if (!form.gearBox) {
      toast.error("Enter the Gearbox!");
    } else if (!form.fuelType) {
      toast.error("Enter Fuel Type");
    } else if (!form.doors) {
      toast.error("Enter Doors");
    } else if (!form.color) {
      toast.error("Enter the Color/Colour");
    } else if (!form.bodyType) {
      toast.error("Select Body Type");
    } else if (!form.seat) {
      toast.error("Select Seats");
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
        data={selectData.truck.vehicleType}
        label="Vehicle Type"
        placeholder="Select Vehicle Type"
        value={form.vehicleType}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, vehicleType: value }))
        }
      />
      <SingleSelection
        data={selectData.truck.saleType}
        label="Sale Type"
        placeholder="Select Sale Type"
        value={form.saleType}
        onChange={(value) => setForm((prev) => ({ ...prev, saleType: value }))}
      />
      <SingleSelection
        data={selectData.truck.condition}
        label="Condition"
        placeholder="Select Condition"
        value={form.condition}
        onChange={(value) => setForm((prev) => ({ ...prev, condition: value }))}
      />
      <SingleSelection
        data={selectData.truck.make}
        label="Make"
        placeholder="Select Make"
        value={form.vehicleMake}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, vehicleMake: value }))
        }
      />
      <SingleSelection
        data={selectData.truck.model}
        label="Model"
        placeholder="Select Model"
        value={form.vehicleModel}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, vehicleModel: value }))
        }
      />
      <SingleSelection
        data={selectData.truck.year}
        label="Year"
        placeholder="Select Year"
        value={form.year}
        onChange={(value) => setForm((prev) => ({ ...prev, year: value }))}
      />
      <Styled.InputFormItem>
        <input
          type="number"
          placeholder="Mileage"
          onChange={(e) =>
            setForm((prev) => ({ ...prev, mileage: e.target.value }))
          }
          value={form.mileage}
        />
        <Styled.InputSelectWrapper>
          <select
            value={form.mileageUnit}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, mileageUnit: e.target.value }))
            }
          >
            <option value="mile">Miles</option>
            <option value="kilometer">kms</option>
          </select>
        </Styled.InputSelectWrapper>
      </Styled.InputFormItem>
      <SingleSelection
        data={selectData.truck.gearBox}
        label="Gearbox"
        placeholder="Select Gearbox"
        value={form.gearBox}
        onChange={(value) => setForm((prev) => ({ ...prev, gearBox: value }))}
      />
      <SingleSelection
        data={selectData.truck.fualType}
        label="Fuel Type"
        placeholder="Select Fuel Type"
        value={form.fuelType}
        onChange={(value) => setForm((prev) => ({ ...prev, fuelType: value }))}
      />
      <SingleSelection
        data={selectData.truck.doors}
        label="Doors"
        placeholder="Select Doors"
        value={form.doors}
        onChange={(value) => setForm((prev) => ({ ...prev, doors: value }))}
        direction="top"
      />
      <SingleSelection
        data={selectData.truck.color}
        label="Color/Colour"
        placeholder="Select Color/Colour"
        value={form.color}
        onChange={(value) => setForm((prev) => ({ ...prev, color: value }))}
        direction="top"
      />
      <SingleSelection
        data={selectData.truck.bodyType}
        label="Body Type"
        placeholder="Select Body Type"
        value={form.bodyType}
        onChange={(value) => setForm((prev) => ({ ...prev, bodyType: value }))}
        direction="top"
      />
      <SingleSelection
        data={selectData.truck.seats}
        label="Seats"
        placeholder="Select Seats"
        value={form.seat}
        direction="top"
        onChange={(value) => setForm((prev) => ({ ...prev, seat: value }))}
      />
      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
