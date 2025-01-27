/* eslint-disable react/prop-types */
import clsx from "clsx";
import { UiButtons } from "../../../components/uikit/ui-buttons";
// import HeroImage from "./HeroImages/hero-image.png";
import { useEffect, useState } from "react";
import axios from "axios";

export function Hero({ className }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:5001/api/products/1")
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className={clsx(className, "")}>
      <div className="flex h-auto w-full">
        <div className="flex w-full bg-[#2A254B] font-DMSans text-4xl font-normal leading-snug text-white">
          <div className="flex w-2/3 flex-col p-16 tablet:w-2/4 tablet:p-12 mobile:w-full mobile:p-8">
            <p className="order-1">
              The furniture brand for the future, with timeless designs
            </p>
            <UiButtons
              color="lightBlue"
              size="md"
              className="order-2 mt-10 mobile:order-3 mobile:w-full"
            >
              View collection
            </UiButtons>
            <p className="order-3 mt-48 text-lg leading-normal tablet:mt-32 mobile:order-2 mobile:mt-20">
              A new era in eco friendly furniture with Avelon, the French luxury
              retail brand with nice fonts, tasteful colors and a beautiful way
              to display things digitally using modern web technologies.
            </p>
          </div>
          <div className="h-full w-2/4 mobile:hidden">
            {
              data && (
                <img
                className="h-full w-full object-cover"
                src={`http://localhost:5001/${data.img}`}
                alt={data.title || 'Product Image'}
                />
              )
            }
          </div>
        </div>
      </div>
    </section>
  );
}
