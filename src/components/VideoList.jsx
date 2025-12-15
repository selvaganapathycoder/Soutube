import React from "react";
import { Row, Col } from "react-bootstrap";
import VideoCard from "./VideoCard";
import ShortsCard from "./ShortsCard"; // Placeholder for now, will implement next
import ChannelCard from "./ChannelCard";
import Loader from "./Loader";

const VideoList = ({ videos }) => {
  if (!videos?.length)
    return (
      <h3 className="text-white text-center mt-5">
        No videos found. Check your API key or connection.
      </h3>
    );

  return (
    <Row className="g-4">
      {videos.map((item, idx) => (
        <Col key={idx} xs={12} sm={6} md={4} lg={3}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Col>
      ))}
    </Row>
  );
};

export default VideoList;
