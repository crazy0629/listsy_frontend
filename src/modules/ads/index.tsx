import React, { useContext, useEffect, useState } from "react";
import * as Styled from "./ads.styles";
import { SERVER_UPLOAD_URI, SERVER_URI } from "@/config";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-toastify";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { MdOutlineShare, MdPhone } from "react-icons/md";
import { Rating } from "react-simple-star-rating";
import { BsBookmark, BsClock, BsFlag } from "react-icons/bs";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { Truck } from "./Truck";
import { Food } from "./Food";
import { ImageModal } from "./ImageModal";
import { ForSale } from "./ForSale";
import { Auth as AuthContext } from "@/context/contexts";
import { Tooltip as ReactTooltip } from "react-tooltip";
import CopyToClipboard from "react-copy-to-clipboard";
import { PetAd } from "./PetAd";
import { Diy } from "./Diy";
import { Garden } from "./Garden";
import { Beauty } from "./Beauty";
import { Toy } from "./Toy";
import { Music } from "./Music";
import { Sports } from "./Sports";
import { Furniture } from "./Furniture";
import { categories } from "../upload/data";
import { Art } from "./Art";
import { Service } from "./Service";

export const AdsDetailsSection: React.FC = () => {
  const router = useRouter();
  const { id, category } = router.query;
  const [data, setData] = useState<any>(null);
  const [emojiCount, setEmojiCount] = useState<any>(null);
  const [reviews, setReviews] = useState<any>(null);
  const [imageModal, setImageModal] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const { authContext } = useContext<any>(AuthContext);
  const [showReview, setShowReview] = useState(false);
  const [type, setType] = useState("");
  const [emojiVisible, setEmojiVisible] = useState(false);

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  const getData = async () => {
    const tempTypeStr = categories.filter(
      (f) =>
        f.label.replaceAll(" ", "-").toLowerCase() === router.query.category
    )[0].key;
    setType(tempTypeStr);
    const res = await axios.post(
      `${SERVER_URI}/${tempTypeStr}/getAdDetailInfo`,
      {
        adId: id,
      }
    );
    if (res.data.success) {
      setData(res.data.data);
      setEmojiCount(res.data.count);
    } else {
      toast.error(res.data.error);
      // router.back();
    }
  };

  const handleSlideClick = (index: number) => {
    setImageIndex(index);
    setImageModal(true);
  };

  const sendMessageClicked = () => {
    if (authContext?.user?.id) {
      const receiverId = data.userId._id;
      if (authContext.user.id == receiverId) {
        toast.error(
          "Cannot send messages to yourself. Please select a different recipient."
        );
        return;
      }
      router.push(`/message/${receiverId}/${id}`);
    } else {
      toast.error("Log in to continue!");
      localStorage.setItem("redirect", router.asPath);
      router.push("/auth/login");
    }
  };

  const handleShowReview = async () => {
    if (showReview) {
      setShowReview(false);
    } else {
      const res = await axios.post(`${SERVER_URI}/review/getAllReviews`, {
        toUserId: data.userId._id,
      });

      if (res.data.success) {
        setShowReview(true);
        setReviews(res.data.data);
      }
    }
  };

  const bookmarkClicked = () => {
    if (!authContext?.user?.id) {
      toast.error("Log in to continue!");
      localStorage.setItem("redirect", router.asPath);
      router.push("/auth/login");
    }
  };

  const handleEmojiClicked = async (emoji: string) => {
    if (!authContext?.user?.id) {
      toast.error("Log in to continue!");
      localStorage.setItem("redirect", router.asPath);
      router.push("/auth/login");
    } else {
      const res = await axios.post(`${SERVER_URI}/userEmot/clickEmotIcon`, {
        userId: authContext?.user?.id,
        postId: id,
        emotion: emoji,
      });
      if (res.data.success) {
        setEmojiCount(res.data.count);
      } else {
        toast.error(res.data.error);
        // router.back();
      }
    }
  };

  return (
    <Styled.AdsDetailsSectionWrapper>
      {data?.adId?.imagesFileName && (
        <ImageModal
          data={data?.adId?.imagesFileName}
          index={imageIndex}
          onClose={() => setImageModal(false)}
          open={imageModal}
        />
      )}
      {data ? (
        <Styled.AdsDetailsContainer>
          <Styled.AdsDetailsVideoInfoWrapper>
            <Styled.VideoWrapper
              onMouseEnter={() => setEmojiVisible(true)}
              onMouseLeave={() => setEmojiVisible(false)}
            >
              <video
                src={`${SERVER_UPLOAD_URI + data.adId?.adFileName}`}
                controls
              ></video>
              <Styled.EmojiWrapper visible={emojiVisible ? "true" : undefined}>
                <div onClick={() => handleEmojiClicked("heartsEyes")}>
                  <Image
                    src={"/assets/images/emoji/heartsEyes.png"}
                    alt="emoji"
                    width={20}
                    height={20}
                  />
                  <span>{emojiCount?.heartsEyes}</span>
                </div>
                <div onClick={() => handleEmojiClicked("monocle")}>
                  <Image
                    src={"/assets/images/emoji/monocle.png"}
                    alt="emoji"
                    width={20}
                    height={20}
                  />
                  <span>{emojiCount?.monocle}</span>
                </div>
                <div onClick={() => handleEmojiClicked("flame")}>
                  <Image
                    src={"/assets/images/emoji/flame.png"}
                    alt="emoji"
                    width={20}
                    height={20}
                  />
                  <span>{emojiCount?.flame}</span>
                </div>
                <div onClick={() => handleEmojiClicked("redHeart")}>
                  <Image
                    src={"/assets/images/emoji/redHeart.png"}
                    alt="emoji"
                    width={20}
                    height={20}
                  />
                  <span>{emojiCount?.redHeart}</span>
                </div>
                <div onClick={() => handleEmojiClicked("thumbsUp")}>
                  <Image
                    src={"/assets/images/emoji/thumbsUp.png"}
                    alt="emoji"
                    width={20}
                    height={20}
                  />
                  <span>{emojiCount?.thumbsUp}</span>
                </div>
              </Styled.EmojiWrapper>
            </Styled.VideoWrapper>
            <Styled.VideoInfoWrapper>
              <h1>
                <span>{data?.title}</span>
                <p>
                  <BsClock size={20} />{" "}
                  <span>{new Date(data?.adId?.uploadDate).toDateString()}</span>
                </p>
              </h1>
              <Styled.UserInfoWrapper>
                <div className="user-info">
                  {data?.userId?.avatar ? (
                    <Image
                      src={`${SERVER_UPLOAD_URI + data?.userId?.avatar}`}
                      alt="avatar"
                      width={60}
                      height={60}
                    />
                  ) : (
                    <Styled.UserAvatar>
                      {data?.userId?.firstName[0] + data?.userId?.lastName[0]}
                    </Styled.UserAvatar>
                  )}
                  <div>
                    <h5>
                      <span>
                        {data?.userId?.firstName + " " + data?.userId?.lastName}
                      </span>

                      {data?.userId?.telephoneNumber && (
                        <CopyToClipboard
                          text={
                            data?.userId?.phoneNumberShare
                              ? data?.userId?.telephoneNumber
                              : ""
                          }
                        >
                          <div>
                            <ReactTooltip id="my-tooltip" />
                            <MdPhone
                              size={20}
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content={
                                data?.userId?.phoneNumberShare
                                  ? data?.userId?.telephoneNumber
                                  : "Phone number is private"
                              }
                              data-tooltip-place="top"
                            />
                          </div>
                        </CopyToClipboard>
                      )}
                    </h5>
                    <div className="review">
                      <Rating
                        initialValue={data?.userId?.reviewMark}
                        size={12}
                        disableFillHover
                        allowHover={false}
                        readonly
                        onClick={() => {}}
                      />
                      <p>{Number(data?.userId?.reviewMark).toFixed(1)}</p>
                      <span>{`(${data?.userId?.reviewCount} Reviews)`}</span>
                    </div>
                  </div>
                </div>
                <div className="user-action">
                  <IoChatbubbleEllipsesOutline
                    size={24}
                    onClick={() => sendMessageClicked()}
                  />
                  <BsBookmark size={24} onClick={bookmarkClicked} />
                </div>
              </Styled.UserInfoWrapper>
              <p>{data?.description}</p>
              <div className="action">
                <button>
                  <MdOutlineShare size={20} />
                  <span>Share</span>
                </button>
                <button>
                  <BsFlag />
                  <span>Report</span>
                </button>
              </div>
              {/* {!showReview && ( */}
              <span onClick={handleShowReview}>
                {showReview ? "Hide" : "Show"} Reviews
              </span>
              {/* )} */}
              {showReview && (
                <Styled.ReviewsWrapper>
                  <Styled.ReviewItemWrapper>
                    {reviews.map((item: any, key: number) => (
                      <div className="user-info" key={key}>
                        {item?.fromUserId?.avatar ? (
                          <Image
                            src={`${
                              SERVER_UPLOAD_URI + item?.fromUserId?.avatar
                            }`}
                            alt="avatar"
                            width={40}
                            height={40}
                          />
                        ) : (
                          <Styled.UserAvatar className="review-avatar">
                            {item?.fromUserId?.firstName[0] +
                              item?.fromUserId?.lastName[0]}
                          </Styled.UserAvatar>
                        )}
                        <div className="review-name">
                          <h5>
                            <span>
                              {item?.fromUserId?.firstName +
                                " " +
                                item?.fromUserId?.lastName}
                            </span>
                          </h5>
                          <p>{new Date(item?.createdAt).toDateString()}</p>
                        </div>
                        <div className="review">
                          <Rating
                            initialValue={item?.reviewMark}
                            size={12}
                            disableFillHover
                            allowHover={false}
                            readonly
                            onClick={() => {}}
                          />
                          <p>{Number(item?.reviewMark).toFixed(1)}</p>
                        </div>
                        <p className="review-description">
                          {item?.reviewContent}
                        </p>
                      </div>
                    ))}
                  </Styled.ReviewItemWrapper>
                </Styled.ReviewsWrapper>
              )}
            </Styled.VideoInfoWrapper>
          </Styled.AdsDetailsVideoInfoWrapper>
          <Styled.AdsDetailsThumbWrapper>
            <Swiper
              spaceBetween={20}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {data.adId?.imagesFileName?.map((item: any, key: number) => (
                <SwiperSlide key={key} onClick={() => handleSlideClick(key)}>
                  <Image
                    src={`${SERVER_UPLOAD_URI + item}`}
                    alt={"thumbnails" + key}
                    width={460}
                    height={300}
                  />
                  <span>
                    {key + 1} / {data.adId?.imagesFileName.length}
                  </span>
                </SwiperSlide>
              ))}
            </Swiper>
            <Styled.AdsDetailsInfoWrapper>
              {type === "sale" && <ForSale data={data} />}
              {type === "pet" && <PetAd data={data} />}
              {type === "truck" && <Truck data={data} />}
              {type === "food" && <Food data={data} />}
              {type === "diy" && <Diy data={data} />}
              {type === "garden" && <Garden data={data} />}
              {type === "beauty" && <Beauty data={data} />}
              {type === "toys" && <Toy data={data} />}
              {type === "music" && <Music data={data} />}
              {type === "sports" && <Sports data={data} />}
              {type === "furniture" && <Furniture data={data} />}
              {type === "art" && <Art data={data} />}
              {type === "services" && <Service data={data} />}
            </Styled.AdsDetailsInfoWrapper>
          </Styled.AdsDetailsThumbWrapper>
        </Styled.AdsDetailsContainer>
      ) : (
        <Styled.AdsDetailsContainer>Loading...</Styled.AdsDetailsContainer>
      )}
    </Styled.AdsDetailsSectionWrapper>
  );
};
