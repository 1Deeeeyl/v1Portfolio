// import React from 'react'

import AboutMe from "../aboutMe/AboutMe";
import Experience from "../experience/Experience";

function BodyContent() {
  return (
    <main className="flex flex-col gap-[100px]">
      <AboutMe/>
      <Experience/>
    </main>
  );
}

export default BodyContent;
