import React from "react";
import * as Styled from "./index.style";

type InputComponentProps = {
  value: string;
  placeholder?: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputComponent: React.FC<InputComponentProps> = ({
  value,
  placeholder,
  label,
  onChange,
}) => {
  return (
    <Styled.InputStyleWrapper>
      <div>
        <span>{label}</span>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </Styled.InputStyleWrapper>
  );
};
