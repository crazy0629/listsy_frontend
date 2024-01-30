import styled from "styled-components";

export const InputRangeWrapper = styled.div`
  display: flex;
  align-items: center;
  span {
    font-size: 14px;
  }
  .prefix {
    margin-right: 4px;
  }
  input {
    width: 100px;
    border: 1px solid #afafaf;
    outline: none;
    border-radius: 5px;
    height: 34px;
  }
  .suffix {
    margin-left: 4px;
  }
`;
