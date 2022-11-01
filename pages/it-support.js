import React from "react";
import Head from "next/head";
import HeroSection from "../components/common/HeroSection";
import heroObject from "../helper-files/heroComponentFile";
import ContactSection from "../components/ContactSection";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/Services.module.css";
import WhyUs from "../components/common/WhyUs";

function ItSupport() {
  const itSupport = heroObject.itSupport;
  return (
    <div>
      <Head>
        <title>IT Support | {process.env.NEXT_PUBLIC_APP_NAME}</title>
        <meta name="description" content="We provide comprehensive IT Support for your workforce so they can do productive work. Your employees rely on the technology they use to be efficient and productive." />
        <meta
          name="keywords"
          content="Techspecialist, tech specialist, tech,cyber security, cyber, security, cloud, IT support, IT, IT services, Infrastructure, Tech Advisory,techspecialist,IT Abuja,Software,Software Abuja,cloud computing, Tech Nigeria, Tech company, Connect, Install, Network, Boot, BIOS, Login, Download, Update, Troubleshoot, Online, Support, reset, setup, configure, ticket, user, incidemt, advised, assisted, resolved, closed-out, escalate"
        />
        <meta property="og:url" content="https://techspecialistlimited.com/it-support" />
        <meta property="og:title" content="IT Support | Techspecialist Consulting Limited" />
        <meta
          property="og:description"
          content="We provide comprehensive IT Support for your workforce so they can do productive work. Your employees rely on the technology they use to be efficient and productive."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="IT Support | Techspecialist Consulting Limited" />
        <meta
          name="twitter:description"
          content="We provide comprehensive IT Support for your workforce so they can do productive work. Your employees rely on the technology they use to be efficient and productive."
        />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:site" content="@tclafrica" />
        <meta name="twitter:creator" content="@tclafrica"></meta>
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Nunito:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
      </Head>
      <main>
        <Header />
        <HeroSection
          img={itSupport.img}
          heading={itSupport.heading}
          text={itSupport.text}
        />
        <div className={`${styles.services_content_wrap}`}>
        <div className={`${styles.services_content}`}>
          <section
            id="it_management"
            className="px-5 py-10 sm:px-10 sm:pt-20 sm:pb-12"
          >
            <div className={`${styles.services_section_wrap}`}>
              <div className='lg:flex lg:items-center'>
                <div className={`${styles.services_text} text-gray-700 mb-10`}>
                  <h1 className="text-xl md:text-3xl uppercase font-semibold tracking-wide">
                    IT Support
                  </h1>
                  <p className="text-sm font-normal leading-loose md:leading-loose tracking-wide my-5">
                  We provide comprehensive IT Support for your workforce so they can do productive work. Your employees rely on the technology they use to be efficient and productive. When their technology stops, they stop and if you’re supporting them internally, your IT resources stop what they’re doing to jump in. This is where Techspecialist comes in to handle your day-to-day IT Support while you focus on your business growth. We turn your IT department into an indispensable resource your people will happily embrace. We provide you with a complete end-user solution with a best-in-class service experience that make your job easy and your employees’ support seamless. Our fully managed service resolves Tier 0 through Tier 2 user support requests with speed, empathy and ever-increasing efficiency. Our complete technology oversight — hardware and software sourcing, Data centre set-up, System administration, network management, responsive remote and onsite support. We manage all aspects of your information technology systems and operations by dedicating one centralized team as your point of contact, no matter how many regions the project or service spans, we ensure consistency, stability, and peace of mind. All of which contribute to the customer journey and outcome you deserve.
                  </p>
                </div>
                {/* <div className='services_img lg:ml-20'>
                  <img src={itOffer} alt="" />
                </div> */}
              </div>
              <div className={`${styles.service_item_wrap} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5`}>
                <div className={`${styles.service_section_item} text-gray-700`}>
                  <img src="/assets/img/servicedesk.jpeg" alt="" className='relative md:mr-5'/>
                  <div>
                    <h1 className="text-xl font-semibold uppercase flex items-center">
                      Service Desk
                    </h1>
                    <p className="text-sm font-normal leading-loose md:leading-loose tracking-wide my-5">
                    We turn Service Desk from a cost into an investment by handling 80% of your IT user support requests, addressing trending problems, and scaling intelligently right along with you. We free up your internal IT teams to focus on creating true enterprise value for your customers. We resolve all user support requests with speed, emphaty and ever-increasing efficiency.
                    </p>
                  </div>
                </div>
                <div className={`${styles.service_section_item} text-gray-700`}>
                  <img src="/assets/img/datacenter.jpg" alt="" className='relative md:mr-5' />
                  <div>
                    <h1 className="text-xl font-semibold uppercase flex items-center">
                      Data Centre Support
                    </h1>
                    <p className="text-sm font-normal leading-loose md:leading-loose tracking-wide my-5">
                    Techspecialist will take over responsibility of your data centre to ensure business continuity with server and storage management, network management, system updates, patch solutions, and security updates etc. We turn your IT department into an indispensable resource that your team will happily embrace.
                    </p>
                  </div>
                </div>
                <div className={`${styles.service_section_item} text-gray-700`}>
                  <img src="/assets/img/comms.jpg" alt="" className='md:mr-5'/>
                  <div>
                    <h1 className="text-xl font-semibold uppercase flex items-center">
                      Communication & Collaboration
                    </h1>
                    <p className="text-sm font-normal leading-loose md:leading-loose tracking-wide my-5">
                    Our Managed Communication and Collaboration offers a variety of solutions to keep your team connected. Our expertise and industry partnerships such as Polycom, Cestron, Logitech and Cisco Webex can help you identify and implement the right communication solution to fit your needs. 
                    </p>
                  </div>
                </div>
                <div className={`${styles.service_section_item} text-gray-700`}>
                  <img src="/assets/img/it-proc.jpg" alt=""className='md:mr-5'/>
                  <div>
                    <h1 className="text-xl font-semibold uppercase flex items-center">
                      Managed IT Procurement
                    </h1>
                    <p className="text-sm font-normal leading-loose md:leading-loose tracking-wide my-5">
                    Finding your way through the vast array of options for hardware and software to choose the right products for your business can be daunting —Techspecialist has solid partnerships with several suppliers so that we can access the most appropriate products for your business and deliver them quickly and at competitive prices. 
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

export default ItSupport;
