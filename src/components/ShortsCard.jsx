import React from "react";
import { Card } from "react-bootstrap";
import ReactPlayer from "react-player";

const ShortsCard = ({ videoId }) => {
  return (
    <div
      style={{
        height: "80vh",
        scrollSnapAlign: "start",
        marginBottom: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "400px",
          height: "100%",
          backgroundColor: "#000",
          border: "none",
        }}
      >
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
            className="react-player"
            controls
            width="100%"
            height="100%"
            playing={false}
          />
        </div>
      </Card>
    </div>
  );
};

export default ShortsCard;
