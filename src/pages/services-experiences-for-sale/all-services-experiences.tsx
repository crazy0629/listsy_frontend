import React from "react";
import { AppLayout } from "@/layouts";
import { ServiceSection } from "@/modules/main/Service";

const ServiceAll: React.FC = () => {
  return (
    <AppLayout name="service_all">
      <ServiceSection page="/services-experiences-for-sale/all-services-experiences" />
    </AppLayout>
  );
};

export default ServiceAll;
