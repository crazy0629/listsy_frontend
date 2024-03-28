import React from "react";
import * as Styled from "./ads.styles";
import { SERVER_UPLOAD_URI } from "@/config";
import { MdCheck } from "react-icons/md";

export const Estate: React.FC<{ data: any }> = ({ data }) => {
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
      <Styled.InfoItemWrapper>
        <span>Property Type</span>
        <span>{data?.itemDetailInfo?.type}</span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper>
        <span>Bedrooms</span>
        <span>{data?.itemDetailInfo?.bedrooms}</span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper>
        <span>Bathrooms</span>
        <span>{data?.itemDetailInfo?.bathrooms}</span>
      </Styled.InfoItemWrapper>
      {data?.itemDetailInfo?.propertySize && (
        <Styled.InfoItemWrapper>
          <span>Property Size</span>
          <span>{data?.itemDetailInfo?.propertySize}</span>
        </Styled.InfoItemWrapper>
      )}
      {data?.itemDetailInfo?.lotSize && (
        <Styled.InfoItemWrapper>
          <span>Lot Size</span>
          <span>{data?.itemDetailInfo?.lotSize}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.ownership && (
        <Styled.InfoItemWrapper>
          <span>Ownership</span>
          <span>{data?.itemDetailInfo?.ownership}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.condition && (
        <Styled.InfoItemWrapper>
          <span>Property Condition</span>
          <span>{data?.itemDetailInfo?.condition}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.year && (
        <Styled.InfoItemWrapper>
          <span>Year Built</span>
          <span>{data?.itemDetailInfo?.year}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.lease && (
        <Styled.InfoItemWrapper>
          <span>Lease Term</span>
          <span>{data?.itemDetailInfo?.lease}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.parking && (
        <Styled.InfoItemWrapper>
          <span>Parking</span>
          <span>{data?.itemDetailInfo?.parking}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.amenities && (
        <Styled.InfoItemWrapper>
          <span>Amenities</span>
          <span>{data?.itemDetailInfo?.amenities}</span>
        </Styled.InfoItemWrapper>
      )}
    </>
  );
};
