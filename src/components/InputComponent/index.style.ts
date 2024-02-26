import styled from "styled-components";

export const InputStyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 12px;
    color: #000;
    font-weight: 400;
    display: block;
    margin-bottom: 8px;
  }
  input {
    width: 100%;
    height: 34px;
    padding: 6px;
    outline: none;
    border: 1px solid #afafaf;
    border-radius: 5px;
    font-size: 12px;
    font-weight: 400;
    &::placeholder {
      color: #afafaf;
    }
  }
`;
