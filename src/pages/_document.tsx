import React from "react";
import Document from "next/document";
import { ServerStyleSheet } from "styled-components";
import Head from "next/head";

export default class MyDocument extends Document {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            <Head>
              <title>URL Shortner</title>
              <link
                rel="preload"
                href="/fonts/Inter-Regular.woff2?v=3.15"
                as="font"
                type="font/woff2"
                crossOrigin=""
              />
              <link
                rel="preload"
                href="/fonts/Inter-Regular.woff?v=3.15"
                as="font"
                type="font/woff"
                crossOrigin=""
              />
              <link
                rel="preload"
                href="/fonts/Inter-italic.var.woff2?v=3.15"
                as="font"
                type="font/woff"
                crossOrigin=""
              />
              <link
                rel="preload"
                href="/fonts/Inter-roman.var.woff2?v=3.15"
                as="font"
                type="font/woff"
                crossOrigin=""
              />
              <link
                rel="preload"
                href="/fonts/Inter-Medium.woff2?v=3.15"
                as="font"
                type="font/woff2"
                crossOrigin=""
              />
              <link
                rel="preload"
                href="/fonts/Inter-Medium.woff?v=3.15"
                as="font"
                type="font/woff"
                crossOrigin=""
              />
            </Head>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
