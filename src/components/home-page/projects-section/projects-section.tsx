"use client";

import { deleteProject } from "lib/actions/project-actions";
import { XSquare } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

type Props = {
  projects: any[];
};

const ProjectsSection: FC<Props> = ({ projects }) => {
  return (
    <section className="flex items-center justify-center gap-[20px]">
      {projects.map(({ name, _id }) => {
        const id = _id.toString();

        return (
          <div key={id} className="relative cursor-pointer">
            <XSquare
              onClick={() => deleteProject(id)}
              className="absolute right-2 top-2"
            />
            <Link
              className="flex justify-center items-center w-[100px] h-[100px] bg-blue-200"
              href={`project/${id}`}
            >
              {name}
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default ProjectsSection;
