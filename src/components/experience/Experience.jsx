// import React from 'react'

import Jobs from "../jobs/Jobs";
import items from "../../json/experience.json";

function Experience() {
  return (
    
      <section className="lg:scroll-mt-[100px]" id="experience">
        <h2 className="font-sans font-bold  mb-[25px] category">Experiences</h2>
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
      </section>
    
  );
}

export default Experience;
