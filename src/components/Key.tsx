import clsx from "clsx";
import { HTMLAttributes } from "react";

export default function Key({children, className, ...otherProps}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx("size-14 bg-neutral-300 inline-flex items-center justify-center rounded-2xl text-xl text-neutral-950 font-medium", className)} {...otherProps}>{children}</div>
  )
}
