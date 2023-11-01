import styled from "styled-components";

export const CommunityModalWrapper = styled.div<{ open?: string }>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  transition: all 0.3s;
  opacity: 0;
  visibility: hidden;
  &.open {
    opacity: 1;
    visibility: visible;
  }
`;

export const CommunityModalContainer = styled.div`
  position: absolute;
  max-width: 750px;
  width: 100%;
  z-index: 1;
  padding-bottom: 24px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0px 18px 40px 0px rgba(232, 232, 232, 0.25);
  & > h1 {
    display: flex;
    padding: 20px 40px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #afafaf;
    color: #000;
    font-size: 24px;
    font-weight: 700;
    svg {
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        transform: rotate(90deg);
      }
    }
  }
`;

export const CommunityModalOverlay = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #00000050;
`;

export const CommunityModalContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const CommuniySearchWrapper = styled.div`
  display: flex;
  padding: 24px 40px;
  input {
    height: 35px;
    flex: 1;
    margin-right: 16px;
    border-radius: 100px;
    outline: none;
    border: 1px solid #ff6f00;
    padding: 0 16px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
    color: #000;
    &::placeholder {
      color: #afafaf;
    }
  }
  button {
    width: 100px;
    height: 35px;
    outline: none;
    border: none;
    border-radius: 100px;
    background: #ff6f00;
    color: #fff;
    font-size: 14px;
    cursor: pointer;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
  }
`;

export const CommunityListWrapper = styled.div`
  height: 450px;
  overflow: auto;
  padding: 0 40px;
  h4 {
    text-align: center;
    color: #afafaf;
    font-size: 14px;
    font-weight: 400;
    padding: 20px 0;
  }
  &::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #eee;
    border-radius: 90px;
    transition: all 0.3s;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #ddd;
  }
`;

export const CommunityListItem = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  cursor: pointer;
  & > .empty-avatar {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    color: #fff;
    border-radius: 999px;
    background-color: #5a88ff;
  }
  & > img {
    border: 1px solid #afafaf;
    border-radius: 999px;
    object-fit: cover;
  }
  .user-info {
    margin-left: 20px;
    white-space: nowrap;
    h1 {
      color: #000;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    & > div {
      display: flex;
      color: #000;
      font-size: 8px;
      p {
        font-weight: 400;
        margin: 0 4px;
      }
      span {
        font-weight: 300;
      }
    }
  }
  & > p {
    color: #afafaf;
    font-size: 12px;
    font-weight: 400;
    flex: 1;
    margin-left: 20px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    padding-right: 20px;
  }
  button {
    background-color: #fff;
    height: 28px;
    border: 1px solid #afafaf;
    border-radius: 50px;
    width: 100px;
    outline: none;
    color: #000;
    cursor: pointer;
    font-size: 10px;
    font-weight: 400;
  }
`;
