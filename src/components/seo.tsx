import React from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";
import icon from "../images/mousse_logo_square.png";

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
      <link rel="icon" href={icon} />
      {children}
    </>
  );
};
