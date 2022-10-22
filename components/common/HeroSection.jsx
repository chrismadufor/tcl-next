import React, { useEffect, useRef } from 'react'
// import { gsap } from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

function HeroSection({img, heading, text}) {
  // const heroRef = useRef(null)
  // useEffect(() => {
  //   const heroEl = heroRef.current;
  //   gsap.fromTo(
  //     heroEl.querySelector(".title"),
  //     {
  //       y: 50,
  //       opacity: 0
  //     },
  //     {
  //       y: 0,
  //       opacity: 1,
  //       stagger: 0.33,
  //       duration: 1,
  //       ease: "ease",
  //       scrollTrigger: {
  //         trigger: heroEl.querySelector(".title"),
  //         // start: "top center",
  //         // end: "bottom top",
  //         // scrub: true,
  //       },
  //     }
  //   );
  //   gsap.fromTo(
  //     heroEl.querySelector(".tagline"),
  //     {
  //       y: 70,
  //       stagger: 0.33,
  //     },
  //     {
  //       y: 0,
  //       stagger: 0.33,
  //       duration: 1,
  //       ease: "ease",
  //       scrollTrigger: {
  //         trigger: heroEl.querySelector(".tagline"),
  //         // start: "top center",
  //         // end: "bottom top",
  //         // scrub: true,
  //       },
  //     }
  //   );
  //   gsap.fromTo(
  //     heroEl.querySelector("button"),
  //     {
  //       y: 90,
  //       stagger: 0.33,
  //     },
  //     {
  //       y: 0,
  //       stagger: 0.33,
  //       duration: 1,
  //       ease: "ease",
  //       scrollTrigger: {
  //         trigger: heroEl.querySelector("button"),
  //         // start: "top center",
  //         // end: "bottom top",
  //         // scrub: true,
  //       },
  //     }
  //   );
  // });
  return (
    <div className="hero hero-section overflow-hidden">
      <img src={img} alt="" />
      <div className="hero-text md:px-12 xl:px-20">
        <h1 className="title text-xl sm:text-2xl md:text-4xl font-semibold uppercase tracking-wide md:leading-tight">
          {heading}
        </h1>
        <p className="tagline text-sm sm:text-base mb-5 mt-5 font-normal tracking-wider leading-loose md:leading-loose md:mb-10 ">
          {text}
        </p>
        <a href="#contactForm">
        <button className="uppercase px-4 py-2 text-white border-2 border-white hover:bg-white font-semibold text-sm">
          Talk with the team
        </button>
        </a>
      </div>
    </div>
  )
}

export default HeroSection


