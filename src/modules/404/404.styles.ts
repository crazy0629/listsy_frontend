import { styled } from "styled-components";

export const NotFoundWrapper = styled.div`
  max-width: 1024px;
  width: 95%;
  margin: 80px auto;
  background-color: #393c59;
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;
  color: white;
  h1 {
    text-align: center;
    font-size: 100px;
    font-weight: 800;
    margin-bottom: 20px;
  }
  h3 {
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 20px;
  }
  p {
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
    max-width: 700px;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    margin: 30px auto;
    h1 {
      font-size: 50px;
    }
    h4 {
      font-size: 20px;
    }
    p {
      font-size: 14px;
    }
  }
`;
