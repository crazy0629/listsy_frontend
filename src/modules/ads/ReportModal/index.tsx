import React, { useContext, useEffect, useState } from "react";
import * as Styled from "./styles";
import { MdClose } from "react-icons/md";
import { ConfirmModal, SingleSelection } from "@/components";
import { Auth as AuthContext } from "@/context/contexts";
import axios from "axios";
import { SERVER_URI } from "@/config";
import { toast } from "react-toastify";

type ReportModalProps = {
  open: boolean;
  onClose: () => void;
  adId: string | string[];
};

const reportModal = [
  {
    title: "Other Reason",
    description: "",
  },
  {
    title: "Inappropriate Content",
    description: "Content that is offensive or not suitable for our community.",
  },
  {
    title: "Scam or Fraud",
    description: "Listings that appear deceitful or intended to scam users.",
  },
  {
    title: "Misleading or False Information",
    description: "Information that is incorrect or intentionally deceptive.",
  },
  {
    title: "Sold or No Longer Available",
    description: "Items that have already been sold but are still listed.",
  },
  {
    title: "Harassment or Hate Speech",
    description:
      "Content that promotes harassment or discriminates against individuals or groups.",
  },
  {
    title: "Intellectual Property Violation",
    description:
      "Listings that infringe on someone else's intellectual property rights.",
  },
  {
    title: "It's Spam",
    description: "Content that is unsolicited or repetitive.",
  },
];

export const ReportModal: React.FC<ReportModalProps> = ({
  open,
  onClose,
  adId,
}) => {
  const { authContext } = useContext<any>(AuthContext);
  const [form, setForm] = useState({
    mainReason: "",
    description: "",
    optionalInfo: "",
  });
  const [confirm, setConfirm] = useState(false);

  useEffect(() => {
    setForm({
      mainReason: "",
      description: "",
      optionalInfo: "",
    });
  }, [open]);

  const handleReport = async () => {
    if (authContext.user) {
      if (form.mainReason === "") {
        toast.error("Please select a reason!");
        return;
      } else {
        const res = await axios.post(`${SERVER_URI}/report/reportAd`, {
          adId,
          ...form,
          userId: authContext.user?.id,
        });
        if (res.data.success) {
          onClose();
          setConfirm(true);
        } else {
          toast.error(res.data.message);
        }
      }
    } else {
      toast.error("Please login first!");
    }
  };

  const handleConfirmCancel = () => {
    setConfirm(false);
    onClose();
  };

  return (
    <>
      <ConfirmModal
        onCancel={handleConfirmCancel}
        isConfirm={false}
        open={confirm}
        type="success"
        content="Thank you for your report. We take these issues seriously and will investigate promptly. We're committed to keeping our community safe and appreciate your help in doing so."
        onOk={handleConfirmCancel}
      />
      <Styled.ReportModalWrapper className={open ? "open" : ""}>
        <Styled.ReportModalContainer>
          <Styled.ModalHeader>
            <p>Report</p>
            <MdClose size={24} onClick={onClose} />
          </Styled.ModalHeader>
          <Styled.ModalBody>
            <SingleSelection
              data={reportModal.map((item) => item.title)}
              label="Report Reasons*"
              placeholder="Select Report Reasons"
              value={form.mainReason}
              onChange={(value) => {
                setForm((prev) => ({
                  ...prev,
                  mainReason: value,
                  description: reportModal.filter((f) => f.title === value)[0]
                    .description,
                }));
              }}
            />
            <Styled.ReasonDescription>
              {form.description}
            </Styled.ReasonDescription>
            <Styled.TextAreaFormItem>
              <p>{"Additional Details"}</p>
              <textarea
                placeholder="Write additional details"
                onChange={(e) =>
                  e.target.value.length <= 5000 &&
                  setForm((prev) => ({
                    ...prev,
                    optionalInfo: e.target.value,
                  }))
                }
                value={form.optionalInfo}
              ></textarea>
              <span>{form.optionalInfo.length} / 5000</span>
            </Styled.TextAreaFormItem>
          </Styled.ModalBody>
          <Styled.ModalFooter>
            <button onClick={onClose}>Cancel</button>
            <button className="report" onClick={handleReport}>
              Report
            </button>
          </Styled.ModalFooter>
        </Styled.ReportModalContainer>
        <Styled.ReportModalOverlay onClick={onClose} />
      </Styled.ReportModalWrapper>
    </>
  );
};
