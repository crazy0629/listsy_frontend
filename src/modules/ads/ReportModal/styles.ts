import styled from "styled-components";

export const ReportModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
  visibility: hidden;
  right: 0;
  transition: all 0.3s;
  pointer-events: none;
  &.open {
    pointer-events: initial;
    opacity: 1;
    visibility: visible;
  }
`;

export const ReportModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: #00000050;
  position: absolute;
  top: 0;
  left: 0;
`;

export const ReportModalContainer = styled.div`
  border-radius: 10px;
  max-width: 700px;
  width: 95%;
  background: #fff;
  padding: 40px;
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 1;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 24px;
    font-weight: 600;
  }
  svg {
    cursor: pointer;
  }
`;

export const ModalBody = styled.div`
  padding: 30px 0;
`;

export const TextAreaFormItem = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  contain: content;
  margin-top: 20px;
  p {
    color: #000;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 8px;
  }
  textarea {
    border: 1px solid #afafaf;
    padding: 10px 10px;
    font-family: "Inter", sans-serif;
    outline: none;
    height: 300px;
    border-radius: 5px;
    width: 100%;
    resize: none;
    font-size: 14px;
    font-weight: 400;
    &::placeholder {
      color: #afafaf;
    }
  }
  span {
    position: absolute;
    color: #afafaf;
    font-size: 10px;
    font-weight: 400;
    right: 6px;
    bottom: 6px;
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    margin-left: 16px;
    width: 120px;
    height: 40px;
    border: 1px solid #00000050;
    background: white;
    outline: none;
    border-radius: 4px;
    cursor: pointer;
    &.report {
      border: 1px solid #ff6f00;
      background: #ff6f00;
      color: #fff;
    }
  }
`;

export const ReasonDescription = styled.div`
  margin-top: 20px;
  font-size: 14px;
`;
