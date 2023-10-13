import { FC } from "react";
import ProjectCard from "./project-card";

type Props = {
  projects: any[];
};

const ProjectsSection: FC<Props> = ({ projects }) => {
  return (
    <section className="flex items-center justify-center gap-[20px]">
      {projects.map(({ name, _id }) => {
        const id = _id.toString();
        return <ProjectCard name={name} id={id} />;
      })}
    </section>
  );
};

export default ProjectsSection;
