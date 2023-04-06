"use client";
import { NavBar } from "@/src/components/shared";
import styles from "./open-ai.module.css";
import { ChangeEvent, useState } from "react";
import axios from "axios";

export default function OpenAI() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    const headers = {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer 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",
      },
    };
    const payload = {
      model: "text-davinci-003",
      prompt: question,
      max_tokens: 100,
      temperature: 0,
    };
    axios
      .post("https://api.openai.com/v1/completions", payload, headers)
      .then((res: any) => {
        setAnswer(res.data.choices[0].text);
      });
  };

  return (
    <div className="w-full h-auto h-screen">
      <div className={styles.main}>
        <NavBar />
        <div className="flex py-8 mt-4 w-11/12 h-full backdrop-blur-sm bg-white/30 border rounded-md items-center justify-center">
          <div className="flex flex-col bg-white w-11/12 h-full text-sm font-medium text-center text-gray-500 rounded-lg sm:flex overflow-hidden">
            <ul className="w-full hidden text-sm font-medium text-center text-gray-500 rounded-lg sm:flex">
              <li className="w-full">
                <a
                  href="#"
                  className="inline-block w-full p-4 text-gray-900 bg-white focus:ring-blue-300 active hover:bg-white focus:outline-none"
                  aria-current="page"
                >
                  Text Completions
                </a>
              </li>
              <li className="w-full">
                <a
                  href="#"
                  className="inline-block w-full p-4 bg-gray-200 hover:text-gray-700 hover:bg-white focus:ring-blue-300 outline-none"
                >
                  Chat Completions
                </a>
              </li>
              <li className="w-full">
                <a
                  href="#"
                  className="inline-block w-full p-4 bg-gray-200 hover:text-gray-700 hover:bg-white focus:ring-blue-300 focus:outline-none"
                >
                  Text Edits
                </a>
              </li>
              <li className="w-full">
                <a
                  href="#"
                  className="inline-block w-full p-4 bg-gray-200 hover:text-gray-700 hover:bg-white focus:outline-none focus:ring-blue-300"
                >
                  Image Generation
                </a>
              </li>
            </ul>
            <div className="h-full w-full bg-white rounded-lg">
              <div className="flex h-20 p-4">
                <div className="w-4/5 h-12">
                  <input
                    placeholder="Ask something..."
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setQuestion(e.target.value)
                    }
                    className="w-full h-12 bg-gray-100 px-4 rounded-lg outline-none"
                  />
                </div>
                <div className="px-4">
                  <button
                    type="button"
                    className="text-gray-900 bg-gray-200 focus:outline-none hover:bg-gray-300 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg h-12 w-32 text-sm px-5 py-2.5 mr-2 mb-2"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div className="p-8 text-left">
                {/* <h1 className="mb-1 font-mono text-4xl text-gray-100 md:text-6xl">
                  <br className="block md:hidden" />
                  <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
                  {answer}
                  </span>
                  <span className="box-border inline-block w-1 h-10 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
                </h1> */}
                <p className="text-md text-black">{answer}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
