import React, { useEffect, useState } from "react";
import * as Styled from "../details.styles";
import { MultiSelection, SingleSelection } from "@/components";
import { selectData } from "../DataList/data-service";
import { toast } from "react-toastify";
import moment from "moment";
import TimePicker from "react-awesome-time-picker";

type Props = {
  onSave: (data: any) => void;
  itemCategory: string;
};

export const ServiceDetail: React.FC<Props> = ({ onSave, itemCategory }) => {
  const [form, setForm] = useState({
    itemSubCategory: "",
    providerType: "",
    licenses: [] as string[],
    cancellationPolicy: "",
    dateAvailability: null,
  });

  useEffect(() => {
    setForm({
      itemSubCategory: "",
      providerType: "",
      licenses: [],
      cancellationPolicy: "",
      dateAvailability: null,
    });
  }, [itemCategory]);

  const handleSave = () => {
    if (!form.itemSubCategory) {
      toast.error("Select subcategory");
    } else if (!form.dateAvailability) {
      toast.error("Select Service Date/Availability!");
    } else if (!form.providerType) {
      toast.error("Select Provider Type!");
    } else {
      onSave(form);
    }
  };
  return (
    <Styled.FormContainer>
      <Styled.DateAvailabilityWrapper>
        <p>Date/Availability</p>
        <div>
          <span>Monday :</span>
          <TimePicker
            placeholder="from"
            showSecond={false}
            value={
              form.dateAvailability?.monday?.from
                ? moment(form.dateAvailability?.monday?.from, "HH:mm")
                : null
            }
            onChange={(value) =>
              setForm((prev: any) => ({
                ...prev,
                dateAvailability: {
                  ...prev.dateAvailability,
                  monday: {
                    from: moment(value?.toDate()).format("HH:mm"),
                    to: prev.dateAvailability?.monday?.to,
                  },
                },
              }))
            }
          />
          {" - "}
          <TimePicker
            placeholder="to"
            showSecond={false}
            value={
              form.dateAvailability?.monday?.to
                ? moment(form.dateAvailability?.monday?.to, "HH:mm")
                : null
            }
            onChange={(value) =>
              setForm((prev: any) => ({
                ...prev,
                dateAvailability: {
                  ...prev.dateAvailability,
                  monday: {
                    from: prev.dateAvailability?.monday?.from,
                    to: moment(value?.toDate()).format("HH:mm"),
                  },
                },
              }))
            }
          />
        </div>
        <div>
          <span>Tuesday :</span>
          <TimePicker
            placeholder="from"
            showSecond={false}
            value={
              form.dateAvailability?.tuesday?.from
                ? moment(form.dateAvailability?.tuesday?.from, "HH:mm")
                : null
            }
            onChange={(value) =>
              setForm((prev: any) => ({
                ...prev,
                dateAvailability: {
                  ...prev.dateAvailability,
                  tuesday: {
                    from: moment(value?.toDate()).format("HH:mm"),
                    to: prev.dateAvailability?.tuesday?.to,
                  },
                },
              }))
            }
          />
          {" - "}
          <TimePicker
            placeholder="to"
            showSecond={false}
            value={
              form.dateAvailability?.tuesday?.to
                ? moment(form.dateAvailability?.tuesday?.to, "HH:mm")
                : null
            }
            onChange={(value) =>
              setForm((prev: any) => ({
                ...prev,
                dateAvailability: {
                  ...prev.dateAvailability,
                  tuesday: {
                    from: prev.dateAvailability?.tuesday?.from,
                    to: moment(value?.toDate()).format("HH:mm"),
                  },
                },
              }))
            }
          />
        </div>
        <div>
          <span>Wednesday :</span>
          <TimePicker
            placeholder="from"
            showSecond={false}
            value={
              form.dateAvailability?.wednesday?.from
                ? moment(form.dateAvailability?.wednesday?.from, "HH:mm")
                : null
            }
            onChange={(value) =>
              setForm((prev: any) => ({
                ...prev,
                dateAvailability: {
                  ...prev.dateAvailability,
                  wednesday: {
                    from: moment(value?.toDate()).format("HH:mm"),
                    to: prev.dateAvailability?.wednesday?.to,
                  },
                },
              }))
            }
          />
          {" - "}
          <TimePicker
            placeholder="to"
            showSecond={false}
            value={
              form.dateAvailability?.wednesday?.to
                ? moment(form.dateAvailability?.wednesday?.to, "HH:mm")
                : null
            }
            onChange={(value) =>
              setForm((prev: any) => ({
                ...prev,
                dateAvailability: {
                  ...prev.dateAvailability,
                  wednesday: {
                    from: prev.dateAvailability?.wednesday?.from,
                    to: moment(value?.toDate()).format("HH:mm"),
                  },
                },
              }))
            }
          />
        </div>
        <div>
          <span>Thirsday :</span>
          <TimePicker
            placeholder="from"
            showSecond={false}
            value={
              form.dateAvailability?.thirsday?.from
                ? moment(form.dateAvailability?.thirsday?.from, "HH:mm")
                : null
            }
            onChange={(value) =>
              setForm((prev: any) => ({
                ...prev,
                dateAvailability: {
                  ...prev.dateAvailability,
                  thirsday: {
                    from: moment(value?.toDate()).format("HH:mm"),
                    to: prev.dateAvailability?.thirsday?.to,
                  },
                },
              }))
            }
          />
          {" - "}
          <TimePicker
            placeholder="to"
            showSecond={false}
            value={
              form.dateAvailability?.thirsday?.to
                ? moment(form.dateAvailability?.thirsday?.to, "HH:mm")
                : null
            }
            onChange={(value) =>
              setForm((prev: any) => ({
                ...prev,
                dateAvailability: {
                  ...prev.dateAvailability,
                  thirsday: {
                    from: prev.dateAvailability?.thirsday?.from,
                    to: moment(value?.toDate()).format("HH:mm"),
                  },
                },
              }))
            }
          />
        </div>
        <div>
          <span>Friday :</span>
          <TimePicker
            placeholder="from"
            showSecond={false}
            value={
              form.dateAvailability?.friday?.from
                ? moment(form.dateAvailability?.friday?.from, "HH:mm")
                : null
            }
            onChange={(value) =>
              setForm((prev: any) => ({
                ...prev,
                dateAvailability: {
                  ...prev.dateAvailability,
                  friday: {
                    from: moment(value?.toDate()).format("HH:mm"),
                    to: prev.dateAvailability?.friday?.to,
                  },
                },
              }))
            }
          />
          {" - "}
          <TimePicker
            placeholder="to"
            showSecond={false}
            value={
              form.dateAvailability?.friday?.to
                ? moment(form.dateAvailability?.friday?.to, "HH:mm")
                : null
            }
            onChange={(value) =>
              setForm((prev: any) => ({
                ...prev,
                dateAvailability: {
                  ...prev.dateAvailability,
                  friday: {
                    from: prev.dateAvailability?.friday?.from,
                    to: moment(value?.toDate()).format("HH:mm"),
                  },
                },
              }))
            }
          />
        </div>
        <div>
          <span>Saturday :</span>
          <TimePicker
            placeholder="from"
            showSecond={false}
            value={
              form.dateAvailability?.saturday?.from
                ? moment(form.dateAvailability?.saturday?.from, "HH:mm")
                : null
            }
            onChange={(value) =>
              setForm((prev: any) => ({
                ...prev,
                dateAvailability: {
                  ...prev.dateAvailability,
                  saturday: {
                    from: moment(value?.toDate()).format("HH:mm"),
                    to: prev.dateAvailability?.saturday?.to,
                  },
                },
              }))
            }
          />
          {" - "}
          <TimePicker
            placeholder="to"
            showSecond={false}
            value={
              form.dateAvailability?.saturday?.to
                ? moment(form.dateAvailability?.saturday?.to, "HH:mm")
                : null
            }
            onChange={(value) =>
              setForm((prev: any) => ({
                ...prev,
                dateAvailability: {
                  ...prev.dateAvailability,
                  saturday: {
                    from: prev.dateAvailability?.saturday?.from,
                    to: moment(value?.toDate()).format("HH:mm"),
                  },
                },
              }))
            }
          />
        </div>
        <div>
          <span>Sunday :</span>
          <TimePicker
            placeholder="from"
            showSecond={false}
            value={
              form.dateAvailability?.sunday?.from
                ? moment(form.dateAvailability?.sunday?.from, "HH:mm")
                : null
            }
            onChange={(value) =>
              setForm((prev: any) => ({
                ...prev,
                dateAvailability: {
                  ...prev.dateAvailability,
                  sunday: {
                    from: moment(value?.toDate()).format("HH:mm"),
                    to: prev.dateAvailability?.sunday?.to,
                  },
                },
              }))
            }
          />
          {" - "}
          <TimePicker
            placeholder="to"
            showSecond={false}
            value={
              form.dateAvailability?.sunday?.to
                ? moment(form.dateAvailability?.sunday?.to, "HH:mm")
                : null
            }
            onChange={(value) =>
              setForm((prev: any) => ({
                ...prev,
                dateAvailability: {
                  ...prev.dateAvailability,
                  sunday: {
                    from: prev.dateAvailability?.sunday?.from,
                    to: moment(value?.toDate()).format("HH:mm"),
                  },
                },
              }))
            }
          />
        </div>
      </Styled.DateAvailabilityWrapper>
      <SingleSelection
        direction="top"
        data={selectData.type[itemCategory]}
        label="Service SubCategory*"
        placeholder="Select Service SubCategory"
        value={form.itemSubCategory}
        onChange={(value) => {
          setForm((prev) => ({
            ...prev,
            itemSubCategory: value,
          }));
        }}
      />
      <SingleSelection
        direction="top"
        data={selectData.providerType}
        label="Provider Type*"
        placeholder="Select Provider Type"
        value={form.providerType}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, providerType: value }))
        }
      />
      <MultiSelection
        direction="top"
        data={selectData.licenses}
        label="Licenses/Certifications"
        placeholder="Select Licenses/Certifications"
        value={form.licenses}
        onChange={(value) => setForm((prev) => ({ ...prev, licenses: value }))}
      />
      <SingleSelection
        direction="top"
        data={selectData.cancellationPolicy.slice(1)}
        label="Cancellation Policy"
        placeholder="Select Cancellation Policy"
        value={form.cancellationPolicy}
        onChange={(value) =>
          setForm((prev) => ({ ...prev, cancellationPolicy: value }))
        }
      />

      <Styled.SaveButton onClick={handleSave}>Save</Styled.SaveButton>
    </Styled.FormContainer>
  );
};
