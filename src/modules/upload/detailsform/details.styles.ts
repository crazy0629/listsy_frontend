import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  & > :not(:first-child) {
    margin-top: 16px;
  }
`;

export const TextAreaFormItem = styled.div<{ height: number }>`
  height: ${({ height }) => height}px;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #afafaf;
  display: flex;
  flex-direction: column;
  position: relative;
  contain: content;
  p {
    padding: 10px 10px 6px 10px;
    color: #afafaf;
    font-size: 12px;
    font-weight: 400;
  }
  textarea {
    padding: 0 10px 10px;
    font-family: "Inter", sans-serif;
    border: none;
    outline: none;
    height: 100%;
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

export const SelectFormItem = styled.div`
  position: relative;
  p {
    color: #000;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 8px;
  }
`;

export const Select = styled.div`
  height: 34px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #afafaf;
  padding: 0 6px;
  span {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    font-weight: 400;
    &.placeholder {
      color: #afafaf;
    }
  }
`;

export const InputFormItem = styled.div`
  display: flex;
  height: 34px;
  border-radius: 5px;
  border: 1px solid #afafaf;
  contain: content;
  input {
    outline: none;
    border: none;
    flex: 1;
    height: 100%;
    font-size: 12px;
    font-weight: 400;
    padding: 6px;
    &::placeholder {
      color: #afafaf;
    }
  }
`;

export const SaveButton = styled.div`
  display: flex;
  width: 85px;
  height: 40px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: auto;
  border-radius: 5px;
  background: #ff6f00;
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 20.4px; /* 145.714% */
`;

export const SelectOptionWrapper = styled.div`
  position: absolute;
  width: 100%;
  padding: 6px 0;
  background: #fff;
  box-shadow: 0px 18px 40px 0px rgba(180, 180, 180, 0.25);
  border-radius: 5px;
  margin-top: 5px;
  z-index: 1;
  p {
    margin: 0;
    padding: 6px 6px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background: #00000010;
    }
  }
`;

export const InputSelectWrapper = styled.div`
  border-left: 1px solid #afafaf;
  display: flex;
  align-items: center;
  padding-right: 6px;
  select {
    padding-left: 6px;
    border: none;
    outline: none;
    height: 100%;
    /* appearance: none; */
    color: #afafaf;
  }
`;

export const FormGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;
`;

export const UploadedFilesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px dashed #ededed;
  height: 240px;
  overflow: auto;
  padding: 12px;
  h3 {
    font-size: 14px;
    margin: auto;
    color: #adadad;
    font-weight: 500;
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
