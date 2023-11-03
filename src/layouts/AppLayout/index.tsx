import React, { useEffect, useState } from "react";
import { seo_lists } from "./seo";
import { Seo } from "@/components";
import * as Styled from "./layout.styles";
import { Header } from "./Header";
import { AppSidebar } from "./AppSidebar";

type Props = {
  name: string;
  title?: string;
  description?: string;
  image?: string;
  noSidebar?: boolean;
} & React.HTMLAttributes<HTMLElement>;

export const AppLayout: React.FC<Props> = ({
  children,
  name,
  title,
  description,
  image,
  noSidebar,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const getSeoList = () => {
    if (seo_lists[name]) {
      return seo_lists[name];
    } else if (name === "details") {
      return {
        title: "Listsy | " + title,
        description: description,
        image: image,
      };
    } else {
      return {
        title: "",
        description: "",
        image: "",
      };
    }
  };

  const props = getSeoList();

  const handleSidebarClick = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <Styled.AppLayoutWrapper>
      <Seo {...props} />
      <Header onSidebar={handleSidebarClick} />
      <Styled.AppMainSection>
        {!noSidebar && (
          <AppSidebar
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />
        )}
        <Styled.AppMainContainer nosidebar={noSidebar ? "true" : undefined}>
          <Styled.AppMainContent>
            {children ? children : ""}
          </Styled.AppMainContent>
        </Styled.AppMainContainer>
      </Styled.AppMainSection>
    </Styled.AppLayoutWrapper>
  );
};
