import { NavBar } from "@/src/components/shared";
import styles from "./open-ai.module.css";

export default function OpenAI() {
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
            <div className="h-full w-full bg-white rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
