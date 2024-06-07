"use server";

import axios from "axios";
import SeoMeta from "../../../components/constants/SeoMeta";
import SubsCriptionDataTables from "../../../components/ipo/subscriptionStatus/SubsCriptionDataTables";
import SubsCriptionFaq from "../../../components/ipo/subscriptionStatus/SubsCriptionFaq";

const Home = async () => {
  let result = null;

  try {
    const response = await axios.get(
      "https://ipo.onlineinfotech.net/Apis/subscriptionData",
      {
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      },
    );
    result = response.data;
  } catch (error) {
    console.error("Error fetching menu data:", error);
  }

  return (
    <>
      <SeoMeta />
      <SubsCriptionDataTables data={result} />
      <SubsCriptionFaq />
    </>
  );
};

export default Home;
