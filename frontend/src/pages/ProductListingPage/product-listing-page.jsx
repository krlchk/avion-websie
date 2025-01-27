import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import {
  JoinComponent,
  PopUpModal,
  WhatMakesComponent,
  YouMightLike,
} from "../../components/ReusedComponents";
import { AboutProductComponent } from "./ProductListingComponents";

export function ProductListingPage() {
  return (
    <div className="mx-auto max-w-[1700px]">
      <PopUpModal/>
      <Header className="container" />
      <AboutProductComponent className="" />
      <YouMightLike className="container" />
      <WhatMakesComponent className="container" />
      <JoinComponent className="container" />
      <Footer className="container" />
    </div>
  );
}
