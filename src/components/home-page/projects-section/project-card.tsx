"use client";

import { deleteProject } from "lib/actions/project-actions";
import { XSquare } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

type Props = {
  id: string;
  name: string;
};

const ProjectCard: FC<Props> = ({ id, name }) => {
  return (
    <div className="relative cursor-pointer">
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
};

export default ProjectCard;
