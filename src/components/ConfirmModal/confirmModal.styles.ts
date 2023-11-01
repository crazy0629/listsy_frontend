import styled from "styled-components";

export const ConfirmModalWrapper = styled.div<{ open?: string }>`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  transition: all 0.4s;
  text-align: center;
  height: 100%;
  z-index: 99999;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  &.open {
    opacity: 1;
    visibility: visible;
  }
`;

export const ConfirmModalContainer = styled.div`
  position: absolute;
  z-index: 1;
  max-width: 480px;
  width: 100%;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 18px 40px 0px rgba(232, 232, 232, 0.25);

  animation-name: bounceOut;
  animation-duration: 0.4s;
  animation-fill-mode: both;
  padding: 40px 30px;
  &.open {
    animation-name: bounceIn;
    & > h1 {
      font-size: 26px;
      font-weight: 700;
      margin-top: 16px;
    }
    & > p {
      font-size: 14px;
      margin-top: 20px;
      text-align: left;
    }
  }

  @keyframes bounceIn {
    20% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
    50%,
    55% {
      opacity: 1;
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }
    100% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9);
      transform: scale3d(0.9, 0.9, 0.9);
    }
  }
  @keyframes bounceOut {
    20% {
      -webkit-transform: scale3d(0.9, 0.9, 0.9);
      transform: scale3d(0.9, 0.9, 0.9);
    }
    50%,
    55% {
      opacity: 1;
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale3d(0.3, 0.3, 0.3);
      transform: scale3d(0.3, 0.3, 0.3);
    }
  }
  .popup_visible #modalx-slideDown {
    -webkit-animation-name: slideInDown;
    animation-name: slideInDown;
    -webkit-animation-duration: 0.4s;
    animation-duration: 0.4s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
`;

export const ModalOverlay = styled.div<{ open?: string }>`
  background: #00000060;
  position: absolute;
  width: 100%;
  transition: all 0.4s;
  height: 100%;
  position: fixed;
  opacity: 0;
  visibility: hidden;
  &.open {
    opacity: 1;
    visibility: visible;
  }
`;

export const ActionGroup = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  & > :not(:first-child) {
    margin-left: 20px;
  }
  button {
    width: 120px;
    height: 40px;
    border: none;
    background-color: #ff6f00;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    outline: none;
    &.cancel {
      background: #fff;
      border: 1px solid #ff6f00;
      color: #ff6f00;
    }
  }
`;
