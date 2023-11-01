import styled from "styled-components";

export const UploadModalWrapper = styled.div<{ open?: string }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  transition: all 0.3s;
  opacity: 0;
  visibility: hidden;
  &.open {
    opacity: 1;
    visibility: visible;
  }
  z-index: 999;
`;

export const UploadModalContainer = styled.div`
  box-shadow: 0px 18px 40px 0px rgba(232, 232, 232, 0.25);
  max-height: 90%;
  height: fit-content;
  overflow: auto;
  margin-top: 5vh;
  background: #fff;
  max-width: 900px;
  width: 100%;
  overflow: auto;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

export const UploadModalOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #00000050;
`;

export const UploadModalHeader = styled.div`
  border-bottom: 1px solid #afafaf;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  svg {
    cursor: pointer;
  }
`;

export const KindSelectWrapper = styled.div`
  max-width: 500px;
  width: 95%;
  margin: auto;
  padding: 28px 0;
  h1 {
    color: #000;
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 30px;
  }
  div {
    & > :not(:first-child) {
      margin-top: 16px;
    }
    label {
      display: flex;
      align-items: center;
      width: fit-content;
      input {
        width: 16px;
        height: 16px;
        accent-color: #000;
      }
      span {
        color: #000;
        font-size: 14px;
        font-weight: 400;
        line-height: 20.4px; /* 145.714% */
        margin-left: 24px;
      }
    }
  }
`;

export const UploadActionButtonWrapper = styled.div`
  max-width: 500px;
  width: 95%;
  margin: auto;
  padding-bottom: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 30px;
    width: 85px;
    outline: none;
    border: none;
    font-size: 14px;
    font-weight: 400;
    border-radius: 5px;
    &.next {
      color: #fff;
      background: #ff6f00;
    }
    &.back {
      color: #ff6f00;
      background: #fff;
      border: 1px solid #ff6f00;
    }
  }
`;

export const UploadAssetWrapper = styled.label`
  max-width: 400px;
  cursor: pointer;
  width: 95%;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px dashed #ededed;
  text-align: center;
  border-radius: 20px;
  margin: 50px auto;
  span {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;
    border-radius: 200px;
    background: #eaeaea;
    margin-bottom: 16px;
  }
  h3 {
    color: #000;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 6px;
  }
  p {
    color: #000;
    font-size: 12px;
    font-weight: 300;
    margin-bottom: 16px;
  }
  .button {
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: #ff6f00;
    color: #fff;
    font-size: 12px;
    font-weight: 300;
    width: 100px;
    border: none;
    outline: none;
  }
`;

export const UploadedFileWrapper = styled.div`
  max-width: 400px;
  width: 95%;
  padding: 40px 30px;
  display: flex;
  border-radius: 20px;
  flex-direction: column;
  align-items: center;
  border: 1px dashed #ededed;
  margin: 50px auto;
  div {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 5px 8px;
    margin-bottom: 20px;

    h4 {
      display: flex;
      align-items: center;
      p {
        font-size: 14px;
        font-weight: 500;
      }
      span {
        margin-left: 8px;
        font-weight: 400;
        font-size: 12px;
        color: #afafaf;
      }
    }
  }
  svg {
    cursor: pointer;
  }
  button {
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: #ff6f00;
    color: #fff;
    font-size: 12px;
    font-weight: 300;
    width: 100px;
    border: none;
    cursor: pointer;
    outline: none;
  }
  h3 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 16px;
  }
`;

export const DetailsWrapper = styled.div`
  padding: 24px 16px;
  display: flex;
`;

export const DetailsFormWrapper = styled.div`
  flex: 1;
`;

export const DetailsPreviewWrapper = styled.div`
  width: 350px;
  margin-left: 24px;
`;

export const VideoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  video {
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
`;

export const VideoInfoWrapper = styled.div`
  background: #eaeaea;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
  padding: 12px 10px;
  div {
    width: 80%;
  }
  span {
    color: #000;
    font-size: 10px;
    font-weight: 400;
  }
  p {
    color: #ff6f00;
    font-size: 12px;
    font-weight: 400;
    width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    margin-top: 8px;
  }
  svg {
    cursor: pointer;
  }
`;

export const UploadModalBody = styled.div`
  flex: 1;
  overflow: auto;
`;

export const PriceInputWrapper = styled.div`
  width: 100%;
  p {
    color: #000;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 8px;
  }
  div {
    width: 100%;
    height: 34px;
    display: flex;
    align-items: center;
    select {
      appearance: none;
      outline: none;
      text-align: center;
      height: 100%;
      width: 44px;
      border: none;
      border-radius: 5px 0px 0px 5px;
      background: #eaeaea;
      color: #afafaf;
      font-size: 12px;
      font-weight: 400;
    }
    input {
      padding: 0 8px;
      height: 100%;
      flex: 1;
      border: 1px solid #afafaf;
      border-left: none;
      border-radius: 0 5px 5px 0;
      outline: none;
    }
  }
`;

export const ImagesPreviewWrapper = styled.div`
  padding: 0 30px 30px;

  .swiper-slide {
    cursor: pointer;
    width: 150px;
    height: 150px;
    img {
      object-fit: cover;
      transition: all 0.3s;
      border: 1px solid transparent;
    }
    &:hover {
    }
    &.selected {
      img {
        border: 1px solid #ff6f00;
      }
    }
  }
  .swiper-button-prev,
  .swiper-button-next {
    &::after {
      font-size: 30px !important;
      color: #000000;
      font-weight: 900;
    }
  }
  .add-more-file {
    label {
      cursor: pointer;
      display: flex;
      height: 100%;
      align-items: center;
      justify-content: center;
    }
    border: 1px dashed #ededed;
    height: 150px;
  }
`;

export const ImagePreview = styled.div`
  position: relative;
  display: flex;
  width: fit-content;
  height: fit-content;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    transition: all 0.3s;
    right: 0;
  }
  img {
    object-fit: cover;
  }
  svg {
    position: absolute;
    transition: all 0.3s;
    opacity: 0;
    z-index: 1;
    cursor: pointer;
    visibility: hidden;
  }
  &:hover {
    &::after {
      background: #ffffff50;
      backdrop-filter: blur(1px);
    }
    svg {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const SaveButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button {
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: #ff6f00;
    color: #fff;
    font-size: 12px;
    font-weight: 300;
    width: 100px;
    border: none;
    cursor: pointer;
    outline: none;
  }
`;

export const LocationWrapper = styled.div`
  margin-top: 20px;
`;

export const LocationSelectWrapper = styled.div`
  margin-bottom: 12px;
  & > p {
    color: #000;
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 8px;
  }
  .stdropdown-container {
    border: 1px solid #afafaf !important;
    height: 34px;
    .stdropdown-input {
      padding: 0;
      height: 100%;
      input {
        height: 100%;
        border: none;
        font-size: 12px;
        outline: none;
        font-weight: 400;
        padding: 6px;
        &::placeholder {
          color: #afafaf;
        }
      }
      .stdropdown-tools {
        .stdropdown-tool {
          display: flex;
          padding-right: 6px;
          svg {
            width: 18px;
            height: 18px;
            path {
              fill: #afafaf;
            }
          }
        }
      }
    }
    .stdropdown-menu {
      padding: 6px 0;
      background: #fff;
      box-shadow: 0px 18px 40px 0px rgba(180, 180, 180, 0.25);
      border: none;
      max-height: 300px;
      border-radius: 5px;
      .stdropdown-item {
        color: #000;
        font-size: 12px;
        transition: all 0.3s;
        font-weight: 400;
        padding: 8px 6px;
        &:hover {
          background: #00000010;
        }
        &.selected {
          background: #00000010;
        }
      }
    }
  }
`;
