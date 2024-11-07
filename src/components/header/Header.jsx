// import React from 'react'
import "./Header.css";
import Nav from "../nav/Nav";
import Links from "../links/Links";

function Header() {
  return (
    <header>
      <div>
        <h1 className="font-sans font-bold ">
          Hello, I&apos;m Dale.
          <span className="inline-block ml-2 align-center hand size-9"></span>
        </h1>
        <h2 className="mt-1 font-sans font-medium tracking-wider">
          Frontend Developer
        </h2>
        <p className="flex items-center mt-5 font-sans font-medium tracking-wider">
          <img
            className="mr-1.5 size-5"
            src="src\assets\images\emoji\pin.png"
            alt="Pin emoji"
          />
          Philippines
        </p>
        <p className="flex items-center font-sans font-medium tracking-wider">
          <img
            className="mr-1.5 size-5"
            src="src\assets\images\emoji\envelope.png"
            alt="Envelope Emoji"
          />
          porciuncula.randale@gmail.com
        </p>
        <Nav />
      </div>
      <Links />
    </header>
  );
}

export default Header;
