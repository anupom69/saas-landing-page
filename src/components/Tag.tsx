import clsx from "clsx";
import { HTMLAttributes } from "react";

export default function Tag({
  className,
  children,
  ...otherProps
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx("inline-flex items-center border border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase", className)} {...otherProps}>
      <span>&#10038;</span>
      <span className="text-sm">{children}</span>
    </div>
  );
}

// 1:13
