import React from "react";
import Map from "../Components/Map/Map";

const AboutUs = () => {
  return (
    <div>
      <h1 className="pt-20 text-center bg-blue-100 text-5xl p-10 border-t border-b border-black">
        About Our History ,Present and future
      </h1>

      <div className=" text-gray-700 container ">
        <h2 className="my-5 text-black text-3xl">
          Everything you need to know about us
        </h2>
        <p>
          Union Service is one member of Sellers Union Group, Sellers Union
          Group was established in 2010, which grew out of Sellers Union Co.,
          Ltd founded in 1997. For now, it holds controlling interest of 14
          subsidiaries including Union Invest, Sellers Union, Do Well, Union
          Source, Union Vision, Union Chance, and so on. Total registered
          capital of the group and subsidiaries exceeds 300 million RMB. We take
          import and export of the daily products as our core business.
        </p>
        <p>
          After 20years rapid development, we now ranked top 100 comprehensive
          enterprise in Ningbo city, top 100 in Zhejiang service industry and
          Top 500 enterprise in Chinese service industry with annual turnover
          more than 500 million dollars. Our group has nearly 1000 staff now and
          has established a stable trade relationship with more than 1,500
          buyers from over 100 countries and areas, Important suppliers under
          cooperation are over 3,000. Based on our customer needs, we set up
          Yiwu branch office in 1999 to meet their commodity items purchasing
          needs, and Shantou office in 2012, because there are huge number of
          our customers are in need of decent, novelty, low price and high
          quality toys.
        </p>
      </div>
      <div className="container">
        <Map />
        <br />
        <div className="shadow-2xl w-2/3 p-10 border mx-auto">
        needs, and Shantou office in 2012, because there are huge number of
          our customers are in need of decent, novelty, low price and high
          quality toys.
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
