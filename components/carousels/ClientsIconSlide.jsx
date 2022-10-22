import React from 'react'
import ClientIcons from './iconsFile'
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from '../../styles/Carousel.module.css'
import Link from 'next/link';

function ClientsIconSlide() {
  return (
    <section className={styles.clientsIconWrap}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        loop={true}
        slidesPerView={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={1000}
        breakpoints={{
          1200: {
            slidesPerView: 6,
            spaceBetween: 40,
            autoplay: false
          },
          950: {
            slidesPerView: 5,
            spaceBetween:40
          },
          760: {
            slidesPerView: 4,
            spaceBetween: 30
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 30
          }
        }
        }
      >
        {
          ClientIcons.map((item, index) => (
            <SwiperSlide className={styles.clientsIconSlide} key={index}>
              <div>
                {item.map((image, index) => (
                  <div key={index} >
                    <img src={image} alt='' />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))
        }

      </Swiper>
      <Link href="#contactForm">
        <button className={`${styles.teamBtn} bg-transparent border-solid border-2 px-5 py-2 md:px-5 my-10 md:mt-10 mx-auto font-semibold text-sm uppercase flex items-center hover:text-white`}>Talk to our team</button>
      </Link>
    </section>
  )
}

export default ClientsIconSlide