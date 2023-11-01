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
        <span>Listing Type</span>
        <span>{data?.listingType}</span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper>
        <span>Property Type</span>
        <span>{data?.listingType}</span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper>
        <span>Bedrooms</span>
        <span>{data?.bedroomCount}</span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper>
        <span>Bathrooms</span>
        <span>{data?.bathroomCount}</span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper>
        <span>Tenure</span>
        <span>{data?.tenure}</span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper>
        <span>Property Condition</span>
        <span>{data?.propertyCondition}</span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper>
        <span>Post Code / Zip Code</span>
        <span>{data?.postCode}</span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper>
        <span>Year Built</span>
        <span>{data?.yearBuilt}</span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper>
        <span>Built Surface</span>
        <span>{data?.builtSurface}</span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper>
        <span>Plot Surface</span>
        <span>{data?.plotSurface}</span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper2>
        <span>Key Features</span>
        <ul>
          {data?.keyFeatures?.map((item: any, key: number) => (
            <li key={key}>
              <MdCheck />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Styled.InfoItemWrapper2>
      <Styled.InfoItemWrapper2>
        <span>Nearest Top Attractions</span>
        <ul>
          {data?.nearestAttraction?.map((item: any, key: number) => (
            <li key={key}>
              <MdCheck />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Styled.InfoItemWrapper2>
      <Styled.InfoItemWrapper2>
        <span>Facilities</span>
        <ul>
          {data?.facilities?.map((item: any, key: number) => (
            <li key={key}>
              <MdCheck />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Styled.InfoItemWrapper2>
    </>
  );
};
