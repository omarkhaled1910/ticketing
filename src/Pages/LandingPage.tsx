import React from "react";
import {
  ThumbUpOffAlt,
  PersonOutline,
  HandshakeOutlined,
  CalendarMonthOutlined,
  Search,
  ChevronRight,
} from "@mui/icons-material";

import SliderWIthIndicators from "../Components/SliderWithIndicator/SliderWIthIndicators";
import Footer from "../Components/Footer/Footer";
import SliderGrid from "../Components/SliderGrid/SliderGrid";
import { useTranslation, Trans } from "react-i18next";

const experts = [
  {
    id: 1,
    title: "Problem-Solving Skills",
    Icon: ThumbUpOffAlt,
    desc: "",
  },
  {
    id: 2,
    title: "One-Stop Services",
    Icon: PersonOutline,
  },
  {
    id: 3,
    title: "After Services",
    Icon: HandshakeOutlined,
  },
  {
    id: 4,
    title: "Rich Supply",
    Icon: CalendarMonthOutlined,
  },
];

const LandingPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <div
        style={{
          background:
            " linear-gradient(279deg, rgba(226,167,200,0.7819502801120448) 3%, rgba(217,17,65,0.6783088235294117) 49%, rgba(255,135,188,0.5606617647058824) 79%)",
          height: "550px",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div
        style={{
          transform: "translateX(-50%)",
          left: "50%",
          position: "absolute",
          top: 151,
          color: "white",
          textShadow: " 10px 3px 16px #23282d",
          width: "70%",
          maxWidth: "800px",
        }}
      >
        <h1 className="mb-20 text-left text-[30px] sm:text-[48px]" >
          {t("power")} <br /> {t("smart")}
        </h1>

        <div className="relative ">
          <input
            placeholder="search by artist, event or venue"
            className="border-none bg-white rounded-2xl px-6 py-3 w-full text-black"
          />
          <Search
            className="absolute right-4 top-3"
            style={{ color: "gray" }}
          />
        </div>
      </div>
      <SliderGrid />
      <section className="flex-center bg-[#ff1800a3]  text-white p-8 cursor-pointer">
        <h1 className=" text-2xl">find tickets</h1>
        <ChevronRight
          style={{
            height: 40,
            width: 40,
          }}
        />
      </section>
      <section
        style={{
          maskImage:
            "linear-gradient(to left, transparent, black 40%, black 60%, transparent 100%)",
          marginBottom: "40px",
          width: "100%",
          WebkitMaskImage:
            "linear-gradient(to left, transparent, black 40%, black 60%, transparent 100%)",
          position: "relative",
        }}
      >
        <h1 className="p-10 text-pink-400 text-center text-2xl">
          Browse by category
        </h1>
        <div className="flex justify-center">
          <SliderWIthIndicators />
        </div>
      </section>

      <section
        style={{
          paddingBlock: 10,
          background:
            "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(217,17,162,0.3449754901960784) 71%, rgba(255,10,118,0.5606617647058824) 95%)",
          marginBottom: "40px",
          width: "100%",
        }}
        className="  py-5  "
      >
        <div className="container">
          <h2 className="tracking-[2px] leading-tight text-[48px] sm:text-[64px] text-left  my-5 mb-10 text-pink-400">
            an
            <span
              style={{
                background:
                  "linear-gradient(to right, #f32170,  #ff6b08, #cf23cf, #eedd44)",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
              }}
            >
              {" "}
              epic{" "}
            </span>
            exper
            <span
              style={{
                background:
                  "linear-gradient(to right, #f32170,  #ff6b08, #cf23cf, #eedd44)",
                WebkitTextFillColor: "transparent",
                WebkitBackgroundClip: "text",
              }}
            >
              ience
            </span>
            <br />
            from purchase
            <br />
            through performance
          </h2>
          <div
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 0%, black 40%, transparent 100%)",
            }}
            className="mb-28 grid grid-cols-2 md:grid-cols-4 gap-10 justify-center  place-items-center h-full"
          >
            {experts.map(({ title, Icon }) => (
              <div
                key={title}
                className="flex-center-col gap-10 bg-white p-10  rounded-2xl  h-full  shadow-md hover:shadow-2xl duration-300 hover:border-blue-300 "
              >
                <p className=" !brightness-100  text-xl text-center text-pink-400">
                  Union Service have 15 years of import and export experience
                </p>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default LandingPage;
