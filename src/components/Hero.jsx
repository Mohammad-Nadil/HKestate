import React, { useEffect, useState } from "react";
import SvgHeading from "./SvgHeading";
import Building from "./Building";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const [ready, setReady] = useState(false);
  const [mobile, setMobile] = useState(null);
  useEffect(() => {
    const checkIfMobile = () => {
      setMobile(window.innerWidth < window.innerHeight ? true : false);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);
  useEffect(() => {
    if (!ready) return;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroller",
        start: "top top",
        end: mobile ? "+=100%" : "+=250%",
        scrub: 1,
        pin: true,
      },
    });

    tl.to(".headline", { opacity: 0, y: -100, duration: 0.6 });
    tl.to(".svg-view", { scale: 1.05, duration: 0.6 }, "<");

    tl.to("#full_city", { opacity: 0, duration: 0.6 });
    tl.to("#building_top", { y: mobile ? -200 : -300, duration: 0.6 });
    tl.to("#wall_side", { x: mobile ? -175 : -300, duration: 0.6 });
    tl.to("#wall_front", { x: mobile ? 175 : 300, duration: 0.6 }, "<");
    tl.to("#interior_wall_top", { y: mobile ? -150 : -250, duration: 0.6 });
    tl.to(
      "#interior_wall_side",
      { x: mobile ? -150 : -250, duration: 0.6 },
      "<",
    );
    tl.to("#interior_wall_side_2", { x: mobile ? -150 : -250, duration: 0.6 });
    tl.to(
      "#interior_wall_front",
      { x: mobile ? 150 : 250, duration: 0.6 },
      "<",
    );
  }, [ready, mobile]);
  return (
    <>
      {/* HERO + SCROLL SCENE */}
      <section className="scroller  overflow-hidden w-full">
        <div className="w-screen h-screen flex items-center justify-center relative">
          <h1 className="headline w-9/12 xl:w-4/12 z-10">
            <SvgHeading />
          </h1>

          <div className="svg-view absolute inset-0 flex items-center justify-center -z-10">
            <div
              onLoad={() => setReady(true)}
              className=" h-10/12 w-full sm:h-full xl:aspect-video overflow-x-clip -z-10 absolute top-1/2 left-1/2 -translate-1/2"
            >
              <Building />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
