import React from "react";
import { AppLayout } from "@/layouts";
import { ServiceSection } from "@/modules/main/Service";

const ServiceMiscellaneous: React.FC = () => {
  return (
    <AppLayout name="service_miscellaneous">
      <ServiceSection page="/for-sale/services-experiences/miscellaneous-services" />
    </AppLayout>
  );
};

export default ServiceMiscellaneous;
