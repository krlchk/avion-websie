import { Header } from "../../components/Header";
import { Hero } from "./HomepageComponents";
import {
  JoinComponent,
  SliderComponent,
  WhatMakesComponent,
  GetInTouchConponent,
  PopUpModal,
} from "../../components/ReusedComponents";
import { Footer } from "../../components/Footer";
import { useRef } from "react";

export function Homepage() {
  const scrollTargetRef = useRef(null);
  const handleScroleFunction = () => {
    if (scrollTargetRef.current) {
      scrollTargetRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  return (
    <div className="mx-auto max-w-[1700px]">
      <PopUpModal />
      <Header className="container" />
      <Hero className="container mobile:px-0" />
      <WhatMakesComponent className="container" />
      <SliderComponent className="container" />
      <JoinComponent ref={scrollTargetRef} className="container" />
      <GetInTouchConponent handleScrole={handleScroleFunction} />
      <Footer className="container" />
    </div>
  );
}
