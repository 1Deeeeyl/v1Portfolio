// import React from 'react'

function Footer() {
  return (
    <footer>
      <p className="font-sans font-light leading-relaxed tracking-wider text-slate-300 text-[13px]">
        Inspired from 
        {" "}<a
          href="https://brittanychiang.com/"
          className="font-bold hover:text-[#25DBFF] transition-all ease-in-out duration-200"
          target="_blank"
          rel="noreferrer noopener"
        >
          Brittany Chiang's Wesbite
        </a>.{" "}
         This website was
        designed in{" "}
        <a
          href="https://www.figma.com/"
          className="font-bold hover:text-[#25DBFF] transition-all ease-in-out duration-200"
          target="_blank"
          rel="noreferrer noopener"
        >
          Figma
        </a>{" "}
        and coded using{" "}
        <a
          href="https://code.visualstudio.com/"
          className="font-bold hover:text-[#25DBFF] transition-all ease-in-out duration-200"
          target="_blank"
          rel="noreferrer noopener"
        >
          Visual Studio Code
        </a>{" "}
        on Windows OS. It was built with{" "}
        <a
          href="https://react.dev/"
          className="font-bold hover:text-[#25DBFF] transition-all ease-in-out duration-200"
          target="_blank"
          rel="noreferrer noopener"
        >
          React
        </a>{" "}
        and{" "}
        <a
          href="https://tailwindcss.com/"
          className="font-bold hover:text-[#25DBFF] transition-all ease-in-out duration-200"
          target="_blank"
          rel="noreferrer noopener"
        >
          Tailwind CSS
        </a>
        , featuring{" "}
        <a
          href="https://fonts.google.com/specimen/DM+Sans"
          className="font-bold hover:text-[#25DBFF] transition-all ease-in-out duration-200"
          target="_blank"
          rel="noreferrer noopener"
        >
          DM Sans
        </a>{" "}
        fonts from Google Fonts. Special thanks to the owners and artists of the
        logos and icons used.
      </p>
    </footer>
  );
}

export default Footer;
