import React from "react";
import { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import { Toaster } from "react-hot-toast";
import "tippy.js/dist/tippy.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const GlobalStyles = createGlobalStyle<{ theme: any }>`

    @font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 100;
  font-display: swap;
  src: url("./fonts/Inter-Thin.woff2?v=3.15") format("woff2"),
       url("./fonts/Inter-Thin.woff?v=3.15") format("woff");
}
@font-face {
  font-family: 'Inter';
  font-style:  italic;
  font-weight: 100;
  font-display: swap;
  src: url("./fonts/Inter-ThinItalic.woff2?v=3.15") format("woff2"),
       url("./fonts/Inter-ThinItalic.woff?v=3.15") format("woff");
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 200;
  font-display: swap;
  src: url("./fonts/Inter-ExtraLight.woff2?v=3.15") format("woff2"),
       url("./fonts/Inter-ExtraLight.woff?v=3.15") format("woff");
}
@font-face {
  font-family: 'Inter';
  font-style:  italic;
  font-weight: 200;
  font-display: swap;
  src: url("./fonts/Inter-ExtraLightItalic.woff2?v=3.15") format("woff2"),
       url("./fonts/Inter-ExtraLightItalic.woff?v=3.15") format("woff");
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 300;
  font-display: swap;
  src: url("./fonts/Inter-Light.woff2?v=3.15") format("woff2"),
       url("./fonts/Inter-Light.woff?v=3.15") format("woff");
}
@font-face {
  font-family: 'Inter';
  font-style:  italic;
  font-weight: 300;
  font-display: swap;
  src: url("./fonts/Inter-LightItalic.woff2?v=3.15") format("woff2"),
       url("./fonts/Inter-LightItalic.woff?v=3.15") format("woff");
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 400;
  font-display: swap;
  src: url("./fonts/Inter-Regular.woff2?v=3.15") format("woff2"),
       url("./fonts/Inter-Regular.woff?v=3.15") format("woff");
}
@font-face {
  font-family: 'Inter';
  font-style:  italic;
  font-weight: 400;
  font-display: swap;
  src: url("./fonts/Inter-Italic.woff2?v=3.15") format("woff2"),
       url("./fonts/Inter-Italic.woff?v=3.15") format("woff");
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 500;
  font-display: swap;
  src: url("./fonts/Inter-Medium.woff2?v=3.15") format("woff2"),
       url("./fonts/Inter-Medium.woff?v=3.15") format("woff");
}
@font-face {
  font-family: 'Inter';
  font-style:  italic;
  font-weight: 500;
  font-display: swap;
  src: url("./fonts/Inter-MediumItalic.woff2?v=3.15") format("woff2"),
       url("./fonts/Inter-MediumItalic.woff?v=3.15") format("woff");
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 600;
  font-display: swap;
  src: url("./fonts/Inter-SemiBold.woff2?v=3.15") format("woff2"),
       url("./fonts/Inter-SemiBold.woff?v=3.15") format("woff");
}
@font-face {
  font-family: 'Inter';
  font-style:  italic;
  font-weight: 600;
  font-display: swap;
  src: url("./fonts/Inter-SemiBoldItalic.woff2?v=3.15") format("woff2"),
       url("./fonts/Inter-SemiBoldItalic.woff?v=3.15") format("woff");
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 700;
  font-display: swap;
  src: url("./fonts/Inter-Bold.woff2?v=3.15") format("woff2"),
       url("./fonts/Inter-Bold.woff?v=3.15") format("woff");
}
@font-face {
  font-family: 'Inter';
  font-style:  italic;
  font-weight: 700;
  font-display: swap;
  src: url("./fonts/Inter-BoldItalic.woff2?v=3.15") format("woff2"),
       url("./fonts/Inter-BoldItalic.woff?v=3.15") format("woff");
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 800;
  font-display: swap;
  src: url("./fonts/Inter-ExtraBold.woff2?v=3.15") format("woff2"),
       url("./fonts/Inter-ExtraBold.woff?v=3.15") format("woff");
}
@font-face {
  font-family: 'Inter';
  font-style:  italic;
  font-weight: 800;
  font-display: swap;
  src: url("./fonts/Inter-ExtraBoldItalic.woff2?v=3.15") format("woff2"),
       url("./fonts/Inter-ExtraBoldItalic.woff?v=3.15") format("woff");
}

@font-face {
  font-family: 'Inter';
  font-style:  normal;
  font-weight: 900;
  font-display: swap;
  src: url("./fonts/Inter-Black.woff2?v=3.15") format("woff2"),
       url("./fonts/Inter-Black.woff?v=3.15") format("woff");
}
@font-face {
  font-family: 'Inter';
  font-style:  italic;
  font-weight: 900;
  font-display: swap;
  src: url("./fonts/Inter-BlackItalic.woff2?v=3.15") format("woff2"),
       url("./fonts/Inter-BlackItalic.woff?v=3.15") format("woff");
}

/* -------------------------------------------------------
Variable font.
Usage:

  html { font-family: 'Inter', sans-serif; }
  @supports (font-variation-settings: normal) {
    html { font-family: 'Inter var', sans-serif; }
  }
*/
@font-face {
  font-family: 'Inter';
  font-weight: 100 900;
  font-display: swap;
  font-style: normal;
  font-named-instance: 'Regular';
  src: url("/fonts/Inter-roman.var.woff2?v=3.15") format("woff2");
}
@font-face {
  font-family: 'Inter';
  font-weight: 100 900;
  font-display: swap;
  font-style: italic;
  font-named-instance: 'Italic';
  src: url("/fonts/Inter-italic.var.woff2?v=3.15") format("woff2");
}

    * {
        font-family: 'Inter', Inter;
    }
    
     body {
        font-family: 'Inter',Inter;
        margin: 0;
        display: block;
        width: 100%;
        min-height: 100vh;
  		min-height: -webkit-fill-available;
        image-rendering: -moz-crisp-edges;
        image-rendering: -o-crisp-edges;
        image-rendering: -webkit-optimize-contrast;
        image-rendering: crisp-edges;
        -ms-interpolation-mode: nearest-neighbor;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #f8f9f9;
     }

     html {
       font-size: 16px;
       height: -webkit-fill-available;

       @media screen and (max-width: 448px) {
        font-size: 13px;
      }
     }    
`;

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <>
        <Toaster position="bottom-right" reverseOrder={false} />
        <Component {...pageProps} />
        <GlobalStyles />
      </>
    </>
  );
}
