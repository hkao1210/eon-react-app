import getVideos from "@/actions/getVideos"; // Updated import path
import VideoCard from "@/components/shared/VideoCard";

export default async function Home() {
  const videos = await getVideos(); // Use the updated function
  
  return (
    <div className="mt-16 mx-12 sm:mx-24 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {videos
        ? videos.map((video) => {
          return (
            <VideoCard
              key={video.id}
              video={video}
            />
          );
        })
        : "No videos found"
      }
    </div>
  );
}
