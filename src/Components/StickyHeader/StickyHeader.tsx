import React from "react";
import Logo from "../Logo/Logo";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const StickyHeader = () => {
  return (
    <div className=" h-16 bg-white z-50 fixed top-0 w-full shadow-2xl ">
      <div className=" justify-around h-full flex ">
        <Logo />
        <Button className="!bg-blue-400 h-full !text-white !rounded-none !px-10">
          <Link to="/contact">GET A QUOTE</Link>
        </Button>
      </div>
    </div>
  );
};

export default StickyHeader;
