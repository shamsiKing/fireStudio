import React from "react";
import { Button } from "../ui/button";
import { childProps } from "@/types";

const MainButton = ({ children }: childProps) => {
  return (
    <Button className="rounded-full bg-orange-500 hover:bg-orange-600">
      {children}
    </Button>
  );
};

export default MainButton;
