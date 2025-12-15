import React from "react";

// Wait, the project uses react-bootstrap. I should use react-bootstrap.
// Let me re-read VideoCard to see styling conventions.
// Actually, let's stick to the prompt's `VideoList` style which uses `Row` and `Col`.
// I'll use standard CSS or styled components if needed, or just inline styles as seen in other files.

import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import { demoProfilePicture } from "../utils/constants";

const ChannelCard = ({ channelDetail, marginTop }) => (
  <div
    style={{
      boxShadow: "none",
      borderRadius: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%", // Flexible width for grid
      height: "320px",
      margin: "auto",
      marginTop: marginTop,
    }}
  >
    <Link to={`/channel/${channelDetail?.id?.channelId}`}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <img
          src={
            channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={channelDetail?.snippet?.title}
          style={{
            borderRadius: "50%",
            height: "180px",
            width: "180px",
            marginBottom: 2,
            border: "1px solid #e3e3e3",
          }}
        />
        <h6 style={{ fontWeight: "bold", marginTop: "10px" }}>
          {channelDetail?.snippet?.title}{" "}
          <AiFillCheckCircle
            size={14}
            style={{ color: "gray", marginLeft: "5px" }}
          />
        </h6>
        {channelDetail?.statistics?.subscriberCount && (
          <p style={{ fontSize: "15px", fontWeight: 500, color: "gray" }}>
            {parseInt(
              channelDetail?.statistics?.subscriberCount
            ).toLocaleString("en-US")}{" "}
            Subscribers
          </p>
        )}
      </div>
    </Link>
  </div>
);

export default ChannelCard;
