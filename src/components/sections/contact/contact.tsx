export const Contact = () => {
  return (
    <div className="w-full bg-white h-screen w-screen">
      <div className="w-full flex flex-col items-center justify-center h-4/5">
        <div className="w-2/5 text-center">
          <p className="text-5xl font-medium">Get In Touch</p>
          <p className="text-lg">
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
        </div>
        <div className="mt-8">
          <a
            style={{ borderColor: "#00FFEF" }}
            href="mailto: thakran9.anukul@gmail.com"
            className="py-4 px-8 border-2 text-lg cursor-pointer font-medium hover:bg-cyan-50"
          >
            Say hello!
          </a>
        </div>
      </div>
      <div
        style={{ backgroundColor: "#0A1930" }}
        className="h-1/5 w-full flex items-center justify-center"
      >
        <div>
          <p className="text-lg text-white">
            Design & Built by{" "}
            <span style={{ color: "#00FFEF" }}>Annukul Thakran</span>.
          </p>
        </div>
      </div>
    </div>
  );
};
