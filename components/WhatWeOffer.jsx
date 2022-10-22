import React, { useState } from "react";
import ParticlesBg from "./common/Particles";
import styles from "../styles/Home.module.css";
import offerStyles from "../styles/Offer.module.css";
import Image from "next/image";

function WhatWeOffer() {
  let [showIT, setShowIt] = useState(true);
  let [showCyber, setShowCyber] = useState(false);
  let [showCloud, setShowCloud] = useState(false);

  const onClickIT = () => {
    if (showIT === false) {
      setShowIt(true);
      setShowCyber(false);
      setShowCloud(false);
    }
    console.log("Clicked IT");
  };

  const onClickCyber = () => {
    if (showCyber === false) {
      setShowIt(false);
      setShowCyber(true);
      setShowCloud(false);
    }
  };

  const onClickCloud = () => {
    if (showCloud === false) {
      setShowIt(false);
      setShowCyber(false);
      setShowCloud(true);
    }
  };

  return (
    <section
      className={`${offerStyles.tabSection} py-10 sm:py-20 sm:px-10 md:pb-24 px-3 bg-transparent text-center text-gray-700 mx-auto relative offer-bg`}
    >
      <ParticlesBg />
      <h1 className="text-xl md:text-3xl uppercase font-semibold tracking-wide mb-10 md:mb-14">
        What We Offer
      </h1>
      <div
        className={`${offerStyles.tabs} grid grid-cols-3 bg-white border-b-2 border-gray-200`}
      >
        <div
          onClick={() => onClickIT()}
          className={
            showIT
              ? `uppercase text-xs md:text-sm xl:text-base py-4 sm:p-4 cursor-pointer ${offerStyles.active_tab}`
              : "uppercase text-xs md:text-sm xl:text-base py-4 sm:p-4 cursor-pointer"
          }
        >
          IT Support
        </div>
        <div
          onClick={() => onClickCyber()}
          className={
            showCyber
              ? `uppercase text-xs md:text-sm xl:text-base py-4 sm:p-4 cursor-pointer ${offerStyles.active_tab}`
              : "uppercase text-xs md:text-sm xl:text-base py-4 sm:p-4 cursor-pointer"
          }
        >
          Cybersecurity
        </div>
        <div
          onClick={() => onClickCloud()}
          className={
            showCloud
              ? `uppercase text-xs md:text-sm xl:text-base py-4 sm:p-4 cursor-pointer ${offerStyles.active_tab}`
              : "uppercase text-xs md:text-sm xl:text-base py-4 sm:p-4 cursor-pointer"
          }
        >
          Cloud Services
        </div>
      </div>
      <div className={`${offerStyles.tab_content_wrap} shadow-md`}>
        <div
          className={
            showIT === true
              ? `${offerStyles.tab_content_active}`
              : `${offerStyles.tab_content}`
          }
        >
          <div className={offerStyles.tab_image}>
            <Image src="/assets/img/it-offer.jpg" layout="fill" alt="" />
          </div>
          <p className="font-normal text-sm tracking-wider md:py-10 md:pr-10">
            Whether you are a small business or a large enterprise, your network
            and IT infrastructure serves as the backbone of your entire business
            operations. Its health and well-being are critical to your business
            strategy, growth, and success. This is why managed IT services are
            one of the most important factors in business development. Our
            services provide you with end-to-end IT management services and
            support for all covered technologies (e.g., computers, laptops,
            tablets, BYOD devices, servers, printers, network devices, cloud
            technologies), so you can stay on top of your game building a
            competitive advantage in your marketplace.
          </p>
        </div>
        <div
          className={
            showCyber === true
              ? `${offerStyles.tab_content_active}`
              : `${offerStyles.tab_content}`
          }
        >
          <div className={offerStyles.tab_image}>
            <Image src="/assets/img/cyber-offer.jpg" alt="" layout="fill" />
          </div>
          <p className="font-normal text-sm tracking-wider md:py-10 md:pr-10">
            Information Security is as critical to your organization as any
            other business function, and is an essential component of managed IT
            services. We focus on protecting your business through our
            Techspecialist Cyber Security Services to give you peace of mind
            that your data is always secure. Our solutions include a wide-range
            of services, including managed anti-virus, anti-spam, and
            anti-malware, advanced email recovery services, 24x7x365 real-time
            security monitoring, and end-user security awareness training.
            Enhance your organization's security with Techspecialist's managed
            IT support services.
          </p>
        </div>
        <div
          className={
            showCloud === true
              ? `${offerStyles.tab_content_active}`
              : `${offerStyles.tab_content}`
          }
        >
          <div className={offerStyles.tab_image}>
            <Image src="/assets/img/cloud-offer.jpg" layout="fill" alt="" />
          </div>
          <p className="font-normal text-sm tracking-wider md:py-10 md:pr-10">
            If you’re ready to accelerate your business growth with cloud
            services, our team of certified professionals can guide you towards
            success with the right cloud solution that works best for your
            business. From design, selection, implementation, and support, we do
            it all. Techspecialist Managed Cloud Services include: cloud
            advisor, cloud builder, cloud provider, and cloud manager. Leverage
            the power of the cloud with Techspecialist serving as your cloud
            solution provider.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
