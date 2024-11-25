import { useEffect, useState } from "react";
import { Element } from "react-scroll";
import ProjectCard from "../projectCard/ProjectCard";
import items from "../../json/project.json";


const images = import.meta.glob("/src/assets/images/projects/*.png");

function Projects() {
  const [imagePaths, setImagePaths] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      const loadedImages = {};
      for (const path in images) {
       
        const image = await images[path]();
        loadedImages[path] = image.default;
      }
      setImagePaths(loadedImages);
    };
    
    loadImages();
  }, []);

  return (
    <Element className="lg:scroll-mt-[100px]" id="projects">
      <h2 className="sticky top-0 z-20 w-screen px-6 py-[25px] font-sans font-bold lg:mb-[25px] category -mx-6 backdrop-blur md:-mx-12 md:px-12 lg:static lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0">
        Projects
      </h2>
      <ul className="flex flex-col gap-[25px]">
        {items.map((item, index) => {
          const imagePath = imagePaths[`/src/assets/images/projects/${item.image}`];

          return (
            <ProjectCard
              key={index}
              projectLink={item.projectLink}
              image={imagePath}
              title={item.title}
              summary={item.summary}
              technologies={item.technologies}
              hasButton={item.hasButton}
              sourceCode={item.sourceCode}
              isLiveDemo={item.isLiveDemo}
            />
          );
        })}
      </ul>
    </Element>
  );
}

export default Projects;
