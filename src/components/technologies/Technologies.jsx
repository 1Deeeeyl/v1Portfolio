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

function Technologies() {
  return (
    <ul className="flex flex-col gap-5 lg:flex-row lg:flex-wrap">
      <ToolsUsed
        title={"Sheehsable"}
        description={"Styling Language"}
        svg={<CssLogo />}
      />
    </ul>
  );
}

export default Technologies;
