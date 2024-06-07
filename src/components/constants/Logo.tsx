"use client";
import Image from "next/image";


const Logo = () => {
  const logo_width = 150;
  const logo_height = 27;
  return (
    <a href={""} className="navbar-brand inline-block">
      {
        <Image
          width={logo_width * 2}
          height={logo_height * 2}
          src={"/images/logo-darkmode.png"}
          alt={"Ipo Tech"}
          priority
          style={{
            height: logo_height + "px",
            width: logo_width + "px",
          }}
        />
      }
    </a>
  );
};

export default Logo;
