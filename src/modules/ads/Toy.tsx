import React from "react";
import * as Styled from "./ads.styles";
import { SERVER_UPLOAD_URI } from "@/config";
import { MdCheck } from "react-icons/md";

export const Toy: React.FC<{ data: any }> = ({ data }) => {
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
      {data.itemDetailInfo.ageGroup?.length && (
        <Styled.InfoItemWrapper2>
          <span>Age Group</span>
          <ul>
            {data.itemDetailInfo.ageGroup.map((item: any, key: number) => (
              <li key={key}>
                <MdCheck />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Styled.InfoItemWrapper2>
      )}
      {data.itemDetailInfo.brand && (
        <Styled.InfoItemWrapper>
          <span>Brand</span>
          <span>{data?.itemDetailInfo.brand}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.gender && (
        <Styled.InfoItemWrapper>
          <span>Gender Preference</span>
          <span>{data?.itemDetailInfo.gender}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.education && (
        <Styled.InfoItemWrapper>
          <span>Educational Value</span>
          <span>{data?.itemDetailInfo.education}</span>
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
