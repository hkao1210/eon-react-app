import prisma from "@/vendor/db";
import { Video } from "@prisma/client";

interface IncreaseVideoViewCountParams {
    videoId?: string;
}

export default async function increaseVideoViewCount(
    params: IncreaseVideoViewCountParams
): Promise<Video | null> {
    try {
        const { videoId } = params;

        if (!videoId) {
            return null; // Early return if videoId is not provided
        }

        const video = await prisma.video.findUnique({
            where: {
                id: videoId,
            },
        });

        return video;
    } catch (error: any) {
        throw new Error(error);
    }
}