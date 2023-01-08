import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import icon from "../images/mousse_man_red.png";

export const SEO = ({ title, description, pathname, children }: any) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link href={icon} rel="apple-touch-icon" sizes="120×120" />
      <link href={icon} rel="apple-touch-icon" sizes="152×152" />
      <link rel="icon" type="image/png" href={icon} />
      {children}
    </>
  );
};
