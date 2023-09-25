"use client";

import { Project } from "@prisma/client";
import { XSquare } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

type Props = {
  projects: Project[];
  onDelete: (id: number) => void;
};

const ProjectsSection: FC<Props> = ({ projects, onDelete }) => {
  const handleDelete = (id: number) => {
    onDelete(id);
  };

  return (
    <section className="flex items-center justify-center gap-[20px]">
      {projects.map(({ name, id }) => {
        return (
          <div key={id} className="relative cursor-pointer">
            <XSquare
              onClick={() => handleDelete(id)}
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
