import React from "react";
import Link from "next/link";
import Head from "next/head";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = (url) => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export const Layout = ({ title, children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>{title} | Podcasts For Everyone</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <header>
        <Link href="/">
          <a>{title}</a>
        </Link>
      </header>
      {children}

      <style jsx>{`
        header {
          color: #fff;
          background: #8756ca;
          padding: 15px;
          text-align: center;
        }

        header a {
          color: #fff;
          text-decoration: none;
        }
      `}</style>
      <style jsx global>{`
        body {
          margin: 0;
          font-family: system-ui;
          background: white;
        }
      `}</style>
    </React.Fragment>
  );
};
