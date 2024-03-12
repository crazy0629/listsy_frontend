import React from "react";
import * as Styled from "./ads.styles";
import { SERVER_UPLOAD_URI } from "@/config";
import { MdCheck } from "react-icons/md";

export const Service: React.FC<{ data: any }> = ({ data }) => {
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
      {data.itemDetailInfo.providerType && (
        <Styled.InfoItemWrapper>
          <span>Provider Type</span>
          <span>{data?.itemDetailInfo.providerType}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.licenses?.length && (
        <Styled.InfoItemWrapper2>
          <span>Licenses/Certifications</span>
          <ul>
            {data.itemDetailInfo.licenses.map((item: any, key: number) => (
              <li key={key}>
                <MdCheck />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Styled.InfoItemWrapper2>
      )}
      {data.itemDetailInfo.cancellationPolocy && (
        <Styled.InfoItemWrapper>
          <span>Cancellation Polocy</span>
          <span>{data?.itemDetailInfo.cancellationPolocy}</span>
        </Styled.InfoItemWrapper>
      )}
    </>
  );
};
