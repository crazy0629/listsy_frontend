import React from "react";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import * as Comp from "@/components";
import * as Styled from "./socialbutton.styles";

export const SocialButtonGroup: React.FC = () => {
  const { linkedInLogin } = useLinkedIn({
    clientId: "86vhj2q7ukf83q",
    redirectUri: `http://localhost:4000`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      console.log(code);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const responseGoogle = (response: any) => {
    console.log(response);
  };
  const responseFacebook = (response: any) => {
    console.log(response);
    // Api call to server so we can validate the token
  };
  return (
    <Styled.SocialButtonGroupWrapper>
      <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        render={(renderProps) => (
          <Styled.SocialButtonWrapper onClick={renderProps.onClick}>
            <Comp.GoogleIcon />
            <span>Continue with Google</span>
          </Styled.SocialButtonWrapper>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />

      <Styled.SocialButtonWrapper onClick={linkedInLogin}>
        <Comp.LinkedinIcon />
        <span>Continue with Linkedin</span>
      </Styled.SocialButtonWrapper>
      <FacebookLogin
        appId="1088597931155576"
        fields="name,email,picture"
        callback={responseFacebook}
        render={(renderProps) => (
          <Styled.SocialButtonWrapper onClick={renderProps.onClick}>
            <Comp.FacebookIcon />
            <span>Continue with Facebook</span>
          </Styled.SocialButtonWrapper>
        )}
      />
    </Styled.SocialButtonGroupWrapper>
  );
};
