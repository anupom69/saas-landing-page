"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import Button from "@/components/Button";
import Link from "next/link";
import { useRef, useState } from "react";
import clsx from "clsx";

gsap.registerPlugin(useGSAP);

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  useGSAP(
    () => {
      if (!menuRef.current) return;
      if (isOpen) {
        gsap.to(menuRef.current, {
          opacity: 1,
          height: "auto",
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        gsap.to(menuRef.current, {
          opacity: 0,
          y: -20,
          height: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    },
    {
      dependencies: [isOpen],
    }
  );
  return (
    <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
      <div className="container max-w-5xl">
        <div className="border border-white/15 rounded-[27px] bg-neutral-950/70 backdrop-blur">
          <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-4 md:pr-2 items-center">
            <div>
              <Image src={logoImage} alt="logo" className="h-9 md w-auto" />
            </div>
            <div className="hidden lg:flex justify-center items-center">
              <nav className="flex gap-6 font-medium">
                {navLinks.map((link) => (
                  <Link href={link.href} key={link.label}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex items-center justify-end gap-4">
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
                className="cursor-pointer feather feather-menu md:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                <line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  className={clsx(
                    "origin-left transition",
                    isOpen && "rotate-45 -translate-y-1"
                  )}
                ></line>
                <line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  className={clsx(
                    "origin-left transition",
                    isOpen && "opacity-0"
                  )}
                ></line>
                <line
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                  className={clsx(
                    "origin-left transition",
                    isOpen && "-rotate-45 translate-y-1"
                  )}
                ></line>
              </svg>
              <div></div>
              <Button
                variant="secondary"
                className="hidden md:inline-flex items-center"
              >
                Log In
              </Button>
              <Button
                variant="primary"
                className="hidden md:inline-flex items-center"
              >
                Sign Up
              </Button>
            </div>
          </div>
          <div ref={menuRef} className="opacity-0 h-0">
            <div
              className={clsx(
                "flex flex-col md:hidden items-center gap-4 py-4"
              )}
            >
              {navLinks.map((link) => (
                <a href={link.href} key={link.label} className="py-2">
                  {link.label}
                </a>
              ))}
              <Button variant="secondary" size="sm">
                Log In
              </Button>
              <Button variant="primary" size="sm">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
