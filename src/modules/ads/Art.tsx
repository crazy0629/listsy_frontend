import React from "react";
import * as Styled from "./ads.styles";
import { SERVER_UPLOAD_URI } from "@/config";

export const Art: React.FC<{ data: any }> = ({ data }) => {
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
        <span>Type</span>
        <span>{data?.itemCategory}</span>
      </Styled.InfoItemWrapper>
      {data.itemDetailInfo.itemSubCategory && (
        <Styled.InfoItemWrapper>
          <span>Subcategory</span>
          <span>{data?.itemDetailInfo.itemSubCategory}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.itemCondition && (
        <Styled.InfoItemWrapper>
          <span>Condition</span>
          <span>{data?.itemDetailInfo.itemCondition}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.authenticity && (
        <Styled.InfoItemWrapper>
          <span>Authenticity</span>
          <span>{data?.itemDetailInfo.authenticity}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.artist && (
        <Styled.InfoItemWrapper>
          <span>Artist/Manufacturer</span>
          <span>{data?.itemDetailInfo.artist}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.age && (
        <Styled.InfoItemWrapper>
          <span>Age/Era</span>
          <span>{data?.itemDetailInfo.age}</span>
        </Styled.InfoItemWrapper>
      )}
    </>
  );
};
