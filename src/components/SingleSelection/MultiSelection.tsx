import React, { useState, useEffect, useRef } from "react";
import * as Styled from "./singleSelection.styles";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type Props = {
  label?: string;
  placeholder?: string;
  value: string[];
  data: string[];
  direction?: "top" | "bottom";
  onChange?: (value: string[]) => void;
};

export const MultiSelection: React.FC<Props> = ({
  data,
  label,
  placeholder,
  direction = "bottom",
  value,
  onChange = () => {},
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<any>(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (e: any) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <Styled.SelectFormItem ref={ref}>
      {label && <p>{label}</p>}
      <Styled.Select onClick={() => setIsOpen((prev) => !prev)}>
        <span className={value?.length ? "" : "placeholder"}>
          {value?.length
            ? value?.length + " properties are selected"
            : placeholder}
        </span>
        <MdOutlineKeyboardArrowDown size={20} color="#AFAFAF" />
      </Styled.Select>
      <Styled.SelectOptionWrapper
        className={`${isOpen && "open"} ${
          direction === "top" && "direction-top"
        }`}
      >
        {data.map((item, key) => (
          <p
            key={key}
            onClick={() => {
              onChange(
                value.filter((f) => f === item).length > 0
                  ? value.filter((f) => f !== item)
                  : [...value, item]
              );
              //   setIsOpen(false);
            }}
          >
            <input
              type="checkbox"
              checked={value.filter((f) => f === item).length > 0}
              onChange={() => {}}
            />
            <span>{item}</span>
          </p>
        ))}
      </Styled.SelectOptionWrapper>
    </Styled.SelectFormItem>
  );
};
