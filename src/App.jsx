import { useEffect, useState } from "react";
import axios from "axios";
import VideoGrid from "./components/VideoGrid";

function App() {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const res = await axios.get(
        "https://api.freeapi.app/api/v1/public/youtube/videos"
      );

      setVideos(res.data.data.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="container">
      <h1>YouTube Video Listing</h1>
      <VideoGrid videos={videos} />
    </div>
  );
}

export default App;