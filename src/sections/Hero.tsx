"use client";
import Button from "@/components/Button";
import DesignExample1Image from "@/assets/images/design-example-1.png";
import DesignExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
export default function Hero() {
  const tl = useRef<gsap.core.Timeline>();
  useGSAP(() => {
    gsap.registerPlugin(Draggable);
    Draggable.create(["#left-design", "#right-design"], {
      type: "x,y",
      inertia: true,
      dragResistance: 0.3,
      onDragStart: function () {
        if (tl.current) tl.current.pause();
      },
      onDragEnd: function () {
        gsap.to(this.target, {
          x: 0,
          y: 0,
          duration: 1,
          ease: "expo.out",
        });
      },
    });

    tl.current = gsap
      .timeline()
      .to("#left-design", {
        opacity: 1,
        duration: 0.5,
      })
      .to(
        "#left-pointer",
        {
          opacity: 1,
          duration: 0.5,
        },
        "<"
      )
      .to("#left-design", {
        x: 0,
        y: 0,
        ease: "expo.out",
        duration: 0.5,
      })
      .to(
        "#left-pointer",
        {
          x: -100,
          y: 0,
          ease: "expo.out",
          translateY: 20,
          duration: 0.5,
        },
        "<"
      )
      .to("#left-pointer", {
        keyframes: {
          x: [-100, 0],
          y: [0, 16, 0],
        },
        duration: 0.5,
        ease: "none",
      })
      .to("#right-design", {
        opacity: 1,
        duration: 0.5,
      })
      .to(
        "#right-pointer",
        {
          opacity: 1,
          duration: 0.5,
        },
        "<"
      )
      .to("#right-design", {
        x: 0,
        y: 0,
        ease: "expo.out",
        duration: 0.5,
      })
      .to(
        "#right-pointer",
        {
          x: 175,
          y: 0,
          ease: "expo.out",
          duration: 0.5,
        },
        "<"
      )
      .to("#right-pointer", {
        keyframes: {
          x: [175, 0],
          y: [0, 20, 0],
        },
        duration: 0.5,
        ease: "none",
      });
  });
  return (
    <section id="#" className="py-24 overflow-x-clip">
      <div className="container relative">
        <div
          id="left-design"
          className="opacity-0 translate-y-[100px] -translate-x-[100px] absolute -left-32 top-16 hidden lg:block"
        >
          <Image
            draggable={false}
            src={DesignExample1Image}
            alt="Design Example 1"
          />
        </div>
        <div
          id="left-pointer"
          className="opacity-0 translate-y-[100px] -translate-x-[200px] absolute left-56 top-96 hidden lg:block"
        >
          <Pointer name="Dippanita" color="blue" />
        </div>
        <div
          id="right-design"
          className="opacity-0 translate-x-[100px] translate-y-[100px] absolute -right-64 -top-16 hidden lg:block"
        >
          <Image
            draggable={false}
            src={DesignExample2Image}
            alt="Design Example 2"
          />
        </div>
        <div
          id="right-pointer"
          className="opacity-0 translate-y-[100px] translate-x-[275px] absolute right-80 -top-4 hidden lg:block"
        >
          <Pointer name="Roy" color="red" />
        </div>
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from bg-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ $7.5M seed raised
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
          Impactful design, created effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          We are a team of designers and developers who are passionate about
          creating impactful design.
        </p>
        <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <input
            className="bg-transparent px-4 md:flex-1 w-full focus:outline-none"
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <Button
            type="submit"
            variant="primary"
            size="sm"
            className="whitespace-nowrap"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
