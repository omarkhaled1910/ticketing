import React from "react";
import callCenter from "../Assets/callCenter.jpg";
import { Button, TextField } from "@mui/material";
import CountrySelect from "../Components/CountrySelect/CountrySelect";

const ContactUs = () => {
  return (
    <section>
      <div
        style={{
          background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${callCenter})`,

          height: "350px",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="relative mb-5 drop-shadow-lg "
      />
      <div className="container flex gap-10">
        <div className=" bg-slate-500 p-20 flex-1  text-2xl text-white">

            <h2>
            Give us a call or drop by anytime, we endeavor to answer all inquiries within 24 hours on business days.
            </h2>
            <p className="mt-5 text-lg">
            4F Union Group Building,No529 ZongZe North Road,Yiwu,China 322000
E:sales@unionservice.com.cn
P:+86-159 06791672(Best to contact this,I’m Mr.Michael)
T:+86-579 85096127
            </p>

        </div>
        <div className="flex-1 flex flex-col gap-5">
            <h1 className="mb-5 text-2xl">
            Get a quick quote for your next project
            </h1>
            <TextField label="Your Name" fullWidth />
            <CountrySelect  />
            <TextField label="Your NUmber" fullWidth />
            <TextField label="Your Email" fullWidth />

        <Button className=" !bg-cyan-100 w-20" >Send</Button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
