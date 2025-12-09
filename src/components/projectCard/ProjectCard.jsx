// import React from 'react'

import {
  Express,
  GitHubBtn,
  Monggo,
  Next,
  Tailwind,
  Node,
  Typescript,
  React,
  Vite,
  Framer,
  Supabase
} from "../projectCardElements/ProjectCardElements";

const tagsMapping = {
  Next: <Next />,
  Tailwind: <Tailwind />,
  Monggo: <Monggo />,
  Node: <Node />,
  Express: <Express />,
  Typescript: <Typescript />,
  React: <React />,
  Vite: <Vite />,
  Framer: <Framer />,
  Supabase: <Supabase />,
};

function ProjectCard({
  projectLink,
  image,
  title,
  summary,
  technologies,
  hasButton,
  sourceCode,
  isLiveDemo,
}) {
  return (
    <li className="w-full overflow-hidden border bg-slate-500/10 rounded-xl border-slate-600 backdrop-blur-md pb-[30px] mb-[25px]">
      <a
        href={projectLink}
        className="relative block overflow-hidden group"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="Opens Live Demo"
      >
        <img
          src={image}
          alt="OtoFocus website image"
          className="w-full h-[267px] object-top object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-semibold text-[#25DBFF] transition-opacity duration-300 ease-in-out bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 backdrop-blur-sm">
          {isLiveDemo ? "Live Demo" : "Source Code Only"}
        </div>
      </a>
      <div className="mx-[30px] flex flex-col gap-[15px] mt-[30px]">
        <h3 className="font-sans text-xl font-medium tracking-wide ">
          {title}
        </h3>
        <p className="">{summary}</p>
        <ul className="flex flex-row flex-wrap gap-x-2.5 gap-y-4 mb-4">
          {technologies.map((technology, index) => {
            const TechnologyTag = tagsMapping[technology]; // Get the component by technology name
            return <li key={index}>{TechnologyTag}</li>; // Render the component
          })}
        </ul>
        {hasButton && <GitHubBtn sourceCode={sourceCode} />}
      </div>
    </li>
  );
}

export default ProjectCard;
