import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    let description = "שיתוף ידע, כלים, חדשות ושיתופי פעולה אקדמיים ועסקיים עם אנשים ומכונות";
    let ogimage = "";
    let sitename = "forward2shraga.com";
    let title = "קהילת סוכני בינה מלאכותית הגדולה בישראל";

    return (
     
<Html lang="en">
        <Head>
<script async defer data-website-id="d6365cf1-70bb-4307-aea8-acaf6bb94787" src="https://pls.forward2shraga.com/umami.js"></script>

          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content={description} />
          <meta property="og:site_name" content={sitename} />
          <meta property="og:description" content={description} />
          <meta property="og:title" content={title} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta property="og:image" content={ogimage} />
          <meta name="twitter:image" content={ogimage} />
        </Head>
        <body className="bg-[#17181C] text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

