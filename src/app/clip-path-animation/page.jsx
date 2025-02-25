import React from "react";
import "./style.css";
import Image from "next/image";
import { svg } from "../../../public/svg";
import "@fontsource/courier-prime";

const Page = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <div className="w-fit h-[80vh] bgGradient flex flex-col justify-end relative">
        <div className="w-fit h-3/4">
          <Image
            className="w-full h-full object-contain"
            src={svg.clipPath}
            width={500}
            height={500}
          />
        </div>
        <p className="absolute top-[50%] left-1 text-left whitespace-nowrap ">
          Lorem ipsum dolor sit amet
        </p>
        <p className="absolute top-[50%] right-1 text-right">
          Lorem ipsum dolor sit amet
        </p>
        <h3 className="absolute top-0 left-1/2 transform translate-x-[-50%] text-white/65 text-xl tracking-widest">
          new collection
        </h3>

        <div className="absolute bottom-4 w-full left-[50%] text-[#F2A875] container text-center flex flex-col items-center justify-center">
          <h1 className="uppercase break-words whitespace-pre-wrap text-3xl w-1/2 mb-4 font-medium">
            gradient template
          </h1>
          <h3 className=" text-xl tracking-widest">new collection</h3>
          <p className="text-[0.5rem] px-16">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
