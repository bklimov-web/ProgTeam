import Link from "next/link";

async function getProjects() {
  const res = await fetch("http://localhost:3000/api/projects", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const HomePage = async () => {
  const projects = await getProjects();

  return (
    <div className="flex items-center justify-center gap-[20px] mt-[200px]">
      {projects.map(({ name, id }) => (
        <Link
          key={id}
          className="flex justify-center items-center w-[100px] h-[100px] bg-blue-200"
          href={`project/${id}`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default HomePage;
