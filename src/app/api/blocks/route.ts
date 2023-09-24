import { prisma } from "app/db";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const { title, description, subtitle } = body;

    const newBlock = await prisma.block.create({
      data: {
        description: "description",
        title: "TITLE-NEW",
        subtitle: "subtitle",
        projectId: 1,
      },
    });

    return NextResponse.json(newBlock);
  } catch (err) {
    return NextResponse.json({ message: "POST Error", err }, { status: 500 });
  }
};

export const GET = async (request: NextRequest) => {
  try {
    const id = +request.nextUrl.searchParams.get("id");
    const blocks = await prisma.block.findMany({ where: { projectId: id } });

    return NextResponse.json(blocks);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
};
