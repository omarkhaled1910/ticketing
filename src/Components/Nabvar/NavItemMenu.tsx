import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import React from "react";

const NavItemMenu = ({ items = [], show = false }) => {
  const number = items.length;
  return (
    <>
      <div
        style={{
          maxHeight: show ? number * 80 : 0,
          overflow: "hidden",
          transition: "max-height 0.8s ",
        }}
        className=" absolute top-16 shadow-2xl bg-white text-black z-50"
      >
        {show &&
          items.map(({ page, link }) => (
            <div className="p-5 border-y-[1px] border-blue-100" key={link}>
              {page}
            </div>
          ))}
      </div>
      {show && (
        <div className="fixed top-[47px]">
          <ArrowDropUp className="!h-8 !w-8" htmlColor="white" />
        </div>
      )}
    </>
  );
};

export default NavItemMenu;
