"use client";
import clsx from "clsx";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
export default function Faq({
  faq,
  index,
  activeIndex,
  setActiveIndex
}: {
  faq: { question: string; answer: string };
  index: number;
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  gsap.registerPlugin(useGSAP);
  const svgPlusRef = useRef<SVGSVGElement>(null);
  const ansRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!svgPlusRef.current || !ansRef.current) return;
    const tl = gsap.timeline()
    if (index === activeIndex) {
      tl.to(ansRef.current, { height: "auto", duration: 0.5, ease: "back.out" });
      tl.to(svgPlusRef.current, { rotate: 45, duration: 0.5, ease: "back.out" }, "<");
    } else {
      tl.to(ansRef.current, { height: 0, duration: 0.5, ease: "back.out" });
      tl.to(svgPlusRef.current, { rotate: 0, duration: 0.5, ease: "back.out" }, "<");
    }
  }, [activeIndex]);
  return (
    <div
      key={faq.question}
      onClick={() => setActiveIndex(index === activeIndex ? null : index)}
      className="cursor-default bg-neutral-900 border-white/10 rounded-2xl p-6"
    >
      <div className="flex justify-between items-center cursor-pointer">
        <h3 className="font-medium">{faq.question}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          ref={svgPlusRef}
          className={"feather feather-plus text-lime-400 flex-shrink-0"}
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </div>
      <div
        ref={ansRef}
        className={clsx("overflow-hidden h-0")}
      >
        <p className="pt-4 text-white/50">{faq.answer}</p>
      </div>
    </div>
  );
}
