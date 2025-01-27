/* eslint-disable react/prop-types */
import clsx from "clsx";
import { LogoIcon } from "./icons/logo-icon";
import { BasketIcon } from "./icons/basket-icon";
import { ProfileIcon } from "./icons/profile-icon";
import { BurgerIcon } from "./icons/burger-icon";

import { useEffect, useState } from "react";

import { NavigateComponent } from "./HeaderComponents/navigate-component";
import { BurgerWindow } from "./HeaderComponents/burger-window-";

export function Header({ className }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1279.99 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <section className={clsx(className, "")}>
      <div className="flex justify-between">
        <div className="flex items-center">
          <LogoIcon className="text-[#22202E]" />
        </div>
        <NavigateComponent className="flex gap-11 font-Playfair text-lg font-normal [&>*]:transition-colors leading-6 text-[#726E8D] tablet:hidden [&>*:hover]:text-[#22202E]" />
        <div className="flex gap-4">
          <button>
            <BasketIcon className="text-[#22202E] transition-colors hover:text-[#22202E]/80" />
          </button>
          <button>
            <ProfileIcon className="text-[#22202E] transition-colors hover:text-[#22202E]/80" />
          </button>
          <button onClick={handleOpen} className="hidden tablet:block">
            <BurgerIcon className="text-[#22202E] transition-colors hover:text-[#22202E]/80" />
          </button>
        </div>
      </div>
      <BurgerWindow isOpen={isOpen} />
    </section>
  );
}
