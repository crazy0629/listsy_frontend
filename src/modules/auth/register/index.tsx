import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import * as Comp from "@/components";
import * as Styled from "../auth.styles";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { SERVER_URI } from "@/config";
import PhoneInput from "react-phone-input-2";
import axios from "axios";

export const RegisterForm: React.FC = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    email: "",
    telephoneNumber: "",
    password: "",
    rPassword: "",
  });

  const handleRegister = async () => {
    if (
      !form.fName ||
      !form.lName ||
      !form.email ||
      !form.password ||
      !form.rPassword ||
      !form.telephoneNumber
    ) {
      toast.error("Please complete all inputs.");
    } else if (form.password !== form.rPassword) {
      toast.error("Confirm password is not match.");
    } else {
      const res = await axios.post(`${SERVER_URI}/auth/signup`, {
        firstName: form.fName,
        lastName: form.lName,
        email: form.email,
        password: form.password,
        telephoneNumber: form.telephoneNumber,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        router.push(`/auth/resend-email?email=${form.email}`);
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
        <div className="form-group">
          <input
            type="text"
            placeholder="First Name"
            value={form.fName}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, fName: e.target.value }))
            }
          />
          <input
            type="text"
            placeholder="Last Name"
            value={form.lName}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, lName: e.target.value }))
            }
          />
        </div>
        <input
          type="text"
          placeholder="Email"
          value={form.email}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <PhoneInput
          specialLabel={""}
          country={"us"}
          // disableDropdown={!editable}
          // disabled={!editable}
          onChange={(value) =>
            setForm((prev) => ({ ...prev, telephoneNumber: value }))
          }
          value={form.telephoneNumber}
        />
        <input
          type="password"
          placeholder="Password"
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
      <Styled.SignInButton onClick={handleRegister}>
        Sign Up
      </Styled.SignInButton>
      <Styled.OrDivider>Or</Styled.OrDivider>
      <Comp.SocialButtonGroup />
      <h6>
        {"Already have an account? Please "}
        <Link href={"/auth/login"}>Sign in</Link>
        {" now."}
      </h6>
    </Styled.LoginFormWrapper>
  );
};
