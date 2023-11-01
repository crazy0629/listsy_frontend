import styled from "styled-components";

export const ProfilePageWrapper = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: auto;
  padding: 30px 0;
  min-height: calc(100vh - 85px);
  display: flex;
  height: 100%;
`;

export const SidebarWrapper = styled.div`
  padding: 50px 64px;
  max-width: 384px;
  width: 100%;
  height: 100%;
  border-right: 1px solid #eaeaea;
  position: sticky;
  top: 0;
  text-align: center;
  h1 {
    margin-top: 24px;
    color: #000;
    font-size: 16px;
    font-weight: 600;
  }
  h6 {
    margin-top: 8px;
    color: #000;
    font-size: 12px;
    font-weight: 400;
  }
  p {
    margin-top: 16px;
    color: #000;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
  }
`;

export const MainSectionWrapper = styled.div`
  /* padding: 0 64px; */
  flex: 1;
`;

export const ProfileAvatarWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  width: fit-content;
  margin: auto;
  img {
    border-radius: 999px;
    object-fit: cover;
  }
  label {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 30px;
    height: 30px;
    position: absolute;
    bottom: 10px;
    right: 1px;
    border-radius: 100px;
    background: #ff6f00;
  }
`;

export const EmptyAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  background-color: #5a88ff;
  border-radius: 999px;
  color: #fff;
  font-size: 50px;
`;

export const SidebarNavWrapper = styled.div`
  margin-top: 32px;
  & > :not(:first-child) {
    margin-top: 8px;
  }
`;

export const NavItem = styled.div<{ active?: string }>`
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${({ active }) => (active ? "#EAEAEA" : "#fff")};
  border-radius: 100px;
  transition: all 0.3s;
  color: #000;
  font-size: 14px;
  font-weight: 400;
  line-height: 20.4px; /* 145.714% */
  &.delete {
    color: red;
  }
  &:hover {
    background: ${({ active }) => (active ? "#EAEAEA" : "#eaeaea50")};
  }
`;

export const SettingPageWrapper = styled.div`
  padding: 50px 64px;
  h1 {
    color: #000;
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 32px;
  }
  button {
    width: 120px;
    margin-top: 32px;
    border-radius: 5px;
    outline: none;
    border: none;
    background: #ff6f00;
    height: 37px;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
    cursor: pointer;
    float: right;
  }
`;

export const SettingFormWrapper = styled.div`
  & > :not(:first-child) {
    margin-top: 32px;
  }
  input {
    outline: none;
    border: none;
    border-bottom: 1px solid #afafaf;
    height: 59px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
    color: #000;
    &::placeholder {
      color: #afafaf;
    }
  }
  .react-tel-input .form-control:hover,
  .react-tel-input .form-control:focus {
    border: none;
    border-bottom: 1px solid #afafaf;
    box-shadow: none;
  }
  .react-tel-input {
    input {
      width: 100%;
      outline: none;
      border: none;
      border-bottom: 1px solid #afafaf;
      border-radius: 0;
    }
  }
  .country-list {
    bottom: 50px;
  }
  textarea {
    border: none;
    outline: none;
    height: 148px;
    resize: none;
    border-bottom: 1px solid #afafaf;
    font-size: 14px;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    width: 100%;
    line-height: 20.4px; /* 145.714% */
    color: #000;
    &::placeholder {
      color: #afafaf;
    }
  }
`;

export const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  align-items: flex-end;
  p {
    color: #afafaf;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
  }
`;

export const EditButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    margin-left: 16px;
    &.cancel {
      background: #fff;
      border: 1px solid #ff6f00;
      color: #ff6f00;
    }
  }
`;

export const ConfirmPasswordWrapper = styled.div`
  margin-top: 20px;
  text-align: left;
  p {
    font-size: 14px;
    color: #000000aa;
    margin-bottom: 8px;
  }
  input {
    width: 100%;
    height: 49px;
    border: none;
    outline: none;
    border-bottom: 1px solid #afafaf;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.4px;
    &::placeholder {
      color: #afafaf;
    }
  }
`;

export const ChangePasswordPageWrapper = styled.div`
  max-width: 680px;
  padding: 50px 64px;
  width: 100%;
  margin: auto;
  h1 {
    text-align: center;
    color: #000;
    font-size: 32px;
    font-weight: 700;
  }
  button {
    width: 120px;
    margin-top: 32px;
    border-radius: 5px;
    outline: none;
    border: none;
    background: #ff6f00;
    height: 37px;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
    cursor: pointer;
    float: right;
  }
`;

export const PasswordInputGroup = styled.div`
  margin: 84px 0;
  & > :not(:first-child) {
    margin-top: 32px;
  }
  input {
    outline: none;
    width: 100%;
    border: none;
    border-bottom: 1px solid #afafaf;
    height: 59px;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
    color: #000;
    &::placeholder {
      color: #afafaf;
    }
  }
`;
export const PostsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const PostsFilterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
`;

export const PostsPageFilterWrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    border-radius: 100px;
    padding: 6px 12px;
    margin-right: 8px;
    transition: all 0.3s;
    font-size: 10px;
    font-weight: 400;
    background: #eaeaea;
    color: #000;
    line-height: 20.4px; /* 145.714% */
    cursor: pointer;
    &.active {
      background: #ff6f00;
      color: #fff;
    }
  }
`;

export const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 8px;
    color: #000;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 10px;
    font-weight: 400;
    opacity: 0.2;
    line-height: 13.9px; /* 139% */
    display: flex;
    align-items: center;
    &::before {
      content: "";
      margin-right: 8px;
      width: 8px;
      height: 8px;
      border-radius: 8px;
    }
    &.Active {
      &::before {
        background: #6ce243;
      }
    }
    &.Suspended {
      &::before {
        background: #ff9b00;
      }
    }
    &.Expired {
      &::before {
        background: #ff3e00;
      }
    }
    &.selected {
      opacity: 1;
    }
  }
`;

export const PostsGridWrapper = styled.div`
  margin-top: 20px;
  flex: 1;
  overflow: auto;
  h4 {
    padding: 0 30px;
    text-align: center;
  }
  .infinite-scroll-component {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 32px;
    padding: 0 30px 50px;
  }
`;

export const PostsListWrapper = styled.div`
  padding: 20px 30px 50px;
  flex: 1;
  height: calc(100% - 2px);
  .infinite-scroll-component {
    border-top: 1px solid #afafaf50;
  }
`;

export const JobDetailsWrapper = styled.div`
  width: 40%;
  overflow: auto;
  & > p {
    font-size: 14px;
    text-align: center;
    padding: 20px;
  }
`;

export const ProposalDetailsWrapper = styled.div`
  padding: 14px 24px;
  border-bottom: 1px solid #afafaf50;
  p {
    white-space: pre-line;
    color: #000;
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 16px;
  }
  .user-info {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    img {
      object-fit: cover;
      border-radius: 999px;
      border: 1px solid #afafaf;
    }
    span {
      width: 24px;
      height: 24px;
      border-radius: 999px;
      background: #5a88ff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      color: #fff;
    }
    h3 {
      margin-left: 12px;
      color: #000;
      font-size: 16px;
      font-weight: 600;
    }
  }
  h5 {
    color: #000;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 8px;
    line-height: 20.4px; /* 145.714% */
  }
  a {
    color: #ff6f00;
    font-size: 12px;
    display: flex;
    width: fit-content;
    margin-bottom: 4px;
    font-weight: 300;
  }
  button {
    border-radius: 5px;
    background: #ff6f00;
    height: 30px;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    border: none;
    outline: none;
    display: block;
    width: 120px;
    margin-left: auto;
    margin-top: 20px;
    /* width: fit-content; */
    line-height: 20.4px; /* 145.714% */
  }
`;
