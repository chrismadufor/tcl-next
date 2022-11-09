import React from "react";
import Head from "next/head";
import HeroSection from "../components/common/HeroSection";
import heroObject from "../helper-files/heroComponentFile";
import ContactSection from "../components/ContactSection";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/Services.module.css";
import WhyUs from "../components/common/WhyUs";

function CloudSecurity() {
  const cloudServices = heroObject.cloudServices;
  return (
    <div>
      <Head>
        <title>Cloud Services | Techspecialist Consulting Limited</title>
        <meta name="description" content="We are a Cloud Ecosystem Integrator and have the expertise and domain knowledge to consult, design, build, integrate and manage a shared multi-tenant Private Cloud Infrastructure that is highly efficient, automated and virtualized." />
        <meta
          name="keywords"
          content="Techspecialist, tech specialist, tech,cyber security, cyber, security, cloud, IT support, IT, IT services, Infrastructure, Tech Advisory,techspecialist,IT Abuja,Software,Software Abuja,cloud computing, Tech Nigeria, Tech company, Server, Cloud computing, Troubleshooting, Computer networks, Back and Replication, Data archiving, Cybersecurity, Network security, Cloud storage, Hybrid cloud, Network assessment, Workstation, Digital asset, Implementation, Installation, Testing and management"
        />
        <meta property="og:url" content="https://techspecialistlimited.com/cloud-services" />
        <meta property="og:title" content="Cloud Services | Techspecialist Consulting Limited" />
        <meta
          property="og:description"
          content="We are a Cloud Ecosystem Integrator and have the expertise and domain knowledge to consult, design, build, integrate and manage a shared multi-tenant Private Cloud Infrastructure that is highly efficient, automated and virtualized."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Cloud Services | Techspecialist Consulting Limited" />
        <meta
          name="twitter:description"
          content="We are a Cloud Ecosystem Integrator and have the expertise and domain knowledge to consult, design, build, integrate and manage a shared multi-tenant Private Cloud Infrastructure that is highly efficient, automated and virtualized."
        />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:site" content="@tclafrica" />
        <meta name="twitter:creator" content="@tclafrica"></meta>
      </Head>
      <main>
        <Header />
        <HeroSection
          img={cloudServices.img}
          heading={cloudServices.heading}
          text={cloudServices.text}
        />
        <div className={`${styles.services_content_wrap}`}>
        <div className={`${styles.services_content}`}>
          <section
            id="cloud-services"
            className="px-5 py-10 sm:px-10 sm:pt-20 sm:pb-12"
          >
            <div className={`${styles.services_section_wrap}`}>
              <div className='lg:flex lg:items-center'>
                <div className={`${styles.services_text} text-gray-700 mb-10`}>
                  <h1 className="text-xl md:text-3xl uppercase font-semibold tracking-wide">
                    Cloud Services
                  </h1>
                  <p className="text-sm font-normal leading-loose md:leading-loose tracking-wide my-5">
                  The impact of COVID-19 has created a situation where the need for the Digital Workplace is crucial, as large parts of the workforce are being fast-tracked to function as digital nomads. We offer office 365, Cloud Infrastructure deployment and migration, and help achieve migration and integration of legacy systems to Azure through deploying internal portals(intranet). We are a Cloud Ecosystem Integrator and have the expertise and domain knowledge to consult, design, build, integrate and manage a shared multi-tenant Private Cloud Infrastructure that is highly efficient, automated and virtualized.
                  </p>
                </div>
             
              </div>
              <div className={`${styles.service_item_wrap} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10`}>
                <div className={`${styles.service_section_item} text-gray-700`}>
                  <img src="/assets/img/modwork.jpeg" alt="" className='md:mr-5'/>
                  <div>
                    <h1 className="text-xl font-semibold uppercase flex items-center">
                      Modern WorkPlace 
                    </h1>
                    <p className="text-sm font-normal leading-loose md:leading-loose tracking-wide my-5">
                    Techspecialist supports businesses with end-to-end Microsoft 365 projects, combining the best of Microsoft’s leading suite of collaboration apps, security and compliance tools and Modern Desktop productivity to deliver a fully-integrated platform that truly empowers your workforce to achieve more.
                    </p>
                  </div>
                </div>
                <div className={`${styles.service_section_item} text-gray-700`}>
                  <img src="/assets/img/mic365.gif" alt="" className='md:mr-5 object-top'/>
                  <div>
                    <h1 className="text-xl font-semibold uppercase flex items-center">
                      Microsoft 365
                    </h1>
                    <p className="text-sm font-normal leading-loose md:leading-loose tracking-wide my-5">
                    With Microsoft 365 we you help maximize your technology investment bringing greater mobility, increased productivity and better business continuity with well-known Microsoft apps such as Email platform, Word, Excel and PowerPoint, alongside Teams and SharePoint, which improves how people communicate and collaborate.
                    </p>
                  </div>
                </div>
                <div className={`${styles.service_section_item} text-gray-700`}>
                  <img src="/assets/img/azure.png" alt="" className='md:mr-5'/>
                  <div>
                    <h1 className="text-xl font-semibold uppercase flex items-center">
                      Microsoft Azure
                    </h1>
                    <p className="text-sm font-normal leading-loose md:leading-loose tracking-wide my-5">
                    Our Azure Services includes migration assessments, deployment plans and cloud optimization, ensuring the best performance from your infrastructure. Benefit from the powerful capabilities, flexibility and cost savings of the cloud service offering, without giving up your existing systems or losing control of your data.
                    </p>
                  </div>
                </div>
                </div>
            </div>
          </section>
        </div>
      </div>
        <WhyUs />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default CloudSecurity;
