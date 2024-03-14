import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Navbar from "../Nabvar/Nabvar";
import { Outlet } from "react-router-dom";
import StickyHeader from "../StickyHeader/StickyHeader";

const AppLayout = ({ isHome = false }) => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 450) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <ToastContainer />
      <Navbar isHome={isHome} />
      {isSticky && <StickyHeader />}
      <Outlet />
    </div>
  );
};

export default AppLayout;
