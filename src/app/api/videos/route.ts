import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const searchQuery = request.nextUrl.searchParams.get("searchQuery");

  if (!searchQuery) return NextResponse.error();

  const videos = await prisma.video.findMany({
    where: {
      OR: [
        { title: { contains: searchQuery } }, 
        { description: { contains: searchQuery } },
      ],
    },
    select: {  // Customize what fields you want returned 
      id: true,
      title: true,
      description: true,
      createdAt: true,
      thumbnailSrc: true,
      videoSrc: true
    } 
  });

  return NextResponse.json(videos);
}

export async function POST(request: Request) {

  const { id, title, description, videoSrc, thumbnailSrc } = await request.json();

  const video = await prisma.video.create({
      data: {
          title,
          description,
          videoSrc,
          thumbnailSrc,
          id,
      },
  });

  return NextResponse.json(video);
}
