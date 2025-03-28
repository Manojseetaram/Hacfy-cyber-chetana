

import * as React from "react";
import "../styles/colors.css";

export function HeroSection() {
  return (
    <header className="relative w-full h-screen overflow-hidden flex items-center justify-start px-6 md:px-20">
      
     
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

   
      <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-t from-[whitesmoke] to-transparent"></div>

   
      <div className="relative z-10 flex flex-col gap-y-6 max-w-3xl text-left text-white">
        <h1 className="text-6xl md:text-7xl font-extrabold">
          <span style={{ color: "var(--primary-orange)" }}>Awareness</span> Today,
          <br />
          <span style={{ color: "var(--primary-orange)" }}>Security</span> Tomorrow
      .
        </h1>
        <p className="text-lg md:text-2xl font-medium">
          Stay ahead of cyber threats with cutting-edge security solutions and expert guidance.
        </p>
      </div>
    </header>
  );
}
