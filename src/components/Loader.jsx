import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Loader = () => {
  const dot1 = useRef();
  const dot2 = useRef();
  const dot3 = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to(dot1.current, { y: -20, duration: 0.6 })
      .to(dot2.current, { y: -20, duration: 0.6 }, "-=0.5")
      .to(dot3.current, { y: -20, duration: 0.6 }, "-=0.5");
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-[9999]">
      <div className="flex space-x-2">
        <div
          ref={dot1}
          className="w-4 h-4 rounded-full bg-gray-300 shadow-inner"
        ></div>
        <div
          ref={dot2}
          className="w-4 h-4 rounded-full bg-gray-300 shadow-inner"
        ></div>
        <div
          ref={dot3}
          className="w-4 h-4 rounded-full bg-gray-300 shadow-inner"
        ></div>
      </div>
    </div>
  );
};

export default Loader;
