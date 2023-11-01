import styled from "styled-components";

export const LoginFormWrapper = styled.div`
  padding: 80px 0;
  max-width: 530px;
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    cursor: pointer;
  }
  & > p {
    color: #000;
    margin-top: 24px;
    margin-bottom: 54px;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
  }
  & > h6 {
    margin-top: 32px;
    color: #000;

    font-size: 14px;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
    a {
      color: #ff6f00;
      text-decoration-line: underline;
    }
  }
  & > h4 {
    text-align: center;
    margin-top: 32px;
    color: #000;
    font-size: 24px;
    font-weight: 700;
  }
`;

export const LoginFormGroup = styled.div`
  width: 100%;
  & > :not(:last-child) {
    margin-bottom: 40px;
  }
  & > div.form-group {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 40px;
  }
  input {
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid #000;
    outline: none;
    padding: 12px 0;
    color: #000;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
    &::placeholder {
      color: #c7c7c7;
    }
  }
  .react-tel-input .form-control:hover,
  .react-tel-input .form-control:focus {
    border: none;
    border-bottom: 1px solid #000;
    box-shadow: none;
  }
  .react-tel-input {
    input {
      width: 100%;
      outline: none;
      border: none;
      border-bottom: 1px solid #000;
      border-radius: 0;
    }
  }
  .country-list {
    bottom: 50px;
  }
`;

export const RememberMeWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  label {
    display: flex;
    align-items: center;
    input {
      width: 15px;
      height: 15px;
      margin-right: 8px;
      accent-color: #ff6f00;
    }
    span {
      color: #000;

      font-size: 12px;
      font-weight: 400;
      line-height: normal;
    }
  }
  p {
    color: #ff6f00;
    cursor: pointer;
    font-size: 12px;
    font-weight: 400;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const SignInButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 26px;
  width: 100%;
  height: 49px;
  background: #ff6f00;
  border-radius: 100px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 20.4px; /* 145.714% */
  &.resend {
    max-width: 470px;
  }
`;

export const OrDivider = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 32px 0;
  color: #000;

  font-size: 14px;
  font-weight: 400;
  line-height: 20.4px; /* 145.714% */
  &::before,
  &::after {
    content: "";
    width: 30%;
    height: 1px;
    background: #000;
  }
`;

export const ResendFormWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  h1 {
    color: #000;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 32px;
  }
  p {
    color: #595151;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
    margin-bottom: 48px;
  }
  h3 {
    color: #000;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
    margin-top: 32px;
    line-height: 20.4px; /* 145.714% */
  }
`;
