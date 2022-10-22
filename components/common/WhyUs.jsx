import React, { useEffect, useRef } from 'react'
// import whiteBg from '../../assets/img/bg/white-bg-5.jpg'
import styles from "../../styles/Services.module.css"
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

function WhyUs() {
  // const whyRef = useRef(null)
  // useEffect(() => {
  //   const whyEl = whyRef.current;
  //   gsap.fromTo(
  //     whyEl.querySelectorAll(".why_us_item"),
  //     {
  //       y: 40,
  //       opacity: 0
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       stagger: 0.33,
  //       duration: 1,
  //       ease: "ease",
  //       scrollTrigger: {
  //         trigger: whyEl,
  //         // start: "top center",
  //         // end: "bottom top",
  //         // scrub: true,
  //       },
  //     }
  //   );
  // })
  return (
    <section className={`${styles.why_us_bg} px-5 pb-20 sm:pb-20 py-10 sm:px-10 sm:pt-20 sm:pb-12 relative`}>
      {/* <img src={whiteBg} alt="" className="section-bg" /> */}
        <div className="text-center text-gray-700 mb-10 mx-auto">
          <h1 className="text-xl md:text-3xl uppercase font-semibold tracking-wide">
            Why Techspecialist
          </h1>
          <p className="text-sm md:text-base font-normal leading-loose md:leading-loose tracking-wide my-5 text-center">
            Our team has the expertise and relationships to get the right
            solution in place for your business.
          </p>
        </div>
        <div className={`${styles.why_us_wrap} text-gray-700 grid grid-cols-1 md:grid-cols-2`}>
          <div className={`${styles.why_us_item} bg-white font-normal leading-loose text-sm p-5 flex`}>
            <i className="fas fa-people-group text-xl mr-5 mt-3"></i>
            <p>
              Access to a dedicated solution team with years of industry
              experience
            </p>
          </div>
          <div className={`${styles.why_us_item} bg-white font-normal leading-loose text-sm p-5 flex`}>
            <i className="fas fa-object-ungroup text-xl mr-5 mt-3"></i>
            <p>
              Vendor agnostic approach – we design the solution based on the
              need identified during our discovery
            </p>
          </div>
          <div className={`${styles.why_us_item} bg-white font-normal leading-loose text-sm p-5 flex`}>
            <i className="fas fa-handshake text-xl mr-5 mt-3"></i>
            <p>
              Ability to leverage vendor relationships to obtain better pricing,
              eliminating the need to go direct
            </p>
          </div>
          <div className={`${styles.why_us_item} bg-white font-normal leading-loose text-sm p-5 flex`}>
            <i className="fas fa-suitcase text-xl mr-5 mt-3"></i>
            <p>
              End-to-end support through the entire sales process (i.e., design,
              implementation, installation, testing, and management)
            </p>
          </div>
        </div>
    </section>
  )
}

export default WhyUs