// import React from 'react'
import Head from "next/head";
import Image from 'next/image';
import Header from "../components/common/Header"
import heroObject from "../helper-files/heroComponentFile";
import HeroSection from "../components/common/HeroSection";
import ClientsIconSlide from "../components/carousels/ClientsIconSlide";
import ContactSection from "../components/ContactSection"
import CaseStudies from "../components/carousels/CaseStudies";
import chooseUs from "../helper-files/choose-us";
import Footer from "../components/common/Footer";
import styles from "../styles/Clients.module.css"

function Clients() {
  const clients = heroObject.clients;
  return (
    <div>
      <Head>
        <title>Meet our Clients | Techspecialist Consulting Limited</title>
        <meta name="description" content="Top class organsiations and established companies have chosen Techspecialist as a reliable IT partner." />
        <meta
          name="keywords"
          content="Techspecialist, tech specialist, tech,cyber security, cyber, security, cloud, IT support, IT, IT services, Infrastructure, Tech Advisory,techspecialist,IT Abuja,Software,Software Abuja,cloud computing, Tech Nigeria, Tech company Monitoring, Continous Testing, Improvement, Backups, Problem Management, Capacity Management, Incident Mangement, Application Knowledge, First Level Support, Second Level Support, Third Level Support, Configuration Management, Release and Deployment"
        />
        <meta property="og:url" content="https://techspecialistlimited.com/clients" />
        <meta property="og:title" content="Meet our Clients | Techspecialist Consulting Limited" />
        <meta
          property="og:description"
          content="We are an IT service delivery firm that assists enterprise organizations with cutting-edge IT managed services to enhance personnel productivity and efficiency."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Meet our Clients | Techspecialist Consulting Limited" />
        <meta
          name="twitter:description"
          content="Top class organsiations and established companies have chosen Techspecialist as a reliable IT partner."
        />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:site" content="@tclafrica" />
        <meta name="twitter:creator" content="@tclafrica"></meta>
        <link rel="icon" href="/logo.png" />
      </Head>
    <main>
      <Header />
      <HeroSection
        img={clients.img}
        heading={clients.heading}
        text={clients.text}
      />
      <section className="text-center py-10 sm:px-10 sm:py-20 lg:pt-20 sm:pb-12 text-gray-700">
        <h1 className="text-xl md:text-3xl uppercase font-semibold tracking-wide mb-4">
          Meet Our Clients
        </h1>
        <p className="text-sm md:text-base font-normal leading-loose tracking-wide my-5 mb-10 text-center">
          Top class organsiations and established companies have chosen
          Techspecialist as a reliable IT partner.
        </p>
        <ClientsIconSlide />
      </section>
      <section className="caseStudies text-center py-10 sm:px-10 sm:py-24 text-gray-700 bg-gray-100">
        <h1 className="text-xl md:text-3xl uppercase font-semibold tracking-wide mb-4 md:mb-10">
          Our Client's success stories
        </h1>
        <CaseStudies />
      </section>
      <section className={`${styles.client_about} text-center py-10 sm:py-20 lg:pt-20 sm:pb-12 relative`}>
        <div className="section-bg relative">
        <Image src="/assets/img/cloud-offer.jpg" alt="" layout='fill' />
        </div>
        <div className={`${styles.client_about_text} text-white py-10 px-5 sm:py-14 sm:px-10`}>
          <h1 className="text-xl md:text-2xl font-semibold mb-4 uppercase">
            About Techspecialist
          </h1>
          <p className="text-sm md:text-base md:leading-loose text-center">
            Established in 2008, Techspecialist has steadily been growing and
            earning the trust of hundreds of businesses by providing them with
            Strategic IT Managed Services that empower their businesses and
            enable them to be the best at what they do.
          </p>
          <a href="#contactForm">
          <button className="uppercase px-4 py-2 mt-8 border-2 border-white hover:bg-white font-semibold text-sm">
            Talk with the team
          </button>
          </a>
        </div>
      </section>
      <section className={`${styles.choose_us} text-center py-10 sm:px-10 sm:py-20 bg-gray-100 text-gray-700`}>
        <h1 className="text-xl md:text-3xl uppercase font-semibold tracking-wide mb-8">
          Why Clients Choose Us
        </h1>
        <div className={`${styles.choose_us_wrap} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-gray-200`}>
          {chooseUs.map((item, index) => (
            <div key={index} className={`${styles.choose_us_item} text-center bg-white p-10`}>
              <img src={item.img} alt="" />
              <h1 className="text-base font-semibold mb-2">{item.title}</h1>
              <p className="text-sm font-normal leading-loose text-center">{item.text}</p>
            </div>
          ))}
        </div>
      </section>
      <ContactSection />
    </main>
    <Footer />
    </div>
  )
}

export default Clients