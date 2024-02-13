import React from "react";
import * as Styled from "./ads.styles";
import { SERVER_UPLOAD_URI } from "@/config";

export const Beauty: React.FC<{ data: any }> = ({ data }) => {
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
        <span>Product Type</span>
        <span>{data?.itemCategory}</span>
      </Styled.InfoItemWrapper>
      {data.itemDetailInfo.brand && (
        <Styled.InfoItemWrapper>
          <span>Brand</span>
          <span>{data?.itemDetailInfo.brand}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.itemCondition && (
        <Styled.InfoItemWrapper>
          <span>Item Condition</span>
          <span>{data?.itemDetailInfo.itemCondition}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.gender && (
        <Styled.InfoItemWrapper>
          <span>Gender</span>
          <span>{data?.itemDetailInfo.gender}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.skinHairType && (
        <Styled.InfoItemWrapper>
          <span>Skin/Hair Type</span>
          <span>{data?.itemDetailInfo.skinHairType}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.ingredients && (
        <Styled.InfoItemWrapper>
          <span>Ingredients</span>
          <span>{data?.itemDetailInfo.ingredients}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.sizeVolume && (
        <Styled.InfoItemWrapper>
          <span>Size/Volume</span>
          <span>{data?.itemDetailInfo.sizeVolume}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.certifications && (
        <Styled.InfoItemWrapper>
          <span>Certifications</span>
          <span>{data?.itemDetailInfo.certifications}</span>
        </Styled.InfoItemWrapper>
      )}
    </>
  );
};
