import React from "react";
import { Helmet } from "react-helmet";
import { Div, Subtitle, Title } from "./LayoutStyles";

export const Layout = ({ children, title, subtitle }) => {
  return (
    <>
      <Helmet>
        {title && <title>{title} | Pet photos </title>}
        {subtitle && <meta name="description" content={subtitle} />}
      </Helmet>
      <Div>
        {title && <Title>{title}</Title>}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {children}
      </Div>
    </>
  );
};
