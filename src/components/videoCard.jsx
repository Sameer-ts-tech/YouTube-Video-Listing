const VideoCard = ({ video }) => {
  const { snippet, statistics } = video.items;

  return (
    <div className="card">
      <img
        className="thumbnail"
        src={snippet.thumbnails.high.url}
        alt={snippet.title}
      />

      <div className="title">{snippet.title}</div>

      <div className="channel">{snippet.channelTitle}</div>

      <div className="stats">
        {statistics.viewCount} views • {statistics.likeCount} likes
      </div>
    </div>
  );
};

export default VideoCard;