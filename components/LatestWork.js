import React from "react";
import Image from "next/image";
import Link from "next/link";

const LatestWork = () => {
  return (
    <div className="bg-[#03001E] flex flex-col items-center justify-center place-content-center">
      <p className="text-white font-style-4 text-center xl:text-center tracking-wider flex flex-col items-center justify-center font-bold text-5xl mt-24">
        Recent Work ✨
      </p>
      <div className="flex flex-col xl:flex-row w-full justify-center space-x-10 text-left items-center md:items-center align-middle self-center place-items-center">
        <div className="">
          <p className="text-white font-semibold tracking-widest font-style-4 text-center xl:text-left text-4xl">
            Viia
          </p>
          <p className="text-white font-semibold tracking-widest text-center xl:text-left text-2xl">
            The Safest Carpooling App on your phone
          </p>
          <p className="text-white font-semibold tracking-widest text-center xl:text-left text-2xl">
            Responsibilities : App frontend, backend integration
          </p>
          <p className="text-white font-semibold tracking-widest text-center xl:text-left text-2xl">
            Available on Playstore & App Store
          </p>
          <div className=" bg-blue-400 mx-10 md:mx-0 align-middle md:w-fit p-2 mt-5 rounded-lg justify-center items-center">
            <Link href={"https://apps.apple.com/gb/app/viia/id6447322346"}>
              <p className="text-black font-semibold cursor-pointer tracking-widest text-center xl:text-left text-2xl ">
                Install Now
              </p>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Link href={"https://apps.apple.com/gb/app/viia/id6447322346"}>
            <Image
              src={require("../images/viia.png")}
              height={500}
              width={500}
              objectFit="cover"
              className=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LatestWork;
