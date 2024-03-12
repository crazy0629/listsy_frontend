import React from "react";
import { AppLayout } from "@/layouts";
import { ServiceSection } from "@/modules/main/Service";

const ServiceBusiness: React.FC = () => {
  return (
    <AppLayout name="service_business">
      <ServiceSection page="/for-sale/services-experiences/business-services" />
    </AppLayout>
  );
};

export default ServiceBusiness;
