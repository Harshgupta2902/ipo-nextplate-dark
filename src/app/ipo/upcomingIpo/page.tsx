"use server";

import axios from "axios";
import SeoMeta from "../../../components/constants/SeoMeta";
import UpcomingDataTables from "../../../components/ipo/upcomingIpo/UpcomingDataTables";
import UpcomingFaq from "../../../components/ipo/upcomingIpo/upcomingFaq";

const Home = async () => {
  let result = null;

  try {
    const response = await axios.get(
      "https://ipo.onlineinfotech.net/Apis/upcomingIpo",
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
      <UpcomingDataTables data={result} />
      <UpcomingFaq />
    </>
  );
};

export default Home;
