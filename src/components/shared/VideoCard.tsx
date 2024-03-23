import Image from "next/image";
import Link from "next/link";
import { Video } from "@prisma/client";

interface VideoCardProps {
  video: Video;
  includeDescription?: boolean;
  isVertical?: boolean;
}

const VideoCard = ({
  video,
  includeDescription = false,
  isVertical = true,
}: VideoCardProps) => {
  return (
    <Link className="hover:opacity-80 w-full" href={`/video/${video.id}`}>
      <div
        className={`flex items-start ${
          isVertical ? "flex-col" : "flex-row"
        } gap-2 cursor-pointer overflow-hidden w-4/5 lg:w-3/4`} // Adjust sizing
      >
        <div className={`relative aspect-video ${isVertical ? "w-full" : "w-2/5"}`}>
          <Image
            className="object-cover rounded-lg"
            src={video.thumbnailSrc}
            alt={`Thumbnail for ${video.title}`}
            layout="fill"
          />
        </div>
        <div className={`flex flex-col ${isVertical ? "w-full" : "w-3/5"}`}>
          <h3 
            className={`line-clamp-2 ${isVertical ? "text-lg" : "text-md leading-5"}`}
          >
            {video.title}
          </h3>
          {includeDescription ? (
            <div className="whitespace-pre-line text-sm text-neutral-400">
              {video.description.split("\n").map((line, index) => {
                return line === "" ? (
                  <br key={index} />
                ) : (
                  <p key={index}>{line}</p>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
