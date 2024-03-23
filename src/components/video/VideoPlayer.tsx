"use client";
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
    videoSrc: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
    return (
        <div className="relative w-full max-w-[1000px] flex justify-center m-auto group bg-black">
            <ReactPlayer
                url={videoSrc}
                controls
                width="100%"
                height="auto"
                style={{ maxWidth: '100%', maxHeight: '100%' }}
                playing={true} // Auto play the video
                volume={0.5} // Set default volume to 50%
                muted={false} // Unmuted by default
            />
        </div>
    );
};

export default VideoPlayer;
