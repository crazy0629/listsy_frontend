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
      <Styled.InfoItemWrapper>
        <span>Built Surface</span>
        <span>{data?.itemDetailInfo?.built}</span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper>
        <span>Plot Surface</span>
        <span>{data?.itemDetailInfo?.plot}</span>
      </Styled.InfoItemWrapper>
      {data.itemDetailInfo.tenure && (
        <Styled.InfoItemWrapper>
          <span>Tenure</span>
          <span>{data?.itemDetailInfo?.tenure}</span>
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
      {data.itemDetailInfo.energy && (
        <Styled.InfoItemWrapper>
          <span>Energy Efficiency Rating</span>
          <span>{data?.itemDetailInfo?.energy}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.nearest && (
        <Styled.InfoItemWrapper>
          <span>Nearest Top Attractions</span>
          <span>{data?.itemDetailInfo?.nearest}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.facilities && (
        <Styled.InfoItemWrapper>
          <span>Facilities</span>
          <span>{data?.itemDetailInfo?.facilities}</span>
        </Styled.InfoItemWrapper>
      )}
    </>
  );
};
