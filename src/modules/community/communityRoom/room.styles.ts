import styled from "styled-components";

export const CommunityRoomWrapper = styled.div`
  border-top: 1px solid #eaeaea;
  margin-right: 40px;
  padding-left: 40px;
  padding-bottom: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const CommunityHeaderWraper = styled.div`
  padding: 16px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .community-info {
    width: 80%;
    display: flex;
    align-items: center;
    img {
      border-radius: 999px;
      border: 1px solid #afafaf;
    }
    p {
      margin-left: 12px;
      color: #000;
      font-size: 14px;
      font-weight: 400;
      line-height: 20.4px; /* 145.714% */
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
`;

export const UserListWrapper = styled.div`
  border-left: 1px solid #afafaf;
  padding-left: 16px;
  position: relative;
  div.dropdown-button {
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 100px;
    background: #eaeaea;
    padding-right: 8px;
    img {
      margin-right: -12px;
    }
    span {
      margin-left: 20px;
      color: #000;

      font-size: 14px;
      font-weight: 400;
      line-height: 20.4px; /* 145.714% */
    }
  }
`;

export const UserListDropDownWrapper = styled.div`
  position: absolute;
  top: 26px;
  transition: all 0.3s;
  right: 0;
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 380px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 18px 40px 0px rgba(180, 180, 180, 0.25);
  opacity: 0;
  visibility: hidden;
  max-height: 450px;
  height: auto;
  &.open {
    opacity: 1;
    visibility: visible;
  }
  .dropdown-search {
    display: flex;
    input {
      border-radius: 100px;
      border: 1px solid #ff6f00;
      margin-right: 16px;
      height: 26px;
      flex: 1;
      outline: none;
      font-size: 12px;
      font-weight: 400;
      padding: 0 16px;
      &::placeholder {
        color: #afafaf;
      }
    }
    button {
      width: 102px;
      height: 26px;
      outline: none;
      border: none;
      border-radius: 100px;
      background: #ff6f00;
      color: #fff;
      font-size: 14px;
      font-weight: 400;
      line-height: 20.4px; /* 145.714% */
    }
  }
  .dropdown-list {
    overflow: auto;
    height: 100%;
    margin-top: 20px;
    & > div {
      display: flex;
      cursor: pointer;
      align-items: center;
      margin-bottom: 8px;
      img {
        border-radius: 100px;
        border: 1px solid #afafaf;
        object-fit: cover;
        margin-right: 24px;
      }
      p {
        color: #000;
        font-size: 14px;
        font-weight: 400;
        line-height: 20.4px; /* 145.714% */
      }
    }
    span {
      color: #000;
      font-size: 12px;
      cursor: pointer;
      font-weight: 400;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const CommunityBodyWrapper = styled.div`
  background: #fafafa;
  padding: 32px 48px;
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

export const CommunityChatCotainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
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
`;

export const CommunityChatInputWrapper = styled.div`
  height: 62px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 16px;
  padding: 0 24px;
  border-radius: 1000px;
  border: 1px solid #000;
  background: #fff;
  box-shadow: 0px 15px 40px 0px rgba(218, 218, 218, 0.25);
  svg {
    cursor: pointer;
  }
  input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 300;
    line-height: 20.4px; /* 145.714% */
    margin-left: 24px;
    &::placeholder {
      color: #afafaf;
    }
  }
  div {
    display: flex;
    align-items: center;
    svg {
      margin-left: 24px;
    }
  }
`;
