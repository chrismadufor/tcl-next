import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useFormik } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import emailJsInfo from "../../helper-files/emailJsFile";

function ContactSection() {

  // const {serviceId, templateId, publicKey} = emailJsInfo
  const [phoneNum, setPhoneNum] = useState("");
  const form = useRef();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      company: "",
      message: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }

      if (!values.fullName) {
        errors.fullName = "Full name is required";
      }

      if (!values.company) {
        errors.company = "Company is required";
      }

      if (!values.message) {
        errors.message = "Your message is required";
      }
      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      setTimeout(() => {
        const data = {...values, phone: phoneNum}
        emailjs
          .send(
            process.env.REACT_APP_SERVICEID,
            process.env.REACT_APP_TEMPLATEID,
            data,
            process.env.REACT_APP_PUBLICKEY
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        alert("Thank you for reaching out. We will contact you shortly.");
        setSubmitting(false);
      }, 400);
      setPhoneNum("")
      formik.resetForm();
    },
  });
  return (
    <section id="contactForm" className="contactFormWrap relative md:pb-20">
      <div className="contactFormContainer md:flex items-center justify-center w-full py-5 px-1 pb-8 sm:p-5 sm:pb-14 md:relative md:top-20">
        <div className="contactForm bg-white px-4 py-7 lg:px-7 sm:rounded-md shadow-md">
          <div className="mb-5">
            <h1 className="text-lg md:text-2xl mb-1 tracking-wide uppercase text-center">
              Contact Me
            </h1>
          </div>
          <form ref={form} onSubmit={formik.handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.fullName}
              className={
                formik.errors.fullName &&
                formik.touched.fullName &&
                formik.errors.fullName
                  ? "block h-12 w-full font-normal border border-red-500 px-5 mb-4 text-sm rounded-sm"
                  : "text-sm block h-12 w-full font-normal border border-gray-200 px-5 mb-4 rounded-sm"
              }
            />
            {/* {errors.fullName && touched.fullName && errors.fullName} */}
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={
                formik.errors.email &&
                formik.touched.email &&
                formik.errors.email
                  ? "block h-12 w-full font-normal border border-red-500 px-5 mb-4 text-sm rounded-sm"
                  : "text-sm block h-12 w-full font-normal border border-gray-200 px-5 mb-4 rounded-sm"
              }
            />
            {/* {errors.email && touched.email && errors.email} */}
            <PhoneInput
              inputProps={{
                name: "phone",
                placeholder: "Enter Phone"
              }}
              country={"ng"}
              value={phoneNum}
              onBlur={formik.handleBlur}
              onChange={(phone) => setPhoneNum(phone)}
              className={
                formik.errors.phone &&
                formik.touched.phone &&
                formik.errors.phone
                  ? "block h-12 w-full font-normal border border-red-500 mb-4 text-sm rounded-sm text-gray-700 font-normal"
                  : "text-sm block h-12 w-full font-normal border border-gray-200 mb-4 rounded-sm text-gray-700 font-normal"
              }
            />
            <input
              type="text"
              name="company"
              placeholder="Company name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.company}
              className={
                formik.errors.company &&
                formik.touched.company &&
                formik.errors.company
                  ? "block h-12 w-full font-normal border border-red-500 px-5 mb-4 text-sm rounded-sm"
                  : "text-sm block h-12 w-full font-normal border border-gray-200 px-5 mb-4 rounded-sm"
              }
            />
            <textarea
              type="text"
              placeholder="How can we help you"
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              className={
                formik.errors.message &&
                formik.touched.message &&
                formik.errors.message
                  ? "block h-20 w-full font-normal border border-red-500 px-5 pt-2 mb-4 text-sm rounded-sm"
                  : "text-sm block h-20 w-full font-normal border border-gray-200 pt-2 px-5 mb-4 rounded-sm"
              }
            />
            {/* <p className="text-xs font-normal mb-4">
              By submitting this form you agree that you have read
              Techspecialist Consulting{" "}
              <span className="text-blue-500 underline">
                Terms and Conditions
              </span>
            </p> */}
            <button
              type="submit"
              disabled={formik.isSubmitting}
              className="contact-btn w-full h-10 team-btn bg-transparent border-solid border-2 px-5 py-2 md:px-5 uppercase rounded-sm font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="otherInfo text-white px-8 py-10 md:rounded-md shadow-md">
          <h1 className="text-lg sm:text-2xl text-center uppercase">
            Our Contact Info
          </h1>
          <p className="text-sm font-normal text-center">
            You can contact us directly or visit our office from Monday to
            Friday
          </p>
          <div className="flex my-5">
            <i className="fas fa-home mr-4 text-lg"></i>
            <div>
              <h3 className="font-normal text-base tracking-wide uppercase">
                Office
              </h3>
              <p className="text-sm font-normal">
                Goldlink House, 2 Harare Steet, Off Rabat Street, Zone 6, Wuse,
                Abuja.
              </p>
            </div>
          </div>
          <div className="flex my-5">
            <i className="fas fa-clock mr-4 text-lg"></i>
            <div>
              <h3 className="font-normal text-base tracking-wide uppercase">
                Visiting Hours
              </h3>
              <p className="text-sm font-normal">8AM - 5PM</p>
            </div>
          </div>
          <div className="flex my-5">
            <i className="fas fa-envelope mr-4 text-lg"></i>
            <div>
              <h3 className="font-normal text-base tracking-wide uppercase">
                Mail
              </h3>
              <p className="text-sm font-normal">
                info@techspecialistlimited.com
              </p>
            </div>
          </div>
          <div className="flex my-5">
            <i className="fas fa-phone mr-4 text-lg"></i>
            <div>
              <h3 className="font-normal text-base tracking-wide uppercase">
                Phone
              </h3>
              <p className="text-sm font-normal">092911443</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
