import React from "react";
import * as Styled from "./ads.styles";
import { SERVER_UPLOAD_URI } from "@/config";

export const Food: React.FC<{ data: any }> = ({ data }) => {
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
        <span>Cuisine Type</span>
        <span>{data?.itemCategory}</span>
      </Styled.InfoItemWrapper>
      {data.itemDetailInfo.mealType && (
        <Styled.InfoItemWrapper>
          <span>Meal Type</span>
          <span>{data?.itemDetailInfo.mealType}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.dietaryPreferences && (
        <Styled.InfoItemWrapper>
          <span>Dietary Preferences</span>
          <span>{data?.itemDetailInfo.dietaryPreferences}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.deliveryOptions && (
        <Styled.InfoItemWrapper>
          <span>Delivery Options</span>
          <span>{data?.itemDetailInfo.deliveryOptions}</span>
        </Styled.InfoItemWrapper>
      )}
    </>
  );
};
