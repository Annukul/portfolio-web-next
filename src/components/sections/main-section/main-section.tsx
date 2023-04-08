import Image from "next/image";
import styles from "./page.module.css";
import { BsTwitter, BsGithub, BsMailbox2, BsLinkedin } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";

export const MainSection = () => {
  return (
    <div className="h-screen flex flex-col justify-between items-center w-full">
      <nav className={styles.nav}>
        <a
          className="border-2 p-2 ml-8 cursor-pointer"
          href="https://annukul.vercel.app"
        >
          <Image src="/images/initial.png" alt="Logo" width={40} height={10} />
        </a>
        <div className={styles.navIcons}>
          <a
            href="https://annukul.hashnode.dev/"
            className={styles.iconLink}
            target="_blank"
            rel="noreferrer"
          >
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
          <a
            href="https://www.linkedin.com/in/annukul-thakran/"
            className={styles.iconLink}
            target="_blank"
            rel="noreferrer"
          >
            Experience
          </a>
          <a
            href="https://github.com/Annukul"
            className={styles.iconLink}
            target="_blank"
            rel="noreferrer"
          >
            Work
          </a>
          <a
            href="https://twitter.com/thakrananukul"
            className={styles.iconLink}
            target="_blank"
            rel="noreferrer"
          >
            Contact
          </a>
        </div>
      </nav>
      <div className="flex w-full h-full">
        <div className="flex w-5/6 items-center justify-center">
          <div className="flex flex-col justify-center pr-8 pl-32 text-left">
            <div className="mb-4">
              <p className="text-6xl font-medium text-white tracking-wide">
                Annukul Thakran.
              </p>
              <p className="text-6xl font-medium text-slate-400 tracking-wide">
                I build things for the web.
              </p>
            </div>
            <div className="">
              <p className="text-white text-xl">
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
        <div className="flex h-full w-1/6 justify-end px-4">
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
