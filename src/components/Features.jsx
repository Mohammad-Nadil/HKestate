import React from "react";

const Features = () => {
  return (
    <>
      {/* FEATURES – LUXURY GRID */}
      <section id="features" className="relative bg-black py-20 xl:py-48 px-3 xl:px-6">
        <div className="max-w-7xl mx-auto text-white">
          <h3 className="text-4xl sm:text-5xl mb-10 xl:mb-24 font-semibold md:font-medium leading-tight">
            Architecture that <br /> defines a city
          </h3>

          <div className="grid md:grid-cols-3 gap-10 xl:gap-16">
            {[
              {
                title: "Skyline Presence",
                desc: "Designed to dominate the skyline with architectural confidence.",
              },
              {
                title: "Interior Precision",
                desc: "Every detail refined for balance, light and comfort.",
              },
              {
                title: "Intelligent Living",
                desc: "Smart spaces engineered for modern urban life.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative p-5 lg:p-12 rounded-3xl bg-white/3 backdrop-blur-xl border border-white/10 transition-all duration-700 hover:-translate-y-4 hover:border-white/30"
              >
                {/* hover glow */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition
            bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]"
                />

                <h4 className="relative text-2xl font-medium mb-6">
                  {item.title}
                </h4>

                <p className="relative text-gray-400 leading-relaxed">
                  {item.desc}
                </p>

                <span className="relative block mt-5 md:mt-10 text-xs tracking-[0.3em] text-white/40">
                  EXPLORE
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
