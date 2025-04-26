import React, { useEffect, useState } from "react";
import MainBanner from "../components/MainBanner";
import MainInfoBlock from "../components/MainInfoBlock";
import Services from "../components/Services";
import Cases from "../components/Cases";
import WhyWe from "../components/WhyWe";
import Form from "../components/Form";
import Header from "../components/Header";
const Home = () => {
  return (
    <>
      <Header />

      <div className="flex flex-col gap-10">
        <MainBanner />
        <MainInfoBlock />
        <div id="ourServices">
          <Services />
        </div>
        <div id="cases">
          <Cases />
        </div>
        <div id="whyWe">
          <WhyWe />
        </div>
        <div id="connectWithUs">
          <Form />
        </div>
      </div>
    </>
  );
};

export default Home;
