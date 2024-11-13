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
          I<span>&apos;</span>m a 23-year-old former UI/UX designer turned frontend developer, now
          diving into backend development to become a full-stack developer. Away
          from the keyboard, I spend my time learning how to draw, working under
          my car, or taking photos outside.
        </p>
      </section>
      <section>
        <h2 className="font-sans font-bold category mb-[25px]">
          Technologies I Work With
        </h2>
        <Technologies/>
        <p className="font-sans text-[0.8rem] mt-3">I am currently learning <span className="font-bold">Node.JS</span >, <span className="font-bold">Express</span>, and <span className="font-bold">MongoDB</span>.</p>
      </section>
    </section>
  );
}

export default AboutMe;

