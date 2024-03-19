import styled from "styled-components";

export const AdsDetailsSectionWrapper = styled.div`
  border-top: 1px solid #eaeaea;
  padding: 40px 0;
  height: 100%;
  overflow: auto;
  @media screen and (max-width: 768px) {
    padding-top: 0;
  }
`;

export const AdsDetailsContainer = styled.div`
  width: 95%;
  display: flex;
  margin: auto;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const AdsDetailsVideoInfoWrapper = styled.div`
  flex: 1;
  width: 100%;
`;

export const AdsDetailsThumbWrapper = styled.div`
  max-width: 460px;
  width: 100%;
  margin-left: 86px;
  .mySwiper {
    .swiper-slide {
      position: relative;
      cursor: pointer;
      span {
        position: absolute;
        display: flex;
        width: 50px;
        height: 30px;
        background: #000;
        color: #fff;
        bottom: 12px;
        right: 10px;
        font-size: 14px;
        font-weight: 500;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
      }
      img {
        object-fit: cover;
        object-position: center;
      }
    }
    .swiper-button-prev,
    .swiper-button-next {
      &::after {
        font-size: 30px !important;
        color: #000000;
        font-weight: 900;
      }
    }
  }
  @media screen and (max-width: 1440px) {
    max-width: 400px;
    .mySwiper {
      .swiper-slide {
        img {
          width: 400px;
          height: 280px;
        }
      }
    }
  }
  @media screen and (max-width: 1280px) {
    max-width: 300px;
    .mySwiper {
      .swiper-slide {
        img {
          width: 300px;
          height: 220px;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    max-width: 100%;
    margin-left: 0;
    margin-top: 50px;
    padding-top: 50px;
    border-top: 1px solid #00000030;
    .mySwiper {
      width: 300px;
      margin-left: 0;
    }
  }
  @media screen and (max-width: 768px) {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 60%;
  video {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

export const VideoInfoWrapper = styled.div`
  margin-top: 20px;
  h1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000;
    font-size: 24px;
    font-weight: 700;
    p {
      color: #000;
      font-size: 16px;
      font-weight: 300;
      display: flex;
      align-items: center;
      white-space: nowrap;
      span {
        margin-left: 12px;
      }
    }
  }
  & > p {
    color: #000;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
    margin-top: 16px;
    margin-bottom: 24px;
  }
  & > span {
    text-decoration: underline;
    cursor: pointer;
    color: #000;
    font-size: 14px;
    font-weight: 400;
  }
  .action {
    display: flex;
    justify-content: flex-end;

    button,
    a {
      text-decoration: none;
      margin-left: 16px;
      span {
        margin-left: 12px;
      }
      border: 1px solid #afafaf;
      border-radius: 5px;
      height: 34px;
      width: 95px;
      display: flex;
      align-items: center;
      cursor: pointer;
      justify-content: center;
      color: #000;
      font-size: 14px;
      font-weight: 400;
      background: #fff;
      line-height: 20.4px; /* 145.714% */
    }
  }
  @media screen and (max-width: 768px) {
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const UserAvatar = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5a88ff;
  margin: 0 !important;
  border-radius: 9999px;
  color: #fff;
  font-size: 30px;
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  .user-info {
    display: flex;
    align-items: center;
    img {
      border-radius: 999px;
      border: 1px solid #afafaf;
      object-fit: cover;
    }
    div {
      margin-left: 16px;
      h5 {
        display: flex;
        align-items: center;
        color: #000;
        font-size: 16px;
        font-weight: 600;
        span {
          margin-right: 8px;
        }
        svg {
          cursor: pointer;
        }
        a {
          color: #000;
        }
      }
      .review {
        margin: 0;
        margin-top: 8px;
        display: flex;
        p {
          color: #000;
          font-size: 14px;
          font-weight: 600;
          margin: 0 4px;
        }
        span {
          color: #000;
          font-size: 14px;
          font-weight: 400;
        }
      }
    }
  }
  .user-action {
    display: flex;
    svg {
      cursor: pointer;
    }
    & > :not(:first-child) {
      margin-left: 24px;
    }
  }
`;

export const AdsDetailsInfoWrapper = styled.div`
  margin-top: 30px;
`;

export const InfoItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  /* border-bottom: 1px solid #00000010; */
  padding: 8px 0;
  span {
    font-size: 14px;
    font-weight: 500;
  }
  span:last-child {
    display: inline-flex;
    align-items: center;
    svg {
      margin-left: 8px;
      cursor: pointer;
    }
    font-size: 12px;
    font-weight: 400;
    color: #000000a0;
  }
`;

export const InfoItemWrapper2 = styled.div`
  /* border-bottom: 1px solid #00000010; */
  padding: 8px 0;
  & > span {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
  }
  p {
    font-size: 12px;
    margin-top: 8px;
  }
  ul {
    font-size: 12px;
    list-style-type: none;
    li {
      display: flex;
      span {
        margin-left: 5px;
        align-items: center;
      }
    }
  }
`;

export const ImageModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
  visibility: hidden;
  right: 0;
  transition: all 0.3s;
  pointer-events: none;
  &.open {
    pointer-events: initial;
    opacity: 1;
    visibility: visible;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const ImageModalContainer = styled.div`
  border-radius: 10px;
  height: 90%;
  max-width: 1000px;
  width: 95%;
  background: #fff;
  padding: 40px;
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 1;
  & > svg {
    position: absolute;
    cursor: pointer;
    top: 20px;
    right: 20px;
  }
  & > img {
    object-fit: contain;
    width: 100%;
    height: calc(100% - 200px);
    /* height: 60%; */
    margin-bottom: 30px;
  }
  .swiper-slide {
    cursor: pointer;
    width: 150px;
    height: 150px;
    img {
      object-fit: cover;
      transition: all 0.3s;
      border: 1px solid transparent;
    }
    &:hover {
    }
    &.selected {
      img {
        border: 1px solid #ff6f00;
      }
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    &::after {
      font-size: 30px !important;
      color: #000000;
      font-weight: 900;
    }
  }
`;

export const ImageModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: #00000050;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ReviewsWrapper = styled.div`
  margin-top: 20px;
  border-top: 1px solid #00000010;
`;

export const ReviewItemWrapper = styled.div`
  margin-left: 60px;

  .user-info {
    border-bottom: 1px solid #00000010;
    padding-top: 20px;
    padding-bottom: 20px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    img {
      object-fit: cover;
      border-radius: 99px;
    }
    .review {
      width: 100%;
      display: flex;
      align-items: center;
      p {
        font-size: 12px;
        margin-left: 8px;
      }
    }
    .review-name {
      margin-left: 12px;
      p {
        font-size: 12px;
        color: #000000f0;
        margin-top: 4px;
      }
    }
    .review-avatar {
      width: 40px;
      height: 40px;
      font-size: 20px;
    }
    .review-description {
      margin-top: 12px;
    }
  }
`;

export const EmojiWrapper = styled.div<{ visible?: string }>`
  position: absolute;
  z-index: 1;
  /* right: ${({ visible }) => (visible ? "0" : "-60px")}; */
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  transition: all 0.3s;
  div {
    position: relative;
    width: 40px;
    height: 40px;
    margin-bottom: 20px;
    margin-right: 14px;
    background: #55555560;
    border: 2px solid #88888830;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    cursor: pointer;
    span {
      background: #ffffff;
      position: absolute;
      top: -2px;
      right: -2px;
      font-size: 8px;
      min-width: 20px;
      text-align: center;
      border-radius: 999px;
      padding: 0 2px;
      margin-left: 4px;
    }
  }
  @media screen and (max-width: 768px) {
    /* top: ${({ visible }) => (visible ? "0" : "-60px")}; */
    top: 0;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    display: flex;
    div {
      margin-bottom: 0;
      margin-top: 15px;
      margin-right: 0;
    }
    div:not(:last-child) {
      margin-right: 14px;
    }
  }
`;
