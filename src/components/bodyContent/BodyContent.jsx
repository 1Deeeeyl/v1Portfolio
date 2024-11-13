// import React from 'react'

import AboutMe from "../aboutMe/AboutMe";
import Experience from "../experience/Experience";

function BodyContent() {
  return (
    <main className="flex flex-col gap-[100px] mt-16 lg:m-0 lg:w-1/2 lg:py-24">
      <AboutMe/>
      <Experience/>
    </main>
  );
}

export default BodyContent;
