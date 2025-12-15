import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { AiFillCheckCircle } from "react-icons/ai"; // Corrected import
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      style={{
        width: "100%",
        backgroundColor: "#1e1e1e",
        border: "none",
        borderRadius: "0",
      }}
    >
      <Link to={videoId ? `/watch/${videoId}` : demoVideoUrl}>
        <Card.Img
          variant="top"
          src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          style={{ width: "100%", height: "180px", objectFit: "cover" }}
        />
      </Link>
      <Card.Body style={{ backgroundColor: "#1e1e1e", height: "106px" }}>
        <Link
          to={videoId ? `/watch/${videoId}` : demoVideoUrl}
          style={{ textDecoration: "none" }}
        >
          <Card.Title
            style={{ color: "#FFF", fontSize: "16px", fontWeight: "bold" }}
          >
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Card.Title>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
          style={{ textDecoration: "none" }}
        >
          <Card.Subtitle
            className="mb-2 text-muted"
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "12px",
              color: "gray",
            }}
          >
            {snippet?.channelTitle || demoChannelTitle}
            <AiFillCheckCircle size={12} color="gray" className="ms-1" />
          </Card.Subtitle>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default VideoCard;
