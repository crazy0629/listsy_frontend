import React, { useState } from "react";
import * as Styled from "./ads.styles";
import { SERVER_UPLOAD_URI } from "@/config";
import { MdOutlineErrorOutline } from "react-icons/md";
import { SizeModalWrapper } from "../upload/detailsform/details.styles";

export const Fashion: React.FC<{ data: any }> = ({ data }) => {
  const [sizeModal, setSizeModal] = useState(false);
  return (
    <>
      <Styled.InfoItemWrapper2>
        <span>Ads Link</span>
        <p>{SERVER_UPLOAD_URI + data?.adId?.adFileName}</p>
      </Styled.InfoItemWrapper2>
      <Styled.InfoItemWrapper>
        <span>Address</span>
        <span>{data?.address}</span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper>
        <span>Price</span>
        <span>
          {data?.priceUnit}
          {data?.price}
        </span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper>
        <span>View Count</span>
        <span>{data?.viewCount}</span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper>
        <span>Category</span>
        <span>{data?.itemCategory}</span>
      </Styled.InfoItemWrapper>

      {data.itemDetailInfo.subcategory && (
        <Styled.InfoItemWrapper>
          <span>Subcategory</span>
          <span>{data?.itemDetailInfo.subcategory}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.size && (
        <Styled.InfoItemWrapper>
          <span>Size</span>
          <span>
            {data?.itemDetailInfo.size}{" "}
            <MdOutlineErrorOutline
              size={16}
              color={"#666"}
              onClick={() => setSizeModal(true)}
            />
          </span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.gender && (
        <Styled.InfoItemWrapper>
          <span>Gender</span>
          <span>{data?.itemDetailInfo.gender}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.itemCondition && (
        <Styled.InfoItemWrapper>
          <span>Item Condition</span>
          <span>{data?.itemDetailInfo.itemCondition}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.color && (
        <Styled.InfoItemWrapper>
          <span>Colour</span>
          <span>{data?.itemDetailInfo.color}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.material && (
        <Styled.InfoItemWrapper>
          <span>Material/Fabric</span>
          <span>{data?.itemDetailInfo.material}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.sellerType && (
        <Styled.InfoItemWrapper>
          <span>Seller Type</span>
          <span>{data?.itemDetailInfo.sellerType}</span>
        </Styled.InfoItemWrapper>
      )}
      {sizeModal && (
        <SizeModalWrapper onClick={() => setSizeModal(false)}>
          <div>
            {data?.itemCategory === "Ethnic Wear" &&
            data.itemDetailInfo.subcategory === "Shoes" ? (
              <img src={`/assets/images/fashion_size/EthnicShoes.png`} alt="" />
            ) : data?.itemCategory === "Vintage Clothing" &&
              data.itemDetailInfo === "Shoes" ? (
              <img
                src={`/assets/images/fashion_size/VintageShoes.png`}
                alt=""
              />
            ) : data?.itemCategory ===
              "Sustainable and Eco-Friendly Fashion" ? (
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
              <img
                src={`/assets/images/fashion_size/${data?.itemCategory}.png`}
                alt=""
              />
            )}
          </div>
        </SizeModalWrapper>
      )}
    </>
  );
};
