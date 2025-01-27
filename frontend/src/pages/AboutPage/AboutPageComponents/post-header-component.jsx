/* eslint-disable react/prop-types */
import clsx from "clsx";
import { Link } from "react-router-dom";

export function PostHeaderComponent({ className }) {
  return (
    <section className={clsx(className, "")}>
      <div className="grid grid-cols-3 items-center font-DMSans text-base font-normal text-[#2A254B] mobile:grid-cols-1">
        <h1 className="col-span-2 text-4xl mobile:text-center">
          A brand built on the love of craftmanship, quality and outstanding
          customer service
        </h1>
        <div className="mt-10 flex items-center justify-center">
          <Link className="px-8 py-4 hover:text-[#2A254B]/70">
            View our products
          </Link>
        </div>
      </div>
    </section>
  );
}
