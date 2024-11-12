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

import tech from '../../json/tech.json'

const logoMapping = {
  CssLogo: <CssLogo />,
  FigmaLogo: <FigmaLogo />,
  GitLogo: <GitLogo />,
  HtmlLogo: <HtmlLogo />,
  JSLogo: <JSLogo />,
  NextJSLogo: <NextJSLogo />,
  ReactLogo: <ReactLogo />,
  TailwindLogo: <TailwindLogo />
};

console.log(tech, logoMapping)

function Technologies() {
  return (
    <ul className="flex flex-col gap-5 lg:flex-row lg:flex-wrap">
      <ToolsUsed
        title={"Sheehsable"}
        description={"Styling Language"}
        svg={<ReactLogo />}
        accent={'#FF6D00'}
      />
    </ul>
  );
}

export default Technologies;


// automate list renderer and hover color fix try shadow