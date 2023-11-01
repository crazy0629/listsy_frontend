import React from "react";
import * as Styled from "./upload.styles";
import { JobForm } from "./detailsform/JobForm";

type Props = {
  onFinish: () => void;
};

export const JobPost: React.FC<Props> = ({ onFinish }) => {
  return (
    <Styled.DetailsWrapper>
      <JobForm onFinish={onFinish} />
    </Styled.DetailsWrapper>
  );
};
