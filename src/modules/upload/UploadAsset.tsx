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

      // Create a video element
      const video = document.createElement("video");
      video.preload = "metadata";

      // Create a file reader
      const reader = new FileReader();
      reader.onload = (event) => {
        video.src = event.target.result as string;

        // Load metadata of the video
        video.onloadedmetadata = () => {
          window.URL.revokeObjectURL(video.src);
          // Check if video duration is less than 60 seconds
          if (video.duration < 60) {
            setFile(file); // If less than 60 secs, set the file
          } else {
            // Handle video longer than 60 seconds here
            toast.error("Video is longer than 60 seconds!");
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
          <h3>Select the {fileType} file to upload</h3>
          <p>Your video files will be private until you publish them.</p>
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
