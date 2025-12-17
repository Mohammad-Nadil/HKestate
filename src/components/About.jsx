import React from "react";

const About = () => {
  return (
    <>
      {/* ABOUT – CINEMATIC */}
      <section id="about" className="relative min-h-screen bg-black text-white flex items-center overflow-hidden">
        {/* animated grain / noise feel */}
        <div className="absolute inset-0 opacity-[0.06] bg-[url('/noise.png')] mix-blend-overlay" />

        {/* gradient light */}
        <div
          className="absolute -top-1/2 -left-1/4 w-[120%] h-[120%]
    bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.12),transparent_60%)]"
        />

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center">
          {/* LEFT TEXT */}
          <div>
            <span className="block text-xs tracking-[0.4em] text-gray-400 mb-6">
              HONG KONG · REAL ESTATE
            </span>

            <h2 className="text-[clamp(3.5rem,6vw,6rem)] font-semibold leading-[0.95]">
              Built <br />
              for the <br />
              <span className="text-white/30 italic">future</span>
            </h2>

            <p className="mt-10 max-w-xl text-gray-400 text-lg leading-relaxed">
              A cinematic exploration of luxury real estate inspired by Hong
              Kong’s vertical architecture — where design, motion and space
              merge into one experience.
            </p>
          </div>

          {/* RIGHT METRICS */}
          <div className="grid grid-cols-2 gap-12 text-white">
            {[
              { num: "120+", label: "Luxury Floors" },
              { num: "360°", label: "City View" },
              { num: "24/7", label: "Smart Living" },
              { num: "5★", label: "Elite Lifestyle" },
            ].map((item, i) => (
              <div key={i} className="border-l border-white/10 pl-6">
                <div className="text-4xl font-semibold">{item.num}</div>
                <div className="mt-2 text-sm tracking-wider text-gray-400">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
