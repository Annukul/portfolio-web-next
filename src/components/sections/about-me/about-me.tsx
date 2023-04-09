import Image from "next/image";

export const AboutMe = () => {
  return (
    <div id="about-me" className="w-full h-auto md:h-auto bg-white py-8">
      <div className="flex flex-col md:flex-row w-full h-full p-0 md:px-32">
        <div className="w-full md:w-2/4 px-4 md:p-0">
          <p style={{ color: "#00FFEF" }} className="text-2xl font-bold">
            About Me.
          </p>
          <div className="border mt-2"></div>
          <div className="text-md md:text-lg font-normal">
            <p className="mt-2">
              Hello! My name is Annukul and I enjoy creating things that create
              an impact on life of people. My interest in programming started
              back in initial days of my college when I decided to start my own
              blog on wordpress. And later I got to know about web development
              and how you can develop your own website using HTML, CSS, and JS.
            </p>
            <p className="mt-4">
              I started my web development learning journey on FreeCodeCamp. And
              gradually I started loving what I was doing and then created
              several projects on my own.
            </p>
            <p className="mt-4">
              Fast-forwarding to today, I have worked with multiple clients in
              building their wep app from scratch and also re-writing old web
              apps. I have also worked on several native consumer facing mobile
              applications using React Native.
            </p>
            <p className="mt-4">
              Currently I am working in{" "}
              <span style={{ color: "#00FFEF" }}>Produze</span> as a{" "}
              <span style={{ color: "#00FFEF" }}>
                Full-stack Software Engineer
              </span>{" "}
              where I am building the consumer facing metrics dashboard which
              involves handling tons of metrics data.
            </p>
            <p className="mt-4">
              Here are a few technologies I’ve been working with recently:
            </p>
            <div className="flex py-4">
              <ul className="mr-12">
                <li>
                  <span className="font-bold">1. </span>JavaScript (ES6+)
                </li>
                <li>
                  <span className="font-bold">2. </span>React.js
                </li>
                <li>
                  <span className="font-bold">3. </span>TypeScript
                </li>
                <li>
                  <span className="font-bold">4. </span>Next.js
                </li>
                <li>
                  <span className="font-bold">5. </span>React Native
                </li>
              </ul>
              <ul>
                <li>
                  <span className="font-bold">6. </span>Node.js
                </li>
                <li>
                  <span className="font-bold">7. </span>Elixir
                </li>
                <li>
                  <span className="font-bold">8. </span>Pheonix Framework
                </li>
                <li>
                  <span className="font-bold">9. </span>Postgres
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full md:w-2/4 mt-4 md:m-0">
          <div
            style={{ borderColor: "#00FFEF" }}
            className="flex items-center justify-center border-4 w-56 md:w-80 p-4 rotate-12"
          >
            <Image
              className="-rotate-12"
              src="/images/me.jpg"
              alt="Author image"
              width={300}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
