"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { BsTwitter, BsGithub, BsMailbox2, BsLinkedin } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";
import { HiMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

export const MainSection = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="h-screen flex flex-col justify-between items-center w-full overflow-hidden relative">
      {/* MOBILE NAV */}
      <nav className="flex md:hidden w-full justify-between p-4">
        <a
          className="border-2 p-2 cursor-pointer"
          href="https://annukul.vercel.app"
        >
          <Image src="/images/initial.png" alt="Logo" width={20} height={10} />
        </a>
        <button onClick={() => setIsNavOpen(true)} className="outline-none">
          <p className="text-white text-3xl">
            <HiMenuAlt3 />
          </p>
        </button>
      </nav>
      {/* MOBILE NAV ENDS */}
      {/* CLOSEABLE NAV */}
      <div
        style={{ backgroundColor: "#0A1930" }}
        className={`${isNavOpen ? "right-0" : "-right-96"} md:hidden h-full w-3/5 absolute transition-all duration-200 ease-in-out`}
      >
        <div className="w-full h-16 flex justify-end px-4 py-4">
          <button onClick={() => setIsNavOpen(false)} className="outline-none">
            <p className="text-white text-3xl">
              <AiOutlineClose />
            </p>
          </button>
        </div>
        <div className="text-slate-100 flex flex-col px-8 py-8">
          <a href="#about-me" className={styles.iconLink}>
            About
          </a>
          <a
            href="https://annukul.hashnode.dev/"
            className={styles.iconLink}
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>
          <a href="#exp" className={styles.iconLink}>
            Experience
          </a>
          <a
            href="#exp"
            className={styles.iconLink}
            target="_blank"
            rel="noreferrer"
          >
            Work
          </a>
          <a href="#contact" className={styles.iconLink}>
            Contact
          </a>
        </div>
      </div>
      {/* CLOSEABLE NAV ENDS */}
      <nav className="w-full h-24 hidden md:flex justify-between items-center py-2 px-8">
        <a
          className="border-2 p-2 ml-8 cursor-pointer"
          href="https://annukul.vercel.app"
        >
          <Image src="/images/initial.png" alt="Logo" width={40} height={10} />
        </a>
        <div className={styles.navIcons}>
          <a href="#about-me" className={styles.iconLink}>
            About
          </a>
          <a
            href="https://annukul.hashnode.dev/"
            className={styles.iconLink}
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>
          <a href="#exp" className={styles.iconLink}>
            Experience
          </a>
          <a
            href="#exp"
            className={styles.iconLink}
            target="_blank"
            rel="noreferrer"
          >
            Work
          </a>
          <a href="#contact" className={styles.iconLink}>
            Contact
          </a>
        </div>
      </nav>
      <div className="flex w-full h-full py-16 md:p-0">
        <div className="flex px-4 md:p-0 w-full md:w-5/6 items-start md:items-center justify-center">
          <div className="flex flex-col justify-center p-0 md:pr-8 md:pl-32 text-left">
            <div className="mb-4">
              <p className="text-4xl md:text-6xl font-medium text-white tracking-wide">
                Annukul Thakran.
              </p>
              <p className="text-4xl md:text-6xl font-medium text-slate-400 tracking-wide">
                I build things for the web.
              </p>
            </div>
            <div className="">
              <p className="text-white text-lg md:text-xl">
                I am a versatile engineer with interests in software engineer
                and designing. <br />
                Adaptable and self motivated learner. I enjoy creating sleek and
                responsive <br />
                applications in addition to being user friendly. I am currently
                a full-stack engineer <br />
                building consumer web applications at{" "}
                <span className="font-bold">Produze</span>.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:flex h-full w-1/6 justify-end px-4">
          <div className="flex flex-col mt-12 fixed">
            <a
              href="https://annukul.hashnode.dev/"
              className={styles.iconLink}
              target="_blank"
              rel="noreferrer"
            >
              <SiHashnode size={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/annukul-thakran/"
              className={styles.iconLink}
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin size={40} />
            </a>
            <a
              href="https://github.com/Annukul"
              className={styles.iconLink}
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub size={40} />
            </a>
            <a
              href="https://twitter.com/thakrananukul"
              className={styles.iconLink}
              target="_blank"
              rel="noreferrer"
            >
              <BsTwitter size={40} />
            </a>
            <a
              href="mailto: thakran9.anukul@gmail.com"
              className={styles.iconLink}
            >
              <BsMailbox2 size={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
