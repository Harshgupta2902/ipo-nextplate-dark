import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../../constants/Table";
import Link from "next/link";
import React from 'react';




interface UpcomingDataTables {
    id: string;
    companyName: string;
    date: string;
    size: string;
    price: string;
    status: string;
    link: string;
    updated_at: string;
    slug: string;
}


export default function UpcomingDataTables({ data }: { data: any }) {
    const keysToDisplay = ['companyName', 'date', 'size', 'price','status'];
    const keysHeader = ['Company Name', 'Date', 'Size', 'Price','Status'];
    return (

        <section className="section">
            <div className="container">
                <div className="content">
                    <div className="row justify-center text-left" >
                        <div className="lg:col-12 md:col-12 mb-8 text-center">
                            <h3 className="mb-4">Upcoming Ipo's</h3>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        {keysHeader.map((key) => (
                                            <TableHead key={key}>{key}</TableHead>
                                        ))}
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                
                                    {data.upcomingIpos.map((item: UpcomingDataTables, index: number) => (
                                        <TableRow key={index}>
                                            {keysToDisplay.map((key) => (
                                                <TableCell key={key}>
                                                    {key === 'companyName' ? (
                                                        <Link
                                                            style={{ textDecoration: "none", fontWeight: "bold" ,fontSize: "medium"}}
                                                            href={"ipo/" + item.slug}
                                                            target={"_blank"}
                                                            rel="noopener">
                                                            {item[key as keyof UpcomingDataTables]}
                                                        </Link>
                                                    ) : (
                                                        item[key as keyof UpcomingDataTables]
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


