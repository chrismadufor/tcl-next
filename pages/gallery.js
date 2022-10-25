import React, {useState, useRef, useEffect} from 'react'
import Head from "next/head";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styles from "../styles/Resources.module.css";
import ContactSection from "../components/ContactSection";
import exportedPictures from '../helper-files/gallery';
// import { GraphQLClient, gql} from 'graphql-request'

// const graphcms = new GraphQLClient('https://api-eu-west-2.hygraph.com/v2/cl8oydu3r1ivt01un5k9uek4q/master')

// const QUERY = gql`
// {
//   posts {
//     author
//     slug
//     id
//     title
//     featuredImage {
//       url
//     }
//     datePublished
//   }
// }
// `

// export async function getStaticProps() {
//     let {posts} = await graphcms.request(QUERY);
//     posts = posts.reverse()
//     return {
//       props: {
//         posts,
//       },
//     }
//   }

function Gallery() {

  let [hasPictures, setHasPictures] = useState(false)
  let [activeSlide, setActiveSlide] = useState(0)
  let [showGallery, setShowGallery] = useState(false)
  let [slideLength, setSlideLength] = useState(0)
  const slidesWrap = useRef()

  const toggleSlide = () => {
    let slidesArr = slidesWrap.current.children;
    setSlideLength(slidesArr.length);

    if(slidesArr.length === 0) {
      return setHasPictures(false)
    } 

    setHasPictures(true)
    for(let i=0; i< slideLength; i++) {
      slidesArr[i].style.display = 'none'
    }
    slidesArr[activeSlide].style.display = 'flex'
  }

  const lastSlide = slideLength - 1
  const changeSlideLeft = () => {
    if (activeSlide <= 0) {
      setActiveSlide(lastSlide)
    }
    else {
      setActiveSlide(activeSlide - 1)
    }
  
    // toggleSlide()
  }
  const changeSlideRight = () => {
    if (activeSlide >= (lastSlide)) {
      setActiveSlide(0)
    }
    else {
      setActiveSlide(activeSlide + 1)
    }

    // toggleSlide()
  }

  const changeActiveSlide = (index) => {
    setActiveSlide(index)
    toggleSlide()
    setShowGallery(true)
  }

  const closeGallery = () => {
    setShowGallery(false)
  }

  useEffect(() => {
    toggleSlide()
  }, [activeSlide])

  return (
    <div>
      <Head>
        <title>Gallery | Techspecialist Consulting Limited</title>
        <meta name="description" content="Techspecialist Gallery" />
        <meta property="og:url" content="https://techspecialistlimited.com/gallery" />
        <meta property="og:title" content="Gallery | Techspecialist Consulting Limited" />
        <meta
          property="og:description"
          content="Techspecialist Gallery"
        />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Gallery | Techspecialist Consulting Limited" />
        <meta
          name="twitter:description"
          content="Techspecialist Gallery"
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
      <Header />
      <div className={`${styles.hero_bg} relative`}>
          <img src="/assets/img/gallery.jpg" alt="" className="absolute h-full" />
          <h1 className='text-xl sm:text-2xl lg:text-4xl uppercase text-white font-semibold'>The Techspecialist Gallery</h1>
      </div>
      {
        !hasPictures ? 
        <div className={`${styles.no_pictures}`}>
          <i className="fas fa-images"></i>
          <p>Nothing to see here</p></div> : 
        <div className={`${styles.galleryWrap} grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-7`}>
          {
            exportedPictures.map((picture, index) => (
              <div key={index}>
                <img onClick={() => changeActiveSlide(index)} src={picture} alt="" className='cursor-pointer h-full obj-cover' />
              </div>
            ))
          }
        </div>
      }
      
      <div className= {showGallery ? styles.slideshow : "hidden"}>
        <div ref={slidesWrap} className={`${styles.slideshow_wrap} bg-gray-700`}>
        {
          exportedPictures.map((picture, index) => (
            <div key={index}>
              <img src={picture} alt="" />
            </div>
          ))
        }
        </div>
        <i onClick={() => changeSlideLeft()} className={`${styles.nav_btn} ${styles.btn_left} fas fa-chevron-left text-white text-4xl`}></i>
        <i onClick={() => changeSlideRight()} className={`${styles.nav_btn} ${styles.btn_right} fas fa-chevron-right text-white text-4xl`}></i>
        <i onClick={() => closeGallery()} className={`${styles.close_btn} fas fa-times text-gray-100 text-xl cursor-pointer`}></i>
      </div>
      <ContactSection />
      <Footer />
    </div>
  )
}

export default Gallery