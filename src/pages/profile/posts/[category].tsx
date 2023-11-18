import React, { useEffect, useState } from "react";
import { AppLayout } from "@/layouts";
import { MainSection } from "@/modules/profile/MainSection";
import { useRouter } from "next/router";

const MyPostPage: React.FC = () => {
  const router = useRouter();
  const { category } = router.query;
  return (
    <AppLayout name="myPosts" noSidebar>
      <MainSection page="posts" category={category.toString()} />
    </AppLayout>
  );
};

export default MyPostPage;
