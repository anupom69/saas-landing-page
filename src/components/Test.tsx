"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitType from "split-type";

export default function GsapScroll() {
  gsap.registerPlugin(ScrollTrigger);
  const paraRef = useRef<HTMLParagraphElement>(null);
  useGSAP(
    () => {
      if (!paraRef.current) return;
      const text = new SplitType(paraRef.current, {
        tagName: "span",
      });
      gsap.from(text.chars, {
        opacity: 0.2,
        stagger: 0.1,
        scrollTrigger: {
          trigger: text.chars,
          scrub: true,
          start: "top 80%",
          end: "top 20%",
        },
        scaleY: 0,
        y: 20,
        transformOrigin: "top",
      });
    },
    {
      scope: paraRef,
    }
  );
  return (
    <div>
      <div className="h-screen" />
      <p
        ref={paraRef}
        className="text-4xl tracking-wide font-semibold leading-relaxed max-w-md mx-auto"
      >
        I'm the most infamous dictator the world has ever seen, Mrs. Hasina.
        Fuck me...
      </p>
      <div className="h-screen" />
    </div>
  );
}
