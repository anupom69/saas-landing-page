import clsx from "clsx";
import Image from "next/image";
import { HTMLAttributes } from "react";

export default function Avatar({className, children, ...otherProps}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx("size-20 rounded-full overflow-hidden border-4 border-blue-500 p-1 bg-neutral-900", className)}>{children}</div>
  );
}
