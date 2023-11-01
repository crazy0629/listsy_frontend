import React, { useState, useEffect, useContext } from "react";
import * as Styled from "./main.styles";
import { MultiSelection } from "@/components";
import axios from "axios";
import { SERVER_UPLOAD_URI, SERVER_URI } from "@/config";
import { toast } from "react-toastify";
import InfiniteScroll from "react-infinite-scroll-component";
import Image from "next/image";
import { calcCompareTime, formatBytes } from "@/utils";
import { MdAttachFile, MdClose } from "react-icons/md";
import { TextAreaFormItem } from "../upload/detailsform/details.styles";
import { Auth as AuthContext } from "@/context/contexts";
import { useRouter } from "next/router";

export const JobsPageSection: React.FC = () => {
  const router = useRouter();
  const [files, setFiles] = useState<any[]>([]);
  const [getIndex, setGetIndex] = useState(0);
  const [isApply, setIsApply] = useState(false);
  const { authContext } = useContext<any>(AuthContext);
  const [data, setData] = useState<any>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isApplied, setIsApplied] = useState(false);
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [coverletter, setCoverletter] = useState("");
  const [loading, setLoading] = useState(false);

  const [filter, setFilter] = useState({
    paidType: [] as string[],
    workTimeType: [] as string[],
    workRemoteType: [] as string[],
    jobIndustry: [] as string[],
  });

  useEffect(() => {
    getData(0);
  }, []);

  const getData = async (index: number) => {
    const res = await axios.post(`${SERVER_URI}/job/getMoreJobInfo`, {
      ...filter,
      index,
    });
    if (res.data.success) {
      // console.log(res.data.data);
      if (index > 0) {
        setData((prev: any) => [...prev, ...res.data.data]);
      } else {
        setData([...res.data.data]);
      }
      if (res.data.data.length < 50) {
        setHasMore(false);
      }
      setGetIndex((prev) => prev + 1);
    } else {
      toast.error(res.data.message);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      setFiles([...files, ...Array.from(e.target.files)]);
    }
  };

  const handleApply = async () => {
    if (authContext?.user) {
      if (isApply) {
        if (!coverletter) {
          toast.error("Please enter the cover letter.");
        } else {
          const formData = new FormData();
          for (let i = 0; i < files.length; i++) {
            formData.append("proposalFiles", files[i]);
          }
          formData.append("proposalContent", coverletter);
          formData.append("sentDate", Date.now().toString());
          formData.append("userId", authContext?.user?.id);
          formData.append("jobId", selectedJob._id);
          const res = await axios.post(`${SERVER_URI}/proposal/send`, formData);
          if (res.data.success) {
            toast.success(res.data.message);
            setIsApplied(true);
            setIsApply(false);
            setCoverletter("");
            setFiles([]);
          } else {
            toast.error(res.data.message);
          }
        }
      } else {
        setIsApply(true);
      }
    } else {
      toast.error("Please sign in to apply this job.");
    }
  };

  const handleListClick = async (jobId: string) => {
    if (authContext?.user) {
      setLoading(true);
      const res = await axios.post(`${SERVER_URI}/proposal/checkIsApplied`, {
        jobId,
        userId: authContext?.user?.id,
      });
      if (res.data.success) {
        setIsApplied(res.data.isApplied);
      } else {
        setIsApplied(false);
      }
      setLoading(false);
    }
  };

  const handleApplyClose = () => {
    setSelectedJob(null);
    setIsApplied(false);
    setCoverletter("");
    setFiles([]);
    setIsApply(false);
  };

  return (
    <Styled.MainPageSectionWrapper>
      <Styled.FilterWrapper>
        <MultiSelection
          data={["Hourly based", "Fixed Price"]}
          placeholder="Select Paid Type"
          value={filter.paidType}
          onChange={(value) =>
            setFilter((prev) => ({ ...prev, paidType: value }))
          }
        />
        <MultiSelection
          data={[
            "Accountancy & Accounting",
            "Banking",
            "Customer Services",
            "Environmental",
            "IT",
          ]}
          placeholder="Select Job Industry"
          value={filter.jobIndustry}
          onChange={(value) =>
            setFilter((prev) => ({ ...prev, jobIndustry: value }))
          }
        />
        <MultiSelection
          data={["Full Time", "Part Time"]}
          placeholder="Select Flexability"
          value={filter.workTimeType}
          onChange={(value) =>
            setFilter((prev) => ({ ...prev, workTimeType: value }))
          }
        />
        <MultiSelection
          data={["Remote", "Onsite", "Hybrid"]}
          value={filter.workRemoteType}
          onChange={(value) =>
            setFilter((prev) => ({ ...prev, workRemoteType: value }))
          }
          placeholder="Select Job Type"
        />
        <button onClick={() => getData(0)}>Search</button>
      </Styled.FilterWrapper>
      <Styled.JobListWrapper>
        <Styled.JobListContainer>
          <InfiniteScroll
            dataLength={data.length}
            next={() => getData(getIndex)}
            hasMore={hasMore}
            endMessage={<></>}
            loader={<h4>Loading...</h4>}
          >
            {data.length > 0 &&
              data.map((item: any, key: number) => (
                <Styled.JobListItemWrapper
                  key={key}
                  onClick={() => {
                    handleListClick(item._id);
                    setSelectedJob(item);
                  }}
                >
                  <div>
                    {item.userId?.avatar ? (
                      <Image
                        src={SERVER_UPLOAD_URI + item.userId?.avatar}
                        alt="avatar"
                        width={40}
                        height={40}
                      />
                    ) : (
                      <span>
                        {item.userId?.firstName[0].toUpperCase() +
                          item.userId?.lastName[0].toUpperCase()}
                      </span>
                    )}
                    <h2>
                      {item.userId?.firstName + " " + item.userId?.lastName}
                      <span>
                        {calcCompareTime(
                          new Date(Date.now()).toString(),
                          item?.postDate
                        )}
                      </span>
                    </h2>
                  </div>
                  <h1>{item.jobTitle}</h1>
                  <p>{item.jobDescription}</p>
                  <h4>
                    {item.priceUnit + " " + item.price}
                    <span>{" / " + item.paidType}</span>
                  </h4>
                </Styled.JobListItemWrapper>
              ))}
          </InfiniteScroll>
        </Styled.JobListContainer>
        {selectedJob && (
          <Styled.JobDetailWrapper>
            <h1>{selectedJob.jobTitle}</h1>
            <div className="job-details">
              <div>
                <span>{selectedJob.workTimeType}</span>
                <span>{selectedJob.workRemoteType}</span>
                <span>{selectedJob.jobIndustry}</span>
              </div>
              <h5>
                {selectedJob.priceUnit + " " + selectedJob.price}
                <span>{" / " + selectedJob.paidType}</span>
              </h5>
            </div>
            <p>{selectedJob.jobDescription}</p>
            {selectedJob?.jobAttachFileName?.length > 0 &&
              selectedJob?.jobAttachFileName.map(
                (item: string, key: number) => (
                  <a
                    href={SERVER_UPLOAD_URI + item}
                    target="_blank"
                    download={true}
                    key={key}
                  >
                    {selectedJob?.attachOriginalName[key]}
                  </a>
                )
              )}
            <Styled.JobApplySection>
              {isApply && (
                <Styled.ApplyForm>
                  <h2>Send your proposal</h2>
                  <TextAreaFormItem height={200}>
                    <p>{"Cover letter"}</p>
                    <textarea
                      placeholder="Type here..."
                      onChange={(e) =>
                        e.target.value.length <= 5000 &&
                        setCoverletter(e.target.value)
                      }
                      value={coverletter}
                    ></textarea>
                    <span>{coverletter.length} / 5000</span>
                  </TextAreaFormItem>
                  <Styled.AttachFile>
                    <label htmlFor="attach-file">
                      <input
                        type="file"
                        hidden
                        id="attach-file"
                        multiple
                        onChange={handleFileChange}
                      />
                      <MdAttachFile />
                      <span>Attachments</span>
                    </label>
                    {files.length > 0 &&
                      files.map((item, key) => (
                        <div key={key}>
                          <p>
                            <b>{item.name}</b>
                            <span>{formatBytes(item.size)}</span>
                          </p>
                          <MdClose
                            onClick={() =>
                              setFiles((prev) =>
                                prev.filter((f, i) => i !== key)
                              )
                            }
                          />
                        </div>
                      ))}
                  </Styled.AttachFile>
                </Styled.ApplyForm>
              )}
              {loading ? (
                <Styled.ApplyButtonWrapper>
                  <span>Wait a moment...</span>
                </Styled.ApplyButtonWrapper>
              ) : (
                <Styled.ApplyButtonWrapper>
                  {isApplied ? (
                    <span>Applied</span>
                  ) : (
                    <button onClick={handleApply}>Apply Now</button>
                  )}
                  <button className="close" onClick={handleApplyClose}>
                    Close
                  </button>
                </Styled.ApplyButtonWrapper>
              )}
            </Styled.JobApplySection>
          </Styled.JobDetailWrapper>
        )}
      </Styled.JobListWrapper>
    </Styled.MainPageSectionWrapper>
  );
};
