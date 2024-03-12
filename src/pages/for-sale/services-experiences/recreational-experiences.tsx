import React from "react";
import { AppLayout } from "@/layouts";
import { ServiceSection } from "@/modules/main/Service";

const ServiceRecreation: React.FC = () => {
  return (
    <AppLayout name="service_recreation">
      <ServiceSection page="/for-sale/services-experiences/recreational-experiences" />
    </AppLayout>
  );
};

export default ServiceRecreation;
