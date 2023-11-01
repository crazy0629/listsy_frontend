import React from "react";
import { AppLayout } from "@/layouts";
import { ResetPasswordForm } from "@/modules/auth/reset-password";

const ResetPasswordPage: React.FC = () => {
  return (
    <AppLayout name="reset" noSidebar>
      <ResetPasswordForm />
    </AppLayout>
  );
};

export default ResetPasswordPage;
