/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import clsx from "clsx";
import { EmailComponent } from "./email-component";
import { forwardRef } from "react";

export const JoinComponent = forwardRef(({ className }, ref) => {
  return (
    <section ref={ref} className={clsx(className, "")}>
      <div className="flex flex-col items-center justify-center text-[#2A254B]">
        <h1 className="text-center font-DMSans text-4xl font-normal mobile:text-xl">
          Join the club and get the benefits
        </h1>
        <p className="mt-4 text-center text-base mobile:text-sm">
          Sign up for our newsletter and receive exclusive offers on new ranges,
          sales, pop up stores and more
        </p>
        <EmailComponent className="mt-16" buttonColor="darkBlue" />
      </div>
    </section>
  );
});

