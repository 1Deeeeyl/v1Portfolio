// import React from 'react'

import ToolsUsed from "../toolsUsed/ToolsUsed";
import {
  CssLogo,
  FigmaLogo,
  GitLogo,
  HtmlLogo,
  JSLogo,
  NextJSLogo,
  ReactLogo,
  TailwindLogo,
} from "../toolsUsed/logoComponent/index.js";

import tech from "../../json/tech.json";

const logoMapping = {
  CssLogo: <CssLogo />,
  FigmaLogo: <FigmaLogo />,
  GitLogo: <GitLogo />,
  HtmlLogo: <HtmlLogo />,
  JSLogo: <JSLogo />,
  NextJSLogo: <NextJSLogo />,
  ReactLogo: <ReactLogo />,
  TailwindLogo: <TailwindLogo />,
};
const accentMapping = {
  React:
    "hover:border-[#58C4DC] hover:shadow-[0_25px_50px_-12px_rgba(88,196,220,0.3)]",
  NextJS:
    "hover:border-[#F8FAFC] hover:shadow-[0_25px_50px_-12px_rgba(248,250,252,0.3)]",
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
            accent={item.accent}
          />
        );
      })}
    </ul>
  );
}

export default Technologies;

// automate list renderer
