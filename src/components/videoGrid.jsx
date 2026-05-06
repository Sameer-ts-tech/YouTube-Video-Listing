import VideoCard from "./videoCard";

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