import styled from "styled-components";

export const SelectOptionWrapper = styled.div`
  max-height: 300px;
  overflow: auto;
  &.direction-top {
    bottom: 40px;
    margin-top: 0;
  }
  position: absolute;
  width: 100%;
  padding: 6px 0;
  background: #fff;
  box-shadow: 0px 18px 40px 0px rgba(180, 180, 180, 0.25);
  border-radius: 5px;
  margin-top: 5px;
  z-index: 1;
  opacity: 0;
  visibility: hidden;
  transition: all 0.1s;
  &.open {
    opacity: 1;
    visibility: visible;
  }

  p,
  label {
    margin-bottom: 0 !important;
    padding: 8px 6px;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all 0.3s;
    span {
      margin-left: 4px;
    }
    input {
      accent-color: #000;
    }
    &:hover {
      background: #00000010;
    }
  }
`;

export const SelectFormItem = styled.div`
  position: relative;
  p,
  label {
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
