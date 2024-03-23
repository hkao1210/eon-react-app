import prisma from "@/vendor/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const searchQuery = request.nextUrl.searchParams.get("searchQuery");
    console.log('searchQuery:', searchQuery);
    if (!searchQuery) return NextResponse.error();

    const videos = await prisma.video.aggregateRaw({
        pipeline: [
            {
                $search: {
                    index: "default",
                    text: {
                        query: searchQuery,
                        path: {
                            wildcard: "*",
                        },
                    },
                },
            },
            {
                $project: {
                    _id: 0,
                    id: { $toString: "$_id" },
                    title: 1,
                    description: 1,
                    createdAt: { $dateToString: { date: "$createdAt" } },
                    thumbnailSrc: 1,
                },
            },
        ],
    });

    return NextResponse.json(videos);
}

export async function POST(request: Request) {

    const { id, title, description, videoSrc, thumbnailSrc } =
        await request.json();

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