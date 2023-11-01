import React, { type FC } from "react";
import Head from "next/head";

import type { ISeoProps } from "@/types";

export const Seo: FC<ISeoProps> = ({ title, description, image }) => {
  return (
    <Head>
      <title>{title}</title>

      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="twitter:description" content={description} />

      <meta name="title" content={title} />
      <meta property="og:title" content={title} />
      <meta property="twitter:title" content={title} />

      <meta name="image" content={image} />
      <meta property="og:image" content={image} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
};
