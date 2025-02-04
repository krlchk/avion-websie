/* eslint-disable react/prop-types */
import { Header } from "../../components/Header/header";
import { Footer } from "../../components/Footer/footer";
import { PopUpModal } from "../../components/ReusedComponents";
import clsx from "clsx";
import { MainBusketComponent } from "./BasketPageComponents";

export function BasketPage({ className }) {
  return (
    <div className={clsx(className, "mx-auto max-w-[1700px]")}>
      <PopUpModal />
      <Header className="container" />
      <MainBusketComponent className="px-44 min-h-[55vw] py-16 tablet:px-20 tablet:py-8 xs:container" />
      <Footer className="container" />
    </div>
  );
}
