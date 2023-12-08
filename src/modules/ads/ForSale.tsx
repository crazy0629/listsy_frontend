import React from "react";
import * as Styled from "./ads.styles";
import { SERVER_UPLOAD_URI } from "@/config";
import { MdCheck } from "react-icons/md";

export const ForSale: React.FC<{ data: any }> = ({ data }) => {
  return (
    <>
      <Styled.InfoItemWrapper2>
        <span>Ads Link</span>
        <p>{SERVER_UPLOAD_URI + data?.adId?.adFileName}</p>
      </Styled.InfoItemWrapper2>
      <Styled.InfoItemWrapper>
        <span>Item Category</span>
        <span>{data?.itemCategory}</span>
      </Styled.InfoItemWrapper>
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
      {data.itemDetailInfo.brand && (
        <Styled.InfoItemWrapper>
          <span>Brand</span>
          <span>{data?.itemDetailInfo.brand}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.colour && (
        <Styled.InfoItemWrapper>
          <span>Colour</span>
          <span>{data?.itemDetailInfo.colour}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.itemCondition && (
        <Styled.InfoItemWrapper>
          <span>Item Condition</span>
          <span>{data?.itemDetailInfo.itemCondition}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.resolution && (
        <Styled.InfoItemWrapper>
          <span>Resolution</span>
          <span>{data?.itemDetailInfo.resolution}</span>
        </Styled.InfoItemWrapper>
      )}{" "}
      {data.itemDetailInfo.screenSize && (
        <Styled.InfoItemWrapper>
          <span>Screen Size</span>
          <span>{data?.itemDetailInfo.screenSize}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.smartTV && (
        <Styled.InfoItemWrapper>
          <span>Smart TV</span>
          <span>{data?.itemDetailInfo.smartTV}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.warrantyInformation && (
        <Styled.InfoItemWrapper>
          <span>Warranty Information</span>
          <span>{data?.itemDetailInfo.warrantyInformation}</span>
        </Styled.InfoItemWrapper>
      )}
    </>
  );
};
