import { PropsWithChildren } from "react";
import { Icons } from "../icons";

interface Props extends PropsWithChildren {}

export function ProductCardBody({ children }: Props) {
  return (
    <div className="p-6 bg-white rounded-xl md:p-10 flex flex-col justify-evenly">
      {children}
    </div>
  );
}
