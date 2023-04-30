"use client";
import { BsGithub, BsLinkedin, BsMailbox2, BsTwitter } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";
import { useRouter } from "next/navigation";
import styles from "./nav.module.css";

export const NavBar = () => {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <div className="flex justify-between items-center w-80">
        <p className="text-4xl text-white">Blog</p>
        <button
          className="h-10 border px-4 rounded hover:bg-red-50 transition duration-200"
          onClick={() => {
            router.push("/login");
          }}
        >
          Create your own blog
        </button>
      </div>
      <div className={styles.navIcons}>
        <a
          rel="noreferrer"
          href="https://annukul.hashnode.dev/"
          className={styles.iconLink}
          target="_blank"
        >
          <SiHashnode size={40} color="white" />
        </a>
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/annukul-thakran/"
          className={styles.iconLink}
          target="_blank"
        >
          <BsLinkedin size={40} color="white" />
        </a>
        <a
          rel="noreferrer"
          href="https://github.com/Annukul"
          className={styles.iconLink}
          target="_blank"
        >
          <BsGithub size={40} color="white" />
        </a>
        <a
          rel="noreferrer"
          href="https://twitter.com/thakrananukul"
          className={styles.iconLink}
          target="_blank"
        >
          <BsTwitter size={40} color="white" />
        </a>
        <a href="mailto: thakran9.anukul@gmail.com" className={styles.iconLink}>
          <BsMailbox2 size={40} color="white" />
        </a>
      </div>
    </nav>
  );
};
