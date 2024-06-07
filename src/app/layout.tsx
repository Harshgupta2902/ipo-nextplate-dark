import Footer from "../components/constants/Footer";
import Header from "../components/constants/Header";
import Providers from "../components/constants/Providers";
import "@/styles/main.scss";
import theme from "../theme.json";
import { headers } from "next/headers";
import axios from "axios";

export async function generateMetadata() {
  const headersList = headers();
  const domain = headersList.get("host") || "";
  const fullUrl = headersList.get("referer") || "";
  try {
    const base_url = "http://localhost/ipo/Apis/getMetaData";
    // const base_url = "http://ipo.onlineinfotech.net/Apis/getMetaData";
    const route = fullUrl.replace(domain, "").replace("http://", "");

    const response = await axios.get(base_url + "?route=" + route);

    if (response.status === 200) {
      const metaData = response.data.metaData;
      console.log("Meta Data Received Successfully" + metaData.seo_title);

      return {
        title: metaData.seo_title,
        description: metaData.seo_desc,
        // robots: robots,
        keywords: metaData.seo_keys,
        author: "IpoTech.com",
        alternates: {
          canonical: fullUrl.toLowerCase(),
        },
      };
    } else {
      console.error(`Failed to purge data cache: `);
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;

  return (
    <html className="dark" lang="en">
      <head>
        {/* responsive meta */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        <link rel="shortcut icon" href={"/images/favicon.png"} />
        {/* theme meta */}
        <meta name="theme-name" content="nextplate" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />

        {/* google font css */}
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href={`https://fonts.googleapis.com/css2?family=${pf}${
            sf ? "&family=" + sf : ""
          }&display=swap`}
          rel="stylesheet"
        />
      </head>

      <body suppressHydrationWarning={true}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
