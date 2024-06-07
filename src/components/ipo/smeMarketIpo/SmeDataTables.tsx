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

interface SmeDataTables {
  id: string;
  name: string;
  Dates: string;
  Price: string;
  Platform: string;
  link: string;
  updated_at: string;
  slug: string;
}

export default function SmeDataTables({ data }: { data: any }) {
  const keysToDisplay = ["name", "Dates", "Price", "Platform"];
  const keysHeader = ["Company Name", "Date", "Price", "Platform"];
  return (
    <section className="section">
      <div className="container">
        <div className="content">
          <div className="row justify-center text-left">
            <div className="lg:col-8 md:col-8 mb-8 text-center">
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
                  {data.sme.map((item: SmeDataTables, index: number) => (
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
                              {item[key as keyof SmeDataTables]}
                            </Link>
                          ) : (
                            item[key as keyof SmeDataTables]
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
