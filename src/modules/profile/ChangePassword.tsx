import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import * as Styled from "./profile.styles";
import { SERVER_URI } from "@/config";
import { Auth as AuthContext } from "@/context/contexts";

export const ChangePassword: React.FC = () => {
  const { authContext } = useContext<any>(AuthContext);
  const [form, setForm] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const handleSave = async () => {
    if (!form.confirm || !form.current || !form.new) {
      toast.error("Please complete all inputs.");
    } else if (form.new !== form.confirm) {
      toast.error("Confirm password is not matched.");
    } else {
      const res = await axios.post(`${SERVER_URI}/profile/changePassword`, {
        userId: authContext.user?.id,
        prevPassword: form.current,
        newPassword: form.new,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        setForm({ current: "", new: "", confirm: "" });
      } else {
        toast.error(res.data.message);
      }
    }
  };

  return (
    <Styled.ChangePasswordPageWrapper>
      <h1>Change Your Password</h1>
      <Styled.PasswordInputGroup>
        <input
          type="password"
          placeholder="Current Password"
          value={form.current}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, current: e.target.value }))
          }
        />
        <input
          type="password"
          placeholder="New Password"
          value={form.new}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, new: e.target.value }))
          }
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={form.confirm}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, confirm: e.target.value }))
          }
        />
      </Styled.PasswordInputGroup>
      <button onClick={handleSave}>Save</button>
    </Styled.ChangePasswordPageWrapper>
  );
};
