// import React from 'react'

import ToolsUsed from "../toolsUsed/ToolsUsed";

import tech from "../../json/tech.json";

import {
  CssSVG,FigmaSVG, GitSVG,HtmlSVG,JSSVG,NextJSSVG,ReactSVG,TailwindSVG, TsSVG
} from "../../assets/svg/icon/index.js";

const logoMapping = {
  CssLogo: CssSVG,
  FigmaLogo: FigmaSVG,
  GitLogo: GitSVG,
  HtmlLogo: HtmlSVG,
  NextJSLogo: NextJSSVG,
  JSLogo: JSSVG,
  ReactLogo: ReactSVG,
  TailwindLogo: TailwindSVG,
  TsLogo: TsSVG,
};

const accentMapping = {
  React:
    "hover:border-[#58C4DC] hover:shadow-[0_25px_50px_-12px_rgba(88,196,220,0.3)]",
  'Next.JS':
    "hover:border-[#F8FAFC] hover:shadow-[0_25px_50px_-12px_rgba(248,250,252,0.3)]",
  'Tailwind CSS':
    "hover:border-[#00acc1] hover:shadow-[0_25px_50px_-12px_rgba(0,172,193,0.3)]",
  CSS: "hover:border-[#039BE5] hover:shadow-[0_25px_50px_-12px_rgba(3,155,229,0.3)]",
  HTML: "hover:border-[#FF6D00] hover:shadow-[0_25px_50px_-12px_rgba(255,109,0,0.3)]",
  JavaScript:
    "hover:border-[#ffd600] hover:shadow-[0_25px_50px_-12px_rgba(255,214,0,0.3)]",
  Figma:
    "hover:border-[#66bb6a] hover:shadow-[0_25px_50px_-12px_rgba(102,187,106,0.3)]",
  Git: "hover:border-[#F4511E] hover:shadow-[0_25px_50px_-12px_rgba(244,81,30,0.3)]",
  'Typescript': "hover:border-[#1976d2] hover:shadow-[0_25px_50px_-12px_rgba(25,118,210,0.3)]",
};

function Technologies() {
  return (
    <ul className="flex flex-col gap-5 lg:flex-row lg:flex-wrap">
      {tech.map((item, index) => {
        return (
          <ToolsUsed
            key={index}
            title={item.title}
            description={item.description}
            logo={logoMapping[item.logo]}
            accent={accentMapping[item.title]}
          />
        );
      })}
    </ul>
  );
}

export default Technologies;
