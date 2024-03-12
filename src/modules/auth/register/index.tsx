import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import * as Comp from "@/components";
import * as Styled from "../auth.styles";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { SERVER_URI } from "@/config";
import PhoneInput from "react-phone-input-2";
import axios from "axios";
import {
  MdOutlineCameraAlt,
  MdOutlineFileUpload,
  MdOutlineSell,
} from "react-icons/md";

export const RegisterForm: React.FC = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    fName: "",
    lName: "",
    email: "",
    password: "",
    rPassword: "",
  });

  const handleRegister = async () => {
    if (
      !form.fName ||
      !form.lName ||
      !form.email ||
      !form.password ||
      !form.rPassword
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
    <Styled.RegisterFormWrapper>
      <Styled.RegisterFormDescription>
        <Image
          src="/assets/images/logo.png"
          alt="app logo"
          width={181}
          height={67}
          onClick={() => router.push("/")}
        />
        <h2>Start Your Journey with Listsy in Just a Few Steps:</h2>
        <div>
          <h3>
            <MdOutlineCameraAlt />
            Capture Your Unique Story
          </h3>
          <p>
            {
              "Use your smartphone to shoot a quick video (15 sec - 2 min) of your item. Highlight its features and what makes it special with a homemade video. It's about authenticity, not perfection!"
            }
          </p>
        </div>
        <div>
          <h3>
            <MdOutlineFileUpload />
            Upload with Ease
          </h3>
          <p>
            {
              "Sign in and upload your video and up to 5 photos for free. Bring your item to life from multiple perspectives."
            }
          </p>
        </div>
        <div>
          <h3>
            <MdOutlineSell />
            Sell Without Fees
          </h3>
          <p>
            {
              "Write a brief description, set your price, and post. Your ad goes live immediately, connecting you to our vibrant community, fee-free."
            }
          </p>
        </div>
        <h4>Join Listsy today — Share authentically, sell simply.</h4>
      </Styled.RegisterFormDescription>
      <Styled.RegisterFormGroup>
        <p>Welcome to Listsy!</p>
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
          {/* <PhoneInput
          specialLabel={""}
          country={"us"}
          // disableDropdown={!editable}
          // disabled={!editable}
          onChange={(value) =>
            setForm((prev) => ({ ...prev, telephoneNumber: value }))
          }
          value={form.telephoneNumber}
        /> */}
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
      </Styled.RegisterFormGroup>
    </Styled.RegisterFormWrapper>
  );
};
