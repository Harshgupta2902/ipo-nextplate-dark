"use server";

import axios from "axios";
import ImageFallback from "../../components/constants/ImageFallback";
import { markdownify } from "../../components/constants/textConverter";
import SeoMeta from "../../components/constants/SeoMeta";
import Link from "next/link";
import UpcomingIpo from "../../components/ipo/home/HomeDataTables";
import HomeFaq from "../../components/ipo/home/HomeFaq";

const Home = async () => {
  let result = null;

  try {
    const response = await axios.get(
      "https://ipo.onlineinfotech.net/Apis/homePage",
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

  // console.log("API Data:", result);

  return (
    <>
      <SeoMeta />
      <section className="section pt-14">
        <div className="container">
          <div className="row justify-center">
            <div className="lg:col-7 md:col-9 mb-8 text-center">
              <h1
                className="mb-4 text-h3 lg:text-h1"
                dangerouslySetInnerHTML={markdownify(
                  "Invest in the Future<br/> Fill IPO and Unlock Potential Growth",
                )}
              />
              <p
                className="mb-8"
                dangerouslySetInnerHTML={markdownify(
                  "Discover the latest IPOs. Get thorough information and insights to help you make wise investment decisions",
                )}
              />

              <Link
                className="btn btn-primary"
                href={"https://rti.kfintech.com/ipostatus/"}
                target={"_blank"}
                rel="noopener"
              >
                {"Check Ipo Allotment Status"}
              </Link>
            </div>

            <div className="col-12">
              <ImageFallback
                src={"/images/banner.png"}
                className="mx-auto"
                width="800"
                height="420"
                alt="banner image"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <UpcomingIpo data={result} />
      <HomeFaq />
    </>
  );
};

export default Home;
