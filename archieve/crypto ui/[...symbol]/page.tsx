"use client"
import { usePathname } from "next/navigation";

export default function Home() {

    const pathname = usePathname();
    const parts = pathname.split("/");
    const cryptoId = parts[parts.length - 1];

  return (
    <div className="_next">
      tetett {cryptoId}
    </div>
  );
}
