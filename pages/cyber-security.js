import React from 'react'
import Head from "next/head";
import HeroSection from "../components/common/HeroSection";
import heroObject from "../helper-files/heroComponentFile";
import ContactSection from "../components/ContactSection";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/Services.module.css";
import WhyUs from "../components/common/WhyUs";

function CyberSecurity() {
  const cyberSecurity = heroObject.cyberSecurity;
  return (
    <div>
      <Head>
        <title>Cyber Security | Techspecialist Consulting Limited</title>
        <meta name="description" content="Our cybersecurity specialists hunt for threats, monitor data and alerts from your environments, and flag anomalies 24/7 with the aid of modern detection technology. We help you protect all your workstations, servers, cloud services, IoT devices, and your digital environments." />
        <meta
          name="keywords"
          content="Techspecialist, tech specialist, tech,cyber security, cyber, security, cloud, IT support, IT, IT services, Infrastructure, Tech Advisory,techspecialist,IT Abuja,Software,Software Abuja,cloud computing, Tech Nigeria, Tech company, Attack, Attacker, Secure, Mitigate, Defend, Data, Hack, Privacy, Internet, Due Care, Due Dilligence, Threat, Vulnerability, Control, Risk, Confidentiality, Integrity, Availability, Authorization, Access, Information security standard, Information security policy, Data breach, Vulnerability management"
       />
       <meta property="og:url" content="https://techspecialistlimited.com/cyber-security" />
        <meta property="og:title" content="Cyber Services | Techspecialist Consulting Limited" />
        <meta
          property="og:description"
          content="Our cybersecurity specialists hunt for threats, monitor data and alerts from your environments, and flag anomalies 24/7 with the aid of modern detection technology. We help you protect all your workstations, servers, cloud services, IoT devices, and your digital environments."
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Cyber Services | Techspecialist Consulting Limited" />
        <meta
          name="twitter:description"
          content="Our cybersecurity specialists hunt for threats, monitor data and alerts from your environments, and flag anomalies 24/7 with the aid of modern detection technology. We help you protect all your workstations, servers, cloud services, IoT devices, and your digital environments."
        />
        <meta name="twitter:image" content="/logo.png" />
        <meta name="twitter:site" content="@tclafrica" />
        <meta name="twitter:creator" content="@tclafrica"></meta>
        <link rel="icon" href="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Nunito:wght@300;400;500;700&display=swap" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
      </Head>
      <main>
        <Header />
        <HeroSection
          img={cyberSecurity.img}
          heading={cyberSecurity.heading}
          text={cyberSecurity.text}
        />
        <div className={`${styles.services_content_wrap}`}>
        <div className={`${styles.services_content}`}>
          <section
            id="cyber-security"
            className="px-5 py-10 sm:px-10 sm:pt-20 sm:pb-12"
          >
            <div className={`${styles.services_section_wrap}`}>
              <div className='lg:flex lg:items-center'>
                <div className={`${styles.services_text} text-gray-700 mb-10`}>
                  <h1 className="text-xl md:text-3xl uppercase font-semibold tracking-wide">
                    Cyber Security
                  </h1>
                  <p className="text-sm font-normal leading-loose md:leading-loose tracking-wide my-5">
                  Security has become more than just an IT problem. Everyone is part of the security process, just like everyone is the solution. Data breaches cost organisations millions of dollars and years of productivity. 
                  It can no longer be an afterthought and functional requirements can no longer take precedence over security requirements.  Security is no longer a blocker to achievements, it is a key component for your organizational growth. Our comprehensive risk methodology for managed cybersecurity services gives our customers the ability to safeguard their environments and critical business data. This includes continuous threat detection and response, leading vulnerability management. information security strategy, network assessments and remediation plan.
                  Our cybersecurity specialists hunt for threats, monitor data and alerts from your environments, and flag anomalies 24/7 with the aid of modern detection technology. We help you protect all your workstations, servers, cloud services, IoT devices, and your digital environments.
                  </p>
                </div>
                {/* <div className='services-img lg:ml-20'>
                  <img src={cyberOffer} alt="" />
                </div> */}
              </div>
              <div className={`${styles.service_item_wrap} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5`}>
                <div className={`${styles.service_section_item} text-gray-700`}>
                  <img src="/assets/img/vulassess.jpeg" alt="" className='md:mr-5'/>
                  <div>
                    <h1 className="text-xl font-semibold uppercase flex items-center">
                      Vulnerability Assessment
                    </h1>
                    <p className="text-sm font-normal leading-loose md:leading-loose tracking-wide my-5">
                    We offer services for potential vulnerabilities in your defense as well as finding malware implanted in your system. We combine the best of breed technology with the skills of top professionals in the field and help you protect your digital assets.
                    </p>
                  </div>
                </div>
                <div className={`${styles.service_section_item} text-gray-700`}>
                  <img src="/assets/img/netassess.jpeg" alt="" className='md:mr-5'/>
                  <div>
                    <h1 className="text-xl font-semibold uppercase flex items-center">
                      Network Security Assessment
                    </h1>
                    <p className="text-sm font-normal leading-loose md:leading-loose tracking-wide my-5">
                    Our expert team monitors numerous threat intelligence feeds and constantly updates detection rules, so the findings are enriched with the latest threat intel that is relevant to your environments and line of business and actions to mitigate them. 
                    </p>
                  </div>
                </div>
                <div className={`${styles.service_section_item} text-gray-700`}>
                  <img src="/assets/img/infosec.jpeg" alt="" className='md:mr-5'/>
                  <div>
                    <h1 className="text-xl font-semibold uppercase flex items-center">
                      Information Security Training
                    </h1>
                    <p className="text-sm font-normal leading-loose md:leading-loose tracking-wide my-5">
                    The best way to mitigate cyber security risk is through effective, comprehensive training of users about information security. We work with your organization to customize security training your team needs to stay ahead against cyber-attacks.
                    </p>
                  </div>
                </div>
                <div className={`${styles.service_section_item} text-gray-700`}>
                  <img src="/assets/img/stratinfo.jpeg" alt="" className='md:mr-5'/>
                  <div>
                    <h1 className="text-xl font-semibold uppercase flex items-center">
                      Strategic Information Security Planning
                    </h1>
                    <p className="text-sm font-normal leading-loose md:leading-loose tracking-wide my-5">
                    We help you protect your brand and reputation with the right strategy. Showing your customer and partners that you take cybersecurity seriously will build trust and increase your value in their eyes. 
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
  )
}

export default CyberSecurity