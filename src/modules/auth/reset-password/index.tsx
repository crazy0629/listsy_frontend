import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import * as Styled from "../auth.styles";
import { SERVER_URI } from "@/config";

export const ResetPasswordForm: React.FC = () => {
  const router = useRouter();

  const [form, setForm] = useState({ password: "", rPassword: "" });

  const handleReset = async () => {
    const { token, email } = router.query;
    if (!form.password || !form.rPassword) {
      toast.error("Please complete all inputs.");
    } else if (form.password !== form.rPassword) {
      toast.error("Confirm Password is not matched.");
    } else {
      const res = await axios.post(`${SERVER_URI}/auth/resetPassword`, {
        email,
        token,
        password: form.password,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        router.push("/auth/login");
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
          type="password"
          placeholder="New Password"
          value={form.password}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={form.rPassword}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, rPassword: e.target.value }))
          }
        />
      </Styled.LoginFormGroup>
      <Styled.SignInButton onClick={handleReset}>
        Reset Password
      </Styled.SignInButton>
    </Styled.LoginFormWrapper>
  );
};
