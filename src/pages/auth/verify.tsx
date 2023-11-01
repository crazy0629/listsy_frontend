import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { Loading } from "@/components";
import { AppLayout } from "@/layouts";
import { SERVER_URI } from "@/config";
import { toast } from "react-toastify";
import { Verified } from "@/modules/auth/verified";

const VerifyPage: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { email, token } = router.query;
  useEffect(() => {
    if (email && token) {
      handleVerify();
    }
  }, [email, token]);

  const handleVerify = async () => {
    const res = await axios.post(
      `${SERVER_URI}/auth/checkSignUpVerificationToken`,
      { email, token }
    );
    if (res.data.success) {
      toast.success(res.data.message);
      setLoading(false);
      setTimeout(() => {
        router.push("/auth/login");
      }, 5000);
    } else {
      toast.error(res.data.message);
    }
  };

  return (
    <AppLayout name="" noSidebar>
      {loading ? <Loading /> : <Verified />}
    </AppLayout>
  );
};

export default VerifyPage;
