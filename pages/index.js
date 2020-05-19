import React from "react";
import { Layout } from "../components/Layout";
import { ChannelGrid } from "../components/ChannelGrid";
import Error from "next/error";

export default ({ channels, statusCode }) => {
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <React.Fragment>
      <Layout title="Podcasts">
        <ChannelGrid channels={channels} />
      </Layout>
      <style jsx global>
        {`
          /* Make clicks pass-through */
          #nprogress {
            pointer-events: none;
          }

          #nprogress .bar {
            background: #29d;

            position: fixed;
            z-index: 1031;
            top: 0;
            left: 0;

            width: 100%;
            height: 2px;
          }

          /* Fancy blur effect */
          #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px #29d, 0 0 5px #29d;
            opacity: 1;

            -webkit-transform: rotate(3deg) translate(0px, -4px);
            -ms-transform: rotate(3deg) translate(0px, -4px);
            transform: rotate(3deg) translate(0px, -4px);
          }

          /* Remove these to get rid of the spinner */
          #nprogress .spinner {
            display: block;
            position: fixed;
            z-index: 1031;
            top: 15px;
            right: 15px;
          }

          #nprogress .spinner-icon {
            width: 18px;
            height: 18px;
            box-sizing: border-box;

            border: solid 2px transparent;
            border-top-color: #29d;
            border-left-color: #29d;
            border-radius: 50%;

            -webkit-animation: nprogress-spinner 400ms linear infinite;
            animation: nprogress-spinner 400ms linear infinite;
          }

          .nprogress-custom-parent {
            overflow: hidden;
            position: relative;
          }

          .nprogress-custom-parent #nprogress .spinner,
          .nprogress-custom-parent #nprogress .bar {
            position: absolute;
          }

          @-webkit-keyframes nprogress-spinner {
            0% {
              -webkit-transform: rotate(0deg);
            }
            100% {
              -webkit-transform: rotate(360deg);
            }
          }
          @keyframes nprogress-spinner {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </React.Fragment>
  );
};

export async function getServerSideProps({ res }) {
  try {
    const res = await fetch("https://api.audioboom.com/channels/recommended");
    const statusCode = res.ok ? false : res.statusCode;
    let { body: channels } = await res.json();
    return { props: { channels, statusCode } };
  } catch (e) {
    res.statusCode = 503;
    return { props: { channels: null, statusCode: 503 } };
  }
}
