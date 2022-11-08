import React from "react";
import Link from "next/link";
import Button from "/components/Button";
import Socials from "/components/Socials";
import { ContactUs } from "../ContactUs/ContactUs";


const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 className="text-2xl text-bold">Contact.</h1>
          <div className="mt-10">
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              Let&apos;s capture your best moments together.
            </h1>
            <h2 className="text-2xl text-bold">
              Call 713 659-945
              <ContactUs/>
            </h2>
            {/* <Button type= "primary" onClick={() => window.open("mailto:s.l.studios2022@gmail.com?subject=Still Life Photography info & sessions")}>
              Click here to schedule a session
            </Button> */}

              <Socials className="mt-2 laptop:mt-5" />
            <div className="mt-10">
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
        Owned and operated by ♠️ TheProjectHoldings LLC. ♠️
      </h1>
    </>
  );
};

export default Footer;
