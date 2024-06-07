"use client";

import Footer from "../components/constants/Footer";
import Header from "../components/constants/Header";
import Providers from "../components/constants/Providers";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Providers>
        {/* <Header  /> */}
        <main>
          <section className="section-sm text-center">
            <div className="container">
              <div className="row justify-center">
                <div className="sm:col-10 md:col-8 lg:col-6">
                  <span className="text-[8rem] block font-bold text-dark dark:text-darkmode-dark">
                    404
                  </span>
                  <h1 className="h2 mb-4">{"page_not_found"}</h1>
                  <div className="content">
                    <p>{"page_not_found_content"}</p>
                  </div>
                  <Link href="/" className="btn btn-primary mt-8">
                    {"back_to_home"}
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </Providers>
    </>
  );
}
