// import React from 'react'
import Technologies from "../technologies/Technologies";
import "./AboutMe.css";
import { Element } from 'react-scroll';
function AboutMe() {
  return (
    <Element id="about" className="lg:scroll-mt-[100px]">
      <h2 className="sticky top-0 z-20 w-screen px-6 py-[25px] font-sans font-bold  lg:mb-[25px] category -mx-6 backdrop-blur md:-mx-12 md:px-12  lg:static lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
        About Me
      </h2>
     

      <section>
        <p className="font-sans font-normal leading-relaxed tracking-wider text-slate-300 mb-[25px]">
          I<span>&apos;</span>m a 23-year-old <span className="font-bold hover:text-[#25DBFF] transition-all ease-in-out duration-200">former UI/UX designer turned
          frontend developer</span>, now diving into backend development to become a
          full-stack developer. Away from the keyboard, I spend my time learning
          how to draw, working under my car, or taking photos outside.
        </p>

        <h2 className="font-sans font-bold category mb-[25px]">
          Technologies I Work With
        </h2>
        <Technologies />
        <p className="font-sans text-[0.8rem] mt-3">
          I am currently learning <span className="font-bold">Node.JS</span>,{" "}
          <span className="font-bold">Express</span>, and{" "}
          <span className="font-bold">MongoDB</span>.
        </p>
      </section>
    </Element>
  );
}

export default AboutMe;
