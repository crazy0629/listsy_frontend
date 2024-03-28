import React, { useEffect, useRef, useState } from "react";
import * as Styled from "./card.styles";
import { SERVER_UPLOAD_URI } from "@/config";
import Image from "next/image";
import { Rating } from "react-simple-star-rating";
import { MdLocationOn } from "react-icons/md";
import { BsClock } from "react-icons/bs";
import { ConfirmModal, VideoPlayIcon } from "..";
import { calcCompareTime, getTimestamp } from "@/utils";
import { useRouter } from "next/router";
import { NavItem } from "@/modules/profile/profile.styles";
import { categories } from "@/modules/upload/data";
import { useAutoplayVideo } from "@/hooks/useAutoplayVideo";

type Props = {
  link: string;
  userAvatar: string;
  title: string;
  subtitle: string;
  viewCount: number;
  reviewMark: number;
  reviewCount: number;
  price: number;
  firstName: string;
  isBoost?: boolean;
  lastName: string;
  priceUnit: string;
  postDate: string;
  adStatus?: string;
  id: string;
  duration: number;
  address: string;
  type: string;
  subCategory?: string;
};

export const CardItem: React.FC<Props> = ({
  link,
  id,
  type,
  postDate,
  price,
  priceUnit,
  reviewCount,
  reviewMark,
  subtitle,
  duration = 0,
  isBoost,
  title,
  firstName,
  address,
  lastName,
  userAvatar,
  adStatus,
  viewCount,
  subCategory,
}) => {
  const router = useRouter();
  const videoRef = useRef<any>(null);
  const [category, setCategory] = useState("");
  const [boostFlag, setBoostFlag] = useState(false);

  const [isIntersecting, setIsIntersecting] = useState(false);

  useAutoplayVideo(videoRef);

  useEffect(() => {
    setCategory(
      categories
        .filter((f) => f.key === type)[0]
        .label.replaceAll(" ", "-")
        .toLowerCase()
    );
  }, [type]);

  const handleBoost = () => {
    setBoostFlag(true);
  };

  return (
    <Styled.CardItemWrapper>
      <ConfirmModal
        open={boostFlag}
        onCancel={() => setBoostFlag(false)}
        onOk={() => setBoostFlag(false)}
        title="Coming Soon"
        description={
          <div style={{ maxWidth: "230px", margin: "auto", fontSize: "16px" }}>
            <p>{"[✓] Top Visibility"}</p>
            <p>{"[✓] Priority Ranking"}</p>
            <p>{"[✓] Homepage Feature"}</p>
            <p>{"[✓] Category Highlight"}</p>
            <p>{"[✓] Performance Analytics"}</p>
          </div>
        }
        type="success"
        isConfirm={false}
      />
      <Styled.VideoWrapper
        onMouseEnter={() => videoRef.current.play()}
        onMouseLeave={() => {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }}
        onClick={() =>
          router.push(`/for-sale/${category}/${subCategory}/video-ads/${id}`)
        }
      >
        <video ref={videoRef} src={`${SERVER_UPLOAD_URI + link}`} muted></video>
        <VideoPlayIcon />
        <span>{getTimestamp(Number(duration))}</span>
      </Styled.VideoWrapper>
      <Styled.VideoInfoWrapper>
        {userAvatar ? (
          <Image
            src={`${SERVER_UPLOAD_URI + userAvatar}`}
            alt="avatar"
            width={36}
            height={36}
          />
        ) : (
          <Styled.UserAvatar>{firstName[0] + lastName[0]}</Styled.UserAvatar>
        )}

        <div>
          <h1>
            <b>{title}</b>
            {adStatus && <span className={adStatus} />}
          </h1>
          <div className="">
            <h2>{subtitle}</h2>
            <span>
              {viewCount > 999 ? viewCount / 1000 + "K" : viewCount} views
            </span>
          </div>
          <div className="reviews">
            <div>
              <Rating
                initialValue={reviewMark}
                size={12}
                disableFillHover
                allowHover={false}
                readonly
                onClick={() => {}}
              />
              <p>{reviewMark}</p>
              <span>{`(${reviewCount} Reviews)`}</span>
            </div>
            <h3>{price === 0 ? "Free" : priceUnit + " " + price.toFixed(2)}</h3>
          </div>
          <div className="location">
            <p>
              <MdLocationOn size={12} />
              <span>{address}</span>
            </p>
            <p>
              <BsClock size={12} />
              <span>{calcCompareTime(new Date().toString(), postDate)}</span>
            </p>
          </div>
        </div>
      </Styled.VideoInfoWrapper>
      {isBoost && (
        <div className="button">
          <button onClick={handleBoost}>Boost</button>
        </div>
      )}
    </Styled.CardItemWrapper>
  );
};
