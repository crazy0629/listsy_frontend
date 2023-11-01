import styled from "styled-components";

export const SocialButtonGroupWrapper = styled.div`
  width: 100%;
  & > :not(:first-child) {
    margin-top: 16px;
  }
`;

export const SocialButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  cursor: pointer;
  height: 49px;
  justify-content: center;
  border-radius: 100px;
  border: 1px solid #000;
  align-items: center;
  span {
    margin-left: 32px;
    color: #000;

    font-size: 14px;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
  }
`;
