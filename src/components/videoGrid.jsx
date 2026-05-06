import VideoCard from "./VideoCard";

const VideoGrid = ({ videos }) => {
  return (
    <div className="grid">
      {videos.map((video, index) => (
        <VideoCard key={index} video={video} />
      ))}
    </div>
  );
};

export default VideoGrid;