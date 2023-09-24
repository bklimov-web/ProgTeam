import { prisma } from "app/db";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { name } = body;

    const newProject = await prisma.project.create({
      data: {
        name: "Test",
      },
    });

    return NextResponse.json(newProject);
  } catch (err) {
    return NextResponse.json({ message: "POST Error", err }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const projects = await prisma.project.findMany({});

    return NextResponse.json(projects);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
};
