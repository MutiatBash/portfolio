import { projects } from "../data";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNairaSign } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <section className="flex flex-col gap-10 py-4 lg:py-14" id="projects">
      <div className="px-4 pt-4 md:px-10 lg:px-16">
        <h3 className="font-semibold text-2xl lg:text-4xl">Projects</h3>
        <div className="grid py-8 md:grid-cols-3 md:gap-12 gap-8 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-16 ">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col  gap-3  border-[0.5px] rounded-xl h-full  "
            >
              <div className="w-full">
                {/* <img
                  src={project.src}
                  className="w-[100%] h-[250px] rounded-lg object-cover"
                /> */}
              </div>
              <div className="p-4 bg-white rounded-tr flex flex-col gap-1 w-full flex-1 justify-between">
                <h3 className="font-semibold text-lg md:text-xl lg:text-xl">
                  {project.title}
                </h3>
                <p className="mb-2">{project.details}</p>
                <div className="flex flex-row items-center justify-between py-2 flex-1 align-self-end">
                  <Link className="font-semibold  text-slate-900">View</Link>
                </div>
                {/* <div> */}
                <ul className="flex flex-row gap-3  bg-red-400">
                  {projects.techStack?.map((project, index) => (
                    <li key={index} className="rounded-full p-2 bg-blue-600">
                      {project}
                    </li>
                  ))}
                </ul>
                {/* </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
