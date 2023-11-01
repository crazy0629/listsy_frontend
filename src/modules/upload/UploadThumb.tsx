import React, { useState } from "react";
import * as Styled from "./upload.styles";
import { MdClose, MdUpload } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { HiPlus } from "react-icons/hi";
import axios from "axios";
import { SERVER_URI } from "@/config";
import { toast } from "react-toastify";

type Props = { adId: string; onFinish: () => void };

export const UploadThumb: React.FC<Props> = ({ adId, onFinish }) => {
  const [files, setFiles] = useState<any[]>([]);
  const [tempFiles, setTempFiles] = useState<string[]>([]);
  const [selected, setSelected] = useState(0);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFiles(Array.from(e.target.files));
      setTempFiles(
        Array.from(e.target.files).map((item: any) => {
          return URL.createObjectURL(item);
        })
      );
    }
  };

  const handleRemove = () => {
    setTempFiles((prev) => prev.filter((f, i) => i !== selected));
    setFiles((prev) => prev.filter((f, i) => i !== selected));
    setSelected(0);
  };

  const handleMoreFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFiles([...files, ...Array.from(e.target.files)]);
      setTempFiles([
        ...tempFiles,
        ...Array.from(e.target.files).map((item: any) => {
          return URL.createObjectURL(item);
        }),
      ]);
    }
  };

  const handleSave = async () => {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("images", files[i]);
    }
    formData.append("adId", adId);
    const res = await axios.post(`${SERVER_URI}/asset/uploadImages`, formData);
    if (res.data.success) {
      toast.success(res.data.message);
      onFinish();
    } else {
      toast.error(res.data.message);
    }
  };

  return (
    <>
      {tempFiles.length === 0 ? (
        <Styled.UploadAssetWrapper htmlFor="upload-thumbnail">
          <span>
            <MdUpload size={24} color="#AFAFAF" />
          </span>
          <h3>Select the thumbnails to upload</h3>
          <p>Your thumbnail files will be private until you publish them.</p>
          <div className="button">Select files</div>
          <input
            type="file"
            id="upload-thumbnail"
            style={{ display: "none" }}
            onChange={handleFileChange}
            accept={"image/*"}
            multiple
          />
        </Styled.UploadAssetWrapper>
      ) : (
        <Styled.ImagePreview>
          <Image
            src={tempFiles[selected]}
            alt="thumbnail-preview"
            width={400}
            height={300}
          />
          <MdClose size={50} color={"#fff"} onClick={handleRemove} />
        </Styled.ImagePreview>
      )}
      {tempFiles.length > 0 && (
        <Styled.ImagesPreviewWrapper>
          <Swiper
            spaceBetween={20}
            slidesPerView={"auto"}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {tempFiles.map((item, key) => (
              <SwiperSlide
                key={key}
                onClick={() => setSelected(key)}
                className={selected === key ? "selected" : ""}
              >
                <Image
                  src={item}
                  alt={"thumbnails" + key}
                  width={150}
                  height={150}
                />
              </SwiperSlide>
            ))}
            <SwiperSlide className="add-more-file">
              <label htmlFor="upload-more-thumbnail">
                <span>
                  <HiPlus size={40} color="#AFAFAF" />
                </span>
                <input
                  type="file"
                  id="upload-more-thumbnail"
                  style={{ display: "none" }}
                  onChange={handleMoreFiles}
                  accept={"image/*"}
                  multiple
                />
              </label>
            </SwiperSlide>
          </Swiper>
          <Styled.SaveButtonWrapper>
            <button onClick={handleSave}>Save</button>
          </Styled.SaveButtonWrapper>
        </Styled.ImagesPreviewWrapper>
      )}
    </>
  );
};
