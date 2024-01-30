import React from "react";
import * as Styled from "./inputRange.styles";

type InputRangeProps = {
  prefix1?: string;
  prefix2?: string;
  suffix?: string | number;
  type1: "number" | "text" | "password";
  type2: "number" | "text" | "password";
  value1: string;
  value2: string;
  placeholder1?: string;
  placeholder2?: string;
  onChange1?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange2?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputRange: React.FC<InputRangeProps> = ({
  type1 = "number",
  type2 = "number",
  value1,
  value2,
  onChange1,
  onChange2,
  placeholder1,
  placeholder2,
  prefix1,
  prefix2,
  suffix,
}) => {
  return (
    <Styled.InputRangeWrapper>
      <span className="prefix">{prefix1}</span>
      <input
        type={type1}
        placeholder={placeholder1}
        value={value1}
        onChange={onChange1}
      />
      <span>&nbsp;-&nbsp;</span>
      <span className="prefix">{prefix2}</span>
      <input
        type={type2}
        placeholder={placeholder2}
        value={value2}
        onChange={onChange2}
      />
      <span className="suffix">({suffix})</span>
    </Styled.InputRangeWrapper>
  );
};
