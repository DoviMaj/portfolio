import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <title>David Majowka | Portfolio</title>
          <link rel="icon" href="/favicon.ico" />

          {/* Primary Meta Tags  */}

          <meta name="title" content="David Majowka | Portfolio"></meta>
          <meta name="description" content="Full-stack Web Developer"></meta>

          {/* Twitter  */}
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:site" content="@DMajowka"></meta>
          <meta name="twitter:creator" content="@DMajowka"></meta>
          <meta name="twitter:title" content="David Majowka | Portfolio"></meta>
          <meta
            name="twitter:description"
            content="Full-stack Web Developer"
          ></meta>
          <meta
            name="twitter:image"
            content="https://fakebook-29149.s3.us-east-2.amazonaws.com/images/1618574420444.png"
          ></meta>

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website"></meta>
          <meta property="og:title" content="David Majowka | Portfolio"></meta>
          <meta
            property="og:description"
            content="Full-stack Web Developer."
          ></meta>
          <meta
            property="og:url"
            content="http://portfolio-dovimaj.vercel.app/"
          ></meta>
          <meta
            property="og:image"
            content="https://fakebook-29149.s3.us-east-2.amazonaws.com/images/1618574420444.png"
          ></meta>
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
