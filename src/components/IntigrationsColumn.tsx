"use client";
import { IntigrationsType } from "@/sections/Integrations";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

export default function IntigrationsColumn({
  integrations,
  className,
  isReversed,
  ...props
}: {
  integrations: IntigrationsType;
  className?: string;
  isReversed?: true | false;
} & React.HTMLAttributes<HTMLDivElement>) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "none",
        repeat: -1,
      },
    });
  
    if (containerRef.current) {
      // Adjust the starting and ending yPercent for a seamless loop
      const startPercent = isReversed ? -50 : 0;
      const endPercent = isReversed ? 0 : -50;
  
      tl.set(containerRef.current, {
        yPercent: startPercent,
      });
  
      tl.to(containerRef.current, {
        duration: 15,
        yPercent: endPercent,
      });
  
      gsap.set(containerRef.current, {
        willChange: "transform",
        force3D: true,
      });
  
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
    }
  }, [isReversed]);

  return (
    <div
      ref={containerRef}
      id="integrations-column"
      className={clsx("flex flex-col gap-4 pb-4", className)}
      {...props}
    >
      {integrations.map((integration) => (
        <div
          key={integration.name}
          className="bg-neutral-900 border-white/10 rounded-3xl p-6"
        >
          <div className="flex justify-center">
            <Image
              className="size-24"
              src={integration.icon}
              alt={integration.name}
            />
          </div>
          <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
          <p className="text-center text-white/50 mt-2">
            {integration.description}
          </p>
        </div>
      ))}
      {integrations.map((integration) => (
        <div
          key={integration.name}
          className="bg-neutral-900 border-white/10 rounded-3xl p-6"
        >
          <div className="flex justify-center">
            <Image
              className="size-24"
              src={integration.icon}
              alt={integration.name}
            />
          </div>
          <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
          <p className="text-center text-white/50 mt-2">
            {integration.description}
          </p>
        </div>
      ))}
    </div>
  );
}
