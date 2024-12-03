"use client";
import Tag from "@/components/Tag";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import SplitType from "split-type";

const text = `You're racing to create exceptional work, but traditional design tools slow you down with unnecessary complexity and steep learning curves.`;

export default function Introduction() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!containerRef.current) return;
    gsap.registerPlugin(ScrollTrigger);
    const text = new SplitType(containerRef.current, {
      types: "words,chars",
      tagName: "span",
    });
    gsap.from(text.chars, {
      opacity: 0.2,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 20vh",
        end: "+=100%",
        scrub: true,
        // pin: true,
      },
    });
  });
  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="sticky top-32 lg:top-40">
          <div className="flex items-center justify-center">
            <Tag>Introducing Layers</Tag>
          </div>
          <div className="text-3xl md:text-6xl lg:text-7xl font-medium text-center mt-10">
            <span>Your creative process deserves better.</span>{" "}
            <span ref={containerRef} className="text-white">
              {text}
            </span>
            <span className="text-lime-400 block">
              That&apos;s why we&apos;ve built Layers.
            </span>
          </div>
        </div>
        <div className="h-[150vh]"></div>
      </div>
    </section>
  );
}
