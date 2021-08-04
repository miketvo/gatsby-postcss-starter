/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "normalize.css";
import "../styles/animations.css";
import "../styles/global.module.css";
import * as style from "./layout.module.css";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className={style.main}>{children}</main>
      <footer className={style.footer}>
        © {new Date().getFullYear()}, A <a href="https://www.gatsbyjs.com">Gatsby</a> starter by{" "}
        <a href="https://github.com/miketvo">Mike Vo</a>.
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
