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

interface BuyBackDataTables {
  id: string
  company_name: string
  record_date: string
  open: string
  link: string
  slug: string
  close: string
  price: string
  updated_at: string
}

export default function BuyBackDataTables({ data }: { data: any }) {
  const keysToDisplay = ["company_name", "record_date", "open", "close", "price"];
  const keysHeader = ["Company Name", "Record Date", "Open", "Close", "Price"];
  return (
    <section className="section">
      <div className="container">
        <div className="content">
          <div className="row justify-center text-left">
            <div className="lg:col-12 md:col-12 mb-8 text-center">
              <h3 className="mb-4">Ipo BuyBack</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    {keysHeader.map((key) => (
                      <TableHead key={key}>{key}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.buyback.map((item: BuyBackDataTables, index: number) => (
                    <TableRow key={index}>
                      {keysToDisplay.map((key) => (
                        <TableCell key={key}>
                          {key === "company_name" ? (
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
                              {item[key as keyof BuyBackDataTables]}
                            </Link>
                          ) : (
                            item[key as keyof BuyBackDataTables]
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
