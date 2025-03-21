// import React from 'react'
import "./Header.css";
import Nav from "../nav/Nav";
import Links from "../links/Links";
import { motion } from "framer-motion";
import pin from "../../assets/images/emoji/pin.png";
import mail from "../../assets/images/emoji/envelope.png";

function Header() {
  return (
    <header className="lg:w-1/2 lg:max-h-screen lg:flex lg:flex-col lg:py-[100px] lg:justify-between lg:sticky lg:top-0">
      <div>
        <h1 className="font-sans font-bold">
          Hello, I<span>&apos;</span>m Dale.
          <motion.span
            className="inline-block ml-2 align-center hand size-9"
            initial={{ rotate: 0 }}
            animate={{
              rotate: [0, 20, -20, 20, -20, 0],
            }}
            whileHover={{
              rotate: [0, 15, -15, 15, -15, 0],
            }}
            transition={{
              duration: 0.9,
              ease: "easeInOut",
            }}
          />
        </h1>
        <h2 className="mt-1 font-sans font-medium tracking-wider title text-slate-300">
          Front-End Developer
        </h2>
        <p className="flex items-center mt-5 font-sans font-medium tracking-wider">
          <img className="mr-1.5 size-5" src={pin} alt="Pin emoji" />
          Philippines
        </p>

        <a
          href="mailto:porciuncula.randale@gmail.com"
          className="flex items-center font-sans font-medium tracking-wider underline decoration-slate-50 decoration-solid decoration-2 underline-offset-2"
        >
          <img className="mr-1.5 size-5" src={mail} alt="Envelope Emoji" />
          porciuncula.randale@gmail.com
        </a>
        <Nav />
      </div>
      <Links />
    </header>
  );
}

export default Header;
