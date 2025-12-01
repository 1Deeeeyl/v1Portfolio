// import React from 'react'
import Technologies from "../technologies/Technologies";
import "./AboutMe.css";
import { Element } from "react-scroll";
function AboutMe() {
  return (
    <Element id="about" className="lg:scroll-mt-[100px]">
      <h2 className="sticky top-0 z-20 w-screen px-6 py-[25px] font-sans font-bold  lg:mb-[25px] category -mx-6 backdrop-blur md:-mx-12 md:px-12  lg:static lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
        About Me
      </h2>

      <section>
        <p className="font-sans font-normal leading-relaxed tracking-wider text-slate-300 mb-[25px]">
          I<span>&apos;</span>m a&nbsp;
          <span className="font-bold hover:text-[#25DBFF] transition-all ease-in-out duration-200">
            former UI/UX designer turned front-end developer
          </span>
          . In my free time, I study back end development to expand my skill set
          and work towards becoming a full-stack developer, capable of handling
          end-to-end solutions.
        </p>

        <p className="font-sans font-normal leading-relaxed tracking-wider text-slate-300 mb-[25px]">
          Away from the keyboard, I like to{" "}
          <span className="font-bold hover:text-[#25DBFF] transition-all ease-in-out duration-200">
            sketch for fun
          </span>
          ,{" "}
          <span className="font-bold hover:text-[#25DBFF] transition-all ease-in-out duration-200">
            tinker with my car
          </span>
          , or{" "}
          <span className="font-bold hover:text-[#25DBFF] transition-all ease-in-out duration-200">
            head outside with my camera
          </span>{" "}
          to capture whatever catches my eye.
        </p>

        <h2 className="font-sans font-bold category mb-[25px]">
          Technologies I Work With
        </h2>
        <Technologies />
        <p className="font-sans text-[0.8rem] mt-3">
          I am currently learning{" "}
          <a
            href="https://nodejs.org/en"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Link to Node.JS"
          >
            <span className="font-bold hover:text-[#25DBFF] transition-all ease-in-out duration-200">
              Node.JS
            </span>
          </a>
          ,{" "}
          <a
            href="https://expressjs.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Link to Express.JS"
          >
            <span className="font-bold hover:text-[#25DBFF] transition-all ease-in-out duration-200">
              Express
            </span>
          </a>
          , and{" "}
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Link to MongoDB"
          >
            <span className="font-bold hover:text-[#25DBFF] transition-all ease-in-out duration-200">
              MongoDB
            </span>
          </a>
          .
        </p>
      </section>
    </Element>
  );
}

export default AboutMe;
