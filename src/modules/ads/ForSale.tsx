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
      {data.itemDetailInfo.brand && (
        <Styled.InfoItemWrapper>
          <span>Brand</span>
          <span>{data?.itemDetailInfo.brand}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.colour && (
        <Styled.InfoItemWrapper>
          <span>Colour</span>
          <span>{data?.itemDetailInfo.colour}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.itemCondition && (
        <Styled.InfoItemWrapper>
          <span>Item Condition</span>
          <span>{data?.itemDetailInfo.itemCondition}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.type && (
        <Styled.InfoItemWrapper>
          <span>Item Type</span>
          <span>{data?.itemDetailInfo.type}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.resolution && (
        <Styled.InfoItemWrapper>
          <span>Resolution</span>
          <span>{data?.itemDetailInfo.resolution}</span>
        </Styled.InfoItemWrapper>
      )}{" "}
      {data.itemDetailInfo.screenSize && (
        <Styled.InfoItemWrapper>
          <span>Screen Size</span>
          <span>{data?.itemDetailInfo.screenSize}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.smartTV && (
        <Styled.InfoItemWrapper>
          <span>Smart TV</span>
          <span>{data?.itemDetailInfo.smartTV}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.warrantyInformation && (
        <Styled.InfoItemWrapper>
          <span>Warranty Information</span>
          <span>{data?.itemDetailInfo.warrantyInformation}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.batteryLife && (
        <Styled.InfoItemWrapper>
          <span>Battery Life</span>
          <span>{data?.itemDetailInfo.batteryLife}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.operatingSystem && (
        <Styled.InfoItemWrapper>
          <span>Operating System</span>
          <span>{data?.itemDetailInfo.operatingSystem}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.processor && (
        <Styled.InfoItemWrapper>
          <span>Processor</span>
          <span>{data?.itemDetailInfo.processor}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.ramSize && (
        <Styled.InfoItemWrapper>
          <span>ram Size</span>
          <span>{data?.itemDetailInfo.ramSize}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.screenSize && (
        <Styled.InfoItemWrapper>
          <span>Screen Size</span>
          <span>{data?.itemDetailInfo.screenSize}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.storageCapacity && (
        <Styled.InfoItemWrapper>
          <span>Storage Capacity</span>
          <span>{data?.itemDetailInfo.storageCapacity}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.storage && (
        <Styled.InfoItemWrapper>
          <span>Storage</span>
          <span>{data?.itemDetailInfo.storage}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.memory && (
        <Styled.InfoItemWrapper>
          <span>Memory</span>
          <span>{data?.itemDetailInfo.memory}</span>
        </Styled.InfoItemWrapper>
      )}
      {data.itemDetailInfo.features.length && (
        <Styled.InfoItemWrapper2>
          <span>Features</span>
          <ul>
            {data.itemDetailInfo.features.map((item: any, key: number) => (
              <li key={key}>
                <MdCheck />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Styled.InfoItemWrapper2>
      )}
    </>
  );
};
