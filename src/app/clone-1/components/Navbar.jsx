import Image from "next/image";
import React, { useRef } from "react";
import { clone1Svg } from "../../../../public/svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    gsap.set(".navContainer", {
      opacity: 0,
    });
    gsap.to(".navContainer", {
      opacity: 1,
      duration: 1,
    });
  });

  return (
    <div className="flex text-black px-[2rem] z-30 py-[0.5rem] w-full fixed top-0 left-0 navContainer opacity-0">
      <div className="w-full max-w-[8.75rem]">
        <Image
          className="object-contain w-full"
          src={clone1Svg.logo}
          width={1000}
          height={1000}
        />
      </div>
      <div className="grow w-fit">
        <div className="bg-white flex py-[2rem] px-[2.5rem] gap-6 text-xl font-light mx-auto w-fit rounded">
          <p>Soluciones</p>
          <p>Planes</p>
          <p>Servicious</p>
          <p>FAQs</p>
        </div>
      </div>
      <div>
        <div className="bg-[#F1F6AF] h-full w-full text-center px-[2.5rem] py-[2rem] rounded">
          <p className="w-full h-full">Contáctanos</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
