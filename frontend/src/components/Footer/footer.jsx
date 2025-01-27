/* eslint-disable react/prop-types */
import clsx from "clsx";
import { Link } from "react-router-dom";
import { EmailComponent } from "../ReusedComponents";
import { FacebookIcon } from "./footer-icons/facebook-icon";
import { InstagramIcon } from "./footer-icons/instagram-icon";
import { SkypeIcon } from "./footer-icons/skype-icon";

export function Footer({ className }) {
  const menu = [
    { name: "New arrivals", to: "" },
    { name: "Best sellers", to: "" },
    { name: "Recently viewed", to: "" },
    { name: "Popular this week", to: "" },
    { name: "All products", to: "" },
  ];
  const categories = [
    { name: "Crockery", to: "" },
    { name: "Furniture", to: "" },
    { name: "Homeware", to: "" },
    { name: "Plant pots", to: "" },
    { name: "Chairs", to: "" },
  ];
  const company = [
    { name: "About us", to: "" },
    { name: "Vacancies", to: "" },
    { name: "Contact us", to: "" },
    { name: "Privacy", to: "" },
    { name: "Returns policy", to: "" },
  ];

  return (
    <footer className={clsx(className, "bg-[#2A254B]")}>
      <div className="grid grid-cols-5 font-DMSans text-base font-normal text-white mobile:grid-cols-2 xs:grid-cols-1">
        <div className="flex flex-col gap-3">
          <p className="text-xl">Menu</p>
          {menu.map((item, index) => (
            <Link
              className="inline-flex cursor-default transition-colors"
              to={item.to}
              key={index}
            >
              <p className="cursor-pointer hover:text-gray-400">{item.name}</p>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3 xs:mt-10">
          <p className="text-xl">Categories</p>
          {categories.map((item, index) => (
            <Link
              className="inline-flex cursor-default transition-colors"
              to={item.to}
              key={index}
            >
              <p className="cursor-pointer hover:text-gray-400">{item.name}</p>
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-3 mobile:mt-10">
          <p className="text-xl">Our company</p>
          {company.map((item, index) => (
            <Link
              className="inline-flex cursor-default transition-colors"
              to={item.to}
              key={index}
            >
              <p className="cursor-pointer hover:text-gray-400">{item.name}</p>
            </Link>
          ))}
        </div>
        <div className="col-span-2 grid mobile:mt-10 xs:col-span-1">
          <div className="flex flex-col">
            <p className="text-xl">Join our mailing list</p>
            <EmailComponent
              inputClassName="bg-violet-800/30"
              buttonColor="white"
              className="mt-4 mobile:mt-2"
            />
          </div>
        </div>
      </div>
      <hr className="mt-12 border-[#4E4D93]" />
      <div>
        <div className="mt-6 flex justify-between mobile:flex-col mobile:items-center">
          <p className="text-lg text-white">Copyright 2022 Avion LTD</p>
          <div className="flex gap-6 text-white mobile:mt-5">
            <Link
              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className="transition-colors hover:text-gray-400" />
            </Link>
            <Link
              to="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="transition-colors hover:text-gray-400" />
            </Link>
            <Link
              to="https://skype.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SkypeIcon className="transition-colors hover:text-gray-400" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
