import { childProps } from "@/types";
import React from "react";
import Navbar from "./_components/navbar";

const layout = ({ children }: childProps) => {
  return (
    <div className="max-w-7xl mx-auto px-1">
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
