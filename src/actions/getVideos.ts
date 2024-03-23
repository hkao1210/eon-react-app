import prisma from "@/vendor/db";
import { Video } from "@prisma/client";

export default async function getVideos(): Promise<Video[]> {
  try {
    // Optional: Adjust this if you don't want ALL videos
    const videos = await prisma.video.findMany({
      orderBy: [
        { createdAt: 'desc' }, 
      //  Add other sorting criteria if needed 
      ],
    });

    return videos;
  } catch (error: any) {
    throw new Error(error);
  }
}
