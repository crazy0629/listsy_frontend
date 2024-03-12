import React from "react";
import { AppLayout } from "@/layouts";
import { ServiceSection } from "@/modules/main/Service";

const ServiceBeauty: React.FC = () => {
  return (
    <AppLayout name="service_beauty">
      <ServiceSection page="/for-sale/services-experiences/beauty-personal-care" />
    </AppLayout>
  );
};

export default ServiceBeauty;
