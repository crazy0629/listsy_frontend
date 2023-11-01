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
        <span>Item Condition</span>
        <span>{data?.itemCondition}</span>
      </Styled.InfoItemWrapper>
      {data?.brandName && (
        <Styled.InfoItemWrapper>
          <span>Brand Name</span>
          <span>{data?.brandName}</span>
        </Styled.InfoItemWrapper>
      )}
      {data?.manufacturer && (
        <Styled.InfoItemWrapper>
          <span>Manufacturer</span>
          <span>{data?.manufacturer}</span>
        </Styled.InfoItemWrapper>
      )}
      {data?.color && (
        <Styled.InfoItemWrapper>
          <span>Colour/Color</span>
          <span>{data?.color}</span>
        </Styled.InfoItemWrapper>
      )}
      {data?.dimensionW && data?.dimensionH && (
        <Styled.InfoItemWrapper>
          <span>Item Dimensions W * H</span>
          <span>
            {data?.dimensionW +
              " * " +
              data?.dimensionH +
              " " +
              data?.dimensionUnit}
          </span>
        </Styled.InfoItemWrapper>
      )}

      {data?.itemWeight && (
        <Styled.InfoItemWrapper>
          <span>Year Built</span>
          <span>{data?.itemWeight + data?.itemUnit}</span>
        </Styled.InfoItemWrapper>
      )}
    </>
  );
};
