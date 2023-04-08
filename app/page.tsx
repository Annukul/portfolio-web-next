import styles from "./page.module.css";
import { AboutMe, Contact, Experience, MainSection } from "@/src/components/sections";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* MAIN SCREEN SECTION */}
      <MainSection />
      {/* ABOUT ME SECTION */}
      <AboutMe />
      {/* EXP SECTION */}
      <Experience />
      {/* CONTACT ME SECTION */}
      <Contact />
    </main>
  );
}
