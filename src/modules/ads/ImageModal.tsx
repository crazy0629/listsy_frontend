import React, { useState, useEffect } from "react";
import * as Styled from "./ads.styles";
import Image from "next/image";
import { SERVER_UPLOAD_URI } from "@/config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { MdClose } from "react-icons/md";

type Props = {
  data: any[];
  open: boolean;
  onClose: () => void;
  index: number;
};

export const ImageModal: React.FC<Props> = ({ data, index, onClose, open }) => {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setSelected(index);
  }, [open]);

  return (
    <Styled.ImageModalWrapper className={open ? "open" : ""}>
      <Styled.ImageModalContainer>
        <MdClose size={24} onClick={onClose} />
        <Image
          src={SERVER_UPLOAD_URI + data[selected]}
          alt="thumb"
          width={300}
          height={300}
          objectFit="contain"
        />
        <Swiper
          spaceBetween={20}
          slidesPerView={"auto"}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {data.map((item, key) => (
            <SwiperSlide
              key={key}
              onClick={() => setSelected(key)}
              className={selected === key ? "selected" : ""}
            >
              <Image
                src={SERVER_UPLOAD_URI + item}
                alt={"thumbnails" + key}
                width={150}
                height={150}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Styled.ImageModalContainer>
      <Styled.ImageModalOverlay onClick={onClose} />
    </Styled.ImageModalWrapper>
  );
};
