// import React from 'react'
import Technologies from "../Technologies/Technologies";
import "./AboutMe.css"

function AboutMe() {
  return (
    <section>
      <section className="mb-[25px]">
        <h2 className="font-sans font-bold  mb-[25px] category">
          About Me
        </h2>
        <p className="font-sans font-normal leading-relaxed tracking-wider text-slate-300">
          I’m a 23-year-old former UI/UX designer turned frontend developer, now
          diving into backend development to become a full-stack developer. Away
          from the keyboard, I spend my time learning how to draw, working under
          my car, or taking photos outside.
        </p>
      </section>
      <section>
        <h2 className="font-sans font-bold category mb-[25px]">
          Technologies I Work With
        </h2>
        <Technologies></Technologies>
      </section>
    </section>
  );
}

export default AboutMe;

