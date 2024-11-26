import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
export default function Button(
  props: {
    variant?: "primary" | "secondary";
    size?: "sm";
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  const { variant = "primary", size, className, children, ...rest } = props;
  return (
    <button
      className={clsx(
        "border h-12 rounded-full px-6 font-medium",
        className,
        variant === "primary"
          ? "bg-lime-400 text-neutral-950 border-lime-400"
          : "border-white text-white bg-transparent",
        size === "sm" && "h-10"
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
