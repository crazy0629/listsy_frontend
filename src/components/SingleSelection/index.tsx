import React, { useState, useEffect, useRef } from "react";
import * as Styled from "./singleSelection.styles";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type Props = {
  label?: string;
  placeholder?: string;
  value?: string;
  data: string[];
  direction?: "top" | "bottom";
  countList?: any;
  type?: any;
  onChange?: (value: string) => void;
};

export const SingleSelection: React.FC<Props> = ({
  data,
  label,
  placeholder,
  direction = "bottom",
  value,
  countList,
  type,
  onChange = () => {},
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
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

  const handleSearch = () => {};

  return (
    <Styled.SelectFormItem ref={ref}>
      {label && <p>{label}</p>}
      <Styled.Select onClick={() => setIsOpen((prev) => !prev)}>
        <span className={value ? "" : "placeholder"}>
          {value || placeholder}
        </span>
        <MdOutlineKeyboardArrowDown size={20} color="#AFAFAF" />
      </Styled.Select>
      <Styled.SelectOptionWrapper
        className={`${isOpen && "open"} ${
          direction === "top" && "direction-top"
        }`}
      >
        <div className="search-wrapper">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search..."
          />
        </div>
        {data
          .filter((f) => f.toLowerCase().includes(search.toLowerCase()))
          .map((item, key) => (
            <p
              key={key}
              onClick={() => {
                onChange(item);
                setIsOpen(false);
              }}
            >
              <span className="checkbox-label">{item}</span>
              {countList &&
                countList.length > 0 &&
                type == "itemSearchRange" && (
                  <span>({countList[key].distance})</span>
                )}
              {countList && countList.length > 0 && type == "itemType" && (
                <span>({countList[key].count})</span>
              )}
            </p>
          ))}
      </Styled.SelectOptionWrapper>
    </Styled.SelectFormItem>
  );
};
