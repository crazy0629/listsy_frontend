import styled from "styled-components";

export const LocationModalWrapper = styled.div<{ open?: string }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  transition: all 0.3s;
  opacity: 0;
  visibility: hidden;
  &.open {
    opacity: 1;
    visibility: visible;
  }
  z-index: 99998;
`;

export const LocationModalContainer = styled.div`
  box-shadow: 0px 18px 40px 0px rgba(232, 232, 232, 0.25);
  max-height: 90%;
  height: fit-content;
  overflow: auto;
  margin-top: 5vh;
  background: #fff;
  max-width: 600px;
  width: 95%;
  overflow: auto;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 400px) {
    width: 100%;
    height: 100%;
    max-height: 100%;
    margin-top: 0;
  }
`;

export const LocationModalHeader = styled.div`
  border-bottom: 1px solid #afafaf;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    cursor: pointer;
  }
`;

export const LocationModalBody = styled.div`
  flex: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    padding: 5px;
    span {
      font-size: 14px;
    }
  }
`;

export const LocationModalOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #00000050;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .cancel_btn {
    display: block;
    margin-left: auto;
    width: 85px;
    height: 36px;
    border-radius: 5px;
    background: #fff;
    color: #ff6f00;
    border: 1px solid #ff6f00;
    outline: none;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
    margin-top: 20px;
    cursor: pointer;
  }
  .choose_btn {
    display: block;
    margin-right: auto;
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
    cursor: pointer;
  }
`;
