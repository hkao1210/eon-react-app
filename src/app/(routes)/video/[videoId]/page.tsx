"use client";
import ReactPlayer from 'react-player'; 
import { PrismaClient } from "@prisma/client";
import { Video } from "@prisma/client";

// Instantiate PrismaClient outside the component
const prisma = new PrismaClient();

interface VideoPageParams {
  videoId?: string;
}

export default async function VideoPage ({ videoId }: VideoPageParams) {
  if (!videoId) return null;  

  const video = await prisma.video.findUnique({
    where: {
      id: videoId,
    },
    select: {
      videoSrc: true,
    },
  });

  return (
    <div className="container mx-auto pt-8">
      <div className="flex justify-center items-center h-screen">
       Hello
      </div>
    </div>
  );
}
