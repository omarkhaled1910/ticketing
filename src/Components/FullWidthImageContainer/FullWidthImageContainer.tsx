import React from "react";
import bridge from "../../Assets/bridge.jpg";

const FullWidthImageContainer = ({ items, iconStyle = {}, title = "" }) => {
  return (
    <section
      style={{
        background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${bridge})`,

        height: "500px",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "bottom",
        backgroundSize: "cover",
      }}
      className="relative  drop-shadow-lg "
    >
      <div className="absolute w-full h-full">
        <h2 className=" absolute top-7 w-full text-white text-center text-3xl">{title}</h2>
        <div className=" px-10 grid grid-cols-4 gap-10 justify-center  place-items-center h-full">
          {items.map(({ title, Icon }) => (
            <div className="flex-center-col gap-10 !text-white">
              {Icon ? (
                <Icon
                  style={{
                    height: 80,
                    width: 90,
                    color: "white",
                    ...iconStyle,
                  }}
                />
              ) : (
                ""
              )}
              <h3 className=" text-2xl">{title}</h3>
              <p className=" !brightness-100 text-white text-center">
                Union Service have 15 years of import and export experience, so
                we have the ability to deal with different urgent problems.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullWidthImageContainer;
