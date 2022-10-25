import React, { useState, useEffect } from "react";
import caseStudies from "../../helper-files/case_studies";
import { FreeMode, Navigation, Thumbs, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from "../../styles/Carousel.module.css";
import clientStyles from "../../styles/Clients.module.css";
import Image from "next/image";

function CaseStudies() {
  let [thumbsSwiper, setThumbsSwiper] = useState(null);
  useEffect(()=>{
    console.log("Thumbs changed")
  }, [thumbsSwiper])
  return (
    <section
      className={`${clientStyles.caseStudiesWrap} bg-white flex flex-col-reverse md:flex-col`}
    >
      <div>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          loop={true}
          speed={1000}
          freeMode={true}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          className={styles.mySwiper2}
        >
          {caseStudies.map((item, index) => (
            <SwiperSlide
              key={index}
              className={`${clientStyles.caseStudiesContent} md:flex`}
            >
              <div className={`relative ${clientStyles.case_studies_content_img} md:mr-5 w-full`}>
                <img
                  className="object-left-top h-full object-cover"
                  src={item.image}
                  alt=""
                />
              </div>
              <div className={clientStyles.case_studies_content_text}>
                <h1 className="text-lg md:text-xl uppercase font-semibold tracking-wide mt-8 mb-5">
                  {item.title}
                </h1>
                <p className="text-sm font-light leading-loose">{item.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="border-t border-gray-100">
        <Swiper
          loop={true}
          speed={1000}
          breakpoints={{
            950: {
              slidesPerView: 5,
              spaceBetween: 2,
            },
            760: {
              slidesPerView: 4,
              spaceBetween: 2,
            },
          }}
          spaceBetween={2}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          onSwiper={setThumbsSwiper}
          className="mySwiper swiper-thumbs bg-gray-100 cursor-pointer"
        >
          {caseStudies.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.thumb} alt={item.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default CaseStudies;
