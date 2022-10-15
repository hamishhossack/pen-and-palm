// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700,900&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://unpkg.com/swiper@6.6.2/swiper-bundle.min.css" />
          <meta name="title" content="Headless Commerce example with Netlify" key="title" />
          <meta
            name="description"
            content="An open source headless commerce example powered by Commerce.js and Netlify. Start your headless commerce application now!"
          />
          <meta property="og:title" content="Commerce.js | Demo storefront" />
          <meta
            property="og:image"
            content="https://cdn.chec.io/email/assets/marketing/demo-preview.png"
          />
          <meta
            property="og:description"
            content="A custom, open source demo storefront built with Next.js and Commerce.js. Take a look!"
          />
          <meta property="og:url" content="https://commercejs-demo-store.netlify.app" />
          <meta property="twitter:title" content="Commerce.js | Demo storefront" />
          <meta name="twitter:creator" content="@commercejs" />
          <meta
            property="twitter:image"
            content="https://cdn.chec.io/email/assets/marketing/demo-preview.png"
          />
          <meta
            property="twitter:description"
            content="A custom, open source demo storefront built with Next.js and Commerce.js. Take a look!"
          />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
