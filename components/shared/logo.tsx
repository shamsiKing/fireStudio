import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center pr-2 cursor-pointer group ">
        <Image src="/assets/logoFire.jpg" alt="logo" width={40} height={40} />
        <h1 className="text-xl font-bold text-shadow-black/70 group-hover:text-shadow-black text-shadow-2xs text-orange-600">
          Fire Studio
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
