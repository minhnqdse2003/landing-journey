"use client";
import React, { useRef } from "react";
import Navbar from "./components/Navbar";
import "@fontsource-variable/fraunces";
import "./style.css";
import Image from "next/image";
import { clone1Images } from "../../../public/images";
import { clone1Svg } from "../../../public/svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Page = () => {
  const tl = useRef();

  useGSAP(() => {
    gsap.set(".imageWrapper", {
      skewX: 10,
      skewY: 10,
    });
    gsap.to(".imageWrapper", {
      y: 0,
      skewX: 0,
      skewY: 0,
      duration: 1.25,
      ease: "circ.out",
    });

    tl.current = gsap
      .timeline()
      .to(".hero-content .fade", {
        opacity: 1,
        duration: 0.1,
        ease: "power4.out",
      })
      .fromTo(
        ".hero-content .slideUp",
        {
          skewX: 5,
        },
        {
          y: 0,
          duration: 1,
          skewX: 0,
          ease: "circ.out",
        }
      );
  });

  return (
    <div className="body-wrapper">
      <Navbar />
      <section className="hero-section">
        <div className="imageWrapper">
          <Image src={clone1Images.hero} width={2000} height={2000} />
        </div>
        <div className="hero-content">
          <h1 className="fade">
            E<em>l</em>eva tu hotel
          </h1>
          <div className="overflow-hidden py-1 my-1">
            <p className="slideUp">
              Deja atrás los templates básicos. Impulsa tu conversión emocional
              con restyling de marca, website premium y gestión fácil.
            </p>
          </div>
          <p className="fade">Saber más</p>
        </div>
        <h1 className="title">
          <Image
            loading="eager"
            src={clone1Svg.title}
            width={2000}
            height={2000}
          />
        </h1>
      </section>
      <section className="body-contents"></section>
      <section className="footer"></section>
    </div>
  );
};

export default Page;
