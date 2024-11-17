// import React from 'react'

import Jobs from "../jobs/Jobs";
import items from "../../json/experience.json";
import { Element } from 'react-scroll';

function Experience() {
  return (
    <Element className="lg:scroll-mt-[100px]" id="experience">
      <h2 className="sticky top-0 z-20 w-screen px-6 py-[25px] font-sans font-bold  lg:mb-[25px] category -mx-6 backdrop-blur md:-mx-12 md:px-12  lg:static lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
        Experiences
      </h2>
      <ul className="flex flex-col gap-[25px]">
        {items.map((item, index) => {
          return (
            <Jobs
              key={index}
              position={item.position}
              company={item.company}
              date={item.date}
              description={item.description}
            />
          );
        })}
      </ul>
    </Element>
  );
}

export default Experience;
