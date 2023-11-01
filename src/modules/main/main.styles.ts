import styled from "styled-components";

export const MainPageSectionWrapper = styled.div`
  border-top: 1px solid #eaeaea;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const FilterWrapper = styled.div`
  padding: 16px 20px;
  display: flex;
  align-items: center;
  & > :not(:first-child) {
    margin-left: 12px;
  }
  & > button {
    height: 34px;
    border-radius: 5px;
    background: #ff6f00;
    cursor: pointer;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
    outline: none;
    border: none;
    width: 80px;
  }
`;

export const MainGridWrapper = styled.div`
  flex: 1;
  overflow: auto;
  /* & > div {
    height: 100%;
  } */
  .infinite-scroll-component {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 32px;
    padding: 0 20px 40px;
  }
`;

export const JobListWrapper = styled.div`
  display: flex;
  height: calc(100% - 66px);
`;

export const JobListContainer = styled.div`
  flex: 1;
  overflow: auto;
  padding: 0 20px 40px;
`;

export const JobDetailWrapper = styled.div`
  max-width: 603px;
  position: relative;
  width: 100%;
  flex: 1;
  overflow: auto;
  padding: 36px 24px;
  & > a {
    display: flex;
    width: fit-content;
    font-size: 12px;
    margin-top: 10px;
    color: #ff6f00;
  }
  & > h1 {
    color: #000;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 12px;
  }
  & > div.job-details {
    display: flex;
    justify-content: space-between;
    div {
      display: flex;
      span {
        padding: 3px 12px;
        color: #000;
        font-size: 10px;
        font-weight: 400;
        border-radius: 100px;
        margin-right: 8px;
        background: #eaeaea;
      }
    }
    h5 {
      color: #000;
      font-size: 12px;
      font-weight: 500;
      span {
        color: #afafaf;
        font-weight: 400;
      }
    }
  }
  & > p {
    color: #000;
    font-size: 12px;
    font-weight: 300;
    white-space: pre-line;
    margin-top: 16px;
  }
`;

export const JobListItemWrapper = styled.div`
  padding: 24px 32px;
  border-bottom: 1px solid #afafaf;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: #eaeaea;
  }
  div {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    img {
      border-radius: 999px;
      object-fit: cover;
      border: 1px solid #afafaf;
    }
    & > span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 999px;
      color: #fff;
      font-size: 18px;
      background: #5a88ff;
    }
    h2 {
      display: flex;
      align-items: center;
      margin-left: 16px;
      color: #000;
      font-size: 16px;
      font-weight: 600;
      span {
        color: #afafaf;
        font-size: 12px;
        font-weight: 400;
        margin-left: 16px;
      }
    }
  }
  h1 {
    color: #000;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  p {
    color: #000;
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;

    -webkit-box-orient: vertical;
  }
  h4 {
    color: #000;
    font-size: 12px;
    font-weight: 600;
    span {
      color: #afafaf;
      font-weight: 400;
    }
  }
`;

export const JobApplySection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  margin-top: 20px;
  border-top: 1px solid #afafaf30;
`;

export const ApplyButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  button {
    height: 30px;
    border-radius: 5px;
    background: #ff6f00;
    cursor: pointer;
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
    outline: none;
    border: none;
    width: 100px;
    margin-right: 10px;
    &.close {
      color: #ff6f00;
      border: 1px solid #ff6f00;
      background-color: #fff;
    }
  }
  span {
    margin-right: 10px;
    font-size: 12px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #afafaf50;
    height: 30px;
    border-radius: 5px;
  }
`;

export const ApplyForm = styled.div`
  & > h2 {
    color: #000;
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 12px;
  }
`;

export const AttachFile = styled.div`
  margin-top: 12px;
  margin-bottom: 20px;
  label {
    cursor: pointer;
    text-decoration: underline;
    width: fit-content;
    margin-bottom: 10px;
    span {
      margin-left: 4px;
    }
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  div {
    padding: 6px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      display: flex;
      align-items: center;
      font-size: 14px;
      span {
        margin-left: 6px;
      }
    }
    svg {
      cursor: pointer;
    }
  }
`;
