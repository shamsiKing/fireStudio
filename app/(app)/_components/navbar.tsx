import Logo from "@/components/shared/logo";
import MainButton from "@/components/shared/mainButton";
import { navs } from "@/constants";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 flex justify-between items-center">
      <Logo />
      <nav className="grid grid-flow-col font-medium max-md:hidden">
        {navs.map((item) => (
          <Link
            className="hover:shadow transition-all text-foreground/85 hover:text-foreground hover:bg-foreground/5 hover:border-foreground/20 border border-transparent px-3 p-1 text-[15px] rounded-full active:border-b-red-800 active:bg-orange-500 active:text-white"
            key={item.navLink}
            href={item.navLink}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="grid grid-flow-col ">
        <MainButton>Sign in</MainButton>
        <MainButton>Sign in</MainButton>
      </div>
    </div>
  );
};

export default Navbar;
