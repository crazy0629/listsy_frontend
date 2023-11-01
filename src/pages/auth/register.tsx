import { AppLayout } from "@/layouts";
import { RegisterForm } from "@/modules/auth";
import React from "react";

const RegisterPage: React.FC = () => {
  return (
    <AppLayout name="register" noSidebar>
      <RegisterForm />
    </AppLayout>
  );
};

export default RegisterPage;
