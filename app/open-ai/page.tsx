import { NavBar } from "@/src/components/shared";
import styles from "./open-ai.module.css";

export default function OpenAI() {
  return (
    <div className="w-full h-auto">
      <NavBar />
      <div className={styles.main}>
        <div className="flex h-24 w-96 backdrop-blur-sm bg-white/30 border rounded-md items-center justify-center">
          <p>Get answer to your questions in seconds!</p>
        </div>
      </div>
    </div>
  );
}
