import Image from "next/image";

export default function Register() {
  return (
    <div className="flex w-full">
      <div className="w-2/5">
        <Image
          src={"/images/auth-landing-image.jpg"}
          width={532}
          height={200}
          alt="Auth page"
        />
      </div>
      <div className="flex w-3/5">
        <div className="flex flex-col w-full h-auto py-10 items-center">
          <div className="flex flex-col py-2 w-3/5">
            <label className="text-gray-500 font-md mb-2">Email*</label>
            <input
              placeholder="Enter your email"
              className="w-full border-2 h-12 px-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col py-2 w-3/5">
          <label className="w-full text-gray-500 font-md mb-2">Username*</label>
            <input
              placeholder="Enter your username"
              className="w-full border-2 h-12 px-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col py-2 w-3/5">
          <label className="text-gray-500 font-md mb-2">Password*</label>
            <input
              placeholder="Enter your password"
              className="w-full border-2 h-12 px-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col py-2 w-3/5">
          <label className="text-gray-500 font-md mb-2">Confirm Password*</label>
            <input
              placeholder="Confirm password"
              className="w-full border-2 h-12 px-2 rounded-lg"
            />
          </div>
          <div className="w-3/5 py-4">
            <button className="w-full border h-10 rounded-lg hover:bg-gray-300 transition duration-200">
                Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
