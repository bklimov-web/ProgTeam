import { prisma } from "app/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const { name } = await request.json();

    const newProject = await prisma.project.create({
      data: {
        name,
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
