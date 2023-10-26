import { ProjectCard } from "entities/project";
import { FC } from "react";

type Props = {
  projects: any[];
  userId: string;
};

const ProjectsSection: FC<Props> = ({ projects, userId }) => {
  return (
    <section className="flex items-center justify-center gap-[20px]">
      {projects.map(({ name, _id }) => {
        const id = _id.toString();
        return <ProjectCard name={name} id={id} userId={userId} />;
      })}
    </section>
  );
};

export default ProjectsSection;
