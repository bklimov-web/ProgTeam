import { prisma } from "./db";
import HomePage from "components/HomePage/HomePage";

async function getBlocks() {
  const res = await fetch("http://localhost:3000/api/blocks", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

// async function postBlock() {
//   axios.post("/api/blocks")
// }

export default async function home() {
  // const blocks = await getBlocks();
  // let blocks = await prisma.block.findMany();
  // let projects =
  const getProjects = async () => {
    await prisma.project.findMany({ include: { blocks: true } });
  };

  // await prisma.block.deleteMany({});
  // await prisma.project.deleteMany({});

  // await prisma.project.create({
  //   data: {
  //     name: "Test 2",
  //   },
  // });

  return (
    <main data-auto="home" className="flex min-h-screen flex-col items-center">
      <HomePage />
      {/* {blocks.map(({ description, title, subtitle }) => {
        const content = { description, subtitle, title };
        return <TextBlock content={content} />;
      })} */}
      {/* <Screen createBlock={createNewBlock} /> */}
    </main>
  );
}
