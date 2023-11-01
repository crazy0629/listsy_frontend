import React from "react";
import axios from "axios";
import { toast } from "react-toastify";
import * as Styled from "../auth.styles";
import Image from "next/image";
import { useRouter } from "next/router";
import { SERVER_URI } from "@/config";
import Link from "next/link";

export const ResendEmailForm: React.FC<{ email?: string | string[] }> = ({
  email,
}) => {
  const router = useRouter();

  const handleResend = async () => {
    const res = await axios.post(`${SERVER_URI}/auth/resendVeriEmail`, {
      email: email,
    });
    if (res.data.success) {
      toast.success(res.data.message);
    } else {
      toast.error(res.data.message);
    }
  };

  return (
    <Styled.LoginFormWrapper>
      <Image
        src="/assets/images/logo.png"
        alt="app logo"
        width={181}
        height={67}
        onClick={() => router.push("/")}
      />
      <Styled.ResendFormWrapper>
        <h1>Verify your email</h1>
        <p>
          {"We’ve sent you a verification email to the address "}
          <b>{email}</b>
          {
            ", please check your inbox and follow the instructions to sign up new account"
          }
        </p>
        <Styled.SignInButton onClick={handleResend} className="resend">
          Resend verification email
        </Styled.SignInButton>
        <h3 onClick={() => router.back()}>Go Back</h3>
      </Styled.ResendFormWrapper>
    </Styled.LoginFormWrapper>
  );
};
