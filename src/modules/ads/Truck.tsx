import React from "react";
import * as Styled from "./ads.styles";
import { SERVER_UPLOAD_URI } from "@/config";
import { MdCheck } from "react-icons/md";

export const Truck: React.FC<{ data: any }> = ({ data }) => {
  return (
    <>
      <Styled.InfoItemWrapper2>
        <span>Ads Link</span>
        <p>{SERVER_UPLOAD_URI + data?.adId?.adFileName}</p>
      </Styled.InfoItemWrapper2>
      <Styled.InfoItemWrapper>
        <span>Vehicle Type</span>
        <span>{data?.vehicleType}</span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper>
        <span>Sale Type</span>
        <span>{data?.saleType}</span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper>
        <span>Condition</span>
        <span>{data?.condition}</span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper>
        <span>Make</span>
        <span>{data?.vehicleMake}</span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper>
        <span>Model</span>
        <span>{data?.vehicleModel}</span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper>
        <span>Year</span>
        <span>{data?.year}</span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper>
        <span>Mileage</span>
        <span>{data?.mileage + data?.mileageUnit}</span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper>
        <span>Gearbox</span>
        <span>{data?.gearBox}</span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper>
        <span>Fuel Type</span>
        <span>{data?.fuelType}</span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper>
        <span>Doors</span>
        <span>{data?.doors}</span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper>
        <span>Color/Colour</span>
        <span>{data?.color}</span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper>
        <span>Body Type</span>
        <span>{data?.bodyType}</span>
      </Styled.InfoItemWrapper>
      <Styled.InfoItemWrapper>
        <span>Seats</span>
        <span>{data?.seat}</span>
      </Styled.InfoItemWrapper>
    </>
  );
};
