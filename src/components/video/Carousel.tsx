"use client";
import React, { useState, useEffect } from 'react';
import { PrismaClient, Video } from '@prisma/client';
import VideoCard from '../shared/VideoCard'; // Assuming the path is correct

const prisma = new PrismaClient();

const SimpleCarousel = () => {
    const [video, setVideo] = useState<Video | null>(null);

    useEffect(() => {
        const fetchVideo = async () => {
            try {
                const video = await prisma.video.findFirst();
                setVideo(video);
            } catch (error) {
                console.error('Error fetching video:', error);
            }
        };

        fetchVideo();
    }, []);

    return (
        <div className="w-full h-screen overflow-hidden relative"> {/* Full screen container */}
            <div className="flex justify-center items-center h-full"> {/* Center content */}
                {video ? (
                    <div className="w-full md:w-3/4 lg:w-1/2" >
                        <VideoCard video={video} isVertical={false} />

                    </div>
                ) : (
                    <p>Loading video...</p>
                )}
            </div>
        </div>
    );
};

export default SimpleCarousel;
