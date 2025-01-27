/* eslint-disable react/prop-types */
import clsx from "clsx";
import { IconOne } from "./icons/popup-icons/icon-one";
import { IconTwo } from "./icons/popup-icons/icon-two";
import { useEffect, useState } from "react";

export function PopUpModal({ className }) {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        setIsOpen(true)
      }, "5000");
    }, []);
    const handleClose = () => {
      setIsOpen((lastState) => !lastState);
    };

  return (
    <div
      className={clsx(
        className,
        "fixed left-0 top-0 z-[1] flex w-full items-center justify-between bg-[#2A254B] px-3 py-4 text-white transition-all duration-500",
        isOpen
          ? "visible translate-y-0 opacity-100"
          : "invisible -translate-y-full opacity-0",
      )}
    >
      <div></div>
      <div className="flex items-center justify-center gap-2">
        <IconOne className="min-h-[17px] min-w-[16px]" />
        <p>Free delivery on all orders over £50 with code easter checkout</p>
      </div>
      <button onClick={handleClose}>
        <IconTwo />
      </button>
    </div>
  );
}
