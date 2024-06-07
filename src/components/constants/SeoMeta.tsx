"use client";

import { usePathname } from "next/navigation";

const SeoMeta = ({}: {}) => {
  const pathname = usePathname();

  return (
    <>
      {/* author from config.json */}
      <meta name="author" content={"Ipo Tech"} />

      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${"Ipo Tech"}/${pathname.replace("/", "")}`}
      />

      {/* twitter-title */}

      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
};

export default SeoMeta;
