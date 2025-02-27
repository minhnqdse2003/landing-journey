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
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { clone1Videos } from "../../../public/video";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const tl = useRef();

  useGSAP(() => {
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

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

    tl.current = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".hero-section",
          start: "bottom bottom",
          end: `+=${window.innerHeight}`,
          scrub: true,
        },
      })
      .to(".imageWrapper .image-banner", {
        scale: 1.25,
        ease: "linear",
      })
      .fromTo(
        ".hero-section .overlay",
        {
          position: "absolute",
          top: "0",
          width: "100vw",
          height: "100vh",
          backgroundColor: "#181303",
          zIndex: 2,
          opacity: 0,
        },
        {
          opacity: 1,
          ease: "linear",
        },
        "<"
      );
  });

  return (
    <div className="body-wrapper">
      <Navbar />
      <section className="hero-section">
        <div className="imageWrapper">
          <Image
            src={clone1Images.hero}
            className="image-banner"
            width={2000}
            height={2000}
          />
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
        <div className="overlay"></div>
      </section>
      <section className="body-contents py-[4rem] px-[3.5rem] text-center">
        <h3 className="text-[hsl(44,20%,78%)] text-[3.4rem]">
          Diseñamos websites personalizados para hoteles y villas, renovando su
          identidad y maximizando la conversión directa.{" "}
          <span className="text-[hsl(44,20%,38%)]">
            Con contenido editorial y soluciones narrativas, aumentamos las
            ventas directas en más del +30% reduciendo la dependencia de OTAs.
          </span>
        </h3>
        <video autoPlay loop muted playsInline className="w-1/2 mx-auto my-12">
          <source src={clone1Videos.vid1} type="video/mp4" />
        </video>
      </section>
      <section className="footer"></section>
    </div>
  );
};

export default Page;
