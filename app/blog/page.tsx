"use client";

import { SiHashnode } from "react-icons/si";
import styles from "./blog.module.css";
import { BsGithub, BsLinkedin, BsMailbox2, BsTwitter } from "react-icons/bs";
import { useRouter } from "next/navigation";

export default function Blog() {
  const router = useRouter();
  return (
    <div className={styles.main}>
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
          <a
            href="mailto: thakran9.anukul@gmail.com"
            className={styles.iconLink}
          >
            <BsMailbox2 size={40} color="white" />
          </a>
        </div>
      </nav>
      <div className={styles.postsContainer}>
        <div className={styles.postSection}>
          <p className="text-white text-4xl font-medium mb-2">
            How to write a GitHub Action in Rust
          </p>
          <p className="text-white text-light mb-2">
            Creating reusable GitHub Actions is an easy way to automate away
            everyday tasks in CI/CD. However, actions are typically implemented
            in TypeScript or JavaScript, and getting started in another languag
          </p>
          <div className="flex py-1 justify-evenly border">
            <p className="text-gray-600">
              Published by: <span className="text-white">Annukul</span>
            </p>
            <p className="text-gray-600">
              Category: <span className="text-white">Programming</span>
            </p>
            <p className="text-gray-600">
              Published on: <span className="text-white">12 Nov 2022</span>
            </p>
          </div>
        </div>
        <div className={styles.postSection}>
          <p className="text-white text-4xl font-medium mb-2">
            How to Setup a Simple ETL Pipeline with AWS Lambda for Data Science
          </p>
          <p className="text-white text-light mb-2">
            Creating reusable GitHub Actions is an easy way to automate away
            everyday tasks in CI/CD. However, actions are typically implemented
            in TypeScript or JavaScript, and getting started in another languag
          </p>
          <div className="flex py-1 justify-evenly border">
            <p className="text-gray-600">
              Published by: <span className="text-white">Annukul</span>
            </p>
            <p className="text-gray-600">
              Category: <span className="text-white">Programming</span>
            </p>
            <p className="text-gray-600">
              Published on: <span className="text-white">12 Nov 2022</span>
            </p>
          </div>
        </div>
        <div className={styles.postSection}>
          <p className="text-white text-4xl font-medium mb-2">
            How to Setup a Simple ETL Pipeline with AWS Lambda for Data Science
          </p>
          <p className="text-white text-light mb-2">
            Creating reusable GitHub Actions is an easy way to automate away
            everyday tasks in CI/CD. However, actions are typically implemented
            in TypeScript or JavaScript, and getting started in another languag
          </p>
          <div className="flex py-1 justify-evenly border">
            <p className="text-gray-600">
              Published by: <span className="text-white">Annukul</span>
            </p>
            <p className="text-gray-600">
              Category: <span className="text-white">Programming</span>
            </p>
            <p className="text-gray-600">
              Published on: <span className="text-white">12 Nov 2022</span>
            </p>
          </div>
        </div>
        <div className={styles.postSection}>
          <p className="text-white text-4xl font-medium mb-2">
            How to Setup a Simple ETL Pipeline with AWS Lambda for Data Science
          </p>
          <p className="text-white text-light mb-2">
            Creating reusable GitHub Actions is an easy way to automate away
            everyday tasks in CI/CD. However, actions are typically implemented
            in TypeScript or JavaScript, and getting started in another languag
          </p>
          <div className="flex py-1 justify-evenly border">
            <p className="text-gray-600">
              Published by: <span className="text-white">Annukul</span>
            </p>
            <p className="text-gray-600">
              Category: <span className="text-white">Programming</span>
            </p>
            <p className="text-gray-600">
              Published on: <span className="text-white">12 Nov 2022</span>
            </p>
          </div>
        </div>
        <div className={styles.postSection}>
          <p className="text-white text-4xl font-medium mb-2">
            How to Setup a Simple ETL Pipeline with AWS Lambda for Data Science
          </p>
          <p className="text-white text-light mb-2">
            Creating reusable GitHub Actions is an easy way to automate away
            everyday tasks in CI/CD. However, actions are typically implemented
            in TypeScript or JavaScript, and getting started in another languag
          </p>
          <div className="flex py-1 justify-evenly border">
            <p className="text-gray-600">
              Published by: <span className="text-white">Annukul</span>
            </p>
            <p className="text-gray-600">
              Category: <span className="text-white">Programming</span>
            </p>
            <p className="text-gray-600">
              Published on: <span className="text-white">12 Nov 2022</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
