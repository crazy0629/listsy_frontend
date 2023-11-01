import React from "react";
import { BsArrowRight } from "react-icons/bs";
import * as Styled from "./404.styles";

export const NotFound: React.FC = () => {
  return (
    <Styled.NotFoundWrapper>
      <h1>404</h1>
      <h3>Oops! Page not found</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis congue
        pretium faucibus leo nisl nulla pharetra nullam.
      </p>
      <>
        <span>Go to Homepage</span>
        <BsArrowRight />
      </>
    </Styled.NotFoundWrapper>
  );
};
