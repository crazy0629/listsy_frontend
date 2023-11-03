import styled from "styled-components";

export const MessageRoomWrapper = styled.div`
  border-top: 1px solid #eaeaea;
  height: 100%;
  display: flex;
`;

export const MessageUserListWrapper = styled.div`
  max-width: 340px;
  width: 100%;
  height: 100%;
  border-right: 1px solid #eaeaea;
  display: flex;
  flex-direction: column;
  .user-search {
    padding: 18px 40px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eaeaea;
    svg {
      margin-right: 16px;
    }
    input {
      flex: 1;
      border: none;
      outline: none;
      font-size: 14px;
      font-weight: 400;
      line-height: 20.4px; /* 145.714% */
      &::placeholder {
        color: #afafaf;
      }
    }
  }
  .user-list {
    flex: 1;
    overflow: auto;
    h6 {
      background-color: #5a88ff;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      color: #fff;
      font-size: 20px;
      font-weight: 400;
      margin-right: 24px;
    }
  }
`;
export const MessageFileUploadWrapper = styled.label``;

export const MessageUserListItem = styled.div`
  padding: 20px 40px;
  border-bottom: 1px solid #eaeaea;
  display: flex;
  align-items: center;
  &.active {
    background: #eaeaea70;
    border-right: 5px solid #00000050;
  }
  &:hover {
    background: #eaeaea70;
  }
  img {
    object-fit: cover;
    margin-right: 24px;
    border-radius: 999px;
  }
  div {
    h3 {
      color: #000;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 4px;
    }
    p {
      color: #000;
      font-size: 14px;
      font-weight: 400;
      line-height: 20.4px; /* 145.714% */
    }
  }
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  h6 {
    background-color: #5a88ff;
    min-width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 999px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    margin-right: 24px;
  }
  .messages-wrapper {
    flex: 1;
    overflow: auto;
    overflow-anchor: auto !important;
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      padding: 24px 64px 0;
      margin-bottom: 24px;
      .message-form {
        display: flex;
        margin-top: 16px;
        img {
          border-radius: 999px;
          object-fit: cover;
          border: 1px solid #afafaf;
        }
        div {
          margin-left: 12px;
          display: flex;
          flex-direction: column;

          h3 {
            color: #000;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 8px;
          }
          p {
            color: #000;
            font-size: 14px;
            font-weight: 400;
            word-break: break-all;
            line-height: 20.4px; /* 145.714% */
          }
        }
        &.to {
          flex-direction: row-reverse;
          div {
            align-items: flex-end;
            margin-left: 0;
            margin-right: 12px;
          }
        }
      }
    }
  }
  .input-wrapper {
    margin: 0 64px;
    border: 1px solid #000;
    border-radius: 999px;
    height: 62px;
    display: flex;
    align-items: center;
    padding: 0 24px;
    svg {
      cursor: pointer;
    }
    margin-bottom: 26px;
    input {
      flex: 1;
      outline: none;
      border: none;
      margin-left: 24px;
      font-size: 14px;
      font-weight: 300;
      line-height: 20.4px; /* 145.714% */
      &::placeholder {
        color: #afafaf;
      }
    }
    div {
      svg {
        margin-left: 24px;
      }
    }
  }
  .message-emoji-picker {
    position: relative;
    & > div {
      position: absolute;
      bottom: 40px;
      right: 0;
      transition: all 0.3s;
      opacity: 0;
      visibility: hidden;
      &.show {
        opacity: 1;
        visibility: visible;
      }
    }
  }
`;

export const MessageUserInfoWrapper = styled.div`
  max-width: 360px;
  width: 100%;
  border-left: 1px solid #eaeaea;
  flex: 1;
  overflow: auto;
  overflow-x: hidden;
  img {
    object-fit: cover;
    object-position: center;
  }
  & > h5 {
    width: 100%;
    height: 337px;
    background: #5a88ff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 120px;
  }
  .user-info {
    padding: 20px 24px;
    border-bottom: 1px solid #eaeaea;
    .username {
      display: flex;
      justify-content: space-between;
      margin-bottom: 16px;
      h2 {
        color: #000;
        font-size: 24px;
        font-weight: 700;
        span {
          color: #000;
          font-size: 14px;
          font-weight: 400;
          margin-left: 8px;
          line-height: 20.4px; /* 145.714% */
        }
      }
    }
    & > p {
      color: #000;
      font-size: 14px;
      font-weight: 400;
      line-height: 20.4px; /* 145.714% */
      margin-bottom: 24px;
    }
    .location {
      display: flex;
      align-items: center;
      margin-bottom: 16px;
      span {
        color: #000;
        font-size: 14px;
        font-weight: 400;
        margin-left: 16px;
        line-height: 20.4px; /* 145.714% */
      }
    }
    .reviews {
      display: flex;
      align-items: center;
      p {
        color: #000;
        font-size: 14px;
        font-weight: 600;
        margin: 0 4px;
        line-height: 20.4px; /* 145.714% */
      }
      span {
        color: #000;
        font-size: 14px;
        font-weight: 400;
        line-height: 20.4px; /* 145.714% */
      }
    }
  }
  .write-review {
    padding: 24px 24px 40px;
    h3 {
      color: #000;
      font-size: 16px;
      margin-bottom: 16px;
      font-weight: 600;
    }
    .score-review {
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      & > span:first-child {
        color: #000;
        font-size: 14px;
        font-weight: 400;
        margin-right: 16px;
        line-height: 20.4px; /* 145.714% */
      }
    }
    .review-textbox {
      position: relative;
      display: flex;
      flex-direction: column;
      p {
        color: #000;
        font-size: 14px;
        font-weight: 400;
        line-height: 20.4px; /* 145.714% */
        display: flex;
        margin-bottom: 8px;
      }
      textarea {
        border-radius: 5px;
        width: 100%;
        height: 200px;
        resize: none;
        border: 1px solid #afafaf;
        padding: 12px;
        outline: none;
      }
      span {
        position: absolute;
        bottom: 6px;
        right: 8px;
        color: #afafaf;
        font-size: 10px;
        font-weight: 400;
      }
    }
    button {
      display: block;
      margin-left: auto;
      width: 85px;
      height: 36px;
      border-radius: 5px;
      background: #ff6f00;
      color: #fff;
      border: none;
      outline: none;
      font-size: 14px;
      font-weight: 400;
      line-height: 20.4px; /* 145.714% */
      margin-top: 20px;
    }
  }
`;
