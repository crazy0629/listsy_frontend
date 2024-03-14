import React from "react";
import * as Styled from "./ads.styles";
import { SERVER_UPLOAD_URI } from "@/config";

export const Fashion: React.FC<{ data: any }> = ({ data }) => {
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
    </>
  );
};
