"use client";
import quantumLogo from "@/assets/images/quantum.svg";
import acmeLogo from "@/assets/images/acme-corp.svg";
import echoValleyLogo from "@/assets/images/echo-valley.svg";
import pulseLogo from "@/assets/images/pulse.svg";
import outsideLogo from "@/assets/images/outside.svg";
import apexLogo from "@/assets/images/apex.svg";
import celestialLogo from "@/assets/images/celestial.svg";
import twiceLogo from "@/assets/images/twice.svg";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
  useGSAP(() => {
    const tl = gsap.timeline({
      repeat: -1,
      defaults: {
        ease: "none",
      },
    });

    // Use xPercent for smoother animations
    tl.to("#logo-ticker", {
      duration: 30,
      xPercent: -50,
    });

    // Optimize performance
    gsap.set("#logo-ticker", {
      willChange: "transform",
      force3D: true,
    });

    // Pause animation when tab is not visible
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        tl.pause();
      } else {
        tl.resume();
      }
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <h3 className="text-center text-white/50">
          Already chosen by these market leaders
        </h3>
        <div className="relative flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div
            id="logo-ticker"
            className="flex flex-none gap-24 animate-none min-w-full [backface-visibility:hidden]"
          >
            {logos.map((logo) => (
              <Image src={logo.image} alt={logo.name} key={logo.name} />
            ))}
            {logos.map((logo) => (
              <Image src={logo.image} alt={logo.name} key={`${logo.name}-duplicate`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
