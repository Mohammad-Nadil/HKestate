import React from "react";
import SvgHeading from "./SvgHeading";
import Building from "./Building";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroller",
        start: "top top",
        end: "+=300%",
        scrub: 1,
        pin: true,
      },
    });

    tl.to(".headline", { opacity: 0, y: -100, duration: 1 });
    tl.to(".svg-view", { scale: 1.1, duration: 2 }, "<");

    tl.to("#full_city", { opacity: 0, duration: 1 });
    tl.to("#building_top", { y: -400, duration: 1 });
    tl.to("#wall_side", { x: -400, duration: 1 });
    tl.to("#wall_front", { x: 400, duration: 1 }, "<");
    tl.to("#interior_wall_top", { y: -400, duration: 1 });
    tl.to("#interior_wall_side", { x: -400, duration: 1 });
    tl.to("#interior_wall_side_2", { x: -400, duration: 1 });
    tl.to("#interior_wall_front", { x: 400, duration: 1 }, "<");
  }, []);
  return (
    <>
      {/* HERO + SCROLL SCENE */}
      <section className="scroller  overflow-hidden w-full">
        <div className="w-screen h-screen flex items-center justify-center relative">
          <h1 className="headline w-9/12 xl:w-4/12 z-10">
            <SvgHeading />
          </h1>

          <div className="svg-view absolute inset-0 flex items-center justify-center -z-10">
            <div className=" h-10/12 w-full sm:h-full xl:aspect-video overflow-x-clip -z-10 absolute top-1/2 left-1/2 -translate-1/2">
              <Building />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
