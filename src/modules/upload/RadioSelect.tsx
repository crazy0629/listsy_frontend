import React from "react";
import * as Styled from "./upload.styles";

type Props = {
  selected: string;
  title: string;
  data: { label: string; key: string }[];
  onChange: (key: string) => void;
};

export const RadioSelect: React.FC<Props> = ({
  data,
  selected,
  title,
  onChange,
}) => {
  return (
    <Styled.KindSelectWrapper>
      <h1>{title}</h1>
      <div>
        {data.map((item, key) => (
          <label
            htmlFor={item.key}
            key={key}
            onClick={() => onChange(item.key)}
          >
            <input
              type="radio"
              id={item.key}
              checked={selected === item.key}
              onChange={() => {}}
            />
            <span>{item.label}</span>
          </label>
        ))}
      </div>
    </Styled.KindSelectWrapper>
  );
};
