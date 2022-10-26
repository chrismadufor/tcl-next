import React, { useState, useEffect } from "react";
// import { Link} from "react-router-dom";
import Link from "next/link";

function Header() {
  const [mobileNav, setMobileNav] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openResources, setOpenResources] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
    setOpenServices(false);
    setOpenResources(false);
  };

  const onOpenServices = () => {
    setOpenServices(!openServices);
    setOpenResources(false);
  };
  const onOpenResources = () => {
    setOpenResources(!openResources);
    setOpenServices(false);
  };

  let [headerStyles, setHeaderStyles] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        if (!headerStyles) {
          return setHeaderStyles(true);
        }
      } else {
        if (headerStyles) {
          return setHeaderStyles(false);
        }
      }
    };
  });

  return (
    <>
      <header
        id="header"
        className={
          headerStyles
            ? "active-scroll flex items-center justify-between h-20 fixed w-full top-0 px-5 md:px-12 xl:px-20 z-10"
            : "flex items-center justify-between h-20 fixed w-full top-0 px-5 md:px-12 xl:px-20 z-10"
        }
      >
        <div className="logo w-32 lg:w-36">
          <Link href="/">
            <a>
              <img
                src={
                  headerStyles
                    ? "/assets/img/tcl-logo main.png"
                    : "/assets/img/logo-white.png"
                }
                alt="tcl logo"
                className="pry-logo"
              />
              <img
                src="/assets/img/tcl-logo main.png"
                alt="tcl logo"
                className="sec-logo"
              />
            </a>
          </Link>
        </div>
        <nav className="flex items-center">
          <ul className="nav-links hidden xl:flex items-center text-sm text-white uppercase">
            <div className="dropdown-bg h-20"></div>
            <li className="dropdown-link relative mx-3 p-2 font-semibold cursor-pointer">
              Our Solutions
              <ul className="dropdown">
                <Link href="/it-support">
                  <a>
                    <li>IT Support</li>
                  </a>
                </Link>
                <Link href="/cyber-security">
                  <a>
                    <li>Cyber Security</li>
                  </a>
                </Link>
                <Link href="/cloud-services">
                  <a>
                    <li>Cloud Services</li>
                  </a>
                </Link>
              </ul>
            </li>
            <Link href="/clients">
              <a>
                <li className="mx-3 p-2 font-semibold  cursor-pointer">
                  Clients
                </li>
              </a>
            </Link>
            <Link href="/company">
              <a>
                <li className="mx-3 p-2 font-semibold cursor-pointer">
                  About Us
                </li>
              </a>
            </Link>
            <li className="dropdown-link relative mx-3 p-2 font-semibold cursor-pointer">
              Media
              <ul className="dropdown">
                <Link href="/blog">
                  <a>
                    <li>Blog</li>
                  </a>
                </Link>
                {/* <Link href="videos">
                  <li>Videos</li>
                </Link> */}
                <Link href="/gallery">
                  <a>
                    <li>Gallery</li>
                  </a>
                </Link>
              </ul>
            </li>
          </ul>
          <a href="#contactForm">
            <button className="text-white text-sm font-semibold uppercase px-4 py-2 hidden ml-8 md:block mr-12 xl:mr-0">
              Get in touch
            </button>
          </a>
          <i
            id="open-mobile-nav"
            className="fas fa-bars text-xl sm:text-2xl text-white xl:hidden"
            onClick={() => toggleMobileNav()}
          ></i>
        </nav>
      </header>
      <div
        className={
          mobileNav
            ? "mobile-nav fixed w-full top-0 bg-white z-20 show"
            : "mobile-nav hidden fixed w-full top-0 bg-white z-20"
        }
      >
        <header className="flex justify-between items-center h-20 px-5 md:px-12 border-b border-gray-200">
          <div className="logo logo w-32">
            <Link href="/">
              <a>
                <div onClick={() => toggleMobileNav()}>
                  <img src="/assets/img/tcl-logo main.png" alt="tcl logo" />
                </div>
              </a>
            </Link>
          </div>
          <i
            id="close-mobile-nav"
            className="fa-solid fa-circle-xmark text-2xl font-normal"
            onClick={() => toggleMobileNav()}
          ></i>
        </header>
        <nav className="text-sm md:text-base">
          <p
            className="w-full flex items-center justify-between border-b border-gray-200 p-5 md:px-12"
            onClick={() => onOpenServices()}
          >
            Our Solutions{" "}
            <i
              className={
                openServices ? "fas fa-chevron-down" : "fas fa-chevron-right"
              }
            ></i>
          </p>
          <ul
            className={openServices ? "mobile-dropdown" : "h-0 overflow-hidden"}
          >
            <Link href="/it-support">
              <a>
                <li
                  className="w-full flex items-center border-b border-gray-200 p-5 md:px-12"
                  onClick={() => toggleMobileNav()}
                >
                  <i className="fas fa-angles-right text-xs mr-3"></i> IT
                  Support
                </li>
              </a>
            </Link>
            <Link href="/cyber-security">
              <a>
                <li
                  className="w-full flex items-center border-b border-gray-200 p-5 md:px-12"
                  onClick={() => toggleMobileNav()}
                >
                  <i className="fas fa-angles-right text-xs mr-3"></i> Cyber
                  Security
                </li>
              </a>
            </Link>
            <Link href="/cloud-services">
              <a>
                <li
                  className="w-full flex items-center border-b border-gray-200 p-5 md:px-12"
                  onClick={() => toggleMobileNav()}
                >
                  <i className="fas fa-angles-right text-xs mr-3"></i> Cloud
                  Services
                </li>
              </a>
            </Link>
          </ul>
          <Link href="/clients" className="bg-gray-400">
            <a>
              <p
                className="w-full border-b border-gray-200 p-5 md:px-12"
                onClick={() => toggleMobileNav()}
              >
                Clients
              </p>
            </a>
          </Link>
          <Link href="/company" className="bg-gray-400">
            <a>
              <p
                className="w-full border-b border-gray-200 p-5 md:px-12"
                onClick={() => toggleMobileNav()}
              >
                About Us
              </p>
            </a>
          </Link>
          <p
            className="w-full flex items-center justify-between border-b border-gray-200 p-5 md:px-12"
            onClick={() => onOpenResources()}
          >
            Media{" "}
            <i
              className={
                openResources ? "fas fa-chevron-down" : "fas fa-chevron-right"
              }
            ></i>
          </p>
          <ul
            className={
              openResources ? "mobile-dropdown" : "h-0 overflow-hidden"
            }
          >
            <Link href="/blog">
              <a>
                <li
                  className="w-full flex items-center border-b border-gray-200 p-5 md:px-12"
                  onClick={() => toggleMobileNav()}
                >
                  <i className="fas fa-angles-right text-xs mr-3"></i> Blog
                </li>
              </a>
            </Link>
            <Link href="/gallery">
              <a>
                <li
                  className="w-full flex items-center border-b border-gray-200 p-5 md:px-12"
                  onClick={() => toggleMobileNav()}
                >
                  <i className="fas fa-angles-right text-xs mr-3"></i> Gallery
                </li>
              </a>
            </Link>
          </ul>
        </nav>
        <a href="#contactForm" onClick={() => toggleMobileNav()}>
          <div className="h-20  p-5 absolute bottom-0 w-full shadow">
            <button className="text-white uppercase w-full h-full">
              Get in touch
            </button>
          </div>
        </a>
      </div>
    </>
  );
}

export default Header;
