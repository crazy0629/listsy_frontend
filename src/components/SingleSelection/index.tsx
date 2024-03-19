import React, { useState, useEffect, useRef } from "react";
import * as Styled from "./singleSelection.styles";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

type Props = {
  label?: string | React.ReactNode;
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

  return (
    <Styled.SelectFormItem ref={ref}>
      {label && <p>{label}</p>}
      <Styled.Select onClick={() => setIsOpen((prev) => !prev)}>
        <span className={value ? "" : "placeholder"}>
          {(value === "Not Listed" ? "Cannot Find  My Option" : value) ||
            placeholder}
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
        {data &&
          data
            .filter((f) => f.toLowerCase().includes(search.toLowerCase()))
            .map((item, key) => (
              <p
                key={key}
                onClick={() => {
                  onChange(item);
                  setIsOpen(false);
                }}
              >
                <span
                  className="checkbox-label"
                  style={{ color: item === "Not Listed" ? "red" : "#000" }}
                >
                  {item === "Not Listed" ? "Cannot Find  My Option" : item}
                </span>
                {countList &&
                  countList.length > 0 &&
                  type == "itemSearchRange" && (
                    <span>({countList[key].distance})</span>
                  )}
                {countList && countList.length > 0 && type == "itemType" && (
                  <span>({countList[key].count})</span>
                )}
                {item === "All" ? (
                  <span>
                    (
                    {countList
                      .map((item) => item.count)
                      .reduce((prev, next) => Number(prev) + Number(next), 0)}
                    )
                  </span>
                ) : (
                  countList &&
                  countList.length > 0 &&
                  type == "itemSubCategory" && (
                    <span>
                      (
                      {
                        countList.filter((f) => f.itemSubCategory === item)[0]
                          ?.count
                      }
                      )
                    </span>
                  )
                )}
              </p>
            ))}
      </Styled.SelectOptionWrapper>
    </Styled.SelectFormItem>
  );
};
