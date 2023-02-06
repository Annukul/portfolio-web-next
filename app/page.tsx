import styles from "./page.module.css";
import { BsTwitter, BsGithub, BsMailbox2, BsLinkedin } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.superHero}>
        <nav className={styles.nav}>
          <div>{/* <p className="text-7xl text-white">AT</p> */}</div>
          <div className={styles.navIcons}>
            <a
              href="https://annukul.hashnode.dev/"
              className={styles.iconLink}
              target="_blank"
            >
              <SiHashnode size={40} color="grey" />
            </a>
            <a
              href="https://www.linkedin.com/in/annukul-thakran/"
              className={styles.iconLink}
              target="_blank"
            >
              <BsLinkedin size={40} color="grey" />
            </a>
            <a
              href="https://github.com/Annukul"
              className={styles.iconLink}
              target="_blank"
            >
              <BsGithub size={40} color="grey" />
            </a>
            <a
              href="https://twitter.com/thakrananukul"
              className={styles.iconLink}
              target="_blank"
            >
              <BsTwitter size={40} color="grey" />
            </a>
            <a
              href="mailto: thakran9.anukul@gmail.com"
              className={styles.iconLink}
            >
              <BsMailbox2 size={40} color="grey" />
            </a>
          </div>
        </nav>
        <div className={styles.hero}>
          <div className={styles.heroChild}>
            <div className={styles.heroTextDiv}>
              <div>
                <p className="text-7xl py-5 text-slate-300 tracking-wider">
                  Hey there!
                </p>
                <div className={styles.heroTextDesc}>
                  <p className="text-slate-300 leading-relaxed text-xl tracking-wide">
                    I am <span className="text-pink-300">Annukul</span>,
                    passionate about latest and greatest technologies whether
                    that's the front-end or back-end. I enjoy creating sleek and
                    responsive applications in addition to being user friendly.
                    A versatile engineer with interests in software engineer and
                    designing. Adaptable and self motivated learner. Interested
                    in new web technologies, and continuous self improvement.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.heroLinks}>
              <div className={styles.heroLinksChild}>
                <p className="text-4xl text-slate-300 tracking-wider">Links</p>
                <div className={styles.heroLinksChildLinkList}>
                  <ul className="text-slate-300 text-xl">
                    <li className="py-1 hover:text-white hover:text-2xl ease-in-out duration-200 transition-all">
                      <a href="">Blog</a>
                    </li>
                    <li className="py-1 hover:text-white hover:text-2xl ease-in-out duration-200 transition-all">
                      <a href="">Projects</a>
                    </li>
                    <li className="py-1 hover:text-white hover:text-2xl ease-in-out duration-200 transition-all">
                      <a href="">Experience</a>
                    </li>
                    <li className="py-1 hover:text-white hover:text-2xl ease-in-out duration-200 transition-all">
                      <a href="">Life</a>
                    </li>
                    <li className="py-1 hover:text-white hover:text-2xl ease-in-out duration-200 transition-all">
                      <a href="">Skills</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footer}>
            <p className="textlg text-white">©2023 annukul</p>
          </div>
        </div>
      </div>
    </main>
  );
}
