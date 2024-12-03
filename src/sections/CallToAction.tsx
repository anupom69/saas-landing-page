"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
export default function CallToAction() {
  const ctaRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!ctaRef.current) return;
    const tl = gsap.timeline({
      repeat: -1,

      defaults: {
        ease: "none",
      },
    });
    tl.to(ctaRef.current, {
      duration: 20,
      xPercent: -50,
    });

    // Add hover event listeners to slow down the animation
    const handleMouseEnter = () => tl.timeScale(0.5); // Slow down
    const handleMouseLeave = () => tl.timeScale(1);   // Normal speed

    ctaRef.current.addEventListener('mouseenter', handleMouseEnter);
    ctaRef.current.addEventListener('mouseleave', handleMouseLeave);

    // Cleanup event listeners on unmount
    return () => {
      ctaRef.current?.removeEventListener('mouseenter', handleMouseEnter);
      ctaRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ctaRef]);
  return (
    <section className="py-24 group cursor-pointer">
      <div className="overflow-x-clip p-4 flex">
        <div ref={ctaRef} className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-lime-400">&#10038;</span>
              <span className="group-hover:text-lime-400 transition-colors">Try it for free</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
