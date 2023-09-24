import { prisma } from "app/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const projectId = Number(request.nextUrl.searchParams.get("projectId"));

  if (projectId) {
    try {
      console.log(request.nextUrl.searchParams.get("projectId"));
      const newBlock = await prisma.block.create({
        data: {
          description: "Description",
          title: "TITLE",
          subtitle: "Subtitle",
          projectId,
        },
      });

      return NextResponse.json(newBlock);
    } catch (err) {
      return NextResponse.json({ message: "POST Error", err }, { status: 500 });
    }
  }
};

export const GET = async (request: NextRequest) => {
  const projectId = Number(request.nextUrl.searchParams.get("projectId"));

  if (projectId) {
    try {
      const blocks = await prisma.block.findMany({ where: { projectId } });

      return NextResponse.json(blocks);
    } catch (err) {
      return NextResponse.json({ message: "GET Error", err }, { status: 500 });
    }
  }
};
