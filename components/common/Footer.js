import React from "react";
import Image from "next/image"
import Link from "next/link";
function Footer() {
  return (
    <footer>
      <div className="footer-wrap md:flex justify-between">
        <div className="wide mb-3">
          <div className="logo flex">
            <img src="/assets/img/logo-white.png" alt="" className="h-20 lg:h-24"/>
          </div>
          <p className="text-sm font-normal tracking-wide py-5 leading-loose">
            We are poised to create value for our corporate clients through excellent IT service delivery to enhance personnel productivity and efficiency. From fully outsourced IT services to single-service packages like helpdesk support, IT procurement, or Infrastructure deployment, our experts have what you need. We partner with top-class original equipment manufacturers to bring you the best value for your money.
          </p>
        </div>
        <div className="small mb-3">
          <h1 className="text-base uppercase mb-2 lg:mb-3">Other links</h1>
          <Link href='clients'>
            <a className="footer-links flex my-5 items-center">
            <i className="fas fa-arrow-right mr-4 text-base"></i>
            <p className="text-sm font-normal">
              Clients
            </p>
            </a>
          </Link>
          <Link href='company'>
            <a className="footer-links flex my-5 items-center">
            <i className="fas fa-arrow-right mr-4 text-base"></i>
            <p className="text-sm font-normal">
              About Us
            </p>
            </a>
          </Link>
          <Link href='blog'>
          <a className="footer-links flex my-5 items-center">
            <i className="fas fa-arrow-right mr-4 text-base"></i>
            <p className="text-sm font-normal">
              Blog
            </p>
            </a>
          </Link>
          <Link href='gallery'>
          <a className="footer-links flex my-5 items-center">
            <i className="fas fa-arrow-right mr-4 text-base"></i>
            <p className="text-sm font-normal">
              Gallery
            </p>
            </a>
          </Link>
        </div>
        <div className="mid mb-3">
          <h1 className="text-base uppercase mb-2 lg:mb-3">Our Solutions</h1>
          <Link href='it-support'>
          <a className="footer-links flex my-5 items-center">
            <i className="fas fa-arrow-right mr-4 text-base"></i>
            <p className="text-sm font-normal">
              IT Support
            </p>
            </a>
          </Link>
          <Link href='cyber-security'>
          <a className="footer-links flex my-5 items-center">
            <i className="fas fa-arrow-right mr-4 text-base"></i>
            <p className="text-sm font-normal">
              Cyber Security
            </p>
            </a>
          </Link>
          <Link href='cloud-services'>
          <a className="footer-links flex my-5 items-center">
            <i className="fas fa-arrow-right mr-4 text-base"></i>
            <p className="text-sm font-normal">
              Cloud Services
            </p>
            </a>
          </Link>
        </div>
        <div className="small mb-3">
          <h1 className="text-base uppercase mb-2 lg:mb-3">Connect with us</h1>
          <div className="socials flex items-center">
            <a href="https://www.facebook.com/TechspecialistConsultingLtd/" className="flex my-5 mr-5 items-center">
              <i className="fab fa-facebook mr-4 text-3xl"></i>
            </a>
            <a href="https://twitter.com/tclafrica" className="flex my-5 mr-5 items-center">
              <i className="fab fa-twitter mr-4 text-3xl"></i>
            </a>
            <a href="https://www.linkedin.com/company/11061275/" className="flex my-5 mr-5 items-center">
              <i className="fab fa-linkedin mr-4 text-3xl"></i>
            </a>
          </div>
          
        </div>
      </div>
      <p className="text-center text-xs"> &copy; 2022 Techspecialist Consulting Limited</p>
    </footer>
  );
}

export default Footer;
