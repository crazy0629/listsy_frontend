import Link from "next/link";
import styled from "styled-components";

export const AppLayoutWrapper = styled.div``;

export const HeaderWrapper = styled.div`
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  div {
    margin-right: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  img {
    cursor: pointer;
  }
`;

export const HeaderNavWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
  & > :not(:first-child) {
    margin-left: 16px;
  }
  .icon-wrapper {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    position: relative;
    span {
      position: absolute;
      display: block;
      width: 5px;
      height: 5px;
      border-radius: 99px;
      background-color: red;
      top: 5px;
      right: 5px;
    }
  }
`;

export const HeaderSearchInput = styled.div`
  display: flex;
  align-items: center;
  max-width: 530px;
  width: 100%;
  border-radius: 100px;
  border: 1px solid #afafaf;
  height: 45px;
  padding: 6px 30px;
  input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    font-size: 14px;
    font-weight: 300;
    line-height: 20.4px; /* 145.714% */
    &::placeholder {
      color: #afafaf;
    }
  }
`;

export const AuthActionWrapper = styled.div`
  position: relative;
`;

export const AuthActionButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  user-select: none;
  background-color: #5a88ff;
  width: 32px;
  height: 32px;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  img {
    border-radius: 99px;
    object-fit: cover;
  }
  line-height: 20.4px; /* 145.714% */
`;

export const AuthListWrapper = styled.div<{ visible?: string }>`
  transition: all 0.3s;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
  position: absolute;
  z-index: 99;
  top: 38px;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 213px;
  border-radius: 5px;
  background: #fff;
  box-shadow: 0px 18px 40px 0px rgba(232, 232, 232, 0.5);
  contain: content;
  a,
  p {
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
      margin-left: 16px;
    }
    padding: 12px 36px;
    text-decoration: none;
    color: #000;
    font-size: 14px;
    transition: all 0.3s;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
    &:first-child {
      background: #eaeaea;
    }
  }
`;

export const AppMainSection = styled.div`
  display: flex;
  height: calc(100vh - 85px);
`;

export const AppMainContainer = styled.div<{ nosidebar?: string }>`
  width: 100%;
  padding-left: ${({ nosidebar }) => (nosidebar ? "0" : "240px")};
  flex: 1;
  /* overflow: auto; */
`;

export const AppMainContent = styled.div`
  height: 100%;
`;

export const SidebarCommunity = styled.div`
  margin: 12px 0;
  padding: 12px 0;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  position: relative;
  h5 {
    text-align: center;
    color: #afafaf;
    font-size: 10px;
    font-weight: 400;
    padding: 12px 0;
  }
  h1 {
    padding: 8px 10px 8px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #aaa;
    font-size: 14px;
    font-weight: 500;
    svg {
      cursor: pointer;
    }
  }
`;

export const CommunityItem = styled.div`
  height: 40px;
  padding: 0 10px 0 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  .react-tooltip {
    word-break: break-all;
  }
  justify-content: space-between;
  & > div {
    display: flex;
    align-items: center;
    img {
      border-radius: 999px;
      border: 1px solid #afafaf;
      object-fit: cover;
    }
    p {
      margin-left: 20px;
      color: #4b4b4b;
      font-size: 14px;
      font-weight: 400;
      line-height: 20.4px; /* 145.714% */
    }
    h5 {
      background-color: #5a88ff;
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 999px;
      color: #fff;
      font-size: 12px;
      font-weight: 400;
    }
  }
  span {
    color: #afafaf;
    font-size: 10px;
    font-weight: 400;
  }
  &:hover {
    background-color: #eaeaea;
  }
`;

export const AddCommunityPopup = styled.div`
  position: fixed;
  bottom: 20px;
  border: 1px solid red;
  background-color: #fff;
  right: -425px;

  width: 425px;
  border: 10px;
  box-shadow: 0px 18px 40px 0px rgba(180, 180, 180, 0.25);

  padding: 20px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  &.show {
    opacity: 1;
    right: 20px;
    visibility: visible;
  }
  .text-wrapper {
    width: 100%;
    position: relative;
    textarea {
      padding: 10px;
      height: 245px;
      resize: none;
      border-radius: 5px;
      border: 1px solid #afafaf;
      outline: none;
      width: 100%;
    }
    span {
      position: absolute;
      bottom: 10px;
      right: 10px;
      color: #afafaf;
      font-size: 10px;
      font-weight: 400;
    }
  }
  .action-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
    align-items: center;
    & > button {
      cursor: pointer;
      border-radius: 5px;
      outline: none;
      border: none;
      background: #ff6f00;
      color: #fff;

      font-size: 14px;
      font-weight: 400;
      line-height: 20.4px; /* 145.714% */
      width: 135px;
      height: 45px;
    }
  }
`;

export const EmojiWrapper = styled.div`
  position: relative;
  svg {
    cursor: pointer;
  }
  & > div {
    position: absolute;
    bottom: 36px;
    transition: all 0.3s;
    opacity: 0;
    visibility: hidden;
    &.show {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const SidebarMainNavItem = styled(Link)`
  padding: 0 24px;
  height: 40px;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  color: #4b4b4b;
  text-decoration: none;
  svg {
    width: 24px;
    height: 24px;
  }
  span {
    margin-left: 24px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
  }
  &:hover {
    background: #eaeaea70;
  }
`;

export const SidebarCountrySelect = styled.div`
  margin-bottom: 20px;
  p {
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: center;
    span {
      margin: 0 4px;
      color: #000;
      font-size: 12px;
      font-weight: 400;
    }
  }
`;

export const AppSidebarWrapper = styled.div`
  width: 240px;
  position: fixed;
  height: calc(100vh - 85px);
  display: flex;
  flex-direction: column;
`;

export const AppSidebarContainer = styled.div`
  flex: 1;
  /* margin-bottom: 20px; */
  /* overflow: auto; */
  overflow-x: hidden;
  padding: 10px 0 20px;
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

export const AppSidebarFooter = styled.div`
  padding: 20px 0;
  border-top: 1px solid #ededed;
  h1 {
    color: #afafaf;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
  }
`;

export const SidebarFooterNav = styled.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: center;
  a {
    color: #000;
    font-size: 12px;
    font-weight: 400;
    text-decoration: none;
  }
  & > :not(:first-child) {
    margin-left: 12px;
  }
`;

export const SidebarSocialNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  a {
    font-size: 20px;
    text-decoration: none;
    color: #3e3e3ea1;
  }
  & > :not(:first-child) {
    margin-left: 16px;
  }
`;
