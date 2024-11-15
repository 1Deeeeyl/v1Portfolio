// import React from 'react'
import otoFocusImg from "../../assets/images/projects/OtoFocus.png";

function Projects() {
  return (
    <section className="mb-[25px]">
      <h2 className="font-sans font-bold  mb-[25px] category">Experience</h2>
      <ul className="flex flex-col gap-[25px]">
        <li className="w-full overflow-hidden border bg-slate-500/10 rounded-xl border-slate-600 backdrop-blur-md">
          <img
            src={otoFocusImg}
            alt="OtoFocus website image"
            className="w-full h-[267px] object-top object-cover"
          />
          <div className="mx-[30px] flex flex-col gap-[10px] mt-5">
            <h3 className="font-sans text-xl font-medium tracking-wide ">
              OtoFocus
            </h3>
            <p className="">
              My personal photography portfolio website showcases my car
              photography, featuring a collection of my best shots from various
              events.
            </p>
            <ul className="flex flex-row flex-wrap gap-x-2.5 gap-y-4">
              <li className="bg-slate-50/15 text-slate-50 px-[15px] py-[5px] rounded-full border border-slate-50">Next.JS</li>
              <li className="bg-slate-50/15 text-slate-50 px-[15px] py-[5px] rounded-full border border-slate-50">Next.JS</li>
              
            </ul>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Projects;
