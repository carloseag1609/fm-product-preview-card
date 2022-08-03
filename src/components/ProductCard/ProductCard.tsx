import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export function ProductCard({ children }: Props) {
  return (
    <div className="bg-white w-5/6 mx-auto rounded-xl grid md:grid-cols-2 md:grid-rows-1 md:w-5/12">
      {children}
    </div>
  );
}
