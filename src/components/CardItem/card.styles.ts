import styled from "styled-components";

export const CardItemWrapper = styled.div`
  width: 100%;
  border-radius: 10px;
  height: fit-content;
  box-shadow: 0px 18px 40px 0px rgba(216, 215, 215, 0.25);
`;

export const VideoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 65%;
  span {
    position: absolute;
    color: #fff;
    border-radius: 2px;
    display: flex;
    bottom: 5px;
    right: 5px;
    align-items: center;
    justify-content: center;
    padding: 2px 5px;
    background: rgba(0, 0, 0, 0.99);
    font-size: 12px;
    font-weight: 700;
  }

  video {
    position: absolute;
    top: 0;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    width: 100%;
    cursor: pointer;
  }
  svg {
    position: absolute;
    top: 47%;
  }
`;

export const VideoInfoWrapper = styled.div`
  padding: 24px 12px;
  display: flex;
  flex-wrap: wrap;
  img {
    border-radius: 999px;
    object-fit: cover;
  }
  & > div {
    margin-left: 12px;
    flex: 1;
    h1 {
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      b {
        color: #000;
        font-size: 16px;
        font-weight: 600;
        line-height: 20.4px; /* 145.714% */
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
        display: flex;
        align-items: center;
        -webkit-line-clamp: 2;
        margin-right: 8px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }
      span {
        display: block;
        min-width: 8px;
        height: 8px;
        border-radius: 8px;
        &.Active {
          background: #6ce243;
        }
        &.Suspended {
          background: #ff9b00;
        }
        &.Expired {
          background: #ff3e00;
        }
      }
    }
    & > div {
      &.location {
        flex-direction: column;
        align-items: flex-start;
        p:first-child {
          margin-bottom: 8px;
        }
      }
      display: flex;
      justify-content: space-between;
      align-items: center;
      & > h2 {
        color: #909090;
        font-size: 14px;
        font-weight: 400;
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: 1;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        margin-right: 10px;
      }
      & > span {
        color: #afafaf;
        font-size: 10px;
        white-space: nowrap;
        font-weight: 400;
      }
      & > p {
        display: flex;
        align-items: center;
        span {
          color: #000;
          margin-left: 4px;
          font-size: 10px;
          font-weight: 300;
        }
      }
      &.reviews {
        div {
          display: flex;
        }
        margin: 6px 0 12px;
        p {
          color: #000;
          font-size: 10px;
          font-weight: 400;
          margin: 0 4px;
        }
        span {
          color: #000;
          font-size: 10px;
          font-weight: 300;
        }
        h3 {
          color: #000;
          font-size: 12px;
          font-weight: 600;
        }
      }
    }
  }
  & > button {
    border-radius: 5px;
    border: 1px solid #eaeaea;
    height: 32px;
    width: 100%;
    margin-top: 8px;
    background: #fff;
    cursor: pointer;
    outline: none;
  }
`;

export const UserAvatar = styled.div`
  max-width: 36px;
  width: 36px;
  background: #5a88ff;
  border-radius: 999px;
  font-size: 18px;
  color: #fff;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  margin-left: 0 !important;
`;
