// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "../../constants/Table";
// import Link from "next/link";
// import React from "react";

// interface OldGmpDataTables {
//   id: string;
//   ipo_name: string;
//   price: string;
//   ipo_gmp: string;
//   listed: string;
//   link: string;
//   updated_at: string;
//   slug: string;
// }

// export default function OldGmpDataTables({ data }: { data: any }) {
//   const keysToDisplay = ["ipo_name", "price", "ipo_gmp", "listed"];
//   const keysHeader = ["Company Name", "Price", "GMP", "Listed"];
//   return (
//     <section className="section">
//       <div className="container">
//         <div className="content">
//           <div className="row justify-center text-left">
//             <div className="lg:col-10 md:col-10 mb-8 text-center">
//               <h3 className="mb-4">Old Ipo Gmp </h3>
//               <Table>
//                 <TableHeader>
//                   <TableRow>
//                     {keysHeader.map((key) => (
//                       <TableHead key={key}>{key}</TableHead>
//                     ))}
//                   </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                   {data.oldGmp.map((item: OldGmpDataTables, index: number) => (
//                     <TableRow key={index}>
//                       {keysToDisplay.map((key) => (
//                         <TableCell key={key}>
//                           {key === "ipo_name" ? (
//                             <Link
//                               style={{
//                                 textDecoration: "none",
//                                 fontWeight: "bold",
//                                 fontSize: "medium",
//                               }}
//                               href={"ipo/" + item.slug}
//                               target={"_blank"}
//                               rel="noopener"
//                             >
//                               {item[key as keyof OldGmpDataTables]}
//                             </Link>
//                           ) : (
//                             item[key as keyof OldGmpDataTables]
//                           )}
//                         </TableCell>
//                       ))}
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../constants/Table";
import Link from "next/link";
import React, { useState } from "react";

interface OldGmpDataTables {
  id: string;
  ipo_name: string;
  price: string;
  ipo_gmp: string;
  listed: string;
  link: string;
  updated_at: string;
  slug: string;
}

export default function OldGmpDataTables({ data }: { data: any }) {
  const [itemsToShow, setItemsToShow] = useState(20);
  const keysToDisplay = ["ipo_name", "price", "ipo_gmp", "listed"];
  const keysHeader = ["Company Name", "Price", "GMP", "Listed"];
  
  const loadMore = () => {
    setItemsToShow((prev) => prev + 20);
  };
  
  return (
    <section className="section">
      <div className="container">
        <div className="content">
          <div className="row justify-center text-left">
            <div className="lg:col-10 md:col-10 mb-8 text-center">
              <h3 className="mb-4">Old Ipo Gmp </h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    {keysHeader.map((key) => (
                      <TableHead key={key}>{key}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.oldGmp.slice(0, itemsToShow).map((item: OldGmpDataTables, index: number) => (
                    <TableRow key={index}>
                      {keysToDisplay.map((key) => (
                        <TableCell key={key}>
                          {key === "ipo_name" ? (
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
                              {item[key as keyof OldGmpDataTables]}
                            </Link>
                          ) : (
                            item[key as keyof OldGmpDataTables]
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              {itemsToShow < data.oldGmp.length && (
                <button onClick={loadMore} className="mt-4 btn btn-primary">
                  Load More
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
