import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import PhoneInput from "react-phone-input-2";
import { Auth as AuthContext } from "@/context/contexts";
import * as Styled from "./profile.styles";
import { SERVER_URI } from "@/config";
import { isValidPhoneNumber } from "libphonenumber-js";

export const ProfileSetting: React.FC = () => {
  const { authContext, setAuthContext } = useContext<any>(AuthContext);
  const [phoneNumberShare, setPhoneNumberShare] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    id: "",
    firstName: "",
    lastName: "",
    userName: "",
    bio: "",
    telephoneNumber: "",
  });
  const [form, setForm] = useState({
    id: "",
    firstName: "",
    lastName: "",
    userName: "",
    bio: "",
    telephoneNumber: "",
  });
  const [editable, setEditable] = useState(false);

  useEffect(() => {
    if (authContext.user) {
      setPhoneNumberShare(!authContext.user.phoneNumberShare);
      setForm(authContext.user);
      setCurrentUser(authContext.user);
    }
  }, [authContext]);

  useEffect(() => {}, [phoneNumberShare]);

  const handlePhoneNumberShare = async (event) => {
    setPhoneNumberShare((prev) => !prev);

    const res = await axios.post(
      `${SERVER_URI}/profile/changePhoneNumberShare`,
      {
        userId: form.id,
        phoneNumberShare: phoneNumberShare,
      }
    );
    if (res.data.success) {
      setEditable(false);
      setAuthContext((prev: any) => ({ ...prev, user: res.data.data }));
      localStorage.setItem("token", res.data.token);
    } else {
      toast.error(res.data.message);
    }
  };

  const handleSave = async () => {
    if (!form.firstName || !form.lastName) {
      toast.error("First name and Last name is Required.");
    } else {
      const res = await axios.post(`${SERVER_URI}/profile/editProfile`, {
        ...form,
        userId: form.id,
      });
      if (res.data.success) {
        toast.success(res.data.message);
        setEditable(false);
        setAuthContext((prev: any) => ({ ...prev, user: res.data.data }));
        localStorage.setItem("token", res.data.token);
      } else {
        toast.error(res.data.message);
      }
    }
  };

  const handleEditCancel = () => {
    setForm(currentUser);
    setEditable(false);
  };

  return (
    <Styled.SettingPageWrapper>
      <h1>Profile</h1>
      <Styled.SettingFormWrapper>
        <Styled.FormGroup>
          <input
            type="text"
            placeholder="First Name"
            value={form.firstName}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, firstName: e.target.value }))
            }
            readOnly={!editable}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={form.lastName}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, lastName: e.target.value }))
            }
            readOnly={!editable}
          />
        </Styled.FormGroup>
        <Styled.FormGroup>
          <input
            type="text"
            placeholder="Username"
            value={form.userName}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, userName: e.target.value }))
            }
            readOnly={!editable}
          />
          <p>{"Username can't contains special symbols. e.g. %,^,(,),..."}</p>
        </Styled.FormGroup>
        <textarea
          name=""
          id=""
          placeholder="Bio"
          value={form.bio}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, bio: e.target.value }))
          }
          readOnly={!editable}
        ></textarea>
        {authContext.user.telephoneNumber && (
          <Styled.FormGroup>
            <div>
              <PhoneInput
                specialLabel={""}
                country={"us"}
                disableDropdown={!editable}
                disabled={!editable}
                onChange={(value) =>
                  setForm((prev) => ({ ...prev, telephoneNumber: value }))
                }
                value={form.telephoneNumber}
              />
            </div>
            <div className="phoneNumberShare">
              <input
                type="checkbox"
                name="share"
                id="share"
                checked={phoneNumberShare}
                onChange={(e) => {
                  handlePhoneNumberShare(e);
                }}
              />
              <label htmlFor="share"> Keep phone number hidden on Ad</label>
            </div>
          </Styled.FormGroup>
        )}
      </Styled.SettingFormWrapper>
      {editable ? (
        <Styled.EditButtonGroup>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleEditCancel} className="cancel">
            Cancel
          </button>
        </Styled.EditButtonGroup>
      ) : (
        <button onClick={() => setEditable(true)}>Edit</button>
      )}
    </Styled.SettingPageWrapper>
  );
};
