// import React from 'react'
import "./Header.css";
import Nav from "../nav/Nav";
import Links from "../links/Links";

function Header() {
  return (
    <header className="lg:w-1/2 lg:max-h-screen lg:flex lg:flex-col lg:py-24 lg:justify-between lg:sticky lg:top-0">
      <div>
        <h1 className="font-sans font-bold ">
          Hello, I&apos;m Dale.
          <span className="inline-block ml-2 align-center hand size-9"></span>
        </h1>
        <h2 className="mt-1 font-sans font-medium tracking-wider title">
          Front-End Developer
        </h2>
        <p className="flex items-center mt-5 font-sans font-medium tracking-wider">
          <img
            className="mr-1.5 size-5"
            src="src\assets\images\emoji\pin.png"
            alt="Pin emoji"
          />
          Philippines
        </p>

        <a
          href="mailto:porciuncula.randale@gmail.com"
          className="flex items-center font-sans font-medium tracking-wider underline decoration-slate-50 decoration-solid decoration-2 underline-offset-2"
        >
          <img
            className="mr-1.5 size-5"
            src="src\assets\images\emoji\envelope.png"
            alt="Envelope Emoji"
          />
          porciuncula.randale@gmail.com
        </a>
        <Nav />
      </div>
      <Links />
    </header>
  );
}

export default Header;
