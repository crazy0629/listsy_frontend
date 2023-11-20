import React, { useState, useEffect } from "react";
import * as Styled from "./location.styles";
import { MdClose } from "react-icons/md";
import { SingleSelection } from "@/components";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const LocationModal: React.FC<Props> = ({ open, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Styled.LocationModalWrapper className={open ? "open" : ""}>
      <Styled.LocationModalContainer>
        <Styled.LocationModalHeader>
          <h3>Please choose location</h3>
          <MdClose
            size={20}
            color="#AFAFAF"
            onClick={() => {
              handleClose();
            }}
          />
        </Styled.LocationModalHeader>
        <Styled.LocationModalBody>
          <div>
            <SingleSelection
              data={["Model1", "Model2"]}
              label="Country"
              placeholder="Select Country"
              // value={form.tenure}
              // onChange={(value) =>
              //   setForm((prev) => ({ ...prev, tenure: value }))
              // }
            />
          </div>
          <div>
            <SingleSelection
              data={["Model1", "Model2"]}
              label="State"
              placeholder="Select State"
              // value={form.tenure}
              // onChange={(value) =>
              //   setForm((prev) => ({ ...prev, tenure: value }))
              // }
            />
          </div>
          <div>
            <SingleSelection
              data={["Model1", "Model2"]}
              label="City"
              placeholder="Select City"
              // value={form.tenure}
              // onChange={(value) =>
              //   setForm((prev) => ({ ...prev, tenure: value }))
              // }
            />
          </div>
        </Styled.LocationModalBody>
      </Styled.LocationModalContainer>
      <Styled.LocationModalOverlay onClick={handleClose} />
    </Styled.LocationModalWrapper>
  );
};
