import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import * as Styled from "../auth.styles";
import * as Comp from "@/components";
import { SERVER_URI } from "@/config";
import { setCurrentUser } from "@/utils/authentication";

export const LoginForm: React.FC = () => {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [isRemember, setIsRemember] = useState(false);

  useEffect(() => {
    if (localStorage.remember) {
      setIsRemember(true);
      setForm((prev) => ({ ...prev, email: localStorage.remember }));
    }
  }, []);

  const handleForgotPassword = async () => {
    if (!form.email) {
      toast.error("Enter your Email.");
    } else {
      const res = await axios.post(`${SERVER_URI}/auth/forgetPassword`, {
        email: form.email,
      });
      if (res.data.success) {
        toast.success(res.data.message);
      } else {
        toast.error(res.data.message);
      }
    }
  };

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      toast.error("Please complete all inputs.");
    } else {
      const res = await axios.post(`${SERVER_URI}/auth/signin`, {
        email: form.email,
        password: form.password,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        if (!res.data.isVerified) {
          router.push("/auth/resend-email");
        } else {
          setCurrentUser(form.email, res.data.token, isRemember);
          router.push("/");
        }
      } else {
        toast.error(res.data.message);
      }
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
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <Styled.LoginFormGroup>
        <input
          type="text"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, password: e.target.value }))
          }
        />
      </Styled.LoginFormGroup>
      <Styled.RememberMeWrapper>
        <label htmlFor="remember">
          <input
            type="checkbox"
            id="remember"
            checked={isRemember}
            onChange={() => setIsRemember((prev) => !prev)}
          />
          <span>Remember me</span>
        </label>
        <p onClick={handleForgotPassword}>Forgot Password?</p>
      </Styled.RememberMeWrapper>
      <Styled.SignInButton onClick={handleLogin}>Sign In</Styled.SignInButton>
      <Styled.OrDivider>Or</Styled.OrDivider>
      <Comp.SocialButtonGroup />
      <h6>
        {"Don’t have account? Please "}
        <Link href={"/auth/register"}>Sign up</Link>
        {" now."}
      </h6>
    </Styled.LoginFormWrapper>
  );
};
