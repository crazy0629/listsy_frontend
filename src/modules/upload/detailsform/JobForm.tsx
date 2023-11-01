import React, { useContext, useState } from "react";
import * as Styled from "./details.styles";
import {
  LocationSelectWrapper,
  PriceInputWrapper,
  UploadAssetWrapper,
} from "../upload.styles";
import { SingleSelection } from "@/components";
import { MdClose, MdUpload } from "react-icons/md";
import { formatBytes } from "@/utils";
import { toast } from "react-toastify";
import { Auth as AuthContext } from "@/context/contexts";
import axios from "axios";
import { SERVER_URI } from "@/config";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";

type Props = {
  onFinish: () => void;
};

export const JobForm: React.FC<Props> = ({ onFinish }) => {
  const [files, setFiles] = useState<any[]>([]);
  const { authContext } = useContext<any>(AuthContext);
  const [form, setForm] = useState({
    jobTitle: "",
    jobDescription: "",
    price: "0",
    priceUnit: "$",
    paidType: "",
    workTimeType: "",
    workRemoteType: "",
    jobIndustry: "",
  });
  const [location, setLocation] = useState({
    addressCountry: "",
    addressState: "",
    addressCity: "",
  });
  const [countryid, setCountryid] = useState(0);
  const [stateid, setstateid] = useState(0);

  const handleSave = async () => {
    if (!form.jobTitle) {
      toast.error("Enter the Job Title!");
    } else if (!form.jobDescription) {
      toast.error("Enter the Job Description!");
    } else if (!form.jobIndustry) {
      toast.error("Select the Job Industry!");
    } else if (!form.paidType) {
      toast.error("Select Paid Type!");
    } else if (!form.price) {
      toast.error("Enter the budget!");
    } else if (!form.workTimeType) {
      toast.error("Enter the Flexability!");
    } else if (!form.workRemoteType) {
      toast.error("Enter the Job Type!");
    } else {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("jobFiles", files[i]);
      }
      formData.append("userId", authContext?.user?.id);
      formData.append("jobTitle", form.jobTitle);
      formData.append("jobDescription", form.jobDescription);
      formData.append("paidType", form.paidType);
      formData.append("price", form.price);
      formData.append("workTimeType", form.workTimeType);
      formData.append("workRemoteType", form.workRemoteType);
      formData.append("jobIndustry", form.jobIndustry);
      formData.append("priceUnit", form.priceUnit);
      formData.append("postDate", Date.now().toString());
      formData.append("addressCountry", location.addressCountry);
      formData.append("addressState", location.addressState);
      formData.append("addressCity", location.addressCity);
      const res = await axios.post(`${SERVER_URI}/job/loadJobInfo`, formData);
      if (res.data.success) {
        toast.success(res.data.message);
        onFinish();
      } else {
        toast.error(res.data.message);
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFiles([...files, ...Array.from(e.target.files)]);
    }
  };
  return (
    <Styled.FormContainer>
      <Styled.TextAreaFormItem height={80}>
        <p>{"Job Title (required)"}</p>
        <textarea
          placeholder="Enter the Job title."
          onChange={(e) =>
            e.target.value.length <= 100 &&
            setForm((prev) => ({ ...prev, jobTitle: e.target.value }))
          }
          value={form.jobTitle}
        ></textarea>
        <span>{form.jobTitle.length} / 100</span>
      </Styled.TextAreaFormItem>
      <Styled.TextAreaFormItem height={200}>
        <p>{"Job Description (required)"}</p>
        <textarea
          placeholder="Enter the Job Description."
          onChange={(e) =>
            e.target.value.length <= 5000 &&
            setForm((prev) => ({ ...prev, jobDescription: e.target.value }))
          }
          value={form.jobDescription}
        ></textarea>
        <span>{form.jobDescription.length} / 5000</span>
      </Styled.TextAreaFormItem>
      <SingleSelection
        data={[
          "Accountancy & Accounting",
          "Banking",
          "Customer Services",
          "Environmental",
          "IT",
        ]}
        label="Job Industry"
        value={form.jobIndustry}
        placeholder="Select Job Industry"
        onChange={(value) =>
          setForm((prev) => ({ ...prev, jobIndustry: value }))
        }
      />
      <Styled.FormGroup>
        <SingleSelection
          data={["Hourly based", "Fixed Price"]}
          label="Paid Type"
          value={form.paidType}
          placeholder="Select Paid Type"
          onChange={(value) =>
            setForm((prev) => ({ ...prev, paidType: value }))
          }
        />
        <PriceInputWrapper>
          <p>Budget</p>
          <div>
            <select
              value={form.priceUnit}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, priceUnit: e.target.value }))
              }
            >
              <option value="$">$</option>
              <option value="€">€</option>
              <option value="£">£</option>
              <option value="¥">¥</option>
              <option value="₣">₣</option>
              <option value="₹">₹</option>
            </select>
            <input
              type="number"
              onChange={(e) =>
                setForm((prev) => ({ ...prev, price: e.target.value }))
              }
              value={form.price}
            />
          </div>
        </PriceInputWrapper>
      </Styled.FormGroup>
      <Styled.FormGroup>
        <SingleSelection
          data={["Full Time", "Part Time"]}
          label="Flexability"
          value={form.workTimeType}
          placeholder="Select Flexability"
          onChange={(value) =>
            setForm((prev) => ({ ...prev, workTimeType: value }))
          }
        />
        <SingleSelection
          data={["Remote", "Onsite", "Hybrid"]}
          label="Job Type"
          value={form.workRemoteType}
          placeholder="Select Job Type"
          onChange={(value) =>
            setForm((prev) => ({ ...prev, workRemoteType: value }))
          }
        />
      </Styled.FormGroup>
      <Styled.FormGroup>
        <LocationSelectWrapper style={{ marginBottom: 0 }}>
          <p>Country</p>
          <CountrySelect
            onChange={(e: any) => {
              setCountryid(e.id);
              setstateid(0);
              setLocation({
                addressCountry: e.name,
                addressCity: "",
                addressState: "",
              });
            }}
            showFlag={false}
            placeHolder="Select Country"
          />
        </LocationSelectWrapper>
        <LocationSelectWrapper style={{ marginBottom: 0 }}>
          <p>State</p>
          <StateSelect
            countryid={countryid}
            onChange={(e: any) => {
              if (location.addressCountry) {
                setstateid(e.id);
                setLocation((prev) => ({
                  ...prev,
                  addressState: e.name,
                  addressCity: "",
                }));
              } else {
                toast.error("Select Country first.");
              }
            }}
            placeHolder="Select State"
          />
        </LocationSelectWrapper>
      </Styled.FormGroup>
      <Styled.FormGroup>
        <LocationSelectWrapper style={{ marginBottom: 0 }}>
          <p>City</p>
          <CitySelect
            countryid={countryid}
            stateid={stateid}
            onChange={(e: any) => {
              setLocation((prev) => ({
                ...prev,
                addressCity: e.name,
              }));
            }}
            placeHolder="Select City"
          />
        </LocationSelectWrapper>
      </Styled.FormGroup>
      <Styled.FormGroup>
        <UploadAssetWrapper
          htmlFor="upload-thumbnail"
          style={{
            margin: 0,
            maxWidth: "100%",
            width: "100%",
            height: "240px",
            padding: "0",
            borderRadius: 0,
          }}
        >
          <span>
            <MdUpload size={24} color="#AFAFAF" />
          </span>
          <h3>Select the files to upload</h3>
          <p>Your files will be private until you publish them.</p>
          <div className="button">Select files</div>
          <input
            type="file"
            id="upload-thumbnail"
            style={{ display: "none" }}
            onChange={handleFileChange}
            accept={"*"}
            multiple
          />
        </UploadAssetWrapper>
        <Styled.UploadedFilesWrapper>
          {files.length ? (
            files.map((item: any, key: number) => (
              <div key={key}>
                <p>
                  <b>{item.name}</b>
                  <span>{formatBytes(item.size)}</span>
                </p>
                <MdClose
                  onClick={() =>
                    setFiles((prev) => prev.filter((f, i) => i !== key))
                  }
                />
              </div>
            ))
          ) : (
            <h3>There are no files uploaded.</h3>
          )}
        </Styled.UploadedFilesWrapper>
      </Styled.FormGroup>
      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
