/* eslint-disable react/prop-types */
import clsx from "clsx";
import { UiButtons } from "../../../components/uikit";
import image from "./staticImages/about-page-image.png";
import { useNavigate } from "react-router-dom";

export function AboutPageHero({ className }) {
  const navigate = useNavigate();
  const go = () => {
    navigate("/allproducts");
  };
  return (
    <section className={clsx(className, "")}>
      <div className="grid grid-cols-2 gap-4 tablet:grid-cols-1">
        <div className="bg-[#2A254B] p-16 text-white">
          <h1 className="text-3xl">It started with a small idea</h1>
          <p className="mt-3 text-lg">
            A global brand with local beginnings, our story begain in a small
            studio in South London in early 2014
          </p>
          <UiButtons
            onClick={go}
            className="mt-48 tablet:w-full mobile:mt-14"
            color="lightBlue"
          >
            View all
          </UiButtons>
        </div>
        <div className="max-h-[480px]">
          <img className="h-full w-full object-cover" src={image} alt="" />
        </div>
      </div>
    </section>
  );
}
