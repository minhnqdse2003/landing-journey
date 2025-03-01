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

const data = [
  {
    leftContent: {
      bgColor: "hsl(148.09, 58.02%, 15.88%)",
      title: "confort",
      descriptions: {
        shortTitle: "PRECIO SIN IVA",
        titleColor: "hsl(148.09, 58.02%, 65.88%)",
        price: "4.990",
        contents:
          "Diseño y desarrollo web premium + Gestor de contenidos + Renovación de marca.",
      },
      details: {
        shortTitle: "¿Qué incluye?",
        contents: [
          "Diseño web premium",
          "Renovación de identidad visual",
          "Gestor de contenidos completo y fácil",
          "Optimización SEO y conversión",
          "Diseño adaptable a móvil/desktop",
          "Asesoría en contenido digital",
        ],
      },
    },
    rightContent: {
      vidSrc: clone1Videos.vid2,
    },
  },
  {
    leftContent: {
      bgColor: "hsl(30, 3.23%, 12.16%)",
      title: "premium",
      descriptions: {
        shortTitle: "PRECIO SIN IVA",
        titleColor: "hsl(30, 3.23%, 62.16%)",
        price: "6.490",
        contents:
          "Diseño y desarrollo web premium + Gestor de contenidos + Renovación de marca + Plantillas para redes sociales.",
      },
      details: {
        shortTitle: "¿Qué incluye?",
        contents: [
          "Diseño web premium",
          "Renovación de identidad visual",
          "Gestor de contenidos completo y fácil",
          "Optimización SEO y conversión",
          "Diseño adaptable a móvil/desktop",
          "Asesoría en contenido digital",
          "Creación de 10 plantillas para redes",
        ],
      },
    },
    rightContent: {
      vidSrc: clone1Videos.vid3,
    },
  },
  {
    leftContent: {
      bgColor: "hsl(46.39, 54.8%, 34.71%)",
      title: "luxury",
      descriptions: {
        shortTitle: "PRECIO SIN IVA",
        titleColor: "hsl(46.39, 54.8%, 84.71%)",
        price: "10.490",
        contents:
          "Diseño y desarrollo web exclusivo + renovación de marca + plantillas para redes sociales + dirección de arte fotográfica y vídeo.",
      },
      details: {
        shortTitle: "¿Qué incluye?",
        contents: [
          "Diseño web exclusivo",
          "Renovación de identidad visual",
          "Gestor de contenidos completo y fácil",
          "Optimización SEO y conversión",
          "Diseño adaptable a móvil/desktop",
          "Asesoría en contenido digital",
          "Creación de 10 plantillas para redes",
          "Selección de 30 fotos HD + 5 vídeos 15’ de banco + IA",
        ],
      },
    },
    rightContent: {
      vidSrc: clone1Videos.vid4,
    },
  },
];

const gifs = [".gif-0", ".gif-1", ".gif-2"];

const Page = () => {
  const tl = useRef();

  useGSAP(() => {
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    const updateScroll = (time) => {
      lenis.raf(time);
      requestAnimationFrame(updateScroll);
    };
    requestAnimationFrame(updateScroll);

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

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".hero-section",
          start: "bottom bottom",
          end: `+=${window.innerHeight}`,
          scrub: true,
        },
      })
      .to(".imageWrapper .image-banner", {
        scale: 1.5,
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

    gifs.forEach((gif) => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: gif,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        })
        .fromTo(gif, { yPercent: -10 }, { yPercent: 0 });
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".scroll-timeline",
          start: "top 90%",
          end: "bottom top",
          scrub: true,
        },
      })
      .fromTo(
        ".scroll-timeline",
        {
          x: -70,
        },
        {
          x: 25,
        }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".image-container",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })
      .fromTo(
        ".image",
        {
          yPercent: -5,
        },
        {
          yPercent: 5,
        }
      );

    gsap.to(".circle", {
      width: `+=${window.innerWidth * 10}`,
      height: `+=${window.innerHeight * 10}`,
      duration: 6,
    });

    return () => {
      lenis.destroy();
    };
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
      <section className="body-contents">
        <div className="preview">
          <h3 className="text-[hsl(44,20%,78%)] text-[3.4rem]">
            Diseñamos websites personalizados para hoteles y villas, renovando
            su identidad y maximizando la conversión directa.{" "}
            <span className="text-[hsl(44,20%,38%)]">
              Con contenido editorial y soluciones narrativas, aumentamos las
              ventas directas en más del +30% reduciendo la dependencia de OTAs.
            </span>
          </h3>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-1/2 mx-auto my-12"
          >
            <source src={clone1Videos.vid1} type="video/mp4" />
          </video>
        </div>
        <div className="main">
          <h3 className="text-[2rem] text-black text-center max-w-[70%] mx-auto py-[calc(10vh+4rem)]">
            Planes exclusivos y personalizados, que combinan un diseño web
            premium con la renovación de tu marca. Todo bajo un gestor de
            contenidos (CMS) intuitivo, que te permitirá actualizar tu sitio de
            manera fácil y rápida.
          </h3>
          <div className="card-section">
            <p className="text-black text-center text-[0.75rem] mb-8">
              NUESTROS PLANES
            </p>
            <div className="flex justify-center items-center gap-4 text-black text-[1.5rem]">
              <a href="#">Confort</a>
              <a href="#">Premium</a>
              <a href="#">Luxury</a>
            </div>
            <div className="w-full mt-[3.5rem]">
              {data.map((item, index) => {
                return (
                  <div
                    className="sticky flex w-full h-[100vh] top-0 gap-8 px-[2rem]"
                    key={index + " -item"}
                  >
                    <div
                      className={"w-1/2 h-[95%] rounded flex flex-col gap-10"}
                      style={{ backgroundColor: item.leftContent.bgColor }}
                    >
                      <h1
                        style={{
                          color: item.leftContent.descriptions.titleColor,
                        }}
                        className="uppercase text-center mt-[4rem] text-[7rem]"
                      >
                        {item.leftContent.title}
                      </h1>
                      <div className="flex w-full justify-between text-[hsl(44,20%,78%)] px-8 items-center">
                        <div className="flex flex-col gap-6">
                          <p className="font-semibold text-xs">
                            {item.leftContent.descriptions.shortTitle}
                          </p>
                          <span className="text-4xl">
                            {item.leftContent.descriptions.price}€
                          </span>
                        </div>
                        <h1 className="text-[1.75rem] max-w-[70%] font-light">
                          {item.leftContent.descriptions.contents}
                        </h1>
                      </div>
                      <div className="flex w-full justify-between text-[hsl(44,20%,78%)] px-8 items-start">
                        <div className="flex flex-col gap-6">
                          <p className="font-semibold text-sm">
                            {item.leftContent.details.shortTitle}
                          </p>
                        </div>
                        <ul className="list min-w-[calc(70%-1.25rem)]">
                          {item.leftContent.details.contents.map(
                            (detailsItem, index) => {
                              return (
                                <li
                                  key={
                                    "li-" +
                                    item.leftContent.descriptions.shortTitle +
                                    index
                                  }
                                  className="text-xl font-light"
                                >
                                  {detailsItem}
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </div>
                    </div>
                    <div className="w-1/2 flex items-center h-[95%] rounded overflow-hidden">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={`w-full h-[150%] object-contain gif-${index}`}
                      >
                        <source
                          src={item.rightContent.vidSrc}
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="horizontal-image-slider py-12 px-8">
            <h1 className="text-6xl text-black max-w-[70%] font-light tracking-wide">
              Nuestra propuesta va más allá de la venta. Creamos websites y
              contenidos digitales con narrativas visuales que atraen a tus
              futuros huéspedes, optimizando la conversión y el revenue.
            </h1>
            <div className="cta-section text-black w-[90%] flex justify-end">
              <div className="max-w-[40%] text-xl font-light">
                <p className="mb-8">
                  Elevamos la percepción de tu hotel, maximizamos el valor de tu
                  oferta y generamos un impacto duradero en tu audiencia.
                </p>
                <a href="#">{`Contáctanos >`}</a>
              </div>
            </div>
          </div>
          <div className="scroll-timeline flex justify-between w-full h-[150px] px-6 my-8">
            {[...Array(5)].map((_, index) => {
              return (
                <div
                  className="w-[18%]"
                  key={`/images/clone1.${index + 1}.jpg`}
                >
                  <Image
                    src={`/images/clone1.${index + 1}.jpg`}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                  />
                </div>
              );
            })}
          </div>
          <div className="h-[180vh] w-full flex items-center overflow-hidden image-container">
            <Image
              src={`/images/clone1.1.jpg`}
              width={2000}
              height={2000}
              className="w-full h-[150%] object-cover image"
            />
          </div>
          <div className="h-[100vh]"></div>
        </div>
      </section>
      <section className="footer"></section>
    </div>
  );
};

export default Page;
