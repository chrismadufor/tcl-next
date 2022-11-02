import React from "react";
import Head from "next/head";
import Image from "next/image";
import ContactSection from "../components/ContactSection";
import Footer from "../components/common/Footer";
import Awards from "../components/common/Awards";
import Header from "../components/common/Header";
import heroObject from "../helper-files/heroComponentFile";
import HeroSection from "../components/common/HeroSection";
import MapBg from "../components/common/MapBg";
import styles from "../styles/Company.module.css";
import { values } from "../helper-files/values";
import { executiveTeam, otherTeam } from "../helper-files/team";
// import profile from "/assets/docs/techspecialist-profile.pdf"
function Company() {
  const company = heroObject.company;
  return (
    <div>
      <Head>
        <title>Our Company | {process.env.NEXT_PUBLIC_APP_NAME}</title>
        <meta
          name="description"
          content="We are a digital transformation consultancy company that delivers cutting edge IT Managed Services for enterprise organisations."
        />
        <meta
          name="keywords"
          content="Techspecialist, tech specialist, tech,cyber security, cyber, security, cloud, IT support, IT, IT services, Infrastructure, Tech Advisory,techspecialist,IT Abuja,Software,Software Abuja,cloud computing, Tech Nigeria, Tech company Monitoring, Continous Testing, Improvement, Backups, Problem Management, Capacity Management, Incident Mangement, Application Knowledge, First Level Support, Second Level Support, Third Level Support, Configuration Management, Release and Deployment"
        />
        <meta property="og:url" content="https://techspecialistlimited.com/company" />
        <meta property="og:title" content="Our Company | Techspecialist Consulting Limited" />
        <meta
          property="og:description"
          content="We are a digital transformation consultancy company that delivers cutting edge IT Managed Services for enterprise organisations."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Our Company | Techspecialist Consulting Limited" />
        <meta
          name="twitter:description"
          content="We are a digital transformation consultancy company that delivers cutting edge IT Managed Services for enterprise organisations."
        />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:site" content="@tclafrica" />
        <meta name="twitter:creator" content="@tclafrica"></meta>
      </Head>
      <main>
        <Header />
        <HeroSection
          img={company.img}
          heading={company.heading}
          text={company.text}
        />
        <section
          className={`${styles.section_bg} flex items-center justify-center py-10 sm:px-10 sm:py-20 lg:pt-28 sm:pb-12 relative`}
        >
          {/* <Image src="/assets/img/bg/white-bg-6.jpg" layout="fill" alt="" className="section-bg" /> */}
          <div className="who-we-are text-center text-gray-700 mb-10 sm:mb-20 mx-auto">
            <h1 className="text-xl md:text-3xl uppercase font-semibold tracking-wide mb-4">
              About Us
            </h1>
            <p className="text-sm md:leading-loose font-normal leading-loose tracking-wide my-5 text-center">
              We are a digital transformation consultancy company that delivers
              cutting edge IT Managed Services for enterprise organisations.
              Since 2008 we have been helping companies and established brands
              to reimagine and improve their team productivity as well as
              efficiency in their businesses through excellent IT Service
              delivery. We will partner with you to determine the right
              combination of technologies and services for your business—from
              the tech that exists today to the emerging tech of tomorrow. With
              our Managed IT services we take control of your system and
              technology burden, create a tech-driven digital strategy that
              improve your operations by optimising your systems and ensuring
              your digital assets are secured.
            </p>
            <a
              href="/assets/docs/techspecialist-profile.pdf"
              download="Techspecialist Profile.pdf"
            >
              <button
                className={`${styles.download_btn} font-semibold bg-transparent px-4 py-2 md:px-5 text-sm uppercase flex items-center`}
              >
                Download Profile
              </button>
            </a>
          </div>
        </section>
        <section
          className={`flex items-center justify-center py-10 sm:px-10 sm:py-20 lg:pt-28 sm:pb-12 relative ${styles.mission}`}
        >
          <MapBg />
          <div
            className={`who-we-are lg:flex justify-center text-center text-gray-700 mb-10 sm:mb-20 mx-auto ${styles.mission_div}`}
          >
            <div className="p-4 lg:p-10 lg:mx-10 mb-10 lg:mb-0">
              <h1 className="text-xl md:text-3xl uppercase font-semibold tracking-wide mb-4">
                Mission
              </h1>
              <p className="text-sm sm:leading-loose font-normal leading-loose tracking-wide my-5 text-center">
                Creating value for our corporate clients by delivering excellent
                IT services that enhance personnel productivity
              </p>
            </div>
            <div className="p-4 lg:p-10 lg:mx-10">
              <h1 className="text-xl md:text-3xl uppercase font-semibold tracking-wide mb-4">
                Vision
              </h1>
              <p className="text-sm sm:leading-loose font-normal leading-loose tracking-wide my-5 text-center">
                To be a leading service delivery firm in Africa, specializing in
                IT managed services and support.
              </p>
            </div>
          </div>
        </section>
        <section
          className={`${styles.values_bg} py-10 md:py-20 sm:pt-20 sm:pb-12 relative`}
        >
          <div className="who-we-are text-center text-gray-700 mx-auto">
            <h1 className="text-xl md:text-3xl uppercase font-semibold tracking-wide mb-10 text-white">
              Our Core Values
            </h1>
            <div
              className={`${styles.values_wrap} flex flex-wrap items-center justify-center`}
            >
              {values.map((item, index) => (
                <div key={index} className={`${styles.value_item}`}>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-10 sm:px-10 sm:pt-20 sm:pb-12">
          <div className="who-we-are text-center text-gray-700 mb-10 sm:mb-20 mx-auto">
            <h1 className="text-xl md:text-3xl uppercase font-semibold tracking-wide">
              Meet the Team
            </h1>
            <p className="text-sm font-normal leading-loose tracking-wide my-5 text-center">
              We are staffed with experienced consultants and industry
              practitioners who focus on specialized and innovative business
              solutions that help clients deal with their business challenges
              relating to personnel productivity, business performance, risk and
              compliance.
            </p>
            <div className="exec">
              <h1 className="px-2 text-lg md:text-2xl uppercase font-semibold tracking-wide my-10">
                Board and Management team
              </h1>
              <div
                className={`${styles.team_member_wrap} justify-center flex flex-wrap`}
              >
                {executiveTeam.map((member, index) => (
                  <div className={`${styles.team_member}`} key={index}>
                    <div className={`${styles.img_wrap}`}>
                      <img src={member.pic} alt="" />
                    </div>
                    <div className={`${styles.team_member_info}`}>
                      <p className="text-base font-semibold text-center">
                        {member.name}
                      </p>
                      <p className="text-sm italic font-normal text-center">
                        {member.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="exec">
              <h1 className="text-lg md:text-2xl uppercase font-semibold tracking-wide my-10">
                Other team members
              </h1>
              <div
                className={`${styles.team_member_wrap} justify-center flex flex-wrap`}
              >
                {otherTeam.map((member, index) => (
                  <div className={`${styles.team_member}`} key={index}>
                    <div className={`${styles.img_wrap}`}>
                      <img src={member.pic} alt="" />
                    </div>
                    <div className={`${styles.team_member_info}`}>
                      <p className="text-base font-semibold text-center">
                        {member.name}
                      </p>
                      <p className="text-sm italic font-normal text-center">
                        {member.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Awards />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default Company;
