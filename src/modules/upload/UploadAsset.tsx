import React, { useState } from "react";
import * as Styled from "./upload.styles";
import { MdClose, MdUpload } from "react-icons/md";
import { formatBytes } from "@/utils";
import axios from "axios";
import { SERVER_URI } from "@/config";
import { toast } from "react-toastify";

type Props = {
  fileType: string;
  onNext: (adLink: string, adId: string) => void;
};

export const UploadAsset: React.FC<Props> = ({ fileType, onNext }) => {
  const [file, setFile] = useState<any>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      const file = e.target.files[0];

      const video = document.createElement("video");
      video.preload = "metadata";

      const reader = new FileReader();
      reader.onload = (event) => {
        video.src = event.target.result as string;

        video.onloadedmetadata = () => {
          window.URL.revokeObjectURL(video.src);
          if (video.duration < 120) {
            setFile(file);
          } else {
            e.target.value = "";
            toast.error(
              "Oops! It looks like your video exceeds the 2-minute maximum length.Please trim your video to 2 minutes or less and try uploading again. Need help? Check out our video editing tips [link to tips]. Thank you for your understanding"
            );
          }
        };
      };

      reader.readAsDataURL(file);
    }
  };

  const handleRemoveFile = () => {
    setFile(null);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("fileType", fileType);
    formData.append("ad", file);
    formData.append("uploadDate", Date.now().toString());
    const res = await axios.post(`${SERVER_URI}/asset/upload`, formData);
    if (res.data.success) {
      toast.success(res.data.message);
      onNext(res.data.model.adFileName, res.data.model._id);
    } else {
      toast.error(res.data.message);
    }
  };

  return (
    <>
      {file ? (
        <Styled.UploadedFileWrapper>
          <h3>File Selected</h3>
          <div>
            <h4>
              <p>{file?.name}</p>
              <span>{formatBytes(file?.size)}</span>
            </h4>
            <MdClose size={20} color="#AFAFAF" onClick={handleRemoveFile} />
          </div>
          <button onClick={handleUpload}>Upload File</button>
        </Styled.UploadedFileWrapper>
      ) : (
        <Styled.UploadAssetWrapper htmlFor="upload-asset">
          <span>
            <MdUpload size={24} color="#AFAFAF" />
          </span>
          <h3>Upload Your Main Video</h3>
          <p className="timeLimit">Up to 2 mins</p>
          <div className="button">Select file</div>
          <input
            type="file"
            id="upload-asset"
            style={{ display: "none" }}
            onChange={handleFileChange}
            accept={fileType === "video" ? "video/*" : "audio/*"}
          />
        </Styled.UploadAssetWrapper>
      )}
    </>
  );
};
