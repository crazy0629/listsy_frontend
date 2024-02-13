import React, { useEffect, useState } from "react";
import * as Styled from "./details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "./DataList/data-electronics";
import { toast } from "react-toastify";
import { Television } from "./Electronics/Television";
import { Laptops } from "./Electronics/Laptops";
import { Ipad } from "./Electronics/Ipad";
import { TheaterSystems } from "./Electronics/TheaterSystems";
import { Kitchen } from "./Electronics/Kitchen";
import { Laundry } from "./Electronics/Laundry";
import { Cleaning } from "./Electronics/Cleaning";
import { Heating } from "./Electronics/Heating";
import { PersonalCare } from "./Electronics/PersonalCare";
import { Miscellaneous } from "./Electronics/Miscellaneous";
import { Camera } from "./Electronics/Camera";
import { Music } from "./Electronics/Music";
import { Phone } from "./Electronics/Phone";
import { GamingConsole } from "./Electronics/GamingConsole";
import { Wearable } from "./Electronics/Wearable";
import { Networking } from "./Electronics/Networking";
import { ComputerComponents } from "./Electronics/ComputerComponents";
import { Office } from "./Electronics/Office";
import { Security } from "./Electronics/Security";
import { Audio } from "./Electronics/Audtio";
import { HomeDevice } from "./Electronics/HomeDevice";
import { Battery } from "./Electronics/Battery";

type Props = {
  onSave: (data: any) => void;
};

export const ForSaleForm: React.FC<Props> = ({ onSave }) => {
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
      toast.error("Select the Item Category!");
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
        <p>{"Subtitle (Optional)"}</p>
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
        data={selectData.forSale.category.slice(1)}
        label="Item Category"
        placeholder="Select Item Category"
        value={form.itemCategory}
        onChange={(value) => {
          setForm((prev) => ({
            ...prev,
            itemCategory: value,
            itemDetailInfo: null,
          }));
        }}
      />
      {form.itemCategory == "Televisions" && (
        <Television onSave={subFormSave} />
      )}

      {form.itemCategory == "Laptops and Desktop Computers" && (
        <Laptops onSave={subFormSave} />
      )}

      {form.itemCategory == "iPad, Tablets & eReaders" && (
        <Ipad onSave={subFormSave} />
      )}
      {form.itemCategory == "Home Theater Systems" && (
        <TheaterSystems onSave={subFormSave} />
      )}
      {form.itemCategory == "Kitchen Appliances" && (
        <Kitchen onSave={subFormSave} />
      )}
      {form.itemCategory == "Laundry Appliances" && (
        <Laundry onSave={subFormSave} />
      )}
      {form.itemCategory == "Cleaning Appliances" && (
        <Cleaning onSave={subFormSave} />
      )}
      {form.itemCategory == "Heating, Cooling, and Air Quality" && (
        <Heating onSave={subFormSave} />
      )}
      {form.itemCategory == "Personal Care Appliances" && (
        <PersonalCare onSave={subFormSave} />
      )}
      {form.itemCategory == "Miscellaneous Appliances" && (
        <Miscellaneous onSave={subFormSave} />
      )}
      {form.itemCategory == "Cameras and Camcorders" && (
        <Camera onSave={subFormSave} />
      )}
      {form.itemCategory == "Portable Music Players" && (
        <Music onSave={subFormSave} />
      )}
      {form.itemCategory == "Phones" && <Phone onSave={subFormSave} />}
      {form.itemCategory == "Gaming Consoles and Accessories" && (
        <GamingConsole onSave={subFormSave} />
      )}
      {form.itemCategory == "Wearable Technology" && (
        <Wearable onSave={subFormSave} />
      )}
      {form.itemCategory == "Networking Devices" && (
        <Networking onSave={subFormSave} />
      )}
      {form.itemCategory == "Computer Components and Storage" && (
        <ComputerComponents onSave={subFormSave} />
      )}
      {form.itemCategory == "Office Equipment" && (
        <Office onSave={subFormSave} />
      )}
      {form.itemCategory == "Security and Surveillance Equipment" && (
        <Security onSave={subFormSave} />
      )}
      {form.itemCategory == "Audio Equipment" && <Audio onSave={subFormSave} />}
      {form.itemCategory == "Smart Home Devices" && (
        <HomeDevice onSave={subFormSave} />
      )}
      {form.itemCategory == "Batteries and Power Supplies" && (
        <Battery onSave={subFormSave} />
      )}
      {/* 
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

      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>*/}
    </Styled.FormContainer>
  );
};
