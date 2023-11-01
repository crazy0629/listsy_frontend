import React from "react";
import Image from "next/image";
import * as Styled from "../auth.styles";

export const Verified: React.FC = () => {
  return (
    <Styled.LoginFormWrapper>
      <Image
        src={"/assets/images/verified.png"}
        alt="verified"
        width={399}
        height={210}
      />
      <h4>
        Congratulations! Your account is verified. <br /> Redirecting...
      </h4>
    </Styled.LoginFormWrapper>
  );
};
