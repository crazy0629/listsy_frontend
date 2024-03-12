import React from "react";
import { AppLayout } from "@/layouts";
import { ServiceSection } from "@/modules/main/Service";

const ServiceHome: React.FC = () => {
  return (
    <AppLayout name="service_home">
      <ServiceSection page="/for-sale/services-experiences/home-services" />
    </AppLayout>
  );
};

export default ServiceHome;
