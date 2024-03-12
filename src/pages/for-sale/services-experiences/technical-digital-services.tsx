import React from "react";
import { AppLayout } from "@/layouts";
import { ServiceSection } from "@/modules/main/Service";

const ServiceTechnical: React.FC = () => {
  return (
    <AppLayout name="service_technical">
      <ServiceSection page="/for-sale/services-experiences/technical-digital-services" />
    </AppLayout>
  );
};

export default ServiceTechnical;
