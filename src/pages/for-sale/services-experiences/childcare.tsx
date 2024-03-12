import React from "react";
import { AppLayout } from "@/layouts";
import { ServiceSection } from "@/modules/main/Service";

const ServiceChildcare: React.FC = () => {
  return (
    <AppLayout name="service_childcare">
      <ServiceSection page="/for-sale/services-experiences/childcare" />
    </AppLayout>
  );
};

export default ServiceChildcare;
