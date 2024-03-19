import React, { useEffect, useState } from "react";
import * as Styled from "../details.styles";
import { SingleSelection } from "@/components";
import { selectData } from "../DataList/data-fashion";
import { toast } from "react-toastify";
import { MdOutlineErrorOutline } from "react-icons/md";

type Props = {
  onSave: (data: any) => void;
  category: string;
};

export const FashionDetail: React.FC<Props> = ({ onSave, category }) => {
  const [form, setForm] = useState({
    gender: "",
    subcategory: "",
    size: "",
    itemCondition: "",
    color: "",
    material: "",
    sellerType: "",
  });
  const [sizeModal, setSizeModal] = useState(false);

  useEffect(() => {
    setForm((prev) => ({ ...prev, subcategory: "", size: "" }));
  }, [category]);

  const handleSave = () => {
    if (!form.gender) {
      toast.error("Select Gender");
    } else if (!form.itemCondition) {
      toast.error("Select condition");
    } else {
      onSave(form);
    }
  };
  return (
    <>
      <Styled.FormContainer>
        {category && (
          <>
            <SingleSelection
              direction="top"
              data={selectData.category[category]}
              label="Subcategory*"
              placeholder="Select Subcategory"
              value={form.subcategory}
              onChange={(value) =>
                setForm((prev) => ({ ...prev, subcategory: value }))
              }
            />
            {selectData.size[category] && (
              <SingleSelection
                direction="top"
                data={
                  form.subcategory === "Shoes"
                    ? selectData.size.Shoes
                    : selectData.size[category]
                }
                label={
                  <Styled.CustomLabel>
                    Size*
                    <MdOutlineErrorOutline
                      size={16}
                      color={"#666"}
                      onClick={() => setSizeModal(true)}
                    />
                  </Styled.CustomLabel>
                }
                placeholder="Select Size"
                value={form.size}
                onChange={(value) =>
                  setForm((prev) => ({ ...prev, size: value }))
                }
              />
            )}
          </>
        )}
        <SingleSelection
          direction="top"
          data={selectData.gender}
          label="Gender*"
          placeholder="Select Gender"
          value={form.gender}
          onChange={(value) => setForm((prev) => ({ ...prev, gender: value }))}
        />
        <SingleSelection
          direction="top"
          data={selectData.condition}
          label="Condition*"
          placeholder="Select Condition"
          value={form.itemCondition}
          onChange={(value) =>
            setForm((prev) => ({ ...prev, itemCondition: value }))
          }
        />
        <SingleSelection
          direction="top"
          data={selectData.color.slice(1)}
          label="Colour"
          placeholder="Select Colour"
          value={form.color}
          onChange={(value) => setForm((prev) => ({ ...prev, color: value }))}
        />
        <SingleSelection
          direction="top"
          data={selectData.material.slice(1)}
          label="Material/Fabric"
          placeholder="Select Material/Fabric"
          value={form.material}
          onChange={(value) =>
            setForm((prev) => ({ ...prev, material: value }))
          }
        />
        <SingleSelection
          direction="top"
          data={selectData.sellerType.slice(1)}
          label="Seller Type"
          placeholder="Select Seller Type"
          value={form.sellerType}
          onChange={(value) =>
            setForm((prev) => ({ ...prev, sellerType: value }))
          }
        />

        <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
      </Styled.FormContainer>
      {sizeModal && (
        <Styled.SizeModalWrapper onClick={() => setSizeModal(false)}>
          <div>
            {category === "Ethnic Wear" && form.subcategory === "Shoes" ? (
              <img src={`/assets/images/fashion_size/EthnicShoes.png`} alt="" />
            ) : category === "Vintage Clothing" &&
              form.subcategory === "Shoes" ? (
              <img
                src={`/assets/images/fashion_size/VintageShoes.png`}
                alt=""
              />
            ) : category === "Sustainable and Eco-Friendly Fashion" ? (
              <>
                <img
                  src={`/assets/images/fashion_size/Sustainable and Eco-Friendly FashionTop.png`}
                  alt=""
                />
                <img
                  src={`/assets/images/fashion_size/Sustainable and Eco-Friendly FashionBottom.png`}
                  alt=""
                />
              </>
            ) : (
              <img src={`/assets/images/fashion_size/${category}.png`} alt="" />
            )}
          </div>
        </Styled.SizeModalWrapper>
      )}
    </>
  );
};
