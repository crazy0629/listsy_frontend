import React from "react";
import { BiCheckCircle, BiErrorCircle } from "react-icons/bi";
import * as Styled from "./confirmModal.styles";
import type { IConfirmModalProps } from "@/types";

const icons = {
  success: <BiCheckCircle size={60} color="#8bc34a" />,
  warning: <BiErrorCircle size={60} color="#ffeb3b" />,
  error: <BiErrorCircle size={60} color="#f50057" />,
};

export const ConfirmModal: React.FC<IConfirmModalProps> = ({
  onCancel,
  onOk,
  open,
  type,
  okText,
  cancelText,
  description,
  title,
  content,
}) => {
  return (
    <Styled.ConfirmModalWrapper className={open ? "open" : ""}>
      <Styled.ConfirmModalContainer className={open ? "open" : ""}>
        <span>{icons[type]}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        {content && content}
        <Styled.ActionGroup>
          <button onClick={onCancel} className="cancel">
            {cancelText ? cancelText : "Cancel"}
          </button>
          <button onClick={onOk}>{okText ? okText : "Ok"}</button>
        </Styled.ActionGroup>
      </Styled.ConfirmModalContainer>
      <Styled.ModalOverlay className={open ? "open" : ""} />
    </Styled.ConfirmModalWrapper>
  );
};
