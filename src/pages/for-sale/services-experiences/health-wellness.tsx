import React from "react";
import { AppLayout } from "@/layouts";
import { ServiceSection } from "@/modules/main/Service";

const ServiceHealth: React.FC = () => {
  return (
    <AppLayout name="service_health">
      <ServiceSection page="/for-sale/services-experiences/health-wellness" />
    </AppLayout>
  );
};

export default ServiceHealth;
