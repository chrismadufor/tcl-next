import React from "react";
import Image from "next/image";
import styles from "../../styles/Global.module.css";

function Awards() {
  return (
    <section className={`${styles.awards} px-0 py-10 sm:px-10 sm:py-20 sm:pb-12 text-gray-700 text-center`}>
      <h1 className="text-xl md:text-3xl uppercase font-semibold tracking-wide mb-10 overflow-hidden w-full">
        Awards & Recognitions
      </h1>
      <div className={`${styles.awards_main} flex items-center justify-center`}>
        <div className="pic relative">
          <div className="elipses up absolute">
            <Image
              src="/assets/img/elipses.png"
              width="100"
              height="100"
              alt=""
            />
          </div>
          <div className={styles.neca_img}>
            <Image src="/assets/img/neca-award.jpg" layout="fill" alt="" />
          </div>
          <div className="elipses down absolute">
            <Image
              src="/assets/img/elipses.png"
              width="100"
              height="100"
              alt=""
            />
          </div>
        </div>
        <div className="awards-text px-5 text-left md:ml-10">
          <h1 className="text-2xl font-semibold mb-3">NECA AWARDS</h1>
          <p className="font-normal leading-loose tracking-wide text-left text-sm">
            TCL emerged as the <b>BEST and MOST RESPONSIBLE</b> company in the
            ICT category at the just concluded NECA excellence awards.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Awards;
