import { useRef } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import {
  GetInTouchConponent,
  JoinComponent,
  PopUpModal,
  WhatMakesComponent,
} from "../../components/ReusedComponents";
import { AboutPageHero, PostHeaderComponent } from "./AboutPageComponents";

export function AboutPage() {
  const scrollTargetRef = useRef(null);
  const handleScroleFunction = () => {
    if (scrollTargetRef) {
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
      <PostHeaderComponent className="container" />
      <AboutPageHero className="container" />
      <GetInTouchConponent handleScrole={handleScroleFunction} />
      <WhatMakesComponent className="container" />
      <JoinComponent ref={scrollTargetRef} className="container mb-10" />
      <Footer className="container" />
    </div>
  );
}
