import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../constants/Table";
import Link from "next/link";
import React from "react";

interface FormsDataTables {
  id: string;
  name: string;
  date: string;
  date_link: string;
  bse: string;
  bse_link: string;
  nse: string;
  nse_link: string;
  link: string;
  updated_at: string;
  slug: string;
}

export default function FormsDataTables({ data }: { data: any }) {
  const keysToDisplay = ["name", "date", "bse", "nse"];
  const keysHeader = ["Company Name", "IPO Date", "BSE Form", "NSE Form"];
  // return (
  //   <section className="section">
  //     <div className="container">
  //       <div className="content">
  //         <div className="row justify-center text-left">
  //           <div className="lg:col-10 md:col-10 mb-8 text-center">
  //             <h3 className="mb-4">SME Ipo</h3>
  //             <Table>
  //               <TableHeader>
  //                 <TableRow>
  //                   {keysHeader.map((key) => (
  //                     <TableHead key={key}>{key}</TableHead>
  //                   ))}
  //                 </TableRow>
  //               </TableHeader>
  //               <TableBody>
  //                 {data.forms.map((item: FormsDataTables, index: number) => (
  //                   <TableRow key={index}>
  //                     {keysToDisplay.map((key) => (
  //                       <TableCell key={key}>
  //                         {key === "name" ? (
  //                           <Link
  //                             style={{
  //                               textDecoration: "none",
  //                               fontWeight: "bold",
  //                               fontSize: "medium",
  //                             }}
  //                             href={"ipo/" + item.slug}
  //                             target={"_blank"}
  //                             rel="noopener"
  //                           >
  //                             {item[key as keyof FormsDataTables]}
  //                           </Link>
  //                         ) : key === "nse" ? (
  //                           <Link
  //                             style={{
  //                               textDecoration: "none",
  //                               color: "blue",
  //                             }}
  //                             href={item.nse_link}
  //                             target={"_blank"}
  //                             rel="noopener"
  //                           >
  //                             {item[key as keyof FormsDataTables]}
  //                           </Link>
  //                         ) : key === "bse" ? (
  //                           <Link
  //                             style={{
  //                               textDecoration: "none",
  //                               color: "blue",
  //                             }}
  //                             href={item.bse_link}
  //                             target={"_blank"}
  //                             rel="noopener"
  //                           >
  //                             {item[key as keyof FormsDataTables]}
  //                           </Link>
  //                         ) : (
  //                           item[key as keyof FormsDataTables]
  //                         )}
  //                       </TableCell>
  //                     ))}
  //                   </TableRow>
  //                 ))}
  //               </TableBody>
  //             </Table>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );

  return (
    <section className="section">
      <div className="container">
        <div className="content">
          <div className="row justify-center text-left">
            <div className="lg:col-10 md:col-10 mb-8 text-center">
              <h3 className="mb-4">SME Ipo</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    {keysHeader.map((key) => (
                      <TableHead key={key}>{key}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.forms.map((item: FormsDataTables, index: number) => (
                    <TableRow key={index}>
                      {keysToDisplay.map((key) => (
                        <TableCell key={key}>
                          {key === "name" ? (
                            <Link
                              style={{
                                textDecoration: "none",
                                fontWeight: "bold",
                                fontSize: "medium",
                              }}
                              href={"ipo/" + item.slug}
                              target={"_blank"}
                              rel="noopener"
                            >
                              {item[key as keyof FormsDataTables]}
                            </Link>
                          ) : key === "nse" ? (
                            item.nse_link ? (
                              <Link
                                style={{
                                  textDecoration: "underline",
                                  fontWeight: "bold",
                                }}
                                href={item.nse_link}
                                target={"_blank"}
                                rel="noopener"
                              >
                                {item[key as keyof FormsDataTables]}
                              </Link>
                            ) : (
                              item[key as keyof FormsDataTables]
                            )
                          ) : key === "bse" ? (
                            item.bse_link ? (
                              <Link
                                style={{
                                  textDecoration: "underline",
                                  fontWeight: "bold",
                                }}
                                href={item.bse_link}
                                target={"_blank"}
                                rel="noopener"
                              >
                                {item[key as keyof FormsDataTables]}
                              </Link>
                            ) : (
                              item[key as keyof FormsDataTables]
                            )
                          ) : (
                            item[key as keyof FormsDataTables]
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
