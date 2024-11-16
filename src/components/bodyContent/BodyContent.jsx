// import React from 'react'

import AboutMe from "../aboutMe/AboutMe";
import Experience from "../experience/Experience";
import Projects from "../projects/Projects";

function BodyContent() {
  return (
    <main className="flex flex-col gap-[100px] ">
      <AboutMe/>
      <Experience/>
      <Projects/>
    </main>
  );
}

export default BodyContent;
