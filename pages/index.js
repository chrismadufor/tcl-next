import Head from "next/head";
import Header from "../components/common/Header";
import Awards from "../components/common/Awards";
import Footer from "../components/common/Footer";
import HeroSlider from "../components/carousels/HeroSlider";
import PartnerIconSlide from "../components/carousels/PartnerIconsSlide";
import WhatWeOffer from "../components/WhatWeOffer";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
        <meta
          name="description"
          content="We are an IT service delivery firm that assists enterprise organizations with cutting-edge IT managed services to enhance personnel productivity and efficiency."
        />
        <meta
          name="keywords"
          content="Techspecialist, tech specialist, tech, tcl abuja, tcl nigeria, tcl, tech companies in Abuja, top tech companies in Nigeria, top tech companies in Abuja, tech company in Nigeria, ,cyber security, cyber, security, cloud, IT support, IT, IT services, Infrastructure, Tech Advisory,techspecialist,IT Abuja, Software, Software Abuja,cloud computing, Tech Nigeria, Tech company Monitoring, Continous Testing, Improvement, Backups, Problem Management, Capacity Management, Incident Mangement, Application Knowledge, First Level Support, Second Level Support, Third Level Support, Configuration Management, Release and Deployment, Enteprise Content Management, content management, enterprise content, enterprise Management, ecm, ecm in abuja"
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:url" content="https://techspecialistlimited.com/" />
        <meta property="og:title" content="Techspecialist Consulting Limited" />
        <meta
          property="og:description"
          content="We are an IT service delivery firm that assists enterprise organizations with cutting-edge IT managed services to enhance personnel productivity and efficiency."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Techspecialist Consulting Limited" />
        <meta
          name="twitter:description"
          content="We are an IT service delivery firm that assists enterprise organizations with cutting-edge IT managed services to enhance personnel productivity and efficiency."
        />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:site" content="@tclafrica" />
        <meta name="twitter:creator" content="@tclafrica"></meta>
      </Head>
      <main>
        {/* <GoToTop /> */}
        <Header />
        <HeroSlider />
        <section className="py-10 sm:pt-20 sm:pb-12 relative">
          <div className="who-we-are text-center text-gray-700 sm:py-10 lg:py-14 mb-10 sm:mb-20 mx-auto">
            <h1 className="text-xl md:text-3xl uppercase font-semibold tracking-wide">
              Who We Are
            </h1>
            <p className="text-sm font-normal leading-loose md:leading-loose tracking-wider my-5">
              With our many years of experience supporting fast-growing
              technology companies, we have been providing the bridge between
              users and technology. We make technology your people???s greatest
              ally so you can scale faster. Thus, we relentlessly innovate IT
              services to help organisations gain the ultimate competitive
              advantage: an unstoppable force of happy, productive people. Our
              team will help design your technology roadmap, implement systems
              that are cost-effective, cyber secure and future-proof, and
              provide IT support to your staff in plain English ??? no matter
              where your colleagues or services are based anywhere in the world.
            </p>
          </div>
          <PartnerIconSlide />
        </section>
        <WhatWeOffer />
        <Awards />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
