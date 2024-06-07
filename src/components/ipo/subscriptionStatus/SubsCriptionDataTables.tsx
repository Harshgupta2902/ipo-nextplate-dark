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

interface SubsCriptionDataTables {
  id: string;
  ipo_name: string;
  date: string;
  type: string;
  ipo_gmp: string;
  price: string;
  gain: string;
  kostak: string;
  subject: string;
  link: string;
  updated_at: string;
  slug: string;
}

export default function SubsCriptionDataTables({ data }: { data: any }) {
  const keysToDisplay = [
    "company_name",
    "close_date",
    "size_rs_cr",
    "qib_x",
    "snii_x",
    "bnii_x",
    "nii_x",
    "retail_x",
    "employee_x",
    "others_x",
    "total_x",
    "applications",
  ];
  const keysHeader = [
    "Company Name",
    "CloseDate",
    "Size (in Cr.)",
    "QIB",
    "SNII",
    "BNII",
    "NII",
    "Retail",
    "Empoyee",
    "Others",
    "Total",
    "No. of Aplications",
  ];
  return (
    <section className="section">
      <div className="container">
        <div className="content">
          <div className="row justify-center text-left">
            <div className="lg:col-12 md:col-12 mb-8 text-center">
              <h3 className="mb-4">Ipo Subscription Status</h3>
              <Table>
                <TableHeader>
                  <TableRow>
                    {keysHeader.map((key) => (
                      <TableHead key={key}>{key}</TableHead>
                    ))}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.ipo_subscription_data.map((item: SubsCriptionDataTables, index: number) => (
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
                              {item[key as keyof SubsCriptionDataTables]}
                            </Link>
                          ) : (
                            item[key as keyof SubsCriptionDataTables]
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
