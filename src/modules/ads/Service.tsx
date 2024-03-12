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
      {data.itemDetailInfo.cancellationPolicy && (
        <Styled.InfoItemWrapper>
          <span>Cancellation Policy</span>
          <span>{data?.itemDetailInfo.cancellationPolicy}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.dateAvailability && (
        <Styled.InfoItemWrapper2>
          <span>Date/Availability</span>
          <ul>
            {data.itemDetailInfo.dateAvailability.monday && (
              <li>
                <MdCheck />
                <span>
                  Monday: {data?.itemDetailInfo.dateAvailability.monday?.from} -{" "}
                  {data?.itemDetailInfo.dateAvailability.monday?.to}
                </span>
              </li>
            )}
            {data.itemDetailInfo.dateAvailability.tuesday && (
              <li>
                <MdCheck />
                <span>
                  Tuesday: {data?.itemDetailInfo.dateAvailability.tuesday?.from}{" "}
                  - {data?.itemDetailInfo.dateAvailability.tuesday?.to}
                </span>
              </li>
            )}
            {data.itemDetailInfo.dateAvailability.wednesday && (
              <li>
                <MdCheck />
                <span>
                  Wednesday:{" "}
                  {data?.itemDetailInfo.dateAvailability.wednesday?.from} -{" "}
                </span>
                {data?.itemDetailInfo.dateAvailability.wednesday?.to}
              </li>
            )}
            {data.itemDetailInfo.dateAvailability.thirsday && (
              <li>
                <MdCheck />
                <span>
                  Thirsday:{" "}
                  {data?.itemDetailInfo.dateAvailability.thirsday?.from} -{" "}
                </span>
                {data?.itemDetailInfo.dateAvailability.thirsday?.to}
              </li>
            )}
            {data.itemDetailInfo.dateAvailability.friday && (
              <li>
                <MdCheck />
                <span>
                  Friday: {data?.itemDetailInfo.dateAvailability.friday?.from} -{" "}
                  {data?.itemDetailInfo.dateAvailability.friday?.to}
                </span>
              </li>
            )}
            {data.itemDetailInfo.dateAvailability.saturday && (
              <li>
                <MdCheck />
                <span>
                  Saturday:{" "}
                  {data?.itemDetailInfo.dateAvailability.saturday?.from} -{" "}
                </span>
                {data?.itemDetailInfo.dateAvailability.saturday?.to}
              </li>
            )}
            {data.itemDetailInfo.dateAvailability.sunday && (
              <li>
                <MdCheck />
                <span>
                  Sunday: {data?.itemDetailInfo.dateAvailability.sunday?.from} -{" "}
                  {data?.itemDetailInfo.dateAvailability.sunday?.to}
                </span>
              </li>
            )}
          </ul>
        </Styled.InfoItemWrapper2>
      )}
    </>
  );
};
