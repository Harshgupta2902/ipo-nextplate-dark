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




interface IpoData {
    id: string;
    Type: string;
    Company: string;
    link: string;
    Open: string;
    Close: string;
    updated_at: string;
    slug: string;
}


export default function UpcomingIpo({ data }: { data: any }) {
    const keysToDisplay = ['Company', 'Open', 'Close'];
    return (

        <section className="section">
            <div className="container">
                <div className="content">
                    <div className="row justify-center text-left" >
                        <div className="lg:col-6 md:col-6 mb-8 text-center">
                            <h3 className="mb-4">Upcoming Ipo's</h3>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        {keysToDisplay.map((key) => (
                                            <TableHead key={key}>{key}</TableHead>
                                        ))}
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    
                                    {data.upcomingData.map((item: IpoData, index: number) => (
                                        <TableRow key={index}>
                                            {keysToDisplay.map((key) => (
                                                <TableCell key={key}>
                                                    {key === 'Company' ? (
                                                        <Link
                                                            style={{ textDecoration: "none", fontWeight: "bold" ,fontSize: "medium"}}
                                                            href={"ipo/" + item.slug}
                                                            target={"_blank"}
                                                            rel="noopener">
                                                            {item[key as keyof IpoData]}
                                                        </Link>
                                                    ) : (
                                                        item[key as keyof IpoData]
                                                    )}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>

                        <div className="lg:col-6 md:col-6 mb-8 text-center">
                            <h3 className="mb-4">SME Ipo's</h3>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        {keysToDisplay.map((key) => (
                                            <TableHead key={key}>{key}</TableHead>
                                        ))}
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    
                                    {data.smeData.map((item: IpoData, index: number) => (
                                        <TableRow key={index}>
                                            {keysToDisplay.map((key) => (
                                                <TableCell key={key}>
                                                    {key === 'Company' ? (
                                                        <Link
                                                            style={{ textDecoration: "none", fontWeight: "bold" ,fontSize: "medium"}}
                                                            href={"ipo/" + item.slug}
                                                            target={"_blank"}
                                                            rel="noopener">
                                                            {item[key as keyof IpoData]}
                                                        </Link>
                                                    ) : (
                                                        item[key as keyof IpoData]
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


