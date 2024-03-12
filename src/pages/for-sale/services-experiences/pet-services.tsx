import React from "react";
import { AppLayout } from "@/layouts";
import { ServiceSection } from "@/modules/main/Service";

const ServicePet: React.FC = () => {
  return (
    <AppLayout name="service_pet">
      <ServiceSection page="/for-sale/services-experiences/pet-services" />
    </AppLayout>
  );
};

export default ServicePet;
