import React from "react";
import { AppLayout } from "@/layouts";
import { ServiceSection } from "@/modules/main/Service";

const ServiceEducation: React.FC = () => {
  return (
    <AppLayout name="service_education">
      <ServiceSection page="/for-sale/services-experiences/educational-services" />
    </AppLayout>
  );
};

export default ServiceEducation;
