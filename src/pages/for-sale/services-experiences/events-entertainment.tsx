import React from "react";
import { AppLayout } from "@/layouts";
import { ServiceSection } from "@/modules/main/Service";

const ServiceEvents: React.FC = () => {
  return (
    <AppLayout name="service_events">
      <ServiceSection page="/for-sale/services-experiences/events-entertainment" />
    </AppLayout>
  );
};

export default ServiceEvents;
