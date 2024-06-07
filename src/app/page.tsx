"use server";
import axios from "axios";
import SeoMeta from "../components/constants/SeoMeta";
import Markets from "../components/home/market-and-sector";
import StocksCard from '../components/home/stocks-card'
const Home = async () => {
  let result = null;

  try {
    const response = await axios.get(
      "https://analyze.api.tickertape.in/homepage/indices",
      {
        headers: {
          "Cache-Control": "no-cache",
          Pragma: "no-cache",
          Expires: "0",
        },
      },
    );
    result = response.data.data;
    // console.log(result);
  } catch (error) {
    console.error("Error fetching menu data:", error);
  }
  const topIndices = result.slice(0, 9);

  return (
    <>
      <style>{`
            .indices{
              width: 90px;
              max-height: 60px;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-line-clamp: 2;
              display: -webkit-box;
              -webkit-box-orient: vertical;
            }
            
            .stockSid{
              width: 26rem;
              margin-left: 2rem;
            }
            
            .stockSidPrice{
              width: 8rem;
            }

            `}
      </style>
      <SeoMeta />
      <section className="section">
        <div className="container">
          <div className="content">
            <div className="row items-center justify-between">
              <div className="mb-10 md:col-5 lg:col-5 md:mb-0">
                <h1>Market and Sectors</h1>
              </div>
              <div className="md:col-2 lg:col-2 text-right">
                <a href="" style={{ textDecoration: "none" }}>
                  <span className="text-white font-bold">View All</span>
                </a>
              </div>
            </div>
            <div className="rounded-xl bg-theme-light px-6 dark:bg-darkmode-theme-light p-6">
              <div className="inline-flex flex-wrap items-center gap-8 m-6 group">
                {topIndices.map((item: any, index: number) => (
                  <div key={item.id || index}  className="inline-flex flex-wrap items-center gap-10 group">
                    <Markets
                      data={item.points}
                      lastPrice={item.lastClosePrice}
                      name={item.name}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <StocksCard />
    </>
  );
};

export default Home;
