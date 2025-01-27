/* eslint-disable react/prop-types */
import clsx from "clsx";
import { NavigateComponent } from "./navigate-component";
export function BurgerWindow({ isOpen }) {
  return (
    <div
      className={clsx(
        "absolute left-0 z-[2] top-0 flex h-[calc(100vh+100%)] w-1/2 justify-center bg-slate-500/60 backdrop-blur-sm transition-transform duration-500",
        isOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      <NavigateComponent
        className={clsx(
          isOpen
            ? "flex mt-44 flex-col items-center gap-11 font-Playfair text-3xl font-normal leading-6 mobile:text-2xl xs:text-lg [&>*:hover]:scale-105 [&>*:hover]:transition-all"
            : "hidden",
        )}
      />
    </div>
  );
}
