import React from "react";
import * as Styled from "./ads.styles";
import { SERVER_UPLOAD_URI } from "@/config";
import { MdCheck } from "react-icons/md";

export const PetAd: React.FC<{ data: any }> = ({ data }) => {
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
      {data.itemDetailInfo.subcategory && (
        <Styled.InfoItemWrapper>
          <span>Subcategory</span>
          <span>{data?.itemDetailInfo.subcategory}</span>
        </Styled.InfoItemWrapper>
      )}
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

      {data.itemDetailInfo.petType?.length && (
        <Styled.InfoItemWrapper2>
          <span>Pet Type</span>
          <ul>
            {data.itemDetailInfo.petType.map((item: any, key: number) => (
              <li key={key}>
                <MdCheck />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Styled.InfoItemWrapper2>
      )}
      {data.itemDetailInfo.petKind && (
        <Styled.InfoItemWrapper>
          <span>Pet Type</span>
          <span>{data?.itemDetailInfo.petKind}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.breed && (
        <Styled.InfoItemWrapper>
          <span>Breed</span>
          <span>{data?.itemDetailInfo.breed}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.age && (
        <Styled.InfoItemWrapper>
          <span>Age</span>
          <span>{data?.itemDetailInfo.age}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.gender && (
        <Styled.InfoItemWrapper>
          <span>Gender</span>
          <span>{data?.itemDetailInfo.gender}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.vaccinations && (
        <Styled.InfoItemWrapper>
          <span>Vaccinations</span>
          <span>{data?.itemDetailInfo.vaccinations}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.species && (
        <Styled.InfoItemWrapper>
          <span>Species</span>
          <span>{data?.itemDetailInfo.species}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.tankSize && (
        <Styled.InfoItemWrapper>
          <span>Tank Size Requirements</span>
          <span>{data?.itemDetailInfo.tankSize}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.careLevel && (
        <Styled.InfoItemWrapper>
          <span>Care Level</span>
          <span>{data?.itemDetailInfo.careLevel}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.diet && (
        <Styled.InfoItemWrapper>
          <span>Diet</span>
          <span>{data?.itemDetailInfo.diet}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.size && (
        <Styled.InfoItemWrapper>
          <span>Size</span>
          <span>{data?.itemDetailInfo.size}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.type && (
        <Styled.InfoItemWrapper>
          <span>Type</span>
          <span>{data?.itemDetailInfo.type}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.trainingLevel && (
        <Styled.InfoItemWrapper>
          <span>Training Level</span>
          <span>{data?.itemDetailInfo.trainingLevel}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.trainingLevel && (
        <Styled.InfoItemWrapper>
          <span>Training Level</span>
          <span>{data?.itemDetailInfo.trainingLevel}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.healthCertification && (
        <Styled.InfoItemWrapper>
          <span>Health Certification</span>
          <span>{data?.itemDetailInfo.healthCertification}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.hoofCare && (
        <Styled.InfoItemWrapper>
          <span>Hoof Care</span>
          <span>{data?.itemDetailInfo.hoofCare}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.insurance && (
        <Styled.InfoItemWrapper>
          <span>Insurance</span>
          <span>{data?.itemDetailInfo.insurance}</span>
        </Styled.InfoItemWrapper>
      )}
    </>
  );
};
